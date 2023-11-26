import './App.css';
import AddProduct from './add/addProduct';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>

      <Routes>

        <Route path='/add' element={<AddProduct />}></Route>

      </Routes>

    </Router>

  );
}

export default App;
