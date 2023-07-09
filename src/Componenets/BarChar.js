import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockData";

const BarChart = () => {


    return (
        <ResponsiveBar
            data={data}
            keys={[
                'Olimpico',
                'SanSiro',
                'Old Trafold',
                'Bernabeu',
                'CampNou',

            ]}
            indexBy="terrain"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.35}
            innerPadding={1}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}


            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 20,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Nbr des réservation',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel=""
            barAriaLabel={e=>e.id+": "+e.formattedValue+" in terrain: "+e.indexValue}
        />
    );
};

export default BarChart;