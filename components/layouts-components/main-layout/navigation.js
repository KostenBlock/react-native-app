import styled from "styled-components/native/dist/styled-components.native.esm";
import {Text} from "react-native";

const NavigationView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 2.5%;
  background-color: white;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

const NavigationItem = styled.View`
  flex-direction: column;
  padding: 0 10px;
  align-items: center;
`

const ImageItem = styled.Image`
  height: 16px;
  width: 16px;
  object-fit: contain;
`
const TextItem = styled.Text`
  font-size: 12px;
  line-height: 16px;
`

export default function Navigation({ navigation }) {
    console.log(navigation)
    return (
        <NavigationView>
            <NavigationItem>
                <ImageItem
                    source={require('./images/profile.png')}
                />
                <TextItem>Авторизация</TextItem>
            </NavigationItem>
            <NavigationItem>
                <ImageItem
                    style={{ resizeMode: "contain" }}
                    source={require('./images/settings.png')}
                />
                <TextItem>Настройки</TextItem>
            </NavigationItem>
            <NavigationItem>
                <ImageItem
                    style={{ resizeMode: "contain" }}
                    source={require('./images/about.png')}
                />
                <TextItem>О сервере</TextItem>
            </NavigationItem>
            <NavigationItem>
                <ImageItem
                    style={{ resizeMode: "contain" }}
                    source={require('./images/windows.png')}
                />
                <TextItem>Установить сервер</TextItem>
            </NavigationItem>
        </NavigationView>
    );
};
