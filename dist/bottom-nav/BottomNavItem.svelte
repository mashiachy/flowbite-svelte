<script>import { getContext } from 'svelte';
import classNames from 'classnames';
export let btnName = '';
export let appBtnPosition = 'custom';
export let btnDefault = '';
export let spanDefault = '';
const navType = getContext('navType');
const btnClasses = {
    default: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    border: 'inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600',
    application: '',
    pagination: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    group: 'inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    card: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    meeting: '',
    video: '',
    custom: ''
};
const spanClasses = {
    default: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
    border: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
    application: 'sr-only',
    pagination: 'sr-only',
    group: 'sr-only',
    card: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
    meeting: '',
    video: '',
    custom: ''
};
const appBtnClasses = {
    left: 'inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
    middle: 'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    right: 'inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group',
    custom: ''
};
$: btnClass = classNames(btnDefault, btnClasses[navType], appBtnClasses[appBtnPosition], $$props.btnClass);
$: spanClass = classNames(spanDefault, spanClasses[navType], $$props.spanClass);
</script>

<button
  class={btnClass}
  aria-label={btnName}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave>
  <slot />
  <span class={spanClass}>{btnName}</span>
</button>
