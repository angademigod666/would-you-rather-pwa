import React, { Component } from 'react'
import tyler from '../assets/tyler.jpg';
import ryan from '../assets/ryan.jpg';
import michael from '../assets/michael.jpg';
/**
* @description - User component - CHILD for <LeaderBoard/> component
* a STATELESS component
* recieves the prop - userObject from <LeaderBoard/> 
* displays user details like - Answered, UnAnswered and Total SCORE
* @method - renders - the components 
*/
class User extends Component {
    render() {
        const { user } = this.props
        const answered = Object.keys(user.answers).length
        const asked = user.questions.length
        //const imgURL = '../assets/' + user.avatarURL
        const imgURLMod = user.avatarURL === 'tyler.jpg' ? tyler : user.avatarURL === 'ryan.jpg' ? ryan : user.avatarURL === 'michael.jpg' ? michael : null
        return (
            <div className='card'>
                <div className='card-header'>
                    <h3>{user.name}</h3>
                </div>
                <div className='card-body'>

                    <div className='row'>
                        <div className='col-sm-4'>
                            <img src={imgURLMod}
                                alt={`Avatar of author`}
                                className='img-thumbnail img-fluid'
                            />
                        </div>
                        <div className='col-sm-8'>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Answered</th>
                                        <th>Asked</th>
                                        <th>Total Score</th>
                                    </tr>
                                    <tr>
                                        <td>{answered}</td>
                                        <td>{asked}</td>
                                        <td><h4>{asked + answered}</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default User