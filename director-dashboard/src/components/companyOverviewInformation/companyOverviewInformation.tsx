import * as React from 'react';
import styles from './companyOverviewInformation.module.scss';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class CompanyOverviewInformation extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <div className={styles.companyInformation}/> 
         );
    }
}
 
export default CompanyOverviewInformation;