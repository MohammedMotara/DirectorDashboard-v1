import * as React from 'react';
import styles from './navBar.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class NavigationBar extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            
            <nav className={styles.navBar}>
                <ul>
                    <li>Home</li>
                    <li>Personal</li>
                    <li>Profile</li>
                </ul>
                <div />
            </nav>
        );
    }
}
 
export default NavigationBar;
