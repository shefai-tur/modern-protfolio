"use client";
import Nav from "@/app/components/Nav";
import Image from "next/image";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
const resume = () => {
  const items = [
   
    <Image
      src="/image/SSC.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />,
    <Image
      src="/image/diplomaC.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />,
    <Image
      src="/image/JICACertificate.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />,
    <Image
      src="/image/InternshipCertificate.jpg"
      alt="Picture of the author"
      width={500}
      height={1000}
    />,
  ];
  return (
    <div className=" container mx-auto bg-white  text-black px-12 py-25 min-h-100vh w-full rounded-xl relative">
        <nav className=" absolute top-[-15] md:top-[-30] right-0 w-full z-50">
                 <Nav/>
                </nav>
      <div className=" border-b-1 border-b-main-border pb-24">
        <h1 className="text-4xl mb-14 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
          Resume
        </h1>
        <div className="flex  justify-between">
          <div className="w-2/5 ">
            <h2 className="font-open text-3xl font-semibold tracking-wider pb-5">
              Work Experience
            </h2>
            <div className=" relative pl-5 ">
              <h3 className="font-popins text-2xl font-semibold tracking-wider after:w-2.5 after:h-2.5 after:bg-main after:content-['']  after:rounded-full after:top-3 after:left-[-4] after:absolute   before:border-l before:border-l-main-border  before:absolute before:top-3 before:left-0 before:h-full before:content-[''] ">
                Software Development
              </h3>

              <p className="text-gray-500 my-2.5 font-popins">
                ICT Bangladesh. <span>61 Bijoy Nagar Road Dhaka</span>{" "}
                <span>(20,Aug,2023-2024)</span>
              </p>

              <ul className="list-disc pl-5 font-popins text-base pb-5">
                <li>Developed user-friendly web applications using React.</li>
                <li>
                  Collaborated with designers to implement UI/UX best practices.
                </li>
                <li>Optimized application performance and responsiveness.</li>
              </ul>
            </div>
            <div className=" relative pl-5 ">
              <h3 className="font-popins text-2xl font-semibold tracking-wider after:w-2.5 after:h-2.5 after:bg-main after:content-['']  after:rounded-full after:top-3 after:left-[-4] after:absolute   before:border-l before:border-l-main-border  before:absolute before:top-3 before:left-0 before:h-full before:content-[''] ">
                Full stack Web And App Development
              </h3>

              <p className="text-gray-500 my-2.5 font-popins">
                <span>(JICA)</span>{" "}
                <span>Cox's Bazar Polytechnic Institute</span>{" "}
                <span>(May,2023)</span>
              </p>

              <ul className="list-disc pl-5 font-popins text-base pb-5">
                <li>Developed user-friendly web applications using React.</li>
                <li>
                  Collaborated with designers to implement UI/UX best practices.
                </li>
                <li>Optimized application performance and responsiveness.</li>
              </ul>
            </div>
            <div className=" relative pl-5 ">
              <h3 className="font-popins text-2xl font-semibold tracking-wider after:w-2.5 after:h-2.5 after:bg-main after:content-['']  after:rounded-full after:top-3 after:left-[-4] after:absolute   before:border-l before:border-l-main-border  before:absolute before:top-3 before:left-0 before:h-full before:content-[''] ">
                MERN Stack Development
              </h3>

              <p className="text-gray-500 my-2.5 font-popins">
                <span>Creative IT Institute</span>{" "}
                <span>Cox's Bazar Polytechnic Institute</span>{" "}
                <span>(May,2023)</span>
              </p>

              <ul className="list-disc pl-5 font-popins text-base pb-5">
                <li>Developed user-friendly web applications using React.</li>
                <li>
                  Collaborated with designers to implement UI/UX best practices.
                </li>
                <li>Optimized application performance and responsiveness.</li>
              </ul>
            </div>
          </div>
          <div className="w-2/5">
            <h2 className="font-open text-3xl font-semibold tracking-wider pb-5">
              Education
            </h2>
            <div className=" relative pl-5 ">
              <h3 className="font-popins text-2xl font-semibold tracking-wider after:w-2.5 after:h-2.5 after:bg-main after:content-['']  after:rounded-full after:top-3 after:left-[-4] after:absolute   before:border-l before:border-l-main-border  before:absolute before:top-3 before:left-0 before:h-full before:content-[''] ">
                Diploma in Engineering (CSE-2023)
              </h3>

              <div className="text-gray-500 my-2.5 font-popins">
                <p>Bangladesh Technical Education Board (BTEB)</p>
                <p>
                  <span>Passed Four-Year Diploma in December,2023</span>{" "}
                  <span>(3.34 on a scale 4.00)</span>
                </p>
              </div>

              <div className=" pl-5 font-popins text-base pb-5">
                <p>
                  Experienced computer engineer with a diploma in Computer
                  Science Engineering, equipped with comprehensive knowledge in
                  computer science, mathematics, and engineering concepts.
                  Proficient in applying computing techniques to develop
                  innovative solutions. Strong problem-solving skills and a
                  passion for staying updated with emerging technologies.
                  Seeking challenging opportunities to contribute to the field
                  of computer engineering
                </p>
              </div>
            </div>
            <div className=" relative pl-5 ">
              <h3 className="font-popins text-2xl font-semibold tracking-wider after:w-2.5 after:h-2.5 after:bg-main after:content-['']  after:rounded-full after:top-3 after:left-[-4] after:absolute   before:border-l before:border-l-main-border  before:absolute before:top-3 before:left-0 before:h-full before:content-[''] ">
                Secondary School Certificate (SSC-2019)
              </h3>

              <div className="text-gray-500 my-2.5 font-popins">
                <p>Bangladesh Technical Education Board (BTEB)</p>
                <p>
                  <span>(CIT),Trade held in March-2019</span>{" "}
                  <span>(4.57 on a scale 5.00)</span>
                </p>
              </div>

              <div className=" pl-5 font-popins text-base pb-5">
                <p>
                  I hold a Secondary School Certificate Moheshkhali Island High
                  School, Cox'S Bazar specializing in Computer & Infromation
                  Technology. I successfully completed my SSC in March-2019. I
                  have a strong foundation in Computer principles and am eager
                  to apply my knowledge and skills in a challenging and
                  rewarding professional environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== skills ponts ==================== */}

      <div className=" mt-28">
        <h1 className="text-4xl mb-14 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
          Skill Point
        </h1>
        <div className="flex justify-between border-b-1 border-b-main-border pb-24">
          <div className="w-2/5">
            <div>
              <Image
                src="/image/skill.gif"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="grid grid-cols-4 gap-5">
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill1.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill2.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill3.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill4.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill5.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill6.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill7.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill8.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill9.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill10.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill11.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill12.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill13.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
              <div className="  w-24 h-24 bg-neutral rounded-full flex justify-center items-center">
                <Image
                  src="/image/skill14.png"
                  alt="Picture of the author"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== CERTIFICATE ==================== */}
      <div className="mt-28">
        <h1 className="text-4xl mb-14 pl-6  font-semibold  font-Roboto leading-[1.1] border-l-4 border-l-main ">
          MY CERTIFICATE
        </h1>
      
        <div className="App">
          <Carousel
            items={items}
            startIndex={0}
            onChange={(currentIndex) => console.log(currentIndex)}
          />
        </div>
      </div>
    </div>
  );
  hc;
};

export default resume;
