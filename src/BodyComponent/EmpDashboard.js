import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grossnetchart from '../ChartsAndGraphComponent/GrossNetChart';
import Modalcomponent from './ModalComponent';
import { Button } from 'react-bootstrap';



const Empdashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [incentive, setincentive] = useState([]);
    const [netAndGrossSalary, setnetAndGrossSalary] = useState([]);
    const [isLoading, setLoading] = useState(false);


    useEffect(async () => {

        await GetIncentive();
        await NetVsGrossSalary();
    }, [])

    const GetIncentive = async () => {
        setLoading(true)
        await axios.get("http://122.160.49.247:1026/HRMS/DashBoardAPI/GetEmployeeGrossAndPerformanceInsentive?EmpCode=SQY22335&FinancialYear=3").then(resp => {
            setincentive(resp.data.responseData)
            setLoading(false)
        })
    }

    const NetVsGrossSalary = async () => {
        setLoading(true)
        await axios.get("http://122.160.49.247:1026/HRMS/MonthlyEarningAPI/GetNetVsGrossSalary?EmpCode=SQY22335").then(resp => {
            setnetAndGrossSalary(resp.data.responseData)
            setLoading(false)
        })
    }

    return (

        <div className="content-wrapper" style={{ 'min-height': 870 }} >
            <section className='content-fluid'>
                <div className='row'>
                    {
                        isLoading == true ? (<h3>Loading data please wait....</h3>) :
                            (
                                <>
                                    <div className="col-md-6">
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Employee Performance Incentive</h3>
                                            </div>
                                            <div className="box-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 10 }}>#</th>
                                                            <th>Gross Salary</th>
                                                            <th>Month Name</th>
                                                            <th>Incentive Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            incentive.map((data) => (
                                                                <tr>
                                                                    <td>1.</td>
                                                                    <td>{data.grossSalary}</td>
                                                                    <td>
                                                                        {data.monthsName}
                                                                    </td>
                                                                    <td>
                                                                        {data.performanceInsentive}
                                                                    </td>
                                                                </tr>

                                                            ))
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="box">
                                            <div className="box-header">
                                                <h3 className="box-title">Net Vs Gross Salary</h3>
                                            </div>
                                            <div className="box-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>


                                                            <th>Month Name</th>
                                                            <th>Gross Salary</th>
                                                            <th>Net Salary</th>
                                                            <th>Deduction</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            netAndGrossSalary.map((data) => (
                                                                <tr>

                                                                    <td>{data.monthsName}</td>
                                                                    <td>
                                                                        {data.grossSalary}
                                                                    </td>
                                                                    <td>
                                                                        {data.netSalary}
                                                                    </td>
                                                                    <td>
                                                                        {data.grossSalary - data.netSalary}
                                                                    </td>
                                                                </tr>

                                                            ))
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-md-12'>
                                        <div className='col-md-6'>
                                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                                Launch vertically centered modal
                                            </Button>
                                            <Modalcomponent heading="ModalHeading" show={modalShow}
                                                onHide={() => setModalShow(false)}>
                                                This Is Content from Parent
                                            </Modalcomponent>
                                        </div>
                                    </div>
                                </>
                            )
                    }
                </div>
            </section>
        </div>
    );
}

export default Empdashboard;
