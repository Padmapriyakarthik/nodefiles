
const express=require('express');
const app=express();
const fs=require('fs');//filesystem
const path=require('path');
var content="";

fs.readdir('E:/',(err,data)=>{
    if (err)
    {
        console.log(err);
    }
    else{
        data.forEach(file=>{
            if((path.extname(file)==".pdf") || (path.extname(file)==".txt") || (path.extname(file)==".pptx") ||(path.extname(file)==".sys")  )
            {
                content+="<p style=color:blue><img src=https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/file-word-icon.png width=20 height=20>"+file+"</p>";
             
                console.log(file);
            }
            else
            {
                content+="<p style=color:red><img src=https://img.icons8.com/plasticine/2x/folder-invoices.png width=20 height=20>"+file+"</p>";
            }
        })
    }
})

app.get("/",(req,res)=>{
    res.send(content);
});
app.listen(5000);//port number to communicate should not conflict with systems port number
