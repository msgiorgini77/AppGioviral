import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
        pressedOpacity={0.7}
      >
        <Text style={styles.text}>Add profile picture</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Location Selector")}
      >
        <Text style={styles.text}>My Addresses</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    gap: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.chartreuse_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: "ChivoBold",
    fontSize: 20,
    color: "black",
    marginLeft: 8,
  },
});