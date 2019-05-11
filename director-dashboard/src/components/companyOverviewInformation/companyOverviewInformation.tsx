import * as React from 'react';
import styles from './companyOverviewInformation.module.scss';


export interface IProps {

}
 
export interface IState {
    
}
 
class CompanyOverviewInformation extends React.Component<IProps, IState> {
    state = { 

    }

    render() { 
        return ( 
            <article className={styles.companyInformation}>
                <section className={styles.box}>
                    <h2 className={styles.keyCategories}>Status</h2>
                    <h2 className={styles.keyInfo}>Active</h2>
                    <h2 className={styles.keyCategories}>Registered Office Address</h2>
                    <h2 className={styles.keyInfo}>London</h2>
                    <h2 className={styles.keyCategories}>Incorporated on</h2>
                    <h2 className={styles.keyInfo}>29th February 2013</h2>
                    <h2 className={styles.keyCategories}>Company Type</h2>
                    <h2 className={styles.keyInfo}>Private Limited</h2>
                </section>

            </article>
         );
    }

    
    
}






 
export default CompanyOverviewInformation;

