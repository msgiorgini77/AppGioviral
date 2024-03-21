import { Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

function Header({ title }) {
    const { localId, user } = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();
  
    const onLogout = async () => {
      dispatch(logout());
      const deletedSession = await deleteSession({ localId });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        {user && (
          <Pressable style={styles.logoutIcon} onPress={onLogout}>
            <MaterialCommunityIcons name="exit-run" size={24} color="white" />
          </Pressable>
        )}
      </View>
    );
  }

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: colors.gray_100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logoutIcon: {
      position: "absolute",
      right: 20,
    },
});