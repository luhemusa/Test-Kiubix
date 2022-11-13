import { AreaChart, Area, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Areachart = ({ data }) => {
    return (
        <>
            <div className="chart">
            <ResponsiveContainer width="95%" height={500}>
                <AreaChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Branch" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="valor" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default Areachart
