import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // display: false,
      position: "top",
    },
    title: {
      display: true,
      align: "start",
      font: { size: 20 },
      text: "Gráfico não linear",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 15,
    },
  },
};

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const skipped = (ctx, value) =>
  ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) =>
  ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

export const data = {
  labels,
  datasets: [
    {
      label: "volt_pv01",
      data: labels.map((_, index) => {
        if ([3].includes(index)) {
          return null;
        }
        return Math.floor(Math.random() * 15);
      }),
      segment: {
        borderDash: (ctx) => skipped(ctx, [1, 5]),
      },
      spanGaps: true,
      pointRadius: 5,
      borderColor: "#2980b9",
      backgroundColor: "#2980b9",
    },
    {
      label: "Máximo (10)",
      data: labels.map((_, index) => 10),
      pointRadius: 0,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Mínimo (5)",
      data: labels.map((_, index) => 5),
      pointRadius: 0,
      borderColor: "#27ae60",
      backgroundColor: "#27ae60",
    },
  ],
};

function App() {
  return <Line options={options} data={data} />;
}

export default App;
