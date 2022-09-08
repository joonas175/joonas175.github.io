<script lang="ts">

import type { Paragraph } from "src/types/TextPageContent";
import { formatWithSpecialFormatters } from "../../util/text-formatters";
export let paragraph : Paragraph;

const splitContent = (text?: string) => {
    if(text) {
        return text.split('\n\n');
    } else {
        return [];
    }
};

</script>

<h2>{ paragraph.title }</h2>
{#each splitContent(paragraph.content) as text}
<p> {@html formatWithSpecialFormatters(text) } </p>
{/each}

<style>
    h2 {
		font-size: 18px;
		margin-top: 1.5em;
	}

	h2:nth-child(1) {
		margin-top: 1px;
	}

	p {
		font-size: 12px;
	}
</style>