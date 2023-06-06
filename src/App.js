import AddCart from './AddCart';
import './App.css';
import ItemList from './ItemList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router >
        <Routes >
          <Route path="/" element={<ItemList />} />
          <Route path='/AddCart' element={<AddCart />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
