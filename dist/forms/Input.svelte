<script context="module">export function clampSize(s) {
    return s && s === 'xs' ? 'sm' : s === 'xl' ? 'lg' : s;
}
</script>

<script>import Wrapper from '../utils/Wrapper.svelte';
import classNames from 'classnames';
import { getContext } from 'svelte';
export let type = 'text';
export let value = '';
export let size = undefined;
export let defaultClass = 'block w-full disabled:cursor-not-allowed disabled:opacity-50';
export let color = 'base';
const borderClasses = {
    base: 'border-gray-300 dark:border-gray-600',
    tinted: 'border-gray-300 dark:border-gray-500',
    green: 'border-green-500 dark:border-green-400',
    red: 'border-red-500 dark:border-red-400'
};
const ringClasses = {
    base: 'focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500',
    green: 'focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
    red: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500'
};
const colorClasses = {
    base: 'bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
    tinted: 'bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400',
    green: 'bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700',
    red: 'bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700'
};
// tinted if put in component having its own background
let background = getContext('background');
let group = getContext('group');
// you need to this to avoid 2-way binding
const setType = (node, _type) => {
    node.type = _type;
    return {
        update(_type) {
            node.type = _type;
        }
    };
};
const textSizes = { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-base' };
const leftPadding = { sm: 'pl-9', md: 'pl-10', lg: 'pl-11' };
const rightPadding = { sm: 'pr-9', md: 'pr-10', lg: 'pr-11' };
const inputPadding = { sm: 'p-2', md: 'p-2.5', lg: 'p-4' };
$: _size = size || clampSize(group?.size) || 'md';
let inputClass;
$: {
    const _color = color === 'base' && background ? 'tinted' : color;
    inputClass = classNames(defaultClass, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || 'rounded-lg', group && 'first:rounded-l-lg last:rounded-r-lg', group && 'border-l-0 first:border-l last:border-r', $$props.class);
}
let floatClass = 'flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400';
</script>

<Wrapper class="relative w-full" show={$$slots.left || $$slots.right}>
  {#if $$slots.left}
    <div class="{floatClass} left-0 pl-2.5 pointer-events-none"><slot name="left" /></div>
  {/if}
  <slot props={{ ...$$restProps, class: inputClass }}>
    <input
      {...$$restProps}
      bind:value
      on:blur
      on:change
      on:click
      on:contextmenu
      on:focus
      on:keydown
      on:keypress
      on:keyup
      on:mouseover
      on:mouseenter
      on:mouseleave
      on:paste
      on:input
      use:setType={type}
      class={inputClass} />
  </slot>
  {#if $$slots.right}
    <div class="{floatClass} right-0 pr-2.5"><slot name="right" /></div>
  {/if}
</Wrapper>
