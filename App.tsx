import { Groups } from "@screens/groups";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { LoadingScreen } from "@components/loading";
import theme from "@theme/index";
import { ActivityIndicator, StatusBar } from "react-native";
import { NewGroup } from "@screens/newGroup";
import { FilterGroups } from "@screens/FilterGroups";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      {fontsLoaded ? <FilterGroups /> : <LoadingScreen />}
    </ThemeProvider>
  );
}
