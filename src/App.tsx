
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';
import store from './state/store';

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
import Tabs from './components/ui/tabs';

setupIonicReact();

const App: React.FC = () => (
    <Provider store={store}>
        <IonApp>
            <IonReactRouter>
                <Tabs />
            </IonReactRouter>
        </IonApp>
    </Provider>
);

export default App;




{/* <IonTabs> */ }
{/*     <IonTabBar slot="bottom"> */ }
{/*         <IonTabButton tab="tab1" href="/tab1"> */ }
{/*             <IonIcon aria-hidden="true" icon={statsChart} /> */ }
{/*             <IonLabel>Dashboard</IonLabel> */ }
{/*         </IonTabButton> */ }
{/*         <IonTabButton tab="tab2" href="/tab2"> */ }
{/*             <IonIcon aria-hidden="true" icon={add} /> */ }
{/*             <IonLabel>Request</IonLabel> */ }
{/*         </IonTabButton> */ }
{/*         <IonTabButton tab="tab3" href="/tab3"> */ }
{/*             <IonIcon aria-hidden="true" icon={person} /> */ }
{/*             <IonLabel>Profile</IonLabel> */ }
{/*         </IonTabButton> */ }
{/*     </IonTabBar> */ }
{/* </IonTabs> */ }
