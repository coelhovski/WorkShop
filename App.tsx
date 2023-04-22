import {Text, View, TextInput} from 'react-native';

export default function App(){
  return (
    <View style={{backgroundColor: '#131016', flex: 1}}>
    <Text key={"titulo"} style={{
      color: '#FDFCFE', 
      fontSize: 24, 
      lineHeight:28.13, 
      fontWeight: '700',}}>
      Nome do evento
      </Text>
    <Text key={"dataDoEvento"} style={{
      color: '#6B6B6B',
      fontWeight:'400',
      fontSize: 16,
      lineHeight: 18.75}}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  );
}