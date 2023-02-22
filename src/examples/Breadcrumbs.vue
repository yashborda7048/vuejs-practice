<template>
  <nav aria-label="breadcrumb">
    <h6 class="mb-0 font-weight-bolder text-dark">
      {{ currentPage }}
    </h6>
  </nav>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    currentPage: {
      required: true
    },
    textWhite: {
      type: String
    }
  }
};
</script>
