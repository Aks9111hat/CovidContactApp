import { useQuery } from 'react-query';

interface WorldwideData {
    updated: number;
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
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
    affectedCountries: number;
}

export const useFetchWorldwideData = () => {
    return useQuery<WorldwideData>('worldwideData', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        if (!response.ok) {
            throw new Error('Failed to fetch worldwide data');
        }
        return response.json();
    });
};
