import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import useGlobalStorage
    from '../Helpers/useGlobalStorage';
const Header = () => {

    const useStorage = useGlobalStorage({
        storageOptions: { name: 'test-db' }
    });

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [authToken, setAuthToken] = useStorage('Invalid');
    const handleLogout = () => {
        setAuthToken('Invalid');
    }

    return (
        <div>
            <div className="awesome">
                <header className="main-header">
                    <div className="color-line"> </div>
                    <a asp-controller="Home" asp-action="Index" className="logo">
                        <span className="logo-mini">
                            SB
                        </span>

                        <span className="logo-lg">
                            SB Employee Portal                        </span>
                    </a>

                    <nav className="navbar navbar-static-top" role="navigation">

                        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>

                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="../resources/dist/img/emp.png" className="user-image" alt="User Image" />
                                        <span className="hidden-xs margin-r-5">Super Admin</span>
                                        <i className="fa fa-caret-down" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="../resources/dist/img/emp.png" width={160} height={160} className="img-circle" alt="User Image" />
                                            <p>
                                                Super Admin
                                                <small>{date}</small>
                                            </p>
                                        </li>
                                        <li className="user-footer">
                                            <div className="pull-left" style={{}}>

                                                <a href='/profile' className="btn bg-black btn-flat"><i className="fa fa-users" /> My Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a onClick={handleLogout} className="btn bg-red btn-flat"><i className="fa fa-power-off" /> Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;
