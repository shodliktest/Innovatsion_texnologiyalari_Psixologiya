// ===== PAROL TIZIMI =====
const AUTH_KEY = 'inavatsilya_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quiz_remaining_indices';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
{
  question: "Innovatsion ta'lim texnologiyalarining asosiy maqsadi nima?",
  options: [
    "O'quv jarayonini takomillashtirish",
    "O'quvchilarni sinovdan o'tkazish",
    "Ta'lim sohasida yangiliklar yaratish",
    "O'qituvchilarni ishga joylashtirish"
  ],
  correctAnswer: "O'quv jarayonini takomillashtirish"
},
{
  question: "Haqiqiy ta'lim texnologiyalarining asosiy afzalliklardan biri nima?",
  options: [
    "O'quv jarayonining samaradorligini oshirish",
    "Faoliyatni avtomatlashtirish",
    "O'quvchilarni faqat testlardan foydalanishga o'rgatish",
    "O'qituvchilarning ishlash vaqtini kamaytirish"
  ],
  correctAnswer: "O'quv jarayonining samaradorligini oshirish"
},
{
  question: "Innovatsion ta'lim texnologiyalarini qo'llashda qanday asosiy metodlardan foydalaniladi?",
  options: [
    "Interaktiv va multimedia metodlari",
    "Vaqtni qisqartirish metodlari",
    "Tekshirish va tahlil metodlari",
    "Yozma va og'zaki metodlar"
  ],
  correctAnswer: "Interaktiv va multimedia metodlari"
},
{
  question: "Masofaviy ta'limda asosiy vosita nima?",
  options: [
    "Kompyuterlar va internet",
    "Kitoblar",
    "O'quvchilarni bir joyga to'plash",
    "Mobil telefonlar"
  ],
  correctAnswer: "Kompyuterlar va internet"
},
{
  question: "Innovatsion ta'lim texnologiyalarining qayta aloqa tizimi nima?",
  options: [
    "O'quv jarayonining natijalarini tahlil qilish",
    "O'quvchilarning xatolarini belgilash",
    "O'qituvchining baholash tizimi",
    "O'quvchilarni rag'batlantirish usuli"
  ],
  correctAnswer: "O'quv jarayonining natijalarini tahlil qilish"
},
{
  question: "Blended learning (aralash ta'lim) qanday ta'lim usulini anglatadi?",
  options: [
    "An'anaviy va masofaviy ta'limning birlashuvi",
    "Faqat masofaviy ta'lim",
    "Faqat guruh ishlari",
    "O'qituvchidan faqat nazariy bilim olish"
  ],
  correctAnswer: "An'anaviy va masofaviy ta'limning birlashuvi"
},
{
  question: "Ta'limda ijtimoiy media texnologiyalarining afzalliklari nimalardan iborat?",
  options: [
    "O'quvchilarga o'z fikrlarini erkin bildirish imkoniyati",
    "Yagona ta'lim platformasiga to'planish",
    "Faqat professional o'qituvchilar uchun ishlatiladi",
    "O'quvchilarning faqat o'quv resurslarini topish"
  ],
  correctAnswer: "O'quvchilarga o'z fikrlarini erkin bildirish imkoniyati"
},
{
  question: "Ta'limda o'yin texnologiyalarining qo'llanilishi nima uchun muhim?",
  options: [
    "O'quvchilarning diqqatini jamlash",
    "O'qituvchilarni ishga jalb qilish",
    "O'quvchilarga o'z fikrlarini erkin ifodalash imkonini berish",
    "O'qituvchining bilimini sinovdan o'tkazish"
  ],
  correctAnswer: "O'quvchilarning diqqatini jamlash"
},
{
  question: "Dijital ta'lim texnologiyalarini qo'llashning asosiy natijasi nima?",
  options: [
    "O'qituvchilarning bilim va ko'nikmalarini oshirish",
    "O'quvchilarga vaqt tejash",
    "O'quvchilarga texnik ko'nikmalarni berish",
    "Ta'lim tizimini yangilash"
  ],
  correctAnswer: "O'quvchilarga texnik ko'nikmalarni berish"
},
{
  question: "Innovatsion ta'lim texnologiyalarini joriy etishda asosiy muammo nima bo'lishi mumkin?",
  options: [
    "Yangi texnologiyalarni o'zlashtirish qiyinligi",
    "O'qituvchilarning texnik salohiyati",
    "O'quvchilarning bilim darajasi",
    "Ta'lim resurslarining kamligi"
  ],
  correctAnswer: "Yangi texnologiyalarni o'zlashtirish qiyinligi"
},
{
  question: "Innovatsion ta'lim texnologiyalarining asosiy xususiyatlaridan biri nima?",
  options: [
    "O'quvchilarni mustaqil o'rganishga rag'batlantiradi",
    "Faqat yozma materiallarga asoslanadi",
    "O'qituvchilarni faqat nazariy bilimlarni berish bilan cheklaydi",
    "Tezda natijalarga erishish imkonini beradi"
  ],
  correctAnswer: "O'quvchilarni mustaqil o'rganishga rag'batlantiradi"
},
{
  question: "O'qitish va o'rganishda 'gamifikatsiya' texnologiyasining maqsadi nima?",
  options: [
    "O'quvchilarga o'yin mexanikasi orqali o'rganish imkonini yaratish",
    "O'quvchilarga faqat o'yinlar o'ynatish",
    "O'qituvchilarni o'yin orqali baholash",
    "O'quvchilarga faqat video materiallarni ko'rsatish"
  ],
  correctAnswer: "O'quvchilarga o'yin mexanikasi orqali o'rganish imkonini yaratish"
},
{
  question: "Masofaviy ta'limni samarali o'tkazish uchun qanday vosita zarur?",
  options: [
    "Kompyuter va internet tarmog'i",
    "Faqat telefonlar",
    "An'anaviy darsliklar",
    "O'quvchilarni faqat guruhlarga ajratish"
  ],
  correctAnswer: "Kompyuter va internet tarmog'i"
},
{
  question: "'Virtual sinf' tushunchasi nima?",
  options: [
    "Internet orqali onlayn tarzda o'tkaziladigan darslar",
    "Faqat o'quvchilar tomonidan tashkil etilgan darslar",
    "O'quvchilarni faqat yozma tarzda baholash",
    "Sinfda o'qituvchining mavjud bo'lmasi"
  ],
  correctAnswer: "Internet orqali onlayn tarzda o'tkaziladigan darslar"
},
{
  question: "Innovatsion ta'lim texnologiyalarining eng muhim ustunligi nima?",
  options: [
    "Ta'limda interaktivlikni oshirish",
    "O'qituvchining vaqtini tejash",
    "O'quvchilarga o'z-o'zini baholash imkoniyatini yaratish",
    "Faqat darslarni yanada murakkab qilish"
  ],
  correctAnswer: "Ta'limda interaktivlikni oshirish"
},
{
  question: "O'qituvchilarning innovatsion ta'lim texnologiyalariga tayyorligi qanday baholanadi?",
  options: [
    "Yangi texnologiyalarni tez o'zlashtirishga qobiliyati",
    "Ta'lim dasturlarini amalda qo'llash",
    "O'qituvchilarning faqat nazariy bilimlari",
    "Texnik asbob-uskunalarni sotib olish"
  ],
  correctAnswer: "Yangi texnologiyalarni tez o'zlashtirishga qobiliyati"
},
{
  question: "Hamkorlikda (collaborative) o'qishning asosiy afzalligi nima?",
  options: [
    "O'quvchilarning bir-birlari bilan bilim almashish imkoniyati",
    "O'quvchilarning individual o'rganishini rag'batlantirish",
    "O'qituvchilarning darslarni faqat nazariy shaklda o'tkazishi",
    "Faqat texnik ko'nikmalarni rivojlantirish"
  ],
  correctAnswer: "O'quvchilarning bir-birlari bilan bilim almashish imkoniyati"
},
{
  question: "Virtual sinfda o'qitish jarayonini baholashda qanday texnologiyalar qo'llaniladi?",
  options: [
    "Onlayn testlar va interaktiv topshiriqlar",
    "Faqat yozma imtihonlar",
    "O'quvchilarni guruhlarga ajratish",
    "O'qituvchilarning darsni matnli shaklda baholash"
  ],
  correctAnswer: "Onlayn testlar va interaktiv topshiriqlar"
},
{
  question: "Innovatsion ta'lim texnologiyalarining eng asosiy xususiyatlaridan biri nima?",
  options: [
    "O'quv jarayonini avtomatlashtirish va optimallashtirish",
    "O'qituvchilarga yangi metodlarni o'rgatish",
    "O'quvchilarga an'anaviy o'qish usullarini qo'llash",
    "Faqat maxsus darsliklarni qo'llash"
  ],
  correctAnswer: "O'quv jarayonini avtomatlashtirish va optimallashtirish"
},
{
  question: "Multimedia texnologiyalarining ta'lim jarayonida qanday o'rni bor?",
  options: [
    "O'quvchilarga ko'proq interaktiv tajribalarni yaratish",
    "O'quvchilarning diqqatini chalg'itish",
    "Faqat video materiallarni ko'rsatish",
    "O'quvchilarni faqat amaliy ishlarga jalb qilish"
  ],
  correctAnswer: "O'quvchilarga ko'proq interaktiv tajribalarni yaratish"
},
{
  question: "Ta'limda ko'p foydalanuvchili (collaborative) texnologiyalarni qo'llashning afzalligi nima?",
  options: [
    "O'quvchilarning guruh ishlari orqali fikr almashishi",
    "O'quvchilarni faqat o'z-o'zini o'rganishga o'rgatish",
    "Faqat sinfda ishlash",
    "O'qituvchilarga faqat nazariy ma'lumotlar berish"
  ],
  correctAnswer: "O'quvchilarning guruh ishlari orqali fikr almashishi"
},
{
  question: "Ta'limda sun'iy intellekt texnologiyalaridan foydalanishning asosiy maqsadi nima?",
  options: [
    "O'qituvchilarga bilimlarni avtomatik ravishda baholash",
    "O'quvchilarga faqat matematikani o'rgatish",
    "O'quvchilarga faqat darsdan oldin tayyorgarlik ko'rish",
    "O'quvchilarning diqqatini chalg'itish"
  ],
  correctAnswer: "O'qituvchilarga bilimlarni avtomatik ravishda baholash"
},
{
  question: "Mobil o'qish (mobile learning) texnologiyasining afzalliklari nimalardan iborat?",
  options: [
    "O'qish va o'rganish jarayonini istalgan joyda davom ettirish imkoniyati",
    "O'quvchilarga faqat o'yin o'ynash imkonini berish",
    "Faqat nazariy bilimlarni olish",
    "O'quvchilarga faqat sinfda ishlash imkonini berish"
  ],
  correctAnswer: "O'qish va o'rganish jarayonini istalgan joyda davom ettirish imkoniyati"
},
{
  question: "O'qituvchining innovatsion ta'lim texnologiyalariga moslashuvchanligi nimani anglatadi?",
  options: [
    "O'qituvchining yangi texnologiyalarni darslarga samarali integratsiya qilish qobiliyati",
    "O'qituvchining faqat yozma materiallar bilan ishlashi",
    "O'qituvchining darsni faqat an'anaviy usullar bilan o'tkazishi",
    "O'qituvchining barcha yangi texnologiyalarni bekor qilishi"
  ],
  correctAnswer: "O'qituvchining yangi texnologiyalarni darslarga samarali integratsiya qilish qobiliyati"
},
{
  question: "'Ko'pgina maktablarda orqadagi partalda xuddi xurlanganlardek, mayus, serjahl, hanuz narsaga beparvo qaraydigan, ulg'urmaydigan bolalar o'tirishini o'ylasam yuragim orqaga tortib ketadi.' Bu g'oya kimning qaysi asarida keltrilgan?",
  options: [
    "A. Suxomlinskiy 'Tarbiya haqida'",
    "A. Avloniy 'Birinchi muallim'",
    "K.D. Ushinskiy 'Inson tarbiya predmeti haqida'",
    "A.S. Makarenko 'Pedagogik adabiyotning foydasi haqida'"
  ],
  correctAnswer: "A. Suxomlinskiy 'Tarbiya haqida'"
},
{
  question: "Intellektni mashq qildirish va mantiqiy fikrlashga o'rgatish darsning qaysi qismida amalga oshiriladi?",
  options: [
    "Mustahkamlash",
    "Kirish",
    "Asosiy",
    "Yakuniy"
  ],
  correctAnswer: "Asosiy"
},
{
  question: "Og'zaki nutq qanday vosita turi hisoblanadi?",
  options: [
    "Verbal",
    "Shaxsiy",
    "Axborot",
    "Faktik"
  ],
  correctAnswer: "Verbal"
},
{
  question: "Interfaol metodlarda 'Aqliy hujum metodi'dan foydalanish qanday samara beradi?",
  options: [
    "Ijodiy tafakkurni rivojlantiradi",
    "Fanga qiziqtiradi",
    "Aqliy faoliyatni o'stiradi",
    "Mutaxassislikka yo'llaydi"
  ],
  correctAnswer: "Ijodiy tafakkurni rivojlantiradi"
},
{
  question: "Pedagogning kommunikativ madaniyati...?",
  options: [
    "Pedagogning dunyoga, pedagog voqelikka va pedagogik jarayonga bo'lgan intelektual va hissiy munosabati",
    "Pedagogning kishilar bilan qisqa muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi",
    "O'qituvchining ob'yektivlik mezoni, uning ma'naviy tayyorgarlik darajasi",
    "Pedagogik jarayonning asosiy birligi, o'ziga xos tizimidir"
  ],
  correctAnswer: "Pedagogning kishilar bilan qisqa muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi"
},
{
  question: "Pedagogik texnologiya monitoringida birinchi bosqich bu...?",
  options: [
    "O'rganish",
    "Natija",
    "Tahlil eta bilish",
    "Sintez"
  ],
  correctAnswer: "O'rganish"
},
{
  question: "Ta'lim oluvchilarning nutq madaniyati va mantiqiy tafakkurini taraqqiy ettirish, ularning bilish imkoniyatlari bilan bog'liq usul qanday usul deyiladi?",
  options: [
    "O'yin mashqi",
    "Og'zaki mashq",
    "Yozma mashq",
    "Individual mashq"
  ],
  correctAnswer: "Og'zaki mashq"
},
{
  question: "... jarayon yoki natija sifatida ijodkorlikni namoyon etuvchi, masalalarni yechishga nostandart usullar bilan yondasha olishga moyil, o'ziga xos harakatlarni tashkil etish, yangiliklarni ilgari surishga, ijodiy mahsulotlarni yaratishga layoqatli va tayyor shaxs.",
  options: [
    "Ijodkorlik",
    "Bunyodkor shaxs",
    "Kreativ shaxs",
    "Ijodiy topshiriqlar"
  ],
  correctAnswer: "Kreativ shaxs"
},
{
  question: "Ta'lim jarayonida o'qituvchining pedagogik mahoratini namoyon etuvchi asosiy vositalar?",
  options: [
    "O'quvchining nazariy hamda amaliy faoliyatida erishadigan yutuqlari va ijobiy natijalari",
    "Ta'lim beruvchi va ta'lim oluvchining o'zaro faoliyati",
    "Standart va nostandart mashg'ulotlarni o'tkazish",
    "O'quv materiallarini nazariy va amaliy jihatdan puxta o'zlashtirishi"
  ],
  correctAnswer: "O'quvchining nazariy hamda amaliy faoliyatida erishadigan yutuqlari va ijobiy natijalari"
},
{
  question: "Pedagogika qanday fan?",
  options: [
    "Pedagogika tarbiya jarayonining qonuniyatlari, prinsiplari, shakl va metodlari haqidagi gumanitar fan",
    "Pedagogika tarbiyaning nazariy asoslarini tadqiq etuvchi ijtimoiy-gumanitar fan",
    "Ta'lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlari, metodlarini o'rganuvchi ijtimoiy fan",
    "Pedagogika tarbiyaning mazmuni, qonuniyatlari, metodlarini o'rganuvchi, ijtimoiy, umumlashgan fan"
  ],
  correctAnswer: "Pedagogika tarbiyaning mazmuni, qonuniyatlari, metodlarini o'rganuvchi, ijtimoiy, umumlashgan fan"
},
{
  question: "Bolani 6 yoshdan jamoada o'qitishning afzalliklari haqida qaysi mutafakkir gapirgan?",
  options: [
    "Arastu",
    "Demokrit",
    "Abu Ali ibn Sino",
    "Kaykovus"
  ],
  correctAnswer: "Arastu"
},
{
  question: "Didaktika so'zi qanday ma'noni bildiradi?",
  options: [
    "Didaktika grekcha so'z bo'lib pand-nasihat ma'nolarini bildiradi",
    "Didaktika lotin tilidan olingan bo'lib 'didayko' ya'ni tarbiyalayapman degan ma'noni beradi",
    "Didaktika grekcha so'z bo'lib didayko so'zi tarbiyalovchi ta'lim degan ma'noni bildiradi",
    "Didaktika grekcha so'z bo'lib didayko ya'ni o'qitish, o'rganish ma'nolarini beradi"
  ],
  correctAnswer: "Didaktika grekcha so'z bo'lib didayko ya'ni o'qitish, o'rganish ma'nolarini beradi"
},
{
  question: "Didaktikaning asosiy tushunchalari qaysilar?",
  options: [
    "Ta'lim jarayon mohiyati, qonuniyatlari, prinsiplari, metodlari",
    "Dars, darsdan tashqari ishlar bilim, ko'nikma, malaka",
    "Dars, o'quvchilarning mustaqil ishlari, ekskursiya bayon",
    "Dars, suhbat, ma'ruza, hikoya ko'rish"
  ],
  correctAnswer: "Ta'lim jarayon mohiyati, qonuniyatlari, prinsiplari, metodlari"
},
{
  question: "An'anaviy ta'limida eng ko'p qo'llaniladigan metod bu:",
  options: [
    "Tushuntirish-namoyish",
    "Keys stadi",
    "Loyiha",
    "Klaster"
  ],
  correctAnswer: "Tushuntirish-namoyish"
},
{
  question: "An'anaviy ta'limida pedagogik munosabatning ... turiga asoslanadi.",
  options: [
    "Avtoritar",
    "Insonparvar",
    "Demokratik",
    "Liberal"
  ],
  correctAnswer: "Avtoritar"
},
{
  question: "Interfaol metodi 'Labirint' ... maqsadlarda qo'llaniladi?",
  options: [
    "Nostandart vaziyatlarda yo'l topish, ijodiy tadqiqotchilik",
    "O'quvchilarni faollashtirish, jadallashtirish",
    "Ijodiy mustaqil fikrlashni rivojlantirish",
    "Shaxsiy va kasbiy fazilatlarni shakllantirish"
  ],
  correctAnswer: "Nostandart vaziyatlarda yo'l topish, ijodiy tadqiqotchilik"
},
{
  question: "... pedagogik texnologiyalar: umumpedagogik, xususiy metodik, lokal turlariga bo'linadi.",
  options: [
    "Qo'llanish darajasiga ko'ra",
    "Ilmiy konsepsiyaga ko'ra",
    "Falsafiy asosga ko'ra",
    "Yetakchi olimlarga ko'ra"
  ],
  correctAnswer: "Qo'llanish darajasiga ko'ra"
},
{
  question: "... turida pedagog faqat birgina o'quvchi bilan o'zaro munosabatda bo'ladi.",
  options: [
    "Individual o'qitish texnologiyasi",
    "Jadallashtirish o'qitish texnologiyasi",
    "Erkin o'qitish texnologiyasi",
    "Muammoli o'qitish texnologiyasi"
  ],
  correctAnswer: "Individual o'qitish texnologiyasi"
},
{
  question: "Ma'lum bir mahsulotni ishlab chiqish ketma-ketligini bayon qiluvchi hujjat bu:",
  options: [
    "Texnologik xarita",
    "O'quv dasturi",
    "Taqvimiy-mavzular rejasi",
    "Amaliy mashg'ulot reja"
  ],
  correctAnswer: "Texnologik xarita"
},
{
  question: "Pedagogik texnologiya qaysi ta'lim turlarida qo'llaniladi?",
  options: [
    "Uzluksiz ta'lim tizimining barcha turlarida",
    "Faqat umumiy o'rta ta'lim, o'rta maxsus, kasb-hunar ta'limi, oliy ta'lim",
    "Umumiy o'rta ta'lim, Oliy ta'lim",
    "O'rta maxsus kasb-hunar ta'limi, oliy ta'lim"
  ],
  correctAnswer: "Uzluksiz ta'lim tizimining barcha turlarida"
},
{
  question: "Pedagogik texnologiyadan ko'zlangan maqsad ... dan iborat.",
  options: [
    "Yuqori sifat va samaradorlikka erishish",
    "Ta'limni tabaqalashtirish va individuallashtirish",
    "O'qituvchining vazifalarini yengillashtirish",
    "Ta'limni individuallashtirish"
  ],
  correctAnswer: "Yuqori sifat va samaradorlikka erishish"
},
{
  question: "Ta'lim jarayonini 'texnologiyalashtirish' qanday ma'noni anglatadi?",
  options: [
    "Ta'lim maqsadlarga erishishda ta'lim jarayonini o'qituvchining shaxsiy mahoratiga bog'liq bo'lmagan holda universal tarzda loyihalashini",
    "Ta'limni o'qitish vositalari asosida tashkil etishni",
    "Ta'limni ishlab chiqarish bilan bog'lab, uni yuqori darajada texnologiyalangan ishlab chiqarish korxonalarida tashkil etishni",
    "Ta'limda ishlab chiqarishni tashkil etishni"
  ],
  correctAnswer: "Ta'lim maqsadlarga erishishda ta'lim jarayonini o'qituvchining shaxsiy mahoratiga bog'liq bo'lmagan holda universal tarzda loyihalashini"
},
{
  question: "Ta'limda maqsadga erishish masalaharini hal etish yo'llari umumiy holda ... deb ataladi.",
  options: [
    "Metod",
    "Texnologiya",
    "Prinsip",
    "Uslubiyot"
  ],
  correctAnswer: "Metod"
},
{
  question: "Monologik metod bu-...",
  options: [
    "Ma'ruza, hikoya qilish",
    "Suhbat",
    "Individual, guruh, frontal",
    "Munozara"
  ],
  correctAnswer: "Ma'ruza, hikoya qilish"
},
{
  question: "'Pinbord' metodining ma'nosi - bu ...",
  options: [
    "Inglizcha doskada mustahkamlash",
    "Fransuz so'zdan olingan bo'lib, besh qator degan ma'noni anglatadi",
    "Ingliz so'zdan olingan bo'lib, tarmoglash, g'uncha degan ma'noni anglatadi",
    "Grekcha so'zdan olingan bo'lib, bilish yo'llari degan ma'noni anglatadi"
  ],
  correctAnswer: "Ingliz so'zdan olingan bo'lib, tarmoglash, g'uncha degan ma'noni anglatadi"
},
{
  question: "'Issiq kartoshka' metodining mohiyati nimadan iborat?",
  options: [
    "Talaba oluvchilarning tezkor javob berishga o'rgatishdan iborat",
    "O'quvchilarning berilgan savol bo'yicha boshlang'ich bilimlarni aniqlab olinishi",
    "O'quvchilarning kichik guruhlarda ijodiy ishlashi",
    "O'quvchilarning hamkorlikda berilgan savollarga tezkor javob berishi"
  ],
  correctAnswer: "O'quvchilarning hamkorlikda berilgan savollarga tezkor javob berishi"
},
{
  question: "'Muzyorar' metodi ... maqsadda amalga oshiriladi.",
  options: [
    "Guruhda iliq psixologik muhtini yaratish",
    "O'quvchilarning mavzu bo'yicha boshlang'ich bilimlarini aniqlash",
    "O'quvchilar bilan o'yin tarzida mavzu bo'yicha yangi axborotni o'zlashtirish",
    "O'quvchilar tomonidan mavzu yuzasidan uchraydigan hayotiy vaziyatlarning har xil shart-sharoitlarni sahnalashtirish"
  ],
  correctAnswer: "Guruhda iliq psixologik muhtini yaratish"
},
{
  question: "O'yinchi so'z va iboralarni yozish, ular o'rtasidagi bog'lanishlarni o'rnatish va tahlil etish - bu...",
  options: [
    "Klaster metodi",
    "To'plash jadvali",
    "Baliq skeleti",
    "'Nilufar gull' sxemasi"
  ],
  correctAnswer: "Klaster metodi"
},
{
  question: "'Zakovat o'yin!' didaktik o'yinning qaysi turiga tegishli?",
  options: [
    "Ijodiy o'yin",
    "O'yin mashqi",
    "Rolli o'yin",
    "Ishbilarmonlik o'yin"
  ],
  correctAnswer: "Ijodiy o'yin"
},
{
  question: "'Ariz-triz' metodi kim tomonidan ishlab chiqilgan?",
  options: [
    "G.S. Altshuller",
    "Yu.M. Sobolev",
    "L. Mayez",
    "Ye.A. Aleksandrov"
  ],
  correctAnswer: "G.S. Altshuller"
},
{
  question: "'Induksiya' qanday ma'noga ega?",
  options: [
    "Keltirib chiqarish",
    "Ma'nolar tizimi",
    "Bosqichli o'qitish",
    "Bosqichli o'rganish"
  ],
  correctAnswer: "Keltirib chiqarish"
},
{
  question: "'Konsepsiya' atamasi nimanı anglatadi?",
  options: [
    "Dorak etish, tizim",
    "O'zlashtirish, anglab yetish",
    "Bilish, ko'rish, o'rganish",
    "Bilish, baholash, tushunib yetish"
  ],
  correctAnswer: "Dorak etish, tizim"
},
{
  question: "'Motivatsiya' qanday ma'noga ega?",
  options: [
    "Harakatlantirish",
    "O'rgatish",
    "Tushuntirish",
    "Anglab yetish"
  ],
  correctAnswer: "Harakatlantirish"
},
{
  question: "'Taksonomiya' qanday ma'noga ega?",
  options: [
    "Tartib bilan joylashtirish",
    "Reklama qilish",
    "Loyihalashtirish",
    "Ketma-ketlikka amal qilish"
  ],
  correctAnswer: "Tartib bilan joylashtirish"
},
{
  question: "'Ajurli arra' texnologiyasining nomi qaysi tildan olingan?",
  options: [
    "Fransuz",
    "Nemis",
    "Rus",
    "Ingliz"
  ],
  correctAnswer: "Fransuz"
},
{
  question: "'Ajurli arra' texnologiyasining lug'aviy ma'nosi qanday?",
  options: [
    "Fransuzcha 'ajour' – bir yogdan ikkinchi yoqqa o'tgan, ikki tomoni ochiq degan ma'nolarni bildiradi",
    "Inglizcha bir tomoni ochiq degan ma'nolarni bildiradi",
    "Ruscha – bir yogdan ikkinchi yoqqa o'tgan degan ma'nolarni bildiradi",
    "Nemischa ikki tomoni yopiq degan ma'nolarni bildiradi"
  ],
  correctAnswer: "Fransuzcha 'ajour' – bir yogdan ikkinchi yoqqa o'tgan, ikki tomoni ochiq degan ma'nolarni bildiradi"
},
{
  question: "'Ajurli arra' metodining mazmun-mohiyati nimadan iborat?",
  options: [
    "Bu metod talabalarga yaxlit muayyan mavzuni bir nechta qismlarga ajratish orqali mohiyatini yoritish imkoniyatini yaratadi",
    "Bu metod talabalarga yaxlit muayyan mavzuni mohiyatini yoritish imkoniyatini yaratadi",
    "Bu metod talabalarga yaxlit muayyan mavzuni bir nechta qismlarga ajratmasdan yoritish imkoniyatini yaratadi",
    "Bu metod talabalarga yaxlit muayyan mavzuni bir nechta qismlarga ajratish imkoniyatini yaratadi"
  ],
  correctAnswer: "Bu metod talabalarga yaxlit muayyan mavzuni bir nechta qismlarga ajratish orqali mohiyatini yoritish imkoniyatini yaratadi"
},
{
  question: "'Ajurli arra' metodida talabalar nima asosida ishlaydilar?",
  options: [
    "Tayyor matnlar asosida",
    "Chizmalar asosida",
    "Rasmlar asosida",
    "Diagrammalar asosida"
  ],
  correctAnswer: "Tayyor matnlar asosida"
},
{
  question: "'Ajurli arra' metodni qo'llashda muhim omil nima?",
  options: [
    "Talabalarning o'zlari ega bo'lgan bilimlarni boshqalarga yetkazib berish layoqatiga ega bo'lishlari",
    "Talabalarning mavzuni bilishlari",
    "Talabalarning layoqati",
    "Talabalarning odobi muhim sanaladi"
  ],
  correctAnswer: "Talabalarning o'zlari ega bo'lgan bilimlarni boshqalarga yetkazib berish layoqatiga ega bo'lishlari"
},
{
  question: "'Akvarium' texnologiyasi qanday maqsadda qo'llaniladi?",
  options: [
    "Talabani ma'lum muammo bo'yicha fikrlash, o'z fikrini bayon etish, muammoni sherik (suhbatdosh) bilan birgalikda muhokama qilishga o'rgatishdan iborat",
    "Talabani ma'lum muammoni muhokama qilishga o'rgatishdan iborat",
    "Talabani o'z fikrini bayon etishga o'rgatishdan iborat",
    "Talabani muammoni sherik (suhbatdosh) bilan birgalikda muhokama qilishga o'rgatishdan iborat"
  ],
  correctAnswer: "Talabani ma'lum muammo bo'yicha fikrlash, o'z fikrini bayon etish, muammoni sherik (suhbatdosh) bilan birgalikda muhokama qilishga o'rgatishdan iborat"
},
{
  question: "'AJIL' ('AMALIY JAMOAVIY IJODIY LOYIHALAR') texnologiyasining mazmun – mohiyati nimadan iborat?",
  options: [
    "Talabalarda ijodiy faoliyat malakalarini shakllantirishga xizmat qiladi",
    "Talabalarda muloqot madaniyatini shakllantirishga xizmat qiladi",
    "Talabalarda odob-axloq madaniyatini shakllantirishga xizmat qiladi",
    "Talabalarda fuqarolik madaniyatini shakllantirishga xizmat qiladi"
  ],
  correctAnswer: "Talabalarda ijodiy faoliyat malakalarini shakllantirishga xizmat qiladi"
},
{
  question: "'AJIL'ning ma'nosi nima?",
  options: [
    "'AJIL' - 'Amaliy Jamoaviy Ijodiy Loyihalar'",
    "'AJIL' - 'Amaliy Jismoniy Ijodiy Loyihalar'",
    "'AJIL' - 'Amaliy Tarbiyaviy Ijodiy Loyihalar'",
    "'AJIL' - 'Amaliy Jamoaviy Iqtisodiy Loyihalar'"
  ],
  correctAnswer: "'AJIL' - 'Amaliy Jamoaviy Ijodiy Loyihalar'"
},
{
  question: "Kichik guruhlarda ishlash metodi nechta bosqichdan iborat?",
  options: [
    "7",
    "8",
    "10",
    "3"
  ],
  correctAnswer: "3"
},
{
  question: "Kichik guruhlar nechta a'zodan iborat bo'ladi?",
  options: [
    "3-6",
    "7-8",
    "3-4",
    "4-5"
  ],
  correctAnswer: "3-6"
},
{
  question: "'Davra suhbat!' metodi qo'llanilganda stol-stullarni qanday shakilda joylashtirish kerak?",
  options: [
    "Doira shaklida",
    "Kvadrat shaklida",
    "Uchburchak shaklida",
    "To'rtburchak shaklida"
  ],
  correctAnswer: "Doira shaklida"
},
{
  question: "Rezyume metodi qanday ma'noni bildiradi?",
  options: [
    "Xulosalash",
    "Ta'kidlash",
    "Bayon etish",
    "Suhbatlashish"
  ],
  correctAnswer: "Xulosalash"
},
{
  question: "SWOT (CBOT) analiz metodining asoschisi kim?",
  options: [
    "Albert Xempriy",
    "V.B. Bespalko",
    "Sh.A. Amonashvili",
    "B.F. Shatalov"
  ],
  correctAnswer: "Albert Xempriy"
},
{
  question: "SWOT (CBOT) analiz metodi qanday ko'rinishda?",
  options: [
    "Jadval",
    "Diagramma",
    "Sxema",
    "Rasm"
  ],
  correctAnswer: "Jadval"
},
{
  question: "Shaxsga maqsadli pedagogik ta'sir ko'rsatish uchun zarur bo'lgan metodlar, vositalar va jarayonlar yig'indisi nima deb ataladi?",
  options: [
    "Pedagogik tizim",
    "Pedagogik amaliyot",
    "Pedagogik tajriba",
    "Pedagogik usullar"
  ],
  correctAnswer: "Pedagogik tizim"
},
{
  question: "Vosita nima?",
  options: [
    "Muayyan o'qitish metodi yoki usullardan muvaffaqiyatli foydalanish uchun zarur bo'lgan yordamchi o'quv materiali",
    "Muayyan o'qitish metodi",
    "Darsda foydalanish uchun zarur bo'lgan yordamchi metodlar yig'indisi",
    "Muayyan o'qitish materiali"
  ],
  correctAnswer: "Muayyan o'qitish metodi yoki usullardan muvaffaqiyatli foydalanish uchun zarur bo'lgan yordamchi o'quv materiali"
},
{
  question: "Ta'lim vositalariga nimalar kiradi?",
  options: [
    "Asbob-uskunalar, laboratoriya jihozlari, axborot va texnik vositalar, ko'rgazmali qurollar, darslik, o'quv qo'llanmalari, radio, televidenie, kompyuter va hokazo",
    "Texnik vositalar",
    "Ko'rgazmali qurollar",
    "Darslik"
  ],
  correctAnswer: "Asbob-uskunalar, laboratoriya jihozlari, axborot va texnik vositalar, ko'rgazmali qurollar, darslik, o'quv qo'llanmalari, radio, televidenie, kompyuter va hokazo"
},
{
  question: "Mahorat nima?",
  options: [
    "Shaxsning tajriba orqali orttirgan xususiyati",
    "Malaka",
    "Tajriba",
    "Ijodkorlik"
  ],
  correctAnswer: "Shaxsning tajriba orqali orttirgan xususiyati"
},
{
  question: "Qobiliyat nima?",
  options: [
    "Qobiliyat – hamma insonlarda mavjud bo'lib, bir tekisda bo'lmay, biri yuqori, biri o'rta, quyi darajadan iborat",
    "Qobiliyat – hamma insonlarda mavjud bo'lib, bir tekisda bo'ladi",
    "Qobiliyat – hamma insonlarda mavjud bo'lib, bir tekisda bo'lmay o'rta darajadan iborat",
    "Qobiliyat – hamma insonlarda mavjud bo'lib quyi darajadan iborat"
  ],
  correctAnswer: "Qobiliyat – hamma insonlarda mavjud bo'lib, bir tekisda bo'lmay, biri yuqori, biri o'rta, quyi darajadan iborat"
},
{
  question: "Pedagogik mahorat egasi qanday bo'ladi?",
  options: [
    "Pedagogik mahorat egasi oz mehnat sarf qilib, katta natijaga erishadi",
    "Pedagogik mahorat egasi qobiliyatli bo'ladi",
    "Pedagogik mahorat egasi intizomli bo'ladi",
    "Pedagogik mahorat egasi tajribali bo'ladi"
  ],
  correctAnswer: "Pedagogik mahorat egasi oz mehnat sarf qilib, katta natijaga erishadi"
},
{
  question: "Mahorat...",
  options: [
    "Mahorat – san'at, izlanish, pedtexnologiyalarni qo'llay bilish va o'z-o'zini tarbiyalash",
    "Mahorat – san'at, izlanish",
    "Mahorat – o'z-o'zini tarbiyalash",
    "Mahorat – pedagogik texnologiyalarni qo'llay bilish va o'z-o'zini tarbiyalash"
  ],
  correctAnswer: "Mahorat – san'at, izlanish, pedtexnologiyalarni qo'llay bilish va o'z-o'zini tarbiyalash"
},
{
  question: "Pedagogik texnologiya 1940-1950 - yillarda qanday nomlangan?",
  options: [
    "1940-50 yillar o'rtalarida 'Ta'lim texnologiyasi' deb nomlangan",
    "Innovatsion texnologiya deb nomlangan",
    "AKT deb nomlangan",
    "Audiovizual texnologiya deb nomlangan"
  ],
  correctAnswer: "1940-50 yillar o'rtalarida 'Ta'lim texnologiyasi' deb nomlangan"
},
{
  question: "Pedagogik texnologiya 1940-1950 - yillarda qanday mazmun – mohiyatga ega bo'lgan?",
  options: [
    "Audiovizual texnika vositalaridan foydalanishni ifoda etgan",
    "AKT dan foydalanishni ifoda etgan",
    "Kompyuterdan foydalanishni ifoda etgan",
    "Slaydlardan foydalanishni ifoda etgan"
  ],
  correctAnswer: "Audiovizual texnika vositalaridan foydalanishni ifoda etgan"
},
{
  question: "XX asr o'rtasida AQSHda 'Pedagogik texnologiya' va 'Ta'lim texnologiyasi' atamalari qanday vositalar yordamida o'qitishga qo'llangan?",
  options: [
    "Faqat texnika vositalari yordamida o'qitishga qo'llangan",
    "Faqat slaydlar yordamida o'qitishga qo'llangan",
    "Faqat doska yordamida o'qitishga qo'llangan",
    "Faqat elektron doska yordamida o'qitishga qo'llangan"
  ],
  correctAnswer: "Faqat texnika vositalari yordamida o'qitishga qo'llangan"
},
{
  question: "1979 yilda AQSH Pedagogik kommunikatsiya texnologiyalari assotsiatsiyasi pedagogik texnologiyani qanday jarayon deb ta'riflagan?",
  options: [
    "1979 yilda AQSH Pedagogik kommunikatsiya texnologiyalari assotsiatsiyasi pedagogik texnologiya - kompleks interaktiv jarayondan iborat degan fikrga keladi",
    "1979 yilda AQSH Pedagogik kommunikatsiya texnologiyalari assotsiatsiyasi pedagogik texnologiya – klasterli jarayondan iborat degan fikrga keladi",
    "1979 yilda AQSH Pedagogik kommunikatsiya texnologiyalari assotsiatsiyasi pedagogik texnologiya – murakkab jarayondan iborat degan fikrga keladi",
    "1979 yilda AQSH Pedagogik kommunikatsiya texnologiyalari assotsiatsiyasi pedagogik texnologiya – kommunikativ jarayondan iborat degan fikrga keladi"
  ],
  correctAnswer: "1979 yilda AQSH Pedagogik kommunikatsiya texnologiyalari assotsiatsiyasi pedagogik texnologiya - kompleks interaktiv jarayondan iborat degan fikrga keladi"
},
{
  question: "1980 yillardan boshlab pedagogik texnologiya deb ta'limning ... va axborot texnologiyalarini yaratishga aylangan?",
  options: [
    "Kompyuterli",
    "Texnologiyali",
    "An'anaviy",
    "Nostandart"
  ],
  correctAnswer: "Kompyuterli"
},
{
  question: "Ta'lim modeli nechta ko'rinishda bo'ladi?",
  options: [
    "3 ta",
    "5 ta",
    "4 ta",
    "2 ta"
  ],
  correctAnswer: "3 ta"
},
{
  question: "Ta'lim modeli qanday ko'rinishda bo'ladi?",
  options: [
    "Passiv, aktiv, interaktiv",
    "Passiv",
    "Aktiv",
    "Interaktiv"
  ],
  correctAnswer: "Passiv, aktiv, interaktiv"
},
{
  question: "Pedagogik texnologiya – o'quv jarayoniga texnologik yondashgan holda, oldindan belgilab olingan maqsad ko'rsatkichlaridan kelib chiqib, o'quv jarayonini loyihalashdir. Yuqoridagi ta'rif qaysi olim tomonidan berilgan?",
  options: [
    "M.V. Klarin",
    "T. Sakomoto",
    "V.M. Shepel",
    "M. Ochilov"
  ],
  correctAnswer: "M.V. Klarin"
},
{
  question: "Pedagogik texnologiyaning metodikadan farqini belgilab bering:",
  options: [
    "Oldindan belgilangan maqsad bo'yicha ta'lim-tarbiyaviy ta'sir o'tkazuvchi, barcha ta'lim-tarbiya jarayonida qo'llaniladi",
    "Ma'lum o'quv fanini o'qitish hamda tarbiyaviy ishlar qonuniyatlarini tadqiq qiladi",
    "Alohida o'quv fanlarini o'qitish hamda tarbiyaviy ishlarning sifatli bo'lishini ta'minlaydi",
    "Ta'lim-tarbiyaning turli xususiy masalaharini hal qilish zarurati natijasida yuzaga kelgan"
  ],
  correctAnswer: "Oldindan belgilangan maqsad bo'yicha ta'lim-tarbiyaviy ta'sir o'tkazuvchi, barcha ta'lim-tarbiya jarayonida qo'llaniladi"
},
{
  question: "Metodikaning pedagogik texnologiyadan farqini ko'rsating",
  options: [
    "Alohida o'quv fanlarini o'qitish hamda tarbiyaviy ishlarning sifatli bo'lishini ta'minlaydi",
    "Oldindan belgilangan maqsad bo'yicha qo'llaniladi",
    "Ma'lum o'quv fanini o'qitish qonuniyatlarini tadqiq qiladi",
    "Ta'lim-tarbiyaning turli xususiy masalaharini hal qilish zarurati natijasida yuzaga kelgan"
  ],
  correctAnswer: "Alohida o'quv fanlarini o'qitish hamda tarbiyaviy ishlarning sifatli bo'lishini ta'minlaydi"
},
{
  question: "Pedagogik texnologiya tushunchasi qayerda paydo bo'lgan?",
  options: [
    "Pedagogik texnologiya tushunchasi XX asrda AQSHda paydo bo'lgan",
    "Pedagogik texnologiya tushunchasi XIX asrda Germaniyada paydo bo'lgan",
    "Pedagogik texnologiya tushunchasi XVIII asrda Frantsiyada paydo bo'lgan",
    "Pedagogik texnologiya tushunchasi XVIII asrda Italiyada paydo bo'lgan"
  ],
  correctAnswer: "Pedagogik texnologiya tushunchasi XX asrda AQSHda paydo bo'lgan"
},
{
  question: "Pedagogik texnologiyaning asosiy mezonlarini belgilang",
  options: [
    "O'quv tarbiya jarayoni va tarkibiy qismlarining o'zaro bog'liligi",
    "DTSga erishishni kafolatlashi",
    "Pedagogik texnologiya bilan metodika orasidagi farqning yo'qligi",
    "Metodlar, metodikalar va texnologiyalar bitta tushuncha sifatida idrok qilinishi"
  ],
  correctAnswer: "O'quv tarbiya jarayoni va tarkibiy qismlarining o'zaro bog'liligi"
},
{
  question: "Modullashtirish nima?",
  options: [
    "Zamonaviy pedagogik texnologiyalarni modullarga ajratish jarayoni",
    "Ilgari tayyorlangan materialni modullashtirish",
    "Ta'lim jarayonida qo'llanadigan usullarni hamda o'qituvchi va o'quvchi faoliyatini modullashtirish",
    "Modulning darajasini belgilash modullashtirish deb ataladi"
  ],
  correctAnswer: "Zamonaviy pedagogik texnologiyalarni modullarga ajratish jarayoni"
},
{
  question: "Pedagogik texnologiya tarkibidagi kichik modulga berilgan izoh qatorini belgilang",
  options: [
    "Pedagogik texnologiya tarkibidagi eng kichik birlikni ifodalaydi",
    "Pedagogik texnologiyani tashkil qiluvchi tarkibiy bo'laklarni ifodalovchi tushuncha",
    "O'z tarkibiga bitta yoki bir necha kichik modullarni oladigan modul to'plam",
    "Bitta modul sifatida hisoblangan bir necha modullar yig'indisi"
  ],
  correctAnswer: "Pedagogik texnologiya tarkibidagi eng kichik birlikni ifodalaydi"
},
{
  question: "Texnolog kim?",
  options: [
    "Texnologik jarayon ishtirokchisi",
    "Ta'lim oluvchilar",
    "Nazariy ma'lumotlar bilan tanishtiruvchi",
    "Ta'lim-tarbiya metodlari bo'yicha mutaxassis"
  ],
  correctAnswer: "Ta'lim-tarbiya metodlari bo'yicha mutaxassis"
},
{
  question: "Trener kim?",
  options: [
    "O'quvchilarning ko'nikmalarini rivojlantiruvchi mashqlar o'tkazuvchi maxsus tayyorgarlikdan o'tgan mutaxassis",
    "O'zaro muloqotlarning sifat va samaradorligini oshirish, takomillashtirish",
    "Tashkiliy- pedagogik va iqtisodiy masalalarni hal etish",
    "Nazariy ma'lumotlar bilan tanishtiruvchi"
  ],
  correctAnswer: "O'quvchilarning ko'nikmalarini rivojlantiruvchi mashqlar o'tkazuvchi maxsus tayyorgarlikdan o'tgan mutaxassis"
},
{
  question: "Klaster metodi mazmuni…",
  options: [
    "Tarmoqlash usuli",
    "Savol javob",
    "Guruh bilan ishlash",
    "Musobaqa"
  ],
  correctAnswer: "Tarmoqlash usuli"
},
{
  question: "'5-si ortiqcha' metodi mazmuni…",
  options: [
    "Mavzudan tashqari ma'lumotni topish",
    "Juft-juft bo'lib ishlash",
    "Guruh bo'lib ishlash",
    "Mavzuga doir ma'lumotni topish"
  ],
  correctAnswer: "Mavzudan tashqari ma'lumotni topish"
},
{
  question: "'Kim oshdi savdosi' darsi mazmuni…",
  options: [
    "Darslikdagi bo'limlar yuzasidan bilimlarni har bir o'quvchi qanchalik ko'p bilishini namoyish etish darsi",
    "Bir nechta fanlarga doir tuzilgan dars",
    "Dars mavzusiga mos o'yin orqali tashkil etilgan dars",
    "Dars mavzusi bilan bog'liq sahna ko'rinishlari tashkil etish orqali tuziladigan dars"
  ],
  correctAnswer: "Darslikdagi bo'limlar yuzasidan bilimlarni har bir o'quvchi qanchalik ko'p bilishini namoyish etish darsi"
},
{
  question: "Rolli o'yin darsi mazmuni…",
  options: [
    "Dars mavzusi bo'yicha masalaharni hal etishda o'quvchilarga oldindan ma'lum rollarni taqsimlash va shu rollarni bajarishlarini tashkil etish darsi",
    "Dars mavzusi bilan bog'liq sahna ko'rinishlari tashkil etish orqali tuziladigan dars",
    "Darslikdagi bo'limlar yuzasidan bilimlarni har bir o'quvchi qanchalik ko'p bilishini namoyish etish darsi",
    "Dars mavzusiga mos o'yin orqali tashkil etilgan dars"
  ],
  correctAnswer: "Dars mavzusi bo'yicha masalaharni hal etishda o'quvchilarga oldindan ma'lum rollarni taqsimlash va shu rollarni bajarishlarini tashkil etish darsi"
},
{
  question: "Integral dars mazmuni…",
  options: [
    "Bir nechta fanlarga doir tuzilgan dars",
    "Bitta fanga doir tuzilgan dars",
    "Dars mavzusiga mos o'yin orqali tashkil etilgan dars",
    "Darslikdagi bo'limlar yuzasidan bilimlarni har bir o'quvchi qanchalik ko'p bilishini namoyish etish darsi"
  ],
  correctAnswer: "Bir nechta fanlarga doir tuzilgan dars"
},
{
  question: "Guruhlarda ishlash darsi mazmuni…",
  options: [
    "O'quvchilarni bir nechta guruhlarga bo'lib vazifalar bajarishini tashkil etish orqali bilimlarni mustahkamlash darsi",
    "Dars mavzusini savol-javoblar orqali o'zlashtirish darsi",
    "Bir nechta fanlarga doir tuzilgan dars",
    "Sinfdagi o'quvchilarning bir yoki bir nechta mavzu bo'yicha oldindan tayyorgarlik ko'rgan holdagi tanlovini tashkil etish darsi"
  ],
  correctAnswer: "O'quvchilarni bir nechta guruhlarga bo'lib vazifalar bajarishini tashkil etish orqali bilimlarni mustahkamlash darsi"
},
{
  question: "Muammoli o'qitishning 'An'anaviy' o'qitishdan farqini ko'rsating",
  options: [
    "O'quvchilarda aqliy qo'zg'alishlarni vujudga keltirish",
    "Tayyor holda BKMLarni o'zlashtirish",
    "DTS talabi asosida bilimlarni o'zlashtirish",
    "O'zlashtirilgan bilimlar asosida ongli tajribani tashkil etish"
  ],
  correctAnswer: "O'quvchilarda aqliy qo'zg'alishlarni vujudga keltirish"
},
{
  question: "Muammoli ta'lim texnologiyasining asosi nima?",
  options: [
    "Insonning fikrlashi muammolarni aniqlash, tadqiq etish va yechish qobiliyatiga ega ekanligidan kelib chiqadi",
    "Bilimlarni o'quvchilarga tayyor holda berish",
    "Bir nechta fanlarga doir va integratsiyalash uchun qulay bo'lgan mavzular bo'yicha tashkil qilingan dars",
    "O'quvchilar bilan o'tkaziladigan qiziqarli o'yin"
  ],
  correctAnswer: "Insonning fikrlashi muammolarni aniqlash, tadqiq etish va yechish qobiliyatiga ega ekanligidan kelib chiqadi"
},
{
  question: "...texnologiyalarida o'quvchilarda aqliy faoliyat usullarini shakllantirish funktsiyasi yetakchi o'rinni egallaydi",
  options: [
    "Muammoli ta'lim",
    "Modulli ta'lim",
    "Hamkorlikda o'qitish",
    "Didaktik o'yin"
  ],
  correctAnswer: "Muammoli ta'lim"
},
{
  question: "Muammoni hal etish bosqichlari qaysi javobda to'g'ri?",
  options: [
    "Isbotlash, tekshirish, tushuntirish",
    "Isbotlash, tahlil qilish, tekshirish",
    "Tahlil qilish, tekshirish, tushuntirish",
    "Kuzatish, tahlil qilish, isbotlash"
  ],
  correctAnswer: "Tahlil qilish, tekshirish, tushuntirish"
},
{
  question: "Muammoli ta'limning maqsadi nima?",
  options: [
    "O'quvchilarning muammoli topshiriqlarni yechish malaka va ko'nikmasini shakllantirish",
    "O'quvchilarning fikrlashini faollashtirishdir",
    "O'quvchilarning muammoning faol yechimi jarayoniga jalb etib, rag'batlantirish",
    "Bilimlar tizimi natijalarga erishishni yo'lini o'zlashtirishdir"
  ],
  correctAnswer: "O'quvchilarning muammoli topshiriqlarni yechish malaka va ko'nikmasini shakllantirish"
},
{
  question: "Muammoli vaziyat deganda nimani tushunasiz?",
  options: [
    "O'quvchining ma'lum psixik holatidir",
    "O'quv materialini o'quvchi ongida vujudga keltiradigan yo'sindagi faoliyatdir",
    "Mantiqiy va to'g'ri xulosa chiqarish",
    "O'quvchi hamkorligida ongli, ma'lum maqsadga yo'naltirilgan faoliyatdir"
  ],
  correctAnswer: "O'quvchining ma'lum psixik holatidir"
},
{
  question: "Muammoli ta'lim texnologiyasining o'ziga xos xususiyatini belgilang:",
  options: [
    "O'quvchilarning fikr yuritish qobiliyatlarini rivojlantiriladi",
    "Mustaqil ta'lim olishga odatlantiriladi",
    "Erkin fikrlashga sharotilar yaratiladi",
    "Kichik guruhlarda ishlaydilar"
  ],
  correctAnswer: "O'quvchilarning fikr yuritish qobiliyatlarini rivojlantiriladi"
},
{
  question: "Pedagogik texnologiyalarning turli ta'riflari bo'lib, ulardan qaysi biri YUNESKO tomonidan tan olindi?",
  options: [
    "Pedagogik texnologiya - texnika resurslari, odamlar va ularning o'zaro ta'sirini hisobga olgan holda ta'lim shakllarini optimallashtirish vazifasini qo'yuvchi o'qitish va bilimlarni o'zlashtirishning hamma jarayonlarini yaratish, qo'llash va aniqlashning tizimli metodi",
    "Pedagogik texnologiya - ta'limning rejalashtirilgan natijalariga erishish jarayoni",
    "Pedagogik texnologiya - didaktik tizimning tarkibiy jarayonli qismi",
    "Pedagogik texnologiya o'qitishning ta'lim shakllari, uslublari, usullari, yo'llari"
  ],
  correctAnswer: "Pedagogik texnologiya - texnika resurslari, odamlar va ularning o'zaro ta'sirini hisobga olgan holda ta'lim shakllarini optimallashtirish vazifasini qo'yuvchi o'qitish va bilimlarni o'zlashtirishning hamma jarayonlarini yaratish, qo'llash va aniqlashning tizimli metodi"
},
{
  question: "Pedagogik texnologiyalardagi asosiy tarkibiy elementlar qaysilar?",
  options: [
    "So'zlash, ko'rsatish, mashq",
    "Tushuntirish, tushunish, o'rgatish",
    "O'rganish, o'zlashtirish, idrok etish",
    "Bilim, ko'nikma, malaka"
  ],
  correctAnswer: "So'zlash, ko'rsatish, mashq"
},
{
  question: "Bolaga do'stona munosabatdagi maktab dasturi qachon va qayerda joriy qilingan?",
  options: [
    "1997 yil Tailandda",
    "1982 yil Chikagoda",
    "1980 yil Kaliforniyada",
    "1990 yil Rossiyada"
  ],
  correctAnswer: "1997 yil Tailandda"
},
{
  question: "Bilish faoliyatini boshqarish bo'yicha pedagogik texnologiyalarning turlarini ko'rsating",
  options: [
    "Darslik bo'yicha o'qitish, texnik vositalar yordamida o'qitish, repetitorlik tizimi",
    "Didaktik yo'naltirilgan, insonparvarlikka va shaxsga yo'naltirilgan",
    "Tushuntirish, ko'rgazmali, muammoli, izlanishli, dasturlashtirilgan ta'lim metodi, dialogli metod",
    "O'quv jarayonini boshqarish"
  ],
  correctAnswer: "Didaktik yo'naltirilgan, insonparvarlikka va shaxsga yo'naltirilgan"
},
{
  question: "Ta'lim oluvchiga yondashuv turi bo'yicha pedagogik texnologiyalar turlarini ko'rsating",
  options: [
    "Didaktik yo'naltirilgan, insonparvarlikka va shaxsga yo'naltirilgan",
    "Darslik bo'yicha o'qitish, texnik vositalar yordamida o'qitish, repetitorlik tizimi",
    "O'quv jarayonini tashkil etish asosidagi pedagogik texnologiyalar",
    "Tushuntirish, ko'rgazmali, dialogli metod"
  ],
  correctAnswer: "Didaktik yo'naltirilgan, insonparvarlikka va shaxsga yo'naltirilgan"
},
{
  question: "Qo'llaniladigan metod bo'yicha pedagogik texnologiyalar turlarini ko'rsating",
  options: [
    "Tushuntirish, ko'rgazmali, muammoli, izlanishli, dasturlashtirilgan ta'lim metodi, dialogli metod",
    "Didaktik yo'naltirilgan",
    "Darslik bo'yicha o'qitish, texnik vositalar yordamida o'qitish, repetitorlik tizimi",
    "O'quv jarayonini boshqarish va tashkil etish bo'yicha texnologiyalar"
  ],
  correctAnswer: "Tushuntirish, ko'rgazmali, muammoli, izlanishli, dasturlashtirilgan ta'lim metodi, dialogli metod"
},
{
  question: "Tashkiliy shakliga ko'ra pedagogik texnologiyalar turlarini ko'rsating",
  options: [
    "O'quv jarayonini boshqarish va tashkil etish bo'yicha, hamda shaxsga yo'naltirilgan ta'lim asosidagi pedagogik texnologiyalar",
    "Insonparvarlikka va shaxsga yo'naltirilgan texnologiyalar",
    "Dasturlashtirilgan ta'lim metodi",
    "Repetitorlik tizimi"
  ],
  correctAnswer: "O'quv jarayonini boshqarish va tashkil etish bo'yicha, hamda shaxsga yo'naltirilgan ta'lim asosidagi pedagogik texnologiyalar"
},
{
  question: "Pedagogik texnologiya jarayoni ishtirokchisi bo'lgan o'quvchining faoliyatini tashkil qiluvchi asosiy elementini belgilang:",
  options: [
    "Tinglash, ko'rish, mashq bajarish",
    "Faollik, ongillik, mustaqillik",
    "Mustaqil ta'lim olish",
    "Muammolarni hal etish"
  ],
  correctAnswer: "Faollik, ongillik, mustaqillik"
},
{
  question: "Pedagogik texnologiya jarayoni ishtirokchisi bo'lgan o'qituvchining faoliyatini tashkil qiluvchi asosiy elementini belgilang:",
  options: [
    "So'zlash, ko'rsatish, vazifa topshirish, rahbarlik, nazorat",
    "Tushuntiradi, o'qitadi, rag'batlantiradi, baholaydi",
    "Rag'batlantiradi, jazolaydi",
    "Tashkil etadi, boshqaradi, tahlil etadi"
  ],
  correctAnswer: "So'zlash, ko'rsatish, vazifa topshirish, rahbarlik, nazorat"
},
{
  question: "Interfaol ta'lim jarayoni ishtirokchilari ko'rsatilgan qatorni belgilang:",
  options: [
    "Trener, konsultant, ekspert, o'qituvchi",
    "Maktab direktori, direktor o'rinbosarlari",
    "XTB mudiri, inspektor, metodist",
    "Bolalar yetakchisi, psixolog, kutubxonachi"
  ],
  correctAnswer: "Trener, konsultant, ekspert, o'qituvchi"
},
{
  question: "'Aqliy hujum' metodini birinchi marta kim va qachon qo'llagan?",
  options: [
    "1939 yilda A.F. Osborn",
    "1892 yilda Dj. D'yui",
    "1939 yilda Bespalko",
    "1940 yilda Selevko"
  ],
  correctAnswer: "1939 yilda A.F. Osborn"
},
{
  question: "Muammoni hal etish necha bosqichdan iborat?",
  options: [
    "3 bosqich",
    "4 bosqich",
    "6 bosqich",
    "5 bosqich"
  ],
  correctAnswer: "3 bosqich"
},
{
  question: "Muammoli ta'limni yaratish usullari",
  options: [
    "Ziddiyatli holatni tushuntiradi va yechish yo'lini taklif qiladi",
    "O'qituvchi muammoni qo'yadi va o'zi yechadi",
    "Solishtirish va umumlashtirish",
    "Faktlarni aniqlash va qiyoslash"
  ],
  correctAnswer: "Ziddiyatli holatni tushuntiradi va yechish yo'lini taklif qiladi"
},
{
  question: "Pedagogik texnologiya asosida tuzilgan darsning an'anaviy darsdan farqi?",
  options: [
    "Dars markazida o'quvchi shaxsi turadi",
    "Dars bosqichlari o'zgaradi",
    "Hech qanday farqi yo'q",
    "Ta'lim mazmunida o'zgarishlar bo'ladi"
  ],
  correctAnswer: "Dars markazida o'quvchi shaxsi turadi"
},
{
  question: "Pedagogik texnologiya asosida tuzilgan darsning o'quvchi shaxsiga ta'siri",
  options: [
    "Bola shaxsini komillik sari rivojlantiradi",
    "Hech qanday ta'siri yo'q",
    "O'quvchi vazifani o'qituvchi yordamiga tayanib bajaradi",
    "O'quvchi faqat yakka tartibda ishlaydi"
  ],
  correctAnswer: "Bola shaxsini komillik sari rivojlantiradi"
},
{
  question: "Pedagogik texnologiyalar asosida tuzilgan darslarni kuzatishdan maqsad",
  options: [
    "O'qituvchilarni zamonaviy pedagogik texnologiyalarni amalda qo'llash yuzasidan ilg'or tajribalar bilan tanishish va o'rganish",
    "Metod almashtirish",
    "Ta'lim jarayonidagi kamchiliklarni bartaraf etish",
    "O'qituvchi pedagogik faoliyatini ommalashtirish"
  ],
  correctAnswer: "O'qituvchilarni zamonaviy pedagogik texnologiyalarni amalda qo'llash yuzasidan ilg'or tajribalar bilan tanishish va o'rganish"
},
{
  question: "Qaysi olim 'insonning bilish faoliyati bilmaslikdan bilishga qarab boradi' deb aytgan?",
  options: [
    "Abu Rayhon Beruniy",
    "Yan Amos Kamenskiy",
    "Abu Ali Ibn Sino",
    "Burhoniddin Zarnujiy"
  ],
  correctAnswer: "Abu Rayhon Beruniy"
},
{
  question: "Har bir dars nimalar asosida tuziladi?",
  options: [
    "Ta'lim-tarbiya funktsiyalari va ta'lim prinsiplari",
    "Ta'lim prinsiplari asosida",
    "Reja asosida",
    "Ta'limiy funktsiyalar asosida"
  ],
  correctAnswer: "Ta'lim-tarbiya funktsiyalari va ta'lim prinsiplari"
},
{
  question: "O'quvchilar faoliyatiga ko'ra didaktik-ta'limiy o'yin turlari:",
  options: [
    "O'quvchi faoliyatini o'zlashtirishni talab etadigan o'yinlar, bilimlar mustaqil qo'llaniladigan o'yinlar, zakovatni rivojlantiruvchi o'yinlar",
    "O'quvchi faoliyatini o'zlashtirishni talab etadigan o'yinlar, bilimlar mustaqil qo'llaniladigan o'yinlar",
    "Bilimlar mustaqil qo'llaniladigan o'yinlar, zakovatni rivojlantiruvchi o'yinlar",
    "Ishbilarmonlik o'yini"
  ],
  correctAnswer: "O'quvchi faoliyatini o'zlashtirishni talab etadigan o'yinlar, bilimlar mustaqil qo'llaniladigan o'yinlar, zakovatni rivojlantiruvchi o'yinlar"
},
{
  question: "Didaktik maqsadiga ko'ra didaktik-ta'limiy o'yin turlari to'g'ri ko'rsatilgan qatorni toping...",
  options: [
    "Ta'lim-tarbiya beruvchi o'yinlar, bilimlarni mustahkamlovchi o'yinlar, o'quv materialini takrorlovchi o'yinlar, bilimlarni nazorat qiluvchi o'yinlar",
    "Ta'lim-tarbiya beruvchi o'yinlar, bilimlarni mustahkamlovchi o'yinlar",
    "O'quv materialini takrorlovchi o'yinlar, bilimlarni nazorat qiluvchi o'yinlar",
    "Ta'lim-tarbiya beruvchi o'yinlar, bilimlarni nazorat qiluvchi o'yinlar"
  ],
  correctAnswer: "Ta'lim-tarbiya beruvchi o'yinlar, bilimlarni mustahkamlovchi o'yinlar, o'quv materialini takrorlovchi o'yinlar, bilimlarni nazorat qiluvchi o'yinlar"
},
{
  question: "Didaktik o'yin texnologiyalari nimaga asoslangan?",
  options: [
    "O'quvchi faoliyatini faollashtirish va jadallashtirishga",
    "Mavzuni takrorlashga",
    "O'quvchini o'rganishga",
    "O'tilganlarni mustahkamlashga"
  ],
  correctAnswer: "O'quvchi faoliyatini faollashtirish va jadallashtirishga"
},
{
  question: "Ishtirokchilar tarkibi bo'yicha didaktik o'yin turlarini tanlash mezonlari:",
  options: [
    "Ishtirokchilar tarkibi bo'yicha - o'g'il bolalar, qiz bolalar, o'smirlar, katta yoshdagilar uchun o'yinlar",
    "Qiz bolalar, o'smirlar, katta yoshdagilar uchun o'yinlar",
    "O'smirlar, katta yoshdagilar uchun o'yinlar",
    "O'g'il bolalar, qiz bolalar uchun o'yinlar"
  ],
  correctAnswer: "Ishtirokchilar tarkibi bo'yicha - o'g'il bolalar, qiz bolalar, o'smirlar, katta yoshdagilar uchun o'yinlar"
},
{
  question: "Didaktik o'yin jarayonida qo'llaniladigan vositalar to'g'ri ko'rsatilgan qatorni toping",
  options: [
    "Kanselyariya tovarlari - turli o'lchamlardagi oq va rangli qog'ozlar, skotch, flomasterlar, ruchka, qalam, chizg'ichlar, qaychi, yelim va boshqalar",
    "Yumshoq o'yinchoqlar, flomasterlar",
    "Flomasterlar, kitoblar, qalam, chizg'ichlar",
    "Kanselyariya tovarlari"
  ],
  correctAnswer: "Kanselyariya tovarlari - turli o'lchamlardagi oq va rangli qog'ozlar, skotch, flomasterlar, ruchka, qalam, chizg'ichlar, qaychi, yelim va boshqalar"
},
{
  question: "Didaktik o'yin jarayonida qo'llaniladigan texnika vositalari to'g'ri ko'rsatilgan qatorni toping",
  options: [
    "Proyektor, mikrofon, kompyuter, video kamera, videomagnitofon, televizor va boshqalar",
    "Flomasterlar, ruchka, qalam, chizg'ichlar, qaychi, yelim",
    "Video kamera, kompyuter",
    "Texnika vositalari"
  ],
  correctAnswer: "Proyektor, mikrofon, kompyuter, video kamera, videomagnitofon, televizor va boshqalar"
},
{
  question: "'Tushunchalar tahlili' metodi qanday ko'rinishda?",
  options: [
    "Jadval ko'rinishida",
    "Ustun ko'rinishida",
    "Chizma ko'rinishida",
    "Sxema ko'rinishida"
  ],
  correctAnswer: "Jadval ko'rinishida"
},
{
  question: "Sinkveyn so'zining ma'nosi",
  options: [
    "Fransuzcha - 'besh qator'",
    "Inglizcha 'baholash'",
    "Lotincha - 'tarmoqlash'",
    "Ruscha 'bir nechta'"
  ],
  correctAnswer: "Fransuzcha - 'besh qator'"
},
{
  question: "Innovatsiya so'zining lug'aviy ma'nosi nima?",
  options: [
    "Yangilik kiritish",
    "Yangilik yaratish",
    "Yangilik joriy qilish",
    "Tushuntirish"
  ],
  correctAnswer: "Yangilik kiritish"
},
{
  question: "'Innovatsiya' tushunchasi qaysi tildan olingan?",
  options: [
    "Ingliz",
    "Lotin",
    "Grek",
    "Fransuz"
  ],
  correctAnswer: "Lotin"
},
{
  question: "Innovator kim?",
  options: [
    "Innovatsion jarayonni olib boruvchi shaxs",
    "Ta'lim jarayonini olib boruvchi shaxs",
    "Trener",
    "Lektor"
  ],
  correctAnswer: "Innovatsion jarayonni olib boruvchi shaxs"
},
{
  question: "Ijodkor shaxsning shakllanishiga ta'sir etuvchi shunday bilimlar, ko'nikma, malaka yig'indisi, uzluksiz izchil maqsadga ko'ra shaxsning ehtiyoj imkoniyatlarini hisobga olib, turli uslub, aniq dasturlar, metodikalar bilan yetkazish jarayonidir. Tushunchaning ta'rifini toping",
  options: [
    "Iqtisodiy ta'lim",
    "Mehnat tarbiyasi",
    "Estetik",
    "O'yin ta'limi"
  ],
  correctAnswer: "Mehnat tarbiyasi"
},
{
  question: "'Baliq skeleti', 'BBB', 'Konseptual jadval', 'Venn diagrammasi', 'Insert', 'Klaster', 'Nima uchun?', 'Qanday?'. Bular ...",
  options: [
    "Grafik organizatorlar",
    "Axborot texnologiyalari",
    "Bilishga oid",
    "Tahlil etishga oid texnologiyalar"
  ],
  correctAnswer: "Grafik organizatorlar"
},
{
  question: "'Bilim — kuch, kuch esa bilimdadir'. Mazkur hikmatli so'z kimga tegishli?",
  options: [
    "F. Bekon",
    "J. Dark",
    "J. Lamark",
    "K.D. Ushinskiy"
  ],
  correctAnswer: "F. Bekon"
},
{
  question: "Dunyodagi eng katta boylik - yoshlikda olgan bilim va egallagan kasb-hunardir. Ushbu fikr kimga tegishli?",
  options: [
    "Sh.M. Mirziyoyev",
    "A.K. Markova",
    "K.D. Ushinskiy",
    "N. Tolipova"
  ],
  correctAnswer: "Sh.M. Mirziyoyev"
},
{
  question: "A.K. Markova bo'yicha maxsus yoki kasbiy kompetentlik bu - ... ?",
  options: [
    "Kasbiy faoliyatni yuqori darajada tashkil etish",
    "Ishtiyoq muhiti",
    "Tabiiy ehtiyojlarni qondirish",
    "O'z fani va tegishli fanlar doirasida bilimga egalik"
  ],
  correctAnswer: "O'z fani va tegishli fanlar doirasida bilimga egalik"
},
{
  question: "A.K. Markova bo'yicha individual kompetentlik bu: ... ?",
  options: [
    "O'z-o'zini boshqarish, kasbiy rivojlanish va yangiliklar yaratish",
    "Analiz va sintez faoliyati",
    "Muayyan tafakkur orqali fikr yuritish",
    "Tajriba sinov ishlarini olib borish"
  ],
  correctAnswer: "O'z-o'zini boshqarish, kasbiy rivojlanish va yangiliklar yaratish"
},
{
  question: "Aralash darslar, yangi ma'lumotlarni berish darslari, bilimlarni mustahkamlash va takrorlash darslari va o'rganilganlarni umumlashtirish va tizimlashtirish darslari bu...",
  options: [
    "An'anaviy dars turlari",
    "Aralash",
    "Innovatsion",
    "Noan'anaviy"
  ],
  correctAnswer: "An'anaviy dars turlari"
},
{
  question: "Pedagogik texnologiya - ...",
  options: [
    "Bu ta'limni standartlashtirish",
    "Bu o'qitishga o'ziga xos yondashuv",
    "Bu ta'lim shakllarini optimizatsiya qilish",
    "Bu bilimni texnika va inson resurslari va uning o'zaro ta'sirini hisobga olgan holda egallashni ta'minlovchi butun o'quv jarayonini yaratish, qo'llash va aniqlashning tizimli usuli bo'lib, o'z oldiga ta'lim shakllarini optimizatsiya qilishni qo'yadi"
  ],
  correctAnswer: "Bu bilimni texnika va inson resurslari va uning o'zaro ta'sirini hisobga olgan holda egallashni ta'minlovchi butun o'quv jarayonini yaratish, qo'llash va aniqlashning tizimli usuli bo'lib, o'z oldiga ta'lim shakllarini optimizatsiya qilishni qo'yadi"
},
{
  question: "Pedagogik texnologiyaning asosiy maqsadi",
  options: [
    "Qo'yilgan o'quv maqsadlariga erishish",
    "Yuqori malakali mutaxassislarni tayyorlash",
    "Ta'lim jarayonini etarli samaradorligini ta'minlash, talabalar tomonidan o'qitishning ko'zlangan natijalariga erishish",
    "Nazariy bilimlarni amaliyotda qo'llash"
  ],
  correctAnswer: "Ta'lim jarayonini etarli samaradorligini ta'minlash, talabalar tomonidan o'qitishning ko'zlangan natijalariga erishish"
},
{
  question: "Aqliy hujum qanday metod?",
  options: [
    "So'zlovchiga nisbatan baholovchi komponent",
    "Talabaning o'quv jarayonida faol ishtirok etishi",
    "Guruhlararo ishlarda qo'llaniladigan, ko'plab g'oyalarni ishlab chiqish mumkin bo'lgan",
    "Guruh ishlarida qo'llaniladigan"
  ],
  correctAnswer: "Guruhlararo ishlarda qo'llaniladigan, ko'plab g'oyalarni ishlab chiqish mumkin bo'lgan"
},
{
  question: "O'quv materialini ko'rgazmallik metodi qaysi qatorda to'g'ri ko'rsatilgan?",
  options: [
    "Tasvirlash, namoyish etish, ekskursiya",
    "Suhbat, tasvirlash, namoyish etish",
    "Mashq bajarish, tasvirlash, namoyish etish, hikoya qilish",
    "Mashq bajarish, tasvirlash, ekskursiya, hikoya qilish"
  ],
  correctAnswer: "Tasvirlash, namoyish etish, ekskursiya"
},
{
  question: "Muayyan (ishlab chiqarish, ijtimoiy, iqtisodiy va b.) jarayonlarning yuqori mahorat, san'at darajasida tashkil etilishi?",
  options: [
    "Novatsiya",
    "Innovatsiya",
    "Texnologiya",
    "Modernizatsiya"
  ],
  correctAnswer: "Texnologiya"
},
{
  question: "Test so'zining lug'aviy ma'nosi?",
  options: [
    "Test - inglizcha 'test' - sinash, tekshirish, o'rganish",
    "Test - yunoncha 'test' - o'rganish",
    "Test - fransuzcha 'test' - tekshiraman",
    "Test - italyancha 'test' - nazorat qilish"
  ],
  correctAnswer: "Test - inglizcha 'test' - sinash, tekshirish, o'rganish"
},
{
  question: "Pedagog tomonidan kasbiy maqsadga muvofiq tashkil etiladigan tizimli harakatlarning muayyan shakli - bu...",
  options: [
    "Pedagogik faoliyatidir",
    "Ta'lim-tarbiyaviy faoliyatidir",
    "Ijodiy qobiliyatini rivojlantirish faoliyatidir",
    "Pedagogik mahoratdir"
  ],
  correctAnswer: "Pedagogik faoliyatidir"
},
{
  question: "Pedagogning kasbiy jarayonni samarali tashkil etishga yo'naltirilgan yaratuvchanlik faoliyati bu...",
  options: [
    "Pedagogik ijodkorligi",
    "Pedagogik mahorati",
    "Pedagogik faoliyati",
    "Pedagogik tadqiqoti"
  ],
  correctAnswer: "Pedagogik ijodkorligi"
},
{
  question: "Pedagogning o'quvchilar, ularning ota-onalari, pedagogik jamoa, jamiyat tomonidan e'tirof etilgan axloqiy maqomi bu...",
  options: [
    "Pedagogik obro'yi",
    "Pedagogik faoliyati",
    "Pedagogik uddaburonligi",
    "Axloqiy yetukligi"
  ],
  correctAnswer: "Pedagogik obro'yi"
},
{
  question: "Doimiy ravishda o'z-o'zini jismoniy, ma'naviy, ruhiy, intellektual va kreativ rivojlantirish, kamolotga intilish, hayot davomida mustaqil o'qib-o'rganish, o'z xatti-harakatini muqobil baholash ... Bu qaysi kompetensiyadir?",
  options: [
    "Kommunikativ kompetensiya",
    "Axborotlar bilan ishlash kompetensiyasi",
    "O'zini-o'zi rivojlantirish kompetensiyasi",
    "Ijtimoiy faol fuqarolik kompetensiyasi"
  ],
  correctAnswer: "O'zini-o'zi rivojlantirish kompetensiyasi"
},
{
  question: "Jamiyatda bo'layotgan voqea, hodisa va jarayonlarga daxldorlikni his etish va ularda faol ishtirok etish, o'zining fuqarolik burch va huquqlarini bilish, unga rioya qilish, ... Bu qaysi kompetensiyadir?",
  options: [
    "Kommunikativ kompetensiya",
    "Axborotlar bilan ishlash kompetensiyasi",
    "O'zini-o'zi rivojlantirish kompetensiyasi",
    "Ijtimoiy faol fuqarolik kompetensiyasi"
  ],
  correctAnswer: "Ijtimoiy faol fuqarolik kompetensiyasi"
},
{
  question: "Aniq hisob-kitoblarga asoslangan holda shaxsiy, oilaviy, kasbiy va iqtisodiy rejalarni tuza olish, kundalik faoliyatda turli diagramma, chizma va modellarni o'qiy olish, inson mehnatini yengillashtiradigan, mehnat unumdorligini oshiradigan, ... Bu qaysi kompetensiyadir?",
  options: [
    "Milliy va umumdunyo madaniy kompetensiya",
    "Matematik savodxonlik, fan va texnika yangiliklardan xabardor bo'lish hamda foydalanish kompetensiyasi",
    "O'zini-o'zi rivojlantirish kompetensiyasi",
    "Ijtimoiy faol fuqarolik kompetensiyasi"
  ],
  correctAnswer: "Matematik savodxonlik, fan va texnika yangiliklardan xabardor bo'lish hamda foydalanish kompetensiyasi"
},
{
  question: "'Innovatsiya' termini 1900 yilda qo'llagan iqtisodchi olim kim?",
  options: [
    "Y. Shumpeter",
    "V. Rudnev",
    "S.L. Rubinshteyn",
    "R. Yakobson"
  ],
  correctAnswer: "Y. Shumpeter"
},
{
  question: "Texnologiya so'zining ma'nosi",
  options: [
    "Mahorat, san'at",
    "Raqs harakat",
    "Harakat qilmoq",
    "Ijtimoiy munosabat"
  ],
  correctAnswer: "Mahorat, san'at"
},
{
  question: "Innovatsiya tushunchasi qachon paydo bo'lgan?",
  options: [
    "18 asr",
    "17 asr",
    "16 asr",
    "19 asr"
  ],
  correctAnswer: "19 asr"
},
{
  question: "AQSHda innovatsion pedagogik termin qachon paydo bo'lgan?",
  options: [
    "20-asr 60-yillarida",
    "19 asr 60-yillarida",
    "18 asr 40-yillarida",
    "19 asr 40-yillarida"
  ],
  correctAnswer: "20-asr 60-yillarida"
},
{
  question: "Muayyan muddatga mo'ljallangan, ta'lim jarayoni ko'proq o'qituvchi shaxsiga qaratilgan, mavzuga kirish, yoritish, mustahkamlash va yakunlash bosqichlaridan iborat ta'lim modeli qanday dars shakli?",
  options: [
    "An'anaviy",
    "Noan'anaviy",
    "Aralash",
    "Takrorlash"
  ],
  correctAnswer: "An'anaviy"
},
{
  question: "Dars o'tish modelida ko'proq ma'ruza, savol-javob, amaliy mashq kabi metodlardan foydalaniladi. Ushbu dars usuli",
  options: [
    "An'anaviy",
    "Noan'anaviy",
    "Yangi bilim beruvchi",
    "Takrorlash"
  ],
  correctAnswer: "An'anaviy"
},
{
  question: "O'quvchilar passiv ishtirokchi bo'lib qoladilar, O'qituvchining to'la nazorati barcha o'quvchilar uchun motivatsiyani vujudga keltirmaydi. O'quvchilar o'qituvchi bilan bevosita muloqotga kirisha olmaydilar. Ushbu kamchiliklar qaysi dars usuliga tegishli?",
  options: [
    "An'anaviy",
    "Noan'anaviy",
    "Yangi bilim beruvchi",
    "Mustahkamlash"
  ],
  correctAnswer: "An'anaviy"
},
{
  question: "Bu usullardan foydalanishdan maqsad shuki, darslarni qiziqarli, sermazmun, eng muhimi samarali qilib o'tkazishdir. Bunda talabaning bilimi ortadi, shaxsiyati rivojlanadi",
  options: [
    "Interfaol metod",
    "Amaliy metod",
    "Suhbat",
    "Ko'rgazmali"
  ],
  correctAnswer: "Interfaol metod"
},
{
  question: "Qatnashchilarga o'z g'oyalari va fikrlari bilan ko'proq o'rtoqlashishi, ularning bir-birdan o'rganishi uchun imkon beradi. Kichik guruhlarda qatnashchilar katta guruhda aytishlari mumkin bo'lgan fikrlardan boshqacha fikrlarni aytishlari mumkin",
  options: [
    "Interaktiv usul",
    "Etak guruhlash",
    "Edu-model stol",
    "So'rov"
  ],
  correctAnswer: "Interaktiv usul"
},
{
  question: "Masalan: Talabalarga pedagogika tarmoqlarini sanab berish topshiriladi. Javob berilayotganda - javoblar izohlanmaydi yoki o'rinsiz deb rad etilmaydi. Javoblar tugagach talabalar o'qituvchi bilan birgalikda javoblarni muhokama qilishadi. Ushbu tushunchalar qaysi texnologiyaga tegishli?",
  options: [
    "Miya hujumi",
    "Interaktiv usulga",
    "Venn",
    "Issiq kartoshka"
  ],
  correctAnswer: "Miya hujumi"
},
{
  question: "O'quvchi, ta'limning maqsadi, ta'limning mazmuni, o'quv jarayoni, pedagog yoki texnik vositalar, ta'limning tashkiliy shakllari. Pedagogik tizimning mazkur tarkibiy elementlardan tashkil topishi kim tomonidan qayd qilingan?",
  options: [
    "V.P. Bespalko",
    "Y. Shumpeter",
    "V. Rudnev",
    "S.I. Rubinshteyn"
  ],
  correctAnswer: "V.P. Bespalko"
},
{
  question: "'Innovatsion ta'lim' tushunchasi birinchi bo'lib qaysi davlatda ishlatilgan?",
  options: [
    "1979 yilda Rimda",
    "1980 yilda Finlandiyada",
    "1897 yilda Angliyada",
    "1993 yilda Germaniyada"
  ],
  correctAnswer: "1979 yilda Rimda"
},
{
  question: "Ta'lim innovatsiyalari necha turga bo'linadi?",
  options: [
    "4 turga",
    "6 turga",
    "8 turga",
    "2 turga"
  ],
  correctAnswer: "4 turga"
},
{
  question: "Faoliyat qisqa muddatli, yaxlit tizim xususiyatiga ega bo'lib, faqatgina tizimdagi ayrim elementlarni o'zgartirishga xizmat qilsa u nima deb yuritiladi?",
  options: [
    "Novatsiya",
    "Innovatsiya",
    "Interaktiv",
    "Kompetensiya"
  ],
  correctAnswer: "Novatsiya"
},
{
  question: "Ijodiy faollik, yangilikni kiritishga texnologik va metodologik tayyorgarlik, yangicha fikrlash, yuqori muomala madaniyati. Innovatsion faoliyatning ushbu tarkibiy elementlari kim tomonidan ko'rsatilgan?",
  options: [
    "V. Slastenin",
    "A. Makarenko",
    "J. Russo",
    "M. Shumpeter"
  ],
  correctAnswer: "V. Slastenin"
},
{
  question: "Pedagogda ta'lim jarayoniga innovatsion yondashuvni qaror toptirish necha bosqichda kechadi?",
  options: [
    "4",
    "2",
    "5",
    "6"
  ],
  correctAnswer: "4"
},
{
  question: "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi qonuniga muvofiq kimlar pedagogik faoliyat bilan shug'ullanish huquqiga egalar?",
  options: [
    "Tegishli ma'lumoti, kasbiy tayyorgarligi bor va yuqori axloqiy fazilatlarga ega bo'lgan shaxslar",
    "Kasbiy bilim, ko'nikma va malaka, shuningdek, ta'lim muassasalarida ishlash tajribasiga ega shaxslar",
    "Oliy pedagogik ma'lumot hamda 5 yillik pedagogik stajga ega shaxslar",
    "Faoliyat jarayonida ta'lim oluvchilarning yosh va psixologik xususiyatlarini inobatga olgan holda ular bilan muloqot qilish malakasini o'zlashtirgan shaxslar"
  ],
  correctAnswer: "Tegishli ma'lumoti, kasbiy tayyorgarligi bor va yuqori axloqiy fazilatlarga ega bo'lgan shaxslar"
},
{
  question: "Boshlang'ich sinflarda texnologiya nimani o'rgatadi?",
  options: [
    "Ijodkorlik va ilk kasb haqida tasavvurlarni",
    "Mahorat darslarini",
    "Mehnatga o'rgatish",
    "Qobiliyatlarini ochib berish"
  ],
  correctAnswer: "Ijodkorlik va ilk kasb haqida tasavvurlarni"
},
{
  question: "'Tasavvur — bilimdan muhim' bu kimning pedagogik qarashi?",
  options: [
    "Albert Enshteyn",
    "Pol Torrens",
    "Ken Robinson",
    "Kamenskiy"
  ],
  correctAnswer: "Albert Enshteyn"
},
{
  question: "'Aqliy hujum' metodini kim tomonidan fanga kiritilgan?",
  options: [
    "Aleks Osborn tomonidan 1953-yilda 'Amaliy tasavvur' kitobida ommalashgan",
    "Komenskiy tomonidan 1968-yil 'Venn diagrammasi' ommalashgan",
    "Pol Torrens 'Insert' usuli ommalashgan",
    "Tomson tomonidan Grafik organizatorlar ommalashgan"
  ],
  correctAnswer: "Aleks Osborn tomonidan 1953-yilda 'Amaliy tasavvur' kitobida ommalashgan"
},
{
  question: "'BBB', 'Konseptual jadval', 'Venn diagrammasi', 'Insert', 'Klaster', 'Nima uchun?', 'Qanday?' bular …",
  options: [
    "Grafik organizatorlar",
    "Metodlar",
    "Usullar",
    "Uslublar"
  ],
  correctAnswer: "Grafik organizatorlar"
},
{
  question: "Ma'lumotlarni tahlil qilish, solishtirish va taqqoslash usul va vositalari",
  options: [
    "T-jadvali, Venn diagrammasi (grafik organizatorlar)",
    "Metodlar",
    "Usullar",
    "Sxemalar"
  ],
  correctAnswer: "T-jadvali, Venn diagrammasi (grafik organizatorlar)"
},
{
  question: "Qaysi yillardan boshlab 'Aqliy hujum' metodi O'zbekistonda ishlatila boshlandi?",
  options: [
    "90-yillardan",
    "50-yillardan",
    "70-yillardan",
    "30-yillardan"
  ],
  correctAnswer: "90-yillardan"
},
{
  question: "'Fikriy hujum' metodidan foydalanish chog'ida o'quvchilarning soni qancha nafardan oshmasligi maqsadga muvofiqdir?",
  options: [
    "10-15 tadan",
    "8-10 tadan",
    "5-6 tadan",
    "7-8 tadan"
  ],
  correctAnswer: "10-15 tadan"
},
{
  question: "'Kreativlik' tushunchasining lug'aviy ma'nosi bu",
  options: [
    "Ing. create - yaratuvchi, ijodkor",
    "Tahlil qiluvchi",
    "Amaliy yordam beruvchi",
    "Yo'l ko'rsatuvchi"
  ],
  correctAnswer: "Ing. create - yaratuvchi, ijodkor"
},
{
  question: "Ken Robinsonning fikriga ko'ra, kreativlik bu...",
  options: [
    "O'z qadriyatiga ega, original g'oyalar majmuidir",
    "Muayyan soha bo'yicha o'zlashtirilgan puxta bilimlar bilan birga yuqori darajada noodatiy ko'nikmalarga ham ega bo'lish",
    "Eng avvalo muayyan masala yuzasidan har tomonlama fikrlash sanaladi",
    "Faollik, tezkor fikrlash, o'ziga xoslik va takomillashganlik"
  ],
  correctAnswer: "O'z qadriyatiga ega, original g'oyalar majmuidir"
},
{
  question: "Shaxsning kreativligi ...da namoyon bo'ladi",
  options: [
    "Uning tafakkurida, muloqotida, his-tuyg'ularida, muayyan faoliyat turlarida namoyon bo'ladi",
    "Faollik, tezkor fikrlash, o'ziga xoslik va takomillashganlik",
    "O'z qadriyatiga ega, original g'oyalar majmuidir",
    "Muayyan soha bo'yicha o'zlashtirilgan puxta bilimlar bilan birga yuqori darajada noodatiy ko'nikmalarga ham ega bo'lish"
  ],
  correctAnswer: "Uning tafakkurida, muloqotida, his-tuyg'ularida, muayyan faoliyat turlarida namoyon bo'ladi"
},
{
  question: "Kreativ sifatlarni rivojlantirishning 1-yo'li bu",
  options: [
    "Kreativ fikrlash ko'nikmasini shakllantirish",
    "Kreativ mahsulot (ishlanma)lardan foydalanish",
    "Amaliy kreativ fikrlash ko'nikmasini rivojlantirish",
    "Malaka talablari, o'lchov mezonlari"
  ],
  correctAnswer: "Kreativ fikrlash ko'nikmasini shakllantirish"
},
{
  question: "Keys stadi metodi orqali talabalar qanday ko'nikmaga ega bo'lishadi?",
  options: [
    "Ing. case-metod, muammoli vaziyat, ta'lim oluvchilarni aniq yoki sun'iy yaratilgan muammoli vaziyatlarni tahlil qilish orqali eng maqulini topish ko'nikmalari",
    "Ing. create - yaratuvchi, ijodkor",
    "Tahlil qiluvchi",
    "Amaliy yordam beruvchi"
  ],
  correctAnswer: "Ing. case-metod, muammoli vaziyat, ta'lim oluvchilarni aniq yoki sun'iy yaratilgan muammoli vaziyatlarni tahlil qilish orqali eng maqulini topish ko'nikmalari"
},
{
  question: "Qaysi kompetensiya mediamanbalardan zarur ma'lumotlarni izlab topa olishni, saralashni, qayta ishlashni, saqlashni, ulardan samarali foydalana olishni, ularning xavfsizligini ta'minlashni, media madaniyatga ega bo'lish layoqatlarini shakllantirishni nazarda tutadi?",
  options: [
    "Axborotlar bilan ishlash kompetensiyasi",
    "Matematik savodxonlik, fan va texnika yangiliklardan xabardor bo'lish kompetensiyasi",
    "Ijtimoiy faol fuqarolik kompetensiyasi",
    "Milliy va umumbashariy kompetensiya"
  ],
  correctAnswer: "Axborotlar bilan ishlash kompetensiyasi"
},
{
  question: "Qaysi kompetensiya aniq hisob-kitoblarga asoslangan holda shaxsiy, oilaviy, kasbiy va iqtisodiy rejalarni tuza olish, kundalik faoliyatda turli diagramma, chizma va modellarni o'qiy olish, inson mehnatini yengillashtiradigan, mehnat unumdorligini oshiradigan, qulay sharoit-sharoitga olib keladigan fan va texnika yangiliklardan foydalana olish layoqatlarini shakllantirishni nazarda tutadi?",
  options: [
    "Matematik savodxonlik, fan va texnika yangiliklardan xabardor bo'lish kompetensiyasi",
    "Ijtimoiy faol fuqarolik kompetensiyasi",
    "Milliy va umumbashariy kompetensiya",
    "Axborotlar bilan ishlash kompetensiyasi"
  ],
  correctAnswer: "Matematik savodxonlik, fan va texnika yangiliklardan xabardor bo'lish kompetensiyasi"
},
{
  question: "Qaysi kompetensiya doimiy ravishda o'z-o'zini jismoniy, ma'naviy, ruhiy, intellektual va kreativ rivojlantirish, kamolotga intilish, hayot davomida mustaqil o'qib-o'rganish, kognitivlik ko'nikmalarini va hayotiy tajribani mustaqil ravishda muntazam oshirib borish, o'z xatti-harakatini muqobil baholash va mustaqil qaror qabul qila olish ko'nikmalarini egallashni nazarda tutadi?",
  options: [
    "O'z-o'zini rivojlantirish kompetensiyasi",
    "Ijtimoiy faol fuqarolik kompetensiyasi",
    "Milliy va umumbashariy kompetensiya",
    "Axborotlar bilan ishlash kompetensiyasi"
  ],
  correctAnswer: "O'z-o'zini rivojlantirish kompetensiyasi"
},
{
  question: "'Olim bo'l (ilm beruvchi bo'l) yoki ilm o'rganuvchi bo'l, yoki tinglovchi bo'l, yoki ilimga va ilm ahliga muhabbatli bo'l. Beshinchisi bo'lma, halok bo'lasan', shu g'oyalar qaysi manbaga tegishli?",
  options: [
    "Xadisi sharifdan",
    "Hikmatli so'zlardan",
    "Maqollardan",
    "Ertaklardan"
  ],
  correctAnswer: "Xadisi sharifdan"
},
{
  question: "Kreativ qobiliyat nima?",
  options: [
    "O'z-o'zini boshqara olish qobiliyati, kreativ ijodga ishga qobiliyatilik",
    "Ijodiy jarayonni muvaffaqiyatli amalga oshiradigan hamda aniq ijodiy natijaga ega shaxs",
    "Shaxsni ijodiy faoliyatda o'z imkoniyatlarni to'laqonli namoyon qilish va rivojlantirish",
    "Ijodiy faoliyatni muvaffaqiyatli amalga oshirish va uni natijalanganligi"
  ],
  correctAnswer: "O'z-o'zini boshqara olish qobiliyati, kreativ ijodga ishga qobiliyatilik"
},
{
  question: "Qaysi keys turda yaqqol ifodalangan syujetga ega bo'lmaydi, vaziyat materiallar, hisob-kitoblar, ishlanmalar majmuidan iborat bo'ladi?",
  options: [
    "Syujetsiz keys",
    "Syujetli keys",
    "Dramalashgan keys",
    "Muloqot keysi"
  ],
  correctAnswer: "Syujetsiz keys"
},
{
  question: "'O'qish nafaqat xotirani yaxshilaydi, balki so'z boyligini kengaytiradi va diqqatni oshiradi, shu bilan birgalikda, ijodkorlikni ham shakllantiradi'. Bu bolaning ijodkorligini rivojlantirishning qaysi yo'li?",
  options: [
    "Mutolaa",
    "Testlar orqali",
    "Bolalarni oddiy tanlov qilishga undash",
    "Ochiq savollar orqali"
  ],
  correctAnswer: "Mutolaa"
},
{
  question: "Tarbiya jarayoni qancha davom etadi?",
  options: [
    "Butun umr mobaynida",
    "Maktab ta'limi yakunigacha",
    "Oliy ta'lim diplomini qo'lga kirttguncha",
    "Bolalarning hoxishiga binoan"
  ],
  correctAnswer: "Butun umr mobaynida"
},
{
  question: "Ta'lim oluvchilarning qobiliyatlarini va ta'limga nisbatan talab-ehtiyojlarini hisobga olgan holda ta'limni tashkil etishga metodologik yondashuv nima deb ataladi?",
  options: [
    "Shaxsga yo'naltirilgan ta'lim",
    "An'anaviy ta'lim",
    "Masofaviy",
    "Muammoli"
  ],
  correctAnswer: "Shaxsga yo'naltirilgan ta'lim"
},
{
  question: "Tarbiya jarayonidan ko'zlangan asosiy maqsad...",
  options: [
    "Barkamol shaxsni tarbiyalash",
    "G'oyalarni shakllantirish",
    "Hayotga tayyorlash",
    "Mustaqillikni shakllantirish"
  ],
  correctAnswer: "Barkamol shaxsni tarbiyalash"
},
{
  question: "Bolalarda umum insoniy axloq va odob qoidalarini, jamiyat hayotida faol munosabatni, tolerantlikni shakllantirish tarbiya jarayonining qaysi jihatini aks ettiradi?",
  options: [
    "Tarbiya jarayonining vazifasi",
    "Maqsadini",
    "Sub'yektini",
    "Predmetini"
  ],
  correctAnswer: "Tarbiya jarayonining vazifasi"
},
{
  question: "Tarbiyaning asosiy metodi - bu:",
  options: [
    "Ishontirish",
    "Jazolash",
    "Rag'bat",
    "Tanbeh"
  ],
  correctAnswer: "Ishontirish"
},
{
  question: "O'quvchi tomondan o'qituvchi tajribasini ongli yoki ongsiz takrorlanishi nima deb nomlanadi?",
  options: [
    "Taqlid qilish",
    "Havas",
    "Ishonch",
    "Muhokama qilish"
  ],
  correctAnswer: "Taqlid qilish"
},
{
  question: "O'qituvchi va o'quvchining ob'ektiv va sub'ektiv sharoitlarda, ma'lum muddat mobaynida pedagogik ta'sir ko'rsatish jarayoni qanday ataladi?",
  options: [
    "Tarbiyaviy vaziyat",
    "Kritik vaziyat",
    "Munozara",
    "Uqtirish"
  ],
  correctAnswer: "Tarbiyaviy vaziyat"
},
{
  question: "O'quvchilar qarashlari, hulq-atvor me'yorlari, xarakter chizgilarini shakllantirish uchun maqsadga yo'naltirilgan tashkiliy faoliyat nima deb ataladi?",
  options: [
    "Tarbiya",
    "Ta'lim",
    "Ekskursiya",
    "O'yin"
  ],
  correctAnswer: "Tarbiya"
},
{
  question: "1-sinf tarbiya darsligida necha bob nechta mavzudan iborat?",
  options: [
    "3 ta bob 29 ta mavzu",
    "5 bob 21 mavzu",
    "2 bob 19 mavzu",
    "3 bob 12 mavzu"
  ],
  correctAnswer: "3 ta bob 29 ta mavzu"
},
{
  question: "'Mening sevimli erkak qahramonlarim' mavzusi qaysi darslikda berilgan?",
  options: [
    "1-sinf tarbiya darsligida",
    "3-sinf tarbiya darsligida",
    "2-sinf",
    "4-sinf"
  ],
  correctAnswer: "1-sinf tarbiya darsligida"
},
{
  question: "O'qituvchining innovatsion faoliyati qaysi masalaharni yechishga qaratilgan?",
  options: [
    "Voqelikni o'zgartirishga, uning muammolari va usullarini yechishni aniqlashga qaratilgan",
    "Shaxsiy ijodiy-motivatsion yo'nalganligini aniqlashga qaratilgan",
    "Kasbiy faoliyatni baholashga qaratilgan",
    "Innovatsion faoliyatga bo'lgan zaruriyatni anglashga qaratilgan"
  ],
  correctAnswer: "Voqelikni o'zgartirishga, uning muammolari va usullarini yechishni aniqlashga qaratilgan"
},
{
  question: "Pedagogik texnologiyani bugungi kundagi ahamiyati qanday?",
  options: [
    "Sohadagi nazariy va amaliy izlanishlarni birlashtirish doirasidagi faoliyatni aks ettiradi",
    "Pedagogikada monitoringda",
    "Ta'limning baholash shkalasida",
    "O'quv jarayonini uzluksizligida"
  ],
  correctAnswer: "Sohadagi nazariy va amaliy izlanishlarni birlashtirish doirasidagi faoliyatni aks ettiradi"
},
{
  question: "Ishontirishning qanday usuli mavjud?",
  options: [
    "Bevosita va bilvosita",
    "Dalli-isbot",
    "Qo'llab-quvvatlash",
    "Sazovor bo'lish"
  ],
  correctAnswer: "Bevosita va bilvosita"
},
{
  question: "'Tarbiyachi tashkil etishni, yurishni, hazillashishni, quvnoq yoki jahli bor bo'lishni bilishi lozim, u o'zini shunday tutishi kerakki, uning har bir harakati, yurish-turishi, kiyinishi bolalarni tarbiyalasin'. Ushbu fikr kimga tegishli?",
  options: [
    "Deb yorgan edi mashhur pedagog A.S. Makarenko",
    "Deb yorgan edi mashhur pedagog O. Musurmonova",
    "Deb yorgan edi mashhur pedagog K.D. Ushinskiy",
    "Deb yorgan edi mashhur pedagog V.A. Suxomlinskiy"
  ],
  correctAnswer: "Deb yorgan edi mashhur pedagog A.S. Makarenko"
},
{
  question: "'Pedagog darsda ma'lum bir o'ziga xos rolni o'ynamasligi mumkin emas. Sinf sahnasida rol o'ynashni bilmaydigan o'qituvchi kasbiy faoliyat olib bora olmaydi.' Ushbu fikrlar muallifini belgilang",
  options: [
    "A.S. Makarenko",
    "L.N. Tolstoy",
    "Ya.A. Komenskiy",
    "V.A. Suxomlinskiy"
  ],
  correctAnswer: "A.S. Makarenko"
},
{
  question: "'Ustoz shogirdlariga qattiq zulm ham, haddan tashqari ko'ngilchanlik ham qilmasligi lozim'. Ushbu fikr qaysi allomaga tegishli?",
  options: [
    "Abu Nasr Forobiy",
    "Abu Rayhon Beruniy",
    "Alisher Navoiy",
    "Abu Ali ibn Sino"
  ],
  correctAnswer: "Alisher Navoiy"
},
{
  question: "Dars samaradorligini oshirish omili",
  options: [
    "Ilg'or pedagogik texnologiyalardan foydalanish",
    "Mustaqil ish, ijodiy ishlarni tashkil etish",
    "Qo'shimcha materiallardan foydalanish",
    "Vaqtdan unumli foydalanish"
  ],
  correctAnswer: "Ilg'or pedagogik texnologiyalardan foydalanish"
},
{
  question: "O'qituvchi kompetensiyasi piramidasi nimalardan iborat?",
  options: [
    "Motiv, munosabat, bilim, malaka, xulq-atvor",
    "Kasbiy mahorat va malaka",
    "Kasbiy bilim, tushuncha, malaka",
    "Kasbiy mahorat, tajriba, bilim, ko'nikma"
  ],
  correctAnswer: "Motiv, munosabat, bilim, malaka, xulq-atvor"
},
{
  question: "Innovatsion yondoshuv nima?",
  options: [
    "Muammoni yechish uchun yangicha yondashuv yoki yangi texnologik jarayonni qo'llash",
    "Turli maqsadlar shajarasini ishlab chiqish va vazifalarni amalga oshirish",
    "Tartibga solish va nazorat qilish",
    "Zamon ehtiyoj va talablaridan kelib chiqib boshqarishni yo'lga qo'yish"
  ],
  correctAnswer: "Muammoni yechish uchun yangicha yondashuv yoki yangi texnologik jarayonni qo'llash"
},
{
  question: "O'qitishning jarayonini tashkil etishda bir muncha keng tarqalgan yondashuvlarni belgilang",
  options: [
    "Individual, guruhli, frontal",
    "Izohli-tasvirli, texnologik, ijodiy",
    "Statsionar, erkin-eksternat",
    "Nazariy va amaliy"
  ],
  correctAnswer: "Individual, guruhli, frontal"
},
{
  question: "Shaxsga yo'naltirilgan ta'lim texnologiyasi muallifi",
  options: [
    "Nazarova T.S.",
    "Lerner I.Ya.",
    "Bespalko V.P.",
    "Saidaxmedov N.S."
  ],
  correctAnswer: "Saidaxmedov N.S."
},
{
  question: "Hamkorlik texnologiyasiga asos solgan olimni ayting",
  options: [
    "V.F. Shatalov",
    "S.N. Lisenkova",
    "N.P. Guzik",
    "Sh.A. Amonashvili"
  ],
  correctAnswer: "Sh.A. Amonashvili"
},
{
  question: "Texnologiyalashtirish bu - ...",
  options: [
    "Bu ob'ektiv jarayon bo'lib, ta'lim evolyutsiyasining yangi vazifalarini sifatli hal qilish uchun tayyorgarlik davri",
    "Ishlab chiqarish jarayonida ashyolar, materiallar va yarim tayyor ashyolarga muvofiq ishlab chiqarish qurollari",
    "Pedagogning talablarga ta'sir qilishni tashkil etish bo'yicha kasbiy ahamiyatga molik masalahar",
    "Innovatsion jarayonlar, ularning funktsiyalari, rivojlanish qonuniyatlari, mexanizmlari va uni amalga oshirish texnologiyalari"
  ],
  correctAnswer: "Bu ob'ektiv jarayon bo'lib, ta'lim evolyutsiyasining yangi vazifalarini sifatli hal qilish uchun tayyorgarlik davri"
},
{
  question: "Ranglik kiritishning ijtimoiy-psixologik aspekti qaysi olim tomonidan ishlab chiqilgan?",
  options: [
    "R. Karlson",
    "E. Rodjers",
    "Xeyylox",
    "M. Mayrs"
  ],
  correctAnswer: "E. Rodjers"
},
{
  question: "O'qitishning jadallashtirish texnologiyasiga kim asos solgan?",
  options: [
    "V.F. Shatalov",
    "S.N. Lisenkova",
    "N.P. Guzik",
    "Sh.A. Amonashvili"
  ],
  correctAnswer: "V.F. Shatalov"
},
{
  question: "Pedagogik texnologiya tamoyillari to'g'ri ko'rsatilgan javobni belgilang",
  options: [
    "Ilmiylik, loyihalash, tizimlilik, maqsad yo'naltirilganlik, faoliyat yondashuvi, boshqaruvchanlik, qayta takrorlanish, samaradorlik tamoyili",
    "Ilmiylik, loyihalash, tizimlilik, maqsad yo'naltirilganlik, ko'rsatmalilik, boshqaruvchanlik, qayta takrorlanish, samaradorlik tamoyili",
    "Ilmiylik, loyihalash, tizimlilik, uchililik, faoliyat yondashuvi, boshqaruvchanlik, qayta takrorlanish, samaradorlik tamoyili",
    "Ilmiylik, loyihalash, tizimlilik, maqsad yo'naltirilganlik, faoliyat yondashuvi, insonparvarlik, qayta takrorlanish, samaradorlik tamoyili"
  ],
  correctAnswer: "Ilmiylik, loyihalash, tizimlilik, maqsad yo'naltirilganlik, faoliyat yondashuvi, boshqaruvchanlik, qayta takrorlanish, samaradorlik tamoyili"
},
{
  question: "O'quv-bilish faoliyatini tashkil etish va amalga oshirish metodlarini ko'rsating",
  options: [
    "Ifodali, ko'rgazmali, amaliy",
    "Induktiv va deduktiv",
    "Reproduktiv va muammoli-ijodiy",
    "O'qituvchi rahbarligida mustaqil ish"
  ],
  correctAnswer: "Ifodali, ko'rgazmali, amaliy"
},
{
  question: "Qaysi tushuncha ehtiyoj, intilish, qiziqish kabi ma'nolarni anglatadi?",
  options: [
    "Maqsad",
    "Baholash",
    "Mazmun",
    "Motiv"
  ],
  correctAnswer: "Motiv"
},
{
  question: "An'anaviy yondashuvning asosiy xususiyati nimada?",
  options: [
    "Ijodiy yondashuv",
    "Nazorat turlari (joriy, oraliq, yakuniy)",
    "Gapirib berish, tushuntirish, talaba esa bu axborotni kotirovda saqlaydi",
    "O'zaro ta'sirlar"
  ],
  correctAnswer: "Gapirib berish, tushuntirish, talaba esa bu axborotni kotirovda saqlaydi"
},
{
  question: "'Tizim' so'zining ma'nosi ko'rsatilgan qatorni belgilang",
  options: [
    "Gaplarni yozib, saqlab olish",
    "Ijodiy yondashuv",
    "Qismlardan tuzilgan, birikkan yaxlit narsa yoki hodisa",
    "O'quvchilarning bilish faoliyatini rivojlantirish"
  ],
  correctAnswer: "Qismlardan tuzilgan, birikkan yaxlit narsa yoki hodisa"
},
{
  question: "Qaysi ta'lim turida umumiy o'rta ta'lim olish uchun zarur bo'lgan savodxonlik, bilim va ko'nikma asoslarini shakllantirishga qaratiladi?",
  options: [
    "Boshlang'ich ta'lim",
    "Maktabgacha",
    "Umumiy o'rta",
    "Professional"
  ],
  correctAnswer: "Boshlang'ich ta'lim"
},
{
  question: "O'qituvchilarning ijodiy ishlarini o'rganish",
  options: [
    "Tarbiya berish metodi",
    "Ilmiy-tadqiqot metodi",
    "Ta'lim berish metodi",
    "O'z-o'zini tarbiyalash metodi"
  ],
  correctAnswer: "Ilmiy-tadqiqot metodi"
},
{
  question: "Zamonaviy ta'limning qanday turlari mavjud?",
  options: [
    "Kunduzgi, sirtqi ta'lim",
    "Kunduzgi, sirtqi, kechki sirtqi, masofaviy ta'lim",
    "Kechki ta'lim",
    "Masofaviy ta'lim, sirtqi ta'lim"
  ],
  correctAnswer: "Kunduzgi, sirtqi, kechki sirtqi, masofaviy ta'lim"
},
{
  question: "Pedagogik texnologiyalar sohasidagi tadqiqotlarning rivojlanishiga hissa qo'shgan olim bu",
  options: [
    "V.P. Bespalko",
    "Tony Byuzen",
    "M. Jumaniyozova",
    "A. Avloniy"
  ],
  correctAnswer: "V.P. Bespalko"
},
{
  question: "Didaktikada texnologiyalar necha turga bo'linadi?",
  options: [
    "3",
    "2",
    "5",
    "7"
  ],
  correctAnswer: "3"
},
{
  question: "Integratsiya so'zining ma'nosi",
  options: [
    "To'ldirish",
    "Tahlil qilish",
    "Faollashtirish",
    "Muhokama"
  ],
  correctAnswer: "To'ldirish"
},
{
  question: "Olimlar yangiliklarni kiritish va tekshirishni necha bosqichga ajratadi?",
  options: [
    "3",
    "4",
    "6",
    "2"
  ],
  correctAnswer: "3"
},
{
  question: "Ta'lim tizimini tubdan isloh qilishning oliy maqsadi",
  options: [
    "Raqobatbardosh kadrlar tayyorlash",
    "Yetuk shaxsni tarbiyalash",
    "Barkamol avlodni tarbiyalash",
    "Sog'lom avlodni tarbiyalash"
  ],
  correctAnswer: "Raqobatbardosh kadrlar tayyorlash"
},
{
  question: "'Innovatsion ta'lim' tushunchasi dastlab qayerda asoslangan?",
  options: [
    "1979-yilda Rimda",
    "1998-yilda Rimda",
    "1900-yilda Parijda",
    "1879-yilda AQSHda"
  ],
  correctAnswer: "1979-yilda Rimda"
},
{
  question: "Malaka bu....",
  options: [
    "Bilimlarni amalda bir necha bor qo'llanilishi orqali sodir bo'ladi",
    "Mehnat qilish jarayonida hasil bo'lgan ko'nikmalar natijasi hisoblanadi",
    "Insonni uzoq yillar davomida o'zlashtira olgan bilimlar majmuidir",
    "Ongli xatti-harakatning avtomatlashgan, bexato bajariladigan harakatidir"
  ],
  correctAnswer: "Ongli xatti-harakatning avtomatlashgan, bexato bajariladigan harakatidir"
},
{
  question: "Metodologiya nima?",
  options: [
    "Fanda ilmiy tadqiqotlar olib borishning metodlari yig'indisi",
    "Ta'lim-tarbiyaning metodlari",
    "Fan uchun ilmiy-nazariy asos bo'ladigan ta'limot",
    "Bajarilishi majbur bo'lgan davlat hujjati"
  ],
  correctAnswer: "Fanda ilmiy tadqiqotlar olib borishning metodlari yig'indisi"
},
{
  question: "Bilimdon, o'qimishli, keng dunyoqarashga ega bo'lishlikka nima deyiladi?",
  options: [
    "Zamon talabiga javob beruvchi shaxs",
    "Axloqiy komillik",
    "Aqliy uyg'unlik",
    "Ruhiy kamolotga erishganlik"
  ],
  correctAnswer: "Zamon talabiga javob beruvchi shaxs"
},
{
  question: "Jasur, vatanparvar fuqaroni tarbiyalash maqsadi qaysi davrga xos bo'lgan jihat hisoblanadi?",
  options: [
    "Mustaqil O'zbekiston",
    "Qadimgi Yunoniston",
    "Feodalizm",
    "Burjuaziya"
  ],
  correctAnswer: "Mustaqil O'zbekiston"
},
{
  question: "Metod bu... nima?",
  options: [
    "Vazifalar yig'indisi metod bo'ladi",
    "Metod - bu qonun-qoidalar yig'indisidir",
    "Biror faoliyatni bajarishning yo'l va usullari",
    "Bajariladigan ish mazmun-mohiyati"
  ],
  correctAnswer: "Biror faoliyatni bajarishning yo'l va usullari"
},
{
  question: "Pedagogik faoliyat deganda qanday jarayonni tushunish mumkin?",
  options: [
    "Yosh avlodni hayotga, mehnatga tayyorlash, ta'lim-tarbiya berish uchun maxsus tayyorlangan odamlarning mehnat faoliyati",
    "Pedagogik jarayon - kompyuter texnologiyasiga asoslangan o'quv uslubini qo'llash, ta'lim berishga hamda fanga oid o'quv materiallari to'g'risidagi ma'lumotlarni samarador o'zlashtirilishiga qaratilgan ta'lim-tarbiya jarayoni",
    "Pedagogik jarayon - inson shaxsini shakllantirishga qaratilgan jarayon",
    "Bolalarga ta'lim-tarbiya berishga maxsus tayyorgarlik kasb egasi"
  ],
  correctAnswer: "Yosh avlodni hayotga, mehnatga tayyorlash, ta'lim-tarbiya berish uchun maxsus tayyorlangan odamlarning mehnat faoliyati"
},
{
  question: "O'zbekiston Respublikasida ta'lim sohasidagi islohotlarning asosiy maqsadi nimaga qaratilgan?",
  options: [
    "Insonni har tomonlama rivojlantirish va kamol topishi",
    "Ilm, fan va madaniyatni yanada rivojlantirish",
    "Dunyoviy aloqalarni bir-biri bilan bog'lash",
    "Ekologiyani yaxshilash"
  ],
  correctAnswer: "Insonni har tomonlama rivojlantirish va kamol topishi"
},
{
  question: "Ta'lim tizimini tubdan isloh qilishning oliy maqsadi nima deb o'ylaysiz?",
  options: [
    "Raqobatbardosh kadrlar tayyorlash",
    "Yetuk shaxsni tarbiyalash",
    "Barkamol avlodni tarbiyalash",
    "Sog'lom avlodni tarbiyalash"
  ],
  correctAnswer: "Raqobatbardosh kadrlar tayyorlash"
},
{
  question: "Kreativlik tushunchasining asosiy mohiyatini belgilang",
  options: [
    "Ijodkorlik yondashuvlarini qaror toptirishga bo'lgan ehtiyoj",
    "Yangilikka bo'lgan ehtiyoj",
    "O'zgarishga intilish",
    "Ta'lim samaradorligini oshirish"
  ],
  correctAnswer: "Ijodkorlik yondashuvlarini qaror toptirishga bo'lgan ehtiyoj"
},
{
  question: "'Innovatsiya' termini 1900 yilda qo'llagan iqtisodchi olimni toping",
  options: [
    "Y. Shumpeter",
    "V. Rudnev",
    "S.L. Rubinshteyn",
    "R. Yakobson"
  ],
  correctAnswer: "Y. Shumpeter"
},
{
  question: "'Texnologiya' so'zi fanga qachon kirib kelganligini aniqlang",
  options: [
    "1872 yil",
    "1991 yil",
    "2000 yil",
    "1801 yil"
  ],
  correctAnswer: "1872 yil"
},
{
  question: "Quyidagilardan qaysi biri ta'lim sohasidagi davlat siyosatining asosiy prinsiplari bu…",
  options: [
    "Ta'lim-tarbiyaning insonparvarligi va demokratiyaviyliği",
    "Ta'lim tizimini takomillashtirish",
    "Ta'limda jamiyat boshqaruvini va shakllarini rivojlantirish",
    "Ilimli bo'lishni va iste'dodni rag'batlantirish"
  ],
  correctAnswer: "Ta'lim-tarbiyaning insonparvarligi va demokratiyaviyliği"
},
{
  question: "Aniq reja, maqsad asosida uning natijalanishini kafolatlagan holda pedagogik faoliyat mazmunini ishlab chiqish mahsuli – bu",
  options: [
    "Loyiha",
    "Strategiya",
    "Tizim",
    "Qo'lda"
  ],
  correctAnswer: "Loyiha"
},
{
  question: "Ta'lim innovatsiyalari nechta turga ajratiladi",
  options: [
    "4 turga",
    "5 turga",
    "3 turga",
    "6 turga"
  ],
  correctAnswer: "4 turga"
},
{
  question: "Bilish, loyihalash, kommunikativ nutq va tashkilotchilik mahoratini rivojlantirishni talab etuvchi faoliyat bu…",
  options: [
    "Innovatsion faoliyat",
    "Innovatsion jarayon",
    "Innovatsion muhit",
    "Innovatsion taraqqiyot"
  ],
  correctAnswer: "Innovatsion faoliyat"
},
{
  question: "'Innovatsion ta'lim' tushunchasi birinchi bor nechanchi yilda qo'llanilgan",
  options: [
    "1979-yilda",
    "1877",
    "1987",
    "1999"
  ],
  correctAnswer: "1979-yilda"
},
{
  question: "An'anaviy dars yana qanday nomlanadi",
  options: [
    "Markazda o'qituvchi turgan o'qitish modeli",
    "Markazda o'quvchi faol bo'lishi",
    "Hamkorlik va texnologiyalashtirilgan model",
    "Kichik guruhlar faoliyatini boshqarishda o'qituvchi dirijorlik qilish modeli"
  ],
  correctAnswer: "Markazda o'qituvchi turgan o'qitish modeli"
},
{
  question: "Faoliyat qisqa muddatli, yaxlit tizim xususiyatiga ega bo'lib, faqatgina tizimdagi ayrim elementlarni o'zgartirishga xizmat qilsa, bu qanday ataladi",
  options: [
    "Novatsiya",
    "Innovatsiya",
    "Integratsiya",
    "Adaptatsiya"
  ],
  correctAnswer: "Novatsiya"
},
{
  question: "Boshlang'ich ma'lumotlarga asoslanib, kutiladigan natijani taxmin qilish, bashoratlash, rejalashtirish orqali faoliyat yoki jarayon mazmunini ishlab chiqish – bu ...",
  options: [
    "Loyihalash",
    "Taqsimlash",
    "Tashkilashtirish",
    "Chamalab ko'rish"
  ],
  correctAnswer: "Loyihalash"
},
{
  question: "Fikrlash jarayonining mustaqilligini yuqori darajada talab etuvchi vaziyat turi",
  options: [
    "Muammoli vaziyat",
    "Tafakkur",
    "Umumlashtirish",
    "Analiz"
  ],
  correctAnswer: "Muammoli vaziyat"
},
{
  question: "Innovatsion faoliyatning asosiy tamoyillariga nimalar kiradi",
  options: [
    "Strategik va taktik",
    "Taxminga suyanish",
    "Loyihalash va chamalash",
    "Fikrlash va oldinga intilish"
  ],
  correctAnswer: "Strategik va taktik"
},
{
  question: "Ta'limda yangilik kiritish va qo'llash bu nima",
  options: [
    "Innovatsion uslub",
    "Innovatsion tashxis",
    "Innovatsion faoliyat",
    "Innovatsion loyiha"
  ],
  correctAnswer: "Innovatsion faoliyat"
},
{
  question: "Integratsiya so'zi qaysi so'zdan olingan",
  options: [
    "Grekcha",
    "Lotincha",
    "Inglizcha",
    "O'zbekcha"
  ],
  correctAnswer: "Lotincha"
},
{
  question: "Metod so'zi qaysi tildan olingan",
  options: [
    "Yunoncha",
    "Lotincha",
    "Inglizcha",
    "O'zbekcha"
  ],
  correctAnswer: "Yunoncha"
},
{
  question: "Pedagogik yangilikning vujudga kelishi, ularning jadal o'zlashtirilishi va amaliyotga tatbiq etilishiga nima deyiladi",
  options: [
    "Innovatsion muhit",
    "Innovatsion ta'lim",
    "Innovatsion ta'lim muassasasi",
    "Ta'lim jarayoni"
  ],
  correctAnswer: "Innovatsion muhit"
},
{
  question: "Yangi tipdagi ta'lim muassasalari deb qanday muassasani aytish mumkin",
  options: [
    "Innovatsion ta'lim muassasasi",
    "Innovatsion ta'lim",
    "Tadbirkorlar maktabi",
    "Xususiy maktabgacha ta'lim muassasasi"
  ],
  correctAnswer: "Innovatsion ta'lim muassasasi"
},
{
  question: "Yangi ijtimoiy talablarning an'anaviy me'yorlarga mos kelmasligi yoki yangi shakllanayotgan g'oyalarning mavjud g'oyalarni inkor etishi natijasida vujudga keladigan majmuaviy muammolarni yechishga qaratilgan faoliyat",
  options: [
    "Innovatsion faoliyat",
    "Mehnat",
    "Maqsad",
    "Ijodiy faoliyat"
  ],
  correctAnswer: "Innovatsion faoliyat"
},
{
  question: "... fikrlashning original usulining sinonimi yani odatdagi, qabul qilingan chegaralarni buzish qobiliyatidir",
  options: [
    "Ijod",
    "Malaka",
    "Ko'nikma",
    "Maqsad"
  ],
  correctAnswer: "Ijod"
},
{
  question: "O'qituvchining axloqiy madaniyatining ko'rsatkichi:",
  options: [
    "Pedagogik taktika",
    "Pedagogik adolat",
    "Pedagogik burch",
    "Pedagogik javobgarlik"
  ],
  correctAnswer: "Pedagogik taktika"
},
{
  question: "O'qituvchining eng muhim kasbiy sifatini belgilang",
  options: [
    "Bolalarga muhabbat",
    "Fanlarga muhabbat",
    "Umumiy bilim",
    "Notiqlik"
  ],
  correctAnswer: "Bolalarga muhabbat"
},
{
  question: "Ta'lim tizimidagi innovatsiyalarni pedagogik jarayonlarga kiritish necha bosqichda amalga oshiriladi",
  options: [
    "4",
    "2",
    "5",
    "8"
  ],
  correctAnswer: "4"
},
{
  question: "Pedagogik taktikani ota-onalarga o'qituvchilar singari o'rgatish kerak, deb hisoblagan A.S. Makarenko va unga kiritilgan",
  options: [
    "Bolalarga nisbatan talabchanlik",
    "Shaxsiy misol",
    "Sevgi va qat'iylikda muvozanatni saqlash",
    "Ta'lim usullari va texnikasini rejalashtirish"
  ],
  correctAnswer: "Sevgi va qat'iylikda muvozanatni saqlash"
},
{
  question: "O'zgarish va yangiliklarni rejalashtirish - Ta'lim tizimidagi innovatsiyalarni pedagogik jarayonlarga kiritish nechanchi bosqichini tashkil etadi",
  options: [
    "3-chi",
    "2-chi",
    "1-chi",
    "4-chi"
  ],
  correctAnswer: "1-chi"
},
{
  question: "Mo'ljallanayotgan ta'lim tizimini loyihalash - Ta'lim tizimidagi innovatsiyalarni pedagogik jarayonlarga kiritish nechanchi bosqichini tashkil etadi",
  options: [
    "2-chi",
    "3-chi",
    "1-chi",
    "4-chi"
  ],
  correctAnswer: "2-chi"
},
{
  question: "Ilmiy va innovatsion faoliyatni boshqarish tizimini tashkil etish chora-tadbirlari to'g'risida vazirlar mahkamasining qarori qachon qabul qilingan",
  options: [
    "2021-yil 27-avgust, 545-son",
    "2022-yil 27-avgust, 543-son",
    "2020-yil 27-aprel, 610-son",
    "2023-yil 11-avgust, 312-son"
  ],
  correctAnswer: "2021-yil 27-avgust, 545-son"
},
{
  question: "Pedagogik jamoa a'zolarini beshta guruhga ajratishni taklif etgan olimlar kim",
  options: [
    "K. Rodjers va K. Angelovskiy",
    "B.V. Sazonov, V.S. Tolstoy",
    "Patti Drepeau, L.S. Vigotskiy",
    "M. Jumaniyozova"
  ],
  correctAnswer: "K. Rodjers va K. Angelovskiy"
},
{
  question: "'Yangilik', 'yangilik' tushunchasi nafaqat muayyan g'oyani, balki hali amaliyotda foydalanilmagan yondashuv, metod hamda texnologiyalarni ifodalaydi. Ushbu fikrlar kimga tegishli",
  options: [
    "V.I. Zagvyazinskiy",
    "Y.A. Komenskiy",
    "J. Piaje",
    "A.I. Prigojin"
  ],
  correctAnswer: "V.I. Zagvyazinskiy"
},
{
  question: "Rivojlangan xorijiy mamlakatlarda pedagog faoliyatining innovatsion xarakter kashf etishiga erishish masalasi qaysi davrdan boshlab o'rganila boshlangan",
  options: [
    "XX asrning 60-yillaridan",
    "XX asrning 90-yillaridan",
    "XX asrning 50-yillaridan",
    "XX asrning 80-yillaridan"
  ],
  correctAnswer: "XX asrning 60-yillaridan"
},
{
  question: "Tarbiya doimo qanday xarakterga ega bo'lib kelgan?",
  options: [
    "Milliy",
    "Tarixiy",
    "An'anaviy",
    "Zamonaviy"
  ],
  correctAnswer: "Milliy"
},
{
  question: "Innovatsiyalarning asosiy ko'rinishlari qaysi javobda to'g'ri ko'rsatilgan",
  options: [
    "Yangi g'oyalar, odatiy bo'lmagan tashabbuslar",
    "An'anaviy yondashuvlar",
    "Qadriyatli g'oyalar",
    "Ajdodlarimiz an'analariga tayanish"
  ],
  correctAnswer: "Yangi g'oyalar, odatiy bo'lmagan tashabbuslar"
},
{
  question: "Agar faoliyat qisqa muddatli, yaxlit tizim xususiyatiga ega bo'lib, faqatgina tizimdagi ayrim elementlarni o'zgartirishga xizmat qilsa u nima deb yuritiladi",
  options: [
    "Novatsiya",
    "Innovatsiya",
    "Tizimlashtirish",
    "Muvofiqlashtirish"
  ],
  correctAnswer: "Novatsiya"
},
{
  question: "Bu olim kreativlikni tavsiflaydigan qator individual qobiliyatlarni ko'rsatadi: fikrning ravonligi; fikrni maqsadga muvofiq o'y hayoli; o'ziga xoslik (originallik); qiziquvchanlik",
  options: [
    "J. Gilford",
    "M. Jumaniyozova",
    "K. Angelovskiy",
    "D. Gamilton"
  ],
  correctAnswer: "J. Gilford"
},
{
  question: "Kreativlikning tizimli kontseptsiyasi mualliflari ... innovatsion jarayonlarning ikki muhim shaklini farqlagan olimlar kimlar",
  options: [
    "A.I. Prigojin, B.V. Sazonov, V.S. Tolstoy",
    "A.S. Makarenko, L.S. Vigotskiy",
    "A. Leontyev, V.S. Tolstoy",
    "K.D. Ushinskiy, B.V. Sazonov"
  ],
  correctAnswer: "A.I. Prigojin, B.V. Sazonov, V.S. Tolstoy"
},
{
  question: "O'qituvchi pedagogik muloqoti har xil ko'rinishda namoyon bo'ladi, bu... ?",
  options: [
    "Kommunikativ, interaktiv, perseptiv",
    "Psixologik, agressiv, xushmuomalalik",
    "Pedagogik mahorat, muosharat, kommunikativ",
    "Ishontirish, ongga ta'sir etish, taqlid qilish"
  ],
  correctAnswer: "Kommunikativ, interaktiv, perseptiv"
},
{
  question: "Yangilik kiritishning tizimli kontseptsiyasi mualliflari ... innovatsion jarayonlarning ikki muhim shaklini farqlaydilar. Ular qaysi olimlar",
  options: [
    "A.I. Prigojin, B.V. Sazonov, V.S. Tolstoy",
    "A.S. Makarenko, L.S. Vigotskiy",
    "A. Leontyev, V.S. Tolstoy",
    "K.D. Ushinskiy, B.V. Sazonov"
  ],
  correctAnswer: "A.I. Prigojin, B.V. Sazonov, V.S. Tolstoy"
},
{
  question: "'Assessment' so'zi qaysi tildan olingan va qanday ma'noni anglatadi",
  options: [
    "Inglizcha, 'baho', 'baholash'",
    "Fransuzcha 'imzo', 'imzolash'",
    "Ruscha 'yordamlashish'",
    "Arabcha 'ko'maklashish'"
  ],
  correctAnswer: "Inglizcha, 'baho', 'baholash'"
},
{
  question: "Qanday holat o'quv jarayonining ta'lim maqsadi (yoki maqsadlariga) erishishni kafolatlovchi usul va vositalar bilan ta'minlanganligini yoritadi?",
  options: [
    "Ta'lim jarayonini texnologiyalashtirish",
    "Yangilik kiritish",
    "Rivojlantirish",
    "O'rgatish"
  ],
  correctAnswer: "Ta'lim jarayonini texnologiyalashtirish"
},
{
  question: "Ta'lim sohası yoki o'quv jarayonida mavjud muammoni yangicha yondashuv asosida yechish maqsadida qo'llanilib, avvalgidan ancha samarali natijani kafolatlay oladigan shakl, metod va texnologiyalar qanday nomlanadi?",
  options: [
    "Ta'lim innovatsiyalari",
    "Ta'lim jarayonini texnologiyalashtirish",
    "Ta'lim-tarbiya berishga maxsus tayyorgarlik",
    "Kompyuter texnologiyasiga asoslangan o'quv uslubini qo'llash"
  ],
  correctAnswer: "Ta'lim innovatsiyalari"
},
{
  question: "Pedagogik texnologiya nima?",
  options: [
    "Ta'lim texnologiyasi",
    "Muammoli texnologiya",
    "Masofali texnologiyasi",
    "Hamkorlik texnologiyasi"
  ],
  correctAnswer: "Ta'lim texnologiyasi"
},
{
  question: "Ta'lim jarayoni 'O'quvchi – o'quvchi (juftlikda ishlash)', 'O'quvchi – o'quvchilar guruhi (guruh yoki kichik guruhda ishlash)', 'O'quvchi – o'quvchilar jamoasi (guruh jamoasida ishlash)', 'O'quvchi – axborot-kommunikatsion texnologiyalar' kabi tizimlarga muvofiq tashkil etiladigan ta'lim qanday nomlanadi",
  options: [
    "Interfaol ta'lim",
    "Loyihali ta'lim",
    "Masofaviy ta'lim",
    "Evristik ta'lim"
  ],
  correctAnswer: "Interfaol ta'lim"
},
{
  question: "O'quv jarayonida talabalarning jamoada, kichik guruh va juftlikda bilimlarni birgalikda o'zlashtirishlari, o'zaro rivojlanishlari, hamkorlikda tashkil etilishini ta'minlovchi ta'limiy xarakterdagi texnologiyalar qanday nomlanadi",
  options: [
    "Hamkorlik ta'limi texnologiyalari",
    "Masofali ta'lim",
    "Muammoli ta'lim",
    "Innovatsion ta'lim"
  ],
  correctAnswer: "Hamkorlik ta'limi texnologiyalari"
},
{
  question: "Innovatsiya tushunchasi shakllangan asmi toping",
  options: [
    "18 asr",
    "17 asr",
    "16 asr",
    "19 asr"
  ],
  correctAnswer: "19 asr"
},
{
  question: "Amerika Qo'shma Shtatlarida innovatsion pedagogik termin qachon paydo bo'lgan",
  options: [
    "20-asr 60-yillarida",
    "19 asr 70-yillarida",
    "18 asr 40-yillarida",
    "19 asr 40-yillarida"
  ],
  correctAnswer: "20-asr 60-yillarida"
},
{
  question: "Innovatsiya pedagogik termini qayerda va nechinchi asrda paydo bo'lgan",
  options: [
    "XX asrning 60-yillarida Garbiy Yevropa va AQSh",
    "XX asrning 50-yillarida Yaponiyada",
    "XX asrning 60-yillarida Germaniyada",
    "XX asrning 80-yillarida Germaniyada"
  ],
  correctAnswer: "XX asrning 60-yillarida Garbiy Yevropa va AQSh"
},
{
  question: "Bola tarbiyasida eng muhim omil nima?",
  options: [
    "Oila",
    "Mahalla",
    "Bolalar uyi",
    "Maktab"
  ],
  correctAnswer: "Oila"
},
{
  question: "Pedagogning kommunikativ madaniyati deganda nimani tushunasiz?",
  options: [
    "Pedagogning kishilar bilan qisqa muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi",
    "Pedagogning dunyoga, pedagog voqelikka va pedagogik jarayonga bo'lgan intelektual va hissiy munosabati",
    "O'qituvchining ob'yektivlik mezoni, uning ma'naviy tayyorgarlik darajasi",
    "Pedagogik jarayonning asosiy birligi, o'ziga xos tizimidir"
  ],
  correctAnswer: "Pedagogning kishilar bilan qisqa muddatda muloqot o'rnata olishi, ular bilan muloqot o'rnatishga bo'lgan doimiy intilishi"
},
{
  question: "Axborot texnologiyasi nima?",
  options: [
    "Pedagogik texnologiyaning tarkibiy qismi",
    "Nazorat turlari (joriy, oraliq, yakuniy)",
    "O'zaro ta'sirlar",
    "Pedagogikada monitoring"
  ],
  correctAnswer: "Pedagogik texnologiyaning tarkibiy qismi"
},
{
  question: "Pedagogik texnologiyaning asosiy vazifasi nima?",
  options: [
    "O'quv jarayonini mazmunli amalga oshirish va rivojlantirish",
    "O'quv jarayonini rivojlantirish",
    "O'quv jarayonini vaqt doirasida olib borish",
    "O'quv jarayonini mazmunli amalga oshirish"
  ],
  correctAnswer: "O'quv jarayonini mazmunli amalga oshirish va rivojlantirish"
},
{
  question: "'Innovatsiya' termini 1900 yilda qo'llagan iqtisodchi olimni belgilang",
  options: [
    "Y. Shumpeter",
    "V. Rudnev",
    "S.L. Rubinshteyn",
    "R. Yakobson"
  ],
  correctAnswer: "Y. Shumpeter"
},
{
  question: "Pedagogik texnologiyani bugungi kundagi ahamiyati qanday?",
  options: [
    "Sohadagi nazariy va amaliy izlanishlarni birlashtirish doirasidagi faoliyatni aks ettiradi",
    "Pedagogikada monitoringda",
    "Ta'limning baholash shkalasida",
    "O'quv jarayonini uzluksizligida"
  ],
  correctAnswer: "Sohadagi nazariy va amaliy izlanishlarni birlashtirish doirasidagi faoliyatni aks ettiradi"
},
{
  question: "Pedagogik texnologiyada axborot texnologiyalarini o'rni qanday?",
  options: [
    "Boshqarish imkoniyati tug'iladi va u o'qituvchining yaqin ko'makdoshiga aylandi hamda uning funktsiyalarini qisman o'z zimmasiga oladi",
    "Ijodiy yondashuvda",
    "O'zaro ta'sirlarda",
    "Pedagogikada monitoringda"
  ],
  correctAnswer: "Boshqarish imkoniyati tug'iladi va u o'qituvchining yaqin ko'makdoshiga aylandi hamda uning funktsiyalarini qisman o'z zimmasiga oladi"
},
{
  question: "'Texnologiya' so'zi haqida tushuncha",
  options: [
    "'Texne' mahorat, san'at, 'logos' tushuncha, ta'limot",
    "'Texne' mehnat, san'at, 'logos' tushuncha, bilim",
    "'Texne' qobiliyat, san'at, 'logos' tushuncha, ta'lim",
    "'Texne' maqsad, 'logos' – tushuncha, o'qitish"
  ],
  correctAnswer: "'Texne' mahorat, san'at, 'logos' tushuncha, ta'limot"
},
{
  question: "Shaxs shakllanishining asosini nimalar tashkil etadi?",
  options: [
    "Bilim, ko'nikma, malaka",
    "Ko'nikma, maqsad",
    "Malaka, tarbiya",
    "Malaka, ko'nikma, tamoyil"
  ],
  correctAnswer: "Bilim, ko'nikma, malaka"
},
{
  question: "Innovatsiya faoliyatidagi 'kreativlik' deganda siz nimani tushunasiz",
  options: [
    "Individning yangi tushuncha yaratish va yangi ko'nikmalar hasil qilish qobiliyatini bildiradi",
    "O'qituvchining kasbiy mahorat cho'qqilariga erishuvi",
    "Ijtimoiy vaziyatlarda o'zining o'rnini anglab olish",
    "Shaxs o'zini namoyon qila olish va o'zining muayyan ishlarini amalga oshirish"
  ],
  correctAnswer: "Individning yangi tushuncha yaratish va yangi ko'nikmalar hasil qilish qobiliyatini bildiradi"
},
{
  question: "Innovatsion faoliyatining samaradorligi nima bilan belgilanadi?",
  options: [
    "Pedagog shaxsiyati",
    "Pedagog faoliyati",
    "Pedagogning ish jarayoni",
    "Pedagogning muomalasi bilan"
  ],
  correctAnswer: "Pedagog shaxsiyati"
},
{
  question: "Texnologiyalashtirish nima?",
  options: [
    "Ob'ektiv jarayon bo'lib, ta'lim evolyutsiyasining yangi vazifalarini sifatli hal qilish uchun tayyorgarlik davri",
    "Ta'lim evolyutsiyasini amalga oshirish",
    "Ta'lim evolyutsiyasining vazifalar davri",
    "Ob'ektiv jarayonida"
  ],
  correctAnswer: "Ob'ektiv jarayon bo'lib, ta'lim evolyutsiyasining yangi vazifalarini sifatli hal qilish uchun tayyorgarlik davri"
},
{
  question: "Texnologiya tushunchasi nechanchi yillarda kirib kelgan?",
  options: [
    "60-yillarda",
    "30-yillarda",
    "40-yillarda",
    "70-yillarda"
  ],
  correctAnswer: "60-yillarda"
},
{
  question: "O'qituvchining innovatsion faoliyati qaysi masalaharni yechishga qaratilgan?",
  options: [
    "Voqelikni o'zgartirishga, uning muammolari va usullarini yechishni aniqlashga qaratilgan",
    "Shaxsiy ijodiy-motivatsion yo'nalganligini aniqlashga qaratilgan",
    "Kasbiy faoliyatni baholashga qaratilgan",
    "Innovatsion faoliyatga bo'lgan zaruriyatni anglashga qaratilgan"
  ],
  correctAnswer: "Voqelikni o'zgartirishga, uning muammolari va usullarini yechishni aniqlashga qaratilgan"
},
{
  question: "Pedagogik mahorat – bu:",
  options: [
    "Ta'lim va tarbiyaviy faoliyatda yuqori darajaga erishishni va uni doimiy takomillashtirib borish imkoniyatini ta'minlovchi faoliyat bo'lib, har bir o'qituvchi fazilatida namoyon bo'ladi",
    "Muayyan loyiha asosida tashkil etiladigan, aniq maqsadga yo'naltirilgan hamda ushbu maqsadning natijalanishini kafolatlovchi pedagogik faoliyat jarayonining mazmunidir",
    "O'qituvchi tomonidan pedagogik jarayonni takomillashtirish, optimallashtirishga bo'lgan ijtimoiy ehtiyojni qondirish omilidir",
    "Didaktik hamda tarbiyaviy jarayonning o'qituvchi tomonidan samarali, mahoratli tarzda tashkil etishdir"
  ],
  correctAnswer: "Ta'lim va tarbiyaviy faoliyatda yuqori darajaga erishishni va uni doimiy takomillashtirib borish imkoniyatini ta'minlovchi faoliyat bo'lib, har bir o'qituvchi fazilatida namoyon bo'ladi"
},
{
  question: "Xususiy didaktika nimani o'rganadi?",
  options: [
    "Har bir fan o'qitilishining o'ziga xos jihatlarini tahlil qiladi",
    "Didaktikaning asosiy yo'nalishlaridan biridir",
    "Ta'lim jarayonining umumiy qonuniyatlarini o'rganadi",
    "O'qitish jarayonining umumiy asoslarini belgilaydi"
  ],
  correctAnswer: "Har bir fan o'qitilishining o'ziga xos jihatlarini tahlil qiladi"
},
{
  question: "'Didaktika' atamasi dastlab qayerda va qachon paydo bo'lgan?",
  options: [
    "Sharqdagi Bag'dod va Basra shaharlarida miloddan avvalgi IV–V asrlarda",
    "Qadimgi Yunonistonning Afina va Sparta shaharlarida miloddan avvalgi IV–V asrlarda",
    "Eron va Hindistonda miloddan avvalgi IV–V asrlarda",
    "Rim shahrida milodiy VI–VII asrlarda"
  ],
  correctAnswer: "Qadimgi Yunonistonning Afina va Sparta shaharlarida miloddan avvalgi IV–V asrlarda"
},
{
  question: "'Dunyoda ilmdan boshqa najot yo'q' degan so'z muallifi kim?",
  options: [
    "Imom al-Buxoriy",
    "Imom Moturidiy",
    "Abdulla Avloniy",
    "Yusuf Xos Xojib"
  ],
  correctAnswer: "Imom al-Buxoriy"
},
{
  question: "O'qituvchi rahbarligida guruh bilan olib boriladigan ta'lim shakli bu...",
  options: [
    "Dars jarayoni",
    "O'qish faoliyati",
    "Bilim olish bosqichi",
    "Ta'limni boshqarish jarayoni"
  ],
  correctAnswer: "Dars jarayoni"
},
{
  question: "Psixologiya fani nimadan bahs etadi?",
  options: [
    "Psixik hodisalar, ularning qonuniyatlari va mexanizmlarini",
    "Ongni o'rganadigan fan",
    "Jon haqida ta'lim beruvchi fan",
    "Inson xulq-atvori haqidagi fan"
  ],
  correctAnswer: "Psixik hodisalar, ularning qonuniyatlari va mexanizmlarini"
},
{
  question: "Miya faoliyatining natijasi bo'lib, voqelikni sub'yektiv aks ettiruvchi xossa bu...",
  options: [
    "Faoliyat",
    "Ong",
    "Psixika",
    "Xulq-atvor"
  ],
  correctAnswer: "Psixika"
},
{
  question: "Psixologiyada dualizm yo'nalishining asoschisi kim?",
  options: [
    "Arastu",
    "Gippokrat",
    "Aflotun",
    "Suqrot"
  ],
  correctAnswer: "Aflotun"
},
{
  question: "Psixik hodisalarni ilmiy asosda tushuntiruvchi yo'nalish bu...",
  options: [
    "Ilmiy psixologiya",
    "Ommaviy psixologiya",
    "Mahalliy psixologiya",
    "Amaliy psixologiya"
  ],
  correctAnswer: "Ilmiy psixologiya"
},
{
  question: "Insonning individual psixologik xususiyatlarini aniqlash va tashxis qo'yish bilan shug'ullanuvchi yo'nalish bu...",
  options: [
    "Psixodiagnostika",
    "Psixologik maslahat",
    "Psixoprofilaktika",
    "Psixokorreksiya"
  ],
  correctAnswer: "Psixodiagnostika"
},
{
  question: "Mashq natijasida sezuvchanlikning oshishi qanday hodisa deyiladi?",
  options: [
    "Sensibilizatsiya",
    "Sinesteziya",
    "Retseptorlar",
    "Reflektor yoyi"
  ],
  correctAnswer: "Sensibilizatsiya"
},
{
  question: "Narsani tahlil qilib olingan qismlarni bir butun shakliga keltirish bu...",
  options: [
    "Sintez",
    "Umumlashtirish",
    "Ong",
    "Taqqoslash"
  ],
  correctAnswer: "Sintez"
},
{
  question: "Shirin orzular, bexosdan tasavvur qilish xayolning qaysi turiga kiradi?",
  options: [
    "Ixtiyorsiz xayol",
    "Maqsadli xayol",
    "Ixtiyoriy xayol",
    "Ixtiyoriydan keyingi xayol"
  ],
  correctAnswer: "Ixtiyorsiz xayol"
},
{
  question: "Inson ongi bilan hayvon psixikasi orasidagi asosiy farq nimada?",
  options: [
    "Faollikda",
    "Ong va nutq mavjudligida",
    "Yashash usulida",
    "Ehtiyojni qondirishda"
  ],
  correctAnswer: "Ong va nutq mavjudligida"
},
{
  question: "Taqqoslash qaysi psixik jarayonga tegishli?",
  options: [
    "Tafakkur jarayoni",
    "Xayol jarayoni",
    "Iroda jarayoni",
    "Sezgi jarayoni"
  ],
  correctAnswer: "Tafakkur jarayoni"
},
{
  question: "Qaysi fikr psixikani idealistik tarzda izohlaydi?",
  options: [
    "Psixika miyaning mahsulidir",
    "Psixika voqelikning aksidir",
    "Psixika tashqi muhtidan mustaqildir",
    "Psixika muhit bilan birga o'zgaradi"
  ],
  correctAnswer: "Psixika tashqi muhtidan mustaqildir"
},
{
  question: "Kuzatish, eksperiment, test, anketa kabi metodlar qaysi turga kiradi?",
  options: [
    "Asosiy metodlar",
    "Yordamchi metodlar",
    "Suhbat",
    "So'rovnoma"
  ],
  correctAnswer: "Asosiy metodlar"
},
{
  question: "Hozirgi zamonaviy psixologiya tamoyillari qaysi yillarda shakllangan?",
  options: [
    "XX asrning 40–50-yillari",
    "XX asrning 30–40-yillari",
    "XX asrning 50–60-yillari",
    "XX asrning 20–30-yillari"
  ],
  correctAnswer: "XX asrning 50–60-yillari"
},
{
  question: "Psixologiya fanining predmeti nimalardan iborat?",
  options: [
    "Psixik hodisalar, ularning qonuniyatlari va mexanizmlari haqidagi fan",
    "Jon haqidagi ta'limot",
    "Inson xulqi haqida fan",
    "Ong haqida ta'lim beruvchi fan"
  ],
  correctAnswer: "Psixik hodisalar, ularning qonuniyatlari va mexanizmlari haqidagi fan"
},
{
  question: "'Psixika faqat faoliyat natijasida rivojlanadi' degan g'oya qaysi tamoyilga tegishli?",
  options: [
    "Psixika va ongning faoliyatda rivojlanish tamoyili",
    "Determinizm tamoyili",
    "Ong va faoliyat birligi",
    "Reallik tamoyili"
  ],
  correctAnswer: "Psixika va ongning faoliyatda rivojlanish tamoyili"
},
{
  question: "Psixologiyada dualizm oqimining asoschisi kim?",
  options: [
    "Aristotel",
    "Platon",
    "Fales",
    "Gippokrat"
  ],
  correctAnswer: "Platon"
},
{
  question: "'Ongsizlik' tushunchasini psixologiyaga kim kiritgan?",
  options: [
    "Z. Freyd",
    "V. Vundt",
    "G. Ebbingauz",
    "I. Kant"
  ],
  correctAnswer: "Z. Freyd"
},
{
  question: "Qaysi soha bolalarning psixik rivojlanish qonuniyatlarini o'rganadi?",
  options: [
    "Mehnat psixologiyasi",
    "Yosh psixologiyasi",
    "Pedagogik psixologiya",
    "Ijtimoiy psixologiya"
  ],
  correctAnswer: "Yosh psixologiyasi"
},
{
  question: "'Jon va tana ajralmasdir' degan g'oyani birinchi bo'lib kim ilgari surgan?",
  options: [
    "Geraklit",
    "Demokrit",
    "Aristotel",
    "Platon"
  ],
  correctAnswer: "Demokrit"
},
{
  question: "'Aql, jasorat va istak inson tanasining turli qismlarida joylashgan' degan fikr kimga tegishli?",
  options: [
    "Aflotun",
    "Demokrit",
    "Geraklit",
    "Arastu"
  ],
  correctAnswer: "Aflotun"
},
{
  question: "Qaysi metod tadqiqot jarayonini boshqarish va o'zgartirish orqali natijalar olish imkonini beradi?",
  options: [
    "Eksperiment metodi",
    "Kuzatish",
    "Anketa",
    "Test"
  ],
  correctAnswer: "Eksperiment metodi"
},
{
  question: "Shaxsning ruhiy xususiyatlarini maxsus tuzilgan savollar majmuasi orqali o'rganish qanday usul bilan amalga oshiriladi?",
  options: [
    "Eksperiment",
    "Anketa",
    "Test",
    "Kuzatish"
  ],
  correctAnswer: "Test"
},
{
  question: "Insonning intellektual (aqliy) rivojlanish darajasini aniqlash uchun mo'ljallangan testlar qanday ataladi?",
  options: [
    "Intellekt testlari",
    "Shaxs kuzatuv testlari",
    "Rasmli testlar",
    "Proyektiv testlar"
  ],
  correctAnswer: "Intellekt testlari"
},
{
  question: "Psixologiyada test metodini kimlar asoslagan?",
  options: [
    "V. Shtem",
    "A. Bine, A. Simon",
    "A.N. Gvozdev, V. Shtem",
    "I.A. Menchinskaya"
  ],
  correctAnswer: "A. Bine, A. Simon"
},
{
  question: "Inson psixikasini keng ko'lamli so'rov asosida o'rganish qaysi metod orqali olib boriladi?",
  options: [
    "Eksperiment",
    "Kompleks",
    "Test",
    "Anketa"
  ],
  correctAnswer: "Anketa"
},
{
  question: "Pedagogik psixologiyada qo'llaniladigan metodlarni tashkiliy, tajriba, talqin va natijalarni qayta ishlash turlariga ajratib o'rgangan olim kim?",
  options: [
    "Ananyev B.",
    "Toshimov R.",
    "G'oziyev E.",
    "Freyd Z."
  ],
  correctAnswer: "Ananyev B."
},
{
  question: "Determinizm tamoyilining asosiy mohiyati nimani ifodalaydi?",
  options: [
    "Sababli bog'lilik",
    "Psixika yashash sharotiga bog'liq bo'lib, muhit o'zgarsa, u ham o'zgaradi",
    "Psixika ichki omillar ta'sirida shakllanadi",
    "Psixika mexanik tarzda namoyon bo'ladi"
  ],
  correctAnswer: "Sababli bog'lilik"
},
{
  question: "Sotsiometriya metodini kim ishlab chiqgan?",
  options: [
    "Z. Freyd",
    "I. Pavlov",
    "J. Moreno",
    "A. Peron"
  ],
  correctAnswer: "J. Moreno"
},
{
  question: "Psixologiyada ishlatiladigan metodlarga nimalar kiradi?",
  options: [
    "Kuzatish, eksperiment, sotsiometriya, test, anketa, suhbat, faoliyat mahsullarini o'rganish",
    "Kuzatish, ma'lumotlarni statistik tahlil qilish, taxmin va izoh berish",
    "Odam psixikasi haqida ma'lumot yig'ish",
    "Inson va hayvon psixikasini tadqiq etish usullari"
  ],
  correctAnswer: "Kuzatish, eksperiment, sotsiometriya, test, anketa, suhbat, faoliyat mahsullarini o'rganish"
},
{
  question: "Psixologik testlar nima?",
  options: [
    "Shaxsning ruhiy sifatlari, qobiliyati va rivojlanish darajasini aniqlovchi standart topshiriqlar majmuasi",
    "Ishtirokchilarning vazifa bajarish jarayonini kuzatish",
    "Psixik hodisalarni tahlil etuvchi usullar to'plami",
    "Psixik faoliyatni o'rganishga mo'ljallangan topshiriqlar majmuasi"
  ],
  correctAnswer: "Shaxsning ruhiy sifatlari, qobiliyati va rivojlanish darajasini aniqlovchi standart topshiriqlar majmuasi"
},
{
  question: "Qaysi metod yordamida sun'iy tushunchalar, nutq o'sishi, muammoli vaziyatni hal etish va shaxs hissiyotlari o'rganiladi?",
  options: [
    "Tajriba metodi",
    "Suhbat metodi",
    "Test metodi",
    "Sotsiometriya metodi"
  ],
  correctAnswer: "Tajriba metodi"
},
{
  question: "Psixik jarayonlarni tabiiy yoki sun'iy yaratilgan sharotida o'rganish qaysi metod orqali amalga oshiriladi?",
  options: [
    "Eksperiment",
    "Test",
    "Longityud",
    "Anketa"
  ],
  correctAnswer: "Eksperiment"
},
{
  question: "Refleks deganda nima tushuniladi?",
  options: [
    "Organizmning tashqi yoki ichki ta'sirga asab tizimi orqali javob reaksiyasi",
    "Organizmning har qanday javob reaksiyasi",
    "Insonga xos aks ettirish shakli",
    "Oddiy aks ettirish"
  ],
  correctAnswer: "Organizmning tashqi yoki ichki ta'sirga asab tizimi orqali javob reaksiyasi"
},
{
  question: "'Jon olovsimon atomlardan tarkib topgan' degan g'oya kimga tegishli?",
  options: [
    "Epikur",
    "Demokrit",
    "Galen",
    "Geraklit"
  ],
  correctAnswer: "Demokrit"
},
{
  question: "'Psixologiyaning predmeti xulq-atvor bo'lishi kerak' degan g'oya qaysi oqimga xos?",
  options: [
    "Bixeviorizm",
    "Geshtalt psixologiya",
    "Freydizm",
    "Assotsiativ psixologiya"
  ],
  correctAnswer: "Bixeviorizm"
},
{
  question: "O'quvchi shaxsini xatlar, kundaliklar, sinf jurnallari va tavsifnomalar asosida o'rganish qaysi metodga kiradi?",
  options: [
    "Suhbat",
    "Kuzatish",
    "Tajriba",
    "Blografik metod"
  ],
  correctAnswer: "Blografik metod"
},
{
  question: "Hayvonlarda hissiyotning qaysi shakli mavjud?",
  options: [
    "Emosiya",
    "Stress",
    "Kayfiyat",
    "Affekt"
  ],
  correctAnswer: "Emosiya"
},
{
  question: "Didaktika, xususiy metodika, dasturlashtirilgan o'qitish va aqliy faoliyatning psixologik asoslarini psixologiyaning qaysi sohasi o'rganadi?",
  options: [
    "Tarbiya psixologiyasi",
    "Ta'lim psixologiyasi",
    "Yosh psixologiyasi",
    "Mehnat psixologiyasi"
  ],
  correctAnswer: "Ta'lim psixologiyasi"
},
{
  question: "Quyidagi holatlardan qaysi biri tabiiy eksperiment metodiga xos?",
  options: [
    "Zarur sharoit maxsus ravishda yaratiladi",
    "O'rganilayotgan holat tabiiy ravishda sodir bo'lishi kutib turiladi",
    "Tekshiruv laboratoriyada olib boriladi",
    "Tarixiy manbalarga tayangan holda tahlil qilinadi"
  ],
  correctAnswer: "O'rganilayotgan holat tabiiy ravishda sodir bo'lishi kutib turiladi"
},
{
  question: "Asaları va chumollilarning murakkab harakatlarini qanday atash mumkin?",
  options: [
    "O'nikmalar",
    "Intellektual faoliyat",
    "Instinktlar",
    "Mehnat"
  ],
  correctAnswer: "Instinktlar"
},
{
  question: "O'rgimchakning pashshani faqat to'rga ilingandan keyin tutib yeyishi psixika rivojlanishing qaysi bosqichiga mos keladi?",
  options: [
    "Sezgi (sensor) bosqichi",
    "Aql (intellekt) bosqichi",
    "Idrok (perseptiv) bosqichi",
    "Ong bosqichi"
  ],
  correctAnswer: "Sezgi (sensor) bosqichi"
},
{
  question: "Inson bosh miyasining og'irligi necha gramm?",
  options: [
    "1400 gr",
    "1000 gr",
    "1200 gr",
    "1100 gr"
  ],
  correctAnswer: "1400 gr"
},
{
  question: "Bolalarning ruhiy rivojlanish qonuniyatlarini psixologiyaning qaysi tarmog'i o'rganadi?",
  options: [
    "Mehnat psixologiyasi",
    "Yosh psixologiyasi",
    "Ijtimoiy psixologiya",
    "Pedagogik psixologiya"
  ],
  correctAnswer: "Yosh psixologiyasi"
},
{
  question: "Shaxsning fanlar bo'yicha umumiy bilim darajasini aniqlovchi metod qaysi?",
  options: [
    "So'rovnoma",
    "Test metodi",
    "Kuzatish",
    "Intervyu"
  ],
  correctAnswer: "Test metodi"
},
{
  question: "Sinaps nerv hujayrasining qaysi qismini bildiradi?",
  options: [
    "Qo'zg'alishni uzatadigan qism",
    "Qo'zg'alish o'tishi zarur bo'lgan to'suvchi joy",
    "Nerv hujayrasining tuzilma elementi",
    "Nerv hujayrasining o'sintasi"
  ],
  correctAnswer: "Qo'zg'alish o'tishi zarur bo'lgan to'suvchi joy"
},
{
  question: "Insonda qaysi turdagi ehtiyoj uzoq vaqt qondirilmasa, u hayotdan to'xtashi yoki naslini davom ettirish imkonini yo'qotadi?",
  options: [
    "Tabiiy ehtiyoj",
    "Ma'naviy ehtiyoj",
    "Moddiy ehtiyoj",
    "Madaniy ehtiyoj"
  ],
  correctAnswer: "Tabiiy ehtiyoj"
},
{
  question: "Quyidagi javoblardan qaysi birida deterministik tamoyilning mazmuni ifodalangan?",
  options: [
    "Psixika yashash muhiti bilan belgilanadi, muhit o'zgarsa, u ham o'zgaradi",
    "Sababiy bog'lanish",
    "Psixika ichki omillarga asoslanadi",
    "Psixika mexanik tarzda kechadi"
  ],
  correctAnswer: "Sababiy bog'lanish"
},
{
  question: "Ongli va ongsiz harakatlarning manbai reflekslar ekanini kim ta'kıdlagan?",
  options: [
    "A. Luriya",
    "I. Sechenov",
    "N. Bernshteyn",
    "I. Pavlov"
  ],
  correctAnswer: "I. Sechenov"
},
{
  question: "Qaysi turdagi diqqat o'quv jarayonida materialni o'zlashtirishga ijobiy ta'sir ko'rsatadi?",
  options: [
    "Ixtiyoriydan keyingi diqqat",
    "Ixtiyoriy diqqat",
    "Ixtiyorsiz diqqat",
    "Ichki diqqat"
  ],
  correctAnswer: "Ixtiyoriy diqqat"
},
{
  question: "Ongsizlik bu?",
  options: [
    "Hayvonlarga xos aks ettirish shakli",
    "Inson ruhiy faoliyatining yig'indisi",
    "O'z xatti-harakatlarini anglay olmaslik holati",
    "Psixikaning quyi bosqichi"
  ],
  correctAnswer: "Inson ruhiy faoliyatining yig'indisi"
},
{
  question: "Maqsad nima?",
  options: [
    "Faoliyatning kutilayotgan natijasining miyadagi aksidir",
    "Ehtiyojlarning qondirilishi",
    "Ehtiyojlarning ro'yobga chiqishi",
    "Faoliyat tarkibidagi bo'lak"
  ],
  correctAnswer: "Faoliyatning kutilayotgan natijasining miyadagi aksidir"
},
  {
    question: "Faoliyat nazariyasining asoschisi kim hisoblanadi?",
    options: [
      "L.S. Vigotskiy",
      "A.N. Leontev",
      "D.B. Elkonin",
      "L.F. Obuxova"
    ],
    correctAnswer: "A.N. Leontev"
  },
  {
    question: "Faoliyat nazariyasi qaysi prinsipga tayanadi?",
    options: [
      "Ong va faoliyat birligi prinsipi",
      "Deterministik prinsip",
      "Tarixiylik prinsipi",
      "Bag'rikenglik prinsipi"
    ],
    correctAnswer: "Ong va faoliyat birligi prinsipi"
  },
  {
    question: "Faoliyat — bu...",
    options: [
      "Ongli, maqsadga yo'naltirilgan faol jarayon",
      "Tarixiy jarayon",
      "Maqsadni amalga oshirish kuchi",
      "Fiziologik hodisa"
    ],
    correctAnswer: "Ongli, maqsadga yo'naltirilgan faol jarayon"
  },
  {
    question: "Ehtiyoj deganda nimani tushunamiz?",
    options: [
      "Shaxsning hayoti va rivojlanishi uchun zarur narsalarga ehtiyoj sezish holati",
      "Fiziologik jarayon",
      "Insondan tashqaridagi hodisa",
      "Psixologik holat"
    ],
    correctAnswer: "Shaxsning hayoti va rivojlanishi uchun zarur narsalarga ehtiyoj sezish holati"
  },
  {
    question: "Motiv nima?",
    options: [
      "Insonni faoliyatga undovchi ichki sabab",
      "Psixologik holat",
      "Sub'yektning tashqi olam bilan o'zaro ta'siri",
      "Insondan tashqaridagi hodisa"
    ],
    correctAnswer: "Insonni faoliyatga undovchi ichki sabab"
  },
  {
    question: "Yetakchi faoliyat deganda nima tushuniladi?",
    options: [
      "Bolada asosiy psixologik o'zgarishlarni yuzaga keltiruvchi faoliyat",
      "Bolaga xos faoliyat",
      "Taraqqiyotning ma'lum bosqichida ustun bo'ladigan faoliyat turi",
      "Psixologik hodisa"
    ],
    correctAnswer: "Taraqqiyotning ma'lum bosqichida ustun bo'ladigan faoliyat turi"
  },
  {
    question: "Idrokning qaysi jihati uning tartibli tuzilishini bildiradi?",
    options: [
      "Yaxlitligi",
      "Konstantligi",
      "Anglanganligi",
      "Predmetilligi"
    ],
    correctAnswer: "Yaxlitligi"
  },
  {
    question: "Sotsiometriya metodini kim ilgari surgan?",
    options: [
      "A. Petrovskiy",
      "D. Moreno",
      "I. Sechenov",
      "G. Ayzenk"
    ],
    correctAnswer: "D. Moreno"
  },
  {
    question: "Ikki xil signal sistemasi haqidagi ta'limotni kim yaratgan?",
    options: [
      "P.K. Anoxin",
      "I.M. Sechenov",
      "I.P. Pavlov",
      "A. Rorshax"
    ],
    correctAnswer: "I.P. Pavlov"
  },
  {
    question: "'Jon olovli atomlardan tashkil topgan' degan qarash kimga tegishli?",
    options: [
      "Arastu",
      "Geraklit",
      "Dekart",
      "Demokrit"
    ],
    correctAnswer: "Demokrit"
  },
  {
    question: "'Animizm' so'zining ma'nosi nima?",
    options: [
      "Anima – olov",
      "Anima – taqdir",
      "Anima – jon, ruh",
      "Anima – fikr"
    ],
    correctAnswer: "Anima – jon, ruh"
  },
  {
    question: "Psixologiya fani taxminan nechta sohani o'z ichiga oladi?",
    options: [
      "250",
      "360",
      "160",
      "300 dan ortıq"
    ],
    correctAnswer: "300 dan ortıq"
  },
  {
    question: "Psixologiya fanining vujudga kelganiga taxminan qancha vaqt bo'lgan?",
    options: [
      "2500 yıl atrofida",
      "3500 yıl",
      "1000 yıl",
      "1500 yıl"
    ],
    correctAnswer: "2500 yıl atrofida"
  },
  {
    question: "Psixologiyada mukammal darsliklar yozila boshlanganiga qancha vaqt o'tgan?",
    options: [
      "160 yıldan oshgan",
      "120 yılcha",
      "100 yıl",
      "50 yıldan ortıq"
    ],
    correctAnswer: "160 yıldan oshgan"
  },
  {
    question: "Psixologiya fanining asoschisi kim sanaladi?",
    options: [
      "Platon",
      "Arastu",
      "Gerodot",
      "Geraklit"
    ],
    correctAnswer: "Arastu"
  },
  {
    question: "Psixik faktlar tarkibidagi bilish jarayonlari qaysi qatorda berilgan?",
    options: [
      "Sezgi, idrok, xotira, tafakkur va xayol",
      "Hissiyot, iroda",
      "Temperament, xarakter, qobiliyat",
      "Diqqat, nutq, faoliyat"
    ],
    correctAnswer: "Sezgi, idrok, xotira, tafakkur va xayol"
  },
  {
    question: "Inson miyasining o'rtacha og'irligi qaysi jawobda to'g'ri ko'rsatilgan?",
    options: [
      "2110–2000 g",
      "1150–1650 g",
      "1350–1550 g",
      "1350–1400 g"
    ],
    correctAnswer: "1350–1400 g"
  },
  {
    question: "Ikki yoki undan ortiq inson o'rtasida axborot almashish, ta'sir va o'zaro tushunishni ifodalovchi jarayon bu...",
    options: [
      "Afaziya",
      "Muloqot",
      "Refleksiya",
      "Stereotiplashtirish"
    ],
    correctAnswer: "Muloqot"
  },
  {
    question: "Psixik faktlar tarkibidagi bilish jarayonlari to'g'ri ko'rsatilgan qatorni toping",
    options: [
      "Sezgi, idrok, xotira, tafakkur, xayol, diqqat, nutq, faoliyat",
      "Hissiyot, iroda",
      "Temperament, xarakter, qobiliyat",
      "Diqqat, nutq, faoliyat"
    ],
    correctAnswer: "Sezgi, idrok, xotira, tafakkur, xayol, diqqat, nutq, faoliyat"
  },
  {
    question: "Hayvonlarning tug'ma tarzda ehtiyojlarini qondirish uchun bajaradigan murakkab harakatlari nima deb ataladi?",
    options: [
      "Seskanuvchanlik",
      "Perseptiv harakat",
      "Tropizm",
      "Instinkt"
    ],
    correctAnswer: "Instinkt"
  },
  {
    question: "Psixologiya fani nimanı o'rganadi?",
    options: [
      "Idrok shakilarini o'rganadi",
      "Jon va ruh haqidagi ta'limot",
      "Ruhiy jarayonlar, bilish faoliyati hamda individual psixologik belgilarni",
      "Psixik hodisalar, ularning mexanizmlari va qonuniyatlarini o'rganuvchi fan"
    ],
    correctAnswer: "Psixik hodisalar, ularning mexanizmlari va qonuniyatlarini o'rganuvchi fan"
  },
  {
    question: "Psixologiya fanining fanlar tizimidagi o'rni qayerda ko'rsatilgan?",
    options: [
      "Tabiiy fanlar guruhida",
      "Gumanitar fanlar tarkibida",
      "Falsafiy fanlar tarkibida",
      "Aniq fanlar qatorida"
    ],
    correctAnswer: "Tabiiy fanlar guruhida"
  },
  {
    question: "Qaysi qatorda 'faoliyat' tushunchasiga to'liq ta'rif berilgan?",
    options: [
      "Bajarilishi odatga aylangan harakat yoki xulq-atvorning bir qismi",
      "Mashq qilish orqali malaka hasil qilish jarayoni",
      "Har qanday tirik mavjudotning o'z ehtiyojini qondirishga yo'naltirilgan faolligi",
      "Shaxsning ehtiyojlarini bajarish uchun amalga oshiradigan jismoniy va ruhiy faolligi"
    ],
    correctAnswer: "Shaxsning ehtiyojlarini bajarish uchun amalga oshiradigan jismoniy va ruhiy faolligi"
  },
  {
    question: "Kishini faoliyatga undaydigan va unga ma'no beradigan ichki kuch bu — ………..",
    options: [
      "Odat",
      "Motiv",
      "Ish-harakat",
      "Maqsad"
    ],
    correctAnswer: "Motiv"
  },
  {
    question: "……… deb oldindan belgilangan maqsad asosida diqqatni muayyan narsa yoki hodisaga ongli ravishda qaratish jarayoniga aytiladi",
    options: [
      "Ixtiyoriy diqqat",
      "Ixtiyorsiz diqqat",
      "Ixtiyoriydan keyingi diqqat",
      "Bo'linuvchan diqqat"
    ],
    correctAnswer: "Ixtiyoriy diqqat"
  },
  {
    question: "……… bajarilishi ehtiyojga aylangan, avtomatik tarzda kechuvchi xatti-harakat",
    options: [
      "Odat",
      "Motiv",
      "Ish-harakat",
      "Maqsad"
    ],
    correctAnswer: "Odat"
  },
  {
    question: "Psixik faktlar tarkibidagi shaxsning hissiy va irodaviy sohasi qaysi qatorda berilgan?",
    options: [
      "Sezgi, idrok, xotira, tafakkur va xayol, diqqat, nutq, faoliyat",
      "Hissiyot, iroda",
      "Temperament, xarakter, qobiliyat",
      "Diqqat, nutq, faoliyat"
    ],
    correctAnswer: "Hissiyot, iroda"
  },
  {
    question: "……… deb insonning diqqatini biror narsa yoki hodisaga uzoq vaqt davomida barqaror saqlay olishiga aytiladi",
    options: [
      "Diqqat hajmi",
      "Diqqatning bo'linuvchanligi",
      "Diqqatning kontsentratsiyasi",
      "Diqqatning kuchi va barqarorligi"
    ],
    correctAnswer: "Diqqatning kuchi va barqarorligi"
  },
  {
    question: "Qaysi qatorda shaxsning o'ziga bo'lgan munosabatini aks ettiruvchi sifatlar berilgan?",
    options: [
      "Yaxshilik, mehribonlik, talabchanlik, takabburlik",
      "Mehnatsevarlik, yalqovlik, vijdonlilik, mas'uliyatlilik yoki mas'uliyatsizlik",
      "Ozodalik yoki ifloslik, narsalarga e'tiborli yoki beparvo bo'lish",
      "Izzat-nafs, shuhratparastlik, mag'rurlik, kamtarlik"
    ],
    correctAnswer: "Izzat-nafs, shuhratparastlik, mag'rurlik, kamtarlik"
  },
  {
    question: "Psixik faktlar tarkibidagi shaxsning individual ruhiy xususiyatlari qaysi qatorda berilgan?",
    options: [
      "Sezgi, idrok, xotira, tafakkur, xayol, diqqat, nutq, faoliyat",
      "Hissiyot, iroda",
      "Temperament, xarakter, qobiliyat",
      "Diqqat, nutq, faoliyat"
    ],
    correctAnswer: "Temperament, xarakter, qobiliyat"
  },
  {
    question: "Kim birinchi bo'lib 'jon va tana ajralmasdir' degan fikrni bildirgan?",
    options: [
      "Geraklit",
      "Demokrit",
      "Aristotel",
      "Platon"
    ],
    correctAnswer: "Demokrit"
  },
  {
    question: "'Aql-idrok, jasorat va orzu-istak qismlaridan iborat bo'lib, ular bosh, ko'krak va qorin sohalariga joylashgan' degan fikr muallifi kim?",
    options: [
      "Aflotun",
      "Demokrit",
      "Geraklit",
      "Arastu"
    ],
    correctAnswer: "Aflotun"
  },
  {
    question: "Psixologiya fanining qaysi metodida tadqiqotchi jarayonni boshqarib, o'zgarishlar kiritish orqali natijalarni standart shaklda oladi?",
    options: [
      "Eksperiment",
      "Kuzatish",
      "Anketa",
      "Test"
    ],
    correctAnswer: "Eksperiment"
  },
  {
    question: "Shaxsning psixologik xususiyatlarini oldindan uzulgan savollar orqali o'rganish qanday metod bilan amalga oshiriladi?",
    options: [
      "Eksperiment",
      "Anketa",
      "Test",
      "Kuzatish"
    ],
    correctAnswer: "Anketa"
  },
  {
    question: "Insonning aqliy rivojlanish darajasini aniqlash uchun qo'llaniladigan testlar qanday ataladi?",
    options: [
      "Intellekt testlari",
      "Shaxs kuzatuv testlari",
      "Rasmli testlar",
      "Provektiv testlar"
    ],
    correctAnswer: "Intellekt testlari"
  },
  {
    question: "Psixologiyada test metodini kimlar ishlab chiqqan?",
    options: [
      "V. Shtern",
      "A. Bine va A. Simon",
      "A.N. Gvozdev, V. Shtern",
      "I.A. Menchinskaya"
    ],
    correctAnswer: "A. Bine va A. Simon"
  },
  {
    question: "Inson psixikasini keng ko'lamli so'rov orqali o'rganish qaysi metodga xos?",
    options: [
      "Eksperiment",
      "Kompleks",
      "Test",
      "Anketa"
    ],
    correctAnswer: "Anketa"
  },
  {
    question: "Pedagogik psixologiyada qo'llaniladigan metodlarni tashkiliy, empirik, tahliliy va natijaviy guruhlarga ajratgan olim kim?",
    options: [
      "Ananyev B.",
      "Toshimov R.",
      "G'oziyev E.",
      "Z. Freyd"
    ],
    correctAnswer: "Ananyev B."
  },
  {
    question: "Determinizm prinsipi mazmuni nimadan iborat?",
    options: [
      "Sababiy bog'lanish",
      "Psixika yashash sharotitga bog'liq bo'lib, sharotit o'zgarsa, u ham o'zgaradi",
      "Psixika ichki omillar bilan belgilanadi",
      "Psixika mexanik tarzda sodir bo'ladi"
    ],
    correctAnswer: "Sababiy bog'lanish"
  },
  {
    question: "Sotsiometriya metodini kim yaratgan?",
    options: [
      "Z. Freyd",
      "I. Pavlov",
      "J. Moreno",
      "A. Peron"
    ],
    correctAnswer: "J. Moreno"
  },
  {
    question: "Psixologiyada qo'llaniladigan asosiy metodlar qaysilar?",
    options: [
      "Kuzatish, eksperiment, sotsiometriya, test, anketa, suhbat, faoliyat mahsullarini o'rganish",
      "Kuzatish, matematik tahlil, taxminlar va faktlarni izolhash",
      "Psixika haqidagi ma'lumotlarni yig'ish",
      "Odam va hayvon psixikasini o'rganish usullari"
    ],
    correctAnswer: "Kuzatish, eksperiment, sotsiometriya, test, anketa, suhbat, faoliyat mahsullarini o'rganish"
  },
  {
    question: "Psixologik testlar bu —",
    options: [
      "Inson psixikasining xususiyatlari, qobiliyatlari va rivojlanish darajasini aniqlovchi standart topshiriqlar to'plami",
      "Shaxsning masala yechish jarayonini kuzatish",
      "Psixik hodisalarni tahlil qiluvchi usullar majmuasi",
      "Odam psixikasini o'rganishga old topshiriqlar to'plami"
    ],
    correctAnswer: "Inson psixikasining xususiyatlari, qobiliyatlari va rivojlanish darajasini aniqlovchi standart topshiriqlar to'plami"
  },
  {
    question: "Qaysi metod orqali sun'iy tushuncha shakllanishi, nutq rivoji, hissiyot, xarakter va shaxs tipologik xususiyatlari o'rganiladi?",
    options: [
      "Tajriba (eksperimental) metod",
      "Suhbat metodi",
      "Test metodi",
      "Sotsiometriya metodi"
    ],
    correctAnswer: "Tajriba (eksperimental) metod"
  },
  {
    question: "Psixik jarayonlarni tabiiy yoki maxsus yaratilgan sharotida o'rganishga asoslangan metod qanday nomlanadi?",
    options: [
      "Eksperiment",
      "Test",
      "Longityud",
      "Anketa"
    ],
    correctAnswer: "Eksperiment"
  },
  {
    question: "Refleks nima?",
    options: [
      "Organizmning ichki yoki tashqi ta'sirlarga asab tizimi orqali bergan javob reaksiyasi",
      "Organizmning javob harakati",
      "Inson psixikasiga xos aks ettirish usuli",
      "Aks ettirish"
    ],
    correctAnswer: "Organizmning ichki yoki tashqi ta'sirlarga asab tizimi orqali bergan javob reaksiyasi"
  },
  {
    question: "Jon olovga o'xshash zarrachalardan iborat degan qarash kimga tegishli?",
    options: [
      "Epikur",
      "Demokrit",
      "Galen",
      "Geraklit"
    ],
    correctAnswer: "Demokrit"
  },
  {
    question: "Psixologiyaning tadqiqot sohasi inson xulq-atvori bo'lishi lozim, degan g'oya qaysi yo'nalishga mansub?",
    options: [
      "Bixeviorizm",
      "Geshtalt psixologiya",
      "Freydizm",
      "Assotsiativ psixologiya"
    ],
    correctAnswer: "Bixeviorizm"
  },
  {
    question: "O'quvchini o'rganishda maktub, kundalik, sinf jurnali va tavsifnomalardan foydalanish qaysi metodga kiradi?",
    options: [
      "Suhbat",
      "Kuzatish",
      "Tajriba",
      "Blografiya"
    ],
    correctAnswer: "Blografiya"
  },
  {
    question: "Hayvonlarda hissiyotning qaysi turi mavjud bo'ladi?",
    options: [
      "Emotsiya",
      "Stress",
      "Kayfiyat",
      "Affekt"
    ],
    correctAnswer: "Emotsiya"
  },
  {
    question: "O'qitish, metodika, dasturlashtirilgan ta'lim va aqliy harakatlarni shakllantirishning psixologik poydevorini qaysi tarmoq o'rganadi?",
    options: [
      "Tarbiya psixologiyasi",
      "Ta'lim psixologiyasi",
      "Yosh psixologiyasi",
      "Mehnat psixologiyasi"
    ],
    correctAnswer: "Ta'lim psixologiyasi"
  },
  {
    question: "Quyidagi fikrlardan qaysi biri tabiiy eksperiment usuliga tegishli?",
    options: [
      "Zarur vaziyat maxsus ravishda yaratiladi",
      "O'rganilishi lozim holat tabiiy ravishda sodir bo'lishi kutuladi",
      "Tadqiqot faqat laboratoriyada o'tkaziladi",
      "O'rganish tarixiy manbalarga asoslanadi"
    ],
    correctAnswer: "O'rganilishi lozim holat tabiiy ravishda sodir bo'lishi kutuladi"
  },
  {
    question: "Asalari va chumollilarning murakkab harakatlari qanday nomlanadi?",
    options: [
      "Ko'nikmalar",
      "Intellektual harakatlar",
      "Instinktlar",
      "Mehnat"
    ],
    correctAnswer: "Instinktlar"
  },
  {
    question: "Shisha idishda bo'lgan o'rgimchak och bo'lishiga qaramay, pashshani tutmaydi, baik to'r yasab, unga ilingan pashshani yeydi. Bu holat psixika taraqqiyotining qaysi bosqichiga to'g'ri keladi?",
    options: [
      "Sezgi (sensor)",
      "Aql (intellekt)",
      "Idrok (perseptiv)",
      "Ong"
    ],
    correctAnswer: "Sezgi (sensor)"
  },
  {
    question: "Inson bosh miyasining o'rtacha og'irligi qancha?",
    options: [
      "1400 gr",
      "1000 gr",
      "1200 gr",
      "1100 gr"
    ],
    correctAnswer: "1400 gr"
  },
  {
    question: "Bolalarning ruhiy rivojlanish qonuniyatlarini psixologiyaning qaysi yo'nalishi o'rganadi?",
    options: [
      "Mehnat psixologiyasi",
      "Yosh psixologiyasi",
      "Ijtimoiy psixologiya",
      "Pedagogik psixologiya"
    ],
    correctAnswer: "Yosh psixologiyasi"
  },
  {
    question: "Shaxsning bilim darajasini aniqlashda qaysi metod qo'llaniladi?",
    options: [
      "So'rovnoma",
      "Test metodi",
      "Kuzatish",
      "Intervyu"
    ],
    correctAnswer: "Test metodi"
  },
  {
    question: "Sinaps nerv hujayrasining qanday qismi hisoblanadi?",
    options: [
      "Qo'zg'alishni o'tkazuvchi",
      "Qo'zg'alish o'tishi kerak bo'lgan to'siq",
      "Nerv hujayrasining bir bo'lagi",
      "Nerv tolasi"
    ],
    correctAnswer: "Qo'zg'alish o'tishi kerak bo'lgan to'siq"
  },
  {
    question: "Qaysi ehtiyoj uzoq vaqt qondirilmasa, inson nobud bo'ladi yoki avlod qoldirish imkonidan mahrum bo'ladi?",
    options: [
      "Tabiiy ehtiyoj",
      "Ma'naviy ehtiyoj",
      "Moddiy ehtiyoj",
      "Madaniy ehtiyoj"
    ],
    correctAnswer: "Tabiiy ehtiyoj"
  },
  {
    question: "Quyidagi javoblarning qaysi birida determinizm tamoyilining mazmuni ifodalangan?",
    options: [
      "Psixika yashash muhitiga bog'liq, muhit o'zgarsa, psixika ham o'zgaradi",
      "Sababiy aloqadorlik",
      "Psixika ichki omillarga tayanadi",
      "Psixika mexanik tarzda namoyon bo'ladi"
    ],
    correctAnswer: "Sababiy aloqadorlik"
  },
  {
    question: "Ongli va ongsiz harakatlarning kelib chiqishi reflekslarga tayanadi degan fikr kimga tegishli?",
    options: [
      "A. Luriya",
      "I. Sechenov",
      "N. Bernshteyn",
      "I. Pavlov"
    ],
    correctAnswer: "I. Sechenov"
  },
  {
    question: "Diqqatning qaysi turi o'quv materialini o'zlashtirishda eng foydali hisoblanadi?",
    options: [
      "Ixtiyoriydan keyingi",
      "Ixtiyoriy",
      "Ixtiyorsiz",
      "Ichki"
    ],
    correctAnswer: "Ixtiyoriy"
  },
  {
    question: "Ongsizlik deganda nimani tushuniladi?",
    options: [
      "Hayvonlarga xos aks ettirish shakli",
      "Inson ruhiy jarayonlari majmui",
      "O'z xatti-harakatlarini anglay olmaslik",
      "Psixikaning quyi bosqichi"
    ],
    correctAnswer: "Inson ruhiy jarayonlari majmui"
  },
  {
    question: "Maqsad deganda nimani tushunamiz?",
    options: [
      "Faoliyat yakuniy natijasining miyadagi aksi",
      "Ehtiyojning qondirilishi",
      "Ehtiyojning amalga oshirilishi",
      "Faoliyat tarkibiy bo'lagi"
    ],
    correctAnswer: "Faoliyat yakuniy natijasining miyadagi aksi"
  },
  {
    question: "Faoliyat nazariyasining asoschisi kim?",
    options: [
      "L.S. Vigotskiy",
      "A.N. Leontyev",
      "D.B. Elkonin",
      "L.F. Obuxova"
    ],
    correctAnswer: "A.N. Leontyev"
  },
  {
    question: "Faoliyat nazariyasi qaysi tamoyiliga tayanadi?",
    options: [
      "Ong va faoliyat birligi tamoyili",
      "Determinizm tamoyili",
      "Tarixiylik tamoyili",
      "Bag'rikenglik tamoyili"
    ],
    correctAnswer: "Ong va faoliyat birligi tamoyili"
  },
  {
    question: "Faoliyat bu –",
    options: [
      "Ongli, faol va maqsadga yo'naltirilgan jarayon",
      "Tarixiylik tamoyili",
      "Maqsadga undovchi omil",
      "Fiziologik hodisa"
    ],
    correctAnswer: "Ongli, faol va maqsadga yo'naltirilgan jarayon"
  },
  {
    question: "Ehtiyoj bu –",
    options: [
      "Individning normal hayot kechirish va rivojlanishi uchun zarur narsalarga bo'lgan ichki zarurat hissi",
      "Fiziologik hodisa",
      "Individual tashqaridagi voqea",
      "Psixologik hodisa"
    ],
    correctAnswer: "Individning normal hayot kechirish va rivojlanishi uchun zarur narsalarga bo'lgan ichki zarurat hissi"
  },
  {
    question: "Motiv bu –",
    options: [
      "Insonni faoliyatga undovchi sabab",
      "Psixologik holat",
      "Sub'yektning atrof-muhit bilan o'zaro ta'siri",
      "Tashqi omil"
    ],
    correctAnswer: "Insonni faoliyatga undovchi sabab"
  },
  {
    question: "Yetakchi faoliyat bu –",
    options: [
      "Bola shaxsida muhim psixologik o'zgarishlarga sabab bo'ladigan faoliyat",
      "Bola shaxsining faoliyati",
      "Ma'lum davrda ustun ahamiyatga ega faoliyat",
      "Psixologik hodisa"
    ],
    correctAnswer: "Ma'lum davrda ustun ahamiyatga ega faoliyat"
  },
  {
    question: "Idrokning qaysi xususiyati uning tartibli tashkil topganligiga bog'liq?",
    options: [
      "Yaxlitligi",
      "Konstantligi",
      "Anglanganligi",
      "Predmetilligi"
    ],
    correctAnswer: "Yaxlitligi"
  },
  {
    question: "Sotsiometriya usuli kim tomondan ishlab chiqilgan?",
    options: [
      "A. Petrovskiy",
      "D. Moreno",
      "I. Sechenov",
      "G. Ayzenk"
    ],
    correctAnswer: "D. Moreno"
  },
  {
    question: "Ikki xil signal tizimi haqidagi ta'limotni ilm-fanga kim kiritgan?",
    options: [
      "P.K. Anoxin",
      "I.M. Sechenov",
      "I.P. Pavlov",
      "A. Rorshax"
    ],
    correctAnswer: "I.P. Pavlov"
  },
  {
    question: "Jon olovga o'xshash zarrachalardan tashkil topgan degan g'oya kimga tegishli?",
    options: [
      "Aristotel",
      "Geraklit",
      "Dekart",
      "Demokrit"
    ],
    correctAnswer: "Demokrit"
  },
  {
    question: "'Animizm' atamasi qanday ma'noni anglatadi?",
    options: [
      "anima – olov",
      "anima – taqdir",
      "anima – jon",
      "anima – fikr"
    ],
    correctAnswer: "anima – jon"
  },
  {
    question: "Psixologiya fanining nechadan ortiq yo'nalishlari mavjud?",
    options: [
      "250",
      "360",
      "160",
      "300"
    ],
    correctAnswer: "300"
  },
  {
    question: "Psixologiya fanining paydo bo'lganiga taxminan qancha vaqt o'tgan?",
    options: [
      "2500 yıl",
      "3500 yıl",
      "1000 yıl",
      "1500 yıl"
    ],
    correctAnswer: "2500 yıl"
  },
  {
    question: "Psixologiyada mukammal darsliklar yaratilishiga qancha vaqt bo'tgan?",
    options: [
      "160 yıldan oshiq",
      "120 yıldan",
      "100 yıldan",
      "50 yıldan ortiq"
    ],
    correctAnswer: "160 yıldan oshiq"
  },
  {
    question: "Psixologiya fanining asoschisi kim hisoblanadi?",
    options: [
      "Platon",
      "Aristotel",
      "Gerodot",
      "Geraklit"
    ],
    correctAnswer: "Aristotel"
  },
  {
    question: "Psixik hodisalar tarkibiga kiruvchi bilish faoliyatlari qaysi qatorda berilgan?",
    options: [
      "Sezgi, idrok, xotira, tafakkur va xayol",
      "Hissiyot, iroda",
      "Temperament, xarakter, qobiliyat",
      "Diqqat, nutq, faoliyat"
    ],
    correctAnswer: "Sezgi, idrok, xotira, tafakkur va xayol"
  },
  {
    question: "Inson bosh miyasining og'irligi to'g'ri ko'rsatilgan jawobni toping",
    options: [
      "2100–2000 g",
      "1150–1650 g",
      "1350–1550 g",
      "1350–1400 g"
    ],
    correctAnswer: "1350–1400 g"
  },
  {
    question: "Ikki yoki undan ortiq shaxslar o'rtasida axborot almashish, o'zaro ta'sir va tushunish jarayoni bu ………..",
    options: [
      "Afaziya",
      "Muloqot",
      "Refleksiya",
      "Stereotiplash"
    ],
    correctAnswer: "Muloqot"
  },
  {
    question: "Psixik hodisalar tarkibiga kiruvchi bilish jarayonlari qaysi qatorda ko'rsatilgan?",
    options: [
      "Sezgi, idrok, xotira, tafakkur, xayol, diqqat, nutq, faoliyat",
      "Hissiyot, iroda",
      "Temperament, xarakter, qobiliyat",
      "Diqqat, nutq, faoliyat"
    ],
    correctAnswer: "Sezgi, idrok, xotira, tafakkur, xayol, diqqat, nutq, faoliyat"
  },
  {
    question: "Hayvonlarning tug'ma ravishda ehtiyojlarini qondirish uchun bajaradigan murakkab harakatlari nima deb ataladi?",
    options: [
      "Seskanuvchanlik",
      "Perseptiv",
      "Tropizm",
      "Instinkt"
    ],
    correctAnswer: "Instinkt"
  },
  {
  question: "Psixologiya fani nimadan bahs etadi?",
  options: [
    "Psixik hodisalar, ularning qonuniyatlari va mexanizmlarini",
    "Ongni o'rganadigan fan",
    "Jon haqida ta'lim beruvchi fan",
    "Inson xulq-atvori haqidagi fan"
  ],
  correctAnswer: "Psixik hodisalar, ularning qonuniyatlari va mexanizmlarini"
},
{
  question: "Miya faoliyatining natijasi bo'lib, voqelikni sub'yektiv aks ettiruvchi xossa bu...",
  options: [
    "Faoliyat",
    "Ong",
    "Psixika",
    "Xulq-atvor"
  ],
  correctAnswer: "Psixika"
},
{
  question: "Psixologiyada dualizm yo'nalishining asoschisi kim?",
  options: [
    "Arastu",
    "Gippokrat",
    "Aflotun",
    "Suqrot"
  ],
  correctAnswer: "Aflotun"
}
];

// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

// YANGI: Savollar indeksi ro'yxati
let availableQuestionIndices = []; 
let currentQuestionObject = null;

let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ===== YANGI: SAVOLLAR HAVZASI (POOL) FUNKSIYALARI =====
function initQuestionPool() {
    const savedPool = localStorage.getItem(QUESTION_POOL_KEY);
    
    if (savedPool) {
        availableQuestionIndices = JSON.parse(savedPool);
    }

    // Agar xotira bo'sh bo'lsa yoki savollar tugagan bo'lsa -> Yangidan to'ldiramiz
    if (!availableQuestionIndices || availableQuestionIndices.length === 0) {
        // Indekslar ro'yxatini tuzamiz [0, 1, 2, ... 449]
        availableQuestionIndices = Array.from(questionsData.keys());
        
        // Ularni yaxshilab aralashtiramiz
        shuffleArray(availableQuestionIndices);
        
        // Xotiraga saqlaymiz
        savePoolProgress();
    }
}

function savePoolProgress() {
    localStorage.setItem(QUESTION_POOL_KEY, JSON.stringify(availableQuestionIndices));
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    // Savollar ro'yxatini tekshirish
    if (availableQuestionIndices.length === 0) {
        initQuestionPool(); // Tugagan bo'lsa qayta yuklaydi
    }

    // Navbatdagi savol indeksini olamiz (hali o'chirmaymiz)
    const questionIndex = availableQuestionIndices[0]; 
    
    // Agar savollar bazasi bo'sh bo'lsa yoki xato bo'lsa
    if (questionIndex === undefined || !questionsData[questionIndex]) {
        quizContainer.innerHTML = '<p>Savollar yuklanmadi. Iltimos sahifani yangilang.</p>';
        return;
    }

    currentQuestionObject = questionsData[questionIndex];
    const q = currentQuestionObject;
    
    // Savol blokini yaratish
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    // Statistika (Nechanchi savol ekanligi)
    const questionNumber = questionsData.length - availableQuestionIndices.length + 1;
    const infoText = document.createElement('small');
    infoText.style.color = '#666';
    infoText.style.display = 'block';
    infoText.style.marginBottom = '5px';
    infoText.textContent = `(Umumiy baza: ${questionNumber} / ${questionsData.length})`;
    questionBlock.appendChild(infoText);

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${questionNumber}-savol. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = '🎉 Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = '🎉';
    } else {
        modalVerdict.textContent = '😔 Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = '😔';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    // YANGI: Ishlatilgan savolni ro'yxatdan o'chiramiz
    if (availableQuestionIndices.length > 0) {
        availableQuestionIndices.shift(); // Birinchi elementni olib tashlash
        savePoolProgress(); // O'zgarishni saqlash
    }

    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash (lekin umumiy test davom etadi)
    blockCorrectCount = 0;
    blockTotalCount = 0;
    
    // Modal yopilgach keyingi savolga o'tamiz
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    // Login o'chirilgan - to'g'ridan-to'g'ri test boshlanadi
    const loginScreen = document.getElementById('loginScreen');
    if (loginScreen) {
        loginScreen.style.display = 'none';
    }
    
    document.body.classList.remove('login-active');
    startTimer();
    updateResults();
    loadQuestion();
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '⚠️ Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '✓ Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '❌ Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        // Izoh: Savollar ketma-ketligini saqlab qolish uchun pool o'chirilmaydi
        location.reload();
    }
}

console.log('%c💡 Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}
