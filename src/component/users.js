import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'

class users extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);}
    componentDidMount(){
        this.props.getUsers()
        
    }
    change = (e) => {
        this.setState({isClicked: e})
        this.props.getUsers(e);
      }

    render() {
        const {users} = this.props.users
        console.log(users)
        const isl = this.props.users.isClicked
        return (
            
            <div>
                <table>
                    <td>
                        <h5>List of characters: </h5>
                        {users.map(u => 
                            <React.Fragment key={u.id}>
                                <button onClick={() => this.change(u.id)}>{u.id}. {u.name}</button> <br></br>
                            </React.Fragment>
                        )} 
                    </td>
                    <td>
                        <h5>Detailed information about charachter</h5><br></br>
                        <table>
                            <tr>Name: {isl != null && isl!= -1 ? (users[isl].name) : null}</tr>
                            <tr>Title: {isl != null && isl!= -1 ? (users[isl].title) : null}</tr>
                            <tr>ID: {isl != null && isl!= -1 ? (users[isl].id) : null}</tr>
                        </table>
                    </td>
                </table>
            </div>         
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})
export default connect(mapStateToProps, {getUsers})(users)