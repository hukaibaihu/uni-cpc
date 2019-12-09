<template>
  <div class="page">
    <div class="weui-cells__title">选择城市</div>
    <div class="weui-cells weui-cells_after-title">
      <navigator :url="`../select/select?id=${cityId}`" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__hd weui-label">所在城市</div>
        <div class="weui-cell__bd" :style="{color: cityName || '#999'}">{{ cityName || '请选择' }}</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
    </div>
  </div>
</template>

<script>
import Emitter from '../../utils/emitter';
import storage from '../../utils/storage';

export default {
  data() {
    return {
      cityId: '',
      cityName: '',
    }
  },
  onLoad() {
    const emitter = new Emitter();

    storage.add('indexEmitter', emitter);

    emitter.on('onSelect', this.handleSelect);
  },
  methods: {
    handleSelect(data) {
      this.cityId = data.id;
      this.cityName = data.text;
    }
  }
}
</script>
