const viaggi = [
  {
    id_viaggio: 1,
    nome_viaggio: 'Tour in Toscana',
    destinazione: 'Toscana, Italia',
    tipologia: 'Culturale',
    accompagnatore: 'Giovanni Rossi',
    immagine: 'toscana.webp',
    descrizione: 'Un viaggio alla scoperta delle meraviglie artistiche e storiche della Toscana. Visiteremo città come Firenze, Siena e Pisa.',
    data_inizio: '2025-03-01',
    data_fine: '2025-03-07',
    partecipanti: [
      { id_partecipante: 'P1', nome: 'Luca', cognome: 'Bianchi', telefono: '3201234567', email: 'luca.bianchi@example.com', codice_fiscale: 'BNCLCU85M01H501A' },
      { id_partecipante: 'P2', nome: 'Maria', cognome: 'Verdi', telefono: '3287654321', email: 'maria.verdi@example.com', codice_fiscale: 'VRDMRA92F50A662D' },
      { id_partecipante: 'P3', nome: 'Giulia', cognome: 'Ferrari', telefono: '3381234567', email: 'giulia.ferrari@example.com', codice_fiscale: 'FRRGLL94D45Z404H' },
      { id_partecipante: 'P4', nome: 'Marco', cognome: 'Esposito', telefono: '3459876543', email: 'marco.esposito@example.com', codice_fiscale: 'SPTMRR81S10L219F' },
      { id_partecipante: 'P5', nome: 'Sofia', cognome: 'Russo', telefono: '3476543210', email: 'sofia.russo@example.com', codice_fiscale: 'RSSFSA93T54L219G' },
      { id_partecipante: 'P6', nome: 'Antonio', cognome: 'Ricci', telefono: '3311122334', email: 'antonio.ricci@example.com', codice_fiscale: 'RCCNTN85C12F839B' },
      { id_partecipante: 'P7', nome: 'Francesca', cognome: 'Giordano', telefono: '3425567890', email: 'francesca.giordano@example.com', codice_fiscale: 'GRDFNC80F62H501B' },
      { id_partecipante: 'P8', nome: 'Davide', cognome: 'Lombardi', telefono: '3386547890', email: 'davide.lombardi@example.com', codice_fiscale: 'LMBDVD85D12L219J' },
      { id_partecipante: 'P9', nome: 'Elena', cognome: 'Conti', telefono: '3309988776', email: 'elena.conti@example.com', codice_fiscale: 'CNTLNA91M01H501X' },
      { id_partecipante: 'P10', nome: 'Francesco', cognome: 'Mancini', telefono: '3394455667', email: 'francesco.mancini@example.com', codice_fiscale: 'MNCFNC85B12Z404P' }
    ]
  },

  {
    id_viaggio: 2,
    nome_viaggio: 'Avventura in Giappone',
    destinazione: 'Giappone',
    tipologia: 'Avventura',
    accompagnatore: 'Claudia Moretti',
    immagine: 'giappone.webp',
    descrizione: 'Un viaggio entusiasmante attraverso le principali città giapponesi, tra cui Tokyo, Kyoto e Osaka. Scopri la cultura, la natura e la cucina giapponese.',
    data_inizio: '2025-05-10',
    data_fine: '2025-05-20',
    partecipanti: [
      { id_partecipante: 'P11', nome: 'Alessandro', cognome: 'Martini', telefono: '3332221111', email: 'alessandro.martini@example.com', codice_fiscale: 'MRTLSN85H01A662C' },
      { id_partecipante: 'P12', nome: 'Simona', cognome: 'Rossi', telefono: '3302233445', email: 'simona.rossi@example.com', codice_fiscale: 'RSSMNS85B44Z202D' },
      { id_partecipante: 'P13', nome: 'Vincenzo', cognome: 'Gallo', telefono: '3475647382', email: 'vincenzo.gallo@example.com', codice_fiscale: 'GLLVNC87R31F205E' },
      { id_partecipante: 'P14', nome: 'Lorenzo', cognome: 'Miele', telefono: '3389087766', email: 'lorenzo.miele@example.com', codice_fiscale: 'MLLNRZ82P14Z404D' },
      { id_partecipante: 'P15', nome: 'Irene', cognome: 'Lombardi', telefono: '3381234567', email: 'irene.lombardi@example.com', codice_fiscale: 'LMBIRE94M41A462R' },
      { id_partecipante: 'P16', nome: 'Giovanna', cognome: 'Pugliese', telefono: '3201122334', email: 'giovanna.pugliese@example.com', codice_fiscale: 'PGLGNN92B53F205F' },
      { id_partecipante: 'P17', nome: 'Raffaele', cognome: 'Ferrara', telefono: '3312334455', email: 'raffaele.ferrara@example.com', codice_fiscale: 'FRRRFL82T16G666T' },
      { id_partecipante: 'P18', nome: 'Michele', cognome: 'Bianchi', telefono: '3294455667', email: 'michele.bianchi@example.com', codice_fiscale: 'BNCMHL85P01F839M' },
      { id_partecipante: 'P19', nome: 'Barbara', cognome: 'Perri', telefono: '3387766554', email: 'barbara.perri@example.com', codice_fiscale: 'PRRBRB90R41H501T' },
      { id_partecipante: 'P20', nome: 'Davide', cognome: 'Caruso', telefono: '3403344455', email: 'davide.caruso@example.com', codice_fiscale: 'CRSDVD78S41A279G' }
    ]
  },

  {
    id_viaggio: 3,
    nome_viaggio: 'Relax alle Maldive',
    destinazione: 'Maldive',
    tipologia: 'Relax',
    accompagnatore: 'Luca Giordano',
    immagine: 'maldive.jpg',
    descrizione: 'Un viaggio da sogno alle Maldive, per godersi il mare cristallino, le spiagge bianche e il relax assoluto.',
    data_inizio: '2025-07-01',
    data_fine: '2025-07-10',
    partecipanti: [
      { id_partecipante: 'P21', nome: 'Sara', cognome: 'Martini', telefono: '3456547890', email: 'sara.martini@example.com', codice_fiscale: 'MRTSRA92P56G678X' },
      { id_partecipante: 'P22', nome: 'Giorgio', cognome: 'Alessandro', telefono: '3216549870', email: 'giorgio.alessandro@example.com', codice_fiscale: 'ALSGRG85H11Z905E' },
      { id_partecipante: 'P23', nome: 'Federica', cognome: 'Lombardo', telefono: '3328897766', email: 'federica.lombardo@example.com', codice_fiscale: 'LMBFRC89D52S319B' },
      { id_partecipante: 'P24', nome: 'Paolo', cognome: 'Rossi', telefono: '3305566778', email: 'paolo.rossi@example.com', codice_fiscale: 'RSSPLP78G41B083C' },
      { id_partecipante: 'P25', nome: 'Giuseppe', cognome: 'Perri', telefono: '3389988776', email: 'giuseppe.perri@example.com', codice_fiscale: 'PRRGSN87P43X205F' },
      { id_partecipante: 'P26', nome: 'Alessandra', cognome: 'Ricci', telefono: '3206677889', email: 'alessandra.ricci@example.com', codice_fiscale: 'RCCLSN81H21G478K' },
      { id_partecipante: 'P27', nome: 'Luca', cognome: 'Ferraro', telefono: '3391122334', email: 'luca.ferraro@example.com', codice_fiscale: 'FRRLCA85F27P213L' },
      { id_partecipante: 'P28', nome: 'Marta', cognome: 'Giordano', telefono: '3383344556', email: 'marta.giordano@example.com', codice_fiscale: 'GRDMRT90P62Y499M' },
      { id_partecipante: 'P29', nome: 'Antonio', cognome: 'Giovannini', telefono: '3312288776', email: 'antonio.giovannini@example.com', codice_fiscale: 'GVNNTN82A12B830E' },
      { id_partecipante: 'P30', nome: 'Simone', cognome: 'Vitali', telefono: '3322244668', email: 'simone.vitali@example.com', codice_fiscale: 'VTLMSM84C07L719V' }
    ]
  },
  {
    id_viaggio: 4,
    nome_viaggio: 'Safari in Kenya',
    destinazione: 'Kenya',
    tipologia: 'Avventura',
    accompagnatore: 'Francesca Verdi',
    immagine: 'kenya.jpeg',
    descrizione: 'Un emozionante safari nel cuore dell\'Africa, alla scoperta degli animali selvaggi e delle bellezze naturali del Kenya. Visita il Parco Nazionale del Masai Mara e il Lago Nakuru.',
    data_inizio: '2025-06-15',
    data_fine: '2025-06-25',
    partecipanti: [
      { id_partecipante: 'P31', nome: 'Giulia', cognome: 'Pastore', telefono: '3382212333', email: 'giulia.pastore@example.com', codice_fiscale: 'PSTRGL92C41Z404W' },
      { id_partecipante: 'P32', nome: 'Antonio', cognome: 'De Luca', telefono: '3334455667', email: 'antonio.deluca@example.com', codice_fiscale: 'DLCTNN85T01F839R' },
      { id_partecipante: 'P33', nome: 'Luca', cognome: 'Romano', telefono: '3381234567', email: 'luca.romano@example.com', codice_fiscale: 'RMNLCA84M12B913B' },
      { id_partecipante: 'P34', nome: 'Paola', cognome: 'Marini', telefono: '3401122334', email: 'paola.marini@example.com', codice_fiscale: 'MRNPPL92B40H501Q' },
      { id_partecipante: 'P35', nome: 'Simone', cognome: 'Sanna', telefono: '3275647382', email: 'simone.sanna@example.com', codice_fiscale: 'SNNMNE81T24X205M' },
      { id_partecipante: 'P36', nome: 'Riccardo', cognome: 'Bianchi', telefono: '3382345678', email: 'riccardo.bianchi@example.com', codice_fiscale: 'BCHRCD82B12D206W' },
      { id_partecipante: 'P37', nome: 'Elisa', cognome: 'Vitali', telefono: '3394455667', email: 'elisa.vitali@example.com', codice_fiscale: 'VTLESA85M10H501P' }
    ]
  },

  {
    id_viaggio: 5,
    nome_viaggio: 'Esplorazione dell\'Islanda',
    destinazione: 'Islanda',
    tipologia: 'Avventura',
    accompagnatore: 'Elena Neri',
    immagine: 'islanda.jpeg',
    descrizione: 'Un viaggio indimenticabile alla scoperta dei paesaggi mozzafiato dell\'Islanda, tra geyser, cascate, vulcani e terme naturali.',
    data_inizio: '2025-08-05',
    data_fine: '2025-08-12',
    partecipanti: [
      { id_partecipante: 'P36', nome: 'Martina', cognome: 'Galli', telefono: '3301122334', email: 'martina.galli@example.com', codice_fiscale: 'GLLMTR94R43Z404F' },
      { id_partecipante: 'P37', nome: 'Marco', cognome: 'Bernardi', telefono: '3339876543', email: 'marco.bernardi@example.com', codice_fiscale: 'BRNMRC91F01A123D' },
      { id_partecipante: 'P38', nome: 'Francesco', cognome: 'De Santis', telefono: '3203344556', email: 'francesco.desantis@example.com', codice_fiscale: 'DSNFRN85L12D175H' },
      { id_partecipante: 'P39', nome: 'Sara', cognome: 'Corsi', telefono: '3271122334', email: 'sara.corsi@example.com', codice_fiscale: 'CRSSRA80T60G888H' },
      { id_partecipante: 'P40', nome: 'Giovanni', cognome: 'Fabbri', telefono: '3385566778', email: 'giovanni.fabbri@example.com', codice_fiscale: 'FBBGNN93L10G674K' },
      { id_partecipante: 'P41', nome: 'Luca', cognome: 'Marini', telefono: '3332233445', email: 'luca.marini@example.com', codice_fiscale: 'MRNLCA81P16D405E' },
      { id_partecipante: 'P42', nome: 'Alessandra', cognome: 'Rossi', telefono: '3275566778', email: 'alessandra.rossi@example.com', codice_fiscale: 'RSSLSS92C50H123F' }
    ]
  },

  {
    id_viaggio: 6,
    nome_viaggio: 'Crociere nel Mediterraneo',
    destinazione: 'Mediterraneo',
    tipologia: 'Relax',
    accompagnatore: 'Marco Ferretti',
    immagine: 'mediterraneo.jpeg',
    descrizione: 'Una crociera rilassante nel Mediterraneo, con tappe in luoghi splendidi come la Grecia, la Spagna e le isole Baleari. Goditi il mare, la cucina locale e la tranquillità.',
    data_inizio: '2025-09-01',
    data_fine: '2025-09-10',
    partecipanti: [
      { id_partecipante: 'P41', nome: 'Giorgia', cognome: 'Neri', telefono: '3286677889', email: 'giorgia.neri@example.com', codice_fiscale: 'NRIGRG91B41F205P' },
      { id_partecipante: 'P42', nome: 'Andrea', cognome: 'Ricci', telefono: '3345566778', email: 'andrea.ricci@example.com', codice_fiscale: 'RCCNDR85H01B412C' },
      { id_partecipante: 'P43', nome: 'Lorenzo', cognome: 'Franco', telefono: '3358899001', email: 'lorenzo.franco@example.com', codice_fiscale: 'FNCNZN87R12Z404T' },
      { id_partecipante: 'P44', nome: 'Marta', cognome: 'Vitali', telefono: '3334455667', email: 'marta.vitali@example.com', codice_fiscale: 'VTLMRT89A12F839P' },
      { id_partecipante: 'P45', nome: 'Alessio', cognome: 'Bassi', telefono: '3381122334', email: 'alessio.bassi@example.com', codice_fiscale: 'BSSLSS92B41G913P' },
      { id_partecipante: 'P46', nome: 'Francesca', cognome: 'Grassi', telefono: '3382233445', email: 'francesca.grassi@example.com', codice_fiscale: 'GRSFNC81H29Z614N' },
      { id_partecipante: 'P47', nome: 'Giulia', cognome: 'Giordano', telefono: '3275566778', email: 'giulia.giordano@example.com', codice_fiscale: 'GRDGLI84L19G590R' }
    ]
  },

  {
    id_viaggio: 7,
    nome_viaggio: 'Esplorazione delle Galapagos',
    destinazione: 'Galapagos',
    tipologia: 'Avventura',
    accompagnatore: 'Luca Bellini',
    immagine: 'galapagos.jpeg',
    descrizione: 'Un viaggio unico nell\'arcipelago delle Galapagos, tra flora e fauna uniche al mondo. Scopri la biodiversità e le spiagge incontaminate di questo paradiso terrestre.',
    data_inizio: '2025-10-10',
    data_fine: '2025-10-20',
    partecipanti: [
      { id_partecipante: 'P48', nome: 'Carla', cognome: 'Toni', telefono: '3291122334', email: 'carla.toni@example.com', codice_fiscale: 'TNICRL85P12F839M' },
      { id_partecipante: 'P49', nome: 'Giovanni', cognome: 'Barbieri', telefono: '3382233445', email: 'giovanni.barbieri@example.com', codice_fiscale: 'BRBGNN81R23H739X' },
      { id_partecipante: 'P50', nome: 'Federica', cognome: 'De Luca', telefono: '3334455667', email: 'federica.deluca@example.com', codice_fiscale: 'DLCFDR88C11Z404P' },
      { id_partecipante: 'P51', nome: 'Alessandro', cognome: 'Ferrari', telefono: '3272233445', email: 'alessandro.ferrari@example.com', codice_fiscale: 'FRRLND92B40F705X' },
      { id_partecipante: 'P52', nome: 'Sara', cognome: 'Piazza', telefono: '3203344556', email: 'sara.piazza@example.com', codice_fiscale: 'PZZSRA86A50L219C' },
      { id_partecipante: 'P53', nome: 'Riccardo', cognome: 'Petti', telefono: '3385566778', email: 'riccardo.petti@example.com', codice_fiscale: 'PTTRCD83B18F204G' }
    ]
  }
];

export default viaggi;


