import Image from "next/image"
import loaderGif from "./loader.gif"

export default function Loading() {

    return <div>
        <Image src={loaderGif} alt="loader..."/>
    </div>
}