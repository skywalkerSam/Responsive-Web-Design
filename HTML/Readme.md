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

`Note`: This special string is known as a _declaration_ and ensures the browser tries to meet _industry-wide_ specifications.

&nbsp;

## Basic HTML Syntax

```html
<element attribute="value"> inner text </element>
```

&nbsp;

## Void Elements

Some HTML elements **do not hold any content**, and therefore they **do not require a closing tag**. They are pretty much **self-contained**. Although, some tags do require a **starting tag with attributes** that govern their behaviour.

- Here is an example of an image element which is a void element: `<img>`, `<link>`, `<hr>`, `<br>`

`Note`: While many code formatters like _Prettier_, will choose to include the `/` in void elements (`<img />`), the HTML spec states that the presence of the `/` "does not mark the start tag as self-closing but instead is _unnecessary_ and has no effect of any kind".

&nbsp;

## `<main></main>`

The _main_ element is used to represent the **main content** of the body of an HTML document.

- Content inside the _main_ element should be **unique** to the document and should not be repeated in other parts of the document.

&nbsp;

## `<section></section>`

The _section_ element is used to define sections in a document, such as **chapters**, **headers**, **footers**, or any other sections of the document.

- it is a semantic element that helps with _SEO_ and _accessibility_.

&nbsp;

## `<div></div>`

The div element is used as a **container** to group other elements that will share a set of CSS _styles_.

- if you wanted to divide up your content into sections, then the `<section></section>` element would be more appropriate than a `div` element.

- The `section` element has semantic meaning over the `div` element which is not _semantic_.

`NOTE`: `<article></article>` elements commonly contain **multiple elements** that have **related information**.

&nbsp;

## `<figure></figure>`

The _figure element_ represents self-contained content and will allow you to associate an image with a _caption_.

```html
<figure>
  <img src="image.jpg" alt="A description of the image" />
  <figcaption>A cute image</figcaption>
</figure>
```

&nbsp;

## `<blockquote></blockquote>`

Blockquotes are used to indicate a section of text that is a quotation from another source.

- Browsers typically add indentation(`&nbsp;`) and sometimes _italicize_ the text.

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

  - **Named character references** start with an _ampersand_ sign (`&`) and end with a _semicolon_ (`;`).
    - `&lt;` (&lt;)

    - `&gt;` (&gt;)

    - `&mdash;` (&mdash;)

  - **Decimal numeric references** starts with an _ampersand_ sign (`&`) and _hash_ symbol (`#`), followed by one or more _decimal digits_, followed by a _semicolon_ (`;`).
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

  - **Hexadecimal numeric reference** starts with an _ampersand_ sign (`&`), _hash_ symbol (`#`), and the letter `x`. Then it is followed by one or more `ASCII hex` digits and ends with a _semicolon_ (`;`).
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

in other words, _<u>links</u>_

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

2. `:visited` state applies when a user has already **visited the page** being linked to. By default, this turns the link **purple** - but you can leverage _CSS_ to provide a different visual indication to the user.

3. `:hover` state applies when a user is **hovering cursor over a link**. This state is helpful for providing extra **attention** to a link, to ensure a user actually intends to click it.

4. `:focus` state applies when we **focus on a link**. (_Optional_, but helpful for when **navigating the site with keyboard**.)

5. `:active` state applies to links that are being **activated by the user**. This typically means **clicking on the link with the primary mouse button** by left clicking, in most cases. This state can be helpful for showing a user that the element they clicked on is _interactive_.

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

  - Examples of this content include _articles_, _websites_, _videos_, or _music_.

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

There are many more `OG` _properties_ that you can set, like `description`, `audio`, `video` and `locale`. However, the open graph `url`, `image`, `type`, and `title` are the most important ones to include.

&nbsp;

## Working w/ Audio & Video

The audio and video elements allow you to **add sound and video content** to your HTML documents.

- The **audio** element supports popular audio formats like `mp3`, `wav`, and `ogg`.

  ```html
  <audio
    src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3"
  ></audio>
  ```

  If you want to **see the audio player** on the page, then you can add the audio element with the `controls` attribute.

  ```html
  <audio
    src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3"
    controls
  ></audio>
  ```

  `Note`: Some browsers, such as **Safari**, _may not_ display a volume control by default even when the controls attribute is present.

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

  When it comes to _audio file types_, there are **differences in which browsers support which type**. To accommodate this, you can use `source` elements inside the `audio` element and the browser will select the first source that it _understands_.

  ```html
  <audio controls>
    <source src="audio.ogg" type="audio/ogg" />
    <source src="audio.wav" type="audio/wav" />
    <source src="audio.mp3" type="audio/mpeg" />
  </audio>
  ```

  `Note`: The `source` element is a **void element** so it does not have a closing _tag_.

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
   - **Raster formats**, i.e, **pixel-based**, with the **data tracking the color value in each pixel**. They **do not** _upscale_ well.
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

- images licensed specifically under the Creative Commons 0 (`CC0`) license are considered _public domain_.

&nbsp;

There are also sites like **Pixabay** and **Unsplash**, which offer `free-to-use` images.

&nbsp;

`Note`: Always **be mindful of the copyright and licensing** when you use an image in your website.

&nbsp;

### Scalable Vector Graphic (`SVG`)

A vector graphic **tracks data based on paths and equations** to plot _points_, _lines_, and _curves_.

- Can be **scaled to any size** without impacting the quality.

- Generally used for _icons_ and _logos_.

&nbsp;

SVGs specifically have the added benefit of storing data in `XML`. This means you can use them directly in your code as raw `HTML` with the `svg` element. It also means you can **programmatically change the attributes** of the image.

```html
<!-- This will display a smily face 🙂 -->
<svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="50"
    cy="50"
    r="45"
    stroke="black"
    stroke-width="4"
    fill="yellow"
  />
  <circle cx="35" cy="40" r="5" fill="black" />
  <circle cx="65" cy="40" r="5" fill="black" />
  <path
    d="M35 65 Q50 80 65 65"
    stroke="black"
    stroke-width="4"
    fill="transparent"
  />
</svg>
```

Each SVG element has **attributes that control its appearance and position** within the drawing area.

- The `svg` element is the **container for the whole drawing**. It sets up the space where all the shapes appear. Everything you want to draw with SVG, such as _circles_, _lines_, or _paths_, goes inside the svg element.

- The `circle` element is used to **make the face and the eyes**. One large circle forms the yellow face, and two smaller circles make the eyes.

- The `path` element is used to **draw the smile**. It creates a _curved line_ for the mouth.

&nbsp;

Here are some more examples of SVGs

```html
<!-- Star Icon -->
<svg
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="gold"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.2L12 17.8L5.7 21.2L7 14.1L2 9.3L9.1 8.6L12 2Z"
  />
</svg>

<!-- Heart Icon -->
<svg
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="crimson"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 6 4 4 6.5 4C8 4 9.5 4.8 10.5 6.09C11.5 4.8 13 4 14.5 4C17 4 19 6 19 8.5C19 12.28 15.6 15.36 10.45 20.04L12 21.35Z"
  />
</svg>

<!-- Checkmark Icon -->
<svg
  width="50"
  height="50"
  viewBox="0 0 24 24"
  fill="green"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M20.29 5.71L9 17L3.71 11.71L5.12 10.29L9 14.17L18.88 4.29L20.29 5.71Z"
  />
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
<img src="example-img-url" alt="Descriptive text goes here" />
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
  <input type="image" alt="Descriptive text goes here" src="example-img-url" />
  ```

  - This type of `input` is **considered to be a replaced element**, but other `input` types like `text`, or `email` are **not replaced elements**.

`Note`: if you want to **embed direct HTML within the iframe** element you have to use the `srcdoc` attribute instead of `src`.

&nbsp;

## Semantic HTML

Semantics are the **meaning of words, or phrases**, in a _language_. The semantic meaning of an element refers to **what special information** that element _conveys_.

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

Depending on how **incorrect** your structure is, your HTML may not even be technically valid. When this happens, **the web browser has to effectively guess what you meant to do**. And what it guesses **might not even be what you want** at all.

&nbsp;

## Use Proper Heading Structure

**Proper use of headings creates a visual hierarchy** for users to navigate and understand your web page.

- Using a logical heading hierarchy **allows screen reader users to understand the structure of your content and navigate the content** quickly.
  - **Screen readers can list all headings on a page**, allowing users to jump directly to the sections they need.

- Creating appropriate heading text that accurately describes the content that follows **helps everyone find the information they need** on your site.
  - it also **helps users with keyboard jump between sections without the need to `TAB` through every link**.

- As an additional benefit, well-formed headings **may also improve the SEO** of your site.

&nbsp;

**Think of headings as the foundation of your site**. Without a good foundation, the accessibility of your content will _suffer_.

- People with _partial sight_ or _cognitive disabilities_ need to process information _quickly_ and _easily_ to **reduce cognitive load**.

&nbsp;

While proper arrangement of headings is important, **it is also necessary to make heading texts clear and descriptive**.

- Use headings in a hierarchy that **reflects clear organization**.
  - The **page title** should be an `h1`

  - **Major sections** should be introduced with `h2` headings

  - **Sub-sections** with `h3`, and so on, down to h6.

- **Each page should have a single `h1` element** representing the main topic or title.

- **Don't skip from h1 to h3**, or from h2 to h4, and so on.

- **Use clear and descriptive text** that summarizes the content that follows each heading.

- **Don't use a heading in isolation**; some content must follow the heading.

- **Use appropriate headings where necessary instead of formatting text to look like headings**.

```html
<!-- Page title -->
<h1>What is HTML</h1>

<!-- First section -->
<section>
  <h2>Introduction to HTML</h2>
  <p>
    HTML stands for HyperText Markup Language. It is the standard language for
    creating web pages.
  </p>
</section>
<!-- Second section -->
<section>
  <h2>History of HTML</h2>
  <p>HTML began to take shape in the early 90s</p>
  <h3>Origins</h3>
  <p>
    HTML was created by Tim Berners-Lee in 1991. It has evolved significantly
    over the years.
  </p>
</section>
```

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

`Note`: While this element **still works**, you should not use it _because_ the **font size and color should always be set in CSS**, not in HTML.

&nbsp;

**Semantic HTML** is now **the recommended practice**. It describes the content of the elements, so it's much **easier to read**, **understand**, and **maintain**.

- Semantic HTML **describes the content** structure, while presentational HTML **focuses on the appearance**.

&nbsp;

## `<i></i>` vs `<em></em>`

`i` is used for highlighting **alternative voice** or **mood**, **idiomatic terms** from **another language**, **technical terms**, and **thoughts**.

```html
<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>
```

- it was originally used for **presentational** purposes to display the text in **_italics_**.

- The `i` element does not indicate if the text is important or not, it only shows that it's _somehow different from the surrounding text_.

&nbsp;

`em` is used to _emphasize_ the **importance** of the text. You should use this element for parts of the text that _require a special emphasis compared to surrounding text_.

```html
<p>Never give up on <em>your</em> dreams.</p>
```

&nbsp;

`Note`: Even if it looks the same when the text was inside the _idiomatic text_ element, the _semantic emphasis_ element conveys its **meaning** and **importance** behind the scenes.

&nbsp;

`Note #2`: it's important to know that these elements **should not be used for presentational purposes** only. if you need to display the text in italics, but the text _doesn't_ have a special purpose, style, or meaning in the paragraph, you should **use CSS instead**.

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

`strong` is a semantic HTML element that _emphasizes_ text that is **crucial**, or **urgent**.

- The `strong` element communicates that **sense of urgency**.

- if you need to emphasize the **importance** of the text, you should use the `strong` element instead of the `b` element.

```html
<p><strong>Warning:</strong> This product may cause allergic reactions.</p>
```

&nbsp;

`Note`: Visually both are very **similar**, because they are both rendered as **bold** by default. But their **meanings** are quite _different_. While the `"bring attention to"` element only draws **attention** to the text, without indicating the higher level of importance, the `strong` element does more than that. it conveys a sense of **importance**, or **urgency**.

&nbsp;

## Description Lists

Description lists are perfect for presenting **terms** and **definitions** in an organized and _easy-to-read_ format, like in a glossary, or real dictionary, where you can find **words** with their corresponding **definitions**.

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

- The **description term** element, `dt`, or \*title\*\*

- The **description details** element, `dd`, for the description, or **details** associated with that term.

&nbsp;

`Note`: Other use cases for description lists include **product specifications**, **frequently asked questions**, **contact information**, and **metadata**. Essentially, when you have _two_ related pieces of information in a **key-value** pair format, where one acts as a _label_, the **key**, and the other acts as _additional related information_, the **value**, you can use a description list.

&nbsp;

## `<blockquote></blockquote>`

The quoted elements are used to **distinguish quoted text from the surrounding content**.

- **Extended** quotations.

- Slightly **indented** text.

- Representing a section **quoted from another source**.

- if the source of the quote has an address, you can cite it with the `cite` **attribute**. The value of this attribute should be a **valid URL**.
  - While this attribute _doesn't_ change the presentation of the block quote, it's very _helpful_ for giving **screen readers** and **search engines** more information about the quote.

```html
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have
  built software systems that people rely upon?"
</blockquote>
```

- if you want to start and end the block quote with quotation marks (`" "`), you may need to write them **explicitly** within the text.

&nbsp;

### `<cite></cite>` element

if you want to _attribute the source visually_, you can add a citation element, `cite`, _outside of the block quotation element_.

- This is **different** from the cite _attribute_.

- it is uses to mark up the **title** of a referenced **_creative work_** like a **book**, article, **song**, **film**, **website**, or **research paper**.

```html
<div>
  <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Can you imagine what it would be like to be a successful developer? To have
    built software systems that people rely upon?
  </blockquote>
  <p>
    —Quincy Larson,
    <cite>How to Learn to Code and Get a Developer Job [Full Book].</cite>
  </p>
</div>
```

&nbsp;

### `<q></q>` (inline quotation)

it is used for **short inline quotations from other sources**.

- Short quotations.

- Quoted text is _part of the paragraph_ and it's surrounded by quotation marks (`" "`).

- You can also add a `cite` attribute to _attribute_ the source.

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
  - Acronyms are pronounced as _words_.

  - An _acronym_ is a word formed from the _initial letters of a phrase_, with each letter representing the **first** letter of a word in that phrase.
    - GUI: Graphical User interface

- initialisms
  - initialisms are pronounced as _individual_ letters.
    - HTML: HyperText Markup Language

&nbsp;

### `<abbr></abbr>` (Abbreviation Element)

The abbreviation element is providing helpful **context** behind the scenes, but users will still see the initialism as _normal text_.

```html
<p><abbr>HTML</abbr> is the foundation of the web.</p>
```

- if you want to help users understand what this initialism _means_, you can _show its full form_ with the `title` attribute.

  ```html
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the
    web.
  </p>
  ```

  - The _style_ of the abbreviation element will **change** when you add this attribute.
  - When the user _hovers_ over the abbreviation, the full form is displayed as a **tooltip**.

  - Use `title` attribute _only_ for those that might need **additional context**.

&nbsp;

`Note`: You should always **explain** their full meaning when you use them for the **first** time.

&nbsp;

## `<address></address>` (Address Element)

The _contact address_ element is used to represent **contact information** for a section on a web page. The `address` element is _versatile_ and can be used for **business** pages, **author** pages, **personal** sites, and more.

- When it comes to building out your website's **contact** sections, you should use the _semantic_ `address` element over a _generic_ element like a `div`.

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

`Note`: One of the _downsides_ of using a `mailto` link is that users often perceive it as **spam**. _Unfortunately_, a lot of _spammers will use this option to send emails_ to users. So just keep that in mind when you're using it.

&nbsp;

## Date & Time

The `time` element is used to represent a specific moment in time.

```html
<p>The reservations are for <time datetime="20:00">20:00 </time></p>
```

- The `datetime` attribute is used to _translate_ dates and times into a **machine-readable** format.

- Aids _SEO_ & browser effectiveness.

- The **value** for the `datetime` attribute must be either a _valid_ **year**, valid **month**, valid **time**, local date, global **date**, or **valid duration** _string_.

  ```html
  <p>
    The graduation will be on <time datetime="2024-06-15T15:00">June 15</time>
  </p>
  ```

  - The value for the `datetime` attribute is in the `ISO 8601` format. ISO 8601 is an **international standard** to represent **dates** and **times**.

  - The **first** part of that **value** is the **year, month and day**.

  - The capital `T` in the value is a **separator** between the date and time.

&nbsp;

`Note`: Whenever you need to _represent_ **events**, publication **dates**, or **appointments**, it is best to use the `time` element.

&nbsp;

## Mathematical Equations & Chemical Formulas

### Superscript Element

The **superscript element** is used to display a piece of text as a superscript.

```html
<p>2<sup>2</sup> (2 squared) is 4.</p>
```

- A superscript is a symbol or letter printed **above the normal line of text**.

&nbsp;

### Subscript Element

To represent chemical equations inside HTML, one would use the **subscript element**.

```html
<p>CO<sub>2</sub></p>
```

- This element uses a subscript which displays a **lowered baseline** using smaller text.

&nbsp;

`Note`: These elements should **only** be used for **typographical** reasons. Use CSS for styling.

&nbsp;

## The Code Element

### inline code element

The inline code element is used to represent **short snippets of code** inside text.

```html
<p>
  To set the text color to blue in CSS, use the following code:
  <code>color: blue;</code>
</p>
```

- For technical articles and documentation pages.

- The code element is meant to represent a **single line of code**.

&nbsp;

### Multi-line code

if you want to represent multiple lines of code, you will need to place a `code` element **inside a preformatted text** element.

```html
<pre>
  <code>
    body {
      color: red;
    }
  </code>
</pre>
```

- When using the `pre` element, you will need to be mindful of spacing because it will **display exactly as written** inside the HTML document.

&nbsp;

`Note`: When it comes to including code examples inside your HTML document, you should use the `code` element for **short inline** examples. if you need to display **longer code** snippets, then you will need to use the `pre` and `code` elements. The default formatting for code elements is **monospaced** font.

&nbsp;

## U, S, and Ruby Elements

### Unarticulated Annotation

The unarticulated annotation element, or `u` element for short, is used to represent **inline text** that has **non-textual annotation** applied.

```html
<p>
  You can use the unarticulated annotation element to highlight
  <u>inccccort</u> <u>spling</u> <u>issses</u>.
</p>
```

- The default styling for the `u` element is a **black underline underneath** the text.

&nbsp;

### Strikethrough Element

The strikethrough element, or `s` element for short, should be used to represent when text is **no longer accurate or relevant**.

```html
<p><s>Tomorrow's hike will be meeting at noon.</s></p>

<p>Due to unforeseen weather conditions, the hike has been canceled.</p>
```

&nbsp;

`Note`: The `s` element should **never** be used **just to show changes** to a document. More appropriate elements in that case would be the **deleted text** element and the **inserted text** element.

&nbsp;

### Ruby Element

The `ruby` element represents **small text shown above or below** the main text. it is typically used to show the **pronunciation** of East Asian characters.

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

- The `rp` element, or **ruby fallback parenthesis** element, is used as a fallback for browsers lacking support for displaying ruby annotations.

- The `rt` element, or **ruby text** element, is used to indicate text for the ruby annotation. This text is usually used for **pronunciation**, or **translation** details in East Asian typography.

&nbsp;

## Forms

The `form` element in HTML is used to **gather user information**, such as names and email addresses.

```html
<form method="value-goes-here" action="url-goes-here">
  <fieldset>
    <!-- inputs go inside here-->
  </fieldset>
</form>
```

- The `action` attribute is used to specify where the form data should be sent when the form is submitted.

- The `method` attribute is used to specify the HTTP method to use when sending the form data. The most common methods are `GET` and `POST`.

### `input` Element

To **collect specific information**, like names and email addresses.

```html
<form action="">
  <input type="text" />
</form>
```

- input elements are **void elements** and do not have closing tags.

- The `type` attribute defines the **data type expected** from the user.

### `label` Element

To add a _label_ for the `input`.

Labels help people with _disabilities_, make forms more user-friendly for everyone, and ultimately improve form conversion rates.

- Screen readers often rely on _labels_ to describe the purpose of input fields.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

- By nesting an `input` inside a `label` element, you create an **implicit association** between the label and the input field. The term "implicit" refers to something that is understood or inferred without needing to be explicitly stated or defined with additional attributes or elements.

### Explicit Association

To **explicitly** associate a `label` with an `input`, you can use the `for` attribute.

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>
```

- When using an explicit association, the values for the `for` attribute and `id` need to be the **same**.

### `placeholder` Attribute

To show **additional hint** to the users about the expected input.

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" placeholder="example@email.com" />
</form>
```

- it should be a short text to show the **format** and the type of data expected.

&nbsp;

## Button Element

The button element is used to **perform a particular action** when it is activated. Like, submitting a form, showing a modal, or toggling a side menu open and closed.

```html
<button>Start Game</button>
```

- The `type` attribute which controls the **behavior** of the button when it is activated.

  ```html
  <button type="button">Show Alert</button>
  ```

- `type="submit"`

  ```html
  <form action="">
    <label for="email">Email address:</label>
    <input type="email" id="email" name="email" />
    <button type="submit">Submit form</button>
  </form>
  ```

- `type="reset"`

  ```html
  <form action="">
    <label for="email">Email address:</label>
    <input type="email" id="email" name="email" />
    <button type="reset">Reset form</button>
    <button type="submit">Submit form</button>
  </form>
  ```

### `input` Element Button

The `input` element also has a `type` attribute with the possible values of `submit`, `reset`, and `button`.

```html
<input class="start-btn" type="button" value="Start Game" />
```

- The `value` attribute is used to show the button text.

- `input` elements are **void** elements, which means they **cannot have child nodes**, such as text, and can only have a start tag.

&nbsp;

## Client-Side Form Validation

HTML form controls, like inputs, have a lot of **built-in validation** that you can use to check for invalid data.

- The term "client-side" refers to **everything that happens on the user's computer or device**, like the part of a website or app you interact with directly. This includes the **layout**, **design**, and any **interactive features**.

- The term "server-side" refers to **everything that happens on the server, the computer, or system, that hosts the website or app**. This includes **processing data**, **running applications**, and **handling requests** that come from the user's device.

### `required` Attribute

The `required` attribute specifies that the user needs to fill out that portion of the form before it gets submitted.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input required type="email" name="email" id="email" />
  <button type="submit">Submit Form</button>
</form>
```

### `minlength` & `maxlength` Attributes

The `minlength` and `maxlength` attributes are used to set the minimum and maximum length in characters.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input
    required
    type="email"
    name="email"
    id="email"
    minlength="4"
    maxlength="64"
  />
  <button type="submit">Submit Form</button>
</form>
```

&nbsp;

`Note`: While client-side validation is important, **you also need server-side validation** for added security. Malicious users can bypass client-side checks, so robust server-side measures are essential.

&nbsp;

## Form States

In HTML, form controls, like inputs, can be in different stages or conditions like a `focused` state, `readonly` state, or `disabled` state.

```html
<input type="email" name="email" id="email" />
```

- The `default` state of an email address input is a **blank input**.

- When the user _clicks_ on a form control or _selects_ it with the keyboard's `tab` key, then that means it is in the `focused` state. When an input is in the `focused` state, most browsers will show a blue **highlighted border around the input**.
  - But you can choose to add additional styles in _CSS_.

- Another form state is the `disabled` state. This state shows users that an **input cannot be focused or activated**.

  ```html
  <input disabled type="email" name="email" id="email" />
  ```

  - You can choose to add additional styles for the disabled state using _CSS_.

- `readonly` state is when a form control, like an input, is **not editable by the user**.

  ```html
  <input
    readonly
    type="email"
    name="email"
    id="email"
    value="example@email.com"
  />
  ```

  - The `value` attribute is used to set the value shown inside the input field.

  - A key _difference_ between the `disabled` state and `readonly` state is that readonly can be **focused** while the disabled state _cannot_.

&nbsp;

## Radio Buttons

Radio buttons are used to **select one option from a list** of options.

```html
<input type="radio" id="yes" name="first-time" value="yes" />
<label for="yes">Yes</label>
<input type="radio" id="no" name="first-time" value="no" />
<label for="no">No</label>
```

- The radio buttons are grouped together by using the same `name` attribute value.

&nbsp;

## Checkboxes

Checkboxes are used to **select multiple options from a list**.

```html
<fieldset>
  <legend>Food Options</legend>
  <input type="checkbox" id="pizza" name="food" value="pizza" />
  <label for="pizza">Pizza</label>
  <input type="checkbox" id="burger" name="food" value="burger" />
  <label for="burger">Burger</label>
</fieldset>
```

- The `value` attribute is used to specify the value that will be **sent to the server** when the form is submitted.

- To make a checkbox input checked by default, you can add the `checked` attribute.

&nbsp;

## Dropdown Menu

`select` and `option` elements are used to make selections from a dropdown menu.

```html
<label for="city">Choose a City: </label>
<select id="city" name="city">
  <option value="new-york">New York</option>
  <option value="los-angeles">Los Angeles</option>
  <option selected value="chicago">Chicago</option>
  <option value="miami">Miami</option>
</select>
```

- To make an `option` selected by **default**, you can add the `selected` attribute to the `option` element you want to be selected.

&nbsp;

## Textarea

The `textarea` element is a **multi-line text input** control that allows users to enter text that is longer than a single line. it can be used to create a **comment box**, a **message input**, or other text input that requires multiple lines.

```html
<textarea id="comments" name="comments" rows="4" cols="50"></textarea>
```

- The `rows` attribute is used to specify the visible **height** of the textarea

- The `cols` attribute is used to specify the visible **width** of the textarea.

&nbsp;

## Tables

HTML tables aren't used as much these days as they _used to be_. But, as a front-end developer, you should still be familiar with them. Tables are **one of the earliest ways devs had for displaying data** in a browser way back in the 1990s.

```html
<table>
  <caption>
    Calculus Final Exam Grades
  </caption>
  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr></tr>
    <tr>
      <td>Williams</td>
      <td>Natalie</td>
      <td>83</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Average Grade</td>
      <td>78.8</td>
    </tr>
  </tfoot>
</table>
```

- Use it only for **displaying tabular data**.

&nbsp;

### Accessible Tables

Create accessible tables that everyone can understand, especially for users using assistive technologies like **screen reader**.

- Use `caption` Element: You can write the caption (or **title**) of a table, so users, especially those who use assistive technologies, can quickly understand the table's purpose and content.
  - This way, screen readers and other assistive technologies can provide more context by **announcing the caption before reading the content**.

  ```html
  <table>
    <caption>
      Our Pets
    </caption>
    <thead>
      <tr>
        <!-- Column Headers -->
        <th>Name</th>
        <th>Age</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Nora</th>
        <!-- Row Header -->
        <td>5</td>
        <td>Dog</td>
      </tr>
      <tr>
        <th>Gino</th>
        <!-- Row Header -->
        <td>2</td>
        <td>Cat</td>
      </tr>
    </tbody>
  </table>
  ```

  - Associating the data cells with their corresponding headers is also very important for screen readers.

&nbsp;

- The `scope` Attribute: it **determines if a header is a row header or a column header**. Screen readers may guess this correctly from the table's structure, but it's usually **recommended to explicitly indicate the scope** to ensure clarity.
  - The `scope` attribute has four possible values. The two you will use most often are `col` for column and `row` for row.

  ```html
  <table>
    <caption>
      Our Pets
    </caption>
    <thead>
      <tr>
        <!-- Now they have scope -->
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Nora</th>
        <td>5</td>
        <td>Dog</td>
      </tr>
      <tr>
        <th scope="row">Gino</th>
        <td>2</td>
        <td>Cat</td>
      </tr>
    </tbody>
  </table>
  ```

- if a column or row header spans across multiple cells, the scope will also be applied to each one of the cells individually. (**NOT Recommended!**)

  ```html
  <table>
    <tbody>
      <tr>
        <td></td>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
      </tr>
      <tr>
        <th rowspan="2" scope="row">Dogs</th>
        <th scope="row">Nora</th>
        <td>5</td>
      </tr>
      <tr>
        <th scope="row">Gino</th>
        <td>2</td>
      </tr>
      <tr>
        <th rowspan="2" scope="row">Cats</th>
        <th scope="row">Lulu</th>
        <td>10</td>
      </tr>
      <tr>
        <th scope="row">Elizabeth</th>
        <td>6</td>
      </tr>
    </tbody>
  </table>
  ```

  - However, some screen readers may not be able to interpret tables with complex structures, so you should also try to flatten the table as much as possible to **avoid row and column headers that span across multiple cells**.

  - For **cell width**, it's recommended to **avoid using fixed values**. You should use relative values instead, like _percentages_.

  - Try to **avoid defining cell height**. This will allow users to adjust the text size to fit their needs.

  - You should **let the browser determine the table width** whenever possible, to reduce the need for horizontal scrolling.

&nbsp;

`Note`: Your goal should always be to **make sure users can access this information**, even if their screen readers can handle complex table structures.

&nbsp;

## HTML Validator

An HTML validator is a tool that **checks the validity of your HTML** code against the standard HTML specifications. it helps you **identify errors** and **warnings** in your HTML code, ensuring your web pages are correctly structured and compliant with web standards.

HTML is a very forgiving language – **elements still render even when you make mistakes**, like forgetting to include a closing tag. This happens because browsers use a **parsing algorithm** that handles common errors and tries to render HTML as closely as possible to the author's intention. But _this could backfire sometimes_.

- validator.w3.org

- jsonformatter.org

&nbsp;

### DOM Inspector & DevTools

The DOM inspector allows you to **inspect the HTML structure of the page** you are on.

- The DOM stands for **Document Object Model**. it is a _tree-like_ structure that represents the elements on a page

The **developer tools** allow you to **inspect the HTML, CSS, and JavaScript of the page** you are on.

- `Elements`: This tab shows you the **HTML structure** of the page you are on.

- `Console`: This tab shows you any **errors\*** that might be occurring on the page.

When you are building out your projects, you will frequently run into issues where your **programs are not working as expected**. Programmers often refer to issues as **bugs**. The process of finding and fixing these bugs is known as **debugging**.

&nbsp;

## Accessibility

Accessibility involves **creating products and services that everyone can use**.

in the context of web development, it is **building websites that everyone can understand and interact with**, including people with _visual_, _auditory_, _motor_, and _cognitive_ disabilities.

- Blindness.
- Low vision.
- Color blindness.
- Deafness.
- Difficulty using keyboards, mice, or touchscreens.
- Attention disorders.
- Memory issues.
- Difficulty speaking or understanding spoken language.
- Sensitivity to flashing lights.

To help you create accessible websites, the World Wide Web Consortium, known as **W3C**, developed a set of **international standards** that you can follow **to make your websites more accessible and easier to use** for people with _disabilities_.

These standards are known as the "Web Content Accessibility Guidelines" (**WCAG**).

These guidelines are designed with four core principles in mind, known as **POUR**.

- `P` stands for **Perceivable**. Users must be able to perceive the information that you are presenting. For example, you can provide _alternative text_ for images, so users who access your website with a screen reader can understand them.

- `O` stands for **Operable**. Users must be able to interact with the user interface. For example, you can make sure that all functionality is accessible through the _keyboard_ too, not just the mouse.

- `U` stands for **Understandable**. Users must be able to understand the information. For example, you can avoid _complex sentences_ and use simple language as much as possible.

- `R` stands for **Robust**. A wide range of browsers and other tools, including _assistive technologies_, must be able to interpret the _content_.

Using **semantic HTML** is very helpful for making your website _compatible_ with different browsers and _assistive technologies_.

To check if you are following these guidelines correctly, you can access the Quick Reference of the World Wide Web Consortium. There, you will find a comprehensive list of criteria and techniques.

Accessibility is essential for web development. By developing with **inclusivity in mind**, you can ensure that everyone can access and engage with your content, **promote equality** and create a better user experience for everyone around the world.

&nbsp;

## Screen Readers

Screen readers are _assistive technology_ programs that **help blind and visually impaired people use computers and mobile devices**.

There's a common misconception that screen readers are `text-to-speech` devices. However, _text-to-speech_ is just one of the features of a screen reader. **Some screen readers even render the text to braille output** instead of speech.

Screen reader programs are also not only made for the _blind_ and _visually impaired_. _Dyslexic_ individuals and people with _cognitive_ disabilities also use screen readers.

All the popular _operating systems_ out there have screen readers _built-in_.

- **macOS** & **iOS** both have **VoiceOver** built-in. You can enable it on your computer by pressing `CMD + F5`. You can access it on iPhones through `Settings`.

- **Windows** computers have **Narrator** built-in. You can turn it on by pressing `WIN + CTRL + ENTER`.
  - NonVisual Desktop Access (**NVDA**) & Job Access With Speech (**JAWS**) are also available for Windows computers.
    - NVDA is free and _open-source_, while JAWS is _paid_.

- **Linux** has **Orca** for the _desktop_ environment & **Speakup** for the Linux _terminal_.

- **Android** phones have **TalkBack** built-in. You can turn it on by accessing `Settings > Special Function > Accessibility > Talkback`.
  - Some Android devices also have **Ella** & **Select to Speak** built-in.

&nbsp;

## Large Text & Braille Keyboards

Large text & braille keyboards are designed **for users with visual disabilities**.

in **Large Text Keyboards**, also called _Large Print Keyboards_, the letters, numbers, and symbols are larger compared to standard keyboards. Most of them also have **enhanced contrast and brightness**.

- A large print keyboard made by the brand `MaxiAids` has yellow keys with black, big, and bold letters, numbers, and symbols on them. This is helpful for people with low vision.

**Braille keyboards** provide a completely **tactile experience for people with more severe vision disabilities**, including people who are _blind_.

- Braille is a **tactile reading and writing system**. It consists of raised **dots** arranged in specific patterns to represent letters, numbers, and punctuation.

Some keyboards combine both approaches: large fonts and braille patterns in the keys. This is helpful for people with visual disabilities and for people who are learning braille.

&nbsp;

## Alternative Pointing Devices (Trackballs, Joysticks, & Touchpads)

Alternative pointing devices are input devices that make good **alternatives to the traditional mouse**. They are essential for improving computer accessibility for those with _disabilities_, forelimb impairments, and limited mobility.

A **trackball** is a **stationary pointing device that consists of a large, movable ball** within a socket. it also includes additional buttons for clicking and performing other functions.

- Trackballs reduce the physical movement the user needs for navigation, making them ideal for users with _mobility_ issues.

A **joystick** is a pointing device primarily designed for **games** and certain industrial applications like **machinery control**. it consists of **a lever that pivots up, down, left, and right, and often includes additional buttons** for various actions.

- Joysticks provide **precise control over movement and actions** within digital environments. This makes them popular for **flight simulators**, **cranes**, **driving games**, and other applications requiring **precise directional input**.

- Because joysticks **accommodate larger and more deliberate movements**, they are beneficial for individuals with _tremors_, _unsteady hands_,

- They also **reduce the strain and pain that comes with repetitive movements**, making them ideal for individuals with _arthritis_ and _carpal tunnel syndrome_.

A **touchpad** is a **flat, touch-sensitive device** built into laptops and some keyboards. it allows users to control the cursor on the screen by sliding their fingers across its surface.

- Most people see touchpads as **a better alternative to a mouse** because they significantly enhance navigation by supporting **multi-touch gestures** like _pinch-to-zoom_, _two-finger_ scrolling, _tap-to-click_, and _three-finger_ swipes.

- Touchpad is also **ideal for individuals with low arm or hand movement** because the forelimb is almost always **stationary** while using it. it is also suitable for people with _arthritis_ and _joint pain_ because they don't get to move their arms too much.

&nbsp;

## Screen Magnifiers

Screen magnifiers are tools that help people with _low vision_ and other _visual impairments_ better access digital content and the web.

Screen magnifiers work by **enlarging texts, graphics, and other elements** on a computer or mobile device screen. Many screen magnifiers allow users to enlarge the display by more than `200%`. Users can then navigate the page using their pointing device or keyboard. Additionally, most magnifiers offer **customizable zoom percentages** and other features in their settings.

Optimizing for screen magnifiers:

- Using **scalable fonts** so the user can resize the page without the layout breaking.
- Ensuring the user interface adapts to different screen sizes through **responsive design**.

- Using **high-contrast color schemes** and **customizable colors**.

- **implementing a non-sticky and tiny navbar** so users can still see content when using magnifiers.

- **Using regular HTML text** instead of images of text.
- Providing **feedback** directly next to the element that triggers it, and more.

All the mainstream Operating Systems have at least one magnifier built into them by their manufacturers. Here are the name of some third-party ones.

- iZoom for Windows.

- ZoomText for Windows.

- LunarPlus for Windows.

- ClaroView for both macOS and Windows.

- Zoomify - Screen Magnifier for macOS.

- Loupe for macOS.

&nbsp;

## Voice Recognition

Voice recognition tools **let people with disabilities use their voice to pass commands to perform various tasks** instead of using traditional input devices like _keyboards_ and _mice_.

- People with _visual impairments_, including those with _low-vision_ or _blindness_.

- individuals with _mobility impairments_, such as limited use of hands and arms or conditions like _arthritis_ and _carpal tunnel syndrome_.

- Those recovering from hand or arm _injuries_.

- individuals with _cognitive disorders_, like _memory issues_ or _attention deficit disorders_.

- Elderly individuals who might find it easier to use voice commands.

All the mainstream Operating Systems have some kind of voice recognition _built-in_.

- Voice Control for macOS/iOS

- Voice Access for Android

- Windows Speech Recognition for Windows (referred to as Voice Access in the most recent versions of Windows).
  - Dragon by Nuance is a popular third-party voice recognition software for Windows.

&nbsp;

## Accessibility Auditing Tools

An accessibility auditing tool is an application that helps you improve the accessibility of your digital content by **reporting accessibility issues** that can be easily found through automated testing.

it is important to note that while **automated accessibility tools** have a role in improving accessibility, they typically will only find about **a third of all possible accessibility issues**.

Therefore, it is important not to rely on them entirely to evaluate the accessibility of your content. **Manual testing**, preferably by people with _disabilities_, will always be required to **ensure that your content is as accessible as possible**.

- **Google Lighthouse** is a popular web metric checker you can use directly within Chrome DevTools or online.
  - Accessibility

  - SEO

  - Best practices

  - Performance

- if you want **more reliable metrics**, consider using the web version. The downside is that it doesn't support testing local websites. You can access the web version on `pagespeed.web.dev`.

- **WAVE** is another reliable accessibility checker you can use as a **Chrome extension** or on the web.
  - All you need to do is enter the URL of your website and a **comprehensive accessibility report** will be generated for you. This report includes accessibility features implemented, _ARIA_, and _contrasts_.

- The **IBM Equal Access Accessibility Checker** is another robust tool for improving digital content accessibility. With it, you can scan your websites for accessibility issues and generate a detailed report.
  - it can be used as a **Chrome extension**, **Firefox add-on**, or **NPM package**.

&nbsp;

## The Purpose of WAI-ARIA

The primary purpose of WAI-ARIA is to **improve accessibility for dynamic content and UI components** that do not have native HTML equivalents.

- WAI-ARIA stands for **Web Accessibility Initiative** - **Accessible Rich Internet Applications**.

WAI-ARIA works by introducing **a set of attributes you can add to HTML elements to provide additional semantic information**.

- These attributes are categorized into **roles**, **states**, and **properties**.

- it offers **specific rules for making dynamic and interactive content accessible** for users of _assistive technologies_.

&nbsp;

ARIA properties provide **additional details** about elements.

For example, the **aria-labelledby** property lets you **connect an element to a specific label**:

```html
<h2 id="header-id">About freeCodeCamp</h2>
<button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
```

- This will make the elements understandable and navigable for users of assistive technologies.

&nbsp;

To get the best out of WAI-ARIA, try to **stick with native HTML whenever possible** since it generally provides more accessibility out of the box.

Also, make sure your WAI-ARIA states and properties update with the content in *real time*.

`Note`: Avoid **overusing** ARIA, as it can often be **confusing**.

&nbsp;

## ARIA Roles

An ARIA `role` defines the **purpose of an element** within a _website_ or _web app_.

```html
<div role="button">Click Me</div>
```

- By doing this you are indicating to assistive technology that the element is a button.

- Roles **do not provide any functionality**.

&nbsp;

&nbsp;

&nbsp;

