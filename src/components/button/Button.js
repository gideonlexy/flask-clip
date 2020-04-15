import React from 'react';
import { connect } from 'react-redux';

//styles
import './Button.css';
import { getNews } from '../actions';

const Button = ({ loadNews }) => {
  return (
    <div className="news-button">
      <button className="get-news" onClick={loadNews}>
        Get Users
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  loadNews: getNews,
};
export default connect(null, mapDispatchToProps)(Button);
