<template>
  <chakra.div
    :bg="bg"
    :color="color"
    :min-h="['auto', 'auto', '100vh']"
    w="100%"
  >
  <chakra.header>
    👇🏽 MDX content should be rendered here. Open console to view rendered.
  </chakra.header>
  <chakra.p>
    Open the console and view the <c-code>type: 'Symbol(Comment)'</c-code> property rendered from the slots object
  </chakra.p>
  <slot />
  </chakra.div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useHead } from '@vueuse/head'
import { useColorModeValue } from '@chakra-ui/c-color-mode'

export default defineComponent({
  props: {
    frontmatter: Object as PropType<{
      title: string
    }>,
  },
  setup(props, { slots }) {

    const bg = useColorModeValue('white', 'gray.800')
    const color = useColorModeValue('gray.700', 'whiteAlpha.900')
    useHead({
      title: props?.frontmatter?.title,
    })

    console.log(slots?.default?.())

    return {
      bg,
      color,
    }
  },
})
</script>
