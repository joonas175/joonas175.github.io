<template>
  <div>
    <template v-for="(project, index) in sortedProjects">
      <ProjectListItem :project="project" :last="index === sortedProjects.length - 1"></ProjectListItem>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { CollectionEntry } from 'astro:content';
import { computed } from 'vue';
import ProjectListItem from './ProjectListItem.vue';

const props = withDefaults(defineProps<{
  projects: CollectionEntry<'project'>[]
}>(), {
  projects: () => []
});

const filteredProjects = computed(() => {
  return props.projects;
});

const sortedProjects = computed(() => {
  return filteredProjects.value;
});

</script>