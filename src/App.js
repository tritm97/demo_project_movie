import { Route, Routes } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManagerMovie from './pages/ManagerMoive/ManagerMovie';
import ManagerAddMovie from './pages/ManagerAddMovie/ManagerAddMovie';

function App() {
  return (
    <>
      <Routes>
        {/* user template  */}
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
        </Route>
        {/* admin template  */}
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="manager-movie" element={<ManagerMovie />} />
          <Route path="manager-add-movie" element={<ManagerAddMovie />} />
        </Route>
        {/* login page  */}
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
