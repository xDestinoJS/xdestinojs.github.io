import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Project({
  title,
  description,
  image,
  video,
  column,
}: {
  title: string;
  description: string;
  image: string;
  video?: string;
  column?: boolean;
}) {
  return (
    <div
      className={`${
        spaceGrotesk.className
      } bg-[#121212] p-5 rounded-[30px] flex-col lg:flex-row w-full md:w-2/3 group border-[#212121] hover:scale-[1.02] transition duration-150 border-2 flex justify-content h-max lg:h-[450px] ${
        column ? "lg:flex-col lg:w-[300px]" : "lg:w-[650px]"
      }`}
    >
      <div
        className={`relative rounded-[17px] w-full mb-4 lg:mb-0 overflow-hidden mr-7 aspect-square ${
          column ? "lg:mb-4 w-full h-3/5" : "w-3/5"
        }`}
      >
        { video && <video className="absolute w-full h-full object-cover" src={video} muted autoPlay loop></video> }
        <img className={`absolute z-3 w-full h-full object-cover ${video && "group-hover:opacity-0 transition duration-250"}`} src={image} alt=""/>
      </div>

      

      <div
        className={`overflow-hidden text-ellipsis w-full ${
          column ? "min-h-[0px] flex-between" : "lg:w-3/5"
        }`}
      >
        <p className="text-[20px] text-left text-gray-30">
          <span className="text-white font-bold">{title}</span> {description}
        </p>
      </div>
    </div>
  );
}
