import React from 'react'
import Header from '../components/header'
import Linker from '../components/header'
import {Link} from 'gatsby'
export default function About()
{
	return (
	<div style={{color:"Magenta" ,fontSize:'30px'}}>
	<p>This is About page </p>
	<p>This is the next Line</p>
	<Header headerText="You're in School"/>
	<Linker link="www.google.com"/>
	<Link to="/">Home</Link>
	<p></p>
	<Link to="/college">Next-></Link>
	</div>
	
	)
}
