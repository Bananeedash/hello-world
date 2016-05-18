describe('EMR login',function(){
  it('should log in to the application',function(){
	 browser.ignoreSynchronization = true;
     browser.driver.get('http://akncemr-staging.azurewebsites.net');
	 //element(by.css('[id="UserName"')).sendKeys('alaskauser');
	 //element(by.css('[id="Password"')).sendKeys('Password@123');
	 //element(by.css('[id="login"')).click();
	 browser.driver.findElement(by.css('#UserName')).sendKeys('alaskauser');
	 browser.driver.findElement(by.css('#Password')).sendKeys('Password@123');
	 browser.driver.findElement(by.css('#login')).click();
	 var EC = protractor.ExpectedConditions;
	 browser.wait(EC.visibilityOf(element(by.xpath("//html/body/app/div/undefined/section/a"))));
	 
	//browser.sleep(7500);
	 expect(element(by.xpath("//html/body/app/div/undefined/section/a")).isDisplayed()).toBe(true);
  
	});
});