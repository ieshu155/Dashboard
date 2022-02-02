
import { app, db } from "../configs/firebase";
import {collection, addDoc, getDocs, Timestamp} from '@firebase/firestore'


const diagnosisCollectionRef = db.collection("diagnosis")


export const getDiagnosis = async () => {
    // const q = query(collection(db, diagnosisCollectionRef), where("capital", "==", true);
    const diagnosisList = []
    const querySnapshot = await getDocs(diagnosisCollectionRef);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    diagnosisList.push(doc.data());
});
return diagnosisList;
}
