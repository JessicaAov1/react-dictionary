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
          <Dictionary defaultKeyword="sailing" />
        </main>
      </div>

      <footer className="App-footer">
        <em> Open-source code by </em>
        <a
          href="https://github.com/JessicaAov1/react-dictionary"
          className="link-Git"
          target="_blank"
          rel="noreferrer"
        >
          Jessica Aronov
        </a>
        and hosted by Netlify
      </footer>
    </div>
  );
}

export default App;
