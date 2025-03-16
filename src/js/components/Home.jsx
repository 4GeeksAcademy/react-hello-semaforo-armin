import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [ color, setColor] = useState("danger");
 
     return (
        <div className="card d-flex justify-content-center bg-dark mt-5 mx-auto p-5 " style={{ maxWidth: "250px" }}>
             <div className = "trafic-light d-flex flex-column align-items-center">
                
                <button onClick={(event) => {setColor("danger")}}className={`btn btn-danger rounded-circle mx-2 ${color === "danger" ? "brillo" : ""}`} style={{ width: "80px", height: "80px" }}></button>    
                <button onClick={(event) => {setColor("warning")}}className={`btn btn-warning rounded-circle mx-2 ${color === "warning" ? "brillo" : ""}`} style={{ width: "80px", height: "80px" }}></button>    
                <button onClick={(event) => {setColor("success")}}className={`btn btn-success rounded-circle mx-2 ${color === "success" ? "brillo" : ""}`} style={{ width: "80px", height: "80px" }}></button>    
             </div>
         </div>
     );
 };

export default Home;  