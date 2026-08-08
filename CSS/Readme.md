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





&nbsp;

&nbsp;

&nbsp;

&nbsp;
