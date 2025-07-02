import { Navbar, Footer } from "./components/index.components.js"
import { Outlet } from 'react-router-dom';
import "./index.css"
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;