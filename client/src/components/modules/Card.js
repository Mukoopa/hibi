import React, { useState } from "react";

import "./Card.css";
import { post } from "../../utilities";

// /**
//  * New Post is a parent component for all input components
//  *
//  * Proptypes
//  * @param {string} defaultText is the placeholder text
//  * @param {string} storyId optional prop, used for comments
//  * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
//  */

// const NewPostInput = (props) => {
//   const [value, setValue] = useState("");

//   // called whenever the user types in the new post input box
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   // called when the user hits "Submit" for a new post
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.onSubmit && props.onSubmit(value);
//     setValue("");
//   };

//   return (
//     <div className="u-flex">
//       <input
//         type="text"
//         placeholder={props.defaultText}
//         value={value}
//         onChange={handleChange}
//         className="NewPostInput-input"
//       />
//       <button
//         type="submit"
//         className="NewPostInput-button u-pointer"
//         value="Submit"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };



const NewPostInput = (props) => {
      const [value, setValue] = useState(""); // want to return the length of the list you're in
    
      personalQueue.push(props.username) // adds user to queue
      // where do I call this prop?


      // called whenever the user types in the new post input box
    //   const handleChange = (event) => {
    //     setValue(event.target.value);
    //   };
    //   const handleChange = (event) => {
    //     setValue(event.target.value);
    //   };
    
      // called when the user hits "Submit" for a new post
      const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit && props.onSubmit(value);
        setValue("");
      };
    
      return (
        <div className="u-flex">
          {/* <input
            type="text"
            placeholder={props.defaultText}
            value={value}
            onChange={handleChange}
            className="NewPostInput-input"
          /> */}
          <button
            type="submit"
            className="NewPostInput-button u-pointer"
            value="Submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      );
    };
    // const NewComment = (props) => {
    //     const addComment = (value) => {
    //       const body = { parent: props.storyId, content: value };
    //       post("/api/comment", body).then((comment) => {
    //         // display this comment on the screen
    //         props.addNewComment(comment);
    //       });
    //     };

    //need to call another person's queue
    // how do I do that?
    const NewComment = (props) => {
        const addComment = (value) => {
            let queuePosition = 1;// index for user place in line
            while (personalQueue[queuePosition] != props.username) {
                console.log(personalQueue[queuePosition]);
                queuePosition++;
            }
          const body = { parent: props.storyId, content: value };
          post("/api/queuePosition", body).then((queuePosition) => {
            // display this comment on the screen
                    props.addNewComment(queuePosition);
          });
        };
    }

    
    
    
    export { NewComment, NewPostInput }
