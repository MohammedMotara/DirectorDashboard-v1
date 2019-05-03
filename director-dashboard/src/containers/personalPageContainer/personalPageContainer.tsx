import * as React from 'react';
import styles from './personalPageContainer.module.scss';
import NavigationBar from '../../components/nav-bar/navBar';
import CompanyOverview from '../../components/companyOverview/companyOverview';
import StatusBar from '../../components/statusBar/statusBar';
import MainContent from '../../components/mainContent/mainContent';

export interface IProps {
}
 
export interface IState {
    role: string;
    statusBar: string
}
 
class PersonalPageContainer extends React.Component<IProps, IState> {
    state = { 
        role: "ggg",
        statusBar: "Personal - Dashboard"
    }

    public roleChange = () => {
        this.setState({
            role: "Director"
        });
    };

    public updateStatusBar = () => {
        this.setState({
            statusBar: "Personal Dashbaord - Director"
        })
    } 

    render() { 
        return (  
            <div >
                <NavigationBar />
                <StatusBar updateBar={this.updateStatusBar} statusBar={this.state.statusBar} />

                <MainContent updateRole={this.roleChange} role={this.state.role} />

                <CompanyOverview />
            </div>
        );
    }
};
 
export default PersonalPageContainer;