const fs = require("fs");

const quots = "move forward";
fs.writeFile("./awesome.html", quots, (err) => {
    console.log("complewriting!!!ππ");

});

fs.readFile("./cool7777.txt", "utf8",(err, content)=>{
    if(err){
        console.log("β", err);
    }
    console.log("π", content);
});

//appendent adding new line

const niceQuots = ".\nMake evry day happy";

fs.appendFile("./nice.txt", niceQuots,(err)=>{
    console.log("updatedπ");
});

//delete file

fs.unlink("./delete.txt", (err)=>{
    console.log("deleted succefile");
});

//delete bunch of files

fs.readdir("./backup", (err, files)=>{
    //console.log(files);
    files.forEach((fileName)=>
    fs.unlink(`./backup/${fileName}`, (err)=>
    {
        console.log("deleted files!!!");
    }))
        
    });
