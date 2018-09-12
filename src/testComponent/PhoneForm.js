import React,{Component} from 'react';

class PhoneForm extends Component{
  state = {
    name:''
    ,phone:''
  }

  handleChange = (e) =>{
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  handleSubmit = (e) =>{

    e.preventDefault();

    this.props.oncreate(this.state);

    this.setState({
      name:''
      ,phone:''
    });

  }



  render(){

    return(
      <div>
        <input type="text" placeholder='name' onChange={this.handleChange} name='name'/>
        <input type="text" placeholder='phone' onChange={this.handleChange} name='phone'/>
        <button onClick={this.handleSubmit}>submit</button>

        <div>{this.state.name} {this.state.phone}</div>

      </div>
    );
  }

}

export default PhoneForm;
