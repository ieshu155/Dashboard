import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({}) => {

    return(
        <div className={`dashboard-container`}>

            <div className={`col full-w j-around`}>
                DASHBOARD

                <br/>
                <br/>
                <Link to="/appointments">Appointments</Link>
                <br/>
                <Link to="/prescriptions">Prescriptions</Link>
                <br/>
                <Link to="/diagnosis">Diagnosis</Link>
            </div>

        </div>
    )
}

export default Dashboard;
