# [introduction to CSS](https://www.freecodecamp.org/learn/responsive-web-design-v9/)

w/ freeCodeCamp.org

&nbsp;

if you think of a website as a house, `HTML` would be the foundation and framework, while `CSS` would be the paint, wallpaper, and decorations that make the house *visually appealing* and **unique***

- if `HTML` is the structure of a web page, `CSS` is what makes it *look good*.

- `CSS` works by selecting `HTML` *elements* and applying styles to them.

- `CSS` plays a vital role in creating visually appealing, responsive, and *user-friendly* websites.

Another important feature of `CSS` is its *cascading* nature, which is where the "cascading" in its name comes from (`Cascading Style Sheets`). This means that styles can be *inherited* and **overridden**, allowing for a hierarchical structure of *styling*. it allows you to build engaging web *experiences* that capture users' **attention** and enhance their interaction with web content. 

&nbsp;

## Basic Anatomy of a CSS Rule

1. A `selector`, which is a pattern used in CSS to identify and **target** specific HTML elements for styling.

    - `type` selectors
  
    - `class` selectors
  
    - `ID` selectors

2. A `declaration` block, which is a set of *styles* for a given selector, or *selectors*.

     - `property`

     - `value`

```css
selector {
  property: value;
}
```

Multiple selectors sharing the same set of styles

```css
selector1, selector2 {
  property: value;
}
```

`Note`: After each *property* name, you need to place a colon(`:`), and after each *value*, you should have a semicolon(`;`).

### Fallbacks

You can add a fallback value by adding another value separated by a comma. 

  - Fallbacks are used in instances where the initial is not found/unavailable.

```css
h1, h2 {
  font-family: Impact, serif;
}
```

### Default link styles

- You change the properties of a link when the link has been **visited** by using a *pseudo-selector* that looks like `a:visited { propertyName: propertyValue; }`.

- You change the properties of a link when the mouse **hovers** over them by using a *pseudo-selector* that looks like `a:hover { propertyName: propertyValue; }`.

- You change the properties of a link when the link is being **clicked** by using a *pseudo-selector* that looks like `a:active { propertyName: propertyValue; }`.

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

- A **descendant** combinator is used to target elements matched by the second selector if they are nested within an ancestor element that matches the first selector. An ancestor can be a parent element or a parent's parent.

  ```css
  figure img {
  border: 1px solid black;
  }
  ```

- The **child** combinator (`>`) in CSS is used to select elements that are direct children of a specified parent element. 

  This combinator targets only elements with a *specific* parent, making your CSS rules more precise and preventing *unintended* styling of deeper nested elements.

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

- The **next-sibling** combinator (`+`) in CSS selects an element that immediately follows a specified sibling element. This combinator is useful when you want to apply styles to an element that directly follows another element, allowing for targeted styling based on the element's position relative to its siblings.

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

  - if you wanted to apply a **black border** around the `figcaption` element, you can use the *next-sibling* combinator like this:

  ```css
  img + figcaption {
  border: 1px solid black;
  }
  ```

- The **subsequent-sibling** combinator (`~`) in CSS selects **all** siblings of a specified element that come after it. Unlike the *next-sibling* combinator, which targets only the immediately following sibling, the *subsequent-sibling* combinator (`~`) can target **any** siblings that follow the specified element, offering greater flexibility in *styling*.

  ```html
  <div class="container">
  <h2>Subheading</h2>
  <p>First paragraph.</p>
  <p>Second paragraph.</p>
  <p>Third paragraph.</p>
  <p>Another paragraph element</p>
  </div>
  ```
  - if you want to style **all** of the paragraph elements that come after the `h2` element, then you can use the *subsequent-sibling* combinator like this:
  
  ```css
  h2 ~ p {
  color: green;
  }
  ```
  
  - The *subsequent-sibling* combinator (`~`) targets all paragraph siblings that appear after the `h2` element, regardless of whether they are immediate siblings.

&nbsp;

## `inline` vs `block-level` elements

**Block-level** elements are elements that take up the **full width** available to them by default, stretching across the width of their container.

  - These elements always start on a **new line** and push other content to the *next line*, creating a "block" of content.

  - Block-level elements have the CSS property `display: block;` applied by default. 

  - Block-level elements are ideal when you want content to stack **vertically**, such as paragraphs, sections, or larger blocks of content. 

  - They're commonly used to define the **layout** and **structure** of a webpage.

  - Examples include: `<div></div>`, headings, `<p></p>`, `<ol></ol>`, `<ul></ul>`, and `<section></section>` elements.

**inline elements**, unlike block-level elements, they take up **only as much width as they need** and **do not** start on a *new line*. 

  - These elements flow within the content, allowing text and other inline elements to appear **alongside** them.

  - inline elements have the CSS property `display: inline;` applied by default. 

  - inline elements are best used for styling smaller portions of text or content **within a line**, such as emphasizing a word, creating hyperlinks, or applying specific styles to parts of a paragraph.

  - `inline` elements **cannot** have their size controlled.

  - Examples include: `<span></span>`, `<a></a>`, `<img>` elements.

`NOTE`: You change the behavior of a *block-level* element to behave like an *inline element* by: `display: inline;`

### `display: inline-block;`

The inline-block property is a **hybrid** of these two behaviors. Like inline elements, inline-block elements remain in the text flow *without* starting on a new line.

  - They behave like inline elements, but unlike inline elements, you can **adjust** the **width** and **height** of an `inline-block` element.

  - `inline-block` elements allow for **full control over dimensions** while still **staying inline** with other content.

You can use it for creating layouts that require both **alignment** and **dimension** control within a *continuous text flow*.

&nbsp;

## `margin` & `padding`

**Margins** control the space **outside** an element, helping to separate it from other elements and define the layout structure. 

  - Using a **singular** value on the `margin` shorthand, that exact value will be applied to all four sides of the target element.

  - Using **two** values, the **first** value applies to the **top** and **bottom**, while the **second** value applies to the **left** and **right** sides of the element.

  - If **three** values are provided, the **first** value applies to the **top** margin, the **second** value to the **left** and **right** margin, and the **third** value to the **bottom** margin.

  - When using **four** values, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

**Padding** controls the space **inside** an element, improving content readability and *aesthetic* appeal.

  - The `padding` property applies space **between the content** and its **border**.

  - Shorthand rules are the same as the margin ones.

&nbsp;

## CSS Specificity

CSS Specificity determines **which styles are applied** to an element **when multiple rules** could apply.

CSS specificity is **calculated** based on the **type of selectors** used, and by a *four-part* value `(a, b, c, d)`:

- `a`: inline styles (`1` or `0`).

- `b`: Number of `ID` selectors.

- `c`: Number of `class` selectors, `attribute` selectors, and `pseudo-classes`.

- `d`: Number of `type` selectors, `pseudo-elements`, and `universal` selectors.

**Each part** of the specificity *value* carries **different weight**:

1. **inline styles** (`a`) have the **highest** weight, contributing a value of `1` to the **first** part of the specificity value.

2. **ID selectors** (`b`) carry the **higher** weight, with each `id` contributing `1` to the **second** part of the specificity value.

3. **Class selectors**, **attribute selectors**, and **pseudo-classes** (`c`) carry **moderate** weight, with each contributing `1` to the **third** part of the specificity value.

4. **Type selectors** and **pseudo-elements** (`d`) have the **lowest** weight, with each contributing `1` to the **fourth** part of the specificity value.

- **Universal selector** (`*`): The universal selector contributes `0` to the specificity calculation and **does not affect specificity**. it's inclusion in a selector **does not change the specificity value**.

&nbsp;

`Note`: **inline** CSS has the **highest** specificity because it is *applied directly to the element*. it **overrides** any internal or external CSS. The *specificity value* for inline styles is `(1, 0, 0, 0)`.

&nbsp;

### internal CSS

internal CSS is defined within a `style` element in the `head` section of the HTML document. it has **lower specificity than inline styles** but can **override** external styles.

The *specificity value for internal styles* is determined by the *selectors used*. 

- For example, an `ID` selector within **internal** CSS has a specificity value of `(0, 1, 0, 0)`.

&nbsp;

### External CSS 

External CSS is linked via a `link` element in the `head` section and is written in separate `.css` files. it has the **lowest** specificity but provides the best **maintainability for larger projects**.

The *specificity value for external styles* is also determined by the *selectors used*.

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

ID selectors are among the most powerful selectors in CSS, allowing developers to *apply styles to specific elements* with **unique** identifiers. **No** two elements should **share** the same ID.

- The **specificity** value for an ID selector is `(0, 1, 0, 0)`.
  
  - This means that `ID` selectors can **override** `class` selectors and `type` selectors but can be **overridden** by `inline` styles.

- Highly effective for targeting *individual* elements that need **unique styling**.

```css
#unique {
  color: purple;
}
```

&nbsp;

## `!important` Keyword

The `!important` keyword in CSS is used to give a style rule the **highest priority**, allowing it to **override** any other declarations for a property. When used, it **forces** the browser to apply the specified style, **regardless of the specificity** of other *selectors*.

- it applies a style **regardless of other rules' specificity**.

  - However, the `!important` keyword *does not change the specificity* of the CSS selector itself. it simply **ensures** that the *rule* with `!important` is *applied*, even if there are other *conflicting rules* with higher specificity.

- Another appropriate use case for the `!important` keyword is to **override styles from third-party libraries** or frameworks when you do not have control over the original CSS.

```css
.para {
  background-color: black !important;
  color: white !important;
}
```

  - The `!important` keyword is used *after the CSS* value and *before the semicolon*.

&nbsp;

`Note`: Overusing the `!important` keyword can lead to **difficulties in maintaining and debugging** your CSS, as it *breaks the natural cascading of styles* and can lead to **unintended consequences**.

&nbsp;

## The Cascade Algorithm

The Cascade Algorithm is the process the browser uses to decide **which CSS rules to apply when there are multiple styles targeting the same element**. It ensures that the most appropriate styles are used, based on a set of *well-defined* rules.

1. `Relevance`: The browser first **filters all the CSS rules to find those that actually apply to the element** in question. This includes matching **selectors** and considering **media queries** that might be *in **effect***.

   - A media query is a CSS technique used to **apply styles based on the characteristics of the device** or viewport, such as its **width**, **height**, or **orientation**.

2. `Origin & importance`: CSS can come from different **sources**: the browser’s default styles (`user-agent`), styles set by the *user*, and styles written by the *author* (`you`).

    - Following the consideration of origin, the algorithm then **evaluates the importance of each rule**, giving **priority** to rules marked with `!important`, which **override other rules regardless of their source**.

3. `Specificity`: When **two rules** from the **same origin** and **importance** level apply, the rule with the **higher specificity** will be *applied*.

    - Specificity is a measure of **how targeted a selector is**, with **more specific selectors taking precedence** over more *general* ones.

4. `Order of Appearance`: When **two rules** have the **same specificity**, the **one that appears last in the CSS will be applied**.

&nbsp;

`Note`: The **order** in which you write your *styles* can sometimes **affect the outcome**.

&nbsp;

`Note #2`: By considering **relevance**, **origin and importance**, **specificity**, **scope**, and **order of appearance**, `the Cascade Algorithm` ensures that your CSS behaves **predictably**, allowing you to design more *complex* and *nuanced* web pages.

&nbsp;

## inheritance

inheritance is a key concept in CSS that **determines how styles are passed down from parent elements to their child** elements. This allows for a more efficient way to apply **consistent styling** across an entire document.

- inheritance is especially useful for **maintaining consistency** and **reducing redundancy** in your stylesheets.

- Just like in the real world, where **children often inherit traits from their parents**, in CSS, **certain properties can be inherited by child elements from their parent** elements.

  - In CSS, **not all properties are inherited by default**. For example, properties like `color`, `font-family`, and `line-height` are *inherited*. 
  
    - This means that **if you set the text color on a parent element, all of its child elements will inherit that color** unless you specifically ***override*** it. 

    ```html
    <div style="color: blue;">
      This is the parent element.
      <p>This is the child element inheriting the color.</p>
    </div>
    ```

    - in this case, both the *parent* `div` and the *child* `p` will display their text in **blue** because the color is **inherited**.

&nbsp;

### `inherit` keyword

On the other hand, properties like `margin`, `padding`, `border`, and `background` are **not inherited by default**. If you want a child element to inherit these styles, you need to **explicitly** set them, either directly on the child element or by using the `inherit` keyword.

  - The `inherit` keyword can be used to **force inheritance** of a property from a parent element, even if that property is not normally inherited.

    - if you want a specific child element to have the same `padding` as its parent, you can set `padding: inherit` on the child element:

    ```html
    <div style="padding: 20px;">
      This is the parent element with padding.
      <p style="padding: inherit;">This is the child element inheriting the padding.</p>
    </div>
    ```

    - in this case, the child `p` element will inherit the `20px` of padding from its parent `div` element.

&nbsp;

`Note`: inheritance only works in **one direction** – from **parent to child**. If you override a style on a child element, it won’t affect the parent element.

&nbsp;

## 