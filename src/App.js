import logo from './logo.svg';
import './App.css';
import Info from './Info';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Welcome to Fullstack Development - I</h1>
       <h2>React JS Programming Week09 Lab Exercise</h2>
       <Info 
       studentId={101435500}
       name={"William Steep"}
       college={"George Brown College, Toronto"}
       />
    </div>
  );
}

export default App;
