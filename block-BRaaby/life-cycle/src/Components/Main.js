import React from 'react';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentUser:"",
            currentUserData:{
                name:"",
                email:"",
                age:"",
                address:"",
                contact:"",
                password:"",
                image:"",

            },
            new:false,


        }

        this.componentDidMount=()=>{
           fetch('https://randomuser.me/api/')
           .then((res)=>res.json())
           .then((data)=>{
              console.log(data.results[0]);
              const {name,email,dob,location,phone,login,picture}=data.results[0];
             this.setState({
                currentUser:data.results[0],
                currentUserData:{
                    name:name.first+" "+name.last,
                    email:email,
                    age:dob.age,
                    address:location.street+location.city+location.state+location.country,
                    contact:phone,
                    password:login.password,
                    image:picture.large,
                },
                new:true,
                active:false,
            })
           });
        }
    }

    handleClick=()=>{
        this.setState({new:false})
        fetch('https://randomuser.me/api/')
        .then((res)=>res.json())
        .then((data)=>{
           console.log(data.results[0]);
           const {name,email,dob,location,phone,login,picture}=data.results[0];
          this.setState({
             currentUser:data.results[0],
             currentUserData:{
                 name:name.first+" "+name.last,
                 email:email,
                 age:dob.age,
                 address:location.street+location.city+location.state+location.country,
                 contact:phone,
                 password:login.password,
                 image:picture.large,
             },
             new:true,
         })
        });
    }

    handleBtnClick=()=>{
        this.setState({
            active:true,
        })


    }

    

    render(){
        console.log('render');
        return (
            <center>
              <div>
                   
              </div>
              <div>
                   <div className="user">
                       <figure>
                           <img src={this.state.currentUser?this.state.currentUserData.image:""} alt=""/>
                           <hr/>
                             
                       </figure>
                       <span>My name</span>
                       <h2>{!this.state.active?this.state.currentUserData.name:this.state.currentUserData.password}</h2>
                       <div className="btns">
                           <button onClick={this.handleBtnClick}><i className="fas fa-user" id={this.state.active?"active":""}></i></button>
                           <button><i className="fas fa-envelope-open"></i></button>
                           <button><i className="fas fa-calendar-times"></i></button>
                            <button><i className="fas fa-map"></i></button>
                           <button><i className="fas fa-phone-square"></i></button>
                           <button><i className="fas fa-lock"></i></button>
                          
                       </div>
                       <div className="random"><button onClick={this.handleClick}>{this.state.new?"Random User":"Loading..."}</button></div>
                   </div>

              </div>
            </center>
        )
    }
}

export default Main;