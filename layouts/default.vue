<template>
    <q-layout view="hHh lpR fFf" >
      <q-header elevated class="q-py-xs" height-hint="58">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
          />
  
          <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
            <q-icon :name="fabYoutube" color="red" size="28px" />
            <q-toolbar-title shrink class="text-weight-bold">
              这个是个演示站点
            </q-toolbar-title>
          </q-btn>
  
          <q-space />
  
          <div class="YL__toolbar-input-container row no-wrap">
            <q-input dense outlined square v-model="search" placeholder="Search" class="col" />
            <q-btn class="YL__toolbar-input-btn"  icon="search" unelevated />
          </div>
  
          <q-space />
  
          <div class="q-gutter-sm row items-center no-wrap">
            
            <q-toggle
            :model-value="dark.isActive"
            checked-icon="dark_mode"
            unchecked-icon="light_mode"
            size="3rem"
            @update:model-value="(val) => dark.set(val)"
            />
            <q-btn round dense flat icon="video_call" v-if="$q.screen.gt.sm">
              <q-tooltip>Create a video or post</q-tooltip>
            </q-btn>
            <q-btn round dense flat icon="apps" v-if="$q.screen.gt.sm">
              <q-tooltip>Apps</q-tooltip>
            </q-btn>
            <q-btn round dense flat icon="message" v-if="$q.screen.gt.sm">
              <q-tooltip>Messages</q-tooltip>
            </q-btn>
            <q-btn round dense flat icon="notifications">
              <q-badge color="red" text-color="white" floating>
                2
              </q-badge>
              <q-tooltip>Notifications</q-tooltip>
            </q-btn>
            <q-btn round flat>
              <q-avatar size="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <q-tooltip>Account</q-tooltip>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>
  
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        class=""
        :width="240"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item v-for="link in links1" :key="link.text" :to="link.to" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon color="grey" :name="link.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.text }}</q-item-label>
                    </q-item-section>
            </q-item>
  
            <q-separator class="q-my-md" />
  
            <q-item v-for="link in links2" :key="link.text" :to="link.to" v-ripple clickable>
              <q-item-section avatar>
                <q-icon color="grey" :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
  
            <q-separator class="q-mt-md q-mb-xs" />
  
            <q-item-label header class="text-weight-bold text-uppercase">
              More from Youtube
            </q-item-label>
  
            <q-item v-for="link in links3" :key="link.text" v-ripple clickable>
              <q-item-section avatar>
                <q-icon color="grey" :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
  
            <q-separator class="q-my-md" />
  
            <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
              <q-item-section avatar>
                <q-icon color="grey" :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
  
            <q-separator class="q-mt-md q-mb-lg" />
  
            <div class="q-px-md text-grey-9">
              <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                <a
                  v-for="button in buttons1"
                  :key="button.text"
                  class="YL__drawer-footer-link"
                  href="javascript:void(0)"
                >
                  {{ button.text }}
                </a>
              </div>
            </div>
            <div class="q-py-md q-px-md text-grey-9">
              <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                <a
                  v-for="button in buttons2"
                  :key="button.text"
                  class="YL__drawer-footer-link"
                  href="javascript:void(0)"
                >
                  {{ button.text }}
                </a>
              </div>
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>
  
      <q-page-container>
        <NuxtPage />
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { fabYoutube } from '@quasar/extras/fontawesome-v6'
  const { dark, screen } =useQuasar();

  
      const leftDrawerOpen = ref(false)
      const search = ref('')
  
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }

        const links1 = [
          { icon: 'home', text: '主页' , to: '/' },
          { icon: 'whatshot', text: 'Basic Table', to: '/table/basic' },
          { icon: 'subscriptions', text: 'Virtscroll Sticky', to: '/table/VirtscrollSticky' },
          { icon: 'today', text: "Markup Table", to: '/table/Separators'},
          // form
          { icon: 'folder', text: '表单示例' , to: '/form/demo' },
        ]
        const links2 = [
          { icon: 'folder', text: 'Timelime', to: '/timeline' },
          { icon: 'restore', text: 'History', to: '/History' },
          { icon: 'watch_later', text: 'Watch later', to: '/Watchlater' },
          { icon: 'thumb_up_alt', text: 'Liked videos', to: '/Likedvideos' }
        ]
        const links3= [
          { icon: fabYoutube, text: 'YouTube Premium' },
          { icon: 'local_movies', text: 'Movies & Shows' },
          { icon: 'videogame_asset', text: 'Gaming' },
          { icon: 'live_tv', text: 'Live' }
        ]
        const links4= [
          { icon: 'settings', text: 'Settings' },
          { icon: 'flag', text: 'Report history' },
          { icon: 'help', text: 'Help' },
          { icon: 'feedback', text: 'Send feedback' }
        ]
        const buttons1= [
          { text: 'About' },
          { text: 'Press' },
          { text: 'Copyright' },
          { text: 'Contact us' },
          { text: 'Creators' },
          { text: 'Advertise' },
          { text: 'Developers' }
        ]
        const buttons2= [
          { text: 'Terms' },
          { text: 'Privacy' },
          { text: 'Policy & Safety' },
          { text: 'Test new features' }
        ]
  </script>
  
  <style lang="sass">
  .YL
  
    &__toolbar-input-container
      min-width: 100px
      width: 55%
  
    &__toolbar-input-btn
      border-radius: 0
      border-style: solid
      border-width: 1px 1px 1px 0
      border-color: rgba(0,0,0,.24)
      max-width: 60px
      width: 100%
  
    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem
  
      &:hover
        color: #000
  </style>