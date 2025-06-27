"use client";

const sections = [
  { key: "all",  label: "All" },
  { key: "web",  label: "Web Development" },
  { key: "app",  label: "App Development" },
  { key: "ui",  label: "UI/UX Design" },
];
const SidbarP = ({ activeSection, onSectionChange }) => {
  return (
    <div>
      <ul className="flex gap-4 text-lg font-open font-semibold mb-8 justify-center border-b-1 border-b-gray-300 pb-2 w-[520px] mx-auto">
        {sections.map((section) => (
          <li
            key={section.key} 
            className={`cursor-pointer hover:text-main transition duration-300 ${
              activeSection === section.key
                ? "text-main border-b-2 border-b-main"
                : "text-gray-500"
            }`}
            onClick={() => onSectionChange(section.key)}
          >
            {section.label}
            </li>
        ))}
            
       
      </ul>
    </div>
  );
};

export default SidbarP;
