<pragma>
	<h1>Pragma</h1>
	
	<button onclick="{ test }">Test console.log</button>
	
	<div> { date } </div>
	
	<script>
		console.log(this);
		
		this.date = new Date();
		
		this.test = function () {
			console.log('test', arguments);
		}
		
		this.tick = function () {
			this.date.setTime(Date.now())
			this.update();
		};
		
		this.on('mount', function () {
			this.interval = setInterval(this.tick.bind(this), 1000);
		});
		
		this.on('unmount', function () {
			this.date = null;
			this.time = null;
			this.test = null;
			clearInterval(this.interval);
		});
	</script>
</pragma>
