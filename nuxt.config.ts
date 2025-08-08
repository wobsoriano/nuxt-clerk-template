export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@clerk/nuxt'],

  clerk: {
    appearance: {
      variables: { colorPrimary: '#000000' },
      elements: {
        formButtonPrimary:
                'bg-black border border-black border-solid hover:bg-white hover:text-black',
        socialButtonsBlockButton:
                'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
        socialButtonsBlockButtonText: 'font-semibold',
        formButtonReset:
                'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
        membersPageInviteButton:
                'bg-black border border-black border-solid hover:bg-white hover:text-black',
        card: 'bg-[#fafafa]',
      },
    },
  },

  compatibilityDate: '2025-05-15',
})
