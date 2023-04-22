import { AppConfigInput } from 'nuxt/schema'
import type { RouteLocationRaw } from 'vue-router'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: {
          type?: 'link' | 'button'
          title?: string
          to?: RouteLocationRaw | undefined
        }[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    name: 'Mirage',
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Domicile', to: { name: 'index' } },
            {
              type: 'link',
              title: 'Bibliothèque',
              to: { name: 'bibliotheque' },
            },
            {
              type: 'link',
              title: 'Fréquentation',
              to: { name: 'frequentation' },
            },
            { type: 'button', title: 'Mirage', to: { name: 'mirage' } },
            /*
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            { type: 'button', title: 'Setting', to: { name: 'setting' } }, */
          ],
        },
      },
      footer: {
        year: 2022,
      },
    },
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
