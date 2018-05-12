import React from "react";
import { Link } from "react-router-dom";

const style_container = {
    "padding":"60px 10% 60px 10%"
};

class FAQ extends React.Component {
	render(){
		return(
			<main style={ style_container }>
                <div>
                    <div>
                    <div>
                        <h1>FAQ</h1>
                        <h3>Engage helps you voice your opinions at city council meetings</h3>
                        <p>Imagine an app that allows you to stay up-to-date with the local issues that you care about, just as easily as checking your Facebook status. And allows you to voice your concerns about a particular issue directly to the  Santa Monica City Council member responsible for it, just as easily as messaging a friend.</p>
                        <h4></h4>
                        <h3>How do I get started?</h3>
                        <p>The team is still working hard to make an app! But we would love to hear from you about our prototype and any questions you have for us.<br /><a href="mailto:engagelosangeles@gmail.com">engagelosangeles@gmail.com</a></p>
                        <h4></h4>
                        <h3>How does the City Council Work?</h3>
                        <p>It may seem confusing, but we are here to help! We will be creating a page to describe the process of how decisions are made at the City Council.</p>
                        </div>
                    </div>
                </div>
			</main>
		)
	}
};

export default FAQ;
























