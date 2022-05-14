const RedText = (props) => {
	return <div className = "red"> {props.children} </div>
}

const GreenText = (props) => {
	return <div className = "green"> {props.children} </div>
}

ReactDOM.render(<RedText>Hello</RedText>, document.getElementById('outer1'));

ReactDOM.render(<GreenText>Hello</GreenText>, document.getElementById('outer2'));

ReactDOM.render(
	<GreenText>
		Some more nested elements:
		<span><u>here</u></span> &amp; <span><b><i>here</i></b></span>
	</GreenText>,
	document.getElementById('outer3')
);

ReactDOM.render(
	<RedText>
		Some more nested elements:
		<span><u>here</u></span> &amp; <span><b><i>here</i></b></span>
	</RedText>,
	document.getElementById('outer4')
);