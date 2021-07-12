import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getRandomUser} from '../store/actions/randomAction'

class randomUser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.props.getRandomUser();
      }, 1000);
        
    }

    render() {
        const {user} = this.props.user
        console.log(user)

        
        return (
            <div>
                <h5>Random Character: </h5>{user.name}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({user:state.user})

export default connect(mapStateToProps, {getRandomUser})(randomUser)