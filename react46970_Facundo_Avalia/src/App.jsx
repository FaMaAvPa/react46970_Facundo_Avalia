import { BrowserRouter, Routes, Route } from "react-router-dom";                    
import ErrorNotFound from "./components/ErrorNotFound";
import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"

function App() {

  return (
    <BrowserRouter>
      <Header />   
      <Routes>
        <Route path="/" />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="*" element={<ErrorNotFound />}/>
      </Routes>           
    </BrowserRouter>
  )
}

export default App
