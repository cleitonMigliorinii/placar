import { Text, View } from "react-native";
import { styles } from "./styles";

function Header({rodada}){
    return (
        <View style={styles.boxRodada}>
            <Text style={styles.textRodada}>{rodada}</Text>
        </View>
    )
}

export default Header