// 模拟后端动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
// const permissionRouter = {
//   path: "/permission",
//   meta: {
//     title: "权限管理",
//     icon: "ep:lollipop",
//     rank: 10
//   },
//   children: [
//     {
//       path: "/permission/page/index",
//       name: "PermissionPage",
//       meta: {
//         title: "页面权限",
//         roles: ["admin", "common"]
//       }
//     },
//     {
//       path: "/permission/button/index",
//       name: "PermissionButton",
//       meta: {
//         title: "按钮权限",
//         roles: ["admin", "common"],
//         auths: [
//           "permission:btn:add",
//           "permission:btn:edit",
//           "permission:btn:delete"
//         ]
//       }
//     }
//   ]
// };

const artRouter = {
  path: "/gzt",
  meta: {
    title: "工作台",
    rank: 10,
  },
  children: [
    {
      path: "/gzt/art/index",
      name: "Art",
      meta: {
        title: "文章",
        roles: [ "common"],
      }
    },
    {
      path: "/gzt/author/index",
      name: "Author",
      meta: {
        title: "作者",
        roles: ["admin", "common"],
      }
    },
    {
      path: "/gzt/queryart/index",
      name: "Queryart",
      meta: {
        title: "查询文章",
        roles: ["admin", "common"],
      }
    },
    {
      path: "/gzt/querytitle/index",
      name: "Querytitle",
      meta: {
        title: "查询标题",
        roles: ["admin", "common"],
      }
    },
  ]
};

export default defineFakeRoute([
  {
    url: "/get-async-routes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [artRouter]
      };
    }
  }
]);
