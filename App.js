import { createStackNavigator } from "react-navigation";
import MainScreen from "./src/components/MainScreen/MainScreen";
import SecondScreen from "./src/components/SecondScreen/SecondScreen";

// Mengeload App Dengan React-Navigation

export default (App = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    SecondScreen: { screen: SecondScreen }
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: "#ff9900" },
      headerTitleStyle: {
        color: "black",
        flex: 1,
        textAlign: "left",
        fontSize: 18,
        fontWeight: 'bold'
        
      },
     headerTintColor: "white"
    }
  }
));
