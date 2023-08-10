<template>
  <div>
    <div class="filters">
      <b class="filters-title">FILTERS</b>
      <div class="filter-container">
        languages: 
      </div>
      <hr>
    </div>
    <b style="color: #fff5;">$ cat projects.json | filter | sort</b>
    <br><br>
    <i class="keyword">export</i> <i class="var">const</i> projects = <i class="bracket">[</i>
    <template v-for="(project, index) in sortedProjects">
      <ProjectListItem :project="project" :last="index === sortedProjects.length - 1"></ProjectListItem>
    </template>
    <i class="bracket">]</i>;
  </div>
</template>
<script setup lang="ts">
import type { CollectionEntry } from 'astro:content';
import { computed, reactive } from 'vue';
import ProjectListItem from './ProjectListItem.vue';

const props = withDefaults(defineProps<{
  projects: CollectionEntry<'project'>[],
  langs: Iterable<string>,
  frameworks: Iterable<string> 
}>(), {
  projects: () => []
});

type FilterRecord = Record<string, boolean>;

const createFilterRecordFromSet = (collection: Iterable<string>) => {
  return [...collection].reduce((acc, val) => {
    acc[val] = sessionStorage.getItem(`filter:${val}`) === 'true';
    return acc;
  }, {} as FilterRecord);
};

const langFilters: FilterRecord = reactive(createFilterRecordFromSet(props.langs));
const fwFilters: FilterRecord = reactive(createFilterRecordFromSet(props.frameworks));

const filteredProjects = computed(() => {
  return props.projects;
});

const sortedProjects = computed(() => {
  return filteredProjects.value;
});

</script>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  & > div {
    margin-top: 0.5rem;
  }

  .filters-title {
    align-self: center;
  }
}

</style>