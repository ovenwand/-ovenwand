<script lang="ts">
		import { createClassName } from '@ovenwand/util/dist/element';
		import { expand as expandTransition } from '@ovenwand/util/dist/svelte/transition';
		import type { SidebarStore } from './store';
    import { store, DEFAULT_ID } from './store';

		export let id: string = DEFAULT_ID;
    let className: string = '';
    export { className as class };
    export let expand: boolean = false;
    export let expandIn = expandTransition;
    export let expandOut = expandTransition;
    export let expandInOptions = { duration: 400 };
    export let expandOutOptions = { delay: 150, duration: 400 };
    export let reverse: boolean = false;

    const namespace: string = 'ow-sidebar';
    const sidebar: SidebarStore = store.add(id, { expand });

    $: containerClassName = createClassName({
				[`${namespace}`]: true,
				[`${className}`]: className,
		});

    $: contentClassName = createClassName({
				[`${namespace}__content`]: true,
		});

    $: expandClassName = createClassName({
        [`${namespace}__expand`]: true,
		});

    $: if (expand) {
        sidebar.expand();
		} else {
        sidebar.contract();
		}
</script>

<style>
	.ow-sidebar {
			display: flex;
			height: 100%;
  }

  .ow-sidebar__content {
      display: flex;
      flex-direction: column;
  }
</style>

<div {id} class={containerClassName}>
	{#if !reverse}
		<div class={contentClassName}>
			<slot/>
		</div>
	{/if}

	{#if $sidebar.expand}
		<div class={expandClassName} in:expandIn={expandInOptions} out:expandOut={expandOutOptions}>
			<slot name="expand"/>
		</div>
	{/if}

	{#if reverse}
		<div class={contentClassName}>
			<slot/>
		</div>
	{/if}
</div>