import React from "react";
import {
  Image,
  Linking,
  NativeModules,
  StyleSheet,
  Text,
  View,
  SafeAreaView, Platform
} from "react-native";
import Colors from "../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Touchable from "react-native-platform-touchable";
import { logEvent } from "../libs/Helpers";
import { ScrollView } from "react-native-gesture-handler";
import {launchImageLibrary} from 'react-native-image-picker';
import { CromaContext } from "../store/store";

export default props => {
  const pickImageResult = async() => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
   return result;
  };

  const { setColorList, clearPalette } = React.useContext(CromaContext);
  const navigate = function (screen) {
    props.toggleSideMenu();
    props.navigation.navigate(screen);
  }
  return (
    <SafeAreaView style={[styles.container]}>
      <Touchable
        onPress={() => {
          logEvent("hm_home_screen");
          navigate("Home");
        }}
      >
        <View style={[styles.titleArea, {height: props.navigation.headerHeight}]}>
          <Image
            style={styles.logo}
            source={require("../assets/images/icon.png")}
          />
          <Text style={styles.title}>Croma - Save you colors</Text>
        </View>
      </Touchable>
      <ScrollView>
        <View style={styles.menu}>
          <Touchable
            style={styles.menuItem}
            onPress={() => {
              logEvent("hm_create_new_palette");
              clearPalette();
             navigate("AddPaletteManually");
            }}
          >
            <View style={styles.menuItemView}>
              <View style={[styles.menuIcon, { paddingLeft: 4 }]}>
                <Ionicons name="md-color-filter" style={styles.icon} />
              </View>
              <Text style={styles.textAreaMenuItem}>Create new palette</Text>
            </View>
          </Touchable>
          <Touchable
            style={styles.menuItem}
            onPress={async () => {
              logEvent("hm_palette_library");
              clearPalette();
              navigate("PaletteLibrary");
            }}
          >
            <View style={styles.menuItemView}>
              <View style={styles.menuIcon}>
                <MaterialCommunityIcons
                  name="palette-swatch"
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textAreaMenuItem}>Palette library</Text>
            </View>
          </Touchable>
          {Platform.OS === 'android' && <Touchable
            style={styles.menuItem}
            onPress={async () => {
              const imageResult = await pickImageResult();
              if (!imageResult.didCancel) {
                const pickedColors = await NativeModules.CromaModule.navigateToImageColorPicker(
                  imageResult.assets[0].uri
                );
                logEvent("hm_pick_colors_from_img", {
                  length: pickedColors.length
                });
                clearPalette();
                setColorList(JSON.parse(pickedColors)?.colors);
                navigate("ColorList");
              }
            }}
          >
            <View style={styles.menuItemView}>
              <View style={styles.menuIcon}>
                <MaterialCommunityIcons name="image" style={styles.icon} />
              </View>
              <Text style={styles.textAreaMenuItem}>
                Pick colors from an image
              </Text>
            </View>
          </Touchable>
          }
          {Platform.OS == 'android' && <Touchable
              style={styles.menuItem}
              onPress={async () => {
                const pickedColors = await NativeModules.CromaModule.navigateToColorPicker();
                logEvent("hm_pick_text_colors_from_camera", {
                  length: pickedColors.length
                });
                clearPalette();
                setColorList(JSON.parse(pickedColors)?.colors);
                navigate("ColorList");
              }}
          >
            <View style={styles.menuItemView}>
              <View style={styles.menuIcon}>
                <MaterialCommunityIcons
                    name="credit-card-scan-outline"
                    style={styles.icon}
                />
              </View>
              <Text style={styles.textAreaMenuItem}>Scan color codes</Text>
            </View>
          </Touchable>
          }
          {
            <MenuLink
              id={"rate-us"}
              link={Platform.OS == 'android' ? "market://details?id=app.croma": "https://apps.apple.com/app/id1596763657?action=write-review"}
              icon={<MaterialIcons name="rate-review" style={styles.icon} />}
            >
              Like the App? Please rate us
            </MenuLink>
          }
          <Touchable
            style={styles.menuItem}
            onPress={() => {
              logEvent("hm_pro_benefits");
              navigate("ProVersion");
            }}
          >
            <View style={styles.menuItemView}>
              <View style={[styles.menuIcon, { paddingLeft: 4 }]}>
                <FontAwesome5 name="unlock" style={styles.icon} />
              </View>
              <Text style={styles.textAreaMenuItem}>Pro benefites</Text>
            </View>
          </Touchable>
          <Touchable
            style={styles.menuItem}
            onPress={async () => {
              logEvent("hm_sync_palettes");
              navigate("SyncPalettes");
            }}
          >
            <View style={styles.menuItemView}>
              <View style={styles.menuIcon}>
                <FontAwesome5 name="file-import" style={styles.icon} />
              </View>
              <Text style={styles.textAreaMenuItem}>
                import/export palettes
              </Text>
            </View>
          </Touchable>
          <Touchable
            style={styles.menuItem}
            onPress={async () => {
              logEvent("hm_about_us");
              navigate("AboutUs");
            }}
          >
            <View style={styles.menuItemView}>
              <View style={{ ...styles.menuIcon, paddingLeft: 4 }}>
                <MaterialCommunityIcons
                  name="information-outline"
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textAreaMenuItem}>About us</Text>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

function MenuLink(props) {
  return (
    <Touchable
      style={[styles.menuItem]}
      onPress={() => {
        logEvent("hm_link_" + props.id);
        Linking.openURL(props.link);
      }}
    >
      <View style={styles.menuItemView}>
        <View style={styles.menuIcon}>{props.icon}</View>
        <Text style={styles.textAreaMenuItem}>{props.children}</Text>
      </View>
    </Touchable>
  );
}
const menuHeight = 50;
const padding = 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: -4
  },
  titleArea: {
    flexDirection: "row",
    alignItems: "center",
    padding: padding
  },
  logo: {
    width: 48,
    height: 48,
    padding: padding
  },
  title: {
    fontWeight: "800",
    textAlignVertical: "center",
    padding: padding,
    color: Colors.primary
  },
  menu: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "stretch"
  },
  menuItem: {
    height: menuHeight
  },
  menuItemView: {
    flex: 1,
    flexDirection: "row"
  },
  textAreaMenuItem: {
    fontWeight: "500",
    textAlignVertical: "center",
    padding: padding,
    alignItems: "flex-start"
  },
  menuIcon: {},
  icon: {
    fontSize: menuHeight - 2 * padding,
    padding: padding,
    color: "black",
  }
});
