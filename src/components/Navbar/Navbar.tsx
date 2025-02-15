import Button from "./Button";

export default function Navbar() {
  return (
    <div className="bg-[#181818] p-5 flex gap-10 justify-center items-center text-white">
      <Button text={"My Work"} />
      <img className="h-[50px]" src="/logo.svg" />
      <Button text={"Contact"} />
    </div>
  );
}
