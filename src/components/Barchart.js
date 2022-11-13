import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = ({ data }) => {
    return (
        <>
            <div className="chart">
            <ResponsiveContainer width="95%" height={500}>
                <BarChart
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
                    <Bar dataKey="valor" fill="#8884d8" />
                    
                </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default Barchart
