# 🌐 HTML Basics – Structure & Working

---

## 📌 What is HTML?
HTML (**HyperText Markup Language**) is the standard language used to create web pages. It structures content on the internet using elements like headings, paragraphs, images, links, etc.

---

## 🧱 Basic Structure of HTML

Every HTML document follows a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>

    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>

</body>
</html>

🔍 Explanation of Each Part

1. <!DOCTYPE html>
Tells the browser that this document is written in HTML5.

2. <html>
Root element of the page
Everything is written inside this tag
lang="en" → language of the webpage is English

3. <head>
Contains meta information (not visible on the page)

Includes:
Title
Character encoding
Stylesheets
SEO/meta data

4. <meta>
Provides extra information about the page

Examples:
charset="UTF-8" → Supports all characters
viewport → Makes page responsive

5. <title>
Sets the page title (shown in browser tab)

6. <body>
Contains visible content of the webpage

Examples:
Headings (<h1> to <h6>)
Paragraphs (<p>)
Images (<img>)
Links (<a>)

⚙️ How HTML Works
You write HTML code in a file (.html)
The browser (Chrome, Edge, etc.) reads it
It parses the tags
It renders the content visually on the screen

👉 Example:
<h1>Hello</h1>

➡ Browser shows: Hello (as a heading)


🏷️ What are Tags?

HTML uses tags to define elements

Example:

<p>This is a paragraph</p>
<p> → Opening tag
</p> → Closing tag
Content → Inside the tags

📦 Types of Elements

🔹 Block Elements
Take full width
Start on a new line

Examples:
<div>, <p>, <h1>
🔹 Inline Elements
Take only needed width
Stay in same line

Examples:
<span>, <a>, <img>
🎯 Key Points
HTML is used for structure, not styling
CSS is used for design 🎨
JavaScript is used for functionality ⚙️
HTML is the foundation of every website


🚀 Conclusion

HTML is simple but powerful. Once you understand its structure, you can build any webpage by combining elements properly.

HTML → Structure of a webpage (like skeleton)
CSS → Styling of a webpage (colors, layout, design)
JavaScript (JS) → Behavior of a webpage (actions, interactivity and functionalities)

HTML → ❌ Not case sensitive
CSS → CSS itself (like color, margin) is not case sensitive but class names and id names are case sensitive
JavaScript (JS) → ✅ Fully case sensitive
