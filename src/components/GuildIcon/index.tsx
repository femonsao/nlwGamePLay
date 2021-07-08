import React from "react";
import { Image } from "react-native";

import { style } from "./style";

export function GuildIcon() {
  const uri = "https://w5fc.org/wp-content/uploads/2021/05/s9biyhs4lix61.jpg";
  return <Image source={{ uri }} style={style.image} resizeMode="cover" />;
}
