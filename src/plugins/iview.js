import Vue from 'vue'
import { 
    Button,
    Form,
    FormItem,
    Input,
    Icon,
    Message,
    Row,
    Col,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Table,
    DatePicker,
    Page,
    Select,
    Option,
    TimePicker,
    RadioGroup,
    Radio,
    CheckboxGroup,
    Checkbox,
    Modal,


 } from 'view-design'



Vue.component('Button', Button)
Vue.component('Form', Form)
Vue.component('Form-item', FormItem)
Vue.component('Input', Input)
Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('i-col', Col)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('Menu-item', MenuItem)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('Breadcrumb-item', BreadcrumbItem)
Vue.component('Card', Card)
Vue.component('Table', Table)
Vue.component('Date-picker', DatePicker)
Vue.component('Page', Page)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Time-picker', TimePicker)
Vue.component('Radio-group', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Checkbox-group', CheckboxGroup)
Vue.component('Checkbox', Checkbox)
Vue.component('Modal', Modal)

//把Message挂载到Vue的原型对象上
Vue.prototype.$message =Message

import 'view-design/dist/styles/iview.css'
