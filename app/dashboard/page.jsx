//  img: "/image/portfolio-img1.jpg",
//     title: "Project Title",
//     description: "Brief description of the project",
const page = () => {
  return (
    <div className="bg-white container mx-auto p-5 text-black">
      
    <h2>Welcome to the Dashboard</h2> 
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       <div>
          
       <p>title</p>
      <input type="text"  className=" border border-primary"/>
      <p>description</p>
      <input type="text"  className=" border border-primary"/>
      <p>img</p>
      <input type="file" className="border border-primary" />
      </div>
      <div>
          
       <h1>poup ctg</h1>
       <p>Category</p>
       <select name="" id="" disabled="disabled">
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="desktop">Desktop</option>
        <option value="other">Other</option>
       </select>
      <p> start date</p> 
      <input type="date"  className=" border border-primary"/>
      <p> end date</p>
      <input type="date"  className=" border border-primary"/>
      <p>tools</p>
      <input type="text"  className=" border border-primary"/>
      <p>status</p>
      <input type="text"  className=" border border-primary"/>
      <p>Live Demo</p>
      <input type="url" name="" id="" />
      <p>video Link</p>
      <input type="url" name="" id="" />
      <video src="#"></video>
      <input type="file" className="border border-primary" />
      </div>
   </div>
     
    </div>
  );
};

export default page;
