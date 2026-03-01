import { LayoutProject } from "../layout-project/LayoutProject";
import { OptionsButton } from "../options-button/OptionButtons";

export function Experience() {
  const projects = [
    { projectName: "", description: "" },
    { projectName: "", description: "" },
    { projectName: "", description: "" },
  ];

  return (
    <div className="min-h-screen h-full p-10 flex justify-center items-center w-full">
      <div className="max-w-250">
        <h1 className="text-2xl mb-7">Projects</h1>
        <OptionsButton></OptionsButton>
        <div className="mt-5 flex flex-col gap-10">
          {projects.map((_, index) => (
            <LayoutProject key={index}></LayoutProject>
          ))}
        </div>
      </div>
    </div>
  );
}
