import * as React from "react";

export interface ClassNames {
    modalEffect: string;
    modal: string;
    modalClose: string;
    modalBody: string;
    modalInner: string;
    modalContent: string;
    modalCloseBtn: string;
}

export interface Aria {
    openMessage: string;
    dismissBtnMessage: string;
}

export interface ConfirmationModalProps {
    /**
     * @default false
     */
    isOpen: boolean;
    onClose?: () => void;
    onConfirm?: (participationType: 'online' | 'physical') => void;
    /**
     * @default 300
     */
    animationSpeed: number;
    /**
     * @default
     *  {
     *       modal: 'confirmation-modal',
     *       modalClose: 'confirmation-modal-close',
     *       modalBody: 'confirmation-modal-body',
     *       modalInner: 'confirmation-modal-inner',
     *       modalContent: 'confirmation-modal-content',
     *       modalCloseBtn: 'confirmation-modal-close-btn'
     *   }
     */
    classNames?: ClassNames;
    /**
     * @default
     * {
     *      openMessage: 'Modal de confirmation ouvert';
     *      dismissBtnMessage: 'Fermer le modal en cliquant ici';
     *  }
     */
    aria?: Aria;
    title?: string;
    message?: string;
}

interface ConfirmationModalState {
    selectedOption: 'online' | 'physical' | null;
    isClosing: boolean;
}

class ConfirmationModal extends React.Component<ConfirmationModalProps, ConfirmationModalState> {
    private modalRef: React.RefObject<HTMLDivElement>;
    private previousActiveElement: Element | null = null;

    static defaultProps: Partial<ConfirmationModalProps> = {
        isOpen: false,
        classNames: {
            modalEffect: "confirmation-modal-effect",
            modal: "confirmation-modal",
            modalClose: "confirmation-modal-close",
            modalBody: "confirmation-modal-body",
            modalInner: "confirmation-modal-inner",
            modalContent: "confirmation-modal-content",
            modalCloseBtn: "confirmation-modal-close-btn"
        },
        animationSpeed: 300,
        aria: {
            openMessage: "Modal de confirmation ouvert",
            dismissBtnMessage: "Fermer le modal en cliquant ici"
        },
        title: "Confirmation de présence",
        message: "Comment souhaitez-vous participer à l'événement ?"
    };

    constructor(props: ConfirmationModalProps) {
        super(props);
        this.state = {
            selectedOption: null,
            isClosing: false
        };
        this.modalRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        if (this.props.isOpen) {
            this.openModal();
        }
    }

    componentDidUpdate(prevProps: ConfirmationModalProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            if (this.props.isOpen) {
                this.openModal();
            } else {
                this.closeModal();
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && this.props.isOpen) {
            this.handleClose();
        }
    };

    openModal = () => {
        this.previousActiveElement = document.activeElement;
        document.body.classList.add('modal-open');
        
        // Announce to screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = this.props.aria?.openMessage || '';
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (this.modalRef.current) {
                this.modalRef.current.focus();
            }
            document.body.removeChild(announcement);
        }, 100);
    };

    closeModal = () => {
        this.setState({ isClosing: true });
        document.body.classList.remove('modal-open');
        
        setTimeout(() => {
            this.setState({ 
                isClosing: false, 
                selectedOption: null 
            });
            
            if (this.previousActiveElement && typeof (this.previousActiveElement as any).focus === 'function') {
                (this.previousActiveElement as any).focus();
            }
        }, this.props.animationSpeed);
    };

    handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    handleOptionChange = (option: 'online' | 'physical') => {
        this.setState({ selectedOption: option });
    };

    handleConfirm = () => {
        if (this.state.selectedOption && this.props.onConfirm) {
            this.props.onConfirm(this.state.selectedOption);
        }
        this.handleClose();
    };

    handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            this.handleClose();
        }
    };

    render() {
        const { isOpen, classNames = ConfirmationModal.defaultProps.classNames!, aria = ConfirmationModal.defaultProps.aria!, title, message } = this.props;
        const { selectedOption, isClosing } = this.state;

        if (!isOpen && !isClosing) {
            return null;
        }

        return (
            <>
                <style jsx>{`
                    .confirmation-modal-effect {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1000;
                        visibility: ${isOpen ? 'visible' : 'hidden'};
                        opacity: ${isOpen ? 1 : 0};
                        transition: all ${this.props.animationSpeed}ms ease-in-out;
                        backdrop-filter: blur(4px);
                    }

                    .confirmation-modal {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 0, 0, 0.7));
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                        cursor: pointer;
                    }

                    .confirmation-modal-body {
                        position: relative;
                        background: linear-gradient(145deg, #ffffff, #f8f9fa);
                        border-radius: 20px;
                        max-width: 520px;
                        width: 100%;
                        max-height: 90vh;
                        overflow-y: auto;
                        box-shadow: 
                            0 25px 50px rgba(0, 0, 0, 0.25),
                            0 0 0 1px rgba(255, 255, 255, 0.05),
                            inset 0 1px 0 rgba(255, 255, 255, 0.9);
                        transform: ${isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)'};
                        transition: all ${this.props.animationSpeed}ms cubic-bezier(0.34, 1.56, 0.64, 1);
                        cursor: default;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }

                    .confirmation-modal-inner {
                        padding: 40px;
                    }

                    .confirmation-modal-close-btn {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        background: rgba(255, 255, 255, 0.9);
                        border: none;
                        font-size: 20px;
                        cursor: pointer;
                        color: #666;
                        width: 36px;
                        height: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        font-weight: 300;
                    }

                    .confirmation-modal-close-btn:hover {
                        background: #ff4757;
                        color: white;
                        transform: rotate(90deg) scale(1.1);
                        box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);
                    }

                    .modal-title {
                        margin: 0 0 12px 0;
                        font-size: 28px;
                        font-weight: 700;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-align: center;
                        letter-spacing: -0.5px;
                    }

                    .modal-subtitle {
                        text-align: center;
                        color: #8e44ad;
                        font-size: 14px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        margin-bottom: 20px;
                    }

                    .modal-message {
                        margin: 0 0 35px 0;
                        font-size: 16px;
                        color: #555;
                        text-align: center;
                        line-height: 1.6;
                        font-weight: 400;
                    }

                    .options-container {
                        margin: 30px 0;
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                    }

                    .option-item {
                        display: flex;
                        align-items: center;
                        padding: 20px;
                        border: 2px solid #e3e8f0;
                        border-radius: 16px;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        background: linear-gradient(145deg, #ffffff, #f8f9fa);
                        position: relative;
                        overflow: hidden;
                    }

                    .option-item::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }

                    .option-item:hover {
                        border-color: #667eea;
                        transform: translateY(-2px);
                        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
                    }

                    .option-item:hover::before {
                        opacity: 1;
                    }

                    .option-item.selected {
                        border-color: #667eea;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        transform: translateY(-1px);
                        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                    }

                    .option-item.selected .option-label,
                    .option-item.selected .option-description {
                        color: white;
                    }

                    .option-radio {
                        margin-right: 16px;
                        width: 22px;
                        height: 22px;
                        cursor: pointer;
                        position: relative;
                        z-index: 1;
                    }

                    .option-content {
                        flex: 1;
                        position: relative;
                        z-index: 1;
                    }

                    .option-label {
                        font-size: 18px;
                        font-weight: 600;
                        color: #333;
                        cursor: pointer;
                        margin-bottom: 4px;
                        display: block;
                    }

                    .option-description {
                        font-size: 14px;
                        color: #666;
                        line-height: 1.4;
                    }

                    .option-icon {
                        margin-left: 16px;
                        font-size: 24px;
                        opacity: 0.7;
                        position: relative;
                        z-index: 1;
                    }

                    .buttons-container {
                        display: flex;
                        gap: 16px;
                        justify-content: center;
                        margin-top: 40px;
                    }

                    .btn {
                        padding: 14px 28px;
                        border: none;
                        border-radius: 12px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        min-width: 130px;
                        position: relative;
                        overflow: hidden;
                    }

                    .btn::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                        transition: left 0.5s;
                    }

                    .btn:hover::before {
                        left: 100%;
                    }

                    .btn-cancel {
                        background: linear-gradient(135deg, #95a5a6, #7f8c8d);
                        color: white;
                        box-shadow: 0 4px 15px rgba(149, 165, 166, 0.3);
                    }

                    .btn-cancel:hover {
                        background: linear-gradient(135deg, #7f8c8d, #95a5a6);
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(149, 165, 166, 0.4);
                    }

                    .btn-confirm {
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                    }

                    .btn-confirm:hover:not(:disabled) {
                        background: linear-gradient(135deg, #764ba2, #667eea);
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
                    }

                    .btn-confirm:disabled {
                        background: linear-gradient(135deg, #bdc3c7, #95a5a6);
                        cursor: not-allowed;
                        transform: none;
                        box-shadow: 0 2px 8px rgba(189, 195, 199, 0.2);
                    }

                    .sr-only {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0, 0, 0, 0);
                        white-space: nowrap;
                        border: 0;
                    }

                    body.modal-open {
                        overflow: hidden;
                    }

                    @media (max-width: 576px) {
                        .confirmation-modal-inner {
                            padding: 24px;
                        }
                        
                        .modal-title {
                            font-size: 24px;
                        }
                        
                        .option-item {
                            padding: 16px;
                        }
                        
                        .buttons-container {
                            flex-direction: column;
                        }
                        
                        .btn {
                            width: 100%;
                        }
                    }
                `}</style>

                <div 
                    className={classNames.modalEffect}
                    onClick={this.handleBackdropClick}
                >
                    <div className={classNames.modal}>
                        <div 
                            ref={this.modalRef}
                            className={classNames.modalBody}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                            tabIndex={-1}
                        >
                            <button
                                className={classNames.modalCloseBtn}
                                onClick={this.handleClose}
                                aria-label={aria.dismissBtnMessage}
                                type="button"
                            >
                                ×
                            </button>
                            
                            <div className={classNames.modalInner}>
                                <div className="modal-subtitle">CONFIRMATION REQUISE</div>
                                <h2 id="modal-title" className="modal-title">
                                    {title}
                                </h2>
                                
                                <p className="modal-message">
                                    {message}
                                </p>
                                
                                <div className="options-container">
                                    <div 
                                        className={`option-item ${selectedOption === 'online' ? 'selected' : ''}`}
                                        onClick={() => this.handleOptionChange('online')}
                                    >
                                        <input
                                            type="radio"
                                            name="participation"
                                            value="online"
                                            checked={selectedOption === 'online'}
                                            onChange={() => this.handleOptionChange('online')}
                                            className="option-radio"
                                            id="option-online"
                                        />
                                        <div className="option-content">
                                            <label htmlFor="option-online" className="option-label">
                                                En ligne
                                            </label>
                                            <div className="option-description">
                                                Participez à distance via notre plateforme
                                            </div>
                                        </div>
                                        <div className="option-icon">💻</div>
                                    </div>
                                    
                                    <div 
                                        className={`option-item ${selectedOption === 'physical' ? 'selected' : ''}`}
                                        onClick={() => this.handleOptionChange('physical')}
                                    >
                                        <input
                                            type="radio"
                                            name="participation"
                                            value="physical"
                                            checked={selectedOption === 'physical'}
                                            onChange={() => this.handleOptionChange('physical')}
                                            className="option-radio"
                                            id="option-physical"
                                        />
                                        <div className="option-content">
                                            <label htmlFor="option-physical" className="option-label">
                                                En présentiel
                                            </label>
                                            <div className="option-description">
                                                Rejoignez-nous sur place à ABIDJAN MALL
                                            </div>
                                        </div>
                                        <div className="option-icon">🏢</div>
                                    </div>
                                </div>
                                
                                <div className="buttons-container">
                                    <button
                                        type="button"
                                        className="btn btn-cancel"
                                        onClick={this.handleClose}
                                    >
                                        Annuler
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-confirm"
                                        onClick={this.handleConfirm}
                                        disabled={!selectedOption}
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ConfirmationModal;