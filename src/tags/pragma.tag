<pragma>
	<h1>Pragma</h1>
	
	<button onclick="{test}"></button>
	
	<span>{opts.test}</span>
	
	<script type="text/javascript">
		console.log(opts);
		
		this.test = () => {
			console.log('TEST!');
		};
	</script>
</pragma>
