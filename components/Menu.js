import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import items from "../item";
const Menu = () => {
  return (
    <View>
      {items.map((item, index) => (
        <MenuRow
          icon={item.icon}
          title={item.title}
          key={index}
          subTitle={item.subTitle}
        />
      ))}
    </View>
  );
};

const MenuRow = ({ icon, title, subTitle }) => (
  <TouchableOpacity
    style={{
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
    }}
  >
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "white" }} />
      <View style={{ flexGrow: 1 }}>
        <Text
          style={{
            color: "white",
            marginLeft: 15,
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Text>
        {subTitle && (
          <Text style={{ color: "grey", marginLeft: 15 }}>{subTitle}</Text>
        )}
      </View>
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "grey" }} />
    </View>
  </TouchableOpacity>
);

export default Menu;
