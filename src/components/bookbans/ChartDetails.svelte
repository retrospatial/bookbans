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
    }

    .chart-title {
        font-family: 'American Typewriter', sans-serif;
        margin-top: 4rem;
        margin-bottom: 0.25rem;
        font-size: 24px;
    }

    .chart-source {
        font-family: 'Roboto Mono', monospace;
        text-align: left;
        font-size: 14px;
        font-weight: 800;
        color: var(--color-gray-600);
        margin-bottom: 4rem;
        text-transform: uppercase;
    }
</style>