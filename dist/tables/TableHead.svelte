<script>import classNames from 'classnames';
import { getContext } from 'svelte';
export let theadClass = 'text-xs uppercase';
export let defaultRow = true;
let color;
color = getContext('color');
let noborder = getContext('noborder');
let striped = getContext('striped');
let defaultBgColor = noborder || striped ? '' : 'bg-gray-50 dark:bg-gray-700';
const bgColors = {
    default: defaultBgColor,
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600',
    custom: ''
};
let textColor = color === 'default'
    ? 'text-gray-700 dark:text-gray-400'
    : color === 'custom'
        ? ''
        : 'text-white  dark:text-white';
let borderColors = striped
    ? ''
    : color === 'default'
        ? 'border-gray-700'
        : color === 'custom'
            ? ''
            : `border-${color}-400`;
$: theadClassfinal = classNames(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
</script>

<thead {...$$restProps} class={theadClassfinal}>
  {#if defaultRow}
    <tr>
      <slot />
    </tr>
  {:else}
    <slot />
  {/if}
</thead>
