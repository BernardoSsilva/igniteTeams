import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

import { LoadingScreen } from "@components/loading";
import { Players } from "@screens/players";
import theme from "@theme/index";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      {fontsLoaded ? <Players /> : <LoadingScreen />}
    </ThemeProvider>
  );
}
