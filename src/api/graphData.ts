import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchGraphData = () => {
    return useQuery({
        queryKey: ['cases'],
        queryFn: async () => {
            const { data } = await axios.get(
                'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
            )
            return data
        },
    })
}