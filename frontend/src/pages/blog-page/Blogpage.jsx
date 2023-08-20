import { React, useState } from "react";

import "./BlogPage.css";

import { AiFillLike, AiOutlineArrowRight, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Tags from "../../components/tags/Tags";

import CommentContainer from "../../components/commentcontainer/CommentContainer";

import profile from "../../img/profile.png";
import Navbar from "../../components/Navbar";
const Blogpage = () => {
  const [openComment, setOpenComment] = useState(true);
  const [isLike, setIsLike] = useState(false);

  const subtitle = [
    {
      id: 1,
      title: "Subtitle-1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
    {
      id: 2,
      title: "Subtitle-2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
    {
      id: 3,
      title: "Subtitle-3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
    {
      id: 4,
      title: "Subtitle-4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Quod mollitia ducimu nobis maxime voluptatum eos excepturi dignissimos aliquid natus aut tempore, iure minus eveniet ad, perspiciatis, facere dolorem sunt corporis qui praesentium commodi neque? Culpa neque expedita enim, doloribus odio maiores exercitationem qui dolorum eligendi quos. Rerum ad consequuntur repudiandae repellendus fugiat perspiciatis est animi qui, tempore enim accusamus corrupti saepe veniam? Quos facilis, nemo est velit autem doloremque fuga animi odio libero. Tempora placeat deleniti et non adipisci, totam iusto enim, quos quas quasi quisquam cum voluptas earum maiores! In enim aperiam non doloribus. Magnam unde corrupti alias, neque quos praesentium ipsa blanditiis! Necessitatibus quidem vero recusandae incidunt, veniam laudantium numquam sed fuga in odio labore eius aliquid magnam ab consequatur sequi provident consectetur itaque velit perspiciatis explicabo eum neque quasi",
    },
  ];

  const suggestion = [
    {
      id: 1,
      title: "Suggestion-1",
      link: "#!",
    },
    {
      id: 2,
      title: "Suggeestion-2",
      link: "#!",
    },
    {
      id: 3,
      title: "Suggeestion-3",
      link: "#!",
    },
    {
      id: 4,
      title: "Suggeestion-4",
      link: "#!",
    },
  ];

  const tags = [
    {
      id: 1,
      value: "React JS",
    },
    {
      id: 1,
      value: "Node JS",
    },
    {
      id: 1,
      value: "Ruby",
    },
    {
      id: 1,
      value: "C",
    },
    {
      id: 1,
      value: "C#",
    },
    {
      id: 1,
      value: "C++",
    },
    {
      id: 1,
      value: "Java",
    },
    {
      id: 1,
      value: "Spring Boot",
    },
    {
      id: 1,
      value: "Keycloak",
    },
    {
      id: 1,
      value: "Maven",
    },
    {
      id: 1,
      value: "HTML",
    },
  ];
  const handleComment = () => {
    setOpenComment(false);
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <Navbar />

      <div className="heading-container">
        <div className="route">Home &gt; Blog &gt; Is JS dead?</div>
        <div className="topic">
          <h1 className="blog-title">Is Java script dead?</h1>
          <h1 className="subtitle">Lets get an overview!</h1>
        </div>
      </div>

      <div className="blog-container">
        <div id="options" className="options">
          <div className="icons" onClick={handleLike}>
            {isLike ? (
              <AiFillLike size={"20px"} color="rgb(13 148 136)" />
            ) : (
              <AiOutlineLike size={"20px"} color="rgb(13 148 136)" />
            )}
          </div>
          <div className="icons" onClick={handleComment}>
            <BiCommentDetail size={"20px"} color="rgb(13 148 136)" />
          </div>
        </div>
        <div className="blog">
          <p className="content">
            {subtitle.map((item) => {
              return (
                <>
                  <h3 className="blog-subtitle" id={item.id}>
                    {item.title}
                  </h3>
                  {item.content}
                  <br />
                  <br />
                </>
              );
            })}
          </p>
        </div>
        <div className="side-pannel">
          <div className="top-categories">
            <h1 className="title">Top Categories</h1>
            <div className="catg-container">
              {tags.map((item) => (
                <Tags id={item.id} value={item.value} />
              ))}
            </div>
          </div>
          <div className="sidepanel-sticky">
            <div className="sidepanel-container">
              <h1 className="title">Author</h1>
              <div className="author">
                <img src={profile} className="profile-photo" />
                <div>
                  <div className="author-name">Dhanush Karthik</div>
                  <div className="author-role">Newbiee</div>
                </div>
              </div>
            </div>
            <div className="sidepanel-container">
              <h1 className="title">Table of content</h1>
              <ul className="sidepanel-container-list">
                {subtitle.map((item) => {
                  return (
                    <div className="arrow">
                      <AiOutlineArrowRight color="rgb(13 148 136)" />
                      <a className="sug" href={"#" + item.id}>
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="sidepanel-container">
              <h1 className="title">Suggestions</h1>
              <ul className="sidepanel-container-list">
                {suggestion.map((item) => {
                  return (
                    <div className="arrow" id={item.id}>
                      <AiOutlineArrowRight color="rgb(13 148 136)" />
                      <a className="sug" href={item.link}>
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CommentContainer
        openComment={openComment}
        setOpenComment={setOpenComment}
      />
    </>
  );
};

export default Blogpage;
