# Installation

> <kbd>[Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)</kbd>👈click here to see official installation guide.

## Get started with Tailwind CSS

### Tailwind CLI: Using PostCSS

> ⚠️ Install `Node.js` and `npm` (if you haven't already).

1. **Create `package.json` file**: This file is used to manage your project's dependencies, scripts, and other metadata.

> 💡 The alternative method to create a new `package.json` is create `package.json` named file manually in your project directory and add `{}` empty curly braces inside it and follow further **Tailwind** commands.

Run `npm init` or `npm i -y` to create a new `package.json` file.

> ⚠️ `-y` or `--yes` flag will automatically accept all the default values, skipping the prompts.

2. **Install Tailwind CSS**: Install it from the [`Using PostCSS`](https://tailwindcss.com/docs/installation/using-postcss) tab.

Run `npm install -D tailwindcss postcss autoprefixer` in your project directory.

3. **Install Vite**:
Run `npm i vite` in your project directory.

4. **Create Config File**:

To create _config files_ run `npx tailwindcss init -p` this command.

> ⚠️ This `-p` flag will create _config_ file for `PostCSS` which is `postcss.config.js` file.

5. **Configure your template paths**: Add the paths to all of your template files in your tailwind.config.js file.

Add `"*"` in `content` array of your `tailwind.config.js` file.

```js tailwind.config.js
content: ["*"],
```

> ⚠️ This `*` (asterisk/star) tells tailwind to apply css in the all over the places.

6. **Add the Tailwind directives to your CSS**: Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.

```css syle.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. **Change `package.json`**:
Add the following to your `package.json` file.

```json
"scripts": {
    "start": "vite",
  },
```

8. **Link `CSS` file to `HTML`**: Add the following line into your **HTML** `<head>` tag.

```html index.html
<link rel="stylesheet" href="style.css" />
```

> Finally, run `npm run start` to start the server.
