// RADARES SINCRO — PORTUGAL COMPLETO
// Fonte: ANSR radaresavista.pt (agosto 2025) — 123 LCV oficiais
// Campo 'bearing': direção em graus (0=Norte,90=Este,180=Sul,270=Oeste) para a qual o radar aponta
// Um alerta só dispara se o utilizador estiver a conduzir NA direção do radar (±60°)
// 'ambos': true = radar ativo nos dois sentidos (não filtra direção)

const RADARS = [

// ══════════════════════════════
// AVEIRO (7 radares)
// ══════════════════════════════
{name:"A1 — Mealhada/Anadia (N→S) VM",road:"A1 km 211.9-217.4 · Mealhada",lat:40.3720,lng:-8.4510,limit:120,type:"VM",dist:"Portugal",bearing:180,ambos:false},
{name:"A25 — Águeda (E→O) VM",road:"A25 km 37.6-42.5 · Águeda",lat:40.5840,lng:-8.3220,limit:100,type:"VM",dist:"Portugal",bearing:270,ambos:false},
{name:"A29 — Espinho (S→N)",road:"A29 km 37.3 · Anta e Guetim, Espinho",lat:41.0055,lng:-8.6420,limit:80,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"EN223 — Feira (N→S)",road:"EN223 km 18.8 · Sanfins, Sta. Maria da Feira",lat:40.9180,lng:-8.5870,limit:70,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"IC2 — Águeda (S→N)",road:"IC2 km 239.0 · Trofa, Águeda",lat:40.5750,lng:-8.4580,limit:90,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"IC2 — Oliveira de Azeméis VM",road:"IC2 km 264.4-266.8 · Oliveira de Azeméis",lat:40.8500,lng:-8.4800,limit:90,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"A29 — Sta. Maria da Feira VM (S→N)",road:"A29 km 35.0-37.2 · São Paio de Oleiros",lat:40.9900,lng:-8.6380,limit:100,type:"VM",dist:"Portugal",bearing:0,ambos:false},

// ══════════════════════════════
// BEJA (4 radares)
// ══════════════════════════════
{name:"IC1 — Santana da Serra VM",road:"IC1 km 679.8-682.7 · Santana da Serra",lat:37.6850,lng:-8.2880,limit:70,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"EN261 — Aljustrel VM",road:"EN261 km 97.1-98.5 · Aljustrel",lat:37.8730,lng:-8.1650,limit:70,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"IC1 — Ourique VM",road:"IC1 km 686.5-688.6 · Santana da Serra",lat:37.6490,lng:-8.2970,limit:90,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"EN260 — Beja",road:"EN260 km 13.4 · Baleizão, Beja",lat:38.0080,lng:-7.9020,limit:90,type:"VI",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// BRAGA (7 radares)
// ══════════════════════════════
{name:"A7 — Guimarães (O→E)",road:"A7 km 33.3 · Serzedelo, Guimarães",lat:41.4350,lng:-8.2540,limit:100,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"A7 — Guimarães (E→O)",road:"A7 km 33.7 · Serzedelo, Guimarães",lat:41.4355,lng:-8.2530,limit:100,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"A7 — Guimarães (E→O)",road:"A7 km 38.2 · Candoso, Guimarães",lat:41.4720,lng:-8.1980,limit:80,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN101 — Guimarães",road:"EN101 km 110.7 · Creixomil, Guimarães",lat:41.4420,lng:-8.2890,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"EN103 — Barcelos",road:"EN103 km 22.9 · Rio Covo, Barcelos",lat:41.5210,lng:-8.5980,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"EN206 — Fafe (E→O)",road:"EN206 km 46.0 · Golães, Fafe",lat:41.5030,lng:-8.1760,limit:90,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"A3 — Braga VM (S→N)",road:"A3 km 38.1-40.7 · Guisande, Braga",lat:41.5540,lng:-8.4280,limit:100,type:"VM",dist:"Portugal",bearing:0,ambos:false},

// ══════════════════════════════
// CASTELO BRANCO (2 radares)
// ══════════════════════════════
{name:"EN18 — Belmonte",road:"EN18 km 19.6 · Belmonte",lat:40.3600,lng:-7.3490,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"IC8 — Sertã",road:"IC8 km 115.3 · Várzea dos Cavaleiros, Sertã",lat:39.8000,lng:-8.0900,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// COIMBRA (7 radares)
// ══════════════════════════════
{name:"EN109 — Figueira da Foz",road:"EN109 km 110.4 · Quiaios, Figueira",lat:40.2240,lng:-8.8560,limit:50,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"IC2 — Cernache (S→N)",road:"IC2 km 178.7 · Cernache, Coimbra",lat:40.1440,lng:-8.4580,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"IC2 — Antanhol",road:"IC2 km 183.3 · Assafarge, Coimbra",lat:40.1680,lng:-8.4430,limit:90,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"IC2 — Coimbra (S→N)",road:"IC2 km 190.8 · Santa Cruz, Coimbra",lat:40.2050,lng:-8.4380,limit:60,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"IP3 — Souselas (E→O)",road:"IP3 km 50.9 · Souselas, Coimbra",lat:40.2680,lng:-8.4030,limit:60,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"A1 — Coimbra (S→N)",road:"A1 km 188.6 · Ribeira de Frades",lat:40.1860,lng:-8.4230,limit:120,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"EN109 — Figueira VM",road:"EN109 km 100.7-103.0 · Bom Sucesso",lat:40.1750,lng:-8.8680,limit:50,type:"VM",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// ÉVORA (3 radares)
// ══════════════════════════════
{name:"EN4 — Borba (E→O)",road:"EN4 km 155.6 · Borba, Évora",lat:38.7980,lng:-7.4640,limit:90,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN18 — Évora VM",road:"EN18 km 276.3-278.4 · São Manços",lat:38.5200,lng:-7.8140,limit:90,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"EN114 — Montemor-o-Novo",road:"EN114 km 170.0 · Nossa Sra. Vila",lat:38.6460,lng:-8.2170,limit:90,type:"VI",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// FARO (6 radares)
// ══════════════════════════════
{name:"A2 — Albufeira (N→S)",road:"A2 km 233.1 · Paderne, Albufeira",lat:37.2010,lng:-8.1880,limit:120,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"EN125 — Lagoa (O→E)",road:"EN125 km 49.6 · Lagoa",lat:37.1310,lng:-8.4470,limit:70,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"EN125 — Albufeira (E→O)",road:"EN125 km 68.7 · Guia, Albufeira",lat:37.1390,lng:-8.2450,limit:80,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN125 — Faro (O→E)",road:"EN125 km 102.0 · Faro",lat:37.0390,lng:-7.9480,limit:70,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"EN125-10 — Faro",road:"EN125-10 km 1.4 · Montenegro, Faro",lat:37.0230,lng:-7.9790,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"EN125 — Ferreiras",road:"EN125 km 74.6 · Ferreiras, Albufeira",lat:37.1300,lng:-8.1870,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// LEIRIA (1 radar)
// ══════════════════════════════
{name:"IC2 — Leiria (S→N)",road:"IC2 km 128.0 · Marrazes, Leiria",lat:39.7580,lng:-8.8140,limit:60,type:"VI",dist:"Portugal",bearing:0,ambos:false},

// ══════════════════════════════
// LISBOA (20 radares)
// ══════════════════════════════
{name:"A1 — Sacavém (S→N)",road:"A1 km 2.1 · Sacavém, Loures",lat:38.8070,lng:-9.1070,limit:120,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"A1 — São João da Talha (N→S)",road:"A1 km 4.1 · S. João Talha, Loures",lat:38.8180,lng:-9.1010,limit:120,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"A1 — Ota (N→S)",road:"A1 km 42.0 · Ota, Alenquer",lat:39.1260,lng:-8.9640,limit:120,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"A5 — Benfica (O→E)",road:"A5 km 1.1 · Benfica, Lisboa",lat:38.7340,lng:-9.1880,limit:120,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"A5 — Carnaxide (O→E)",road:"A5 km 5.0 · Carnaxide, Oeiras",lat:38.7200,lng:-9.2360,limit:120,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"A5 — Queijas (E→O)",road:"A5 km 6.8 · Queijas, Oeiras",lat:38.7160,lng:-9.2560,limit:120,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"A5 — Queijas (O→E)",road:"A5 km 7.8 · Queijas, Oeiras",lat:38.7150,lng:-9.2650,limit:120,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"A8 — Loures (N→S)",road:"A8 km 11.8 · Loures",lat:38.8590,lng:-9.1730,limit:100,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"EN6 — Oeiras (E→O)",road:"EN6 km 7.9 · Oeiras",lat:38.6990,lng:-9.2940,limit:50,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN6-3 — Caxias (S→N)",road:"EN6-3 km 0.7 · Caxias, Oeiras",lat:38.7020,lng:-9.3050,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"EN6-3 — Cruz Quebrada (N→S)",road:"EN6-3 km 1.0 · Cruz Quebrada, Oeiras",lat:38.7050,lng:-9.3020,limit:70,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"IC17 — Benfica (N→S)",road:"IC17 km 6.2-7.4 · Benfica, Lisboa",lat:38.7510,lng:-9.1960,limit:70,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"IC17 — Benfica (S→N)",road:"IC17 km 6.7 · Benfica, Lisboa",lat:38.7520,lng:-9.1960,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"IC17 — Odivelas (S→N)",road:"IC17 km 12.7 · Odivelas",lat:38.7910,lng:-9.1810,limit:80,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"IC17 — Odivelas (O→E)",road:"IC17 km 17.9 · Odivelas",lat:38.8080,lng:-9.1500,limit:90,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"IC19 — Queluz (E→O)",road:"IC19 km 5.3-5.9 · Queluz, Sintra",lat:38.7560,lng:-9.2680,limit:80,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"IC19 — Agualva Cacém (O→E)",road:"IC19 km 10.3 · Agualva Cacém, Sintra",lat:38.7710,lng:-9.3050,limit:100,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"IC2 — Sta. Iria (N→S) VM",road:"IC2 km 7.0-9.8 · Santa Iria, Loures",lat:38.8430,lng:-9.1090,limit:80,type:"VM",dist:"Portugal",bearing:180,ambos:false},
{name:"IP7 — Lisboa",road:"IP7 km 3.4-10.8 · Lisboa",lat:38.7470,lng:-9.1650,limit:60,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"IC17 — Sacavém (E→O)",road:"IC17 km 14.2-19.1 · Sacavém, Loures",lat:38.8130,lng:-9.1140,limit:90,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN6-7 — Carcavelos (N→S)",road:"EN6-7 km 2.7 · Carcavelos, Cascais",lat:38.6890,lng:-9.3210,limit:70,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"EN10 — Vila Franca VM",road:"EN10 km 110.7-115.5 · V. Franca de Xira",lat:38.9580,lng:-8.9860,limit:80,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"IC19 — Massamá VM (E→O)",road:"IC19 km 8.2-9.1 · Massamá, Sintra",lat:38.7650,lng:-9.2910,limit:80,type:"VM",dist:"Portugal",bearing:270,ambos:false},

// ══════════════════════════════
// PORTO (27 radares)
// ══════════════════════════════
{name:"A20/VCI — Campanhã (S→N)",road:"A20 km 9.1 · Campanhã, Porto",lat:41.1548,lng:-8.5810,limit:80,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A20/VCI — Campanhã (N→S)",road:"A20 km 9.8 · Campanhã, Porto",lat:41.1555,lng:-8.5818,limit:80,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A20/VCI — Campanhã (N→S)",road:"A20 km 10.6 · Campanhã, Porto",lat:41.1571,lng:-8.5832,limit:80,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A20/VCI — Paranhos (S→N)",road:"A20 km 12.7 · Paranhos, Porto",lat:41.1612,lng:-8.6021,limit:80,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A20/VCI — Paranhos (E→O)",road:"A20 km 14.9 · Paranhos, Porto",lat:41.1643,lng:-8.6225,limit:80,type:"VI",dist:"Porto",bearing:270,ambos:false},
{name:"A20/VCI — Ramalde (O→E)",road:"A20 km 15.6 · Ramalde, Porto",lat:41.1651,lng:-8.6310,limit:80,type:"VI",dist:"Porto",bearing:90,ambos:false},
{name:"A20/VCI — Ramalde (E→O)",road:"A20 km 16.1 · Ramalde, Porto",lat:41.1655,lng:-8.6380,limit:80,type:"VI",dist:"Porto",bearing:270,ambos:false},
{name:"A43 — Campanhã (O→E)",road:"A43 km 1.7 · Campanhã, Porto",lat:41.1530,lng:-8.5788,limit:70,type:"VI",dist:"Porto",bearing:90,ambos:false},
{name:"A43 — Campanhã (E→O)",road:"A43 km 1.8 · Campanhã, Porto",lat:41.1528,lng:-8.5792,limit:70,type:"VI",dist:"Porto",bearing:270,ambos:false},
{name:"A3 — Maia (S→N)",road:"A3 km 1.5 · Pedrouços, Maia",lat:41.2205,lng:-8.6320,limit:120,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A3 — Maia (N→S)",road:"A3 km 2.8 · Pedrouços, Maia",lat:41.2238,lng:-8.6295,limit:120,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A3 — Trofa VM (N→S)",road:"A3 km 15.9-16.9 · Covelas, Trofa",lat:41.3310,lng:-8.5560,limit:100,type:"VM",dist:"Porto",bearing:180,ambos:false},
{name:"A1 — Gaia (S→N)",road:"A1 km 292.4 · Pedroso e Seixezelo, Gaia",lat:41.0980,lng:-8.5920,limit:80,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A1 — Gaia (N→S)",road:"A1 km 292.9 · Pedroso e Seixezelo, Gaia",lat:41.0975,lng:-8.5915,limit:80,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A4 — Valongo (E→O)",road:"A4 km 15.2 · Valongo",lat:41.1870,lng:-8.4980,limit:120,type:"VI",dist:"Porto",bearing:270,ambos:false},
{name:"A4 — Matosinhos (E→O)",road:"A4 km 0.1 · Matosinhos",lat:41.1882,lng:-8.6950,limit:60,type:"VI",dist:"Porto",bearing:270,ambos:false},
{name:"A28 — Vila do Conde (N→S)",road:"A28 km 21.1 · Fajozes, Vila do Conde",lat:41.3521,lng:-8.7362,limit:120,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A28 — Póvoa de Varzim (N→S)",road:"A28 km 34.3 · Amorim, Póvoa",lat:41.4218,lng:-8.7570,limit:100,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A29 — Gaia (S→N)",road:"A29 km 40.9 · S. Félix da Marinha, Gaia",lat:41.0221,lng:-8.6280,limit:80,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A29 — Gaia (S→N)",road:"A29 km 48.3 · Mafamude, Gaia",lat:41.0680,lng:-8.6440,limit:100,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A29 — Gaia VM (S→N)",road:"A29 km 45.8-47.2 · Arcozelo, Gaia",lat:41.0420,lng:-8.6390,limit:80,type:"VM",dist:"Porto",bearing:0,ambos:false},
{name:"A29 — Gaia VM (N→S)",road:"A29 km 47.3-45.9 · Valadares, Gaia",lat:41.0440,lng:-8.6400,limit:80,type:"VM",dist:"Porto",bearing:180,ambos:false},
{name:"A29 — Valadares (N→S)",road:"A29 km 49.0 · Mafamude, Gaia",lat:41.0710,lng:-8.6460,limit:100,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A29 — Valadares (S→N)",road:"A29 km 52.4 · Gulpilhares, Gaia",lat:41.0831,lng:-8.6540,limit:80,type:"VI",dist:"Porto",bearing:0,ambos:false},
{name:"A44 — Gaia (N→S)",road:"A44 km 4.5 · Mafamude, Gaia",lat:41.1189,lng:-8.6055,limit:80,type:"VI",dist:"Porto",bearing:180,ambos:false},
{name:"A42 — Paços Ferreira VM (E→O)",road:"A42 km 7.0-9.1 · Paços de Ferreira",lat:41.2760,lng:-8.3850,limit:100,type:"VM",dist:"Porto",bearing:270,ambos:false},
{name:"EN14 — Maia",road:"EN14 km 6.1 · Cidade da Maia",lat:41.2348,lng:-8.6182,limit:70,type:"VI",dist:"Porto",bearing:0,ambos:true},
{name:"EN105 — Santo Tirso",road:"EN105 km 20.0 · Carreira, Santo Tirso",lat:41.3420,lng:-8.3800,limit:70,type:"VI",dist:"Porto",bearing:0,ambos:true},
{name:"EN211 — Marco/Penafiel VM",road:"EN211 km 1.4-5.8 · Marco de Canaveses",lat:41.1820,lng:-8.1560,limit:70,type:"VM",dist:"Porto",bearing:0,ambos:true},

// ══════════════════════════════
// SANTARÉM (6 radares)
// ══════════════════════════════
{name:"A23 — V.N. Barquinha (E→O)",road:"A23 km 18.6 · Atalaia, Barquinha",lat:39.4630,lng:-8.1870,limit:100,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN118 — Samora Correia (N→S)",road:"EN118 km 17.4 · Samora, Benavente",lat:38.9310,lng:-8.8670,limit:90,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"EN118 — Samora Correia (S→N)",road:"EN118 km 27.5 · Samora, Benavente",lat:38.9910,lng:-8.8580,limit:90,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"EN119 — Santo Estevão",road:"EN119 km 28.0 · Santo Estevão, Benavente",lat:39.0330,lng:-8.7970,limit:50,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"A1 — Santarém VM (N→S)",road:"A1 km 59.9-65.2 · Póvoa da Isenta",lat:39.2460,lng:-8.7450,limit:120,type:"VM",dist:"Portugal",bearing:180,ambos:false},
{name:"EN251 — Coruche",road:"EN251 km 39.2 · Coruche",lat:38.9560,lng:-8.5220,limit:90,type:"VI",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// SETÚBAL (11 radares)
// ══════════════════════════════
{name:"A2 — Seixal (S→N)",road:"A2 km 8.8 · Feijó, Seixal",lat:38.6370,lng:-9.0990,limit:120,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"A2 — Seixal (N→S)",road:"A2 km 14.0 · Amora, Seixal",lat:38.6090,lng:-9.1110,limit:120,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"EN10 — Setúbal (O→E)",road:"EN10 km 49.9 · Gâmbia, Setúbal",lat:38.5360,lng:-8.9200,limit:70,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"IC20 — Almada (E→O)",road:"IC20 km 1.9 · Almada",lat:38.6700,lng:-9.1750,limit:90,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"IC20 — Caparica (O→E)",road:"IC20 km 6.6 · Costa Caparica",lat:38.6380,lng:-9.2350,limit:70,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"IC1 — Poceirão VM",road:"IC1 km 538.9-545.0 · Poceirão, Palmela",lat:38.5850,lng:-8.8240,limit:70,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"EN378 — Sesimbra VM",road:"EN378 km 11.1-17.0 · Quinta do Conde",lat:38.5730,lng:-9.0890,limit:70,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"EN4 — Alcochete VM",road:"EN4 km 25.0-30.0 · Alcochete/Pegões",lat:38.6570,lng:-8.8190,limit:70,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"IC1 — Alcácer do Sal",road:"IC1 km 548.6 · Alcácer do Sal",lat:38.3740,lng:-8.5130,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"EN10 — Montijo VM",road:"EN10 km 75.7-79.2 · Canha, Montijo",lat:38.7040,lng:-8.7490,limit:70,type:"VM",dist:"Portugal",bearing:0,ambos:true},
{name:"EN252 — Pinhal Novo",road:"EN252 km 5.2/9.0 · Pinhal Novo, Palmela",lat:38.6300,lng:-8.9130,limit:50,type:"VI",dist:"Portugal",bearing:0,ambos:true},
{name:"EN5 — Montijo",road:"EN5 km 6.0 · Atalaia, Montijo",lat:38.6750,lng:-8.9840,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},

// ══════════════════════════════
// VISEU (8 radares)
// ══════════════════════════════
{name:"A24 — Lamego (S→N)",road:"A24 km 93.7 · Parada do Bispo, Lamego",lat:41.0850,lng:-7.7860,limit:100,type:"VI",dist:"Portugal",bearing:0,ambos:false},
{name:"A24 — Lamego (N→S)",road:"A24 km 97.9 · Lamego",lat:41.1020,lng:-7.7920,limit:100,type:"VI",dist:"Portugal",bearing:180,ambos:false},
{name:"A25 — Oliveira de Frades (O→E)",road:"A25 km 48.8 · Destriz, Oliveira de Frades",lat:40.7330,lng:-8.1880,limit:100,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"A25 — Oliveira de Frades (E→O)",road:"A25 km 52.2 · Destriz, Oliveira de Frades",lat:40.7320,lng:-8.1490,limit:120,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"A25 — Vouzela (E→O)",road:"A25 km 62.4 · Vouzela",lat:40.7310,lng:-8.0520,limit:120,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"A25 — Viseu (O→E)",road:"A25 km 94.0 · Rio de Loba, Viseu",lat:40.6950,lng:-7.8620,limit:80,type:"VI",dist:"Portugal",bearing:90,ambos:false},
{name:"A25 — Viseu (E→O)",road:"A25 km 96.0 · Rio de Loba, Viseu",lat:40.6940,lng:-7.8450,limit:80,type:"VI",dist:"Portugal",bearing:270,ambos:false},
{name:"EN234 — Nelas",road:"EN234 km 88.7 · Canas de Senhorim, Nelas",lat:40.5580,lng:-7.8340,limit:70,type:"VI",dist:"Portugal",bearing:0,ambos:true},

];
