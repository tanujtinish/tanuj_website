import React from 'react';
import logo from '../../logo.svg';
import '../../assets/css/Main.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menu';
import { PLACES } from '../../assets/data/places';
import Greet from './greet';

class Main extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: PLACES
		};
	}
	
	render(){
		return (
			<div className='Main'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Tanuj Gupta- Graduate Student At UCSC</NavbarBrand>
					</div>
				</Navbar>
				<Greet />
				<h1>Famous Places of India</h1>
				<Menu places={this.state.places} />
			</div>
		);
	}
}

export default Main;