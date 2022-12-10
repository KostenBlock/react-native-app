import { StyleSheet } from 'react-native';

import styled from "styled-components/native";

import colors from "../../../styles/colors";

const AboutScreenView = styled.ScrollView`
  flex: 1;
  background-color: blanchedalmond;
`;

const AboutScreenMain = styled.View`
  padding: 0 2.5%;
  background-color: blanchedalmond;
`;

const AboutHeader = styled.Text`
  font-size: 30px;
  line-height: 36px;
  margin: 10px 0;
`;

const AboutImage = styled.Image`
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
`;

const AboutText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 50px;
`;

const AboutAdvantages = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const AboutAdvantagesSingle = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`

const AboutAdvantage = styled.View`
  align-items: center; 
  padding: 15px 0;
`

const AdvantageImage = styled.Image`
  height: 90px;
  width: 90px;
`

const AdvantageText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
`

const AboutSub = styled.View`
  position: relative;
  padding: 0 2.5%;
  background-color: #fff;
`

const SubBackground = styled.Image`
  position: absolute;
  left: 0;
  right: 0;
  top: -250px;
  width: 105%;
  height: 250px;
`

const StepContainer = styled.View`
  flex-direction: row;
  margin-left: -5%;
`

const StepPictureContainer = styled.View`
  position: relative;
  height: 200px;
  width: 200px;
`
const StepImage = styled.Image`
  height: 200px;
  width: 200px;
`
const StepNumber = styled.Image`
  position: absolute;
  top: 10%;
  right: 15%;
  height: 80px;
  width: 70px;
  z-index: 0;
`

const StepClouds = styled.Image`
  position: absolute;
  right: 0;
  bottom: -10px;
  left: 0;
  height: 110px;
  width: 100%;
  z-index: 1;
`

const StepTexts = styled.View`
  flex-direction: column;   
  justify-content: center;
  margin-left: -5%;
  flex: 1;
  z-index: 2;
`

const StepTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`


const StepText = styled.Text`
  font-size: 12px;
  line-height: 20px;
  flex-wrap: wrap;
`

export default function AboutScreen() {

    return (
        <AboutScreenView
            style={styles.linearGradient}
        >
            <AboutScreenMain>
                <AboutHeader style={{...colors.brown}}>О сервере</AboutHeader>
                <AboutImage
                    style={{ resizeMode: "contain" }}
                    source={require('./images/ornament.png')}
                />
                <AboutText style={{...colors.brown}}>
                    Interlude — идеальная версия Lineage для игры в одиночку: каждый класс самодостаточен,
                    а благодаря автобою качаться легко и приятно. Но чтобы не упустить огромное количество
                    интересного контента, стоит вступить в клан или создать собственный. Тебя ждут не только
                    привычные осады, но и новые PvP- и PvE-активности специально для кланов.
                    Теперь кланы можно развивать до 10-го уровня, чтобы получать еще больше бонусов. Выполняйте вместе с друзьями клановые задания или сражайтесь с другими гильдиями за лидерство на сервере. Новая система враждебных кланов выводит PvP на новый уровень! Теперь, благодаря обновленным меткам, ты точно заметишь воинов вражеского клана и не дашь им ускользнуть.
                </AboutText>
                <AboutAdvantages>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/xp.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            XP: x3
                        </AdvantageText>
                    </AboutAdvantage>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/sp.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            SP: x3
                        </AdvantageText>
                    </AboutAdvantage>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/knife.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            quest: xp
                        </AdvantageText>
                        <AdvantageText style={{...colors.brown}}>
                            xp/ adena
                        </AdvantageText>
                    </AboutAdvantage>
                </AboutAdvantages>
                <AboutAdvantages>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/treasure.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            spoil:
                        </AdvantageText>
                        <AdvantageText style={{...colors.brown}}>
                            x1 (chance)
                        </AdvantageText>
                        <AdvantageText style={{...colors.brown}}>
                            x1 (amount)
                        </AdvantageText>
                    </AboutAdvantage>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/boss.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            raid bosses:
                        </AdvantageText>
                        <AdvantageText style={{...colors.brown}}>
                            x1  (chanse)
                        </AdvantageText>
                    </AboutAdvantage>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/arena.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            adena: x2
                        </AdvantageText>
                    </AboutAdvantage>
                </AboutAdvantages>
                <AboutAdvantagesSingle>
                    <AboutAdvantage>
                        <AdvantageImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/drop.png')}
                        />
                        <AdvantageText style={{...colors.brown}}>
                            drop: x1
                        </AdvantageText>
                    </AboutAdvantage>
                </AboutAdvantagesSingle>
            </AboutScreenMain>
            <AboutSub>
                <SubBackground
                    style={{ resizeMode: "cover" }}
                    source={require('./images/clouds-background.png')}
                />
                <AboutHeader style={{...colors.brown}}>Как начать играть</AboutHeader>
                <StepContainer>
                    <StepPictureContainer>
                        <StepImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/hero-1.png')}
                        />
                        <StepClouds
                            style={{ resizeMode: "cover" }}
                            source={require('./images/clouds.png')}
                        />
                        <StepNumber
                            style={{ resizeMode: "contain" }}
                            source={require('./images/stroke-1.png')}
                        />
                    </StepPictureContainer>
                    <StepTexts>
                        <StepTitle style={{...colors.brown}}>создай учетную запись</StepTitle>
                        <StepText style={{...colors.brown}}>Введи свой никнейм, e-mail и пароль</StepText>
                    </StepTexts>
                </StepContainer>
                <StepContainer>
                    <StepPictureContainer>
                        <StepImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/hero-2.png')}
                        />
                        <StepClouds
                            style={{ resizeMode: "cover" }}
                            source={require('./images/clouds.png')}
                        />
                        <StepNumber
                            style={{ resizeMode: "contain" }}
                            source={require('./images/stroke-2.png')}
                        />
                    </StepPictureContainer>
                    <StepTexts>
                        <StepTitle style={{...colors.brown}}>скачай и установи лаунчер</StepTitle>
                        <StepText style={{...colors.brown}}>Нажми «играть бесплатно», открой загруженный файл и запусти программу установки</StepText>
                    </StepTexts>
                </StepContainer>
                <StepContainer>
                    <StepPictureContainer>
                        <StepImage
                            style={{ resizeMode: "contain" }}
                            source={require('./images/hero-3.png')}
                        />
                        <StepClouds
                            style={{ resizeMode: "cover" }}
                            source={require('./images/clouds.png')}
                        />
                        <StepNumber
                            style={{ resizeMode: "contain" }}
                            source={require('./images/stroke-3.png')}
                        />
                    </StepPictureContainer>
                    <StepTexts>
                        <StepTitle style={{...colors.brown}}>играй с друзьями!</StepTitle>
                        <StepText style={{...colors.brown}}>Игра запустится автоматически. Приятного времяпрепровождения</StepText>
                    </StepTexts>
                </StepContainer>
            </AboutSub>
        </AboutScreenView>
    );
};

const styles = StyleSheet.create({

});
