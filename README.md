# Emre Lofça — CV Website

React, TypeScript ve Vite ile hazırlanmış iki dilli kişisel CV sitesi.

## Yerel geliştirme

```powershell
npm.cmd install
npm.cmd run dev
```

## Üretim

```powershell
npm.cmd run build
npm.cmd run preview
```

Yayınlanacak statik dosyalar `dist` klasöründe oluşur.

## Raspberry Pi ve güvenlik

1. `dist` klasörünü Pi üzerindeki `/var/www/emre-cv/dist` dizinine kopyalayın.
2. `deploy/nginx-cv.conf` dosyasını Nginx site yapılandırması olarak kullanın.
3. Dosyadaki `server_name` ve `root` değerlerini kendi sisteminize göre düzenleyin.
4. İnternete açık yayında HTTPS için Certbot gibi bir ACME istemcisi kullanın.
5. SSH ve yönetim servislerini doğrudan internete açmayın; anahtar tabanlı giriş,
   güvenlik duvarı, düzenli güncelleme ve yedekleme kullanın.

Örnek Nginx ayarları CSP, clickjacking, MIME sniffing, referrer ve tarayıcı izinleri
için güvenlik başlıklarını içerir. Site iletişim formu veya sunucu tarafı kod
çalıştırmadığı için saldırı yüzeyi sınırlıdır.
