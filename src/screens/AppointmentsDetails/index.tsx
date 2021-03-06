import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./style";

export function AppointmentsDetails() {
  const members = [
    {
      id: "1",
      name: "Leonardo",
      avatar_url: "http://github.com/LeonardoCasanova.png",
      status: "online",
    },
    {
      id: "2",
      name: "Diego",
      avatar_url: "http://github.com/diego3g.png",
      status: "offline",
    },
    {
      id: "3",
      name: "Felipe",
      avatar_url: "http://github.com/femonsao.png",
      status: "online",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.bannerContainr}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            Hoje é o dia que vamos chegar a victoria
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
