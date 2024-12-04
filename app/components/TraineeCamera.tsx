"use client";

import { useEffect, useRef } from "react";

export default function TraineeCamera() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const startSendingVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });

                // Assign the video stream to the video element
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (error) {
                console.error("Error accessing media devices:", error);
            }
        };

        startSendingVideo();
    }, []);

    return (
        <div className="relative flex-col items-center h-[428px] w-[600px] flex">
            <video
                ref={videoRef}
                height="428"
                width="600"
                className="rounded-xl shadow-md shadow-black transform scale-x-[-1]"
                muted
            ></video>
        </div>
    );
}
