import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Alert} from 'react-native';
import Logo from '../../../assets/Images/logo_parking2.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [token,setToken] = useState('');
    //const [error,setError] = useState('')

    
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onSignInPressed = async () => {
         // Appeler l'API d'authentification pour vérifier les identifiants et obtenir le token JWT
    // try {
    //     const response = await fetch('http://192.168.5.126/apiConnexion.php'), {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username: username,
    //         password: password,
    //       }),
    //     });
  
    //     if (response.ok) {
    //       const data = await response.json();
    //       const token = data.token; // Récupérer le token JWT depuis la réponse de l'API
  
    //       // Stocker le token JWT dans AsyncStorage (ou dans le système de stockage de votre choix)
    //       await AsyncStorage.setItem('token', token);
  
    //       // Naviguer vers la page d'accueil
    //       navigation.navigate('Contrôle parking');
    //     } else {
    //       // Gérer les erreurs d'authentification
    //       console.error('Erreur d\'authentification');
    //     }
    //   } catch (error) {
    //     console.error('Erreur de connexion', error);
    //   }
    // };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // try {
        //     const response = await fetch('http://192.168.5.126/apiConnexion.php', {
        //       method: 'POST',
        //       headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify({
        //         username: username,
        //         password: password,
        //       }),
        //     });
        //     const data = await response.json();
        //     // vérifier si la réponse contient un jeton d'accès
        //     console.warn("Sign in ")
        //     if (data.accessToken) {
        //         console.log("Valider")
        //         navigation.navigate("Contrôle parking")
        //       // connecté avec succès, naviguer vers la page suivante
        //     } else {
        //       // les informations de connexion sont incorrectes
        //       setError('Nom d\'utilisateur ou mot de passe incorrect.');
        //       console.log("Erreur")

        //     }
        //   } catch (error) {
        //     // une erreur s'est produite lors de la requête
        //     setError('Une erreur s\'est produite, veuillez réessayer plus tard.');
        //   }
        // };
    
       
       
///////////////////////////////////////////////////////////////////////////////////////////////     
        console.log("Sign in ")
        if (username=="" && password==""){
            navigation.navigate("Contrôle parking")

        
        Alert.alert('Connexion établie')
    } 
    else {
        Alert.alert('Connexion échouée ')
    }

    }
/////////////////////////////////////////////////////////////////////////////////////////////////
    const onForgotPasswordPressed = () => {
        //console.warn('onForgotPasswordPressed')

        Alert.alert("Veuillez contacter l'admin pour l'oubli de votre mot de passe")

    }
/////////////////////////////////////////////////////////////////////////////////////////////////   
    
    return (
    <View style={styles.root}>
        <Image 
            source={Logo}  
            style ={[styles.logo, {height: height * 0.3}]} 
            //  resizeMethod="contain"
        />

        <CustomInput 
        placeholder="Utilisateur" 
        value= {username} 
        SetValue={setUsername}
        />

        <CustomInput 
        placeholder="Mot de Passe" 
        value= {password} 
        SetValue={setPassword}
        secureTextEntry
        />

        <CustomButton text= "Se Connecter" onPress={onSignInPressed}  />
        
        
        
        <CustomButton 
        text= "Oublie de votre mot de passe ?" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"
        />

    </View>
  );
};


const styles = StyleSheet.create({
root:{
    alignItems: 'center',
    padding: 20,

},

logo: {
    width: '80%',
    maxWidth: 350,
    maxHeight: 250,
    marginTop: 100,
   },
});

export default SignInScreen