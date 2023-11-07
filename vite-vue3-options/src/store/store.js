import { defineStore } from 'pinia'
import userStore from './userStore'

export const useUserStore = defineStore('userStore', userStore)
