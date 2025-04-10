
/**
 * Cities database with timezone information
 */
export const cities = [
  { name: "New York", timezone: "America/New_York", country: "United States", region: "North America" },
  { name: "London", timezone: "Europe/London", country: "United Kingdom", region: "Europe" },
  { name: "Tokyo", timezone: "Asia/Tokyo", country: "Japan", region: "Asia" },
  { name: "Paris", timezone: "Europe/Paris", country: "France", region: "Europe" },
  { name: "Sydney", timezone: "Australia/Sydney", country: "Australia", region: "Oceania" },
  { name: "Dubai", timezone: "Asia/Dubai", country: "United Arab Emirates", region: "Asia" },
  { name: "Singapore", timezone: "Asia/Singapore", country: "Singapore", region: "Asia" },
  { name: "Los Angeles", timezone: "America/Los_Angeles", country: "United States", region: "North America" },
  { name: "Berlin", timezone: "Europe/Berlin", country: "Germany", region: "Europe" },
  { name: "Hong Kong", timezone: "Asia/Hong_Kong", country: "China", region: "Asia" },
  { name: "Rome", timezone: "Europe/Rome", country: "Italy", region: "Europe" },
  { name: "Mumbai", timezone: "Asia/Kolkata", country: "India", region: "Asia" },
  { name: "Rio de Janeiro", timezone: "America/Sao_Paulo", country: "Brazil", region: "South America" },
  { name: "Cairo", timezone: "Africa/Cairo", country: "Egypt", region: "Africa" },
  { name: "Toronto", timezone: "America/Toronto", country: "Canada", region: "North America" },
  { name: "Seoul", timezone: "Asia/Seoul", country: "South Korea", region: "Asia" },
  { name: "Bangkok", timezone: "Asia/Bangkok", country: "Thailand", region: "Asia" },
  { name: "Mexico City", timezone: "America/Mexico_City", country: "Mexico", region: "North America" },
  { name: "Amsterdam", timezone: "Europe/Amsterdam", country: "Netherlands", region: "Europe" },
  { name: "Madrid", timezone: "Europe/Madrid", country: "Spain", region: "Europe" }
];

/**
 * Get a list of popular cities
 */
export const getPopularCities = () => {
  return cities.slice(0, 8);
};

/**
 * Get cities by region
 */
export const getCitiesByRegion = (region) => {
  return cities.filter(city => city.region === region);
};

/**
 * Get a city by its URL-friendly name
 */
export const getCityBySlug = (slug) => {
  const normalizedSlug = slug.replace(/[-]/g, ' ').toLowerCase();
  
  return cities.find(city => city.name.toLowerCase() === normalizedSlug);
};

/**
 * Convert city name to URL-friendly slug
 */
export const cityToSlug = (cityName) => {
  return cityName.toLowerCase().replace(/\s+/g, '-');
};

/**
 * Generate a list of all city slugs
 */
export const getAllCitySlugs = () => {
  return cities.map(city => cityToSlug(city.name));
};
