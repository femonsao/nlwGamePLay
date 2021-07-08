import React, { ReactNode } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";


export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/femonsao.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.userName}>Felipe</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
