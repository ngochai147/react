import React from "react";

class Childcomponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            valueInput:"abc"
        }
    }
    handleInput = (event) => {
        //console.log(event.target.value);
        this.setState({//hiển thị đúng giá trị được nhập vào
            valueInput: event.target.value
        })
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
        let {valueInput}=this.state;
        return(
            
            <>
                <div>
                    {/* <input value={this.state.valueInput} type="text" /> */}
                    <input type="text" />

                    <input value={valueInput} 
                    onChange={(event) => {this.handleInput(event) }} 
                    type="text" />

                </div>  
                <div>
                    <span>{valueInput}</span>
                </div>

                <h1>I just get from parent value {this.props.myProp}</h1>
                <h3>Tong cua 6+7={this.props.sum(6,7)}</h3>

                {/* <form action="" 
                    onSubmit={(event) => this.handleOnSubmit(event)}>
                            <input type="text" 
                                value={this.state.Name}//gán giá trị mặc định
                    onChange={(event) =>this.handleOnchangeInput(event)} />
                        <button>Submit</button>
                </form> */}

                <form action="" 
                onSubmit={(event) => this.handleOnSubmit(event)}>
                        <input type="text" 
                            value={this.state.Name}//gán giá trị mặc định
                onChange={(event) =>this.handleOnchangeInput(event)} />
                    <button>Submit</button>
                </form>

            </>
        );
    }
}

export default Childcomponent