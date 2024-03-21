import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../screens/Orders";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const OrdersStack =()=> {
    return(
        <Stack.Navigator initialRouteName="Orders" screenOptions={{header: ()=> <Header title="Orders"></Header>}}>
            <Stack.Screen name="Orders" component={Orders}>
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default OrdersStack;