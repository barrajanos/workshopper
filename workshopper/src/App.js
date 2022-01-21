import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './routes/Index';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Index />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
