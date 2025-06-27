import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto w-full   min-h-100vh bg-white rounded-xl  text-black px-12 py-25">
      {/* =====================About Me===================== */}

      <h1 className="text-4xl mb-10 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
        About Me
      </h1>

      <div className="flex justify-between ">
        <div className="w-1/4 mt-24">
          <div className="relative border-10 border-main-border  rounded-xl ">
            <Image
              src="/image/aboutimg.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div className=" absolute top-10 left-0 w-12 h-30 pl-2 bg-main-border">
              <Link href="https://www.facebook.com/MD.Shefaitur.rahman.nayon/">
                <FaFacebookSquare className="text-3xl my-2 text-main" />
              </Link>
              <Link href="https://www.linkedin.com/in/shefaitur-rahman/">
                <FaLinkedin className="text-3xl my-2 text-main" />
              </Link>
              <Link href="https://github.com/shefai-tur">
                <FaSquareGithub className="text-3xl my-2 text-main" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-2/5">
          <div>
            <h1 className="font-open text-3xl font-semibold tracking-wider">
              I'M Shefaitur Rahman
            </h1>
            <p className=" font-normal text-lg tracking-widest mt-3 mb-5 font-popins text-text">
              A Full Stack Web Developer!
            </p>
          </div>
          <p className="text-base font-normal font-popins text-pera  tracking-wider">
            I have a strong ability to solve complex logic and tackle various
            web development tasks. I possess a thorough understanding of
            JavaScript, HTML, and CSS, and I am highly experienced in utilizing
            modern technologies, particularly React JS. My knowledge extends to
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript ES6, ReactJS, Redux,
            NextJS, NodeJS, NPM, YARN, ExpressJS, MongoDB, Mongoose, Aggregate,
            Postman, Data Structures, and Algorithms.
            <span className="block mt-3">
              Fixing errors is my favorite aspect of programming because it
              provides an opportunity to learn something new. I am relentless in
              resolving errors and won't give up until they are fixed.
              Throughout my programming journey, I have encountered and
              successfully solved a wide range of problems. My approach is to
              persist until a solution is found.
            </span>
          </p>
        </div>
        <div className="w-1/4">
          <ul className="flex justify-items-centerer mt-24  mb-16 ">
            <li className="pr-5 ">
              <span className="block mb-5 font-Roboto text-primary font-semibold ">
                Name
              </span>
              <span className="block mb-5 font-Roboto text-primary font-semibold ">
                Email
              </span>
              <span className="block mb-5 font-Roboto text-primary font-semibold ">
                Nationality
              </span>
              <span className="block mb-5 font-Roboto text-primary font-semibold ">
                Language
              </span>
              <span className="block mb-5 font-Roboto text-primary font-semibold ">
                From
              </span>
            </li>
            <li className="info-details">
              <span className="block mb-5 font-popins text-pera border-b-2  border-b-main">
                Shefaitur rahman (Noyon)
              </span>
              <span className="block mb-5 font-popins text-pera  border-b-2  border-b-main">
                shefaitur@gmail.com
              </span>
              <span className="block mb-5 font-popins text-pera border-b-2  border-b-main">
                Bangladesh
              </span>
              <span className="block mb-5 font-popins text-pera border-b-2  border-b-main">
                Bangla,English
              </span>
              <span className="block mb-5 font-popins text-pera border-b-2  border-b-main">
                Cox's Bazar,Bangladesh
              </span>
            </li>
          </ul>
          <div>
            <Link href="/contact">
              <button className="bg-main text-[16px] font-medium px-11 py-3 rounded-sm text-white hover:bg-white  hover:text-main transition-all duration-300 ease-in-out border cursor-pointer">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ================================= What I Do!============================== */}

      <div className=" mt-28">
        <h1 className="text-4xl mb-10 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
          What I Do!
        </h1>
        <div className="flex justify-between ">
          <div className="w-2/5">
            <div className="flex justify-center items-center gap-5 mb-5">
              <FaLaptopCode className="text-5xl text-main" />
              <h2 className="font-open text-3xl font-semibold tracking-wider">
                Web Development
              </h2>
            </div>
            <p className="text-base font-normal font-popins text-pera  tracking-wider">
              I am a web developer who specializes in creating and maintaining
              websites. With a keen focus on technical aspects, I ensure optimal
              performance and capacity for your personal website, delivering a
              seamless user experience. Let me help bring your online presence
              to life with speed, efficiency, and scalability.
            </p>
          </div>
          <div className="w-2/5">
            <div className="flex justify-center items-center gap-5 mb-5">
              <SiCodementor className="text-5xl text-main" />
              <h2 className="font-open text-3xl font-semibold tracking-wider">
                Web Design
              </h2>
            </div>
            <p className="text-base font-normal font-popins text-pera  tracking-wider">
              I am a web designer who specializes in creating visually appealing
              and user-friendly websites. With a keen eye for design and a focus
              on user experience, I ensure that your website not only looks
              great but also functions seamlessly. Let me help you create a
              stunning online presence that captivates your audience.
            </p>
          </div>
        </div>
      </div>
      {/* ====================== Testimonials==================== */}
      <div className="mt-28">
        <h1 className="text-4xl mb-10 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
          Testimonials
        </h1>
        <h2 className=" text-5xl tracking-widest mt-3 mb-5 font-popins font-bold text-primary w-lg leading-[1.4]">
          What People Say About Me
        </h2>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="w-1/2">
            <FaQuoteLeft className=" text-5xl text-main mx-auto mb-1.5" />
            <p className="text-secondary text-xl leading-[1.8]  font-open;">
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis iste natus error sit voluptatem laudantium."
            </p>
            <div className="flex flex-col justify-center items-center text-center gap-1  mt-10">
              <Image
                className="rounded-full "
                src="/image/james.jpg"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <h3 className="text-primary font-Roboto text-base font-medium">
                James Parker
              </h3>
              <h4 className=" text-sm text-pera font-popins ">Web Developer</h4>
            </div>
          </div>
        </div>
      </div>
      {/* =============================Brands & Clients========================= */}
      <div className="mt-28">
        <h1 className="text-4xl mb-10 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
          Brands & Clients
        </h1>
        <div className=" grid grid-cols-5 justify-between items-center gap-5  ">
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img1.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className="w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img2.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img3.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img4.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img5.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img6.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img7.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img8.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className="w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img9.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
          <div>
            <Image
              className=" w-62  h-28   border-2  border-main-border rounded-sm  p-5"
              src="/image/brand-img10.png"
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
