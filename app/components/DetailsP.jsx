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
    <div className=" container mx-auto ">
      {detailsdata.map((item, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md ">
          <img
            src={item.img}
            alt="Project Image"
            className="object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between items-center mb-4">
            <div className="w-2/3">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
            </div>
            <div className="w-1/4 flex flex-col justify-end">
              <div className="flex space-x-2">
                <a
                  href={item.libeLink}
                  className="text-blue-500 hover:underline"
                >
                  Live Link
                </a>
                <a
                  href={item.clintLink}
                  className="text-blue-500 hover:underline"
                >
                  Clint Link
                </a>
                <a
                  href={item.sarvarLink}
                  className="text-blue-500 hover:underline"
                >
                Sarvar Link
                </a>
                
            </div>
            <p className="text-gray-700 mb-4">{item.category}</p>
            <p className="text-gray-700 mb-4">Date: {item.date}</p>
            <p className="text-gray-700 mb-4">
              Tools: {item.tools.join(", ")}
            </p>
            <p className="text-gray-700 mb-4">Status: {item.status}</p>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsP;
