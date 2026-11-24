import {
  BRAND_ITEMS,
  COURSE_ITEMS,
  FEATURED_POSTS,
  MAIN_NAV_ITEMS,
} from '../data/siteData';

export function wrapSlideIndex(currentIndex: number, delta: number, total: number): number {
  if (total <= 0) return 0;
  return (((currentIndex + delta) % total) + total) % total;
}

export function clampSlideIndex(currentIndex: number, delta: number, maxIndex: number): number {
  if (maxIndex <= 0) return 0;
  return Math.max(0, Math.min(maxIndex, currentIndex + delta));
}

export function getTestimonialsPerView(viewportWidth: number): number {
  if (viewportWidth >= 850) return 4;
  if (viewportWidth >= 550) return 2;
  return 1;
}

export function getBrandsPerView(viewportWidth: number): number {
  if (viewportWidth >= 850) return 5;
  if (viewportWidth >= 550) return 3;
  return 1;
}

export interface SearchResultItem {
  type: 'Khóa học' | 'Phụ kiện' | 'Bài viết';
  title: string;
  href: string;
}

export function filterSiteContent(query: string): SearchResultItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const results: SearchResultItem[] = [];

  for (const course of COURSE_ITEMS) {
    if (course.title.toLowerCase().includes(normalized)) {
      results.push({ type: 'Khóa học', title: course.title, href: course.href });
    }
  }

  const accessories = MAIN_NAV_ITEMS.find((item) => item.id === 'nav-accessories')?.children ?? [];
  for (const acc of accessories) {
    if (acc.label.toLowerCase().includes(normalized)) {
      results.push({ type: 'Phụ kiện', title: acc.label, href: acc.href });
    }
  }

  for (const post of FEATURED_POSTS) {
    if (
      post.title.toLowerCase().includes(normalized) ||
      post.excerpt.toLowerCase().includes(normalized)
    ) {
      results.push({ type: 'Bài viết', title: post.title, href: post.href });
    }
  }

  return results;
}

export function getOrderedBrands(startIndex: number) {
  const total = BRAND_ITEMS.length;
  const safeStart = wrapSlideIndex(startIndex, 0, total);
  return Array.from({ length: total }, (_, idx) => BRAND_ITEMS[(safeStart + idx) % total]);
}
