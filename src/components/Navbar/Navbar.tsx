import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex gap-10 justify-between items-center text-white">
      <img className="h-[45px] select-none" src="/logo.svg" />
      <div className="flex gap-3">
        <Button>Contact</Button>
        <Button circle={true} link="https://x.com/xDestin0">
          <img className="w-5/6" src="/XLogo.svg" alt="X" />
        </Button>
      </div>
    </div>
  );
}
