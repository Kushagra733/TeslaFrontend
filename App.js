import { StyleSheet, Text, View,} from 'react-native';
import CarList from './Components/CarList/Index'
import Logo from './Components/Logo/Index'
export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <CarList/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%',
  },
 
});
