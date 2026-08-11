# Emre Lofça — CV Website

React, TypeScript ve Vite ile hazırlanmış iki dilli kişisel CV sitesi.

## Yerel geliştirme

```powershell
npm.cmd install
npm.cmd run dev
```

## Raspberry Pi üzerinde Docker ile yayınlama

Bu kurulum iki konteyner kullanır:

- `web`: Statik siteyi port `8080` üzerinden sunan Nginx.
- `cloudflared`: Nginx'e yalnızca Docker ağı içinden bağlanan Cloudflare Tunnel.

Galeri dosyaları `public/media/` altında yalnızca Pi'de tutulur. Bu klasör Git ve
Docker imajı dışında bırakılır; Nginx konteynerine salt-okunur bağlanır. Bu nedenle
`git pull` galeri dosyalarını silmez veya değiştirmez.

Pi'nin modeminde port açılması gerekmez. Compose dosyasında host portu da yayınlanmaz.

### İlk kurulum

Docker ve Git kurulduktan sonra projeyi Pi'ye alın:

```bash
git clone <REPO_ADRESI> ~/emre-cv
cd ~/emre-cv
mkdir -p deploy/secrets
chmod 700 deploy/secrets
```

Cloudflare panelinde yeni/yenilenmiş tunnel tokenını alın. Tokenı sohbete, Git'e veya
komut geçmişine eklemeyin. Yalnızca Pi üzerindeki şu dosyaya yapıştırın:

```bash
nano deploy/secrets/cloudflare-tunnel-token.txt
chmod 600 deploy/secrets/cloudflare-tunnel-token.txt
```

Dosyada yalnızca token bulunmalıdır. Ardından sistemi başlatın:

```bash
docker compose up -d --build
docker compose ps
docker compose logs --tail=100 cloudflared
```

Cloudflare Tunnel panelindeki Public Hostname kayıtları:

| Hostname | Service |
| --- | --- |
| `lofca.com.tr` | `http://web:8080` |
| `www.lofca.com.tr` | `http://web:8080` |

### Siteyi güncelleme

Pi'de bir kez Git hook'unu etkinleştirin:

```bash
git config core.hooksPath deploy/git-hooks
chmod +x deploy/git-hooks/post-merge deploy/rebuild-site.sh deploy/update-site.sh
```

Artık normal bir pull, değişiklik geldiyse Nginx imajını otomatik yeniler:

```bash
cd ~/emre-cv
git pull --ff-only
```

Alternatif olarak `bash deploy/update-site.sh` aynı pull işlemini yapar. `post-merge`
hook'u yalnızca web imajını yeniden oluşturur ve Nginx konteynerini yeniler. Tunnel
çalışmaya devam eder; `public/media/` klasörüne dokunulmaz.

### Kontrol ve bakım

```bash
docker compose ps
docker compose logs --tail=100 web
docker compose logs --tail=100 cloudflared
docker compose pull cloudflared
docker compose up -d cloudflared
```

Token dosyası `deploy/secrets/` altında tutulur ve Git tarafından yok sayılır.
SSH servisini internete açmayın; Pi ve Docker güncellemelerini düzenli uygulayın.

## Docker kullanmadan alternatif kurulum

`deploy/nginx-cv.conf`, Nginx'i doğrudan Raspberry Pi OS üzerinde çalıştırmak için
hazırlanmış alternatif yapılandırmadır. Docker kurulumu kullanılırken buna gerek yoktur.
