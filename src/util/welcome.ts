import { landingTitle, landingSubtitle } from './constants';

export const renderWelcome = () => {
  setTimeout(() => {
    const landingTitleArr = landingTitle.split('');
    let index = 0;
    const welcomeInterval = setInterval(() => {
      const h2 = document.querySelector('#landing-div #message h2');
      if (h2) {
        h2.textContent += landingTitleArr[index];
        index++;
        if (index === landingTitleArr.length) {
          clearInterval(welcomeInterval);
        }
      }
    }, 80);
  }, 300);

  setTimeout(() => {
    const landingSubtitleArr = landingSubtitle.split('');
    let index = 0;
    const welcomeInterval = setInterval(() => {
      const p = document.querySelector('#landing-div #message p');
      if (p) {
        p.textContent += landingSubtitleArr[index];
        index++;
        if (index === landingSubtitleArr.length) {
          clearInterval(welcomeInterval);
        }
      }
    }, 80);
  }, 3000);
};
