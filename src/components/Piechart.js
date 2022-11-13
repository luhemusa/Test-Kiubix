import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Piechart = ({ data }) => {
    return (
        <>
            <div className="chart">
                <ResponsiveContainer width="95%" height={500}>
                    <PieChart width={500} height={500}>
                        <Pie
                            dataKey="valor"
                            startAngle={360}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default Piechart
