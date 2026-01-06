import Image from "next/image";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <main>
      <div className="container mx-auto md:px-5 ">
        <div className="  w-full h-full rounded-xl border md:border-4   border-white bg-[url(/image/homeImg1.jpg)] bg-cover bg-center bg-no-repeat  relative">
          <nav className=" absolute bottom-[-20]  w-full z-50">
           <Nav/>
          </nav>
          <div className="md:flex   items-center justify-center h-full bg-black/50  rounded-xl py-14  ">
         
            <div className="md:w-1/2">
              <div className=" w-44 h-56 md:w-90 md:h-[500px] rounded-full   mx-auto  relative  ">
                <Image
                  className="w-44 h-56 md:w-90 md:h-[500px]  rounded-full object-cover"
                  src="/image/ProfileImg.jpg"
                  alt="Profile Image"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                  loading="eager"
                  quality={100}
                  width={360}
                  height={500}
                />
                <div>
                  <Image
                    className="w-10 h-10 md:w-18 md:h-18 rounded-xl border-4  bg-white  absolute  top-10 md:top-20 left-[-30] md:left-[-35]   "
                    src="/image/skill5.png"
                    alt="MongoDB"
                    loading="eager"
                    quality={100}
                    width={50}
                    height={50}
                  />
                  <Image
                    className="w-10 h-10 md:w-18 md:h-18 rounded-xl border-4  bg-white top-10 md:top-20 right-[-30] md:right-[-35]  absolute"
                    src="/image/skill3.png"
                    alt="MongoDB"
                    loading="eager"
                    quality={100}
                    width={50}
                    height={50}
                  />
                  <Image
                    className="w-10 h-10 md:w-18 md:h-18 rounded-xl border-4  bg-white bottom-10 md:bottom-25 right-[-30] md:right-[-35] absolute"
                    src="/image/skill6.png"
                    alt="MongoDB"
                    loading="eager"
                    quality={100}
                    width={50}
                    height={50}
                  />
                  <Image
                    className="w-10 h-10 md:w-18 md:h-18 rounded-xl border-4  bg-blue-600 absolute bottom-10 md:bottom-25 left-[-30] md:left-[-35]"
                    src="/image/skill10.png"
                    alt="MongoDB"
                    loading="eager"
                    quality={100}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2  flex-col items-center justify-center text-white text-center md:text-left mt-5 md:mt-0 px-5">
              <h3 className=" font-Roboto font-semibold text-xl mb-3 ">
               Hi, I’m  Shefaitur Rahman
              </h3>
              <h1 className="font-Roboto font-bold text-3xl md:text-7xl mb-2 ">
                React & Tailwind   <span className=" text-main"> Frontend Developer.</span>
              </h1>
              <p className=" mb-11  font-Roboto font-semibold text-xl">
               I design fast, responsive and modern websites for startups & businesses.
               
              </p>

              <button className=" bg-main text-[16px] font-medium px-8 md:px-11 py-2 md:py-3 rounded-sm text-white hover:bg-transparent  hover:text-main transition-all duration-300 ease-in-out border cursor-pointer">
                Let's Work
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
