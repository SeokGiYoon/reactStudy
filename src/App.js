import React, { Component } from 'react';
import PhoneForm from './testComponent/PhoneForm';
import PhoneList from './testComponent/PhoneList';

class App extends Component {
  id = 2;
  state = {
      information : [{
        id : 0
        ,name:'seokgi'
        ,phone:'010-000-0000'
      },
      {
        id : 1
        ,name:'mariko'
        ,phone:'010-111-1111'
      }
    ]
  }

  handleCreate = (data) =>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    });
  }

  render() {
    return(
    <div>
      <PhoneForm oncreate={this.handleCreate}/>
      <PhoneList data={this.state.information}/>

      {JSON.stringify(this.state)}

    </div>
    );
  }
}

export default App;
