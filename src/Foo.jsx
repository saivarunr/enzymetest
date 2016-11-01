import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class Login extends React.Component{
	constructor(){
		super();
		this.state={
				processing:false,
				loginFail:false,
				errorMssg:"",
			}
	}
  componentDidMount(){
    
  }
	render(){
		return(
			<div>
				<div className="login-base pad-top-85">
					<div className="login-container center-block">
						<div className={this.state.processing ? "spin-container show" : "spin-container hidden"}>
							<div className="loading-cogs center mar-top-100"></div>
						</div>
						<div className="logo-ascend-color-md center mar-bot-30"/>
						{this.state.loginFail &&
							<div className="login-error center-block">
								<i className="fa fa-exclamation-circle"/>
								<p>{this.state.errorMssg}</p>
							</div>
						}
						<form method="POST" action="/users/session">
						<div className="inner-addon left-addon">
							<i className="glyphicon glyphicon-envelope"/>
							<input type="text" className="form-control" name="email" id="login-email" placeholder="Email"/>
						</div>
						<div className="inner-addon left-addon mar-top-30">
							<i className="fa fa-lock"/>
							<input type="password" className="form-control" name="password"  id="login-password" placeholder="Password"/>
						</div>
						<button type="submit" className="btn btn-primary mar-top-30 mar-bot-20 center-block">Login</button>
						</form>

					<center><a style={{"cursor":"pointer"}} href="#forgotpassword" className="cursor">Forgot Password?</a> | <a style={{"cursor":"pointer"}} href="#signup" className="cursor">Signup</a></center>
					</div>
				</div>
			</div>
		)
	}
}
//ReactDOM.render(<Login/>,document.getElementById('ascendContainer'));
