import Image from "next/image"
import loaderGif from "../loader.gif"

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-64 h-64">
                <Image src={loaderGif} alt="loader..." layout="responsive" />
            </div>
        </div>
    );
}