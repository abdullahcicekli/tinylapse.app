# 🚀 TinyLapse Deployment Guide

## GitHub Pages + Cloudflare Setup

### 1️⃣ GitHub Repository Ayarları

1. **GitHub'a gidin:** https://github.com/abdullahcicekli/tinylapse.app
2. **Settings** → **Pages**
3. **Source:** GitHub Actions seçin
4. **Custom domain:** `tinylapse.app` yazın
5. ✅ **Enforce HTTPS** aktif edin

### 2️⃣ Cloudflare DNS Ayarları

Cloudflare dashboard'a gidin ve şu DNS kayıtlarını ekleyin:

#### A Records (Root Domain için):
```
Type: A
Name: @
Content: 185.199.108.153
Proxy: ✅ Proxied (Turuncu bulut)

Type: A
Name: @
Content: 185.199.109.153
Proxy: ✅ Proxied

Type: A
Name: @
Content: 185.199.110.153
Proxy: ✅ Proxied

Type: A
Name: @
Content: 185.199.111.153
Proxy: ✅ Proxied
```

#### CNAME Record (www subdomain için):
```
Type: CNAME
Name: www
Content: abdullahcicekli.github.io
Proxy: ✅ Proxied (Turuncu bulut)
```

### 3️⃣ Cloudflare SSL/TLS Ayarları

1. **SSL/TLS** → **Overview**
2. **Encryption mode:** Full (strict) seçin
3. **Edge Certificates** → Always Use HTTPS: ✅ Aktif

### 4️⃣ Cloudflare Page Rules (Opsiyonel)

**www'yi root'a yönlendir:**
```
URL: www.tinylapse.app/*
Settings:
  - Forwarding URL (301 - Permanent Redirect)
  - Destination: https://tinylapse.app/$1
```

### 5️⃣ Deploy Etme

#### Otomatik Deploy:
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

GitHub Actions otomatik olarak build alıp deploy edecek (2-3 dakika).

#### Manuel Deploy:
1. GitHub'da **Actions** sekmesine gidin
2. **Deploy to GitHub Pages** workflow'unu seçin
3. **Run workflow** butonuna tıklayın

### 6️⃣ Deploy Durumunu Kontrol

- **GitHub Actions:** https://github.com/abdullahcicekli/tinylapse.app/actions
- **GitHub Pages:** Settings → Pages → Visit site
- **Live site:** https://tinylapse.app

### 7️⃣ DNS Propagation Kontrolü

DNS değişikliklerinin yayılması 5-48 saat sürebilir. Kontrol için:
```bash
# DNS kontrolü
nslookup tinylapse.app

# veya
dig tinylapse.app
```

Online araçlar:
- https://dnschecker.org
- https://www.whatsmydns.net

### 🔄 Her Push'ta Otomatik Deploy

Artık `main` branch'e her push yaptığınızda:
1. ✅ GitHub Actions tetiklenir
2. ✅ Proje build edilir
3. ✅ GitHub Pages'e deploy edilir
4. ✅ Cloudflare üzerinden tinylapse.app'te yayına alınır

### 📊 Build Status Badge

README'ye ekleyebilirsiniz:
```markdown
[![Deploy Status](https://github.com/abdullahcicekli/tinylapse.app/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/abdullahcicekli/tinylapse.app/actions)
```

### 🐛 Troubleshooting

**Site açılmıyor:**
1. GitHub Pages'de "Custom domain" doğru mu?
2. Cloudflare DNS kayıtları doğru mu?
3. DNS propagation tamamlandı mı?
4. GitHub Actions başarılı mı?

**404 hatası alıyorum:**
1. `public/CNAME` dosyası var mı?
2. Vite config'de `base: '/'` olmalı
3. React Router için 404.html trick gerekebilir

**HTTPS çalışmıyor:**
1. Cloudflare SSL/TLS: "Full (strict)" olmalı
2. GitHub Pages'de "Enforce HTTPS" aktif olmalı
3. 24 saat bekleyin (SSL sertifika provisioning)

### 📝 Önemli Notlar

- İlk deploy 5-10 dakika sürebilir
- DNS değişiklikleri 24-48 saat sürebilir
- Cloudflare cache'ini temizlemek için: Cache → Purge Everything
- Her commit otomatik deploy tetikler
- Production branch: `main`

### 🎉 Başarılı Deploy Sonrası

Siteniz şu adreslerde erişilebilir olacak:
- ✅ https://tinylapse.app
- ✅ https://www.tinylapse.app (→ tinylapse.app'e yönlendirilir)
- ✅ https://abdullahcicekli.github.io/tinylapse.app (GitHub Pages URL)

---

**Oluşturulma Tarihi:** 13 Kasım 2024  
**Son Güncelleme:** Auto-deploy aktif

