import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function RoutesIndex() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
