const blogPost = document.querySelector(".blog-post");

function BlogFrog() {
	return (
		<article>
			<Post title="A" by="A" date="A" />
			<Post title="B" by="B" date="B" />
			<Post title="C" by="C" date="C" />
		</article>
	);
}

function Post(props) {
	return (
		<section>
			<h1>This is {props.title}</h1>
			<p>Written by {props.by}</p>
			<p>On {props.date}</p>
		</section>
	);
}

ReactDOM.render(<Blog />, blogPost);
