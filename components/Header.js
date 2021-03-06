import { Component } from 'react';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const AppHeader = (props) => {
    return (
        <Header
        leftComponent={{ icon: 'chevron-left', onPress: props.onPress, color: '#000', size: 40 }}
        centerComponent={{ text: props.title, style: { color: '#000', fontSize: 30, fontWeight: '500' } }}
        containerStyle={{ backgroundColor: props.backgroundColor ? props.backgroundColor : '#FFF' }}
        />
    );
};

AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func
};

export default AppHeader;
