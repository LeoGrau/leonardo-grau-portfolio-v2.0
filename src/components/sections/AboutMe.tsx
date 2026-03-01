import me from "@/assets/images/me2.png";
import bgProgramming from "@/assets/images/bg-programming.jpg";
import { GithubIcon } from "../../icons/common/GithubIcon";
import { LinkedInIcon } from "../../icons/common/LinkedInIcon";

export function AboutMe() {
  return (
    <div className="flex justify-center h-screen items-center w-full">
      <div className="flex gap-10 justify-center items-center w-full py-10 relative overflow-hidden">
        <div className="bg-neutral-900/90 w-full h-full z-30 absolute"></div>
        <img className="absolute z-20" src={bgProgramming} alt="" />
        <div className="max-w-120 flex flex-col relative z-30">
          <h1 className="text-4xl font-bold bg-indigo-950 w-fit px-4 py-2 rounded-md mb-2">
            Who am I?
          </h1>
          <p className="text-justify">
            Full-Stack Software Engineer with experience designing and
            implementing modular, production-grade systems. I work across the
            entire stack — from RESTful APIs in .NET and relational database
            optimization, to SPA development in Vue and React. I apply
            architectural patterns such as Hexagonal Architecture and focus on
            clean code, maintainability, and system interoperability. I have
            contributed to blockchain-based healthcare interoperability
            platforms and validated AI-generated software solutions to ensure
            quality and reliability.
          </p>
          <div className="flex gap-2 mt-3">
            <GithubIcon
              className="text-white hover:text-zinc-700 cursor-pointer transition-colors"
              height={30}
              width={30}
            ></GithubIcon>
            <LinkedInIcon
              className="text-white hover:text-zinc-700 cursor-pointer transition-colors"
              height={30}
              width={30}
            ></LinkedInIcon>
          </div>
        </div>
        <img className="rounded-2xl relative w-70 relative z-30" src={me} alt="" />
      </div>
    </div>
  );
}
