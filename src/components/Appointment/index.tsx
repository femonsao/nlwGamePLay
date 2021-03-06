import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";

import { GuildIcon } from "../GuildIcon";

import { style } from "./style";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import { GuildsProps } from "../Guild";
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentProps = {
  id: string;
  guild: GuildsProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={style.container}>

        <LinearGradient
        style={style.guildIconContainer}
        colors={[secondary50, secondary70]} 
        >
          <GuildIcon /> 
        </LinearGradient>

        <View style={style.content}>
          <View style={style.header}>
            <Text style={style.title}>{data.guild.name}</Text>
            <Text style={style.category}>{category.title}</Text>
          </View>
          <View style={style.footer}>
            <View style={style.dateInfo}>
              <CalendarSvg />
              <Text style={style.date}>{data.date}</Text>
            </View>
            <View style={style.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[style.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
