import React from 'react';

const Title = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>投稿日時：{props.createdAt}</p>
        </div>
    );
};
export default Title;