import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import SinglePage from './pages/SinglePage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/react-todo-app" element={<TodoContainer />} />
      <Route path="/about">
        <Route index element={<About />} />
        <Route path=":slug" element={<SinglePage />} />
      </Route>
    </Routes>
  </>
);

export default App;
