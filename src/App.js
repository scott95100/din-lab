import './App.css';

function App() {
  // name variables before return statement
  const post = {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurs', 
    body: "Check out this body property",
    comments: ['First!', 'Great post', 'Hire this aithor now!']
  }
  return (
    <div className="App">
      {/* can use variables with curly brackets */}
      <h1>{post.title}</h1>
      <h2>by {post.author}</h2>
      <h2><b>Comments:</b></h2>
      <p>{post.comments[0]}</p>

    </div>
  );
}

export default App;
