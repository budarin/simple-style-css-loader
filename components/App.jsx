import React from 'react';

import styled from './utils/styled';
import styles from './App.css';
import Header from './Header.jsx';

class App extends React.Component {
    componentWillMount() {
        this.setState({
            showHeader: true
        })
    }

    componentDidMount() {
        setTimeout(()=> {
            styles.unuse();
        }, 5000);

        setTimeout(()=> {
            this.setState({
                showHeader: false
            })
        }, 10000);
    }

    render() {
        const { classeNames: { app } } = this.props;

        return (<div>
            {this.state.showHeader && <Header />}
            <div className={app} >
                Application text
            </div>
        </div>);
    }
}

export default styled(styles)(App);
