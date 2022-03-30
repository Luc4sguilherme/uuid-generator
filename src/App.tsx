import './App.css';

import { CopyProvider } from './contexts/copyContext';
import Home from './pages/Home';

function App() {
  return (
    <CopyProvider>
      <Home />
    </CopyProvider>
  );
}

export default App;
