import fs from "fs"

fs.writeFile('one.txt', 'work', (err)=>{
	if (err) console.log('Error')
});

