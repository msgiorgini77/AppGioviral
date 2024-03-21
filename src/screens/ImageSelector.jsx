import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import { colors } from "../global/colors";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable style={styles.button1} onPress={pickImage}>
            <Text style={styles.text1}>Take another photo</Text>
          </Pressable>
          <Pressable style={styles.button2} onPress={confirmImage}>
            <Text style={styles.text2}>Confirm photo</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text style={styles.text}>No photo to show...</Text>
          
        </View>
      )}
      <Pressable style={styles.button} onPress={pickImage}>
            <Text style={styles.text}>Take a photo</Text>
      </Pressable>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.chartreuse_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  button1: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.gray_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  button2: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.black_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  text: {
    fontFamily: "ChivoBold",
    fontSize: 20,
    color: "black",
    marginLeft: 8,
  },
  text1: {
    fontFamily: "ChivoBold",
    fontSize: 20,
    color: "white",
    marginLeft: 8,
  },
  text2: {
    fontFamily: "ChivoBold",
    fontSize: 20,
    color: "white",
    marginLeft: 8,
  },
});