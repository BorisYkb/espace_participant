"use client"

import { useState } from 'react'
import PaymentModal from './components/PaymentModal'
import MobileMoneyForm from './components/MobileMoneyForm'
import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import Section7 from '@/components/sections/home1/section7';

interface SelectedActivity {
    activityId: string;
    activityName: string;
    ticketType: 'standard' | 'vip' | 'vvip';
    price: number;
    startTime: string;
    endTime: string;
}

interface ActivitySummaryProps {
    selectedActivities: SelectedActivity[];
    onBack: () => void;
}

export default function ActivitySummary({ selectedActivities, onBack }: ActivitySummaryProps) {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'mobile_money' | 'counter' | null>(null);
    const [showMobileMoneyForm, setShowMobileMoneyForm] = useState(false);

    const totalAmount = selectedActivities.reduce((sum, activity) => sum + activity.price, 0);

    const getTicketTypeLabel = (type: string) => {
        switch (type) {
            case 'standard': return 'Standard';
            case 'vip': return 'VIP';
            case 'vvip': return 'VVIP';
            default: return type;
        }
    };

    const handleValidate = () => {
        setShowPaymentModal(true);
    };

    const handlePaymentMethodSelect = (method: 'mobile_money' | 'counter') => {
        setPaymentMethod(method);
        setShowPaymentModal(false);
        
        if (method === 'mobile_money') {
            setShowMobileMoneyForm(true);
        }
    };

    const handleMobileMoneySubmit = () => {
        setShowMobileMoneyForm(false);
        // Ici on pourrait ajouter la logique de traitement du paiement
    };

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div className=''>
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
                    <div className="activity-summary mt-5 mb-5">
                        <style jsx>{`
                            .activity-summary {
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
                        
                            .summary-container {
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
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding: 15px;
                                border: 1px solid #e9ecef;
                                border-radius: 8px;
                                margin-bottom: 10px;
                                background: #f8f9fa;
                            }
                        
                            .activity-details {
                                flex: 1;
                            }
                        
                            .activity-name {
                                font-weight: 600;
                                color: #333;
                                margin-bottom: 5px;
                            }
                        
                            .activity-meta {
                                display: flex;
                                gap: 15px;
                                color: #666;
                                font-size: 14px;
                            }
                        
                            .activity-price {
                                font-weight: 600;
                                color: #007bff;
                                font-size: 16px;
                            }
                        
                            .total-section {
                                border-top: 2px solid #e9ecef;
                                margin-top: 20px;
                                padding-top: 20px;
                            }
                        
                            .total-row {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                font-size: 20px;
                                font-weight: 700;
                                color: #333;
                            }
                        
                            .total-amount {
                                color: #28a745;
                            }
                        
                            .button-container {
                                display: flex;
                                gap: 15px;
                                justify-content: center;
                                margin-top: 30px;
                            }
                        
                            .btn {
                                padding: 15px 30px;
                                border: none;
                                border-radius: 8px;
                                font-size: 16px;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.3s ease;
                                min-width: 150px;
                            }
                        
                            .btn-secondary {
                                background: linear-gradient(135deg, #6c757d, #5a6268);
                                color: white;
                                box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
                            }
                        
                            .btn-secondary:hover {
                                transform: translateY(-2px);
                                box-shadow: 0 6px 20px rgba(108, 117, 125, 0.4);
                            }
                        
                            .btn-primary {
                                background: linear-gradient(135deg, #28a745, #20a83a);
                                color: white;
                                box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
                            }
                        
                            .btn-primary:hover {
                                transform: translateY(-2px);
                                box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
                            }
                        
                            .ticket-type-badge {
                                background: #007bff;
                                color: white;
                                padding: 2px 8px;
                                border-radius: 12px;
                                font-size: 12px;
                                font-weight: 500;
                            }
                        
                            .ticket-type-badge.vip {
                                background: #ffc107;
                                color: #333;
                            }
                        
                            .ticket-type-badge.vvip {
                                background: #dc3545;
                                color: white;
                            }
                        `}</style>

                        <div className="heading2">
                            <h1>Résumé de vos choix</h1>
                            <div className='space8'/>
                            <p>Vérifiez vos sélections avant de procéder au paiement</p>
                            <div className='space32'/>
                        </div>
                        
                        <div className="summary-container">
                            <div className="section-title">
                                Activités sélectionnées
                            </div>
                        
                            {selectedActivities.map((activity, index) => (
                                <div key={index} className="activity-item">
                                    <div className="activity-details">
                                        <div className="activity-name">{activity.activityName}</div>
                                        <div className="activity-meta">
                                            <span>{activity.startTime} - {activity.endTime}</span>
                                            <span className={`ticket-type-badge ${activity.ticketType}`}>
                                                {getTicketTypeLabel(activity.ticketType)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="activity-price">
                                        {activity.price === 0 ? 'Gratuit' : `${activity.price.toLocaleString()} FCFA`}
                                    </div>
                                </div>
                            ))}

                            <div className="total-section">
                                <div className="total-row">
                                    <span>Total à payer :</span>
                                    <span className="total-amount">
                                        {totalAmount === 0 ? 'Gratuit' : `${totalAmount.toLocaleString()} FCFA`}
                                    </span>
                                </div>
                            </div>
                        
                            <div className="button-container">
                                <button className="btn btn-secondary" onClick={onBack}>
                                    Modifier
                                </button>
                                <button className="btn btn-primary" onClick={handleValidate}>
                                    Valider
                                </button>
                            </div>
                        
                            {showMobileMoneyForm && (
                                <MobileMoneyForm 
                                    totalAmount={totalAmount}
                                    onSubmit={handleMobileMoneySubmit}
                                    onCancel={() => setShowMobileMoneyForm(false)}
                                />
                            )}
                        </div>
                        
                        <PaymentModal
                            isOpen={showPaymentModal}
                            onClose={() => setShowPaymentModal(false)}
                            onSelectPayment={handlePaymentMethodSelect}
                            totalAmount={totalAmount}
                        />
                    </div>
                </div>
                <Section7/>
            </Layout>
        </>        
    );
}