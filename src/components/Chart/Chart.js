import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  const values = props.dataPoints.map(dp => dp.value);
  const max = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map(dp => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={max}
          label={dp.label}
        />
      ))}
    </div>
  );
}

export default Chart;
