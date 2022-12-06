import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { UserIdentification } from "./src/pages/UserIdentification";
import AppLoading from "expo-app-loading";
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';

import Routes from "./src/routes";

export default function App(){

  let [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

    if(!fontsLoaded)
      return(
        <AppLoading/>
      );

    return(
      <Routes/>
    );
}

//minutagem 04:34

