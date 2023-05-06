import {Text, View, StyleSheet,TextInput, TouchableOpacity, ScrollView} from 'react-native';

export default function App(){
  return (
    <View style={styled.container}>
    <Text key={"titulo"} style={styled.pageTitle}>
      Nome do evento
    </Text>
    <Text key={"dataDoEvento"} style={styled.pageDate}>
      Sexta, 4 de Novembro de 2022.
    </Text>
      <View style={{flexDirection: 'row', gap:7, marginTop:24 }}>
        <TextInput placeholder="Nome do participante" placeholderTextColor="#6B6B6B" style={styled.input}/>
        <TouchableOpacity style={styled.button}><Text style={{color: '#FDFCFE', fontSize:24, lineHeight:24, fontWeight: '400'}}>+</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const styled = StyleSheet.create({
  container: {
      backgroundColor: '#131016', 
      flex: 1, 
      paddingHorizontal: 24, 
      paddingVertical: 25
  },
  pageTitle:{
    color: '#FDFCFE', 
      fontSize: 24, 
      lineHeight:28.13, 
      fontWeight: '700'
  },
  pageDate:{
    color: '#6B6B6B',
      fontWeight:'400',
      fontSize: 16,
      lineHeight: 18.75
  },
  input:{
    flex:1,
    //width: 317,
    height: 56,
    borderRadius:4,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
    alignItems: 'center',
    paddingHorizontal: 16,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#31CF67',

  }
})