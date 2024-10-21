<script>
    export let title = "";
    export let source = ""
</script>

<div class = "chart-details">
    {#if title}
        <h2 class = "chart-title">{title}</h2>
    {/if}
    {#if source}
        <p class = "chart-source">{source}</p>
    {/if}
</div>

<style>
    .chart-details {
        text-align: center;
        margin-bottom: 1rem;
    }

    .chart-title {
        margin-bottom: 0.25rem;
    }

    .chart-source {
        font-family: 'Roboto Mono', monospace;
        text-align: left;
        font-size: 0.8em;
        font-weight: 800;
        color: var(--color-gray-600);
        margin-bottom: 2rem;
        text-transform: uppercase;
    }
</style>