import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Project({
  title,
  description,
  image,
  column,
}: {
  title: string;
  description: string;
  image: string;
  column?: boolean;
}) {
  return (
    <div
      className={`${
        spaceGrotesk.className
      } bg-[#121212] p-5 rounded-[30px] flex justify-content h-[450px] ${
        column ? "flex-col w-[300px]" : "w-[650px]"
      }`}
    >
      <img
        className={`object-cover rounded-[17px] mr-7 aspect-square ${
          column ? "mb-4 w-full h-3/5" : "w-3/5"
        }`}
        src={image}
        alt=""
      />
      <div
        className={`bg-red-400 overflow-hidden ${
          column ? "w-full h-1/5" : "w-2/5"
        }`}
      >
        <p className="text-[20px] text-left text-gray-30  break-words text-ellipsis">
          <span className="text-white font-bold">{title}</span> {description}
        </p>
      </div>
    </div>
  );
}
