<!--  -->
<template>
  <div class>
    {{ kv | pluralize('kv') }} -- {{ 1561103282824 | parseTime('{y}-{m}-{d} {h}:{i}') }}
    <div>
      {{ 1340265290 | timeAgo }}
    </div>
    <div>
      {{ 4352345324523 | numberFormatter }}
    </div>
    <div>
      {{ 12341243142143 | toThousandFilter }}
    </div>
    <div>
      {{ 'asdf' | uppercaseFirst }}
    </div>

    <div>
      <!-- {{ 'kv' | setCookie('520', 7) }} -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      kv: 2
    }
  },
  computed: {},
  watch: {},
  created() {
    // setCookie('kv', '520', 7)
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>
