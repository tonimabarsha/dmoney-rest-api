const newman = require('newman');
require('dotenv').config();
 
newman.run({
   //collection:`https://api.postman.com/collections/42752292-36abc399-a317-4410-bd21-c0abb044e43f?access_key=${process.env.access_key}`,
    collection:require('./collection/dmoney REST API.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
