<template>
  <c-center p="10" bg-gradient="linear(to-l, emerald.500, teal.500)" color="white" font-weight="bold" h="100vh">
    <c-v-stack spacing="8">
      <c-heading size="4xl" color="white">
        Chakra UI Vue v1 ⚡️
      </c-heading>
      <c-stack spacing="8" :direction="{ base: 'column', sm: 'column', md: 'row' }" color="emerald.500">
        <c-h-stack>
          <c-button size="md" as="router-link" left-icon="pie-chart" to="/dashboard/settings">
            Dashboard
          </c-button>
          <c-button size="md" as="router-link" left-icon="user" to="/demo">
            View MDX Page
          </c-button>
        </c-h-stack>
      </c-stack>
    </c-v-stack>
  </c-center>
</template>