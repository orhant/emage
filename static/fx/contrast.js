define({

	name : "Contrast",
	description : "对比度",
	preview : "",

	passes : [{
		name : "Main",
		shader : "contrast.essl",

		uniforms : {
			contrast : {
				name : "Contrast",
				type : "f",
				ui : "range",
				min : 0,
				max : 4,
				precision : 2,
				value : 1.0
			}
		}
	}]
})