import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employeeprofile = () => {

    const [empDetails, setempDetails] = useState([]);
    const [name, setName] = useState([]);

    useEffect(async () => {
        await axios.get("http://122.160.49.247:1026/HRMS/EmployeeMaster/EmployeeProfile?Id=3").then(resp => {
            debugger;
            setempDetails(resp.data.responseData);
            setName(resp.data.responseData[0].employeeName.split(" "));

        });

    }, [])



    return (
        <div className="content-wrapper" style={{ 'min-height': 870 }} >

            <section className="content">
                {
                    empDetails.map((data) => (
                        <div className="row">
                            <div className="col-md-3">
                                <div className="box box-primary">
                                    <div className="box-body box-profile">

                                        <img
                                            className="profile-user-img img-responsive img-circle"
                                            src={`https://ui-avatars.com/api/?name=${name[0]}+${name[1]}`}
                                            alt="User profile picture"
                                        />
                                        <h3 className="profile-username text-center">{data.salutation} {data.employeeName}</h3>
                                        <p className="text-muted text-center">{data.departmentName}</p>
                                        <ul className="list-group list-group-unbordered">
                                            <li className="list-group-item">
                                                {data.designationName}
                                            </li>
                                            <li className="list-group-item">
                                                EmpCode: {data.empCode}
                                            </li>
                                            <li className="list-group-item">
                                                Status: {data.employementStatus}
                                            </li>
                                            <li className="list-group-item">
                                                Email: {data.officeEmailId}
                                            </li>
                                            <li className="list-group-item">
                                                Location: {data.location}
                                            </li>
                                            <li className="list-group-item">
                                                LegalEntity: {data.legalEntity}
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs">
                                        <li className="">
                                            <a href="#activity" data-toggle="tab" aria-expanded="false">
                                                About Me
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#timeline" data-toggle="tab" aria-expanded="false">
                                                Bank Details
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#settings" data-toggle="tab" aria-expanded="true">
                                                HR Details
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="activity">
                                            <form className="form-horizontal">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col-sm-4 control-label">
                                                        Name
                                                    </label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.employeeName}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail" className="col-sm-4 control-label">
                                                        Emp Code
                                                    </label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.empCode}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col-sm-4 control-label">
                                                        Joining Date
                                                    </label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.joiningDate}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        Status
                                                    </label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.employementStatus}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        Official Email Id
                                                    </label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.officeEmailId}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        Department Name
                                                    </label>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.departmentName}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        Designation Name
                                                    </label>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.designationName}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        Location
                                                    </label>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.location}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        LegalEntity
                                                    </label>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.legalEntity}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-4 control-label"
                                                    >
                                                        PAndLName
                                                    </label>
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                            value={data.pAndLHeadName}
                                                            readOnly="readOnly"
                                                        />
                                                    </div>
                                                </div>


                                            </form>
                                        </div>
                                        <div className="tab-pane" id="timeline">
                                            <ul className="timeline timeline-inverse">
                                                <li className="time-label">
                                                    <span className="bg-red">10 Feb. 2014</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope bg-blue" />
                                                    <div className="timeline-item">
                                                        <span className="time">
                                                            <i className="fa fa-clock-o" /> 12:05
                                                        </span>
                                                        <h3 className="timeline-header">
                                                            <a href="#">Support Team</a> sent you an email
                                                        </h3>
                                                        <div className="timeline-body">
                                                            Etsy doostang zoodles disqus groupon greplin oooj voxy
                                                            zoodles, weebly ning heekya handango imeem plugg dopplr
                                                            jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                                                            Babblely odeo kaboodle quora plaxo ideeli hulu weebly
                                                            balihoo...
                                                        </div>
                                                        <div className="timeline-footer">
                                                            <a className="btn btn-primary btn-xs">Read more</a>
                                                            <a className="btn btn-danger btn-xs">Delete</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-user bg-aqua" />
                                                    <div className="timeline-item">
                                                        <span className="time">
                                                            <i className="fa fa-clock-o" /> 5 mins ago
                                                        </span>
                                                        <h3 className="timeline-header no-border">
                                                            <a href="#">Sarah Young</a> accepted your friend request
                                                        </h3>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-comments bg-yellow" />
                                                    <div className="timeline-item">
                                                        <span className="time">
                                                            <i className="fa fa-clock-o" /> 27 mins ago
                                                        </span>
                                                        <h3 className="timeline-header">
                                                            <a href="#">Jay White</a> commented on your post
                                                        </h3>
                                                        <div className="timeline-body">
                                                            Take me to your leader! Switzerland is small and neutral! We
                                                            are more like Germany, ambitious and misunderstood!
                                                        </div>
                                                        <div className="timeline-footer">
                                                            <a className="btn btn-warning btn-flat btn-xs">
                                                                View comment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="time-label">
                                                    <span className="bg-green">3 Jan. 2014</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-camera bg-purple" />
                                                    <div className="timeline-item">
                                                        <span className="time">
                                                            <i className="fa fa-clock-o" /> 2 days ago
                                                        </span>
                                                        <h3 className="timeline-header">
                                                            <a href="#">Mina Lee</a> uploaded new photos
                                                        </h3>
                                                        <div className="timeline-body">
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                                className="margin"
                                                            />
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                                className="margin"
                                                            />
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                                className="margin"
                                                            />
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                                className="margin"
                                                            />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-clock-o bg-gray" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane active" id="settings">
                                            <form className="form-horizontal">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col-sm-2 control-label">
                                                        Name
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail" className="col-sm-2 control-label">
                                                        Email
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputEmail"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col-sm-2 control-label">
                                                        Name
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputName"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="inputExperience"
                                                        className="col-sm-2 control-label"
                                                    >
                                                        Experience
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <textarea
                                                            className="form-control"
                                                            id="inputExperience"
                                                            placeholder="Experience"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputSkills" className="col-sm-2 control-label">
                                                        Skills
                                                    </label>
                                                    <div className="col-sm-10">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputSkills"
                                                            placeholder="Skills"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" /> I agree to the{" "}
                                                                <a href="#">terms and conditions</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-2 col-sm-10">
                                                        <button type="submit" className="btn btn-danger">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </section>


        </div >
    );
}

export default Employeeprofile;
