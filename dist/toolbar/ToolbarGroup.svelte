<script>import { getContext } from 'svelte';
export let divClass = 'flex items-center space-x-1 sm:pr-4 sm:pl-4 first:sm:pl-0 last:sm:pr-0';
const options = getContext('toolbar');
if (options)
    $options = true;
</script>

<div class={divClass}>
  <slot />
</div>
