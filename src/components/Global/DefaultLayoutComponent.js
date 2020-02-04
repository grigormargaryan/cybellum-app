import React, {Component, Suspense} from 'react';
import {connect} from 'react-redux';
import bindActionCreators from "redux/src/bindActionCreators";
import {NotificationContainer} from 'react-notifications';
import {Container} from 'reactstrap';
import { Route, Switch} from 'react-router-dom';
import {
  AppHeader,
  AppBreadcrumb
} from '@coreui/react';

import {logoutAction} from '../../actions/auth';
import routes from '../../routes';
import Loading from '../../utils/Loading';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));



class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  signOut(e) {
    e.preventDefault();
    this.props.logoutAction();
    this.props.history.push('/sign-in');
  }

  render() {
    return (
      <div className="">
        <Loading />
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">

          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <NotificationContainer/>

                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}/>
                    ) : (null);
                  })}
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({ logoutAction }, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)((React.memo(DefaultLayout)));

