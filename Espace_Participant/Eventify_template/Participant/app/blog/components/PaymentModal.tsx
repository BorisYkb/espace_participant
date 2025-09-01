"use client"

import { useState, useEffect } from 'react'

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectPayment: (method: 'mobile_money' | 'counter') => void;
    totalAmount: number;
}

export default function PaymentModal({ isOpen, onClose, onSelectPayment, totalAmount }: PaymentModalProps) {
    const [selectedMethod, setSelectedMethod] = useState<'mobile_money' | 'counter' | null>(null);
    const [showCounterConfirmation, setShowCounterConfirmation] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setSelectedMethod(null);
            setShowCounterConfirmation(false);
        }
    }, [isOpen]);

    const handleValidate = () => {
        if (selectedMethod === 'counter') {
            setShowCounterConfirmation(true);
        } else if (selectedMethod) {
            onSelectPayment(selectedMethod);
        }
    };

    const handleCounterConfirmation = () => {
        setShowCounterConfirmation(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    backdrop-filter: blur(4px);
                }

                .modal-content {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 500px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
                    position: relative;
                    animation: modalAppear 0.3s ease-out;
                }

                @keyframes modalAppear {
                    from {
                        opacity: 0;
                        transform: scale(0.8) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                .close-btn {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #666;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .close-btn:hover {
                    background: #f0f0f0;
                    color: #333;
                }

                .modal-title {
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 10px;
                }

                .modal-subtitle {
                    text-align: center;
                    color: #666;
                    margin-bottom: 30px;
                }

                .payment-options {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    margin-bottom: 30px;
                }

                .payment-option {
                    display: flex;
                    align-items: center;
                    padding: 20px;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background: #f8f9fa;
                }

                .payment-option:hover {
                    border-color: #007bff;
                    background: #e7f3ff;
                }

                .payment-option.selected {
                    border-color: #007bff;
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    color: white;
                }

                .payment-radio {
                    margin-right: 15px;
                    width: 20px;
                    height: 20px;
                }

                .payment-info {
                    flex: 1;
                }

                .payment-title {
                    font-weight: 600;
                    font-size: 16px;
                    margin-bottom: 5px;
                }

                .payment-description {
                    font-size: 14px;
                    opacity: 0.8;
                }

                .payment-icon {
                    font-size: 28px;
                    margin-left: 15px;
                }

                .total-info {
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    text-align: center;
                    margin-bottom: 20px;
                    border: 1px solid #e9ecef;
                }

                .total-label {
                    color: #666;
                    margin-bottom: 5px;
                }

                .total-amount {
                    font-size: 20px;
                    font-weight: 700;
                    color: #28a745;
                }

                .button-container {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
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
                }

                .confirmation-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1001;
                }

                .confirmation-content {
                    background: white;
                    border-radius: 15px;
                    padding: 40px;
                    max-width: 400px;
                    text-align: center;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .confirmation-icon {
                    font-size: 48px;
                    color: #28a745;
                    margin-bottom: 20px;
                }

                .confirmation-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #333;
                    margin-bottom: 15px;
                }

                .confirmation-message {
                    color: #666;
                    line-height: 1.5;
                    margin-bottom: 25px;
                }

                .btn-ok {
                    background: linear-gradient(135deg, #007bff, #0056b3);
                    color: white;
                    padding: 12px 30px;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn-ok:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
                }
            `}</style>

            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>
                        ×
                    </button>

                    <h2 className="modal-title">Mode de paiement</h2>
                    <p className="modal-subtitle">
                        Choisissez comment vous souhaitez effectuer votre paiement
                    </p>

                    <div className="total-info">
                        <div className="total-label">Montant total à payer :</div>
                        <div className="total-amount">
                            {totalAmount === 0 ? 'Gratuit' : `${totalAmount.toLocaleString()} FCFA`}
                        </div>
                    </div>

                    <div className="payment-options">
                        <div 
                            className={`payment-option ${selectedMethod === 'mobile_money' ? 'selected' : ''}`}
                            onClick={() => setSelectedMethod('mobile_money')}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="mobile_money"
                                checked={selectedMethod === 'mobile_money'}
                                onChange={() => setSelectedMethod('mobile_money')}
                                className="payment-radio"
                            />
                            <div className="payment-info">
                                <div className="payment-title">Via Mobile Money</div>
                                <div className="payment-description">
                                    Payez directement avec votre portefeuille mobile
                                </div>
                            </div>
                            <div className="payment-icon">📱</div>
                        </div>

                        <div 
                            className={`payment-option ${selectedMethod === 'counter' ? 'selected' : ''}`}
                            onClick={() => setSelectedMethod('counter')}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="counter"
                                checked={selectedMethod === 'counter'}
                                onChange={() => setSelectedMethod('counter')}
                                className="payment-radio"
                            />
                            <div className="payment-info">
                                <div className="payment-title">Via le guichet de paiement</div>
                                <div className="payment-description">
                                    Payez sur place lors de l'événement
                                </div>
                            </div>
                            <div className="payment-icon">🏦</div>
                        </div>
                    </div>

                    <div className="button-container">
                        <button className="btn btn-cancel" onClick={onClose}>
                            Annuler
                        </button>
                        <button 
                            className="btn btn-validate" 
                            onClick={handleValidate}
                            disabled={!selectedMethod}
                        >
                            Valider
                        </button>
                    </div>
                </div>
            </div>

            {showCounterConfirmation && (
                <div className="confirmation-modal">
                    <div className="confirmation-content">
                        <div className="confirmation-icon">✅</div>
                        <h3 className="confirmation-title">Parfait !</h3>
                        <p className="confirmation-message">
                            Lors de l'événement rapprochez-vous d'une hôtesse qui vous guidera vers le guichet de paiement.<br/><br/>
                            Merci de préparer la monnaie.
                        </p>
                        <button className="btn-ok" onClick={handleCounterConfirmation}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}