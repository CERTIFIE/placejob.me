import { FiDollarSign, FiTarget, FiLogIn, FiUploadCloud, FiClock, FiBookmark, FiUserCheck, FiUserPlus } from "react-icons/fi";
import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Iscriviti e raccontaci di te",
        description: "Usa la tua mail o il tuo account social, carica il tuo CV (o crealo su PlaceJob) e inizia a costruire la tua nuova carriera lavorativa.",
        bullets: [
            {
                title: "Iscrizione rapida",
                description: "Usa la tua mail o il tuo account Google/Linkedin/Facebook.",
                icon: <FiLogIn size={26} />
            },
            {
                title: "Carica il tuo CV",
                description: "Sappiamo quanto è stressante dover creare un nuovo profilo, carica il tuo CV e sarà l'IA a fare il resto.",
                icon: <FiUploadCloud size={26} />
            },
            {
                title: "Trova il lavoro dei tuoi sogni",
                description: "L'IA di PlaceJob ti proporrà le offerte di lavoro più adatte a te, in base al tuo profilo e alle tue preferenze. Ti servono delle qualifiche specifiche? Nessun problema, PlaceJob ti proporrà i corsi di cui hai bisogno certificando le tue competenze tramite blockchain/NFT.",
                icon: <FiTarget size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "HR e imprese alla ricerca di talenti",
        description: "Trovare il candidato perfetto non è mai stato così facile. Con PlaceJob, le aziende possono pubblicare offerte di lavoro e trovare i talenti giusti in pochi clic.",
        bullets: [
            {
                title: "Tempo di assunzione ridotto",
                description: "Le inserzioni di lavoro vengono veicolate ai candidati migliori, riducendo i tempi di assunzione e massimizzando l'efficacia del processo di selezione.",
                icon: <FiClock size={26} />
            },
            {
                title: "Risparmio sui costi di assunzione",
                description: "Esternalizzare il processo di selezione è una soluzione comoda ma costosa, PlaceJob permette alle aziende di avere un rapporto diretto con chi ricerca un nuovo lavoro permettendo un risparmio fino al 20%.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Certificazione di competenze ed esperienze lavorative",
                description: "PlaceJob permette di certificare le competenze e le esperienze lavorative tramite blockchain/NFT, garantendo la veridicità delle informazioni fornite da chi offre lavoro e chi lo cerca.",
                icon: <FiBookmark size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Fai connessioni e costruisci la tua rete",
        description: "Ogni post è un valore aggiunto alla tua rete professionale, PlaceJob ti propone i collegamenti più simili al tuo profilo aumentando il valore delle tue connessioni.",
        bullets: [
            {
                title: "Collegamenti pertinenti",
                description: "Ricevi suggerimenti per collegamenti professionali basati sulle tue esperienze e competenze.",
                icon: <FiUserPlus size={26} />
            },
            {
                title: "Identità certificata",
                description: "Tramite l'uso dello spid è possibile certificare la propria identità, aumentando la fiducia tra i membri della community.",
                icon: <FiUserCheck size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]