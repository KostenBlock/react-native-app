
import { Button, Image, Text, View } from "react-native";

import styled from "styled-components/native";

const LayoutContainer = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid red;
  background-color: #fff;
  padding: 15px;
`;

const Plain = styled.View`
  flex: 1;
  flex-direction: column;
`;

export default function Layout({ element, clickEvent }) {

    return (
        <LayoutContainer>
            <Image
                style={{resizeMode: 'contain'}}
                source={{uri: element.layouts_url, width: '100%', height: 250}}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: "row"
                }}
            >
                <Plain style={{margin: 5}}>
                    <Text>Номер</Text>
                    <Text>{element.num}</Text>
                </Plain>
                <Plain style={{margin: 5}}>
                    <Text>Площадь</Text>
                    <Text>{element.area}</Text>
                </Plain>
                <Plain style={{margin: 5}}>
                    <Text>Цена</Text>
                    <Text>{element.sum_price}</Text>
                </Plain>
            </View>
            <Button
                onPress={() => clickEvent(element.id)}
                title={'Подробнее'}
            />
        </LayoutContainer>
    );
};
