# florexdev.com.tr — Portföy Sitesi

Staj başvurusu için hazırlanan kişisel portföy sitesi.

---

## 📁 Dosya Yapısı

```
portfolio/
│
├── index.html          ← Ana HTML dosyası
│
├── css/
│   ├── main.css        ← Temel stiller, layout, nav, hero, bölümler
│   ├── animations.css  ← Animasyonlar ve scroll reveal
│   └── components.css  ← Dekoratif detaylar, scrollbar, print
│
├── js/
│   ├── lang.js         ← TR / EN dil değiştirme sistemi
│   └── main.js         ← Cursor, scroll, hamburger menü, reveal
│
└── README.md           ← Bu dosya
```

---

## 🌐 Dil Sistemi (TR / EN)

Dil değiştirme `data-tr` ve `data-en` HTML attribute'ları ile çalışır:

```html
<span data-tr="Türkçe metin" data-en="English text">Türkçe metin</span>
```

Seçilen dil `localStorage`'a kaydedilir — sayfa yenilenince hatırlanır.

---

## 📜 Sertifika Linkleri Ekleme

`index.html` içinde sertifika kartlarında `cert-link` class'ına sahip `<a>` etiketlerinin `href` değerini güncelle:

```html
<!-- Bul: -->
<a href="#" class="cert-link" ...>Sertifikayı Görüntüle →</a>

<!-- Değiştir: -->
<a href="https://www.btkakademi.gov.tr/portal/certificate/..." class="cert-link" ...>
```

---

## 🔧 Özelleştirme

### GitHub Linki
`index.html` içinde tüm `github.com/florexdev` adresleri var.
Kendi kullanıcı adınla değiştir:
```
github.com/florexdev  →  github.com/KULLANICI_ADIN
```

### E-posta
```html
<a href="mailto:florexdev@florexdev.com.tr" ...>
```
Kendi e-posta adresinle değiştir.

### Renkler
`css/main.css` başındaki CSS değişkenlerini düzenle:
```css
:root {
  --accent:  #00e5a0;  /* Yeşil vurgu */
  --accent2: #7c6af7;  /* Mor vurgu  */
  ...
}
```

---

## 🚀 Yayına Alma

1. Tüm dosyaları hosting'e yükle (public_html veya www klasörü)
2. Yapı aynı kalmalı — `css/` ve `js/` klasörleri `index.html` ile aynı dizinde olmalı
3. Domain: `florexdev.com.tr` → `index.html`'i göster

---

## 📱 Responsive

- Masaüstü: Full layout + terminal kartı
- Tablet: Grid düzeni daraltılır
- Mobil: Hamburger menü aktif, terminal gizlenir

---

Hazırlayan: **florexdev** | Bilecik ŞEÜ Söğüt MYO
