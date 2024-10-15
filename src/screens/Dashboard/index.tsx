import React from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { HighligthCard } from "../../components/HighligthCard";
import { HighligthCards } from "../../components/HighligthCard/styles";

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/112784103?v=4",
              }}
            />
            <User>
              <UserGretting>Olá</UserGretting>
              <UserName>Otavio</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighligthCards>
        <HighligthCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada 13 de abril"
          type="up"
        />
        <HighligthCard
          title="Saidas"
          amount="R$ 1.259,00"
          lastTransaction="Ultima saida 20 de maio"
          type="down"
        />
        <HighligthCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 a 16 de abril"
          type="total"
        />
      </HighligthCards>
    </Container>
  );
};

export default Dashboard;
