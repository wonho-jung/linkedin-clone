import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Bitcoin jumps past $50,000", "6,354 readers")}
      {newsArticle("Are Canadians stuck in their jobs?", "10,602 readers")}
      {newsArticle("Pandemic burnout on the rise?", "75,348 readers")}
      {newsArticle("Business schools reshuffle ranks?", "57,632 readers")}
      {newsArticle("Doesn't it look like real Linkedin?", "10,602 readers")}
    </div>
  );
}

export default Widgets;
