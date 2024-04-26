import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.tsx';
import './App.scss';
import About from './pages/About/About.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Calisthenics from './pages/Calisthenics';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer.tsx';

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
        path: "/education",
        element: <Education />
      },
      {
        path: "/skills",
        element: <Skills />
      },

      {
        path: "/calisthenics",
        element: <Calisthenics />
      }

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
