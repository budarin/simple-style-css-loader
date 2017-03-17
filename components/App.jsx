import React from 'react';

import styled from './utils/styled';
import styles from './App.css';
import Header from './Header.jsx';

class App extends React.Component {
    static propTypes = {
        componentStyles: React.PropTypes.object
    };

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
        const { componentStyles: { app } } = this.props;

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
        const value = (150).toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'UAH',
            maximumFractionDigits: 2,
        });

        return (<div>
            {this.state.showHeader && <Header />}
            <div className={app} >
                Application text costs {value}
            </div>
        </div>);
    }
}

export default styled(styles)(App);
