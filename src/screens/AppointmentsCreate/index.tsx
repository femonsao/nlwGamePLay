import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { CategotySelect } from "../../components/CategorySelect";
import { ModalView } from "../../components/ModalView";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { GuildIcon } from "../../components/GuildIcon";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { GuildsProps } from "../../components/Guild";

export function AppointmentsCreate() {
  const [category, setcategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildsProps>({} as GuildsProps);

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }
  function handleGuildSeleted(guildSelect: GuildsProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Header title="Agendar partida" />

        <Text
          style={[
            styles.label,
            {
              marginLeft: 24,
              marginTop: 36,
              marginBottom: 18,
            },
          ]}
        >
          Categoria
        </Text>
        <CategotySelect
          hasCheckBox
          setCategory={setcategory}
          categorySeleted={category}
        />
        <View style={styles.form}>
          <RectButton onPress={handleOpenGuildsModal}>
            <View style={styles.select}>
              {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name : "Selecio um servidor"}
                </Text>
              </View>
              <Feather
                name="chevron-right"
                size={24}
                color={theme.colors.heading}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Hora e minuto</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>
          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </View>
      </ScrollView>
      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSeleted={handleGuildSeleted} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}