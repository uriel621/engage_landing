import React from "react";

const style_container = {
    "padding":"60px 10% 60px 10%"
};

const style_donate_button = {
	"display": "inlineBlock",
    "background": "rgb(241, 95, 91)",
    "color": "white",
    "padding": "0.375em 1.5em",
    "borderRadius": "0.25em",
    "fontFamily": "Reem Kufi, Helvetica Neue, Helvetica, sans-serif",
    "border": "1px solid",
    "textDecoration": "none",
    "cursor": "pointer",
    "fontSize": "inherit",
    "textTransform": "uppercase",
    "lineHeight": "inherit",
    "textAlign": "center",
    "boxSizing": "border-box",
}

const style_audiance = {
	"display":"flex",
    "textAlign": "center",
}

class About extends React.Component {
    componentDidMount(){
        console.log('621ab', window.location.pathname)
        document.querySelector('header').style.backgroundColor = "rgb(241, 241, 241)";
        document.querySelector('#navigation').style.backgroundColor = "rgb(241, 95, 91)";
        document.querySelector('main').style.paddingTop = "60px";
        document.querySelector('#logo-img').style.display = "block";
        document.querySelector('#header-title').style.display = "block";
    }

    render(){
        return(
			<main style={ style_container }>
				<div class="ui middle aligned stackable grid container">
					<div class="row">
						<div class="ui text container">
						<h3 class="ui header center">About this project</h3>
						<p>People often never get a chance to speak at a city council meeting. There are many causes for this: work schedules, childcare, accessibility, they've thought their voice would not be heard, or they just haven't followed an issue in detail.</p>
						<p>Engage is a tool that lets you easily follow issues your city council is debating and lets you easily participate in the discussion with the most impact.</p>
						</div>
					</div>
					<div class="row">
						<div class="ui text container">
						<h3 class="ui header">Our Mission</h3>
						<p>Engage’s mission is to empower citizens to improve their local government by making it easy to participate in discussions on government policy and agendas.  We hope to make a solution that works for all local governments, but for now are starting with the city of Santa Monica.</p>
						<p>Some of our short-term objectives include a mobile app that allows users to see  city council agenda items that are interesting to them, and an in-app option to send feedback to their city council.</p>
						</div>
					</div>

					<div class="row">
						<div class="ui text container">
						<h3 class="ui header">About Hack for LA</h3>
						<p>Hack for LA is the official Los Angeles chapter of Code for America, a national nonprofit that believes government can work for the people, by the people, in the 21st century. At our weekly Civic Hack Nights, we organize groups of volunteers to build technology addressing the LA region’s biggest civic issues. We welcome technologists, government officials, designers, students, activists, entrepreneurs and community members to join us and collaboratively create a better Los Angeles.</p>
						</div>
					</div>

					<div class="row">
						<div class="ui text container">
						<h3 class="ui header">Have a question? Want to help?</h3>
						<p>Join us at Hack For LA, Wednesdays at 6pm</p>
						</div>
					</div>
					<div class="row">
						<div class="ui text container">
						<h3 class="ui header">Support this project!</h3>
						<p>We’re a volunteer-based project and would love your donation! On the donation page, please choose Los Angeles Brigade and make it in honor of Engage with the email address info@foodoasis.la</p>
						</div>
					</div>

				</div>
			</main>
        )
    }
};

export default About;