import { React, useState } from "react";

import "./BlogPage.css";

import CommentContainer from "../../components/commentcontainer/CommentContainer";

import Navbar from "../../components/Navbar";
import BlogTitle from "../../components/blogtitle/BlogTitle";
import BlogOptions from "../../components/options/BlogOptions";

import TopCategories from "../../components/topcategories/TopCategories";
import Author from "../../components/author/Author";
import TableOfContent from "../../components/tableofcontent/TableOfContent";
import BlogSuggestion from "../../components/blogsuggestion/BlogSuggestion";
import ReadOnlyEditor from "../../components/readonlyeditor/ReadOnlyEditor";
import DescriptionContainer from "../../components/descriptioncontainer/DescriptionContainer";

const Blogpage = () => {
  const [openComment, setOpenComment] = useState(true);

  // BlogRouter.get("/sample", async (req, res) => {
  //   console.log("getting");
  //   const blog = await blogModel.find();
  //   console.log(blog);
  //   return res.status(200).json({
  //     message: "successfull",
  //     data: blog,
  //   });
  // });

  const blogData = {
    title: "Is Javascript dead?",
    subtitle: "Let's Explore Javascript",
    subTopics: [
      {
        id: 1,
        subTopic: "Subtopic-1",
        content: [
          {
            type: "description",
            data:  `{"blocks":[{"key":"3eesq","text":"Lorem ipsum title","type":"header-one","depth":0,"inlineStyleRanges":[{"offset":0,"length":17,"style":"HIGHLIGHT"}],"entityRanges":[],"data":{}},{"key":"f63nc","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e5qh4","text":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit nobis omnis iure delectus rerum tempora unde sint deserunt quam fuga laudantium corporis enim voluptate maxime animi, tempore iusto eligendi debitis dicta pariatur impedit? Sit, architecto qui modi corporis excepturi nam aliquam voluptatem praesentium nulla magni enim animi officiis, dignissimos nobis, officia quidem tempora natus dolor quisquam autem! Repellat veritatis facere deserunt voluptatibus aperiam omnis sapiente adipisci mollitia eius quis. Aut corrupti aliquid vitae sit? Nisi aut neque illum delectus! Sequi quasi numquam, qui error blanditiis commodi eligendi, ex nostrum iure minus officia doloremque! Atque totam deleniti delectus, quae ad ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dksbi","text":"praesentium voluptas adipisci impedit tenetur temporibus. In omnis molestias, perspiciatis cum rem perferendis vitae aperiam iste, quibusdam facilis voluptatibus, id possimus. Dolores numquam ipsam id consequuntur officia eius, tempore nisi, quidem fugiat est quo ea fuga. Voluptas praesentium officia atque tenetur illo similique delectus, deserunt hic rerum debitis quae a eveniet neque cupiditate voluptates quis voluptatibus rem possimus doloremque! Fugiat optio itaque at quis rerum aspernatur saepe, modi qui incidunt id corrupti minus impedit accusamus natus sequi ratione debitis. Consectetur nostrum porro voluptate? Possimus fugit numquam, qui, eligendi est laboriosam placeat enim deserunt nulla neque dolorem eum omnis quas facilis in.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aig91","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fom5l","text":"int a=10;","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"CODEBLOCK"}],"entityRanges":[],"data":{}},{"key":"dquf9","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b8esq","text":"this is quote ra","type":"blockQuote","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f242u","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"oo65","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"551a4","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
          },
          {
            type: "code",
            data: {
              language: "java",
              code: "int a=10;\nSystem.out.println(\"helloWorld\")\nint num=20;",
            },
          },
        ],
      },
      {
        id: 2,
        subTopic: "SubTopic-2",
        content: [
          {
            type: "description",
            data:  "{\"blocks\":[{\"key\":\"3eesq\",\"text\":\"sdfsadWrite about the topic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":25,\"length\":2}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          },
          {
            type: "code",
            data: {
              language: "java",
              code: "int a=10;",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <BlogTitle blog={blogData} />
      <div className="blog-container">
        <BlogOptions setOpenComment={setOpenComment} />
        <div className="blog">
          <div className="content">
            {blogData.subTopics.map((subTopic) => {
              return (
                <>
                  <h3 className="blog-subtitle" id={subTopic.id}>
                    {subTopic.subTopic}
                  </h3>
                  {subTopic.content.map((content)=>{
                    
                    if(content.type==="code")
                     return <ReadOnlyEditor language={content.data.language} code={content.data.code}/>
                    else 
                      return <DescriptionContainer value={content.data} />
                  })}
                </>
              );
            })}
          </div>
        </div>

        <div className="side-pannel">
          <TopCategories />
          <div className="sidepanel-sticky">
            <Author />
            <TableOfContent />
            <BlogSuggestion />
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
