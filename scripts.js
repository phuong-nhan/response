let texts = document.querySelectorAll('.text img') 

for (let i = 0; i < texts.length; i++) {

	texts[i].addEventListener('click', function() {
		if (this.id === 'active-text') {
			this.id = ''
		} else {
			if (document.querySelector('#active-text')) {
				document.querySelector('#active-text').id = ''
			}
			this.id = 'active-text'
		}
		

	})
}