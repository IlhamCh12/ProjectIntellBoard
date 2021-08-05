import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import { makeStyles } from '@material-ui/core/styles'
import '../Style/Slider.css';
import '../Style/SliderA.css';
import Social from '../../assets/social.jpg';
import Prod from '../../assets/prod.jpg';
import Envi from '../../assets/envi.jpg';
import Intell from '../../assets/intell.jpg';
import Info from '../../assets/info.jpg';
import Cult from '../../assets/culture.jpg';
import Qual from '../../assets/qual.jpg';
import Eco from '../../assets/eco.jfif';



export default function PrimarySearchAppBar() {
        const content = [
            {
                title: 'INTELLBOARD : Ensemble des Tableaux de bord',
                description:
                'IntellBoard est un outil de pilotage de la performance de votre entreprise dans tous les domaines avec des indicateurs pertinents',
                image: Intell,
            },
            {
                title: 'SOCIAL',
                description:
                'Désigne le niveau quantitatif et qualitatif des résultats obtenus par une entreprise en matière de climat social, comme le bien-être au travail des différentes catégories de salariés et le comportement des dirigeants et des cadres à l’égard de leurs subordonnés.',
                image: Social,
            },
            {
                title: 'ENVIRONNEMENTAL',
                description:
                'Peprésentent de manière plus compacte et visible l’amélioration continue des performances environnementales de l’entreprise et permettent de sensibiliser, planifier et contrôler en matière de gestion environnementale.',
                image: Envi,
            },
            {
                title: 'ECONOMIQUE / FINANCIER',
                description:
                'La performance commerciale se définit comme la capacité d’une entreprise à générer un maximum de rentabilité commerciale à partir des moyens humains et matériels mis à sa disposition. Ils ont pour objectif de déterminer les activités les plus rentables qui participent à la croissance interne d’une entreprise. Ils mesurent le rendement d’une personne ou la productivité d’un service.',
                image: Eco,
            },
            {
                title: 'QUALITE',
                description:
                'Sont indispensables car ils permettent de transformer les objectifs de satisfaction client fixés par la direction de l’entreprise en données quantifiables et concrètes.',
                image: Qual,
               
            },
            {
                title: 'CULTUREL',
                description:
                'La culture d’entreprise est les valeurs, les idées, les habitudes, les objectifs et la mission qui structurent les actions et l’identité de l’entreprise (et de ses employés). La culture définit essentiellement l’entreprise en tant que marque et en tant qu’entité corporative. Elle peut être décrite comme la personnalité de l’entreprise et elle est palpable dans chaque interaction entre ceux qui y travaillent, ainsi que dans les croyances et les politiques de l’organisation.',
                image: Cult,
            },
            {
                title: 'PRODUCTIVITE',
                description:
                'Utilisé dans les organisations afin de suivre, mesurer et analyser la productivité de l’entreprise',
                image: Prod,
                
            },
            {
                title: 'INFORMATIQUE / DIGITAL',
                description:
                'Mesurer la performance des activités technologiques de l’organisation. Pour une entreprise qui désire rentabiliser et optimiser ses processus d’affaires par le biais de solutions technologiques, elle pourra, à l’aide de ces indicateurs, calculer le coût total de ses solutions technologiques et les comparer au gain qu’elles apportent en termes de productivité ou de chiffre d’affaires (KPI alignement stratégique).',
                image: Info,
                
            }
        ];
    return (
        <div >
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}