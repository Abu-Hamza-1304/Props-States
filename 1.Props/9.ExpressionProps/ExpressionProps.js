function Todo(props) {
	return <li> TODO: {props.item} </li>
}

function List(props) {
	var list = ['clear desk', 'complete email', 'shopping', 'exercise'];
	return (
		<ul>
			{list.map((todo) => <Todo key = {todo} item = {todo} />)}
		{/*The map function can be invoked on any list, and its input argument is some
		kind of transformation function that is applied to each element in the list.
		So, list.map here will iterate over the each element in the existing list,
		apply the transformation function to each element, and generate a new list
		with the transformed elements.*/}

	{/*NOTE: the key property and the item property that we passed into the todo component
	is understood only by React component. It's not really rendered out as a part of the HTML.*/}
		</ul>
	);
}

ReactDOM.render(<List />, document.getElementById('outer'));