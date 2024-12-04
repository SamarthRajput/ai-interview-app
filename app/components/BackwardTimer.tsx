import { useState, useEffect } from "react";

export default function BackwardTimer() {
    const [timeLeft, setTimeLeft] = useState(59); // Start from 59 seconds

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup interval on component unmount
        }
    }, [timeLeft]);

    // @ts-ignore
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return (
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
    };

    return (
        <div className="flex items-center justify-center text-4xl ">
            {formatTime(timeLeft)}
        </div>
    );
}
