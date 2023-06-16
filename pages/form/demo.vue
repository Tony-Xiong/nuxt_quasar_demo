<template>
    <div class="q-pa-md" style="max-width: 400px">
  
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="你的名字 *"
          hint="全名"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '请输入名字']"
        />
  
        <q-input
          filled
          type="number"
          v-model="age"
          label="你的年龄 *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || '请输入年龄',
            val => val > 0 && val < 100 || '请输入真实年龄'
          ]"
        />
  
        <q-toggle v-model="accept" label="接受协议及条款" />
  
        <div>
          <q-btn label="提交" type="submit" color="primary"/>
          <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  
    </div>
  </template>
  
  <script setup>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  

    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)


    const onSubmit =  () => {
        if (accept.value !== true) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
        })
        }
        else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
        })
        }
    }

    const onReset = () => {
        name.value = null
        age.value = null
        accept.value = false
    }
  </script>