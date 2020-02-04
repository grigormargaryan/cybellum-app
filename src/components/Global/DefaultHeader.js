import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import {connect} from 'react-redux';
import bindActionCreators from "redux/src/bindActionCreators";

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/cybellum-logo.svg';
import avatar from '../../assets/img/avatar.jpg';


class DefaultHeader extends Component {

  render() {

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 38, alt: 'cybellum Logo' }}
          minimized={{ src: logo, width: 89, height: 38, alt: 'cybellum Logo' }}
        />

        <Nav className="ml-auto pr-5" navbar>
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


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(React.memo(DefaultHeader));
