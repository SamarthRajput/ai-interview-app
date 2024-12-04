import AppBar from "../components/AppBar";
import { Heading } from "../components/Heading";
import { PermissionScreen } from "../components/PermissionScreen";
import TraineeCamera from "../components/TraineeCamera";

export default function Test() {
    return <div>
    <AppBar />
    <div className="relative flex h-[95vh] min-h-fit flex-col text-white md:w-full z-10 mt-12 md:h-[95vh]">
      <div className="m-auto mt-12 flex w-[95%] max-w-[88rem] flex-col items-center justify-center gap-8 md:m-auto md:w-[80%] md:gap-12">
        <Heading />
        <div className="m-auto flex w-full items-start justify-between">
          <TraineeCamera />
          <PermissionScreen />
        </div>
      </div>
    </div>

  </div>
}