import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../js/constants";
import { generateRandom_ID } from "../../js/utils";
import FlatList from "flatlist-react"

const Dashboard = ({}) => {

    const user_type = 'patients' //getUserType()

    // "patient"   "hospital_staff"  "doctor"    "lab_staff"  "admin"    "insurance"

    const doctors_options = [

    ]

    const patient_options = [
        {title: 'View Records', path: ROUTES.RECORDS},
        {title: 'Make Appointment', path: ROUTES.APPOINTMENTS},
        {title: 'Contact Doctor', path: ROUTES.DOCTOR},
    ]

    let final_options = []


    if(user_type === 'patients') final_options = patient_options

    return(
        <div className={`dashboard-container`}>

<meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>dashboard</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="Dashboard.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet" />
        <header>
          
          <nav>
            <ul className="nav__links">
              {/* <li><a href="#">Appointments and Visits</a></li>
              <li><a href="#">Dignosis</a></li>
              <li><a href="#">Lab Test</a></li>
              <li><a href="#">Insurence Claim</a></li>
              <li><a href="#">Help and Support</a></li>
              <li><a href="#">Chat Bot</a></li>                     */}
              <FlatList 
                list={final_options}
                key={generateRandom_ID()}
                renderItem={option => {

                    console.log(option);
                    return (
                        <Link to={option.path && option.path}>{"        http://localhost:5000"}{option.title}  </Link>
                        
                    )
                }

                }              
                />
            </ul>
          </nav>
          <a className="cta" href="#">Contact</a>
          <p className="menu cta">Menu</p>
        </header>
        <div className="overlay">
          <a className="close">×</a>
          <div className="overlay__content">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
          </div>
        </div>
        </div>
    )
}

export default Dashboard;
