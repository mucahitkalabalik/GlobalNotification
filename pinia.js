import { defineStore, mapState } from 'pinia'
import axios from '@/services/index.js'
import { v1, auth, user, admin, holdem } from './prefix'

export const useGlobal = defineStore('Global', {
  state: () => {
    return {
      snackbar: false,
      text: 'test Bildirim',
      timeout: 2000,
      color: 'success',
      variant: '',
    }
  },
  actions: {
    notification(text, color, timeout, snackbar = true, variant = 'elevated') {
      this.$patch(state => {
        ;(state.text = text),
          (state.color = color),
          (state.timeout = timeout),
          (state.snackbar = snackbar),
          (state.variant = variant)
      })
    },
  },
  getters: {},
})
