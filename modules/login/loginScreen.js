import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
this.state =
{name:"raj"
    }
}
    handleClick(){
        console.log("functin called")
        this.props.actions.getLoginInfo(this.state.name);
    }
    
    render(){
        return ( 
            <div>
            <div> this is my Login Screen </div>
            <p>store name {this.props.loginState.loginData && this.props.loginState.loginData.name}</p>
            <p>state name  {this.state.name}</p>
            <button onClick = {this.handleClick} > trigger action</button>

            <Link to="/notFound">
                <button>Go to not found</button>
            </Link>
            <Link to ="/">
            <button> Go to Home</button>
            </Link>

            </div>
    );
    
}
}


const mapStateToProps = state => (
    {
    loginState : state.loginReducer
}
)
const mapDispatchToProps = dispatch =>({

     
       actions: bindActionCreators(actions, dispatch)
    
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen) ;
