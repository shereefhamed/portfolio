import { v4 as uuidv4 } from 'uuid';
import efinanceLogo from '../assets/efinance.png';
import enovateLogo from '../assets/enovate.png';
import ecloudLogo from '../assets/ecloud.jpg';
import ehealthLogo from '../assets/e-health.png';
import gmaLogo from '../assets/gma-group.png';
import elafcorpLogo from '../assets/elafcorp.jpeg';
import bsaLogo from '../assets/bsa.jpg';
import innovspaceLogo from '../assets/innovspace.png';
import alghaneemLogo from '../assets/alghaneem.jpeg';
import akhaweinLogo from '../assets/akhawein.png';
import egyptPannelLogo from '../assets/egypt-pannel.webp';
import materrianLogo from '../assets/materrian.png';
import bahjatLogo from '../assets/bahjat.png';
import redTaxiLogo from '../assets/red-taxi.png';
import zmixMartLogo from '../assets/zmix.png';
import khatbaLogo from '../assets/khatba.png';
import quranLogo from '../assets/quran.png';
import elMenuLogo from '../assets/el-menu.png';
import seaNowLogo from '../assets/sea-now.png';
import compoundlyLogo from '../assets/compoundly.png';
import redTaxiProjectImage from '../assets/project-images/red-taxi.webp';
import efinanceProjectImage from '../assets/project-images/efinance.webp';
import ecloudProjectImage from '../assets/project-images/ecloud.webp';
import ehealthProkectImage from '../assets/project-images/ehealth.webp';
import enovateProjectImage from '../assets/project-images/enovate.webp';
import gmaProjectImage from '../assets/project-images/gma.webp';
import elafcorpProjectImage from '../assets/project-images/elafcorp.webp';
import bsaProjectImage from '../assets/project-images/bsa.webp';
import innovspaceProjectImage from '../assets/project-images/innovspace.webp'
import alghaneemProjectImage from '../assets/project-images/alghaneem.webp';
import akhaweinProjectImage from '../assets/project-images/akhween.webp';
import egyptPannelProjectImage from '../assets/project-images/egyptpannel.webp';
import materrianProjectImage from '../assets/project-images/materrian.webp';
import bahjatProjectImage from '../assets/project-images/bahjat.webp';
import redTaxiwebsiteProjectImage from '../assets/project-images/red-taxi-landingpage.webp';
import elMenuWebProjectImage from '../assets/project-images/el-menu.png';
import zmixMartProjectImage from '../assets/project-images/zmix.png';
import redTaxiRiderProjectImage from '../assets/project-images/red-taxi-rider.webp';
import zmixAppMartProjectImage from '../assets/project-images/zmix-app.png';
import quranProjectImage from '../assets/project-images/quran.png';
import elMenuProjectImage from '../assets/project-images/el-menu-app.webp';
import seaNowProjectImage from '../assets/project-images/seanow.webp';
import compoundlyProjectImage from '../assets/project-images/compoundly.webp';
import khatbaProjectImage from '../assets/project-images/khatba.webp';

const projects = [
    {
        id: 'efinance',
        title: 'eFinance',
        description: 'This is a WordPress website for eFinance investment group.',
        image: efinanceLogo,
        projectImage: efinanceProjectImage,
        type: 'Web',
        client: 'eFinance',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://www.efinance.com.eg/',
    },
    {
        id: 'enovate',
        title: 'eNovate',
        description: 'eNovate is subsidiary of eFinance Investment Group, Developed by Wordpress.',
        image: enovateLogo,
        projectImage: enovateProjectImage,
        client: 'eFinance',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        type: 'Web',
        websiteLink: 'https://www.enovate.com.eg/',
    },
    {
        id: 'efinance-ecloud',
        title: 'eFinance ecloud',
        description: 'This is a WordPress website for Efinance Ecloud, Efiance Ecloud is the first multi-cloud provider in Egypt.',
        image: ecloudLogo,
        projectImage: ecloudProjectImage,
        client: 'eFinance',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        type: 'Web',
        websiteLink: 'https://www.efinancecloud.com/'
    },
    {
        id: 'ehealth',
        title: 'eHealth',
        description: 'This is a WordPress website for eHealth, ',
        image: ehealthLogo,
        projectImage: ehealthProkectImage,
        type: 'Web',
        client: 'eFinance',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://www.ehealth.com.eg/',
    },
    {
        id: 'gma-group',
        title: 'GMA Group',
        description: 'Website that sell tires. This website is created by WordPress.',
        image: gmaLogo,
        projectImage: gmaProjectImage,
        type: 'Web',
        client: 'Elafcorp',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://gmacorp.net/',
    },
    {
        id: 'elafcorp',
        title: 'Elafcorp',
        description: 'Elaf Agency boosts and grows brands by personalising and innovating wonderfully compelling marketing, experiences, and digital activities.This website is designed by Wordpress.',
        image: elafcorpLogo,
        projectImage: elafcorpProjectImage,
        type: 'Web',
        client: 'Elafcorp',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://elafcorp.com/',
    },
    {
        id: 'bsa-pharmaceuticals',
        title: 'BSA Pharmaceuticals',
        description: 'BSA pharmaceuticals is a regional specialty company based in Belgium,This website is created by WordPress.',
        image: bsaLogo,
        projectImage: bsaProjectImage,
        type: 'Web',
        client: 'Elafcorp',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress, Woocommerce',
        websiteLink: 'http://bsapharmaceuticals.net/',
    },
    {
        id: 'innovspace',
        title: 'Innovspace',
        description: 'This is a WordPress website for a company introduce courses and educational material for students.',
        image: innovspaceLogo,
        projectImage: innovspaceProjectImage,
        type: 'Web',
        client: 'RealDeal',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://innovspace.co/',
    },
    {
        id: 'al-ghanem',
        title: 'Al-Ghanem',
        description: 'This is a WordPress website for a company that import and export agricultural crops and food stuffs.',
        image: alghaneemLogo,
        projectImage: alghaneemProjectImage,
        type: 'Web',
        client: 'RealDeal',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://alghaneem.com/',
    },
    {
        id: 'akhawein',
        title: 'Akhawein',
        description: 'Akhawein is charity website, Developed by Wordpress',
        image: akhaweinLogo,
        projectImage: akhaweinProjectImage,
        type: 'Web',
        client: 'RealDeal',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://www.akhawein.org/',
    },
    {
        id: 'egyptPannel',
        title: 'EgyptPannel',
        description: 'Specialized in crafting magnificent materials that represent elegance and softness, Developed by Wordpress',
        image: egyptPannelLogo,
        projectImage: egyptPannelProjectImage,
        type: 'Web',
        client: 'RealDeal',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://egyptpannel.com/',
    },
    {
        id: 'materrian',
        title: 'Materrian',
        description: 'Materrian is the holding company for Egypt Pannel, Global Banding (Global Industries), Developed by Wordpress',
        image: materrianLogo,
        projectImage: materrianProjectImage,
        type: 'Web',
        client: 'RealDeal',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://materrian.com/',
    },
    {
        id: 'bajat-marrakech',
        title: 'Bajat Marrakech',
        description: 'WordPress website for a restaurant in Saudi Arabia',
        image: bahjatLogo,
        projectImage: bahjatProjectImage,
        type: 'Web',
        client: 'Ealfcorp',
        platformAndLanguaegs: 'HTML, CSS, JavaScript, PHP, WordPress',
        technology: 'WordPress',
        websiteLink: 'https://bahjatmarrakech.com/',
    },
    {
        id: 'red-taxi',
        title: 'Red Taxi',
        description: 'A Landing page for Red taxi application, created by React.js, You can also book an appointment in specfice date.',
        image: redTaxiLogo,
        projectImage: redTaxiwebsiteProjectImage,
        type: 'Web',
        client: 'Ealfcorp',
        platformAndLanguaegs: 'HTML, CSS, javaScript, PHP',
        technology: 'React.js',
        websiteLink: 'https://red-taxi.com/',
    },
    {
        id: 'el-menu',
        title: 'El-menu',
        description: 'A web application created by Flutter, diaply menu Items for scaned restaurant QR code',
        image: elMenuLogo,
        projectImage: elMenuWebProjectImage,
        type: 'Web',
        client: 'Ealfcorp',
        platformAndLanguaegs: 'Dart, Flutter',
        technology: 'Firebase, Flutter Bloc, Clean Architecture',
        websiteLink: 'https://el-menu.net/?id=dL0YGeuRMtV3fK11NoT8vaxhi4H3'
    },
    {
        id: 'zmix-mart',
        title: 'Zmix Mart',
        description: 'A landingpage created by Flutter for Zmix Mart mobile application',
        image: zmixMartLogo,
        projectImage: zmixMartProjectImage,
        type: 'Web',
        client: 'Ealfcorp',
        platformAndLanguaegs: 'Dart, Flutter',
        technology: 'Firebase, Flutter Bloc, Clean Architecture',
        websiteLink: 'https://zmixmart.com/'
    },
    {
        id: 'zmix-mart-app',
        title: 'Zmix Mart',
        description: 'Zmix Mart is a multi-vendor application, shop owner can add all of products and categories, and create shop QR code and shop URL',
        image: zmixMartLogo,
        projectImage: zmixAppMartProjectImage,
        type: 'Mobile',
        client: 'Ealfcorp',
        platformAndLanguaegs: 'Dart, Flutter',
        technology: 'Firebase, Flutter Bloc, Clean Architecture',
        iosLink: 'https://apps.apple.com/us/app/zmix-mart/id6747639944',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.elafcorp.supermart',
    },
    {
        id: 'quran',
        title: 'Quran',
        description: 'Quran is a mobile application developed by Flutter, You can find more than 200 reciters with different rewayas.',
        image: quranLogo,
        projectImage:quranProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Flutter Bloc, Workmanger, API',
        iosLink: 'https://apps.apple.com/us/app/quran-prayer-times-hadith/id6747332210',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.elafcorp.quran',
    },
    {
        id: 'el-menu-app',
        title: 'El-menu',
        description: 'El-menu is a mobile developed by Flutter enable resturant owner to add thair menu items with description and prices and generate QR code. Any customer can scan QR code and see all menu items.',
        image: elMenuLogo,
        projectImage: elMenuProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Flutter Bloc, Firebase, Clean Architecture',
        iosLink: 'https://apps.apple.com/us/app/el-menu/id6748069277',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.elafcorp.elmenu',
    },
    {
        id: 'sea-now',
        title: 'SeaNow',
        description: 'SeaNow is a mobile app that enables you to book boots with different types.It is developed by Flutter.',
        image: seaNowLogo,
        projectImage: seaNowProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Flutter Provider, Firebase',
        iosLink: 'https://apps.apple.com/us/app/seanow/id6748940354',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.elafcorp.seanow',
    },
    {
        id: 'compoundly',
        title: 'Compoundly',
        description: 'Compoundly is a mobile app that enables compound admins to manage all residents, connect residents with others with chat system.It is developed by Flutter.',
        image: compoundlyLogo,
        projectImage: compoundlyProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Flutter Provider, Firebase',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.elafcorp.compundly',
    },
    {
        id: 'khatba',
        title: 'Khatba',
        description: 'Khatba is a mobile app that helps you to connect with potential partners based on your preferences, interests, location, and other factors. Khatba allows you to create a profile, browse through other profiles, send messages, and create voice and video calls.',
        image: khatbaLogo,
        projectImage: khatbaProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Flutter Provider, Firebase',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.elafcorp.khatba',
    },
    {
        id: 'red-taxi-rider',
        title: 'Red Taxi Rider',
        description: 'Red Taxi - Rider is a mobile app that is developed by flutter, you can register as a rider and search for any nearby driver.',
        image: redTaxiLogo,
        projectImage: redTaxiRiderProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Firebase, Google Maps, Flutter Provider',
        iosLink: 'https://apps.apple.com/us/app/red-taxi-rider/id1611589045',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.redtaxi.rider',
        websiteLink: null
    },
    {
        id: 'red-raxi-driver',
        title: 'Red Taxi Driver',
        description: 'Red Taxi - Driver is a mobile app that is developed by flutter, you can register as a rider and search for any nearby driver.',
        image: redTaxiLogo,
        projectImage: redTaxiProjectImage,
        type: 'Mobile',
        client: 'Elafcorp',
        platformAndLanguaegs: 'Flutter, Dart',
        technology: 'Firebase, Google Maps, Flutter Provider',
        iosLink: 'https://apps.apple.com/us/app/red-taxi-driver/id1611604577',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.redtaxi.redtaxidriver',
        websiteLink: null
    },
];

export default projects;