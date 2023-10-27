import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#bebdbd',
      
    },
    container_primary: {
        flexDirection:'row',
        justifyContent: 'center',
        gap:10
    },
    stadion: {
        flex:1, textAlign:'right',  color:'#666'
    },
    date:{
        flex:1,
        fontWeight:'bold',
        
    },
    container_secondy: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      
    },
    time_home:{
        fontSize: 20, flex:1, textAlign:'right',
        color:'#666'
    },
    score:{
        fontSize: 30,
        fontWeight: 'bold',
       
    },
    time_visit:{
        fontSize: 20, flex:1,
        color:'#666'
    },
    details:{
            color:'#06aa48',
            fontSize: 18,
            fontWeight: 'bold'
    }
    
  });