 import { Link } from "react-router-dom"; 
 import "./Header.css";
 const Header=()=>{
	return (
	 <div className="header"> 
		<Link to="/" className="title"> 
		   Intuitive Quiz Hub  
        <hr/> 

		</Link>
		</div>
		)
}  
export default Header;