import * as React from 'react';
import styles from './companyOverviewInformation.module.scss';


export interface IProps {
    companyNameProp: string;
    updateCompInfo: () => void
}
 
export interface IState {
    
}
 
class CompanyOverviewInformation extends React.Component<IProps, IState> {
    state = { 
        company: this.props.companyNameProp  
    }

    render() { 
        return ( 
            <div className={styles.companyInformation}>
                <h2 onClick={this.props.updateCompInfo}> {this.props.companyNameProp}</h2>
            </div>
         );
    }

    
    
}






 
export default CompanyOverviewInformation;

