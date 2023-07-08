import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Feed from "./source/screens/Feed";
import Search from "./source/screens/Search";
import MyTabBar from "./source/components/MyTabBar";
import { Icon } from "@rneui/base";
import NewPost from "./source/screens/NewPost";
import Notifications from "./source/screens/Notifications";
import Profile from "./source/screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "black"
        }}
        
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="NewPost"
          component={NewPost}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="create-outline"
                type="ionicon"
                color={color}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="heart" type="ionicon" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon
                name="person-outline"
                type="ionicon"
                color={color}
                size={27}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
