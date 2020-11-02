import React, {useEffect, useState} from 'react';

import styles from './../styles/Header.module.css';

interface Props {
    searchString: string,
    setSearchString: (searchString :string) => void
}

const Header: React.FC<Props> = ({searchString, setSearchString}) => {
    
    const [stickyHeader, setStickyHeader] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleScroll = () => {
        setStickyHeader(document.documentElement.scrollTop > 200);
    }
    const getHeaderClass = (): string => {
        const output = [styles.headerContainer];
        if(stickyHeader === true){
            output.push(styles.sticky)
        }
        return output.join(' ');
    }

    return (
        <>
            <div className={styles.topContainer}>
               <ul>
                   <li>
                       Application is bootstrapped using create-react-app and typescript.
                   </li>
                   <li>
                       Tried to keep things simple and cover all the required functionality at minimum without using any external package.
                   </li>
                   <li>
                       Tried to cover major react concepts such as functional components, hooks, code splitting, suspense, type checking.
                   </li>
                   <li>
                       
                   </li>
               </ul>
               
            </div>
            <div className={getHeaderClass()}>
                <input 
                    className={styles.searchText}
                    onChange={(e) =>setSearchString(e.target.value)} 
                    placeholder="Search.." 
                    type="text" 
                    value= {searchString} 
                />
            </div>
        </>
    )
}

export default Header;
