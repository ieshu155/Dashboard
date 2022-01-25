// import { doc, Firestore, getDoc } from "firebase/firestore";
// import { db, getAppts,  } from "../configs/firebase";

import { app } from "../configs/firebase";


export const getAppointment = async () => {

    // const appt =  await getDoc(doc(db, '/appointments/test'))
    // getAppts()

    const db = app.firestore()
    const appt = (await db.doc('appointments/test').get()).data()
    return appt
    

}
export const GET = async (url, body) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }//,
        // body: JSON.stringify(body)
    })
        .then(resp => resp.json())
        .then(obj => obj)
        .catch(error => console.log("\n[ERR]  @  [GET]  @  [URL:: " + url + "]\n[ERROR::MSG]:\n", error))
};
