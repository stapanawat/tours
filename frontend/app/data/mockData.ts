// Mock data for the tour company website
// Realistic data without database connection

export interface Tour {
    id: number
    slug: string
    title: { th: string; en: string }
    destination: { th: string; en: string }
    category: string
    description: { th: string; en: string }
    shortDescription: { th: string; en: string }
    price: number
    originalPrice?: number
    currency: string
    duration: { days: number; nights: number }
    groupSize: { min: number; max: number }
    difficulty: 'easy' | 'moderate' | 'challenging'
    rating: number
    reviewCount: number
    image: string
    gallery: string[]
    highlights: { th: string[]; en: string[] }
    includes: { th: string[]; en: string[] }
    excludes: { th: string[]; en: string[] }
    itinerary: {
        day: number
        title: { th: string; en: string }
        description: { th: string; en: string }
    }[]
    departures: string[]
    featured: boolean
    popular: boolean
}

export interface Review {
    id: number
    tourId: number
    userName: string
    avatar: string
    rating: number
    comment: { th: string; en: string }
    date: string
    verified: boolean
    helpful: number
}

export interface BlogPost {
    id: number
    slug: string
    title: { th: string; en: string }
    excerpt: { th: string; en: string }
    content: { th: string; en: string }
    image: string
    category: { th: string; en: string }
    author: string
    authorAvatar: string
    date: string
    readTime: number
}

export interface TeamMember {
    id: number
    name: { th: string; en: string }
    role: { th: string; en: string }
    bio: { th: string; en: string }
    avatar: string
}

export interface Promotion {
    id: number
    code: string
    title: { th: string; en: string }
    description: { th: string; en: string }
    discountType: 'percent' | 'fixed'
    discountValue: number
    expiresAt: string
    image: string
    tourIds: number[]
}

export interface FAQ {
    id: number
    question: { th: string; en: string }
    answer: { th: string; en: string }
    category: string
}

export interface Testimonial {
    id: number
    name: string
    location: { th: string; en: string }
    avatar: string
    rating: number
    text: { th: string; en: string }
    tourTitle: { th: string; en: string }
}

// ============================================================
// TOURS
// ============================================================
export const tours: Tour[] = [
    {
        id: 1,
        slug: 'tokyo-traditional',
        title: { th: 'โตเกียวดั้งเดิม', en: 'Traditional Tokyo' },
        destination: { th: 'ญี่ปุ่น', en: 'Japan' },
        category: 'culture',
        description: {
            th: 'สำรวจโตเกียวที่แท้จริงที่สุดกับทัวร์โตเกียวดั้งเดิม เดินชมอาซากุสะ อุเอโนะ และอากิฮาบาระ ในการเดินทางที่น่าหลงใหลผ่านประวัติศาสตร์ของญี่ปุ่น ตั้งแต่วัดเซ็นโซจิอันยิ่งใหญ่ไปจนถึงตรอกซอยที่เต็มไปด้วยเสน่ห์ ดื่มด่ำกับวัฒนธรรมญี่ปุ่น ลองชิมขนมท้องถิ่นที่นาคามิเสะโดริ เดินเล่นในตรอกซอยของอุเอโนะ และค้นพบความแตกต่างกับเทคโนโลยีของอากิฮาบาระ',
            en: 'Explore the most authentic Tokyo with our Traditional Tokyo tour. Walk through Asakusa, Ueno, and Akihabara on a fascinating journey through Japan\'s history. From the majestic Senso-ji temple to charming alleyways, immerse yourself in Japanese culture, try local sweets at Nakamise-dori, stroll through Ueno\'s backstreets, and discover the contrast with Akihabara\'s technology.'
        },
        shortDescription: {
            th: 'สำรวจวัดเซ็นโซจิ ย่านอาซากุสะ อุเอโนะ และอากิฮาบาระ สัมผัสโตเกียวดั้งเดิมอย่างแท้จริง',
            en: 'Explore Senso-ji temple, Asakusa, Ueno, and Akihabara — experience the true traditional Tokyo.'
        },
        price: 45000,
        originalPrice: 52000,
        currency: 'JPY',
        duration: { days: 1, nights: 0 },
        groupSize: { min: 2, max: 8 },
        difficulty: 'easy',
        rating: 4.9,
        reviewCount: 127,
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop'
        ],
        highlights: {
            th: ['เยี่ยมชมวัดเซ็นโซจิ วัดที่เก่าแก่ที่สุดในโตเกียว', 'เดินเล่นนาคามิเสะโดริ ชิมขนมท้องถิ่น', 'สำรวจสวนอุเอโนะและพิพิธภัณฑ์', 'ค้นพบวัฒนธรรมโอตาคุที่อากิฮาบาระ', 'ถ่ายรูปกับโทริอิแดงอันเป็นสัญลักษณ์'],
            en: ['Visit Senso-ji, Tokyo\'s oldest temple', 'Stroll Nakamise-dori and try local sweets', 'Explore Ueno Park and museums', 'Discover otaku culture in Akihabara', 'Photo ops at iconic red torii gates']
        },
        includes: {
            th: ['ไกด์ภาษาไทย-ญี่ปุ่น', 'ค่าเข้าชมสถานที่ทั้งหมด', 'ของว่างและเครื่องดื่มระหว่างทาง', 'ประกันการเดินทาง'],
            en: ['Thai-Japanese speaking guide', 'All entrance fees', 'Snacks and drinks', 'Travel insurance']
        },
        excludes: {
            th: ['ค่าตั๋วเครื่องบิน', 'มื้อเที่ยงและมื้อค่ำ', 'ค่าใช้จ่ายส่วนตัว', 'ทิป'],
            en: ['Airfare', 'Lunch and dinner', 'Personal expenses', 'Tips']
        },
        itinerary: [
            { day: 1, title: { th: 'อาซากุสะ → อุเอโนะ → อากิฮาบาระ', en: 'Asakusa → Ueno → Akihabara' }, description: { th: 'เริ่มต้นเช้าที่วัดเซ็นโซจิ เดินผ่านประตูคามินาริมง เพลิดเพลินกับนาคามิเสะโดริ จากนั้นไปสวนอุเอโนะ และปิดท้ายที่อากิฮาบาระ', en: 'Start your morning at Senso-ji temple, walk through Kaminarimon gate, enjoy Nakamise-dori, then head to Ueno Park and finish at Akihabara.' } }
        ],
        departures: ['2025-03-15', '2025-04-01', '2025-04-15', '2025-05-01'],
        featured: true,
        popular: true
    },
    {
        id: 2,
        slug: 'kyoto-essence',
        title: { th: 'เกียวโตแห่งจิตวิญญาณ', en: 'Essence of Kyoto' },
        destination: { th: 'ญี่ปุ่น', en: 'Japan' },
        category: 'culture',
        description: {
            th: 'สัมผัสสิ่งที่ดีที่สุดของเกียวโตในหนึ่งวัน ชมศาลเจ้าฟูชิมิอินาริไทชะกับโทริอิแดงนับพัน เดินชมย่านเกอิชาที่กิออน ชื่นชมความงามของวัดทอง (คินกากุจิ) ดื่มด่ำธรรมชาติในป่าไผ่อาราชิยามะ และจบที่วัดคิโยมิสึเดระ มรดกโลกที่มีวิวพาโนรามาของเกียวโต',
            en: 'Experience the best of Kyoto in one day. Visit the famous Fushimi Inari Taisha with its thousands of red torii gates, walk through the geisha district of Gion, admire the beauty of the Golden Pavilion (Kinkaku-ji), immerse in nature at Arashiyama bamboo forest, and end at Kiyomizudera, a UNESCO World Heritage site with panoramic views of Kyoto.'
        },
        shortDescription: {
            th: 'ฟูชิมิอินาริ กิออน คินกากุจิ อาราชิยามะ คิโยมิสึ — ครบทุกไฮไลท์ของเกียวโต',
            en: 'Fushimi Inari, Gion, Kinkaku-ji, Arashiyama, Kiyomizu — all Kyoto highlights in one day.'
        },
        price: 48000,
        currency: 'JPY',
        duration: { days: 1, nights: 0 },
        groupSize: { min: 2, max: 6 },
        difficulty: 'moderate',
        rating: 4.8,
        reviewCount: 95,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop',
            'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&h=800&fit=crop'
        ],
        highlights: {
            th: ['โทริอิแดงนับพันที่ฟูชิมิอินาริ', 'ย่านเกอิชาที่กิออน', 'วัดทอง คินกากุจิ', 'ป่าไผ่อาราชิยามะ'],
            en: ['Thousands of red torii at Fushimi Inari', 'Geisha district Gion', 'Golden Pavilion Kinkaku-ji', 'Arashiyama Bamboo Forest']
        },
        includes: { th: ['ไกด์ภาษาไทย', 'ค่าเข้าชมทั้งหมด', 'รถรับ-ส่ง', 'ประกันการเดินทาง'], en: ['Thai-speaking guide', 'All entrance fees', 'Transfer', 'Travel insurance'] },
        excludes: { th: ['ค่าตั๋วเครื่องบิน', 'อาหาร', 'ทิป'], en: ['Airfare', 'Meals', 'Tips'] },
        itinerary: [
            { day: 1, title: { th: 'ฟูชิมิอินาริ → กิออน → คินกากุจิ → อาราชิยามะ → คิโยมิสึ', en: 'Fushimi Inari → Gion → Kinkaku-ji → Arashiyama → Kiyomizu' }, description: { th: 'ทริปเต็มวันสำรวจสถานที่สำคัญของเกียวโตทั้งหมด', en: 'Full-day trip exploring all major Kyoto landmarks.' } }
        ],
        departures: ['2025-03-20', '2025-04-05', '2025-04-20'],
        featured: true,
        popular: true
    },
    {
        id: 3,
        slug: 'osaka-street-food',
        title: { th: 'โอซาก้า สตรีทฟู้ด', en: 'Osaka Street Food Adventure' },
        destination: { th: 'ญี่ปุ่น', en: 'Japan' },
        category: 'food',
        description: {
            th: 'ค้นพบสิ่งที่ดีที่สุดของโอซาก้าในหนึ่งวัน ชมปราสาทโอซาก้าอันยิ่งใหญ่ สัมผัสประเพณีที่วัดชิเท็นโนจิ เดินเล่นย่านโดทงโบริที่คึกคักและสำรวจย่านชินเซกาอิอันเก่าแก่ พร้อมลิ้มลองอาหารท้องถิ่นอันเลื่องชื่อ ตั้งแต่ทาโกะยากิจนถึงโอโกโนมิยากิ',
            en: 'Discover the best of Osaka in one day. Visit the imposing Osaka Castle, immerse in tradition at Shitenno-ji temple, stroll the vibrant Dotonbori and explore historic Shinsekai. Enjoy famous local cuisine from takoyaki to okonomiyaki.'
        },
        shortDescription: {
            th: 'ปราสาทโอซาก้า โดทงโบริ ชินเซกาอิ — ลิ้มลองอาหารท้องถิ่นอันเลื่องชื่อ',
            en: 'Osaka Castle, Dotonbori, Shinsekai — taste the legendary local street food.'
        },
        price: 35000,
        currency: 'JPY',
        duration: { days: 1, nights: 0 },
        groupSize: { min: 2, max: 10 },
        difficulty: 'easy',
        rating: 4.7,
        reviewCount: 83,
        image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=600&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&h=800&fit=crop'],
        highlights: { th: ['ทาโกะยากิสูตรต้นตำรับ', 'ย่านโดทงโบริยามค่ำ', 'ปราสาทโอซาก้า', 'ชิมอาหาร 8+ ร้านดัง'], en: ['Original takoyaki recipe', 'Dotonbori at night', 'Osaka Castle', '8+ famous food stops'] },
        includes: { th: ['ไกด์ภาษาไทย', 'อาหารทดลอง 8 ชนิด', 'ประกันการเดินทาง'], en: ['Thai guide', '8 food tastings', 'Travel insurance'] },
        excludes: { th: ['ตั๋วเครื่องบิน', 'เครื่องดื่มแอลกอฮอล์', 'ทิป'], en: ['Airfare', 'Alcoholic drinks', 'Tips'] },
        itinerary: [
            { day: 1, title: { th: 'ปราสาท → ชิเท็นโนจิ → โดทงโบริ → ชินเซกาอิ', en: 'Castle → Shitenno-ji → Dotonbori → Shinsekai' }, description: { th: 'ทัวร์เต็มวันกิน-เที่ยวครบรส', en: 'Full-day eat-and-explore tour.' } }
        ],
        departures: ['2025-03-10', '2025-03-25', '2025-04-10'],
        featured: true,
        popular: false
    },
    {
        id: 4,
        slug: 'swiss-alps-adventure',
        title: { th: 'สวิตเซอร์แลนด์ เทือกเขาแอลป์', en: 'Swiss Alps Adventure' },
        destination: { th: 'สวิตเซอร์แลนด์', en: 'Switzerland' },
        category: 'adventure',
        description: {
            th: 'ผจญภัยท่ามกลางเทือกเขาแอลป์สุดมหัศจรรย์ ขึ้นรถไฟสายจุงเฟรา สัมผัสยอดเขาที่สูงที่สุดในยุโรป ชมทะเลสาบสีฟ้าคราม เดินเทรลธรรมชาติ และพักในหมู่บ้านสวิสอันงดงาม',
            en: 'Adventure through the magnificent Swiss Alps. Take the Jungfrau Railway to the Top of Europe, gaze at crystal-blue lakes, trek through natural trails, and stay in picturesque Swiss villages.'
        },
        shortDescription: {
            th: 'จุงเฟรา ทะเลสาบสีฟ้าคราม เทรลธรรมชาติ — ผจญภัยในเทือกเขาแอลป์',
            en: 'Jungfrau, crystal-blue lakes, nature trails — adventure in the Swiss Alps.'
        },
        price: 89000,
        originalPrice: 105000,
        currency: 'THB',
        duration: { days: 7, nights: 6 },
        groupSize: { min: 4, max: 12 },
        difficulty: 'moderate',
        rating: 4.9,
        reviewCount: 64,
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop'],
        highlights: { th: ['ยอดเขาจุงเฟรา Top of Europe', 'ทะเลสาบเบลาอุเซ', 'เมืองอินเทอร์ลาเคน', 'รถไฟสายพาโนรามิก'], en: ['Jungfrau Top of Europe', 'Lake Blausee', 'Interlaken town', 'Panoramic train ride'] },
        includes: { th: ['ที่พัก 6 คืน (4 ดาว)', 'อาหารเช้าทุกวัน', 'ไกด์ภาษาไทย', 'ตั๋วรถไฟทุกเส้นทาง', 'ประกันการเดินทาง'], en: ['6 nights accommodation (4-star)', 'Daily breakfast', 'Thai guide', 'All train tickets', 'Travel insurance'] },
        excludes: { th: ['ตั๋วเครื่องบิน', 'อาหารกลางวัน-เย็น', 'ทิป'], en: ['Airfare', 'Lunch & dinner', 'Tips'] },
        itinerary: [
            { day: 1, title: { th: 'ถึงซูริค — เช็คอินโรงแรม', en: 'Arrive Zurich — Hotel Check-in' }, description: { th: 'ต้อนรับที่สนามบินซูริค รับกระเป๋า เดินทางสู่โรงแรมใจกลางเมือง', en: 'Welcome at Zurich Airport, transfer to city center hotel.' } },
            { day: 2, title: { th: 'ซูริค — ลูเซิร์น', en: 'Zurich — Lucerne' }, description: { th: 'เที่ยวชมเมืองเก่าซูริค จากนั้นเดินทางสู่ลูเซิร์น ชมสะพานไม้ Chapel Bridge', en: 'Tour old town Zurich, then travel to Lucerne to see the Chapel Bridge.' } },
            { day: 3, title: { th: 'จุงเฟรา Top of Europe', en: 'Jungfrau Top of Europe' }, description: { th: 'ขึ้นรถไฟสู่จุงเฟรายอร์ค สถานีรถไฟที่สูงที่สุดในยุโรป', en: 'Take the train to Jungfraujoch, the highest railway station in Europe.' } },
            { day: 4, title: { th: 'อินเทอร์ลาเคน — กรินเดลวัลด์', en: 'Interlaken — Grindelwald' }, description: { th: 'พาราไกลดิ้งเหนืออินเทอร์ลาเคน เดินชมหมู่บ้านกรินเดลวัลด์', en: 'Paragliding over Interlaken, stroll through Grindelwald village.' } },
            { day: 5, title: { th: 'เบิร์น เมืองหลวง', en: 'Capital City Bern' }, description: { th: 'เที่ยวชมเมืองเก่าเบิร์น มรดกโลก UNESCO ชมหอนาฬิกาซิทกล็อกเก', en: 'Tour Bern\'s UNESCO old town, see the Zytglogge clock tower.' } },
            { day: 6, title: { th: 'มองเทรอซ์ — ปราสาทชีย็อง', en: 'Montreux — Château de Chillon' }, description: { th: 'ชมปราสาทชีย็องริมทะเลสาบเจนีวา เดินเล่นริมทะเลสาบ', en: 'Visit Château de Chillon on Lake Geneva, lakeside promenade walk.' } },
            { day: 7, title: { th: 'เดินทางกลับ', en: 'Departure' }, description: { th: 'เช้าอิสระ จากนั้นเดินทางสู่สนามบินเจนีวา', en: 'Free morning, then transfer to Geneva Airport.' } }
        ],
        departures: ['2025-06-01', '2025-07-15', '2025-08-01', '2025-09-15'],
        featured: true,
        popular: true
    },
    {
        id: 5,
        slug: 'seoul-kpop-culture',
        title: { th: 'โซล K-Pop คัลเจอร์', en: 'Seoul K-Pop Culture' },
        destination: { th: 'เกาหลีใต้', en: 'South Korea' },
        category: 'culture',
        description: {
            th: 'สัมผัสวัฒนธรรม K-Pop และเกาหลีสมัยใหม่อย่างเต็มอิ่ม เที่ยวชมย่านกังนัม ฮงแด และอิแทวอน ช็อปปิ้งเครื่องสำอาง เยี่ยมชมค่ายเพลง และลองสวมฮันบก',
            en: 'Immerse in K-Pop culture and modern Korea. Explore Gangnam, Hongdae, and Itaewon districts. Shop for cosmetics, visit music labels, and try wearing hanbok.'
        },
        shortDescription: {
            th: 'กังนัม ฮงแด ค่ายเพลง ฮันบก — ดื่มด่ำวัฒนธรรมเกาหลีอย่างเต็มที่',
            en: 'Gangnam, Hongdae, music labels, hanbok — dive deep into Korean culture.'
        },
        price: 42000,
        currency: 'THB',
        duration: { days: 5, nights: 4 },
        groupSize: { min: 4, max: 15 },
        difficulty: 'easy',
        rating: 4.6,
        reviewCount: 156,
        image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&h=600&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200&h=800&fit=crop'],
        highlights: { th: ['ย่านกังนัมชื่อดัง', 'ถ่ายรูปในชุดฮันบก', 'ช็อปเครื่องสำอางเกาหลี', 'เยี่ยมชมค่ายเพลง K-Pop'], en: ['Famous Gangnam district', 'Photo in hanbok outfit', 'Korean cosmetics shopping', 'K-Pop music label visit'] },
        includes: { th: ['ที่พัก 4 คืน', 'อาหารเช้า', 'ไกด์ภาษาไทย', 'ชุดฮันบกให้ยืม', 'ประกัน'], en: ['4 nights stay', 'Breakfast', 'Thai guide', 'Hanbok rental', 'Insurance'] },
        excludes: { th: ['ตั๋วเครื่องบิน', 'อาหารอื่นๆ', 'ช็อปปิ้งส่วนตัว'], en: ['Airfare', 'Other meals', 'Personal shopping'] },
        itinerary: [
            { day: 1, title: { th: 'ถึงโซล — เช็คอิน — มยองดง', en: 'Arrive Seoul — Check-in — Myeongdong' }, description: { th: 'ต้อนรับที่สนามบินอินชอน จากนั้นช็อปปิ้งที่มยองดง', en: 'Welcome at Incheon Airport, evening shopping at Myeongdong.' } },
            { day: 2, title: { th: 'พระราชวังเคียงบกกุง — บุกชนฮันอก', en: 'Gyeongbokgung Palace — Bukchon Hanok' }, description: { th: 'สัมผัสประวัติศาสตร์เกาหลีที่พระราชวัง สวมฮันบกเดินชมหมู่บ้านฮันอก', en: 'Experience Korean history at the palace, wear hanbok in the Hanok village.' } },
            { day: 3, title: { th: 'K-Pop Day — กังนัม — ค่ายเพลง', en: 'K-Pop Day — Gangnam — Music Label' }, description: { th: 'วันเต็มๆ กับวัฒนธรรม K-Pop เยี่ยมชมค่ายเพลงชื่อดัง', en: 'Full day of K-Pop culture, visit famous music label.' } },
            { day: 4, title: { th: 'ฮงแด — อิแทวอน — โซลทาวเวอร์', en: 'Hongdae — Itaewon — Seoul Tower' }, description: { th: 'เที่ยวย่านฮิป ช็อปปิ้ง และชมวิวจากโซลทาวเวอร์', en: 'Explore hip districts, shop, and enjoy views from Seoul Tower.' } },
            { day: 5, title: { th: 'เดินทางกลับ', en: 'Departure' }, description: { th: 'ช้อปปิ้งสุดท้ายที่ดิวตี้ฟรี แล้วเดินทางสู่สนามบิน', en: 'Last-minute duty-free shopping, then transfer to airport.' } }
        ],
        departures: ['2025-03-01', '2025-04-15', '2025-05-20', '2025-06-10'],
        featured: false,
        popular: true
    },
    {
        id: 6,
        slug: 'iceland-northern-lights',
        title: { th: 'ไอซ์แลนด์ ล่าแสงเหนือ', en: 'Iceland Northern Lights Hunt' },
        destination: { th: 'ไอซ์แลนด์', en: 'Iceland' },
        category: 'adventure',
        description: {
            th: 'ตามล่าแสงเหนือในไอซ์แลนด์ สัมผัสน้ำตกยักษ์ ธารน้ำแข็ง ภูเขาไฟ และบลูลากูน ประสบการณ์ที่ไม่ซ้ำใครในดินแดนแห่งน้ำแข็งและไฟ',
            en: 'Hunt the Northern Lights in Iceland. Experience massive waterfalls, glaciers, volcanoes, and the Blue Lagoon. A unique experience in the land of ice and fire.'
        },
        shortDescription: {
            th: 'แสงเหนือ น้ำตกยักษ์ ธารน้ำแข็ง บลูลากูน — ดินแดนมหัศจรรย์แห่งน้ำแข็ง',
            en: 'Northern Lights, massive waterfalls, glaciers, Blue Lagoon — land of ice and fire.'
        },
        price: 125000,
        currency: 'THB',
        duration: { days: 8, nights: 7 },
        groupSize: { min: 6, max: 14 },
        difficulty: 'challenging',
        rating: 4.9,
        reviewCount: 42,
        image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&h=600&fit=crop',
        gallery: ['https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&h=800&fit=crop'],
        highlights: { th: ['ล่าแสงเหนือ Aurora Borealis', 'แช่น้ำร้อนบลูลากูน', 'เดินบนธารน้ำแข็ง', 'น้ำตกเซลยาลันด์สฟอส'], en: ['Aurora Borealis hunt', 'Blue Lagoon soak', 'Glacier walk', 'Seljalandsfoss waterfall'] },
        includes: { th: ['ที่พัก 7 คืน', 'อาหารเช้า-เย็น', 'ไกด์ภาษาไทย', 'รถ 4WD ตลอดทริป', 'บลูลากูน', 'ประกัน'], en: ['7 nights stay', 'Breakfast & dinner', 'Thai guide', '4WD vehicle', 'Blue Lagoon', 'Insurance'] },
        excludes: { th: ['ตั๋วเครื่องบิน', 'อาหารกลางวัน', 'ทิป'], en: ['Airfare', 'Lunch', 'Tips'] },
        itinerary: [
            { day: 1, title: { th: 'ถึงเรคยาวิก', en: 'Arrive Reykjavik' }, description: { th: 'ต้อนรับที่สนามบิน เช็คอินและพักผ่อน', en: 'Airport welcome, hotel check-in and rest.' } },
            { day: 2, title: { th: 'Golden Circle', en: 'Golden Circle' }, description: { th: 'Þingvellir, Geysir, Gullfoss — วงแหวนทองคำ 3 สถานที่สำคัญ', en: 'Þingvellir, Geysir, Gullfoss — three golden landmarks.' } }
        ],
        departures: ['2025-10-01', '2025-11-15', '2025-12-01'],
        featured: true,
        popular: false
    }
]

// ============================================================
// REVIEWS
// ============================================================
export const reviews: Review[] = [
    { id: 1, tourId: 1, userName: 'สมชาย กรุงเทพฯ', avatar: 'https://i.pravatar.cc/100?img=11', rating: 5, comment: { th: 'ไกด์ดีมาก อธิบายประวัติศาสตร์ได้ละเอียด พาไปกินราเมนร้านเด็ด ชอบมากๆ ครับ', en: 'Amazing guide with detailed historical explanations. Took us to an incredible ramen shop!' }, date: '2025-01-15', verified: true, helpful: 24 },
    { id: 2, tourId: 1, userName: 'นิดา เชียงใหม่', avatar: 'https://i.pravatar.cc/100?img=5', rating: 5, comment: { th: 'ประทับใจมากค่ะ คุ้มค่าเกินราคา ไกด์ใจดีมาก แนะนำเลยค่ะ', en: 'Very impressed! Great value for money. The guide was so kind. Highly recommended!' }, date: '2025-01-20', verified: true, helpful: 18 },
    { id: 3, tourId: 2, userName: 'วิชา ภูเก็ต', avatar: 'https://i.pravatar.cc/100?img=12', rating: 4, comment: { th: 'เกียวโตสวยมาก ฟูชิมิอินาริถ่ายรูปสวยมาก แต่เหนื่อยหน่อยเพราะเดินเยอะ', en: 'Kyoto is stunning! Fushimi Inari photos were beautiful. A bit tiring from all the walking though.' }, date: '2025-02-01', verified: true, helpful: 12 },
    { id: 4, tourId: 4, userName: 'ปิยะ กรุงเทพฯ', avatar: 'https://i.pravatar.cc/100?img=15', rating: 5, comment: { th: 'ทริปสวิตเซอร์แลนด์ดีที่สุดเท่าที่เคยไปมา วิวจุงเฟราสุดยอด น้ำตาน้ำตาเลย', en: 'Best Switzerland trip ever! The Jungfrau view was absolutely breathtaking. Tears of joy!' }, date: '2025-01-28', verified: true, helpful: 31 },
    { id: 5, tourId: 5, userName: 'มินนี่ นนทบุรี', avatar: 'https://i.pravatar.cc/100?img=9', rating: 5, comment: { th: 'ฟินมากกก ได้ไปค่ายเพลงจริงๆ ได้ใส่ฮันบกถ่ายรูป สวยมากค่ะ', en: 'So amazing! Actually visited the music label! Wearing hanbok for photos was beautiful!' }, date: '2025-02-05', verified: true, helpful: 45 },
    { id: 6, tourId: 3, userName: 'ธนา สมุทรปราการ', avatar: 'https://i.pravatar.cc/100?img=13', rating: 4, comment: { th: 'อาหารโอซาก้าอร่อยจริงๆ ทาโกะยากิเด็ดมาก ร้านที่ไกด์พาไปเป็นร้านท้องถิ่นจริงๆ', en: 'Osaka food was truly delicious! The takoyaki was incredible. Guide took us to real local shops.' }, date: '2025-02-10', verified: true, helpful: 15 }
]

// ============================================================
// TESTIMONIALS (homepage)
// ============================================================
export const testimonials: Testimonial[] = [
    { id: 1, name: 'คุณสมชาย วรรณพงศ์', location: { th: 'กรุงเทพฯ', en: 'Bangkok' }, avatar: 'https://i.pravatar.cc/100?img=11', rating: 5, text: { th: 'Voyara ทำให้การเดินทางไปญี่ปุ่นของเราเป็นทริปที่ดีที่สุดที่เคยมีมา ไกด์เชี่ยวชาญมาก พาไปในที่ที่คนทั่วไปไม่รู้จัก ประทับใจมากครับ', en: 'Voyara made our Japan trip the best we\'ve ever had. The guide was incredibly knowledgeable, taking us to places ordinary tourists never find. Truly impressed!' }, tourTitle: { th: 'โตเกียวดั้งเดิม', en: 'Traditional Tokyo' } },
    { id: 2, name: 'คุณพิมพ์ชนก ศรีสุข', location: { th: 'เชียงใหม่', en: 'Chiang Mai' }, avatar: 'https://i.pravatar.cc/100?img=5', rating: 5, text: { th: 'ทริปสวิตเซอร์แลนด์สุดยอดมากค่ะ ทุกอย่างจัดการดีหมด ไม่ต้องกังวลอะไรเลย วิวสวยเกินคำบรรยาย จะกลับไปใช้บริการอีกแน่นอนค่ะ', en: 'The Switzerland trip was absolutely amazing! Everything was perfectly arranged, no worries at all. Views beyond description. Will definitely use their service again!' }, tourTitle: { th: 'สวิตเซอร์แลนด์ เทือกเขาแอลป์', en: 'Swiss Alps Adventure' } },
    { id: 3, name: 'คุณธนพล จิตต์ดี', location: { th: 'ภูเก็ต', en: 'Phuket' }, avatar: 'https://i.pravatar.cc/100?img=12', rating: 5, text: { th: 'ราคาคุ้มค่ามาก เมื่อเทียบกับสิ่งที่ได้รับ ไกด์ใจดี อาหารอร่อย และประสบการณ์ที่หาไม่ได้จากที่ไหน ขอบคุณ Voyara ครับ', en: 'Incredible value for money compared to what you get. Friendly guide, delicious food, and unique experiences you won\'t find anywhere else. Thank you Voyara!' }, tourTitle: { th: 'โอซาก้า สตรีทฟู้ด', en: 'Osaka Street Food Adventure' } }
]

// ============================================================
// BLOG POSTS
// ============================================================
export const blogPosts: BlogPost[] = [
    { id: 1, slug: '10-things-to-do-in-tokyo', title: { th: '10 สิ่งที่ต้องทำเมื่อไปโตเกียว', en: '10 Must-Do Things in Tokyo' }, excerpt: { th: 'รวมกิจกรรมที่ห้ามพลาดเมื่อไปเยือนเมืองหลวงของญี่ปุ่น ตั้งแต่วัดเก่าแก่สู่ย่านเทคโนโลยีล้ำสมัย', en: 'Essential activities when visiting the capital of Japan, from ancient temples to cutting-edge tech districts.' }, content: { th: '', en: '' }, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop', category: { th: 'ญี่ปุ่น', en: 'Japan' }, author: 'Kai', authorAvatar: 'https://i.pravatar.cc/100?img=33', date: '2025-02-10', readTime: 8 },
    { id: 2, slug: 'switzerland-on-a-budget', title: { th: 'เที่ยวสวิตเซอร์แลนด์แบบประหยัด', en: 'Switzerland on a Budget' }, excerpt: { th: 'เคล็ดลับเที่ยวสวิสแบบไม่ต้องเจ็บกระเป๋า พร้อมวิธีใช้ Swiss Travel Pass ให้คุ้มที่สุด', en: 'Tips for exploring Switzerland without breaking the bank, plus how to maximize your Swiss Travel Pass.' }, content: { th: '', en: '' }, image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=500&fit=crop', category: { th: 'ยุโรป', en: 'Europe' }, author: 'David', authorAvatar: 'https://i.pravatar.cc/100?img=14', date: '2025-02-05', readTime: 6 },
    { id: 3, slug: 'korean-food-guide', title: { th: 'อาหารเกาหลีที่ต้องลอง', en: 'Korean Food You Must Try' }, excerpt: { th: 'แนะนำอาหารเกาหลีแท้ๆ ที่ต้องลองให้ได้ ตั้งแต่บิบิมบับจนถึงชิมชิลบัง', en: 'Authentic Korean dishes you must try, from bibimbap to jjimjilbang snacks.' }, content: { th: '', en: '' }, image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&h=500&fit=crop', category: { th: 'เกาหลี', en: 'Korea' }, author: 'Min', authorAvatar: 'https://i.pravatar.cc/100?img=25', date: '2025-01-28', readTime: 5 }
]

// ============================================================
// TEAM MEMBERS
// ============================================================
export const teamMembers: TeamMember[] = [
    { id: 1, name: { th: 'ไค ทานากะ', en: 'Kai Tanaka' }, role: { th: 'ผู้ก่อตั้ง & ซีอีโอ', en: 'Founder & CEO' }, bio: { th: 'อดีตไกด์ท่องเที่ยวในญี่ปุ่นกว่า 10 ปี หลงใหลในการสร้างสรรค์ประสบการณ์ที่ไม่ธรรมดาให้นักเดินทาง', en: 'Former tour guide in Japan for over 10 years, passionate about crafting extraordinary experiences for travelers.' }, avatar: 'https://i.pravatar.cc/200?img=33' },
    { id: 2, name: { th: 'เดวิด หว่อง', en: 'David Wong' }, role: { th: 'ผู้จัดการทัวร์ยุโรป', en: 'Europe Tour Manager' }, bio: { th: 'ผู้เชี่ยวชาญด้านยุโรปตะวันตก เดินทางมาแล้วกว่า 30 ประเทศ พร้อมออกแบบเส้นทางที่สมบูรณ์แบบ', en: 'Western Europe specialist, traveled to over 30 countries, ready to design the perfect itinerary.' }, avatar: 'https://i.pravatar.cc/200?img=14' },
    { id: 3, name: { th: 'มิน จียอง', en: 'Min Ji-young' }, role: { th: 'ผู้จัดการทัวร์เอเชีย', en: 'Asia Tour Manager' }, bio: { th: 'สาวเกาหลีที่มาใช้ชีวิตในไทย รักการเดินทางและเข้าใจวัฒนธรรมเอเชียอย่างลึกซึ้ง', en: 'Korean native living in Thailand, loves traveling and deeply understands Asian cultures.' }, avatar: 'https://i.pravatar.cc/200?img=25' },
    { id: 4, name: { th: 'เควิน ลี', en: 'Kevin Lee' }, role: { th: 'ฝ่ายลูกค้าสัมพันธ์', en: 'Customer Relations' }, bio: { th: 'ดูแลลูกค้าตั้งแต่วันแรกจนถึงวันสุดท้ายของทริป ทุกรายละเอียดคือความใส่ใจ', en: 'Taking care of customers from day one to the last day of the trip — every detail matters.' }, avatar: 'https://i.pravatar.cc/200?img=60' }
]

// ============================================================
// PROMOTIONS
// ============================================================
export const promotions: Promotion[] = [
    { id: 1, code: 'SAKURA25', title: { th: 'ซากุระ ลด 25%', en: 'Sakura 25% Off' }, description: { th: 'ลดทันที 25% สำหรับทัวร์ญี่ปุ่นทุกเส้นทาง เฉพาะเดือนมีนาคม-เมษายน ช่วงซากุระบาน', en: '25% off all Japan tours for March–April, during cherry blossom season!' }, discountType: 'percent', discountValue: 25, expiresAt: '2025-04-30', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=500&fit=crop', tourIds: [1, 2, 3] },
    { id: 2, code: 'ALPS5000', title: { th: 'แอลป์ ลด ฿5,000', en: 'Alps ฿5,000 Off' }, description: { th: 'ลดทันที ฿5,000 สำหรับทัวร์สวิตเซอร์แลนด์ จองก่อน 31 พ.ค. เท่านั้น', en: '฿5,000 off Switzerland tours, book before May 31 only!' }, discountType: 'fixed', discountValue: 5000, expiresAt: '2025-05-31', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=500&fit=crop', tourIds: [4] },
    { id: 3, code: 'EARLYBIRD', title: { th: 'Early Bird ลด 15%', en: 'Early Bird 15% Off' }, description: { th: 'จองล่วงหน้า 3 เดือนขึ้นไป รับส่วนลดทันที 15% ทุกเส้นทาง', en: 'Book 3+ months in advance and get 15% off all routes!' }, discountType: 'percent', discountValue: 15, expiresAt: '2025-12-31', image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&h=500&fit=crop', tourIds: [1, 2, 3, 4, 5, 6] }
]

// ============================================================
// FAQ
// ============================================================
export const faqs: FAQ[] = [
    { id: 1, question: { th: 'จองทัวร์ต้องจ่ายล่วงหน้าเท่าไร?', en: 'How much deposit is required to book a tour?' }, answer: { th: 'ชำระมัดจำ 30% ของราคาทัวร์ทั้งหมดเมื่อทำการจอง ส่วนที่เหลืออีก 70% ชำระก่อนวันเดินทางอย่างน้อย 14 วัน', en: 'A 30% deposit of the total tour price is required at booking. The remaining 70% is due at least 14 days before departure.' }, category: 'booking' },
    { id: 2, question: { th: 'สามารถยกเลิกหรือเปลี่ยนแปลงการจองได้ไหม?', en: 'Can I cancel or modify my booking?' }, answer: { th: 'สามารถยกเลิกได้ฟรีก่อนวันเดินทาง 30 วัน ยกเลิกภายใน 14-29 วัน หักค่าธรรมเนียม 50% ยกเลิกน้อยกว่า 14 วัน ไม่สามารถคืนเงินได้', en: 'Free cancellation up to 30 days before departure. 14–29 days: 50% fee. Less than 14 days: non-refundable.' }, category: 'booking' },
    { id: 3, question: { th: 'ทัวร์รวมตั๋วเครื่องบินด้วยไหม?', en: 'Does the tour include airfare?' }, answer: { th: 'ราคาทัวร์ไม่รวมตั๋วเครื่องบิน เว้นแต่ระบุไว้เป็นพิเศษ เราสามารถช่วยจัดหาตั๋วเครื่องบินในราคาพิเศษให้ได้ กรุณาแจ้งความต้องการเมื่อทำการจอง', en: 'Tour prices do not include airfare unless specified. We can help arrange flights at special rates — just let us know when booking.' }, category: 'tour' },
    { id: 4, question: { th: 'มีประกันการเดินทางไหม?', en: 'Is travel insurance included?' }, answer: { th: 'ทัวร์ทุกเส้นทางรวมประกันการเดินทางพื้นฐาน (คุ้มครองอุบัติเหตุ ค่ารักษาพยาบาล และสัมภาระ) หากต้องการประกันเพิ่มเติม เราสามารถจัดหาแพ็คเกจพิเศษให้ได้', en: 'All tours include basic travel insurance (accident, medical, and luggage coverage). For additional coverage, we can arrange special packages.' }, category: 'tour' },
    { id: 5, question: { th: 'ไกด์พูดภาษาไทยไหม?', en: 'Do guides speak Thai?' }, answer: { th: 'ไกด์ทุกคนของเราพูดภาษาไทยได้ และบางคนพูดได้ถึง 3 ภาษา (ไทย-อังกฤษ-ภาษาท้องถิ่น) เพื่อให้คุณสื่อสารได้อย่างสบายใจตลอดทริป', en: 'All our guides speak Thai, and some are trilingual (Thai-English-local language) so you can communicate comfortably throughout the trip.' }, category: 'guide' },
    { id: 6, question: { th: 'รับชำระเงินช่องทางไหนบ้าง?', en: 'What payment methods do you accept?' }, answer: { th: 'รับชำระผ่านบัตรเครดิต/เดบิต (Visa, Mastercard), โอนผ่านธนาคาร, PromptPay และ Stripe สำหรับลูกค้าต่างชาติ', en: 'We accept credit/debit cards (Visa, Mastercard), bank transfer, PromptPay, and Stripe for international clients.' }, category: 'payment' }
]

// ============================================================
// CATEGORIES
// ============================================================
export const categories = [
    { value: 'culture', label: { th: 'วัฒนธรรม', en: 'Culture' }, icon: 'material-symbols:temple-buddhist' },
    { value: 'adventure', label: { th: 'ผจญภัย', en: 'Adventure' }, icon: 'material-symbols:hiking' },
    { value: 'food', label: { th: 'อาหาร', en: 'Food' }, icon: 'material-symbols:restaurant' },
    { value: 'nature', label: { th: 'ธรรมชาติ', en: 'Nature' }, icon: 'material-symbols:forest' },
    { value: 'city', label: { th: 'เมือง', en: 'City' }, icon: 'material-symbols:location-city' },
    { value: 'relax', label: { th: 'พักผ่อน', en: 'Relaxation' }, icon: 'material-symbols:spa' }
]

export const destinations = [
    { value: 'japan', label: { th: 'ญี่ปุ่น', en: 'Japan' } },
    { value: 'switzerland', label: { th: 'สวิตเซอร์แลนด์', en: 'Switzerland' } },
    { value: 'south-korea', label: { th: 'เกาหลีใต้', en: 'South Korea' } },
    { value: 'iceland', label: { th: 'ไอซ์แลนด์', en: 'Iceland' } }
]
