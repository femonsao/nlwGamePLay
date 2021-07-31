import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildsProps } from "../../components/Guild";
type Props = {
  handleGuildSeleted: (guild: GuildsProps) => void;
};

export function Guilds({ handleGuildSeleted }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: 'image.png',
      owner: true,
    },{
      id: "2",
      name: "War",
      icon: 'image.png',
      owner: false,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() =>handleGuildSeleted(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
