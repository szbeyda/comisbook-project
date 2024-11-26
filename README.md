# Comics Book Projesi

## Proje Amacı
Kullanıcıların güncel haberleri kart formatında görüntüleyebileceği bir uygulama geliştirmek. Amaç, haberleri kolay erişilebilir ve kullanıcı dostu bir şekilde sunmaktır. 
Bu proje, Comics Book platformunun home page tasarımını içermektedir. Projede HTML, CSS, Typescript, React, SCSS, ve Redux gibi teknolojiler kullanılmıştır. Home page, main, navbar, news, upcoming, add module ve footer container yapılarını içermektedir.

## Kullanılan Teknolojiler
- **React.js**: Kullanıcı arayüzünü oluşturmak için.
- **Redux**: Global state yönetimini sağlamak için.
- **Redux-Saga**: Asenkron veri çekme işlemlerini yönetmek için.
- **TypeScript**: Bileşen tabanlı bir mimari oluşturmak için.

## Proje Yapısı
Proje, üç ana bölüme ayrılmıştır:
- **Bileşenler**: Her bir haber kartını render eden NewsCard bileşeni.
- **Sayfalar**: Uygulamanın farklı sayfalarını yöneten yapı.
- **Store**: Haberlerin state yönetiminin yapıldığı bölüm.
 src/
├── components/
│   ├── AddModule/
│   ├── MainContainer/
│   ├── Navbar/
│   ├── NewsCard/               # Haber kartlarının render edildiği component
│   ├── NewsContainer/
│   ├── UpcomingContainer/
│   └── footer/
├── pages/
│   └── Home/                   # Ana sayfa yapısı
├── store/
│   ├── news/                   # Haberlerin state yönetiminin yapıldığı dosyalar (Reducer, Saga)
│   └── rootSaga.ts             # Tüm saga dosyalarının birleştirildiği dosya
├── App.tsx                     # Uygulamanın ana component'i
└── index.tsx                   # React uygulamasının başlangıç dosyası


## İşleyiş
1. Kullanıcı uygulamayı açtığında, `fetchNewslists` eylemi tetikleniyor.
2. Bu eylem, haber verilerini API'den çekiyor.
3. Çekilen veriler, Redux store'unda saklanıyor ve NewsCard bileşeninde görüntüleniyor.

## Responsive Tasarım
Mobil cihazlar için uyumluluğu sağlamak adına responsive bir tasarım uygulanmıştır. Haber kartları, haberin başlığı, açıklaması, kategorisi ve tarihi gibi bilgileri içermektedir.

## Proje Tasarımı
Parlak sarı, koyu mor ve parlak mor seçenekleri; bilginin çizgi roman deneyiminde dikkat çekici ve sürükleyici bir işlem yapabilmesi için uyum içinde kullanılmıştır.

## Karşılaşılan Zorluklar
- API'den veri çekerken zaman aşımı sorunları yaşandı; bu durumu yönetmek için Redux-Saga'nın `takeLatest` fonksiyonu kullanıldı.
- Eski tasarımın verimsizliğinden dolayı yeni arayüz oluştururken zorlandım; Dribbble ve Behance gibi sitelerden trend tasarımlar incelendi.

## Sonuç
Bu proje, modern web uygulamaları geliştirme konusundaki bilgi ve becerilerimi geliştirdi. Kullanıcı dostu arayüz tasarımı ve gelişmiş front-end teknolojileriyle çalışma deneyimim, beni bu alanda daha yetkin hale getirdi.


## Tasarım
Proje tasarımında, parlak sarı, koyu mor ve parlak mor tonları; kullanıcının çizgi roman deneyiminde dikkat çekici ve sürükleyici bir keşif yapabilmesi için uyum içinde kullanılmışıtr.

[Figma tasarımına buradan ulaşabilirsiniz.](https://www.figma.com/file/wxkJeU54yS6dsQJ1knWC5F/Untitled?type=design&node-id=0-163&mode=design&t=6H6GoTzDyAcKEQGr-0)
