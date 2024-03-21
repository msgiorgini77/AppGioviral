import { View, StyleSheet} from "react-native";
import { colors } from "../global/colors";
import Categories from "../components/Categories";

function Home({navigation}){
    return(
        <View style={styles.conteiner}>
            <Categories navigation={navigation}></Categories>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: colors.black_100,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 180,
        paddingHorizontal: 80,
    },
});