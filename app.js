const downloadToFile = (content, filename, contentType) => {
	const a = document.createElement('a');
	const file = new Blob([content], {type: contentType});
	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();
	
	URL.revokeObjectURL(a.href);
}

document.querySelector('#btnsave').addEventListener('click', () => {
	const textArea = document.querySelector('textarea');
	downloadToFile(textArea.value, 'my-new-file.txt', 'text/plain')
});