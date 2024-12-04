"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Question2() {
    const router = useRouter();

    useEffect(() => {
        function speak(){
            let message = "In which fields you are intrested Software, HR, Banking, Data Science";
            let utterance = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(utterance);
        }

        speak();
    }, [])


    return <div>
        Question2

        <button onClick={() => {
            router.push("/completion")
        }}>Complete test</button>
    </div>
}