<script context="module">export {};
</script>

<script>import classNames from 'classnames';
import { slide } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import Frame from '../utils/Frame.svelte';
import { setContext } from 'svelte';
export let divClass = 'w-full md:block md:w-auto';
export let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
export let hidden = true;
export let slideParams = { delay: 250, duration: 500, easing: quintOut };
export let activeClass = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent';
export let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
setContext('navbar', { activeClass, nonActiveClass });
let _divClass;
$: _divClass = classNames(divClass, $$props.class);
let _ulClass;
$: _ulClass = classNames(ulClass, 
// 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
$$props.class);
</script>

{#if !hidden}
  <div {...$$restProps} class={_divClass} transition:slide={slideParams}>
    <Frame tag="ul" border rounded color="navbarUl" class={_ulClass}>
      <slot />
    </Frame>
  </div>
{:else}
  <div {...$$restProps} class={_divClass} {hidden}>
    <ul class={_ulClass}>
      <slot />
    </ul>
  </div>
{/if}
