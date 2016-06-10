export class MuidlePage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('muidle-app h1')).getText();
	}
}
