# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

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
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```
```css
.preview {
    display: flex;
    flex-direction: column;
    background-color: var(--color-blue-900);
    padding: var(--spacing-unit);
    margin: var(--spacing-unit);
    border-radius: var(--border-radius-card);
    gap: var(--spacing-unit);
    max-width: 90%;

    &__img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    &__image-container {
        overflow: hidden;
        position: relative;
        border-radius: var(--border-radius);
        cursor: pointer;
    }

    &__image-container::before {
        content: '';
        background-image: url('../images/icon-view.svg');
        position: absolute;
        background-color: hsl(from var(--color-cyan-400)h s l / 50%);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0;
        transition:opacity var(--animation-time) ease;
    }

    &__image-container:hover::before {
        opacity: 1;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-unit);
        padding-bottom: var(--spacing-unit);
        border-bottom: var(--bottom-line) solid var(--color-blue-800);
    }

    &__title {
        color: var(--color-white);
    }

    &__description,
    &__time-data,
    &__author-info {
        color: var(--color-blue-500);
    }

    &__title:hover,
    &__author-name:hover,
    &__time-data:hover {
        color: var(--color-cyan-400);
        cursor: pointer;
    }

    &__data,
    &__eth,
    &__time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-sm);
    }

    &__eth-data {
        color: var(--color-cyan-400);
    }

    &__author {
        display: flex;
        align-items: center;
        gap: var(--spacing-unit);
    }

    &__avatar {
        width: var(--avatar-size);
        height: var(--avatar-size);
        border: var(--bottom-line) solid var(--color-white);
        border-radius: 50%;
    }

    &__author-name {
        color: var(--color-white);
    }

    @media (min-width: 50rem) {
        width: var(--card-width);
    }
}
```
```js
function App() {
    return (
        <section className='preview'>
            <div className="preview__image-container">
                <img 
                    className='preview__img'
                    src={equilibriumImage}
                    alt='A transparent cube'
                />
            </div>
            <div className='preview__content'>
                <h1 className='preview__title'>
                    {cardData.title}
                </h1>
                <p className='preview__description'>
                    {cardData.description}
                </p>
                <div className='preview__data'>
                    <div className='preview__eth'>
                        <img
                            className='preview__eth-icon'
                            src={ethereum}
                            alt=''
                        />
                        <span className='preview__eth-data'>
                            {cardData.price}
                        </span>
                    </div>
                    <div className='preview__time'>
                        <img
                            className='preview__time-icon'
                            src={clock}
                            alt=''
                        />
                        <span className='preview__time-data'>
                            {cardData.timeRemaining}
                        </span>
                    </div>
                </div>
            </div>
            <div className='preview__author'>
                <img
                    className='preview__avatar'
                    src={avatar}
                    alt='the avatar of Jules Wyvern'
                />
                <span className='preview__author-info'>
                    Creation of &nbsp;
                    <span className='preview__author-name'>
                        {cardData.authorName}
                    </span>
                </span>
            </div>
        </section>
    );
}

export default App;
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
