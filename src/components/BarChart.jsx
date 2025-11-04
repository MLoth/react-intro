const BarChart = ({ data }) => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33FF", "#33FFFF"];

  return (
    <div className="bar-chart">
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            width: `${item}%`,
            backgroundColor: colors[index % colors.length],
            height: "1rem",
          }}
        />
      ))}
    </div>
  );
};

export default BarChart;
