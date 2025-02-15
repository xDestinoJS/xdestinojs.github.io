import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Button({ text }: { text: string }) {
  return (
    <button
      className={`${montserrat.className} uppercase p-1.5 pl-5 pr-5 h-min rounded-full text-sm font-black bg-[#582B38] hover:scale-105 transition duration-150 text-[#FF004D]`}
    >
      {text}
    </button>
  );
}
