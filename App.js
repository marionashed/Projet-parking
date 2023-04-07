import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import CustomInput from './src/components/CustomInput/CustomInput';
import Navigation from './src/components/Navigation';

const App = () => {
  return (
    <SafeAreaView style= {styles.root}>
      <Navigation>
        
      </Navigation>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

export default App;
