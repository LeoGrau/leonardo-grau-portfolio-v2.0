// import { BracesIcon } from "../../icons/BracesIcon";
import { BracesIcon } from "../../icons/common/BracesIcon";
import { CodeSlashIcon } from "../../icons/common/CodeSlashIcon";
// import { GithubIcon } from "../../icons/GithubIcon";
import { CategoryChip } from "../chip/category-chip/CategoryChip";
import { TechChip } from "../chip/tech-chip/TechChip";

export function LayoutProject() {
  const icons = [
    {
      component: CodeSlashIcon,
      componentProps: { width: 18 },
      label: "Frontend",
    },
    { component: BracesIcon, componentProps: { width: 18 }, label: "Backend" },
  ];

  const techs = [
    { techName: "Spring Boot" },
    { techName: "Vue" },
    { techName: "PostgreSQL" },
  ];

  return (
    <div className="flex gap-10 even:flex-row-reverse">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-xl">Section</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio
          soluta in quia! Iste tenetur aperiam tempore facilis ipsum eius
          laboriosam quaerat. Adipisci beatae, impedit dolorem iusto maiores
          obcaecati inventore.
        </p>
        <div className="flex flex-wrap mt-2 gap-2">
          {icons.map((i, index) => (
            <CategoryChip
              component={i.component}
              key={index}
              label="Backend"
              componentProps={i.componentProps}
            ></CategoryChip>
          ))}
        </div>
        <div className="flex flex-wrap mt-2 gap-2">
          {techs.map((i, index) => (
            <TechChip key={index} label={i.techName}></TechChip>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg w-1/2 shadow-[0_0_0.3rem_0.3rem_var(--color-zinc-800)]">
        <img
          className="w-full"
          src="https://code.visualstudio.com/opengraphimg/opengraph-home.png"
          alt=""
        />
      </div>
    </div>
  );
}
