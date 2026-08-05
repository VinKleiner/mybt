import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './pages/HomePage';
import {Route, Routes} from "react-router-dom";


function App() {

  return (
      <>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />

          </Route>
        </Routes>

      </>
  );
}

export default App;