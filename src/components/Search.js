import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "./ImageResult";
require('dotenv').config();

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      amount: 15,
      apiUrl: "https://pixabay.com/api",
      image: []
    };
  }

  onTextChange = e => {
    const val = e.target.value
    this.setState(
      {
        [e.target.name]: val
      },() => {
          if(val === ''){
            this.setState({
                image: []
            })
          }else{
            axios.get(`${this.state.apiUrl}/?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchText}&per_page=${this.state.amount}`)
            .then(res =>
              this.setState({
                image: res.data.hits
              })
            )
            .catch(err => console.log(err));
          }  
      });
  };
  onAmountChange = (e,index,value) => {
    this.setState({
        amount:value
    })
  };
  render() {

    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
          style={{marginLeft:7}}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          style={{marginLeft:7}}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
          <MenuItem value={75} primaryText="75" />
          <MenuItem value={100} primaryText="100" />
        </SelectField>
        <br/>
        {this.state.image.length > 0 ? (<ImageResults images = {this.state.image}/>) : null}
      </div>
    );
  }
}
