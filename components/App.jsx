import React from 'react';

import styled from './utils/styled';
import styles from './App.css';
import Header from './Header.jsx';

class App extends React.Component {
    render() {
        return (<div>
            <Header />
            <div className={this.props.classes.app} >
                Application text
            </div>
        </div>);
    }
}

export default styled(styles)(App);
