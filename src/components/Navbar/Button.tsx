import { ReactNode } from "react";

export default function Button({
  circle,
  link,
  children,
}: {
  circle?: boolean;
  link?: string;
  children: ReactNode;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button
        className={`uppercase p-1.5 ${
          !circle ? "pl-5 pr-5" : "aspect-square"
        } h-min rounded-full flex justify-center items-center text-sm font-black select-none bg-[#121212] hover:bg-[#202020] hover:scale-105 transition duration-150 text-[white]`}
      >
        {children}
      </button>
    </a>
  );
}
