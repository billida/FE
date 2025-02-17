import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // 아이콘 사용

type RootStackParamList = {
  StuffDetail: { item: { name: string; image: string; description: string } };
};

const StuffDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "StuffDetail">>();
  const { item } = route.params; // 이제 오류 없음

  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Ionicons name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "red" : "black"} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    image: {
      width: "100%",
      height: 300,
      resizeMode: "cover",
    },
    details: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    description: {
      fontSize: 16,
      color: "#666",
      marginTop: 8,
    },
  });
  
  export default StuffDetailScreen;


