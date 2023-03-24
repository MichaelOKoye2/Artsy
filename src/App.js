import Auction from "./pages/auction";
import Footer from "./pages/footer";
import Homepage from "./pages/homepage";
import Newsletter from "./pages/newsletter";
import Header from "./pages/header";
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <main>
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/Auction" element={<Auction />}/>
    </Routes>

    <Newsletter />
    <Footer />
    </div>
    </BrowserRouter>
    </main>
  );
}

export default App;
