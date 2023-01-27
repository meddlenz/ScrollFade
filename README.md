# ScrollFade

ScrollFade is used to fade elements in and out of view while scrolling through a page.
Tag any elements you want to fade with the class `scrollFade` and add the following CSS attributes and JS to your website:

Vist [here](https://stark-kouprey.cloudvent.net/) for an example, or download this repository.

Feel free to add a PR for improvements

### CSS
```css
.scrollFade {
  opacity: 1;
  pointer-events: all;
}

.scrollFade--hidden {
  opacity: 0;
  pointer-events: none;
}

.scrollFade--visible {
  opacity: 1;
  pointer-events: all;
}

.scrollFade--animate {
  transition: opacity 0.4s ease-in-out;
}
```

### SCSS
```scss
.scrollFade {
  opacity: 1;
  pointer-events: all;

  &--hidden {
    opacity: 0;
    pointer-events: none;
  }

  &--visible {
    opacity: 1;
    pointer-events: all;
  }

  &--animate {
    transition: opacity 0.4s ease-in-out;
  }
}
```

### JavaScript
```js
const fadeElements = document.getElementsByClassName('scrollFade');

const scrollFade = () => {
  const viewportBottom = window.scrollY + window.innerHeight;

  for (let index = 0; index < fadeElements.length; index++) {
    const element = fadeElements[index];
    const rect = element.getBoundingClientRect();

    const elementFourth = rect.height/4;
    const fadeInPoint = window.innerHeight - elementFourth;
    const fadeOutPoint = -(rect.height/2);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', () => {
  scrollFade();
});
```
