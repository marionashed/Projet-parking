import { View, Text,Image, StyleSheet, Alert,FlatList, TouchableOpacity,useWindowDimensions,ImageBackground, Dimensions } from 'react-native';
import React, { useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomButton from '../../components/CustomButton/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tab = createBottomTabNavigator();

// const navigation = useNavigation();

const openportail = () => {{
  console.log('Ouverture du portail en cours')
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

  const vehicule_present = () => 
  {
    fetch("http://192.168.5.126/Api.php?action=getpresence", requestOptions)
    .then(response => response.json())
    .then(data => 
    {
      console.log(data);
      setData(data);
      setShowList(true);
    })
    .catch(error => Alert.alert("Problème de connexion à la base de donnée", error));
  };

    // Appel de la fonction pour récupérer les données de l'API lors du rendu initial du composant
    useEffect(() => {vehicule_present();}, []);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var requestOptions =
    {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
  
    const [data1, setData1] = useState([]);
    const [showList1, setShowList1] = useState(false);
  
    const compteur_presence = () => 
    {
      fetch("http://192.168.5.126/Api.php?action=getcompteurP", requestOptions)
      .then(response => response.json())
      .then(data1 => 
      {
        console.log(data1);
        setData1(data1);
        setShowList1(true);
      })
      .catch(error => Alert.alert("Problème de connexion à la base de donnée", error));
    };
  
      // Appel de la fonction pour récupérer les données de l'API lors du rendu initial du composant
      useEffect(() => {compteur_presence();}, []);

      const renderItem = ({ item }) => (
      <TouchableOpacity>
         <Text></Text>
        <Text>ID : {item.id}</Text>
        <Text>PLAQUE D'IMMATRICULATION : {item.plaque}</Text>
        <Text>DATE :{item.date}</Text>
        <Text></Text>
      </TouchableOpacity>
    
    );
  
  return (
    <View style = {styles.container}>
        <Text style={{ fontSize: 18, lineHeight: 30}}>
        Bienvenue sur notre application.{'\n'}
        Vous trouverez ici toutes les fonctionnalités qui permettra de gérer au mieux l'accés au parking à distance depuis la loge sur cette application.{"\n"}
        Vous trouverez les informations concernants les utilisateurs présents dans le parking.{'\n'}{'\n'}{'\n'}
      </Text>
      <Text style ={{fontSize: 25, fontWeight:'bold'}}> Véhicules présents: {data1} </Text>
      {/* Affichage de la valeur obtenue de l'API */}
      {showList1 && (<FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>)}
    </View>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  const [data1, setData1] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => 
  {
    fetch("http://192.168.5.126/Api.php?action=getapi", requestOptions)
    .then(response => response.json())
    .then(data1 => 
    {
      console.log(data1);
      setData1(data1);
      setShowList(true);
    })
    .catch(error => Alert.alert("Problème de connexion à la base de donnée", error));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
       <Text></Text>
      <Text>ID : {item.id}</Text>
      <Text>PLAQUE D'IMMATRICULATION : {item.immatriculation}</Text>
      <Text>NOM UTILISATEUR :{item.nom}</Text>
      <Text>DATE :{item.date}</Text>
      <Text>MARQUE : {item.marque}</Text>
      {/* <Text>Nombre d'utilisateurs: {item.a} </Text> */}
      <Text></Text>
    </TouchableOpacity>
  
  );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var myHeaders = new Headers();
  //myHeaders.append("Cookie", "PHPSESSID=elh36knv1ogrdtt93mrpme4jq8");

  var requestOptions =
  {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const [data2, setData2] = useState([]);


  const CompteurUser = () => 
  {
    fetch("http://192.168.5.126/Api.php?action=getcompteur", requestOptions)
    .then(response => response.json())
    .then(data2=> 
    {
      console.log(data2);
      setData2(data2);
      //setShowList(true);
    })
    .catch(error => Alert.alert("Problème de connexion à la base de donnée", error));
  };
  // Appel de la fonction pour récupérer les données de l'API lors du rendu initial du composant
  useEffect(() => {CompteurUser();}, []);

//////////////////////////////////////////////////////////////A comprendre//////////////////////////////////////////////////////////////////   

  
  return (
    <View style = {styles.container}>
      <Text style ={{ fontSize: 18}}> Vous pourrez ici ouvrir le portail, afficher la liste des utilisateurs qui sont inscrits dans la base de donnée et avoir un compteur de cette liste.</Text>
      <CustomButton text="OUVERTURE PORTAIL" onPress={openportail} />
      <CustomButton text="VOIR LISTE DES UTILISATEURS" onPress={handleButtonClick}> 
      </CustomButton>
      {/* <CustomButton text="COMPTEUR" onPress={ButtonCompteur} /> */}

      <Text style ={{fontSize: 18}}> Nombre d'utilisateurs enregistrés : {data2} </Text>
      {showList && (
        <FlatList
          data={data1}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}

    </View>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const ButtonDeconnexion = () => 
  // {
  //   console.log("déconnexion")
  //   Alert.alert(
  //     'Confirmer la déconnexion',
  //     'Êtes-vous sûr de vouloir vous déconnecter ?',
  //     [
  //       {
  //         text: 'Annuler',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Déconnexion',
  //         onPress: () => {
  //           // navigation.navigate("Authentification")
  //           // Code de déconnexion ici
  //           // Rediriger l'utilisateur vers la page de connexion
  //         },
  //       },
  //     ],
  //   );
  // };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const DeconnexionScreen = () =>
// {
//   const navigation = useNavigation();
//   const[refresh, setRefresh] = useState(false);
//   const windowWidth = Dimensions.get('window').width;
//   const windowHeight = Dimensions.get('window').height;

//   // function resetPage()
//   // {
//   //   BackHandler.exitApp();
//   //   setRefresh(false);
//   //   navigation.navigate('Authentification');
//   // }


const Tab = createBottomTabNavigator();

const Home = () => {

  //Fonction pour gérer la déconnexion et fermer l'application
  // const handleLogout = () => {
    
    //BackHandler.exitApp();
  // }

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Accueil") {
            iconName = "home";
          } else if (route.name === "Parking") {
            iconName = "car-outline";
          } else if (route.name === "Deconnexion") {
            iconName = "log-out";
            return (
              <Icon
                name={iconName}
                size={35}
                color={focused ? 'blue' : 'gray'}
                //onPress={DeconnexionScreen} // Appel de la fonction de déconnexion pour fermer l'application
              />
            );
          } 
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name='Accueil' component={AccueilScreen}/>
      <Tab.Screen name='Parking' component={ParkingScreen}/>
      {/* <Tab.Screen name='Deconnexion' component={DeconnexionScreen}/> */}
    </Tab.Navigator>
  );
};

export default Home;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',

  },

  objet1: {
    backgroundColor: '#ffff',
    height: 50,
    marginVertical: 30,
    marginHorizontal:'auto',
  },

  objet: {
    backgroundColor: '#ECECE3',
    height: 300,
    marginVertical: 50,
    marginHorizontal:0,
    paddingTop: 10,
    paddingLeft: 10,
  },

  // logo: {
  //   // width: '100%',
  //   // maxWidth: 400,
  //   // maxHeight: 350,
  //   marginTop: 100,
  //   width: 500, // ajustez la largeur de l'image en conséquence
  //   height: 0, // ajustez la hauteur de l'image en conséquence
  //   marginHorizontal: 'auto', // utilisez les marges automatiques pour centrer horizontalement
  //  },

});
