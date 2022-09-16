import { useState } from "react";
function Question({ question, field, nextQuestion }) {
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <>
            <div className="min-w-[100vw] min-h-[100vh] bg-cover bg-center bg-top bg-[url('/images/bg.png')]">
                <div className="text-center pt-[35vh]">
                    <div className="font-subtitle text-[1.5rem] ">
                        {question}
                    </div>
                    <div className="pt-[1rem] w-[30rem] mx-auto font-subtitle">
                        <label htmlFor="inp" className="inp">
                            <input
                                type="text"
                                id="inp"
                                placeholder="&nbsp;"
                                onChange={handleChange}
                                value={message}
                            />
                            <span className="label">Answer</span>
                            <span className="focus-bg"></span>
                        </label>
                    </div>
                    <a
                        className="font-title flex justify-center items-center text-[1.25rem] bg-yellow rounded-[0.5rem] py-[0.5rem] px-[1rem] h-auto w-[5rem] mx-auto mt-[1rem]"
                        href="#"
                        onClick={() => {
                            // console.log(message);
                            if (message != "") {
                                // console.log(message);
                                nextQuestion(field, message);
                            }
                        }}>
                        OK
                    </a>
                </div>
            </div>
        </>
    );
}

export default Question;
