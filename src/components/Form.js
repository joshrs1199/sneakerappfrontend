import React from 'react'

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
  return (
  <div>
    <h1>Put Something Up For Sale</h1>
    <form onSubmit={(event)=> this.props.handleFormSubmit(event, this.state)}>
        <label>
          <input type="text" placeholder="Enter Shoe Name" value={this.state.name} onChange={this.handleChange} name="name" /><br/>
          <input type="number" placeholder="Enter Price" value={this.state.price} onChange={this.handleChange} name="price" /><br/>
          <input type="text" placeholder="Enter Brand" value={this.state.brand} onChange={this.handleChange} name="brand" /><br/>
          <input type="text" placeholder="Enter Colorway" value={this.state.colorway} onChange={this.handleChange} name="colorway" /><br/>
          <input type="text" placeholder="Enter Size/Description" value={this.state.description} onChange={this.handleChange} name="description" /><br/>
          <input type="text" placeholder="Enter Image URL" value={this.state.image_url} onChange={this.handleChange} name="image_url" /><br/>
      </label>
          <input type="submit" value="Submit" /><br/>
      </form>
    </div>
    )
  }
}

export default Form;
