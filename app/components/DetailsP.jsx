import Image from "next/image";
const detailsdata = [
  {
    img: "/image/details-img-1.jpg",
    title: "Project Title",
    description:
      "Brief description of the projects that showcases your skills and expertise in web development, app development, or UI/UX design. This section can include details about the technologies used, challenges faced, and solutions implemented.",
    libeLink: "https://example.com",
    clintLink: " https://example.com ",
    sarvarLink: "https://example.com",
    category: "Web Development",
    date: "2023-10-01",
    tools: ["React", "Node.js", "CSS"],
    status: "Completed",
  },
];
const DetailsP = () => {
  return (
    <div className="  container mx-auto ">
      {detailsdata.map((item, index) => (
        <div key={index} className="p-4 bg-white rounded-lg  ">
          <Image
            src={item.img}
            alt="Project Image"
            className="object-cover rounded-lg mx-auto w-full "
            width={1000}
            height={500}
          />
          <div className="md:flex justify-between items-center  mt-5">
            <div className="md:w-2/3">
              <h2 className="md:text-2xl text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
            </div>
            <div className="md:w-1/3 flex flex-col justify-end p-5 bg-neutral-100 rounded-lg ">
              <table className=" leading-8">
                <tbody>
                <tr>
                  <td className=" font-semibold font-Roboto text-lg">Category</td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                    {item.category}
                  </td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg"> Start Date</td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                    {item.date}
                  </td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg"> End Date</td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                    {item.date}
                  </td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg">  Tools</td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                    {item.tools.join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className=" font-semibold font-Roboto  text-lg">    Status</td>
                  <td className="text-gray-700 font-popins ">
                    {" "}
                     {item.status}
                  </td>
                </tr>
                </tbody>
              </table>

           
              <div className="flex justify-between mt-4">
                <button className=" border  font-semibold border-main text-white px-4 py-2 rounded bg-main hover:text-main hover:bg-white transition-colors">
                  <a href={item.libeLink} className=" hover:underline">
                    Live Demo
                  </a>
                </button>
                <button className=" border  font-semibold border-main text-main px-4 py-2 rounded bg-white hover:bg-main hover:text-white transition-colors">
                  <a href={item.clintLink} className="hover:underline">
                    Video Link
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsP;
