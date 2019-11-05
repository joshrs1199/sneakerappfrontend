import React from 'react'
import { Input, Label } from 'semantic-ui-react'


class Form  extends React.Component{

  state = {
      name: "",
      brand:"",
      price: "",
      colorway: "",
      description: "",
      image_url: ""
}


handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

render(){
  console.log(this.state)
  return (
  <div>
    <h1>Put Something Up For Sale</h1>
      <Input  label={{ icon: 'write' }} labelPosition='left'  type='text' placeholder='Enter Name' value={this.state.name} onChange={this.handleChange} name="name" >
        </Input><br/>
        <Input label={{ icon: 'money bill alternate' }} labelPosition='left' type='number' placeholder='Enter Amount' value={this.state.price} onChange={this.handleChange} name="price" >
          </Input><br/>
        <Input  label={{ icon: 'tag' }} labelPosition='left'  type='text' placeholder='Enter Brand' value={this.state.brand} onChange={this.handleChange} name="brand" >
          </Input><br/>
        <Input label={{ icon: 'paint brush' }} labelPosition='left' type='text' placeholder='Enter Colorway' value={this.state.colorway} onChange={this.handleChange} name="colorway">
          </Input><br/>
        <Input label={{ icon: 'write' }} labelPosition='left' type='text' placeholder='Enter Size/Description' value={this.state.description} onChange={this.handleChange} name="description">
          </Input><br/>
        <Input label={{ icon: 'file image' }} labelPosition='left' type='text' placeholder='Enter Image URL' value={this.state.image_url} onChange={this.handleChange} name="image_url">
          </Input><br/>
        <button style={{"backgroundColor": "#a9abae" }} onClick={(event)=> this.props.handleFormSubmit(event, this.state)} >Post For $ale</button>
    </div>
    )
  }
}

export default Form;

// <input type="text" placeholder="Enter Shoe Name" value={this.state.name} onChange={this.handleChange} name="name" /><br/>
// <input type="text" placeholder="Enter Brand" value={this.state.brand} onChange={this.handleChange} name="brand" /><br/>
// <input type="text" placeholder="Enter Colorway" value={this.state.colorway} onChange={this.handleChange} name="colorway" /><br/>
// <input type="text" placeholder="Enter Size/Description" value={this.state.description} onChange={this.handleChange} name="description" /><br/>
// <input type="text" placeholder="Enter Image URL" value={this.state.image_url} onChange={this.handleChange} name="image_url" /><br/>
