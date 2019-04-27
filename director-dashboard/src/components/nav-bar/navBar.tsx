import * as React from 'react';
import styles from './navBar.module.scss';
import CompanyOverview from '../companyOverview/companyOverview';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class NavigationBar extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <nav className={styles.navBar}>
                <div>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo} />
                    </div>

                    <div className={styles.searchBarContainer}>
                        <input className={styles.searchBar}/>
                    </div>
                </div>

                <ul className={styles.buttonContainer}>
                    <li className={styles.navButton}>Overview</li>
                    <li className={styles.navButton}>Personal</li>
                    <li className={styles.navButton}>Profile</li>
                </ul>

                <div className={styles.settingsSection}>

                    <div className={styles.notificationButton} >
                        <div className={styles.notificationImage} />
                    </div>
                    <div className={styles.profileButton}>
                        <div className={styles.profilePicture} />
                    </div>

                </div>
            </nav>
        );
    }
}
 
export default NavigationBar;
