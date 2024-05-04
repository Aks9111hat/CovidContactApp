import { useQuery } from 'react-query';

interface CountryData {
    updated: number;
    country: string;
    countryInfo: {
        _id: number;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        flag: string;
    };
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}

export const useFetchCountryData = () => {
    return useQuery<CountryData[]>('countryData', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        if (!response.ok) {
            throw new Error('Failed to fetch country-specific data');
        }
        return response.json();
    });
};
