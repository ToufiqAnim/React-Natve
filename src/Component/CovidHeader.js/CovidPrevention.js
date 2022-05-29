import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import React from "react";
import Text from "../Text/Text";
import { spacing } from "../../Theme/Spacing";

const CovidPrevention = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        preset="h2"
        style={{
          color: "black",
          marginTop: spacing[7],
          marginLeft: spacing[5],
        }}
      >
        Prevention
      </Text>
      <View style={styles.imgContainer}>
        <View>
          <Image
            style={styles.img}
            source={require("../../../assets/distance.png")}
          />
          <Text
            preset="h4"
            style={{ marginTop: spacing[3], textAlign: "center" }}
          >
            Avoid close {"\n"}
            <Text preset="h3" style={{ color: "black", fontWeight: 500 }}>
              contact
            </Text>
          </Text>
        </View>
        <View>
          <Image
            style={styles.img}
            source={require("../../../assets/handWash.png")}
          />
          <Text
            preset="h4"
            style={{ marginTop: spacing[3], textAlign: "center" }}
          >
            {" "}
            Clean your {"\n"}
            <Text preset="h3" style={{ color: "black", fontWeight: 500 }}>
              hands often
            </Text>
          </Text>
        </View>
        <View>
          <Image
            style={styles.img}
            source={require("../../../assets/mask.png")}
          />
          <Text
            preset="h4"
            style={{ marginTop: spacing[3], textAlign: "center" }}
          >
            Wear a {"\n"}
            <Text preset="h3" style={{ color: "black", fontWeight: 500 }}>
              facemask
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../../assets/Test.png")}
          style={{
            height: 130,

            marginTop: spacing[5],
            marginHorizontal: spacing[5],
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CovidPrevention;

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: "row",
    marginHorizontal: spacing[5],
    marginTop: spacing[5],
    marginBottom: spacing[5],
    justifyContent: "space-between",
  },
  img: {
    width: 90,
    height: 90,
  },
});
