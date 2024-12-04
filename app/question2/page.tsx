"use client"

import { useRouter } from "next/navigation"

export default function Question2() {
    const router = useRouter();

    return <div>
        Question2

        <button onClick={() => {
            router.push("/completion")
        }}>Complete test</button>
    </div>
}