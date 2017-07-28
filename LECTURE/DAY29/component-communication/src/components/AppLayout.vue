<template lang="pug">
  .app-layout
    header.app-header
      //- 이름이 있는 슬롯
      slot(name="header" brand="Brand is Awesome.")
        h1.app-brand
          a
            img(
              :src="brand.image"
              :alt="brand.desc"
              style="width:100%;height:auto;"
            )
    main.app-main
      //- 기본 슬롯
      slot
    footer.app-footer
      slot(name="footer")
        address {{ copyright }}
</template>

<script>
export default {
  data () {
    return {
      brand: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/512px-Burger_King_Logo.svg.png',
        desc: 'Burger King'
      },
      copyright: 'Copyright &copy; 2017 | Burger King'
    }
  }
}
</script>
