<script>import classNames from 'classnames';
export let itemName = '';
export let active = false;
export let defaultClass = 'px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg';
export let activeClass = 'px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg';
$: btnClass = classNames(active ? activeClass : defaultClass);
</script>

<button class={btnClass} {...$$restProps}>
  {itemName}
</button>
