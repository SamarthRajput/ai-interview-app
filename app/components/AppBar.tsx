import Image from "next/image";
import NavBarImage from '../favicon.webp'
import { Button } from "./Button";

export default function AppBar(){
    return <div className="flex justify-between border-b px-5 border-slate-500 bg-white p-2">
        <div className="text-lg flex flex-col justify-center">
            <Image src={NavBarImage} alt="Zeko.AI" height={"30"}></Image>
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button >
                Login / SignUp
            </Button>
        </div>
    </div>

}