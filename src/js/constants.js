export const appointments = {
    'f_name': '',
    'l_name': '',
    'dob': '',
    'created_date': '',
    'time': '',
    'status': '',
    'doctor_name': '',
    'docotr_ref': '',
    'staff_ref': '',
    'staff_name': '',
    'cost': '',
    'type': '',
    'appointment_ref': '',
    'patient_ref': '',
}

export const patients = {
    'visits': {
        'appointment_ref': '',
        'date': '',
        'visit_ref': '',
        'patient_ref': '',
    },
    'diagnosis': {
        'diagnosis_ref': '',
        'patient_ref': '',
        'doctor_name': '',
        'doctor_ref': '',
        'cost': '',
        'recommendations': '',
        'comments': '',
        'followup_appointment': '',
    },
    'prescriptions': {
        'prescription_ref': '',
        'date': '',
        'patient_ref': '',
        'patient_name': '',
        'doctor_name': '',
        'doctor_ref': '',
        'medications': {
            'prescription_ref': '',
            'medication_ref': '',
            'patient_ref': '',
            'patient_name': '',
            'doctor_name': '',
            'doctor_ref': '',
            'medication_name': '',
            'cost': '',
            'uses': '',
            'directions': ''
        },
    },
    'lab_tests': {
        'test_ref': '',
        'date': '',
        'lab_staff': '',
        'lab_staff_ref': '',
        'patient_ref': '',
        'patient_name': '',
        'cost': '',
        'doctor_name': '',
        'doctor_ref': '',
        'results': '',
        'type': '',
        'name': '',
    },
    'f_name': '',
    'l_name': '',
    'patient_ref': '',
}

export const employees = {
    'employee_ref': '',
    'f_name': '',
    'l_name': '',
    'dob': '',
    'join_date': '',
    'title': '',
    'department': '',
    'type': '',
}

export const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    APPOINTMENTS: '/appointments',
    PRESCRIPTIONS: '/prescriptions',
    LOGIN: '/login'
}