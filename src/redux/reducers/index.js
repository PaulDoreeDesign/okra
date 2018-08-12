import { combineReducers } from 'redux';
import toggleSidebar from './toggleSidebar';
import semesterClasses from './semesterClasses';

export default combineReducers({
  semesterClasses,
  isSidebarOpen: toggleSidebar,
});
