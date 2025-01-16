const fs = require('fs');
const path = require('path');

exports.handler = async () => {
    try {
        // Path to the images folder
        const imagesFolder = path.join(process.cwd(), 'images');
        const files = fs.readdirSync(imagesFolder);

        // Filter only image files
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|gif)$/i.test(file)
        );

        // Return the list of image paths
        return {
            statusCode: 200,
            body: JSON.stringify(imageFiles),
        };
    } catch (error) {
        console.error('Error listing images:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Unable to list images' }),
        };
    }
};
