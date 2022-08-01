import './App.css';
import Weather from './Weather';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className='container wrap'>
      <Weather />
      </div>
      <footer className='text-center my-2'><a className='sourceCode' href='https://github.com/nefbao/react-weather-project'>open-source code</a> by Nahid Norouzi</footer>
    </div>
  );
}
