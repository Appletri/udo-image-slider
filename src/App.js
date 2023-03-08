import './App.css';
import Slider from "./components/Slider.js"

function App() {
  const content = [
    {
      header: 1,
      description: 'text',
      image: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
    },
    {
      header: 2,
      description: 'text',
      image: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
    },
    {
      header: 3,
      description: 'text',
      image: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
    },
    {
      header: 4,
      description: 'text',
      image: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
    },
    {
      header: 5,
      description: 'text',
      image: "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
    }, 
  ]
  return (
    <div className="App">
      <h1>How to Udo</h1>
      <Slider content={content}/>
    </div>
  );
}

export default App;
