import React, { useState } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";

import IllustrationImg from "../../assets/illustration.png";
import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Signin() {
  const navegation = useNavigation();

  function handleSignIn() {
    navegation.navigate("Home");
  }

  return (
    <View style={style.container}>
      <Image
        source={IllustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se{"\n"}e organize suas{"\n"}
          jogatinas{"\n"}
        </Text>
        <Text style={style.subTitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos {"\n"}
        </Text>
        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
