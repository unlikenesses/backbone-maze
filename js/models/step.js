var app = app || {};

app.Step = Backbone.Model.extend({

	defaults: {
		x: 0,
		y: 0,
		distance: -1,
		active: false
	}

});