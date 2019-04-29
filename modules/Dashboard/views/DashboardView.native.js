import React from 'react';
import { Button } from 'react-native';
import {Container} from 'native-base';
import CustomHeader from '../../../ui-components/header';
// import styles from '../../../native/styles';

export default props =>
<Container>
    <CustomHeader title = {"Dashboard"} navigation = {props.navigation} />

    <Button
    style = {{backgroundColor: 'lightgrey',color: 'black'}}
        onPress={props.onClick}
        title = {"Open Modal"}
        // style={styles.buttonText}
        // containerStyle={styles.button}
        >
        About
    </Button>
</Container>;
    