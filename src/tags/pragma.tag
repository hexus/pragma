<pragma>
	<h1>Pragma</h1>
	
	<button onclick="{ test }">Test console.log</button>
	
	<div>{ opts.test }</div>
	
	<div>
		{ date }
	</div>
	
	<script>
		console.log(this, opts);
		
		this.date = new Date();
		this.time = new Date().toString();
		
		this.test = function () {
			console.log('test', arguments);
		}
		
		this.tick = function () {
			console.log(arguments);
			
			this.date.setTime(Date.now())
			this.time = this.date.toString();
			this.update();
		};
		
		let timer = setInterval(this.tick.bind(this), 1000);
		
		this.on('unmount', function () {
			this.date = null;
			this.time = null;
			this.test = null;
			clearInterval(timer);
		});
	</script>
</pragma>
