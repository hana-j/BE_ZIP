const express= require('express');
const request = require('request');
const convert = require('xml-js');
const PrivateApt = require('../models/privateApt');
const PrivateImg = require('../models/privateImg')
const router = express.Router();
const fs = require('fs');
const puppeteer = require('puppeteer');


router.get('/', async (req, res) => {
    
    try {
      const browser = await puppeteer.launch({ headless: false });
      const keyword = await PrivateApt.findAll({attributes:['houseName', 'pblanceNo'], raw:true})
      const houseName= keyword;
      for(i in keyword){
          //console.log(houseName[i].houseName);
            const name = houseName[i].houseName;
            const no = houseName[i].pblanceNo;
            const page = await browser.newPage();
            await page.goto(`https://search.zum.com/search.zum?method=image&option=accu&query=${name}&rd=1&cm=tab&co=9`);
            const issueSrcs = await page.evaluate(()=>{
            const srcs = Array.from(
              document.querySelectorAll('div.gs-result.gs-imageResult.gs-imageResult-popup > div.gs-image-thumbnail-box > div > a > img')
          ).map((image)=> image.getAttribute('src'));
          //console.log(srcs);
          
          return srcs;
      });
      if(!issueSrcs){
        res.status(500).send();
      }else{
        await PrivateImg.create({fk_pblanceNo : no, url1: issueSrcs[0], url2:issueSrcs[1], url3:issueSrcs[2], url4:issueSrcs[3], url5:issueSrcs[4]})
        console.log('good');
      }
      }
     await browser.close();
     return;
    } catch (e) {
      console.error(e);
    }
  });

module.exports = router;


