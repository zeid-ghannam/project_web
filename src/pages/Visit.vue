<template>
  <div class="container mx-auto py-8">
      <!-- Attraction and locale eatry -->
      <section class="flex justify-center items-center">
        <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div role="main" class="flex flex-col items-center justify-center">
            <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">{{ $t("visit.section.attractions.title", $store.state.language) }}</h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              {{ $t("visit.section.attractions.description", $store.state.language) }}
            </p>
          </div>
          <div class="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 text-gray-100">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
              <!-- Featured Attraction -->
              <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-500" 
                :style="{ backgroundImage: `url(${require('@/assets/images/attractions/kazan_kremlin.jpg')})` }"
                >
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-green-800 to-red-500">
                  
                </div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <p rel="noopener noreferrer" href="#" class="px-3 py-2 text-xs font-semibold uppercase text-gray-700 dark:bg-amber-400 bg-amber-400">
                    {{ $t("visit.section.attractions.items[0].category",  $store.state.language)}}
                  </p>
                </div>
                
                <div class="z-10 p-5">
                  <h2 class="font-bold text-md text-gray-100">
                    {{ $t("visit.section.attractions.items[0].name",  $store.state.language)}}
                  </h2>
                  <h3 class="text-sm text-gray-100">
                    {{ $t("visit.section.attractions.items[0].description",  $store.state.language)}}
                  </h3>
                  <h4>
                    <svg
                      class="inline-block w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>

                    <a
                      rel="noopener noreferrer"
                      target="blank"
                      href="https://www.google.com/maps/place/Kazan+Kremlin/@55.7993592,49.103424,17z/data=!3m1!4b1!4m6!3m5!1s0x415ead219941ae53:0x5b0126a895b9ce7d!8m2!3d55.7993562!4d49.1059989!16zL20vMDZxcGo5?entry=ttu"
                      class="italic underline inline-block"
                      >
                      {{ $t("button.visit__location",  $store.state.language)}}
                      </a>
                  </h4>
                </div>
              </div>

              <div
                  class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
                  :style="{ backgroundImage: `url(${require('@/assets/images/attractions/malabar.jpg')})` }"
                >
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-green-800 to-red-400"></div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <p
                    class="px-3 py-2 text-xs font-semibold uppercase text-gray-700 dark:bg-amber-400 bg-amber-400">
                    {{ $t("visit.section.attractions.items[1].category",  $store.state.language)}}
                  </p>
                </div>


                <div class="z-10 p-5">
                  <h2 class="font-bold text-md text-gray-100">
                    {{ $t("visit.section.attractions.items[1].name",  $store.state.language)}}
                  </h2>
                  <h3 class="text-sm text-gray-100">
                    {{ $t("visit.section.attractions.items[1].description",  $store.state.language)}}
                  </h3>
                  <h4>
                    <svg
                      class="inline-block w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>

                    <a
                      rel="noopener noreferrer"
                      target="blank"
                      href="https://www.google.com/maps/place/Malabar/@55.799664,49.1255201,17z/data=!3m1!4b1!4m6!3m5!1s0x415ead6ae9516ff1:0x620e269c28412276!8m2!3d55.799661!4d49.128095!16s%2Fg%2F119vfntm8?entry=ttu"
                      class="italic underline inline-block"
                      >
                      {{ $t("button.visit__location",  $store.state.language)}}
                      </a>
                  </h4>
                </div>
              </div>

              <div
                  class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
                  :style="{ backgroundImage: `url(${require('@/assets/images/attractions/Kazan_church.jpg')})` }"
                >
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-green-800 to-red-400"></div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <p
                    class="px-3 py-2 text-xs font-semibold uppercase text-gray-700 dark:bg-amber-400 bg-amber-400">
                    {{ $t("visit.section.attractions.items[2].category",  $store.state.language)}}
                </p>
                </div>
               
                <div class="z-10 p-5">
                  <h2 class="font-bold text-md text-gray-100">
                    {{ $t("visit.section.attractions.items[2].name",  $store.state.language)}}
                  </h2>
                  <h3 class="text-sm text-gray-100">
                    {{ $t("visit.section.attractions.items[2].description",  $store.state.language)}}
                  </h3>
                  <h4>
                    <svg
                      class="inline-block w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>

                    <a
                      rel="noopener noreferrer"
                      target="blank"
                      href="https://www.google.com/maps/place/A+temple+of+all+religions/@55.8005852,48.9721371,17z/data=!3m1!4b1!4m6!3m5!1s0x41595364297580f9:0x5b9181b7b8ab0f66!8m2!3d55.8005822!4d48.974712!16s%2Fm%2F0g9zkh6?entry=ttu"
                      class="italic underline inline-block"
                      >
                      {{ $t("button.visit__location",  $store.state.language)}}
                      </a>
                  </h4>
                </div>
              </div>
              
              <div
                  class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
                  :style="{ backgroundImage: `url(${require('@/assets/images/attractions/Kazan_Federal_University.jpg')})` }"
                >
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-green-800 to-red-400"></div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <p
                    class="px-3 py-2 text-xs font-semibold uppercase text-gray-700 dark:bg-amber-400 bg-amber-400">
                    {{ $t("visit.section.attractions.items[3].name",  $store.state.language)}}
                </p>
                </div>

                <div class="z-10 p-5">
                  <h2 class="font-bold text-md text-gray-200">
                    {{ $t("visit.section.attractions.items[3].category",  $store.state.language)}}
                  </h2>
                  <h3 class="text-sm text-gray-100">
                    {{ $t("visit.section.attractions.items[3].description",  $store.state.language)}}
                  </h3>
                  <h4>
                    <svg
                      class="inline-block w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>

                    <a
                      rel="noopener noreferrer"
                      target="blank"
                      href="https://kpfu.ru/"
                      class="italic underline inline-block"
                      >
                      {{ $t("button.visit__website",  $store.state.language)}}
                      </a>
                  </h4>
                </div>
              </div>

              <div
                  class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
                  :style="{ backgroundImage: `url(${require('@/assets/images/attractions/Epiphany_Cathedral_Bell_Tower.jpg')})` }"
                >
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-green-800 to-red-400"></div>
                <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <p
                    class="px-3 py-2 text-xs font-semibold uppercase text-gray-700 dark:bg-amber-400 bg-amber-400">
                    {{ $t("visit.section.attractions.items[4].category",  $store.state.language)}}
                </p>
                </div>
                <div class="z-10 p-5">
                  <h2 class="font-bold text-md text-gray-200">
                    {{ $t("visit.section.attractions.items[4].name",  $store.state.language)}}
                  </h2>
                  <h3 class="text-sm text-gray-100">
                    {{ $t("visit.section.attractions.items[4].description",  $store.state.language)}}
                  </h3>
                  <h4>
                    <svg
                      class="inline-block w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>

                    <a
                      rel="noopener noreferrer"
                      target="blank"
                      href="https://www.google.com/maps/place/Malabar/@55.799664,49.1255201,17z/data=!3m1!4b1!4m6!3m5!1s0x415ead6ae9516ff1:0x620e269c28412276!8m2!3d55.799661!4d49.128095!16s%2Fg%2F119vfntm8?entry=ttu"
                      class="italic underline inline-block"
                      >
                      {{ $t("button.visit__location",  $store.state.language)}}
                      </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
     </section>

      <!-- Travel Tips -->
      <div class="py-16">
        <div class="container mx-auto px-4">
          <div role="main" class="flex flex-col items-center justify-center mb-8">
            <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">{{ $t("visit.section.tips.title", $store.state.language) }}</h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              {{ $t("visit.section.tips.description", $store.state.language) }}
            </p>
          </div>
          <div class="flex flex-wrap justify-center">
            
          <!-- Public Transportation -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible="{opacity: 1, x: 0 }"
            :delay="300"
            class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
              <div class="text-center mb-8">
                  <svg class="inline-block w-24 h-24 mr-2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3.5 18h-1.167c-.322 0-.583-.261-.583-.583v-.584c-.309 0-.606-.123-.825-.341-.219-.219-.342-.516-.342-.825v-4.667c-.322 0-.583-.261-.583-.583v-1.75c0-.322.261-.584.583-.584v-2.333c0-.966.784-1.75 1.75-1.75h9.334c.966 0 1.75.784 1.75 1.75v2.333c.322 0 .583.262.583.584v1.75c0 .322-.261.583-.583.583v4.667c0 .309-.123.606-.342.825-.219.218-.516.341-.825.341v.584c0 .322-.261.583-.583.583h-1.167c-.322 0-.583-.261-.583-.583v-.584h-5.834v.584c0 .322-.261.583-.583.583zm-.875-4.083c.483 0 .875.392.875.875s-.392.875-.875.875-.875-.392-.875-.875.392-.875.875-.875zm8.75 0c.483 0 .875.392.875.875s-.392.875-.875.875-.875-.392-.875-.875.392-.875.875-.875zm-2.917.583h-2.916c-.161 0-.292.131-.292.292 0 .161.131.291.292.291h2.916c.161 0 .292-.13.292-.291 0-.161-.131-.292-.292-.292zm3.792-7.292c0-.161-.131-.291-.292-.291h-9.916c-.161 0-.292.13-.292.291v4.959s1.807.583 5.25.583 5.25-.583 5.25-.583v-4.959zm-2.917-2.041h-4.666v.583h4.666v-.583z"/>
                  </svg>
                </div>
              
                <h2 class="font-bold text-center px-2 pb-5">{{ $t("visit.section.tips.items[0].name", $store.state.language) }}</h2>  
                <p class="px-2 pb-5 text-sm text-center">
                  {{ $t("visit.section.tips.items[0].description", $store.state.language) }}
                </p>
                <a
                  href="https://nashaplaneta.net/europe/russia/kazan-transport-na-chem-peremeshatsa_en"
                  class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
                >
                {{ $t("button.visit__know_more", $store.state.language) }}
                </a>
          </div>

          <!-- Accommodation -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{opacity: 1, y: 0 }"
            :delay="500"
            class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
            <div class="text-center mb-8">
              <svg class="inline-block w-24 h-24 mr-2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 24c-4.14-4.983-9-10.033-9-15 0-4.967 4.033-9 9-9s9 4.033 9 9-4.735 9.986-9 15zm0-7c-4.419 0-8-3.582-8-8s3.581-8 8-8c4.419 0 8 3.582 8 8s-3.581 8-8 8zm5-4v-4h-9v-4h-1v8h1v-1h8v1h1zm-6.5-8c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm6.5 3c0-1.657-1.343-3-3-3h-1v3h4z"/></svg>
                
              </div>
            
              <h2 class="font-bold text-center px-2 pb-5">{{ $t("visit.section.tips.items[1].name", $store.state.language) }}</h2>  
              <p class="px-2 pb-5 text-sm text-center">
                {{ $t("visit.section.tips.items[1].description", $store.state.language) }}
              </p>
              <a
                href="https://www.expedia.co.in/Kazan-Hotels.d1993.Travel-Guide-Hotels"
                class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
              >
              {{ $t("button.visit__book", $store.state.language) }}
              </a>
          </div>
          
          <!-- Education -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible="{opacity: 1, x: 0 }"
            :delay="300"
            class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52"
            >
            
            <div class="text-center mb-8">
                <svg  class="inline-block w-24 h-24 mr-2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M12 22.246c-.428 0-1.099-.709-1.688-2.276-.579.295-1.082.527-1.571.738.767 1.992 1.858 3.292 3.259 3.292 1.44 0 2.552-1.371 3.322-3.452-.485-.201-.997-.43-1.581-.719-.599 1.667-1.298 2.417-1.741 2.417zm-4.709-2.216c-3.099 1.139-6.29 1.168-6.29-1.644 0-.939.435-2.257 1.796-4.082.581-.779 1.254-1.545 1.937-2.248 1.531-1.555 3.256-3.05 5.505-4.599-1.083-.596-2.264-1.167-3.416-1.59-1.18-.435-2.219-.676-3.015-.676-.508 0-.886.107-1.009.288-.133.192-.138.784.445 1.843l.21-.013c1.047 0 1.898.866 1.898 1.933 0 1.067-.851 1.931-1.898 1.931-1.048 0-1.897-.864-1.897-1.931 0-.346.089-.67.245-.951-.59-1.04-.802-1.86-.802-2.503 0-1.515 1.154-2.354 2.808-2.354 2.514 0 5.9 1.662 8.082 2.946 2.214-1.363 5.717-3.159 8.304-3.159 1.893 0 2.807 1.054 2.807 2.395 0 .939-.436 2.256-1.796 4.08-3.084 4.137-9.216 8.606-13.914 10.334zm14.917-4.305c.142-.27.22-.576.22-.902 0-1.068-.849-1.933-1.897-1.933s-1.897.865-1.897 1.933c0 1.066.849 1.93 1.897 1.93l.258-.017c.552 1.024.544 1.597.415 1.787-.124.181-.501.287-1.01.287-1.602 0-3.833-.944-5.27-1.657-.48.342-1.075.748-1.657 1.119 1.925 1.036 4.757 2.295 6.927 2.295 1.64 0 2.808-.83 2.808-2.354 0-.638-.211-1.455-.794-2.488zm-12.834.119h-.001l-.013-.01c-1.144-.81-2.272-1.7-3.317-2.631-2.817 2.877-3.611 4.963-3.238 5.524.126.189.492.299 1.003.299 2.35 0 6.08-2.018 8.287-3.465 2.709-1.775 5.8-4.328 7.736-6.926 1.506-2.018 1.552-3.081 1.366-3.361-.126-.19-.491-.298-1.003-.298-1.952 0-4.924 1.459-6.636 2.447 1.263.836 2.443 1.719 3.52 2.616-.408.415-.834.819-1.27 1.211-1.196-.982-2.524-1.946-3.901-2.81-1.581 1.036-3.173 2.254-4.603 3.552 1.075.951 2.356 1.949 3.721 2.873-.522.331-1.049.647-1.651.979zm2.626-5.844c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-1.739-5.828c-.58-.285-1.095-.518-1.581-.718.77-2.082 1.882-3.454 3.32-3.454 1.403 0 2.495 1.302 3.261 3.292-.49.212-.996.447-1.572.739-.587-1.567-1.258-2.275-1.689-2.275-.441 0-1.139.75-1.739 2.416z"/>
                </svg>
              </div>
            
              <h2 class="font-bold text-center px-2 pb-5">{{ $t("visit.section.tips.items[2].name", $store.state.language) }}</h2>  
              <p class="px-2 pb-5 text-sm text-center">
                {{ $t("visit.section.tips.items[2].description", $store.state.language) }}
              </p>
              <a
                href="https://www.vatel.com.ru/en/hotel-management-school-kazan/study-in-kazan"
                class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
              >
              {{ $t("button.visit__know_more", $store.state.language) }}
              </a>
          </div>

</div>
        </div>
      </div>

      <!-- PhotoGallery -->
      <div class="py-16">
        <div class="container mx-auto px-4">
          <div role="main" class="flex flex-col items-center justify-center mb-8">
            <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">{{ $t("visit.section.gallery.title", $store.state.language) }}</h1>
            <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              {{ $t("visit.section.gallery.description", $store.state.language) }}
            </p>
          </div>
          <PhotoGallery></PhotoGallery>
        </div>
      </div>

  </div>
</template>

<script>
import PhotoGallery from '../components/PhotoGallery.vue';
export default {
  name: 'VisitPage',
  components: {
    PhotoGallery
  }
}
</script>

<style scoped>
</style>
