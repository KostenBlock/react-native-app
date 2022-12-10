import { Dimensions } from "react-native";

import styled from "styled-components/native";

import colors from "../../../styles/colors";

const MainScreenView = styled.ScrollView`
  flex: 1;
`;

const MainScreenHead = styled.View`
  padding-top: 50px;
  align-items: center;
  background-color: #FFEBD6;
  overflow: hidden;
`;

const HomeTitle = styled.Text`
  font-size: 34px;
  line-height: 40px;
  max-width: 80%;
  text-align: center;
  z-index: 2;
`;
const HomeText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #5c3315;
  max-width: 80%;
  text-align: center;
  padding: 20px 0 0;
  z-index: 2;
`;

const ImageBackground = styled.Image`
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const LeftHero = styled.Image`
  position: absolute;
  left: 0;
  bottom: 0;
`

const RightHero = styled.Image`
  position: absolute;
  right: 0;
  bottom: 0;
`
const Clouds = styled.Image`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 125px;
  width: 100%;
  z-index: 2;
`

const ScatteredBackground = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 200px;
  z-index: 1;
`

const ImageButton = styled.Image`
  max-width: 90%;
`

const MainScreenSub = styled.View`
  background-color: white;
`

const TextSub = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #533016;
  text-align: center;
  margin-bottom: 10px;
`
const Timer = styled.View`
  align-items: center;
`

const TimerBackground = styled.Image`
  width: 100%;
  z-index: 1;
`

const TextTimeContainer = styled.View`
  position: absolute;
  top: 30%;
  flex-direction: row;
  justify-content: center;
  z-index: 1;
`

const TextContainer = styled.View`
  flex-direction: column;
  align-items: center;
`

const TextTitle = styled.Text`
  color: #533016;
  font-size: 42px;
  line-height: 45px;
`

const Text = styled.Text`
  color: #956D4F;
  font-size: 10px;
  line-height: 10px;
`

const TimerRectangle = styled.Image`
  height:  15px;
  margin: 15px 5px 0;
`

const TimerLineLeft = styled.Image`
  position: absolute;
  top: 20px;
  left: -200px;
  width: 100%;
  z-index: 0;
`

const TimerLineRight = styled.Image`
  position: absolute;
  top: 20px;
  right: -200px;
  width: 100%;
  z-index: 0;
  transform: rotate(-5deg);
`

export default function MainScreen() {
    const { height } = Dimensions.get('window');

    return (
        <MainScreenView>
            <MainScreenHead style={{ height: height }}>
                <ImageBackground
                    style={{ resizeMode: "cover" }}
                    source={require('./images/background.png')}
                />
                <ScatteredBackground
                    style={{ resizeMode: "cover" }}
                    source={require('./images/ellipse.png')}
                />
                <HomeTitle style={{...colors.brown}}>Новый сервер Rune Wall</HomeTitle>
                <HomeText>
                    Насладись новым клановым PvP- и PvE-контентом в Interlude! Сразись с поистине опасными противниками, которых можно победить только сообща.
                    Штурмуй открывшиеся рейдовые зоны и завоюй награды
                </HomeText>
                <ImageButton
                    style={{ resizeMode: "contain" }}
                    source={require('./images/play.png')}
                />
                <LeftHero
                    style={{ resizeMode: "contain" }}
                    source={require('./images/hero-left.png')}
                />
                <RightHero
                    style={{ resizeMode: "contain" }}
                    source={require('./images/hero-right.png')}
                />
                <Clouds
                    style={{ resizeMode: "cover" }}
                    source={require('./images/clouds.png')}
                />
            </MainScreenHead>
            <MainScreenSub>
                <TextSub>До запуска сервера осталось:</TextSub>
                <Timer>
                    <TimerBackground
                        style={{ resizeMode: "cover" }}
                        source={require('./images/timer-background.png')}
                    />
                    <TimerLineLeft
                        style={{ resizeMode: "contain" }}
                        source={require('./images/line.png')}
                    />
                    <TimerLineRight
                        style={{ resizeMode: "contain" }}
                        source={require('./images/line.png')}
                    />
                    <TextTimeContainer>
                        <TextContainer>
                            <TextTitle>20</TextTitle>
                            <Text>Дней</Text>
                        </TextContainer>
                        <TimerRectangle
                            style={{ resizeMode: "contain" }}
                            source={require('./images/rectangle.png')}
                        />
                        <TextContainer>
                            <TextTitle>10</TextTitle>
                            <Text>часов</Text>
                        </TextContainer>
                        <TimerRectangle
                            style={{ resizeMode: "contain" }}
                            source={require('./images/rectangle.png')}
                        />
                        <TextContainer>
                            <TextTitle>33</TextTitle>
                            <Text>Минут</Text>
                        </TextContainer>
                        <TimerRectangle
                            style={{ resizeMode: "contain" }}
                            source={require('./images/rectangle.png')}
                        />
                        <TextContainer>
                            <TextTitle>00</TextTitle>
                            <Text>Секунд</Text>
                        </TextContainer>
                    </TextTimeContainer>
                </Timer>
            </MainScreenSub>
        </MainScreenView>
    )
}
