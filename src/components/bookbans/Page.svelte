<!-- 
npm run build
git add .
git commit -m "updated styling"
git push origin main

vercel --prod
 -->

<script>
	import Title from "$components/bookbans/Title.svelte";
	import UniqueTitles from "$components/bookbans/UniqueTitles.svelte";
	import M4LGroups from "$components/bookbans/M4LGroups.svelte";
	import TimeDifferences from "$components/bookbans/TimeDifferences.svelte";
	import IntroScrolly from "$components/bookbans/IntroScrolly.svelte";
	import M4LMap from "$components/bookbans/M4LMap.svelte";
	import BookBanMap from "$components/bookbans/BookBanMap.svelte";
	import MapsScrolly from "$components/bookbans/MapsScrolly.svelte";
	import RevenueGraphic from "$components/bookbans/RevenueGraphic.svelte";
</script>

<div id="page">
	
	<p class="copy">
		Book bans aren't new. The act of removing books from public circulation has long been used as a tool to suppress free speech and restrict access to ideas and information that have been determined by some party to be dissenting, inappropriate, or dangerous—conditions that have been applied, often arbitrarily, to any book from The Handmaid's Tale to Harry Potter. 
	</p>

	<UniqueTitles />
	
	<p class="copy">
		But the recent exponential rise in bans across the nation is surprisingly new. The intense polarization of the early 2020s—marked by deep divisions over the Covid-19 pandemic, racial injustice, abortion access, transgender rights, climate policies, and a charged presidential election—have accelerated efforts to restrict certain political and cultural content from school curriculums and public spaces. Described as “educational gag orders” by PEN America, this censorship movement has particularly targeted books containing themes of race, gender, sex, diversity, and LGBTQ+ issues, thereby silencing critical perspectives and limiting access to diverse voices in literature. 
	</p>

	<h2 class="section-header">Who is driving these book bans?</h2>

	<p class="copy">
		While it may be easy to pin them on overly concerned parents or local fringe Facebook groups, our data reveals that the groups behind these bans are far more organized, resourced, and coordinated than previously thought, with links to far-right extremism and major conservative networks. These “parental rights groups”, as they are commonly referred to, have exerted significant influence by endorsing legislation such as Florida’s Don’t Say Gay bill and infiltrating local school boards to block educators from teaching topics like critical race theory and gender identity. In particular, book bans have emerged as a key tactic in efforts to restrict educational content in schools, as various groups increasingly coordinate their evaluation criteria and compile ban lists—some of which have been adopted by school boards as official metrics.
	</p>

	<p class="copy">
		While some of these groups have been around since as early as the 1980s, PEN America reported that 70% of those currently in operation were formed in or after 2021.  
	</p>

	<p class="copy">
		But it’s not just the numbers; the organizational power of these groups is also growing. Across the three largest book-banning organizations—Moms for Liberty, No Left Turn in Education, and Parents Defending Education, all of which were founded in 2020 or 2021—we found that their collective revenue nearly doubled after just a year of operation, increasing from $4 million in 2021 to $6.8 million in 2022 altogether.  
	</p>
	
	<p class="copy">
		Each group has invested this money in different ways. In 2022, Parents Defending Education, by far the biggest earner among the three, spent one million dollars on employee compensation and benefits and another hefty million on legal fees, which funded lawsuits against various school districts, including one in Massachusetts over the creation of student affinity groups and another in Iowa challenging policies that allowed students to use their preferred names and pronouns. Meanwhile, No Left Turn in Education allocated more than half their 2022 revenue to contract labor.
	</p>

	<RevenueGraphic />

	<h2 class="section-header">How Moms for Liberty is gaining ground</h2>

	<p class="copy">
		Let’s take a closer look at how the group has driven book bans across the nation over the past three years. 
	</p>

	<M4LGroups />
	<M4LMap />
	<BookBanMap />

	<p class="copy">
		While it might not be surprising to see Texas and Florida on the list, it’s York County, PA that takes center stage, where educators have been “locked in a battle” with the local Moms for Liberty chapter for years. Though these mass bans have since been reversed by the Central York school district due to public opposition from community members, the district quietly continued to pull books from school libraries even after the reversal.
	</p>

	<p class="copy">
		Timing is also an important factor. Our analysis finds that the rate of book bans in a county tends to spike right after a Moms for Liberty Facebook group for that county is created, suggesting that these chapters play a crucial role in mobilize local efforts to challenge and remove books in schools. And since Moms for Liberty hasn’t stopped expanding, it raises the concern that the number of book bans may continue to rise as these groups gain influence in more communities. 
	</p>

	<TimeDifferences />

	<!-- <h1>test</h1>
	<MapsScrolly /> -->
	
</div>

<style>
	#page {
		max-width: 50rem;   
		padding: 0;      
		margin: 0 auto;    
	}

	:global(#page section) {
		margin: 32px auto;  
		padding-top: 32px;  
	}

	:global(#page section > section) {
		margin: 0 auto;      
		padding-top: 0;     
	}

	:global(#page h2 span) {
		background: var(--color-mark); 
		padding: 0 8px;             
	}

	.copy {
		max-width: 42rem;  
		margin: 32px auto;    
		text-align: left;   
	}

	.section-header{
		max-width: 42rem;   
		margin: 64px auto;    
		text-align: left;
		font-family: 'American Typewriter', sans-serif;
	}
</style>

