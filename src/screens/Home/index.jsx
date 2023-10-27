import { Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

function Home() {


  return (
    <View>
      <Text style={styles.title}>JOGOS</Text>

      <Header rodada="29ª RODADA" />

      <View>
        <Card
          stadium="Arena Grêmio"
          date="25/10 - Ontem - 21:30"
          teamHome="Grêmio"
          scoreHome="3"
          teamVisited="Flamengo"
          scoreVisited="2"
        />
        <Card
          stadium="Arena Palmeiras"
          date="25/10 - Ontem - 21:30"
          teamHome="Palmeiras"
          scoreHome="5"
          teamVisited="São Paulo"
          scoreVisited="0"
        />
        <Card
          stadium="Arena Grêmio"
          date="25/10 - Ontem - 21:30"
          teamHome="Grêmio"
          scoreHome="3"
          teamVisited="Flamengo"
          scoreVisited="2"
        />
      </View>
    </View>
  );
}

export default Home;
