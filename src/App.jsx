import "./App.css";

import BarChart from "./components/BarChart";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Card
        title="Hello there"
        children={
          <div className="bar-data">
            <BarChart
              categories={["Category 1", "Category 2", "Category 3"]}
              data={[150, 30, 20]}
            />
          </div>
        }
      />
    </div>
  );
}

export default App;
