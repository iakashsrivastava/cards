import React, {useEffect, useRef, useState} from 'react';

import styles from './../styles/Header.module.css';

interface Props {
    searchString: string,
    setSearchString: (searchString :string) => void
}

const Header: React.FC<Props> = ({searchString, setSearchString}) => {
    
    return (
        <div className={styles.headerContainer}>
            <input 
                className={styles.searchText}
                onChange={(e) =>setSearchString(e.target.value)} 
                placeholder="Search.." 
                type="text" 
                value= {searchString} 
            />
            <a href="https://github.com/iakashsrivastava/cards" target="_blank" className={styles.codeLink}>Github Code Link</a>
        </div>
    )
}

export default Header;
