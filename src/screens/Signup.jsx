import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import { colors } from "../global/colors";
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from "react-native";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      //limpiamos los errores cada vez que ejecutamos el Register
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignup({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <InputForm 
                label={"Email"} 
                onChange={setEmail} 
                error={errorMail} 
            />
            <InputForm
                label={"Password"}
                onChange={setPassword}
                error={errorPassword}
                isSecure={true}
            />
            <InputForm
                label={"Confirm password"}
                onChange={setConfirmPassword}
                error={errorConfirmPassword}
                isSecure={true}
            />
            <Text></Text>
            <SubmitButton
                onPress = {onSubmit}
                title = "Register"
            />
            <Text style={styles.subTitle}>Already have an account?</Text>
            {result.isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <SubmitButton title={"Login"} onPress={()=> navigation.navigate('Login')} />
            )}
        </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black_100,
    },
    container: {
        width: "90%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.chartreuse_100,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "ChivoBold",
    },
    subTitle: {
        fontSize: 15,
        fontFamily: "ChivoRegular",
        color: "black",
    },
    subLink: {
        fontSize: 15,
        fontFamily: "ChivoRegular",
        color: "black",
    },
});