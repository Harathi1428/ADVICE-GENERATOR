
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
const [advice,setAdvice] = useState("ADVICE..!");
const generate=()=>{
  axios.get("https://type.fit/api/quotes").then((response)=>{
    console.log(response);
    const data=response.data;
    const adv=Math.floor(Math.random()*data.length);
    setAdvice(data[adv].text);
    console.log(data[adv].text);
  }).catch((error)=>{
    console.log(error);
  })
}
  return (
    <section className='outer'>
      <div className='bg-image'></div>
    <div className="App">
      <h1 className="advice">{advice}</h1>
      <button  className="btn" onClick={()=>generate()}>generate advice</button></div>
    </section>
  );
}
export default App;
