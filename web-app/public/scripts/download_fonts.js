const fs = require('fs');
const path = require('path');
const https = require('https');

const cssPath = path.join(__dirname, '../assets/css/google-fonts.css');
const fontsDir = path.join(__dirname, '../assets/fonts');

if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
}

const cssContent = fs.readFileSync(cssPath, 'utf8');
const urlRegex = /url\((.*?)\)/g;
let match;
let downloads = [];
let newCssContent = cssContent;

// Extract URLs and simplified filenames
while ((match = urlRegex.exec(cssContent)) !== null) {
    const remoteUrl = match[1];

    // Create a meaningful filename
    // e.g., https://fonts.gstatic.com/s/inter/v20/UcCO3Fwr....ttf -> inter-v20-UcCO3Fwr.ttf
    const urlParts = remoteUrl.split('/');
    const fontName = urlParts[urlParts.length - 3] || 'font'; // inter
    const version = urlParts[urlParts.length - 2] || 'v1'; // v20
    const originalName = urlParts[urlParts.length - 1];
    const localFilename = `${fontName}-${version}-${originalName}`;

    downloads.push({ remoteUrl, localFilename });

    // Update CSS content
    newCssContent = newCssContent.replace(remoteUrl, `../fonts/${localFilename}`);
}

// Write the updated CSS
fs.writeFileSync(cssPath, newCssContent);
console.log('Updated CSS file written.');

// Download files
downloads.forEach(item => {
    const localPath = path.join(fontsDir, item.localFilename);
    const file = fs.createWriteStream(localPath);

    https.get(item.remoteUrl, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${item.localFilename}`);
        });
    }).on('error', (err) => {
        fs.unlink(localPath, () => { }); // Delete the file async. (But we don't check result)
        console.error(`Error downloading ${item.remoteUrl}: ${err.message}`);
    });
});
