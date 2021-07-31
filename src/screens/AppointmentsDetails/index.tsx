import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { style } from "./style";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentsDetails() {
  const members = [
    {
      id: '1',
      name: "Leonardo",
      avatar_url: "http://github.com/LeonardoCasanova.png",
      status: 'online'
    },
    {
      id: '2',
      name: "Diego",
      avatar_url: "http://github.com/diego3g.png",
      status: 'offline'
    },
    {
      id: '3',
      name: "Felipe",
      avatar_url: "http://github.com/femonsao.png",
      status: 'online'
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"

      />

    </Background>
  );
}
