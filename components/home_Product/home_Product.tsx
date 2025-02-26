import React from "react";
import { View, Text, Image, Button} from "react-native";
type RoomProps = {
  product_image_url: string;//사진 어떻게 받아올지 정해야됨
  product_name: string;
  location: string;
  price: number;
};


const RoomObject = ({ product_image_url, product_name, location,price }: RoomProps) => {
  return (
    <View  className="h-[285px] m-1 bg-white">
        <Image
          style={{ height: 193, width: '100%' }}
          source={require('@/components/ui/가방.png')}
        />
        <View className="h-[92px] flex justify-evenly">
          <Text className="text-base font-bold">{product_name}</Text>
          <View className="flex flex-row items-center">
            <Image
              style={{ height: 16, width: 13}}
              source={require('@/components/ui/location_on.png')}
            />
            <Text className="text-sm"> {location}</Text>
          </View>

          <View className="flex flex-row items-center">
            <Image
              style={{ height: 16, width: 13}}
              source={require('@/components/ui/calendar_today.png')}
            />
            <Text className="text-sm"> {price}</Text>
          </View>
        </View>

      </View>
  );
};

export default RoomObject;
