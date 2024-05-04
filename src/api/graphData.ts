import { useQuery } from 'react-query';

interface GraphData {
    cases: Record<string, number>;
}

export const useFetchGraphData = () => {
    return useQuery<GraphData>('graphData', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        if (!response.ok) {
            throw new Error('Failed to fetch graph data');
        }
        const data = await response.json();
        return { cases: data.cases };
    });
};
