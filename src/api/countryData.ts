import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchCountriesData = () => {
    return useQuery({
        queryKey: ['countries'],
        queryFn: async () => {
            const { data } = await axios.get(
                'https://disease.sh/v3/covid-19/countries',
            )
            return data
        },
    })
}
