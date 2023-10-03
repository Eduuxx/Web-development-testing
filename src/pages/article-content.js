import kuva1 from '../kuvat/olioohjelmointi.png'; // Replace with the actual path to your image
import kuva2 from '../kuvat/projekti.png'; // Replace with the actual path to your image
import kuva3 from '../kuvat/webohjelmointi2.png'; // Replace with the actual path to your image
import kuva4 from '../kuvat/testaus.png'; // Replace with the actual path to your image
import kuva5 from '../kuvat/projektityoskentely.png'; // Replace with the actual path to your image
import kuva6 from '../kuvat/webohjelmointi1.png'; // Replace with the actual path to your image
// Import all the images you need

const articles = [
    {
        name: 'olio-ohjelmointi',
        title: 'Olio-ohjelmointi - 11.06.2023',
        content: [
            `Olio-ohjelmoinnissa tehtiin aika paljon tehätviä jotka liityivät pythoniin ja niihin kuuluviin juttuihin.
            Jossai kohdissa meillä oli tehtäviä missä oli tehty pohja ja yms ja meillä oli niihin piti korjaa virheet ja yms.
            Meillä oli myös tenttei aika paljon ja lopputyökin.
            Tunnit piti Toni Tuunainen.`,
        ],
        image: kuva1,
    },  
    {
        name: 'projekti',
        title: 'Projekti - 09.06.2023',
        content: [
            `Projekti tunneissa tehtiin suunnittelua ja oli tiimi jotka opettaja valitsi meiän puolesta.
            Tiimissä oli erilaisia haastavuuksia ja ajatuksia mitä tehtiin ja millä ohjelmointi tavalla.
            Meillä oli siinä peli, mikä tehtiin Unity:llä. Unity oli helppo käyttää koska siinä on perus c# ohjelmointikieli mitä olen itsekki käyttänyt aikaisemmin.
            Tunnit piti Aleksi Mäkeläinen`,
        ],
        image: kuva2,
    },
    {
        name: 'web-ohjelmointi2',
        title: 'Web-Ohjelmointi - 13.12.2022',
        content: [
            `Web-Ohjelmointi 2 tehtiin erilaisia harjoituksia HTML / CSS ja javascriptissä ja erilaisiin liittyviin niihin liittyviä koodeja. 
            Jossain kohassa tehtiin ja tutustiin React:iin ja niissä tehtiin koodeja ja muita asioita niihin liittyviin.
            Lopussa piti tehä loppu työ jossa sai valita millä tekee sen REACT:illa vai HTML / CSS ja JavaScriptillä!
            Tunnit piti Minna Ikiviita`,
        ],
        image: kuva3,
    },       
    {
        name: 'testaus',
        title: 'Testaus - 13.10.2022',
        content: [
            `Testaus tunneilla tehtiin erilaiset tehtävät mitkä liittyi PHP ja muihin ohjelmistokieleihin. Testaus tunneilla mm. tehtiin
            Testausprosessi, Laskimen testaus, Yksikkötestaus pythonilla, Testausmenetelmät, Testausmenetlmät, V-malli, Betatestaus ja kertausta ja koe.
            Tunnit piti Minna Ikiviita.`,
        ],
        image: kuva4,
    },
    {
        name: 'projektityoskentely',
        title: 'Projektityöskentely - 26.06.2022',
        content: [
            `Projektityöskentelyssä oli 4-5 hengenryhmiä missä suunniteltiin työelämä varten joku projekti missä piti tehä asioita pohjalta esim draw.io kuvakeita.
            Tai sitten asioita mitä voisi jatkossa liittyy elämään ja yms. Siinä oli ryhmiä missä esitettiin loppujen lopuksi oma työmme.
            Työ parina minulla oli: Eeli, Teemu, Oscar, minä ja Alex. Tunnit piti Jussi Kungas.`,
        ],
        image: kuva5,
    },  
    {
        name: 'web-ohjelmointi1',
        title: 'Web-Ohjelmointi 1 - 17.05.2022',
        content: [
            `Web-Ohjemointi 1 tehtiin kaikenlaista css ja HTML liityviin tehtäviä missä opittiin miten käytetään perus asiat ja miten niissä itse voidaan hyödyntää,
            omassa elämässä jos tekee sivustoihin ja yms. Tunnit piti Mikko Suomalainen, ja lopulta että toteuttaa liityvää asiat tunnista niin piti tehä lopputyö.`,
        ],
        image: kuva6,
    },
    /**Arttikelien lisäämistä
     * tarvitaan aika nämä 3 elementit:
        name: 'nimi - päivämäärä',
        title: '',
        content: []
     */
];

export default articles;