import { Image, Pressable, StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import Text from "../Text/Text";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../Theme/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { spacing } from "../../Theme/Spacing";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CovidHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icons}>
        <Ionicons name="menu" size={24} color="white" />
        <FontAwesome5 name="bell" size={24} color="white" />
      </View>
      <View style={styles.header}>
        <Text preset="h1">Covid-19</Text>
        <Pressable style={styles.btn}>
          <Image
            source={require("../../../assets/usa.png")}
            style={styles.img}
          />
          <Text preset="h5" style={{ color: "black" }}>
            USA
          </Text>
          <Entypo name="triangle-down" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.covidHelp}>
        <Text preset="h2">Are you felling sick?</Text>
        <Text preset="h6" style={{ paddingTop: spacing[2] }}>
          If you feel sick with any of covid-19 symptoms please call or SMS us
          immediately for help.
        </Text>
        <View style={styles.btnContainer}>
          <Pressable style={[styles.helpBtn, { backgroundColor: colors.red }]}>
            <Ionicons name="call" size={24} color="white" />
            <Text>Call Now</Text>
          </Pressable>
          <Pressable style={[styles.helpBtn, { backgroundColor: colors.blue }]}>
            <MaterialCommunityIcons name="message" size={24} color="white" />
            <Text>Send SMS</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CovidHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing[5],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: spacing[5],
  },
  btn: {
    // backgroundColor: colors.white,
    // color:
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 116,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  img: {
    width: 32,
    height: 32,
  },
  covidHelp: {
    marginTop: spacing[6],
    marginBottom: spacing[4],
    marginHorizontal: spacing[6],
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  helpBtn: {
    flexDirection: "row",
    alignItems: "center",
    width: 155,
    padding: spacing[2],
    justifyContent: "space-around",
    borderRadius: 50,
  },
});
