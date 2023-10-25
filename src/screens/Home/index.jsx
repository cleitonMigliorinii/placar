import { Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";

function Home(){
    return (
        <View>
            <Text style={styles.title}>JOGOS</Text>

            <Header rodada='29ª RODADA' />

        </View>
    )
}

export default Home