import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const studentsData = [
        { id: 1, name: "John", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Alice", math: 75, physics: 82, chemistry: 88 },
        { id: 3, name: "Michael", math: 90, physics: 85, chemistry: 90 },
        { id: 4, name: "Emily", math: 70, physics: 65, chemistry: 78 },
        { id: 5, name: "David", math: 80, physics: 70, chemistry: 85 },
        { id: 6, name: "Sophia", math: 95, physics: 88, chemistry: 94 },
        { id: 7, name: "Olivia", math: 65, physics: 60, chemistry: 72 },
        { id: 8, name: "Daniel", math: 85, physics: 80, chemistry: 90 },
        { id: 9, name: "Emma", math: 88, physics: 82, chemistry: 85 },
        { id: 10, name: "James", math: 72, physics: 68, chemistry: 75 }
    ];



    return (
        <div className="m-16">
            <LChart width={500} height={400} data={studentsData}>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='blue'></Line>
                <Line dataKey={'chemistry'} stroke='gray'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;