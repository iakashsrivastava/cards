import React from 'react';
import styles from './../styles/Header.module.css';

interface Props {
    searchString: string,
    setSearchString: (searchString :string) => void
}

const Header: React.FC<Props> = ({searchString, setSearchString}) => {
    return (
        <div className={styles.headerContainer}>
            Fixed Header
            <input type="text" placeholder="Search.." value= {searchString} onChange={(e) =>setSearchString(e.target.value)}/>
        </div>
    )
}

export default Header;
