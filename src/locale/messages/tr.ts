const tr = {
    "base": "Temel",
    "food": "Yemek",
    "population": "Nüfus",
    "happiness": "Mutluluk",

    "idle": "İşsizler",

    "hunter": "Avcı Kulubesi",
    "fish.build": "Balıkçı Kulubesi",

    "disaster.unknown": "Bilinmiyor",
    "disaster.bloodMoon": "Kanlı Ay",
    "disaster.bloodMoon.description": 
    "Korkunç bir ışıkla parlayan kanlı ay, hızla yükseliyor, bizi bilinmez tehlikelerle dolu bir geceye sürüklüyor. Hava ölüm sessizliğiyle kaplanmış, ayın kızıl yüzü, dünya üzerindeki her varlığın yüreğine korku salıyor. Durum umut verici değil; kaçış yolu gibi görünen hiçbir şey yok. Dünya, bu korkunç tehdidin altında titriyor ve tehdit kapımızda. Acil harekete geçmemiz gerekiyor. Bu kırmızı ışık altında, birliğimiz ve cesaretimiz olmadan, umut ışığı bile gözükmüyor.",
    "disaster.storm": "Fırtına",
    "disaster.earthquake": "Deprem",
    "disaster.tsunami": "Tsunami",
    "disaster.title": "Felaket Yaklaşıyor Patron!",
    "disaster.description": "Felaket yaklaşıyor! Zaman daralıyor ve müdahale etmek için acil bir eyleme ihtiyacımız var. Durum hiç de iyi görünmüyor ve tehlike kapımızda.",
}

export default tr;
export type Messages = typeof tr;
export type MessageKey = keyof Messages;