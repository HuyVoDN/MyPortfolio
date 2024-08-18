import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.tsx';
import './App.scss';
import About from './pages/About/About.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Skills from './pages/Skills/Skills.tsx';
import Calisthenics from './pages/Calisthenics/Calisthenics.tsx';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer.tsx';
import Experience from './pages/Experience/Experience.tsx';
import NotFound from './pages/NotFound.tsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/skills",
        element: <Skills />
      },

      {
        path: "/calisthenics",
        element: <Calisthenics />
      },

      {
        path: "*",
        element: <NotFound/>
      },
    ]
  }
]);

function App() {

  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
