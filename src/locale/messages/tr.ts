const tr = {
    "base": "Temel",
    "food": "Yemek",
    "population": "Nüfus",
    "happiness": "Mutluluk",

    "idle": "İşsizler",

    "hunter": "Avcı Kulubesi",
    "fish.build": "Balıkçı Kulubesi",

    "disaster.food": "Fırtına yüzünden giden yemek",

    "disaster.unknown": "Bilinmiyor",
    "disaster.bloodMoon": "Kanlı Ay",
    "disaster.storm": "Fırtına",
    "disaster.earthquake": "Deprem",
    "disaster.tsunami": "Tsunami",
    "disaster.title": "Felaket Yaklaşıyor Patron!",

    "disaster.description": "Felaket yaklaşıyor! Zaman daralıyor ve müdahale etmek için acil bir eyleme ihtiyacımız var. Durum hiç de iyi görünmüyor ve tehlike kapımızda.",
    "disaster.bloodMoon.description": "Korkunç bir ışıkla parlayan kanlı ay, hızla yükseliyor, bizi bilinmez tehlikelerle dolu bir geceye sürüklüyor. Hava ölüm sessizliğiyle kaplanmış, ayın kızıl yüzü, dünya üzerindeki her varlığın yüreğine korku salıyor. Durum umut verici değil; kaçış yolu gibi görünen hiçbir şey yok. Dünya, bu korkunç tehdidin altında titriyor ve tehdit kapımızda. Acil harekete geçmemiz gerekiyor. Bu kırmızı ışık altında, birliğimiz ve cesaretimiz olmadan, umut ışığı bile gözükmüyor.",
    "disaster.storm.description": "Gök gürültüsü yankılanıyor, hızla artan bir fırtına bizi bilinmez tehlikelere sürüklüyor. Şimşeklerin keskin ışığı ve rüzgarın uğultusu, her varlığın yüreğine korku salıyor. Durum umut verici değil; güvenli bir sığınak bulmak zor. Tehdit, tam olarak başımızın üzerinde beliriyor. Acil harekete geçmeliyiz. Şimşeklerin çılgınca dansı korku saçıyor. Birliğimiz ve cesaretimiz olmadan, bu karanlıkta bir yol bulmak neredeyse imkansız.",
    "disaster.earthquake.description": "Korkunç bir gürültü ile yer sarsılmaya başlıyor, hızla bir felakete dönüşen bir deprem bizi bilinmez tehlikelere sürüklüyor. Hava sessizliğini kaybederken, yerin derinliklerinden gelen bu titreme, dünya üzerindeki her varlığın yüreğine korku salıyor. Durum hiç de umut verici değil; güvenli bir sığınak gibi görünen hiçbir yer yok. Dünya, bu korkunç tehdidin altında sarsılıyor ve bu tehdit tam olarak ayaklarımızın altında. Acil harekete geçmemiz gerekiyor. Bu titreyen topraklar altında, birliğimiz ve cesaretimiz olmadan, umut ışığı bile gözükmüyor.",
}

export default tr;
export type Messages = typeof tr;
export type MessageKey = keyof Messages;