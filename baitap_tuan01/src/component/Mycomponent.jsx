import React  from "react";
import Childcomponent from "./Childcomponent"
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component{
    state = {
        listUser: [
            {id: 1, Name: "Dung", Age: 49},
            {id: 2, Name: "Hoang", Age: 14},
            {id: 3, Name: "Chien", Age: 32},
        ]
    }
    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        //console.log(this.state)
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        })
    }

    sum=(a,b)=>{
        return a+b;
    }
    handleOnchangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(this.state)
    }

    render(){
        let parents="this is my family"
        return(
            // <div>
            //     hello
            //     <h1>My first component</h1>
            //     <h2>My name is:{this.state.firstname}</h2>
            //     <br />
            //     <h2>My age:{this.state.birthday}</h2>
            //     <Childcomponent myProp={parents} sum={this.sum}></Childcomponent>
            // </div>
            <div>
{/*                
               <form action="" 
        
                onSubmit={(event) => this.handleOnSubmit(event)}>
                    <span>My name:{this.state.Name}</span>
                    <br />
                        <input type="text" 
                            value={this.state.Name}//gán giá trị mặc định
                onChange={(event) =>this.handleOnchangeInput(event)} />
                
                    <button>Submit</button>
                </form>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor> */}
                <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor> 

          </div>

        )
    }
}

export default Mycomponent