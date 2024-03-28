const sharp = require('sharp'); //image manipulation library

const path = require('path'); //cross compatible file path handling

const fs = require('fs'); //interact with files on a filesystem

//input and output file names

const inputFile = process.argv[2]; //the third element in the process.argv array is the first user provided argument (since 0 is the node js executable, 1 is the js file being executed amd from 2 forwards we get user defined arguments).

const outputFile = `modified-${inputFile}`;

if (!inputFile){
    console.error('Please provide an image file to manipulate.');
    process.exit(1);
}

if (!fs.existsSync(inputFile)){
    console.error('The specified file does not exist.');
    process.exit(1);
}

sharp(inputFile)
    .resize(300)
    .grayscale()
    .toFile(outputFile, (err, info)=>{
        if (err){
            console.error('Error processing the image: ', err);
            return;
        }
    console.log(`Image succesfully saved as ${outputFile} `);
    })