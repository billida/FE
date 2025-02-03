import { View, Text, Button } from 'react-native';
import { Redirect } from 'expo-router';

export default function HomePage() {

  return <Redirect href="/login/signin_page" />;
};
