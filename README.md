# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

HELLO MY NAME IS JESUS LOPEZ AND THIS IS MY COMPLETED PROJECT :)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop](/dist/images/Sunnyside-Desktop.jpg)
![Mobile](/dist/images/Sunnyside-Mobile.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Scss
- JavaScript

### What I learned

I learned A LOT during this challenge. This is the first Junior Level challenge I've done (pretty nervous about it), and I got to say, it wasn't easy.

One of the first things that I learned was how to implement scss into my work. It has proven to be very helpful and see how it can potentially help me in the future. I'm confident in saying I'll keep using it and keep learing how to use the many properties that it has.

Another thing, that is small, but honestly didn't think I'd stobble upon, was the linking of certain part of my page through a links. So helpful, I'll defenitly use them in the future as well

Example : 
```html
<a href="#num1" class="menu_items">About</a>
```

Something very challenging and confusing to me at the beginning of the project was the implementation of buttons. I learned how to set up buttons and to make actions through JS. It took me a big while to figure it out lol. 

```js
document.querySelectorAll('#btn').forEach(item => {
    item.addEventListener('click', event => {
      console.log('clicked');
      item.nextElementSibling.classList.toggle('open');
    });
  });
};
```

### Continued development

Areas where I could CERTAINTLY develop on are JS and understanding CSS properties more in depth such as margin and flex-box. So if you notice any issue or have any advice on those topics I'll certaintly appreciate it. 

## Author

- GitHub - [Jesus Lopez](https://www.your-site.com)
- Frontend Mentor - [@tayk6ix](https://www.frontendmentor.io/profile/tayk6ix)

## Acknowledgments

I got to give a big thanks to FrontEndMentor for giving this cool and practical challenges that have been the main source of my learning in HTML, CSS and JS. P.S. I don't know how I would learn without these, thank you😊. 