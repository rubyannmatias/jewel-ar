import { homeContent } from '../views/landing.ts';
import { multipleContent } from '../views/multiple.ts';
import { singleContent } from '../views/single.ts';

export const landingTitle = 'Welcome to your Virtual Showroom!';
export const landingSubtitle = 'Check out the latest products.';

export const routes: { [key: string]: { name: string, content: string } } = {
  '/': {
    name: 'Home',
    content: homeContent,
  },
  '/multiple': {
    name: 'Multiple Demo',
    content: multipleContent, 
  },
  '/single': {
    name: 'Single Demo',
    content: singleContent, 
  },
};