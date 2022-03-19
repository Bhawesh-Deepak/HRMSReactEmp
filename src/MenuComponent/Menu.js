import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Empdashboard from '../BodyComponent/EmpDashboard';
import Leave from '../LeaveComponent/Leave';
import Documents from '../OrganizationComponent/Documents';
import Employee from '../OrganizationComponent/Employee';
import Engange from '../OrganizationComponent/Engange';
import Payslip from '../PaySlipComponent/PaySlip';
import Employeeprofile from '../ProfileComponent/EmployeeProfile';

const Menu = () => {
    return (
        <div>
            <Router>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div>
                            <ul className="sidebar-menu">
                                <li>
                                    <Link to='/leave'><i className='fa fa-building'></i> <span>Leave</span></Link>
                                </li>

                                <li>
                                    <Link to='/payslip'><i className='fa fa-building'></i> <span>PaySlip</span></Link>
                                </li>

                                <li>
                                    <Link to='/document'><i className='fa fa-building'></i> <span>Document</span></Link>
                                </li>

                                <li>
                                    <Link to='/employee'><i className='fa fa-building'></i> <span>Employee</span></Link>
                                </li>

                                <li>
                                    <Link to='/engage'><i className='fa fa-building'></i> <span>Engagement</span></Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                </aside>

                <Routes>
                    <Route exact path='/' element={<Empdashboard />}></Route>
                    <Route path='/leave' element={<Leave />}></Route>
                    <Route path='/payslip' element={<Payslip />}></Route>
                    <Route path='/document' element={<Documents />}></Route>
                    <Route path='/employee' element={<Employee />}></Route>
                    <Route path='/engage' element={<Engange />}></Route>
                    <Route path='/profile' element={<Employeeprofile />}></Route>
                </Routes>


            </Router>


        </div>
    );
}

export default Menu;
