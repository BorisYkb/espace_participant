"use client"

import { useState } from 'react'
import ActivitySummary from './ActivitySummary'
import Layout from "@/components/layout/Layout"
import Link from 'next/link';
import Section7 from '@/components/sections/home1/section7';

interface Activity {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    status: 'available' | 'limited' | 'full';
    statusText: string;
    statusColor: string;
    prices: {
        standard: number;
        vip: number;
        vvip: number;
    };
}

interface SelectedActivity {
    activityId: string;
    activityName: string;
    ticketType: 'standard' | 'vip' | 'vvip';
    price: number;
    startTime: string;
    endTime: string;
}

const activities: Activity[] = [
    {
        id: '1',
        name: 'CÉRÉMONIE D\'OUVERTURE OFFICIELLE',
        startTime: '09h00',
        endTime: '10h00',
        status: 'available',
        statusText: 'Places disponibles',
        statusColor: '#28a745',
        prices: {
            standard: 0,
            vip: 5000,
            vvip: 10000
        }
    },
    {
        id: '2',
        name: 'POINT DE PRESSE',
        startTime: '10h00',
        endTime: '11h00',
        status: 'available',
        statusText: 'En cours',
        statusColor: '#28a745',
        prices: {
            standard: 2000,
            vip: 5000,
            vvip: 8000
        }
    },
    {
        id: '3',
        name: 'PANEL DE HAUT NIVEAU',
        startTime: '11h00',
        endTime: '12h00',
        status: 'limited',
        statusText: 'Places limitées',
        statusColor: '#ffc107',
        prices: {
            standard: 3000,
            vip: 6000,
            vvip: 10000
        }
    },
    {
        id: '4',
        name: 'PAUSE-CAFÉ',
        startTime: '12h00',
        endTime: '12h30',
        status: 'available',
        statusText: 'Non disponible',
        statusColor: '#dc3545',
        prices: {
            standard: 1000,
            vip: 2000,
            vvip: 3000
        }
    },
    {
        id: '5',
        name: 'COCKTAIL BREAK',
        startTime: '17h00',
        endTime: '18h00',
        status: 'available',
        statusText: 'Non disponible',
        statusColor: '#dc3545',
        prices: {
            standard: 2500,
            vip: 4000,
            vvip: 6000
        }
    }
];

export default function ActivitySelection() {
    const [selectedActivities, setSelectedActivities] = useState<{[key: string]: string}>({});
    const [showSummary, setShowSummary] = useState(false);

    const handleActivitySelect = (activityId: string, checked: boolean) => {
        setSelectedActivities(prev => {
            const newSelected = { ...prev };
            if (checked) {
                newSelected[activityId] = '';
            } else {
                delete newSelected[activityId];
            }
            return newSelected;
        });
    };

    const handleTicketTypeSelect = (activityId: string, ticketType: string) => {
        setSelectedActivities(prev => ({
            ...prev,
            [activityId]: ticketType
        }));
    };

    const getSelectedActivityData = (): SelectedActivity[] => {
        return Object.entries(selectedActivities)
            .filter(([_, ticketType]) => ticketType !== '')
            .map(([activityId, ticketType]) => {
                const activity = activities.find(a => a.id === activityId)!;
                return {
                    activityId,
                    activityName: activity.name,
                    ticketType: ticketType as 'standard' | 'vip' | 'vvip',
                    price: activity.prices[ticketType as keyof typeof activity.prices],
                    startTime: activity.startTime,
                    endTime: activity.endTime
                };
            });
    };

    const canProceed = () => {
        return Object.values(selectedActivities).some(ticketType => ticketType !== '');
    };

    const handleNext = () => {
        if (canProceed()) {
            setShowSummary(true);
        }
    };

    const handleBackToSelection = () => {
        setShowSummary(false);
    };

    if (showSummary) {
        return (
            <ActivitySummary 
                selectedActivities={getSelectedActivityData()}
                onBack={handleBackToSelection}
            />
        );
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>

                    <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg8.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center">
										<h1>Activités</h1>
										<div className="space20" />
										<Link href="/">Accueil <i className="fa-solid fa-angle-right" /> <span>Choix des Activités</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div className="activity-selection mt-5 mb-5">

                        <style jsx>{`
                            .activity-selection {
                                max-width: 800px;
                                margin: 0 auto;
                                padding: 20px;
                                background: #f8f9fa;
                                min-height: 100vh;
                            }
                        
                            .header {
                                background: white;
                                padding: 20px;
                                border-radius: 10px;
                                margin-bottom: 20px;
                                text-align: center;
                                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            }
                        
                            .header h1 {
                                color: #333;
                                font-size: 24px;
                                margin: 0 0 10px 0;
                            }
                        
                            .header p {
                                color: #666;
                                margin: 0;
                            }
                        
                            .activities-container {
                                background: white;
                                border-radius: 10px;
                                padding: 20px;
                                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            }
                        
                            .section-title {
                                font-size: 18px;
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 20px;
                                padding-bottom: 10px;
                                border-bottom: 2px solid #e9ecef;
                            }
                        
                            .activity-item {
                                border: 1px solid #e9ecef;
                                border-radius: 8px;
                                margin-bottom: 15px;
                                overflow: hidden;
                                transition: all 0.3s ease;
                            }
                        
                            .activity-item:hover {
                                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                            }
                        
                            .activity-header {
                                background: #f8f9fa;
                                padding: 15px;
                                display: flex;
                                align-items: center;
                                gap: 12px;
                            }
                        
                            .activity-checkbox {
                                width: 20px;
                                height: 20px;
                                cursor: pointer;
                            }
                        
                            .activity-info {
                                flex: 1;
                            }
                        
                            .activity-name {
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 5px;
                            }
                        
                            .activity-time {
                                color: #666;
                                font-size: 14px;
                            }
                        
                            .activity-status {
                                font-weight: 500;
                                font-size: 14px;
                            }
                        
                            .ticket-types {
                                padding: 15px;
                                background: white;
                                display: ${Object.keys(selectedActivities).length > 0 ? 'block' : 'none'};
                            }
                        
                            .ticket-type-row {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                padding: 10px 0;
                                border-bottom: 1px solid #f0f0f0;
                            }
                        
                            .ticket-type-row:last-child {
                                border-bottom: none;
                            }
                        
                            .ticket-info {
                                display: flex;
                                align-items: center;
                                gap: 10px;
                            }
                        
                            .ticket-radio {
                                width: 18px;
                                height: 18px;
                                cursor: pointer;
                            }
                        
                            .ticket-type {
                                font-weight: 500;
                                color: #333;
                            }
                        
                            .ticket-price {
                                font-weight: 600;
                                color: #007bff;
                            }
                        
                            .ticket-status {
                                font-size: 12px;
                                color: #666;
                            }
                        
                            .next-button-container {
                                text-align: center;
                                margin-top: 30px;
                            }
                        
                            .next-button {
                                background: linear-gradient(135deg, #007bff, #0056b3);
                                color: white;
                                border: none;
                                padding: 15px 40px;
                                border-radius: 8px;
                                font-size: 16px;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.3s ease;
                                box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
                            }
                        
                            .next-button:hover:not(:disabled) {
                                transform: translateY(-2px);
                                box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
                            }
                        
                            .next-button:disabled {
                                background: #ccc;
                                cursor: not-allowed;
                                transform: none;
                                box-shadow: none;
                            }
                        
                            .activity-item.selected .activity-header {
                                background: #e7f3ff;
                                border-left: 4px solid #007bff;
                            }
                        
                            .activity-item.selected .ticket-types {
                                display: block;
                            }
                        `}</style>

                        <div className="heading2">
                            <h2>Sélection des Activités</h2>
							<div className="space8" />
                            <p>Choisissez les activités auxquelles vous souhaitez participer</p>
							<div className="space32" />
                        </div>
                        
                        <div className="activities-container">
                            <div className="section-title">
                                Liste des activités du programme
                            </div>
                        
                            {activities.map((activity) => (
                                <div 
                                    key={activity.id} 
                                    className={`activity-item ${selectedActivities[activity.id] !== undefined ? 'selected' : ''}`}
                                >
                                    <div className="activity-header">
                                        <input
                                            type="checkbox"
                                            className="activity-checkbox"
                                            checked={selectedActivities[activity.id] !== undefined}
                                            onChange={(e) => handleActivitySelect(activity.id, e.target.checked)}
                                        />
                                        <div className="activity-info">
                                            <div className="activity-name">{activity.name}</div>
                                            <div className="activity-time">
                                                {activity.startTime} - {activity.endTime}
                                            </div>
                                        </div>
                                        <div 
                                            className="activity-status"
                                            style={{ color: activity.statusColor }}
                                        >
                                            {activity.statusText}
                                        </div>
                                    </div>
                            
                                    <div className="ticket-types">
                                        <div className="ticket-type-row">
                                            <div className="ticket-info">
                                                <input
                                                    type="radio"
                                                    name={`ticket-${activity.id}`}
                                                    value="standard"
                                                    className="ticket-radio"
                                                    checked={selectedActivities[activity.id] === 'standard'}
                                                    onChange={() => handleTicketTypeSelect(activity.id, 'standard')}
                                                />
                                                <span className="ticket-type">Standard</span>
                                            </div>
                                            <div>
                                                <span className="ticket-price">
                                                    {activity.prices.standard === 0 ? 'Gratuit' : `${activity.prices.standard.toLocaleString()} FCFA`}
                                                </span>
                                                <div className="ticket-status">Disponible</div>
                                            </div>
                                        </div>
                            
                                        <div className="ticket-type-row">
                                            <div className="ticket-info">
                                                <input
                                                    type="radio"
                                                    name={`ticket-${activity.id}`}
                                                    value="vip"
                                                    className="ticket-radio"
                                                    checked={selectedActivities[activity.id] === 'vip'}
                                                    onChange={() => handleTicketTypeSelect(activity.id, 'vip')}
                                                />
                                                <span className="ticket-type">VIP</span>
                                            </div>
                                            <div>
                                                <span className="ticket-price">{activity.prices.vip.toLocaleString()} FCFA</span>
                                                <div className="ticket-status">Disponible</div>
                                            </div>
                                        </div>
                            
                                        <div className="ticket-type-row">
                                            <div className="ticket-info">
                                                <input
                                                    type="radio"
                                                    name={`ticket-${activity.id}`}
                                                    value="vvip"
                                                    className="ticket-radio"
                                                    checked={selectedActivities[activity.id] === 'vvip'}
                                                    onChange={() => handleTicketTypeSelect(activity.id, 'vvip')}
                                                />
                                                <span className="ticket-type">VVIP</span>
                                            </div>
                                            <div>
                                                <span className="ticket-price">{activity.prices.vvip.toLocaleString()} FCFA</span>
                                                <div className="ticket-status">Disponible</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="next-button-container">
                                <button 
                                    className="next-button"
                                    onClick={handleNext}
                                    disabled={!canProceed()}
                                >
                                    Suivant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
				<Section7/>  
            </Layout>    
        </>        
    );
}