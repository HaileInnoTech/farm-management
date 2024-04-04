import LineChart from "../charts/LineChart";
import LineChart2 from "../charts/LineChart2";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import Table1 from "../Tables/Table1";
import Table2 from "../Tables/Table2";

function DashboardLayout() {
  return (
    <>
      <div className="container m-auto grid  md:grid-cols-6 grid-cols-1 gap-4 p-3 ">
        <div className="tile  md:col-span-full h-96 border rounded-3xl bg-white shadow-xl p-5">
          <LineChart />
        </div>
        <div className="tile  md:col-span-2  h-96 border rounded-3xl bg-white shadow-xl p-5">
          <LineChart2 />
        </div>
        <div className="tile  md:col-span-2  h-96 border rounded-3xl bg-white shadow-xl p-5">
          <BarChart />{" "}
        </div>
        <div className="tile md:col-span-2  h-96 flex justify-center border rounded-3xl bg-white shadow-xl p-5">
          <PieChart />
        </div>
      </div>
      <div className="container m-auto grid  md:grid-cols-2 grid-cols-1 gap-4 p-6 ">
        <div className="tile md:col-span-1 border rounded-3xl bg-white shadow-xl ">
          <Table1 />
        </div>
        <div className="tile  md:col-span-1  border rounded-3xl bg-white shadow-xl ">
          <Table2 />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
