const tr = {
    "base": "Temel",
    "food": "Yemek",
    "population": "Nüfus",
    "happiness": "Mutluluk",

    "idle": "İşsizler",
    
    "hunter.build": "Avcı Kulubesi",
    "fish.build": "Balıkçı Kulubesi",

    "diaster": "Felaket Yaklaşıyor Patron!",
    "diaster.description": "Felaket yaklaşıyor! Zaman daralıyor ve müdahale etmek için acil bir eyleme ihtiyacımız var. Durum hiç de iyi görünmüyor ve tehlike kapımızda.",
    "diaster.moon": "Kanlı Ay",
    "diaster.storm": "Fırtına"
}

export default tr;
export type Messages = typeof tr;
export type MessageKey = keyof Messages;