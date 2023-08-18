<template>
  <div class="project-list-item-container">
    <a :href="`/project/${project.slug}/`" class="link-container padding-indent-1" rel="prefetch">
      <i class="bracket">
        {
      </i>
        <div class="indent-1">
          name: <b class="name-prop">"{{ project.data.name }}"</b>,
        </div>
        <div class="indent-1" v-if="project.data.shortDescription">
          description: <b class="short-desc-prop">"{{ project.data.shortDescription }}"</b>,
        </div>
        <div class="indent-1" v-if="project.data.languages">
          languages: <i class="bracket">[</i> 
          <div class="indent-1">
            <template v-for="(language, index) in project.data.languages">
              <b class="language-prop" >"{{ language }}"</b>{{ index !== project.data.languages.length - 1 ? ', ' : '' }}
            </template>
          </div>
          <i class="bracket">]</i>,
        </div>
        <div class="indent-1" v-if="project.data.frameworks">
          frameworks: <i class="bracket">[</i>
          <div class="indent-1">
            <template v-for="(framework, index) in project.data.frameworks">
              <b class="framework-prop" >"{{ framework }}"</b>{{ index !== project.data.frameworks.length - 1 ? ', ' : '' }}
            </template>  
          </div>
          <i class="bracket">]</i>,
        </div>
        <div class="indent-1" v-if="project.data.other">
          other_tags: <i class="bracket">[</i>  
          <div class="indent-1">
            <template v-for="(skill, index) in project.data.other">
              <b class="framework-prop" >"{{ skill }}"</b>{{ index !== project.data.other.length - 1 ? ', ' : '' }}
            </template>
          </div>
          <i class="bracket">]</i>,
        </div>
        <div class="indent-1" v-if="project.data.type">
          type: <i class="class">ProjectType.</i><i class="constant">{{ project.data.type.toUpperCase() }}</i>,
        </div>
      <i class="bracket">}</i>,
    </a>
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
  @media screen and (min-width: 530px) {
    font-size: 1.2rem;
  }
  color: var(--default-text-color);

  a {
    color: var(--default-text-color);
    text-decoration: none;
    display: block;
  }

  .link-container > *{
    margin-bottom: 3px;
  }

  &:nth-child(2n - 1) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background-color: rgba(var(--link-color-rgba), 0.1);
    cursor: pointer;

    .name-prop {
      text-decoration: underline;
    }
  }

  .name-prop {
    color: var(--highlight-text-color);
    font-size: 1.2rem;
    @media screen and (min-width: 530px) {
      font-size: 1.4rem;
    }
  }
}

.language-prop {
  color: var(--highlight-color-2);
}

.framework-prop {
  color: var(--highlight-color-1);
}
</style>