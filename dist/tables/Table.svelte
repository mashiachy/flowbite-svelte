<script>import classNames from 'classnames';
import { setContext } from 'svelte';
export let divClass = 'relative overflow-x-auto';
export let striped = false;
export let hoverable = false;
export let noborder = false;
export let shadow = false;
export let color = 'default';
const colors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    indigo: 'text-indigo-100 dark:text-indigo-100',
    pink: 'text-pink-100 dark:text-pink-100',
    custom: ''
};
$: setContext('striped', striped);
$: setContext('hoverable', hoverable);
$: setContext('noborder', noborder);
$: setContext('color', color);
</script>

<div class={classNames(divClass, shadow && 'shadow-md sm:rounded-lg')}>
  <table {...$$restProps} class={classNames('w-full text-left text-sm', colors[color], $$props.class)}>
    <slot />
  </table>
</div>
