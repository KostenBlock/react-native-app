import axios from "axios";

import { useState, useEffect } from "react";
import { ScrollView, Text, ActivityIndicator, View } from "react-native";

import styled from "styled-components/native";
import Layout from "./layout";

const Home = styled.View`
  padding: 0 2.5%;
  background-color: #ddd;
`;

const HomeText = styled.Text`
  font-size: 24px;
  line-height: 30px;
  color: #333;
`;

export default function HomeScreen({ navigation }) {
    const [layouts, setLayouts] = useState([]);
    const [length, setLength] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        (async () => {
            await getLayouts();
        })();
    }, []);

    const getLayouts = async () => {
        try {
            setIsPending(true);
            const { data: { layouts, length }} = await axios.post(`https://service.1dogma.ru/api/layouts-filter/layouts`, {
                letter_id: [170, 171],
                area: [60, 200],
                type: [1],
                limits: 12,
                offset : 0,
                order_name: 'id',
                order_direction: 'ASC',
            });
            setLayouts(layouts);
            setLength(length)
        } catch (error) {

        } finally {
            setIsPending(false);
        }
    };

    if(isPending) return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator
                size={"large"}
            />
            <Text style={{marginTop: 5}}>
                Загрузка...
            </Text>
        </View>
    )

    return (
        <Home>
            <HomeText>Планировки</HomeText>
            {length ? <Text>Кол-во квартир:{length}</Text> : null}
            <ScrollView>
                {!isPending
                    ? layouts.map(layout => {
                        return <Layout
                            key={layout.id}
                            element={layout}
                            clickEvent={() => navigation.navigate('LayoutDetails', {
                                itemId: layout.id
                            })}
                        />
                    })
                    : <Text>Загрука...</Text>
                }
            </ScrollView>
        </Home>
    );
};

