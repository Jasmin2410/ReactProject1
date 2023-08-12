import Foot from './Components/Foot';
import Navbar from './Components/Navbar';
import AllRoutes from './Routers/AllRoutes';

function App() {
  return (
    <div className='parent_container'>
      <Navbar />
      <AllRoutes />
      <Foot />
    </div>
  );
}

export default App;
