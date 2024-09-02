declare global {
  interface Window {
    Prism: {
      highlight: (...args: any) => string
      languages: Record<string, any>
      plugins: {
        autoloader: {
          loadLanguages: (languages: string[], callback: () => void) => void
        }
      }
    }
  }
}

export function useCodeHighlighter(code: Ref<string>) {
  const renderedCode = ref('')
  const isLanguageLoaded = ref(false)

  onMounted(() => {
    const loadLanguage = () => {
      if (window.Prism.languages.javascript) {
        isLanguageLoaded.value = true
      }
      else {
        window.Prism.plugins.autoloader.loadLanguages(['javascript'], () => {
          isLanguageLoaded.value = true
        })
      }
    }

    loadLanguage()

    watch(
      [code, isLanguageLoaded],
      ([value, loaded]) => {
        if (!value || !loaded) {
          return
        }
        renderedCode.value = window.Prism.highlight(
          value,
          window.Prism.languages.javascript,
          'javascript',
        )
      },
      { immediate: true },
    )
  })

  return {
    renderedCode,
  }
}
