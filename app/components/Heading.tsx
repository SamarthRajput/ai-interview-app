export const Heading = () => {
    return <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <span className="dmSans whitespace-pre-line text-[1.25rem] leading-tight md:text-[1.5rem] font-[700] not-italic no-underline text-left text-white">
            Trainee Interview
        </span>
        <div className="flex w-full flex-col items-start justify-center gap-2 md:w-fit md:flex-row">
            <div className="flex w-fit items-center gap-2 rounded-lg border border-neutral-500 px-2 py-1 md:px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark h-5 w-5 text-orange-500"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
                <span className="dmSans whitespace-pre-line text-[0.78rem] leading-loose md:text-[0.88rem] font-[300] not-italic no-underline text-left text-neutral-200">Zeko</span>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-lg border border-neutral-500 px-2 py-1 md:px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-5 w-5 text-red-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span className="dmSans whitespace-pre-line text-[0.78rem] leading-loose md:text-[0.88rem] font-[300] not-italic no-underline text-left text-neutral-200">26 Minutes</span>
            </div>
        </div>
    </div>
}