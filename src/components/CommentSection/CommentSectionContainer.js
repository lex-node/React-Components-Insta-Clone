import React, {useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {

    const [comments, setComments] = useState(props.comments);

    return (
        <div>
            {
                comments.map((comment) =>
                    <Comment comment={comment}/>
                )}
            <CommentInput/>
        </div>
    );
};

export default CommentSection;


