
import "./App.css";
import {MyComponent} from "./one";
import {Database} from "./two";
function App() {
  //for the database
const headers= ["name", "age" ,"dob"];
const data =[
["<th>Makayla</th>","<th>20</th>","<th>04/03/2002</th>"],
["<th>Xun","33","04/03/1988</th>"],
];
  return (
    <div className="App">

      <Database headers={headers}></Database>
    </div>
  );
}

export default App;
