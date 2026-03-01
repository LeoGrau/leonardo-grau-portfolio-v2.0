export function OptionsButton() {
  return (
    <ul className="flex gap-2">
      <li className="cursor-pointer bg-neutral-700 hover:bg-neutral-800 transition-colors py-2 px-6 rounded-full">
        All
      </li>
      <li className="cursor-pointer bg-neutral-700 hover:bg-neutral-800 transition-colors py-2 px-6 rounded-full">
        Fullstack
      </li>
      <li className="cursor-pointer bg-neutral-700 hover:bg-neutral-800 transition-colors py-2 px-6 rounded-full">
        Frontend
      </li>
      <li className="cursor-pointer bg-neutral-700 hover:bg-neutral-800 transition-colors py-2 px-6 rounded-full">
        Backend
      </li>
    </ul>
  );
}
