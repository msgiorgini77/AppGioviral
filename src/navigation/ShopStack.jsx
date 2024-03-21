import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Header from "../components/Header";

const Navigator = () => {
    const Stack = createNativeStackNavigator()

    return(
            <Stack.Navigator initialRouteName="Home" screenOptions={({ route}) => ({
                header: ()=> {
                    return (
                        <Header title={route.name === 'Home' ? 'Categories' : route.name === 'ItemListCategories' ? route.params.Category : 'Detail'}></Header>
                    );
                },
            })}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="ItemDetail" component={ItemDetail}></Stack.Screen>
                <Stack.Screen name="ItemListCategories" component={ItemListCategories}></Stack.Screen>
            </Stack.Navigator>
    )
}

export default Navigator;