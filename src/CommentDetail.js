import React from 'react';


//child
const CommentDetail = (props) => { //props.author, props.timeAgo
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={ props.avatar } />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
    <div className="text">{props.content}</div>
                </div>
            </div>

    );
}

export default CommentDetail;