import axios from "axios";

import { Image, Text, View } from "react-native";
import { useEffect, useState } from "react";

import styled from "styled-components/native";

const Layout = styled.View`
  background-color: #fff;
  padding: 0 2.5%;
`

const LayoutText = styled.Text`
  font-size: 24px;
  line-height: 30px;
  color: #333;
`;

const Plain = styled.View`
`;

const PlainElement = styled.View`
  flex: 1;
  flex-direction: row;
`;


export default function LayoutDetails({ route, navigation }) {
    const { itemId } = route.params;

    const [layout, setLayout] = useState({});
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        (async () => {
            await getLayoutData();
        })();
    }, [])

    const getLayoutData = async () => {
        try {
            setIsPending(true);
            const { data } = await axios.get(`https://service.1dogma.ru/api/layouts-filter/layouts/${itemId}`, {
            });
            setLayout(data);
        } catch (error) {

        } finally {
            setIsPending(false);
        }
    };

    return (
        <Layout>
            <LayoutText>
                Страница планировки
            </LayoutText>
            {!isPending
                ? <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Image
                        style={{resizeMode: 'contain'}}
                        source={{uri: layout.layouts_url, width: '100%', height: 350}}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <View style={{marginTop: 5, marginBottom: 5}}>
                            <Text>Номер квартиры</Text>
                            <Text>{layout.num}</Text>
                        </View>
                        <View style={{marginTop: 5, marginBottom: 5, marginLeft: 75}}>
                            <Text>Подъезд</Text>
                            <Text>{layout.door}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <View style={{marginTop: 5, marginBottom: 5}}>
                            <Text>Общая площадь</Text>
                            <Text>{layout.area}</Text>
                        </View>
                        <View style={{marginTop: 5, marginBottom: 5, marginLeft: 75}}>
                            <Text>Жилая площадь</Text>
                            <Text>{layout.living_area}</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 5, marginBottom: 5}}>
                        <Text>Цена</Text>
                        <Text>{layout.sum_price} Рубликов</Text>
                    </View>
                </View>
                : <Text>Загрзука...</Text>}
        </Layout>
    );
};
