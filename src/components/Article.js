import React from "react";
import TimeStamp from "./TimeStamp";


// Article functional component: generate an Article Component the passed-in data
const Article = ({ articleData }) => {

    // destructure articleData
    const articleImage = articleData.urlToImage;
    const articleTitle = articleData.title;

    // if article author is null, use the source name instead
    const articleSource = (articleData.author && articleData.author.includes('.com') === false) ? (articleData.author) : (articleData.source.name);

    // articleData is an Object
    return (
        <div className=" article-content flexbox-container">
            <div className="articleImage">
                <img src={articleImage} alt="article photo" />
            </div>

            <div className=" flexbox-container articleText">
                <div className="articleTitle">
                    <h4>
                        {articleTitle}
                    </h4>
                </div>
                <div className="articleSource">
                    <p>
                        Article by: {articleSource}<br />
                        publish at: {<TimeStamp timeStamp={articleData.publishedAt} />}
                    </p>
                </div>
            </div>
        </div>
    );


};



// export Article Component to be used in other files
export default Article;