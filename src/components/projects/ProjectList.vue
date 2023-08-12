<template>
  <div>
    <div class="filters">
      <b class="filters-title">FILTER BY</b>
      <div class="filter-container">
        languages:
        <b v-for="(on, lang) of langFilters" :class="{active: on}" @click="toggleFilter(lang, 'lang')">
          {{ lang }}
        </b>
      </div>
      <div class="filter-container">
        frameworks:
        <b v-for="(on, fw) of fwFilters" :class="{active: on}" @click="toggleFilter(fw, 'fw')">
          {{ fw }}
        </b>
      </div>
      <hr>
    </div>
    <b style="color: #fff5;">$ cat projects.js | filter | sort</b>
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
    acc[val] = false;
    return acc;
  }, {} as FilterRecord);
};

const langFilters: FilterRecord = reactive(createFilterRecordFromSet([...props.langs].sort()));
const fwFilters: FilterRecord = reactive(createFilterRecordFromSet([...props.frameworks].sort()));

const filteredProjects = computed(() => {
  return props.projects;
});

const sortedProjects = computed(() => {
  return filteredProjects.value;
});

type FilterType = 'lang' | 'fw';
const toggleFilter = (key: string, type: FilterType) => {
  if(type === 'lang') {
    langFilters[key] = !langFilters[key];
  } else if(type === 'fw') {
    fwFilters[key] = !fwFilters[key];
  }
}

</script>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-direction: column;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > div {
    margin-top: 0.5rem;
  }

  .filters-title {
    align-self: center;
  }
}

.filter-container {
  display: flex;
  align-items: center;
  b {
    padding: 3px 6px;
    cursor: pointer;
    border: 1px solid;
    border-radius: 2px;
    margin: 0 2px;

    &.active {
      color: var(--highlight-text-color);
    }
  }
}

</style>