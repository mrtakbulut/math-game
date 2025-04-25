# Matematik Oyunu

Bu eğlenceli matematik oyunu, calculator-lib kütüphanesini kullanarak oluşturulmuştur. Oyuncular 60 saniye içinde mümkün olduğunca çok matematik sorusunu doğru cevaplamaya çalışırlar.

## Özellikler

- 60 saniyelik zaman sınırı
- Dört temel matematik işlemi (+, -, *, /)
- Zorluk seviyelerine göre artan puanlama sistemi
- Renkli konsol arayüzü
- Anlık geri bildirim
- Final skor değerlendirmesi

## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/mrtakbulut/math-game.git
```

2. Proje dizinine gidin:
```bash
cd math-game
```

3. Bağımlılıkları yükleyin:
```bash
npm install
```

## Oyunu Başlatma

Oyunu başlatmak için aşağıdaki komutu çalıştırın:
```bash
npm start
```

## Nasıl Oynanır

1. Oyun başladığında, size matematik soruları sorulacaktır
2. Her soruyu cevaplamak için bir sayı girip Enter tuşuna basın
3. Doğru cevaplar için 1 puan kazanırsınız
4. Skorunuz arttıkça sorular zorlaşır
5. 60 saniye sonunda oyun biter ve final skorunuz gösterilir

## Zorluk Seviyeleri

- **Kolay (0-4 puan)**: 1-10 arası sayılar
- **Orta (5-9 puan)**: 10-50 arası sayılar
- **Zor (10+ puan)**: 50-100 arası sayılar