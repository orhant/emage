(function(){function e(){t(),ZeroClipboard.setMoviePath("resource/ZeroClipboard.swf"),require(["app"],function(e){e.start()})}function t(){requirejs.config({paths:{async:"lib/async",qpf:"lib/qpf",qtek:"lib/qtek",fxs:"fx",shaders:"shaders"},shim:{app:["modules/common/toggle","modules/common/list","modules/common/iconbutton","modules/common/modal","modules/common/region"]}})}this.LIB_PATH="lib/",$LAB.setGlobalDefaults({BasePath:LIB_PATH}),$LAB.script("lib.js").wait(e)}).call(this);