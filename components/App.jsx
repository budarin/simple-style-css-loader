import React from 'react';

import styles from './App.css';
import Header from './Header.jsx';

class App extends React.Component {
    render() {
        return (<div>
            <Header />
            <div className={styles.app} >
                Application text
            </div>
        </div>);
    }
}

export default App;
