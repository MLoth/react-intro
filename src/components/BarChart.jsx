const BarChart = ({ data, categories }) => {
  const calculatePercentage = (value) => {
    return ((value / data.reduce((acc, curr) => acc + curr, 0)) * 100).toFixed(
      0,
    );
  };

  return (
    <div className="bar-chart">
      <div className="bar-legend">
        {data.map((item, index) => (
          <div className="bar-legend-item" key={index}>
            <span
              className="bar-label"
              style={{
                backgroundColor: getComputedStyle(
                  document.documentElement,
                ).getPropertyValue(`--category-${index + 1}`),
              }}
            ></span>
            <div className="bar-category-group">
              <p className="bar-category-label">{categories[index]}</p>
              <p className="bar-category-percentage">
                {calculatePercentage(item)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bar-data">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${item}%`,
              backgroundColor: getComputedStyle(
                document.documentElement,
              ).getPropertyValue(`--category-${index + 1}`),
              height: "2rem",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BarChart;
