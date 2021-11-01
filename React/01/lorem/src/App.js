import Content from './components/Content';

const App = () => {
	const name = 'Lorem';
	const text =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor aliquet risus, sed venenatis dui rutrum sed. Praesent ultrices feugiat felis ac volutpat. Etiam id rhoncus dui. Praesent porttitor massa vel massa efficitur, ac aliquet magna hendrerit. Cras convallis sodales eros a';

	const text2 =
		'Cras sollicitudin, velit vitae vehicula laoreet, lorem sem auctor libero, nec dictum mauris justo at nisl. Nam fermentum vitae eros in sollicitudin. Aliquam sit amet nisi fermentum, elementum nisi eu, pellentesque orci. Vestibulum hendrerit nunc ut suscipit dictum. Nullam faucibus ultrices nisi, non luctus lectus scelerisque quis. Mauris nec ligula orci. Vivamus vulputate elit ac augue rhoncus, pulvinar interdum dui tincidunt. Sed molestie, nisl ut faucibus pretium, orci tellus semper risus, at accumsan sapien urna ac nunc. Praesent pellentesque lacinia odio nec facilisis. Vestibulum erat arcu, consequat eu accumsan at, elementum vitae velit. Phasellus porta congue enim, vel aliquam velit ultrices et. Praesent porta felis enim, eu laoreet urna congue pretium. Vestibulum nec fermentum ligula. Ut non sapien ac est consectetur lobortis. Sed rutrum nisl dui, nec pharetra risus laoreet ut. Aenean lobortis magna lacus, quis molestie metus rutrum sed.';

	return (
		<div>
			<Content title={name} description={text} />
			<Content title={name} description={text2} />
		</div>
	);
};

export default App;
