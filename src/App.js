import './App.css';
import Widget1 from './Components/Widget1';
import Widget2 from './Components/Widget2';
import HorizontalBar from './Components/HorizontalBar';

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col items-end'>
        <Widget1/>
        <HorizontalBar/>
        <Widget2/>
        <HorizontalBar/>
      </div>
    </div>
  );
}

export default App;
