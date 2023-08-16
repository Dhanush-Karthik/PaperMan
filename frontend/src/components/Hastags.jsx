import { useRef } from "react";
import Hastag from "./Hastag";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Hastags = () => {
  const scrollBar = useRef();

  const handleLeftClick = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft - 100;
  };
  const handleRightClick = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft + 100;
  };

  const listOfHastags = [
    "React.js",
    "Node.js",
    "Springboot",
    "axios",
    "IAM",
    "SSO",
    "java",
    "Javascript",
    "sass",
    "AI",
    "jsonwebtoken",
    "Cookies",
    "Cybersecurity",
    "Frontend",
    "Backend",
    "Machine learning",
    "Ui/Ux",
    "App development",
    "web development",
    "flutter",
    "Angular.js",
  ];
  return (
    <div className="w-[100%] flex justify-evenly items-center   ">
      <AiFillLeftCircle color="white" onClick={handleLeftClick} />
      <div
        ref={scrollBar}
        className="w-[90%] scroll-smooth flex gap-3 overflow-scroll p-3"
      >
        {listOfHastags.map((hastag, index) => (
          <Hastag hastag={hastag} key={index} />
        ))}
      </div>
      <AiFillRightCircle onClick={handleRightClick} color="white" />
    </div>
  );
};

export default Hastags;
