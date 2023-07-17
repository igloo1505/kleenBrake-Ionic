import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import DashboardGraphGrid from '../components/dashboard/DashboardGraphGrid';
import SalesByDepth from '../components/dashboard/SalesByDepth';
import SalesHistory from '../components/dashboard/SalesHistory';
import React, { useEffect, useState } from 'react'
import RecentSales from '../components/dashboard/RecentSales';
import TopSellers from '../components/dashboard/TopSellers';
import { ParsedChartData, parseChartData } from '../types/chartData';
import { UserIncludeAll, UserWithAll } from '../state/types/AuthTypes';
import { Redirect } from 'react-router-dom';
import { getChildrenData, validateOrRedirect } from '../actions/auth';
import PageWrapper from '../components/PageWrapper';
import store from '../state/store';
import { setLoading } from '../state/slices/ui';


const Tab1: React.FC = () => {
    const [parsedData, setParsedData] = useState<ParsedChartData | null>()
    const setData = async () => {
        store.dispatch(setLoading(true))
        const valid = await validateOrRedirect(null, UserIncludeAll)
        console.log("valid: ", valid)
        if (!valid.user) {
            return (<Redirect to={valid.redirectPath || "/login"} />)
        }
        const user = valid.user as UserWithAll
        const data = await getChildrenData(user)
        if (!data) {
            return (<Redirect to={valid.redirectPath || "/login"} />)
        }
        const _data = parseChartData(user, data)
        store.dispatch(setLoading(false))
        setParsedData(_data)
    }
    useEffect(() => {
        setData()
    }, [])
    return (
        <PageWrapper title="Dashboard">
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {parsedData && <div className={'w-full h-full'}>
                    <DashboardGraphGrid data={parsedData} />
                    <div className={'w-full max-w-full px-6 mt-6 grid grid-cols-1 grid-rows-2 lg:grid-cols-[1fr_300px] lg:grid-rows-1 gap-4'}>
                        <SalesHistory salesHistory={parsedData.salesHistory} previousWeek={parsedData.previousWeek.salesByDay} />
                        <SalesByDepth data={parsedData.salesByDepth} />
                    </div>
                    <div className={'w-full px-6 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'}>
                        <TopSellers topSellers={parsedData.topSellers} />
                        <RecentSales recentSales={parsedData.recentSales} />
                    </div>
                </div>}
            </IonContent>
        </PageWrapper>
    );
};

export default Tab1;
