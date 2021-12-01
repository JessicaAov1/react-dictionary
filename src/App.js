import "./App.css";
import Dictionary from "./Dictionary";
import "./Pictures.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1> Dictionary </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
      </div>

      <footer className="App-footer">
        <a
          href="https://github.com/JessicaAov1/react-dictionary"
          className="link-Git"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <em> Open-source code on GitHub </em>
        </a>
        by Jessica Aronov and hosted by Netlify
      </footer>
    </div>
  );
}

export default App;
