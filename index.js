// node index.js --url=https://www.google.com/maps/@26.205713,99.7087546,3z

let minimist = require("minimist");
let fs =require("fs");

let args = minimist(process.argv);

let puppeteer = require('puppeteer');


// console.log(puppeteer);
async function run() {
    let browser =await puppeteer.launch({defaultViewport:null , args :[
        "--start-maximized"
    ],
    headless:false
});

let pages = await browser.pages();
let page = pages[0];

await page.goto(args.url,"utf-8");
let locations=[
    "Karnataka","Kualalampur","Newyourk","Oslo","Rajgir","Varanasi"
    ];

for(let j=0;j<locations.length;j++)

{
    await page.waitForSelector("input[name='q']");
await page.type("input[name='q']", locations[j],{delay:200});

await page.waitFor(500);
await page.keyboard.press("Enter",{delay:200});


await page.waitForSelector("button.jtJMuf");
await page.click("button.jtJMuf");
await page.waitFor(2000);


for(let i=0;i<10;i++)
{
    await page.waitForSelector("button.oHCvWb-play-qwU8Me.NIyLF-haAclf.oHCvWb-play-LgbsSe",{delay:1000});
    await page.click("button.oHCvWb-play-qwU8Me.NIyLF-haAclf.oHCvWb-play-LgbsSe",{delay:300});
    await page.waitFor(1100);
}

await page.goto(args.url,"utf-8");
}

}


run().catch(function(err){
    console.log(err);
  });
  