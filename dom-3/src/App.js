import logo from './logo.svg';
import './App.css';
import Grid from './Grid';
import Controls from './Controls';

function App() {
  return (
    <main>
      <p className="heading"><strong><em>React</em></strong>ing Grid</p>
      <Controls/>
      <Grid/>
    </main>
  );
}

export default App;
