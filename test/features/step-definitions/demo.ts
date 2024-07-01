import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function() {
   await browser.url("https://google.com")
   await browser.pause(7000)
   console.log(`After opening the browser`);
})

When(/^Search the keyword (.*)$/, async function(SearchKeyword){
    console.log(`>>Searching Keyword : ${SearchKeyword}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(SearchKeyword)
    await browser.keys("Enter")
})

Then(/^Click on first search item$/, async function(){
    console.log(`clicking on first link`);
    let ele =await $(`<h3>`)
    ele.click()
})

Then(/^Url should match (.*)$/, async function(ExpectedUrl){
    console.log(`>> Validating the url : ${ExpectedUrl}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedUrl)
})

Given(/^Web Page is opened$/, async function(){
    await browser.url(`/inputs`)
    await browser.setTimeout({implicit : 15000, pageLoad : 10000})
    await browser.maximizeWindow()
})

/**
 * setValue is used when a user wants to clear the field and enter new set of values
 * addValue is used when a user wants to add to existing placeholder value
 * addValue is also used to upload file by passing file url as argument
 * 
 */
When(/^user performs web interactions$/, async function(){
    let ele = await $(`[type=number]`)
    await ele.setValue(`123546`)
    await browser.debug()
})