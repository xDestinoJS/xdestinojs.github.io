import { Space_Grotesk } from "next/font/google";
import Project from "./Project";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Main() {
  return (
    <div className="lg:flex justify-center items-center">
      <div className="flex justify-center items-center flex-col text-white pt-8 text-left">
        <div className="md:w-5/6 lg:w-[700px]">
          <h1 className="text-[40px] font-black">👋 I&apos;m xDestino.</h1>
          <p className={`${spaceGrotesk.className} text-[24px]`}>
            I&apos;m passionate about programming in general, with a special interest
            in web development and design. I enjoy building projects that are
            both clean and visually appealing whenever I have the chance.
          </p>
        </div>

        <h3
          className={`${spaceGrotesk.className} mt-8 mb-5 text-[23px] font-extrabold text-[#4F4F4F]`}
        >
          My Work
        </h3>

        <div className="flex gap-5 justify-center items-center flex-col lg:flex-row">
          <Project
            title="Who's Who!?"
            description="was a Discord activity that recreated Guess Who?, where players asked yes-or-no questions to identify a hidden character."
            image="/whoswho.png"
            video="/video.mp4"
          />

          <Project
            title="Tanky Tanks"
            description="was a fun Discord Activity project involving tanks."
            image="/tankytanks.png"
            video="/video2.mp4"
            column={true}
          />
        </div>

        <div className="flex gap-5 mt-5 justify-center items-center flex-col lg:flex-row">
          <Project
            title="Game Icons"
            description="are some very time-involving yet fun projects."
            image="/gameicon.jpeg"
            video="/video3.mp4"
            column={true}
          />

          <Project
            title="RedZone Football"
            description="is a Roblox experience that brings fast-paced football action to the platform. My task was to remake the UI, improving its design and functionality for a smoother player experience."
            image="/redzone.png"
            video="/video4.mp4"
          />
        </div>
      </div>
    </div>
  );
}
