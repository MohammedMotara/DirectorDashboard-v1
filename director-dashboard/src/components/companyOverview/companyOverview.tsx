import * as React from 'react';
import styles from './companyOverview.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class CompanyOverview extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return (  
                <div className={styles.companyOverviewContainer}>
                    <div className={styles.companyLogo}/>
                    <div className={styles.companyInformation}/> 
                    {/* Need to make the company information its own container, also need to map through dynamic data within that component*/}
                </div>
        );
    }
}
 
export default CompanyOverview;