import { db } from "../configs/firebase"


export const fake_db_generator = async () => {

    const patients = [
        constructPatient('John', 'JJ', '05-30-1996', db.collection('patients').doc()),
        constructPatient('Turki', 'Bashah', '05-30-1999', db.collection('patients').doc()),
        constructPatient('Aron', 'Mayers', '05-30-1991', db.collection('patients').doc()),
    ]

    const employess = [
        constructEmployee(db.collection('employess').doc(), 'Roshan', 'Ryanz', '02-22-1975', '12-10-2013', 'General Doctor', 'Physicians', 'doctor'),
        constructEmployee(db.collection('employess').doc(), 'Costaz', 'Econ', '04-24-1970', '12-14-2014', 'Hospital Staff', 'Managment', 'hospital-staff'),
        constructEmployee(db.collection('employess').doc(), 'Randi', 'Rollen', '01-12-1995', '12-10-2018', 'Lab Staff', 'Lab', 'lab-staff'),
        constructEmployee(db.collection('employess').doc(), 'Jacob', 'Jones', '01-12-1965', '12-10-2008', 'System Admin', 'Managment', 'admin'),
    ]

    const appointments = [
        constructAppointment(patients[0].f_name, patients[0].l_name, patients[0].dob, '15:30', 'confirmed', employess[0].l_name, 
        employess[0].employee_ref.id, employess[1].employee_ref.id, employess[0].l_name, 550, 'general', patients[0].patient_ref.id, db.collection('appointments').doc()),

        constructAppointment(patients[1].f_name, patients[1].l_name, patients[1].dob, '15:30', 'confirmed', employess[0].l_name, 
        employess[0].employee_ref.id, employess[1].employee_ref.id, employess[0].l_name, 550, 'general', patients[1].patient_ref.id, db.collection('appointments').doc()),

        constructAppointment(patients[2].f_name, patients[2].l_name, patients[2].dob, '15:30', 'confirmed', employess[0].l_name, 
        employess[0].employee_ref.id, employess[1].employee_ref.id, employess[0].l_name, 550, 'general', patients[2].patient_ref.id, db.collection('appointments').doc()),
    ]

    const visits = [
        constructVisit(appointments[0].appointment_ref.id, appointments[0].created_date, db.collection(`patients/${appointments[0].patient_ref}/visits`).doc(), appointments[0].patient_ref),
        constructVisit(appointments[1].appointment_ref.id, appointments[1].created_date, db.collection(`patients/${appointments[1].patient_ref}/visits`).doc(), appointments[1].patient_ref),
        constructVisit(appointments[2].appointment_ref.id, appointments[2].created_date, db.collection(`patients/${appointments[2].patient_ref}/visits`).doc(), appointments[2].patient_ref),
    ]

    const batch = db.batch()

    for(const o of patients) batch.set(o.patient_ref, Object.assign(o, {patient_ref: o.patient_ref.id}))
    for(const o of employess) batch.set(o.employee_ref, Object.assign(o,{ employee_ref: o.employee_ref.id}))
    for(const o of appointments) batch.set(o.appointment_ref, Object.assign(o,{ appointment_ref: o.appointment_ref.id}))
    for(const o of visits) batch.set(o.visit_ref, Object.assign(o,{ visit_ref: o.visit_ref.id}))

    // console.log("COMMITING");
    // await batch.commit()
    return true

}

const constructVisit = (appointment_ref, date, visit_ref, patient_ref) => {
    return {
        'appointment_ref': appointment_ref,
        'date': new Date(date),
        'visit_ref': visit_ref,
        'patient_ref': patient_ref,
    }
}
const constructEmployee = ( employee_ref, f_name, l_name, dob, join_date, title, department, type ) => {
    return {
        'employee_ref': employee_ref,
        'f_name': f_name,
        'l_name': l_name,
        'dob': new Date(dob),
        'join_date': new Date(join_date),
        'title': title,
        'department': department,
        'type': type,
    }
}
const constructPatient = (f_name, l_name, dob, patient_ref, ) => {
    return {
    
        'f_name': f_name,
        'l_name': l_name,
        'patient_ref': patient_ref,
        'dob': new Date(dob),
    }
}
const constructAppointment = (f_name, l_name, dob, time, status, doctor_name, docotr_ref, staff_ref, staff_name, cost, type, patient_ref, appointment_ref) => {
    return {
        'f_name': f_name,
        'l_name': l_name,
        'dob': new Date(dob),
        'created_date': new Date(),
        'time': time,
        'status': status,
        'doctor_name': doctor_name,
        'docotr_ref': docotr_ref,
        'staff_ref': staff_ref,
        'staff_name': staff_name,
        'cost': cost,
        'type': type,
        'appointment_ref': appointment_ref,
        'patient_ref': patient_ref,
    }
}