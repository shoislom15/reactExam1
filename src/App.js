import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Add from './pages/Add';
import Data from './data/Data';
import Edit from './pages/Edit';
// import Data from './data/Data'



function App() {

  const [data, setData] = useState([
    {
      title: "title",
      img: "https://www.smow.com/pics/mi-001-000/midgard-federzug-tischleuchte-schwarz-01_zoom.jpg",
      price: "111"
    },
    {
      title: "title",
      img: "https://www.smow.com/pics/mi-001-000/midgard-federzug-tischleuchte-schwarz-01_zoom.jpg",
      price: "2222"
    },
    {
      title: "title",
      img: "https://www.smow.com/pics/mi-001-000/midgard-federzug-tischleuchte-schwarz-01_zoom.jpg",
      price: "333"
    },
    {
      title: "title",
      img: "https://www.smow.com/pics/mi-001-000/midgard-federzug-tischleuchte-schwarz-01_zoom.jpg",
      price: "444"
    },
    {
      title: "title",
      img: "https://www.smow.com/pics/mi-001-000/midgard-federzug-tischleuchte-schwarz-01_zoom.jpg",
      price: "555"
    },
    {
      title: "title",
      img: "https://www.smow.com/pics/mi-001-000/midgard-federzug-tischleuchte-schwarz-01_zoom.jpg",
      price: "666"
    },
  ]);

  const [ArrId, setArrId] = useState(0);

  console.log(data);

  return (
    <Data.Provider value={{ data, setData }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main ArrId={ArrId} setArrId={setArrId} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Data.Provider>
  );
}

export default App;
