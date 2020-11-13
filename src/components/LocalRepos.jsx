import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { ListGroup } from 'react-bootstrap';
const LocalRepos = () => {
  const [localRepos, setLocalRepos] = useState([]);
  const [isNull, setIsNull] = useState(false);
  useEffect(() => {
    const localData = localStorage.getItem("repos");
    setLocalRepos(localData ? JSON.parse(localData) : []);
  }, []);
  useEffect(() => {
    if (localRepos.length !== 0) {
      setIsNull(true);
    }
    console.log(isNull);
  }, [localRepos]);
  return (
    <div className="main-container" >
      {localRepos ? <ListGroup variant="flush">
        {localRepos.map((repo,k)=>(<ListGroup.Item action href={repo.url}>
          <h3>{repo.name}</h3>
          <p>{repo.desc}</p>
        </ListGroup.Item>))}
      </ListGroup> : <h1>No added repositories, Click <Link to="/add-repository">here</Link> to add repositories</h1> }
    </div>
  );
};
export default LocalRepos;