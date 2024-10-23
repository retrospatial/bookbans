<section id="intro">
	<div id="title">

		<h1 id="headline">Who's Behind the<br>
			<span id="book-text">Book</span><br>
			<span id="bans-text">Bans?</span></h1>

		<div id="books">
			<img id="book1" src="assets/svgs/book1.svg" alt="book1" />
			<img id="book2" src="assets/svgs/book2.svg" alt="book2"/>
    	</div>

	</div>

	<div id="subtitle">
		<p class="subtitle-text">We analyze the recent surge in 'parental rights' groups and their growing role in driving local and nationwide book bans.</p>

		<div id="byline">
			<p class="byline-text">By Florina Sutanto</p>
			<p class="byline-date">November 2024</p>
		</div>
	</div>
	
</section>

<style>
    #intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 40rem;
        min-height: 100vh;
        margin: 0 auto;
        text-align: center;
		margin-top: -60px; 
    }
	
	#title {
		margin: 0;
	}

	#books {
		position: relative;
		height: auto; 
		max-height: 100px; 
		margin-bottom: 80px;
	}

    #book1 {
        position: relative;
        z-index: 1;
		top: -120px;
        left: 40px;  
    }

    #book2 {
        position: relative;
        z-index: 0;
		top: -140px;
    }

    #headline {
        position: relative;
        z-index: 2;
        margin: 0;
		top: 80px;
    }
	
    #book-text {
        position: relative;
        z-index: 3;
		top: 20px;
		text-transform: uppercase;
		font-size: 1.5em;
		left: -20px;
	}
	
    #bans-text {
        position: relative;
        z-index: 3;
		left: 80px;
		top: 30px;
		text-transform: uppercase;
		font-size: 1.5em;
    } 

	#subtitle {
		margin: 0;
	}

	.subtitle-text
	{
		font-size: 18px;
		padding: 0 12px;
		margin-bottom: 50px;
	}

    #byline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 40rem;
        margin-top: 16px;
        border-top: 1px dashed #000;
        border-bottom: 1px dashed #000;
        padding: 18px 0;
    }

    .byline-text,
    .byline-date {
		font-size: 14px;
		font-weight: 500;
        margin: 0;
        text-transform: uppercase;
		font-family: 'Roboto Mono', monospace;
    }

	/* @media (max-width: 600px) { 
        .chart-container {
            padding: 1rem;
            height: 300px;
        }
    } */
</style>
