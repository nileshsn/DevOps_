const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function testCalculator() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to the calculator page
    await driver.get('file:///d:/DevOps/week4/index.html');

    // Test addition
    await driver.findElement(By.xpath("//button[text()='7']")).click();
    await driver.findElement(By.xpath("//button[text()='+']")).click();
    await driver.findElement(By.xpath("//button[text()='3']")).click();
    await driver.findElement(By.xpath("//button[text()='=']")).click();
    let result = await driver.findElement(By.id('display')).getAttribute('value');
    assert.strictEqual(result, '10');

    // Test subtraction
    await driver.findElement(By.id('clear')).click();
    await driver.findElement(By.xpath("//button[text()='9']")).click();
    await driver.findElement(By.xpath("//button[text()='-']")).click();
    await driver.findElement(By.xpath("//button[text()='4']")).click();
    await driver.findElement(By.xpath("//button[text()='=']")).click();
    result = await driver.findElement(By.id('display')).getAttribute('value');
    assert.strictEqual(result, '5');

    // Test multiplication
    await driver.findElement(By.id('clear')).click();
    await driver.findElement(By.xpath("//button[text()='6']")).click();
    await driver.findElement(By.xpath("//button[text()='*']")).click();
    await driver.findElement(By.xpath("//button[text()='7']")).click();
    await driver.findElement(By.xpath("//button[text()='=']")).click();
    result = await driver.findElement(By.id('display')).getAttribute('value');
    assert.strictEqual(result, '42');

    // Test division
    await driver.findElement(By.id('clear')).click();
    await driver.findElement(By.xpath("//button[text()='8']")).click();
    await driver.findElement(By.xpath("//button[text()='/']")).click();
    await driver.findElement(By.xpath("//button[text()='2']")).click();
    await driver.findElement(By.xpath("//button[text()='=']")).click();
    result = await driver.findElement(By.id('display')).getAttribute('value');
    assert.strictEqual(result, '4');

    console.log('All tests passed!');
  } finally {
    await driver.quit();
  }
})();