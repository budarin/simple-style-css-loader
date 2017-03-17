import React from 'react';

import styled from './utils/styled';
import styles from './Header.css';

@styled(styles)
class Header extends React.Component {
    render() {
        const { componentStyles: { header } } = this.props;

        return <div className={header} >
            Simple Header
        </div>;
    }
}

export default Header;
