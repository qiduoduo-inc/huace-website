<!--
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-12-21 08:41:20
-->
<template>
  <div class="quote_dialog">
    <a-modal
      class="container"
      v-model:visible="showDialog"
      :footer="null"
      @cancel="cancel"
      :class="'quote'"
    >
      <div class="container quote">
        <p class="title">ASK FOR A QUICK QUOTE</p>
        <p class="tips">
          We will contact you within 1 working day, please pay attention to the
          email with the suffix <strong>“huacesports@gmail.com”</strong>.
        </p>
        <a-form ref="formRef" :model="formState" :rules="rules">
          <a-form-item ref="name" label="" name="name">
            <a-input v-model:value="formState.name" placeholder="Name" />
          </a-form-item>
          <a-form-item ref="email" label="" name="email">
            <a-input v-model:value="formState.email" placeholder="Email" />
          </a-form-item>
          <a-form-item ref="message" label="" name="message">
            <a-textarea
              v-model:value="formState.message"
              placeholder="Message"
              :auto-size="{ minRows: 4, maxRows: 5 }"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" class="send-btn" @click="onSubmit"
              >SEND</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { UnwrapRef } from 'vue';
import {
  RuleObject,
  ValidateErrorEntity,
} from 'ant-design-vue/es/form/interface';
import { isEmail } from '@/utils/validator';
interface Props {
  showDialog: boolean;
}

interface FormState {
  name?: string;
  email: string;
  message?: string;
}

const props = withDefaults(defineProps<Props>(), {
  showDialog: false,
});

const emit = defineEmits(['cancelDialog']);
const cancel = () => {
  emit('cancelDialog', false);
};

const validateEmail = async (rule: RuleObject, value: string) => {
  if (value === '') {
    return Promise.reject('请填写此字段');
  }
  if (!isEmail(value)) {
    return Promise.reject('* email adrress is invalid');
  } else {
    return Promise.resolve();
  }
};

const formRef = ref();
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  email: '',
  message: '',
});
const rules = {
  email: [{ required: true, validator: validateEmail, trigger: 'change' }],
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
      cancel();
    })
    .catch((error: ValidateErrorEntity<FormState>) => {
      console.log('error', error);
    });
};
</script>

<style scoped lang="scss">
.quote {
  padding: 2rem !important;
  transition: all 400ms;
  .title {
    font-size: 1.25rem;
    font-weight: bolder;
    color: #9bf80c;
    margin-bottom: 1rem;
  }

  .tips {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  .send-btn {
    width: 100%;
    background-color: #f0831e;
    border: none;
    font-weight: bold;
  }
}
</style>
