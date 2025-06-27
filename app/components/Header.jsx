import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between mx-5 my-14">
      <Link href="/">
      <div className="text-main text-5xl  flex items-center gap-2 ">
        <FaLaptopCode />
        <h1 className=" text-white font-popins font-semibold text-3xl">SRN..</h1>
      </div>
      </Link>
      <div>
        <button className="bg-main text-[16px] font-medium px-11 py-3 rounded-sm">
          Download Cv
        </button>
      </div>
    </div>
  );
};

export default Header;
