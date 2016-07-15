$.fn.extend({
  selectChain: function(options) {
    var dom = this;
    var rootLevel = options.rootLevel || this.attr('data-level');
    var groupName = options.groupName || this.attr('data-group');
    var remoteUrl = options.remoteUrl;
    var placeholderText = (typeof options.placeholderText != 'undefined') ? options.placeholderText + '' : undefined;
    var placeholderValue = (typeof options.placeholderValue != 'undefined') ? options.placeholderValue + '' : undefined;
    this.each(function(index, element){
      $(element).attr('data-group', groupName);
    });
    this.change(function(event) {
      var level = $(this).attr('data-level');
      var groupName = $(this).attr('data-group');
      loadAreaData('select[data-group="' + groupName + '"][data-level="' + level + '"]', 'select[data-group="' + groupName + '"][data-level="' + (parseInt(level) + 1) + '"]', groupName);
    });

    loadAreaData(null, 'select[data-group="' + groupName + '"][data-level="' + rootLevel + '"]', groupName);
    function loadAreaData(parentSelector, childSelector, groupName){
      var $parent = null;
      if(parentSelector != null){
        $parent = $(parentSelector);
      }
      var $child = $(childSelector);
      if($child.length <= 0){
        return;
      }
      //是否需要列表头部，如：请选择
      var _placeholderText = placeholderText || $child.attr('data-placeholder-text') || '';
      if(_placeholderText && _placeholderText.length){
        var _placeholderValue = placeholderValue || $child.attr('data-placeholder-value') || '';
        if(_placeholderValue && _placeholderValue.length){
          _placeholderValue = '';
        }
        $child.html('<option value="' + _placeholderValue + '">' + _placeholderText + '</option>');
      } else {
        $child.html('');
      }
      var params = {pageSize:0};
      if($parent != null && (parseInt($parent.val()) >= 0 || parseInt($parent.attr('data-cb-val')) >= 0)){
        var parentId = $parent.val() != null && $parent.val() != '' && $parent.val() >= 0 ? $parent.val() : $parent.attr("data-cb-val");
        params.filterName = "parentId,2," + parentId + ",1";
        params.parentId = parentId;
      }else{
        params.filterName = "level,2," + $child.attr("data-level") + ",1";
        params.level = $child.attr('data-level');
      }
      $.post(remoteUrl, params, function(data){
        var list = data;
        for(var i in list){
          if(list[i].level == $child.attr('data-level')){
            $child.html($child.html() + "<option value='" + list[i].id + "'>" + list[i].text + "</option>");
          }
        }
        var cbVal = $child.attr("data-cb-val");
        if(cbVal != null && cbVal != ""){
          $child.val(cbVal);
          $child.attr("data-cb-val", "");
        }
        loadAreaData("select[data-group='" + groupName + "'][data-level='" + (parseInt($child.attr("data-level"))) + "']", "select[data-group='" + groupName + "'][data-level='" + (parseInt($child.attr("data-level")) + 1) + "']", groupName);
      }, "json");
    }
    return this.each(function(index, element){
      $(element).attr('data-group', groupName);
    });
  }
});
