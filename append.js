var fs=require('fs');
var text=process.argv[2];

fs.appendFile("movie.txt", text, function(err){

    if (err) {
        console.log(err);
        }

        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
                 console.log("Content Added!");
        }
});



