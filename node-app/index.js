const express = require('express')
const app = express()
const port = 3000

const { exec } = require("child_process");
let toggle = 0;


app.get('/', (req, res) => {

if(toggle == 0){
toggle = 1;
}else{
toggle = 0;
}
console.log("Toggle", toggle);
const command = "sudo ./hub_ctrl.py -b 1 -d 3 -P 2 -p "+toggle+" -v";
console.log(command);
exec(command, (error, stdout, stderr) => {
    if (error) {
        res.send(`error: ${error.message}`);

    }
    if (stderr) {
        res.send(`stderr: ${stderr}`);

    }
    res.send(`stdout: ${stdout}`);
});


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
