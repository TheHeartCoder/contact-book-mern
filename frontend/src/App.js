import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Contact from './pages/Contact';
import Index from './pages/Index';

function App() {
  return (
    <Container>
      <Router>
        <Route path='/' exact component={Index} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </Container>
  );
}

export default App;
