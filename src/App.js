import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div cla="container">
      <div className="App">
        <header className="App-header">
          <h1> Dictionary </h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">Coded by Jessica</footer>
    </div>
  );
}

export default App;
