import React from "react";
import { USER_ICON_URL } from "../utils/constants";

const commentsData = [
   {
      name: "Brat",
      comment: "Lorem ipsum dolor, sit amet consectetur",
      replies: [],
   },
   {
      name: "king369",
      comment: "Lorem ipsum dolor, sit amet consectetur",
      replies: [
         {
            name: "Fearless@jkl",
            comment: "Lorem ipsum dolor, sit amet consectetur",
            replies: [
               {
                  name: "bratMan",
                  comment: "Lorem ipsum dolor, sit amet consectetur",
                  replies: [
                     {
                        name: "tada00u",
                        comment: "Lorem ipsum dolor, sit amet consectetur",
                        replies: [
                           {
                              name: "KLM",
                              comment:
                                 "Lorem ipsum dolor, sit amet consectetur",
                              replies: [],
                           },
                        ],
                     },
                     {
                        name: "MP Bro",
                        comment: "Lorem ipsum dolor, sit amet consectetur",
                        replies: [],
                     },
                  ],
               },
            ],
         },
         {
            name: "ManBat",
            comment: "Lorem ipsum dolor, sit amet consectetur",
            replies: [
               {
                  name: "ManHunter345",
                  comment: "Lorem ipsum dolor, sit amet consectetur",
                  replies: [],
               },
            ],
         },
      ],
   },
   {
      name: "SpiderMan-Infinity",
      comment: "Comment 3 Lorem ipsum dolor, sit amet consectetur",
      replies: [],
   },
   {
      name: "SubZero",
      comment: "Lorem ipsum dolor, sit amet consectetur",
      replies: [
         {
            name: "Zoro",
            comment: "Lorem ipsum dolor, sit amet consectetur",
            replies: [
               {
                  name: "Shaktiman",
                  comment: "Lorem ipsum dolor, sit amet consectetur",
                  replies: [],
               },
            ],
         },
      ],
   },
];

const Comment = ({ data }) => {
   //    console.log(data, "Data");
   return (
      <div className="flex m-2 p-2  items-center bg-slate-900 rounded-lg ">
         <div>
            <img
               src={USER_ICON_URL}
               alt="userAvatar"
               className="w-8 h-8 mr-2"
            />
         </div>
         <div>
            <div className=" font-bold">{data.name}</div>
            <div>{data.comment}</div>
         </div>
      </div>
   );
};

const CommentsList = ({ comments }) => {
   //    console.log(comments, "COMENNTS DATA");
   return comments.map((comment, index) => {
      return (
         <div>
            <Comment key={index} data={comment} />
            <div className="pl-4 ml-4  border-l border-l-slate-300">
               <CommentsList comments={comment.replies} />
            </div>
         </div>
      );
   });
};

const CommentsContainer = () => {
   return (
      <div className="my-4">
         <div className=" font-bold text-xl ml-2">Comments: </div>
         <CommentsList comments={commentsData} />
      </div>
   );
};

export default CommentsContainer;
