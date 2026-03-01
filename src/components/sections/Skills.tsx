import { SkillCard } from "../cards/skill-card/SkillCard";
import { VueIcon } from "../../icons/color/VueIcon";
import { ReactIcon } from "../../icons/color/ReactIcon";
import { AngularIcon } from "../../icons/color/AngularIcon";
import { TailwindCSSIcon } from "../../icons/color/TailwindCSSIcon";
import { PiniaIcon } from "../../icons/color/PiniaIcon";
import { DotnetIcon } from "../../icons/color/DotnetIcon";
import { BootstrapIcon } from "../../icons/color/BootstrapIcon";
import { ViteIcon } from "../../icons/color/ViteIcon";
import { DockerIcon } from "../../icons/color/DockerIcon";
import { LinuxIcon } from "../../icons/color/LinuxIcon";
import { GitIcon } from "../../icons/color/GitIcon";
import { PostgreSQLIcon } from "../../icons/color/PostgreSQLIcon";
import { MySQLIcon } from "../../icons/color/MySQLIcon";
import { SQLServerIcon } from "../../icons/color/SQLServerIcon";
import { SwaggerIcon } from "../../icons/color/SwaggerIcon";
import { NestJSIcon } from "../../icons/color/NestJSIcon";
import { PrismaIcon } from "../../icons/color/PrismaIcon";
import { HTML5Icon } from "../../icons/color/HTMLIcon";
import { CSSIcon } from "../../icons/color/CSSIcon";
import { BesuIcon } from "../../icons/color/BesuIcon";
import { SolidityIcon } from "../../icons/color/SolidityIcon";
import { CSharpIcon } from "../../icons/color/CSharpIcon";
import { PythonIcon } from "../../icons/color/PythonIcon";
import { JavaScriptIcon } from "../../icons/color/JavaScriptIcon";
import { TypeScriptIcon } from "../../icons/color/TypescriptIcon";
import { CPPIcon } from "../../icons/color/CPPIcon";

export function Skills() {
  const fSkills = [
    {
      id: "html5",
      iconComponent: <HTML5Icon width={16} />,
      label: "HTML",
      level: "Advanced",
    },
    {
      id: "css",
      iconComponent: <CSSIcon width={16} />,
      label: "CSS",
      level: "Advanced",
    },
    {
      id: "react",
      iconComponent: <ReactIcon width={16} />,
      label: "React",
      level: "Advanced",
    },
    {
      id: "vue",
      iconComponent: <VueIcon width={16} />,
      label: "Vue",
      level: "Advanced",
    },
    {
      id: "angular",
      iconComponent: <AngularIcon width={16} />,
      label: "Angular",
      level: "Advanced",
    },
    {
      id: "tailwindcss",
      iconComponent: <TailwindCSSIcon width={16} />,
      label: "TailwindCSS",
      level: "Advanced",
    },
    {
      id: "pinia",
      iconComponent: <PiniaIcon width={16} />,
      label: "Pinia",
      level: "Advanced",
    },
    {
      id: "bootstrap",
      iconComponent: <BootstrapIcon width={16} />,
      label: "Bootstrap",
      level: "Advanced",
    },
    {
      id: "vite",
      iconComponent: <ViteIcon width={16} />,
      label: "Vite",
      level: "Advanced",
    },
  ];

  const bSkills = [
    {
      id: "dotnet",
      iconComponent: <DotnetIcon width={16} />,
      label: ".NET",
      level: "Advanced",
    },
    {
      id: "dotnet",
      label: "ASP.NET Core Web API",
      level: "Advanced",
    },
    {
      id: "linq",
      label: "LINQ",
      level: "Advanced",
    },
    {
      id: "efcore",
      label: "EF Core",
      level: "Advanced",
    },
    {
      id: "automapper",
      label: "AutoMapper",
      level: "Advanced",
    },
    {
      id: "jwtBearer",
      label: "JWT Bearer Auth",
      level: "Advanced",
    },
    {
      id: "dependencyInjection",
      label: "Dependency Injection",
      level: "Advanced",
    },
    {
      id: "swagger",
      iconComponent: <SwaggerIcon width={16}></SwaggerIcon>,
      label: "SwaggerUI",
      level: "Advanced",
    },
    {
      id: "nestjs",
      iconComponent: <NestJSIcon width={16}></NestJSIcon>,
      label: "NestJS",
      level: "Advanced",
    },
    {
      id: "prisma",
      iconComponent: <PrismaIcon width={16}></PrismaIcon>,
      label: "Prisma ORM",
      level: "Advanced",
    },
  ];

  const dSkills = [
    {
      id: "docker",
      iconComponent: <DockerIcon width={16} />,
      label: "Docker",
      level: "Advanced",
    },
    {
      id: "linux",
      iconComponent: <LinuxIcon width={16} />,
      label: "Linux Servers",
      level: "Advanced",
    },
    {
      id: "awsec2",
      label: "AWS - EC2 Instances",
      level: "Advanced",
    },
    {
      id: "git",
      iconComponent: <GitIcon width={16}></GitIcon>,
      label: "Git",
      level: "Advanced",
    },
  ];

  const dbSkills = [
    {
      id: "mysql",
      iconComponent: <MySQLIcon width={16} />,
      label: "MySQL",
      level: "Advanced",
    },
    {
      id: "postgresql",
      iconComponent: <PostgreSQLIcon width={16} />,
      label: "PostgreSQL",
      level: "Advanced",
    },
    {
      id: "sqlserver",
      iconComponent: <SQLServerIcon width={16} />,
      label: "SQL Server",
      level: "Advanced",
    },
  ];

  const blockSkills = [
    {
      id: "hyperledgerbesu",
      iconComponent: <BesuIcon width={18} />,
      label: "Hyperledger Besu",
      level: "Advanced",
    },
    {
      id: "solidity",
      iconComponent: <SolidityIcon width={22} />,
      label: "Solidity",
      level: "Advanced",
    },
    {
      id: "etherjs",
      label: "Ethers.js",
      level: "Advanced",
    },
  ];

  const plSkills = [
    {
      id: "c#",
      iconComponent: <CSharpIcon width={18} />,
      label: "C#",
      level: "Advanced",
    },
    {
      id: "typescript",
      iconComponent: <TypeScriptIcon width={18} />,
      label: "Typescript",
      level: "Advanced",
    },
    {
      id: "javascript",
      iconComponent: <JavaScriptIcon width={18} />,
      label: "Javascript",
      level: "Advanced",
    },
    {
      id: "python",
      iconComponent: <PythonIcon width={18} />,
      label: "Python",
      level: "Advanced",
    },
    {
      id: "cpp",
      iconComponent: <CPPIcon width={18} />,
      label: "C++",
      level: "Advanced",
    },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-250">
        <h1 className="text-2xl">Skills</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500">Frontend</h3>
            <div className="grid grid-cols-5 gap-3">
              {fSkills.map((skill) => (
                <SkillCard
                  label={skill.label}
                  iconComponent={skill.iconComponent}
                ></SkillCard>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500">Backend</h3>
            <div className="grid grid-cols-5 gap-3">
              {bSkills.map((skill) => (
                <SkillCard
                  label={skill.label}
                  iconComponent={skill.iconComponent}
                ></SkillCard>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500">DevOps - Cloud & Deployment</h3>
            <div className="grid grid-cols-5 gap-3">
              {dSkills.map((skill) => (
                <SkillCard
                  label={skill.label}
                  iconComponent={skill.iconComponent}
                ></SkillCard>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500">Databases</h3>
            <div className="grid grid-cols-5 gap-3">
              {dbSkills.map((skill) => (
                <SkillCard
                  label={skill.label}
                  iconComponent={skill.iconComponent}
                ></SkillCard>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500">Blockchain & Web3</h3>
            <div className="grid grid-cols-5 gap-3">
              {blockSkills.map((skill) => (
                <SkillCard
                  label={skill.label}
                  iconComponent={skill.iconComponent}
                ></SkillCard>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-500">Programming Languages</h3>
            <div className="grid grid-cols-5 gap-3">
              {plSkills.map((skill) => (
                <SkillCard
                  label={skill.label}
                  iconComponent={skill.iconComponent}
                ></SkillCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
