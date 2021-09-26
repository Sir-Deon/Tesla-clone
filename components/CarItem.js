import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const CarItem = () => {
  const [locked, setLocked] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={{
          height: "100%",
          width: "100%",
          resizeMode: "cover",
          position: "absolute",
        }}
      />
      <Header />
      <BatteryAndStatus />
      <ScrollView>
        <ThreeControls locked={locked} setLocked={setLocked} />
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;

const Header = () => (
  <View
    style={{
      marginTop: 50,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    }}
  >
    <TouchableOpacity>
      <Icon name="cog" size={25} color="#fff" />
    </TouchableOpacity>
    <Text
      style={{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Model X
    </Text>
    <TouchableOpacity>
      <Icon name="briefcase" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const BatteryAndStatus = () => (
  <>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/battery.png")}
        style={{
          height: 26,
          width: 70,
          marginRight: 12,
        }}
      />
      <Text style={{ fontWeight: "bold", color: "white", fontSize: 35 }}>
        150 mi
      </Text>
    </View>
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold", color: "white" }}>Parked</Text>
    </View>
  </>
);

const ThreeControls = ({ locked, setLocked }) => (
  <View
    style={{ flexDirection: "row", justifyContent: "center", marginTop: 175 }}
  >
    <TouchableOpacity style={styles.controls}>
      <FontAwesomeIcon style={{ color: "white" }} size={30} icon={faFan} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.controls}>
      <FontAwesomeIcon style={{ color: "white" }} size={30} icon={faKey} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setLocked(!locked)}
      style={styles.controls}
    >
      <FontAwesomeIcon
        style={{ color: "white" }}
        size={30}
        icon={locked ? faLock : faUnlockAlt}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  controls: {
    borderWidth: 1,
    borderColor: "white",

    padding: 18,
    borderRadius: 50,
    marginLeft: 25,
  },
});
