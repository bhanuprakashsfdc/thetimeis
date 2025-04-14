
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cities, cityToSlug } from '@/constants/cities';
import { TIMEIN } from '@/constants/constants';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  id: string;
  type: 'city' | 'country' | 'timezone';
  name: string;
  details?: string;
  path: string;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];
    const uniqueCountries = new Set<string>();
    const uniqueTimezones = new Set<string>();

    // Search cities
    cities.forEach(city => {
      if (city.name.toLowerCase().includes(lowerQuery)) {
        const slug = cityToSlug(city.name);
        results.push({
          id: `city-${city.name}`,
          type: 'city',
          name: city.name,
          details: city.country || 'Unknown',
          path: `/${TIMEIN}${slug}.html`
        });
      }
      
      // Collect unique countries
      if (city.country && city.country.toLowerCase().includes(lowerQuery)) {
        uniqueCountries.add(city.country);
      }
      
      // Collect unique timezones
      if (city.timeZone && city.timeZone.toLowerCase().replace('_', ' ').includes(lowerQuery)) {
        uniqueTimezones.add(city.timeZone);
      }
    });

    // Add countries to results
    uniqueCountries.forEach(country => {
      const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
      results.push({
        id: `country-${country}`,
        type: 'country',
        name: country,
        details: 'Country',
        path: `/country/${countrySlug}.html`
      });
    });
    
    // Add timezones to results
    uniqueTimezones.forEach(timezone => {
      results.push({
        id: `timezone-${timezone}`,
        type: 'timezone',
        name: timezone.replace('_', ' '),
        details: 'Timezone',
        path: '/timezone.html'
      });
    });

    // Limit results for performance
    setSearchResults(results.slice(0, 10));
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    onOpenChange(false);
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <Command>
          <CommandInput 
            placeholder="Search cities, countries, or timezones..." 
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {searchResults.length > 0 && (
              <>
                <CommandGroup heading="Cities">
                  {searchResults
                    .filter(result => result.type === 'city')
                    .map(result => (
                      <CommandItem 
                        key={result.id} 
                        onSelect={() => handleSelect(result)}
                        className="flex justify-between cursor-pointer"
                      >
                        <div>{result.name}</div>
                        <div className="text-muted-foreground text-sm">{result.details}</div>
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Countries">
                  {searchResults
                    .filter(result => result.type === 'country')
                    .map(result => (
                      <CommandItem 
                        key={result.id} 
                        onSelect={() => handleSelect(result)}
                        className="cursor-pointer"
                      >
                        {result.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
                
                <CommandGroup heading="Timezones">
                  {searchResults
                    .filter(result => result.type === 'timezone')
                    .map(result => (
                      <CommandItem 
                        key={result.id} 
                        onSelect={() => handleSelect(result)}
                        className="cursor-pointer"
                      >
                        {result.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
