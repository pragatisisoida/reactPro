import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {Text,Button,FlatList, View} from 'react-native';
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state =
            {
                name: "raj"
            }
    }
    handleClick() {
        console.log("functin called")
        this.props.actions.fetchData(this.state.name);

    }

    render() {
        return (
            <View>
                <Text> this is my Home Screen </Text>
                <Button onClick={this.handleClick} title="Trigger"></Button>


                {/* <Button onPress={() => this.props.navigation.navigate('NotFound')} title="Go to not found" /> */}
                <Button title="Go to home" onPress={() => this.props.navigation.navigate('App')} />
                {this.props.loginState.countries.loading ?
                    <Text>Loading..</Text>
                    :
                    <FlatList
                        data={this.props.loginState.countries.data && this.props.loginState.countries.data.length && this.props.loginState.countries.data}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                    />}

            </View>
        );

    }
}


const mapStateToProps = state => (
    {
        loginState: state.loginReducer
    }
)
const mapDispatchToProps = dispatch => ({


    actions: bindActionCreators(actions, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
