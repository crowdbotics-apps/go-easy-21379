import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging138428Navigator from '../features/Messaging138428/navigator';
import CalendarView138427Navigator from '../features/CalendarView138427/navigator';
import EmailAuth138426Navigator from '../features/EmailAuth138426/navigator';
import Settings138410Navigator from '../features/Settings138410/navigator';
import Settings138391Navigator from '../features/Settings138391/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging138428: { screen: Messaging138428Navigator },
CalendarView138427: { screen: CalendarView138427Navigator },
EmailAuth138426: { screen: EmailAuth138426Navigator },
Settings138410: { screen: Settings138410Navigator },
Settings138391: { screen: Settings138391Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
