import { ReactNode } from "react";

export default function Button({
  circle,
  children,
}: {
  circle?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      className={`uppercase p-1.5 ${
        !circle ? "pl-5 pr-5" : "aspect-square"
      } h-min rounded-full flex justify-center items-center text-sm font-black select-none bg-[#121212] hover:bg-[#202020] hover:scale-105 transition duration-150 text-[white]`}
    >
      {children}
    </button>
  );
}
