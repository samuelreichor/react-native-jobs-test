import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from "react-native";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { COLORS, icons, images, SIZES } from '../constants';

export default function Index() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={1}/>
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={1}/>
        ),
        headerTitle: '',
        }}/>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          padding: SIZES.medium,
        }}>
          <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={() => {
            if(searchTerm) {
              router.push(`/search/${searchTerm}`)
            }
          }}/>
          <Popularjobs/>
          <Nearbyjobs/>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
