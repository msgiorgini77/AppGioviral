import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import ShopStack from '../navigation/ShopStack';
import CartStack from "./CartStack";
import { colors } from "../global/colors";
import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import OrdersStack from "./OrdersStack";
import MyProfileStack from "./MyProfileStack";

const TabNavigator = ()=> {
    const Tab = createBottomTabNavigator()
    return(
            <Tab.Navigator screenOptions={{
                headerShown: false,//para manejar el encabezado extra
                tabBarShowLabel: false,//Para sacar el detalle de los iconos
                tabBarStyle: styles.tabBar
                }}>
                <Tab.Screen name="ShopTab" component={ShopStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer}>
                                <FontAwesome5 name="shopify" size={40} color={focused ? "black" : "grey"} />
                                <Text style={{color:focused ? "black" : "grey"}}>Shop</Text>
                            </View>
                        );
                    },
                }}/>
                <Tab.Screen name="CartTab" component={CartStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer}>
                                <MaterialCommunityIcons name="cart-heart" size={40} color={focused ? "black" : "grey"} />
                                <Text style={{color:focused ? "black" : "grey"}}>Cart</Text>
                            </View>
                        );
                    },
                    }}/>
                <Tab.Screen name="OrdersTab" component={OrdersStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer}>
                                <FontAwesome6 name="list-check" size={40} color={focused ? "black" : "grey"} />
                                <Text style={{color:focused ? "black" : "grey"}}>Orders</Text>
                            </View>
                        );
                    },
                }}/>
                <Tab.Screen name="MyProfileStack" component={MyProfileStack} options={{
                    tabBarIcon: ({focused})=> {
                        return (
                            <View style={styles.tabContainer}>
                                <FontAwesome6 name="user-astronaut" size={40} color={focused ? "black" : "grey"} />
                                <Text style={{color:focused ? "black" : "grey"}}>My Profile</Text>
                            </View>
                        );
                    },
                }}/>
            </Tab.Navigator>
    );
};

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.chartreuse_100,
        shadowColor: 'white',
        elevation: 4,
        position: 'absolute',
        buttom: 25,
        height: 90,
    },
    tabContainer:{
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
    },
})