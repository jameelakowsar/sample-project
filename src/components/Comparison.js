import React from 'react';
import { VerticalBarChart } from '@uifabric/charting';

const Comparison = ({chartItems}) => {    
    return(
        <div className='chart-container'>
            <div className='chart-header'>
                THis is chart header
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
