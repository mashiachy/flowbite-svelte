<script>import Frame from '../utils/Frame.svelte';
import classNames from 'classnames';
import CloseButton from '../utils/CloseButton.svelte';
import { fade } from 'svelte/transition';
export let color = 'blue';
export let simple = false;
export let position = 'none';
export let open = true;
export let divClass = 'w-full max-w-xs p-4';
const positions = {
    'top-left': 'absolute top-5 left-5',
    'top-right': 'absolute top-5 right-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'bottom-right': 'absolute bottom-5 right-5',
    none: ''
};
let classDiv;
$: classDiv = classNames(divClass, positions[position], $$props.class);
let iconClass;
$: iconClass = classNames('inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3');
</script>

{#if open}
  <Frame rounded border transition={fade} {...$$restProps} class={classDiv} role="alert">
    <div class="flex {$$slots.extra ? 'items-start' : 'items-center'}">
      {#if $$slots.icon}
        <Frame {color} rounded class={iconClass}><slot name="icon" /></Frame>
      {/if}

      <div class="text-sm font-normal w-full">
        <slot />
        <slot name="extra" />
      </div>
      {#if !simple}
        <CloseButton on:click={() => (open = false)} />
      {/if}
    </div>
  </Frame>
{/if}
