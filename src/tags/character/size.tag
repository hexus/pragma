<size>
	<fieldset>
		<legend>Size</legend>

		<p>
			<label>
				<span>Type</span>
				<select name="type" onchange="{ edit }">
					<option each="{ size, type in sizes }" value="{ type }" selected="{ type === state.type }">
						{ size.name }
					</option>
				</select>
			</label>
		</p>

		<p>
			<label>
				<span>Modifier</span>
				<input type="number" name="modifier" min="-100" max="100" step="1" value="{ sizes[state.type].modifier }" disabled />
			</label>
		</p>

		<p>
			<label>
				<span>Special Modifier</span>
				<input type="number" name="specialModifier" min="-100" max="100" step="1" value="{ sizes[state.type].specialModifier }" disabled />
			</label>
		</p>

		<p>
			<label>
				<span>Fly Modifier</span>
				<input type="number" name="flyModifier" min="-100" max="100" step="1" value="{ sizes[state.type].flyModifier }" disabled />
			</label>
		</p>

		<p>
			<label>
				<span>Stealth Modifier</span>
				<input type="number" name="stealthModifier" min="-100" max="100" step="1" value="{ sizes[state.type].stealthModifier }" disabled />
			</label>
		</p>

		<p>
			<label>
				<span>Space occupied (ft.)</span>
				<input type="number" name="space" min="-100" max="100" step="0.5" value="{ sizes[state.type].space }" disabled />
			</label>
		</p>

		<p>
			<label>
				<span>Natural reach (ft.)</span>
				<input type="number" name="reach" min="-100" max="100" step="0.5" value="{ sizes[state.type].reach }" disabled />
			</label>
		</p>

	</fieldset>

	<script>
		import { sizes } from '../../data';
		import util from '../../mixins/util';
		import get from 'lodash/get';
		import set from 'lodash/set';

		// Data
		this.sizes = sizes;

		// Mixins
		this.mixin(util);

		// State
		this.prefix = this.opts.prefix || 'size.';
		this.state = {
			type: this.opts.type
		};

		// DOM Handlers
		this.edit = function () {
			// Grab the input element
			let input = event.target;

			// Acquire the input value for select elements
			input.value = input.options[input.selectedIndex].value;

			// Skip unchanged values
			if (get(this.state, input.name) === input.value)
				return;

			// Update the current state
			set(this.state, input.name, input.value);

			// Dispatch an edit event
			this.triggerDom('edit', {
				input: input,
				name: this.prefix + input.name,
				value: input.value
			});
		};

		// Observables
		this.on('mount', function () {
			//
		});

		this.on('update', function () {
			this.prefix = this.opts.prefix || 'size.';
			this.state.type = this.opts.type;
		})
	</script>
</size>
