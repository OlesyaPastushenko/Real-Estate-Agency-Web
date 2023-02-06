const areas = {
    "Poblaciónes": ["Zonas"],
    "Los Alcázares": [
    "Zonas",
    "Todas",
    "Centro",
    "Pueblo Patricia"
],

    "Los Narejos": [
    "Zonas",
    "Todas",
    "Centro",
    "Playa Locos"
], 

    "Cartagena": [
    "Zonas",
    "Todas",
    "Centro",
    "Playa Espejo"
]
}

const types = ['Tipo','Apartamento', 'Ático', 'Bungalow', 'Chalet', 'Duplex', 'Garaje', 'Local']

const prices = {
    "Precio Max": 'Precio Max',
    "30 000": '30000',
    "35 000": '35000',
    "40 000": '40000',
    "45 000": '45000',
    "50 000": '50000',
    "55 000": '55000',
    "60 000": '60000',
    "65 000": '65000',
    "70 000": '70000',
    "75 000": '75000',
    "80 000": '80000',
    "85 000": '85000',
    "90 000": '90000'
}

const rooms = {
    "Dormitorios": 'Dormitorios',
    "+1":1,
    "+2":2,
    "+3":3,
    "+4 o mas":"4 o mas"
}

const bath = {
    "Banos": 0,
    "+1":1,
    "+2":2,
    "+3":3,
    "+4 o mas": 4
}

	
// https://api.telegram.org/bot5697100567:AAHelFg8Zya_v6v2lZ4z2w5xxsqI2Tf1Js0/getUpdates
// {"ok":true,"result":[{"update_id":933598715,
// "message":{"message_id":4,"from":{"id":5284544422,"is_bot":false,"first_name":"Olesia","last_name":"Pastushenko","username":"olesia_pas","language_code":"ru"},"chat":{"id":5284544422,"first_name":"Olesia","last_name":"Pastushenko","username":"olesia_pas","type":"private"},"date":1666946082,"text":"/join @OlesiaPastushenko_bot","entities":[{"offset":0,"length":5,"type":"bot_command"},{"offset":6,"length":22,"type":"mention"}]}}]}
export { areas, types, prices, rooms, bath }