
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,  
  LineController,  
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register everything once globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  LineController,  
  Title,
  Tooltip,
  Legend
);
