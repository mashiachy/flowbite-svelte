<script>import classNames from 'classnames';
export let list = 'disc';
export let position = 'inside';
export let ulClass = 'max-w-md text-gray-500 dark:text-gray-400';
let lists = {
    disc: 'list-disc',
    none: 'list-none',
    decimal: 'list-decimal'
};
let positions = {
    inside: 'list-inside',
    outside: 'list-outside'
};
let classUl = classNames(ulClass, lists[list], positions[position], $$props.class);
console.log('list', list);
</script>

<ul {...$$restProps} class={classUl}>
  <slot />
</ul>
