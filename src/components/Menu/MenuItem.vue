<template>
	<li class="MenuItem">
		<button
			class="MenuItem__button"
			type="button">
			<slot />
		</button>
	</li>
</template>

<style>
.MenuItem__button {
  background-color: #fff;
  border: 2px solid #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 400;
  line-height: 1;
  padding: .6em 1.2em;
  text-align: left;
  width: 100%;
}

.MenuItem__button:hover {
  border-color: slateblue;
}
</style>
