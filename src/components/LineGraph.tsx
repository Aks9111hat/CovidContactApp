// LineGraph.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';

interface LineGraphProps {
    data: any;
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
    return (
        <div>
            <h2>Worldwide Cases Fluctuations</h2>
            {/* <Line data={data} /> */}
        </div>
    );
};

export default LineGraph;
