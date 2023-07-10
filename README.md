# TypeScript Components for HRnet

This repository contains the code for a library of react components. The components are published in TypeScript

## Technologies

- TS
- React

## Authors

the front-end developer: Lucie

## Import a component into a project

### Getting Started

Install this package:

```shell
npm i ocr_14_library
```

Import the Modal component:

```js
import { Modal } from "ocr_14_library";
```

You can then render the `Modal` component like any other React component in JSX.

### The components

#### Modal

It's an easy way to add a modal box to your project
To use this component you need to create a boolean state

```js
import { Modal } from "ocr_14_library"
import { useState } from "react";


export default function Component() {
const [openModal, setOpenModal] = useState(false);

return(
  <button onClick={() => setOpenModal(true)}/>
  <Modal
    open={openModal}
    onClose={() => setOpenModal(false)}
    HtmlElement={document.getElementById("portal")}
  > My modal text </Modal>
)
}
```

This components needs four params :

- @param {string} children : the text of your modal
- @param {boolean} open : a boolean state
- @param {function} onClose : a function that changes the boolean state
- @param {HTMLElement} HtmlElement : the physical placement of the DOM node for your modal

## Add a component to the library

Fork this repository to GitHub

Add your TypeScript components in src/ folder

Export your component in src/index.ts file :

```ts
export { MyNewComponent } from "./MyNewComponent";
```

Modify the information in package.json

Run build scripts :

```shell
npm run build
```

And publish dist folder on npm :

```shell
npm publish ./dist
```
