import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'User',
        type: 'user',
        price: {
            always: {
                period: 'per sempre',
                price: 'Gratuito',
            }
        },
        features: [
            'IA integrata per creazione profilo e ricerca lavoro',
            'Social network per connessioni professionali',
            'Creazione automatico del CV con template Europass',
            'Accesso a corsi di formazione',
            'Certificazione tramite blockchain/NFT',
            'Supporto via email o tramite app'
        ],
    },
    {
        name: 'HR manager',
        type: 'corporate',
        price: {
            month: {
                period: 'mese',
                price: 29.59,
            },
            year: {
                period: 'anno',
                price: 299.00,
            }
        },
        features: [
            'IA integrata per ricerca candidati',
            'Fino a 10 aziende in selezione',
            'Messaggistica diretta con candidati',
            'Stampa dei CV in PDF Europass dei candidati',
            'Reportistica avanzata',
            'Supporto via email o tramite app',
        ],
    },
    {
        name: 'Courses',
        type: 'corporate',
        price: {
            month: {
                period: 'mese',
                price: 99.59,
            },
            year: {
                period: 'anno',
                price: 999.00,
            }
        },
        features: [
            'Integrazione con sistemi esistenti',
            'Creazione corsi di formazione',
            'Certificazione tramite blockchain/NFT',
            'Accesso a reportistica avanzata',
            'Supporto dedicato 24/7',
        ],
    },
    {
        name: 'HR Organization',
        type: 'corporate',
        price: {
            month: {
                period: 'mese',
                price: 99.59,
            },
            year: {
                period: 'anno',
                price: 999.00,
            }
        },
        features: [
            'IA integrata per ricerca candidati',
            'Fino a 10 posizioni aperte in contemporanea',
            'Messaggistica diretta con candidati',
            'Stampa dei CV in PDF Europass dei candidati',
            'Reportistica avanzata',
            'Supporto dedicato 24/7',
        ],
    },
    {
        name: 'Enterprise',
        type: 'corporate',
        price: {
            custom: {
                period: 'year',
                price: 'custom',
            }
        },
        features: [
            'IA integrata per ricerca candidati',
            'Fino a 10 posizioni aperte in contemporanea',
            'Messaggistica diretta con candidati',
            'Stampa dei CV in PDF Europass dei candidati',
            'Reportistica avanzata',
            'Supporto dedicato 24/7',
            'Integrazione con sistemi HR esistenti',
        ],
    },
]