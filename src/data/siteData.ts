export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  children?: NavSubItem[];
}

export interface ServiceBadge {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  href: string;
}

export interface CourseItem {
  id: string;
  title: string;
  image: string;
  col: 1 | 2;
  href: string;
}

export interface BlogPost {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  image: string;
  alt: string;
  quote: string;
}

export interface BrandItem {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface FooterPolicyLink {
  label: string;
  href: string;
}

export const TOP_BAR_LINKS: NavItem[] = [
  { id: 'tb-home', label: 'Trang chủ', href: '#top', isActive: true },
  { id: 'tb-about', label: 'Giới thiệu', href: 'https://dayboiparksonhungvuong.com/about-us/' },
  { id: 'tb-fee', label: 'Học phí', href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/' },
  { id: 'tb-blog', label: 'Blog', href: '#bai-viet-noi-bat' },
  { id: 'tb-contact', label: 'Liên hệ', href: '#footer' },
];

export const SERVICE_BADGES: ServiceBadge[] = [
  {
    icon: '/images/icon_bao_hanh.png',
    title: 'Đảm bảo chính hãng',
    subtitle: 'tất cả sản phẩm',
    href: 'https://dayboiparksonhungvuong.com/about-us/',
  },
  {
    icon: '/images/icon_chinh_sach.png',
    title: 'Chính sách đổi trả',
    subtitle: 'linh hoạt',
    href: 'https://dayboiparksonhungvuong.com/chinh-sach-doi-tra-va-hoan-tien/',
  },
  {
    icon: '/images/icon_dat_hang.png',
    title: 'Đặt hàng online',
    subtitle: 'thuận tiện',
    href: 'https://dayboiparksonhungvuong.com/order-guide/',
  },
  {
    icon: '/images/icon_giao_hang.png',
    title: 'Giao hàng & Thanh toán',
    subtitle: 'nhanh chóng, đảm bảo',
    href: 'https://dayboiparksonhungvuong.com/quy-dinh-va-hinh-thuc-thanh-toan/',
  },
];

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    id: 'nav-home',
    label: 'Trang chủ',
    href: '#top',
    isActive: true,
  },
  {
    id: 'nav-about',
    label: 'Giới thiệu',
    href: 'https://dayboiparksonhungvuong.com/about-us/',
  },
  {
    id: 'nav-fee',
    label: 'Học phí',
    href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/',
  },
  {
    id: 'nav-accessories',
    label: 'Phụ Kiện',
    href: 'https://dayboiparksonhungvuong.com/phu-kien/',
    children: [
      { label: 'Phao Tập Bơi', href: 'https://dayboiparksonhungvuong.com/phao-tap-boi/' },
      { label: 'Bàn Quạt Tay', href: 'https://dayboiparksonhungvuong.com/ban-quat-tay/' },
      { label: 'Chân Vịt', href: 'https://dayboiparksonhungvuong.com/chan-vit/' },
      { label: 'Balo – Túi Đồ Bơi', href: 'https://dayboiparksonhungvuong.com/balo-tui-do-boi/' },
      { label: 'Chống Mờ Kính Bơi', href: 'https://dayboiparksonhungvuong.com/chong-mo-kinh-boi/' },
      { label: 'Nút Bịt Tai', href: 'https://dayboiparksonhungvuong.com/nut-bit-tai/' },
      { label: 'Chăm Sóc Da Tóc', href: 'https://dayboiparksonhungvuong.com/cham-soc-da-toc/' },
      { label: 'Open Water', href: 'https://dayboiparksonhungvuong.com/open-water/' },
      { label: 'Dây Kéo Kháng Lực', href: 'https://dayboiparksonhungvuong.com/day-keo-khang-luc/' },
      { label: 'Phụ Kiện Khác', href: 'https://dayboiparksonhungvuong.com/phu-kien-khac/' },
    ],
  },
  {
    id: 'nav-blog',
    label: 'Blog',
    href: 'https://dayboiparksonhungvuong.com/blog/',
    children: [
      { label: 'Tin Tức Bơi Lội', href: 'https://dayboiparksonhungvuong.com/tin-tuc-boi-loi/' },
      { label: 'Hướng Dẫn Kỹ Thuật Bơi', href: 'https://dayboiparksonhungvuong.com/huong-dan-ky-thuat-boi/' },
      { label: 'Trải Nghiệm Đánh Giá', href: 'https://dayboiparksonhungvuong.com/trai-nghiem-danh-gia/' },
      { label: 'Kiến Thức Bơi Lội', href: 'https://dayboiparksonhungvuong.com/kien-thuc-boi-loi/' },
      { label: 'Lớp Học Bơi', href: 'https://dayboiparksonhungvuong.com/lop-hoc-boi/' },
      { label: 'Thông Tin Bể Bơi', href: 'https://dayboiparksonhungvuong.com/thong-tin-be-boi/' },
    ],
  },
  {
    id: 'nav-contact',
    label: 'Liên hệ',
    href: 'https://dayboiparksonhungvuong.com/lien-he/',
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/images/banner-top-1.jpg',
    alt: 'Khoá học kèm riêng 1/1 - Dạy Bơi Parkson Hùng Vương',
    href: '#cac-khoa-hoc-boi',
  },
  {
    id: 'slide-2',
    image: '/images/banner-top-2.jpg',
    alt: 'Đồ bơi chính hãng - Dạy Bơi Parkson Hùng Vương',
    href: 'https://dayboiparksonhungvuong.com/phu-kien/',
  },
  {
    id: 'slide-3',
    image: '/images/banner-top-3.jpg',
    alt: 'Phụ kiện bơi lội - Dạy Bơi Parkson Hùng Vương',
    href: 'https://dayboiparksonhungvuong.com/phu-kien/',
  },
  {
    id: 'slide-4',
    image: '/images/banner-top-4.jpg',
    alt: 'Kính bơi và dụng cụ tập bơi chuyên nghiệp',
    href: 'https://dayboiparksonhungvuong.com/phu-kien/',
  },
];

export const COURSE_ITEMS: CourseItem[] = [
  {
    id: 'course-ech',
    title: 'Bơi Ếch',
    image: '/images/boi-ech-2.jpg',
    col: 1,
    href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/',
  },
  {
    id: 'course-sai',
    title: 'Bơi Sải',
    image: '/images/boi-sai-1.jpg',
    col: 1,
    href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/',
  },
  {
    id: 'course-buom',
    title: 'Bơi Bướm',
    image: '/images/boi-buom-1.jpg',
    col: 2,
    href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/',
  },
  {
    id: 'course-ngua',
    title: 'Bơi Ngửa',
    image: '/images/boi-ngua-1.jpg',
    col: 2,
    href: 'https://dayboiparksonhungvuong.com/hoc-phi-day-boi/',
  },
];

export const FEATURED_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    day: '06',
    month: 'Th11',
    title: 'Sécurité du téléchargement de l’application 1xbet – guide complet',
    excerpt: 'Téléchargement de l’application 1xbet : guide complet et pratique pour les joueurs...',
    href: 'https://dayboiparksonhungvuong.com/securite-du-telechargement-de-l-application-1xbet-guide-complet/',
  },
  {
    id: 'post-2',
    day: '06',
    month: 'Th11',
    title: '1xbet. com : guide complet de vérification de compte',
    excerpt: 'Guide pratique de 1xbet. com – Tout ce qu’il faut savoir pour jouer en toute sécurité 1....',
    href: 'https://dayboiparksonhungvuong.com/1xbet-com-guide-complet-de-verification-de-compte/',
  },
  {
    id: 'post-3',
    day: '05',
    month: 'Th11',
    title: 'Guide complet des bonus 1xbet.com – tout ce qu’il faut savoir',
    excerpt: '1. Inscription et première prise en main 2. Les bonus de bienvenue et exigences de mise 3....',
    href: 'https://dayboiparksonhungvuong.com/guide-complet-des-bonus-1xbet-com-tout-ce-qu-il-faut-savoir/',
  },
  {
    id: 'post-4',
    day: '05',
    month: 'Th11',
    title: '1xbet ci télécharger en France – Guide complet, bonus, paiement et sécurité',
    excerpt: '1xbet ci télécharger – Guide complet pour les joueurs français Pourquoi choisir 1xbet ? 1xbet...',
    href: 'https://dayboiparksonhungvuong.com/1xbet-ci-telecharger-en-france-guide-complet-bonus-paiement-et-securite/',
  },
  {
    id: 'post-5',
    day: '05',
    month: 'Th11',
    title: 'Guide de sécurité du 1xbet apk 2022 : installer et jouer en toute confiance',
    excerpt: 'Guide pratique 1xbet apk 2022 : tout ce qu’il faut savoir pour jouer sur mobile en France...',
    href: 'https://dayboiparksonhungvuong.com/guide-de-securite-du-1xbet-apk-2022-installer-et-jouer-en-toute-confiance/',
  },
  {
    id: 'post-6',
    day: '05',
    month: 'Th11',
    title: 'Téléchargements 1xbet APK : aperçu et options',
    excerpt: 'Pourquoi choisir l’application 1xbet ? Conditions d’accès et compatibilité...',
    href: 'https://dayboiparksonhungvuong.com/telechargements-1xbet-apk-apercu-et-options/',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'hv-5',
    image: '/images/hv5.jpg',
    alt: 'Học viên nhí học bơi tại Parkson Hùng Vương',
    quote:
      'Con trai tôi 6 tuổi rất hiếu động và khó tập trung, nhưng nhờ khóa học đặc biệt dành cho các bé nhỏ tuổi, cháu đã vượt qua nỗi sợ nước và biết bơi. Đội ngũ giáo viên tại đây rất chuyên nghiệp và tận tâm.',
  },
  {
    id: 'hv-4',
    image: '/images/hv4.jpg',
    alt: 'Học viên khóa học kèm riêng 1-1',
    quote:
      'Tôi chọn khóa học kèm riêng 1-1 và cảm thấy rất xứng đáng với mức học phí. Thầy Cô hướng dẫn kỹ lưỡng từng kỹ thuật bơi, điều chỉnh ngay khi tôi làm sai. Rất hài lòng với cách giảng dạy chuyên nghiệp của Dayboiparksonhungvuong.com.',
  },
  {
    id: 'hv-1',
    image: '/images/hv1.jpg',
    alt: 'Học viên khóa học bao biết bơi',
    quote:
      "Ban đầu tôi chọn khóa học 'bao biết bơi' vì không có nhiều thời gian cố định. Thầy cô hướng dẫn nhiệt tình, giờ học linh hoạt nên tôi không cảm thấy áp lực về thời gian. Chỉ sau một thời gian ngắn, tôi đã có thể tự tin bơi lội.",
  },
  {
    id: 'hv-2',
    image: '/images/hv2.jpg',
    alt: 'Phụ huynh và học viên nhí sau 12 buổi học bơi',
    quote:
      'Con tôi rất nhát nước và khó tập trung, nhưng sau khi tham gia khóa học bơi kèm riêng, bé đã biết bơi sau 12 buổi. Thầy rất kiên nhẫn và có phương pháp dạy hiệu quả. Tôi rất hài lòng với dịch vụ và chất lượng giảng dạy của Dayboiparksonhungvuong.com.',
  },
];

export const BRAND_ITEMS: BrandItem[] = [
  {
    id: 'brand-macks',
    name: "Mack's",
    image: '/images/macks.jpg',
    href: 'https://dayboiparksonhungvuong.com/brand-yingfa/',
  },
  {
    id: 'brand-view',
    name: 'VIEW',
    image: '/images/view.jpg',
    href: 'https://dayboiparksonhungvuong.com/brand-alpine-hearing/',
  },
  {
    id: 'brand-arena',
    name: 'Arena',
    image: '/images/arena.jpg',
    href: 'https://dayboiparksonhungvuong.com/brand-ybl/',
  },
  {
    id: 'brand-yingfa',
    name: 'Yingfa',
    image: '/images/yingfa-1.jpg',
    href: 'https://dayboiparksonhungvuong.com/brand-view/',
  },
  {
    id: 'brand-alpine',
    name: 'Alpine Hearing Protection',
    image: '/images/alpine-hearing.jpg',
    href: 'https://dayboiparksonhungvuong.com/brand-arena/',
  },
];

export const FOOTER_POLICY_LINKS: FooterPolicyLink[] = [
  {
    label: 'Chính Sách Và Quy Định Chung',
    href: 'https://dayboiparksonhungvuong.com/chinh-sach-quy-dinh-chung/',
  },
  {
    label: 'Chính Sách Vận Chuyển',
    href: 'https://dayboiparksonhungvuong.com/chinh-sach-van-chuyen/',
  },
  {
    label: 'Quy Định Và Hình Thức Thanh Toán',
    href: 'https://dayboiparksonhungvuong.com/quy-dinh-va-hinh-thuc-thanh-toan/',
  },
  {
    label: 'Chính Sách Bảo Mật Thông Tin',
    href: 'https://dayboiparksonhungvuong.com/chinh-sach-bao-mat/',
  },
  {
    label: 'Chính sách đổi trả và hoàn tiền',
    href: 'https://dayboiparksonhungvuong.com/chinh-sach-doi-tra-va-hoan-tien/',
  },
];
