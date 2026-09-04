# [introduction to CSS](https://www.freecodecamp.org/learn/responsive-web-design-v9/)

w/ freeCodeCamp.org

&nbsp;

if you think of a website as a house, `HTML` would be the foundation and framework, while `CSS` would be the paint, wallpaper, and decorations that make the house _visually appealing_ and **unique\***

- if `HTML` is the structure of a web page, `CSS` is what makes it _look good_.

- `CSS` works by selecting `HTML` _elements_ and applying styles to them.

- `CSS` plays a vital role in creating visually appealing, responsive, and _user-friendly_ websites.

Another important feature of `CSS` is its _cascading_ nature, which is where the "cascading" in its name comes from (`Cascading Style Sheets`). This means that styles can be _inherited_ and **overridden**, allowing for a hierarchical structure of _styling_. it allows you to build engaging web _experiences_ that capture users' **attention** and enhance their interaction with web content.

&nbsp;

## Basic Anatomy of a CSS Rule

1. A `selector`, which is a pattern used in CSS to identify and **target** specific HTML elements for styling.
   - `type` selectors
   - `class` selectors
   - `ID` selectors

2. A `declaration` block, which is a set of _styles_ for a given selector, or _selectors_.
   - `property`

   - `value`

```css
selector {
  property: value;
}
```

Multiple selectors sharing the same set of styles

```css
selector1,
selector2 {
  property: value;
}
```

`Note`: After each _property_ name, you need to place a colon(`:`), and after each _value_, you should have a semicolon(`;`).

### Fallbacks

You can add a fallback value by adding another value separated by a comma.

- Fallbacks are used in instances where the initial is not found/unavailable.

```css
h1,
h2 {
  font-family: Impact, serif;
}
```

&nbsp;

## Units

- Pixels (`px`)
  A fixed-size unit of measurement in CSS, providing precise control over dimensions.

- Percentages (`%`)

- Viewport Units
  - Viewport Width (`vw`)
  - Viewport Height (`vh`)

&nbsp;

## CSS Combinators

CSS combinators are used to define the relationship between selectors in CSS. They help in selecting elements based on their relationship to other elements, which allows for more precise and efficient styling.

- A **descendant** combinator is used to target elements matched by the second selector if they are **nested within an ancestor element that matches the first selector**. An ancestor can be a parent element or a parent's parent.

  ```css
  figure img {
    border: 1px solid black;
  }
  ```

- The **child** combinator (`>`) in CSS is used to select elements that are **direct children of a specified parent element**.

  This combinator targets only elements with a _specific_ parent, making your CSS rules more precise and preventing _unintended_ styling of deeper nested elements.

  ```html
  <div class="container">
    <p>First</p>
    <div>
      <p>Second</p>
    </div>
    <div>
      <p>Third</p>
    </div>
  </div>
  ```

  - To apply styles to just the **direct child** (`<p>First</p>`) of the container class, you can use the child combinator like this:

  ```css
  .container > p {
    color: blue;
  }
  ```

- The **next-sibling** combinator (`+`) in CSS selects an element that immediately follows a specified sibling element. This combinator is useful when you want to **apply styles to an element that directly follows another element**, allowing for targeted styling based on the element's position relative to its siblings.

  ```html
  <figure>
    <img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
    />
    <figcaption>A cute orange cat lying on its back.</figcaption>
  </figure>
  ```

  - Here, we have a `figure` element containing an `img` element followed by a `figcaption` element. The `figcaption` element is the immediate sibling of the `img` element.

  - if you wanted to apply a **black border** around the `figcaption` element, you can use the _next-sibling_ combinator like this:

  ```css
  img + figcaption {
    border: 1px solid black;
  }
  ```

- The **subsequent-sibling** combinator (`~`) in CSS selects **all siblings of a specified element that come after it**. Unlike the _next-sibling_ combinator, which targets only the immediately following sibling, the _subsequent-sibling_ combinator (`~`) can target **any** siblings that follow the specified element, offering greater flexibility in _styling_.

  ```html
  <div class="container">
    <h2>Subheading</h2>
    <p>First paragraph.</p>
    <p>Second paragraph.</p>
    <p>Third paragraph.</p>
    <p>Another paragraph element</p>
  </div>
  ```

  - if you want to style **all** of the paragraph elements that come after the `h2` element, then you can use the _subsequent-sibling_ combinator like this:

  ```css
  h2 ~ p {
    color: green;
  }
  ```

  - The _subsequent-sibling_ combinator (`~`) targets all paragraph siblings that appear after the `h2` element, regardless of whether they are immediate siblings.

&nbsp;

## `inline` vs `block`-level Elements

**Block-level** elements are elements that take up the **full width** available to them by default, stretching across the width of their container.

- These elements always start on a **new line** and push other content to the _next line_, creating a "block" of content.

- Block-level elements have the CSS property `display: block;` applied by default.

- Block-level elements are ideal when you want content to stack **vertically**, such as paragraphs, sections, or larger blocks of content.

- They're commonly used to define the **layout** and **structure** of a webpage.

- Examples include: `<div></div>`, headings, `<p></p>`, `<ol></ol>`, `<ul></ul>`, and `<section></section>` elements.

**inline elements**, unlike block-level elements, they take up **only as much width as they need** and **do not** start on a _new line_.

- These elements flow within the content, allowing text and other inline elements to appear **alongside** them.

- inline elements have the CSS property `display: inline;` applied by default.

- inline elements are best used for styling smaller portions of text or content **within a line**, such as emphasizing a word, creating hyperlinks, or applying specific styles to parts of a paragraph.

- `inline` elements **cannot** have their size controlled.

- Examples include: `<span></span>`, `<a></a>`, `<img>` elements.

`NOTE`: You change the behavior of a _block-level_ element to behave like an _inline element_ by: `display: inline;`

### display: `inline-block`;

The inline-block property is a **hybrid** of these two behaviors. Like inline elements, inline-block elements remain in the text flow _without_ starting on a new line.

- They behave like inline elements, but unlike inline elements, you can **adjust** the **width** and **height** of an `inline-block` element.

- `inline-block` elements allow for **full control over dimensions** while still **staying inline** with other content.

You can use it for creating layouts that require both **alignment** and **dimension** control within a _continuous text flow_.

&nbsp;

## `margin` & `padding`

**Margins** control the space **outside** an element, helping to separate it from other elements and define the layout structure.

- Using a **singular** value on the `margin` shorthand, that exact value will be applied to all four sides of the target element.

- Using **two** values, the **first** value applies to the **top** and **bottom**, while the **second** value applies to the **left** and **right** sides of the element.

- If **three** values are provided, the **first** value applies to the **top** margin, the **second** value to the **left** and **right** margin, and the **third** value to the **bottom** margin.

- When using **four** values, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

**Padding** controls the space **inside** an element, improving content readability and _aesthetic_ appeal.

- The `padding` property applies space **between the content** and its **border**.

- Shorthand rules are the same as the margin ones.

&nbsp;

## CSS Specificity

CSS Specificity determines **which styles are applied** to an element **when multiple rules** could apply.

CSS specificity is **calculated** based on the **type of selectors** used, and by a _four-part_ value `(a, b, c, d)`:

- `a`: inline styles (`1` or `0`).

- `b`: Number of `ID` selectors.

- `c`: Number of `class` selectors, `attribute` selectors, and `pseudo-classes`.

- `d`: Number of `type` selectors, `pseudo-elements`, and `universal` selectors.

**Each part** of the specificity _value_ carries **different weight**:

1. **inline styles** (`a`) have the **highest** weight, contributing a value of `1` to the **first** part of the specificity value.

2. **ID selectors** (`b`) carry the **higher** weight, with each `id` contributing `1` to the **second** part of the specificity value.

3. **Class selectors**, **attribute selectors**, and **pseudo-classes** (`c`) carry **moderate** weight, with each contributing `1` to the **third** part of the specificity value.

4. **Type selectors** and **pseudo-elements** (`d`) have the **lowest** weight, with each contributing `1` to the **fourth** part of the specificity value.

- **Universal selector** (`*`): The universal selector contributes `0` to the specificity calculation and **does not affect specificity**. it's inclusion in a selector **does not change the specificity value**.

&nbsp;

`Note`: **inline** CSS has the **highest** specificity because it is _applied directly to the element_. it **overrides** any internal or external CSS. The _specificity value_ for inline styles is `(1, 0, 0, 0)`.

&nbsp;

### internal CSS

internal CSS is defined within a `style` element in the `head` section of the HTML document. it has **lower specificity than inline styles** but can **override** external styles.

The _specificity value for internal styles_ is determined by the _selectors used_.

- For example, an `ID` selector within **internal** CSS has a specificity value of `(0, 1, 0, 0)`.

&nbsp;

### External CSS

External CSS is linked via a `link` element in the `head` section and is written in separate `.css` files. it has the **lowest** specificity but provides the best **maintainability for larger projects**.

The _specificity value for external styles_ is also determined by the _selectors used_.

- For example, a `class` selector within **external** CSS has a specificity value of `(0, 0, 1, 0)`.

&nbsp;

## Universal Selector (`*`)

The universal selector (`*`) is a special type of CSS selector that **matches any element** in the document.

- The universal selector has the lowest specificity value of any selector. it contributes `0` to all parts of the specificity value `(0, 0, 0, 0)`.
  - This means that _any other selector_, including `type` selectors, `class` selectors, `ID` selectors, and `inline` styles, will **override** the styles set by the universal selector.

- it is used to apply a style to **all** elements on the page, which can be useful for **resetting** or **normalizing** styles across _different_ **browsers**.

- The universal selector can be used to select all elements within a **specific** _context_ or **globally** across the entire document.

```css
/*Setting the margin and padding for the entire document.*/
* {
  margin: 0;
  padding: 0;
}
```

&nbsp;

## Type Selectors (`h2`)

Type selectors, also known as **element selectors**, target elements based on their **tag name**.

- The specificity value for a type selector is `(0, 0, 0, 1)`.
  - This means that `type` selectors will be **overridden** by `class` selectors, `ID` selectors, and `inline` styles, but can still apply styles unless those higher-specificity rules are present.

- it allow you to _apply styles to all instances_ of a specific HTML **element**.

- Type selectors are straightforward to use and are written simply as the _**tag name** of the element you want to style_.

```css
p {
  color: blue;
}
```

&nbsp;

## Class Selectors (`.class`)

Class selectors are a key part of CSS, allowing developers to **target multiple elements** with the **same class** _attribute_ and apply consistent _styling_.

- The specificity value for a class selector is `(0, 0, 1, 0)`.
  - This means that class selectors can **override** `type` selectors, but they can be **overridden** by `ID` selectors and `inline` styles.

- Highly **versatile** and **efficient** for applying styles across a website.

```css
.highlight {
  color: green;
}
```

&nbsp;

Class selectors can be **combined** with other selectors to create more **specific** rules.

```css
p.bold-text {
  font-weight: bold;
}
```

- Combining a paragraph `type` selector with a `class` selector `(0, 0, 1, 1)`
  - Higher specificity than `class` selector _alone_.

- This rule applies **only** to `p` elements that **also** have the `bold-text` _class_, making their text **bold**.

&nbsp;

## ID Selectors (`#id`)

ID selectors are among the most powerful selectors in CSS, allowing developers to _apply styles to specific elements_ with **unique** identifiers. **No** two elements should **share** the same ID.

- The **specificity** value for an ID selector is `(0, 1, 0, 0)`.
  - This means that `ID` selectors can **override** `class` selectors and `type` selectors but can be **overridden** by `inline` styles.

- Highly effective for targeting _individual_ elements that need **unique styling**.

```css
#unique {
  color: purple;
}
```

&nbsp;

## `!important` Keyword

The `!important` keyword in CSS is used to give a style rule the **highest priority**, allowing it to **override** any other declarations for a property. When used, it **forces** the browser to apply the specified style, **regardless of the specificity** of other _selectors_.

- it applies a style **regardless of other rules' specificity**.
  - However, the `!important` keyword _does not change the specificity_ of the CSS selector itself. it simply **ensures** that the _rule_ with `!important` is _applied_, even if there are other _conflicting rules_ with higher specificity.

- Another appropriate use case for the `!important` keyword is to **override styles from third-party libraries** or frameworks when you do not have control over the original CSS.

```css
.para {
  background-color: black !important;
  color: white !important;
}
```

- The `!important` keyword is used _after the CSS_ value and _before the semicolon_.

&nbsp;

`Note`: Overusing the `!important` keyword can lead to **difficulties in maintaining and debugging** your CSS, as it _breaks the natural cascading of styles_ and can lead to **unintended consequences**.

&nbsp;

## The Cascade Algorithm

The Cascade Algorithm is the process the browser uses to decide **which CSS rules to apply when there are multiple styles targeting the same element**. It ensures that the most appropriate styles are used, based on a set of _well-defined_ rules.

1. `Relevance`: The browser first **filters all the CSS rules to find those that actually apply to the element** in question. This includes matching **selectors** and considering **media queries** that might be \*in **effect\***.
   - A media query is a CSS technique used to **apply styles based on the characteristics of the device** or viewport, such as its **width**, **height**, or **orientation**.

2. `Origin & importance`: CSS can come from different **sources**: the browser’s default styles (`user-agent`), styles set by the _user_, and styles written by the _author_ (`you`).
   - Following the consideration of origin, the algorithm then **evaluates the importance of each rule**, giving **priority** to rules marked with `!important`, which **override other rules regardless of their source**.

3. `Specificity`: When **two rules** from the **same origin** and **importance** level apply, the rule with the **higher specificity** will be _applied_.
   - Specificity is a measure of **how targeted a selector is**, with **more specific selectors taking precedence** over more _general_ ones.

4. `Order of Appearance`: When **two rules** have the **same specificity**, the **one that appears last in the CSS will be applied**.

&nbsp;

`Note`: The **order** in which you write your _styles_ can sometimes **affect the outcome**.

&nbsp;

`Note #2`: By considering **relevance**, **origin and importance**, **specificity**, **scope**, and **order of appearance**, `the Cascade Algorithm` ensures that your CSS behaves **predictably**, allowing you to design more _complex_ and _nuanced_ web pages.

&nbsp;

## inheritance

inheritance is a key concept in CSS that **determines how styles are passed down from parent elements to their child** elements. This allows for a more efficient way to apply **consistent styling** across an entire document.

- inheritance is especially useful for **maintaining consistency** and **reducing redundancy** in your stylesheets.

- Just like in the real world, where **children often inherit traits from their parents**, in CSS, **certain properties can be inherited by child elements from their parent** elements.
  - In CSS, **not all properties are inherited by default**. For example, properties like `color`, `font-family`, and `line-height` are _inherited_.
    - This means that **if you set the text color on a parent element, all of its child elements will inherit that color** unless you specifically **_override_** it.

    ```html
    <div style="color: blue;">
      This is the parent element.
      <p>This is the child element inheriting the color.</p>
    </div>
    ```

    - in this case, both the _parent_ `div` and the _child_ `p` will display their text in **blue** because the color is **inherited**.

&nbsp;

### `inherit` keyword

On the other hand, properties like `margin`, `padding`, `border`, and `background` are **not inherited by default**. If you want a child element to inherit these styles, you need to **explicitly** set them, either directly on the child element or by using the `inherit` keyword.

- The `inherit` keyword can be used to **force inheritance** of a property from a parent element, even if that property is not normally inherited.
  - if you want a specific child element to have the same `padding` as its parent, you can set `padding: inherit` on the child element:

  ```html
  <div style="padding: 20px;">
    This is the parent element with padding.
    <p style="padding: inherit;">
      This is the child element inheriting the padding.
    </p>
  </div>
  ```

  - in this case, the child `p` element will inherit the `20px` of padding from its parent `div` element.

&nbsp;

`Note`: inheritance only works in **one direction** – from **parent to child**. If you override a style on a child element, it won’t affect the parent element.

&nbsp;

## Margins & Line Height

Margins and line height are essential for _spacing_ list items to **enhance readability** and **visual appeal**.

### `margin`

**Margins** can be used to create **space between** list items by applying margin properties. it allows you to control the **spacing outside** each list item, effectively increasing or decreasing the **gap** between them.

```css
li {
  margin-bottom: 40px;
}
```

### `line-height`

The `line-height` property adjusts the **vertical spacing** between lines of text within a single list item.

```css
li {
  line-height: 2;
}
```

- `line-height: 2;` sets the line height to be **twice the font size**, creating more vertical space within each list item.

- if list items have **multiple lines** of text, the line-height will affect the spacing between those lines, but it **does not directly adjust the spacing between separate list items** themselves.
  - To control the spacing between **individual list items**, you would use `margin` or `padding` properties instead.

&nbsp;

## `list-style`

it is used to **control the appearance of lists** on a webpage.

Whether you're working with ordered lists (`ol`) or unordered lists (`ul`), the `list-style` _property_ allows you to customize how list items are displayed.

The `list-style` property is actually a **shorthand** for _three_ other properties.

- `list-style-type` property allows you to **define the type of bullet point or number** used in a list.
  - For unordered lists (`ul`), you can choose from several _bullet styles_, such as **discs**, **circles**, or **squares**.

  - For ordered lists (`ol`), you can use different _numbering systems_, like **decimal**, **Roman** numerals, or even **alphabetical** characters.

  ```html
  <ul style="list-style-type: square;">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

- `list-style-position` property **controls the position of the bullet or number** in relation to the list item’s content. There are _two_ values you can use:
  - `outside`: The bullet or number **appears outside** the content. (default behavior)

  - `inside`: The bullet or number **appears inside** the content, which may cause the text to wrap and align with the bullet or number.

    ```html
    <ul style="list-style-position: inside;">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <ul style="list-style-position: outside;">
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
    </ul>
    ```

- `list-style-image` property **allows you to use an image as the bullet point** for your list items. This can be useful for adding a _unique visual style_ to your lists.

  ```html
  <head>
    <style>
      ul {
        list-style-image: url("https://cdn.freecodecamp.org/platform/universal/freecodecamp-org-gravatar.jpeg");
        list-style-position: inside;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
  ```

  - Make sure that the **image you choose is small and appropriate** for the design of your webpage. if the image is too large or complex, it can make the list harder to read.

  - if the image is **unavailable** or not rendered, the **square bullets will be used as a fallback**.

&nbsp;

You can combine the three properties – `list-style-type`, `list-style-position`, and `list-style-image` – into a single `list-style` shorthand property.

- The **order of the values in the shorthand doesn’t matter**, but all three can be specified together.

```html
<ul
  style="list-style: square inside url('https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');"
>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

&nbsp;

## Default Link Styles

The primary purpose of default link styles is to **provide clear visual cues that help users distinguish between interactive and non-interactive elements** on a webpage.

These styles, typically **blue for unvisited** links and **purple for visited** links, have become a _standard_ that users have come to expect and rely on when navigating websites.

```css
/* default */
a:link {
  color: blue;
  text-decoration: underline;
}

a:visited {
  color: purple;
}
```

These styles serve several important functions.

- Firstly, the **blue** color for unvisited links **stands out against most background colors and text**, making links **easily identifiable**.
  - This contrast is crucial for users to quickly scan a page and find _navigational_ elements or important information.

- The **underline** further **emphasizes that the text is clickable**, providing an additional **visual cue**.
  - This is particularly helpful for users who may be _colorblind_ or have difficulty distinguishing colors.

- The **change in color** for visited links (typically to **purple**) helps users **keep track of where they've been**.
  - This feature is invaluable for navigating large websites or conducting research, as it **prevents users from inadvertently revisiting the same pages**.

&nbsp;

While it's common for designers to modify these default styles to match a website's _aesthetic_, it's crucial to **maintain the core principles** behind them.

- Ensure that links are still clearly **distinguishable** from regular text.

- There's a **visible difference** between _visited_ and _unvisited_ links.

- The chosen colors provide **sufficient contrast** with the _background_.

  ```css
  a:link {
    color: blue;
    text-decoration: none;
    border-bottom: 1px solid blue;
  }

  a:visited {
    color: purple;
    border-bottom: 1px solid purple;
  }
  ```

  - This maintains the blue and purple color scheme while replacing the underline with a bottom border for a more modern look.

&nbsp;

in addition to the default and visited states, links typically have **hover** and **active states**:

```css
a:hover {
  color: red;
}

a:active {
  color: darkorange;
}
```

- These **states provide immediate feedback to users as they interact** with links, enhancing the overall usability of the site.

&nbsp;

`Note`: Always prioritize **clarity** and **user experience** when designing link styles for your websites.

&nbsp;

## Link States

Link states are important for **helping users recognize links and providing clear feedback after interactions**, which improves both _usability_ and _accessibility_.

Additionally, clear link states enhance the overall user experience by **providing immediate feedback on user interactions**, reducing _confusion_ and improving the site's navigability.

These states can be styled using something called `pseudo-classes` in CSS.

A `pseudo-class` is a **keyword** added to a selector that **specifies a special state of the selected element**.

```css
A:b {
  property: value;
}
```

- `:link` pseudo-class styles **unvisited links**, indicating that they are _clickable_.

  ```css
  /* Normal state (unvisited link) */
  a:link {
    color: red;
  }
  ```

- `:visited` styles **links that have already been visited or clicked**, helping users track which links they have _clicked_ before.

  ```css
  /* Visited link */
  a:visited {
    color: green;
  }
  ```

- `:hover` changes the link's style when the **user hovers over** it, providing a **visual cue** that the link is _interactive_.

  ```css
  /* Hover state */
  a:hover {
    color: green;
  }
  ```

- `:focus` adds styles **around the link when it is focused**, such as when navigating with a **keyboard**, or enhancing _accessibility_.

  ```css
  /* Focus state */
  a:focus {
    outline: 2px solid orange;
  }
  ```

- `:active` changes the link's styles **while the link is being clicked**, providing **immediate feedback** to the user that their _action_ is being registered.

  ```css
  /* Active state */
  a:active {
    color: pink;
  }
  ```

&nbsp;

## `background-image`

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
  }
</style>
```

When working with background images in CSS, you have **several properties at your disposal to control how these images are displayed**.

- `background-size`: When you want to set the size for the background image.
  - You can use `contain` to scale the image **as large as possible without cropping or stretching**.

    ```html
    <style>
      body {
        background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
        background-size: contain;
        min-height: 100px;
      }
    </style>
    ```

  - if we use the `cover` value, then the background image will **scale to cover the entire `body` element while maintaining its aspect ratio**.

    ```html
    <style>
      body {
        background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
        background-size: cover;
        min-height: 100px;
      }
    </style>
    ```

- `background-repeat`: **By default, background images repeat both horizontally and vertically to fill the entire element**. However, you can control this behavior. You can use the `background-repeat` property with the value set to `no-repeat`.

  ```html
  <style>
    body {
      background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
      background-size: contain;
      background-repeat: no-repeat;
      min-height: 100px;
    }
  </style>
  ```

  - if you wanted to **repeat the background image horizontally**, you can use the `repeat-x` value for the `background-repeat` property. And if you wanted to repeat the background image **vertically**, you can use the `repeat-y` value.

    ```html
    <!-- repeat-x -->
    <style>
      body {
        background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
        background-size: contain;
        background-repeat: repeat-x;
        min-height: 100px;
      }
    </style>

    <!-- repeat-y -->
    <style>
      body {
        background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
        background-size: contain;
        background-repeat: repeat-y;
        min-height: 100px;
      }
    </style>
    ```

- `background-position`: it allows you to **set where in the element the background image appears**. You can use keywords like `top`, `bottom`, `left`, `right`, and `center`, or _specific pixel_ or _percentage_ values.

  ```html
  <style>
    body {
      background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center top;
      min-height: 100px;
    }
  </style>
  ```

- `background-attachment`: it determines **whether the background image _scrolls_ with the content or remains _fixed_** when the page is scrolled.
  - The value is set to `scroll` by **default**.

  ```html
  <style>
    body {
      background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
      background-position: center top;
      background-attachment: fixed;
    }
  </style>
  ```

- `background` Property: This is the **shorthand property for setting all background properties in one declaration**.

  ```html
  <style>
    body {
      background: center top no-repeat
        url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
      min-height: 100px;
    }
  </style>
  ```

&nbsp;

## Background Gradient

A background gradient in CSS is a **smooth transition between two or more colors** that can be applied to the _background_ of an _element_. Gradients allow you to create **visually appealing backgrounds** without needing _images_.

### Linear gradients

A linear gradient **transitions colors along a straight line**.

- You can define the **direction** and the **colors** involved.

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

- The `direction` specifies the direction of the gradient. it can be an **angle** (such as `45deg`), a **keyword** (such as `to right`, `to bottom`), or a _side/corner_.

- `color-stop` specifies the colors and positions where the **gradient transitions** occur.

  ```css
  .linear-gradient {
    background: linear-gradient(195deg, red, black, blue);
    height: 100vh;
  }
  ```

&nbsp;

### Radial gradients.

A radial gradient **transitions colors radiating from an origin** (usually the _center_) outward in a _circular_ or _elliptical_ shape.

```css
background: radial-gradient(
  shape size at position,
  color-stop1,
  color-stop2,
  ...
);
```

- `shape` specifies the **shape of gradient** which could be _circle_ or _ellipse_.

- `size` determines the **size of the gradient's ending shape** which could be `closest-side`, `closest-corner`, `farthest-side` or `farthest-corner`.

- `position` determines the **position of the gradient's center** which could be specified using **keywords** (such as `center`, `top left`, `bottom right`) or **precise values** (such as `50% 50%`, `10px 20px`).

- `color stops` are a list of colors that the **gradient transitions** through.
  - **Each color stop can optionally include a `position` value** (_percentage_ or _length_) indicating where the color should be placed.

  ```css
  .radial-gradient {
    background: radial-gradient(
      circle closest-side at center,
      black 50%,
      red,
      black
    );
    height: 60vh;
  }
  ```

  - The `closest-side` keyword makes the gradient's ending shape fit the closest side of the element.

  ```css
  .radial-gradient {
    background: radial-gradient(circle, red 30%, black, white);
    height: 100vh;
  }
  ```

&nbsp;

## Accessibility Considerations for Backgrounds

One of the primary accessibility concerns related to backgrounds is ensuring that there is **sufficient contrast between the background and the text**.

- Without adequate contrast, users with _visual impairments_, including those with _low vision_ or _color blindness_, may **struggle to read the content** on the page.

**Contrast** refers to **the difference in lightness or darkness between two colors**.

- Sufficient contrast between the background color and the text color is **essential for readability**.

&nbsp;

The Web Content Accessibility Guidelines (**WCAG**) recommend a **minimum contrast ratio of `4.5:1` for normal text** and **`3:1` for large text**.

```html
<!--Poor Contrast-->
<p style="color: lightgray; background-color: whitesmoke;">
  This is an example of poor contrast.
</p>

<!--Good Contrast-->
<p style="color: white; background-color: darkslategray;">
  This is an example of good contrast.
</p>
```

&nbsp;

Another consideration is **avoiding placing text over busy or complex backgrounds**, such as images or gradients with multiple colors.

- Busy backgrounds can make it **hard to distinguish the text from the background**, regardless of the contrast.

&nbsp;

**Background music or auto-playing videos can be distracting** for some users, particularly those with _cognitive disabilities_.

- if you include background audio, **always provide a way for users to mute or pause the audio**.

&nbsp;

## Borders Around images

### `border` Property.

This property is a shorthand that **allows you to set the width, style, and color** of the border, all at once.

```css
img {
  border: 2px solid red;
}
```

- You can use `dashed`, `dotted`, or `double` along with `solid` for styling.

```css
/* For more control over each side of the border */
img {
  border-top: 10px solid red;
  border-right: 10px dashed green;
  border-bottom: 10px dotted blue;
  border-left: 10px double purple;
}
```

```css
/* For rounded corners */
img {
  border: 2px solid black;
  border-radius: 10px;
}
```

&nbsp;

### `outline` Property

While similar to border, outline **doesn't affect the element's dimensions or layout**.

```css
img {
  outline: 3px solid gold;
}
```

&nbsp;

## Basic Design Terminology

(For more: Open "CSS/EXERCISES/05-ShopMate-Demo")

### Layout

Layout is **how the visual elements are arranged on a page** or screen to communicate a message. it is like **the blueprint** of a design.

Designers must consider the _placement_, _size_, and _hierarchy_ of each element.

- Text

- images

- White space

#### Alignment

Alignment is **how the elements are placed in relation to one another**. Using alignment correctly is helpful for making the design look clean and organized.

Designers create **visual order by aligning elements along imaginary lines, edges, or a central point**.

&nbsp;

### Composition

Composition is **the art of arranging elements to create a harmonious design**. it determines how elements like _images_, _text_, and _shapes_ relate to each other and contribute to the design in an **artistic** way.

While layout mostly focuses on the **placement** of the elements, composition also considers the **artistic impact** that this placement will have in the overall design.

Composition is closely related to concepts of **balance**.

- Balance is **how the visual weight is distributed** within a composition.

- A balanced design feels harmonious.

Designers aim to **create an equilibrium through symmetrical or asymmetrical arrangements**.

&nbsp;

### Hierarchy

Hierarchy **establishes the order of importance** of the elements in a design.

You can implement a visual hierarchy with _size_, _color_, _contrast_, _alignment_, _white space_, and even _typography_.

- it is about making sure **the most important information is noticed first**.

&nbsp;

### Contrast

Contrast is used to **create clear distinctions** between the elements, it is helpful for **guiding user attention** to what you want to _emphasize_.

You can do this through **variations** in _color_, _size_, _shape_, _texture_, or any other _visual_ characteristic.

- Strong contrast is also helpful for improving readability.

&nbsp;

### White Space

White Space, also known as "negative space", is **the empty space** in a design.

- it is **the area surrounding** the elements.

- it can be **space in any color or texture**.

- its purpose is to **improve readability** and **enhance the visual hierarchy** of a design.

&nbsp;

### User interface

The user interface, also known as **UI**, is **how humans interact with computers**.

A user interface includes the **visual** and **interactive** elements that users can see on their screens, like _icons_, _images_, _text_, _menus_, _links_, and _buttons_.

&nbsp;

### User Experience

The user experience, also known as **UX**, is about **how users feel when using a product or service**.

An application with a well-designed user experience is **intuitive, easy to use, efficient, accessible, and enjoyable**.

The user interface plays a key role in making the user experience as easy and enjoyable as possible, so they are very closely related.

&nbsp;

## Background & Foreground Relationship: Contrast

Contrast is **the difference between two colors** - or how easy it is to tell them apart.

Colors with a **higher contrast** will be more visually **distinct**, whereas colors with a **lower contrast** will be more visually **similar**.

- **Black** and **white** have a very **high** contrast ratio.

- **Light blue** and **light purple** have **less** of a contrast.

&nbsp;

### [Contrast Ratio](./EXERCISES/06-Contrast-Ratio.html)

There are three aspects that impact the contrast ratio.

- **Hue**, which represents the **general color type**, like _red_, _blue_, _orange_.

- **Saturation**, or the **"amount" of color present**.

- **Lightness**, which represents **how much white is present** in the color.

Text with a contrast ratio of `4.5:1` is considered the **AA** standard, which is the **bare minimum** you should follow to be accessible to most users.

Text with a contrast ratio of `7:1` is considered the **AAA** standard, and ensures the **best** level of accessibility.

&nbsp;

## [Good Visual Hierarchy](./EXERCISES/07-Good-Visual-Hierarchy.html)

Visual hierarchy refers to the way you **layout** and **display** the content of your page to **guide the viewer's attention in a specfic order**.

**A strong hierarchy can provide a clear path for the eye to follow**, ensuring that the information you convey is consumed in the order that you intended.

- Use different **font sizes** for headings.

- Create **distinct sections** for `navigation` and `footer`.

- implement **callout boxes** and **Call-to-Action (CTA) buttons** for important information.

&nbsp;

## Scale 101

The "scale" of something refers to its **size**.

When you're looking at scaling in your web design, you're looking at the **size relationships between different elements**, and how these elements might adapt to different screen sizes.

- Scaling is crucial in order to guide users through the content.

&nbsp;

Scale is also important for **interactivity**, and the ability to actually use your website.

- if the text in a navigation bar is not at an appropriate scale, smartphone users will have a hard time tapping on the links.

&nbsp;

Scale doesn't apply just to _text_, though. it is also important for _images_.

- While the scale of a banner image might make sense for a desktop layout, it might be too large on a mobile layout.

&nbsp;

## Alignment 101

Alignment is the process of **arranging text and images** in a way that creates a **visual connection** between elements.

- When you are designing web pages, it is important to create **cohesive** and **visually appealing** designs. One way to achieve this is through the use of _alignment_.
  - it helps to create **a sense of order and organization** on the page, making it easier for users to navigate and _understand_ the content.

&nbsp;

There are several types of alignment you can use, but the basic ones are:

### Left Alignment (Horizontal)

it is **commonly used with text** where each element is **aligned to the left margin**.

- Aligning all of the headings and paragraphs on a web page to the left margin makes it **easier for the user to read and follow the content**.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  p {
    text-align: left;
    margin: 10px 0;
  }

  p {
    line-height: 1.5;
  }
</style>

<h1>Why Left Alignment Matters</h1>
<p>
  Left alignment is one of the most common and effective ways to present text on
  web pages.
</p>

<h2>Consistency</h2>
<p>
  Aligning all headings and paragraphs to the left margin creates a clean and
  consistent reading flow.
</p>

<h3>Easy to Follow</h3>
<p>
  Users can easily scan and follow content without confusion or misalignment.
</p>
```

&nbsp;

### Right Alignment (Horizontal)

The opposite of left alignment is right alignment, where each element is **aligned to the right margin**.

- This is often used on websites to **display additional content** like **promotional banners** or **advertisements**.
  - An \*AD that is aligned to the right margin makes it **stand out from the rest** of the content on the page, and **doesn't distract** the user from the main content.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  p {
    text-align: right;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
</style>

<h1>Right Alignment in Web Design</h1>
<p>
  Right alignment is commonly used to display additional or promotional content
  on websites.
</p>

<h2>Secondary Content</h2>
<p>
  Aligning text to the right margin can help separate it visually from the main
  content.
</p>

<h3>Promotional Use</h3>
<p>
  This alignment is often chosen for banners, advertisements, or sidebar
  messages.
</p>
```

&nbsp;

### Center Alignment (Horizontal)

Center alignment is where elements are **centered on the page**.

- This is often used for **headings**, **logos**, and other important **elements that you want to draw attention to**.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  p {
    text-align: center;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<h1>Center Alignment for Impact</h1>
<p>
  Center alignment is perfect for drawing attention to headings and important
  elements.
</p>

<h2>Eye-Catching Layout</h2>
<p>
  By centering key content, you make it stand out and create a balanced visual
  appeal.
</p>

<h3>Common Uses</h3>
<p>
  This technique is often used for logos, hero headings, and call-to-action
  messages.
</p>
```

&nbsp;

### Justified Alignment

Justified alignment is when text is **aligned to both the left and right margins**.

- This is typically used for **descriptive passages** or **articles**, and creates a _clean_ and **professional** look.

```html
<style>
  body {
    font-family: Georgia, serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    line-height: 1.7;
    margin-bottom: 20px;
  }
</style>

<h1>Justified Alignment for Clean Text Blocks</h1>

<p>
  Justified alignment ensures that each line of text stretches evenly between
  the left and right margins. This creates a smooth, block-like appearance that
  looks very polished and professional. It’s commonly used in newspapers,
  magazines, and formal documents where a uniform look is desired.
</p>

<p>
  However, care should be taken with justified text to avoid uneven spacing or
  "rivers" of white space, especially on narrow columns or screens. Proper
  hyphenation and responsive design can help maintain readability.
</p>
```

&nbsp;

### Vertical Alignment

it is used to **align elements along a vertical axis**.

- Vertical alignment can be used, for example, for a **contact form** on a website.
  - Aligning all of the form inputs like the _name_, _email_, and _message fields_ along a vertical axis makes it easier for the user to fill out the form.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 400px;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="e.g., Jane Doe" />

  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="janedoe@example.com"
  />

  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    rows="4"
    placeholder="Write your message here"
  ></textarea>

  <button type="submit">Submit</button>
</form>
```

&nbsp;

## Whitespace 101

White space refers to any type of **space around elements** like _images_, _text_, and _buttons_.

White space is important in design because it **helps create a balance between the elements** on the page.

&nbsp;

Types of White Spaces:

- **Macro** White Space: The **space between larger elements** like _images_, _text blocks_, and _buttons_.

- **Active** White Space: The space that is **intentionally created to help guide the user's eye** and **draw attention** to certain elements on the page.
  - On the freeCodeCamp homepage, the CTA `button` is **visually separated** from other elements.
    - By using white space effectively, we can help to make a CTA `button` more **prominent** and **encourage users to click** on it.

- **Passive** White Space: The **space that is left over** after all the elements on a page have been placed.

- **Micro** White Space: The **space between individual characters in a line of text**.
  - it is important because it helps to **improve readability and legibility**, making it easier for users to scan and understand the content.

&nbsp;

**The Law of Proximity**: This law states that _elements_ that are **close together** are perceived as being **related**, while _elements_ that are **far apart** are perceived as being **unrelated**.

- You can use white space to help group related elements together and help users navigate through the content on your page.

&nbsp;

## Working w/ images

**Create responsive images**.

Responsive images are **images that scale to fit the size of the screen** they are being viewed on.

- This is important because it **ensures that your images look good on all devices**, from _desktops_ to _smartphones_.

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #fefefe;
      color: #333;
      text-align: center;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    p {
      font-size: 16px;
      max-width: 600px;
      margin: 20px auto;
      line-height: 1.7;
      text-align: justify;
    }
  </style>

  <h1>Responsive Cat Image</h1>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
    alt="Two cats peacefully sleeping together."
  />

  <p>
    This image automatically scales based on the screen size. Whether you're
    viewing on a desktop or a mobile phone, it adjusts its size without losing
    proportions, making the design clean and user-friendly on all devices.
  </p>
  ```

&nbsp;

Factor: **The Resolution of An image**

Higher quality images with **better resolution** have **more pixels per inch** (PPI).

- Pixels are **small squares that make up an image**.

- Pixels per inch, or PPI, is **the number of pixels in one inch** of an image.
  - The **higher the PPI**, the **better the image quality**.

Make sure that your images are **high quality** and **look good on all devices**.

- This means that you should **use high resolution images** that are _optimized_ for the web.

&nbsp;

Factor: **The Size of An image**

Make sure that your **images are the right size**, and are **NOT** too large, or too small.

Using **large images** that are meant to fit in **smaller spaces** in the design can **slow down the website** and make it harder for users to load your site.

- Make sure that your images are the **right size** and are **optimized** for the web.

&nbsp;

### image placement

- **Balance**: The **distribution of visual weight** in a design.
  - Make sure there is **a good balance between text and images** on the site, so it creates a **harmonious** design.

  ```html
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 40px 20px;
      background-color: #f9f9f9;
      color: #333;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .text {
      flex: 1 1 400px;
    }

    .text h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .text p {
      font-size: 16px;
      line-height: 1.7;
      text-align: justify;
    }

    .image {
      flex: 1 1 400px;
    }

    .image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>

  <div class="container">
    <div class="text">
      <h2>Balanced Layout</h2>
      <p>
        Balance is essential in web design. By evenly distributing visual
        weight—such as pairing this block of text with a complementary image—you
        create a layout that feels calm, structured, and easy to navigate.
      </p>
    </div>

    <div class="image">
      <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
        alt="Two cats peacefully sleeping together."
      />
    </div>
  </div>
  ```

- **Hierarchy**: The **order in which elements are viewed** on a page.
  - Make sure that images that align with **important content are placed higher** than images that are _less important_.

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 30px 20px;
      background-color: #fff;
      color: #222;
      max-width: 800px;
      margin: 0 auto;
    }

    .section {
      margin-bottom: 40px;
    }

    .section img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    .section h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .section p {
      font-size: 16px;
      line-height: 1.7;
      text-align: justify;
    }
  </style>

  <div class="section">
    <img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
      alt="Two cats peacefully sleeping together."
    />
    <h2>Our Feline Rescue Mission</h2>
    <p>
      This image supports one of our most important stories — the rescue of 12
      stray cats from a storm drain. Placing it at the top ensures visitors
      connect emotionally with our mission right away.
    </p>
  </div>

  <div class="section">
    <h2>Upcoming Fundraiser</h2>
    <p>
      Join us for a small fundraising event to support our shelter. It’ll be a
      fun, casual afternoon with snacks, games, and of course — plenty of cats!
    </p>
    <img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
      alt="Two cats peacefully sleeping together."
    />
  </div>
  ```

- **Alignment**: The **placement of elements in relation to each other**.
  - Make sure that your images are **aligned with the text and other elements** on your site, so that it creates a **cohesive design**.

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 40px 20px;
      background-color: #ffffff;
      color: #222;
      max-width: 900px;
      margin: 0 auto;
    }

    .aligned-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }

    .aligned-content img {
      width: 300px;
      height: auto;
      border-radius: 8px;
      flex-shrink: 0;
    }

    .aligned-text {
      flex: 1;
      min-width: 250px;
    }

    .aligned-text h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .aligned-text p {
      font-size: 16px;
      line-height: 1.7;
      text-align: justify;
    }
  </style>

  <div class="aligned-content">
    <img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
      alt="Two cats peacefully sleeping together."
    />

    <div class="aligned-text">
      <h2>Aligned Elements</h2>
      <p>
        In this example, the image is aligned horizontally next to the text
        block. This creates a visually cohesive layout, where both elements feel
        like they belong together. Proper alignment like this improves
        readability and reinforces structure in your design.
      </p>
    </div>
  </div>
  ```

&nbsp;

Factor: **The Accessibility of An image**

Make sure that the **images are accessible to all users**, including those with _visual impairments_.

- This means that you should **use alt text for your images** so that _screen readers_ can read the text to users who are _visually impaired_.

&nbsp;

## Progressive Enhancement

Progressive enhancement is a design approach that ensures **all users**, **regardless of browser or device**, can access the **essential content and functionality** of an application.

it focuses on delivering **a core experience** that works for _everyone_, **while offering extra features and improvements** to users with more advanced browsers or better internet connections.

Core Principles:

- All **core content** and **basic functionality** should be **accessible on all browsers**.

- All **advanced layouts** should be provided through **external CSS** stylesheets.

- All **advanced functionality** should be provided through **external JavaScript** files.

- A user's **browser preferences should be respected**.

&nbsp;

Using a progressive enhancement approach makes your applications **more accessible**, because **core content and functionality should NOT be blocked in "unsupported" environments**.

- A progressive enhancement approach can also help **improve the performance** of your applications.

- Those users that are working with **slower internet connection** speeds will still be able to access the content because the **browser will download the necessary resources first**.

- Progressive enhancement can also help improve the visibility (**SEO**) of your applications.
  - Search engines will be able to crawl the content of your applications because the **core content is available in the initial HTML response**.

&nbsp;

While some have criticized this approach deeming that it is **not always realistic** for applications that _rely heavily on JavaScript_ for their functionality, it **is still a good practice** to follow when building applications.

&nbsp;

## User-Centered Design

User-centered design is **a web development approach that prioritizes the end user**, from their needs to their preferences and limitations.

The goal of user-centered design is to craft a _web page_ that is **intuitive**, **efficient** to use, and **pleasing** for your users to _interact_ with.

&nbsp;

One of the first aspects of user-centered design is to **consider the target demographics**.

For example, if your intended user-base is **younger**, you might leverage more flashy **eye-catching designs** that grab their _attention_ immediately.

For an **older** audience, you might focus more on **clear and streamlined designs without distractions**.

&nbsp;

Another aspect to consider is the **goal of the end users**.

For example, if you're building an **e-commerce** page for your products, you probably don't want to advertise someone else's products on your page.

But if you're building a **personal blog**, you might include **advertisement elements to generate revenue** from _passive readers_.

&nbsp;

**User behavior** is an important factor as well.

You'll want to leverage an **analytics tool**, like _Google Analytics_, to measure **how your users engage with your pages**.

- This can reveal areas where users might be getting "stuck" and leaving your page, or **opportunities to improve the overall interaction flow**.

&nbsp;

A key to user-centered design is to **actually involve your users**. Providing **a feedback channel** where they can share their experiences and pain points with your site allows you to capture vital information and iterate further to improve.

Ultimately, User-centered design means **you need to put the user at the forefront of your decision making**, whether that's through _research_ or direct _feedback_.

&nbsp;

### User Research

User research is the **systematic study of the people who use your product**.

The goal is to **measure user needs**, **behaviors**, and **pain points**.

&nbsp;

Net Promoter Score (**NPS**): it measures **how likely your users are to recommend your product** to a friend.

- NPS is measured through **a survey offered at key milestones** along the user's journey, such as after _7 days_, _30 days_, and _90 days_.

- NPS is measured on **a scale of** `0` to `10`, with `9` and `10` indicating an **active promoter** of your site.

&nbsp;

Another research vector is an **exit interview**.

This is **a survey** you show to your users **when they cancel a subscription** or **delete an account**.

- Data from this survey can give you **insight into the factors causing user churn**, so you can address them.

&nbsp;

### Testing

User testing refers to the practice of **capturing data from users as they interface with your application**.

For example, **a video game going through beta testing** is a form of _user testing_.

&nbsp;

One you might run into as a _web developer_ is **A/B testing**.

- A/B testing involves **shipping a new feature to a randomly selected subset** of your user base.
  - You can then leverage _analytics data_ to **determine if the feature is beneficial**.

&nbsp;

### User Requirements

User requirements refer to **the stories** or **rubric** that your application needs to follow.

- This can **inform the development process**.

&nbsp;

User requirements might be **defined by user research**, or **industry standards**. They can even be defined by **stakeholder input**.

These requirements may be **functional**, meaning **they dictate how your application should work**, or **non-functional**, meaning **they define how your application should behave**.

&nbsp;

User requirements are **NOT static**, either.

The information from both **user testing** and **user research** can **impact the requirements**, and they will change as your user base changes.

&nbsp;

## Designing A [Dark Mode Toggle](./EXERCISES/08-Dark-Mode-Toggle/index.html)

Dark mode is a special feature on web applications where you can change the default light color scheme to a **dark color scheme**.

This helps **reduce eye strain** and **improve readability in low-light conditions**.

&nbsp;

Here are some **best practices** to ensure that your **dark mode** feature is _effective_ and _user-friendly_.

The first consideration is the **avoidance of saturated colors** in _dark mode_.

- **Saturated** colors are **colors that are bright and intense**.
  - For example, a **bright magenta** button against a **dark gray** background can be **too intense** and _cause eye strain_.

instead, you should **use desaturated colors** in _dark mode_.

- **Desaturated** colors are **colors that are less intense**, **have a lower saturation** level, and are more **comfortable to look at** in _dark mode_.

&nbsp;

Another consideration with _dark mode_ is the use of pure **black backgrounds** with **white text**.

- While this _high contrast_ can be effective, it can also be **too harsh** on the _eyes_.

_instead_, consider using a **dark gray background** with **light gray text** for a _softer contrast_.

- Text will be **easier on the eyes** and **more comfortable to read** in _dark mode_.

&nbsp;

Another consideration is the use of dark mode with the site's **brand identity**.

- A brand identity is **a set of visual elements that represent a brand**, such as the _logo_, _colors_, and _typography_.

When implementing dark mode, you should **consider how the dark mode feature is consistent with your brand's colors and style**.

- it is fine to have the brand _icon_ and _buttons_ at full _saturation_, while the _surrounding elements_ are _desaturated_.

&nbsp;

in general, when it comes to _design_, you always want to **be mindful of the user experience** and **contrast levels**.

&nbsp;

## Designing Breadcrumbs

Breadcrumbs are **a navigation aid that shows the user where they are** in the site's _hierarchy_.

When it comes to web design, there are many types of _navigational aids_ you can use. Examples include _top navigation bars_, _sidebars_, and _footers_.

- But if your site is on the more _complex side_ with **deeper levels of navigation**, you might want to consider using _breadcrumbs_.

  ```html
  <div class="breadcrumbs">Home / Electronics / Phones / Smartphone XYZ</div>
  ```

  - in most websites, _breadcrumbs_ are displayed at **the top** of the page, showing the user **the path they took to get to the current page**.

The use of _breadcrumbs_ is helpful because it can help users understand **where they are** in the site's _hierarchy_ and **how to navigate back** to the previous pages.

- This is especially useful when a user has come from a search result or an _external link_ and needs to **understand the context of the page they are on**.

&nbsp;

When it comes to designing _breadcrumbs_, there are a few _considerations_ to keep in mind:

The _first_ is to decide on what **the separator** will be.

- The _separator_ is **the character that separates the different levels of the hierarchy**.
  - Common separators include the greater than sign (`>`), right angle quotation marks (`»`) ,and the forward slash (`/`).

    ```html
    <div class="breadcrumbs">
      Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
    </div>
    ```

The _second_ consideration is **the placement** of the _breadcrumbs_.

Breadcrumbs are **typically placed at the top of the page**, either **above or below the main navigation bar**.

- Users shouldn't have to _struggle_ to find the _breadcrumbs_, so **make sure they are visible** and **easy to locate**.

  ```html
  <nav class="main-nav">
    <a href="#">Home</a>
    <a href="#">Electronics</a>
    <a href="#">Phones</a>
  </nav>
  <div class="breadcrumbs">
    Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
  </div>
  ```

Another consideration is **the size** of the _breadcrumbs_.

You want to **make sure the breadcrumbs are large enough to be easily read**, _but_ **not so large** that they take up _too much space_ on the page.

Remember, the breadcrumbs are **NOT** meant to serve as a _primary navigation tool_, but _rather_ as **a secondary navigational aid**.

- in websites where there is a lot of information on a page, users can easily see _where they are_ in the hierarchy and _navigate back_ to previous pages using _breadcrumbs_.

  ```html
  <div class="breadcrumbs">
    Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
  ```

&nbsp;

if your site is _simple_ and has a _shallow hierarchy_, _breadcrumbs might not be necessary_.

- A shallow hierarchy means that the site has only a _few levels of navigation_, so breadcrumbs _might not add much value_.

Typically, you will see breadcrumbs on _e-commerce_ sites, _news_ sites, and other sites with a _deep hierarchy_ like _technical documentation_ sites.

&nbsp;

## Designing [Cards](./EXERCISES/09-Cards/index.html)

Card components are used to help **display information in a structured way**, and are a very common occurrence in _e-commerce_, _social media_, and _news sites_.

Best Practices:

The _first_ consideration for card design should be **simplicity**.

You don't want your cards to be _visually cluttered_ or display _too much_ information.

- For example, if a card design is _visually cluttered_, there will be _too much_ information for the user to process _all at once_.

&nbsp;

_Another_ thing to consider is where the user can **click on the card**.

- Some card designs will have a single `button`, making it _obvious_ where the user can _click_.

- Other card designs will have the **entire card clickable**.
  - When the user _hovers_ over any part of the card, the card will **change color** or have a **shadow effect** to indicate that the card is _clickable_.

`Note`: Whatever design you choose, it needs to be **consistent** throughout your site and easy for the user to understand.

&nbsp;

Another consideration is the use of **quality media** on your cards.

Choosing **high-quality media** can significantly **enhance the user experience**.

if you are using images or videos for say a product card, the higher the _quality_ the more the user will be _interested_ in that product.

- But, if you use _poor media quality_, then the user \*might not _trust_ the quality of your _products_ and _services_.

&nbsp;

One of the last things to consider is the use of **color hierarchy**.

You want to make sure that the **most important information** on the card is the **most prominent**.

- You can use **bright colors for important elements** like a _call-to-action_ `button`, and **light colors** for **less important** items on a card.

&nbsp;

## Designing [infinite Scrolls](./EXERCISES/10-infinite-Scrolls/index.html)

infinite scrolling is **a design pattern that loads more content as the user scrolls** down the page.

Oftentimes, this is used on social media sites like _Twitter_ or _instagram_.

- For example, if you are logged in and want to see more _tweets_ or _posts_, you can scroll down and more _tweets_ and _posts_ will load.

&nbsp;

### Pagination

Pagination is **a design pattern that breaks up content into pages**.

- This is often used when there is a _lot of content_ to display.
  - An example of pagination is when you _search_ for something on _Google_ and you see the search results on _multiple pages_.

&nbsp;

With _pagination_, you have to **click on a button to go to the next page**.

With _infinite scrolling_, you just **keep scrolling down and more content will load**.

`Note`: infinite scrolling is also used as a _substitute_ for pagination.

&nbsp;

Best practices for implementing **infinite Scrolls**:

- Provide a "**Load More**" `button` that loads the next set of results when the user _clicks_ on it.
  - This is a good way to give the user **control over when they want to see more content**.

- Add a "**Back**" `button` that gives users **the ability to go back** to the previous page **without having to scroll** all the way back up.
  - "_Back to the top_" `button` which leads users _back to the top_ of the page of results.

- Provide a **loading indicator**.
  - Users should have **a clear indication that more content is being loaded**; otherwise, they might think that the page is _broken_.

- Keep the `footer` _accessible_ to the user.
  - if the footer contains **important** information, then it should be **accessible** to the user at all times.

&nbsp;

## Designing [Modal Dialogs](./EXERCISES/11-Modal-Dialogs/index.html)

Modal the type of **pop-up** that a website might show you on top of their content.

- HTML has a `dialog` element that you can use to create _modals_.

- The content behind a modal is usually _dimmed_.
  - This helps the user visually _focus_ on the area you want them to interact with – in this case, the _modal_.

&nbsp;

Best Practices:

- Allow the user to **click outside** of the modal to **close** it.

- You'll often see very **prominent buttons** on modals. These are called **CTAs**, or `call-to-action`.
  - You want these to be **easily identifiable** since the purpose of interrupting the user's flow with a modal is to **prompt them to take a specific action**.

  - Modals should _also_ have a **close** `button`.
    - While you may really want the user to _click_ on your CTAs, it's _important_ to **give them an option to back out** of the modal and _resume_ whatever they were previously doing.

&nbsp;

`Note`: There are, _of course_, **accessibility concerns** with _modals_, such as correctly managing focus on elements. However, if you use these general practices as your starting point, you'll have a solid foundation to build on.

&nbsp;

## [Progress indication](./EXERCISES/12-Progress-indication-Bar/index.html)

Progress indication is a way to show users _how far_ they are in a _process_, and _how much more_ they need to do.

- it can be used in **forms**, **registration**, and **setup** processes.

For example, you can use **a progress indication** bar to show users what is left to do when filling forms.

- You don't want to create a _situation_ where the user needs to fill out a lengthy form and they don't know _how many more steps_ they need to complete.

- **Transparency** is key so the user knows whether they have enough time to sit down and complete the form, or if they need to come back later.

&nbsp;

Best Practices:

- Keep it _simple_.
  - You do NOT want to _overwhelm_ the user with _too much information_ where they get _frustrated_ and leave the site.

- Make it possible to _go back_ to **previous steps**.
  - This is important because users may want to go back and _check_ their previous answers, or **make changes**.

- Make the progress indication section **easy to find**.
  - if the user can't find it, what's the point?

- Have **clear** _section_ **titles**, **percentages**, or **steps**.
  - if you just have a progress bar with _no context_, the user won't know _what it means_.

&nbsp;

## Designing A [Shopping Cart](./EXERCISES/13-Shopping-Cart/index.html)

There are thousands of _e-commerce_ websites on the internet, and the shopping cart is a crucial part of the _e-commerce_ experience.

- A **good** design can make the shopping cart experience more _enjoyable_ and _increase sales_.

- A **poor** design can lead to _abandoned carts_ and _lost sales_.

&nbsp;

Best Practices:

- The shopping cart **icon**.
  - A common icon is **a shopping cart with a handle and wheels**.
    - Other icons might be a _shopping bag_ or a _basket_.

    - But, you shouldn't choose an _icon_ that is _too abstract_, or _difficult to understand_.

- Make sure the **shopping cart** is **visible to users**, **at all times**.
  - The _cart_ is usually displayed in the _upper right_ corner of the page.

  - The _number of items_ in their cart should be displayed next to the _cart icon_.

- Provide _a clear way_ for users to **update the quantity of items** in their cart.
  - This can be done by providing a **quantity input field** next to _each item_ in the cart.

  - You should also provide a "**Remove**" `button` next to _each item_ in the cart.

- The **total cost of all items** in the _cart_ should be **displayed prominently** on the page.
  - `Note`: Do **NOT** play _hide and seek_ with the user!

- Provide a clear **call-to-action** `button` for users to _proceed to checkout_.
  - This `button` should be the **most prominently displayed** element on the page, so users know exactly what to do next.
    - You shouldn't have _too many buttons_ on the page, as this can lead to _confusion_.

  - Use the _brand's_ **primary color** for the `button`, so it **stands out** from the rest of the page.

&nbsp;

## [Progressive Disclosure](./EXERCISES/14-Progressive-Disclosure/index.html)

A progressive disclosure is **a design pattern used to only show users relevant content based on their current activity** and **hide the rest**.

- This is done to **reduce cognitive load**, and make the user experience more _intuitive_.

&nbsp;

For example, when you use Google's search page, _most_ of your searches will be _simple_. So having a _simple user interface_ with very _few options_ makes sense. But for the few times you will need a _more advanced search_, Google provides _an advanced search option_ that will reveal _more options_.

- You can find Google's advanced search option from the _settings menu_ on the Google homepage. Or you can go to `google.com/advanced_search`

&nbsp;

Another example of _progressive disclosure_ would be the "_More details_" `button` on products in an _e-commerce_ website. When you visit a site like _Amazon_, you will see a list of product images in different categories.

- This allows users to shop with _ease_, and NOT be _overwhelmed_ by _too much information_.

if the user is _interested_ in a particular product, they can _click_ on the product image to reveal more details about the product.

Displaying all of the information right away may be **overwhelming** for the user. So, by using _progressive disclosure_, the user can choose to see more information when they are ready.

&nbsp;

Best Practices:

- All **important information should be visible**, at all times.
  - Users should not have to _struggle to find_ key information because it is hidden by extra advanced features.

- Provide a **single access point** for users to access _additional features_ or information.
  - This could be a `button` or `link` that is **always visible** on the page.
    - Adding **multiple access points** can be **confusing** for users and can lead to a poor user experience.

- All **additional information** should be **available** when needed.

&nbsp;

## Deferred/Lazy Registration

Lazy registration is **a UI design pattern that allows users to browse and interact with your application without having to register**.

- A good example of this would be an _e-commerce_ site.
  - Users should be able to _browse_ through the products and add a few items to their _cart_.
    - Then, if they are _interested_ in purchasing, they will need to _register_.

- Another good example of lazy registration would be _YouTube_.
  - YouTube is a video sharing platform with millions of videos on everything from _tech_, _pop culture_, _gaming_, and more.
    - if someone visits YouTube, they can watch as many videos as they like _without_ needing to _sign in_ or register.
      - However, if they want to _like_, _comment_, or _subscribe_ to a channel, they will _need to register_.

The reason behind this is that users need to **see the value** the site offers and **feel** like the application is **safe** to provide their information.

- Otherwise, they will NOT be willing to register and you will lose potential customers.

&nbsp;

**_The Trust Factor_**: You will need to make sure to **communicate that the user's sensitive data will be protected** and are secured with the site.

&nbsp;

## Design Briefs

When it comes to designing _new features_ or _applications_, a good first step would be to create _a design brief_.

A _design brief_ is **a document that outlines the objectives**, **goals**, and **requirements** of a project.

- it is **a roadmap that guides the design process** and ensures that the final product meets the needs of the client.
  - Usually the _client_ will write the _design brief_ and it will serve as a working draft.

  - Sometimes, the _designer_ might write one and consult with the client to make sure it meets their needs.

&nbsp;

A few **key elements** that should be included in a _design brief_:

- The **overview** of the _project_ and _business_.
  - This overview should include the **company's details**, **mission**, **values**, _unique_ **selling points**, and **products** or **services**.

- **Document the goals and objectives** for the project.
  - This should include the **purpose** of the project, and **the desired outcomes**.
    - increasing traffic

    - increasing the number of monthly page visits by X percent.

- The **target audience**.
  - The _design brief_ should include information about the **target demographics**, **interests**, and **needs** of the audience.
    - You should also include information about the **competition** and how the project will _differentiate_ itself from the competition.

- The **project scope**.
  - This should include the **deliverables**, **timeline**, and **budget**.
    - The _deliverables_ should include **a list of all the items that will be produced as part of the project**, such as _mockups_, and _final designs_.

  - Without clearly defining _project scope_, things can get out of hand and go **over budget**.
    - So, it is best to be **as detailed as possible** about _what is expected_ to be delivered and _by when_.

&nbsp;

One of the challenging aspects about project design is the **timescale** and **budget**.

it is important to **be realistic about what can be achieved within the given timeframe and budget**.

So, having a _design brief_ that _outlines_ these **constraints** is important.

Once all of these details have been _discussed_ and _documented_, the design brief should be _reviewed_ and _approved_ by all _stakeholders_ before the project begins.

At that point, _the designers_ can get started with their work.

&nbsp;

### The Developer

The developer's role is to **take the designs**, **understand the project requirements**, and **turn them into a working product**.

- This involves _writing code_, _testing_, and _debugging_ the application to **ensure that it meets the requirements outlined** in the _design brief_.

Oftentimes, developers will work in _teams_ where the work is split up between _multiple developers_.

&nbsp;

### The Project Manager

There will also usually be a _project manager_ who will be **responsible for coordinating** the work and **making sure the project stays on track**.

&nbsp;

## Common Design Tools

Design is the _foundation_ of every _enterprise-level_ web application. This is why _designers_ and _developers_ work closely to create _user-focused_ interfaces that are _visually appealing_ and _functional_.

Most of these _design tools_ excel in **_vector-based_ design** and **prototyping**.

- _Vector-based_ design involves **creating digital art using mathematical formulas** to define _lines_, _shapes_, and _colors_.

- _Prototyping_ refers to **the process of creating an interactive model of a product** or UI.

&nbsp;

Some common _vector-based_ design tools include:

- **Figma**
  - This _cloud-based_ tool specializes in User Interface and User Experience (`UI/UX`) design.

- **Sketch** (Mac Only)
  - it is popular for its _intuitive interface_ and _simplicity_, making it ideal for developers who want to _quickly create prototypes_.

- **Adobe XD**
  - A _vector-based_ design and prototyping tool for UI/UX design, known for its **seamless integration with other Adobe apps** like Photoshop, Illustrator, and After Effects.

&nbsp;

Some more design tools:

- Canva
- Framer
- InVision
- Adobe Photoshop
- Adobe Illustrator
- Miro

&nbsp;

## Units of Measurement in CSS

As you design your pages, you will work with _different properties_ like **widths**, **heights**, **padding**, **margins**, and more. When you define these properties, you will need to specify **the length units of measurement** you want to use.

There are two types of units you can use to define these properties:

### 1. Absolute Units

Absolute length units are of **fixed length** and are **NOT relative to anything else**.

Some _absolute units_ include:

- The `px` (_pixels_) unit, which is equal to _1/96th_ of an _inch_.
  - Pixels are the _most common_ absolute unit used for providing **precise control over element's dimensions**, **spacing**, and **layout**.

    ```css
    .box {
      width: 100px;
      height: 100px;
      background-color: red;
      margin: 10px;
    }
    ```

    - Sometimes you might use _pixels_ for **margins**, **padding**, and **borders**.

  `Note`: While `1px` is standardized as _1/96th_ of an _inch_ for the purposes of CSS layout, **the actual physical size of a pixel may differ depending on the display**.

- The `in` (_inches_) unit, which is equal to _96px_

- The `cm` (_centimeters_) unit, which is equal to _25.2/64_ of an _inch_

- The `mm` (_millimeters_) unit, which is equal to _1/10th_ of a _centimeter_

- The `q` (_quarter-millimeters_) unit, which is equal to _1/40th_ of a _centimeter_

- The `pc` (_picas_) unit, which is equal to _1/6th_ of an _inch_

- The `pt` (_points_) unit, which is equal to _1/72th_ of an _inch_

&nbsp;

### 2. Relative Units

Relative means that the **length is relative to something else**, like _the size of the screen_ or _the size of the parent element_.

#### I. Percentages (`%`)

Percentages in CSS are _relative units_ that allow you to define **sizes**, **dimensions**, and other properties **as a proportion of their parent element**.

When you use a percentage value, you're essentially saying, "_Make this X% of its container_." This makes percentages incredibly useful for creating **responsive designs that adapt to different screen sizes**.

- Percentages are ideal for creating **fluid layouts** that adjust to _various screen sizes_. For instance, setting a container to `width: 80%` ensures it takes up **80% of its parent's width**, _regardless_ of the device.

  ```css
  .parent {
    width: 100%;
    height: 300px;
    background-color: lightblue;
  }

  .parent .child {
    width: 80%;
    height: 100%;
    background-color: red;
  }
  ```

- Using percentages for **flexible images** is another _common_ practice. By applying `max-width: 100%` to images, you allow them to **scale down** on smaller screens while **maintaining their aspect ratio**.

  ```css
  img {
    max-width: 100%;
    height: auto;
  }
  ```

- While _less common_, percentages can also be used for **font sizes** to create _scalable typography_. For example, `font-size: 120%` would make the text **20% larger than its parent's font size**.

  ```css
  .text-container {
    font-size: 16px;
  }

  .text-container .text {
    font-size: 120%;
  }
  ```

- Percentages can be particularly handy for **vertical centering**. Here's an example of how you might use percentages with the `transform` property to _center an element vertically_.

  ```css
  .centered {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 300px;
    background-color: red;
  }
  ```

  - This example positions the element **50% from the top** of its container, then uses `transform` to **move it back up by half its own height**, effectively centering it vertically.

**Percentages are always relative to something**. For horizontal properties like `width`, they're relative to the **parent's width**. For vertical properties like `height`, they're usually relative to the **parent's height** (_if specified_).

- Keep in mind: _percentage-based heights_ can be _tricky_\* if the **parent** does NOT have a **defined height**.

`Note`: _Be cautious_ when **nesting elements with percentage-based dimensions**, as this can lead to **unexpected results**.

&nbsp;

#### II. `em`

`em` units are **relative to the font size of the element or the parent element**.

When you are working with modular components like **buttons** or **cards**. By using `em` units, you can ensure that _all aspects_ of the component (such as `padding`, `margin`, and `border`) **scale proportionally with the font size**, keeping consistent proportions.

if you are using `em` for the `font-size` property, **the size of the text will be relative to the font size of the parent element**.

```css
.para {
  font-size: 20px;
  margin-bottom: 1.5em;
  border: 2px solid red;
}

.blue-box {
  background-color: blue;
  color: white;
  padding: 10px;
  width: 100px;
  height: 100px;
}
```

- For the `para` class, we set the `font-size` to `20px` and the `margin-bottom` to `1.5em`.
  - This means that the `margin` will be **`1.5` times the font size of the paragraph element**.
    - `1.5em` results in **`30px` of margin at the bottom** of the paragraph.

- if we _remove_ the `font-size` property from the `para` class, the `margin-bottom` will be relative to the `font-size` of the parent's, i.e., in this case, the `body` element, which has a _default_ `font-size` of `16px`.

&nbsp;

So, up until this point, we have been setting the font size for an element using pixels(`px`). But that does present some _challenges_ for users.

Inside your _browser_ settings, you can control the _default font size_.

For those with _visual impairments_, they may **increase the font size** to make it _easier to read_. But if you are setting pixels for the font sizes in your web designs, **the text will not scale proportionally** with the rest of the content.

One way to address this issue is to use `rem` units for typography.

&nbsp;

#### III. `rem`

A `rem` unit is **relative to the font size of the root element**, which is the `html` element.

`rem` units are **preferred over pixels** for typography because they **scale proportionally with the user's browser settings**.

- This makes your content **more accessible** to users with _visual impairments_.

&nbsp;

By default, the `font-size` of the `html` element is `16px`.

if the user **increases the font size** in their _browser_ settings, the **`font-size` of the `html` element will increase**, and all `rem` units will **scale proportionally**.

```css
.para {
  font-size: 1.2rem;
  margin-bottom: 1.5em;
  border: 2px solid red;
}
```

- By setting the `font-size` to `1.2rem`, the `font-size` of the paragraph element will be `1.2` times the `font-size` of the root element.
  - if the user has NOT changed the default `font-size`, the `font-size` of the paragraph element will be `19.2px` because it is `1.2` times of `16px`.

`Note`: `rem` units can also help maintain **consistent spacing** and **layout** across _different_ elements.

&nbsp;

#### IV. `vh` & `vw`

In CSS, `vh` and `vw` are _viewport-relative_ units that allow you to **size elements based on the dimensions of the browser window**.

These units are particularly _useful_ for creating **responsive designs** that adapt to different screen sizes.

- `vh` stands for "_viewport height_," and `1vh` is equal to `1%` of the viewport's height.

- `vw` stands for "_viewport width_," and `1vw` is equal to `1%` of the viewport's width.
  - This means that if you set an element's height to `100vh`, it will occupy **the full height of the viewport**, _regardless_ of the actual pixel dimensions of the device.

These units are especially handy when you want to create **full-screen layouts** or _elements_ that maintain **a specific proportion of the screen**.

&nbsp;

The _advantage_ of `vh` and `vw` units is that **they respond to changes in the viewport size in _real-time_**.

This means that if a user **resizes** their _browser window_, **elements sized with these units will adjust accordingly** _without_ needing to _reload_ the page.

However, it's important to use these units _judiciously_.

For example, you might want to use them to create a _hero_ `section` that always **fills the entire screen**.

```css
body {
  margin: 0;
  font-family: sans-serif;
  border: 5px dashed #333;
}

.hero {
  height: 100vh;
  width: 100vw;
  background-color: #add8e6;
  padding: 2em;
}
```

- This CSS ensures that _the hero section_ will always be exactly **the size of the viewport**, _regardless_ of the device's screen size.

&nbsp;

`vh` and `vw` units can also be used for typography to create **responsive text sizes**.

```css
h1 {
  font-size: 5vw;
}
```

- This will set the `font-size` of the `h1` element to `5%` of the _viewport width_, allowing the text to **scale smoothly with the browser window size**.

`Note`: Setting `font-size` _solely_ with `vw` units, for example, can lead to text becoming **too small on narrow screens**, _or_ **too large on wide screens**.

&nbsp;

**Consideration for mobile devices**: The viewport height can change when the **browser's address bar** _appears_ or _disappears_, which can cause **unexpected layout shifts**, if you're using `vh` units extensively.

In summary, `vh` and `vw` units are powerful tools for creating **responsive layouts and elements** that adapt to the viewport size.

They're particularly useful for **_full-screen_ sections**, maintaining **aspect ratios**, and creating **smoothly scaling designs**.

_However_, they should be used _thoughtfully_ and often in combination with other CSS techniques to ensure the best user experience across all devices.

&nbsp;

## The `calc()` Function

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
