import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Calisthenics from './pages/Calisthenics';
import Home from './pages/Home';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );

};
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/education",
        element: <Education/>
      },
      {
        path:"/skills",
        element: <Skills/>
      },

      {
        path:"/calisthenics",
        element: <Calisthenics/>
      }

    ]
  }
]);


function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
