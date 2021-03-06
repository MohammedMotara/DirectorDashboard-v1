import * as React from 'react';
import styles from './dropdown.module.scss';


export interface IProps {
    menuOpen: boolean;
}
 
export interface IState {
    
}
 
class Dropdown extends React.Component<IProps, IState> {
    state = { 
        menuOpen: this.props.menuOpen
    }

    closeDropdown () {
        this.setState({
            menuOpen: !this.props.menuOpen,
        })
    }

    render() { 

        return ( 
            <section className={this.props.menuOpen ?  styles.dropdown: "none" }>
                <ul className={styles.allLinks}>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </section>
         );
    }
}
 
export default Dropdown;