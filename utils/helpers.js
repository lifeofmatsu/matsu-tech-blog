const Handlebars = require('handlebars');

// Formats dates for display in blog
Handlebars.registerHelper('formatDate', (date) => {
  return new Date(date).toLocaleDateString("en-US");
});