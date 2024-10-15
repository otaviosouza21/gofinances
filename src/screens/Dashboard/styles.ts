import { ThemeType } from "styled-components";
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.background};
    
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.primary};
  flex-direction: row;
  
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  margin-top: ${RFValue(40)}PX;
  
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;


`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGretting = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: { theme: ThemeType }) => theme.fonts.medium };
`;

export const Icon = styled(Feather)`
  color: ${({ theme }: { theme: ThemeType }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`