import * as React from 'react';
import styles from './statusBar.module.scss';

export interface IProps {
    statusBar: string;
    updateBar: () => void;
}
 
export interface IState {
    
}
 
class StatusBar extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
                <div className={styles.statusBar}>
                    <h1 className={styles.pageName} onClick={this.props.updateBar} >{this.props.statusBar}</h1>
                </div>
         );
    }
}
 
export default StatusBar;