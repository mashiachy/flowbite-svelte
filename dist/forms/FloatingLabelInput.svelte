<script>import classNames from 'classnames';
import generateId from '../utils/generateId';
export let id = generateId();
export let style = 'filled';
export let type = 'text';
export let size = 'default';
export let color = 'base';
export let value = '';
export let label = '';
export let input = undefined;
const divClasses = {
    filled: 'relative',
    outlined: 'relative',
    standard: 'relative z-0'
};
const inputSizes = {
    filled: {
        small: 'px-2.5 pb-1.5 pt-4',
        default: 'px-3 pb-2 pt-5'
    },
    outlined: {
        small: 'px-2.5 pb-1.5 pt-3',
        default: 'px-2.5 pb-2.5 pt-4'
    },
    standard: {
        small: 'py-2 px-0',
        default: 'py-2.5 px-0'
    }
};
const labelSizes = {
    filled: {
        small: 'top-3',
        default: 'top-3.5'
    },
    outlined: {
        small: 'top-1',
        default: 'top-2'
    },
    standard: {
        small: 'top-3',
        default: 'top-3'
    }
};
const inputClasses = {
    filled: 'block rounded-2xl w-full text-base leading-7 text-gray-900 bg-gray-100 disabled:bg-gray-200 dark:bg-gray-700 border-0 appearance-none dark:text-white focus:outline-none ring-inset focus:ring-primary-700 focus:ring-1.5 peer',
    outlined: 'block w-full text-base text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer',
    standard: 'block w-full text-base text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer'
};
const labelClasses = {
    filled: 'absolute text-base leading-7 duration-300 transform -translate-y-4 scale-75 top-3.5 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
    outlined: 'absolute text-base duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
    standard: 'absolute text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
};
const inputColorClasses = {
    base: 'border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:focus:ring-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
    green: 'border-green-600 focus:ring-green-600 dark:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 focus:border-green-600',
    red: 'border-red-600 focus:ring-red-600 dark:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 focus:border-red-600'
};
const labelColorClasses = {
    base: 'text-gray-400 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
    green: 'text-green-600 dark:text-green-500',
    red: 'text-red-600 dark:text-red-500'
};
// you need to this to avoid 2-way binding
function setType(node, _type) {
    node.type = _type;
    return {
        update(_type) {
            node.type = _type;
        }
    };
}
</script>

<div class={divClasses[style]}>
  <input
    {id}
    {...$$restProps}
    bind:value
    bind:this={input}
    on:blur
    on:change
    on:click
    on:focus
    on:input
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:paste
    use:setType={type}
    placeholder=" "
    class={classNames(
      inputClasses[style],
      inputColorClasses[color],
      inputSizes[style][size],
      $$props.class
    )} />

  <label
    for={id}
    class={classNames(
      labelClasses[style],
      labelColorClasses[color],
      labelSizes[style][size],
      $$props.labelClass
    )}>
    {label}
  </label>
</div>
