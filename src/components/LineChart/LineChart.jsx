
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: 'John', mathMark: 85, physicsMark: 90, chemistryMark: 78 },
        { id: 2, name: 'Sarah', mathMark: 92, physicsMark: 88, chemistryMark: 95 },
        { id: 3, name: 'Michael', mathMark: 78, physicsMark: 82, chemistryMark: 75 },
        { id: 4, name: 'Emily', mathMark: 89, physicsMark: 91, chemistryMark: 84 },
        { id: 5, name: 'David', mathMark: 76, physicsMark: 85, chemistryMark: 79 },
        { id: 6, name: 'Jessica', mathMark: 95, physicsMark: 96, chemistryMark: 92 },
        { id: 7, name: 'Matthew', mathMark: 82, physicsMark: 87, chemistryMark: 80 },
        { id: 8, name: 'Ashley', mathMark: 91, physicsMark: 89, chemistryMark: 93 },
        { id: 9, name: 'Christopher', mathMark: 79, physicsMark: 83, chemistryMark: 77 },
        { id: 10, name: 'Jennifer', mathMark: 88, physicsMark: 90, chemistryMark: 85 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}
            >
                <XAxis dataKey='name'/>
                <YAxis></YAxis>
            <Line dataKey="mathMark" stroke='red'></Line>
            <Line dataKey={"physicsMark"}  stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;