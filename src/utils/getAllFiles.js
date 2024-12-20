const fs = require('fs');
const path = require('path');

module.exports = (directory, foldersOnly = false) => {
    let fileNames = []; // Array to store file or folder paths
  
    // Read all files and folders from the directory
    const files = fs.readdirSync(directory, { withFileTypes: true });
  
    for (const file of files) {
      const filePath = path.join(directory, file.name);
  
      if (foldersOnly) {
        // Only include folders
        if (file.isDirectory()) {
          fileNames.push(filePath);
        }
      } else {
        // Include regular files only
        if (file.isFile()) {
          fileNames.push(filePath);
        }
      }
    }
  
    return fileNames;
  };