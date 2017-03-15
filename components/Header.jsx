import React from 'react';

import styled from './utils/styled';
import styles from './Header.css';

class Header extends React.Component {
    render() {
        return <div className={this.props.classes.header} >
            Simple Header
        </div>;
    }
}

export default styled(styles)(Header);
