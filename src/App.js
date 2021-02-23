import './App.css';
import Comment from './Comment';

function App() {
  // name variables before return statement
  const post = {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurs', 
    body: "Check out this body property",
    comments: ['First!', 'Great post', 'Hire this aithor now!']
  }
  const comments = post.comments.map((comment, index) => (<Comment text = {comment} key={index} />));

  return (
    <div className="App">
      {/* can use variables with curly brackets */}
      <h1>{post.title}</h1>
      <h2>by {post.author}</h2>
      <h2><b>Comments:</b></h2>
      <p>{post.comments[Math.floor(Math.random() * post.comments.length)]}</p>
      
      { comments }

    </div>
  );
}

export default App;
