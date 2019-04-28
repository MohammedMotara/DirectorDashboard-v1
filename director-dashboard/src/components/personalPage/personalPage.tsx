import * as React from 'react';
import styles from './personalPage.module.scss';
import NavigationBar from '../nav-bar/navBar';
import CompanyOverview from '../companyOverview/companyOverview';
import StatusBar from '../statusBar/statusBar';
import MainContent from '../mainContent/mainContent';

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
                <StatusBar />
                <MainContent />
                <CompanyOverview />
            </div>
        );
    }
}
 
export default PersonalPage;