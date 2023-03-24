import './App.sass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import MenuAppBar from './components/Menu';
import SendMessage from './pages/SendMessage';
import MessageExample from './components/MessageExample';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/test" element={<MenuAppBar />} />
          <Route path="/send-message" element={<SendMessage />} />
          <Route path="/message" element={<MessageExample />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
