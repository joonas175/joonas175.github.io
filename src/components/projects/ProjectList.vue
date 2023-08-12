<template>
  <div>
    <div class="filters">
      <b class="filters-title">FILTER BY</b>
      <div class="filter-container">
        languages
        <b v-for="(on, lang) of langFilters" :class="{active: on}" @click="langFilters[lang] = !langFilters[lang];">
          {{ lang }}
        </b>
      </div>
      <div class="filter-container">
        frameworks
        <b v-for="(on, fw) of fwFilters" :class="{active: on}" @click="fwFilters[fw] = !fwFilters[fw];">
          {{ fw }}
        </b>
      </div>
      <div class="filter-container">
        project_type
        <b v-for="(on, type) of typeFilters" :class="{active: on}" @click="typeFilters[type] = !typeFilters[type];">
          {{ type }}
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
import { ComputedRef, computed, reactive } from 'vue';
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
const projectTypes = ['school', 'work', 'hobby', 'other'];
const typeFilters: FilterRecord =  reactive(createFilterRecordFromSet(projectTypes));

const filteredProjects: ComputedRef<CollectionEntry<'project'>[]> = computed(() => {
  const projects = new Set<CollectionEntry<'project'>>();
  let hasFilters = false;
  for(const lf in langFilters) {
    if(langFilters[lf]) {
      hasFilters = true;
      props.projects.filter((p) => p.data.languages?.find((lang) => lang === lf)).forEach((p) => projects.add(p));
    }
  }

  for(const fw in fwFilters) {
    if(fwFilters[fw]) {
      hasFilters = true;
      props.projects.filter((p) => p.data.frameworks?.find((fw1) => fw1 === fw)).forEach((p) => projects.add(p));
    }
  }

  return hasFilters ? [...projects] : props.projects;
});

const typeFilteredProjects: ComputedRef<CollectionEntry<'project'>[]> = computed(() => {
  const activeTypeFilters: typeof projectTypes = [];
  for(const type in typeFilters) {
    if(typeFilters[type]) {
      activeTypeFilters.push(type);
    }
  }
  return activeTypeFilters.length === 0 ? filteredProjects.value : filteredProjects.value.filter((p) => activeTypeFilters.find((t) => t === p.data.type));
})

const sortedProjects = computed(() => {
  return typeFilteredProjects.value;
});

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
}

.filters-title {
  align-self: center;
  margin-bottom: 5px;
}

.filter-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  b {
    padding: 2px 6px;
    cursor: pointer;
    border: 1px solid;
    border-radius: 2px;
    margin: 4px;

    &.active {
      color: var(--highlight-text-color);
    }
  }
}

</style>