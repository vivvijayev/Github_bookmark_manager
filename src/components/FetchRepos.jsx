import React,{useState, useEffect} from "react";
import { Alert } from 'react-alert'
const FetchRepos =(props)=> {
    const [userRepo, setUserRepo] = useState([]);
    const [repo, setRepo] = useState([]);
    const [localData, setLocalData] = useState(() => {
        const data = localStorage.getItem("repos");
        return data ? JSON.parse(data) : [];
      });
    useEffect(()=>{
        if((props.username === true && props.repository === true) || (props.username === false && props.repository === false)){
      userRepoFetch();
      repoFetch();
    }else if(props.repository === true) {
      repoFetch();
    }else if( props.username === true ) {
      userRepoFetch();
    }
  },[ props.submit])
  const userRepoFetch = async () => {

      let data = await fetch(`https://api.github.com/users/${props.value}/repos`);
      const user = await data.json();
      user.message? setUserRepo([]): setRepo(user);
      console.log(user);
  };
  const repoFetch = async () => {
      let data = await fetch(
        `https://api.github.com/search/repositories?q=${props.value}`
      );
      const rep = await data.json();
      setRepo(rep.items);
      console.log(rep.items);
  };
  const addToLocalStorage=(url,name,desc)=> {
      setLocalData((prevRepos) => [
        ...prevRepos,
        {
          name: name,
          desc: desc,
          url: url
        }
      ]);
      setTimeout(() => {
        alert("Repository added")
      }, 1000);
  }
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(localData));
  }, [localData]);
    return(
        <div>
            
            {repo?repo.map(rep=>(
              <div>
                <h3><a href={rep.html_url} style={{color:"black"}}>{rep.name}</a></h3>
                <p>{rep.description}</p>
                <p>Auther: {rep.owner.login}</p>
                <button onClick={()=>addToLocalStorage(rep.html_url,rep.name,rep.description)}>Add</button>
                <hr/>
              </div>
            )):<div/>}
            {userRepo?userRepo.map(rep=>(
              <div>
                <h3><a href={rep.html_url} style={{color:"black"}}>{rep.name}</a></h3>
                <p>{rep.description}</p>
                <p>Auther: {rep.owner.login}</p>
                <button onClick={()=>addToLocalStorage(rep.html_url,rep.name,rep.description)}>Add</button>
                <hr/>
              </div>
            )):<div/>}
        </div>
    )
}
export default FetchRepos;