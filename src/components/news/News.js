import React from 'react';

//styles
import './News.css';

const News = ({ name, username, email }) => {
  return (
    <div className="articles">
      <h2 className="title">{name}</h2>
      <span className="description">{username}</span>
      <span>{email}</span>
    </div>
  );
};

export default News;
