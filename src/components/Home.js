import Header from './Header';
import Profilephoto from './Profilephoto';
import Footer from './Footer';

const Profile = () => {
    return (

        <div>
            <Header />

            <div className='App-profile'>

                <div className='App-profile-input'>
                    <p>Ik ben Britt, een startende front-end developer met 6 jaar werkervaring als projectcoördinator en projectondersteuner in de advocatuur. Ik ben resultaatgericht en heb oog voor detail.
                    Ik houd van gestructureerd werken, ik streef voortdurend naar verbetering en ik stel daarbij hoge eisen aan de kwaliteit van mijn werk. </p>
                    <p>In de afgelopen jaren heb ik gewerkt als International Business Development Specialist. Hier heb ik veel ervaring in plannen, prioriteren, verantwoordelijkheid nemen en analyseren opgedaan.
                    Een jaar geleden ben ik mijn hart achterna gegaan en de opleiding tot front-end developer gestart en ik zit op dit moment in de afrondende fase. </p>
                    <p>Staan jullie open voor een frisse front-end developer die klaar is voor haar carrière-switch die ook nog eens veel werkervaring heeft op organisatorisch vlak?
                    Ik kan niet wachten om iedere dag weer met plezier naar mijn werk te gaan, te bouwen met een team en graag nog meer te leren. </p>
                    <p>Nieuwsgierig? Ik ga hierover graag met u in gesprek. </p>

                    <p className='handschrift'>Britt Diepenhorst</p>
                </div>

                <Profilephoto />

            </div>

            <Footer />

        </div>
    )
}

export default Profile;