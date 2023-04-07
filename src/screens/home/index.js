import { View, Text,Image, StyleSheet, Alert,FlatList, TouchableOpacity,useWindowDimensions,ImageBackground } from 'react-native';
import Logo from '../../../assets/Images/IMG_4423.jpg';
import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton/CustomButton';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tab = createBottomTabNavigator();

const openportail = () => {{
  console.warn('Ouverture du portail en cours')
  Alert.alert(
    "Confirmer l'ouverture du portail",
    'Êtes-vous sûr de vouloir ouvrir le portail ?',
    [
      {
        text: 'Annuler',
        style: 'cancel',
      },
      {
        text: 'Ouvrir',
        onPress: () => {
          // Code de déconnexion ici
          // Rediriger l'utilisateur vers la page de connexion
        },
      },
    ],
  );
};

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function AccueilScreen(){
  const {height} = useWindowDimensions();
  return (
    <View>
      <Text style= {{lineHeight: 25}}>
        Bienvenue sur notre application.
        Vous trouverez ici toutes les fonctionnalités qui permettra de gérer au mieux l'accées au parking à distance depuis la loge sur cette application.{"\n"}
        Vous trouverez également les informations concernants les utilisateurs.
      </Text>
      <ImageBackground 
            source={Logo}  
            style ={[styles.logo, {height: height * 0.4}]} 
            
            //  resizeMethod="contain"
        />
    </View>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ParkingScreen() 
{
  var myHeaders = new Headers();
  //myHeaders.append("Cookie", "PHPSESSID=elh36knv1ogrdtt93mrpme4jq8");

  var requestOptions =
  {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => 
  {
    fetch("http://192.168.5.126/Api.php", requestOptions)
    .then(response => response.json())
    .then(result => 
    {
      console.log(result);
      setData(result);
      setShowList(true);
    })
    .catch(error => console.log('error', error));
  };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text></Text>
      <Text>ID : {item.id}</Text>
      <Text>PLAQUE D'IMMATRICULATION : {item.immatriculation}</Text>
      <Text>NOM UTILISATEUR :{item.nom}</Text>
      <Text>DATE :{item.date}</Text>
      <Text>MARQUE : {item.marque}</Text>
    </TouchableOpacity>
  );

  
  return (
    <View style = {styles.container}>
      <Text>En cas de problème d'ouverture du portail vous pouvez l'ouvir à l'aide de ce boutton ou si il s'agit d'un passage exceptionnelle.</Text>
      <CustomButton text="Ouverture portail" onPress={openportail} />
      <CustomButton text="Voir Liste" onPress={handleButtonClick}>
        <Text> Voir Liste</Text>
      </CustomButton>
      <View style = {styles.objet}>
      {showList && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      
    </View>
    </View>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ConfigScreen(){
  const ButtonDéconnexion = () => 
  {
    console.log("LAHISTER")
    Alert.alert(
      'Confirmer la déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Déconnexion',
          onPress: () => {
            // Code de déconnexion ici
            // Rediriger l'utilisateur vers la page de connexion
          },
        },
      ],
    );
  };
  
  return (
    <View>
      <Text>
        <CustomButton text="Déconnexion" onPress={ButtonDéconnexion}/>
      </Text>
    </View>
  );
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <tab.Navigator 
    screenOptions={({route}) => ({
      
      tabBarIcon:({focused,colors,size}) => {
        let iconName;

        if(route.name == "Accueil"){
          iconName = "home"
        }

        else if (route.name == "Parking"){
          iconName = "car-outline"
        }
        
        else if(route.name == "Configuration"){
          iconName = "settings"
        }
        return <Ionicons name = {iconName} size = {35} color = "blue"/>
      }

    }
    )} 
    
    >
      <tab.Screen name='Accueil' component={AccueilScreen}/>
      <tab.Screen name='Parking' component={ParkingScreen}/>
      <tab.Screen name='Configuration' component={ConfigScreen}/>
      </tab.Navigator>


  )
};
export default Home

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',

  },
  objet: {
    backgroundColor: '#ffff',
    height: 350,
    marginVertical: 20,
    marginHorizontal: 0,
    paddingTop: 10,
    paddingLeft:20,
  },

  logo: {
    width: '100%',
    maxWidth: 400,
    maxHeight: 350,
    marginTop: 100,
   },

   background: {
    flex: 1,
    resizeMode: 'cover',
  },

});

  
