import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { func } from 'prop-types';
import LoginComponent from '../components/Login/LoginComponent';
import { loginAction } from '../actions/auth';
import { authErrors, getSuccessMsg, isAuthenticated } from '../reducers';


class LoginContainer extends Component {

  onSubmit = values => {

  	values.sub_tenant_id = 'demo';
		this.props.loginAction(values);

	};

	render() {
		return (
			<div className="login-page">
				<LoginComponent
					onSubmit={this.onSubmit}
					errors={this.props.errors}
					successMsg={this.props.successMsg}
					state={this.state}
				/>
			</div>
		);
	}
}

LoginContainer.propTypes = {
  loginAction: func.isRequired,
};

const mapStateToProps = state => ({
	errors: authErrors(state),
	isAuthenticated: isAuthenticated(state),
	successMsg: getSuccessMsg(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({ loginAction }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginContainer);
