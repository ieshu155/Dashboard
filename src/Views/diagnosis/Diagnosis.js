import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDiagnosis } from "../../js/diagnosis";
import { fake_db_generator } from "../../js/post";

const Diagnosis = ({}) => {

    const [reports, setReports] = useState([])

    useEffect(() => {

        const getAppointments = async () =>{
            const res = await getDiagnosis()
            // fake_db_generator()
            setReports(res)
        }
        getDiagnosis()
    }, [])
    return(
        <div className={`dashboard-container`}>

            <div className={`row full-w center-hv`}>

            Hello Diagnosis

        </div>
        </div>
    )
}

export default Diagnosis
