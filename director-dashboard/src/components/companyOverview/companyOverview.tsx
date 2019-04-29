import * as React from 'react';
import styles from './companyOverview.module.scss';
import CompanyLogo from '../companyLogo/companyLogo';
import CompanyOverviewInformation from '../companyOverviewInformation/companyOverviewInformation';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class CompanyOverview extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return (  
            <div className={styles.companyOverviewContainer}>
                <CompanyLogo />
                <CompanyOverviewInformation />
            </div>
        );
    }
}
 
export default CompanyOverview;