import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Circle from "../Circle";
import "./styles.css";
import bottles from "../../assets/bottles.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Sidebar />
        <Circle />
        <div>
          <img src={bottles} alt="bottles" />
          <h3>VinciT - Lemon Malt</h3>
          <p>
            Contrary to popular belief, Lorem ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
