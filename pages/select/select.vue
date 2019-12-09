<template>
	<div class="page">
    <div class="weui-cells__title">城市列表</div>
    <div class="weui-cells weui-cells_after-title">
      <radio-group @change="handleChange">
        <label class="weui-cell weui-check__label" v-for="item in list" :key="item.id">
          <radio class="weui-check" :value="item.id" :checked="`${item.id}` === selectedId" />
          <div class="weui-cell__bd">{{ item.text }}</div>
          <div v-if="`${item.id}` === selectedId" class="weui-cell__ft weui-cell__ft_in-radio">
            <icon class="weui-icon-radio" type="success_no_circle" size="16" />
          </div>
        </label>
      </radio-group>
    </div>
	</div>
</template>

<script>
import storage from '../../utils/storage';

export default {
  data() {
    return {
      list: [
        { id: 0, text: '北京' },
        { id: 1, text: '上海' },
        { id: 2, text: '广州' },
        { id: 3, text: '深圳' },
        { id: 4, text: '杭州' },
      ],
      selectedId: ''
    }
  },
  onLoad({ id }) {
    this.selectedId = id;
    this.emitter = storage.get('indexEmitter');
  },
  methods: {
    handleChange(e) {
      this.selectedId = e.detail.value;

      const item = this.list.find(({ id }) => `${id}` === e.detail.value);

      this.emitter.emit('onSelect', { ...item });
    }
  }
}
</script>
