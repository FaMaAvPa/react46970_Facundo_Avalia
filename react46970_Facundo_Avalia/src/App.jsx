import { BrowserRouter, Routes, Route } from "react-router-dom";                    
import ErrorNotFound from "./components/ErrorNotFound";
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return (
    <BrowserRouter>
      <Header />   
      <main className="bg-black py-5">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="*" element={<ErrorNotFound />}/>
        </Routes>      
      </main>     
    </BrowserRouter>
  )
}

export default App
