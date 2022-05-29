import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CovidHeader from "../Component/CovidHeader.js/CovidHeader";
import CovidPrevention from "../Component/CovidHeader.js/CovidPrevention";

const Home = () => {
  return (
    <View>
      <CovidHeader />
      <CovidPrevention />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
