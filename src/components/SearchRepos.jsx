import React, { useState } from "react";
import FetchRepos from "./FetchRepos";
import "./search.css";
const SearchRepos = () => {
  const [isUsername, setIsUsername] = useState(false);
  const [isRepository, setIsRepository] = useState(false);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [text, setText] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const setRepoCheckBox = () => {
    setIsRepository(!isRepository);
  };
  const setUserCheckBox = () => {
    setIsUsername(!isUsername);
  };
  const getSearchText = (e) => {
    setText(e.target.value);
  };
  const onSearchButtonClicked = (e) => {
    e.preventDefault();
    setSubmitFlag(!submitFlag);
    setSearchVal(text.replace(/ /g, ''));
  };
  return (
    <div className="search-container">
      <div className="search-bar">
        <form>
          <label>Username</label>
          <input
            type="checkbox"
            onChange={setUserCheckBox}
            className="type-selector"
          />
          <label>Repository</label>
          <input
            type="checkbox"
            onChange={setRepoCheckBox}
            className="type-selector"
          />
          <input
            type="text"
            value={text}
            onChange={getSearchText}
            className="search-box"
          />
          <button variant="outline-dark" onClick={onSearchButtonClicked} className="search-btn">Search</button>
        </form>
      </div>
      <FetchRepos submit={submitFlag} value={searchVal} username={isUsername} repository={isRepository} ></FetchRepos>
    </div>
  );
};
export default SearchRepos;