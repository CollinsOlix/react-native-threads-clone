const { Icon } = require("@rneui/base");
const { View, TouchableOpacity } = require("react-native");

function MyTabBar({ state, descriptors, navigation }, props) {
  console.log("Props: ", props);
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        console.log(route);
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Icon size={20} name={route.icon} color="#b5c" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
