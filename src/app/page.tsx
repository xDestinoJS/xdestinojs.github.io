import { Poppins } from "next/font/google";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App() {
  return (
    <div className="flex justify-center min-h-svh">
      <div className={`${poppins.className} p-8  bg-[#191919] w-[1100px]`}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}
