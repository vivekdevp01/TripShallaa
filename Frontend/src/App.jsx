import { Navbar, Footer } from "./components/index.components.js"
import { Outlet } from 'react-router-dom';
import "./index.css"
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;