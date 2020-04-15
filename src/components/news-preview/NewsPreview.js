import React from 'react';

//styles
import './NewsPreview.css';
import News from '../news/News';
import { connect } from 'react-redux';

const NewsPreview = ({ articles }) => {
  console.table('DATA', articles);
  return (
    <div className="preview">
      {articles.map(({ id, ...otherProps }) => (
        <News key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.news,
});
export default connect(mapStateToProps)(NewsPreview);
