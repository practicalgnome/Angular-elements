const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angularElements/runtime.js',
        './dist/angularElements/polyfills.js',
        './dist/angularElements/scripts.js',
        './dist/angularElements/main.js',
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/simple.js');

    await fs.copyFile('./dist/angularElements/styles.css', 'elements/styles.css');

    await fs.copy('./dist/angularElements/assets/', 'elements/assets/' );
    
    await fs.copyFile('elements/styles.css', './demo/styles.css');
    await fs.copyFile('elements/simple.js', './demo/simple.js');
    
})();