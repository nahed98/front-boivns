
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../../common/types";
import { SvgIcon } from "../../common/SvgIcon";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js';
import { Chart, Pie, Bar, Doughnut } from "react-chartjs-2";
import {
    ContentSection,
    Content,
    ContentWrapper,
    ServiceWrapper,
    MinTitle,
    MinPara,
    StyledRow,
    ButtonWrapper,
} from "../../common/styles";
ChartJS.register(ArcElement, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);
const ContentBlock = ({
    id,
    direction,
}: ContentBlockProps) => {

    var options = {

        plugins: {

            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        // Format the label with a percentage symbol
                        return context.parsed + "%";
                    },
                },
            },
        },
    };
    const figBar1 = {
        labels: ["primaire", "secondaire", "supérieur"],
        datasets: [
            {
                label: "primaire",
                data: [44, 0, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "secondaire",
                data: [0, 49, 0],
                backgroundColor: "orange", // Specify background colors for each bar
            },
            {
                label: "supérieur",
                data: [0, 0, 7],
                backgroundColor: "grey", // Specify background colors for each bar
            },
        ],

    };
    const figbar2 = {
        labels: [">= 10 ans", "<= 10 ans"],
        datasets: [
            {
                label: "",
                data: [31, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "hii",

                data: [0, 69],
                backgroundColor: "blue", // Specify background colors for each bar
            }
        ],

    };

    const optionsBar1 = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false, // Hide y-axis scale labels
                },
                title: {
                    display: true,
                    text: "% d’engraisseurs", // Specify the title text
                },

            },
            x: {
                ticks: {
                    display: false, // Hide x-axis scale labels
                },
                title: {
                    display: true,
                    text: "Niveau d’instruction", // Specify the title text
                },

            },
        },
        plugins: {

            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        // Format the label with a percentage symbol
                        return '';
                    },
                    title: function (context: any) {
                        // Format the label with a percentage symbol
                        return context[0].label + ': ' + context[0].formattedValue + "%";
                    },
                },
            },
        },
    };
    const optionsBar5 = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "% d’ateliers",
                },
            },

        },
        plugins: {
            legend: {
                display: false,
            },

            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        // Format the label with a percentage symbol
                        return '';
                    },
                    title: function (context: any) {
                        // Format the label with a percentage symbol
                        return context[0].label + ': ' + context[0].formattedValue + "%";
                    },
                },
            },
        },
    };
    const optionsBarVertical = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Nombre d’années d’engraissement", // Specify the title text
                },

            },
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "% d’engraisseurs", // Specify the title text
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "% d’engraisseurs",
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        // Format the label with a percentage symbol
                        return '';
                    },
                    title: function (context: any) {
                        // Format the label with a percentage symbol
                        return context[0].label + ': ' + context[0].formattedValue + "%";
                    },
                },
            },
        },
    };
    const fig1 = {
        labels: [
            "Nord",
            "center",
            "Sub"
        ],
        datasets: [
            {

                data: [66, 30, 4],
                backgroundColor: [
                    "blue",
                    "orange",
                    "grey",
                ],
                borderColor: ["white"],
                borderWidth: 1,
            },
        ],
    };
    const figPie2 = {
        labels: [
            "< 40 ans",
            "entre 40-50 ans",
            "> 50 ans"
        ],
        datasets: [
            {

                data: [42, 29, 29],
                backgroundColor: [
                    "blue",
                    "orange",
                    "grey",
                ],
                borderColor: ["white"],
                borderWidth: 1,
            },
        ],
    };
    const fig4 = {
        labels: ['engraisseurs', 'engraisseur-finisseur'],
        datasets: [
            {
                label: '# of Votes',
                data: [93, 7],
                backgroundColor: [
                    'blue',
                    'orange',
                ],
                borderColor: [
                    'white',
                ],
                borderWidth: 1,
            },
        ],
    };
    const fig5 = {
        labels: ["S <= 100 M2", "100 M2< S <= 100 M2", " S >= 100 M2"],
        datasets: [
            {
                label: "S <= 100 M2",
                data: [53, 0, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "100 M2< S <= 100 M2",

                data: [0, 20, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "S >= 100 M2",

                data: [0, 0, 27],
                backgroundColor: "blue", // Specify background colors for each bar
            }
        ],

    };
    const fig6 = {
        labels: ["puits", "SONEDE"],
        datasets: [
            {
                data: [62, 38],
                backgroundColor: [
                    "blue",
                    "orange"
                ],
                borderColor: ["white"],
                borderWidth: 1,// Specify background colors for each bar
            }
        ],

    };
    const fig7 = {
        labels: ["foin", "paille", "paille et foin"],
        datasets: [
            {
                data: [67, 20, 13],
                backgroundColor: [
                    "blue",
                    "orange",
                    "grey"
                ],
                borderColor: ["white"],
                borderWidth: 1,// Specify background colors for each bar
            }
        ],

    };
    const fig8 = {
        labels: ["commercial", "fermier"],
        datasets: [
            {
                data: [91, 9],
                backgroundColor: [
                    "blue",
                    "orange",
                ],
                borderColor: ["white"],
                borderWidth: 1,// Specify background colors for each bar
            }
        ],

    };
    const fig9 = {
        labels: ["Alfa", "SNA", "Ben Issa Frères"],
        datasets: [
            {
                label: "Alfa",
                data: [20, 0, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "SNA",

                data: [0, 36, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "Ben Issa Frères",

                data: [0, 0, 44],
                backgroundColor: "blue", // Specify background colors for each bar
            }
        ],

    };
    const optionsBar9 = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "% d'engraisseurs",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Nom commercial",
                },
            },

        },
        plugins: {
            legend: {
                display: false,
            },

            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        // Format the label with a percentage symbol
                        return '';
                    },
                    title: function (context: any) {
                        // Format the label with a percentage symbol
                        return context[0].label + ': ' + context[0].formattedValue + "%";
                    },
                },
            },
        },
    };
    const fig10 = {
        labels: ["marché aux bestiaux", "boucher"],
        datasets: [
            {
                data: [43, 57],
                backgroundColor: [
                    "blue",
                    "orange",
                ],
                borderColor: ["white"],
                borderWidth: 1,// Specify background colors for each bar
            }
        ],

    };
    const fig11 = {
        labels: ["disponibilité d’alimentation", "coût d’alimentation"],
        datasets: [
            {
                label: "",
                data: [47, 0],
                backgroundColor: "blue", // Specify background colors for each bar
            },
            {
                label: "",

                data: [0, 100],
                backgroundColor: "blue", // Specify background colors for each bar
            }
        ],

    };
    const optionsBarVertical11 = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        scales: {
            y: {


                title: {
                    display: true,
                    text: "les majeurs problèmes", // Specify the title text
                },
            },
            x: {
                beginAtZero: true,

                title: {
                    display: true,
                    text: "% d'engraisseurs", // Specify the title text
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Pourcentage des engraisseurs",
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        // Format the label with a percentage symbol
                        return '';
                    },
                    title: function (context: any) {
                        // Format the label with a percentage symbol
                        return context[0].label + ': ' + context[0].formattedValue + "%";
                    },
                },
            },
        },
    };
    return (
        <ContentSection>
            <Fade direction={direction} triggerOnce>
                <StyledRow
                    justify="space-between"
                    align="middle"
                    id={id}
                    direction={direction}
                >

                    <ContentWrapper>
                        <h6>Données sectorielles</h6>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }} >L’évolution de l’effectifs du cheptel bovin en Tunisie</li>
                        <Content>La dynamique du cheptel tunisien assume l'influence des fluctuations climatiques, qui
                            réduisent périodiquement l'effectif les années sèches et l'augmentent les bonnes années
                            pluvieuses.</Content>
                        <Content>
                            <p>
                                <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 1 : </span>

                                l’évolution de l’effectifs du cheptel bovin en Tunisie
                            </p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th rowSpan={2} style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Effectif national du
                                        cheptel bovins</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Année 2015</td>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>450 000 unités femelles

                                        (UF)</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>
                                        <ul>
                                            <li>   259 000 de races pures</li>
                                            <li>  171 000 de races locales croisées</li>

                                        </ul></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Année 2021</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>416 000 unités femelles</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>
                                        <ul>
                                            <li>  237 000 de races pures</li>
                                            <li>  179 000 de races locales croisées</li>

                                        </ul>
                                    </td>
                                </tr>
                            </table>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }} >Evolution de la production nationale de viande bovine</li>
                        <Content>
                            La production nationale en viande bovine assume des fluctuations climatiques et
                            augmentation des températures, qui réduisent la quantité du viande produite chaque année.
                        </Content>
                        <Content>
                            <p > <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 2 : </span>la production de la viande bovine annuelle en MT</p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Année</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2015</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2016</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2017</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2018</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2019</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2020</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2021</td>



                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px', width: "150px", height: "auto" }}>Production de la viande Bovine en mille tonnes (MT)</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>58.3</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>59.4</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>52.6</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>51.4</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>52.7</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>54.8</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>49.8</td>


                                </tr>
                            </table>
                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }} >La Répartition du cheptels bovins en Tunisie</li>
                        <Content>
                            La répartition régionale du cheptel bovin en Tunisie suit essentiellement les disponibilités des
                            ressources alimentaires et les conditions climatiques. La figure 1 ci-dessous montre la localisation de
                            cheptel bovin à 66% dans le nord, cependant le centre compte 30% de l'effectif bovin et la région du
                            sud ne totalise que 4%.
                            <div style={{ width: "300px", height: "300px", margin: "auto" }} >
                                <Pie data={fig1} options={options} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 1 : la répartition du cheptel bovin selon les régions (ONAGRI ,2020)</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }} >Les races à viande importés en Tunisie</li>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Blonde Aquitaine</li>
                            La race Blonde d'Aquitaine est originaire du Sud-Ouest de France. Il est le résultat de la
                            fusion en 1962 Trois types de bovins, principalement utilisés pour travail, toutes blondes :
                            Garonnaise, Quercy et la Blonde des Pyrénées (FPBQ,2006).
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <SvgIcon
                                    src="stat1.png"
                                    width="50%"
                                    height="50%"
                                />
                            </div>

                            <Content>
                                Donc, il peut attendre 1400 et 1500 g/j en régime intensif entre 6 à 12 mois d'âge (OEP,
                                2009). Elle Montre un rendement à l’abattage parmi les plus élevés, soit de 65 à 70 %. Il en
                                est de même pour le rendement en viande. Ces derniers ont un fort potentiel de croissance, ce
                                qui permet un développement exceptionnel de la musculature (FPBQ,2006).
                            </Content>
                        </Content>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Race charolaise</li>
                            La race Charolaise, l’une des plus anciennes d’origine française, la couleur de la robe est
                            toujours uniforme, généralement blanc ou crème. Cependant, les couleurs, en particulier le
                            rouge, sont maintenant observé dans cette race. Pigmentation Peau pâle (rose). Ce sont des
                            animaux extrêmement musclés Au niveau du dos, des reins et de la culotte (FPBQ,2006).
                            <Content>
                                Le poids moyen d'un taureau Charolais adulte est d’Environ 1100 kg, alors que la femelle
                                adulte moyenne pèse 700 kg. Le GMQ entre 6 et 12 mois en régime intensif (g/j) est de 1450
                                à 1550. (OEP,2009).
                            </Content>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <SvgIcon
                                    src="stat2.png"
                                    width="50%"
                                    height="50%"
                                />
                            </div>

                        </Content>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >-Race limousine </li>
                            Les bovins de race Limousine sont originaires de France, qui se caractérise par une
                            bonne rusticité, La couleur de la robe varie d’une teinte blé doré chez les femelles à rouge
                            assez foncé chez les mâles. Cependant, la couleur noire est désormais observée chez cette
                            race. La pigmentation de la peau est pâle (rosée) (FPBQ,2006).
                            <Content>
                                Les femelles pèsent entre 635 et 725 kg alors que les mâles adultes peuvent atteindre 1100 kg.
                                Le GMQ entre 6 et 12 mois en régime intensif (g/j) est de 1300 à 1400 (OEP,2009). Un
                                aspect particulièrement intéressant du Limousin est que les os s'amincissent et les muscles se
                                développent. Par conséquent, leur excellente construction bouchère permet d’obtenir des
                                rendements l'abattage et en viande maigre bien plus que 60 %. (FPBQ,2006).
                            </Content>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <SvgIcon
                                    src="stat3.png"
                                    width="50%"
                                    height="50%"
                                />
                            </div>

                        </Content>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Aubrac</li>
                            Originaire du plateau de l’Aubrac, à cheval sur les départements de l’Aveyron, de la
                            Lozère et du Cantal, l’Aubrac était une race homogène dès le XVIIIème siècle. La couleur de
                            la robe est : Fauve, monochrome mais avec des nuances, allant du froment au gris blanchâtre.
                            Les épaules et les hanches sont plus foncées.
                            <Content>
                                Ce trait est particulièrement important chez les mâles non castrés dont les avant-mains
                                sont proches du noir. La hauteur au garrot de la race Aubrac est de 125 cm (vache) et de 130
                                cm (taureau) (UPRA AUBRAC, 2002). Le poids de 650 - 950 kg (adulte femelle – mâle). Le
                                rendement en carcasse est de 63-64% (UPRA AUBRAC, 2002).
                            </Content>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <SvgIcon
                                    src="stat4.png"
                                    width="50%"
                                    height="50%"
                                />
                            </div>

                        </Content>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Salers</li>
                            C’est la petite ville de Salers, située en Auvergne, dans le sud-ouest de la France d’où
                            le nom de la race. Les conditions d’élevage et d'alimentation difficiles (terrain accidenté,
                            changements brusques de température, hiver très long) ce qui permet de cette race d’être
                            rustique et alerte (FPBQ,2006).
                            <Content>
                                La robe de Salers est uniforme, rouge acajou Plus ou moins sombre. Le noir est
                                également reconnu. Le poil est généralement bouclé et la fourrure épaisse le protège du froid
                                extrême. Peau à pigmentation brune, qui aide à prévenir les coups de chaleur (FPBQ,2006).
                                Les femelles pèsent 680 kg et les taureaux adultes peuvent atteindre 1140 kg, il se caractérise
                                par une bonne qualité de la viande et un rendement carcasse qui peut atteindre 59%.
                            </Content>
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <SvgIcon
                                    src="stat5.png"
                                    width="50%"
                                    height="50%"
                                />
                            </div>

                        </Content>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Blanc bleu belge</li>
                            Race originaire de Belgique, ces animaux ont un potentiel de croissance important avec des
                            indices de consommation élevés mais intéressants par la mesure où ils déposent moins de
                            gras. Le pelage est soit blanc, bleu (rouan blanc et noir) ou noir (FPBQ,2006).
                            Grâce à la carcasse maigre et aux os très fins, le rendement à l’abattage peut aller jusqu'à
                            70% entre 14 à 16 mois, Le GMQ en régime intensif est de 1300 à 1400g/j entre 6 et 12 mois
                            d’âge (Oep,2009).
                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <SvgIcon
                                    src="stat6.png"
                                    width="50%"
                                    height="50%"
                                />
                            </div>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }} >Evolution de l’importation des veaux maigres</li>
                        <Content>Depuis 2005, l'accent est mis sur l'importation de jeunes taureaux d'Uruguay et d'Europe
                            pour produire suffisamment de viande pour le marché local, en particulier pendant les
                            périodes de forte consommation de bœuf. L’importation des taurillons maigres encourage le
                            développement de l’économie tunisien à partir de l’augmentation de l’activité de
                            l’engraissement.</Content>
                        <Content>
                            <p>
                                <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 3 : </span>

                                l’évolution de l’importation des veaux maigres (DGPA ,2022)
                            </p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Année</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2018</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2019</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2020</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2021</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2022</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Nombres de tête</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>6053</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>12389</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>7989</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2350</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>6721</td>

                                </tr>
                            </table>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }} >Evolution de la consommation en viande rouge</li>
                        <Content>La consommation de viande rouge a beaucoup changé dans les dix dernières années. En 2021,
                            la demande intérieure de viande rouge a atteint 124,6 milliers de tonnes, contre 117 600
                            tonnes en 2004 (GIVLait, 2022).</Content>
                        <Content> Cependant, cette consommation suit des variations saisonnières : Augmentation de la
                            demande de viande d'agneau et de chèvre en automne et en hiver, tandis que le bœuf pousse
                            en été et au début du printemps. Le pic de consommation se produit pendant le Ramadan et
                            l'Aïd, en particulier pour l'agneau.</Content>
                        <Content>
                            <p>
                                <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 4: </span>
                                La consommation de viande rouge en Tunisie (GIVLait, 2022)
                            </p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Année</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2013</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2014</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2015</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2016</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2017</td>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2018</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2019</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2020</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2021</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>consommation</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>126.5</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>128.2</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>127.5</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>126.2</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>121</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>123.4</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>126.6</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>128.4</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>124.6</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Taux de couverture (%)</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>95.8</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>97.2</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>98</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>99.5</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>98.8</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>96.8</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>96</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>97</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>99.5</td>

                                </tr>
                            </table>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>La filière viande rouge dans la région de Bizerte</li>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Effectifs des éleveurs et des bovins à viande par délégation</li>
                            Selon CRDA de Bizerte les effectifs totaux des bovins maigres importées prévu en 2023
                            sont de l’ordre de 3101 têtes et l’effectifs important 1270 têtes est localisé dans la délégation
                            de Ras Djbel d’où l’importance de cette région dont la production des viande bovines.
                            Comme le montre tableau ci-dessus la répartition des nombres d’éleveurs et les bovins
                            d’engraissement selon les délégations de Bizerte.</Content>
                        <Content>
                            <p>
                                <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 5: </span>
                                Nombre prévu des bovins maigres importées selon les délégations de Bizerte en 2023
                            </p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Délégation</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Nombre des éleveurs</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Bovins d’engraissement importées</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>El Alia</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>132</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1180</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Bizerte Sud</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>28</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>210</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Joumine</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>16</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>23</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ras Djbel</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>174</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1270</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ghar El Melh</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>28</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>130</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ghazela</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>4</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>8</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Mateur</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>18</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>90</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Manzel Bourguiba</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>11</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>35</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Utique</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>10</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>110</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Manzel Jemil</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>19</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>45</td>

                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Total</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>440</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>3101</td>

                                </tr>
                            </table>

                        </Content>

                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >La répartition des centres de quarantaines et évolution d’importation</li>
                        </Content>
                        <Content>
                            <p>
                                <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 6: </span>
                                Evolution des nombres des têtes d’importation des bovins à engrais de 2023 (CRDA,2023)
                            </p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}></th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société</th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Localisation</th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Nombre des têtes en 2020</th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Nombre des têtes en 2023</th>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Bl Akhal des services agricole</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ras Djbel</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>97</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>500</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société des services agricoles</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Alia</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>206</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>500</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>3</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ben Aïssa frères</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Alia Khetmyn</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>2765</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>5000</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>4</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Agro Services</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Azib</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>326</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>200</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>5</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Mechrgui Agro</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Bizerte Sud</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>311</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>500</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>6</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Agro Nord Plus</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Menzel Jemil</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1045</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1500</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>7</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Agro plus TN</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Utique (Natilait)</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>240</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>800</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>8</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Lazem agricole</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Bizerte Sud</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>120</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>600</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>9</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Services agricoles Al Yasmine</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Utique</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>992</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1000</td>
                                </tr>
                                <tr>
                                    <th colSpan={3} style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Total</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>6156</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>10 600</td>
                                </tr>

                            </table>

                        </Content>
                        <Content>
                            <li style={{ listStyleType: "square", fontFamily: "arial black ,sans-serif", padding: '20px' }} >Les fournisseurs des aliments des bétails</li>
                            Selon Mannai et al (2017) le fournisseur d’aliment de bétail est le premier maillon de
                            la chaine de valeur de viande. Il entre en relation directe avec les éleveurs et les centres de
                            quarantaines. Ceci confirme la répartition géographique importante des usines de concentré
                            dans la région de Bizerte, le tableau ci-dessous montre la liste des usines et les quantités
                            produites en 2023 (CRDA ,2023).
                        </Content>
                        <Content>
                            <p>
                                <span style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", justifyContent: "start" }}>Tableau 7: </span>
                                Suivi des usines de 01/01/2023 à 31/03/2023 (CRDA ,2023)
                            </p>

                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Nom d’usine</th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Localisation</th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Concentrés des bovins laitiers produites en Tonnes</th>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Concentrés des bovins à engrais produites en tonnes</th>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Diamant</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Mateur</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>7313,1</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}></td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Badr</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Utique</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>5442,3</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1842,3</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Ben Aïssa Frères</th>


                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Alia</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>612,4</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1179,9</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Moderne d’élevage</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Utique</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>0</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>0</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Manel des aliments concentrés</th>

                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ras Djbel</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>141</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>432</td>


                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Bouchoucha</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ghar Melh</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>101</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>354</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société des services des aliments concentrées</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Alia</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>919</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>692</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>ABNB</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Joumine Bazina</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>35,15</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>37,5</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>SMSA</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Ras Djbel</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>104</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>249</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Usine de concentré Fritissa</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Mateur</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>31,5</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>32,45</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Khetmin des aliments cencentrés</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Alia</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>60</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>90</td>
                                </tr>
                                <tr>
                                    <th style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Société Aloe-vera</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Al Alia</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>1030</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>100</td>
                                </tr>
                                <tr>
                                    <th colSpan={2} style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>Total (Tonnes)</th>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>16789,5</td>
                                    <td style={{ border: '1px solid black', borderCollapse: 'collapse', padding: '10px' }}>5009,15</td>
                                </tr>

                            </table>

                        </Content>
                        <span style={{ fontFamily: "arial black ,sans-serif", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Quelques résultats des enquêtes réalisés</span>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Age des engraisseurs enquêtés</li>
                        <Content>L’âge de l’éleveur est un paramètre important dans la gestion de l’élevage. Une
                            capacité de travail limitée peut résulter des niveaux d'activité réduits associés à la vieillesse
                            (Merabet, 2015).</Content>
                        <Content>Par contre, Les jeunes agriculteurs ont la volonté et la capacité de se moderniser et d'innover.
                            Ils utilisent la technologie de l’information et de communication pour partager les
                            informations. Il a été observé dans certains pays que les jeunes chefs de famille engagés dans
                            l'agriculture gagnent plus de leurs activités agricoles que leurs pères plus âgés ce qui explique
                            que les jeunes sont plus ouvertes aux autres cultures et les nouvelles technologies (FAO,
                            2011).</Content>
                        <Content>Dans le cas de ce travail les engraisseurs enquêtés sont tous des hommes et âgés en
                            moyenne de 43,5 ans. Leurs âges varient de 19 ans à 69 ans. La figure 25 montre que la forte
                            représentativité est celle de la tranche d’âge qui est inférieure à 40 ans ce qui montre que les
                            exploitants sont jeunes.</Content>
                        <Content>
                            <div style={{ width: "300px", height: "300px", margin: "auto" }} >
                                <Pie data={figPie2} options={options} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 1 : Répartition des pourcentages des engraisseurs selon les classes d’âge</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Niveau d’instruction</li>
                        <Content>La figure 2 montre que La plupart des engraisseurs enquêtés ont un niveau d’instruction
                            secondaire à raison de 49% tandis que le niveau primaire est de l’ordre de 44,5%. Seulement
                            6,5% des engraisseurs ont un niveau supérieur. Cela explique que l’élevage bovin est pratiqué
                            par toutes les catégories d’éleveurs quel que soit leur niveau d’instruction, qui a tendance à
                            s’améliorer (MENAA,2015).</Content>
                        <Content>
                            <div style={{ width: "550px", height: "350px", margin: "auto" }} >
                                <Bar data={figBar1} options={optionsBar1} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 2 : Répartition des engraisseurs selon le niveau d’instruction</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Importance de l’activité d’engraissement</li>
                        <Content>La plupart des engraisseurs enquêtés 64,4% pratiquent l’engraissement comme activité
                            principale. Tandis que chez 35,6% des engraisseurs enquêtés, l’engraissement bovin est
                            activité secondaire. Par ailleurs, ces engraisseurs se sont orientés par leurs propre initiative et
                            moyens vers l’engraissement et non pas vers la production laitière et continuent à essayer de
                            voir les possibilités de développement de cette activité et de l’amélioration de sa production et
                            de sa productivité (Kirat, 2007).</Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Ancienneté dans l’activité d’engraissement</li>
                        <Content>Pour les 45 engraisseurs visités, l’expérience moyenne dans la pratique de l’activité
                            d’engraissement des taurillons importés est de l’ordre 9,2± 5,03 ans avec une variation entre
                            01 et 20 ans. Ces résultats sont similaires que ceux de MENAA (2021) l'expérience d'élevage
                            varie respectivement entre 1 à 10 ans et 10 et 15 ans chez 63% et 37% des éleveurs enquêtés,
                            ce qui montre que ces derniers ont de l'expérience dans ce domaine mais ils réclament un
                            manque de maîtrise de certaines techniques d’élevage.</Content>
                        <Content>
                            <div style={{ width: "550px", height: "350px", margin: "auto", position: "relative" }} >
                                <Bar data={figbar2} options={optionsBarVertical} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 3 : Répartition des engraisseurs selon le nombre d’années de pratique de l&#39;activité

                                d’engraissement</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Type d’ateliers d’engraissement des taurillons importés</li>
                        <Content>Selon l’origine des maigres, l’enquête fait ressortir que 93% (n=43) sont des
                            engraisseurs, 7% (n=3) sont des engraisseurs-finisseurs. Et Ben Issa frères est un importateur-
                            engraisseur-finisseur.</Content>
                        <Content>
                            <div style={{ width: "250px", height: "250px", margin: "auto", position: "relative" }} >
                                <Doughnut data={fig4} options={options} />
                            </div>

                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 4: Types d’ateliers d'engraissement des taurillons importés</p>
                        </Content>
                        <Content>A partir de cette enquête on peut dégager une chaine de valeur de viande bovine existante
                            dans la région de Bizerte.</Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Superficie destinée à l’engraissement</li>
                        <Content>La superficie moyenne destinée pour ce type d’engraissement est de 158,89 m2 ±
                            115,53 et varie entre 40 m2 et 500 m2 selon l’effectif des veaux à engraisser. Tous les ateliers
                            sont à stabulation libre, une litière paillée avec une densité moyenne égale à 17±11 têtes par
                            atelier.</Content>
                        <Content>
                            <div style={{ width: "550px", height: "350px", margin: "auto", position: "relative" }} >
                                <Bar data={fig5} options={optionsBar5} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 5 : Répartition des ateliers d’engraissement selon la superficie destinée à l'engraissement des taurillons importés</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Abreuvement</li>
                        <Content>La majorité des engraisseurs utilisent l’eau de puits pour des raisons économiques (62%) ;
                            38% d’entre eux utilisent l’eau de la SONEDE.</Content>
                        <Content>
                            <div style={{ width: "300px", height: "300px", margin: "auto" }} >
                                <Pie data={fig6} options={options} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 6 : Origine d’eau d’abreuvement</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Alimentation à base de foin</li>
                        <Content>67% des engraisseurs enquêtés utilisent le foin comme fourrage grossier dans la ration,
                            il est considéré comme un élément régulateur pour atteindre l’encombrement alimentaire
                            nécessaire pour assurer un bon transit digestif, La quantité moyenne utilisée du foin dans la
                            ration est estimé à 3,82±1,22 kg.</Content>
                        <Content>L'engraissement à base de foin additionné de concentré est la technique la plus courante en
                            Tunisie (surtout dans les petites exploitations). Semadani (1976) a également montré que la
                            mauvaise qualité du foin en Tunisie est une conséquence directe des fauches tardives et des
                            longues périodes laissées au champ. 13% des engraisseurs utilisent paille et foin ensemble
                            dans l’alimentation de leur bétail.</Content>
                        <Content>
                            <div style={{ width: "300px", height: "300px", margin: "auto" }} >
                                <Pie data={fig7} options={options} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 7 : répartition des engraisseurs selon les fourrages grossiers utilisés</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Concentré</li>
                        <Content>Comme dans la figure 50, 91% des engraisseurs utilisent le concentré commercial et
                            9% utilisent le concentré fermier ce qui leur permet d’ajuster la composition de la formule
                            concentrée en fonction des besoins des animaux et de la disponibilité des matières premières
                            sur le marché. L'engraissement à base de « concentré » dure huit à quatorze mois et peut
                            atteindre des poids d'animaux de 450 à 500 kg dans la délégation de Rafraf (Kassab,1977).</Content>
                        <Content>
                            <div style={{ width: "300px", height: "300px", margin: "auto" }} >
                                <Pie data={fig8} options={options} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 8 : Répartition des engraisseurs selon le type de concentré</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Concentré commercial</li>
                        <Content>Comme le montre la figure 9, 44% des engraisseurs préfèrent utiliser le concentré de ben Issa
                            Frères. Selon ces éleveurs, leur choix est expliqué par la proximité de l’usine de fabrication
                            située à EL Alia leur choix ce qui permet de minimiser le coût de transport, le prix de
                            l’aliment (140dt/100kg) et son efficacité grâce à sa formule énergétique. 33% des engraisseurs
                            utilisent le concentré SNA, selon leurs avis, ce concentré serait le plus efficace au niveau de
                            rendement bien que plus cher (160dt/100kg).</Content>
                        <Content>
                            <div style={{ width: "550px", height: "350px", margin: "auto" }} >
                                <Bar data={fig9} options={optionsBar9} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 9 : les différents concentrés commerciaux utilisés par les éleveurs</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Commercialisation de bétails</li>
                        <Content>La commercialisation de bétail est liée à plusieurs facteurs spécifiques à l’éleveur tel
                            que des facteurs sociaux comme l’âge, le niveau d’étude, la possession en ressources
                            naturelles, aussi par des facteurs économiques comme la profitabilité au marché, le
                            déplacement, la réglementation en vigueur et aussi des facteurs écologiques comme le climat
                            et les maladies.</Content>
                        <Content>D’après la figure 52, la majorité des engraisseurs de El Alia 57% vendent leurs
                            taurillons directement aux bouchers « selon MANNAI (2017) le boucher a un rôle
                            prédominant dans la commercialisation de la viande » en kilogramme carcasse avec un prix
                            moyen de 24,74±0,96 dt, selon Abdelhafidh (2009) qui indique que la vente en période de
                            pic de demande, a un impact positif sur le nombre des têtes vendus ce qui explique
                            l’importance de la demande pour la stimulation de vente, pour que les éleveurs sont incités
                            par les prix offerts et rassemblent leurs ventes pour cette période pour dégager des profits plus
                            intéressants.</Content>
                        <Content>Soit aux marchés aux bestiaux de Ras Jbal par tête (43%), Ce qui confirme le résultat
                            de Abdelhafidh (2009) que la commercialisation de bétail se fait a moins de 50% dans les
                            marchés car les éleveurs donnent une grande importance à l’état sanitaire de leurs cheptels. La
                            proximité de marché et la disponibilité de moyen de transport représentent les facteurs les
                            plus importants pour la commercialisation dans le marché ce qui augmente la chance de vente
                            des animaux (Abdelhafidh, 2009).</Content>
                        <Content>Selon MANNAI 2017 « Les marchés aux bestiaux sont très nombreux mais ils sont
                            mal organisés, ils représentent de très grandes installations qui ne permettent pas le contrôle
                            des prix ou de l'assainissement des animaux. Cette situation a engendré une désorganisation
                            du Cette situation a conduit à l'effondrement du cercle du marché ce qui a permis d'augmenter
                            le nombre des maquignons.</Content>
                        <Content>
                            <div style={{ width: "300px", height: "300px", margin: "auto" }} >
                                <Pie data={fig10} options={options} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 10 : Commercialisation de bétails vif</p>

                        </Content>
                        <li style={{ listStyleType: "circle", fontFamily: "arial black ,sans-serif" }}>Les problèmes majeurs dans le secteur de l’engraissement</li>
                        <Content>Tous les engraisseurs facent des problèmes en relation avec l’alimentation soit le coût
                            (100% des engraisseurs), soit la disponibilité (47% des engraisseurs) comme dans la figure 11.</Content>
                        <Content>
                            <div style={{ width: "550px", height: "350px", margin: "auto", position: "relative" }} >
                                <Bar data={fig11} options={optionsBarVertical11} />

                            </div>
                            <p style={{ fontFamily: "arial black ,sans-serif", color: "black", fontSize: "x-small", display: "flex", justifyContent: "center", paddingBottom: "20px" }}>Figure 11 : les majeurs problèmes dans le secteur d'engraissement</p>

                        </Content>
                    </ContentWrapper>

                </StyledRow>
            </Fade>
        </ContentSection>
    );
};

export default withTranslation()(ContentBlock);
