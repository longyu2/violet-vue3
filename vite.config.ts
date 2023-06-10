import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginAutodeploys from 'vite-plugin-autodeploys'
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vitePluginAutodeploys({
      "dev":{
        host:'175.178.10.204',//服务器IP
        port:22,//服务器端口
        username:'root',//服务器ssh登录用户名
        password:'20010506longyuL.',//服务器ssh登录密码
        serverpath:'/home/ubuntu/www/website/violet',//服务器web目录 
      },
      "jp":{
        host:'jp.violet-evergarden.net',//服务器IP
        port:22,//服务器端口
        username:'root',//服务器ssh登录用户名
        password:'tuFXOX7eab8g',//服务器ssh登录密码
        serverpath:'/root/www/website/violet',//服务器web目录 
      }
    }),
  ],

  

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
