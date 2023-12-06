import React, { Component } from 'react'; 
import {DropdownButton, Dropdown} from 'react-bootstrap' ; 

import List from './List';

class FilteredList extends Component {
	constructor(props) {
		super(props);
		// The state is just a list of key/value pair (like a hashmap)
		this.state = {
			search: "",
			type: "all"
		};
 }



	// Sets the state whenever the user types on the search bar 
	onSearch = (event) => {
	this.setState({search: event.target.value.trim().toLowerCase()});
 }
 
	onFilter = (event) =>{
	 this.setState({type: event});
	}
 


	 
 filterItem = (item) => {
	 const {search, type} = this.state;
	 console.log(search);
	 console.log(type);
    if (item.name !== undefined && item.type !== undefined) {
		const prodName = item.name.toLowerCase().includes(search);
		const prodType = type === "all" || item.type.toLowerCase() === type.toLowerCase();
		return prodName && prodType;	
		
	  
    } 
      return false;
	  
    }

  
 render() {
	 return (
		<div className="filter-list">
		<h1>Produce Search</h1>
		<DropdownButton id="typeDropdown"  title={"type"} onSelect={this.onFilter}>
		    <Dropdown.Item eventKey="all" /*onSelect={this.handleTypeSelect}*/>All</Dropdown.Item> <br />
			<Dropdown.Item eventKey="fruit"  >Fruit</Dropdown.Item> <br />
			<Dropdown.Item eventKey="vegetable"  >Vegetable</Dropdown.Item> <br /> 
		</DropdownButton><br/>
		 
		 
		 <input type="text" placeholder="Search" onChange={this.onSearch} />
		 <List items={this.props.items.filter(this.filterItem)} />
		 </div>
		 );
	 }
}

export default FilteredList;