console.log("hei");
console.log("hello world");
const fs=require('fs');
fs.writeFileSync('example.txt',"this is an example file created using Node.js",
    function(e){
        if(e) consloe.log("ye aaya error");
        consloe.log("done");
});
<<<<<<< HEAD
console.log("file created successfully");
console.log("file system operation completeed");
=======
consloe.log("file created successfully");
consloe.log("file system operation completeed");
>>>>>>> 4084a7290766cb4f2256a00285cd596c0c3ab390
