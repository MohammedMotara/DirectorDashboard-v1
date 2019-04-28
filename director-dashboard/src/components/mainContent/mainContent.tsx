import * as React from 'react';
import styles from './mainContent.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class MainContent extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <div className={styles.mainContent} />
         );
    }
}
 
export default MainContent;