import { Given,When,Then } from "@wdio/cucumber-framework";
import {expect} from "chai"

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

Given(/^Dropdown Web Page is opened$/, async function(){
    // await browser.url(`/inputs`)
    await browser.url(`/dropdown`)
    await browser.setTimeout({implicit : 15000, pageLoad : 10000})
    await browser.maximizeWindow()
})
Given(/^checkbox Web Page is opened$/, async function(){
    await browser.url(`/checkboxes`)
    await browser.setTimeout({implicit : 15000, pageLoad : 10000})
    await browser.maximizeWindow()
})

/**
 * setValue is used when a user wants to clear the field and enter new set of values
 * addValue is used when a user wants to add to existing placeholder value
 * addValue is also used to upload file by passing file url as argument
 * 
 */
When(/^user performs web interactions$/, async (dataTable)=>{
    // let ele = await $(`[type=number]`)
    // await ele.setValue(`123546`)
    // await browser.debug()

    /**
     * Working with dropdown
     */

    let eleArr = await $$(`select > option`)
    let arr = [];
    for(let i=0; i<eleArr.length; i++){
        let ele = eleArr[i]
        let val = (await ele.getText()).trim()
        arr.push(val)
    }
    console.log(`>>Options Array : ${arr}`);
    const expectedOptions = await dataTable.raw().map(row => row[0].trim());
    const actualOptions = arr;
    // Assert the dropdown values
    expect(actualOptions).to.deep.equal(expectedOptions);
})

When(/^user validates the dropdown$/, async (dataTable)=>{
    let eleArr = await $$(`select > option`)
    let arr = [];
    for(let i=0; i<eleArr.length; i++){
        let ele = eleArr[i]
        let val = (await ele.getText()).trim()
        arr.push(val)
    }
    console.log(`>>Options Array : ${arr}`);
    const expectedOptions = await dataTable.raw().map(row => row[0].trim());
    const actualOptions = arr;
    // Assert the dropdown values
    expect(actualOptions).to.deep.equal(expectedOptions);
})

When(/^User selects the checkbox$/, async function(){
    let ele = await $$(`//form[@id= "checkboxes"]/input`)
    for(let i=0;i<ele.length;i++){
        let checkbox = ele[i]
        if(!await checkbox.isSelected()){
           checkbox.click()
           console.log("Checkbox has been selected");
        }
    }
    await browser.debug();
})