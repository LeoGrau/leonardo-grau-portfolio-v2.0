import { SquareBackground } from "./background/SquareBackground";
import { SliderThumb } from "./slider-thumb/SliderThumb";

export function Hero() {
  return (
    <section className="hero relative z-10 translate-y-17.5 h-[calc(100vh-70px)] border-t-neutral-700 border-t">
      {/* <SquareBackground></SquareBackground> */}
      <SliderThumb></SliderThumb>
      <div className="h-full w-full flex justify-center items-center relative z-40">
        <div>
          <h1 className="text-6xl font-semibold">Leonardo Grau</h1>
          <p className="quantico-f">Desarrollador Web Fullstack</p>
        </div>
      </div>
    </section>
  );
}
