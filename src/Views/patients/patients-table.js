import { generateRandom_ID } from "../../js/utils";
import FlatList from 'flatlist-react';

const PatientsTable = ({patients}) => {

    
    return(
        <div className={`table-container center-hv`}>
            <PatientRow {...{f_name: 'PATIENT', l_name: 'NAME', dob: 'DOB', mobile: 'MOBILE'}} />
            <FlatList
                list={patients}
                key={generateRandom_ID()}
                renderItem={patient => {
                    
                    return (
                        <div className={`row-container`} key={generateRandom_ID()}>
                            <PatientRow {...{patient}} />
                        </div>
                    );
                }}
            />
        </div>
        
    )
}

const PatientRow = ({patient}) => {

    return (
        <>
            <div className={`font-lable-m`}>{`${patient.f_name} ${patient.l_name}`}</div>
            <div className={`font-lable-m`}>{`${patient.mobile}`}</div>
            <div className={`font-lable-m`}>{`${patient.dob}`}</div>
        </>
    )
}
export default PatientsTable;