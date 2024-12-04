import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from './ChatRoom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/room/:roomId" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}
