# [introduction To HTML](https://www.freecodecamp.org/learn/responsive-web-design-v9/)

w/ freeCodeCamp.org

&nbsp;

- **Separation of concerns** is a design principle where you separate your programs into distinct sections and have each section address a separate concern.

- HTML **attributes** are special words used inside the opening tag of an element to control the element's behavior.

  - The `id` attribute adds a **unique** identifier (`#`) to an HTML element. (`#id`)

  - `class` is best used when you want to apply a set of styles to **many** elements. (`.class`)

&nbsp;

## `<!DOCTYPE html>`

it tells browsers that the document is an `HTML5` document.

- All pages should begin with `<!DOCTYPE html>`.

`Note`: This special string is known as a *declaration* and ensures the browser tries to meet *industry-wide* specifications.

&nbsp;

## Basic HTML Syntax

```html
<element attribute="value">
  inner text
</element>
```
&nbsp;

## Void Elements

Some HTML elements **do not hold any content**, and therefore they **do not require a closing tag**. They are pretty much **self-contained**. Although, some tags do require a **starting tag with attributes** that govern their behaviour.

- Here is an example of an image element which is a void element: `<img>`, `<link>`, `<hr>`, `<br>`


`Note`: While many code formatters like _Prettier_, will choose to include the `/` in void elements (`<img />`), the HTML spec states that the presence of the `/` "does not mark the start tag as self-closing but instead is *unnecessary* and has no effect of any kind".

&nbsp;

## `<main></main>`

The *main* element is used to represent the **main content** of the body of an HTML document.

- Content inside the *main* element should be **unique** to the document and should not be repeated in other parts of the document.

&nbsp;

## `<section></section>`

The *section* element is used to define sections in a document, such as **chapters**, **headers**, **footers**, or any other sections of the document.

- it is a semantic element that helps with *SEO* and *accessibility*.

&nbsp;

## `<div></div>`

The div element is used as a **container** to group other elements that will share a set of CSS *styles*.

- if you wanted to divide up your content into sections, then the `<section></section>` element would be more appropriate than a `div` element.

- The `section` element has semantic meaning over the `div` element which is not *semantic*.

`NOTE`: `<article></article>` elements commonly contain **multiple elements** that have **related information**.

&nbsp;

## `<figure></figure>`

The *figure element* represents self-contained content and will allow you to associate an image with a *caption*.

```html

<figure>
  <img src="image.jpg" alt="A description of the image">
  <figcaption>A cute image</figcaption>
</figure>
```

&nbsp;

## `<blockquote></blockquote>`

Blockquotes are used to indicate a section of text that is a quotation from another source. 

- Browsers typically add indentation(`&nbsp;`) and sometimes *italicize* the text.

  ```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <blockquote>I think, therefore I am. (Rene Descartes)</blockquote>
  <p>Paragraph 3</p>
  ```

&nbsp;

## HTML "entities"

- An HTML entity, or **character reference**, is a set of characters used to represent a **reserved character** in HTML.

  - if you want to write this:

    ```html
    <p>This is an <img /> element</p>
    ```
  - You have to write it like this using HTML "**entities**"

    ```html 
    <p>This is an &lt;img /&gt; element</p>
    ```
  - **Named character references** start with an *ampersand* sign (`&`) and end with a *semicolon* (`;`).
  
    - `&lt;` (&lt;)

    - `&gt;` (&gt;)

    - `&mdash;` (&mdash;)

  - **Decimal numeric references** starts with an *ampersand* sign (`&`) and *hash* symbol (`#`), followed by one or more *decimal digits*, followed by a *semicolon* (`;`).

    - &#60;

      ```html
      &#60;
      ```

    - &#169;

      ```html
      &#169;
      ```

    - &#174;

      ```html
      &#174;
      ```

  - **Hexadecimal numeric reference** starts with an *ampersand* sign (`&`), *hash* symbol (`#`), and the letter `x`. Then it is followed by one or more `ASCII hex` digits and ends with a *semicolon* (`;`).

    - &#x3C;

      ```html
      &#x3C;
      ``` 

    - &#x20AC; 
      
      ```html
      &#x20AC;
      ```

    - &#x03A9;

      ```html
      &#x03A9;
      ``` 

&nbsp;

## Anchor Tags (`<a></a>`) 

in other words, *<u>links</u>*

```html
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```

### `target` attributes

1. `_self`, which is the **default value**. This opens the link in the **current browsing context**. In most cases, this will be the **current tab** or **window**.

2. `_blank`, which opens the link in a **new browsing context**. Typically, this will open in a **new tab**. But some users might configure their browsers to open a **new window** instead.

3. ` _parent`, which opens the link in the **parent of the current context**. For example, if your website has an `iframe`, a `_parent` value in that `iframe` would open in your website's tab/window, **not in the embedded frame**. 

4. `_top`, which opens the link in **the top-most browsing context** - think **"the parent of the parent"**. This is similar to `_parent`, but the link will always open in the full **browser tab/window**, even for nested embedded frames. 

5. `_unfencedTop`, which is currently used for the **experimental FencedFrame API**. At the time of this lesson, you probably won't have a reason to use this one yet.

&nbsp;

### Link States

1. `:link` represents a link which the user has **not visited, clicked, or interacted with yet**. 

2. `:visited` state applies when a user has already **visited the page** being linked to. By default, this turns the link **purple** - but you can leverage *CSS* to provide a different visual indication to the user. 

3. `:hover` state applies when a user is **hovering cursor over a link**. This state is helpful for providing extra **attention** to a link, to ensure a user actually intends to click it.

4. `:focus` state applies when we **focus on a link**. (*Optional*, but helpful for when **navigating the site with keyboard**.)

5. `:active` state applies to links that are being **activated by the user**. This typically means **clicking on the link with the primary mouse button** by left clicking, in most cases. This state can be helpful for showing a user that the element they clicked on is *interactive*. 

&nbsp;

`Note`: When you use these states to style your links, **there is a specific order you need to write your CSS in**: `:link`, `:visited`, `:hover`, `:focus`, then `:active`.

&nbsp;

## Search Engine Optimization (`SEO`) 

A practice that optimizes web pages so they become **more visible** and **rank higher** on **search engines**.

- A short **description**

  ```html
  <meta
  name="description"
  content="Discover expert tips and techniques for gardening in small spaces, choosing the right plants, and maintaining a thriving garden."
  />
  ```

&nbsp;

### Open Graph (`OG`)

The open graph protocol enables you to **control how your website's content appears** across various **social media** platforms, such as Facebook, LinkedIn, and more.

- `og:title`

  ```html
  <meta content="freeCodeCamp.org" property="og:title" />
  ```

- `og:type`

  ```html
  <meta property="og:type" content="website" />
  ```

  - Examples of this content include *articles*, *websites*, *videos*, or *music*.

- `og:image`

  ```html
  <meta
  content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
  property="og:image"
  />
  ```

  - images should be **high quality** with good dimensions and ratios.

- `og:url`

  ```html
  <meta property="og:url" content="https://www.freecodecamp.org" />
  ```

  - **Homepage** URL

There are many more `OG` *properties* that you can set, like `description`, `audio`, `video` and `locale`. However, the open graph `url`, `image`, `type`, and `title` are the most important ones to include.

&nbsp;

## Working w/ Audio & Video

The audio and video elements allow you to **add sound and video content** to your HTML documents. 

- The **audio** element supports popular audio formats like `mp3`, `wav`, and `ogg`. 

  ```html
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3"></audio>
  ```

  If you want to **see the audio player** on the page, then you can add the audio element with the `controls` attribute.

  ```html
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3" controls></audio>
  ```

  `Note`: Some browsers, such as **Safari**, *may not* display a volume control by default even when the controls attribute is present.

  The `loop` attribute is a boolean attribute that makes the audio replay continuously.

  ```html
  <audio
    src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
    loop
    controls
  ></audio>
  ```

  Another attribute you can use is the `muted` attribute. When present in the `audio` element, this boolean attribute will start the audio in a muted state. 

  ```html
  <audio
    src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
    loop
    controls
    muted
  ></audio>
  ```

  When it comes to *audio file types*, there are **differences in which browsers support which type**. To accommodate this, you can use `source` elements inside the `audio` element and the browser will select the first source that it *understands*. 

  ```html
  <audio controls>
    <source src="audio.ogg" type="audio/ogg" />
    <source src="audio.wav" type="audio/wav" />
    <source src="audio.mp3" type="audio/mpeg" />
  </audio>
  ```

  `Note`: The `source` element is a **void element** so it does not have a closing *tag*.

&nbsp;

- The **video** element supports `mp4`, `ogg`, and `webm` formats.

  ```html
  <video
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    loop
    controls
    muted
    width="400"
  ></video>
  ```

  Add the `autoplay` attribute to the opening video tag so the video plays automatically.

  ```html
  <video
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    autoplay
    loop
    controls
    muted
    width="400"
  ></video>
  ```

  If you wanted to display an image while the video is downloading, you can use the `poster` attribute. 

  ```html
  <video
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    loop
    controls
    muted
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    width="400"
  ></video>
  ```

  You can also use the `source` element inside a `video` element, just like you did with the `audio` element. This lets you provide the same video in **multiple formats**, and the browser will choose the first one it can play.

  ```html
  <video
    controls
    width="400"
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  >
    <source
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      type="video/mp4"
    />
    <source
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.webm"
      type="video/webm"
    />
    Your browser does not support the video tag.
  </video>
  ```

  **MIME** (Multipurpose Internet Mail Extensions) is a standard to describe documents in other forms besides ASCII text, for example, audio, video, and images. (`type="video/mp4"`, `type="video/webm"`, `type="video/ogg"`, `type="video/quicktime"`, etc.)

&nbsp;

## Working w/ images & SVGs

There are 3 things to consider while working with images.

1. Size

    A smaller resolution results in a smaller file size. (duh?)

      - ideally, your images should be the **same scale as the rendered size** on the page. 

2. Format 

    - **Raster formats**, i.e, **pixel-based**, with the **data tracking the color value in each pixel**. They **do not** *upscale* well. 

      1. PNG
      2. JPG

    - Modern & Web Optimized Formats

      1. SVG
      2. WEBP
      3. AVIF

3. Compression

    **Lossless** means that the **original data can be perfectly reconstructed** from the compressed data. 
    
    - if you try to compress a `JPG` image, it will result in a degraded quality since it is not lossless. 

&nbsp;

### image Licenses

images are considered **intellectual property**, this means that they are **protected by copyright** regulations, most often belonging to the creator. **By default, images are released as all rights reserved**. The creator, or publisher sometimes, holds all copyright for the image.

- Obtain written **permission** from the copyright holder.

- **Purchase** a license from the copyright holder.

- incorporate the image in a way that falls under **fair use**.

    - Some examples of fair use would be to comment on, or review the art, or create a parody of the image.

#### Permissive Licenses

- Creative Commons license

- BSD license

An image under the **public domain** has no copyright attached to it and is free to be used **without any restrictions**.

- images licensed specifically under the Creative Commons 0 (`CC0`) license are considered *public domain*.

&nbsp;

There are also sites like **Pixabay** and **Unsplash**, which offer `free-to-use` images. 

&nbsp;

`Note`: Always **be mindful of the copyright and licensing** when you use an image in your website.

&nbsp;

### Scalable Vector Graphic (`SVG`)

A vector graphic **tracks data based on paths and equations** to plot *points*, *lines*, and *curves*.

- Can be **scaled to any size** without impacting the quality.

- Generally used for *icons* and *logos*.

&nbsp;

SVGs specifically have the added benefit of storing data in `XML`. This means you can use them directly in your code as raw `HTML` with the `svg` element. It also means you can **programmatically change the attributes** of the image.

```html
<!-- This will display a smily face 🙂 -->
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" stroke="black" stroke-width="4" fill="yellow" />
  <circle cx="35" cy="40" r="5" fill="black" />
  <circle cx="65" cy="40" r="5" fill="black" />
  <path d="M35 65 Q50 80 65 65" stroke="black" stroke-width="4" fill="transparent" />
</svg>
```

Each SVG element has **attributes that control its appearance and position** within the drawing area.

- The `svg` element is the **container for the whole drawing**. It sets up the space where all the shapes appear. Everything you want to draw with SVG, such as *circles*, *lines*, or *paths*, goes inside the svg element.

- The `circle` element is used to **make the face and the eyes**. One large circle forms the yellow face, and two smaller circles make the eyes.

- The `path` element is used to **draw the smile**. It creates a *curved line* for the mouth.

&nbsp;

Here are some more examples of SVGs

```html
<!-- Star Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="gold" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.2L12 17.8L5.7 21.2L7 14.1L2 9.3L9.1 8.6L12 2Z"/>
</svg>

<!-- Heart Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="crimson" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 6 4 4 6.5 4C8 4 9.5 4.8 10.5 6.09C11.5 4.8 13 4 14.5 4C17 4 19 6 19 8.5C19 12.28 15.6 15.36 10.45 20.04L12 21.35Z"/>
</svg>

<!-- Checkmark Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.29 5.71L9 17L3.71 11.71L5.12 10.29L9 14.17L18.88 4.29L20.29 5.71Z"/>
</svg>
```

&nbsp;

`Note`: SVGs allow you to adapt your layout to any **responsive design** you need.

&nbsp;

## Replaced Elements

An element whose **content is determined by an external resource** rather than by CSS itself. 

- `img`

- `iframe`

- `video`

With replaced elements, you can **control** the **position**, or **layout** of an element. But your **CSS cannot directly modify the content** of that element. 

```html
<img src="example-img-url" alt="Descriptive text goes here">
```

`Note`: You can **control how it appears**, but you **cannot modify the image** itself. 

&nbsp;

### inline frame (`iframe`)

it **embeds an external site** on your web page.

- Embedded YouTube Video

  ```html
  <iframe 
    width="400" 
    height="200" 
    src="https://www.youtube.com/embed/ApXoWvfEYVU"
    title="Post Malone, Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse)"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
  ></iframe>
  ```

  - The `allow` attribute lets you define **what an `iframe` can or can't do**. This is called an **allowlist**.

  - items in an **allowlist** can be separated by **semicolons**(`;`) or **spaces**(` `), and **both can be used together**. 

  - `accelerometer` lets the `iframe` use **motion sensors** so it can detect things like device **tilting and rotation**.

  - `clipboard-write` allows the embedded page to **write items to user's clipboard**.

  - `encrypted-media` allows the use of **encrypted media extensions** to protect the video.

  - `gyroscope` allows access to the device’s **motion and orientation** sensors.

  - `web-share` allows sharing the iframe content through the device's **native share dialogs**. 

  - `referrerpolicy` is the rule that determines **how much detail you share** when your page connects to another page. 

- Embedded Map

  ```html
  <iframe
    title="Map of the Royal Observatory, Greenwich, London"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik"
  ></iframe>
  ```

  - You can also replace the url with the site of your choosing. Like, `https://skywalkersam.dev`

The element itself is **replaced with** the external object: **the site**. Your CSS can **change the positioning** of the embedded site, but **you cannot modify the site's contents**. To dive a bit further, if the embedded site has an `h1` element, your CSS would not be able to style that `h1` element. You cannot change the size, font color, and so on.

&nbsp;

### Other Replaced Elements

There are some other replaced elements, such as `video`, and `embed`. And **some elements behave as replaced elements under specific circumstances**. 

- Here's an example of an `input` element with the `type` attribute set to `image`:

  ```html
  <input type="image" alt="Descriptive text goes here" src="example-img-url">
  ```

  - This type of `input` is **considered to be a replaced element**, but other `input` types like `text`, or `email` are **not replaced elements**.

`Note`: if you want to **embed direct HTML within the iframe** element you have to use the `srcdoc` attribute instead of `src`.

&nbsp;

## Semantic HTML

Semantics are the **meaning of words, or phrases**, in a *language*. The semantic meaning of an element refers to **what special information** that element *conveys*.

- Using proper semantic HTML will ensure the best experience for users with **assistive technology** like screen readers.

- Using correct semantic elements can improve your development experience (**DX**).

- Semantic HTML can also improve your search rankings (**SEO**).

&nbsp;

Most elements have **semantic** meaning. The `div` element is one of the very few that **does not**.

- The `header` element for defining the **header of the document, or section**.

- The navigation section element, `nav`, for sections with **navigation links**.

    ```html
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    ```

- The `section` element for **grouping related** information.

- The `figure` element for **illustrations** and **diagrams**.

- The `p` element is for **paragraph** of text.

&nbsp;

## Structural Hierarchy

- There can be only **one** `<h1></h1>` element per page.

- There can be **multiple** `<h2></h2>` elements.

- **Do not** skip from `h1` to `h3` directly.

- **Do not** use `<h1></h1>` to create **larger text** on your page.

  - **Use the correct structural element**, and *style* it with **CSS**. 


```html
<section>
  <h1>freeCodeCamp</h1>
  <h2>Learn Front-End Development</h2>
  <h3>Introduction to HTML</h3>
</section>
```

Finally, depending on how **incorrect** your structure is, your HTML may not even be technically valid. When this happens, **the web browser has to effectively guess what you meant to do**. And what it guesses **might not even be what you want** at all.

&nbsp;

`Note`: Using the **right hierarchy** is important for **accessibility** and **SEO**.

&nbsp;

## Presentational vs. Semantic HTML

**Presentational HTML** focuses on the **appearance** and **style** of the content.

- Used in the **early days of HTML**.

- **Deprecated** and **not recommended** anymore due to their limitations and negative impact on accessibility and maintainability.

  - `center`

    ```html
    <center>
      This text is centered.
      <p>HTML is awesome.</p>
    </center>

    <p>Another example text.</p>
    ```

  - `big`

    ```html
    <p>
      This text has a normal font size.
      <big>This text is larger.</big>
      Some other text.
    </p>
    ```

  - `font` 
    
    ```html
    <font size="7" color="blue">This text is blue and large.</font> 
    ```

&nbsp;

`Note`: While this element **still works**, you should not use it *because* the **font size and color should always be set in CSS**, not in HTML.

&nbsp;

**Semantic HTML** is now **the recommended practice**. It describes the content of the elements, so it's much **easier to read**, **understand**, and **maintain**.

- Semantic HTML **describes the content** structure, while presentational HTML **focuses on the appearance**.

&nbsp;

## `<i></i>` vs `<em></em>`

`i` is used for highlighting **alternative voice** or **mood**, **idiomatic terms** from **another language**, **technical terms**, and **thoughts**.

```html
<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>
```

- it was originally used for **presentational** purposes to display the text in ***italics***.

- The `i` element does not indicate if the text is important or not, it only shows that it's *somehow different from the surrounding text*.

&nbsp;

`em` is used to *emphasize* the **importance** of the text. You should use this element for parts of the text that *require a special emphasis compared to surrounding text*.

```html
<p>
  Never give up on <em>your</em> dreams.
</p>
```

&nbsp;

`Note`: Even if it looks the same when the text was inside the *idiomatic text* element, the *semantic emphasis* element conveys its **meaning** and **importance** behind the scenes.

&nbsp;

`Note #2`: it's important to know that these elements **should not be used for presentational purposes** only. if you need to display the text in italics, but the text *doesn't* have a special purpose, style, or meaning in the paragraph, you should **use CSS instead**.

&nbsp;

## `<b></b>` vs. `<strong></strong>`

The "**bring attention to**" element, `b`, is commonly used to highlight **keywords** in summaries, or product **names** in reviews.

```html
<p>
  We tested several products, including the <b>SuperSound 3000</b> for audio
  quality, the <b>QuickCharge Pro</b> for fast charging, and the
  <b>EcoClean Vacuum</b> for cleaning. The first two performed well, but the
  <b>EcoClean Vacuum</b> did not meet expectations.
</p>
```

&nbsp;

`strong` is a semantic HTML element that *emphasizes* text that is **crucial**, or **urgent**.

- The `strong` element communicates that **sense of urgency**.

- if you need to emphasize the **importance** of the text, you should use the `strong` element instead of the `b` element.

```html
<p>
  <strong>Warning:</strong> This product may cause allergic reactions.
</p>
```

&nbsp;

`Note`: Visually both are very **similar**, because they are both rendered as **bold** by default. But their **meanings** are quite *different*. While the `"bring attention to"` element only draws **attention** to the text, without indicating the higher level of importance, the `strong` element does more than that. it conveys a sense of **importance**, or **urgency**.

&nbsp;

## Description Lists

Description lists are perfect for presenting **terms** and **definitions** in an organized and *easy-to-read* format, like in a glossary, or real dictionary, where you can find **words** with their corresponding **definitions**.

```html
<dl>
  <dt>Flour</dt>
  <dd>2 cups</dd>
  <dt>Sugar</dt>
  <dd>1/2 cup</dd>
  <dt>Vegetable Oil</dt>
  <dd>2 tablespoons</dd>
</dl>
```

- The **description list** element, `dl`, which is the **container** for the entire list. 

- The **description term** element, `dt`, or *title**

- The **description details** element, `dd`, for the description, or **details** associated with that term.

&nbsp;

`Note`: Other use cases for description lists include **product specifications**, **frequently asked questions**, **contact information**, and **metadata**. Essentially, when you have *two* related pieces of information in a **key-value** pair format, where one acts as a *label*, the **key**, and the other acts as *additional related information*, the **value**, you can use a description list.

&nbsp;

## `<blockquote></blockquote>`

The quoted elements are used to **distinguish quoted text from the surrounding content**.

- **Extended** quotations.

- Slightly **indented** text.

- Representing a section **quoted from another source**.

- if the source of the quote has an address, you can cite it with the `cite` **attribute**. The value of this attribute should be a **valid URL**.

  - While this attribute *doesn't* change the presentation of the block quote, it's very *helpful* for giving **screen readers** and **search engines** more information about the quote. 

```html
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
</blockquote>
```

- if you want to start and end the block quote with quotation marks (`" "`), you may need to write them **explicitly** within the text.

&nbsp;

### `<cite></cite>` element

if you want to *attribute the source visually*, you can add a citation element, `cite`, *outside of the block quotation element*. 

- This is **different** from the cite *attribute*.

- it is uses to mark up the **title** of a referenced ***creative work*** like a **book**, article, **song**, **film**, **website**, or **research paper**.

```html
<div>
  <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
  </blockquote>
  <p>—Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book].</cite></p>
</div>
```

&nbsp;

### `<q></q>` (inline quotation)

it is used for **short inline quotations from other sources**.

- Short quotations.

- Quoted text is *part of the paragraph* and it's surrounded by quotation marks (`" "`).

- You can also add a `cite` attribute to *attribute* the source.

```html
<p>
  As Quincy Larson said,
  <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Momentum is everything.
  </q>
</p>
```

&nbsp;

`Note`: You should use `blockquote` for **extended quotations** from other sources and inline quotes (`q`) for **short quotations** from other sources that should be part of existing paragraphs.

&nbsp;

## Abbreviations

An abbreviation is a **shortened form** of a word or phrase. it is used for writing **concise** text.

- Acronyms 

  - Acronyms are pronounced as *words*.

  - An *acronym* is a word formed from the *initial letters of a phrase*, with each letter representing the **first** letter of a word in that phrase.

    - GUI: Graphical User interface


- initialisms

  - initialisms are pronounced as *individual* letters.

    - HTML:  HyperText Markup Language

&nbsp;

### `<abbr></abbr>` (Abbreviation Element)

The abbreviation element is providing helpful **context** behind the scenes, but users will still see the initialism as *normal text*.

```html
<p>
  <abbr>HTML</abbr> is the foundation of the web.
</p>
```

- if you want to help users understand what this initialism *means*, you can *show its full form* with the `title` attribute.

  ```html
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.
  </p>
  ```
  -  The *style* of the abbreviation element will **change** when you add this attribute.
  
  -  When the user *hovers* over the abbreviation, the full form is displayed as a **tooltip**.

  - Use `title` attribute *only* for those that might need **additional context**.

&nbsp;

`Note`: You should always **explain** their full meaning when you use them for the **first** time.

&nbsp;

## `<address></address>` (Address Element)

The *contact address* element is used to represent **contact information** for a section on a web page. The `address` element is *versatile* and can be used for **business** pages, **author** pages, **personal** sites, and more.

- When it comes to building out your website's **contact** sections, you should use the *semantic* `address` element over a *generic* element like a `div`.

```html
<address>
  <h2>Company Name</h2>
  <p>
    1234 Elm Street<br />
    Springfield, IL 62701<br />
    United States
  </p>
  <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
  <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
</address>
```

&nbsp;

`Note`: One of the *downsides* of using a `mailto` link is that users often perceive it as **spam**. *Unfortunately*, a lot of *spammers will use this option to send emails* to users. So just keep that in mind when you're using it.

&nbsp;

## Date & Time

The `time` element is used to represent a specific moment in time.

```html
<p>
  The reservations are for <time datetime="20:00">20:00 </time>
</p>
```

- The `datetime` attribute is used to *translate* dates and times into a **machine-readable** format.

- Aids *SEO* & browser effectiveness.

- The **value** for the `datetime` attribute must be either a *valid* **year**, valid **month**, valid **time**, local date, global **date**, or **valid duration** *string*.

  ```html
  <p>
    The graduation will be on <time datetime="2024-06-15T15:00">June 15</time>
  </p>
  ```

  - The value for the `datetime` attribute is in the `ISO 8601` format. ISO 8601 is an **international standard** to represent **dates** and **times**.

  - The **first** part of that **value** is the **year, month and day**. 

  - The capital `T` in the value is a **separator** between the date and time.

&nbsp;

`Note`: Whenever you need to *represent* **events**, publication **dates**, or **appointments**, it is best to use the `time` element.

&nbsp;

## 







&nbsp;


&nbsp;
