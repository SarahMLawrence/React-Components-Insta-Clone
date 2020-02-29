/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
import dummyData from "./dummy-data";
//import dummyData from "./dummy-data";

const App = () => {

  //State
  const [state, setState] = useState(dummyData);
  const [posts, setPosts] = useState(dummyData);
  const [searchTerms, setSearchTerms] = useState("");

  const searchPost = () => {
    const newState = state.filter(post => {
      return (post.username.toLowerCase() + post.comments[0].text.toLowerCase()).includes(searchTerms)
    })
    setPosts(newState)
  }

  return (
    <div className="App">
      <SearchBar setSearchTerms={setSearchTerms}
      searchPost={searchPost} />
      <PostsPage dummydata={posts} />
    </div>
  );
};



export default App;
