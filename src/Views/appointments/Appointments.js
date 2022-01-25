import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAppointment } from "../../js/get";

const Appointments = ({}) => {

    const [patient, setPatient] = useState({name: ''})

    useEffect(() => {
        
        const getAppointments = async () =>{
            const res = await getAppointment()
            setPatient({name: res.name})
        } 
        getAppointments()
    }, [])
    return(
        <div className={`dashboard-container`}>

            <div className={`row full-w center-hv`}>
                
                <TextField

                    value={patient.name}

                />
                
            </div>

        </div>
    )
}

export default Appointments