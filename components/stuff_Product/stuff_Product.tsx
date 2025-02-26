import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
type RoomProps = {
  product_image_url: string;//사진 어떻게 받아올지 정해야됨
//   date: string;// 저 일자가 뭔지 모르겠음
};


const goto=()=>{
    console.log("개별물품으로")
}
const StuffObject = ({ product_image_url}: RoomProps) => {
  return (
    <View  className="relative h-[127px] w-[127px] p-1 bg-white">
        <TouchableOpacity onPress={goto}>
            <Text className=" w-[40px] h-[25px] bg-white absolute bottom-2 right-3 z-10 text-center border border-gray-400 rounded-md">6일</Text>
            <Image
            style={{ height: 127, width:'100%' }}
            source={require('@/components/ui/가방.png')}
            />
        </TouchableOpacity>
       
      </View>
  );
};

export default StuffObject;
