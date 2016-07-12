//mock data
$.post = function(url, params, callback) {
  var level = params.level;
  var parentId = params.parentId;
  var data = [ ];
  if (level == 1) {
    data = [
            {id:'1', text: '河南省', parent: '0', level: 1},
            {id:'2', text: '河北省', parent: '0', level: 1},
            {id:'3', text: '湖南省', parent: '0', level: 1}
           ];
  } else if (parentId == '1') {
    data = [
            {id:'10', text: '周口市', parent: '1', level: 2},
            {id:'11', text: '安阳市', parent: '1', level: 2},
            {id:'12', text: '洛阳市', parent: '1', level: 2}
           ];
  } else if (parentId == '2') {
    data = [
            {id:'14', text: '石家庄市', parent: '2', level: 2},
            {id:'15', text: '保定市', parent: '2', level: 2},
            {id:'16', text: '沧州市', parent: '2', level: 2}
           ];
  } else if (parentId == '3') {
    data = [
            {id:'18', text: '长沙市', parent: '3', level: 2},
            {id:'19', text: '张家界市', parent: '3', level: 2},
            {id:'20', text: '常德市', parent: '3', level: 2}
           ];
  } else if (parentId == '10') {
    data = [
            {id:'26', text: '川汇区', parent: '10', level: 3},
            {id:'27', text: '项城市', parent: '10', level: 3},
            {id:'28', text: '扶沟县', parent: '10', level: 3}
           ];
  } else if (parentId == '11') {
    data = [
            {id:'30', text: '北关区', parent: '11', level: 3},
            {id:'31', text: '文峰区', parent: '11', level: 3},
            {id:'32', text: '殷都区', parent: '11', level: 3}
           ];
  } else if (parentId == '12') {
    data = [
            {id:'34', text: '西工区', parent: '12', level: 3},
            {id:'35', text: '老城区', parent: '12', level: 3},
            {id:'36', text: '瀍河回族区', parent: '12', level: 3}
           ];
  } else if (parentId == '14') {
    data = [
            {id:'38', text: '长安区', parent: '14', level: 3},
            {id:'39', text: '桥东区', parent: '14', level: 3},
            {id:'40', text: '桥西区', parent: '14', level: 3}
           ];
  } else if (parentId == '15') {
    data = [
            {id:'41', text: '新市区', parent: '15', level: 3},
            {id:'42', text: '北市区', parent: '15', level: 3},
            {id:'43', text: '南市区', parent: '15', level: 3}
           ];
  } else if (parentId == '16') {
    data = [
            {id:'44', text: '运河区', parent: '16', level: 3},
            {id:'45', text: '新华区', parent: '16', level: 3},
            {id:'46', text: '泊头市', parent: '16', level: 3}
           ];
  } else if (parentId == '18') {
    data = [
            {id:'47', text: '长沙市', parent: '18', level: 3},
            {id:'48', text: '岳麓区', parent: '18', level: 3},
            {id:'49', text: '芙蓉区', parent: '18', level: 3}
           ];
  } else if (parentId == '19') {
    data = [
            {id:'50', text: '永定区', parent: '19', level: 3},
            {id:'51', text: '武陵源区', parent: '19', level: 3},
            {id:'52', text: '慈利县', parent: '19', level: 3}
           ];
  } else if (parentId == '20') {
    data = [
            {id:'53', text: '武陵区', parent: '20', level: 3},
            {id:'54', text: '鼎城区', parent: '20', level: 3},
            {id:'55', text: '津市市', parent: '20', level: 3}
           ];
  }
  callback(data);
}