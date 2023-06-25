const tr = {
    "base": "Temel",
    "food": "Yemek",
    "population": "Nüfus",
    "happiness": "Mutluluk",

    "idle": "İşsizler",
    
    "hunter.build": "Avcı Kulubesi",
    "fish.build": "Balıkçı Kulubesi",

    "disaster.moon": "Kanlı Ay",
    "disaster.storm": "Fırtına",
    "disaster.earthquake": "Deprem",
    "disaster.tsunami": "Tsunami",
    "disaster.title": "Felaket Yaklaşıyor Patron!",
    "disaster.description": "Felaket yaklaşıyor! Zaman daralıyor ve müdahale etmek için acil bir eyleme ihtiyacımız var. Durum hiç de iyi görünmüyor ve tehlike kapımızda.",
}

export default tr;
export type Messages = typeof tr;
export type MessageKey = keyof Messages;