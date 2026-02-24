import type { NavOption } from "../shared/types/nav-option.type";

export function Navbar() {
  const navOptions: NavOption[] = [
    {
      label: "Home",
    },
    {
      label: "Experience",
    },
    {
      label: "Skills",
    },
  ];

  return (
    <div className="h-17.5 backdrop-blur-lg fixed z-50 w-full items-center px-5 flex justify-between">
      <ul className="quantico-f flex gap-4">
        {navOptions.map((option, index) => (
          <li className="text-sm" key={index}>
            {option.label}
          </li>
        ))}
      </ul>
      <div>
        <button className="quantico-f text-sm text-neutral-900 bg-white px-4 py-2 rounded-md">
          Contact
        </button>
      </div>
    </div>
  );
}
