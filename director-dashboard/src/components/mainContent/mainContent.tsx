import * as React from 'react';
import styles from './mainContent.module.scss';

export interface IProps {
    role: string;
    updateRole: () => void;
}
 
export interface IState {
    
}
 
class MainContent extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <div className={styles.mainContent}>
                <h2 onClick={this.props.updateRole}>{this.props.role}</h2>
            </div>
         );
    }
}
 
export default MainContent;