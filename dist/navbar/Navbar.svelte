<script>import Frame from '../utils/Frame.svelte';
import classNames from 'classnames';
export let navClass = 'px-2 sm:px-4 py-2.5 w-full';
export let navDivClass = 'mx-auto flex flex-wrap justify-between items-center ';
export let fluid = false;
export let color = 'navbar';
let hidden = true;
let toggle = () => {
    hidden = !hidden;
};
</script>

<Frame tag="nav" {color} {...$$restProps} class={classNames(navClass, $$props.class)}>
  <div class={classNames(navDivClass, fluid || 'container')}>
    <slot {hidden} {toggle} />
  </div>
</Frame>
