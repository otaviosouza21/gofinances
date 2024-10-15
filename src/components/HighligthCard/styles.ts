import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { ThemeType } from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${(props: TypeProps) =>
    props.type === "up" &&
    css`
      color: ${({ theme }: { theme: ThemeType }) => theme.colors.success};
    `}

  ${(props: TypeProps) =>
    props.type === "down" &&
    css`
      color: ${({ theme }: { theme: ThemeType }) => theme.colors.attention};
    `}

  ${(props: TypeProps) =>
    props.type === "total" &&
    css`
      color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
    `}
`;

export const Fotter = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;
export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;

export const HighligthCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}PX;
`;
