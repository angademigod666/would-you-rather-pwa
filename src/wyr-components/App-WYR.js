import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleWYRInitialData } from '../actions/shared'

import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'

import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionDetails from './QuestionDetails'
import ViewPoll from './ViewPoll'

/**
* @description - WYRApp component - the app root
* loads the -- LoadingBar component
* loads the -- Nav component
* loads the various components via <Switched> <Router>
*
* @method - componentDidMount - gets the initial app data
* @method - render - renders the components 
*/

class WYRApp extends Component {
  componentDidMount() {
    this.props.dispatch(handleWYRInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav wyrAuthedUser={this.props.wyrAuthedUser} />
            {this.props.loading === true
              ? null
              : <div className="container-fluid">
                <br />
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                  <Route path='/question/:qid' exact component={QuestionDetails} />
                  <Route path='/viewPoll/:qid' exact component={ViewPoll} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/**' exact component={Home} />
                </Switch>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}



/**
* @description - mapStateToProps({ wyrAuthedUser,loadingBar }) - REDUX-STORE link 
* Will make { wyrAuthedUser,loadingBar } available as external PROPS for this component
*/
function mapStateToProps({ wyrAuthedUser, loadingBar }) {
  return {
    wyrAuthedUser,
    loadingBar,
  }
}
/**
* exporting the "connected" component
* this component is now connected to the REDUX-STORE
*/
export default connect(mapStateToProps)(WYRApp)