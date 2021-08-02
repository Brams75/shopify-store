import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import ImageBlock from "../ImageBlock";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Sidebar />
        <div className="App__content ">
          <ImageBlock />
        </div>
        <div className="App__tag">
          <p>lemon matt</p>
        </div>
      </main>
    </div>
  );
}

export default App;
