class Student extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = 'student'>
				<div>
					Student ID: {this.props.id}
				</div>
				<div>
					Name: {this.props.studentName}
				</div>
				<div>
					Enrolled: {this.props.enrolled ? 'yes' : 'no'}
				</div>
				<div>
					Campus: {this.props.campus}
				</div>
				<div>
					Major: {this.props.major}
				</div>
				<div>
					Course: {this.props.course}
				</div>
			</div>
		);
	}
};

Student.propTypes = {
	id: PropTypes.number,
	studentName: PropTypes.string,
	enrolled: PropTypes.bool,
	major: PropTypes.string.isRequired,
	campus: PropTypes.oneOf(['North', 'South']),

	courses(prop, propName) {
		var propValue = prop[propName];

		if (propValue == 'Statistics' || propValue == 'Philosophy') {
			throw Error('Sorry, this course is not offered currently');
		}
	}
}

/*
	PropTypes is an attribute on the student class.
	Student.propTypes is a special atribute assigned to a java script object.
	React looks for this attribute that is the prop-types.js library and
	React looks for this attribute to perform type checking. 
*/

Student.defaultProps = {
	id: Math.floor(Math.random() * 100000000),
	enrolled: true
};

ReactDOM.render(<Student studentName = {"Peter"}
						 major = "Computer Science"
						 courses = "Mathematics"
						 campus = "North" />, document.getElementById('react-default-prop'));