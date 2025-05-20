# UniAPI

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş basit bir görev yönetim (ToDo) API'sidir. Veri saklama için dosya tabanlı (JSON) yöntem kullanılmıştır. Proje, iş mülakatı kapsamında backend geliştirme yeteneklerini göstermek amacıyla hazırlanmıştır.

## Özellikler

- Görevleri listeleme
- Yeni görev ekleme
- Görev silme
- Görevlerin tamamlanma durumunu güncelleme

## Kurulum ve Çalıştırma

1. **Projeyi klonlayın veya indirin.**
2. **Gerekli bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Sunucuyu başlatın:**
   ```bash
   node server.js
   ```
   Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## API Endpointleri

### 1. Görevleri Listele

- **GET** `/duties`
- **Açıklama:** Tüm görevleri listeler.

### 2. Görev Ekle

- **POST** `/dutyadd`
- **Açıklama:** Yeni bir görev ekler.

### 3. Görev Sil

- **DELETE** `/dutydelete`
- **Açıklama:** Belirtilen ID'ye sahip görevi siler.

### 4. Görev Tamamlanma Durumunu Güncelle

- **PUT** `/update-completed`
- **Açıklama:** Belirtilen ID'li görevin tamamlanma durumunu günceller.

## Frontend

Bu projenin bir de React.js ile geliştirilmiş frontend arayüzü bulunmaktadır. Frontend kodlarına aşağıdaki Github reposundan ulaşabilirsiniz:

- [Frontend Github Reposu](https://github.com/edacolakx/ToDoApp)

Frontend arayüzü ile bu backend API'yi entegre ederek görev yönetimini görsel olarak da kullanabilirsiniz.

## Notlar

- Veri, proje dizinindeki `data.json` dosyasında saklanır.
- Proje sadece backend içerir, frontend arayüzü ayrı bir repoda yer almaktadır.
- API'yi test etmek için Postman veya benzeri bir REST istemcisi kullanabilirsiniz.

---

Her türlü katkı ve geri bildirime açıktır. Başarılar dilerim!
