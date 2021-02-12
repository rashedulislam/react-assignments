import React, { useState } from "react";
import Suggestion from "./Suggestion/Suggestion";
import AmazonIcon from "../../Icons/amazon.svg";
import AndriodIcon from "../../Icons/andriod.svg";
import FacebookIcon from "../../Icons/facebook.svg";
import GithubIcon from "../../Icons/github.svg";
import LinkedInIcon from "../../Icons/linkedIn.svg";
import GooglePlusIcon from "../../Icons/google_plus.svg";
import MacIcon from "../../Icons/mac.svg";
import PinterestIcon from "../../Icons/pinterest.svg";
import "./Suggestions.css";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    {
      icon: AmazonIcon,
      title: "Amazon",
    },
    {
      icon: AndriodIcon,
      title: "Andriod",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
    },
    {
      icon: GithubIcon,
      title: "Github",
    },
    {
      icon: LinkedInIcon,
      title: "LinkedIn",
    },
    {
      icon: GooglePlusIcon,
      title: "GooglePlus",
    },
    {
      icon: MacIcon,
      title: "Mac",
    },
    {
      icon: PinterestIcon,
      title: "Pinterest",
    },
  ]);

  const [details, setdetails] = useState({
    icon: MacIcon,
    title: "Mac",
  });

  const sugesstionClickHandle = (index) => {
    const clickedSugesstion = suggestions.find((item, i) => {
      return i == index;
    });
    setdetails(clickedSugesstion);
  };

  return (
    <div>
      <div className="suggestion-main-div">
        {suggestions.map((suggestion, index) => (
          <Suggestion
            icon={suggestion.icon}
            key={index}
            title={suggestion.title}
            index={index}
            sugesstionClickHandle={sugesstionClickHandle}
          />
        ))}
      </div>
      <div className="suggestion-details-div">
        {details.icon}
        <p>{details.title}</p>
      </div>
    </div>
  );
}

export default Suggestions;
