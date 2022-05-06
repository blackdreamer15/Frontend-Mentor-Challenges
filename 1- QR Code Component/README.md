# Frontend Mentor - QR code component solution

This is my proposed solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).
Frontend Mentor challenges can help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources and Key snippets](#useful-resources-and-key-snippets)
- [Author](#author)


## Overview

### Screenshot

![Mobile Preview](./preview/Screenshot%20(855).png)

![Desktop Preview](./preview/Screenshot%20(856).png)



### Links

- Solution URL: [Click here to check out the solution on Frontend Mentor](https://www.frontendmentor.io/solutions/qr-code-component-project-rJ9h8KLm9)
- Live Site URL: [Click here to preview the site](https://qr-code-component-page.netlify.app/)

## My process
For this challenge, I started by creating a semantic markup of my code and added some content. I moved on to the CSS by declaring some custom properties. I worked with flexbox and manipulated the box model to make the QR Code Component responsive and static on all devices. I then styled it by adding some colours and a convenient font. Finally, I touched on the border-radii.


### Built with

- Semantic HTML5 markup
- Vanilla CSS
- CSS custom properties
- Box Model
- Flexbox


### Useful resource(s) and Key snippets

- [Resource 1](https://www.w3schools.com/css/) - This is one of the amazing resources out there. You can learn a lot about CSS right away. I'd recommend it to anyone still learning this concept.

This are some key portions of my code:

```html
<main class="container">
  <img src="images/image-qr-code.png" alt="QR Code image" class="qr-code-img">
  
  <div class="content">
    <h2>Improve your front-end skills by building projects</h2>
    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>
</main>
```
```css
main.container {
    background-color: var(--white);
    height: 460px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
}
```

## Author

- Linktree - [Jessy Julien](https://www.linktr.ee/jessyjulien_)
- Frontend Mentor - [@blackdreamer15](https://www.frontendmentor.io/profile/blackdreamer15)
- Twitter - [@jessyjulien_](https://www.twitter.com/jessyjulien_)
- Linkedin - [Jessy J. J. Baki](https://www.linkedin.com/in/jessy-justice-julien-baki/)


[![Netlify Status](https://api.netlify.com/api/v1/badges/7f13abc3-5452-4181-b448-d3b0483d6a18/deploy-status)](https://app.netlify.com/sites/qr-code-component-page/deploys)
