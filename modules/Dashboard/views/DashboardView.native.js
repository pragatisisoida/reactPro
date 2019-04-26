import React from 'react';
import { Button } from 'react-native';

// import styles from '../../../native/styles';

export default props =>
    <Button
        onPress={props.onClick}
        title = {"About"}
        // style={styles.buttonText}
        // containerStyle={styles.button}
        >
        About
    </Button>;