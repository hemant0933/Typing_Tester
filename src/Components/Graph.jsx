import React from 'react';
import { Chart as ChartJS,
    CategoryScale,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';


ChartJS.register(
    CategoryScale,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
);


const Graph = ({graphData}) => {

    const {theme} = useTheme();

  return (
    <>
      <Line
       data={{
        labels: graphData.map(i=>i[0]),
        datasets:[
            {
                data:graphData.map(i=>i[1]),
                label:'wpm',
                borderColor:theme.textColor,
            },
         
        ]
       }}
      />
    </>
  );
}

export default Graph;
