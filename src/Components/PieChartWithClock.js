import { PieChart, Cell, Pie } from "recharts";
import Clock from './Clock'
import { data } from '../utils/constants'

const PieChartWithClock = () => {
    return (
      <div style={{ position: "relative", width: "225px", height: "225px" }}>
        <PieChart
          width={225}
          height={225}
          style={{ position: "absolute", top: "0", left: "0", }}
        >
          <Pie 
            data={[{ value: 100 }]} 
            dataKey="value" fill="#D8D8D8"
            innerRadius={75} outerRadius={95} 
            isAnimationActive={false} 
            cx={112.5} // Center the pie chart
            cy={112.5} // Center the pie chart
          />
          <Pie
            startAngle={90}
            endAngle={-450}
            data={data}
            cx={112.5} // Center the pie chart
            cy={112.5} // Center the pie chart
            innerRadius={75}
            outerRadius={95}
            fill="#D8D8D8"
            dataKey="value"
          >
            {data.map((entry, index) => {
              return (
                <Cell 
                  stroke={entry.color} 
                  {...( entry.name === "Active" && {cornerRadius:20})} 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                />
              )
            })}
          </Pie>
        </PieChart>
        <div
          style={{
            position: "absolute",
            top: "42px", // Adjust the top value to push the clock inwards vertically
            left: "42px" // Adjust the left value to push the clock inwards horizontally
          }}
        >
          <Clock />
        </div>
      </div>
    )
  }


  export default PieChartWithClock