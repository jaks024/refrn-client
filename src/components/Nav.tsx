import NavButton from "./NavButton";
import NavCollection from "./NavCollection";

function Nav() {
  return (
    <div className="w-72 h-full flex flex-col border-r border-neutral-700">
      <h1 className="w-full font-black text-4xl leading-loose px-6 pt-2 pb-4">
        refrn.
      </h1>
      <NavCollection />
      <div className="p-6">
        <NavButton />
        <NavButton />
        <NavButton />
      </div>
    </div>
  );
}

export default Nav;
