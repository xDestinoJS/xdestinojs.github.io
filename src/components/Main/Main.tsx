import { Space_Grotesk } from "next/font/google";
import Project from "./Project";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Main() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center flex-col text-white pt-8 text-left">
        <div className="w-[700px]">
          <h1 className="text-[40px] font-black">👋 I'm xDestino.</h1>
          <p className={`${spaceGrotesk.className} text-[24px]`}>
            I'm passionate about programming in general, with a special interest
            in web development and design. I enjoy building projects that are
            both clean and visually appealing whenever I have the chance.
          </p>
        </div>

        <h3
          className={`${spaceGrotesk.className} mt-8 mb-5 text-[23px] font-extrabold text-[#4F4F4F]`}
        >
          My Work
        </h3>

        <div className="flex gap-5">
          <Project
            title="Who's Who!?"
            description="was a Discord activity that recreated Guess Who?, where players asked yes-or-no questions to identify a hidden character."
            image="https://repository-images.githubusercontent.com/130268121/b4fd5300-b585-11ea-8718-1e141e78842e"
          />

          <Project
            title="Who's Who!?"
            description="was a Discord activity that recreated Guess Who?, where players asked yes-or-no questions to identify a hidden character."
            image="https://repository-images.githubusercontent.com/130268121/b4fd5300-b585-11ea-8718-1e141e78842e"
            column={true}
          />
        </div>
      </div>
    </div>
  );
}
