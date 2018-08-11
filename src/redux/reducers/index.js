import { combineReducers } from 'redux';
import login from './login';
import toggleSidebar from './toggleSidebar';
import semesterClasses from './semesterClasses';

export default combineReducers({
  isLoggedIn: login,
  semesterClasses,  
  isSidebarOpen: toggleSidebar,
});