import Text from "./Components/Text";
import Question from "./Components/Question";
import "./App.css";
import Header from "./Components/Header";
import Foter from "./Components/Foter";

function App() {
  return (
    <>
    <nav className="navbar">
      <h1 className="nav-title">Text-Tutors</h1>
    </nav>
      <Header/>
      <Text />
      <Question />
      <Foter/>
    </>
  );
}

export default App;
