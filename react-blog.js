const blogPost = document.querySelector(".blog-post");

// class Post extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			blogA: "A",
// 			blogB: "B",
// 			blogC: "C"
// 		};
// 	}
// 	render() {
// 		<div>
// 			<Post name="A" by="A" date="A" />
// 		</div>;
// 	}
// }

function Blog() {
	return (
		<article>
			<Post name="A" by="A" date="A" />
			<Post name="B" by="B" date="B" />
			<Post name="C" by="C" date="C" />
		</article>
	);
}
function Post(props) {
	return (
		<section>
			<h1>This is {props.name}</h1>
			<p>Written by {props.by}</p>
			<p>On {props.date}</p>
		</section>
	);
}

ReactDOM.render(<Blog />, blogPost);
