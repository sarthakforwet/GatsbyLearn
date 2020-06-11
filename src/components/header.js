import React from 'react'

export default function Header(props){
	return <h1>{props.headerText}</h1>
}

export function Linker(props){
	return <a href={props.link}>Click me please na...</a>
}
