<script>
	export let scrollIndex;

    // Generate book images for the first five books
    const bookImages = Array.from({ length: 5 }, (_, i) => `book_${i + 1}.png`);

    // Generate book images for books 6 to 25
    const bookImagesFade = Array.from({ length: 20 }, (_, i) => `book_${i + 6}.png`); 

	// Preload images to avoid flashing
	const preloadImages = [...bookImages, ...bookImagesFade].map(image => {
		const img = new Image();
		img.src = `/assets/images/${image}`;
		return img;
	});
</script>

<section id="books-array">
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

    .books-container, .fade-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr); /* Max 5 books per row */
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

    /* Keyframe animation for the fade-in effect */
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

    /* Keyframe-based fade-in animation */
    .book-image-fade {
        animation: fadeInUp 0.5s ease-out forwards; /* Use forwards to keep the final state */
    }

    .fade-container {
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    /* Apply animation delay for staggered effect */
    .book-image-fade {
        animation: fadeInUp 0.5s ease-out forwards;
        opacity: 0;
        transform: translateY(20px);
    }
</style>
