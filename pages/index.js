import styles from "../styles/Home.module.css";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
    async function addData() {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className={styles.container}>
            a
            <div
                onClick={() => {
                    addData();
                }}>
                test
            </div>
        </div>
    );
}
