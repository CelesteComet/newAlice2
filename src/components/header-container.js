import { connect } from 'react-redux';
import Header from './header';
import { toggleVisibility, setWindowSize, reset } from '../actions/menu_actions';


const mapStateToProps = (state) => {
  return {
    "state": state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibility: () => {
      dispatch(toggleVisibility());
    },
    setWindowSize: () => {
      dispatch(setWindowSize());
    },
    handleReset: () => {
      dispatch(reset());
    }
  }
}




const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default HeaderContainer;