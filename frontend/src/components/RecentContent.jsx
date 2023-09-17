import React, { useRef, useEffect } from "react";
import HomeCard from "./HomeCard";
import RecentBlogCard from "./RecentBlogCard";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
const RecentContent = () => {
  const scrollBar = useRef();
  const handleScrollRight = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft + 340;
  };
  const handleScrollLeft = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft - 340;
  };
  const listOfSpecificContent = [
    {
      caption: "Learn WebML in easy Way",
      thumbnail:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1284006/retina_1708x683_cover-0323-MachineLearning_Dan_Newsletter-b21703f41d807514083e297955e1b46d.png",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 1,
      hastags: [],
    },
    {
      caption: "Javascript is god.",
      thumbnail:
        "https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 2,
      hastags: [],
    },
    {
      caption: "Learn sockets using Node.js",
      thumbnail:
        "https://www.peerbits.com/static/3908ce2a3941a9a56f1b145496600fac/189bc/development-practices-for-node-js-developers-main.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
    {
      caption: "Springboot",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:900/0*t61rpXrvkpesX_8U.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
    {
      caption: "Web development",
      thumbnail:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
  ];
  useEffect(() => {
    let prevScrollValue = 0;
    const scrollAmount = 335;
    const interval = setInterval(() => {
      const currentScrollAmount = scrollBar.current.scrollLeft + scrollAmount;
      if (prevScrollValue === currentScrollAmount) {
        scrollBar.current.scrollLeft = 0;
      } else {
        scrollBar.current.scrollLeft += scrollAmount;
      }
      prevScrollValue = currentScrollAmount;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[100%] flex flex-col gap-7 mt-10 justify-center items-center overflow-hidden  ">
      <div className="w-[90%]  ">
        <h1 className="text-white text-xl  ">Recent Blogs</h1>
      </div>
      <div className="flex gap-4  w-[100%]   justify-center items-center   ">
        <AiFillLeftCircle color="blue" size={30} onClick={handleScrollLeft} />
        <div
          ref={scrollBar}
          className="w-[100%] p-3    flex    gap-8  overflow-scroll scroll-smooth  scrollbar-hide  "
        >
          {listOfSpecificContent.map((item, index) => {
            return <RecentBlogCard object={item} key={index} />;
          })}
        </div>
        <AiFillRightCircle color="blue" size={30} onClick={handleScrollRight} />
      </div>
    </div>
  );
};

export default RecentContent;
