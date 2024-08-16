import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/route';
import FavouritesProvider from './components/contexts/favouriteContexts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <FavouritesProvider>
      <ToastContainer />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </FavouritesProvider>
  );
}

export default App;
