import { Navbar, Footer } from "./components/index.components.js"
import { Outlet } from 'react-router-dom';
import "./index.css"
import ScrollToTop from "./components/User/ScrollToTop.js";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container">
        <ScrollToTop/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
