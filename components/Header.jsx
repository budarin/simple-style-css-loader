import React from 'react';

import styled from './utils/styled';
import styles from './Header.css';

class Header extends React.Component {
    render() {
        const { classeNames: { header } } = this.props;

        return <div className={header} >
            Simple Header
        </div>;
    }
}

export default styled(styles)(Header);
