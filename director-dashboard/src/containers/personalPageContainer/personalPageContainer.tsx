import * as React from 'react';
import styles from './personalPageContainer.module.scss';
import NavigationBar from '../../components/nav-bar/navBar';
import CompanyOverview from '../../components/companyOverview/companyOverview';
import StatusBar from '../../components/statusBar/statusBar';
import MainContent from '../../components/mainContent/mainContent';
import Dropdown from '../../components/nav-bar/dropdown';
import { connect } from 'react-redux';
import { IStore } from "../../reducer/index";
import { openMenu } from '../../reducer/generalReducer';

 
export interface IOwnProps {

}

export interface IStateProps {
  menuOpen: boolean;
  openMenu: () => void
}

export interface IState {}
 
class PersonalPageContainer extends React.Component<IOwnProps & IStateProps, IState> {
    render() { 
        return (  
            <div >
                <NavigationBar openMenu={this.props.openMenu}/>
                <Dropdown menuOpen={this.props.menuOpen}/>
                <StatusBar />
                <MainContent  />
                <CompanyOverview />
            </div>
        );
    }
};
 
// This is my new function that holds my states from the store and props of the component.
// We first have to define the components state we are going to use in the IStateProps interface above.
// Then we give this a value. 
// If it changes the state, you'd give it state.(reducerName i.e. general).(it's key i.e. the key used when defining the initial state) 

const mapStateToProps = (state: IStore, props?:IOwnProps) => {
    return {
      menuOpen: state.general.menuOpen,
      ...props
    };
  };
  
  // Here I am importing the action creator I produced in my reducer file
  
  const mapDispatchToProps = { openMenu };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PersonalPageContainer);
  