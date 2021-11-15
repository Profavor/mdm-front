<template>
    <n-layout-sider
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :native-scrollbar="false"
      :inverted="inverted"
      style="height: 90vh;"     
    >
      <n-menu
        :inverted="inverted"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
</template>

<script>
import Common from '@/assets/js/common'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

export default {
  name: "app-sidebar",  
  props: {

  },
  setup(){
    const inverted = useState('inverted')

    return {inverted}
  },
  data () {
    return {  
      menuOptions: [
        {
          label: 'Hear the Wind Sing',
          key: 'hear-the-wind-sing',
          icon: Common.renderIcon(BookIcon)
        },
        {
          label: 'MDM',
          key: 'MDM',
          icon: Common.renderIcon(BookIcon),
          disabled: false,
          children: [
            {
              label: Common.routeLink('Form', '/mdm/form'),
              key: 'Form'
            }
          ]
        },
        {
          label: 'A Wild Sheep Chase',
          key: 'a-wild-sheep-chase',
          disabled: true,
          icon: Common.renderIcon(BookIcon)
        },
        {
          label: 'Dance Dance Dance',
          key: 'Dance Dance Dance',
          icon: Common.renderIcon(BookIcon),
          children: [
            {
              type: 'group',
              label: 'People',
              key: 'people',
              children: [
                {
                  label: 'Narrator',
                  key: 'narrator',
                  icon: Common.renderIcon(PersonIcon)
                },
                {
                  label: 'Sheep Man',
                  key: 'sheep-man',
                  icon: Common.renderIcon(PersonIcon)
                }
              ]
            },
            {
              label: 'Beverage',
              key: 'beverage',
              icon: Common.renderIcon(WineIcon),
              children: [
                {
                  label: 'Whisky',
                  key: 'whisky'
                }
              ]
            },
            {
              label: 'Food',
              key: 'food',
              children: [
                {
                  label: 'Sandwich',
                  key: 'sandwich'
                }
              ]
            },
            {
              label: 'The past increases. The future recedes.',
              key: 'the-past-increases-the-future-recedes'
            }
          ]
        }
     ]
   }
  }
}
  
</script>

