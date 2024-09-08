import { customInput } from '../views/landing';
import { landingTitle, landingSubtitle } from './constants';
import { goToRoute } from './navigation';

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

  setTimeout(() => {
    const getStartedBtn = document.querySelector('#landing-div #message #getStartedBtn');
    if (getStartedBtn) {
      const appendCustomInput = () => {
        const div = document.createElement('div');
        div.id = 'customInput';
        div.innerHTML = customInput;
        getStartedBtn.parentElement?.appendChild(div);
        (getStartedBtn as HTMLElement).style.visibility = 'hidden';
        getStartedBtn.removeEventListener('click', appendCustomInput)

        const customInputBtn = document.querySelector(
          '#landing-div #message #customInput #customInputBtn'
        ) as HTMLButtonElement;

        customInputBtn.addEventListener('click', (e: MouseEvent) => {
          const customInputFields = document.querySelectorAll(
            '#landing-div #message #customInput .custom-input-field'
          );

          const customInputValues = Array.from(customInputFields).map((field) => {
            return { name: (field as HTMLInputElement).name, value: (field as HTMLInputElement).value };
          });

          const hasNoEmpty = customInputValues.every((field) => {return field.value !== ''});          
          const hasValidUrls = customInputValues.slice(0, 2).every((field) => 
            // eslint-why regex
            // eslint-disable-next-line no-useless-escape
            {return (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g).test(field.value)}
          );

          if (hasNoEmpty && hasValidUrls) {
            goToRoute(e, customInputValues);
          } else {
            const validationWarning = document.querySelector('#landing-div #message #customInput #validationWarning');
            if (validationWarning) {
              validationWarning.textContent = 'Please fill out all fields and use valid URLs.';
            }
          }

        });
      };

      getStartedBtn.addEventListener('click', appendCustomInput);
    }
  }, 300);
};
