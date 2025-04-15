
import React, { useState, useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface PublicHolidaysProps {
  country: string;
  year?: number;
}

interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
}

const PublicHolidays: React.FC<PublicHolidaysProps> = ({
  country,
  year = new Date().getFullYear()
}) => {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Country code mapping (simplified)
  const getCountryCode = (countryName: string): string => {
    const countryMapping: { [key: string]: string } = {
      'United States': 'US',
      'United Kingdom': 'GB',
      'Germany': 'DE',
      'France': 'FR',
      'India': 'IN',
      'Japan': 'JP',
      'Australia': 'AU',
      'Canada': 'CA',
      'China': 'CN',
      'Russia': 'RU',
      'Brazil': 'BR',
      'South Africa': 'ZA',
      'Mexico': 'MX',
      'Spain': 'ES',
      'Italy': 'IT'
      // Add more mappings as needed
    };
    
    return countryMapping[countryName] || 'US'; // Default to US if not found
  };
  
  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const countryCode = getCountryCode(country);
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch holidays. Status: ${response.status}`);
        }
        
        const data = await response.json();
        setHolidays(data);
      } catch (err) {
        console.error('Error fetching holidays:', err);
        setError('Could not load public holidays. The service might be temporarily unavailable.');
        toast({
          title: 'Error loading holidays',
          description: 'Could not retrieve holiday information. Please try again later.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };
    
    if (country) {
      fetchHolidays();
    }
  }, [country, year, toast]);
  
  // Format date to be more readable
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Card className="elevation-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Public Holidays in {country}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-muted-foreground">Loading holidays...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-start gap-2">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && holidays.length === 0 && (
          <p className="text-muted-foreground text-center py-4">
            No public holiday information available for {country}.
          </p>
        )}
        
        {!loading && !error && holidays.length > 0 && (
          <div className="space-y-1">
            {holidays.map((holiday, index) => (
              <div 
                key={index} 
                className="py-2 flex justify-between border-b last:border-0"
              >
                <div>
                  <p className="font-medium">{holiday.localName}</p>
                  {holiday.localName !== holiday.name && (
                    <p className="text-sm text-muted-foreground">{holiday.name}</p>
                  )}
                </div>
                <p className="text-sm font-mono">{formatDate(holiday.date)}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PublicHolidays;
