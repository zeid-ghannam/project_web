<!-- ArticleDetail.vue -->
<template>
    <main class="mt-10">
      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style="height: 24em;">
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
          style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
        <img :src="require(`@/assets/${article.cover}`)" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a :href="article.location"
            class="px-4 py-1 bg-amber-500 text-gray-800 inline-flex items-center justify-center mb-2">
            {{ $t("button.visit__location",  $store.state.language) }}
          </a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            {{ article.title }}
          </h2>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">
          {{ article.content.intro.text }}
        </p>
        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
          {{ article.content.section_1.title }}
        </h2>
        <p class="pb-6" v-for="(section, id) in section_1" :key="id">
          {{ section.text }}
        </p>

        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
          {{ article.content.section_2.title }}
        </h2>
        <p class="pb-6" v-for="(section, id) in section_2" :key="id">
          {{ section.text }}
        </p>

        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">{{ article.text }}</h2>

      </div>
    </main>

  </template>
  
  <script>
  import englishArticles from '@/data/articles_en.json'; // Import English articles
  import russianArticles from '@/data/articles_ru.json'; // Import Russian articles
  import arabicArticles from '@/data/articles_ar.json'; // Import Arabic articles
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        articles: [],
        article: null,
        section_1: null,
        section_2: null
      };
    },
    computed: {
      ...mapState(['language'])
    },
    watch: {
      language: {
        handler(newLocale) {
          this.getArticle(newLocale);
        },
        immediate: true
      },
      searchQuery() {
        this.events = this.filterEvents(this.events);
      },
      selectedDate() {
        this.events = this.filterEvents(this.events);
      }
    },
    created() {
      // Fetch article data based on ID from URL parameters
      const articleId = this.$route.params.id;
      this.getArticle(this.language);
      this.article = this.articles.find(article => article.id === parseInt(articleId));
      this.section_1 = this.article.content.section_1.text.map((text, index) => {
            return {
                id: index,
                text: text
            };
        });

      this.section_2 = this.article.content.section_2.text.map((text, index) => {
          return {
              id: index,
              text: text
          };
      });
    },
    methods: {
      getArticle(language) {
        switch (language) {
          case 'en':
            this.articles = englishArticles;
            this.updateArticle(this.articles);
            break;
          case 'ru':
            this.articles = russianArticles;
            this.updateArticle(this.articles);
            break;
          case 'ar':
            this.articles = arabicArticles;
            this.updateArticle(this.articles);
            break;
          default:
            this.articles = englishArticles; // Default to English
            this.updateArticle(this.articles);
        }
      },
      updateArticle(articles) {
        this.article = articles.find(article => article.id === parseInt(this.$route.params.id));
        this.section_1 = this.article.content.section_1.text.map((text, index) => {
              return {
                  id: index,
                  text: text
              };
          });
        this.section_2 = this.article.content.section_2.text.map((text, index) => {
            return {
                id: index,
                text: text
            };
        });
      }
    }
  };
  </script>
  
  <style>
  /* Styles for article details */
  </style>
  