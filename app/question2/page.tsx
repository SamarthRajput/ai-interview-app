"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";
import BackwardTimer from "../components/BackwardTimer";
import TraineeCamera from "../components/TraineeCamera";

export default function Question2() {
    const router = useRouter();

    useEffect(() => {
        function speak(){
            let message = "What roles are you interested in among Tech, Marketing, Design, HR, Ops and others?";
            let utterance = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(utterance);
        }
        speak();
    }, [])


    return <div className="flex items-center justify-center h-screen flex-col">
         <div className="text-center mb-6">
            <div className="text-lg font-medium">
                2/2
            </div>
            <div className="text-2xl font-semibold mt-2">
                What roles are you interested in among Tech, Marketing, Design, HR, Ops and others?
            </div>
        </div>

        <div className="text-center mb-4">
            <div className="text-lg font-medium mb-3">
                Timer: 
            </div>
            <div className="text-orange-500 font-bold ">
                <BackwardTimer />
            </div>
        </div>

        <div className="bg-black rounded-lg overflow-hidden w-100 h-80 mb-6">
            <TraineeCamera />
        </div>


        <button onClick={() => {
            router.push("/completion")
        }} className="text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 border-indigo-700 border font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Complete test</button>

        <p className="text-sm text-gray-400 mt-4">
            Press 'Enter' for Saving and Next
        </p>
    </div>
}