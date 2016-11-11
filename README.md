# Electron dnd bug

![](https://cldup.com/7SfM7Jzygp.gif)

### What is wrong?

The example shows an Electron bug when using `titleBarStyle: 'hidden-inset'` (it works correctly with different settings).

```
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden-inset',
  })
  ```

Drag and drop works only if a mouse position is within the red rectangle bounds. If it's above/below it doesn't work (it should). Also if we release the mouse when we are out of the red rectangle bounds and move back to the red rectangle bounds you can still moving the blue rectangles. If we comment out the ``titleBarStyle: 'hidden-inset'`` or change it to ``titleBarStyle: 'hidden'`` it's working as expected.

### How to install the app?


```bash
# Clone this repository
git clone https://github.com/petrbrzek/electron-dnd-bug
# Go into the repository
cd electron-dnd-bug
# Install dependencies
npm install
# Run the app
npm start
```
