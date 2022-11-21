import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Welcome } from "./src/pages/welcome";
import AppLoading from "expo-app-loading";
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';

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
      <Welcome />
    );
}

//minutagem 27:36

