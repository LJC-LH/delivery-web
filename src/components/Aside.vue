<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="height: 100%"
    default-active="/home"
    :collapse="isCollapse"
    :collapse-transition="false"
    router
  >
    <el-menu-item
      :index="'/index/' + item.menuClick"
      v-for="(item, i) in menu"
      :key="i"
    >
      <i :class="item.menuIcon"></i>
      <span slot="title">{{ item.menuName }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      menu: [
        {
          menuClick: "home",
          menuName: "首页",
          menuIcon: "el-icon-star-off",
        },
        // {
        //   menuClick: "admin",
        //   menuName: "管理员管理",
        //   menuIcon: "el-icon-s-custom",
        // },
        {
          menuClick: "user",
          menuName: "用户管理",
          menuIcon: "el-icon-user-solid",
        },
        {
          menuClick: "outlet",
          menuName: "网点管理",
          menuIcon: "el-icon-menu",
        },
        {
          menuClick: "express",
          menuName: "快递管理",
          menuIcon: "el-icon-s-management",
        },
      ],
    };
  },
  props: {
    isCollapse: Boolean,
  },
};
</script>

<style scoped>
</style>