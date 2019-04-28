import * as React from 'react';
import styles from './navBar.module.scss';
import CompanyOverview from '../companyOverview/companyOverview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faBook } from '@fortawesome/free-solid-svg-icons'


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
                        <FontAwesomeIcon className={styles.logo} icon={faBook}/>
                    </div>

                    <div className={styles.searchBarContainer}>
                        <input className={styles.searchBar}/>
                    </div>
                </div>

                <ul className={styles.buttonContainer}>
                    <li className={styles.navButton}><a>Overview</a></li>
                    <li className={styles.navButton}><a>Strategy</a></li>
                    <li className={styles.navButton}><a>Personal</a></li>
                    <li className={styles.navButton}><a>Calendar</a></li>
                    <li className={styles.navButton}><a>Profile</a></li>
                </ul>

                <div className={styles.settingsSection}>
                    <div className={styles.notificationButton} >
                        <FontAwesomeIcon className={styles.notificationIcon} icon={faBell} />
                    </div>
                    <div className={styles.profileButton}>
                        <FontAwesomeIcon className={styles.profilePicture} icon={faUser} />
                    </div>

                </div>
            </nav>
        );
    }
}
 
export default NavigationBar;
