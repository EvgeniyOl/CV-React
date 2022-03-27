import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import MainInfo from "./components/Main-info/main-info";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <MainInfo />
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
