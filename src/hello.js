import { onMount } from 'svelte';

export let name;

onMount(async () => {
    alert('hi');
});