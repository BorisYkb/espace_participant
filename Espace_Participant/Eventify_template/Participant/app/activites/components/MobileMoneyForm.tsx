"use client"

import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from 'next/link';

interface MobileMoneyFormProps {
    totalAmount: number;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function MobileMoneyForm({ totalAmount, onSubmit, onCancel }: MobileMoneyFormProps) {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [senderAccount, setSenderAccount] = useState('');
    const [recipientAccount, setRecipientAccount] = useState('');
    const [showValidationModal, setShowValidationModal] = useState(false);

    const handleSubmit = () => {
        if (paymentMethod && senderAccount && recipientAccount) {
            setShowValidationModal(true);
            
            // Simuler un délai de traitement puis fermer le modal
            setTimeout(() => {
                setShowValidationModal(false);
                onSubmit();
            }, 3000);
        }
    };

    const isFormValid = paymentMethod && senderAccount && recipientAccount;

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
                    <style jsx>{`
                        .mobile-money-section {
                            margin-top: 30px;
                            padding: 25px;
                            background: #f8f9fa;
                            border-radius: 12px;
                            border: 2px solid #e9ecef;
                            animation: slideDown 0.3s ease-out;
                        }
                    
                        @keyframes slideDown {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    
                        .section-title {
                            font-size: 18px;
                            font-weight: 600;
                            color: #333;
                            margin-bottom: 20px;
                            text-align: center;
                            padding-bottom: 10px;
                            border-bottom: 2px solid #007bff;
                        }
                    
                        .form-group {
                            margin-bottom: 20px;
                        }
                    
                        .form-label {
                            display: block;
                            font-weight: 600;
                            color: #333;
                            margin-bottom: 8px;
                        }
                    
                        .form-select, .form-input {
                            width: 100%;
                            padding: 12px;
                            border: 2px solid #e9ecef;
                            border-radius: 8px;
                            font-size: 16px;
                            transition: all 0.3s ease;
                            background: white;
                        }
                    
                        .form-select:focus, .form-input:focus {
                            outline: none;
                            border-color: #007bff;
                            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
                        }
                    
                        .payment-methods {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                            gap: 10px;
                            margin-bottom: 15px;
                        }
                    
                        .payment-method-option {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            padding: 15px 10px;
                            border: 2px solid #e9ecef;
                            border-radius: 8px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            background: white;
                        }
                    
                        .payment-method-option:hover {
                            border-color: #007bff;
                            background: #e7f3ff;
                        }
                    
                        .payment-method-option.selected {
                            border-color: #007bff;
                            background: linear-gradient(135deg, #007bff, #0056b3);
                            color: white;
                        }
                    
                        .payment-method-logo {
                            font-size: 24px;
                            margin-bottom: 8px;
                        }
                    
                        .payment-method-name {
                            font-size: 12px;
                            font-weight: 600;
                            text-align: center;
                        }
                    
                        .amount-display {
                            background: white;
                            padding: 15px;
                            border-radius: 8px;
                            text-align: center;
                            margin-bottom: 20px;
                            border: 1px solid #e9ecef;
                        }
                    
                        .amount-label {
                            color: #666;
                            font-size: 14px;
                            margin-bottom: 5px;
                        }
                    
                        .amount-value {
                            font-size: 20px;
                            font-weight: 700;
                            color: #28a745;
                        }
                    
                        .button-container {
                            display: flex;
                            gap: 15px;
                            justify-content: center;
                            margin-top: 25px;
                        }
                    
                        .btn {
                            padding: 12px 25px;
                            border: none;
                            border-radius: 8px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            min-width: 120px;
                        }
                    
                        .btn-cancel {
                            background: #6c757d;
                            color: white;
                        }
                    
                        .btn-cancel:hover {
                            background: #5a6268;
                            transform: translateY(-1px);
                        }
                    
                        .btn-validate {
                            background: linear-gradient(135deg, #28a745, #20a83a);
                            color: white;
                        }
                    
                        .btn-validate:hover:not(:disabled) {
                            background: linear-gradient(135deg, #20a83a, #28a745);
                            transform: translateY(-1px);
                        }
                    
                        .btn-validate:disabled {
                            background: #ccc;
                            cursor: not-allowed;
                            transform: none;
                        }
                    
                        .validation-modal {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.8);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            z-index: 1002;
                        }
                    
                        .validation-content {
                            background: white;
                            border-radius: 20px;
                            padding: 40px;
                            text-align: center;
                            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                            max-width: 400px;
                            width: 90%;
                        }
                    
                        .loading-spinner {
                            width: 60px;
                            height: 60px;
                            border: 4px solid #e9ecef;
                            border-top: 4px solid #28a745;
                            border-radius: 50%;
                            animation: spin 1s linear infinite;
                            margin: 0 auto 20px;
                        }
                    
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    
                        .validation-text {
                            color: #333;
                            font-size: 16px;
                            font-weight: 500;
                        }
                    
                        .success-icon {
                            font-size: 60px;
                            color: #28a745;
                            margin-bottom: 20px;
                            animation: bounce 0.6s ease-in-out;
                        }
                    
                        @keyframes bounce {
                            0%, 20%, 50%, 80%, 100% {
                                transform: translateY(0);
                            }
                            40% {
                                transform: translateY(-10px);
                            }
                            60% {
                                transform: translateY(-5px);
                            }
                        }
                    
                        @media (max-width: 576px) {
                            .payment-methods {
                                grid-template-columns: repeat(2, 1fr);
                            }

                            .button-container {
                                flex-direction: column;
                            }

                            .btn {
                                width: 100%;
                            }
                        }
                    `}</style>

                    <div className="mobile-money-section">
                        <h3 className="section-title">Informations du mode de paiement</h3>
                    
                        <div className="amount-display">
                            <div className="amount-label">Montant à payer</div>
                            <div className="amount-value">
                                {totalAmount.toLocaleString()} FCFA
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <label className="form-label">Choisir un mode de paiement *</label>
                            <div className="payment-methods">
                                <div 
                                    className={`payment-method-option ${paymentMethod === 'MTN' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('MTN')}
                                >
                                    <div className="payment-method-logo">📱</div>
                                    <div className="payment-method-name">MTN</div>
                                </div>
                                <div 
                                    className={`payment-method-option ${paymentMethod === 'MOOV' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('MOOV')}
                                >
                                    <div className="payment-method-logo">💳</div>
                                    <div className="payment-method-name">MOOV</div>
                                </div>
                                <div 
                                    className={`payment-method-option ${paymentMethod === 'ORANGE' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('ORANGE')}
                                >
                                    <div className="payment-method-logo">🟠</div>
                                    <div className="payment-method-name">ORANGE</div>
                                </div>
                                <div 
                                    className={`payment-method-option ${paymentMethod === 'WAVE' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('WAVE')}
                                >
                                    <div className="payment-method-logo">🌊</div>
                                    <div className="payment-method-name">WAVE</div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="sender-account">
                                Compte émetteur *
                            </label>
                            <input
                                type="text"
                                id="sender-account"
                                className="form-input"
                                placeholder="Numéro de téléphone"
                                value={senderAccount}
                                onChange={(e) => setSenderAccount(e.target.value)}
                            />
                        </div>
                    
                        <div className="form-group">
                            <label className="form-label" htmlFor="recipient-account">
                                Compte destinataire *
                            </label>
                            <input
                                type="text"
                                id="recipient-account"
                                className="form-input"
                                placeholder="Numéro de téléphone"
                                value={recipientAccount}
                                onChange={(e) => setRecipientAccount(e.target.value)}
                            />
                        </div>
                    
                        <div className="button-container">
                            <button className="btn btn-cancel" onClick={onCancel}>
                                Annuler
                            </button>
                            <button 
                                className="btn btn-validate" 
                                onClick={handleSubmit}
                                disabled={!isFormValid}
                            >
                                Valider
                            </button>
                        </div>
                    </div>
                    
                    {showValidationModal && (
                        <div className="validation-modal">
                            <div className="validation-content">
                                <div className="loading-spinner"></div>
                                <div className="validation-text">
                                    Traitement du paiement en cours...
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Layout>    
        </>
    );
}