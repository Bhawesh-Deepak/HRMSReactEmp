import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';

const Grossnetchart = () => {
    // const [data, setData] = useState([[]]);

    // useEffect(async () => {
    //     //await NetVsGrossSalary()
    // }, [])

    const Chartdata = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];

    // const NetVsGrossSalary = async () => {
    //     await axios.get("http://122.160.49.247:1026/HRMS/MonthlyEarningAPI/GetNetVsGrossSalary?EmpCode=SQY22335").then(resp => {
    //         debugger;
    //         let graphData = [["Gross Salary", "Month Name", "Net Salary"]];
    //         resp.data.responseData.map(data => {
    //             let graphArray = [];
    //             graphArray.push(data.grossSalary, data.monthsName, data.netSalary)
    //             graphData.push(graphArray);
    //         })
    //         debugger;
    //         setData(graphData);
    //     })
    // }

    const options = {
        chart: {
            title: "Gross Vs Net Salary Detail",
            subtitle: "Employee Gross Vs Net Salary Details:",
        },
    };

    return (
        <div>
            ABSBSBSBSB
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={Chartdata}
                options={options}
            />
        </div>
    );
}

export default Grossnetchart;
