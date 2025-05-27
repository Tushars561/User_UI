import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserUi />} />
      </Routes>
    </Router>
  );
}


export default App;
