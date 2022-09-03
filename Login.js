//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

function Login() {

const mylogin =async (e)=>{
e.preventDefault();
const email=document.querySelector('#exampleInputEmail1').value;
const password=document.querySelector('#exampleInputPassword1').value;
console.log(email+"   "+password);

 try{const response = await axios({
 method: "get",
 url:"http://localhost:8080/login/",
 params:{email},
 
 });
  console.log(response);
  if(password === response.data.password){
    alert("welcome user");

  } else{

    alert("Incorrect Password ");
  }
}
catch(err ) 
{
  console.log(err);
}



};

  return (
    <div className ="form">
   
    <form onSubmit={mylogin}>
    <div className="htmlm-group">
    <label htmlFor="exampleInputEmail1">!!!! Login Here !!!!</label>
       
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Click here</label>
  </div>
  <button type="submit" className="btn btn-secondary">Submit</button>
</form>
</div>



  );
}

export default Login;
