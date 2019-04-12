import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import './styles.scss'
class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state =
            {
            name:"raj"
            }
        }
    handleClick(){
        console.log("functin called")
        this.props.actions.fetchData(this.state.name);
        // this.props.actions.fetchDataAxios();
        // this.props.actions.fetchDataUsingFetch();

    }
    
    render(){
        return ( 
            <div>
            <div > this is my Home Screen </div>
            <button onClick = {this.handleClick} > trigger action</button>


            <Link to="/notFound">
                <button>Go to not found</button>
            </Link>
            <Link to ="/">
            <button> Go to Home</button>
            </Link>
         {this.props.loginState.countries.loading?
            <div>Loading..</div>
        :
        <ul className={"a_b"}>
        {this.props.loginState.countries.data && this.props.loginState.countries.data.length && this.props.loginState.countries.data.map(row =>{

            return (<li>{row.name}</li>)
        }
         
            
        )}
        </ul>
        }
        

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
