"use client";
import React from "react";
import "../../global.css";

import { View, Text, TouchableOpacity } from "react-native";

type RoomProps = {
  product_image_url: string;//사진 어떻게 받아올지 정해야됨
  product_name: string;
  location: string;
  price: number;
};

export const RoomObject = ({ product_image_url, product_name, location,price }: RoomProps) => {
  return (
    <View className="h-[193px] m-5 p-4 bg-white rounded-lg shadow-md">
      <View className="flex flex-col items-start space-y-2">
        <Text className="text-sm font-bold bg-gray">{product_image_url}</Text>
        <Text className="text-sm font-bold">{product_name}</Text>
        <Text className="text-sm font-bold">{location}</Text>
        <Text className="text-sm font-bold">{price}</Text>
      </View>
      <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded-lg">
        <Text className="text-white font-semibold">조회</Text>
      </TouchableOpacity>

    </View>
  );
};
