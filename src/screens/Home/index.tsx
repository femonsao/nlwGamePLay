import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { style } from "./styles";

import { CategotySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

export function Home() {
  const [categoty, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 as 20:40h",
      description: "Bora geral de rose",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 as 20:40h",
      description: "Bora geral de rose",
    },
  ];

  function handlerCategorySelect(categoryId: string) {
    categoryId === categoty ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={style.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategotySelect
          categorySeleted={categoty}
          setCategory={handlerCategorySelect}
        />
        <View style={style.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            style={style.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
