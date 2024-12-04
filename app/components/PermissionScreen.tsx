"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export const PermissionScreen = () => {

    const router = useRouter();

    useEffect(() => {


        const startScreen = async () => {
            try {
                await navigator.mediaDevices.getDisplayMedia({
                    video: true
                })
            }
            catch(e){
                console.log(e);
            }
        }
        
        startScreen();
    }, [])


    return <div className="flex h-full w-full flex-col items-start justify-between md:min-h-[27rem] md:max-w-[40%]">
        <div className="flex w-[100%] flex-col items-start gap-2 md:w-full">
            <span className="dmSans whitespace-pre-line text-[1rem] md:text-[1.25rem] font-[700] not-italic no-underline text-left leading-0 text-white">
                Permissions 
            </span>

            <div className="flex w-full gap-2 md:w-fit">
                <input className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90" type="checkbox"></input>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Camera Permission</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <input className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90" type="checkbox"></input>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Microphone Permission</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <input className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90" type="checkbox"></input>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Audio Permission</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <input className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90" type="checkbox"></input>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Screen Share Permission</span>
            </div>
        </div>

        <button className="dmSans items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-85 disabled:cursor-not-allowed bg-indigo-500 text-indigo-foreground hover:bg-indigo-700/90 py-3 px-4 text-[1rem] leading-5 hidden w-full rounded-md md:block"
            onClick={() => router.push("/question1")}
        >
            Start Now
        </button>
    </div>
}