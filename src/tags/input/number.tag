<number>
	{ console.log('numberopts', opts) }
	<input type="number" name="{ opts.property.path }" min="{ opts.property.min }" max="{ opts.property.max }" step="{ opts.property.step }" value="{ opts.riotValue }" disabled="{ !!opts.property.derivation }">
	<!-- Primitives don't yield children -->
</number>
