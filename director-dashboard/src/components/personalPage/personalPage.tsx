import * as React from 'react';
import styles from './personalPage.module.scss';
import NavigationBar from '../nav-bar/navBar';
import CompanyOverview from '../companyOverview/companyOverview';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class PersonalPage extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return (  
            <div >
                <NavigationBar />
                {/* <CompanyOverview /> */}
            </div>
        );
    }
}
 
export default PersonalPage;