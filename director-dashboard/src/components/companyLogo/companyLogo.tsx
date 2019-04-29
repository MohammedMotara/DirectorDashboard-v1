import * as React from 'react';
import styles from './companyLogo.module.scss'

export interface IProps {
    
}
 
export interface IState {
    
}
 
class CompanyLogo extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <div className={styles.companyLogo}/>
         );
    }
}
 
export default CompanyLogo;