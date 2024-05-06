import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchWorldData = () => {
    return useQuery({
        queryKey: ['world'],
        queryFn: async () => {
            const { data } = await axios.get(
                'https://disease.sh/v3/covid-19/all',
            )
            return data
        },
    })
}
