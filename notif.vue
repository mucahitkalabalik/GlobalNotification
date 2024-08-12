<script setup>
import { ref, computed } from 'vue'
import { useGlobal } from '@/store/global'
const globalState = useGlobal()


let snackbar = computed({
  get() {
    return globalState.$state.snackbar
  },
  set: function (newValue) {
    globalState.$state.snackbar = newValue
  },
})
let color = computed({
  get() {
    return globalState.$state.color
  },
  set: function (newValue) {
    globalState.$state.color = newValue
  },
})
let text = computed({
  get() {
    return globalState.$state.text
  },
  set: function (newValue) {
    globalState.$state.text = newValue
  },
})
let timeout = computed({
  get() {
    return globalState.$state.timeout
  },
  set: function (newValue) {
    globalState.$state.timeout = newValue
  },
})
let variant = computed({
  get() {
    return globalState.$state.variant
  },
  set: function (newValue) {
    globalState.$state.variant = newValue
  },
})
var icon = computed(() => {
  let icon = null
  switch (globalState.$state.color) {
    case 'success':
      icon = 'check'
      break
    case 'error':
      icon = 'alert-box-outline'
      break
    case 'warning':
      icon = 'alert'
      break
    default:
      icon = ''
  }
  return icon
})
</script>
<template>
  <div class="text-center snackbar">
    <v-snackbar
      :color="color"
      v-model="snackbar"
      :timeout="timeout"
      :variant="variant"
      elevation="24"
      rounded="pill"
    >
      <div class="text-center">
        {{ text }}    <v-icon size="small">{{ `mdi-${icon}` }}</v-icon> 
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style lang="scss" scoped>
.snackbar {
  z-index: 99999;
}
</style>
