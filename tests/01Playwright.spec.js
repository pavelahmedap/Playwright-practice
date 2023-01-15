const {test, expect} = require('@playwright/test');

test("Playwright test 1", async function({page}){
    
})

test("Playwright test 2", async function({page}){
    
})

// Run only this test
test.only("Playwright test 3 with ONLY", async function({page}){
    
})

// This test will never run
test.skip("Playwright test 4 with skip", async function({page}){
    
})