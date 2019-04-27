import React from 'react'
import { NavLink } from 'react-router-dom'
import { handleSetWYRAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'




/**
* @description - Nav component - loads on '/' route path
* loads the navbar for the application
* navbar has the LEFT-LINKS -> Home, New Question, Leader Board
* navbar has the RIGHT-LINKS -> <<userName>> and Logout Button
*
* @method - logout() - lets the user logout -> will update the {wyrAuthedUser} property inside store to null
* @method - renders - the components 
*/
class Nav extends React.Component {
  logout = () => {
    this.props.dispatch(handleSetWYRAuthedUser(null));
  }
  render() {
    const { wyrAuthedUser } = this.props
    return (
      <React.Fragment>

        <nav className="navbar navbar-expand-sm bg-info navbar-light">
          <NavLink className="navbar-brand" to='/' exact activeClassName='nav-link '>Would you rather?</NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <div className="row">
              
                <li className="col-xs-6 nav-item">
                  <NavLink className="nav-link" to='/add' activeClassName='nav-link'>New Question </NavLink>
                </li>
                <li className="col-xs-6 nav-item">
                  <NavLink className="nav-link" to='/leaderboard' activeClassName='nav-link'>Leader Board</NavLink>
                </li>
              </div>
            </ul>
            {wyrAuthedUser &&
              (<ul className="navbar-nav ml-auto">
                <div className="row">
                  <li className="col-xs-6 nav-item">
                    <NavLink className="nav-link" to='/' activeClassName='nav-link active'>
                      <span className="badge badge-success">
                        <h6>{wyrAuthedUser}</h6>
                      </span>
                    </NavLink>
                  </li>
                  <li className="col-xs-6 nav-item">
                    <button className="btn btn-outline-warning nav-link"
                      onClick={() => this.props.dispatch(handleSetWYRAuthedUser(null))}>
                      Logout
                    </button>
                    
                  </li>
                </div>
              </ul>)}
          </div>
        </nav>
      </React.Fragment>
    )
  }
}


/**
* exporting the "connected" component
* Nav component is now connected to the REDUX-STORE
*/
export default connect()(Nav);