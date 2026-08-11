export const translations = {
  tr: {
    nav: { career: 'Kariyer', hobbies: 'Hobiler', sports: 'Spor & Medya', gallery: 'Galeri', contact: 'İletişim', downloadCV: 'CV indir' },
    hero: {
      eyebrow: 'Bilgisayar Mühendisi · Tekirdağ',
      title: 'Merhaba, ben Emre.',
      subtitle: 'Otomasyon, iş analitiği ve üretim sistemleri alanlarında çalışıyorum. Boş zamanlarımda sunucular, donanım ve yerel yapay zekâ uygulamalarıyla uğraşıyorum.',
      primaryCta: 'Deneyimimi incele', secondaryCta: 'İletişime geç', available: 'Yeni bağlantılara ve fikirlere açık',
    },
    about: {
      eyebrow: 'Kısaca ben', title: 'Biraz iş, biraz teknoloji, biraz da merak.',
      p1: 'Canias ERP, ürün maliyetlendirme, Tableau raporlama ve üretim sistemleri üzerine çalışıyorum. Teknik konularla iş ihtiyaçlarının bir araya geldiği projelerde yer almaktan keyif alıyorum.',
      p2: 'Teknolojiyi 2012’den beri yakından takip ediyorum; merakım da büyük ölçüde buradan geliyor. Bilgisayar toplamak, Linux sunucular kurmak, Raspberry Pi üzerinde çalışmak ve yeni yapay zekâ araçlarını keşfetmek günlük hayatımın bir parçası.',
      stats: [
        { value: '300+', label: 'Tableau raporu' }, { value: '200+', label: 'Toplanan bilgisayar' },
        { value: '2012', label: 'Teknoloji merakının başlangıcı' }, { value: 'B1', label: 'İngilizce seviyesi' },
      ],
      personalTitle: 'Kısa bilgiler',
      personal: ['İngilizce · B1', 'B sınıfı ehliyet', 'Askerlik tamamlandı'],
    },
    experience: {
      eyebrow: 'Kariyer', title: 'Deneyim ve eğitim', skillsTitle: 'Yetkinlikler', educationTitle: 'Eğitim', certificateTitle: 'Sertifikalar',
      jobs: [
        { role: 'Otomasyon Mühendisi / İş Analisti', company: 'Yünsa A.Ş.', location: 'Tekirdağ', date: '2021 — Halen', bullets: [
          'Canias ERP üzerinde ürün maliyetlendirme süreçlerini ve operasyonel kârlılık analizlerini yönetiyorum.',
          'Tableau’da 300’den fazla rapor geliştirerek karar süreçlerini ve veri görünürlüğünü güçlendirdim.',
          'MES–ERP entegrasyonlarıyla otomasyon verilerinin akışını ve üretim verimliliğini iyileştirdim.',
          'FI Komitesi’nde TPM metodolojileriyle operasyonel iyileştirme projelerine liderlik ettim.',
        ] },
        { role: 'Futbol Hakemi', company: 'Türkiye Futbol Federasyonu', location: 'Düzce', date: '2018 — 2019', bullets: ['Amatör lig karşılaşmalarında hakemlik yaparak hızlı karar alma ve kriz yönetimi deneyimi kazandım.'] },
      ],
      education: { degree: 'Bilgisayar Mühendisliği, Lisans', school: 'Düzce Üniversitesi', date: '2016 — 2021' },
      certificates: ['Google Data Analytics · 2024', 'ISO 27001 İç Denetçi, Bureau Veritas · 2022', 'İş Analitiği, Academy Peak · 2021', 'Liderlik Eğitimi · 2021'],
      skills: ['Python', 'T-SQL', 'Canias ERP', 'Tableau', 'MES', 'RFID', 'Otomasyon', 'İş Analizi', 'Veri Görselleştirme', 'TPM', 'Langflow', 'Linux & Raspberry Pi'],
    },
    hobbies: {
      eyebrow: 'Kişisel galeri', title: 'Boş zamanlarda neler yapıyorum?',
      items: [
        { number: '01', type: 'hardware', metric: '200+', title: 'Bilgisayar toplama', tag: 'Donanım', desc: 'Bugüne kadar farklı kullanım amaçlarına ve bütçelere göre 200’den fazla bilgisayar topladım. Parça uyumu, soğutma, sistem kararlılığı, overclock ve undervolt konularıyla ilgileniyorum.' },
        { number: '02', type: 'server', metric: '7/24', title: 'Pi sunucum', tag: 'Linux & Self-hosting', desc: 'Kendi Raspberry Pi sunucumu yönetiyor; Linux, ağ servisleri, güvenli uzaktan erişim, yedekleme ve self-hosted uygulamalar üzerinde çalışıyorum.' },
        { number: '03', type: 'sports', metric: '#1', title: 'Spor ve turnuvalar', tag: 'Takım ruhu', desc: 'Farklı spor etkinlikleri ve turnuvalarda yer aldım. Kazandığım smaç yarışması, bu alandaki en güzel anılarımdan biri.' },
        { number: '04', type: 'ai', metric: 'AI', title: 'Yerel yapay zekâ', tag: 'Langflow', desc: 'Yerel yapay zekâ modellerini çalıştırıyor, Langflow ile küçük uygulamalar ve iş akışları geliştiriyorum. Bu alanda çalışmaya ve yeni şeyler öğrenmeye devam ediyorum.' },
      ],
    },
    sports: {
      eyebrow: 'Sportif Kişilik & Medya',
      title: 'Saha Anıları, Turnuvalar ve Smaç Yarışması',
      subtitle: 'Basketbol smaç yarışması birinciliği, TFF futbol hakemliği tecrübesi ve katıldığım spor turnuvalarından fotoğraf ve video kayıtları.',
      stats: [
        { value: '#1', label: 'Smaç Yarışması Şampiyonu' },
        { value: 'TFF', label: 'Futbol Hakemliği' },
        { value: '5+', label: 'Turnuva & Şampiyona' },
        { value: '8', label: 'Medya Anısı' },
      ],
      filterAll: 'Tümü',
      filterPhotos: 'Fotoğraflar',
      filterVideos: 'Videolar',
      filterDunk: 'Smaç Yarışması',
      items: [
        { id: 1, type: 'video', category: 'dunk', title: 'Smaç Performansı', tag: 'Smaç Yarışması', src: '/media/VID-20250522-WA0001.mp4', caption: 'Smaç yarışmasında sergilediğim yüksek patlayıcılığa sahip smaç gösterisi.' },
        { id: 2, type: 'image', category: 'dunk', title: 'Smaç Yarışması Anı', tag: 'Smaç & Şampiyonluk', src: '/media/TJUW9403.JPG', caption: 'Smaç yarışmasında yakalanan aksiyon ve smaç anı karesi.' },
        { id: 3, type: 'video', category: 'dunk', title: 'Smaç Yarışması Final Smaçları', tag: 'Basketbol & Smaç', src: '/media/WRSY6502.MP4', caption: 'Smaç yarışması final etabındaki smaç performansı.' },
        { id: 4, type: 'image', category: 'sports', title: 'Turnuva Mücadelesi', tag: 'Takım Sporları', src: '/media/BATQ7656.JPG', caption: 'Katıldığım spor turnuvaları ve maç içi çekimler.' },
        { id: 5, type: 'video', category: 'sports', title: 'Turnuva Aksiyonu', tag: 'Basketbol Turnuvası', src: '/media/IMG_6129.MP4', caption: 'Basketbol turnuvasındaki maç anları ve saha içi hareketler.' },
        { id: 6, type: 'image', category: 'referee', title: 'Hakemlik & Saha Görevi', tag: 'TFF Hakemliği', src: '/media/IMG-20161115-WA0024.jpg', caption: 'Türkiye Futbol Federasyonu bünyesinde amatör lig hakemliği anısı.' },
        { id: 7, type: 'video', category: 'dunk', title: 'Smaç Hareketi & Antrenman', tag: 'Basketbol', src: '/media/DKFB0267.MP4', caption: 'Basketbol antrenmanından smaç denemeleri ve atletizm çalışması.' },
        { id: 8, type: 'video', category: 'sports', title: 'Maç İçi Mücadele', tag: 'Spor & Rekabet', src: '/media/YJGJ7540.MP4', caption: 'Saha içi maç aksiyonu ve spor disiplini.' },
      ],
    },
    gallery: {
      eyebrow: 'Galeri', title: 'Uğraşlarımdan küçük kareler', desc: 'Donanım, sunucu, spor ve yapay zekâ tarafında ilgilendiğim konulardan bir seçki.',
      items: [
        { number: '01', type: 'hardware', title: 'Sistem toplama', caption: 'Sistem kurulumları, overclock, undervolt ve soğutma çalışmaları.' },
        { number: '02', type: 'server', title: 'Ev sunucusu', caption: 'Raspberry Pi, Linux ve self-hosted servis çalışmaları.' },
        { number: '03', type: 'sports', title: 'Spor anıları', caption: 'Turnuvalar, takım oyunları ve smaç yarışmasından anlar.' },
        { number: '04', type: 'ai', title: 'Yapay zekâ çalışmaları', caption: 'Yerel modeller ve Langflow ile hazırladığım küçük uygulamalar.' },
      ],
    },
    contact: { eyebrow: 'İletişim', title: 'Tanışmak istersen buradayım.', desc: 'Otomasyon, veri, teknoloji veya ortak ilgi alanlarımız üzerine konuşmak için bana ulaşabilirsin.', email: 'E-posta gönder', linkedin: 'LinkedIn’de bağlan' },
    footer: 'Bilgisayar Mühendisi · Otomasyon & İş Analitiği',
  },
  en: {
    nav: { career: 'Career', hobbies: 'Hobbies', sports: 'Sports & Media', gallery: 'Gallery', contact: 'Contact', downloadCV: 'Download CV' },
    hero: {
      eyebrow: 'Computer Engineer · Tekirdağ',
      title: 'Hi, I’m Emre.',
      subtitle: 'I work in automation, business analytics and manufacturing systems. In my spare time, I tinker with servers, hardware and local AI applications.',
      primaryCta: 'View my experience', secondaryCta: 'Get in touch', available: 'Open to new connections and ideas',
    },
    about: {
      eyebrow: 'About me', title: 'A little work, a little technology and plenty of curiosity.',
      p1: 'I work with Canias ERP, product costing, Tableau reporting and manufacturing systems. I enjoy taking part in projects where technical topics and business needs meet.',
      p2: 'I have closely followed technology since 2012, which is where much of my curiosity comes from. Building computers, running Linux servers, working with Raspberry Pi and exploring new AI tools are all part of my everyday life.',
      stats: [
        { value: '300+', label: 'Tableau reports' }, { value: '200+', label: 'Custom PC builds' },
        { value: '2012', label: 'Following technology since' }, { value: 'B1', label: 'English level' },
      ],
      personalTitle: 'Quick facts',
      personal: ['English · B1', 'Class B driving licence', 'Military service completed'],
    },
    experience: {
      eyebrow: 'Career', title: 'Experience & education', skillsTitle: 'Capabilities', educationTitle: 'Education', certificateTitle: 'Certificates',
      jobs: [
        { role: 'Automation Engineer / Business Analyst', company: 'Yünsa A.Ş.', location: 'Tekirdağ', date: '2021 — Present', bullets: [
          'Manage product costing processes and operational profitability analysis in Canias ERP.',
          'Developed more than 300 Tableau reports, improving decision-making and data visibility.',
          'Improved automation data flow and production efficiency through MES–ERP integrations.',
          'Led operational improvement projects with TPM methodologies as part of the FI Committee.',
        ] },
        { role: 'Football Referee', company: 'Turkish Football Federation', location: 'Düzce', date: '2018 — 2019', bullets: ['Officiated amateur league matches, building decisive judgement and crisis-management skills.'] },
      ],
      education: { degree: 'BSc, Computer Engineering', school: 'Düzce University', date: '2016 — 2021' },
      certificates: ['Google Data Analytics · 2024', 'ISO 27001 Internal Auditor, Bureau Veritas · 2022', 'Business Analytics, Academy Peak · 2021', 'Leadership Training · 2021'],
      skills: ['Python', 'T-SQL', 'Canias ERP', 'Tableau', 'MES', 'RFID', 'Automation', 'Business Analysis', 'Data Visualization', 'TPM', 'Langflow', 'Linux & Raspberry Pi'],
    },
    hobbies: {
      eyebrow: 'Personal gallery', title: 'What do I do in my spare time?',
      items: [
        { number: '01', type: 'hardware', metric: '200+', title: 'Building computers', tag: 'Hardware', desc: 'I have built more than 200 computers for different needs and budgets. I am familiar with component compatibility, cooling, system stability, overclocking and undervolting.' },
        { number: '02', type: 'server', metric: '24/7', title: 'My Pi server', tag: 'Linux & Self-hosting', desc: 'I manage my own Raspberry Pi server and work with Linux, network services, secure remote access, backups and self-hosted applications.' },
        { number: '03', type: 'sports', metric: '#1', title: 'Sports & tournaments', tag: 'Team spirit', desc: 'I have taken part in various sports events and tournaments. Winning a slam dunk contest remains one of my favorite memories.' },
        { number: '04', type: 'ai', metric: 'AI', title: 'Local artificial intelligence', tag: 'Langflow', desc: 'I run local AI models and build small applications and workflows with Langflow. I continue working and learning in this area.' },
      ],
    },
    sports: {
      eyebrow: 'Athletic Spirit & Media',
      title: 'Field Memories, Tournaments & Slam Dunk Contest',
      subtitle: 'Basketball slam dunk competition victory, TFF football refereeing experience, and photos & videos from sports tournaments.',
      stats: [
        { value: '#1', label: 'Slam Dunk Champion' },
        { value: 'TFF', label: 'Official Football Referee' },
        { value: '5+', label: 'Tournaments & Cups' },
        { value: '8', label: 'Media Highlights' },
      ],
      filterAll: 'All',
      filterPhotos: 'Photos',
      filterVideos: 'Videos',
      filterDunk: 'Dunk Contest',
      items: [
        { id: 1, type: 'video', category: 'dunk', title: 'Slam Dunk Performance', tag: 'Dunk Contest', src: '/media/VID-20250522-WA0001.mp4', caption: 'High-explosiveness slam dunk showcase in the Dunk Contest.' },
        { id: 2, type: 'image', category: 'dunk', title: 'Dunk Contest Moment', tag: 'Dunk & Victory', src: '/media/TJUW9403.JPG', caption: 'Action shot captured during the Slam Dunk Competition.' },
        { id: 3, type: 'video', category: 'dunk', title: 'Dunk Competition Finals', tag: 'Basketball & Dunk', src: '/media/WRSY6502.MP4', caption: 'Final round dunk performance during the championship.' },
        { id: 4, type: 'image', category: 'sports', title: 'Tournament Match', tag: 'Team Sports', src: '/media/BATQ7656.JPG', caption: 'Photos from competitive sports tournaments and matches.' },
        { id: 5, type: 'video', category: 'sports', title: 'Tournament Action', tag: 'Basketball Tournament', src: '/media/IMG_6129.MP4', caption: 'On-court highlights from basketball tournament matches.' },
        { id: 6, type: 'image', category: 'referee', title: 'Refereeing & On-Field Duty', tag: 'TFF Refereeing', src: '/media/IMG-20161115-WA0024.jpg', caption: 'Memory from officiating in the amateur leagues for the Turkish Football Federation.' },
        { id: 7, type: 'video', category: 'dunk', title: 'Dunk Practice & Athletics', tag: 'Basketball', src: '/media/DKFB0267.MP4', caption: 'Athletic practice session and dunk attempts.' },
        { id: 8, type: 'video', category: 'sports', title: 'On-Field Action', tag: 'Sports & Competition', src: '/media/YJGJ7540.MP4', caption: 'Match action and athletic discipline on the field.' },
      ],
    },
    gallery: {
      eyebrow: 'Gallery', title: 'A few frames from my interests', desc: 'A small selection from the hardware, servers, sports and artificial intelligence topics I explore.',
      items: [
        { number: '01', type: 'hardware', title: 'System builds', caption: 'System builds, overclocking, undervolting and cooling work.' },
        { number: '02', type: 'server', title: 'Home server', caption: 'Work with Raspberry Pi, Linux and self-hosted services.' },
        { number: '03', type: 'sports', title: 'Sports memories', caption: 'Moments from tournaments, team sports and the slam dunk contest.' },
        { number: '04', type: 'ai', title: 'AI work', caption: 'Small applications built with local models and Langflow.' },
      ],
    },
    contact: { eyebrow: 'Contact', title: 'Feel free to say hello.', desc: 'You can reach out for a chat about automation, data, technology or any interests we share.', email: 'Send an email', linkedin: 'Connect on LinkedIn' },
    footer: 'Computer Engineer · Automation & Business Analytics',
  },
} as const;

export type Language = 'tr' | 'en';
