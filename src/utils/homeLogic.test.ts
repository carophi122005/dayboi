import test from 'node:test';
import assert from 'node:assert/strict';
import {
  wrapSlideIndex,
  clampSlideIndex,
  getTestimonialsPerView,
  getBrandsPerView,
  filterSiteContent,
  getOrderedBrands,
} from './homeLogic';
import {
  MAIN_NAV_ITEMS,
  COURSE_ITEMS,
  FEATURED_POSTS,
  TESTIMONIALS,
  BRAND_ITEMS,
  FOOTER_POLICY_LINKS,
} from '../data/siteData';

test('wrapSlideIndex wraps positively and negatively', () => {
  assert.equal(wrapSlideIndex(0, -1, 4), 3);
  assert.equal(wrapSlideIndex(3, 1, 4), 0);
  assert.equal(wrapSlideIndex(1, 2, 4), 3);
  assert.equal(wrapSlideIndex(0, 1, 0), 0);
});

test('clampSlideIndex clamps within bounds', () => {
  assert.equal(clampSlideIndex(0, -1, 3), 0);
  assert.equal(clampSlideIndex(2, 5, 3), 3);
  assert.equal(clampSlideIndex(1, 1, 3), 2);
});

test('responsive items-per-view helpers match Flatsome breakpoints', () => {
  assert.equal(getTestimonialsPerView(1440), 4);
  assert.equal(getTestimonialsPerView(700), 2);
  assert.equal(getTestimonialsPerView(390), 1);

  assert.equal(getBrandsPerView(1440), 5);
  assert.equal(getBrandsPerView(700), 3);
  assert.equal(getBrandsPerView(390), 1);
});

test('filterSiteContent matches courses, accessories, and blog posts', () => {
  const empty = filterSiteContent('   ');
  assert.equal(empty.length, 0);

  const courseMatches = filterSiteContent('ếch');
  assert.equal(courseMatches.some((r) => r.type === 'Khóa học' && r.title === 'Bơi Ếch'), true);

  const accMatches = filterSiteContent('phao');
  assert.equal(accMatches.some((r) => r.type === 'Phụ kiện' && r.title === 'Phao Tập Bơi'), true);

  const postMatches = filterSiteContent('1xbet');
  assert.equal(postMatches.length, 6);
});

test('getOrderedBrands rotates brand items cleanly', () => {
  const rotated = getOrderedBrands(1);
  assert.equal(rotated[0].id, BRAND_ITEMS[1].id);
  assert.equal(rotated[4].id, BRAND_ITEMS[0].id);
});

test('site data matches reference homepage counts and structure', () => {
  assert.equal(MAIN_NAV_ITEMS.length, 6);
  const accessories = MAIN_NAV_ITEMS.find((i) => i.id === 'nav-accessories');
  const blog = MAIN_NAV_ITEMS.find((i) => i.id === 'nav-blog');
  assert.equal(accessories?.children?.length, 10);
  assert.equal(blog?.children?.length, 6);
  assert.equal(COURSE_ITEMS.length, 4);
  assert.equal(FEATURED_POSTS.length, 6);
  assert.equal(TESTIMONIALS.length, 4);
  assert.equal(BRAND_ITEMS.length, 5);
  assert.equal(FOOTER_POLICY_LINKS.length, 5);
});
