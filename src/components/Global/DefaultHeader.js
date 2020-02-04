import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import {connect} from 'react-redux';
import bindActionCreators from "redux/src/bindActionCreators";
import {func} from 'prop-types';
import {sidebarAction} from '../../actions/globals';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/avatar.jpg';


class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.asideTogglerRef = React.createRef();
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.asideTogglerRef.current).addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.props.sidebarAction();
  };

  render() {

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 38, alt: 'LevelHunt Logo' }}
          minimized={{ src: logo, width: 89, height: 38, alt: 'LevelHunt Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" ref={this.asideTogglerRef}/>

        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"/> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"/> Settings</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}>
                <i className="fa fa-lock"/> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = {
  sidebarAction: func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({ sidebarAction }, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(React.memo(DefaultHeader));
