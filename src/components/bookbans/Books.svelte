<script>
    import { onMount } from 'svelte';

    export let scrollIndex;

    // Generate book images for the first five books
    const bookImages = Array.from({ length: 5 }, (_, i) => `book_${i + 1}.png`);

    // Generate book images for books 6 to 25
    const bookImagesFade = Array.from({ length: 20 }, (_, i) => `book_${i + 6}.png`); 

    let imagesLoaded = false;

    // Function to preload images
    function preloadImages(imageArray) {
        return Promise.all(
            imageArray.map(image => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = `/assets/images/${image}`;
                    img.onload = () => resolve();
                    img.onerror = () => resolve(); // Resolve even on error to avoid blocking
                });
            })
        );
    }

    // Use onMount to ensure this runs after the DOM is ready
    onMount(async () => {
        const allImages = [...bookImages, ...bookImagesFade];
        await preloadImages(allImages);
        imagesLoaded = true;
    });
</script>

<section id="books-array" class:imagesLoaded={imagesLoaded}>
    <div class="books-container">
        {#each bookImages as image, index}
            <img 
                src={`/assets/images/${image}`} 
                alt={`Book ${index + 1}`} 
                class={`book-image ${scrollIndex >= index ? 'fade-in' : ''}`} 
            />
        {/each}
    </div>

    <div class="fade-container">
        {#if scrollIndex >= 5}
            {#each bookImagesFade as image, index}
                <img 
                    src={`/assets/images/${image}`}
                    alt={`Book ${index + 6}`}
                    class="book-image book-image-fade"
                    style="animation-delay: {index * 0.1}s;"
                />    
            {/each}
        {/if}
    </div>
</section>

<style>
    #books-array {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem 0;
        position: relative;
        align-items: center;
    }

    .imagesLoaded #books-array {
        visibility: visible; /* Show once images are loaded */
    }

    .books-container, .fade-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        width: 100%;
        padding-bottom: 1rem;
    }

    .book-image, .book-image-fade {
        height: 150px; 
        width: auto; 
        border-radius: 5px;
        object-fit: cover; 
        opacity: 0;
        transform: translateY(20px);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }

    .book-image-fade {
        animation: fadeInUp 0.5s ease-out forwards;
    }

    .fade-container {
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
</style>
