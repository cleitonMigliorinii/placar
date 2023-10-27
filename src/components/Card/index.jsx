import { Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

function Card(props){

    
   const navigation = useNavigation()
   
   function handleNavigationDetails(){

    navigation.navigate('details')

   }

    return(
        <View style={styles.container}>
            <View style={styles.container_primary}>
                <Text style={styles.stadion}>{props.stadium}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={styles.container_secondy}>
                <Text style={styles.time_home}>{props.teamHome}</Text>
                <Text style={styles.score}>{props.scoreHome}</Text>
                <Text style={{fontSize: 20}}>x</Text>
                <Text style={styles.score}>{props.scoreVisited}</Text>
                <Text style={styles.time_visit}>{props.teamVisited}</Text>
            </View>
            <Text onPress={handleNavigationDetails} style={styles.details}>SAIBA COMO FOI</Text>
        </View>
    )
}

export default Card