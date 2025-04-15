
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { APP_NAME } from '@/constants/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import CityCard from '@/components/CityCard';
import { cities } from '@/constants/cities';
import Weather from '@/components/Weather';
import SunriseSunset from '@/components/SunriseSunset';

const CountryPage = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const [country, setCountry] = useState<string>('');
  const [citiesInCountry, setCitiesInCountry] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (countrySlug) {
      // Clean the slug and convert to proper country name
      const cleanSlug = countrySlug.replace('.html', '');
      const formattedCountry = cleanSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      setCountry(formattedCountry);

      // Find cities in this country
      const matchedCities = cities.filter(
        city => city.Country && city.Country.toLowerCase() === formattedCountry.toLowerCase()
      );

      if (matchedCities.length > 0) {
        setCitiesInCountry(matchedCities);
      } else {
        toast({
          title: "Country not found",
          description: "We couldn't find cities for this country in our database.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }
  }, [countrySlug, toast]);

  if (loading) {
    return <Layout><div className="container mx-auto px-4 py-8">Loading...</div></Layout>;
  }

  if (!country || citiesInCountry.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
          <p className="text-lg mb-8">Sorry, we couldn't find information for the requested country.</p>
          <Button asChild>
            <Link to="/world-clock.html">Back to World Clock</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Time in {country} | {APP_NAME}</title>
        <meta name="description" content={`Current accurate time in cities of ${country}. Local time, time zone information.`} />
        <meta property="og:title" content={`Time in ${country} | ${APP_NAME}`} />
        <meta property="og:description" content={`Exact current time in ${country} with time zone information`} />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Current Time in {country}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            View accurate time for all cities in {country}
          </p>
          {citiesInCountry.length > 0 && (
            <div className="flex justify-center mt-4">
              <Weather city={citiesInCountry[0].name} />
            </div>
          )}
        </div>

        {citiesInCountry.length > 0 && (
          <div className="mb-8">
            <Card className="rounded-xl overflow-hidden elevation-shadow">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Daylight Information</h2>
                <SunriseSunset city={citiesInCountry[0].name} />
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Cities in {country}</h2>
            <Button asChild variant="ghost" size="sm">
              <Link to="/world-clock.html" className="flex items-center gap-2">
                View All Countries <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {citiesInCountry.map((city) => (
              <CityCard 
                key={city.name}
                name={city.name}
                timezone={city.timeZone}
                country={country}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CountryPage;
