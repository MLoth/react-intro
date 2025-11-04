import "./App.css";
import BarChart from "./components/BarChart";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card title="Hello there" children={<BarChart data={[150, 30, 20]} />} />
    </>
  );
}

export default App;
