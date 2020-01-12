import {createSwitchNavigator} from "react-navigation";
import Routes from "../screens/Routes";
import CreateRoute from "./CreateRoute";
import {createStackNavigator} from "react-navigation-stack";

export const RoutesNavigation = createStackNavigator({
    Route: {
        screen: Routes,
    },
    CreateRoute: {
        screen: CreateRoute,
    },
}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);
