"use client"
import { useRouter } from "next/navigation"

export const Instructions = () => {
    const router = useRouter();

    return <div className="flex h-full w-full flex-col items-start justify-between md:min-h-[27rem] md:max-w-[40%]">
        <div className="flex w-[100%] flex-col items-start gap-2 md:w-full">
            <span className="dmSans whitespace-pre-line text-[1rem] md:text-[1.25rem] font-[700] not-italic no-underline text-left leading-0 text-white">
                Instructions
            </span>
            <div className="flex w-full gap-2 md:w-fit">
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">1.</span>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Ensure stable internet and choose a clean, quiet location.</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">2.</span>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Permission for access of camera, microphone, entire screen sharing is required.</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">3.</span>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Be in professional attire and avoid distractions.</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">4.</span>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Give a detailed response, providing as much information as you can.</span>
            </div>
            <div className="flex w-full gap-2 md:w-fit">
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">5.</span>
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-white/90">Answer the question with examples and projects you’ve worked on.</span>
            </div>
        </div>
        <div className="mb-[48px] mt-4 rounded-xl bg-slate-800 p-2 md:p-4">
            <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left">
                <span className="dmSans whitespace-pre-line text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-indigo-300 hover:text-indigo-500 group cursor-pointer">
                    Click here
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link text-primary-300 group-hover:text-primary-500 mb-1 ml-1 inline-block h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </span>
                to try a mock interview with Avya, our AI interviewer, and build your confidence before the main interview!
            </span>
        </div>
        <button className="dmSans items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-85 disabled:cursor-not-allowed bg-indigo-500 text-indigo-foreground hover:bg-indigo-700/90 py-3 px-4 text-[1rem] leading-5 hidden w-full rounded-md md:block"
            onClick={() => router.push("/test")}
        >
            Start Now
        </button>
    </div>

}