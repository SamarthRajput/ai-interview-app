"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Question1() {

    const router = useRouter();

    // when the component mounts the text-to-speech feature gets work
    useEffect(() => {
        function speak(){
            let message = "Tell us about yourself in brief";
            let utterance = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(utterance);
        }

        speak();
    }, [])

    return <div>
        

        <button onClick={() => {
            router.push("/question2")
        }}>Submit </button>
    </div>
}