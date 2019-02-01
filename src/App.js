import React, { Component } from 'react';
import BasicInfo from './BasicInfo/BasicInfo.jsx';
import AddressInfo from './AddressInfo/AddressInfo.jsx';
import logo from './logo.svg';

class App extends React.Component {

  constructor(props){alert("Some Validation Error is there.")
      super(props);
      this.state={
        stat:'',
        name: '',
        password: '',
        email: '',
        locality:'',
        city:'',
       
      };
  }

handleChange = (e) => {
    var obj = {};
    obj[e.target.name] = e.target.value;
   // console.log(obj);console.log(this.state);
    this.setState(obj);
}

handleSubmit = () => {
  console.log(this.state);
  let validName = () =>{
    if(this.state.name.length < 3){
      alert("Entered name is too short !!");
      return false;
    }
    else
      return true;
    }

    let validPassword=()=>{

      if(this.state.password.length<1)
      {
        alert("password can't be empty...");
        
        return false;
      }
        return  true;
    }

    let validEmail=()=>{

     var flag=0;
     for(var i=0;i<this.state.email.length;i++)
     {
        if(this.state.email.charAt(i)=='@'){
          flag=1;
          break;
        }
     }

     if(flag==0)
     {alert("email donot have @....not valid email");
      
      return false;}
      return true;

    }

    var res=validName()&&validEmail()&&validPassword();

    if(res){
      alert("Your form has been Submitted.") ;
    }else{
      alert("Some Validation Errors is/are there. Form not submitted");
    }

    return res;
  //Add Validation Logic for other fields here. 
  //validName() ? alert("Your form has been Submitted.") : alert("Some Validation Error is there.");
}

  render() {
    return (
    
      <div>
        <form>
        <BasicInfo values={this.state} handleChange={this.handleChange}/>
        <AddressInfo values={this.state} handleChange={this.handleChange}/>
        <input type='submit' value='Submit' onClick={this.handleSubmit}/>
        </form>
      </div>
    );
  }
}

export default App;
