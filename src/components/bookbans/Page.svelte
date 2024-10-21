<!-- 
git add .
git commit -m "Update base path for GitHub Pages"
git push origin main
npm run deploy
 -->

<script>

	import DemoLink from "$components/demo/Demo.Link.svelte";
	import DemoImg from "$components/demo/Demo.Img.svelte";
	import DemoButtonSet from "$components/demo/Demo.ButtonSet.svelte";
	import DemoRange from "$components/demo/Demo.Range.svelte";
	import DemoSelect from "$components/demo/Demo.Select.svelte";
	import DemoToggle from "$components/demo/Demo.Toggle.svelte";
	import DemoSortTable from "$components/demo/Demo.SortTable.svelte";
	import DemoSvelteElement from "$components/demo/Demo.SvelteElement.svelte";
	import DemoSvelteComponent from "$components/demo/Demo.SvelteComponent.svelte";
	import DemoMicroCMS from "$components/demo/Demo.MicroCMS.svelte";
	import DemoFigure from "$components/demo/Demo.Figure.svelte";
	import DemoTip from "$components/demo/Demo.Tip.svelte";
	import DemoScrolly from "$components/demo/Demo.Scrolly.svelte";

	// real
	import UniqueTitles from "$components/bookbans/UniqueTitles.svelte";
	import M4LGroups from "$components/bookbans/M4LGroups.svelte";
	import TimeDifferences from "$components/bookbans/TimeDifferences.svelte";
	import IntroScrolly from "$components/bookbans/IntroScrolly.svelte";
	import M4LMap from "$components/bookbans/M4LMap.svelte";
	import BookBanMap from "$components/bookbans/BookBanMap.svelte";
	import MapsScrolly from "$components/bookbans/MapsScrolly.svelte";
</script>

<div id="page">
	<IntroScrolly />
	<UniqueTitles />
	
	<p>
		Book bans aren’t new. The act of removing books from public circulation has long been used as a tool to suppress free speech and restrict access to ideas and information that have been determined by some party to be dissenting, inappropriate, or dangerous—conditions that have been applied, often arbitrarily, to any book from The Handmaid’s Tale to Harry Potter.  
		<br><br>
		But the recent exponential rise in bans across the nation is surprisingly new. The intense polarization of the early 2020s—marked by deep divisions over the Covid-19 pandemic, racial injustice, abortion access, transgender rights, climate policies, and a charged presidential election—have accelerated efforts to restrict certain political and cultural content from school curriculums and public spaces. Described as “educational gag orders” by PEN America, this censorship movement has particularly targeted books containing themes of race, gender, sex, diversity, and LGBTQ+ issues, thereby silencing critical perspectives and limiting access to diverse voices in literature.  
	</p>

	<h2>Who is driving these book bans?</h2>

	<p>
		While it may be easy to pin them on overly concerned parents or local fringe Facebook groups, our data reveals that the groups behind these bans are far more organized, resourced, and coordinated than previously thought, with links to far-right extremism and major conservative networks. These “parental rights groups”, as they are commonly referred to, have exerted significant influence by endorsing legislation such as Florida’s Don’t Say Gay bill and infiltrating local school boards to block educators from teaching topics like critical race theory and gender identity. In particular, book bans have emerged as a key tactic in efforts to restrict educational content in schools, as various groups increasingly coordinate their evaluation criteria and compile ban lists—some of which have been adopted by school boards as official metrics.  
		<br><br>
		While some of these groups have been around since as early as the 1980s, PEN America reported that 70% of those currently in operation were formed in or after 2021.  
	</p>

	<p><strong>[Graphic/timeline of rise in book ban groups]</strong></p>

	<p>
		But it’s not just the numbers; the organizational power of these groups is also growing. Across the three largest book-banning organizations—Moms for Liberty, No Left Turn in Education, and Parents Defending Education, all of which were founded in 2020 or 2021—we found that their collective revenue nearly doubled after just a year of operation, increasing from $4 million in 2021 to $6.8 million in 2022 altogether.  
		<br><br>
		Each group has invested this money in different ways. In 2022, Parents Defending Education, by far the biggest earner among the three, spent one million dollars on employee compensation and benefits and another hefty million on legal fees, which funded lawsuits against various school districts, including one in Massachusetts over the creation of student affinity groups and another in Iowa challenging policies that allowed students to use their preferred names and pronouns. Meanwhile, No Left Turn in Education allocated more than half their 2022 revenue to contract labor.
	</p>

	<p><strong>[Graphic of aggregate revenue]</strong></p>

	<h2>How Moms for Liberty are spreading</h2>

	<M4LGroups />
	<TimeDifferences />
	<M4LMap />
	<BookBanMap />

	<h1>test</h1>
	<MapsScrolly />
	

	<!-- <DemoLink />
	<DemoImg />
	<DemoSvelteElement />
	<DemoSvelteComponent />
	<DemoMicroCMS />
	<DemoTip />
	<DemoFigure /> -->
</div>

<style>
	#page {
		max-width: 40rem;
		padding: 16px;
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
</style>
