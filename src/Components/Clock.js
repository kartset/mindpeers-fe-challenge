const Clock = () => {
    const clockRadius = 50; // Adjust the radius as needed
    const svgSize = 2 * clockRadius * 1.5; // Increase the SVG size
    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    const markingLength = 4; // Adjust the length of the markings for the smaller clock
    const numberingOffset = 10; // Adjust the offset for the numbers for the smaller clock
    const lineLength = 200;
  
    const intersectionLines = [
      {
        x1: centerX - lineLength / 2,
        y1: centerY - lineLength / 2,
        x2: centerX + lineLength / 2,
        y2: centerY + lineLength / 2,
      },
      {
        x1: centerX + lineLength / 2,
        y1: centerY - lineLength / 2,
        x2: centerX - lineLength / 2,
        y2: centerY + lineLength / 2,
      },
    ];
  
  
  
    const createClockDial = () => {
      const markings = [];
      const numbers = [];
  
      for (let i = 0; i < 24; i++) {
        const isBold = [0, 6, 12, 18].includes(i);
        const textColor = isBold ? "black" : "#888"; // Black for 0, 6, 12, 18; Gray for others
        const angle = (i / 24) * 360;
        const angleRad = (angle - 90) * (Math.PI / 180);
        const x1 = centerX + (clockRadius + markingLength + numberingOffset) * Math.cos(angleRad);
        const y1 = centerY + (clockRadius + markingLength + numberingOffset) * Math.sin(angleRad);
        const x2 = centerX + (clockRadius + numberingOffset) * Math.cos(angleRad);
        const y2 = centerY + (clockRadius + numberingOffset) * Math.sin(angleRad);
        const x3 = centerX + (clockRadius) * Math.cos(angleRad);
        const y3 = centerY + (clockRadius) * Math.sin(angleRad);
  
        if(![0, 6, 12, 18].includes(i)) {
          markings.push(
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={textColor}
              key={`marking-${i}`}
            />
          );
        }
  
        if(i%2 === 0 || [0, 6, 12, 18].includes(i)) {
          numbers.push(
            <text
              x={x3}
              y={y3}
              fill={textColor}
              fontWeight={isBold ? "bold" : "normal"}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="10" // Reduce the font size for the smaller clock
              key={`number-${i}`}
            >
              {i}
            </text>
          );
        }
      }
  
      return (
        <g>
          {markings}
          {numbers}
        </g>
      );
    };
  
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={clockRadius}
          fill="white"
          stroke="none"
        />
        {createClockDial()}
        {intersectionLines.map((line, index) => (
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="black"
            strokeDasharray="2"
            key={index}
          />
        ))}
      </svg>
    );
  };


  export default Clock;