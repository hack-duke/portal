import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Question from "../components/Question";

export default function Home() {
    const [step, setStep] = useState({});
    async function addData(data) {
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

    const useKeyDown = (handler, deps = []) => {
        useEffect(() => {
            document.addEventListener("keydown", handler);
            // clean up
            return () => {
                document.removeEventListener("keydown", handler);
            };
        }, deps);
    };

    useKeyDown((e) => {
        if (e.key == "Enter") {
            nextQuestion("Started", true);
        }
    }, []);

    function nextQuestion(q, a) {
        setStep({ ...step, [q]: a });
        console.log(step);
    }

    const router = useRouter();
    switch (Object.keys(step).length) {
        case 0:
            return (
                <>
                    <div className="min-w-[100vw] min-h-[100vh] bg-cover bg-center bg-top bg-[url('/images/bg.png')]">
                        <div className="text-center pt-[35vh]">
                            <div className="font-title text-[2.5rem] ">
                                HackDuke: Code For Good
                            </div>
                            <div className="font-subtitle text-[1.25rem]">
                                Hackathon for Social Good | Duke University
                                <br></br> October 22-23, 2022
                            </div>

                            <a
                                className="font-title flex justify-center items-center text-[1.25rem] bg-yellow rounded-[0.5rem] py-[0.5rem] px-[1rem] h-auto w-[15rem] mx-auto mt-[1rem]"
                                href="#"
                                onClick={() => {
                                    nextQuestion("Started", true);
                                }}>
                                Begin Application!
                            </a>
                        </div>
                    </div>
                </>
            );
        case 1:
            return (
                <Question
                    question="What's your first name?"
                    nextQuestion={nextQuestion}
                />
            );
    }
}
