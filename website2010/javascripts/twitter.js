function loadTwitter(){
	new TWTR.Widget({
	  version: 2,
	  type: 'profile',
	  rpp: 3,
	  interval: 6000,
	  width: 'auto',
	  height: 175,
	  theme: {
		shell: {
		  background: '#000000',
		  color: '#ffffff'
		},
		tweets: {
		  background: '#ffffff',
		  color: '#ff0000',
		  links: '#000000'
		}
	  },
	  features: {
		scrollbar: true,
		loop: false,
		live: false,
		hashtags: true,
		timestamp: true,
		avatars: true,
		behavior: 'all'
	  }
	}).render().setUser('uansbe').start();
};

loadTwitter();