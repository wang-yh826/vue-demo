import Vue from 'vue'
import { Button } from 'view-design'
import { Form,FormItem,Input,Icon } from 'view-design'
import { Message } from 'view-design'


Vue.component('Button', Button)
Vue.component('Form', Form)
Vue.component('Form-item', FormItem)
Vue.component('Input', Input)
Vue.component('Icon', Icon)

//把Message挂载到Vue的原型对象上
Vue.prototype.$message =Message

import 'view-design/dist/styles/iview.css'
