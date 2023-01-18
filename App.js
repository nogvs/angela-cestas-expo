import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({Montserrat_400Regular});
        await Font.loadAsync({Montserrat_700Bold});
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) {

        console.warn(e);

      } finally {

        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const [fontsLoaded] = useFonts({
     "MontserratRegular": Montserrat_400Regular,
     "MontserratBold": Montserrat_700Bold
  });

  if (!appIsReady || !fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
