import "./Home.css";
import {useState} from "react"; 
import {useHistory} from "react-router-dom";
import {TextField,MenuItem,Button} from "@material-ui/core"; 
import Categories from "../data/Categories"; 
import ErrorMessage from "../components/errormessage/ErrorMessage.js";
const Home =({name,setname,fetchQuestions})=>{ 
const[category,setcategory]= useState(""); 
const[difficulty, setdifficulty] = useState();  
const history= useHistory();
const [error, seterror] =  useState(false); 
const handlesubmit=()=>{  
	if(!category || !difficulty || !name)
	{	seterror(true); 
	   return; 
}
	else{
		 seterror(false);
		fetchQuestions(category,difficulty); 
		history.push("/quiz");
	}


}
	return(
       <div className="content">  
       <div className="Settings">
       
       <span  className="quizsetting" style={{fontSize:30}}>Quiz Settings</span>
      

       <div className="settings_select"> 
       {error &&<ErrorMessage> please fill all the fileds</ErrorMessage> }
        <TextField style={{marginBottom:25}} 
        label ="Enter Your Name" 
        variant="outlined"  
        onChange={(e)=> setname(e.target.value)} 
       

         />
         
         <TextField select
          label="select category" 
          variant="outlined" 
          style={{marginBottom:30}}
          onChange={(e)=> setcategory(e.target.value)}
        value={category}
           >
              {
              	Categories.map((cat)=>(
              		<MenuItem key={cat.category} value={cat.value}>
                       {cat.category}
              		</MenuItem>
              	))
              }
         </TextField> 

          <TextField
            select
            label="Select Difficulty"
           onChange={(e)=> setdifficulty(e.target.value)} 
                  value={difficulty}
            
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
            <Button
            variant="contained"
            color="primary"
            size="large" 
            onClick={handlesubmit}
           
          >
            Start Quiz
          </Button>
        </div>
       </div> 
      <img src="/quiz.svg" className="banner" alt="quiz img" />

       </div>
		)
}

export default Home;