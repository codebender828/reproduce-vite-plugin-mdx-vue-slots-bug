import { h, SetupContext } from 'vue'
/**
 * MDX Components
 *
 * @warn do not use to create mdx components like this:
 * h(chakra('div',{ pb:"4" }), {}, slots)
 * it will look like its working but _hover, _focus etc. pseudo styling and other apis wont work.
 *
 * So create vue component which uses chakra and use the name of component here. Like this:
 * h('NewComponent', {}, slots)
 * or use c-box
 * h('c-box',{ my:'2em', borderRadius: 'sm' }, renderSlot(context.slots, 'default'))
 */

const LinkedHeading = (as: string, apply: string) => (
  props: any,
  context: SetupContext
) => {
  return h(
    'MdxHeading',
    { ...props, as, apply },
    context.slots
  )
}

const MdxChakra = (
  {
    as,
    apply,
    customProps,
  }: {
    as: string
    apply?: string
    customProps?: any
  } = { as: 'div' }
) => (props: any, context: SetupContext) =>
  h(
    'MdxChakra',
    { ...props, as, apply, ...customProps },
    context.slots
  )

export const MdxComponents = {
  h1: (props: any, context: SetupContext) => {
    console.log(' RENDERING HEADER', props, context)
    return h(
      'chakra.h1',
      { apply: 'mdx.h1', ...props },
      context.slots
    )
  },
  h2: LinkedHeading('h2', 'mdx.h2'),
  h3: LinkedHeading('h3', 'mdx.h3'),
  p: MdxChakra({ as: 'p', apply: 'mdx.p' }),
}
