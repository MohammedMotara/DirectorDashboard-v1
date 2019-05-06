import * as React from 'react';
import styles from './statusBar.module.scss';

export interface IProps {

}
 
export interface IState {
    
}
 
class StatusBar extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
                <div className={styles.statusBar}>
                    <h1 className={styles.pageName}> Personal Page - Director</h1>
                </div>
         );
    }
}
 
export default StatusBar;