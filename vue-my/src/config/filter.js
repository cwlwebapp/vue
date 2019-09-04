export default {
    install(Vue) {
      //提示框
      var repeat = '';
      Vue.prototype.prompt = function (text, time) {
        if (text == repeat) {
          return false;
        }
        repeat = text;
        var time = time || 3000;
        var htm = document.createElement('div');
        htm.innerHTML = text;
        htm.setAttribute('class', "prompt");
        document.body.appendChild(htm);
        setTimeout(() => {
          deletes(htm);
          repeat = '';
        }, time);
  
        function deletes(htm) {
          htm.style.opacity = 0;
          htm.style.top = htm.offsetTop - 80 + 'px';
          setTimeout(() => {
            document.body.removeChild(htm);
          }, 600)
        }
      }
    }
  }