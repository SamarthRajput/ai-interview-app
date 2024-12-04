"use client"

import { useRouter } from "next/navigation"

export default function Question1() {

    const router = useRouter();

    return <div>

        <button onClick={() => {
            router.push("/question2")
        }}>Submit </button>
    </div>
}