import Header from "./components/Header.js";
import Footer from "./components/Footer.js"; 
import  Home from "./pages/Home.js"; 
import {Route} from "react-router-dom";
import Result from "./pages/Result.js";
import Quiz from "./pages/Quiz.js"; 
import {useState} from "react"; 
import axios from "axios"; 
import { BrowserRouter } from "react-router-dom";
 import './App.css';

function App() { 
  const [name, setname] = useState("");  
  const [questions, setQuestions] = useState();
  const[ score,setScore]= useState(0);
  const fetchQuestions =async(category="",difficulty="")=>{  
    const {data}= await axios.get( `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
       console.log(data.results);
    setQuestions(data.results); 

  }
  return ( 
    <BrowserRouter>
    <div className="App" style={{backgroundImage:'url(./ques1.png'}}>
        <Header/>  
        <Route path="/" exact > 
        <Home name={name} setname={setname}
           fetchQuestions={fetchQuestions}
        />
        </Route> 
        <Route path="/result"> 
        <Result  name={name} score={score}/>
        </Route> 
        <Route path="/quiz" exact> 
        <Quiz 
        name={name}  
        questions={questions}
        score={score}
        setScore={setScore} 
        



        />
        </Route> 
        
        
    </div> 
      <Footer/> 
      </BrowserRouter>
  );
}

export default App;
