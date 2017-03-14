# select-chain
无限级联

# Get Started
必须给每个需要级联的下拉框，都设置 `data-group` 属性和 `data-level` 属性

`data-group`：同一个级联链上的所有子项都拥有相同的 `data-group` 属性值

`data-level`：同一个级联链上的各个子项级别不同，使用此属性区别各级的子项，比如 `省/市/区/街道/门牌号` 所在的 `select` 的 `data-level` 值应分别为 `1/2/3/4/5` 或者 `2/3/4/5/6`，即各级之间大小应相差 `1`
```
$('select[data-group="group1"][data-level]').selectChain({
  rootLevel: 1,                         // 该组级联链上第一级的级值：
  remoteUrl: '',                        // 远程数据地址
  placeholderText: '请选择',             // 选填，所有下拉框的placeholder对应的文字，主要用于提示文字，也可以通过给每个下拉框设置 `data-placeholder-text`
  placeholderValue: ''                   // 选填，所有下拉框的placeholder对应的值，用于判断用户是否给此项指定了有效的值，校验时会用到，也可以通过给每个下拉框设置 `data-placeholder-value`
});
```
