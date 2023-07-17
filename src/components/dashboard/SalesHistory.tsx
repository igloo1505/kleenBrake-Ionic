import React from 'react'
import SalesHistoryChart from './charts/salesHistoryChart';
import { ParsedChartData } from '#/types/chartData';
import DashboardCardWithTitle from './DashboardCardWithTitle';


interface SalesHistoryProps {
    salesHistory: ParsedChartData['salesHistory']
    previousWeek: ParsedChartData['previousWeek']['salesByDay']
}


const SalesHistory = ({ salesHistory, previousWeek }: SalesHistoryProps) => {
    return (
        <DashboardCardWithTitle
            title="Sales History"
        >
            <div className={'w-full max-w-full h-full max-h-full flex justify-center items-center text-center'}>
                <SalesHistoryChart data={salesHistory} previousWeek={previousWeek} />
            </div>
        </DashboardCardWithTitle>
    )
}


SalesHistory.displayName = "SalesHistory"


export default SalesHistory;
