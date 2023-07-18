import {
    IonApp,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { KonstaProvider } from 'konsta/react';
import { Provider } from 'react-redux';
import store from './state/store';

import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
/* import 'primereact/resources/themes/soho-dark/theme.css'; */
/* import 'primereact/resources/themes/soho-light/theme.css'; */

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './styles/global.css'

import Tabs from './components/ui/tabs';
import Modals from './components/ui/modals/Modals';

setupIonicReact();

const App: React.FC = () => (
    <>
        <KonstaProvider theme="parent">
            <Provider store={store}>
                <Modals />
                <IonApp>
                    <IonReactRouter>
                        <Tabs />
                    </IonReactRouter>
                </IonApp>
            </Provider>
        </KonstaProvider>
    </>
);

export default App;




