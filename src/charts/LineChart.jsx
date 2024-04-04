import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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

export default function LineChart() {
  const socket = io.connect("https://testbe-mongodb.onrender.com");
  const [temp, setTemp] = useState([]);
  const [humid, setHumid] = useState([]);
  const [timeStamp, setTimeStamp] = useState([]);
  const [isConnected, setIsConnected] = useState(socket.connected);

  //Run once when the component mounts
  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from server");
    });

    socket.on("initData", (data) => {
      data.forEach((element) => {
        setTemp((prev) => [...prev, element.temperature]);
        setHumid((prev) => [...prev, element.humidity]);
        setTimeStamp((prev) => [
          ...prev,
          element.timestamp.replace("T", " ").slice(0, 19),
        ]);
      });
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("initData");
    };
  }, []);

  if (!isConnected) {
    return (
      <div className="w-full h-full grid grid-cols-1 gap-0 overflow-hidden  ">
        <div className="col-span-full flex justify-center ">
          <iframe
            src="https://lottie.host/embed/a255555e-2db8-4ab6-88c4-d4ec0b084919/yfFFIcT5xA.json"
            className="w-1/2"
          ></iframe>
        </div>

        <div className="col-span-full flex justify-center">...Connecting</div>
      </div>
    );
  } else {
    socket.on("updateData", (data) => {
      setTemp([]);
      setHumid([]);
      setTimeStamp([]);
      data.forEach((element) => {
        setTemp((prev) => [...prev, element.temperature]);
        setHumid((prev) => [...prev, element.humidity]);
        setTimeStamp((prev) => [
          ...prev,
          element.timestamp.replace("T", " ").slice(0, 19),
        ]);
      });
    });
  }
  let delayed;
  const options = {
    maintainAspectRatio: false,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  const labels = timeStamp;

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
      },
      {
        label: "Humidity",
        data: humid,
        fill: true,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.2,
      },
    ],
  };

  return <Line data={data} options={options} />;
}
