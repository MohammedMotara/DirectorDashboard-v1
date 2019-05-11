import * as React from 'react';
import styles from './companyOverview.module.scss';
import CompanyLogo from '../companyLogo/companyLogo';
import CompanyOverviewInformation from '../companyOverviewInformation/companyOverviewInformation';



export interface IProps {
}
 

export interface IState {
    company: string;
}

export interface IReduxProps {
}

 
class CompanyOverview extends React.Component<IProps, IState> {

    public state = {
        company : "Director Dashboard - InitialState"
    }

    render() { 
        return (  
            <div className={styles.companyOverviewContainer}>
                <CompanyLogo />
                <CompanyOverviewInformation />
            </div>
        );
    }

    public handleOnClick = () => {
        this.setState({
            company : "Director Dashboard - New State"
        })
    }
}

export default CompanyOverview;


