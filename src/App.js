import {HashRouter as Router, Route} from 'react-router-dom'
import EndPage from './components/EndPage';
import Game from './components/Game/Game';
import StartPage from './components/StartPage';
import 'animate.css'

function App() {
  return (
    <Router>
      <Route exact path="/" component={StartPage} />
      <Route path="/result" component={EndPage} />
      <Route path="/game" component={Game} />
    </Router>
  );
}

export default App;
