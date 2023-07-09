import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../Componenets/Header";
import LineChart from "../../Componenets/LineChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";
import PieChart from "../../Componenets/PieChart";
import BarChar from "../../Componenets/BarChar";
const Bar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [chartType, setChartType] = useState("bar");

    const renderChart = () => {
        switch (chartType) {
            case "bar":
                return <BarChar />;
            case "line":
                return <LineChart />;
            case "pie":
                return <PieChart />;
            default:
                return null;
        }
    };
    return (
      <main className="contents">
          <NavbarHorizental/>
          <MenuVertical/>
          <div className=" py-12 px-5 container mt-5 ">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">

              <div className="flex my-3 flex-col items-center ">

                  <div className="w-full md:w-1/2 " >
                      <label htmlFor="chartType" className="text-gray-700 font-medium">
                          Chart Type
                      </label>
                      <select
                          id="chartType"
                          className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          value={chartType}
                          onChange={(e) => setChartType(e.target.value)}
                      >
                          <option value="bar">Bar</option>
                          <option value="line">Line</option>
                          <option value="pie">Pie</option>
                      </select>
                  </div>
              </div>
                  <div className="flex md:w-1/4 mx-auto  ">
              <DatePicker
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date) => setStartDate(date)}
                  className="rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 w-full"
              />
              <span className="px-4">à</span>
              <DatePicker
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 w-full"
              />
                  </div>
              </div>
      <Box m="5px">
        <Header title="Sondage des résrevation" />
        <Box height="70vh">
            {renderChart()}
        </Box>
      </Box>
          </div>
      </main>

  );
};

export default Bar;