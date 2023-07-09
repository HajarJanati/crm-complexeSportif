import React from "react";
import Chart, { Props } from "react-apexcharts";

function ApexChart({
                       NoToolbar,
                       options,
                       ...rest
                   }: Props & { NoToolbar?: boolean }) {
    return (
        <div className="">
            <Chart
                options={{
                    grid: {
                        show: false,
                    },
                    stroke: {
                        width: 2,
                    },
                    chart: {
                        ...(NoToolbar && {
                            toolbar: {
                                show: false,
                            },
                        }),
                    },
                    ...options,
                }}
                {...rest}
            />
        </div>
    );
}

export default ApexChart;
