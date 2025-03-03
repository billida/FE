import React from 'react';
import "../../global.css";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import room_get from '../lib';
import RoomObject from '@/components/home_Product/home_Product';
import { useRouter } from 'expo-router';

const addProduct = () => {
  console.log("히히");
};

const Home = () => {
  const router = useRouter(); // ✅ expo-router의 useRouter() 사용

  return (
    <View style={styles.container}>
      {/* 플로팅 버튼 */}
      <TouchableOpacity style={styles.floatingButton} onPress={addProduct}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      <View style={{ height: 59 }} />

      {/* 검색창 */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="현재 위치 근처에서 검색"
          placeholderTextColor="#B3B3B3"
        />
      </View>

      {/* 상품 목록 */}
      <ScrollView>
        <View style={styles.gridContainer}>
          {room_get.rooms.map((room, index) => (
            <TouchableOpacity style={styles.productContainer}>
              <Image source={{ uri: room.url }} style={styles.productImage} />
              <RoomObject
                product_image_url={room.url}
                product_name={room.name}
                location={room.location}
                price={Number(room.price)}
                key={index}
                onPress={() =>
                  router.push(`/stuff/stuffdetail?name=${encodeURIComponent(room.name)}&image=${encodeURIComponent(room.url)}&location=${encodeURIComponent(room.location)}&price=${room.price}`)
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  floatingButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#6ABF40',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  floatingButtonText: { fontSize: 32, color: '#FFFFFF', textAlign: 'center', padding: 0 },
  searchContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 5,
    alignItems: 'center',
  },
  searchInput: {
    width: 361,
    height: 52,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // ✅ 상품 간격 조절
    paddingHorizontal: 10,
  },
  productContainer: { 
    width: '48%', // ✅ 2개씩 균등하게 배치
    marginBottom: 5, // ✅ 여백 줄이기
  },
  productImage: { width: '100%', height: 150, borderRadius: 10 },
});

export default Home;
