define(["require","qpf","text!./filter.html","../layers/index"],function(e){var t=e("qpf"),n=t.use("components/widget/widget"),r=t.use("knockout"),i=e("text!./filter.html"),s=e("../layers/index"),o=n.derive(function(){var e={title:r.observable(""),icon:r.observable(""),description:r.observable(""),name:r.observable(""),use:function(){s.setFilter(this.name())}};return e._iconSrc=r.computed(function(){if(e.icon())return"../../fx/icons/"+e.icon()}),e},{type:"FILTER",css:"filter",template:i});return o});