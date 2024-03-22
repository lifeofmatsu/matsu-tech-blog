const Handlebars = require('handlebars');

// Formats dates for display in blog
Handlebars.registerHelper('formatDate', (date) => {
	return new Date(date).toLocaleDateString('en-US');
});

Handlebars.registerHelper('truncateText', (text, length) => {
	if (text.length > length) {
	  return text.substring(0, length) + '...';
	}
	return text;
  });
