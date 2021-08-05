import * as React from 'react';
import {  ImageBackground, Text,   View,  SafeAreaView ,StyleSheet} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';

export default class Slider extends React.Component {

 
    constructor(){
        super();
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"INTELLBOARD : Ensemble des Tableaux de bord",
              text:'IntellBoard est un outil de pilotage de la performance de votre entreprise dans tous les domaines avec des indicateurs pertinents',
              img: "https://data.whicdn.com/images/356575437/original.jpg"
          },
          {
            title:"SOCIAL",
            text: 'Désigne le niveau quantitatif et qualitatif des résultats obtenus par une entreprise en matière de climat social, comme le bien-être au travail des différentes catégories de salariés et le comportement des dirigeants et des cadres à l’égard de leurs subordonnés.',
            img: "https://data.whicdn.com/images/356594995/original.jpg"
        },
          {
              title:"ECONOMIQUE / FINANCIER",
              text:'La performance commerciale se définit comme la capacité d’une entreprise à générer un maximum de rentabilité commerciale à partir des moyens humains et matériels mis à sa disposition. Ils ont pour objectif de déterminer les activités les plus rentables qui participent à la croissance interne d’une entreprise. Ils mesurent le rendement d’une personne ou la productivité d’un service.',
              img: "https://data.whicdn.com/images/356575353/original.jpg"

          },
          {
              title:"ENVIRONNEMENTAL",
              text: 'Peprésentent de manière plus compacte et visible l’amélioration continue des performances environnementales de l’entreprise et permettent de sensibiliser, planifier et contrôler en matière de gestion environnementale.',
              img: "https://data.whicdn.com/images/356575399/original.jpg"

          },
          {
              title:"INFORMATIQUE / DIGITAL",
              text: 'Mesurer la performance des activités technologiques de l’organisation. Pour une entreprise qui désire rentabiliser et optimiser ses processus d’affaires par le biais de solutions technologiques, elle pourra, à l’aide de ces indicateurs, calculer le coût total de ses solutions technologiques et les comparer au gain qu’elles apportent en termes de productivité ou de chiffre d’affaires (KPI alignement stratégique).',
              img: "https://data.whicdn.com/images/356575420/original.jpg"

          },
          {
              title:"CULTUREL",
              text:'La culture d’entreprise est les valeurs, les idées, les habitudes, les objectifs et la mission qui structurent les actions et l’identité de l’entreprise (et de ses employés). La culture définit essentiellement l’entreprise en tant que marque et en tant qu’entité corporative. Elle peut être décrite comme la personnalité de l’entreprise et elle est palpable dans chaque interaction entre ceux qui y travaillent, ainsi que dans les croyances et les politiques de l’organisation.',
              img: "https://data.whicdn.com/images/356575186/original.jpg "

          },
          {
            title:"PRODUCTIVITE",
            text: 'Utilisé dans les organisations afin de suivre, mesurer et analyser la productivité de l’entreprise',
            img: "https://data.whicdn.com/images/356575482/original.jpg"

        },
        {
          title:"QUALITE",
          text: 'Les KPIs de qualité sont indispensables, car ils permettent de transformer les objectifs de satisfaction client fixés par la direction de l’entreprise en données quantifiables et concrètes.',
          img: "https://data.whicdn.com/images/356575508/original.jpg"

      },
        ]
      }
    }

    _renderItem({item,index}, parallaxProps){
        return (
          <View style={{
            marginTop:10,
            backgroundImage: 'https://data.whicdn.com/images/356575482/original.jpg',
            borderRadius: 5,
              height: 290,
              marginLeft: 20,
              marginRight: 25, }}>
                <ImageBackground source={{ uri: item.img }} style={styles.image}>
                <LinearGradient    colors={[ 'transparent','rgba(0,0,0,1)']} style={styles.linearGradient}>

                <Text style={{fontSize: 22,  marginVertical:40, textAlign: 'center',color:'#fff'}}>{item.title}</Text>
                <Text style={{fontSize: 12, textAlign: 'center',color:'#fff' }}>{item.text}</Text>
                </LinearGradient>

            </ImageBackground>

          </View>

        )
    }

    render() {
        return (
          <SafeAreaView >
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={350}
                  itemWidth={370}
                  renderItem={this._renderItem}
                  hasParallaxImages={true}

                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  
            </View>
  
          </SafeAreaView>
          
        );
    }
}


const styles = StyleSheet.create({
    container:{
      marginTop:50
    },  

    image: {
      flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
    },
    linearGradient:{
      flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    }
  })
