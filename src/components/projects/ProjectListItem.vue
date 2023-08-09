<template>
  <div class="project-list-item-container">
    <div>
      {
    </div>
      <div class="indent-1">
        "name": <b class="name-prop">"{{ project.data.name }}"</b>,
      </div>
      <div class="indent-1" v-if="project.data.shortDescription">
        "shortDescription": <b class="short-desc-prop">"{{ project.data.shortDescription }}"</b>
      </div>
      <div class="indent-1" v-if="project.data.languages">
        "languages": [ 
        <template v-for="(language, index) in project.data.languages">
            <b class="language-prop" >"{{ language }}"</b>{{ index !== project.data.languages.length - 1 ? ', ' : '' }}
          </template>
        ]
      </div>
      <div class="indent-1" v-if="project.data.frameworks">
        "frameworks": [ 
          <template v-for="(framework, index) in project.data.frameworks">
            <b class="framework-prop" >"{{ framework }}"</b>{{ index !== project.data.frameworks.length - 1 ? ', ' : '' }}
          </template>
        ]
      </div>
      <div class="indent-1" v-if="project.data.otherSkills">
        "skills": [ 
        <template v-for="(skill, index) in project.data.otherSkills">
            <b class="framework-prop" >"{{ skill }}"</b>{{ index !== project.data.otherSkills.length - 1 ? ', ' : '' }}
          </template>
        ]
      </div>
    <div>
      }{{ props.last ? null : ',' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollectionEntry } from 'astro:content';

const props = defineProps<{
  project: CollectionEntry<'project'>,
  last?: boolean
}>();
</script>

<style scoped lang="scss">
.project-list-item-container {
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(var(--link-color-rgba), 0.1);
    cursor: pointer;

    .name-prop {
      text-decoration: underline;
    }
  }

  .name-prop {
    color: var(--highlight-text-color);
  }

  & > * {
    margin: 0;
    margin-bottom: 5px;
  }

  .indent-1 {
    margin-left: 2ch;
  }

  .indent-2 {
    margin-left: 4ch;
  }
}

.language-prop {
  color: var(--highlight-color-2);
}

.framework-prop {
  color: var(--highlight-color-1);
}
</style>