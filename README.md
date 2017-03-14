# select-chain
select-chain

# Demo
https://liangzai-cool.github.io/select-chain/demo.html

# Get Started
必须给每个需要级联的下拉框，都设置 `data-group` 属性和 `data-level` 属性

`data-group`：同一个级联链上的所有子项都拥有相同的 `data-group` 属性值

`data-level`：同一个级联链上的各个子项级别不同，使用此属性区别各级的子项，比如 `省/市/区/街道/门牌号` 所在的 `select` 的 `data-level` 值应分别为 `1/2/3/4/5` 或者 `2/3/4/5/6`，即各级之间大小应相差 `1`

`data-cb-val`：常用于更新数据页面，如用户信息里的住址，在用户更新页，先指定好各级回调的值，再调用此插件，插件渲染完各级的`<option>`之后，将默认选中此项的值，插件只会在第一次关注该值。
```
$('select[data-group="group1"][data-level]').selectChain({
  rootLevel: 1,                         // 该组级联链上第一级的级值：
  remoteUrl: '',                        // 远程数据地址
  placeholderText: '请选择',             // 选填，所有下拉框的placeholder对应的文字，主要用于提示文字，也可以通过给每个下拉框设置 `data-placeholder-text`
  placeholderValue: ''                  // 选填，所有下拉框的placeholder对应的值，用于判断用户是否给此项指定了有效的值，校验时会用到，也可以通过给每个下拉框设置 `data-placeholder-value`
});
```

# Blog
http://xueliang.org/
