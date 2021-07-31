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
    },{
      id: "3",
      name: "War",
      icon: 'image.png',
      owner: false,
    },{
      id: "4",
      name: "War",
      icon: 'image.png',
      owner: false,
    },{
      id: "5",
      name: "War",
      icon: 'image.png',
      owner: false,
    },{
      id: "6",
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
        contentContainerStyle={{ paddingBottom: 68,paddingTop: 103 }}
        ListHeaderComponent={ () => <ListDivider  isCentered/>}
        ItemSeparatorComponent={() => <ListDivider  isCentered/>}
        style={styles.guilds}
      />
    </View>
  );
}
