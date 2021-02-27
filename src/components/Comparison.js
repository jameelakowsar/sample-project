import React from 'react';
import { VerticalBarChart } from '@uifabric/charting';

const Comparison = ({chartItems}) => {    
    return(
        <div className='chart-container'>
            <div className='chart-header'>
                Vertical bar chart
            </div>   
            <div className='chart-base'>
                {chartItems && 
                    <VerticalBarChart 
                        data={chartItems}
                        hideLegend
                    />
                }
            </div>
        </div>
    )
}
export default Comparison
