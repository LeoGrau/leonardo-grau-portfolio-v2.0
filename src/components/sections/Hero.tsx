import { SliderThumb } from "../slider-thumb/SliderThumb";
import me from "@/assets/images/me.jpg";

export function Hero() {
  return (
    <section className="relative z-10 mt-17.5 h-[calc(100vh-70px)]">
      {/* <SquareBackground></SquareBackground> */}
      <div className="absolute p-4 w-full h-full">
        <SliderThumb
          position="right-0"
          inClass="bg-indigo-950/20 absolute max-w-[450px]"
          width="35vw"
        ></SliderThumb>
        <SliderThumb
          position="bottom-0"
          inClass="bg-pink-950/20 absolute max-w-[450px]"
          width="30vw"
        ></SliderThumb>
      </div>
      <div className="h-full w-full flex justify-center items-center relative z-40 gap-7">
        <img className="w-25 h-25 object-cover rounded-full" src={me} alt="" />
        <div>
          <h1 className="text-6xl font-semibold">Leonardo Grau</h1>
          <p className="quantico-f">Desarrollador Web Fullstack</p>
        </div>
      </div>
    </section>
  );
}
