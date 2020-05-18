// https://www.redditstatic.com/desktop2x/vendors~ModStatsChart.dcd40adc139bb8dccee7.js
// Retrieved at 5/18/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ModStatsChart"], {
		"./node_modules/chart.js/dist/Chart.js": function(e, t, n) {
			e.exports = function(e) {
				"use strict";
				e = e && e.hasOwnProperty("default") ? e.default : e;
				var t = {
					rgb2hsl: n,
					rgb2hsv: a,
					rgb2hwb: s,
					rgb2cmyk: i,
					rgb2keyword: o,
					rgb2xyz: d,
					rgb2lab: l,
					rgb2lch: function(e) {
						return M(l(e))
					},
					hsl2rgb: u,
					hsl2hsv: function(e) {
						var t = e[0],
							n = e[1] / 100,
							a = e[2] / 100;
						return 0 === a ? [0, 0, 0] : [t, 2 * (n *= (a *= 2) <= 1 ? a : 2 - a) / (a + n) * 100, (a + n) / 2 * 100]
					},
					hsl2hwb: function(e) {
						return s(u(e))
					},
					hsl2cmyk: function(e) {
						return i(u(e))
					},
					hsl2keyword: function(e) {
						return o(u(e))
					},
					hsv2rgb: m,
					hsv2hsl: function(e) {
						var t, n, a = e[0],
							s = e[1] / 100,
							r = e[2] / 100;
						return t = s * r, [a, 100 * (t = (t /= (n = (2 - s) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
					},
					hsv2hwb: function(e) {
						return s(m(e))
					},
					hsv2cmyk: function(e) {
						return i(m(e))
					},
					hsv2keyword: function(e) {
						return o(m(e))
					},
					hwb2rgb: _,
					hwb2hsl: function(e) {
						return n(_(e))
					},
					hwb2hsv: function(e) {
						return a(_(e))
					},
					hwb2cmyk: function(e) {
						return i(_(e))
					},
					hwb2keyword: function(e) {
						return o(_(e))
					},
					cmyk2rgb: h,
					cmyk2hsl: function(e) {
						return n(h(e))
					},
					cmyk2hsv: function(e) {
						return a(h(e))
					},
					cmyk2hwb: function(e) {
						return s(h(e))
					},
					cmyk2keyword: function(e) {
						return o(h(e))
					},
					keyword2rgb: Y,
					keyword2hsl: function(e) {
						return n(Y(e))
					},
					keyword2hsv: function(e) {
						return a(Y(e))
					},
					keyword2hwb: function(e) {
						return s(Y(e))
					},
					keyword2cmyk: function(e) {
						return i(Y(e))
					},
					keyword2lab: function(e) {
						return l(Y(e))
					},
					keyword2xyz: function(e) {
						return d(Y(e))
					},
					xyz2rgb: c,
					xyz2lab: f,
					xyz2lch: function(e) {
						return M(f(e))
					},
					lab2xyz: p,
					lab2rgb: y,
					lab2lch: M,
					lch2lab: L,
					lch2xyz: function(e) {
						return p(L(e))
					},
					lch2rgb: function(e) {
						return y(L(e))
					}
				};

				function n(e) {
					var t, n, a = e[0] / 255,
						s = e[1] / 255,
						r = e[2] / 255,
						i = Math.min(a, s, r),
						o = Math.max(a, s, r),
						d = o - i;
					return o == i ? t = 0 : a == o ? t = (s - r) / d : s == o ? t = 2 + (r - a) / d : r == o && (t = 4 + (a - s) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + o) / 2, [t, 100 * (o == i ? 0 : n <= .5 ? d / (o + i) : d / (2 - o - i)), 100 * n]
				}

				function a(e) {
					var t, n, a = e[0],
						s = e[1],
						r = e[2],
						i = Math.min(a, s, r),
						o = Math.max(a, s, r),
						d = o - i;
					return n = 0 == o ? 0 : d / o * 1e3 / 10, o == i ? t = 0 : a == o ? t = (s - r) / d : s == o ? t = 2 + (r - a) / d : r == o && (t = 4 + (a - s) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, o / 255 * 1e3 / 10]
				}

				function s(e) {
					var t = e[0],
						a = e[1],
						s = e[2];
					return [n(e)[0], 1 / 255 * Math.min(t, Math.min(a, s)) * 100, 100 * (s = 1 - 1 / 255 * Math.max(t, Math.max(a, s)))]
				}

				function i(e) {
					var t, n = e[0] / 255,
						a = e[1] / 255,
						s = e[2] / 255;
					return [100 * ((1 - n - (t = Math.min(1 - n, 1 - a, 1 - s))) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - s - t) / (1 - t) || 0), 100 * t]
				}

				function o(e) {
					return k[JSON.stringify(e)]
				}

				function d(e) {
					var t = e[0] / 255,
						n = e[1] / 255,
						a = e[2] / 255;
					return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * a), 100 * (.0193 * t + .1192 * n + .9505 * a)]
				}

				function l(e) {
					var t = d(e),
						n = t[0],
						a = t[1],
						s = t[2];
					return a /= 100, s /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (n - a), 200 * (a - (s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116))]
				}

				function u(e) {
					var t, n, a, s, r, i = e[0] / 360,
						o = e[1] / 100,
						d = e[2] / 100;
					if (0 == o) return [r = 255 * d, r, r];
					t = 2 * d - (n = d < .5 ? d * (1 + o) : d + o - d * o), s = [0, 0, 0];
					for (var l = 0; l < 3; l++)(a = i + 1 / 3 * -(l - 1)) < 0 && a++, a > 1 && a--, r = 6 * a < 1 ? t + 6 * (n - t) * a : 2 * a < 1 ? n : 3 * a < 2 ? t + (n - t) * (2 / 3 - a) * 6 : t, s[l] = 255 * r;
					return s
				}

				function m(e) {
					var t = e[0] / 60,
						n = e[1] / 100,
						a = e[2] / 100,
						s = Math.floor(t) % 6,
						r = t - Math.floor(t),
						i = 255 * a * (1 - n),
						o = 255 * a * (1 - n * r),
						d = 255 * a * (1 - n * (1 - r));
					switch (a *= 255, s) {
						case 0:
							return [a, d, i];
						case 1:
							return [o, a, i];
						case 2:
							return [i, a, d];
						case 3:
							return [i, o, a];
						case 4:
							return [d, i, a];
						case 5:
							return [a, i, o]
					}
				}

				function _(e) {
					var t, n, a, s, i = e[0] / 360,
						o = e[1] / 100,
						d = e[2] / 100,
						l = o + d;
					switch (l > 1 && (o /= l, d /= l), a = 6 * i - (t = Math.floor(6 * i)), 0 != (1 & t) && (a = 1 - a), s = o + a * ((n = 1 - d) - o), t) {
						default:
						case 6:
						case 0:
							r = n, g = s, b = o;
							break;
						case 1:
							r = s, g = n, b = o;
							break;
						case 2:
							r = o, g = n, b = s;
							break;
						case 3:
							r = o, g = s, b = n;
							break;
						case 4:
							r = s, g = o, b = n;
							break;
						case 5:
							r = n, g = o, b = s
					}
					return [255 * r, 255 * g, 255 * b]
				}

				function h(e) {
					var t = e[0] / 100,
						n = e[1] / 100,
						a = e[2] / 100,
						s = e[3] / 100;
					return [255 * (1 - Math.min(1, t * (1 - s) + s)), 255 * (1 - Math.min(1, n * (1 - s) + s)), 255 * (1 - Math.min(1, a * (1 - s) + s))]
				}

				function c(e) {
					var t, n, a, s = e[0] / 100,
						r = e[1] / 100,
						i = e[2] / 100;
					return n = -.9689 * s + 1.8758 * r + .0415 * i, a = .0557 * s + -.204 * r + 1.057 * i, t = (t = 3.2406 * s + -1.5372 * r + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (a = Math.min(Math.max(0, a), 1))]
				}

				function f(e) {
					var t = e[0],
						n = e[1],
						a = e[2];
					return n /= 100, a /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
				}

				function p(e) {
					var t, n, a, s, r = e[0],
						i = e[1],
						o = e[2];
					return r <= 8 ? s = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), s = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (i / 500 + s - 16 / 116) / 7.787 : 95.047 * Math.pow(i / 500 + s, 3), n, a = a / 108.883 <= .008859 ? a = 108.883 * (s - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(s - o / 200, 3)]
				}

				function M(e) {
					var t, n = e[0],
						a = e[1],
						s = e[2];
					return (t = 360 * Math.atan2(s, a) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(a * a + s * s), t]
				}

				function y(e) {
					return c(p(e))
				}

				function L(e) {
					var t, n = e[0],
						a = e[1];
					return t = e[2] / 360 * 2 * Math.PI, [n, a * Math.cos(t), a * Math.sin(t)]
				}

				function Y(e) {
					return v[e]
				}
				var v = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					k = {};
				for (var D in v) k[JSON.stringify(v[D])] = D;
				var w = function() {
					return new H
				};
				for (var T in t) {
					w[T + "Raw"] = function(e) {
						return function(n) {
							return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), t[e](n)
						}
					}(T);
					var x = /(\w+)2(\w+)/.exec(T),
						S = x[1],
						j = x[2];
					(w[S] = w[S] || {})[j] = w[T] = function(e) {
						return function(n) {
							"number" == typeof n && (n = Array.prototype.slice.call(arguments));
							var a = t[e](n);
							if ("string" == typeof a || void 0 === a) return a;
							for (var s = 0; s < a.length; s++) a[s] = Math.round(a[s]);
							return a
						}
					}(T)
				}
				var H = function() {
					this.convs = {}
				};
				H.prototype.routeSpace = function(e, t) {
					var n = t[0];
					return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n))
				}, H.prototype.setValues = function(e, t) {
					return this.space = e, this.convs = {}, this.convs[e] = t, this
				}, H.prototype.getValues = function(e) {
					var t = this.convs[e];
					if (!t) {
						var n = this.space,
							a = this.convs[n];
						t = w[n][e](a), this.convs[e] = t
					}
					return t
				}, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach((function(e) {
					H.prototype[e] = function(t) {
						return this.routeSpace(e, arguments)
					}
				}));
				var P = w,
					O = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 134, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 250, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 221],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [112, 128, 144],
						slategrey: [112, 128, 144],
						snow: [255, 250, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 50]
					},
					A = {
						getRgba: W,
						getHsla: F,
						getRgb: function(e) {
							var t = W(e);
							return t && t.slice(0, 3)
						},
						getHsl: function(e) {
							var t = F(e);
							return t && t.slice(0, 3)
						},
						getHwb: C,
						getAlpha: function(e) {
							var t = W(e);
							return t ? t[3] : (t = F(e)) ? t[3] : (t = C(e)) ? t[3] : void 0
						},
						hexString: function(e, t) {
							return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + N(e[0]) + N(e[1]) + N(e[2]) + (t >= 0 && t < 1 ? N(Math.round(255 * t)) : "")
						},
						rgbString: function(e, t) {
							return t < 1 || e[3] && e[3] < 1 ? E(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
						},
						rgbaString: E,
						percentString: function(e, t) {
							if (t < 1 || e[3] && e[3] < 1) return I(e, t);
							var n = Math.round(e[0] / 255 * 100),
								a = Math.round(e[1] / 255 * 100),
								s = Math.round(e[2] / 255 * 100);
							return "rgb(" + n + "%, " + a + "%, " + s + "%)"
						},
						percentaString: I,
						hslString: function(e, t) {
							return t < 1 || e[3] && e[3] < 1 ? z(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
						},
						hslaString: z,
						hwbString: function(e, t) {
							return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
						},
						keyword: function(e) {
							return V[e.slice(0, 3)]
						}
					};

				function W(e) {
					if (e) {
						var t = [0, 0, 0],
							n = 1,
							a = e.match(/^#([a-fA-F0-9]{3,4})$/i),
							s = "";
						if (a) {
							s = (a = a[1])[3];
							for (var r = 0; r < t.length; r++) t[r] = parseInt(a[r] + a[r], 16);
							s && (n = Math.round(parseInt(s + s, 16) / 255 * 100) / 100)
						} else if (a = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
							for (s = a[2], a = a[1], r = 0; r < t.length; r++) t[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16);
							s && (n = Math.round(parseInt(s, 16) / 255 * 100) / 100)
						} else if (a = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (r = 0; r < t.length; r++) t[r] = parseInt(a[r + 1]);
							n = parseFloat(a[4])
						} else if (a = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
							for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(a[r + 1]));
							n = parseFloat(a[4])
						} else if (a = e.match(/(\w+)/)) {
							if ("transparent" == a[1]) return [0, 0, 0, 0];
							if (!(t = O[a[1]])) return
						}
						for (r = 0; r < t.length; r++) t[r] = R(t[r], 0, 255);
						return n = n || 0 == n ? R(n, 0, 1) : 1, t[3] = n, t
					}
				}

				function F(e) {
					if (e) {
						var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (t) {
							var n = parseFloat(t[4]);
							return [R(parseInt(t[1]), 0, 360), R(parseFloat(t[2]), 0, 100), R(parseFloat(t[3]), 0, 100), R(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function C(e) {
					if (e) {
						var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
						if (t) {
							var n = parseFloat(t[4]);
							return [R(parseInt(t[1]), 0, 360), R(parseFloat(t[2]), 0, 100), R(parseFloat(t[3]), 0, 100), R(isNaN(n) ? 1 : n, 0, 1)]
						}
					}
				}

				function E(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
				}

				function I(e, t) {
					return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
				}

				function z(e, t) {
					return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
				}

				function R(e, t, n) {
					return Math.min(Math.max(t, e), n)
				}

				function N(e) {
					var t = e.toString(16).toUpperCase();
					return t.length < 2 ? "0" + t : t
				}
				var V = {};
				for (var B in O) V[O[B]] = B;
				var J = function(e) {
					return e instanceof J ? e : this instanceof J ? (this.valid = !1, this.values = {
						rgb: [0, 0, 0],
						hsl: [0, 0, 0],
						hsv: [0, 0, 0],
						hwb: [0, 0, 0],
						cmyk: [0, 0, 0, 0],
						alpha: 1
					}, void("string" == typeof e ? (t = A.getRgba(e)) ? this.setValues("rgb", t) : (t = A.getHsla(e)) ? this.setValues("hsl", t) : (t = A.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new J(e);
					var t
				};
				J.prototype = {
					isValid: function() {
						return this.valid
					},
					rgb: function() {
						return this.setSpace("rgb", arguments)
					},
					hsl: function() {
						return this.setSpace("hsl", arguments)
					},
					hsv: function() {
						return this.setSpace("hsv", arguments)
					},
					hwb: function() {
						return this.setSpace("hwb", arguments)
					},
					cmyk: function() {
						return this.setSpace("cmyk", arguments)
					},
					rgbArray: function() {
						return this.values.rgb
					},
					hslArray: function() {
						return this.values.hsl
					},
					hsvArray: function() {
						return this.values.hsv
					},
					hwbArray: function() {
						var e = this.values;
						return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
					},
					cmykArray: function() {
						return this.values.cmyk
					},
					rgbaArray: function() {
						var e = this.values;
						return e.rgb.concat([e.alpha])
					},
					hslaArray: function() {
						var e = this.values;
						return e.hsl.concat([e.alpha])
					},
					alpha: function(e) {
						return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
					},
					red: function(e) {
						return this.setChannel("rgb", 0, e)
					},
					green: function(e) {
						return this.setChannel("rgb", 1, e)
					},
					blue: function(e) {
						return this.setChannel("rgb", 2, e)
					},
					hue: function(e) {
						return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
					},
					saturation: function(e) {
						return this.setChannel("hsl", 1, e)
					},
					lightness: function(e) {
						return this.setChannel("hsl", 2, e)
					},
					saturationv: function(e) {
						return this.setChannel("hsv", 1, e)
					},
					whiteness: function(e) {
						return this.setChannel("hwb", 1, e)
					},
					blackness: function(e) {
						return this.setChannel("hwb", 2, e)
					},
					value: function(e) {
						return this.setChannel("hsv", 2, e)
					},
					cyan: function(e) {
						return this.setChannel("cmyk", 0, e)
					},
					magenta: function(e) {
						return this.setChannel("cmyk", 1, e)
					},
					yellow: function(e) {
						return this.setChannel("cmyk", 2, e)
					},
					black: function(e) {
						return this.setChannel("cmyk", 3, e)
					},
					hexString: function() {
						return A.hexString(this.values.rgb)
					},
					rgbString: function() {
						return A.rgbString(this.values.rgb, this.values.alpha)
					},
					rgbaString: function() {
						return A.rgbaString(this.values.rgb, this.values.alpha)
					},
					percentString: function() {
						return A.percentString(this.values.rgb, this.values.alpha)
					},
					hslString: function() {
						return A.hslString(this.values.hsl, this.values.alpha)
					},
					hslaString: function() {
						return A.hslaString(this.values.hsl, this.values.alpha)
					},
					hwbString: function() {
						return A.hwbString(this.values.hwb, this.values.alpha)
					},
					keyword: function() {
						return A.keyword(this.values.rgb, this.values.alpha)
					},
					rgbNumber: function() {
						var e = this.values.rgb;
						return e[0] << 16 | e[1] << 8 | e[2]
					},
					luminosity: function() {
						for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
							var a = e[n] / 255;
							t[n] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
						}
						return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
					},
					contrast: function(e) {
						var t = this.luminosity(),
							n = e.luminosity();
						return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
					},
					level: function(e) {
						var t = this.contrast(e);
						return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
					},
					dark: function() {
						var e = this.values.rgb;
						return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
					},
					light: function() {
						return !this.dark()
					},
					negate: function() {
						for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
						return this.setValues("rgb", e), this
					},
					lighten: function(e) {
						var t = this.values.hsl;
						return t[2] += t[2] * e, this.setValues("hsl", t), this
					},
					darken: function(e) {
						var t = this.values.hsl;
						return t[2] -= t[2] * e, this.setValues("hsl", t), this
					},
					saturate: function(e) {
						var t = this.values.hsl;
						return t[1] += t[1] * e, this.setValues("hsl", t), this
					},
					desaturate: function(e) {
						var t = this.values.hsl;
						return t[1] -= t[1] * e, this.setValues("hsl", t), this
					},
					whiten: function(e) {
						var t = this.values.hwb;
						return t[1] += t[1] * e, this.setValues("hwb", t), this
					},
					blacken: function(e) {
						var t = this.values.hwb;
						return t[2] += t[2] * e, this.setValues("hwb", t), this
					},
					greyscale: function() {
						var e = this.values.rgb,
							t = .3 * e[0] + .59 * e[1] + .11 * e[2];
						return this.setValues("rgb", [t, t, t]), this
					},
					clearer: function(e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t - t * e), this
					},
					opaquer: function(e) {
						var t = this.values.alpha;
						return this.setValues("alpha", t + t * e), this
					},
					rotate: function(e) {
						var t = this.values.hsl,
							n = (t[0] + e) % 360;
						return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
					},
					mix: function(e, t) {
						var n = e,
							a = void 0 === t ? .5 : t,
							s = 2 * a - 1,
							r = this.alpha() - n.alpha(),
							i = ((s * r == -1 ? s : (s + r) / (1 + s * r)) + 1) / 2,
							o = 1 - i;
						return this.rgb(i * this.red() + o * n.red(), i * this.green() + o * n.green(), i * this.blue() + o * n.blue()).alpha(this.alpha() * a + n.alpha() * (1 - a))
					},
					toJSON: function() {
						return this.rgb()
					},
					clone: function() {
						var e, t, n = new J,
							a = this.values,
							s = n.values;
						for (var r in a) a.hasOwnProperty(r) && (e = a[r], "[object Array]" === (t = {}.toString.call(e)) ? s[r] = e.slice(0) : "[object Number]" === t ? s[r] = e : console.error("unexpected color value:", e));
						return n
					}
				}, J.prototype.spaces = {
					rgb: ["red", "green", "blue"],
					hsl: ["hue", "saturation", "lightness"],
					hsv: ["hue", "saturation", "value"],
					hwb: ["hue", "whiteness", "blackness"],
					cmyk: ["cyan", "magenta", "yellow", "black"]
				}, J.prototype.maxes = {
					rgb: [255, 255, 255],
					hsl: [360, 100, 100],
					hsv: [360, 100, 100],
					hwb: [360, 100, 100],
					cmyk: [100, 100, 100, 100]
				}, J.prototype.getValues = function(e) {
					for (var t = this.values, n = {}, a = 0; a < e.length; a++) n[e.charAt(a)] = t[e][a];
					return 1 !== t.alpha && (n.a = t.alpha), n
				}, J.prototype.setValues = function(e, t) {
					var n, a, s = this.values,
						r = this.spaces,
						i = this.maxes,
						o = 1;
					if (this.valid = !0, "alpha" === e) o = t;
					else if (t.length) s[e] = t.slice(0, e.length), o = t[e.length];
					else if (void 0 !== t[e.charAt(0)]) {
						for (n = 0; n < e.length; n++) s[e][n] = t[e.charAt(n)];
						o = t.a
					} else if (void 0 !== t[r[e][0]]) {
						var d = r[e];
						for (n = 0; n < e.length; n++) s[e][n] = t[d[n]];
						o = t.alpha
					}
					if (s.alpha = Math.max(0, Math.min(1, void 0 === o ? s.alpha : o)), "alpha" === e) return !1;
					for (n = 0; n < e.length; n++) a = Math.max(0, Math.min(i[e][n], s[e][n])), s[e][n] = Math.round(a);
					for (var l in r) l !== e && (s[l] = P[e][l](s[e]));
					return !0
				}, J.prototype.setSpace = function(e, t) {
					var n = t[0];
					return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
				}, J.prototype.setChannel = function(e, t, n) {
					var a = this.values[e];
					return void 0 === n ? a[t] : n === a[t] ? this : (a[t] = n, this.setValues(e, a), this)
				}, "undefined" != typeof window && (window.Color = J);
				var U, G = J,
					q = {
						noop: function() {},
						uid: (U = 0, function() {
							return U++
						}),
						isNullOrUndef: function(e) {
							return null == e
						},
						isArray: function(e) {
							if (Array.isArray && Array.isArray(e)) return !0;
							var t = Object.prototype.toString.call(e);
							return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
						},
						isObject: function(e) {
							return null !== e && "[object Object]" === Object.prototype.toString.call(e)
						},
						isFinite: function(e) {
							return ("number" == typeof e || e instanceof Number) && isFinite(e)
						},
						valueOrDefault: function(e, t) {
							return void 0 === e ? t : e
						},
						valueAtIndexOrDefault: function(e, t, n) {
							return q.valueOrDefault(q.isArray(e) ? e[t] : e, n)
						},
						callback: function(e, t, n) {
							if (e && "function" == typeof e.call) return e.apply(n, t)
						},
						each: function(e, t, n, a) {
							var s, r, i;
							if (q.isArray(e))
								if (r = e.length, a)
									for (s = r - 1; s >= 0; s--) t.call(n, e[s], s);
								else
									for (s = 0; s < r; s++) t.call(n, e[s], s);
							else if (q.isObject(e))
								for (r = (i = Object.keys(e)).length, s = 0; s < r; s++) t.call(n, e[i[s]], i[s])
						},
						arrayEquals: function(e, t) {
							var n, a, s, r;
							if (!e || !t || e.length !== t.length) return !1;
							for (n = 0, a = e.length; n < a; ++n)
								if (s = e[n], r = t[n], s instanceof Array && r instanceof Array) {
									if (!q.arrayEquals(s, r)) return !1
								} else if (s !== r) return !1;
							return !0
						},
						clone: function(e) {
							if (q.isArray(e)) return e.map(q.clone);
							if (q.isObject(e)) {
								for (var t = {}, n = Object.keys(e), a = n.length, s = 0; s < a; ++s) t[n[s]] = q.clone(e[n[s]]);
								return t
							}
							return e
						},
						_merger: function(e, t, n, a) {
							var s = t[e],
								r = n[e];
							q.isObject(s) && q.isObject(r) ? q.merge(s, r, a) : t[e] = q.clone(r)
						},
						_mergerIf: function(e, t, n) {
							var a = t[e],
								s = n[e];
							q.isObject(a) && q.isObject(s) ? q.mergeIf(a, s) : t.hasOwnProperty(e) || (t[e] = q.clone(s))
						},
						merge: function(e, t, n) {
							var a, s, r, i, o, d = q.isArray(t) ? t : [t],
								l = d.length;
							if (!q.isObject(e)) return e;
							for (a = (n = n || {}).merger || q._merger, s = 0; s < l; ++s)
								if (t = d[s], q.isObject(t))
									for (o = 0, i = (r = Object.keys(t)).length; o < i; ++o) a(r[o], e, t, n);
							return e
						},
						mergeIf: function(e, t) {
							return q.merge(e, t, {
								merger: q._mergerIf
							})
						},
						extend: function(e) {
							for (var t = function(t, n) {
									e[n] = t
								}, n = 1, a = arguments.length; n < a; ++n) q.each(arguments[n], t);
							return e
						},
						inherits: function(e) {
							var t = this,
								n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
									return t.apply(this, arguments)
								},
								a = function() {
									this.constructor = n
								};
							return a.prototype = t.prototype, n.prototype = new a, n.extend = q.inherits, e && q.extend(n.prototype, e), n.__super__ = t.prototype, n
						}
					},
					K = q;
				q.callCallback = q.callback, q.indexOf = function(e, t, n) {
					return Array.prototype.indexOf.call(e, t, n)
				}, q.getValueOrDefault = q.valueOrDefault, q.getValueAtIndexOrDefault = q.valueAtIndexOrDefault;
				var Z = {
						linear: function(e) {
							return e
						},
						easeInQuad: function(e) {
							return e * e
						},
						easeOutQuad: function(e) {
							return -e * (e - 2)
						},
						easeInOutQuad: function(e) {
							return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
						},
						easeInCubic: function(e) {
							return e * e * e
						},
						easeOutCubic: function(e) {
							return (e -= 1) * e * e + 1
						},
						easeInOutCubic: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
						},
						easeInQuart: function(e) {
							return e * e * e * e
						},
						easeOutQuart: function(e) {
							return -((e -= 1) * e * e * e - 1)
						},
						easeInOutQuart: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
						},
						easeInQuint: function(e) {
							return e * e * e * e * e
						},
						easeOutQuint: function(e) {
							return (e -= 1) * e * e * e * e + 1
						},
						easeInOutQuint: function(e) {
							return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
						},
						easeInSine: function(e) {
							return 1 - Math.cos(e * (Math.PI / 2))
						},
						easeOutSine: function(e) {
							return Math.sin(e * (Math.PI / 2))
						},
						easeInOutSine: function(e) {
							return -.5 * (Math.cos(Math.PI * e) - 1)
						},
						easeInExpo: function(e) {
							return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
						},
						easeOutExpo: function(e) {
							return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
						},
						easeInOutExpo: function(e) {
							return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
						},
						easeInCirc: function(e) {
							return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
						},
						easeOutCirc: function(e) {
							return Math.sqrt(1 - (e -= 1) * e)
						},
						easeInOutCirc: function(e) {
							return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
						},
						easeInElastic: function(e) {
							var t = 1.70158,
								n = 0,
								a = 1;
							return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
						},
						easeOutElastic: function(e) {
							var t = 1.70158,
								n = 0,
								a = 1;
							return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
						},
						easeInOutElastic: function(e) {
							var t = 1.70158,
								n = 0,
								a = 1;
							return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
						},
						easeInBack: function(e) {
							var t = 1.70158;
							return e * e * ((t + 1) * e - t)
						},
						easeOutBack: function(e) {
							var t = 1.70158;
							return (e -= 1) * e * ((t + 1) * e + t) + 1
						},
						easeInOutBack: function(e) {
							var t = 1.70158;
							return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
						},
						easeInBounce: function(e) {
							return 1 - Z.easeOutBounce(1 - e)
						},
						easeOutBounce: function(e) {
							return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
						},
						easeInOutBounce: function(e) {
							return e < .5 ? .5 * Z.easeInBounce(2 * e) : .5 * Z.easeOutBounce(2 * e - 1) + .5
						}
					},
					$ = {
						effects: Z
					};
				K.easingEffects = Z;
				var X = Math.PI,
					Q = X / 180,
					ee = 2 * X,
					te = X / 2,
					ne = X / 4,
					ae = 2 * X / 3,
					se = {
						clear: function(e) {
							e.ctx.clearRect(0, 0, e.width, e.height)
						},
						roundedRect: function(e, t, n, a, s, r) {
							if (r) {
								var i = Math.min(r, s / 2, a / 2),
									o = t + i,
									d = n + i,
									l = t + a - i,
									u = n + s - i;
								e.moveTo(t, d), o < l && d < u ? (e.arc(o, d, i, -X, -te), e.arc(l, d, i, -te, 0), e.arc(l, u, i, 0, te), e.arc(o, u, i, te, X)) : o < l ? (e.moveTo(o, n), e.arc(l, d, i, -te, te), e.arc(o, d, i, te, X + te)) : d < u ? (e.arc(o, d, i, -X, 0), e.arc(o, u, i, 0, X)) : e.arc(o, d, i, -X, X), e.closePath(), e.moveTo(t, n)
							} else e.rect(t, n, a, s)
						},
						drawPoint: function(e, t, n, a, s, r) {
							var i, o, d, l, u, m = (r || 0) * Q;
							if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (i = t.toString()) && "[object HTMLCanvasElement]" !== i) {
								if (!(isNaN(n) || n <= 0)) {
									switch (e.beginPath(), t) {
										default:
											e.arc(a, s, n, 0, ee), e.closePath();
											break;
										case "triangle":
											e.moveTo(a + Math.sin(m) * n, s - Math.cos(m) * n), m += ae, e.lineTo(a + Math.sin(m) * n, s - Math.cos(m) * n), m += ae, e.lineTo(a + Math.sin(m) * n, s - Math.cos(m) * n), e.closePath();
											break;
										case "rectRounded":
											l = n - (u = .516 * n), o = Math.cos(m + ne) * l, d = Math.sin(m + ne) * l, e.arc(a - o, s - d, u, m - X, m - te), e.arc(a + d, s - o, u, m - te, m), e.arc(a + o, s + d, u, m, m + te), e.arc(a - d, s + o, u, m + te, m + X), e.closePath();
											break;
										case "rect":
											if (!r) {
												l = Math.SQRT1_2 * n, e.rect(a - l, s - l, 2 * l, 2 * l);
												break
											}
											m += ne;
										case "rectRot":
											o = Math.cos(m) * n, d = Math.sin(m) * n, e.moveTo(a - o, s - d), e.lineTo(a + d, s - o), e.lineTo(a + o, s + d), e.lineTo(a - d, s + o), e.closePath();
											break;
										case "crossRot":
											m += ne;
										case "cross":
											o = Math.cos(m) * n, d = Math.sin(m) * n, e.moveTo(a - o, s - d), e.lineTo(a + o, s + d), e.moveTo(a + d, s - o), e.lineTo(a - d, s + o);
											break;
										case "star":
											o = Math.cos(m) * n, d = Math.sin(m) * n, e.moveTo(a - o, s - d), e.lineTo(a + o, s + d), e.moveTo(a + d, s - o), e.lineTo(a - d, s + o), m += ne, o = Math.cos(m) * n, d = Math.sin(m) * n, e.moveTo(a - o, s - d), e.lineTo(a + o, s + d), e.moveTo(a + d, s - o), e.lineTo(a - d, s + o);
											break;
										case "line":
											o = Math.cos(m) * n, d = Math.sin(m) * n, e.moveTo(a - o, s - d), e.lineTo(a + o, s + d);
											break;
										case "dash":
											e.moveTo(a, s), e.lineTo(a + Math.cos(m) * n, s + Math.sin(m) * n)
									}
									e.fill(), e.stroke()
								}
							} else e.drawImage(t, a - t.width / 2, s - t.height / 2, t.width, t.height)
						},
						_isPointInArea: function(e, t) {
							return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6
						},
						clipArea: function(e, t) {
							e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
						},
						unclipArea: function(e) {
							e.restore()
						},
						lineTo: function(e, t, n, a) {
							var s = n.steppedLine;
							if (s) {
								if ("middle" === s) {
									var r = (t.x + n.x) / 2;
									e.lineTo(r, a ? n.y : t.y), e.lineTo(r, a ? t.y : n.y)
								} else "after" === s && !a || "after" !== s && a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
								e.lineTo(n.x, n.y)
							} else n.tension ? e.bezierCurveTo(a ? t.controlPointPreviousX : t.controlPointNextX, a ? t.controlPointPreviousY : t.controlPointNextY, a ? n.controlPointNextX : n.controlPointPreviousX, a ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
						}
					},
					re = se;
				K.clear = se.clear, K.drawRoundedRectangle = function(e) {
					e.beginPath(), se.roundedRect.apply(se, arguments)
				};
				var ie = {
					_set: function(e, t) {
						return K.merge(this[e] || (this[e] = {}), t)
					}
				};
				ie._set("global", {
					defaultColor: "rgba(0,0,0,0.1)",
					defaultFontColor: "#666",
					defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					defaultFontSize: 12,
					defaultFontStyle: "normal",
					defaultLineHeight: 1.2,
					showLines: !0
				});
				var oe = ie,
					de = K.valueOrDefault,
					le = {
						toLineHeight: function(e, t) {
							var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
							if (!n || "normal" === n[1]) return 1.2 * t;
							switch (e = +n[2], n[3]) {
								case "px":
									return e;
								case "%":
									e /= 100
							}
							return t * e
						},
						toPadding: function(e) {
							var t, n, a, s;
							return K.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, a = +e.bottom || 0, s = +e.left || 0) : t = n = a = s = +e || 0, {
								top: t,
								right: n,
								bottom: a,
								left: s,
								height: t + a,
								width: s + n
							}
						},
						_parseFont: function(e) {
							var t = oe.global,
								n = de(e.fontSize, t.defaultFontSize),
								a = {
									family: de(e.fontFamily, t.defaultFontFamily),
									lineHeight: K.options.toLineHeight(de(e.lineHeight, t.defaultLineHeight), n),
									size: n,
									style: de(e.fontStyle, t.defaultFontStyle),
									weight: null,
									string: ""
								};
							return a.string = function(e) {
								return !e || K.isNullOrUndef(e.size) || K.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
							}(a), a
						},
						resolve: function(e, t, n) {
							var a, s, r;
							for (a = 0, s = e.length; a < s; ++a)
								if (void 0 !== (r = e[a]) && (void 0 !== t && "function" == typeof r && (r = r(t)), void 0 !== n && K.isArray(r) && (r = r[n]), void 0 !== r)) return r
						}
					},
					ue = K,
					me = $,
					_e = re,
					he = le;
				ue.easing = me, ue.canvas = _e, ue.options = he;
				var ce = function(e) {
					ue.extend(this, e), this.initialize.apply(this, arguments)
				};
				ue.extend(ce.prototype, {
					initialize: function() {
						this.hidden = !1
					},
					pivot: function() {
						var e = this;
						return e._view || (e._view = ue.clone(e._model)), e._start = {}, e
					},
					transition: function(e) {
						var t = this,
							n = t._model,
							a = t._start,
							s = t._view;
						return n && 1 !== e ? (s || (s = t._view = {}), a || (a = t._start = {}), function(e, t, n, a) {
							var s, r, i, o, d, l, u, m, _, h = Object.keys(n);
							for (s = 0, r = h.length; s < r; ++s)
								if (l = n[i = h[s]], t.hasOwnProperty(i) || (t[i] = l), (o = t[i]) !== l && "_" !== i[0]) {
									if (e.hasOwnProperty(i) || (e[i] = o), (u = typeof l) == typeof(d = e[i]))
										if ("string" === u) {
											if ((m = G(d)).valid && (_ = G(l)).valid) {
												t[i] = _.mix(m, a).rgbString();
												continue
											}
										} else if (ue.isFinite(d) && ue.isFinite(l)) {
										t[i] = d + (l - d) * a;
										continue
									}
									t[i] = l
								}
						}(a, s, n, e), t) : (t._view = n, t._start = null, t)
					},
					tooltipPosition: function() {
						return {
							x: this._model.x,
							y: this._model.y
						}
					},
					hasValue: function() {
						return ue.isNumber(this._model.x) && ue.isNumber(this._model.y)
					}
				}), ce.extend = ue.inherits;
				var fe = ce,
					pe = fe.extend({
						chart: null,
						currentStep: 0,
						numSteps: 60,
						easing: "",
						render: null,
						onAnimationProgress: null,
						onAnimationComplete: null
					}),
					Me = pe;
				Object.defineProperty(pe.prototype, "animationObject", {
					get: function() {
						return this
					}
				}), Object.defineProperty(pe.prototype, "chartInstance", {
					get: function() {
						return this.chart
					},
					set: function(e) {
						this.chart = e
					}
				}), oe._set("global", {
					animation: {
						duration: 1e3,
						easing: "easeOutQuart",
						onProgress: ue.noop,
						onComplete: ue.noop
					}
				});
				var ye = {
						animations: [],
						request: null,
						addAnimation: function(e, t, n, a) {
							var s, r, i = this.animations;
							for (t.chart = e, t.startTime = Date.now(), t.duration = n, a || (e.animating = !0), s = 0, r = i.length; s < r; ++s)
								if (i[s].chart === e) return void(i[s] = t);
							i.push(t), 1 === i.length && this.requestAnimationFrame()
						},
						cancelAnimation: function(e) {
							var t = ue.findIndex(this.animations, (function(t) {
								return t.chart === e
							})); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
						},
						requestAnimationFrame: function() {
							var e = this;
							null === e.request && (e.request = ue.requestAnimFrame.call(window, (function() {
								e.request = null, e.startDigest()
							})))
						},
						startDigest: function() {
							this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
						},
						advance: function() {
							for (var e, t, n, a, s = this.animations, r = 0; r < s.length;) t = (e = s[r]).chart, n = e.numSteps, a = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(a, n), ue.callback(e.render, [t, e], t), ue.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (ue.callback(e.onAnimationComplete, [e], t), t.animating = !1, s.splice(r, 1)) : ++r
						}
					},
					ge = ue.options.resolve,
					Le = ["push", "pop", "shift", "splice", "unshift"];

				function Ye(e, t) {
					var n = e._chartjs;
					if (n) {
						var a = n.listeners,
							s = a.indexOf(t); - 1 !== s && a.splice(s, 1), a.length > 0 || (Le.forEach((function(t) {
							delete e[t]
						})), delete e._chartjs)
					}
				}
				var ve = function(e, t) {
					this.initialize(e, t)
				};
				ue.extend(ve.prototype, {
					datasetElementType: null,
					dataElementType: null,
					initialize: function(e, t) {
						this.chart = e, this.index = t, this.linkScales(), this.addElements()
					},
					updateIndex: function(e) {
						this.index = e
					},
					linkScales: function() {
						var e = this,
							t = e.getMeta(),
							n = e.getDataset();
						null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
					},
					getDataset: function() {
						return this.chart.data.datasets[this.index]
					},
					getMeta: function() {
						return this.chart.getDatasetMeta(this.index)
					},
					getScaleForId: function(e) {
						return this.chart.scales[e]
					},
					_getValueScaleId: function() {
						return this.getMeta().yAxisID
					},
					_getIndexScaleId: function() {
						return this.getMeta().xAxisID
					},
					_getValueScale: function() {
						return this.getScaleForId(this._getValueScaleId())
					},
					_getIndexScale: function() {
						return this.getScaleForId(this._getIndexScaleId())
					},
					reset: function() {
						this.update(!0)
					},
					destroy: function() {
						this._data && Ye(this._data, this)
					},
					createMetaDataset: function() {
						var e = this.datasetElementType;
						return e && new e({
							_chart: this.chart,
							_datasetIndex: this.index
						})
					},
					createMetaData: function(e) {
						var t = this.dataElementType;
						return t && new t({
							_chart: this.chart,
							_datasetIndex: this.index,
							_index: e
						})
					},
					addElements: function() {
						var e, t, n = this.getMeta(),
							a = this.getDataset().data || [],
							s = n.data;
						for (e = 0, t = a.length; e < t; ++e) s[e] = s[e] || this.createMetaData(e);
						n.dataset = n.dataset || this.createMetaDataset()
					},
					addElementAndReset: function(e) {
						var t = this.createMetaData(e);
						this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
					},
					buildOrUpdateElements: function() {
						var e, t, n = this,
							a = n.getDataset(),
							s = a.data || (a.data = []);
						n._data !== s && (n._data && Ye(n._data, n), s && Object.isExtensible(s) && (t = n, (e = s)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
							configurable: !0,
							enumerable: !1,
							value: {
								listeners: [t]
							}
						}), Le.forEach((function(t) {
							var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
								a = e[t];
							Object.defineProperty(e, t, {
								configurable: !0,
								enumerable: !1,
								value: function() {
									var t = Array.prototype.slice.call(arguments),
										s = a.apply(this, t);
									return ue.each(e._chartjs.listeners, (function(e) {
										"function" == typeof e[n] && e[n].apply(e, t)
									})), s
								}
							})
						})))), n._data = s), n.resyncElements()
					},
					update: ue.noop,
					transition: function(e) {
						for (var t = this.getMeta(), n = t.data || [], a = n.length, s = 0; s < a; ++s) n[s].transition(e);
						t.dataset && t.dataset.transition(e)
					},
					draw: function() {
						var e = this.getMeta(),
							t = e.data || [],
							n = t.length,
							a = 0;
						for (e.dataset && e.dataset.draw(); a < n; ++a) t[a].draw()
					},
					removeHoverStyle: function(e) {
						ue.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
					},
					setHoverStyle: function(e) {
						var t = this.chart.data.datasets[e._datasetIndex],
							n = e._index,
							a = e.custom || {},
							s = e._model,
							r = ue.getHoverColor;
						e.$previousStyle = {
							backgroundColor: s.backgroundColor,
							borderColor: s.borderColor,
							borderWidth: s.borderWidth
						}, s.backgroundColor = ge([a.hoverBackgroundColor, t.hoverBackgroundColor, r(s.backgroundColor)], void 0, n), s.borderColor = ge([a.hoverBorderColor, t.hoverBorderColor, r(s.borderColor)], void 0, n), s.borderWidth = ge([a.hoverBorderWidth, t.hoverBorderWidth, s.borderWidth], void 0, n)
					},
					resyncElements: function() {
						var e = this.getMeta(),
							t = this.getDataset().data,
							n = e.data.length,
							a = t.length;
						a < n ? e.data.splice(a, n - a) : a > n && this.insertElements(n, a - n)
					},
					insertElements: function(e, t) {
						for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
					},
					onDataPush: function() {
						var e = arguments.length;
						this.insertElements(this.getDataset().data.length - e, e)
					},
					onDataPop: function() {
						this.getMeta().data.pop()
					},
					onDataShift: function() {
						this.getMeta().data.shift()
					},
					onDataSplice: function(e, t) {
						this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
					},
					onDataUnshift: function() {
						this.insertElements(0, arguments.length)
					}
				}), ve.extend = ue.inherits;
				var ke = ve;
				oe._set("global", {
					elements: {
						arc: {
							backgroundColor: oe.global.defaultColor,
							borderColor: "#fff",
							borderWidth: 2,
							borderAlign: "center"
						}
					}
				});
				var be = fe.extend({
						inLabelRange: function(e) {
							var t = this._view;
							return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
						},
						inRange: function(e, t) {
							var n = this._view;
							if (n) {
								for (var a = ue.getAngleFromPoint(n, {
										x: e,
										y: t
									}), s = a.angle, r = a.distance, i = n.startAngle, o = n.endAngle; o < i;) o += 2 * Math.PI;
								for (; s > o;) s -= 2 * Math.PI;
								for (; s < i;) s += 2 * Math.PI;
								var d = s >= i && s <= o,
									l = r >= n.innerRadius && r <= n.outerRadius;
								return d && l
							}
							return !1
						},
						getCenterPoint: function() {
							var e = this._view,
								t = (e.startAngle + e.endAngle) / 2,
								n = (e.innerRadius + e.outerRadius) / 2;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						getArea: function() {
							var e = this._view;
							return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
						},
						tooltipPosition: function() {
							var e = this._view,
								t = e.startAngle + (e.endAngle - e.startAngle) / 2,
								n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
							return {
								x: e.x + Math.cos(t) * n,
								y: e.y + Math.sin(t) * n
							}
						},
						draw: function() {
							var e, t = this._chart.ctx,
								n = this._view,
								a = n.startAngle,
								s = n.endAngle,
								r = "inner" === n.borderAlign ? .33 : 0;
							t.save(), t.beginPath(), t.arc(n.x, n.y, Math.max(n.outerRadius - r, 0), a, s), t.arc(n.x, n.y, n.innerRadius, s, a, !0), t.closePath(), t.fillStyle = n.backgroundColor, t.fill(), n.borderWidth && ("inner" === n.borderAlign ? (t.beginPath(), e = r / n.outerRadius, t.arc(n.x, n.y, n.outerRadius, a - e, s + e), n.innerRadius > r ? (e = r / n.innerRadius, t.arc(n.x, n.y, n.innerRadius - r, s + e, a - e, !0)) : t.arc(n.x, n.y, r, s + Math.PI / 2, a - Math.PI / 2), t.closePath(), t.clip(), t.beginPath(), t.arc(n.x, n.y, n.outerRadius, a, s), t.arc(n.x, n.y, n.innerRadius, s, a, !0), t.closePath(), t.lineWidth = 2 * n.borderWidth, t.lineJoin = "round") : (t.lineWidth = n.borderWidth, t.lineJoin = "bevel"), t.strokeStyle = n.borderColor, t.stroke()), t.restore()
						}
					}),
					De = ue.valueOrDefault,
					we = oe.global.defaultColor;
				oe._set("global", {
					elements: {
						line: {
							tension: .4,
							backgroundColor: we,
							borderWidth: 3,
							borderColor: we,
							borderCapStyle: "butt",
							borderDash: [],
							borderDashOffset: 0,
							borderJoinStyle: "miter",
							capBezierPoints: !0,
							fill: !0
						}
					}
				});
				var Te = fe.extend({
						draw: function() {
							var e, t, n, a, s = this._view,
								r = this._chart.ctx,
								i = s.spanGaps,
								o = this._children.slice(),
								d = oe.global,
								l = d.elements.line,
								u = -1;
							for (this._loop && o.length && o.push(o[0]), r.save(), r.lineCap = s.borderCapStyle || l.borderCapStyle, r.setLineDash && r.setLineDash(s.borderDash || l.borderDash), r.lineDashOffset = De(s.borderDashOffset, l.borderDashOffset), r.lineJoin = s.borderJoinStyle || l.borderJoinStyle, r.lineWidth = De(s.borderWidth, l.borderWidth), r.strokeStyle = s.borderColor || d.defaultColor, r.beginPath(), u = -1, e = 0; e < o.length; ++e) t = o[e], n = ue.previousItem(o, e), a = t._view, 0 === e ? a.skip || (r.moveTo(a.x, a.y), u = e) : (n = -1 === u ? n : o[u], a.skip || (u !== e - 1 && !i || -1 === u ? r.moveTo(a.x, a.y) : ue.canvas.lineTo(r, n._view, t._view), u = e));
							r.stroke(), r.restore()
						}
					}),
					xe = ue.valueOrDefault,
					Se = oe.global.defaultColor;

				function je(e) {
					var t = this._view;
					return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
				}
				oe._set("global", {
					elements: {
						point: {
							radius: 3,
							pointStyle: "circle",
							backgroundColor: Se,
							borderColor: Se,
							borderWidth: 1,
							hitRadius: 1,
							hoverRadius: 4,
							hoverBorderWidth: 1
						}
					}
				});
				var He = fe.extend({
						inRange: function(e, t) {
							var n = this._view;
							return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
						},
						inLabelRange: je,
						inXRange: je,
						inYRange: function(e) {
							var t = this._view;
							return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
						},
						getCenterPoint: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						},
						getArea: function() {
							return Math.PI * Math.pow(this._view.radius, 2)
						},
						tooltipPosition: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y,
								padding: e.radius + e.borderWidth
							}
						},
						draw: function(e) {
							var t = this._view,
								n = this._chart.ctx,
								a = t.pointStyle,
								s = t.rotation,
								r = t.radius,
								i = t.x,
								o = t.y,
								d = oe.global,
								l = d.defaultColor;
							t.skip || (void 0 === e || ue.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || l, n.lineWidth = xe(t.borderWidth, d.elements.point.borderWidth), n.fillStyle = t.backgroundColor || l, ue.canvas.drawPoint(n, a, r, i, o, s))
						}
					}),
					Pe = oe.global.defaultColor;

				function Oe(e) {
					return e && void 0 !== e.width
				}

				function Ae(e) {
					var t, n, a, s, r;
					return Oe(e) ? (r = e.width / 2, t = e.x - r, n = e.x + r, a = Math.min(e.y, e.base), s = Math.max(e.y, e.base)) : (r = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), a = e.y - r, s = e.y + r), {
						left: t,
						top: a,
						right: n,
						bottom: s
					}
				}

				function We(e, t, n) {
					return e === t ? n : e === n ? t : e
				}

				function Fe(e, t, n) {
					var a, s, r, i, o = e.borderWidth,
						d = function(e) {
							var t = e.borderSkipped,
								n = {};
							return t ? (e.horizontal ? e.base > e.x && (t = We(t, "left", "right")) : e.base < e.y && (t = We(t, "bottom", "top")), n[t] = !0, n) : n
						}(e);
					return ue.isObject(o) ? (a = +o.top || 0, s = +o.right || 0, r = +o.bottom || 0, i = +o.left || 0) : a = s = r = i = +o || 0, {
						t: d.top || a < 0 ? 0 : a > n ? n : a,
						r: d.right || s < 0 ? 0 : s > t ? t : s,
						b: d.bottom || r < 0 ? 0 : r > n ? n : r,
						l: d.left || i < 0 ? 0 : i > t ? t : i
					}
				}

				function Ce(e, t, n) {
					var a = null === t,
						s = null === n,
						r = !(!e || a && s) && Ae(e);
					return r && (a || t >= r.left && t <= r.right) && (s || n >= r.top && n <= r.bottom)
				}
				oe._set("global", {
					elements: {
						rectangle: {
							backgroundColor: Pe,
							borderColor: Pe,
							borderSkipped: "bottom",
							borderWidth: 0
						}
					}
				});
				var Ee = fe.extend({
						draw: function() {
							var e = this._chart.ctx,
								t = this._view,
								n = function(e) {
									var t = Ae(e),
										n = t.right - t.left,
										a = t.bottom - t.top,
										s = Fe(e, n / 2, a / 2);
									return {
										outer: {
											x: t.left,
											y: t.top,
											w: n,
											h: a
										},
										inner: {
											x: t.left + s.l,
											y: t.top + s.t,
											w: n - s.l - s.r,
											h: a - s.t - s.b
										}
									}
								}(t),
								a = n.outer,
								s = n.inner;
							e.fillStyle = t.backgroundColor, e.fillRect(a.x, a.y, a.w, a.h), a.w === s.w && a.h === s.h || (e.save(), e.beginPath(), e.rect(a.x, a.y, a.w, a.h), e.clip(), e.fillStyle = t.borderColor, e.rect(s.x, s.y, s.w, s.h), e.fill("evenodd"), e.restore())
						},
						height: function() {
							var e = this._view;
							return e.base - e.y
						},
						inRange: function(e, t) {
							return Ce(this._view, e, t)
						},
						inLabelRange: function(e, t) {
							var n = this._view;
							return Oe(n) ? Ce(n, e, null) : Ce(n, null, t)
						},
						inXRange: function(e) {
							return Ce(this._view, e, null)
						},
						inYRange: function(e) {
							return Ce(this._view, null, e)
						},
						getCenterPoint: function() {
							var e, t, n = this._view;
							return Oe(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {
								x: e,
								y: t
							}
						},
						getArea: function() {
							var e = this._view;
							return Oe(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
						},
						tooltipPosition: function() {
							var e = this._view;
							return {
								x: e.x,
								y: e.y
							}
						}
					}),
					Ie = {},
					ze = be,
					Re = Te,
					Ne = He,
					Ve = Ee;
				Ie.Arc = ze, Ie.Line = Re, Ie.Point = Ne, Ie.Rectangle = Ve;
				var Be = ue.options.resolve;
				oe._set("bar", {
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							categoryPercentage: .8,
							barPercentage: .9,
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}],
						yAxes: [{
							type: "linear"
						}]
					}
				});
				var Je = ke.extend({
						dataElementType: Ie.Rectangle,
						initialize: function() {
							var e, t = this;
							ke.prototype.initialize.apply(t, arguments), (e = t.getMeta()).stack = t.getDataset().stack, e.bar = !0
						},
						update: function(e) {
							var t, n, a = this.getMeta().data;
							for (this._ruler = this.getRuler(), t = 0, n = a.length; t < n; ++t) this.updateElement(a[t], t, e)
						},
						updateElement: function(e, t, n) {
							var a = this,
								s = a.getMeta(),
								r = a.getDataset(),
								i = a._resolveElementOptions(e, t);
							e._xScale = a.getScaleForId(s.xAxisID), e._yScale = a.getScaleForId(s.yAxisID), e._datasetIndex = a.index, e._index = t, e._model = {
								backgroundColor: i.backgroundColor,
								borderColor: i.borderColor,
								borderSkipped: i.borderSkipped,
								borderWidth: i.borderWidth,
								datasetLabel: r.label,
								label: a.chart.data.labels[t]
							}, a._updateElementGeometry(e, t, n), e.pivot()
						},
						_updateElementGeometry: function(e, t, n) {
							var a = this,
								s = e._model,
								r = a._getValueScale(),
								i = r.getBasePixel(),
								o = r.isHorizontal(),
								d = a._ruler || a.getRuler(),
								l = a.calculateBarValuePixels(a.index, t),
								u = a.calculateBarIndexPixels(a.index, t, d);
							s.horizontal = o, s.base = n ? i : l.base, s.x = o ? n ? i : l.head : u.center, s.y = o ? u.center : n ? i : l.head, s.height = o ? u.size : void 0, s.width = o ? void 0 : u.size
						},
						_getStacks: function(e) {
							var t, n, a = this.chart,
								s = this._getIndexScale().options.stacked,
								r = void 0 === e ? a.data.datasets.length : e + 1,
								i = [];
							for (t = 0; t < r; ++t)(n = a.getDatasetMeta(t)).bar && a.isDatasetVisible(t) && (!1 === s || !0 === s && -1 === i.indexOf(n.stack) || void 0 === s && (void 0 === n.stack || -1 === i.indexOf(n.stack))) && i.push(n.stack);
							return i
						},
						getStackCount: function() {
							return this._getStacks().length
						},
						getStackIndex: function(e, t) {
							var n = this._getStacks(e),
								a = void 0 !== t ? n.indexOf(t) : -1;
							return -1 === a ? n.length - 1 : a
						},
						getRuler: function() {
							var e, t, n = this._getIndexScale(),
								a = this.getStackCount(),
								s = this.index,
								r = n.isHorizontal(),
								i = r ? n.left : n.top,
								o = i + (r ? n.width : n.height),
								d = [];
							for (e = 0, t = this.getMeta().data.length; e < t; ++e) d.push(n.getPixelForValue(null, e, s));
							return {
								min: ue.isNullOrUndef(n.options.barThickness) ? function(e, t) {
									var n, a, s, r, i = e.isHorizontal() ? e.width : e.height,
										o = e.getTicks();
									for (s = 1, r = t.length; s < r; ++s) i = Math.min(i, Math.abs(t[s] - t[s - 1]));
									for (s = 0, r = o.length; s < r; ++s) a = e.getPixelForTick(s), i = s > 0 ? Math.min(i, a - n) : i, n = a;
									return i
								}(n, d) : -1,
								pixels: d,
								start: i,
								end: o,
								stackCount: a,
								scale: n
							}
						},
						calculateBarValuePixels: function(e, t) {
							var n, a, s, r, i, o, d = this.chart,
								l = this.getMeta(),
								u = this._getValueScale(),
								m = u.isHorizontal(),
								_ = d.data.datasets,
								h = +u.getRightValue(_[e].data[t]),
								c = u.options.minBarLength,
								f = u.options.stacked,
								p = l.stack,
								M = 0;
							if (f || void 0 === f && void 0 !== p)
								for (n = 0; n < e; ++n)(a = d.getDatasetMeta(n)).bar && a.stack === p && a.controller._getValueScaleId() === u.id && d.isDatasetVisible(n) && (s = +u.getRightValue(_[n].data[t]), (h < 0 && s < 0 || h >= 0 && s > 0) && (M += s));
							return r = u.getPixelForValue(M), o = (i = u.getPixelForValue(M + h)) - r, void 0 !== c && Math.abs(o) < c && (o = c, i = h >= 0 && !m || h < 0 && m ? r - c : r + c), {
								size: o,
								base: r,
								head: i,
								center: i + o / 2
							}
						},
						calculateBarIndexPixels: function(e, t, n) {
							var a = n.scale.options,
								s = "flex" === a.barThickness ? function(e, t, n) {
									var a, s = t.pixels,
										r = s[e],
										i = e > 0 ? s[e - 1] : null,
										o = e < s.length - 1 ? s[e + 1] : null,
										d = n.categoryPercentage;
									return null === i && (i = r - (null === o ? t.end - t.start : o - r)), null === o && (o = r + r - i), a = r - (r - Math.min(i, o)) / 2 * d, {
										chunk: Math.abs(o - i) / 2 * d / t.stackCount,
										ratio: n.barPercentage,
										start: a
									}
								}(t, n, a) : function(e, t, n) {
									var a, s, r = n.barThickness,
										i = t.stackCount,
										o = t.pixels[e];
									return ue.isNullOrUndef(r) ? (a = t.min * n.categoryPercentage, s = n.barPercentage) : (a = r * i, s = 1), {
										chunk: a / i,
										ratio: s,
										start: o - a / 2
									}
								}(t, n, a),
								r = this.getStackIndex(e, this.getMeta().stack),
								i = s.start + s.chunk * r + s.chunk / 2,
								o = Math.min(ue.valueOrDefault(a.maxBarThickness, 1 / 0), s.chunk * s.ratio);
							return {
								base: i - o / 2,
								head: i + o / 2,
								center: i,
								size: o
							}
						},
						draw: function() {
							var e = this.chart,
								t = this._getValueScale(),
								n = this.getMeta().data,
								a = this.getDataset(),
								s = n.length,
								r = 0;
							for (ue.canvas.clipArea(e.ctx, e.chartArea); r < s; ++r) isNaN(t.getRightValue(a.data[r])) || n[r].draw();
							ue.canvas.unclipArea(e.ctx)
						},
						_resolveElementOptions: function(e, t) {
							var n, a, s, r = this.chart,
								i = r.data.datasets[this.index],
								o = e.custom || {},
								d = r.options.elements.rectangle,
								l = {},
								u = {
									chart: r,
									dataIndex: t,
									dataset: i,
									datasetIndex: this.index
								},
								m = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
							for (n = 0, a = m.length; n < a; ++n) l[s = m[n]] = Be([o[s], i[s], d[s]], u, t);
							return l
						}
					}),
					Ue = ue.valueOrDefault,
					Ge = ue.options.resolve;
				oe._set("bubble", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							position: "left",
							id: "y-axis-0"
						}]
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								var n = t.datasets[e.datasetIndex].label || "",
									a = t.datasets[e.datasetIndex].data[e.index];
								return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + a.r + ")"
							}
						}
					}
				});
				var qe = ke.extend({
						dataElementType: Ie.Point,
						update: function(e) {
							var t = this,
								n = t.getMeta().data;
							ue.each(n, (function(n, a) {
								t.updateElement(n, a, e)
							}))
						},
						updateElement: function(e, t, n) {
							var a = this,
								s = a.getMeta(),
								r = e.custom || {},
								i = a.getScaleForId(s.xAxisID),
								o = a.getScaleForId(s.yAxisID),
								d = a._resolveElementOptions(e, t),
								l = a.getDataset().data[t],
								u = a.index,
								m = n ? i.getPixelForDecimal(.5) : i.getPixelForValue("object" == typeof l ? l : NaN, t, u),
								_ = n ? o.getBasePixel() : o.getPixelForValue(l, t, u);
							e._xScale = i, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = {
								backgroundColor: d.backgroundColor,
								borderColor: d.borderColor,
								borderWidth: d.borderWidth,
								hitRadius: d.hitRadius,
								pointStyle: d.pointStyle,
								rotation: d.rotation,
								radius: n ? 0 : d.radius,
								skip: r.skip || isNaN(m) || isNaN(_),
								x: m,
								y: _
							}, e.pivot()
						},
						setHoverStyle: function(e) {
							var t = e._model,
								n = e._options,
								a = ue.getHoverColor;
							e.$previousStyle = {
								backgroundColor: t.backgroundColor,
								borderColor: t.borderColor,
								borderWidth: t.borderWidth,
								radius: t.radius
							}, t.backgroundColor = Ue(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Ue(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Ue(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
						},
						_resolveElementOptions: function(e, t) {
							var n, a, s, r = this.chart,
								i = r.data.datasets[this.index],
								o = e.custom || {},
								d = r.options.elements.point,
								l = i.data[t],
								u = {},
								m = {
									chart: r,
									dataIndex: t,
									dataset: i,
									datasetIndex: this.index
								},
								_ = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
							for (n = 0, a = _.length; n < a; ++n) u[s = _[n]] = Ge([o[s], i[s], d[s]], m, t);
							return u.radius = Ge([o.radius, l ? l.r : void 0, i.radius, d.radius], m, t), u
						}
					}),
					Ke = ue.options.resolve,
					Ze = ue.valueOrDefault;
				oe._set("doughnut", {
					animation: {
						animateRotate: !0,
						animateScale: !1
					},
					hover: {
						mode: "single"
					},
					legendCallback: function(e) {
						var t = [];
						t.push('<ul class="' + e.id + '-legend">');
						var n = e.data,
							a = n.datasets,
							s = n.labels;
						if (a.length)
							for (var r = 0; r < a[0].data.length; ++r) t.push('<li><span style="background-color:' + a[0].backgroundColor[r] + '"></span>'), s[r] && t.push(s[r]), t.push("</li>");
						return t.push("</ul>"), t.join("")
					},
					legend: {
						labels: {
							generateLabels: function(e) {
								var t = e.data;
								return t.labels.length && t.datasets.length ? t.labels.map((function(n, a) {
									var s = e.getDatasetMeta(0),
										r = t.datasets[0],
										i = s.data[a],
										o = i && i.custom || {},
										d = e.options.elements.arc;
									return {
										text: n,
										fillStyle: Ke([o.backgroundColor, r.backgroundColor, d.backgroundColor], void 0, a),
										strokeStyle: Ke([o.borderColor, r.borderColor, d.borderColor], void 0, a),
										lineWidth: Ke([o.borderWidth, r.borderWidth, d.borderWidth], void 0, a),
										hidden: isNaN(r.data[a]) || s.data[a].hidden,
										index: a
									}
								})) : []
							}
						},
						onClick: function(e, t) {
							var n, a, s, r = t.index,
								i = this.chart;
							for (n = 0, a = (i.data.datasets || []).length; n < a; ++n)(s = i.getDatasetMeta(n)).data[r] && (s.data[r].hidden = !s.data[r].hidden);
							i.update()
						}
					},
					cutoutPercentage: 50,
					rotation: -.5 * Math.PI,
					circumference: 2 * Math.PI,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								var n = t.labels[e.index],
									a = ": " + t.datasets[e.datasetIndex].data[e.index];
								return ue.isArray(n) ? (n = n.slice())[0] += a : n += a, n
							}
						}
					}
				});
				var $e = ke.extend({
					dataElementType: Ie.Arc,
					linkScales: ue.noop,
					getRingIndex: function(e) {
						for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
						return t
					},
					update: function(e) {
						var t, n, a = this,
							s = a.chart,
							r = s.chartArea,
							i = s.options,
							o = r.right - r.left,
							d = r.bottom - r.top,
							l = Math.min(o, d),
							u = {
								x: 0,
								y: 0
							},
							m = a.getMeta(),
							_ = m.data,
							h = i.cutoutPercentage,
							c = i.circumference,
							f = a._getRingWeight(a.index);
						if (c < 2 * Math.PI) {
							var p = i.rotation % (2 * Math.PI),
								M = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + c,
								y = {
									x: Math.cos(p),
									y: Math.sin(p)
								},
								g = {
									x: Math.cos(M),
									y: Math.sin(M)
								},
								L = p <= 0 && M >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= M,
								Y = p <= .5 * Math.PI && .5 * Math.PI <= M || p <= 2.5 * Math.PI && 2.5 * Math.PI <= M,
								v = p <= -Math.PI && -Math.PI <= M || p <= Math.PI && Math.PI <= M,
								k = p <= .5 * -Math.PI && .5 * -Math.PI <= M || p <= 1.5 * Math.PI && 1.5 * Math.PI <= M,
								b = h / 100,
								D = {
									x: v ? -1 : Math.min(y.x * (y.x < 0 ? 1 : b), g.x * (g.x < 0 ? 1 : b)),
									y: k ? -1 : Math.min(y.y * (y.y < 0 ? 1 : b), g.y * (g.y < 0 ? 1 : b))
								},
								w = {
									x: L ? 1 : Math.max(y.x * (y.x > 0 ? 1 : b), g.x * (g.x > 0 ? 1 : b)),
									y: Y ? 1 : Math.max(y.y * (y.y > 0 ? 1 : b), g.y * (g.y > 0 ? 1 : b))
								},
								T = {
									width: .5 * (w.x - D.x),
									height: .5 * (w.y - D.y)
								};
							l = Math.min(o / T.width, d / T.height), u = {
								x: -.5 * (w.x + D.x),
								y: -.5 * (w.y + D.y)
							}
						}
						for (t = 0, n = _.length; t < n; ++t) _[t]._options = a._resolveElementOptions(_[t], t);
						for (s.borderWidth = a.getMaxBorderWidth(), s.outerRadius = Math.max((l - s.borderWidth) / 2, 0), s.innerRadius = Math.max(h ? s.outerRadius / 100 * h : 0, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), s.offsetX = u.x * s.outerRadius, s.offsetY = u.y * s.outerRadius, m.total = a.calculateTotal(), a.outerRadius = s.outerRadius - s.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - s.radiusLength * f, 0), t = 0, n = _.length; t < n; ++t) a.updateElement(_[t], t, e)
					},
					updateElement: function(e, t, n) {
						var a = this,
							s = a.chart,
							r = s.chartArea,
							i = s.options,
							o = i.animation,
							d = (r.left + r.right) / 2,
							l = (r.top + r.bottom) / 2,
							u = i.rotation,
							m = i.rotation,
							_ = a.getDataset(),
							h = n && o.animateRotate ? 0 : e.hidden ? 0 : a.calculateCircumference(_.data[t]) * (i.circumference / (2 * Math.PI)),
							c = n && o.animateScale ? 0 : a.innerRadius,
							f = n && o.animateScale ? 0 : a.outerRadius,
							p = e._options || {};
						ue.extend(e, {
							_datasetIndex: a.index,
							_index: t,
							_model: {
								backgroundColor: p.backgroundColor,
								borderColor: p.borderColor,
								borderWidth: p.borderWidth,
								borderAlign: p.borderAlign,
								x: d + s.offsetX,
								y: l + s.offsetY,
								startAngle: u,
								endAngle: m,
								circumference: h,
								outerRadius: f,
								innerRadius: c,
								label: ue.valueAtIndexOrDefault(_.label, t, s.data.labels[t])
							}
						});
						var M = e._model;
						n && o.animateRotate || (M.startAngle = 0 === t ? i.rotation : a.getMeta().data[t - 1]._model.endAngle, M.endAngle = M.startAngle + M.circumference), e.pivot()
					},
					calculateTotal: function() {
						var e, t = this.getDataset(),
							n = this.getMeta(),
							a = 0;
						return ue.each(n.data, (function(n, s) {
							e = t.data[s], isNaN(e) || n.hidden || (a += Math.abs(e))
						})), a
					},
					calculateCircumference: function(e) {
						var t = this.getMeta().total;
						return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0
					},
					getMaxBorderWidth: function(e) {
						var t, n, a, s, r, i, o, d, l = 0,
							u = this.chart;
						if (!e)
							for (t = 0, n = u.data.datasets.length; t < n; ++t)
								if (u.isDatasetVisible(t)) {
									e = (a = u.getDatasetMeta(t)).data, t !== this.index && (r = a.controller);
									break
								} if (!e) return 0;
						for (t = 0, n = e.length; t < n; ++t) s = e[t], "inner" !== (i = r ? r._resolveElementOptions(s, t) : s._options).borderAlign && (o = i.borderWidth, l = (d = i.hoverBorderWidth) > (l = o > l ? o : l) ? d : l);
						return l
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							a = ue.getHoverColor;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}, t.backgroundColor = Ze(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Ze(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Ze(n.hoverBorderWidth, n.borderWidth)
					},
					_resolveElementOptions: function(e, t) {
						var n, a, s, r = this.chart,
							i = this.getDataset(),
							o = e.custom || {},
							d = r.options.elements.arc,
							l = {},
							u = {
								chart: r,
								dataIndex: t,
								dataset: i,
								datasetIndex: this.index
							},
							m = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
						for (n = 0, a = m.length; n < a; ++n) l[s = m[n]] = Ke([o[s], i[s], d[s]], u, t);
						return l
					},
					_getRingWeightOffset: function(e) {
						for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
						return t
					},
					_getRingWeight: function(e) {
						return Math.max(Ze(this.chart.data.datasets[e].weight, 1), 0)
					},
					_getVisibleDatasetWeightTotal: function() {
						return this._getRingWeightOffset(this.chart.data.datasets.length)
					}
				});
				oe._set("horizontalBar", {
					hover: {
						mode: "index",
						axis: "y"
					},
					scales: {
						xAxes: [{
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							type: "category",
							position: "left",
							categoryPercentage: .8,
							barPercentage: .9,
							offset: !0,
							gridLines: {
								offsetGridLines: !0
							}
						}]
					},
					elements: {
						rectangle: {
							borderSkipped: "left"
						}
					},
					tooltips: {
						mode: "index",
						axis: "y"
					}
				});
				var Xe = Je.extend({
						_getValueScaleId: function() {
							return this.getMeta().xAxisID
						},
						_getIndexScaleId: function() {
							return this.getMeta().yAxisID
						}
					}),
					Qe = ue.valueOrDefault,
					et = ue.options.resolve,
					tt = ue.canvas._isPointInArea;

				function nt(e, t) {
					return Qe(e.showLine, t.showLines)
				}
				oe._set("line", {
					showLines: !0,
					spanGaps: !1,
					hover: {
						mode: "label"
					},
					scales: {
						xAxes: [{
							type: "category",
							id: "x-axis-0"
						}],
						yAxes: [{
							type: "linear",
							id: "y-axis-0"
						}]
					}
				});
				var at = ke.extend({
						datasetElementType: Ie.Line,
						dataElementType: Ie.Point,
						update: function(e) {
							var t, n, a = this,
								s = a.getMeta(),
								r = s.dataset,
								i = s.data || [],
								o = a.getScaleForId(s.yAxisID),
								d = a.getDataset(),
								l = nt(d, a.chart.options);
							for (l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), r._scale = o, r._datasetIndex = a.index, r._children = i, r._model = a._resolveLineOptions(r), r.pivot()), t = 0, n = i.length; t < n; ++t) a.updateElement(i[t], t, e);
							for (l && 0 !== r._model.tension && a.updateBezierControlPoints(), t = 0, n = i.length; t < n; ++t) i[t].pivot()
						},
						updateElement: function(e, t, n) {
							var a, s, r = this,
								i = r.getMeta(),
								o = e.custom || {},
								d = r.getDataset(),
								l = r.index,
								u = d.data[t],
								m = r.getScaleForId(i.yAxisID),
								_ = r.getScaleForId(i.xAxisID),
								h = i.dataset._model,
								c = r._resolvePointOptions(e, t);
							a = _.getPixelForValue("object" == typeof u ? u : NaN, t, l), s = n ? m.getBasePixel() : r.calculatePointY(u, t, l), e._xScale = _, e._yScale = m, e._options = c, e._datasetIndex = l, e._index = t, e._model = {
								x: a,
								y: s,
								skip: o.skip || isNaN(a) || isNaN(s),
								radius: c.radius,
								pointStyle: c.pointStyle,
								rotation: c.rotation,
								backgroundColor: c.backgroundColor,
								borderColor: c.borderColor,
								borderWidth: c.borderWidth,
								tension: Qe(o.tension, h ? h.tension : 0),
								steppedLine: !!h && h.steppedLine,
								hitRadius: c.hitRadius
							}
						},
						_resolvePointOptions: function(e, t) {
							var n, a, s, r = this.chart,
								i = r.data.datasets[this.index],
								o = e.custom || {},
								d = r.options.elements.point,
								l = {},
								u = {
									chart: r,
									dataIndex: t,
									dataset: i,
									datasetIndex: this.index
								},
								m = {
									backgroundColor: "pointBackgroundColor",
									borderColor: "pointBorderColor",
									borderWidth: "pointBorderWidth",
									hitRadius: "pointHitRadius",
									hoverBackgroundColor: "pointHoverBackgroundColor",
									hoverBorderColor: "pointHoverBorderColor",
									hoverBorderWidth: "pointHoverBorderWidth",
									hoverRadius: "pointHoverRadius",
									pointStyle: "pointStyle",
									radius: "pointRadius",
									rotation: "pointRotation"
								},
								_ = Object.keys(m);
							for (n = 0, a = _.length; n < a; ++n) l[s = _[n]] = et([o[s], i[m[s]], i[s], d[s]], u, t);
							return l
						},
						_resolveLineOptions: function(e) {
							var t, n, a, s = this.chart,
								r = s.data.datasets[this.index],
								i = e.custom || {},
								o = s.options,
								d = o.elements.line,
								l = {},
								u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
							for (t = 0, n = u.length; t < n; ++t) l[a = u[t]] = et([i[a], r[a], d[a]]);
							return l.spanGaps = Qe(r.spanGaps, o.spanGaps), l.tension = Qe(r.lineTension, d.tension), l.steppedLine = et([i.steppedLine, r.steppedLine, d.stepped]), l
						},
						calculatePointY: function(e, t, n) {
							var a, s, r, i = this.chart,
								o = this.getMeta(),
								d = this.getScaleForId(o.yAxisID),
								l = 0,
								u = 0;
							if (d.options.stacked) {
								for (a = 0; a < n; a++)
									if (s = i.data.datasets[a], "line" === (r = i.getDatasetMeta(a)).type && r.yAxisID === d.id && i.isDatasetVisible(a)) {
										var m = Number(d.getRightValue(s.data[t]));
										m < 0 ? u += m || 0 : l += m || 0
									} var _ = Number(d.getRightValue(e));
								return _ < 0 ? d.getPixelForValue(u + _) : d.getPixelForValue(l + _)
							}
							return d.getPixelForValue(e)
						},
						updateBezierControlPoints: function() {
							var e, t, n, a, s = this.chart,
								r = this.getMeta(),
								i = r.dataset._model,
								o = s.chartArea,
								d = r.data || [];

							function l(e, t, n) {
								return Math.max(Math.min(e, n), t)
							}
							if (i.spanGaps && (d = d.filter((function(e) {
									return !e._model.skip
								}))), "monotone" === i.cubicInterpolationMode) ue.splineCurveMonotone(d);
							else
								for (e = 0, t = d.length; e < t; ++e) n = d[e]._model, a = ue.splineCurve(ue.previousItem(d, e)._model, n, ue.nextItem(d, e)._model, i.tension), n.controlPointPreviousX = a.previous.x, n.controlPointPreviousY = a.previous.y, n.controlPointNextX = a.next.x, n.controlPointNextY = a.next.y;
							if (s.options.elements.line.capBezierPoints)
								for (e = 0, t = d.length; e < t; ++e) n = d[e]._model, tt(n, o) && (e > 0 && tt(d[e - 1]._model, o) && (n.controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom)), e < d.length - 1 && tt(d[e + 1]._model, o) && (n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom)))
						},
						draw: function() {
							var e, t = this.chart,
								n = this.getMeta(),
								a = n.data || [],
								s = t.chartArea,
								r = a.length,
								i = 0;
							for (nt(this.getDataset(), t.options) && (e = (n.dataset._model.borderWidth || 0) / 2, ue.canvas.clipArea(t.ctx, {
									left: s.left,
									right: s.right,
									top: s.top - e,
									bottom: s.bottom + e
								}), n.dataset.draw(), ue.canvas.unclipArea(t.ctx)); i < r; ++i) a[i].draw(s)
						},
						setHoverStyle: function(e) {
							var t = e._model,
								n = e._options,
								a = ue.getHoverColor;
							e.$previousStyle = {
								backgroundColor: t.backgroundColor,
								borderColor: t.borderColor,
								borderWidth: t.borderWidth,
								radius: t.radius
							}, t.backgroundColor = Qe(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Qe(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Qe(n.hoverBorderWidth, n.borderWidth), t.radius = Qe(n.hoverRadius, n.radius)
						}
					}),
					st = ue.options.resolve;
				oe._set("polarArea", {
					scale: {
						type: "radialLinear",
						angleLines: {
							display: !1
						},
						gridLines: {
							circular: !0
						},
						pointLabels: {
							display: !1
						},
						ticks: {
							beginAtZero: !0
						}
					},
					animation: {
						animateRotate: !0,
						animateScale: !0
					},
					startAngle: -.5 * Math.PI,
					legendCallback: function(e) {
						var t = [];
						t.push('<ul class="' + e.id + '-legend">');
						var n = e.data,
							a = n.datasets,
							s = n.labels;
						if (a.length)
							for (var r = 0; r < a[0].data.length; ++r) t.push('<li><span style="background-color:' + a[0].backgroundColor[r] + '"></span>'), s[r] && t.push(s[r]), t.push("</li>");
						return t.push("</ul>"), t.join("")
					},
					legend: {
						labels: {
							generateLabels: function(e) {
								var t = e.data;
								return t.labels.length && t.datasets.length ? t.labels.map((function(n, a) {
									var s = e.getDatasetMeta(0),
										r = t.datasets[0],
										i = s.data[a].custom || {},
										o = e.options.elements.arc;
									return {
										text: n,
										fillStyle: st([i.backgroundColor, r.backgroundColor, o.backgroundColor], void 0, a),
										strokeStyle: st([i.borderColor, r.borderColor, o.borderColor], void 0, a),
										lineWidth: st([i.borderWidth, r.borderWidth, o.borderWidth], void 0, a),
										hidden: isNaN(r.data[a]) || s.data[a].hidden,
										index: a
									}
								})) : []
							}
						},
						onClick: function(e, t) {
							var n, a, s, r = t.index,
								i = this.chart;
							for (n = 0, a = (i.data.datasets || []).length; n < a; ++n)(s = i.getDatasetMeta(n)).data[r].hidden = !s.data[r].hidden;
							i.update()
						}
					},
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e, t) {
								return t.labels[e.index] + ": " + e.yLabel
							}
						}
					}
				});
				var rt = ke.extend({
					dataElementType: Ie.Arc,
					linkScales: ue.noop,
					update: function(e) {
						var t, n, a, s = this,
							r = s.getDataset(),
							i = s.getMeta(),
							o = s.chart.options.startAngle || 0,
							d = s._starts = [],
							l = s._angles = [],
							u = i.data;
						for (s._updateRadius(), i.count = s.countVisibleElements(), t = 0, n = r.data.length; t < n; t++) d[t] = o, a = s._computeAngle(t), l[t] = a, o += a;
						for (t = 0, n = u.length; t < n; ++t) u[t]._options = s._resolveElementOptions(u[t], t), s.updateElement(u[t], t, e)
					},
					_updateRadius: function() {
						var e = this,
							t = e.chart,
							n = t.chartArea,
							a = t.options,
							s = Math.min(n.right - n.left, n.bottom - n.top);
						t.outerRadius = Math.max(s / 2, 0), t.innerRadius = Math.max(a.cutoutPercentage ? t.outerRadius / 100 * a.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
					},
					updateElement: function(e, t, n) {
						var a = this,
							s = a.chart,
							r = a.getDataset(),
							i = s.options,
							o = i.animation,
							d = s.scale,
							l = s.data.labels,
							u = d.xCenter,
							m = d.yCenter,
							_ = i.startAngle,
							h = e.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[t]),
							c = a._starts[t],
							f = c + (e.hidden ? 0 : a._angles[t]),
							p = o.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[t]),
							M = e._options || {};
						ue.extend(e, {
							_datasetIndex: a.index,
							_index: t,
							_scale: d,
							_model: {
								backgroundColor: M.backgroundColor,
								borderColor: M.borderColor,
								borderWidth: M.borderWidth,
								borderAlign: M.borderAlign,
								x: u,
								y: m,
								innerRadius: 0,
								outerRadius: n ? p : h,
								startAngle: n && o.animateRotate ? _ : c,
								endAngle: n && o.animateRotate ? _ : f,
								label: ue.valueAtIndexOrDefault(l, t, l[t])
							}
						}), e.pivot()
					},
					countVisibleElements: function() {
						var e = this.getDataset(),
							t = this.getMeta(),
							n = 0;
						return ue.each(t.data, (function(t, a) {
							isNaN(e.data[a]) || t.hidden || n++
						})), n
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							a = ue.getHoverColor,
							s = ue.valueOrDefault;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth
						}, t.backgroundColor = s(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = s(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = s(n.hoverBorderWidth, n.borderWidth)
					},
					_resolveElementOptions: function(e, t) {
						var n, a, s, r = this.chart,
							i = this.getDataset(),
							o = e.custom || {},
							d = r.options.elements.arc,
							l = {},
							u = {
								chart: r,
								dataIndex: t,
								dataset: i,
								datasetIndex: this.index
							},
							m = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
						for (n = 0, a = m.length; n < a; ++n) l[s = m[n]] = st([o[s], i[s], d[s]], u, t);
						return l
					},
					_computeAngle: function(e) {
						var t = this,
							n = this.getMeta().count,
							a = t.getDataset(),
							s = t.getMeta();
						if (isNaN(a.data[e]) || s.data[e].hidden) return 0;
						var r = {
							chart: t.chart,
							dataIndex: e,
							dataset: a,
							datasetIndex: t.index
						};
						return st([t.chart.options.elements.arc.angle, 2 * Math.PI / n], r, e)
					}
				});
				oe._set("pie", ue.clone(oe.doughnut)), oe._set("pie", {
					cutoutPercentage: 0
				});
				var it = $e,
					ot = ue.valueOrDefault,
					dt = ue.options.resolve;
				oe._set("radar", {
					scale: {
						type: "radialLinear"
					},
					elements: {
						line: {
							tension: 0
						}
					}
				});
				var lt = ke.extend({
					datasetElementType: Ie.Line,
					dataElementType: Ie.Point,
					linkScales: ue.noop,
					update: function(e) {
						var t, n, a = this,
							s = a.getMeta(),
							r = s.dataset,
							i = s.data || [],
							o = a.chart.scale,
							d = a.getDataset();
						for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), r._scale = o, r._datasetIndex = a.index, r._children = i, r._loop = !0, r._model = a._resolveLineOptions(r), r.pivot(), t = 0, n = i.length; t < n; ++t) a.updateElement(i[t], t, e);
						for (a.updateBezierControlPoints(), t = 0, n = i.length; t < n; ++t) i[t].pivot()
					},
					updateElement: function(e, t, n) {
						var a = this,
							s = e.custom || {},
							r = a.getDataset(),
							i = a.chart.scale,
							o = i.getPointPositionForValue(t, r.data[t]),
							d = a._resolvePointOptions(e, t),
							l = a.getMeta().dataset._model,
							u = n ? i.xCenter : o.x,
							m = n ? i.yCenter : o.y;
						e._scale = i, e._options = d, e._datasetIndex = a.index, e._index = t, e._model = {
							x: u,
							y: m,
							skip: s.skip || isNaN(u) || isNaN(m),
							radius: d.radius,
							pointStyle: d.pointStyle,
							rotation: d.rotation,
							backgroundColor: d.backgroundColor,
							borderColor: d.borderColor,
							borderWidth: d.borderWidth,
							tension: ot(s.tension, l ? l.tension : 0),
							hitRadius: d.hitRadius
						}
					},
					_resolvePointOptions: function(e, t) {
						var n, a, s, r = this.chart,
							i = r.data.datasets[this.index],
							o = e.custom || {},
							d = r.options.elements.point,
							l = {},
							u = {
								chart: r,
								dataIndex: t,
								dataset: i,
								datasetIndex: this.index
							},
							m = {
								backgroundColor: "pointBackgroundColor",
								borderColor: "pointBorderColor",
								borderWidth: "pointBorderWidth",
								hitRadius: "pointHitRadius",
								hoverBackgroundColor: "pointHoverBackgroundColor",
								hoverBorderColor: "pointHoverBorderColor",
								hoverBorderWidth: "pointHoverBorderWidth",
								hoverRadius: "pointHoverRadius",
								pointStyle: "pointStyle",
								radius: "pointRadius",
								rotation: "pointRotation"
							},
							_ = Object.keys(m);
						for (n = 0, a = _.length; n < a; ++n) l[s = _[n]] = dt([o[s], i[m[s]], i[s], d[s]], u, t);
						return l
					},
					_resolveLineOptions: function(e) {
						var t, n, a, s = this.chart,
							r = s.data.datasets[this.index],
							i = e.custom || {},
							o = s.options.elements.line,
							d = {},
							l = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
						for (t = 0, n = l.length; t < n; ++t) d[a = l[t]] = dt([i[a], r[a], o[a]]);
						return d.tension = ot(r.lineTension, o.tension), d
					},
					updateBezierControlPoints: function() {
						var e, t, n, a, s = this.getMeta(),
							r = this.chart.chartArea,
							i = s.data || [];

						function o(e, t, n) {
							return Math.max(Math.min(e, n), t)
						}
						for (e = 0, t = i.length; e < t; ++e) n = i[e]._model, a = ue.splineCurve(ue.previousItem(i, e, !0)._model, n, ue.nextItem(i, e, !0)._model, n.tension), n.controlPointPreviousX = o(a.previous.x, r.left, r.right), n.controlPointPreviousY = o(a.previous.y, r.top, r.bottom), n.controlPointNextX = o(a.next.x, r.left, r.right), n.controlPointNextY = o(a.next.y, r.top, r.bottom)
					},
					setHoverStyle: function(e) {
						var t = e._model,
							n = e._options,
							a = ue.getHoverColor;
						e.$previousStyle = {
							backgroundColor: t.backgroundColor,
							borderColor: t.borderColor,
							borderWidth: t.borderWidth,
							radius: t.radius
						}, t.backgroundColor = ot(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = ot(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = ot(n.hoverBorderWidth, n.borderWidth), t.radius = ot(n.hoverRadius, n.radius)
					}
				});
				oe._set("scatter", {
					hover: {
						mode: "single"
					},
					scales: {
						xAxes: [{
							id: "x-axis-1",
							type: "linear",
							position: "bottom"
						}],
						yAxes: [{
							id: "y-axis-1",
							type: "linear",
							position: "left"
						}]
					},
					showLines: !1,
					tooltips: {
						callbacks: {
							title: function() {
								return ""
							},
							label: function(e) {
								return "(" + e.xLabel + ", " + e.yLabel + ")"
							}
						}
					}
				});
				var ut = {
					bar: Je,
					bubble: qe,
					doughnut: $e,
					horizontalBar: Xe,
					line: at,
					polarArea: rt,
					pie: it,
					radar: lt,
					scatter: at
				};

				function mt(e, t) {
					return e.native ? {
						x: e.x,
						y: e.y
					} : ue.getRelativePosition(e, t)
				}

				function _t(e, t) {
					var n, a, s, r, i;
					for (a = 0, r = e.data.datasets.length; a < r; ++a)
						if (e.isDatasetVisible(a))
							for (s = 0, i = (n = e.getDatasetMeta(a)).data.length; s < i; ++s) {
								var o = n.data[s];
								o._view.skip || t(o)
							}
				}

				function ht(e, t) {
					var n = [];
					return _t(e, (function(e) {
						e.inRange(t.x, t.y) && n.push(e)
					})), n
				}

				function ct(e, t, n, a) {
					var s = Number.POSITIVE_INFINITY,
						r = [];
					return _t(e, (function(e) {
						if (!n || e.inRange(t.x, t.y)) {
							var i = e.getCenterPoint(),
								o = a(t, i);
							o < s ? (r = [e], s = o) : o === s && r.push(e)
						}
					})), r
				}

				function ft(e) {
					var t = -1 !== e.indexOf("x"),
						n = -1 !== e.indexOf("y");
					return function(e, a) {
						var s = t ? Math.abs(e.x - a.x) : 0,
							r = n ? Math.abs(e.y - a.y) : 0;
						return Math.sqrt(Math.pow(s, 2) + Math.pow(r, 2))
					}
				}

				function pt(e, t, n) {
					var a = mt(t, e);
					n.axis = n.axis || "x";
					var s = ft(n.axis),
						r = n.intersect ? ht(e, a) : ct(e, a, !1, s),
						i = [];
					return r.length ? (e.data.datasets.forEach((function(t, n) {
						if (e.isDatasetVisible(n)) {
							var a = e.getDatasetMeta(n).data[r[0]._index];
							a && !a._view.skip && i.push(a)
						}
					})), i) : []
				}
				var Mt = {
					modes: {
						single: function(e, t) {
							var n = mt(t, e),
								a = [];
							return _t(e, (function(e) {
								if (e.inRange(n.x, n.y)) return a.push(e), a
							})), a.slice(0, 1)
						},
						label: pt,
						index: pt,
						dataset: function(e, t, n) {
							var a = mt(t, e);
							n.axis = n.axis || "xy";
							var s = ft(n.axis),
								r = n.intersect ? ht(e, a) : ct(e, a, !1, s);
							return r.length > 0 && (r = e.getDatasetMeta(r[0]._datasetIndex).data), r
						},
						"x-axis": function(e, t) {
							return pt(e, t, {
								intersect: !1
							})
						},
						point: function(e, t) {
							return ht(e, mt(t, e))
						},
						nearest: function(e, t, n) {
							var a = mt(t, e);
							n.axis = n.axis || "xy";
							var s = ft(n.axis);
							return ct(e, a, n.intersect, s)
						},
						x: function(e, t, n) {
							var a = mt(t, e),
								s = [],
								r = !1;
							return _t(e, (function(e) {
								e.inXRange(a.x) && s.push(e), e.inRange(a.x, a.y) && (r = !0)
							})), n.intersect && !r && (s = []), s
						},
						y: function(e, t, n) {
							var a = mt(t, e),
								s = [],
								r = !1;
							return _t(e, (function(e) {
								e.inYRange(a.y) && s.push(e), e.inRange(a.x, a.y) && (r = !0)
							})), n.intersect && !r && (s = []), s
						}
					}
				};

				function yt(e, t) {
					return ue.where(e, (function(e) {
						return e.position === t
					}))
				}

				function gt(e, t) {
					e.forEach((function(e, t) {
						return e._tmpIndex_ = t, e
					})), e.sort((function(e, n) {
						var a = t ? n : e,
							s = t ? e : n;
						return a.weight === s.weight ? a._tmpIndex_ - s._tmpIndex_ : a.weight - s.weight
					})), e.forEach((function(e) {
						delete e._tmpIndex_
					}))
				}

				function Lt(e, t) {
					ue.each(e, (function(e) {
						t[e.position] += e.isHorizontal() ? e.height : e.width
					}))
				}
				oe._set("global", {
					layout: {
						padding: {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}
					}
				});
				var Yt, vt = {
						defaults: {},
						addBox: function(e, t) {
							e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
						},
						removeBox: function(e, t) {
							var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
						},
						configure: function(e, t, n) {
							for (var a, s = ["fullWidth", "position", "weight"], r = s.length, i = 0; i < r; ++i) a = s[i], n.hasOwnProperty(a) && (t[a] = n[a])
						},
						update: function(e, t, n) {
							if (e) {
								var a = e.options.layout || {},
									s = ue.options.toPadding(a.padding),
									r = s.left,
									i = s.right,
									o = s.top,
									d = s.bottom,
									l = yt(e.boxes, "left"),
									u = yt(e.boxes, "right"),
									m = yt(e.boxes, "top"),
									_ = yt(e.boxes, "bottom"),
									h = yt(e.boxes, "chartArea");
								gt(l, !0), gt(u, !1), gt(m, !0), gt(_, !1);
								var c, f = l.concat(u),
									p = m.concat(_),
									M = f.concat(p),
									y = t - r - i,
									g = n - o - d,
									L = (t - y / 2) / f.length,
									Y = y,
									v = g,
									k = {
										top: o,
										left: r,
										bottom: d,
										right: i
									},
									b = [];
								ue.each(M, (function(e) {
									var t, n = e.isHorizontal();
									n ? (t = e.update(e.fullWidth ? y : Y, g / 2), v -= t.height) : (t = e.update(L, v), Y -= t.width), b.push({
										horizontal: n,
										width: t.width,
										box: e
									})
								})), c = function(e) {
									var t = 0,
										n = 0,
										a = 0,
										s = 0;
									return ue.each(e, (function(e) {
										if (e.getPadding) {
											var r = e.getPadding();
											t = Math.max(t, r.top), n = Math.max(n, r.left), a = Math.max(a, r.bottom), s = Math.max(s, r.right)
										}
									})), {
										top: t,
										left: n,
										bottom: a,
										right: s
									}
								}(M), ue.each(f, H), Lt(f, k), ue.each(p, H), Lt(p, k), ue.each(f, (function(e) {
									var t = ue.findNextWhere(b, (function(t) {
											return t.box === e
										})),
										n = {
											left: 0,
											right: 0,
											top: k.top,
											bottom: k.bottom
										};
									t && e.update(t.width, v, n)
								})), Lt(M, k = {
									top: o,
									left: r,
									bottom: d,
									right: i
								});
								var D = Math.max(c.left - k.left, 0);
								k.left += D, k.right += Math.max(c.right - k.right, 0);
								var w = Math.max(c.top - k.top, 0);
								k.top += w, k.bottom += Math.max(c.bottom - k.bottom, 0);
								var T = n - k.top - k.bottom,
									x = t - k.left - k.right;
								x === Y && T === v || (ue.each(f, (function(e) {
									e.height = T
								})), ue.each(p, (function(e) {
									e.fullWidth || (e.width = x)
								})), v = T, Y = x);
								var S = r + D,
									j = o + w;
								ue.each(l.concat(m), P), S += Y, j += v, ue.each(u, P), ue.each(_, P), e.chartArea = {
									left: k.left,
									top: k.top,
									right: k.left + Y,
									bottom: k.top + v
								}, ue.each(h, (function(t) {
									t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(Y, v)
								}))
							}

							function H(e) {
								var t = ue.findNextWhere(b, (function(t) {
									return t.box === e
								}));
								if (t)
									if (t.horizontal) {
										var n = {
											left: Math.max(k.left, c.left),
											right: Math.max(k.right, c.right),
											top: 0,
											bottom: 0
										};
										e.update(e.fullWidth ? y : Y, g / 2, n)
									} else e.update(t.width, v)
							}

							function P(e) {
								e.isHorizontal() ? (e.left = e.fullWidth ? r : k.left, e.right = e.fullWidth ? t - i : k.left + Y, e.top = j, e.bottom = j + e.height, j = e.bottom) : (e.left = S, e.right = S + e.width, e.top = k.top, e.bottom = k.top + v, S = e.right)
							}
						}
					},
					kt = (Yt = Object.freeze({
						default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
					})) && Yt.default || Yt,
					bt = "$chartjs",
					Dt = "chartjs-size-monitor",
					wt = "chartjs-render-monitor",
					Tt = "chartjs-render-animation",
					xt = ["animationstart", "webkitAnimationStart"],
					St = {
						touchstart: "mousedown",
						touchmove: "mousemove",
						touchend: "mouseup",
						pointerenter: "mouseenter",
						pointerdown: "mousedown",
						pointermove: "mousemove",
						pointerup: "mouseup",
						pointerleave: "mouseout",
						pointerout: "mouseout"
					};

				function jt(e, t) {
					var n = ue.getStyle(e, t),
						a = n && n.match(/^(\d+)(\.\d+)?px$/);
					return a ? Number(a[1]) : void 0
				}
				var Ht = !! function() {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function() {
								e = !0
							}
						});
						window.addEventListener("e", null, t)
					} catch (n) {}
					return e
				}() && {
					passive: !0
				};

				function Pt(e, t, n) {
					e.addEventListener(t, n, Ht)
				}

				function Ot(e, t, n) {
					e.removeEventListener(t, n, Ht)
				}

				function At(e, t, n, a, s) {
					return {
						type: e,
						chart: t,
						native: s || null,
						x: void 0 !== n ? n : null,
						y: void 0 !== a ? a : null
					}
				}

				function Wt(e) {
					var t = document.createElement("div");
					return t.className = e || "", t
				}

				function Ft(e, t, n) {
					var a, s, r, i, o = e[bt] || (e[bt] = {}),
						d = o.resizer = function(e) {
							var t = Wt(Dt),
								n = Wt(Dt + "-expand"),
								a = Wt(Dt + "-shrink");
							n.appendChild(Wt()), a.appendChild(Wt()), t.appendChild(n), t.appendChild(a), t._reset = function() {
								n.scrollLeft = 1e6, n.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6
							};
							var s = function() {
								t._reset(), e()
							};
							return Pt(n, "scroll", s.bind(n, "expand")), Pt(a, "scroll", s.bind(a, "shrink")), t
						}((a = function() {
							if (o.resizer) {
								var a = n.options.maintainAspectRatio && e.parentNode,
									s = a ? a.clientWidth : 0;
								t(At("resize", n)), a && a.clientWidth < s && n.canvas && t(At("resize", n))
							}
						}, r = !1, i = [], function() {
							i = Array.prototype.slice.call(arguments), s = s || this, r || (r = !0, ue.requestAnimFrame.call(window, (function() {
								r = !1, a.apply(s, i)
							})))
						}));
					! function(e, t) {
						var n = e[bt] || (e[bt] = {}),
							a = n.renderProxy = function(e) {
								e.animationName === Tt && t()
							};
						ue.each(xt, (function(t) {
							Pt(e, t, a)
						})), n.reflow = !!e.offsetParent, e.classList.add(wt)
					}(e, (function() {
						if (o.resizer) {
							var t = e.parentNode;
							t && t !== d.parentNode && t.insertBefore(d, t.firstChild), d._reset()
						}
					}))
				}

				function Ct(e) {
					var t = e[bt] || {},
						n = t.resizer;
					delete t.resizer,
						function(e) {
							var t = e[bt] || {},
								n = t.renderProxy;
							n && (ue.each(xt, (function(t) {
								Ot(e, t, n)
							})), delete t.renderProxy), e.classList.remove(wt)
						}(e), n && n.parentNode && n.parentNode.removeChild(n)
				}
				var Et = {
					disableCSSInjection: !1,
					_enabled: "undefined" != typeof window && "undefined" != typeof document,
					_ensureLoaded: function() {
						this._loaded || (this._loaded = !0, this.disableCSSInjection || function(e, t) {
							var n = e._style || document.createElement("style");
							e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
						}(this, kt))
					},
					acquireContext: function(e, t) {
						"string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
						var n = e && e.getContext && e.getContext("2d");
						return this._ensureLoaded(), n && n.canvas === e ? (function(e, t) {
							var n = e.style,
								a = e.getAttribute("height"),
								s = e.getAttribute("width");
							if (e[bt] = {
									initial: {
										height: a,
										width: s,
										style: {
											display: n.display,
											height: n.height,
											width: n.width
										}
									}
								}, n.display = n.display || "block", null === s || "" === s) {
								var r = jt(e, "width");
								void 0 !== r && (e.width = r)
							}
							if (null === a || "" === a)
								if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
								else {
									var i = jt(e, "height");
									void 0 !== r && (e.height = i)
								}
						}(e, t), n) : null
					},
					releaseContext: function(e) {
						var t = e.canvas;
						if (t[bt]) {
							var n = t[bt].initial;
							["height", "width"].forEach((function(e) {
								var a = n[e];
								ue.isNullOrUndef(a) ? t.removeAttribute(e) : t.setAttribute(e, a)
							})), ue.each(n.style || {}, (function(e, n) {
								t.style[n] = e
							})), t.width = t.width, delete t[bt]
						}
					},
					addEventListener: function(e, t, n) {
						var a = e.canvas;
						if ("resize" !== t) {
							var s = n[bt] || (n[bt] = {});
							Pt(a, t, (s.proxies || (s.proxies = {}))[e.id + "_" + t] = function(t) {
								n(function(e, t) {
									var n = St[e.type] || e.type,
										a = ue.getRelativePosition(e, t);
									return At(n, t, a.x, a.y, e)
								}(t, e))
							})
						} else Ft(a, n, e)
					},
					removeEventListener: function(e, t, n) {
						var a = e.canvas;
						if ("resize" !== t) {
							var s = ((n[bt] || {}).proxies || {})[e.id + "_" + t];
							s && Ot(a, t, s)
						} else Ct(a)
					}
				};
				ue.addEvent = Pt, ue.removeEvent = Ot;
				var It = Et._enabled ? Et : {
						acquireContext: function(e) {
							return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
						}
					},
					zt = ue.extend({
						initialize: function() {},
						acquireContext: function() {},
						releaseContext: function() {},
						addEventListener: function() {},
						removeEventListener: function() {}
					}, It);
				oe._set("global", {
					plugins: {}
				});
				var Rt = {
						_plugins: [],
						_cacheId: 0,
						register: function(e) {
							var t = this._plugins;
							[].concat(e).forEach((function(e) {
								-1 === t.indexOf(e) && t.push(e)
							})), this._cacheId++
						},
						unregister: function(e) {
							var t = this._plugins;
							[].concat(e).forEach((function(e) {
								var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
							})), this._cacheId++
						},
						clear: function() {
							this._plugins = [], this._cacheId++
						},
						count: function() {
							return this._plugins.length
						},
						getAll: function() {
							return this._plugins
						},
						notify: function(e, t, n) {
							var a, s, r, i, o, d = this.descriptors(e),
								l = d.length;
							for (a = 0; a < l; ++a)
								if ("function" == typeof(o = (r = (s = d[a]).plugin)[t]) && ((i = [e].concat(n || [])).push(s.options), !1 === o.apply(r, i))) return !1;
							return !0
						},
						descriptors: function(e) {
							var t = e.$plugins || (e.$plugins = {});
							if (t.id === this._cacheId) return t.descriptors;
							var n = [],
								a = [],
								s = e && e.config || {},
								r = s.options && s.options.plugins || {};
							return this._plugins.concat(s.plugins || []).forEach((function(e) {
								if (-1 === n.indexOf(e)) {
									var t = e.id,
										s = r[t];
									!1 !== s && (!0 === s && (s = ue.clone(oe.global.plugins[t])), n.push(e), a.push({
										plugin: e,
										options: s || {}
									}))
								}
							})), t.descriptors = a, t.id = this._cacheId, a
						},
						_invalidate: function(e) {
							delete e.$plugins
						}
					},
					Nt = {
						constructors: {},
						defaults: {},
						registerScaleType: function(e, t, n) {
							this.constructors[e] = t, this.defaults[e] = ue.clone(n)
						},
						getScaleConstructor: function(e) {
							return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
						},
						getScaleDefaults: function(e) {
							return this.defaults.hasOwnProperty(e) ? ue.merge({}, [oe.scale, this.defaults[e]]) : {}
						},
						updateScaleDefaults: function(e, t) {
							this.defaults.hasOwnProperty(e) && (this.defaults[e] = ue.extend(this.defaults[e], t))
						},
						addScalesToLayout: function(e) {
							ue.each(e.scales, (function(t) {
								t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, vt.addBox(e, t)
							}))
						}
					},
					Vt = ue.valueOrDefault;
				oe._set("global", {
					tooltips: {
						enabled: !0,
						custom: null,
						mode: "nearest",
						position: "average",
						intersect: !0,
						backgroundColor: "rgba(0,0,0,0.8)",
						titleFontStyle: "bold",
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleFontColor: "#fff",
						titleAlign: "left",
						bodySpacing: 2,
						bodyFontColor: "#fff",
						bodyAlign: "left",
						footerFontStyle: "bold",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFontColor: "#fff",
						footerAlign: "left",
						yPadding: 6,
						xPadding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						multiKeyBackground: "#fff",
						displayColors: !0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						callbacks: {
							beforeTitle: ue.noop,
							title: function(e, t) {
								var n = "",
									a = t.labels,
									s = a ? a.length : 0;
								if (e.length > 0) {
									var r = e[0];
									r.label ? n = r.label : r.xLabel ? n = r.xLabel : s > 0 && r.index < s && (n = a[r.index])
								}
								return n
							},
							afterTitle: ue.noop,
							beforeBody: ue.noop,
							beforeLabel: ue.noop,
							label: function(e, t) {
								var n = t.datasets[e.datasetIndex].label || "";
								return n && (n += ": "), ue.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n
							},
							labelColor: function(e, t) {
								var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
								return {
									borderColor: n.borderColor,
									backgroundColor: n.backgroundColor
								}
							},
							labelTextColor: function() {
								return this._options.bodyFontColor
							},
							afterLabel: ue.noop,
							afterBody: ue.noop,
							beforeFooter: ue.noop,
							footer: ue.noop,
							afterFooter: ue.noop
						}
					}
				});
				var Bt = {
					average: function(e) {
						if (!e.length) return !1;
						var t, n, a = 0,
							s = 0,
							r = 0;
						for (t = 0, n = e.length; t < n; ++t) {
							var i = e[t];
							if (i && i.hasValue()) {
								var o = i.tooltipPosition();
								a += o.x, s += o.y, ++r
							}
						}
						return {
							x: a / r,
							y: s / r
						}
					},
					nearest: function(e, t) {
						var n, a, s, r = t.x,
							i = t.y,
							o = Number.POSITIVE_INFINITY;
						for (n = 0, a = e.length; n < a; ++n) {
							var d = e[n];
							if (d && d.hasValue()) {
								var l = d.getCenterPoint(),
									u = ue.distanceBetweenPoints(t, l);
								u < o && (o = u, s = d)
							}
						}
						if (s) {
							var m = s.tooltipPosition();
							r = m.x, i = m.y
						}
						return {
							x: r,
							y: i
						}
					}
				};

				function Jt(e, t) {
					return t && (ue.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
				}

				function Ut(e) {
					return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
				}

				function Gt(e) {
					var t = oe.global;
					return {
						xPadding: e.xPadding,
						yPadding: e.yPadding,
						xAlign: e.xAlign,
						yAlign: e.yAlign,
						bodyFontColor: e.bodyFontColor,
						_bodyFontFamily: Vt(e.bodyFontFamily, t.defaultFontFamily),
						_bodyFontStyle: Vt(e.bodyFontStyle, t.defaultFontStyle),
						_bodyAlign: e.bodyAlign,
						bodyFontSize: Vt(e.bodyFontSize, t.defaultFontSize),
						bodySpacing: e.bodySpacing,
						titleFontColor: e.titleFontColor,
						_titleFontFamily: Vt(e.titleFontFamily, t.defaultFontFamily),
						_titleFontStyle: Vt(e.titleFontStyle, t.defaultFontStyle),
						titleFontSize: Vt(e.titleFontSize, t.defaultFontSize),
						_titleAlign: e.titleAlign,
						titleSpacing: e.titleSpacing,
						titleMarginBottom: e.titleMarginBottom,
						footerFontColor: e.footerFontColor,
						_footerFontFamily: Vt(e.footerFontFamily, t.defaultFontFamily),
						_footerFontStyle: Vt(e.footerFontStyle, t.defaultFontStyle),
						footerFontSize: Vt(e.footerFontSize, t.defaultFontSize),
						_footerAlign: e.footerAlign,
						footerSpacing: e.footerSpacing,
						footerMarginTop: e.footerMarginTop,
						caretSize: e.caretSize,
						cornerRadius: e.cornerRadius,
						backgroundColor: e.backgroundColor,
						opacity: 0,
						legendColorBackground: e.multiKeyBackground,
						displayColors: e.displayColors,
						borderColor: e.borderColor,
						borderWidth: e.borderWidth
					}
				}

				function qt(e, t) {
					return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding
				}

				function Kt(e) {
					return Jt([], Ut(e))
				}
				var Zt = fe.extend({
						initialize: function() {
							this._model = Gt(this._options), this._lastActive = []
						},
						getTitle: function() {
							var e = this,
								t = e._options,
								n = t.callbacks,
								a = n.beforeTitle.apply(e, arguments),
								s = n.title.apply(e, arguments),
								r = n.afterTitle.apply(e, arguments),
								i = [];
							return i = Jt(i, Ut(a)), i = Jt(i, Ut(s)), i = Jt(i, Ut(r))
						},
						getBeforeBody: function() {
							return Kt(this._options.callbacks.beforeBody.apply(this, arguments))
						},
						getBody: function(e, t) {
							var n = this,
								a = n._options.callbacks,
								s = [];
							return ue.each(e, (function(e) {
								var r = {
									before: [],
									lines: [],
									after: []
								};
								Jt(r.before, Ut(a.beforeLabel.call(n, e, t))), Jt(r.lines, a.label.call(n, e, t)), Jt(r.after, Ut(a.afterLabel.call(n, e, t))), s.push(r)
							})), s
						},
						getAfterBody: function() {
							return Kt(this._options.callbacks.afterBody.apply(this, arguments))
						},
						getFooter: function() {
							var e = this,
								t = e._options.callbacks,
								n = t.beforeFooter.apply(e, arguments),
								a = t.footer.apply(e, arguments),
								s = t.afterFooter.apply(e, arguments),
								r = [];
							return r = Jt(r, Ut(n)), r = Jt(r, Ut(a)), r = Jt(r, Ut(s))
						},
						update: function(e) {
							var t, n, a, s, r, i, o, d, l, u, m = this,
								_ = m._options,
								h = m._model,
								c = m._model = Gt(_),
								f = m._active,
								p = m._data,
								M = {
									xAlign: h.xAlign,
									yAlign: h.yAlign
								},
								y = {
									x: h.x,
									y: h.y
								},
								g = {
									width: h.width,
									height: h.height
								},
								L = {
									x: h.caretX,
									y: h.caretY
								};
							if (f.length) {
								c.opacity = 1;
								var Y = [],
									v = [];
								L = Bt[_.position].call(m, f, m._eventPosition);
								var k = [];
								for (t = 0, n = f.length; t < n; ++t) k.push((a = f[t], s = void 0, r = void 0, i = void 0, o = void 0, d = void 0, l = void 0, u = void 0, s = a._xScale, r = a._yScale || a._scale, i = a._index, o = a._datasetIndex, d = a._chart.getDatasetMeta(o).controller, l = d._getIndexScale(), u = d._getValueScale(), {
									xLabel: s ? s.getLabelForIndex(i, o) : "",
									yLabel: r ? r.getLabelForIndex(i, o) : "",
									label: l ? "" + l.getLabelForIndex(i, o) : "",
									value: u ? "" + u.getLabelForIndex(i, o) : "",
									index: i,
									datasetIndex: o,
									x: a._model.x,
									y: a._model.y
								}));
								_.filter && (k = k.filter((function(e) {
									return _.filter(e, p)
								}))), _.itemSort && (k = k.sort((function(e, t) {
									return _.itemSort(e, t, p)
								}))), ue.each(k, (function(e) {
									Y.push(_.callbacks.labelColor.call(m, e, m._chart)), v.push(_.callbacks.labelTextColor.call(m, e, m._chart))
								})), c.title = m.getTitle(k, p), c.beforeBody = m.getBeforeBody(k, p), c.body = m.getBody(k, p), c.afterBody = m.getAfterBody(k, p), c.footer = m.getFooter(k, p), c.x = L.x, c.y = L.y, c.caretPadding = _.caretPadding, c.labelColors = Y, c.labelTextColors = v, c.dataPoints = k, g = function(e, t) {
									var n = e._chart.ctx,
										a = 2 * t.yPadding,
										s = 0,
										r = t.body,
										i = r.reduce((function(e, t) {
											return e + t.before.length + t.lines.length + t.after.length
										}), 0);
									i += t.beforeBody.length + t.afterBody.length;
									var o = t.title.length,
										d = t.footer.length,
										l = t.titleFontSize,
										u = t.bodyFontSize,
										m = t.footerFontSize;
									a += o * l, a += o ? (o - 1) * t.titleSpacing : 0, a += o ? t.titleMarginBottom : 0, a += i * u, a += i ? (i - 1) * t.bodySpacing : 0, a += d ? t.footerMarginTop : 0, a += d * m, a += d ? (d - 1) * t.footerSpacing : 0;
									var _ = 0,
										h = function(e) {
											s = Math.max(s, n.measureText(e).width + _)
										};
									return n.font = ue.fontString(l, t._titleFontStyle, t._titleFontFamily), ue.each(t.title, h), n.font = ue.fontString(u, t._bodyFontStyle, t._bodyFontFamily), ue.each(t.beforeBody.concat(t.afterBody), h), _ = t.displayColors ? u + 2 : 0, ue.each(r, (function(e) {
										ue.each(e.before, h), ue.each(e.lines, h), ue.each(e.after, h)
									})), _ = 0, n.font = ue.fontString(m, t._footerFontStyle, t._footerFontFamily), ue.each(t.footer, h), {
										width: s += 2 * t.xPadding,
										height: a
									}
								}(this, c), y = function(e, t, n, a) {
									var s = e.x,
										r = e.y,
										i = e.caretSize,
										o = e.caretPadding,
										d = e.cornerRadius,
										l = n.xAlign,
										u = n.yAlign,
										m = i + o,
										_ = d + o;
									return "right" === l ? s -= t.width : "center" === l && ((s -= t.width / 2) + t.width > a.width && (s = a.width - t.width), s < 0 && (s = 0)), "top" === u ? r += m : r -= "bottom" === u ? t.height + m : t.height / 2, "center" === u ? "left" === l ? s += m : "right" === l && (s -= m) : "left" === l ? s -= _ : "right" === l && (s += _), {
										x: s,
										y: r
									}
								}(c, g, M = function(e, t) {
									var n, a, s, r, i, o = e._model,
										d = e._chart,
										l = e._chart.chartArea,
										u = "center",
										m = "center";
									o.y < t.height ? m = "top" : o.y > d.height - t.height && (m = "bottom");
									var _ = (l.left + l.right) / 2,
										h = (l.top + l.bottom) / 2;
									"center" === m ? (n = function(e) {
										return e <= _
									}, a = function(e) {
										return e > _
									}) : (n = function(e) {
										return e <= t.width / 2
									}, a = function(e) {
										return e >= d.width - t.width / 2
									}), s = function(e) {
										return e + t.width + o.caretSize + o.caretPadding > d.width
									}, r = function(e) {
										return e - t.width - o.caretSize - o.caretPadding < 0
									}, i = function(e) {
										return e <= h ? "top" : "bottom"
									}, n(o.x) ? (u = "left", s(o.x) && (u = "center", m = i(o.y))) : a(o.x) && (u = "right", r(o.x) && (u = "center", m = i(o.y)));
									var c = e._options;
									return {
										xAlign: c.xAlign ? c.xAlign : u,
										yAlign: c.yAlign ? c.yAlign : m
									}
								}(this, g), m._chart)
							} else c.opacity = 0;
							return c.xAlign = M.xAlign, c.yAlign = M.yAlign, c.x = y.x, c.y = y.y, c.width = g.width, c.height = g.height, c.caretX = L.x, c.caretY = L.y, m._model = c, e && _.custom && _.custom.call(m, c), m
						},
						drawCaret: function(e, t) {
							var n = this._chart.ctx,
								a = this._view,
								s = this.getCaretPosition(e, t, a);
							n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3)
						},
						getCaretPosition: function(e, t, n) {
							var a, s, r, i, o, d, l = n.caretSize,
								u = n.cornerRadius,
								m = n.xAlign,
								_ = n.yAlign,
								h = e.x,
								c = e.y,
								f = t.width,
								p = t.height;
							if ("center" === _) o = c + p / 2, "left" === m ? (s = (a = h) - l, r = a, i = o + l, d = o - l) : (s = (a = h + f) + l, r = a, i = o - l, d = o + l);
							else if ("left" === m ? (a = (s = h + u + l) - l, r = s + l) : "right" === m ? (a = (s = h + f - u - l) - l, r = s + l) : (a = (s = n.caretX) - l, r = s + l), "top" === _) o = (i = c) - l, d = i;
							else {
								o = (i = c + p) + l, d = i;
								var M = r;
								r = a, a = M
							}
							return {
								x1: a,
								x2: s,
								x3: r,
								y1: i,
								y2: o,
								y3: d
							}
						},
						drawTitle: function(e, t, n) {
							var a = t.title;
							if (a.length) {
								e.x = qt(t, t._titleAlign), n.textAlign = t._titleAlign, n.textBaseline = "top";
								var s, r, i = t.titleFontSize,
									o = t.titleSpacing;
								for (n.fillStyle = t.titleFontColor, n.font = ue.fontString(i, t._titleFontStyle, t._titleFontFamily), s = 0, r = a.length; s < r; ++s) n.fillText(a[s], e.x, e.y), e.y += i + o, s + 1 === a.length && (e.y += t.titleMarginBottom - o)
							}
						},
						drawBody: function(e, t, n) {
							var a, s = t.bodyFontSize,
								r = t.bodySpacing,
								i = t._bodyAlign,
								o = t.body,
								d = t.displayColors,
								l = t.labelColors,
								u = 0,
								m = d ? qt(t, "left") : 0;
							n.textAlign = i, n.textBaseline = "top", n.font = ue.fontString(s, t._bodyFontStyle, t._bodyFontFamily), e.x = qt(t, i);
							var _ = function(t) {
								n.fillText(t, e.x + u, e.y), e.y += s + r
							};
							n.fillStyle = t.bodyFontColor, ue.each(t.beforeBody, _), u = d && "right" !== i ? "center" === i ? s / 2 + 1 : s + 2 : 0, ue.each(o, (function(r, i) {
								a = t.labelTextColors[i], n.fillStyle = a, ue.each(r.before, _), ue.each(r.lines, (function(r) {
									d && (n.fillStyle = t.legendColorBackground, n.fillRect(m, e.y, s, s), n.lineWidth = 1, n.strokeStyle = l[i].borderColor, n.strokeRect(m, e.y, s, s), n.fillStyle = l[i].backgroundColor, n.fillRect(m + 1, e.y + 1, s - 2, s - 2), n.fillStyle = a), _(r)
								})), ue.each(r.after, _)
							})), u = 0, ue.each(t.afterBody, _), e.y -= r
						},
						drawFooter: function(e, t, n) {
							var a = t.footer;
							a.length && (e.x = qt(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = t.footerFontColor, n.font = ue.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), ue.each(a, (function(a) {
								n.fillText(a, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing
							})))
						},
						drawBackground: function(e, t, n, a) {
							n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth;
							var s = t.xAlign,
								r = t.yAlign,
								i = e.x,
								o = e.y,
								d = a.width,
								l = a.height,
								u = t.cornerRadius;
							n.beginPath(), n.moveTo(i + u, o), "top" === r && this.drawCaret(e, a), n.lineTo(i + d - u, o), n.quadraticCurveTo(i + d, o, i + d, o + u), "center" === r && "right" === s && this.drawCaret(e, a), n.lineTo(i + d, o + l - u), n.quadraticCurveTo(i + d, o + l, i + d - u, o + l), "bottom" === r && this.drawCaret(e, a), n.lineTo(i + u, o + l), n.quadraticCurveTo(i, o + l, i, o + l - u), "center" === r && "left" === s && this.drawCaret(e, a), n.lineTo(i, o + u), n.quadraticCurveTo(i, o, i + u, o), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
						},
						draw: function() {
							var e = this._chart.ctx,
								t = this._view;
							if (0 !== t.opacity) {
								var n = {
										width: t.width,
										height: t.height
									},
									a = {
										x: t.x,
										y: t.y
									},
									s = Math.abs(t.opacity < .001) ? 0 : t.opacity,
									r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
								this._options.enabled && r && (e.save(), e.globalAlpha = s, this.drawBackground(a, t, e, n), a.y += t.yPadding, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), e.restore())
							}
						},
						handleEvent: function(e) {
							var t, n = this,
								a = n._options;
							return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(e, a.mode, a), (t = !ue.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (a.enabled || a.custom) && (n._eventPosition = {
								x: e.x,
								y: e.y
							}, n.update(!0), n.pivot())), t
						}
					}),
					$t = Bt,
					Xt = Zt;
				Xt.positioners = $t;
				var Qt = ue.valueOrDefault;

				function en() {
					return ue.merge({}, [].slice.call(arguments), {
						merger: function(e, t, n, a) {
							if ("xAxes" === e || "yAxes" === e) {
								var s, r, i, o = n[e].length;
								for (t[e] || (t[e] = []), s = 0; s < o; ++s) i = n[e][s], r = Qt(i.type, "xAxes" === e ? "category" : "linear"), s >= t[e].length && t[e].push({}), !t[e][s].type || i.type && i.type !== t[e][s].type ? ue.merge(t[e][s], [Nt.getScaleDefaults(r), i]) : ue.merge(t[e][s], i)
							} else ue._merger(e, t, n, a)
						}
					})
				}

				function tn() {
					return ue.merge({}, [].slice.call(arguments), {
						merger: function(e, t, n, a) {
							var s = t[e] || {},
								r = n[e];
							"scales" === e ? t[e] = en(s, r) : "scale" === e ? t[e] = ue.merge(s, [Nt.getScaleDefaults(r.type), r]) : ue._merger(e, t, n, a)
						}
					})
				}

				function nn(e) {
					var t = e.options;
					ue.each(e.scales, (function(t) {
						vt.removeBox(e, t)
					})), t = tn(oe.global, oe[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
				}

				function an(e) {
					return "top" === e || "bottom" === e
				}
				oe._set("global", {
					elements: {},
					events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
					hover: {
						onHover: null,
						mode: "nearest",
						intersect: !0,
						animationDuration: 400
					},
					onClick: null,
					maintainAspectRatio: !0,
					responsive: !0,
					responsiveAnimationDuration: 0
				});
				var sn = function(e, t) {
					return this.construct(e, t), this
				};
				ue.extend(sn.prototype, {
					construct: function(e, t) {
						var n = this;
						t = function(e) {
							var t = (e = e || {}).data = e.data || {};
							return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = tn(oe.global, oe[e.type], e.options || {}), e
						}(t);
						var a = zt.acquireContext(e, t),
							s = a && a.canvas,
							r = s && s.height,
							i = s && s.width;
						n.id = ue.uid(), n.ctx = a, n.canvas = s, n.config = t, n.width = i, n.height = r, n.aspectRatio = r ? i / r : null, n.options = t.options, n._bufferedRender = !1, n.chart = n, n.controller = n, sn.instances[n.id] = n, Object.defineProperty(n, "data", {
							get: function() {
								return n.config.data
							},
							set: function(e) {
								n.config.data = e
							}
						}), a && s ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
					},
					initialize: function() {
						var e = this;
						return Rt.notify(e, "beforeInit"), ue.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), Rt.notify(e, "afterInit"), e
					},
					clear: function() {
						return ue.canvas.clear(this), this
					},
					stop: function() {
						return ye.cancelAnimation(this), this
					},
					resize: function(e) {
						var t = this,
							n = t.options,
							a = t.canvas,
							s = n.maintainAspectRatio && t.aspectRatio || null,
							r = Math.max(0, Math.floor(ue.getMaximumWidth(a))),
							i = Math.max(0, Math.floor(s ? r / s : ue.getMaximumHeight(a)));
						if ((t.width !== r || t.height !== i) && (a.width = t.width = r, a.height = t.height = i, a.style.width = r + "px", a.style.height = i + "px", ue.retinaScale(t, n.devicePixelRatio), !e)) {
							var o = {
								width: r,
								height: i
							};
							Rt.notify(t, "resize", [o]), n.onResize && n.onResize(t, o), t.stop(), t.update({
								duration: n.responsiveAnimationDuration
							})
						}
					},
					ensureScalesHaveIDs: function() {
						var e = this.options,
							t = e.scales || {},
							n = e.scale;
						ue.each(t.xAxes, (function(e, t) {
							e.id = e.id || "x-axis-" + t
						})), ue.each(t.yAxes, (function(e, t) {
							e.id = e.id || "y-axis-" + t
						})), n && (n.id = n.id || "scale")
					},
					buildOrUpdateScales: function() {
						var e = this,
							t = e.options,
							n = e.scales || {},
							a = [],
							s = Object.keys(n).reduce((function(e, t) {
								return e[t] = !1, e
							}), {});
						t.scales && (a = a.concat((t.scales.xAxes || []).map((function(e) {
							return {
								options: e,
								dtype: "category",
								dposition: "bottom"
							}
						})), (t.scales.yAxes || []).map((function(e) {
							return {
								options: e,
								dtype: "linear",
								dposition: "left"
							}
						})))), t.scale && a.push({
							options: t.scale,
							dtype: "radialLinear",
							isDefault: !0,
							dposition: "chartArea"
						}), ue.each(a, (function(t) {
							var a = t.options,
								r = a.id,
								i = Qt(a.type, t.dtype);
							an(a.position) !== an(t.dposition) && (a.position = t.dposition), s[r] = !0;
							var o = null;
							if (r in n && n[r].type === i)(o = n[r]).options = a, o.ctx = e.ctx, o.chart = e;
							else {
								var d = Nt.getScaleConstructor(i);
								if (!d) return;
								o = new d({
									id: r,
									type: i,
									options: a,
									ctx: e.ctx,
									chart: e
								}), n[o.id] = o
							}
							o.mergeTicksOptions(), t.isDefault && (e.scale = o)
						})), ue.each(s, (function(e, t) {
							e || delete n[t]
						})), e.scales = n, Nt.addScalesToLayout(this)
					},
					buildOrUpdateControllers: function() {
						var e = this,
							t = [];
						return ue.each(e.data.datasets, (function(n, a) {
							var s = e.getDatasetMeta(a),
								r = n.type || e.config.type;
							if (s.type && s.type !== r && (e.destroyDatasetMeta(a), s = e.getDatasetMeta(a)), s.type = r, s.controller) s.controller.updateIndex(a), s.controller.linkScales();
							else {
								var i = ut[s.type];
								if (void 0 === i) throw new Error('"' + s.type + '" is not a chart type.');
								s.controller = new i(e, a), t.push(s.controller)
							}
						}), e), t
					},
					resetElements: function() {
						var e = this;
						ue.each(e.data.datasets, (function(t, n) {
							e.getDatasetMeta(n).controller.reset()
						}), e)
					},
					reset: function() {
						this.resetElements(), this.tooltip.initialize()
					},
					update: function(e) {
						var t = this;
						if (e && "object" == typeof e || (e = {
								duration: e,
								lazy: arguments[1]
							}), nn(t), Rt._invalidate(t), !1 !== Rt.notify(t, "beforeUpdate")) {
							t.tooltip._data = t.data;
							var n = t.buildOrUpdateControllers();
							ue.each(t.data.datasets, (function(e, n) {
								t.getDatasetMeta(n).controller.buildOrUpdateElements()
							}), t), t.updateLayout(), t.options.animation && t.options.animation.duration && ue.each(n, (function(e) {
								e.reset()
							})), t.updateDatasets(), t.tooltip.initialize(), t.lastActive = [], Rt.notify(t, "afterUpdate"), t._bufferedRender ? t._bufferedRequest = {
								duration: e.duration,
								easing: e.easing,
								lazy: e.lazy
							} : t.render(e)
						}
					},
					updateLayout: function() {
						!1 !== Rt.notify(this, "beforeLayout") && (vt.update(this, this.width, this.height), Rt.notify(this, "afterScaleUpdate"), Rt.notify(this, "afterLayout"))
					},
					updateDatasets: function() {
						if (!1 !== Rt.notify(this, "beforeDatasetsUpdate")) {
							for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
							Rt.notify(this, "afterDatasetsUpdate")
						}
					},
					updateDataset: function(e) {
						var t = this.getDatasetMeta(e),
							n = {
								meta: t,
								index: e
							};
						!1 !== Rt.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), Rt.notify(this, "afterDatasetUpdate", [n]))
					},
					render: function(e) {
						var t = this;
						e && "object" == typeof e || (e = {
							duration: e,
							lazy: arguments[1]
						});
						var n = t.options.animation,
							a = Qt(e.duration, n && n.duration),
							s = e.lazy;
						if (!1 !== Rt.notify(t, "beforeRender")) {
							var r = function(e) {
								Rt.notify(t, "afterRender"), ue.callback(n && n.onComplete, [e], t)
							};
							if (n && a) {
								var i = new Me({
									numSteps: a / 16.66,
									easing: e.easing || n.easing,
									render: function(e, t) {
										var n = ue.easing.effects[t.easing],
											a = t.currentStep,
											s = a / t.numSteps;
										e.draw(n(s), s, a)
									},
									onAnimationProgress: n.onProgress,
									onAnimationComplete: r
								});
								ye.addAnimation(t, i, a, s)
							} else t.draw(), r(new Me({
								numSteps: 0,
								chart: t
							}));
							return t
						}
					},
					draw: function(e) {
						var t = this;
						t.clear(), ue.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== Rt.notify(t, "beforeDraw", [e]) && (ue.each(t.boxes, (function(e) {
							e.draw(t.chartArea)
						}), t), t.drawDatasets(e), t._drawTooltip(e), Rt.notify(t, "afterDraw", [e]))
					},
					transition: function(e) {
						for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
						this.tooltip.transition(e)
					},
					drawDatasets: function(e) {
						var t = this;
						if (!1 !== Rt.notify(t, "beforeDatasetsDraw", [e])) {
							for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
							Rt.notify(t, "afterDatasetsDraw", [e])
						}
					},
					drawDataset: function(e, t) {
						var n = this.getDatasetMeta(e),
							a = {
								meta: n,
								index: e,
								easingValue: t
							};
						!1 !== Rt.notify(this, "beforeDatasetDraw", [a]) && (n.controller.draw(t), Rt.notify(this, "afterDatasetDraw", [a]))
					},
					_drawTooltip: function(e) {
						var t = this.tooltip,
							n = {
								tooltip: t,
								easingValue: e
							};
						!1 !== Rt.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), Rt.notify(this, "afterTooltipDraw", [n]))
					},
					getElementAtEvent: function(e) {
						return Mt.modes.single(this, e)
					},
					getElementsAtEvent: function(e) {
						return Mt.modes.label(this, e, {
							intersect: !0
						})
					},
					getElementsAtXAxis: function(e) {
						return Mt.modes["x-axis"](this, e, {
							intersect: !0
						})
					},
					getElementsAtEventForMode: function(e, t, n) {
						var a = Mt.modes[t];
						return "function" == typeof a ? a(this, e, n) : []
					},
					getDatasetAtEvent: function(e) {
						return Mt.modes.dataset(this, e, {
							intersect: !0
						})
					},
					getDatasetMeta: function(e) {
						var t = this.data.datasets[e];
						t._meta || (t._meta = {});
						var n = t._meta[this.id];
						return n || (n = t._meta[this.id] = {
							type: null,
							data: [],
							dataset: null,
							controller: null,
							hidden: null,
							xAxisID: null,
							yAxisID: null
						}), n
					},
					getVisibleDatasetCount: function() {
						for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
						return e
					},
					isDatasetVisible: function(e) {
						var t = this.getDatasetMeta(e);
						return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
					},
					generateLegend: function() {
						return this.options.legendCallback(this)
					},
					destroyDatasetMeta: function(e) {
						var t = this.id,
							n = this.data.datasets[e],
							a = n._meta && n._meta[t];
						a && (a.controller.destroy(), delete n._meta[t])
					},
					destroy: function() {
						var e, t, n = this,
							a = n.canvas;
						for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
						a && (n.unbindEvents(), ue.canvas.clear(n), zt.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Rt.notify(n, "destroy"), delete sn.instances[n.id]
					},
					toBase64Image: function() {
						return this.canvas.toDataURL.apply(this.canvas, arguments)
					},
					initToolTip: function() {
						var e = this;
						e.tooltip = new Xt({
							_chart: e,
							_chartInstance: e,
							_data: e.data,
							_options: e.options.tooltips
						}, e)
					},
					bindEvents: function() {
						var e = this,
							t = e._listeners = {},
							n = function() {
								e.eventHandler.apply(e, arguments)
							};
						ue.each(e.options.events, (function(a) {
							zt.addEventListener(e, a, n), t[a] = n
						})), e.options.responsive && (n = function() {
							e.resize()
						}, zt.addEventListener(e, "resize", n), t.resize = n)
					},
					unbindEvents: function() {
						var e = this,
							t = e._listeners;
						t && (delete e._listeners, ue.each(t, (function(t, n) {
							zt.removeEventListener(e, n, t)
						})))
					},
					updateHoverStyle: function(e, t, n) {
						var a, s, r, i = n ? "setHoverStyle" : "removeHoverStyle";
						for (s = 0, r = e.length; s < r; ++s)(a = e[s]) && this.getDatasetMeta(a._datasetIndex).controller[i](a)
					},
					eventHandler: function(e) {
						var t = this,
							n = t.tooltip;
						if (!1 !== Rt.notify(t, "beforeEvent", [e])) {
							t._bufferedRender = !0, t._bufferedRequest = null;
							var a = t.handleEvent(e);
							n && (a = n._start ? n.handleEvent(e) : a | n.handleEvent(e)), Rt.notify(t, "afterEvent", [e]);
							var s = t._bufferedRequest;
							return s ? t.render(s) : a && !t.animating && (t.stop(), t.render({
								duration: t.options.hover.animationDuration,
								lazy: !0
							})), t._bufferedRender = !1, t._bufferedRequest = null, t
						}
					},
					handleEvent: function(e) {
						var t, n = this,
							a = n.options || {},
							s = a.hover;
						return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, s.mode, s), ue.callback(a.onHover || a.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || a.onClick && a.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, s.mode, !1), n.active.length && s.mode && n.updateHoverStyle(n.active, s.mode, !0), t = !ue.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t
					}
				}), sn.instances = {};
				var rn = sn;

				function on() {
					throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
				}

				function dn(e) {
					this.options = e || {}
				}
				sn.Controller = sn, sn.types = {}, ue.configMerge = tn, ue.scaleMerge = en, ue.extend(dn.prototype, {
					formats: on,
					parse: on,
					format: on,
					add: on,
					diff: on,
					startOf: on,
					endOf: on,
					_create: function(e) {
						return e
					}
				}), dn.override = function(e) {
					ue.extend(dn.prototype, e)
				};
				var ln = {
						_date: dn
					},
					un = {
						formatters: {
							values: function(e) {
								return ue.isArray(e) ? e : "" + e
							},
							linear: function(e, t, n) {
								var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
								Math.abs(a) > 1 && e !== Math.floor(e) && (a = e - Math.floor(e));
								var s = ue.log10(Math.abs(a)),
									r = "";
								if (0 !== e)
									if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
										var i = ue.log10(Math.abs(e));
										r = e.toExponential(Math.floor(i) - Math.floor(s))
									} else {
										var o = -1 * Math.floor(s);
										o = Math.max(Math.min(o, 20), 0), r = e.toFixed(o)
									}
								else r = "0";
								return r
							},
							logarithmic: function(e, t, n) {
								var a = e / Math.pow(10, Math.floor(ue.log10(e)));
								return 0 === e ? "0" : 1 === a || 2 === a || 5 === a || 0 === t || t === n.length - 1 ? e.toExponential() : ""
							}
						}
					},
					mn = ue.valueOrDefault,
					_n = ue.valueAtIndexOrDefault;

				function hn(e) {
					var t, n, a = [];
					for (t = 0, n = e.length; t < n; ++t) a.push(e[t].label);
					return a
				}

				function cn(e, t, n) {
					return ue.isArray(t) ? ue.longestText(e, n, t) : e.measureText(t).width
				}
				oe._set("scale", {
					display: !0,
					position: "left",
					offset: !1,
					gridLines: {
						display: !0,
						color: "rgba(0, 0, 0, 0.1)",
						lineWidth: 1,
						drawBorder: !0,
						drawOnChartArea: !0,
						drawTicks: !0,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: "rgba(0,0,0,0.25)",
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0,
						offsetGridLines: !1,
						borderDash: [],
						borderDashOffset: 0
					},
					scaleLabel: {
						display: !1,
						labelString: "",
						padding: {
							top: 4,
							bottom: 4
						}
					},
					ticks: {
						beginAtZero: !1,
						minRotation: 0,
						maxRotation: 50,
						mirror: !1,
						padding: 0,
						reverse: !1,
						display: !0,
						autoSkip: !0,
						autoSkipPadding: 0,
						labelOffset: 0,
						callback: un.formatters.values,
						minor: {},
						major: {}
					}
				});
				var fn = fe.extend({
						getPadding: function() {
							return {
								left: this.paddingLeft || 0,
								top: this.paddingTop || 0,
								right: this.paddingRight || 0,
								bottom: this.paddingBottom || 0
							}
						},
						getTicks: function() {
							return this._ticks
						},
						mergeTicksOptions: function() {
							var e = this.options.ticks;
							for (var t in !1 === e.minor && (e.minor = {
									display: !1
								}), !1 === e.major && (e.major = {
									display: !1
								}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
						},
						beforeUpdate: function() {
							ue.callback(this.options.beforeUpdate, [this])
						},
						update: function(e, t, n) {
							var a, s, r, i, o, d, l = this;
							for (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = ue.extend({
									left: 0,
									right: 0,
									top: 0,
									bottom: 0
								}, n), l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], o = l.afterBuildTicks(o) || o, l.beforeTickToLabelConversion(), r = l.convertTicksToLabels(o) || l.ticks, l.afterTickToLabelConversion(), l.ticks = r, a = 0, s = r.length; a < s; ++a) i = r[a], (d = o[a]) ? d.label = i : o.push(d = {
								label: i,
								major: !1
							});
							return l._ticks = o, l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l.afterUpdate(), l.minSize
						},
						afterUpdate: function() {
							ue.callback(this.options.afterUpdate, [this])
						},
						beforeSetDimensions: function() {
							ue.callback(this.options.beforeSetDimensions, [this])
						},
						setDimensions: function() {
							var e = this;
							e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
						},
						afterSetDimensions: function() {
							ue.callback(this.options.afterSetDimensions, [this])
						},
						beforeDataLimits: function() {
							ue.callback(this.options.beforeDataLimits, [this])
						},
						determineDataLimits: ue.noop,
						afterDataLimits: function() {
							ue.callback(this.options.afterDataLimits, [this])
						},
						beforeBuildTicks: function() {
							ue.callback(this.options.beforeBuildTicks, [this])
						},
						buildTicks: ue.noop,
						afterBuildTicks: function(e) {
							var t = this;
							return ue.isArray(e) && e.length ? ue.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = ue.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e)
						},
						beforeTickToLabelConversion: function() {
							ue.callback(this.options.beforeTickToLabelConversion, [this])
						},
						convertTicksToLabels: function() {
							var e = this.options.ticks;
							this.ticks = this.ticks.map(e.userCallback || e.callback, this)
						},
						afterTickToLabelConversion: function() {
							ue.callback(this.options.afterTickToLabelConversion, [this])
						},
						beforeCalculateTickRotation: function() {
							ue.callback(this.options.beforeCalculateTickRotation, [this])
						},
						calculateTickRotation: function() {
							var e = this,
								t = e.ctx,
								n = e.options.ticks,
								a = hn(e._ticks),
								s = ue.options._parseFont(n);
							t.font = s.string;
							var r = n.minRotation || 0;
							if (a.length && e.options.display && e.isHorizontal())
								for (var i, o = ue.longestText(t, s.string, a, e.longestTextCache), d = o, l = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; d > l && r < n.maxRotation;) {
									var u = ue.toRadians(r);
									if (i = Math.cos(u), Math.sin(u) * o > e.maxHeight) {
										r--;
										break
									}
									r++, d = i * o
								}
							e.labelRotation = r
						},
						afterCalculateTickRotation: function() {
							ue.callback(this.options.afterCalculateTickRotation, [this])
						},
						beforeFit: function() {
							ue.callback(this.options.beforeFit, [this])
						},
						fit: function() {
							var e = this,
								t = e.minSize = {
									width: 0,
									height: 0
								},
								n = hn(e._ticks),
								a = e.options,
								s = a.ticks,
								r = a.scaleLabel,
								i = a.gridLines,
								o = e._isVisible(),
								d = a.position,
								l = e.isHorizontal(),
								u = ue.options._parseFont,
								m = u(s),
								_ = a.gridLines.tickMarkLength;
							if (t.width = l ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : o && i.drawTicks ? _ : 0, t.height = l ? o && i.drawTicks ? _ : 0 : e.maxHeight, r.display && o) {
								var h = u(r),
									c = ue.options.toPadding(r.padding),
									f = h.lineHeight + c.height;
								l ? t.height += f : t.width += f
							}
							if (s.display && o) {
								var p = ue.longestText(e.ctx, m.string, n, e.longestTextCache),
									M = ue.numberOfLabelLines(n),
									y = .5 * m.size,
									g = e.options.ticks.padding;
								if (e._maxLabelLines = M, e.longestLabelWidth = p, l) {
									var L = ue.toRadians(e.labelRotation),
										Y = Math.cos(L),
										v = Math.sin(L) * p + m.lineHeight * M + y;
									t.height = Math.min(e.maxHeight, t.height + v + g), e.ctx.font = m.string;
									var k, b, D = cn(e.ctx, n[0], m.string),
										w = cn(e.ctx, n[n.length - 1], m.string),
										T = e.getPixelForTick(0) - e.left,
										x = e.right - e.getPixelForTick(n.length - 1);
									0 !== e.labelRotation ? (k = "bottom" === d ? Y * D : Y * y, b = "bottom" === d ? Y * y : Y * w) : (k = D / 2, b = w / 2), e.paddingLeft = Math.max(k - T, 0) + 3, e.paddingRight = Math.max(b - x, 0) + 3
								} else s.mirror ? p = 0 : p += g + y, t.width = Math.min(e.maxWidth, t.width + p), e.paddingTop = m.size / 2, e.paddingBottom = m.size / 2
							}
							e.handleMargins(), e.width = t.width, e.height = t.height
						},
						handleMargins: function() {
							var e = this;
							e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
						},
						afterFit: function() {
							ue.callback(this.options.afterFit, [this])
						},
						isHorizontal: function() {
							return "top" === this.options.position || "bottom" === this.options.position
						},
						isFullWidth: function() {
							return this.options.fullWidth
						},
						getRightValue: function(e) {
							if (ue.isNullOrUndef(e)) return NaN;
							if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
							if (e)
								if (this.isHorizontal()) {
									if (void 0 !== e.x) return this.getRightValue(e.x)
								} else if (void 0 !== e.y) return this.getRightValue(e.y);
							return e
						},
						getLabelForIndex: ue.noop,
						getPixelForValue: ue.noop,
						getValueForPixel: ue.noop,
						getPixelForTick: function(e) {
							var t = this,
								n = t.options.offset;
							if (t.isHorizontal()) {
								var a = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
									s = a * e + t.paddingLeft;
								n && (s += a / 2);
								var r = t.left + s;
								return r += t.isFullWidth() ? t.margins.left : 0
							}
							var i = t.height - (t.paddingTop + t.paddingBottom);
							return t.top + e * (i / (t._ticks.length - 1))
						},
						getPixelForDecimal: function(e) {
							var t = this;
							if (t.isHorizontal()) {
								var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
									a = t.left + n;
								return a += t.isFullWidth() ? t.margins.left : 0
							}
							return t.top + e * t.height
						},
						getBasePixel: function() {
							return this.getPixelForValue(this.getBaseValue())
						},
						getBaseValue: function() {
							var e = this.min,
								t = this.max;
							return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
						},
						_autoSkip: function(e) {
							var t, n, a = this,
								s = a.isHorizontal(),
								r = a.options.ticks.minor,
								i = e.length,
								o = !1,
								d = r.maxTicksLimit,
								l = a._tickSize() * (i - 1),
								u = s ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.PaddingBottom),
								m = [];
							for (l > u && (o = 1 + Math.floor(l / u)), i > d && (o = Math.max(o, 1 + Math.floor(i / d))), t = 0; t < i; t++) n = e[t], o > 1 && t % o > 0 && delete n.label, m.push(n);
							return m
						},
						_tickSize: function() {
							var e = this,
								t = e.isHorizontal(),
								n = e.options.ticks.minor,
								a = ue.toRadians(e.labelRotation),
								s = Math.abs(Math.cos(a)),
								r = Math.abs(Math.sin(a)),
								i = n.autoSkipPadding || 0,
								o = e.longestLabelWidth + i || 0,
								d = ue.options._parseFont(n),
								l = e._maxLabelLines * d.lineHeight + i || 0;
							return t ? l * s > o * r ? o / s : l / r : l * r < o * s ? l / s : o / r
						},
						_isVisible: function() {
							var e, t, n, a = this.chart,
								s = this.options.display;
							if ("auto" !== s) return !!s;
							for (e = 0, t = a.data.datasets.length; e < t; ++e)
								if (a.isDatasetVisible(e) && ((n = a.getDatasetMeta(e)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
							return !1
						},
						draw: function(e) {
							var t = this,
								n = t.options;
							if (t._isVisible()) {
								var a, s, r, i = t.chart,
									o = t.ctx,
									d = oe.global.defaultFontColor,
									l = n.ticks.minor,
									u = n.ticks.major || l,
									m = n.gridLines,
									_ = n.scaleLabel,
									h = n.position,
									c = 0 !== t.labelRotation,
									f = l.mirror,
									p = t.isHorizontal(),
									M = ue.options._parseFont,
									y = l.display && l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
									g = mn(l.fontColor, d),
									L = M(l),
									Y = L.lineHeight,
									v = mn(u.fontColor, d),
									k = M(u),
									b = l.padding,
									D = l.labelOffset,
									w = m.drawTicks ? m.tickMarkLength : 0,
									T = mn(_.fontColor, d),
									x = M(_),
									S = ue.options.toPadding(_.padding),
									j = ue.toRadians(t.labelRotation),
									H = [],
									P = m.drawBorder ? _n(m.lineWidth, 0, 0) : 0,
									O = ue._alignPixel;
								if ("top" === h ? (a = O(i, t.bottom, P), s = t.bottom - w, r = a - P / 2) : "bottom" === h ? (a = O(i, t.top, P), s = a + P / 2, r = t.top + w) : "left" === h ? (a = O(i, t.right, P), s = t.right - w, r = a - P / 2) : (a = O(i, t.left, P), s = a + P / 2, r = t.left + w), ue.each(y, (function(a, o) {
										if (!ue.isNullOrUndef(a.label)) {
											var d, l, u, _, M, y, g, L, v, k, T, x, S, A, W, F, C = a.label;
											o === t.zeroLineIndex && n.offset === m.offsetGridLines ? (d = m.zeroLineWidth, l = m.zeroLineColor, u = m.zeroLineBorderDash || [], _ = m.zeroLineBorderDashOffset || 0) : (d = _n(m.lineWidth, o), l = _n(m.color, o), u = m.borderDash || [], _ = m.borderDashOffset || 0);
											var E = ue.isArray(C) ? C.length : 1,
												I = function(e, t, n) {
													var a = e.getPixelForTick(t);
													return n && (1 === e.getTicks().length ? a -= e.isHorizontal() ? Math.max(a - e.left, e.right - a) : Math.max(a - e.top, e.bottom - a) : a -= 0 === t ? (e.getPixelForTick(1) - a) / 2 : (a - e.getPixelForTick(t - 1)) / 2), a
												}(t, o, m.offsetGridLines);
											if (p) {
												var z = w + b;
												I < t.left - 1e-7 && (l = "rgba(0,0,0,0)"), M = g = v = T = O(i, I, d), y = s, L = r, S = t.getPixelForTick(o) + D, "top" === h ? (k = O(i, e.top, P) + P / 2, x = e.bottom, W = ((c ? 1 : .5) - E) * Y, F = c ? "left" : "center", A = t.bottom - z) : (k = e.top, x = O(i, e.bottom, P) - P / 2, W = (c ? 0 : .5) * Y, F = c ? "right" : "center", A = t.top + z)
											} else {
												var R = (f ? 0 : w) + b;
												I < t.top - 1e-7 && (l = "rgba(0,0,0,0)"), M = s, g = r, y = L = k = x = O(i, I, d), A = t.getPixelForTick(o) + D, W = (1 - E) * Y / 2, "left" === h ? (v = O(i, e.left, P) + P / 2, T = e.right, F = f ? "left" : "right", S = t.right - R) : (v = e.left, T = O(i, e.right, P) - P / 2, F = f ? "right" : "left", S = t.left + R)
											}
											H.push({
												tx1: M,
												ty1: y,
												tx2: g,
												ty2: L,
												x1: v,
												y1: k,
												x2: T,
												y2: x,
												labelX: S,
												labelY: A,
												glWidth: d,
												glColor: l,
												glBorderDash: u,
												glBorderDashOffset: _,
												rotation: -1 * j,
												label: C,
												major: a.major,
												textOffset: W,
												textAlign: F
											})
										}
									})), ue.each(H, (function(e) {
										var t = e.glWidth,
											n = e.glColor;
										if (m.display && t && n && (o.save(), o.lineWidth = t, o.strokeStyle = n, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), l.display) {
											o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? k.string : L.string, o.fillStyle = e.major ? v : g, o.textBaseline = "middle", o.textAlign = e.textAlign;
											var a = e.label,
												s = e.textOffset;
											if (ue.isArray(a))
												for (var r = 0; r < a.length; ++r) o.fillText("" + a[r], 0, s), s += Y;
											else o.fillText(a, 0, s);
											o.restore()
										}
									})), _.display) {
									var A, W, F = 0,
										C = x.lineHeight / 2;
									if (p) A = t.left + (t.right - t.left) / 2, W = "bottom" === h ? t.bottom - C - S.bottom : t.top + C + S.top;
									else {
										var E = "left" === h;
										A = E ? t.left + C + S.top : t.right - C - S.top, W = t.top + (t.bottom - t.top) / 2, F = E ? -.5 * Math.PI : .5 * Math.PI
									}
									o.save(), o.translate(A, W), o.rotate(F), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = T, o.font = x.string, o.fillText(_.labelString, 0, 0), o.restore()
								}
								if (P) {
									var I, z, R, N, V = P,
										B = _n(m.lineWidth, y.length - 1, 0);
									p ? (I = O(i, t.left, V) - V / 2, z = O(i, t.right, B) + B / 2, R = N = a) : (R = O(i, t.top, V) - V / 2, N = O(i, t.bottom, B) + B / 2, I = z = a), o.lineWidth = P, o.strokeStyle = _n(m.color, 0), o.beginPath(), o.moveTo(I, R), o.lineTo(z, N), o.stroke()
								}
							}
						}
					}),
					pn = fn.extend({
						getLabels: function() {
							var e = this.chart.data;
							return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
						},
						determineDataLimits: function() {
							var e, t = this,
								n = t.getLabels();
							t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
						},
						buildTicks: function() {
							var e = this,
								t = e.getLabels();
							e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
						},
						getLabelForIndex: function(e, t) {
							var n = this,
								a = n.chart;
							return a.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(a.data.datasets[t].data[e]) : n.ticks[e - n.minIndex]
						},
						getPixelForValue: function(e, t) {
							var n, a = this,
								s = a.options.offset,
								r = Math.max(a.maxIndex + 1 - a.minIndex - (s ? 0 : 1), 1);
							if (null != e && (n = a.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
								e = n || e;
								var i = a.getLabels().indexOf(e);
								t = -1 !== i ? i : t
							}
							if (a.isHorizontal()) {
								var o = a.width / r,
									d = o * (t - a.minIndex);
								return s && (d += o / 2), a.left + d
							}
							var l = a.height / r,
								u = l * (t - a.minIndex);
							return s && (u += l / 2), a.top + u
						},
						getPixelForTick: function(e) {
							return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t.options.offset,
								a = Math.max(t._ticks.length - (n ? 0 : 1), 1),
								s = t.isHorizontal(),
								r = (s ? t.width : t.height) / a;
							return e -= s ? t.left : t.top, n && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
						},
						getBasePixel: function() {
							return this.bottom
						}
					}),
					Mn = {
						position: "bottom"
					};
				pn._defaults = Mn;
				var yn = ue.noop,
					gn = ue.isNullOrUndef,
					Ln = fn.extend({
						getRightValue: function(e) {
							return "string" == typeof e ? +e : fn.prototype.getRightValue.call(this, e)
						},
						handleTickRangeOptions: function() {
							var e = this,
								t = e.options.ticks;
							if (t.beginAtZero) {
								var n = ue.sign(e.min),
									a = ue.sign(e.max);
								n < 0 && a < 0 ? e.max = 0 : n > 0 && a > 0 && (e.min = 0)
							}
							var s = void 0 !== t.min || void 0 !== t.suggestedMin,
								r = void 0 !== t.max || void 0 !== t.suggestedMax;
							void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), s !== r && e.min >= e.max && (s ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
						},
						getTickLimit: function() {
							var e, t = this.options.ticks,
								n = t.stepSize,
								a = t.maxTicksLimit;
							return n ? e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (e = this._computeTickLimit(), a = a || 11), a && (e = Math.min(a, e)), e
						},
						_computeTickLimit: function() {
							return Number.POSITIVE_INFINITY
						},
						handleDirectionalChanges: yn,
						buildTicks: function() {
							var e = this,
								t = e.options.ticks,
								n = e.getTickLimit(),
								a = {
									maxTicks: n = Math.max(2, n),
									min: t.min,
									max: t.max,
									precision: t.precision,
									stepSize: ue.valueOrDefault(t.fixedStepSize, t.stepSize)
								},
								s = e.ticks = function(e, t) {
									var n, a, s, r, i = [],
										o = e.stepSize,
										d = o || 1,
										l = e.maxTicks - 1,
										u = e.min,
										m = e.max,
										_ = e.precision,
										h = t.min,
										c = t.max,
										f = ue.niceNum((c - h) / l / d) * d;
									if (f < 1e-14 && gn(u) && gn(m)) return [h, c];
									(r = Math.ceil(c / f) - Math.floor(h / f)) > l && (f = ue.niceNum(r * f / l / d) * d), o || gn(_) ? n = Math.pow(10, ue._decimalPlaces(f)) : (n = Math.pow(10, _), f = Math.ceil(f * n) / n), a = Math.floor(h / f) * f, s = Math.ceil(c / f) * f, o && (!gn(u) && ue.almostWhole(u / f, f / 1e3) && (a = u), !gn(m) && ue.almostWhole(m / f, f / 1e3) && (s = m)), r = (s - a) / f, r = ue.almostEquals(r, Math.round(r), f / 1e3) ? Math.round(r) : Math.ceil(r), a = Math.round(a * n) / n, s = Math.round(s * n) / n, i.push(gn(u) ? a : u);
									for (var p = 1; p < r; ++p) i.push(Math.round((a + p * f) * n) / n);
									return i.push(gn(m) ? s : m), i
								}(a, e);
							e.handleDirectionalChanges(), e.max = ue.max(s), e.min = ue.min(s), t.reverse ? (s.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
						},
						convertTicksToLabels: function() {
							var e = this;
							e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), fn.prototype.convertTicksToLabels.call(e)
						}
					}),
					Yn = {
						position: "left",
						ticks: {
							callback: un.formatters.linear
						}
					},
					vn = Ln.extend({
						determineDataLimits: function() {
							var e = this,
								t = e.options,
								n = e.chart,
								a = n.data.datasets,
								s = e.isHorizontal();

							function r(t) {
								return s ? t.xAxisID === e.id : t.yAxisID === e.id
							}
							e.min = null, e.max = null;
							var i = t.stacked;
							if (void 0 === i && ue.each(a, (function(e, t) {
									if (!i) {
										var a = n.getDatasetMeta(t);
										n.isDatasetVisible(t) && r(a) && void 0 !== a.stack && (i = !0)
									}
								})), t.stacked || i) {
								var o = {};
								ue.each(a, (function(a, s) {
									var i = n.getDatasetMeta(s),
										d = [i.type, void 0 === t.stacked && void 0 === i.stack ? s : "", i.stack].join(".");
									void 0 === o[d] && (o[d] = {
										positiveValues: [],
										negativeValues: []
									});
									var l = o[d].positiveValues,
										u = o[d].negativeValues;
									n.isDatasetVisible(s) && r(i) && ue.each(a.data, (function(n, a) {
										var s = +e.getRightValue(n);
										isNaN(s) || i.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, t.relativePoints ? l[a] = 100 : s < 0 ? u[a] += s : l[a] += s)
									}))
								})), ue.each(o, (function(t) {
									var n = t.positiveValues.concat(t.negativeValues),
										a = ue.min(n),
										s = ue.max(n);
									e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? s : Math.max(e.max, s)
								}))
							} else ue.each(a, (function(t, a) {
								var s = n.getDatasetMeta(a);
								n.isDatasetVisible(a) && r(s) && ue.each(t.data, (function(t, n) {
									var a = +e.getRightValue(t);
									isNaN(a) || s.data[n].hidden || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a))
								}))
							}));
							e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							var e;
							return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = ue.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight))
						},
						handleDirectionalChanges: function() {
							this.isHorizontal() || this.ticks.reverse()
						},
						getLabelForIndex: function(e, t) {
							return +this.getRightValue(this.chart.data.datasets[t].data[e])
						},
						getPixelForValue: function(e) {
							var t = this,
								n = t.start,
								a = +t.getRightValue(e),
								s = t.end - n;
							return t.isHorizontal() ? t.left + t.width / s * (a - n) : t.bottom - t.height / s * (a - n)
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t.isHorizontal(),
								a = n ? t.width : t.height,
								s = (n ? e - t.left : t.bottom - e) / a;
							return t.start + (t.end - t.start) * s
						},
						getPixelForTick: function(e) {
							return this.getPixelForValue(this.ticksAsNumbers[e])
						}
					}),
					kn = Yn;
				vn._defaults = kn;
				var bn = ue.valueOrDefault,
					Dn = {
						position: "left",
						ticks: {
							callback: un.formatters.logarithmic
						}
					};

				function wn(e, t) {
					return ue.isFinite(e) && e >= 0 ? e : t
				}
				var Tn = fn.extend({
						determineDataLimits: function() {
							var e = this,
								t = e.options,
								n = e.chart,
								a = n.data.datasets,
								s = e.isHorizontal();

							function r(t) {
								return s ? t.xAxisID === e.id : t.yAxisID === e.id
							}
							e.min = null, e.max = null, e.minNotZero = null;
							var i = t.stacked;
							if (void 0 === i && ue.each(a, (function(e, t) {
									if (!i) {
										var a = n.getDatasetMeta(t);
										n.isDatasetVisible(t) && r(a) && void 0 !== a.stack && (i = !0)
									}
								})), t.stacked || i) {
								var o = {};
								ue.each(a, (function(a, s) {
									var i = n.getDatasetMeta(s),
										d = [i.type, void 0 === t.stacked && void 0 === i.stack ? s : "", i.stack].join(".");
									n.isDatasetVisible(s) && r(i) && (void 0 === o[d] && (o[d] = []), ue.each(a.data, (function(t, n) {
										var a = o[d],
											s = +e.getRightValue(t);
										isNaN(s) || i.data[n].hidden || s < 0 || (a[n] = a[n] || 0, a[n] += s)
									})))
								})), ue.each(o, (function(t) {
									if (t.length > 0) {
										var n = ue.min(t),
											a = ue.max(t);
										e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? a : Math.max(e.max, a)
									}
								}))
							} else ue.each(a, (function(t, a) {
								var s = n.getDatasetMeta(a);
								n.isDatasetVisible(a) && r(s) && ue.each(t.data, (function(t, n) {
									var a = +e.getRightValue(t);
									isNaN(a) || s.data[n].hidden || a < 0 || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a), 0 !== a && (null === e.minNotZero || a < e.minNotZero) && (e.minNotZero = a))
								}))
							}));
							this.handleTickRangeOptions()
						},
						handleTickRangeOptions: function() {
							var e = this,
								t = e.options.ticks;
							e.min = wn(t.min, e.min), e.max = wn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(ue.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(ue.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(ue.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(ue.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(ue.log10(e.max))) : e.minNotZero = 1)
						},
						buildTicks: function() {
							var e = this,
								t = e.options.ticks,
								n = !e.isHorizontal(),
								a = {
									min: wn(t.min),
									max: wn(t.max)
								},
								s = e.ticks = function(e, t) {
									var n, a, s = [],
										r = bn(e.min, Math.pow(10, Math.floor(ue.log10(t.min)))),
										i = Math.floor(ue.log10(t.max)),
										o = Math.ceil(t.max / Math.pow(10, i));
									0 === r ? (n = Math.floor(ue.log10(t.minNotZero)), a = Math.floor(t.minNotZero / Math.pow(10, n)), s.push(r), r = a * Math.pow(10, n)) : (n = Math.floor(ue.log10(r)), a = Math.floor(r / Math.pow(10, n)));
									var d = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
									do {
										s.push(r), 10 == ++a && (a = 1, d = ++n >= 0 ? 1 : d), r = Math.round(a * Math.pow(10, n) * d) / d
									} while (n < i || n === i && a < o);
									var l = bn(e.max, r);
									return s.push(l), s
								}(a, e);
							e.max = ue.max(s), e.min = ue.min(s), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && s.reverse()
						},
						convertTicksToLabels: function() {
							this.tickValues = this.ticks.slice(), fn.prototype.convertTicksToLabels.call(this)
						},
						getLabelForIndex: function(e, t) {
							return +this.getRightValue(this.chart.data.datasets[t].data[e])
						},
						getPixelForTick: function(e) {
							return this.getPixelForValue(this.tickValues[e])
						},
						_getFirstTickValue: function(e) {
							var t = Math.floor(ue.log10(e));
							return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
						},
						getPixelForValue: function(e) {
							var t, n, a, s, r, i = this,
								o = i.options.ticks,
								d = o.reverse,
								l = ue.log10,
								u = i._getFirstTickValue(i.minNotZero),
								m = 0;
							return e = +i.getRightValue(e), d ? (a = i.end, s = i.start, r = -1) : (a = i.start, s = i.end, r = 1), i.isHorizontal() ? (t = i.width, n = d ? i.right : i.left) : (t = i.height, r *= -1, n = d ? i.top : i.bottom), e !== a && (0 === a && (t -= m = bn(o.fontSize, oe.global.defaultFontSize), a = u), 0 !== e && (m += t / (l(s) - l(a)) * (l(e) - l(a))), n += r * m), n
						},
						getValueForPixel: function(e) {
							var t, n, a, s, r = this,
								i = r.options.ticks,
								o = i.reverse,
								d = ue.log10,
								l = r._getFirstTickValue(r.minNotZero);
							if (o ? (n = r.end, a = r.start) : (n = r.start, a = r.end), r.isHorizontal() ? (t = r.width, s = o ? r.right - e : e - r.left) : (t = r.height, s = o ? e - r.top : r.bottom - e), s !== n) {
								if (0 === n) {
									var u = bn(i.fontSize, oe.global.defaultFontSize);
									s -= u, t -= u, n = l
								}
								s *= d(a) - d(n), s /= t, s = Math.pow(10, d(n) + s)
							}
							return s
						}
					}),
					xn = Dn;
				Tn._defaults = xn;
				var Sn = ue.valueOrDefault,
					jn = ue.valueAtIndexOrDefault,
					Hn = ue.options.resolve,
					Pn = {
						display: !0,
						animate: !0,
						position: "chartArea",
						angleLines: {
							display: !0,
							color: "rgba(0, 0, 0, 0.1)",
							lineWidth: 1,
							borderDash: [],
							borderDashOffset: 0
						},
						gridLines: {
							circular: !1
						},
						ticks: {
							showLabelBackdrop: !0,
							backdropColor: "rgba(255,255,255,0.75)",
							backdropPaddingY: 2,
							backdropPaddingX: 2,
							callback: un.formatters.linear
						},
						pointLabels: {
							display: !0,
							fontSize: 10,
							callback: function(e) {
								return e
							}
						}
					};

				function On(e) {
					var t = e.options;
					return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
				}

				function An(e) {
					var t = e.ticks;
					return t.display && e.display ? Sn(t.fontSize, oe.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
				}

				function Wn(e, t, n, a, s) {
					return e === a || e === s ? {
						start: t - n / 2,
						end: t + n / 2
					} : e < a || e > s ? {
						start: t - n,
						end: t
					} : {
						start: t,
						end: t + n
					}
				}

				function Fn(e) {
					return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
				}

				function Cn(e, t, n, a) {
					var s, r, i = n.y + a / 2;
					if (ue.isArray(t))
						for (s = 0, r = t.length; s < r; ++s) e.fillText(t[s], n.x, i), i += a;
					else e.fillText(t, n.x, i)
				}

				function En(e, t, n) {
					90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
				}

				function In(e) {
					return ue.isNumber(e) ? e : 0
				}
				var zn = Ln.extend({
						setDimensions: function() {
							var e = this;
							e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = An(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
						},
						determineDataLimits: function() {
							var e = this,
								t = e.chart,
								n = Number.POSITIVE_INFINITY,
								a = Number.NEGATIVE_INFINITY;
							ue.each(t.data.datasets, (function(s, r) {
								if (t.isDatasetVisible(r)) {
									var i = t.getDatasetMeta(r);
									ue.each(s.data, (function(t, s) {
										var r = +e.getRightValue(t);
										isNaN(r) || i.data[s].hidden || (n = Math.min(r, n), a = Math.max(r, a))
									}))
								}
							})), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = a === Number.NEGATIVE_INFINITY ? 0 : a, e.handleTickRangeOptions()
						},
						_computeTickLimit: function() {
							return Math.ceil(this.drawingArea / An(this.options))
						},
						convertTicksToLabels: function() {
							var e = this;
							Ln.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
						},
						getLabelForIndex: function(e, t) {
							return +this.getRightValue(this.chart.data.datasets[t].data[e])
						},
						fit: function() {
							var e = this.options;
							e.display && e.pointLabels.display ? function(e) {
								var t, n, a, s = ue.options._parseFont(e.options.pointLabels),
									r = {
										l: 0,
										r: e.width,
										t: 0,
										b: e.height - e.paddingTop
									},
									i = {};
								e.ctx.font = s.string, e._pointLabelSizes = [];
								var o, d, l, u = On(e);
								for (t = 0; t < u; t++) {
									a = e.getPointPosition(t, e.drawingArea + 5), o = e.ctx, d = s.lineHeight, l = e.pointLabels[t] || "", n = ue.isArray(l) ? {
										w: ue.longestText(o, o.font, l),
										h: l.length * d
									} : {
										w: o.measureText(l).width,
										h: d
									}, e._pointLabelSizes[t] = n;
									var m = e.getIndexAngle(t),
										_ = ue.toDegrees(m) % 360,
										h = Wn(_, a.x, n.w, 0, 180),
										c = Wn(_, a.y, n.h, 90, 270);
									h.start < r.l && (r.l = h.start, i.l = m), h.end > r.r && (r.r = h.end, i.r = m), c.start < r.t && (r.t = c.start, i.t = m), c.end > r.b && (r.b = c.end, i.b = m)
								}
								e.setReductions(e.drawingArea, r, i)
							}(this) : this.setCenterPoint(0, 0, 0, 0)
						},
						setReductions: function(e, t, n) {
							var a = this,
								s = t.l / Math.sin(n.l),
								r = Math.max(t.r - a.width, 0) / Math.sin(n.r),
								i = -t.t / Math.cos(n.t),
								o = -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(n.b);
							s = In(s), r = In(r), i = In(i), o = In(o), a.drawingArea = Math.min(Math.floor(e - (s + r) / 2), Math.floor(e - (i + o) / 2)), a.setCenterPoint(s, r, i, o)
						},
						setCenterPoint: function(e, t, n, a) {
							var s = this,
								r = s.width - t - s.drawingArea,
								i = e + s.drawingArea,
								o = n + s.drawingArea,
								d = s.height - s.paddingTop - a - s.drawingArea;
							s.xCenter = Math.floor((i + r) / 2 + s.left), s.yCenter = Math.floor((o + d) / 2 + s.top + s.paddingTop)
						},
						getIndexAngle: function(e) {
							return e * (2 * Math.PI / On(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
						},
						getDistanceFromCenterForValue: function(e) {
							var t = this;
							if (null === e) return 0;
							var n = t.drawingArea / (t.max - t.min);
							return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
						},
						getPointPosition: function(e, t) {
							var n = this.getIndexAngle(e) - Math.PI / 2;
							return {
								x: Math.cos(n) * t + this.xCenter,
								y: Math.sin(n) * t + this.yCenter
							}
						},
						getPointPositionForValue: function(e, t) {
							return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
						},
						getBasePosition: function() {
							var e = this.min,
								t = this.max;
							return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
						},
						draw: function() {
							var e = this,
								t = e.options,
								n = t.gridLines,
								a = t.ticks;
							if (t.display) {
								var s = e.ctx,
									r = this.getIndexAngle(0),
									i = ue.options._parseFont(a);
								(t.angleLines.display || t.pointLabels.display) && function(e) {
									var t = e.ctx,
										n = e.options,
										a = n.angleLines,
										s = n.gridLines,
										r = n.pointLabels,
										i = Sn(a.lineWidth, s.lineWidth),
										o = Sn(a.color, s.color),
										d = An(n);
									t.save(), t.lineWidth = i, t.strokeStyle = o, t.setLineDash && (t.setLineDash(Hn([a.borderDash, s.borderDash, []])), t.lineDashOffset = Hn([a.borderDashOffset, s.borderDashOffset, 0]));
									var l = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
										u = ue.options._parseFont(r);
									t.font = u.string, t.textBaseline = "middle";
									for (var m = On(e) - 1; m >= 0; m--) {
										if (a.display && i && o) {
											var _ = e.getPointPosition(m, l);
											t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(_.x, _.y), t.stroke()
										}
										if (r.display) {
											var h = 0 === m ? d / 2 : 0,
												c = e.getPointPosition(m, l + h + 5),
												f = jn(r.fontColor, m, oe.global.defaultFontColor);
											t.fillStyle = f;
											var p = e.getIndexAngle(m),
												M = ue.toDegrees(p);
											t.textAlign = Fn(M), En(M, e._pointLabelSizes[m], c), Cn(t, e.pointLabels[m] || "", c, u.lineHeight)
										}
									}
									t.restore()
								}(e), ue.each(e.ticks, (function(t, o) {
									if (o > 0 || a.reverse) {
										var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
										if (n.display && 0 !== o && function(e, t, n, a) {
												var s, r = e.ctx,
													i = t.circular,
													o = On(e),
													d = jn(t.color, a - 1),
													l = jn(t.lineWidth, a - 1);
												if ((i || o) && d && l) {
													if (r.save(), r.strokeStyle = d, r.lineWidth = l, r.setLineDash && (r.setLineDash(t.borderDash || []), r.lineDashOffset = t.borderDashOffset || 0), r.beginPath(), i) r.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
													else {
														s = e.getPointPosition(0, n), r.moveTo(s.x, s.y);
														for (var u = 1; u < o; u++) s = e.getPointPosition(u, n), r.lineTo(s.x, s.y)
													}
													r.closePath(), r.stroke(), r.restore()
												}
											}(e, n, d, o), a.display) {
											var l = Sn(a.fontColor, oe.global.defaultFontColor);
											if (s.font = i.string, s.save(), s.translate(e.xCenter, e.yCenter), s.rotate(r), a.showLabelBackdrop) {
												var u = s.measureText(t).width;
												s.fillStyle = a.backdropColor, s.fillRect(-u / 2 - a.backdropPaddingX, -d - i.size / 2 - a.backdropPaddingY, u + 2 * a.backdropPaddingX, i.size + 2 * a.backdropPaddingY)
											}
											s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = l, s.fillText(t, 0, -d), s.restore()
										}
									}
								}))
							}
						}
					}),
					Rn = Pn;
				zn._defaults = Rn;
				var Nn = ue.valueOrDefault,
					Vn = Number.MIN_SAFE_INTEGER || -9007199254740991,
					Bn = Number.MAX_SAFE_INTEGER || 9007199254740991,
					Jn = {
						millisecond: {
							common: !0,
							size: 1,
							steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
						},
						second: {
							common: !0,
							size: 1e3,
							steps: [1, 2, 5, 10, 15, 30]
						},
						minute: {
							common: !0,
							size: 6e4,
							steps: [1, 2, 5, 10, 15, 30]
						},
						hour: {
							common: !0,
							size: 36e5,
							steps: [1, 2, 3, 6, 12]
						},
						day: {
							common: !0,
							size: 864e5,
							steps: [1, 2, 5]
						},
						week: {
							common: !1,
							size: 6048e5,
							steps: [1, 2, 3, 4]
						},
						month: {
							common: !0,
							size: 2628e6,
							steps: [1, 2, 3]
						},
						quarter: {
							common: !1,
							size: 7884e6,
							steps: [1, 2, 3, 4]
						},
						year: {
							common: !0,
							size: 3154e7
						}
					},
					Un = Object.keys(Jn);

				function Gn(e, t) {
					return e - t
				}

				function qn(e) {
					var t, n, a, s = {},
						r = [];
					for (t = 0, n = e.length; t < n; ++t) s[a = e[t]] || (s[a] = !0, r.push(a));
					return r
				}

				function Kn(e, t, n, a) {
					var s = function(e, t, n) {
							for (var a, s, r, i = 0, o = e.length - 1; i >= 0 && i <= o;) {
								if (s = e[(a = i + o >> 1) - 1] || null, r = e[a], !s) return {
									lo: null,
									hi: r
								};
								if (r[t] < n) i = a + 1;
								else {
									if (!(s[t] > n)) return {
										lo: s,
										hi: r
									};
									o = a - 1
								}
							}
							return {
								lo: r,
								hi: null
							}
						}(e, t, n),
						r = s.lo ? s.hi ? s.lo : e[e.length - 2] : e[0],
						i = s.lo ? s.hi ? s.hi : e[e.length - 1] : e[1],
						o = i[t] - r[t],
						d = o ? (n - r[t]) / o : 0,
						l = (i[a] - r[a]) * d;
					return r[a] + l
				}

				function Zn(e, t) {
					var n = e._adapter,
						a = e.options.time,
						s = a.parser,
						r = s || a.format,
						i = t;
					return "function" == typeof s && (i = s(i)), ue.isFinite(i) || (i = "string" == typeof r ? n.parse(i, r) : n.parse(i)), null !== i ? +i : (s || "function" != typeof r || (i = r(t), ue.isFinite(i) || (i = n.parse(i))), i)
				}

				function $n(e, t) {
					if (ue.isNullOrUndef(t)) return null;
					var n = e.options.time,
						a = Zn(e, e.getRightValue(t));
					return null === a ? a : (n.round && (a = +e._adapter.startOf(a, n.round)), a)
				}

				function Xn(e) {
					for (var t = Un.indexOf(e) + 1, n = Un.length; t < n; ++t)
						if (Jn[Un[t]].common) return Un[t]
				}

				function Qn(e, t, n, a) {
					var s, r = e._adapter,
						i = e.options,
						o = i.time,
						d = o.unit || function(e, t, n, a) {
							var s, r, i, o = Un.length;
							for (s = Un.indexOf(e); s < o - 1; ++s)
								if (i = (r = Jn[Un[s]]).steps ? r.steps[r.steps.length - 1] : Bn, r.common && Math.ceil((n - t) / (i * r.size)) <= a) return Un[s];
							return Un[o - 1]
						}(o.minUnit, t, n, a),
						l = Xn(d),
						u = Nn(o.stepSize, o.unitStepSize),
						m = "week" === d && o.isoWeekday,
						_ = i.ticks.major.enabled,
						h = Jn[d],
						c = t,
						f = n,
						p = [];
					for (u || (u = function(e, t, n, a) {
							var s, r, i, o = t - e,
								d = Jn[n],
								l = d.size,
								u = d.steps;
							if (!u) return Math.ceil(o / (a * l));
							for (s = 0, r = u.length; s < r && (i = u[s], !(Math.ceil(o / (l * i)) <= a)); ++s);
							return i
						}(t, n, d, a)), m && (c = +r.startOf(c, "isoWeek", m), f = +r.startOf(f, "isoWeek", m)), c = +r.startOf(c, m ? "day" : d), (f = +r.startOf(f, m ? "day" : d)) < n && (f = +r.add(f, 1, d)), s = c, _ && l && !m && !o.round && (s = +r.startOf(s, l), s = +r.add(s, ~~((c - s) / (h.size * u)) * u, d)); s < f; s = +r.add(s, u, d)) p.push(+s);
					return p.push(+s), p
				}
				var ea = fn.extend({
						initialize: function() {
							this.mergeTicksOptions(), fn.prototype.initialize.call(this)
						},
						update: function() {
							var e = this,
								t = e.options,
								n = t.time || (t.time = {}),
								a = e._adapter = new ln._date(t.adapters.date);
							return n.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ue.mergeIf(n.displayFormats, a.formats()), fn.prototype.update.apply(e, arguments)
						},
						getRightValue: function(e) {
							return e && void 0 !== e.t && (e = e.t), fn.prototype.getRightValue.call(this, e)
						},
						determineDataLimits: function() {
							var e, t, n, a, s, r, i = this,
								o = i.chart,
								d = i._adapter,
								l = i.options.time,
								u = l.unit || "day",
								m = Bn,
								_ = Vn,
								h = [],
								c = [],
								f = [],
								p = o.data.labels || [];
							for (e = 0, n = p.length; e < n; ++e) f.push($n(i, p[e]));
							for (e = 0, n = (o.data.datasets || []).length; e < n; ++e)
								if (o.isDatasetVisible(e))
									if (s = o.data.datasets[e].data, ue.isObject(s[0]))
										for (c[e] = [], t = 0, a = s.length; t < a; ++t) r = $n(i, s[t]), h.push(r), c[e][t] = r;
									else {
										for (t = 0, a = f.length; t < a; ++t) h.push(f[t]);
										c[e] = f.slice(0)
									}
							else c[e] = [];
							f.length && (f = qn(f).sort(Gn), m = Math.min(m, f[0]), _ = Math.max(_, f[f.length - 1])), h.length && (h = qn(h).sort(Gn), m = Math.min(m, h[0]), _ = Math.max(_, h[h.length - 1])), m = $n(i, l.min) || m, _ = $n(i, l.max) || _, m = m === Bn ? +d.startOf(Date.now(), u) : m, _ = _ === Vn ? +d.endOf(Date.now(), u) + 1 : _, i.min = Math.min(m, _), i.max = Math.max(m + 1, _), i._horizontal = i.isHorizontal(), i._table = [], i._timestamps = {
								data: h,
								datasets: c,
								labels: f
							}
						},
						buildTicks: function() {
							var e, t, n, a = this,
								s = a.min,
								r = a.max,
								i = a.options,
								o = i.time,
								d = [],
								l = [];
							switch (i.ticks.source) {
								case "data":
									d = a._timestamps.data;
									break;
								case "labels":
									d = a._timestamps.labels;
									break;
								case "auto":
								default:
									d = Qn(a, s, r, a.getLabelCapacity(s))
							}
							for ("ticks" === i.bounds && d.length && (s = d[0], r = d[d.length - 1]), s = $n(a, o.min) || s, r = $n(a, o.max) || r, e = 0, t = d.length; e < t; ++e)(n = d[e]) >= s && n <= r && l.push(n);
							return a.min = s, a.max = r, a._unit = o.unit || function(e, t, n, a, s) {
									var r, i;
									for (r = Un.length - 1; r >= Un.indexOf(n); r--)
										if (i = Un[r], Jn[i].common && e._adapter.diff(s, a, i) >= t.length) return i;
									return Un[n ? Un.indexOf(n) : 0]
								}(a, l, o.minUnit, a.min, a.max), a._majorUnit = Xn(a._unit), a._table = function(e, t, n, a) {
									if ("linear" === a || !e.length) return [{
										time: t,
										pos: 0
									}, {
										time: n,
										pos: 1
									}];
									var s, r, i, o, d, l = [],
										u = [t];
									for (s = 0, r = e.length; s < r; ++s)(o = e[s]) > t && o < n && u.push(o);
									for (u.push(n), s = 0, r = u.length; s < r; ++s) d = u[s + 1], i = u[s - 1], o = u[s], void 0 !== i && void 0 !== d && Math.round((d + i) / 2) === o || l.push({
										time: o,
										pos: s / (r - 1)
									});
									return l
								}(a._timestamps.data, s, r, i.distribution), a._offsets = function(e, t, n, a, s) {
									var r, i, o = 0,
										d = 0;
									return s.offset && t.length && (s.time.min || (r = Kn(e, "time", t[0], "pos"), o = 1 === t.length ? 1 - r : (Kn(e, "time", t[1], "pos") - r) / 2), s.time.max || (i = Kn(e, "time", t[t.length - 1], "pos"), d = 1 === t.length ? i : (i - Kn(e, "time", t[t.length - 2], "pos")) / 2)), {
										start: o,
										end: d
									}
								}(a._table, l, 0, 0, i), i.ticks.reverse && l.reverse(),
								function(e, t, n) {
									var a, s, r, i, o = [];
									for (a = 0, s = t.length; a < s; ++a) r = t[a], i = !!n && r === +e._adapter.startOf(r, n), o.push({
										value: r,
										major: i
									});
									return o
								}(a, l, a._majorUnit)
						},
						getLabelForIndex: function(e, t) {
							var n = this,
								a = n._adapter,
								s = n.chart.data,
								r = n.options.time,
								i = s.labels && e < s.labels.length ? s.labels[e] : "",
								o = s.datasets[t].data[e];
							return ue.isObject(o) && (i = n.getRightValue(o)), r.tooltipFormat ? a.format(Zn(n, i), r.tooltipFormat) : "string" == typeof i ? i : a.format(Zn(n, i), r.displayFormats.datetime)
						},
						tickFormatFunction: function(e, t, n, a) {
							var s = this._adapter,
								r = this.options,
								i = r.time.displayFormats,
								o = i[this._unit],
								d = this._majorUnit,
								l = i[d],
								u = +s.startOf(e, d),
								m = r.ticks.major,
								_ = m.enabled && d && l && e === u,
								h = s.format(e, a || (_ ? l : o)),
								c = _ ? m : r.ticks.minor,
								f = Nn(c.callback, c.userCallback);
							return f ? f(h, t, n) : h
						},
						convertTicksToLabels: function(e) {
							var t, n, a = [];
							for (t = 0, n = e.length; t < n; ++t) a.push(this.tickFormatFunction(e[t].value, t, e));
							return a
						},
						getPixelForOffset: function(e) {
							var t = this,
								n = t.options.ticks.reverse,
								a = t._horizontal ? t.width : t.height,
								s = t._horizontal ? n ? t.right : t.left : n ? t.bottom : t.top,
								r = Kn(t._table, "time", e, "pos"),
								i = a * (t._offsets.start + r) / (t._offsets.start + 1 + t._offsets.end);
							return n ? s - i : s + i
						},
						getPixelForValue: function(e, t, n) {
							var a = null;
							if (void 0 !== t && void 0 !== n && (a = this._timestamps.datasets[n][t]), null === a && (a = $n(this, e)), null !== a) return this.getPixelForOffset(a)
						},
						getPixelForTick: function(e) {
							var t = this.getTicks();
							return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
						},
						getValueForPixel: function(e) {
							var t = this,
								n = t._horizontal ? t.width : t.height,
								a = t._horizontal ? t.left : t.top,
								s = (n ? (e - a) / n : 0) * (t._offsets.start + 1 + t._offsets.start) - t._offsets.end,
								r = Kn(t._table, "pos", s, "time");
							return t._adapter._create(r)
						},
						getLabelWidth: function(e) {
							var t = this.options.ticks,
								n = this.ctx.measureText(e).width,
								a = ue.toRadians(t.maxRotation),
								s = Math.cos(a),
								r = Math.sin(a);
							return n * s + Nn(t.fontSize, oe.global.defaultFontSize) * r
						},
						getLabelCapacity: function(e) {
							var t = this,
								n = t.options.time.displayFormats.millisecond,
								a = t.tickFormatFunction(e, 0, [], n),
								s = t.getLabelWidth(a),
								r = t.isHorizontal() ? t.width : t.height,
								i = Math.floor(r / s);
							return i > 0 ? i : 1
						}
					}),
					ta = {
						position: "bottom",
						distribution: "linear",
						bounds: "data",
						adapters: {},
						time: {
							parser: !1,
							format: !1,
							unit: !1,
							round: !1,
							displayFormat: !1,
							isoWeekday: !1,
							minUnit: "millisecond",
							displayFormats: {}
						},
						ticks: {
							autoSkip: !1,
							source: "auto",
							major: {
								enabled: !1
							}
						}
					};
				ea._defaults = ta;
				var na = {
						category: pn,
						linear: vn,
						logarithmic: Tn,
						radialLinear: zn,
						time: ea
					},
					aa = {
						datetime: "MMM D, YYYY, h:mm:ss a",
						millisecond: "h:mm:ss.SSS a",
						second: "h:mm:ss a",
						minute: "h:mm a",
						hour: "hA",
						day: "MMM D",
						week: "ll",
						month: "MMM YYYY",
						quarter: "[Q]Q - YYYY",
						year: "YYYY"
					};
				ln._date.override("function" == typeof e ? {
					_id: "moment",
					formats: function() {
						return aa
					},
					parse: function(t, n) {
						return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null
					},
					format: function(t, n) {
						return e(t).format(n)
					},
					add: function(t, n, a) {
						return e(t).add(n, a).valueOf()
					},
					diff: function(t, n, a) {
						return e.duration(e(t).diff(e(n))).as(a)
					},
					startOf: function(t, n, a) {
						return t = e(t), "isoWeek" === n ? t.isoWeekday(a).valueOf() : t.startOf(n).valueOf()
					},
					endOf: function(t, n) {
						return e(t).endOf(n).valueOf()
					},
					_create: function(t) {
						return e(t)
					}
				} : {}), oe._set("global", {
					plugins: {
						filler: {
							propagate: !0
						}
					}
				});
				var sa = {
					dataset: function(e) {
						var t = e.fill,
							n = e.chart,
							a = n.getDatasetMeta(t),
							s = a && n.isDatasetVisible(t) && a.dataset._children || [],
							r = s.length || 0;
						return r ? function(e, t) {
							return t < r && s[t]._view || null
						} : null
					},
					boundary: function(e) {
						var t = e.boundary,
							n = t ? t.x : null,
							a = t ? t.y : null;
						return function(e) {
							return {
								x: null === n ? e.x : n,
								y: null === a ? e.y : a
							}
						}
					}
				};

				function ra(e, t, n) {
					var a, s = e._model || {},
						r = s.fill;
					if (void 0 === r && (r = !!s.backgroundColor), !1 === r || null === r) return !1;
					if (!0 === r) return "origin";
					if (a = parseFloat(r, 10), isFinite(a) && Math.floor(a) === a) return "-" !== r[0] && "+" !== r[0] || (a = t + a), !(a === t || a < 0 || a >= n) && a;
					switch (r) {
						case "bottom":
							return "start";
						case "top":
							return "end";
						case "zero":
							return "origin";
						case "origin":
						case "start":
						case "end":
							return r;
						default:
							return !1
					}
				}

				function ia(e) {
					var t, n = e.el._model || {},
						a = e.el._scale || {},
						s = e.fill,
						r = null;
					if (isFinite(s)) return null;
					if ("start" === s ? r = void 0 === n.scaleBottom ? a.bottom : n.scaleBottom : "end" === s ? r = void 0 === n.scaleTop ? a.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : a.getBasePosition ? r = a.getBasePosition() : a.getBasePixel && (r = a.getBasePixel()), null != r) {
						if (void 0 !== r.x && void 0 !== r.y) return r;
						if (ue.isFinite(r)) return {
							x: (t = a.isHorizontal()) ? r : null,
							y: t ? null : r
						}
					}
					return null
				}

				function oa(e, t, n) {
					var a, s = e[t].fill,
						r = [t];
					if (!n) return s;
					for (; !1 !== s && -1 === r.indexOf(s);) {
						if (!isFinite(s)) return s;
						if (!(a = e[s])) return !1;
						if (a.visible) return s;
						r.push(s), s = a.fill
					}
					return !1
				}

				function da(e) {
					var t = e.fill,
						n = "dataset";
					return !1 === t ? null : (isFinite(t) || (n = "boundary"), sa[n](e))
				}

				function la(e) {
					return e && !e.skip
				}

				function ua(e, t, n, a, s) {
					var r;
					if (a && s) {
						for (e.moveTo(t[0].x, t[0].y), r = 1; r < a; ++r) ue.canvas.lineTo(e, t[r - 1], t[r]);
						for (e.lineTo(n[s - 1].x, n[s - 1].y), r = s - 1; r > 0; --r) ue.canvas.lineTo(e, n[r], n[r - 1], !0)
					}
				}
				var ma = {
						id: "filler",
						afterDatasetsUpdate: function(e, t) {
							var n, a, s, r, i = (e.data.datasets || []).length,
								o = t.propagate,
								d = [];
							for (a = 0; a < i; ++a) r = null, (s = (n = e.getDatasetMeta(a)).dataset) && s._model && s instanceof Ie.Line && (r = {
								visible: e.isDatasetVisible(a),
								fill: ra(s, a, i),
								chart: e,
								el: s
							}), n.$filler = r, d.push(r);
							for (a = 0; a < i; ++a)(r = d[a]) && (r.fill = oa(d, a, o), r.boundary = ia(r), r.mapper = da(r))
						},
						beforeDatasetDraw: function(e, t) {
							var n = t.meta.$filler;
							if (n) {
								var a = e.ctx,
									s = n.el,
									r = s._view,
									i = s._children || [],
									o = n.mapper,
									d = r.backgroundColor || oe.global.defaultColor;
								o && d && i.length && (ue.canvas.clipArea(a, e.chartArea), function(e, t, n, a, s, r) {
									var i, o, d, l, u, m, _, h = t.length,
										c = a.spanGaps,
										f = [],
										p = [],
										M = 0,
										y = 0;
									for (e.beginPath(), i = 0, o = h + !!r; i < o; ++i) u = n(l = t[d = i % h]._view, d, a), m = la(l), _ = la(u), m && _ ? (M = f.push(l), y = p.push(u)) : M && y && (c ? (m && f.push(l), _ && p.push(u)) : (ua(e, f, p, M, y), M = y = 0, f = [], p = []));
									ua(e, f, p, M, y), e.closePath(), e.fillStyle = s, e.fill()
								}(a, i, o, r, d, s._loop), ue.canvas.unclipArea(a))
							}
						}
					},
					_a = ue.noop,
					ha = ue.valueOrDefault;

				function ca(e, t) {
					return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
				}
				oe._set("global", {
					legend: {
						display: !0,
						position: "top",
						fullWidth: !0,
						reverse: !1,
						weight: 1e3,
						onClick: function(e, t) {
							var n = t.datasetIndex,
								a = this.chart,
								s = a.getDatasetMeta(n);
							s.hidden = null === s.hidden ? !a.data.datasets[n].hidden : null, a.update()
						},
						onHover: null,
						onLeave: null,
						labels: {
							boxWidth: 40,
							padding: 10,
							generateLabels: function(e) {
								var t = e.data;
								return ue.isArray(t.datasets) ? t.datasets.map((function(t, n) {
									return {
										text: t.label,
										fillStyle: ue.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
										hidden: !e.isDatasetVisible(n),
										lineCap: t.borderCapStyle,
										lineDash: t.borderDash,
										lineDashOffset: t.borderDashOffset,
										lineJoin: t.borderJoinStyle,
										lineWidth: t.borderWidth,
										strokeStyle: t.borderColor,
										pointStyle: t.pointStyle,
										datasetIndex: n
									}
								}), this) : []
							}
						}
					},
					legendCallback: function(e) {
						var t = [];
						t.push('<ul class="' + e.id + '-legend">');
						for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
						return t.push("</ul>"), t.join("")
					}
				});
				var fa = fe.extend({
					initialize: function(e) {
						ue.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
					},
					beforeUpdate: _a,
					update: function(e, t, n) {
						var a = this;
						return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
					},
					afterUpdate: _a,
					beforeSetDimensions: _a,
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: _a,
					beforeBuildLabels: _a,
					buildLabels: function() {
						var e = this,
							t = e.options.labels || {},
							n = ue.callback(t.generateLabels, [e.chart], e) || [];
						t.filter && (n = n.filter((function(n) {
							return t.filter(n, e.chart.data)
						}))), e.options.reverse && n.reverse(), e.legendItems = n
					},
					afterBuildLabels: _a,
					beforeFit: _a,
					fit: function() {
						var e = this,
							t = e.options,
							n = t.labels,
							a = t.display,
							s = e.ctx,
							r = ue.options._parseFont(n),
							i = r.size,
							o = e.legendHitBoxes = [],
							d = e.minSize,
							l = e.isHorizontal();
						if (l ? (d.width = e.maxWidth, d.height = a ? 10 : 0) : (d.width = a ? 10 : 0, d.height = e.maxHeight), a)
							if (s.font = r.string, l) {
								var u = e.lineWidths = [0],
									m = 0;
								s.textAlign = "left", s.textBaseline = "top", ue.each(e.legendItems, (function(e, t) {
									var a = ca(n, i) + i / 2 + s.measureText(e.text).width;
									(0 === t || u[u.length - 1] + a + n.padding > d.width) && (m += i + n.padding, u[u.length - (t > 0 ? 0 : 1)] = n.padding), o[t] = {
										left: 0,
										top: 0,
										width: a,
										height: i
									}, u[u.length - 1] += a + n.padding
								})), d.height += m
							} else {
								var _ = n.padding,
									h = e.columnWidths = [],
									c = n.padding,
									f = 0,
									p = 0,
									M = i + _;
								ue.each(e.legendItems, (function(e, t) {
									var a = ca(n, i) + i / 2 + s.measureText(e.text).width;
									t > 0 && p + M > d.height - _ && (c += f + n.padding, h.push(f), f = 0, p = 0), f = Math.max(f, a), p += M, o[t] = {
										left: 0,
										top: 0,
										width: a,
										height: i
									}
								})), c += f, h.push(f), d.width += c
							} e.width = d.width, e.height = d.height
					},
					afterFit: _a,
					isHorizontal: function() {
						return "top" === this.options.position || "bottom" === this.options.position
					},
					draw: function() {
						var e = this,
							t = e.options,
							n = t.labels,
							a = oe.global,
							s = a.defaultColor,
							r = a.elements.line,
							i = e.width,
							o = e.lineWidths;
						if (t.display) {
							var d, l = e.ctx,
								u = ha(n.fontColor, a.defaultFontColor),
								m = ue.options._parseFont(n),
								_ = m.size;
							l.textAlign = "left", l.textBaseline = "middle", l.lineWidth = .5, l.strokeStyle = u, l.fillStyle = u, l.font = m.string;
							var h = ca(n, _),
								c = e.legendHitBoxes,
								f = e.isHorizontal();
							d = f ? {
								x: e.left + (i - o[0]) / 2 + n.padding,
								y: e.top + n.padding,
								line: 0
							} : {
								x: e.left + n.padding,
								y: e.top + n.padding,
								line: 0
							};
							var p = _ + n.padding;
							ue.each(e.legendItems, (function(a, u) {
								var m = l.measureText(a.text).width,
									M = h + _ / 2 + m,
									y = d.x,
									g = d.y;
								f ? u > 0 && y + M + n.padding > e.left + e.minSize.width && (g = d.y += p, d.line++, y = d.x = e.left + (i - o[d.line]) / 2 + n.padding) : u > 0 && g + p > e.top + e.minSize.height && (y = d.x = y + e.columnWidths[d.line] + n.padding, g = d.y = e.top + n.padding, d.line++),
									function(e, n, a) {
										if (!(isNaN(h) || h <= 0)) {
											l.save();
											var i = ha(a.lineWidth, r.borderWidth);
											if (l.fillStyle = ha(a.fillStyle, s), l.lineCap = ha(a.lineCap, r.borderCapStyle), l.lineDashOffset = ha(a.lineDashOffset, r.borderDashOffset), l.lineJoin = ha(a.lineJoin, r.borderJoinStyle), l.lineWidth = i, l.strokeStyle = ha(a.strokeStyle, s), l.setLineDash && l.setLineDash(ha(a.lineDash, r.borderDash)), t.labels && t.labels.usePointStyle) {
												var o = h * Math.SQRT2 / 2,
													d = e + h / 2,
													u = n + _ / 2;
												ue.canvas.drawPoint(l, a.pointStyle, o, d, u)
											} else 0 !== i && l.strokeRect(e, n, h, _), l.fillRect(e, n, h, _);
											l.restore()
										}
									}(y, g, a), c[u].left = y, c[u].top = g,
									function(e, t, n, a) {
										var s = _ / 2,
											r = h + s + e,
											i = t + s;
										l.fillText(n.text, r, i), n.hidden && (l.beginPath(), l.lineWidth = 2, l.moveTo(r, i), l.lineTo(r + a, i), l.stroke())
									}(y, g, a, m), f ? d.x += M + n.padding : d.y += p
							}))
						}
					},
					_getLegendItemAt: function(e, t) {
						var n, a, s, r = this;
						if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom)
							for (s = r.legendHitBoxes, n = 0; n < s.length; ++n)
								if (e >= (a = s[n]).left && e <= a.left + a.width && t >= a.top && t <= a.top + a.height) return r.legendItems[n];
						return null
					},
					handleEvent: function(e) {
						var t, n = this,
							a = n.options,
							s = "mouseup" === e.type ? "click" : e.type;
						if ("mousemove" === s) {
							if (!a.onHover && !a.onLeave) return
						} else {
							if ("click" !== s) return;
							if (!a.onClick) return
						}
						t = n._getLegendItemAt(e.x, e.y), "click" === s ? t && a.onClick && a.onClick.call(n, e.native, t) : (a.onLeave && t !== n._hoveredItem && (n._hoveredItem && a.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), a.onHover && t && a.onHover.call(n, e.native, t))
					}
				});

				function pa(e, t) {
					var n = new fa({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					vt.configure(e, n, t), vt.addBox(e, n), e.legend = n
				}
				var Ma = {
						id: "legend",
						_element: fa,
						beforeInit: function(e) {
							var t = e.options.legend;
							t && pa(e, t)
						},
						beforeUpdate: function(e) {
							var t = e.options.legend,
								n = e.legend;
							t ? (ue.mergeIf(t, oe.global.legend), n ? (vt.configure(e, n, t), n.options = t) : pa(e, t)) : n && (vt.removeBox(e, n), delete e.legend)
						},
						afterEvent: function(e, t) {
							var n = e.legend;
							n && n.handleEvent(t)
						}
					},
					ya = ue.noop;
				oe._set("global", {
					title: {
						display: !1,
						fontStyle: "bold",
						fullWidth: !0,
						padding: 10,
						position: "top",
						text: "",
						weight: 2e3
					}
				});
				var ga = fe.extend({
					initialize: function(e) {
						ue.extend(this, e), this.legendHitBoxes = []
					},
					beforeUpdate: ya,
					update: function(e, t, n) {
						var a = this;
						return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
					},
					afterUpdate: ya,
					beforeSetDimensions: ya,
					setDimensions: function() {
						var e = this;
						e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
							width: 0,
							height: 0
						}
					},
					afterSetDimensions: ya,
					beforeBuildLabels: ya,
					buildLabels: ya,
					afterBuildLabels: ya,
					beforeFit: ya,
					fit: function() {
						var e = this,
							t = e.options,
							n = t.display,
							a = e.minSize,
							s = ue.isArray(t.text) ? t.text.length : 1,
							r = ue.options._parseFont(t),
							i = n ? s * r.lineHeight + 2 * t.padding : 0;
						e.isHorizontal() ? (a.width = e.maxWidth, a.height = i) : (a.width = i, a.height = e.maxHeight), e.width = a.width, e.height = a.height
					},
					afterFit: ya,
					isHorizontal: function() {
						var e = this.options.position;
						return "top" === e || "bottom" === e
					},
					draw: function() {
						var e = this,
							t = e.ctx,
							n = e.options;
						if (n.display) {
							var a, s, r, i = ue.options._parseFont(n),
								o = i.lineHeight,
								d = o / 2 + n.padding,
								l = 0,
								u = e.top,
								m = e.left,
								_ = e.bottom,
								h = e.right;
							t.fillStyle = ue.valueOrDefault(n.fontColor, oe.global.defaultFontColor), t.font = i.string, e.isHorizontal() ? (s = m + (h - m) / 2, r = u + d, a = h - m) : (s = "left" === n.position ? m + d : h - d, r = u + (_ - u) / 2, a = _ - u, l = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(s, r), t.rotate(l), t.textAlign = "center", t.textBaseline = "middle";
							var c = n.text;
							if (ue.isArray(c))
								for (var f = 0, p = 0; p < c.length; ++p) t.fillText(c[p], 0, f, a), f += o;
							else t.fillText(c, 0, 0, a);
							t.restore()
						}
					}
				});

				function La(e, t) {
					var n = new ga({
						ctx: e.ctx,
						options: t,
						chart: e
					});
					vt.configure(e, n, t), vt.addBox(e, n), e.titleBlock = n
				}
				var Ya = {},
					va = ma,
					ka = Ma,
					ba = {
						id: "title",
						_element: ga,
						beforeInit: function(e) {
							var t = e.options.title;
							t && La(e, t)
						},
						beforeUpdate: function(e) {
							var t = e.options.title,
								n = e.titleBlock;
							t ? (ue.mergeIf(t, oe.global.title), n ? (vt.configure(e, n, t), n.options = t) : La(e, t)) : n && (vt.removeBox(e, n), delete e.titleBlock)
						}
					};
				for (var Da in Ya.filler = va, Ya.legend = ka, Ya.title = ba, rn.helpers = ue,
						function() {
							function e(e, t, n) {
								var a;
								return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a
							}

							function t(e) {
								return null != e && "none" !== e
							}

							function n(n, a, s) {
								var r = document.defaultView,
									i = ue._getParentNode(n),
									o = r.getComputedStyle(n)[a],
									d = r.getComputedStyle(i)[a],
									l = t(o),
									u = t(d),
									m = Number.POSITIVE_INFINITY;
								return l || u ? Math.min(l ? e(o, n, s) : m, u ? e(d, i, s) : m) : "none"
							}
							ue.where = function(e, t) {
								if (ue.isArray(e) && Array.prototype.filter) return e.filter(t);
								var n = [];
								return ue.each(e, (function(e) {
									t(e) && n.push(e)
								})), n
							}, ue.findIndex = Array.prototype.findIndex ? function(e, t, n) {
								return e.findIndex(t, n)
							} : function(e, t, n) {
								n = void 0 === n ? e : n;
								for (var a = 0, s = e.length; a < s; ++a)
									if (t.call(n, e[a], a, e)) return a;
								return -1
							}, ue.findNextWhere = function(e, t, n) {
								ue.isNullOrUndef(n) && (n = -1);
								for (var a = n + 1; a < e.length; a++) {
									var s = e[a];
									if (t(s)) return s
								}
							}, ue.findPreviousWhere = function(e, t, n) {
								ue.isNullOrUndef(n) && (n = e.length);
								for (var a = n - 1; a >= 0; a--) {
									var s = e[a];
									if (t(s)) return s
								}
							}, ue.isNumber = function(e) {
								return !isNaN(parseFloat(e)) && isFinite(e)
							}, ue.almostEquals = function(e, t, n) {
								return Math.abs(e - t) < n
							}, ue.almostWhole = function(e, t) {
								var n = Math.round(e);
								return n - t < e && n + t > e
							}, ue.max = function(e) {
								return e.reduce((function(e, t) {
									return isNaN(t) ? e : Math.max(e, t)
								}), Number.NEGATIVE_INFINITY)
							}, ue.min = function(e) {
								return e.reduce((function(e, t) {
									return isNaN(t) ? e : Math.min(e, t)
								}), Number.POSITIVE_INFINITY)
							}, ue.sign = Math.sign ? function(e) {
								return Math.sign(e)
							} : function(e) {
								return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
							}, ue.log10 = Math.log10 ? function(e) {
								return Math.log10(e)
							} : function(e) {
								var t = Math.log(e) * Math.LOG10E,
									n = Math.round(t);
								return e === Math.pow(10, n) ? n : t
							}, ue.toRadians = function(e) {
								return e * (Math.PI / 180)
							}, ue.toDegrees = function(e) {
								return e * (180 / Math.PI)
							}, ue._decimalPlaces = function(e) {
								if (ue.isFinite(e)) {
									for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++;
									return n
								}
							}, ue.getAngleFromPoint = function(e, t) {
								var n = t.x - e.x,
									a = t.y - e.y,
									s = Math.sqrt(n * n + a * a),
									r = Math.atan2(a, n);
								return r < -.5 * Math.PI && (r += 2 * Math.PI), {
									angle: r,
									distance: s
								}
							}, ue.distanceBetweenPoints = function(e, t) {
								return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
							}, ue.aliasPixel = function(e) {
								return e % 2 == 0 ? 0 : .5
							}, ue._alignPixel = function(e, t, n) {
								var a = e.currentDevicePixelRatio,
									s = n / 2;
								return Math.round((t - s) * a) / a + s
							}, ue.splineCurve = function(e, t, n, a) {
								var s = e.skip ? t : e,
									r = t,
									i = n.skip ? t : n,
									o = Math.sqrt(Math.pow(r.x - s.x, 2) + Math.pow(r.y - s.y, 2)),
									d = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)),
									l = o / (o + d),
									u = d / (o + d),
									m = a * (l = isNaN(l) ? 0 : l),
									_ = a * (u = isNaN(u) ? 0 : u);
								return {
									previous: {
										x: r.x - m * (i.x - s.x),
										y: r.y - m * (i.y - s.y)
									},
									next: {
										x: r.x + _ * (i.x - s.x),
										y: r.y + _ * (i.y - s.y)
									}
								}
							}, ue.EPSILON = Number.EPSILON || 1e-14, ue.splineCurveMonotone = function(e) {
								var t, n, a, s, r, i, o, d, l, u = (e || []).map((function(e) {
										return {
											model: e._model,
											deltaK: 0,
											mK: 0
										}
									})),
									m = u.length;
								for (t = 0; t < m; ++t)
									if (!(a = u[t]).model.skip) {
										if (n = t > 0 ? u[t - 1] : null, (s = t < m - 1 ? u[t + 1] : null) && !s.model.skip) {
											var _ = s.model.x - a.model.x;
											a.deltaK = 0 !== _ ? (s.model.y - a.model.y) / _ : 0
										}!n || n.model.skip ? a.mK = a.deltaK : !s || s.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2
									} for (t = 0; t < m - 1; ++t) a = u[t], s = u[t + 1], a.model.skip || s.model.skip || (ue.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = s.mK = 0 : (r = a.mK / a.deltaK, i = s.mK / a.deltaK, (d = Math.pow(r, 2) + Math.pow(i, 2)) <= 9 || (o = 3 / Math.sqrt(d), a.mK = r * o * a.deltaK, s.mK = i * o * a.deltaK)));
								for (t = 0; t < m; ++t)(a = u[t]).model.skip || (n = t > 0 ? u[t - 1] : null, s = t < m - 1 ? u[t + 1] : null, n && !n.model.skip && (l = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - l, a.model.controlPointPreviousY = a.model.y - l * a.mK), s && !s.model.skip && (l = (s.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + l, a.model.controlPointNextY = a.model.y + l * a.mK))
							}, ue.nextItem = function(e, t, n) {
								return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
							}, ue.previousItem = function(e, t, n) {
								return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
							}, ue.niceNum = function(e, t) {
								var n = Math.floor(ue.log10(e)),
									a = e / Math.pow(10, n);
								return (t ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n)
							}, ue.requestAnimFrame = "undefined" == typeof window ? function(e) {
								e()
							} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
								return window.setTimeout(e, 1e3 / 60)
							}, ue.getRelativePosition = function(e, t) {
								var n, a, s = e.originalEvent || e,
									r = e.target || e.srcElement,
									i = r.getBoundingClientRect(),
									o = s.touches;
								o && o.length > 0 ? (n = o[0].clientX, a = o[0].clientY) : (n = s.clientX, a = s.clientY);
								var d = parseFloat(ue.getStyle(r, "padding-left")),
									l = parseFloat(ue.getStyle(r, "padding-top")),
									u = parseFloat(ue.getStyle(r, "padding-right")),
									m = parseFloat(ue.getStyle(r, "padding-bottom")),
									_ = i.right - i.left - d - u,
									h = i.bottom - i.top - l - m;
								return {
									x: n = Math.round((n - i.left - d) / _ * r.width / t.currentDevicePixelRatio),
									y: a = Math.round((a - i.top - l) / h * r.height / t.currentDevicePixelRatio)
								}
							}, ue.getConstraintWidth = function(e) {
								return n(e, "max-width", "clientWidth")
							}, ue.getConstraintHeight = function(e) {
								return n(e, "max-height", "clientHeight")
							}, ue._calculatePadding = function(e, t, n) {
								return (t = ue.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10)
							}, ue._getParentNode = function(e) {
								var t = e.parentNode;
								return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
							}, ue.getMaximumWidth = function(e) {
								var t = ue._getParentNode(e);
								if (!t) return e.clientWidth;
								var n = t.clientWidth,
									a = n - ue._calculatePadding(t, "padding-left", n) - ue._calculatePadding(t, "padding-right", n),
									s = ue.getConstraintWidth(e);
								return isNaN(s) ? a : Math.min(a, s)
							}, ue.getMaximumHeight = function(e) {
								var t = ue._getParentNode(e);
								if (!t) return e.clientHeight;
								var n = t.clientHeight,
									a = n - ue._calculatePadding(t, "padding-top", n) - ue._calculatePadding(t, "padding-bottom", n),
									s = ue.getConstraintHeight(e);
								return isNaN(s) ? a : Math.min(a, s)
							}, ue.getStyle = function(e, t) {
								return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
							}, ue.retinaScale = function(e, t) {
								var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
								if (1 !== n) {
									var a = e.canvas,
										s = e.height,
										r = e.width;
									a.height = s * n, a.width = r * n, e.ctx.scale(n, n), a.style.height || a.style.width || (a.style.height = s + "px", a.style.width = r + "px")
								}
							}, ue.fontString = function(e, t, n) {
								return t + " " + e + "px " + n
							}, ue.longestText = function(e, t, n, a) {
								var s = (a = a || {}).data = a.data || {},
									r = a.garbageCollect = a.garbageCollect || [];
								a.font !== t && (s = a.data = {}, r = a.garbageCollect = [], a.font = t), e.font = t;
								var i = 0;
								ue.each(n, (function(t) {
									null != t && !0 !== ue.isArray(t) ? i = ue.measureText(e, s, r, i, t) : ue.isArray(t) && ue.each(t, (function(t) {
										null == t || ue.isArray(t) || (i = ue.measureText(e, s, r, i, t))
									}))
								}));
								var o = r.length / 2;
								if (o > n.length) {
									for (var d = 0; d < o; d++) delete s[r[d]];
									r.splice(0, o)
								}
								return i
							}, ue.measureText = function(e, t, n, a, s) {
								var r = t[s];
								return r || (r = t[s] = e.measureText(s).width, n.push(s)), r > a && (a = r), a
							}, ue.numberOfLabelLines = function(e) {
								var t = 1;
								return ue.each(e, (function(e) {
									ue.isArray(e) && e.length > t && (t = e.length)
								})), t
							}, ue.color = G ? function(e) {
								return e instanceof CanvasGradient && (e = oe.global.defaultColor), G(e)
							} : function(e) {
								return console.error("Color.js not found!"), e
							}, ue.getHoverColor = function(e) {
								return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : ue.color(e).saturate(.5).darken(.1).rgbString()
							}
						}(), rn._adapters = ln, rn.Animation = Me, rn.animationService = ye, rn.controllers = ut, rn.DatasetController = ke, rn.defaults = oe, rn.Element = fe, rn.elements = Ie, rn.Interaction = Mt, rn.layouts = vt, rn.platform = zt, rn.plugins = Rt, rn.Scale = fn, rn.scaleService = Nt, rn.Ticks = un, rn.Tooltip = Xt, rn.helpers.each(na, (function(e, t) {
							rn.scaleService.registerScaleType(t, e, e._defaults)
						})), Ya) Ya.hasOwnProperty(Da) && rn.plugins.register(Ya[Da]);
				rn.platform.initialize();
				var wa = rn;
				return "undefined" != typeof window && (window.Chart = rn), rn.Chart = rn, rn.Legend = Ya.legend._element, rn.Title = Ya.title._element, rn.pluginService = rn.plugins, rn.PluginBase = rn.Element.extend({}), rn.canvasHelpers = rn.helpers.canvas, rn.layoutService = rn.layouts, rn.LinearScaleBase = Ln, rn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(e) {
					rn[e] = function(t, n) {
						return new rn(t, rn.helpers.merge(n || {}, {
							type: e.charAt(0).toLowerCase() + e.slice(1)
						}))
					}
				})), wa
			}(function() {
				try {
					return n("./node_modules/chart.js/node_modules/moment/moment.js")
				} catch (e) {}
			}())
		},
		"./node_modules/chart.js/node_modules/moment/locale/af.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("af", {
					months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
					monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
					weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
					weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
					weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
					meridiemParse: /vm|nm/i,
					isPM: function(e) {
						return /^nm$/i.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
					},
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Vandag om] LT",
						nextDay: "[Môre om] LT",
						nextWeek: "dddd [om] LT",
						lastDay: "[Gister om] LT",
						lastWeek: "[Laas] dddd [om] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "oor %s",
						past: "%s gelede",
						s: "'n paar sekondes",
						ss: "%d sekondes",
						m: "'n minuut",
						mm: "%d minute",
						h: "'n uur",
						hh: "%d ure",
						d: "'n dag",
						dd: "%d dae",
						M: "'n maand",
						MM: "%d maande",
						y: "'n jaar",
						yy: "%d jaar"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
					ordinal: function(e) {
						return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar-dz.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-dz", {
					months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
					monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
					weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[اليوم على الساعة] LT",
						nextDay: "[غدا على الساعة] LT",
						nextWeek: "dddd [على الساعة] LT",
						lastDay: "[أمس على الساعة] LT",
						lastWeek: "dddd [على الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "في %s",
						past: "منذ %s",
						s: "ثوان",
						ss: "%d ثانية",
						m: "دقيقة",
						mm: "%d دقائق",
						h: "ساعة",
						hh: "%d ساعات",
						d: "يوم",
						dd: "%d أيام",
						M: "شهر",
						MM: "%d أشهر",
						y: "سنة",
						yy: "%d سنوات"
					},
					week: {
						dow: 0,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar-kw.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-kw", {
					months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
					monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
					weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[اليوم على الساعة] LT",
						nextDay: "[غدا على الساعة] LT",
						nextWeek: "dddd [على الساعة] LT",
						lastDay: "[أمس على الساعة] LT",
						lastWeek: "dddd [على الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "في %s",
						past: "منذ %s",
						s: "ثوان",
						ss: "%d ثانية",
						m: "دقيقة",
						mm: "%d دقائق",
						h: "ساعة",
						hh: "%d ساعات",
						d: "يوم",
						dd: "%d أيام",
						M: "شهر",
						MM: "%d أشهر",
						y: "سنة",
						yy: "%d سنوات"
					},
					week: {
						dow: 0,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar-ly.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "1",
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						0: "0"
					},
					n = function(e) {
						return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
					},
					a = {
						s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
						m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
						h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
						d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
						M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
						y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
					},
					s = function(e) {
						return function(t, s, r, i) {
							var o = n(t),
								d = a[e][n(t)];
							return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, t)
						}
					},
					r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
				e.defineLocale("ar-ly", {
					months: r,
					monthsShort: r,
					weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "D/‏M/‏YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /ص|م/,
					isPM: function(e) {
						return "م" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ص" : "م"
					},
					calendar: {
						sameDay: "[اليوم عند الساعة] LT",
						nextDay: "[غدًا عند الساعة] LT",
						nextWeek: "dddd [عند الساعة] LT",
						lastDay: "[أمس عند الساعة] LT",
						lastWeek: "dddd [عند الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "بعد %s",
						past: "منذ %s",
						s: s("s"),
						ss: s("s"),
						m: s("m"),
						mm: s("m"),
						h: s("h"),
						hh: s("h"),
						d: s("d"),
						dd: s("d"),
						M: s("M"),
						MM: s("M"),
						y: s("y"),
						yy: s("y")
					},
					preparse: function(e) {
						return e.replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						})).replace(/,/g, "،")
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar-ma.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-ma", {
					months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
					monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
					weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[اليوم على الساعة] LT",
						nextDay: "[غدا على الساعة] LT",
						nextWeek: "dddd [على الساعة] LT",
						lastDay: "[أمس على الساعة] LT",
						lastWeek: "dddd [على الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "في %s",
						past: "منذ %s",
						s: "ثوان",
						ss: "%d ثانية",
						m: "دقيقة",
						mm: "%d دقائق",
						h: "ساعة",
						hh: "%d ساعات",
						d: "يوم",
						dd: "%d أيام",
						M: "شهر",
						MM: "%d أشهر",
						y: "سنة",
						yy: "%d سنوات"
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar-sa.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "١",
						2: "٢",
						3: "٣",
						4: "٤",
						5: "٥",
						6: "٦",
						7: "٧",
						8: "٨",
						9: "٩",
						0: "٠"
					},
					n = {
						"١": "1",
						"٢": "2",
						"٣": "3",
						"٤": "4",
						"٥": "5",
						"٦": "6",
						"٧": "7",
						"٨": "8",
						"٩": "9",
						"٠": "0"
					};
				e.defineLocale("ar-sa", {
					months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
					monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
					weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /ص|م/,
					isPM: function(e) {
						return "م" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ص" : "م"
					},
					calendar: {
						sameDay: "[اليوم على الساعة] LT",
						nextDay: "[غدا على الساعة] LT",
						nextWeek: "dddd [على الساعة] LT",
						lastDay: "[أمس على الساعة] LT",
						lastWeek: "dddd [على الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "في %s",
						past: "منذ %s",
						s: "ثوان",
						ss: "%d ثانية",
						m: "دقيقة",
						mm: "%d دقائق",
						h: "ساعة",
						hh: "%d ساعات",
						d: "يوم",
						dd: "%d أيام",
						M: "شهر",
						MM: "%d أشهر",
						y: "سنة",
						yy: "%d سنوات"
					},
					preparse: function(e) {
						return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
							return n[e]
						})).replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						})).replace(/,/g, "،")
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar-tn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ar-tn", {
					months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
					monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
					weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[اليوم على الساعة] LT",
						nextDay: "[غدا على الساعة] LT",
						nextWeek: "dddd [على الساعة] LT",
						lastDay: "[أمس على الساعة] LT",
						lastWeek: "dddd [على الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "في %s",
						past: "منذ %s",
						s: "ثوان",
						ss: "%d ثانية",
						m: "دقيقة",
						mm: "%d دقائق",
						h: "ساعة",
						hh: "%d ساعات",
						d: "يوم",
						dd: "%d أيام",
						M: "شهر",
						MM: "%d أشهر",
						y: "سنة",
						yy: "%d سنوات"
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ar.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "١",
						2: "٢",
						3: "٣",
						4: "٤",
						5: "٥",
						6: "٦",
						7: "٧",
						8: "٨",
						9: "٩",
						0: "٠"
					},
					n = {
						"١": "1",
						"٢": "2",
						"٣": "3",
						"٤": "4",
						"٥": "5",
						"٦": "6",
						"٧": "7",
						"٨": "8",
						"٩": "9",
						"٠": "0"
					},
					a = function(e) {
						return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
					},
					s = {
						s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
						m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
						h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
						d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
						M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
						y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
					},
					r = function(e) {
						return function(t, n, r, i) {
							var o = a(t),
								d = s[e][a(t)];
							return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
						}
					},
					i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
				e.defineLocale("ar", {
					months: i,
					monthsShort: i,
					weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
					weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
					weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "D/‏M/‏YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /ص|م/,
					isPM: function(e) {
						return "م" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ص" : "م"
					},
					calendar: {
						sameDay: "[اليوم عند الساعة] LT",
						nextDay: "[غدًا عند الساعة] LT",
						nextWeek: "dddd [عند الساعة] LT",
						lastDay: "[أمس عند الساعة] LT",
						lastWeek: "dddd [عند الساعة] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "بعد %s",
						past: "منذ %s",
						s: r("s"),
						ss: r("s"),
						m: r("m"),
						mm: r("m"),
						h: r("h"),
						hh: r("h"),
						d: r("d"),
						dd: r("d"),
						M: r("M"),
						MM: r("M"),
						y: r("y"),
						yy: r("y")
					},
					preparse: function(e) {
						return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
							return n[e]
						})).replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						})).replace(/,/g, "،")
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/az.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					1: "-inci",
					5: "-inci",
					8: "-inci",
					70: "-inci",
					80: "-inci",
					2: "-nci",
					7: "-nci",
					20: "-nci",
					50: "-nci",
					3: "-üncü",
					4: "-üncü",
					100: "-üncü",
					6: "-ncı",
					9: "-uncu",
					10: "-uncu",
					30: "-uncu",
					60: "-ıncı",
					90: "-ıncı"
				};
				e.defineLocale("az", {
					months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
					monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
					weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
					weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
					weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[bugün saat] LT",
						nextDay: "[sabah saat] LT",
						nextWeek: "[gələn həftə] dddd [saat] LT",
						lastDay: "[dünən] LT",
						lastWeek: "[keçən həftə] dddd [saat] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s sonra",
						past: "%s əvvəl",
						s: "birneçə saniyə",
						ss: "%d saniyə",
						m: "bir dəqiqə",
						mm: "%d dəqiqə",
						h: "bir saat",
						hh: "%d saat",
						d: "bir gün",
						dd: "%d gün",
						M: "bir ay",
						MM: "%d ay",
						y: "bir il",
						yy: "%d il"
					},
					meridiemParse: /gecə|səhər|gündüz|axşam/,
					isPM: function(e) {
						return /^(gündüz|axşam)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
					ordinal: function(e) {
						if (0 === e) return e + "-ıncı";
						var n = e % 10;
						return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/be.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var a, s;
					return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (a = +e, s = {
						ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
						mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
						hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
						dd: "дзень_дні_дзён",
						MM: "месяц_месяцы_месяцаў",
						yy: "год_гады_гадоў"
					} [n].split("_"), a % 10 == 1 && a % 100 != 11 ? s[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? s[1] : s[2])
				}
				e.defineLocale("be", {
					months: {
						format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
						standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
					},
					monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
					weekdays: {
						format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
						standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
						isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
					},
					weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
					weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY г.",
						LLL: "D MMMM YYYY г., HH:mm",
						LLLL: "dddd, D MMMM YYYY г., HH:mm"
					},
					calendar: {
						sameDay: "[Сёння ў] LT",
						nextDay: "[Заўтра ў] LT",
						lastDay: "[Учора ў] LT",
						nextWeek: function() {
							return "[У] dddd [ў] LT"
						},
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
								case 5:
								case 6:
									return "[У мінулую] dddd [ў] LT";
								case 1:
								case 2:
								case 4:
									return "[У мінулы] dddd [ў] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "праз %s",
						past: "%s таму",
						s: "некалькі секунд",
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: "дзень",
						dd: t,
						M: "месяц",
						MM: t,
						y: "год",
						yy: t
					},
					meridiemParse: /ночы|раніцы|дня|вечара/,
					isPM: function(e) {
						return /^(дня|вечара)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
					ordinal: function(e, t) {
						switch (t) {
							case "M":
							case "d":
							case "DDD":
							case "w":
							case "W":
								return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
							case "D":
								return e + "-га";
							default:
								return e
						}
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/bg.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("bg", {
					months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
					monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
					weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
					weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
					weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "D.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY H:mm",
						LLLL: "dddd, D MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[Днес в] LT",
						nextDay: "[Утре в] LT",
						nextWeek: "dddd [в] LT",
						lastDay: "[Вчера в] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
								case 6:
									return "[В изминалата] dddd [в] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[В изминалия] dddd [в] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "след %s",
						past: "преди %s",
						s: "няколко секунди",
						ss: "%d секунди",
						m: "минута",
						mm: "%d минути",
						h: "час",
						hh: "%d часа",
						d: "ден",
						dd: "%d дни",
						M: "месец",
						MM: "%d месеца",
						y: "година",
						yy: "%d години"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
					ordinal: function(e) {
						var t = e % 10,
							n = e % 100;
						return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/bm.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("bm", {
					months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
					monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
					weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
					weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
					weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "MMMM [tile] D [san] YYYY",
						LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
						LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
					},
					calendar: {
						sameDay: "[Bi lɛrɛ] LT",
						nextDay: "[Sini lɛrɛ] LT",
						nextWeek: "dddd [don lɛrɛ] LT",
						lastDay: "[Kunu lɛrɛ] LT",
						lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s kɔnɔ",
						past: "a bɛ %s bɔ",
						s: "sanga dama dama",
						ss: "sekondi %d",
						m: "miniti kelen",
						mm: "miniti %d",
						h: "lɛrɛ kelen",
						hh: "lɛrɛ %d",
						d: "tile kelen",
						dd: "tile %d",
						M: "kalo kelen",
						MM: "kalo %d",
						y: "san kelen",
						yy: "san %d"
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/bn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "১",
						2: "২",
						3: "৩",
						4: "৪",
						5: "৫",
						6: "৬",
						7: "৭",
						8: "৮",
						9: "৯",
						0: "০"
					},
					n = {
						"১": "1",
						"২": "2",
						"৩": "3",
						"৪": "4",
						"৫": "5",
						"৬": "6",
						"৭": "7",
						"৮": "8",
						"৯": "9",
						"০": "0"
					};
				e.defineLocale("bn", {
					months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
					monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
					weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
					weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
					weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
					longDateFormat: {
						LT: "A h:mm সময়",
						LTS: "A h:mm:ss সময়",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm সময়",
						LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
					},
					calendar: {
						sameDay: "[আজ] LT",
						nextDay: "[আগামীকাল] LT",
						nextWeek: "dddd, LT",
						lastDay: "[গতকাল] LT",
						lastWeek: "[গত] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s পরে",
						past: "%s আগে",
						s: "কয়েক সেকেন্ড",
						ss: "%d সেকেন্ড",
						m: "এক মিনিট",
						mm: "%d মিনিট",
						h: "এক ঘন্টা",
						hh: "%d ঘন্টা",
						d: "এক দিন",
						dd: "%d দিন",
						M: "এক মাস",
						MM: "%d মাস",
						y: "এক বছর",
						yy: "%d বছর"
					},
					preparse: function(e) {
						return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/bo.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "༡",
						2: "༢",
						3: "༣",
						4: "༤",
						5: "༥",
						6: "༦",
						7: "༧",
						8: "༨",
						9: "༩",
						0: "༠"
					},
					n = {
						"༡": "1",
						"༢": "2",
						"༣": "3",
						"༤": "4",
						"༥": "5",
						"༦": "6",
						"༧": "7",
						"༨": "8",
						"༩": "9",
						"༠": "0"
					};
				e.defineLocale("bo", {
					months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
					monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
					weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
					weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
					weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
					longDateFormat: {
						LT: "A h:mm",
						LTS: "A h:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm",
						LLLL: "dddd, D MMMM YYYY, A h:mm"
					},
					calendar: {
						sameDay: "[དི་རིང] LT",
						nextDay: "[སང་ཉིན] LT",
						nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
						lastDay: "[ཁ་སང] LT",
						lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s ལ་",
						past: "%s སྔན་ལ",
						s: "ལམ་སང",
						ss: "%d སྐར་ཆ།",
						m: "སྐར་མ་གཅིག",
						mm: "%d སྐར་མ",
						h: "ཆུ་ཚོད་གཅིག",
						hh: "%d ཆུ་ཚོད",
						d: "ཉིན་གཅིག",
						dd: "%d ཉིན་",
						M: "ཟླ་བ་གཅིག",
						MM: "%d ཟླ་བ",
						y: "ལོ་གཅིག",
						yy: "%d ལོ"
					},
					preparse: function(e) {
						return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/br.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					return e + " " + function(e, t) {
						return 2 === t ? function(e) {
							var t = {
								m: "v",
								b: "v",
								d: "z"
							};
							return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
						}(e) : e
					}({
						mm: "munutenn",
						MM: "miz",
						dd: "devezh"
					} [n], e)
				}
				e.defineLocale("br", {
					months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
					monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
					weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
					weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
					weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "h[e]mm A",
						LTS: "h[e]mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D [a viz] MMMM YYYY",
						LLL: "D [a viz] MMMM YYYY h[e]mm A",
						LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
					},
					calendar: {
						sameDay: "[Hiziv da] LT",
						nextDay: "[Warc'hoazh da] LT",
						nextWeek: "dddd [da] LT",
						lastDay: "[Dec'h da] LT",
						lastWeek: "dddd [paset da] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "a-benn %s",
						past: "%s 'zo",
						s: "un nebeud segondennoù",
						ss: "%d eilenn",
						m: "ur vunutenn",
						mm: t,
						h: "un eur",
						hh: "%d eur",
						d: "un devezh",
						dd: t,
						M: "ur miz",
						MM: t,
						y: "ur bloaz",
						yy: function(e) {
							switch (function e(t) {
								return t > 9 ? e(t % 10) : t
							}(e)) {
								case 1:
								case 3:
								case 4:
								case 5:
								case 9:
									return e + " bloaz";
								default:
									return e + " vloaz"
							}
						}
					},
					dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
					ordinal: function(e) {
						return e + (1 === e ? "añ" : "vet")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/bs.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var a = e + " ";
					switch (n) {
						case "ss":
							return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
						case "m":
							return t ? "jedna minuta" : "jedne minute";
						case "mm":
							return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
						case "h":
							return t ? "jedan sat" : "jednog sata";
						case "hh":
							return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
						case "dd":
							return a += 1 === e ? "dan" : "dana";
						case "MM":
							return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
						case "yy":
							return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
					}
				}
				e.defineLocale("bs", {
					months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
					monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
					weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
					weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[danas u] LT",
						nextDay: "[sutra u] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[u] [nedjelju] [u] LT";
								case 3:
									return "[u] [srijedu] [u] LT";
								case 6:
									return "[u] [subotu] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[u] dddd [u] LT"
							}
						},
						lastDay: "[jučer u] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
									return "[prošlu] dddd [u] LT";
								case 6:
									return "[prošle] [subote] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[prošli] dddd [u] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "prije %s",
						s: "par sekundi",
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: "dan",
						dd: t,
						M: "mjesec",
						MM: t,
						y: "godinu",
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ca.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ca", {
					months: {
						standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
						format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
						isFormat: /D[oD]?(\s)+MMMM/
					},
					monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
					monthsParseExact: !0,
					weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
					weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
					weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM [de] YYYY",
						ll: "D MMM YYYY",
						LLL: "D MMMM [de] YYYY [a les] H:mm",
						lll: "D MMM YYYY, H:mm",
						LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
						llll: "ddd D MMM YYYY, H:mm"
					},
					calendar: {
						sameDay: function() {
							return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
						},
						nextDay: function() {
							return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
						},
						nextWeek: function() {
							return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
						},
						lastDay: function() {
							return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
						},
						lastWeek: function() {
							return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "d'aquí %s",
						past: "fa %s",
						s: "uns segons",
						ss: "%d segons",
						m: "un minut",
						mm: "%d minuts",
						h: "una hora",
						hh: "%d hores",
						d: "un dia",
						dd: "%d dies",
						M: "un mes",
						MM: "%d mesos",
						y: "un any",
						yy: "%d anys"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
					ordinal: function(e, t) {
						var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
						return "w" !== t && "W" !== t || (n = "a"), e + n
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/cs.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
					n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
					a = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
					s = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

				function r(e) {
					return e > 1 && e < 5 && 1 != ~~(e / 10)
				}

				function i(e, t, n, a) {
					var s = e + " ";
					switch (n) {
						case "s":
							return t || a ? "pár sekund" : "pár sekundami";
						case "ss":
							return t || a ? s + (r(e) ? "sekundy" : "sekund") : s + "sekundami";
						case "m":
							return t ? "minuta" : a ? "minutu" : "minutou";
						case "mm":
							return t || a ? s + (r(e) ? "minuty" : "minut") : s + "minutami";
						case "h":
							return t ? "hodina" : a ? "hodinu" : "hodinou";
						case "hh":
							return t || a ? s + (r(e) ? "hodiny" : "hodin") : s + "hodinami";
						case "d":
							return t || a ? "den" : "dnem";
						case "dd":
							return t || a ? s + (r(e) ? "dny" : "dní") : s + "dny";
						case "M":
							return t || a ? "měsíc" : "měsícem";
						case "MM":
							return t || a ? s + (r(e) ? "měsíce" : "měsíců") : s + "měsíci";
						case "y":
							return t || a ? "rok" : "rokem";
						case "yy":
							return t || a ? s + (r(e) ? "roky" : "let") : s + "lety"
					}
				}
				e.defineLocale("cs", {
					months: t,
					monthsShort: n,
					monthsRegex: s,
					monthsShortRegex: s,
					monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
					monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
					monthsParse: a,
					longMonthsParse: a,
					shortMonthsParse: a,
					weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
					weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
					weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd D. MMMM YYYY H:mm",
						l: "D. M. YYYY"
					},
					calendar: {
						sameDay: "[dnes v] LT",
						nextDay: "[zítra v] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[v neděli v] LT";
								case 1:
								case 2:
									return "[v] dddd [v] LT";
								case 3:
									return "[ve středu v] LT";
								case 4:
									return "[ve čtvrtek v] LT";
								case 5:
									return "[v pátek v] LT";
								case 6:
									return "[v sobotu v] LT"
							}
						},
						lastDay: "[včera v] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[minulou neděli v] LT";
								case 1:
								case 2:
									return "[minulé] dddd [v] LT";
								case 3:
									return "[minulou středu v] LT";
								case 4:
								case 5:
									return "[minulý] dddd [v] LT";
								case 6:
									return "[minulou sobotu v] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "před %s",
						s: i,
						ss: i,
						m: i,
						mm: i,
						h: i,
						hh: i,
						d: i,
						dd: i,
						M: i,
						MM: i,
						y: i,
						yy: i
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/cv.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("cv", {
					months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
					monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
					weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
					weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
					weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD-MM-YYYY",
						LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
						LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
						LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
					},
					calendar: {
						sameDay: "[Паян] LT [сехетре]",
						nextDay: "[Ыран] LT [сехетре]",
						lastDay: "[Ӗнер] LT [сехетре]",
						nextWeek: "[Ҫитес] dddd LT [сехетре]",
						lastWeek: "[Иртнӗ] dddd LT [сехетре]",
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
						},
						past: "%s каялла",
						s: "пӗр-ик ҫеккунт",
						ss: "%d ҫеккунт",
						m: "пӗр минут",
						mm: "%d минут",
						h: "пӗр сехет",
						hh: "%d сехет",
						d: "пӗр кун",
						dd: "%d кун",
						M: "пӗр уйӑх",
						MM: "%d уйӑх",
						y: "пӗр ҫул",
						yy: "%d ҫул"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
					ordinal: "%d-мӗш",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/cy.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("cy", {
					months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
					monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
					weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
					weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
					weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Heddiw am] LT",
						nextDay: "[Yfory am] LT",
						nextWeek: "dddd [am] LT",
						lastDay: "[Ddoe am] LT",
						lastWeek: "dddd [diwethaf am] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "mewn %s",
						past: "%s yn ôl",
						s: "ychydig eiliadau",
						ss: "%d eiliad",
						m: "munud",
						mm: "%d munud",
						h: "awr",
						hh: "%d awr",
						d: "diwrnod",
						dd: "%d diwrnod",
						M: "mis",
						MM: "%d mis",
						y: "blwyddyn",
						yy: "%d flynedd"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
					ordinal: function(e) {
						var t = "";
						return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/da.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("da", {
					months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
					monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
					weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
					weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
					weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY HH:mm",
						LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
					},
					calendar: {
						sameDay: "[i dag kl.] LT",
						nextDay: "[i morgen kl.] LT",
						nextWeek: "på dddd [kl.] LT",
						lastDay: "[i går kl.] LT",
						lastWeek: "[i] dddd[s kl.] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "%s siden",
						s: "få sekunder",
						ss: "%d sekunder",
						m: "et minut",
						mm: "%d minutter",
						h: "en time",
						hh: "%d timer",
						d: "en dag",
						dd: "%d dage",
						M: "en måned",
						MM: "%d måneder",
						y: "et år",
						yy: "%d år"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/de-at.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						m: ["eine Minute", "einer Minute"],
						h: ["eine Stunde", "einer Stunde"],
						d: ["ein Tag", "einem Tag"],
						dd: [e + " Tage", e + " Tagen"],
						M: ["ein Monat", "einem Monat"],
						MM: [e + " Monate", e + " Monaten"],
						y: ["ein Jahr", "einem Jahr"],
						yy: [e + " Jahre", e + " Jahren"]
					};
					return t ? s[n][0] : s[n][1]
				}
				e.defineLocale("de-at", {
					months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
					weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
					weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY HH:mm",
						LLLL: "dddd, D. MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[heute um] LT [Uhr]",
						sameElse: "L",
						nextDay: "[morgen um] LT [Uhr]",
						nextWeek: "dddd [um] LT [Uhr]",
						lastDay: "[gestern um] LT [Uhr]",
						lastWeek: "[letzten] dddd [um] LT [Uhr]"
					},
					relativeTime: {
						future: "in %s",
						past: "vor %s",
						s: "ein paar Sekunden",
						ss: "%d Sekunden",
						m: t,
						mm: "%d Minuten",
						h: t,
						hh: "%d Stunden",
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/de-ch.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						m: ["eine Minute", "einer Minute"],
						h: ["eine Stunde", "einer Stunde"],
						d: ["ein Tag", "einem Tag"],
						dd: [e + " Tage", e + " Tagen"],
						M: ["ein Monat", "einem Monat"],
						MM: [e + " Monate", e + " Monaten"],
						y: ["ein Jahr", "einem Jahr"],
						yy: [e + " Jahre", e + " Jahren"]
					};
					return t ? s[n][0] : s[n][1]
				}
				e.defineLocale("de-ch", {
					months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
					weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
					weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY HH:mm",
						LLLL: "dddd, D. MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[heute um] LT [Uhr]",
						sameElse: "L",
						nextDay: "[morgen um] LT [Uhr]",
						nextWeek: "dddd [um] LT [Uhr]",
						lastDay: "[gestern um] LT [Uhr]",
						lastWeek: "[letzten] dddd [um] LT [Uhr]"
					},
					relativeTime: {
						future: "in %s",
						past: "vor %s",
						s: "ein paar Sekunden",
						ss: "%d Sekunden",
						m: t,
						mm: "%d Minuten",
						h: t,
						hh: "%d Stunden",
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/de.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						m: ["eine Minute", "einer Minute"],
						h: ["eine Stunde", "einer Stunde"],
						d: ["ein Tag", "einem Tag"],
						dd: [e + " Tage", e + " Tagen"],
						M: ["ein Monat", "einem Monat"],
						MM: [e + " Monate", e + " Monaten"],
						y: ["ein Jahr", "einem Jahr"],
						yy: [e + " Jahre", e + " Jahren"]
					};
					return t ? s[n][0] : s[n][1]
				}
				e.defineLocale("de", {
					months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
					weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
					weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY HH:mm",
						LLLL: "dddd, D. MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[heute um] LT [Uhr]",
						sameElse: "L",
						nextDay: "[morgen um] LT [Uhr]",
						nextWeek: "dddd [um] LT [Uhr]",
						lastDay: "[gestern um] LT [Uhr]",
						lastWeek: "[letzten] dddd [um] LT [Uhr]"
					},
					relativeTime: {
						future: "in %s",
						past: "vor %s",
						s: "ein paar Sekunden",
						ss: "%d Sekunden",
						m: t,
						mm: "%d Minuten",
						h: t,
						hh: "%d Stunden",
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/dv.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
					n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
				e.defineLocale("dv", {
					months: t,
					monthsShort: t,
					weekdays: n,
					weekdaysShort: n,
					weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "D/M/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /މކ|މފ/,
					isPM: function(e) {
						return "މފ" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "މކ" : "މފ"
					},
					calendar: {
						sameDay: "[މިއަދު] LT",
						nextDay: "[މާދަމާ] LT",
						nextWeek: "dddd LT",
						lastDay: "[އިއްޔެ] LT",
						lastWeek: "[ފާއިތުވި] dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ތެރޭގައި %s",
						past: "ކުރިން %s",
						s: "ސިކުންތުކޮޅެއް",
						ss: "d% ސިކުންތު",
						m: "މިނިޓެއް",
						mm: "މިނިޓު %d",
						h: "ގަޑިއިރެއް",
						hh: "ގަޑިއިރު %d",
						d: "ދުވަހެއް",
						dd: "ދުވަސް %d",
						M: "މަހެއް",
						MM: "މަސް %d",
						y: "އަހަރެއް",
						yy: "އަހަރު %d"
					},
					preparse: function(e) {
						return e.replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/,/g, "،")
					},
					week: {
						dow: 7,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/el.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("el", {
					monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
					monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
					months: function(e, t) {
						return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
					},
					monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
					weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
					weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
					weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
					meridiem: function(e, t, n) {
						return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
					},
					isPM: function(e) {
						return "μ" === (e + "").toLowerCase()[0]
					},
					meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendarEl: {
						sameDay: "[Σήμερα {}] LT",
						nextDay: "[Αύριο {}] LT",
						nextWeek: "dddd [{}] LT",
						lastDay: "[Χθες {}] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 6:
									return "[το προηγούμενο] dddd [{}] LT";
								default:
									return "[την προηγούμενη] dddd [{}] LT"
							}
						},
						sameElse: "L"
					},
					calendar: function(e, t) {
						var n, a = this._calendarEl[e],
							s = t && t.hours();
						return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", s % 12 == 1 ? "στη" : "στις")
					},
					relativeTime: {
						future: "σε %s",
						past: "%s πριν",
						s: "λίγα δευτερόλεπτα",
						ss: "%d δευτερόλεπτα",
						m: "ένα λεπτό",
						mm: "%d λεπτά",
						h: "μία ώρα",
						hh: "%d ώρες",
						d: "μία μέρα",
						dd: "%d μέρες",
						M: "ένας μήνας",
						MM: "%d μήνες",
						y: "ένας χρόνος",
						yy: "%d χρόνια"
					},
					dayOfMonthOrdinalParse: /\d{1,2}η/,
					ordinal: "%dη",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-SG.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-SG", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-au.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-au", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-ca.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-ca", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "YYYY-MM-DD",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY h:mm A",
						LLLL: "dddd, MMMM D, YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-gb.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-gb", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-ie.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-ie", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-il.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-il", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/en-nz.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("en-nz", {
					months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
					weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
					weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
					weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/eo.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("eo", {
					months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
					monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
					weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
					weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
					weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "D[-a de] MMMM, YYYY",
						LLL: "D[-a de] MMMM, YYYY HH:mm",
						LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
					},
					meridiemParse: /[ap]\.t\.m/i,
					isPM: function(e) {
						return "p" === e.charAt(0).toLowerCase()
					},
					meridiem: function(e, t, n) {
						return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
					},
					calendar: {
						sameDay: "[Hodiaŭ je] LT",
						nextDay: "[Morgaŭ je] LT",
						nextWeek: "dddd [je] LT",
						lastDay: "[Hieraŭ je] LT",
						lastWeek: "[pasinta] dddd [je] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "post %s",
						past: "antaŭ %s",
						s: "sekundoj",
						ss: "%d sekundoj",
						m: "minuto",
						mm: "%d minutoj",
						h: "horo",
						hh: "%d horoj",
						d: "tago",
						dd: "%d tagoj",
						M: "monato",
						MM: "%d monatoj",
						y: "jaro",
						yy: "%d jaroj"
					},
					dayOfMonthOrdinalParse: /\d{1,2}a/,
					ordinal: "%da",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/es-do.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
					n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
					a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
					s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
				e.defineLocale("es-do", {
					months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
					monthsShort: function(e, a) {
						return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: s,
					monthsShortRegex: s,
					monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
					monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
					monthsParse: a,
					longMonthsParse: a,
					shortMonthsParse: a,
					weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
					weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
					weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY h:mm A",
						LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
					},
					calendar: {
						sameDay: function() {
							return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextDay: function() {
							return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextWeek: function() {
							return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastDay: function() {
							return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastWeek: function() {
							return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "en %s",
						past: "hace %s",
						s: "unos segundos",
						ss: "%d segundos",
						m: "un minuto",
						mm: "%d minutos",
						h: "una hora",
						hh: "%d horas",
						d: "un día",
						dd: "%d días",
						M: "un mes",
						MM: "%d meses",
						y: "un año",
						yy: "%d años"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/es-us.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
					n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
					a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
					s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
				e.defineLocale("es-us", {
					months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
					monthsShort: function(e, a) {
						return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: s,
					monthsShortRegex: s,
					monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
					monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
					monthsParse: a,
					longMonthsParse: a,
					shortMonthsParse: a,
					weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
					weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
					weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "MM/DD/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY h:mm A",
						LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
					},
					calendar: {
						sameDay: function() {
							return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextDay: function() {
							return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextWeek: function() {
							return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastDay: function() {
							return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastWeek: function() {
							return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "en %s",
						past: "hace %s",
						s: "unos segundos",
						ss: "%d segundos",
						m: "un minuto",
						mm: "%d minutos",
						h: "una hora",
						hh: "%d horas",
						d: "un día",
						dd: "%d días",
						M: "un mes",
						MM: "%d meses",
						y: "un año",
						yy: "%d años"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/es.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
					n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
					a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
					s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
				e.defineLocale("es", {
					months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
					monthsShort: function(e, a) {
						return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: s,
					monthsShortRegex: s,
					monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
					monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
					monthsParse: a,
					longMonthsParse: a,
					shortMonthsParse: a,
					weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
					weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
					weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY H:mm",
						LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
					},
					calendar: {
						sameDay: function() {
							return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextDay: function() {
							return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						nextWeek: function() {
							return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastDay: function() {
							return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						lastWeek: function() {
							return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "en %s",
						past: "hace %s",
						s: "unos segundos",
						ss: "%d segundos",
						m: "un minuto",
						mm: "%d minutos",
						h: "una hora",
						hh: "%d horas",
						d: "un día",
						dd: "%d días",
						M: "un mes",
						MM: "%d meses",
						y: "un año",
						yy: "%d años"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/et.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
						ss: [e + "sekundi", e + "sekundit"],
						m: ["ühe minuti", "üks minut"],
						mm: [e + " minuti", e + " minutit"],
						h: ["ühe tunni", "tund aega", "üks tund"],
						hh: [e + " tunni", e + " tundi"],
						d: ["ühe päeva", "üks päev"],
						M: ["kuu aja", "kuu aega", "üks kuu"],
						MM: [e + " kuu", e + " kuud"],
						y: ["ühe aasta", "aasta", "üks aasta"],
						yy: [e + " aasta", e + " aastat"]
					};
					return t ? s[n][2] ? s[n][2] : s[n][1] : a ? s[n][0] : s[n][1]
				}
				e.defineLocale("et", {
					months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
					monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
					weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
					weekdaysShort: "P_E_T_K_N_R_L".split("_"),
					weekdaysMin: "P_E_T_K_N_R_L".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[Täna,] LT",
						nextDay: "[Homme,] LT",
						nextWeek: "[Järgmine] dddd LT",
						lastDay: "[Eile,] LT",
						lastWeek: "[Eelmine] dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s pärast",
						past: "%s tagasi",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: "%d päeva",
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/eu.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("eu", {
					months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
					monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
					monthsParseExact: !0,
					weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
					weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
					weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "YYYY[ko] MMMM[ren] D[a]",
						LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
						LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
						l: "YYYY-M-D",
						ll: "YYYY[ko] MMM D[a]",
						lll: "YYYY[ko] MMM D[a] HH:mm",
						llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
					},
					calendar: {
						sameDay: "[gaur] LT[etan]",
						nextDay: "[bihar] LT[etan]",
						nextWeek: "dddd LT[etan]",
						lastDay: "[atzo] LT[etan]",
						lastWeek: "[aurreko] dddd LT[etan]",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s barru",
						past: "duela %s",
						s: "segundo batzuk",
						ss: "%d segundo",
						m: "minutu bat",
						mm: "%d minutu",
						h: "ordu bat",
						hh: "%d ordu",
						d: "egun bat",
						dd: "%d egun",
						M: "hilabete bat",
						MM: "%d hilabete",
						y: "urte bat",
						yy: "%d urte"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fa.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "۱",
						2: "۲",
						3: "۳",
						4: "۴",
						5: "۵",
						6: "۶",
						7: "۷",
						8: "۸",
						9: "۹",
						0: "۰"
					},
					n = {
						"۱": "1",
						"۲": "2",
						"۳": "3",
						"۴": "4",
						"۵": "5",
						"۶": "6",
						"۷": "7",
						"۸": "8",
						"۹": "9",
						"۰": "0"
					};
				e.defineLocale("fa", {
					months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
					monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
					weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
					weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
					weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					meridiemParse: /قبل از ظهر|بعد از ظهر/,
					isPM: function(e) {
						return /بعد از ظهر/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
					},
					calendar: {
						sameDay: "[امروز ساعت] LT",
						nextDay: "[فردا ساعت] LT",
						nextWeek: "dddd [ساعت] LT",
						lastDay: "[دیروز ساعت] LT",
						lastWeek: "dddd [پیش] [ساعت] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "در %s",
						past: "%s پیش",
						s: "چند ثانیه",
						ss: "ثانیه d%",
						m: "یک دقیقه",
						mm: "%d دقیقه",
						h: "یک ساعت",
						hh: "%d ساعت",
						d: "یک روز",
						dd: "%d روز",
						M: "یک ماه",
						MM: "%d ماه",
						y: "یک سال",
						yy: "%d سال"
					},
					preparse: function(e) {
						return e.replace(/[۰-۹]/g, (function(e) {
							return n[e]
						})).replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						})).replace(/,/g, "،")
					},
					dayOfMonthOrdinalParse: /\d{1,2}م/,
					ordinal: "%dم",
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fi.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
					n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

				function a(e, a, s, r) {
					var i = "";
					switch (s) {
						case "s":
							return r ? "muutaman sekunnin" : "muutama sekunti";
						case "ss":
							return r ? "sekunnin" : "sekuntia";
						case "m":
							return r ? "minuutin" : "minuutti";
						case "mm":
							i = r ? "minuutin" : "minuuttia";
							break;
						case "h":
							return r ? "tunnin" : "tunti";
						case "hh":
							i = r ? "tunnin" : "tuntia";
							break;
						case "d":
							return r ? "päivän" : "päivä";
						case "dd":
							i = r ? "päivän" : "päivää";
							break;
						case "M":
							return r ? "kuukauden" : "kuukausi";
						case "MM":
							i = r ? "kuukauden" : "kuukautta";
							break;
						case "y":
							return r ? "vuoden" : "vuosi";
						case "yy":
							i = r ? "vuoden" : "vuotta"
					}
					return i = function(e, a) {
						return e < 10 ? a ? n[e] : t[e] : e
					}(e, r) + " " + i
				}
				e.defineLocale("fi", {
					months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
					monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
					weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
					weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
					weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD.MM.YYYY",
						LL: "Do MMMM[ta] YYYY",
						LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
						LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
						l: "D.M.YYYY",
						ll: "Do MMM YYYY",
						lll: "Do MMM YYYY, [klo] HH.mm",
						llll: "ddd, Do MMM YYYY, [klo] HH.mm"
					},
					calendar: {
						sameDay: "[tänään] [klo] LT",
						nextDay: "[huomenna] [klo] LT",
						nextWeek: "dddd [klo] LT",
						lastDay: "[eilen] [klo] LT",
						lastWeek: "[viime] dddd[na] [klo] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s päästä",
						past: "%s sitten",
						s: a,
						ss: a,
						m: a,
						mm: a,
						h: a,
						hh: a,
						d: a,
						dd: a,
						M: a,
						MM: a,
						y: a,
						yy: a
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fo.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("fo", {
					months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
					monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
					weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
					weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
					weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D. MMMM, YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Í dag kl.] LT",
						nextDay: "[Í morgin kl.] LT",
						nextWeek: "dddd [kl.] LT",
						lastDay: "[Í gjár kl.] LT",
						lastWeek: "[síðstu] dddd [kl] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "um %s",
						past: "%s síðani",
						s: "fá sekund",
						ss: "%d sekundir",
						m: "ein minuttur",
						mm: "%d minuttir",
						h: "ein tími",
						hh: "%d tímar",
						d: "ein dagur",
						dd: "%d dagar",
						M: "ein mánaður",
						MM: "%d mánaðir",
						y: "eitt ár",
						yy: "%d ár"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fr-ca.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("fr-ca", {
					months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
					monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
					monthsParseExact: !0,
					weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
					weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
					weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Aujourd’hui à] LT",
						nextDay: "[Demain à] LT",
						nextWeek: "dddd [à] LT",
						lastDay: "[Hier à] LT",
						lastWeek: "dddd [dernier à] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dans %s",
						past: "il y a %s",
						s: "quelques secondes",
						ss: "%d secondes",
						m: "une minute",
						mm: "%d minutes",
						h: "une heure",
						hh: "%d heures",
						d: "un jour",
						dd: "%d jours",
						M: "un mois",
						MM: "%d mois",
						y: "un an",
						yy: "%d ans"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
					ordinal: function(e, t) {
						switch (t) {
							default:
							case "M":
							case "Q":
							case "D":
							case "DDD":
							case "d":
								return e + (1 === e ? "er" : "e");
							case "w":
							case "W":
								return e + (1 === e ? "re" : "e")
						}
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fr-ch.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("fr-ch", {
					months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
					monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
					monthsParseExact: !0,
					weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
					weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
					weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Aujourd’hui à] LT",
						nextDay: "[Demain à] LT",
						nextWeek: "dddd [à] LT",
						lastDay: "[Hier à] LT",
						lastWeek: "dddd [dernier à] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dans %s",
						past: "il y a %s",
						s: "quelques secondes",
						ss: "%d secondes",
						m: "une minute",
						mm: "%d minutes",
						h: "une heure",
						hh: "%d heures",
						d: "un jour",
						dd: "%d jours",
						M: "un mois",
						MM: "%d mois",
						y: "un an",
						yy: "%d ans"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
					ordinal: function(e, t) {
						switch (t) {
							default:
							case "M":
							case "Q":
							case "D":
							case "DDD":
							case "d":
								return e + (1 === e ? "er" : "e");
							case "w":
							case "W":
								return e + (1 === e ? "re" : "e")
						}
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fr.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("fr", {
					months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
					monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
					monthsParseExact: !0,
					weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
					weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
					weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Aujourd’hui à] LT",
						nextDay: "[Demain à] LT",
						nextWeek: "dddd [à] LT",
						lastDay: "[Hier à] LT",
						lastWeek: "dddd [dernier à] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dans %s",
						past: "il y a %s",
						s: "quelques secondes",
						ss: "%d secondes",
						m: "une minute",
						mm: "%d minutes",
						h: "une heure",
						hh: "%d heures",
						d: "un jour",
						dd: "%d jours",
						M: "un mois",
						MM: "%d mois",
						y: "un an",
						yy: "%d ans"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
					ordinal: function(e, t) {
						switch (t) {
							case "D":
								return e + (1 === e ? "er" : "");
							default:
							case "M":
							case "Q":
							case "DDD":
							case "d":
								return e + (1 === e ? "er" : "e");
							case "w":
							case "W":
								return e + (1 === e ? "re" : "e")
						}
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/fy.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
					n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
				e.defineLocale("fy", {
					months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
					monthsShort: function(e, a) {
						return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsParseExact: !0,
					weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
					weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
					weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD-MM-YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[hjoed om] LT",
						nextDay: "[moarn om] LT",
						nextWeek: "dddd [om] LT",
						lastDay: "[juster om] LT",
						lastWeek: "[ôfrûne] dddd [om] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "oer %s",
						past: "%s lyn",
						s: "in pear sekonden",
						ss: "%d sekonden",
						m: "ien minút",
						mm: "%d minuten",
						h: "ien oere",
						hh: "%d oeren",
						d: "ien dei",
						dd: "%d dagen",
						M: "ien moanne",
						MM: "%d moannen",
						y: "ien jier",
						yy: "%d jierren"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
					ordinal: function(e) {
						return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ga.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ga", {
					months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"],
					monthsShort: ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"],
					monthsParseExact: !0,
					weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"],
					weekdaysShort: ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"],
					weekdaysMin: ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"],
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Inniu ag] LT",
						nextDay: "[Amárach ag] LT",
						nextWeek: "dddd [ag] LT",
						lastDay: "[Inné aig] LT",
						lastWeek: "dddd [seo caite] [ag] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "i %s",
						past: "%s ó shin",
						s: "cúpla soicind",
						ss: "%d soicind",
						m: "nóiméad",
						mm: "%d nóiméad",
						h: "uair an chloig",
						hh: "%d uair an chloig",
						d: "lá",
						dd: "%d lá",
						M: "mí",
						MM: "%d mí",
						y: "bliain",
						yy: "%d bliain"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
					ordinal: function(e) {
						return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/gd.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("gd", {
					months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
					monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
					monthsParseExact: !0,
					weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
					weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
					weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[An-diugh aig] LT",
						nextDay: "[A-màireach aig] LT",
						nextWeek: "dddd [aig] LT",
						lastDay: "[An-dè aig] LT",
						lastWeek: "dddd [seo chaidh] [aig] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ann an %s",
						past: "bho chionn %s",
						s: "beagan diogan",
						ss: "%d diogan",
						m: "mionaid",
						mm: "%d mionaidean",
						h: "uair",
						hh: "%d uairean",
						d: "latha",
						dd: "%d latha",
						M: "mìos",
						MM: "%d mìosan",
						y: "bliadhna",
						yy: "%d bliadhna"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
					ordinal: function(e) {
						return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/gl.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("gl", {
					months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
					monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
					weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
					weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY H:mm",
						LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
					},
					calendar: {
						sameDay: function() {
							return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
						},
						nextDay: function() {
							return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
						},
						nextWeek: function() {
							return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
						},
						lastDay: function() {
							return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
						},
						lastWeek: function() {
							return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							return 0 === e.indexOf("un") ? "n" + e : "en " + e
						},
						past: "hai %s",
						s: "uns segundos",
						ss: "%d segundos",
						m: "un minuto",
						mm: "%d minutos",
						h: "unha hora",
						hh: "%d horas",
						d: "un día",
						dd: "%d días",
						M: "un mes",
						MM: "%d meses",
						y: "un ano",
						yy: "%d anos"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/gom-latn.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						s: ["thodde secondanim", "thodde second"],
						ss: [e + " secondanim", e + " second"],
						m: ["eka mintan", "ek minute"],
						mm: [e + " mintanim", e + " mintam"],
						h: ["eka voran", "ek vor"],
						hh: [e + " voranim", e + " voram"],
						d: ["eka disan", "ek dis"],
						dd: [e + " disanim", e + " dis"],
						M: ["eka mhoinean", "ek mhoino"],
						MM: [e + " mhoineanim", e + " mhoine"],
						y: ["eka vorsan", "ek voros"],
						yy: [e + " vorsanim", e + " vorsam"]
					};
					return t ? s[n][0] : s[n][1]
				}
				e.defineLocale("gom-latn", {
					months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
					monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
					weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
					weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "A h:mm [vazta]",
						LTS: "A h:mm:ss [vazta]",
						L: "DD-MM-YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY A h:mm [vazta]",
						LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
						llll: "ddd, D MMM YYYY, A h:mm [vazta]"
					},
					calendar: {
						sameDay: "[Aiz] LT",
						nextDay: "[Faleam] LT",
						nextWeek: "[Ieta to] dddd[,] LT",
						lastDay: "[Kal] LT",
						lastWeek: "[Fatlo] dddd[,] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s",
						past: "%s adim",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}(er)/,
					ordinal: function(e, t) {
						switch (t) {
							case "D":
								return e + "er";
							default:
							case "M":
							case "Q":
							case "DDD":
							case "d":
							case "w":
							case "W":
								return e
						}
					},
					week: {
						dow: 1,
						doy: 4
					},
					meridiemParse: /rati|sokalli|donparam|sanje/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/gu.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "૧",
						2: "૨",
						3: "૩",
						4: "૪",
						5: "૫",
						6: "૬",
						7: "૭",
						8: "૮",
						9: "૯",
						0: "૦"
					},
					n = {
						"૧": "1",
						"૨": "2",
						"૩": "3",
						"૪": "4",
						"૫": "5",
						"૬": "6",
						"૭": "7",
						"૮": "8",
						"૯": "9",
						"૦": "0"
					};
				e.defineLocale("gu", {
					months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
					monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
					monthsParseExact: !0,
					weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
					weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
					weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
					longDateFormat: {
						LT: "A h:mm વાગ્યે",
						LTS: "A h:mm:ss વાગ્યે",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm વાગ્યે",
						LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
					},
					calendar: {
						sameDay: "[આજ] LT",
						nextDay: "[કાલે] LT",
						nextWeek: "dddd, LT",
						lastDay: "[ગઇકાલે] LT",
						lastWeek: "[પાછલા] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s મા",
						past: "%s પેહલા",
						s: "અમુક પળો",
						ss: "%d સેકંડ",
						m: "એક મિનિટ",
						mm: "%d મિનિટ",
						h: "એક કલાક",
						hh: "%d કલાક",
						d: "એક દિવસ",
						dd: "%d દિવસ",
						M: "એક મહિનો",
						MM: "%d મહિનો",
						y: "એક વર્ષ",
						yy: "%d વર્ષ"
					},
					preparse: function(e) {
						return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/he.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("he", {
					months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
					monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
					weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
					weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
					weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [ב]MMMM YYYY",
						LLL: "D [ב]MMMM YYYY HH:mm",
						LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
						l: "D/M/YYYY",
						ll: "D MMM YYYY",
						lll: "D MMM YYYY HH:mm",
						llll: "ddd, D MMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[היום ב־]LT",
						nextDay: "[מחר ב־]LT",
						nextWeek: "dddd [בשעה] LT",
						lastDay: "[אתמול ב־]LT",
						lastWeek: "[ביום] dddd [האחרון בשעה] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "בעוד %s",
						past: "לפני %s",
						s: "מספר שניות",
						ss: "%d שניות",
						m: "דקה",
						mm: "%d דקות",
						h: "שעה",
						hh: function(e) {
							return 2 === e ? "שעתיים" : e + " שעות"
						},
						d: "יום",
						dd: function(e) {
							return 2 === e ? "יומיים" : e + " ימים"
						},
						M: "חודש",
						MM: function(e) {
							return 2 === e ? "חודשיים" : e + " חודשים"
						},
						y: "שנה",
						yy: function(e) {
							return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
						}
					},
					meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
					isPM: function(e) {
						return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/hi.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "१",
						2: "२",
						3: "३",
						4: "४",
						5: "५",
						6: "६",
						7: "७",
						8: "८",
						9: "९",
						0: "०"
					},
					n = {
						"१": "1",
						"२": "2",
						"३": "3",
						"४": "4",
						"५": "5",
						"६": "6",
						"७": "7",
						"८": "8",
						"९": "9",
						"०": "0"
					};
				e.defineLocale("hi", {
					months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
					monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
					monthsParseExact: !0,
					weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
					weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
					weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
					longDateFormat: {
						LT: "A h:mm बजे",
						LTS: "A h:mm:ss बजे",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm बजे",
						LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
					},
					calendar: {
						sameDay: "[आज] LT",
						nextDay: "[कल] LT",
						nextWeek: "dddd, LT",
						lastDay: "[कल] LT",
						lastWeek: "[पिछले] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s में",
						past: "%s पहले",
						s: "कुछ ही क्षण",
						ss: "%d सेकंड",
						m: "एक मिनट",
						mm: "%d मिनट",
						h: "एक घंटा",
						hh: "%d घंटे",
						d: "एक दिन",
						dd: "%d दिन",
						M: "एक महीने",
						MM: "%d महीने",
						y: "एक वर्ष",
						yy: "%d वर्ष"
					},
					preparse: function(e) {
						return e.replace(/[१२३४५६७८९०]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /रात|सुबह|दोपहर|शाम/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/hr.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var a = e + " ";
					switch (n) {
						case "ss":
							return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
						case "m":
							return t ? "jedna minuta" : "jedne minute";
						case "mm":
							return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
						case "h":
							return t ? "jedan sat" : "jednog sata";
						case "hh":
							return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
						case "dd":
							return a += 1 === e ? "dan" : "dana";
						case "MM":
							return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
						case "yy":
							return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
					}
				}
				e.defineLocale("hr", {
					months: {
						format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
						standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
					},
					monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
					monthsParseExact: !0,
					weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
					weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
					weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[danas u] LT",
						nextDay: "[sutra u] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[u] [nedjelju] [u] LT";
								case 3:
									return "[u] [srijedu] [u] LT";
								case 6:
									return "[u] [subotu] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[u] dddd [u] LT"
							}
						},
						lastDay: "[jučer u] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
									return "[prošlu] dddd [u] LT";
								case 6:
									return "[prošle] [subote] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[prošli] dddd [u] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "prije %s",
						s: "par sekundi",
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: "dan",
						dd: t,
						M: "mjesec",
						MM: t,
						y: "godinu",
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/hu.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

				function n(e, t, n, a) {
					var s = e;
					switch (n) {
						case "s":
							return a || t ? "néhány másodperc" : "néhány másodperce";
						case "ss":
							return s + (a || t) ? " másodperc" : " másodperce";
						case "m":
							return "egy" + (a || t ? " perc" : " perce");
						case "mm":
							return s + (a || t ? " perc" : " perce");
						case "h":
							return "egy" + (a || t ? " óra" : " órája");
						case "hh":
							return s + (a || t ? " óra" : " órája");
						case "d":
							return "egy" + (a || t ? " nap" : " napja");
						case "dd":
							return s + (a || t ? " nap" : " napja");
						case "M":
							return "egy" + (a || t ? " hónap" : " hónapja");
						case "MM":
							return s + (a || t ? " hónap" : " hónapja");
						case "y":
							return "egy" + (a || t ? " év" : " éve");
						case "yy":
							return s + (a || t ? " év" : " éve")
					}
					return ""
				}

				function a(e) {
					return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
				}
				e.defineLocale("hu", {
					months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
					monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
					weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
					weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
					weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "YYYY.MM.DD.",
						LL: "YYYY. MMMM D.",
						LLL: "YYYY. MMMM D. H:mm",
						LLLL: "YYYY. MMMM D., dddd H:mm"
					},
					meridiemParse: /de|du/i,
					isPM: function(e) {
						return "u" === e.charAt(1).toLowerCase()
					},
					meridiem: function(e, t, n) {
						return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
					},
					calendar: {
						sameDay: "[ma] LT[-kor]",
						nextDay: "[holnap] LT[-kor]",
						nextWeek: function() {
							return a.call(this, !0)
						},
						lastDay: "[tegnap] LT[-kor]",
						lastWeek: function() {
							return a.call(this, !1)
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "%s múlva",
						past: "%s",
						s: n,
						ss: n,
						m: n,
						mm: n,
						h: n,
						hh: n,
						d: n,
						dd: n,
						M: n,
						MM: n,
						y: n,
						yy: n
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/hy-am.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("hy-am", {
					months: {
						format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
						standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
					},
					monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
					weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
					weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
					weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY թ.",
						LLL: "D MMMM YYYY թ., HH:mm",
						LLLL: "dddd, D MMMM YYYY թ., HH:mm"
					},
					calendar: {
						sameDay: "[այսօր] LT",
						nextDay: "[վաղը] LT",
						lastDay: "[երեկ] LT",
						nextWeek: function() {
							return "dddd [օրը ժամը] LT"
						},
						lastWeek: function() {
							return "[անցած] dddd [օրը ժամը] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "%s հետո",
						past: "%s առաջ",
						s: "մի քանի վայրկյան",
						ss: "%d վայրկյան",
						m: "րոպե",
						mm: "%d րոպե",
						h: "ժամ",
						hh: "%d ժամ",
						d: "օր",
						dd: "%d օր",
						M: "ամիս",
						MM: "%d ամիս",
						y: "տարի",
						yy: "%d տարի"
					},
					meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
					isPM: function(e) {
						return /^(ցերեկվա|երեկոյան)$/.test(e)
					},
					meridiem: function(e) {
						return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
					},
					dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
					ordinal: function(e, t) {
						switch (t) {
							case "DDD":
							case "w":
							case "W":
							case "DDDo":
								return 1 === e ? e + "-ին" : e + "-րդ";
							default:
								return e
						}
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/id.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("id", {
					months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
					weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
					weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
					weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /pagi|siang|sore|malam/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
					},
					calendar: {
						sameDay: "[Hari ini pukul] LT",
						nextDay: "[Besok pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kemarin pukul] LT",
						lastWeek: "dddd [lalu pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dalam %s",
						past: "%s yang lalu",
						s: "beberapa detik",
						ss: "%d detik",
						m: "semenit",
						mm: "%d menit",
						h: "sejam",
						hh: "%d jam",
						d: "sehari",
						dd: "%d hari",
						M: "sebulan",
						MM: "%d bulan",
						y: "setahun",
						yy: "%d tahun"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/is.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e) {
					return e % 100 == 11 || e % 10 != 1
				}

				function n(e, n, a, s) {
					var r = e + " ";
					switch (a) {
						case "s":
							return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
						case "ss":
							return t(e) ? r + (n || s ? "sekúndur" : "sekúndum") : r + "sekúnda";
						case "m":
							return n ? "mínúta" : "mínútu";
						case "mm":
							return t(e) ? r + (n || s ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
						case "hh":
							return t(e) ? r + (n || s ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
						case "d":
							return n ? "dagur" : s ? "dag" : "degi";
						case "dd":
							return t(e) ? n ? r + "dagar" : r + (s ? "daga" : "dögum") : n ? r + "dagur" : r + (s ? "dag" : "degi");
						case "M":
							return n ? "mánuður" : s ? "mánuð" : "mánuði";
						case "MM":
							return t(e) ? n ? r + "mánuðir" : r + (s ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (s ? "mánuð" : "mánuði");
						case "y":
							return n || s ? "ár" : "ári";
						case "yy":
							return t(e) ? r + (n || s ? "ár" : "árum") : r + (n || s ? "ár" : "ári")
					}
				}
				e.defineLocale("is", {
					months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
					monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
					weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
					weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
					weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY [kl.] H:mm",
						LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
					},
					calendar: {
						sameDay: "[í dag kl.] LT",
						nextDay: "[á morgun kl.] LT",
						nextWeek: "dddd [kl.] LT",
						lastDay: "[í gær kl.] LT",
						lastWeek: "[síðasta] dddd [kl.] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "eftir %s",
						past: "fyrir %s síðan",
						s: n,
						ss: n,
						m: n,
						mm: n,
						h: "klukkustund",
						hh: n,
						d: n,
						dd: n,
						M: n,
						MM: n,
						y: n,
						yy: n
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/it-ch.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("it-ch", {
					months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
					monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
					weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
					weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
					weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Oggi alle] LT",
						nextDay: "[Domani alle] LT",
						nextWeek: "dddd [alle] LT",
						lastDay: "[Ieri alle] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[la scorsa] dddd [alle] LT";
								default:
									return "[lo scorso] dddd [alle] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
						},
						past: "%s fa",
						s: "alcuni secondi",
						ss: "%d secondi",
						m: "un minuto",
						mm: "%d minuti",
						h: "un'ora",
						hh: "%d ore",
						d: "un giorno",
						dd: "%d giorni",
						M: "un mese",
						MM: "%d mesi",
						y: "un anno",
						yy: "%d anni"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/it.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("it", {
					months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
					monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
					weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
					weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
					weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Oggi alle] LT",
						nextDay: "[Domani alle] LT",
						nextWeek: "dddd [alle] LT",
						lastDay: "[Ieri alle] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[la scorsa] dddd [alle] LT";
								default:
									return "[lo scorso] dddd [alle] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
						},
						past: "%s fa",
						s: "alcuni secondi",
						ss: "%d secondi",
						m: "un minuto",
						mm: "%d minuti",
						h: "un'ora",
						hh: "%d ore",
						d: "un giorno",
						dd: "%d giorni",
						M: "un mese",
						MM: "%d mesi",
						y: "un anno",
						yy: "%d anni"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ja.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ja", {
					months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
					monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
					weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
					weekdaysShort: "日_月_火_水_木_金_土".split("_"),
					weekdaysMin: "日_月_火_水_木_金_土".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYY年M月D日",
						LLL: "YYYY年M月D日 HH:mm",
						LLLL: "YYYY年M月D日 dddd HH:mm",
						l: "YYYY/MM/DD",
						ll: "YYYY年M月D日",
						lll: "YYYY年M月D日 HH:mm",
						llll: "YYYY年M月D日(ddd) HH:mm"
					},
					meridiemParse: /午前|午後/i,
					isPM: function(e) {
						return "午後" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "午前" : "午後"
					},
					calendar: {
						sameDay: "[今日] LT",
						nextDay: "[明日] LT",
						nextWeek: function(e) {
							return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
						},
						lastDay: "[昨日] LT",
						lastWeek: function(e) {
							return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
						},
						sameElse: "L"
					},
					dayOfMonthOrdinalParse: /\d{1,2}日/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "日";
							default:
								return e
						}
					},
					relativeTime: {
						future: "%s後",
						past: "%s前",
						s: "数秒",
						ss: "%d秒",
						m: "1分",
						mm: "%d分",
						h: "1時間",
						hh: "%d時間",
						d: "1日",
						dd: "%d日",
						M: "1ヶ月",
						MM: "%dヶ月",
						y: "1年",
						yy: "%d年"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/jv.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("jv", {
					months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
					monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
					weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
					weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
					weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /enjing|siyang|sonten|ndalu/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
					},
					calendar: {
						sameDay: "[Dinten puniko pukul] LT",
						nextDay: "[Mbenjang pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kala wingi pukul] LT",
						lastWeek: "dddd [kepengker pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "wonten ing %s",
						past: "%s ingkang kepengker",
						s: "sawetawis detik",
						ss: "%d detik",
						m: "setunggal menit",
						mm: "%d menit",
						h: "setunggal jam",
						hh: "%d jam",
						d: "sedinten",
						dd: "%d dinten",
						M: "sewulan",
						MM: "%d wulan",
						y: "setaun",
						yy: "%d taun"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ka.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ka", {
					months: {
						standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
						format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
					},
					monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
					weekdays: {
						standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
						format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
						isFormat: /(წინა|შემდეგ)/
					},
					weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
					weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[დღეს] LT[-ზე]",
						nextDay: "[ხვალ] LT[-ზე]",
						lastDay: "[გუშინ] LT[-ზე]",
						nextWeek: "[შემდეგ] dddd LT[-ზე]",
						lastWeek: "[წინა] dddd LT-ზე",
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
						},
						past: function(e) {
							return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
						},
						s: "რამდენიმე წამი",
						ss: "%d წამი",
						m: "წუთი",
						mm: "%d წუთი",
						h: "საათი",
						hh: "%d საათი",
						d: "დღე",
						dd: "%d დღე",
						M: "თვე",
						MM: "%d თვე",
						y: "წელი",
						yy: "%d წელი"
					},
					dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
					ordinal: function(e) {
						return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/kk.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-ші",
					1: "-ші",
					2: "-ші",
					3: "-ші",
					4: "-ші",
					5: "-ші",
					6: "-шы",
					7: "-ші",
					8: "-ші",
					9: "-шы",
					10: "-шы",
					20: "-шы",
					30: "-шы",
					40: "-шы",
					50: "-ші",
					60: "-шы",
					70: "-ші",
					80: "-ші",
					90: "-шы",
					100: "-ші"
				};
				e.defineLocale("kk", {
					months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
					monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
					weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
					weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
					weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Бүгін сағат] LT",
						nextDay: "[Ертең сағат] LT",
						nextWeek: "dddd [сағат] LT",
						lastDay: "[Кеше сағат] LT",
						lastWeek: "[Өткен аптаның] dddd [сағат] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s ішінде",
						past: "%s бұрын",
						s: "бірнеше секунд",
						ss: "%d секунд",
						m: "бір минут",
						mm: "%d минут",
						h: "бір сағат",
						hh: "%d сағат",
						d: "бір күн",
						dd: "%d күн",
						M: "бір ай",
						MM: "%d ай",
						y: "бір жыл",
						yy: "%d жыл"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
					ordinal: function(e) {
						return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/km.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "១",
						2: "២",
						3: "៣",
						4: "៤",
						5: "៥",
						6: "៦",
						7: "៧",
						8: "៨",
						9: "៩",
						0: "០"
					},
					n = {
						"១": "1",
						"២": "2",
						"៣": "3",
						"៤": "4",
						"៥": "5",
						"៦": "6",
						"៧": "7",
						"៨": "8",
						"៩": "9",
						"០": "0"
					};
				e.defineLocale("km", {
					months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
					monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
					weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
					weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
					weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					meridiemParse: /ព្រឹក|ល្ងាច/,
					isPM: function(e) {
						return "ល្ងាច" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ព្រឹក" : "ល្ងាច"
					},
					calendar: {
						sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
						nextDay: "[ស្អែក ម៉ោង] LT",
						nextWeek: "dddd [ម៉ោង] LT",
						lastDay: "[ម្សិលមិញ ម៉ោង] LT",
						lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sទៀត",
						past: "%sមុន",
						s: "ប៉ុន្មានវិនាទី",
						ss: "%d វិនាទី",
						m: "មួយនាទី",
						mm: "%d នាទី",
						h: "មួយម៉ោង",
						hh: "%d ម៉ោង",
						d: "មួយថ្ងៃ",
						dd: "%d ថ្ងៃ",
						M: "មួយខែ",
						MM: "%d ខែ",
						y: "មួយឆ្នាំ",
						yy: "%d ឆ្នាំ"
					},
					dayOfMonthOrdinalParse: /ទី\d{1,2}/,
					ordinal: "ទី%d",
					preparse: function(e) {
						return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/kn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "೧",
						2: "೨",
						3: "೩",
						4: "೪",
						5: "೫",
						6: "೬",
						7: "೭",
						8: "೮",
						9: "೯",
						0: "೦"
					},
					n = {
						"೧": "1",
						"೨": "2",
						"೩": "3",
						"೪": "4",
						"೫": "5",
						"೬": "6",
						"೭": "7",
						"೮": "8",
						"೯": "9",
						"೦": "0"
					};
				e.defineLocale("kn", {
					months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
					monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
					monthsParseExact: !0,
					weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
					weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
					weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
					longDateFormat: {
						LT: "A h:mm",
						LTS: "A h:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm",
						LLLL: "dddd, D MMMM YYYY, A h:mm"
					},
					calendar: {
						sameDay: "[ಇಂದು] LT",
						nextDay: "[ನಾಳೆ] LT",
						nextWeek: "dddd, LT",
						lastDay: "[ನಿನ್ನೆ] LT",
						lastWeek: "[ಕೊನೆಯ] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s ನಂತರ",
						past: "%s ಹಿಂದೆ",
						s: "ಕೆಲವು ಕ್ಷಣಗಳು",
						ss: "%d ಸೆಕೆಂಡುಗಳು",
						m: "ಒಂದು ನಿಮಿಷ",
						mm: "%d ನಿಮಿಷ",
						h: "ಒಂದು ಗಂಟೆ",
						hh: "%d ಗಂಟೆ",
						d: "ಒಂದು ದಿನ",
						dd: "%d ದಿನ",
						M: "ಒಂದು ತಿಂಗಳು",
						MM: "%d ತಿಂಗಳು",
						y: "ಒಂದು ವರ್ಷ",
						yy: "%d ವರ್ಷ"
					},
					preparse: function(e) {
						return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
					ordinal: function(e) {
						return e + "ನೇ"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ko.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ko", {
					months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
					monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
					weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
					weekdaysShort: "일_월_화_수_목_금_토".split("_"),
					weekdaysMin: "일_월_화_수_목_금_토".split("_"),
					longDateFormat: {
						LT: "A h:mm",
						LTS: "A h:mm:ss",
						L: "YYYY.MM.DD.",
						LL: "YYYY년 MMMM D일",
						LLL: "YYYY년 MMMM D일 A h:mm",
						LLLL: "YYYY년 MMMM D일 dddd A h:mm",
						l: "YYYY.MM.DD.",
						ll: "YYYY년 MMMM D일",
						lll: "YYYY년 MMMM D일 A h:mm",
						llll: "YYYY년 MMMM D일 dddd A h:mm"
					},
					calendar: {
						sameDay: "오늘 LT",
						nextDay: "내일 LT",
						nextWeek: "dddd LT",
						lastDay: "어제 LT",
						lastWeek: "지난주 dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s 후",
						past: "%s 전",
						s: "몇 초",
						ss: "%d초",
						m: "1분",
						mm: "%d분",
						h: "한 시간",
						hh: "%d시간",
						d: "하루",
						dd: "%d일",
						M: "한 달",
						MM: "%d달",
						y: "일 년",
						yy: "%d년"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "일";
							case "M":
								return e + "월";
							case "w":
							case "W":
								return e + "주";
							default:
								return e
						}
					},
					meridiemParse: /오전|오후/,
					isPM: function(e) {
						return "오후" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "오전" : "오후"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ku.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "١",
						2: "٢",
						3: "٣",
						4: "٤",
						5: "٥",
						6: "٦",
						7: "٧",
						8: "٨",
						9: "٩",
						0: "٠"
					},
					n = {
						"١": "1",
						"٢": "2",
						"٣": "3",
						"٤": "4",
						"٥": "5",
						"٦": "6",
						"٧": "7",
						"٨": "8",
						"٩": "9",
						"٠": "0"
					},
					a = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
				e.defineLocale("ku", {
					months: a,
					monthsShort: a,
					weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
					weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
					weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					meridiemParse: /ئێواره‌|به‌یانی/,
					isPM: function(e) {
						return /ئێواره‌/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "به‌یانی" : "ئێواره‌"
					},
					calendar: {
						sameDay: "[ئه‌مرۆ كاتژمێر] LT",
						nextDay: "[به‌یانی كاتژمێر] LT",
						nextWeek: "dddd [كاتژمێر] LT",
						lastDay: "[دوێنێ كاتژمێر] LT",
						lastWeek: "dddd [كاتژمێر] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "له‌ %s",
						past: "%s",
						s: "چه‌ند چركه‌یه‌ك",
						ss: "چركه‌ %d",
						m: "یه‌ك خوله‌ك",
						mm: "%d خوله‌ك",
						h: "یه‌ك كاتژمێر",
						hh: "%d كاتژمێر",
						d: "یه‌ك ڕۆژ",
						dd: "%d ڕۆژ",
						M: "یه‌ك مانگ",
						MM: "%d مانگ",
						y: "یه‌ك ساڵ",
						yy: "%d ساڵ"
					},
					preparse: function(e) {
						return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
							return n[e]
						})).replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						})).replace(/,/g, "،")
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ky.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-чү",
					1: "-чи",
					2: "-чи",
					3: "-чү",
					4: "-чү",
					5: "-чи",
					6: "-чы",
					7: "-чи",
					8: "-чи",
					9: "-чу",
					10: "-чу",
					20: "-чы",
					30: "-чу",
					40: "-чы",
					50: "-чү",
					60: "-чы",
					70: "-чи",
					80: "-чи",
					90: "-чу",
					100: "-чү"
				};
				e.defineLocale("ky", {
					months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
					monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
					weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
					weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
					weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Бүгүн саат] LT",
						nextDay: "[Эртең саат] LT",
						nextWeek: "dddd [саат] LT",
						lastDay: "[Кечээ саат] LT",
						lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s ичинде",
						past: "%s мурун",
						s: "бирнече секунд",
						ss: "%d секунд",
						m: "бир мүнөт",
						mm: "%d мүнөт",
						h: "бир саат",
						hh: "%d саат",
						d: "бир күн",
						dd: "%d күн",
						M: "бир ай",
						MM: "%d ай",
						y: "бир жыл",
						yy: "%d жыл"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
					ordinal: function(e) {
						return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/lb.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						m: ["eng Minutt", "enger Minutt"],
						h: ["eng Stonn", "enger Stonn"],
						d: ["een Dag", "engem Dag"],
						M: ["ee Mount", "engem Mount"],
						y: ["ee Joer", "engem Joer"]
					};
					return t ? s[n][0] : s[n][1]
				}

				function n(e) {
					if (e = parseInt(e, 10), isNaN(e)) return !1;
					if (e < 0) return !0;
					if (e < 10) return 4 <= e && e <= 7;
					if (e < 100) {
						var t = e % 10;
						return n(0 === t ? e / 10 : t)
					}
					if (e < 1e4) {
						for (; e >= 10;) e /= 10;
						return n(e)
					}
					return n(e /= 1e3)
				}
				e.defineLocale("lb", {
					months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
					monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
					monthsParseExact: !0,
					weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
					weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
					weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm [Auer]",
						LTS: "H:mm:ss [Auer]",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm [Auer]",
						LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
					},
					calendar: {
						sameDay: "[Haut um] LT",
						sameElse: "L",
						nextDay: "[Muer um] LT",
						nextWeek: "dddd [um] LT",
						lastDay: "[Gëschter um] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 2:
								case 4:
									return "[Leschten] dddd [um] LT";
								default:
									return "[Leschte] dddd [um] LT"
							}
						}
					},
					relativeTime: {
						future: function(e) {
							return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
						},
						past: function(e) {
							return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
						},
						s: "e puer Sekonnen",
						ss: "%d Sekonnen",
						m: t,
						mm: "%d Minutten",
						h: t,
						hh: "%d Stonnen",
						d: t,
						dd: "%d Deeg",
						M: t,
						MM: "%d Méint",
						y: t,
						yy: "%d Joer"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/lo.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("lo", {
					months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
					monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
					weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
					weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
					weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "ວັນdddd D MMMM YYYY HH:mm"
					},
					meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
					isPM: function(e) {
						return "ຕອນແລງ" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
					},
					calendar: {
						sameDay: "[ມື້ນີ້ເວລາ] LT",
						nextDay: "[ມື້ອື່ນເວລາ] LT",
						nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
						lastDay: "[ມື້ວານນີ້ເວລາ] LT",
						lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ອີກ %s",
						past: "%sຜ່ານມາ",
						s: "ບໍ່ເທົ່າໃດວິນາທີ",
						ss: "%d ວິນາທີ",
						m: "1 ນາທີ",
						mm: "%d ນາທີ",
						h: "1 ຊົ່ວໂມງ",
						hh: "%d ຊົ່ວໂມງ",
						d: "1 ມື້",
						dd: "%d ມື້",
						M: "1 ເດືອນ",
						MM: "%d ເດືອນ",
						y: "1 ປີ",
						yy: "%d ປີ"
					},
					dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
					ordinal: function(e) {
						return "ທີ່" + e
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/lt.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					ss: "sekundė_sekundžių_sekundes",
					m: "minutė_minutės_minutę",
					mm: "minutės_minučių_minutes",
					h: "valanda_valandos_valandą",
					hh: "valandos_valandų_valandas",
					d: "diena_dienos_dieną",
					dd: "dienos_dienų_dienas",
					M: "mėnuo_mėnesio_mėnesį",
					MM: "mėnesiai_mėnesių_mėnesius",
					y: "metai_metų_metus",
					yy: "metai_metų_metus"
				};

				function n(e, t, n, a) {
					return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
				}

				function a(e) {
					return e % 10 == 0 || e > 10 && e < 20
				}

				function s(e) {
					return t[e].split("_")
				}

				function r(e, t, r, i) {
					var o = e + " ";
					return 1 === e ? o + n(0, t, r[0], i) : t ? o + (a(e) ? s(r)[1] : s(r)[0]) : i ? o + s(r)[1] : o + (a(e) ? s(r)[1] : s(r)[2])
				}
				e.defineLocale("lt", {
					months: {
						format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
						standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
						isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
					},
					monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
					weekdays: {
						format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
						standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
						isFormat: /dddd HH:mm/
					},
					weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
					weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "YYYY [m.] MMMM D [d.]",
						LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
						LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
						l: "YYYY-MM-DD",
						ll: "YYYY [m.] MMMM D [d.]",
						lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
						llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
					},
					calendar: {
						sameDay: "[Šiandien] LT",
						nextDay: "[Rytoj] LT",
						nextWeek: "dddd LT",
						lastDay: "[Vakar] LT",
						lastWeek: "[Praėjusį] dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "po %s",
						past: "prieš %s",
						s: function(e, t, n, a) {
							return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
						},
						ss: r,
						m: n,
						mm: r,
						h: n,
						hh: r,
						d: n,
						dd: r,
						M: n,
						MM: r,
						y: n,
						yy: r
					},
					dayOfMonthOrdinalParse: /\d{1,2}-oji/,
					ordinal: function(e) {
						return e + "-oji"
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/lv.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
					m: "minūtes_minūtēm_minūte_minūtes".split("_"),
					mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
					h: "stundas_stundām_stunda_stundas".split("_"),
					hh: "stundas_stundām_stunda_stundas".split("_"),
					d: "dienas_dienām_diena_dienas".split("_"),
					dd: "dienas_dienām_diena_dienas".split("_"),
					M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
					MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
					y: "gada_gadiem_gads_gadi".split("_"),
					yy: "gada_gadiem_gads_gadi".split("_")
				};

				function n(e, t, n) {
					return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
				}

				function a(e, a, s) {
					return e + " " + n(t[s], e, a)
				}

				function s(e, a, s) {
					return n(t[s], e, a)
				}
				e.defineLocale("lv", {
					months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
					monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
					weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
					weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
					weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY.",
						LL: "YYYY. [gada] D. MMMM",
						LLL: "YYYY. [gada] D. MMMM, HH:mm",
						LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
					},
					calendar: {
						sameDay: "[Šodien pulksten] LT",
						nextDay: "[Rīt pulksten] LT",
						nextWeek: "dddd [pulksten] LT",
						lastDay: "[Vakar pulksten] LT",
						lastWeek: "[Pagājušā] dddd [pulksten] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "pēc %s",
						past: "pirms %s",
						s: function(e, t) {
							return t ? "dažas sekundes" : "dažām sekundēm"
						},
						ss: a,
						m: s,
						mm: a,
						h: s,
						hh: a,
						d: s,
						dd: a,
						M: s,
						MM: a,
						y: s,
						yy: a
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/me.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					words: {
						ss: ["sekund", "sekunda", "sekundi"],
						m: ["jedan minut", "jednog minuta"],
						mm: ["minut", "minuta", "minuta"],
						h: ["jedan sat", "jednog sata"],
						hh: ["sat", "sata", "sati"],
						dd: ["dan", "dana", "dana"],
						MM: ["mjesec", "mjeseca", "mjeseci"],
						yy: ["godina", "godine", "godina"]
					},
					correctGrammaticalCase: function(e, t) {
						return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
					},
					translate: function(e, n, a) {
						var s = t.words[a];
						return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
					}
				};
				e.defineLocale("me", {
					months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
					monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
					weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
					weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[danas u] LT",
						nextDay: "[sjutra u] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[u] [nedjelju] [u] LT";
								case 3:
									return "[u] [srijedu] [u] LT";
								case 6:
									return "[u] [subotu] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[u] dddd [u] LT"
							}
						},
						lastDay: "[juče u] LT",
						lastWeek: function() {
							return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "prije %s",
						s: "nekoliko sekundi",
						ss: t.translate,
						m: t.translate,
						mm: t.translate,
						h: t.translate,
						hh: t.translate,
						d: "dan",
						dd: t.translate,
						M: "mjesec",
						MM: t.translate,
						y: "godinu",
						yy: t.translate
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/mi.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("mi", {
					months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
					monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
					monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
					monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
					monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
					monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
					weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
					weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
					weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [i] HH:mm",
						LLLL: "dddd, D MMMM YYYY [i] HH:mm"
					},
					calendar: {
						sameDay: "[i teie mahana, i] LT",
						nextDay: "[apopo i] LT",
						nextWeek: "dddd [i] LT",
						lastDay: "[inanahi i] LT",
						lastWeek: "dddd [whakamutunga i] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "i roto i %s",
						past: "%s i mua",
						s: "te hēkona ruarua",
						ss: "%d hēkona",
						m: "he meneti",
						mm: "%d meneti",
						h: "te haora",
						hh: "%d haora",
						d: "he ra",
						dd: "%d ra",
						M: "he marama",
						MM: "%d marama",
						y: "he tau",
						yy: "%d tau"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/mk.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("mk", {
					months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
					monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
					weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
					weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
					weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "D.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY H:mm",
						LLLL: "dddd, D MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[Денес во] LT",
						nextDay: "[Утре во] LT",
						nextWeek: "[Во] dddd [во] LT",
						lastDay: "[Вчера во] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
								case 6:
									return "[Изминатата] dddd [во] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[Изминатиот] dddd [во] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "после %s",
						past: "пред %s",
						s: "неколку секунди",
						ss: "%d секунди",
						m: "минута",
						mm: "%d минути",
						h: "час",
						hh: "%d часа",
						d: "ден",
						dd: "%d дена",
						M: "месец",
						MM: "%d месеци",
						y: "година",
						yy: "%d години"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
					ordinal: function(e) {
						var t = e % 10,
							n = e % 100;
						return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ml.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ml", {
					months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
					monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
					monthsParseExact: !0,
					weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
					weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
					weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
					longDateFormat: {
						LT: "A h:mm -നു",
						LTS: "A h:mm:ss -നു",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm -നു",
						LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
					},
					calendar: {
						sameDay: "[ഇന്ന്] LT",
						nextDay: "[നാളെ] LT",
						nextWeek: "dddd, LT",
						lastDay: "[ഇന്നലെ] LT",
						lastWeek: "[കഴിഞ്ഞ] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s കഴിഞ്ഞ്",
						past: "%s മുൻപ്",
						s: "അൽപ നിമിഷങ്ങൾ",
						ss: "%d സെക്കൻഡ്",
						m: "ഒരു മിനിറ്റ്",
						mm: "%d മിനിറ്റ്",
						h: "ഒരു മണിക്കൂർ",
						hh: "%d മണിക്കൂർ",
						d: "ഒരു ദിവസം",
						dd: "%d ദിവസം",
						M: "ഒരു മാസം",
						MM: "%d മാസം",
						y: "ഒരു വർഷം",
						yy: "%d വർഷം"
					},
					meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/mn.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					switch (n) {
						case "s":
							return t ? "хэдхэн секунд" : "хэдхэн секундын";
						case "ss":
							return e + (t ? " секунд" : " секундын");
						case "m":
						case "mm":
							return e + (t ? " минут" : " минутын");
						case "h":
						case "hh":
							return e + (t ? " цаг" : " цагийн");
						case "d":
						case "dd":
							return e + (t ? " өдөр" : " өдрийн");
						case "M":
						case "MM":
							return e + (t ? " сар" : " сарын");
						case "y":
						case "yy":
							return e + (t ? " жил" : " жилийн");
						default:
							return e
					}
				}
				e.defineLocale("mn", {
					months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
					monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
					monthsParseExact: !0,
					weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
					weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
					weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "YYYY оны MMMMын D",
						LLL: "YYYY оны MMMMын D HH:mm",
						LLLL: "dddd, YYYY оны MMMMын D HH:mm"
					},
					meridiemParse: /ҮӨ|ҮХ/i,
					isPM: function(e) {
						return "ҮХ" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ҮӨ" : "ҮХ"
					},
					calendar: {
						sameDay: "[Өнөөдөр] LT",
						nextDay: "[Маргааш] LT",
						nextWeek: "[Ирэх] dddd LT",
						lastDay: "[Өчигдөр] LT",
						lastWeek: "[Өнгөрсөн] dddd LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s дараа",
						past: "%s өмнө",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + " өдөр";
							default:
								return e
						}
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/mr.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "१",
						2: "२",
						3: "३",
						4: "४",
						5: "५",
						6: "६",
						7: "७",
						8: "८",
						9: "९",
						0: "०"
					},
					n = {
						"१": "1",
						"२": "2",
						"३": "3",
						"४": "4",
						"५": "5",
						"६": "6",
						"७": "7",
						"८": "8",
						"९": "9",
						"०": "0"
					};

				function a(e, t, n, a) {
					var s = "";
					if (t) switch (n) {
						case "s":
							s = "काही सेकंद";
							break;
						case "ss":
							s = "%d सेकंद";
							break;
						case "m":
							s = "एक मिनिट";
							break;
						case "mm":
							s = "%d मिनिटे";
							break;
						case "h":
							s = "एक तास";
							break;
						case "hh":
							s = "%d तास";
							break;
						case "d":
							s = "एक दिवस";
							break;
						case "dd":
							s = "%d दिवस";
							break;
						case "M":
							s = "एक महिना";
							break;
						case "MM":
							s = "%d महिने";
							break;
						case "y":
							s = "एक वर्ष";
							break;
						case "yy":
							s = "%d वर्षे"
					} else switch (n) {
						case "s":
							s = "काही सेकंदां";
							break;
						case "ss":
							s = "%d सेकंदां";
							break;
						case "m":
							s = "एका मिनिटा";
							break;
						case "mm":
							s = "%d मिनिटां";
							break;
						case "h":
							s = "एका तासा";
							break;
						case "hh":
							s = "%d तासां";
							break;
						case "d":
							s = "एका दिवसा";
							break;
						case "dd":
							s = "%d दिवसां";
							break;
						case "M":
							s = "एका महिन्या";
							break;
						case "MM":
							s = "%d महिन्यां";
							break;
						case "y":
							s = "एका वर्षा";
							break;
						case "yy":
							s = "%d वर्षां"
					}
					return s.replace(/%d/i, e)
				}
				e.defineLocale("mr", {
					months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
					monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
					monthsParseExact: !0,
					weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
					weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
					weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
					longDateFormat: {
						LT: "A h:mm वाजता",
						LTS: "A h:mm:ss वाजता",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm वाजता",
						LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
					},
					calendar: {
						sameDay: "[आज] LT",
						nextDay: "[उद्या] LT",
						nextWeek: "dddd, LT",
						lastDay: "[काल] LT",
						lastWeek: "[मागील] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sमध्ये",
						past: "%sपूर्वी",
						s: a,
						ss: a,
						m: a,
						mm: a,
						h: a,
						hh: a,
						d: a,
						dd: a,
						M: a,
						MM: a,
						y: a,
						yy: a
					},
					preparse: function(e) {
						return e.replace(/[१२३४५६७८९०]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ms-my.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ms-my", {
					months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
					monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
					weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
					weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
					weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /pagi|tengahari|petang|malam/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
					},
					calendar: {
						sameDay: "[Hari ini pukul] LT",
						nextDay: "[Esok pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kelmarin pukul] LT",
						lastWeek: "dddd [lepas pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dalam %s",
						past: "%s yang lepas",
						s: "beberapa saat",
						ss: "%d saat",
						m: "seminit",
						mm: "%d minit",
						h: "sejam",
						hh: "%d jam",
						d: "sehari",
						dd: "%d hari",
						M: "sebulan",
						MM: "%d bulan",
						y: "setahun",
						yy: "%d tahun"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ms.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ms", {
					months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
					monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
					weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
					weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
					weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [pukul] HH.mm",
						LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
					},
					meridiemParse: /pagi|tengahari|petang|malam/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
					},
					calendar: {
						sameDay: "[Hari ini pukul] LT",
						nextDay: "[Esok pukul] LT",
						nextWeek: "dddd [pukul] LT",
						lastDay: "[Kelmarin pukul] LT",
						lastWeek: "dddd [lepas pukul] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dalam %s",
						past: "%s yang lepas",
						s: "beberapa saat",
						ss: "%d saat",
						m: "seminit",
						mm: "%d minit",
						h: "sejam",
						hh: "%d jam",
						d: "sehari",
						dd: "%d hari",
						M: "sebulan",
						MM: "%d bulan",
						y: "setahun",
						yy: "%d tahun"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/mt.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("mt", {
					months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
					monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
					weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
					weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
					weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Illum fil-]LT",
						nextDay: "[Għada fil-]LT",
						nextWeek: "dddd [fil-]LT",
						lastDay: "[Il-bieraħ fil-]LT",
						lastWeek: "dddd [li għadda] [fil-]LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "f’ %s",
						past: "%s ilu",
						s: "ftit sekondi",
						ss: "%d sekondi",
						m: "minuta",
						mm: "%d minuti",
						h: "siegħa",
						hh: "%d siegħat",
						d: "ġurnata",
						dd: "%d ġranet",
						M: "xahar",
						MM: "%d xhur",
						y: "sena",
						yy: "%d sni"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/my.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "၁",
						2: "၂",
						3: "၃",
						4: "၄",
						5: "၅",
						6: "၆",
						7: "၇",
						8: "၈",
						9: "၉",
						0: "၀"
					},
					n = {
						"၁": "1",
						"၂": "2",
						"၃": "3",
						"၄": "4",
						"၅": "5",
						"၆": "6",
						"၇": "7",
						"၈": "8",
						"၉": "9",
						"၀": "0"
					};
				e.defineLocale("my", {
					months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
					monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
					weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
					weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
					weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[ယနေ.] LT [မှာ]",
						nextDay: "[မနက်ဖြန်] LT [မှာ]",
						nextWeek: "dddd LT [မှာ]",
						lastDay: "[မနေ.က] LT [မှာ]",
						lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
						sameElse: "L"
					},
					relativeTime: {
						future: "လာမည့် %s မှာ",
						past: "လွန်ခဲ့သော %s က",
						s: "စက္ကန်.အနည်းငယ်",
						ss: "%d စက္ကန့်",
						m: "တစ်မိနစ်",
						mm: "%d မိနစ်",
						h: "တစ်နာရီ",
						hh: "%d နာရီ",
						d: "တစ်ရက်",
						dd: "%d ရက်",
						M: "တစ်လ",
						MM: "%d လ",
						y: "တစ်နှစ်",
						yy: "%d နှစ်"
					},
					preparse: function(e) {
						return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/nb.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("nb", {
					months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
					monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
					monthsParseExact: !0,
					weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
					weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
					weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY [kl.] HH:mm",
						LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
					},
					calendar: {
						sameDay: "[i dag kl.] LT",
						nextDay: "[i morgen kl.] LT",
						nextWeek: "dddd [kl.] LT",
						lastDay: "[i går kl.] LT",
						lastWeek: "[forrige] dddd [kl.] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "%s siden",
						s: "noen sekunder",
						ss: "%d sekunder",
						m: "ett minutt",
						mm: "%d minutter",
						h: "en time",
						hh: "%d timer",
						d: "en dag",
						dd: "%d dager",
						M: "en måned",
						MM: "%d måneder",
						y: "ett år",
						yy: "%d år"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ne.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "१",
						2: "२",
						3: "३",
						4: "४",
						5: "५",
						6: "६",
						7: "७",
						8: "८",
						9: "९",
						0: "०"
					},
					n = {
						"१": "1",
						"२": "2",
						"३": "3",
						"४": "4",
						"५": "5",
						"६": "6",
						"७": "7",
						"८": "8",
						"९": "9",
						"०": "0"
					};
				e.defineLocale("ne", {
					months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
					monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
					monthsParseExact: !0,
					weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
					weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
					weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "Aको h:mm बजे",
						LTS: "Aको h:mm:ss बजे",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, Aको h:mm बजे",
						LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
					},
					preparse: function(e) {
						return e.replace(/[१२३४५६७८९०]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
					},
					calendar: {
						sameDay: "[आज] LT",
						nextDay: "[भोलि] LT",
						nextWeek: "[आउँदो] dddd[,] LT",
						lastDay: "[हिजो] LT",
						lastWeek: "[गएको] dddd[,] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sमा",
						past: "%s अगाडि",
						s: "केही क्षण",
						ss: "%d सेकेण्ड",
						m: "एक मिनेट",
						mm: "%d मिनेट",
						h: "एक घण्टा",
						hh: "%d घण्टा",
						d: "एक दिन",
						dd: "%d दिन",
						M: "एक महिना",
						MM: "%d महिना",
						y: "एक बर्ष",
						yy: "%d बर्ष"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/nl-be.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
					n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
					a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
					s = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
				e.defineLocale("nl-be", {
					months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
					monthsShort: function(e, a) {
						return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: s,
					monthsShortRegex: s,
					monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
					monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
					monthsParse: a,
					longMonthsParse: a,
					shortMonthsParse: a,
					weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
					weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
					weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[vandaag om] LT",
						nextDay: "[morgen om] LT",
						nextWeek: "dddd [om] LT",
						lastDay: "[gisteren om] LT",
						lastWeek: "[afgelopen] dddd [om] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "over %s",
						past: "%s geleden",
						s: "een paar seconden",
						ss: "%d seconden",
						m: "één minuut",
						mm: "%d minuten",
						h: "één uur",
						hh: "%d uur",
						d: "één dag",
						dd: "%d dagen",
						M: "één maand",
						MM: "%d maanden",
						y: "één jaar",
						yy: "%d jaar"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
					ordinal: function(e) {
						return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/nl.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
					n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
					a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
					s = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
				e.defineLocale("nl", {
					months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
					monthsShort: function(e, a) {
						return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsRegex: s,
					monthsShortRegex: s,
					monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
					monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
					monthsParse: a,
					longMonthsParse: a,
					shortMonthsParse: a,
					weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
					weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
					weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD-MM-YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[vandaag om] LT",
						nextDay: "[morgen om] LT",
						nextWeek: "dddd [om] LT",
						lastDay: "[gisteren om] LT",
						lastWeek: "[afgelopen] dddd [om] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "over %s",
						past: "%s geleden",
						s: "een paar seconden",
						ss: "%d seconden",
						m: "één minuut",
						mm: "%d minuten",
						h: "één uur",
						hh: "%d uur",
						d: "één dag",
						dd: "%d dagen",
						M: "één maand",
						MM: "%d maanden",
						y: "één jaar",
						yy: "%d jaar"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
					ordinal: function(e) {
						return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/nn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("nn", {
					months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
					monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
					weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
					weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
					weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY [kl.] H:mm",
						LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
					},
					calendar: {
						sameDay: "[I dag klokka] LT",
						nextDay: "[I morgon klokka] LT",
						nextWeek: "dddd [klokka] LT",
						lastDay: "[I går klokka] LT",
						lastWeek: "[Føregåande] dddd [klokka] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "%s sidan",
						s: "nokre sekund",
						ss: "%d sekund",
						m: "eit minutt",
						mm: "%d minutt",
						h: "ein time",
						hh: "%d timar",
						d: "ein dag",
						dd: "%d dagar",
						M: "ein månad",
						MM: "%d månader",
						y: "eit år",
						yy: "%d år"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/pa-in.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "੧",
						2: "੨",
						3: "੩",
						4: "੪",
						5: "੫",
						6: "੬",
						7: "੭",
						8: "੮",
						9: "੯",
						0: "੦"
					},
					n = {
						"੧": "1",
						"੨": "2",
						"੩": "3",
						"੪": "4",
						"੫": "5",
						"੬": "6",
						"੭": "7",
						"੮": "8",
						"੯": "9",
						"੦": "0"
					};
				e.defineLocale("pa-in", {
					months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
					monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
					weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
					weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
					weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
					longDateFormat: {
						LT: "A h:mm ਵਜੇ",
						LTS: "A h:mm:ss ਵਜੇ",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
						LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
					},
					calendar: {
						sameDay: "[ਅਜ] LT",
						nextDay: "[ਕਲ] LT",
						nextWeek: "[ਅਗਲਾ] dddd, LT",
						lastDay: "[ਕਲ] LT",
						lastWeek: "[ਪਿਛਲੇ] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s ਵਿੱਚ",
						past: "%s ਪਿਛਲੇ",
						s: "ਕੁਝ ਸਕਿੰਟ",
						ss: "%d ਸਕਿੰਟ",
						m: "ਇਕ ਮਿੰਟ",
						mm: "%d ਮਿੰਟ",
						h: "ਇੱਕ ਘੰਟਾ",
						hh: "%d ਘੰਟੇ",
						d: "ਇੱਕ ਦਿਨ",
						dd: "%d ਦਿਨ",
						M: "ਇੱਕ ਮਹੀਨਾ",
						MM: "%d ਮਹੀਨੇ",
						y: "ਇੱਕ ਸਾਲ",
						yy: "%d ਸਾਲ"
					},
					preparse: function(e) {
						return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/pl.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
					n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

				function a(e) {
					return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
				}

				function s(e, t, n) {
					var s = e + " ";
					switch (n) {
						case "ss":
							return s + (a(e) ? "sekundy" : "sekund");
						case "m":
							return t ? "minuta" : "minutę";
						case "mm":
							return s + (a(e) ? "minuty" : "minut");
						case "h":
							return t ? "godzina" : "godzinę";
						case "hh":
							return s + (a(e) ? "godziny" : "godzin");
						case "MM":
							return s + (a(e) ? "miesiące" : "miesięcy");
						case "yy":
							return s + (a(e) ? "lata" : "lat")
					}
				}
				e.defineLocale("pl", {
					months: function(e, a) {
						return e ? "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t
					},
					monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
					weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
					weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
					weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Dziś o] LT",
						nextDay: "[Jutro o] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[W niedzielę o] LT";
								case 2:
									return "[We wtorek o] LT";
								case 3:
									return "[W środę o] LT";
								case 6:
									return "[W sobotę o] LT";
								default:
									return "[W] dddd [o] LT"
							}
						},
						lastDay: "[Wczoraj o] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[W zeszłą niedzielę o] LT";
								case 3:
									return "[W zeszłą środę o] LT";
								case 6:
									return "[W zeszłą sobotę o] LT";
								default:
									return "[W zeszły] dddd [o] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "%s temu",
						s: "kilka sekund",
						ss: s,
						m: s,
						mm: s,
						h: s,
						hh: s,
						d: "1 dzień",
						dd: "%d dni",
						M: "miesiąc",
						MM: s,
						y: "rok",
						yy: s
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/pt-br.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("pt-br", {
					months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
					monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
					weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
					weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
					weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
						LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
					},
					calendar: {
						sameDay: "[Hoje às] LT",
						nextDay: "[Amanhã às] LT",
						nextWeek: "dddd [às] LT",
						lastDay: "[Ontem às] LT",
						lastWeek: function() {
							return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "em %s",
						past: "há %s",
						s: "poucos segundos",
						ss: "%d segundos",
						m: "um minuto",
						mm: "%d minutos",
						h: "uma hora",
						hh: "%d horas",
						d: "um dia",
						dd: "%d dias",
						M: "um mês",
						MM: "%d meses",
						y: "um ano",
						yy: "%d anos"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº"
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/pt.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("pt", {
					months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
					monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
					weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
					weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
					weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D [de] MMMM [de] YYYY",
						LLL: "D [de] MMMM [de] YYYY HH:mm",
						LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Hoje às] LT",
						nextDay: "[Amanhã às] LT",
						nextWeek: "dddd [às] LT",
						lastDay: "[Ontem às] LT",
						lastWeek: function() {
							return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "em %s",
						past: "há %s",
						s: "segundos",
						ss: "%d segundos",
						m: "um minuto",
						mm: "%d minutos",
						h: "uma hora",
						hh: "%d horas",
						d: "um dia",
						dd: "%d dias",
						M: "um mês",
						MM: "%d meses",
						y: "um ano",
						yy: "%d anos"
					},
					dayOfMonthOrdinalParse: /\d{1,2}º/,
					ordinal: "%dº",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ro.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var a = " ";
					return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + {
						ss: "secunde",
						mm: "minute",
						hh: "ore",
						dd: "zile",
						MM: "luni",
						yy: "ani"
					} [n]
				}
				e.defineLocale("ro", {
					months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
					monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
					weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
					weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY H:mm",
						LLLL: "dddd, D MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[azi la] LT",
						nextDay: "[mâine la] LT",
						nextWeek: "dddd [la] LT",
						lastDay: "[ieri la] LT",
						lastWeek: "[fosta] dddd [la] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "peste %s",
						past: "%s în urmă",
						s: "câteva secunde",
						ss: t,
						m: "un minut",
						mm: t,
						h: "o oră",
						hh: t,
						d: "o zi",
						dd: t,
						M: "o lună",
						MM: t,
						y: "un an",
						yy: t
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ru.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var a, s;
					return "m" === n ? t ? "минута" : "минуту" : e + " " + (a = +e, s = {
						ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
						mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
						hh: "час_часа_часов",
						dd: "день_дня_дней",
						MM: "месяц_месяца_месяцев",
						yy: "год_года_лет"
					} [n].split("_"), a % 10 == 1 && a % 100 != 11 ? s[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? s[1] : s[2])
				}
				var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
				e.defineLocale("ru", {
					months: {
						format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
						standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
					},
					monthsShort: {
						format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
						standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
					},
					weekdays: {
						standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
						format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
						isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
					},
					weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
					weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
					monthsParse: n,
					longMonthsParse: n,
					shortMonthsParse: n,
					monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
					monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
					monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
					monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY г.",
						LLL: "D MMMM YYYY г., H:mm",
						LLLL: "dddd, D MMMM YYYY г., H:mm"
					},
					calendar: {
						sameDay: "[Сегодня, в] LT",
						nextDay: "[Завтра, в] LT",
						lastDay: "[Вчера, в] LT",
						nextWeek: function(e) {
							if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
							switch (this.day()) {
								case 0:
									return "[В следующее] dddd, [в] LT";
								case 1:
								case 2:
								case 4:
									return "[В следующий] dddd, [в] LT";
								case 3:
								case 5:
								case 6:
									return "[В следующую] dddd, [в] LT"
							}
						},
						lastWeek: function(e) {
							if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
							switch (this.day()) {
								case 0:
									return "[В прошлое] dddd, [в] LT";
								case 1:
								case 2:
								case 4:
									return "[В прошлый] dddd, [в] LT";
								case 3:
								case 5:
								case 6:
									return "[В прошлую] dddd, [в] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "через %s",
						past: "%s назад",
						s: "несколько секунд",
						ss: t,
						m: t,
						mm: t,
						h: "час",
						hh: t,
						d: "день",
						dd: t,
						M: "месяц",
						MM: t,
						y: "год",
						yy: t
					},
					meridiemParse: /ночи|утра|дня|вечера/i,
					isPM: function(e) {
						return /^(дня|вечера)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
					ordinal: function(e, t) {
						switch (t) {
							case "M":
							case "d":
							case "DDD":
								return e + "-й";
							case "D":
								return e + "-го";
							case "w":
							case "W":
								return e + "-я";
							default:
								return e
						}
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sd.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
					n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
				e.defineLocale("sd", {
					months: t,
					monthsShort: t,
					weekdays: n,
					weekdaysShort: n,
					weekdaysMin: n,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd، D MMMM YYYY HH:mm"
					},
					meridiemParse: /صبح|شام/,
					isPM: function(e) {
						return "شام" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "صبح" : "شام"
					},
					calendar: {
						sameDay: "[اڄ] LT",
						nextDay: "[سڀاڻي] LT",
						nextWeek: "dddd [اڳين هفتي تي] LT",
						lastDay: "[ڪالهه] LT",
						lastWeek: "[گزريل هفتي] dddd [تي] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s پوء",
						past: "%s اڳ",
						s: "چند سيڪنڊ",
						ss: "%d سيڪنڊ",
						m: "هڪ منٽ",
						mm: "%d منٽ",
						h: "هڪ ڪلاڪ",
						hh: "%d ڪلاڪ",
						d: "هڪ ڏينهن",
						dd: "%d ڏينهن",
						M: "هڪ مهينو",
						MM: "%d مهينا",
						y: "هڪ سال",
						yy: "%d سال"
					},
					preparse: function(e) {
						return e.replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/,/g, "،")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/se.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("se", {
					months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
					monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
					weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
					weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
					weekdaysMin: "s_v_m_g_d_b_L".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "MMMM D. [b.] YYYY",
						LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
						LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
					},
					calendar: {
						sameDay: "[otne ti] LT",
						nextDay: "[ihttin ti] LT",
						nextWeek: "dddd [ti] LT",
						lastDay: "[ikte ti] LT",
						lastWeek: "[ovddit] dddd [ti] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s geažes",
						past: "maŋit %s",
						s: "moadde sekunddat",
						ss: "%d sekunddat",
						m: "okta minuhta",
						mm: "%d minuhtat",
						h: "okta diimmu",
						hh: "%d diimmut",
						d: "okta beaivi",
						dd: "%d beaivvit",
						M: "okta mánnu",
						MM: "%d mánut",
						y: "okta jahki",
						yy: "%d jagit"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/si.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("si", {
					months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
					monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
					weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
					weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
					weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "a h:mm",
						LTS: "a h:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYY MMMM D",
						LLL: "YYYY MMMM D, a h:mm",
						LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
					},
					calendar: {
						sameDay: "[අද] LT[ට]",
						nextDay: "[හෙට] LT[ට]",
						nextWeek: "dddd LT[ට]",
						lastDay: "[ඊයේ] LT[ට]",
						lastWeek: "[පසුගිය] dddd LT[ට]",
						sameElse: "L"
					},
					relativeTime: {
						future: "%sකින්",
						past: "%sකට පෙර",
						s: "තත්පර කිහිපය",
						ss: "තත්පර %d",
						m: "මිනිත්තුව",
						mm: "මිනිත්තු %d",
						h: "පැය",
						hh: "පැය %d",
						d: "දිනය",
						dd: "දින %d",
						M: "මාසය",
						MM: "මාස %d",
						y: "වසර",
						yy: "වසර %d"
					},
					dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
					ordinal: function(e) {
						return e + " වැනි"
					},
					meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
					isPM: function(e) {
						return "ප.ව." === e || "පස් වරු" === e
					},
					meridiem: function(e, t, n) {
						return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sk.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
					n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

				function a(e) {
					return e > 1 && e < 5
				}

				function s(e, t, n, s) {
					var r = e + " ";
					switch (n) {
						case "s":
							return t || s ? "pár sekúnd" : "pár sekundami";
						case "ss":
							return t || s ? r + (a(e) ? "sekundy" : "sekúnd") : r + "sekundami";
						case "m":
							return t ? "minúta" : s ? "minútu" : "minútou";
						case "mm":
							return t || s ? r + (a(e) ? "minúty" : "minút") : r + "minútami";
						case "h":
							return t ? "hodina" : s ? "hodinu" : "hodinou";
						case "hh":
							return t || s ? r + (a(e) ? "hodiny" : "hodín") : r + "hodinami";
						case "d":
							return t || s ? "deň" : "dňom";
						case "dd":
							return t || s ? r + (a(e) ? "dni" : "dní") : r + "dňami";
						case "M":
							return t || s ? "mesiac" : "mesiacom";
						case "MM":
							return t || s ? r + (a(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
						case "y":
							return t || s ? "rok" : "rokom";
						case "yy":
							return t || s ? r + (a(e) ? "roky" : "rokov") : r + "rokmi"
					}
				}
				e.defineLocale("sk", {
					months: t,
					monthsShort: n,
					weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
					weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
					weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[dnes o] LT",
						nextDay: "[zajtra o] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[v nedeľu o] LT";
								case 1:
								case 2:
									return "[v] dddd [o] LT";
								case 3:
									return "[v stredu o] LT";
								case 4:
									return "[vo štvrtok o] LT";
								case 5:
									return "[v piatok o] LT";
								case 6:
									return "[v sobotu o] LT"
							}
						},
						lastDay: "[včera o] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[minulú nedeľu o] LT";
								case 1:
								case 2:
									return "[minulý] dddd [o] LT";
								case 3:
									return "[minulú stredu o] LT";
								case 4:
								case 5:
									return "[minulý] dddd [o] LT";
								case 6:
									return "[minulú sobotu o] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "pred %s",
						s,
						ss: s,
						m: s,
						mm: s,
						h: s,
						hh: s,
						d: s,
						dd: s,
						M: s,
						MM: s,
						y: s,
						yy: s
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sl.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = e + " ";
					switch (n) {
						case "s":
							return t || a ? "nekaj sekund" : "nekaj sekundami";
						case "ss":
							return s += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
						case "m":
							return t ? "ena minuta" : "eno minuto";
						case "mm":
							return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
						case "h":
							return t ? "ena ura" : "eno uro";
						case "hh":
							return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
						case "d":
							return t || a ? "en dan" : "enim dnem";
						case "dd":
							return s += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
						case "M":
							return t || a ? "en mesec" : "enim mesecem";
						case "MM":
							return s += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
						case "y":
							return t || a ? "eno leto" : "enim letom";
						case "yy":
							return s += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
					}
				}
				e.defineLocale("sl", {
					months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
					monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
					weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
					weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[danes ob] LT",
						nextDay: "[jutri ob] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[v] [nedeljo] [ob] LT";
								case 3:
									return "[v] [sredo] [ob] LT";
								case 6:
									return "[v] [soboto] [ob] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[v] dddd [ob] LT"
							}
						},
						lastDay: "[včeraj ob] LT",
						lastWeek: function() {
							switch (this.day()) {
								case 0:
									return "[prejšnjo] [nedeljo] [ob] LT";
								case 3:
									return "[prejšnjo] [sredo] [ob] LT";
								case 6:
									return "[prejšnjo] [soboto] [ob] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[prejšnji] dddd [ob] LT"
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "čez %s",
						past: "pred %s",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sq.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("sq", {
					months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
					monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
					weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
					weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
					weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
					weekdaysParseExact: !0,
					meridiemParse: /PD|MD/,
					isPM: function(e) {
						return "M" === e.charAt(0)
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "PD" : "MD"
					},
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Sot në] LT",
						nextDay: "[Nesër në] LT",
						nextWeek: "dddd [në] LT",
						lastDay: "[Dje në] LT",
						lastWeek: "dddd [e kaluar në] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "në %s",
						past: "%s më parë",
						s: "disa sekonda",
						ss: "%d sekonda",
						m: "një minutë",
						mm: "%d minuta",
						h: "një orë",
						hh: "%d orë",
						d: "një ditë",
						dd: "%d ditë",
						M: "një muaj",
						MM: "%d muaj",
						y: "një vit",
						yy: "%d vite"
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sr-cyrl.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					words: {
						ss: ["секунда", "секунде", "секунди"],
						m: ["један минут", "једне минуте"],
						mm: ["минут", "минуте", "минута"],
						h: ["један сат", "једног сата"],
						hh: ["сат", "сата", "сати"],
						dd: ["дан", "дана", "дана"],
						MM: ["месец", "месеца", "месеци"],
						yy: ["година", "године", "година"]
					},
					correctGrammaticalCase: function(e, t) {
						return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
					},
					translate: function(e, n, a) {
						var s = t.words[a];
						return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
					}
				};
				e.defineLocale("sr-cyrl", {
					months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
					monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
					monthsParseExact: !0,
					weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
					weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
					weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[данас у] LT",
						nextDay: "[сутра у] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[у] [недељу] [у] LT";
								case 3:
									return "[у] [среду] [у] LT";
								case 6:
									return "[у] [суботу] [у] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[у] dddd [у] LT"
							}
						},
						lastDay: "[јуче у] LT",
						lastWeek: function() {
							return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "за %s",
						past: "пре %s",
						s: "неколико секунди",
						ss: t.translate,
						m: t.translate,
						mm: t.translate,
						h: t.translate,
						hh: t.translate,
						d: "дан",
						dd: t.translate,
						M: "месец",
						MM: t.translate,
						y: "годину",
						yy: t.translate
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sr.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					words: {
						ss: ["sekunda", "sekunde", "sekundi"],
						m: ["jedan minut", "jedne minute"],
						mm: ["minut", "minute", "minuta"],
						h: ["jedan sat", "jednog sata"],
						hh: ["sat", "sata", "sati"],
						dd: ["dan", "dana", "dana"],
						MM: ["mesec", "meseca", "meseci"],
						yy: ["godina", "godine", "godina"]
					},
					correctGrammaticalCase: function(e, t) {
						return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
					},
					translate: function(e, n, a) {
						var s = t.words[a];
						return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
					}
				};
				e.defineLocale("sr", {
					months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
					monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
					monthsParseExact: !0,
					weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
					weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
					weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM YYYY",
						LLL: "D. MMMM YYYY H:mm",
						LLLL: "dddd, D. MMMM YYYY H:mm"
					},
					calendar: {
						sameDay: "[danas u] LT",
						nextDay: "[sutra u] LT",
						nextWeek: function() {
							switch (this.day()) {
								case 0:
									return "[u] [nedelju] [u] LT";
								case 3:
									return "[u] [sredu] [u] LT";
								case 6:
									return "[u] [subotu] [u] LT";
								case 1:
								case 2:
								case 4:
								case 5:
									return "[u] dddd [u] LT"
							}
						},
						lastDay: "[juče u] LT",
						lastWeek: function() {
							return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "za %s",
						past: "pre %s",
						s: "nekoliko sekundi",
						ss: t.translate,
						m: t.translate,
						mm: t.translate,
						h: t.translate,
						hh: t.translate,
						d: "dan",
						dd: t.translate,
						M: "mesec",
						MM: t.translate,
						y: "godinu",
						yy: t.translate
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ss.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ss", {
					months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
					monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
					weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
					weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
					weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Namuhla nga] LT",
						nextDay: "[Kusasa nga] LT",
						nextWeek: "dddd [nga] LT",
						lastDay: "[Itolo nga] LT",
						lastWeek: "dddd [leliphelile] [nga] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "nga %s",
						past: "wenteka nga %s",
						s: "emizuzwana lomcane",
						ss: "%d mzuzwana",
						m: "umzuzu",
						mm: "%d emizuzu",
						h: "lihora",
						hh: "%d emahora",
						d: "lilanga",
						dd: "%d emalanga",
						M: "inyanga",
						MM: "%d tinyanga",
						y: "umnyaka",
						yy: "%d iminyaka"
					},
					meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
					meridiem: function(e, t, n) {
						return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
					},
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
					},
					dayOfMonthOrdinalParse: /\d{1,2}/,
					ordinal: "%d",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sv.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("sv", {
					months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
					monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
					weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
					weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
					weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY [kl.] HH:mm",
						LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
						lll: "D MMM YYYY HH:mm",
						llll: "ddd D MMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Idag] LT",
						nextDay: "[Imorgon] LT",
						lastDay: "[Igår] LT",
						nextWeek: "[På] dddd LT",
						lastWeek: "[I] dddd[s] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "om %s",
						past: "för %s sedan",
						s: "några sekunder",
						ss: "%d sekunder",
						m: "en minut",
						mm: "%d minuter",
						h: "en timme",
						hh: "%d timmar",
						d: "en dag",
						dd: "%d dagar",
						M: "en månad",
						MM: "%d månader",
						y: "ett år",
						yy: "%d år"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/sw.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("sw", {
					months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
					monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
					weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
					weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
					weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[leo saa] LT",
						nextDay: "[kesho saa] LT",
						nextWeek: "[wiki ijayo] dddd [saat] LT",
						lastDay: "[jana] LT",
						lastWeek: "[wiki iliyopita] dddd [saat] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s baadaye",
						past: "tokea %s",
						s: "hivi punde",
						ss: "sekunde %d",
						m: "dakika moja",
						mm: "dakika %d",
						h: "saa limoja",
						hh: "masaa %d",
						d: "siku moja",
						dd: "masiku %d",
						M: "mwezi mmoja",
						MM: "miezi %d",
						y: "mwaka mmoja",
						yy: "miaka %d"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ta.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
						1: "௧",
						2: "௨",
						3: "௩",
						4: "௪",
						5: "௫",
						6: "௬",
						7: "௭",
						8: "௮",
						9: "௯",
						0: "௦"
					},
					n = {
						"௧": "1",
						"௨": "2",
						"௩": "3",
						"௪": "4",
						"௫": "5",
						"௬": "6",
						"௭": "7",
						"௮": "8",
						"௯": "9",
						"௦": "0"
					};
				e.defineLocale("ta", {
					months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
					monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
					weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
					weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
					weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, HH:mm",
						LLLL: "dddd, D MMMM YYYY, HH:mm"
					},
					calendar: {
						sameDay: "[இன்று] LT",
						nextDay: "[நாளை] LT",
						nextWeek: "dddd, LT",
						lastDay: "[நேற்று] LT",
						lastWeek: "[கடந்த வாரம்] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s இல்",
						past: "%s முன்",
						s: "ஒரு சில விநாடிகள்",
						ss: "%d விநாடிகள்",
						m: "ஒரு நிமிடம்",
						mm: "%d நிமிடங்கள்",
						h: "ஒரு மணி நேரம்",
						hh: "%d மணி நேரம்",
						d: "ஒரு நாள்",
						dd: "%d நாட்கள்",
						M: "ஒரு மாதம்",
						MM: "%d மாதங்கள்",
						y: "ஒரு வருடம்",
						yy: "%d ஆண்டுகள்"
					},
					dayOfMonthOrdinalParse: /\d{1,2}வது/,
					ordinal: function(e) {
						return e + "வது"
					},
					preparse: function(e) {
						return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
							return n[e]
						}))
					},
					postformat: function(e) {
						return e.replace(/\d/g, (function(e) {
							return t[e]
						}))
					},
					meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
					meridiem: function(e, t, n) {
						return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
					},
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/te.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("te", {
					months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
					monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
					monthsParseExact: !0,
					weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
					weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
					weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
					longDateFormat: {
						LT: "A h:mm",
						LTS: "A h:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY, A h:mm",
						LLLL: "dddd, D MMMM YYYY, A h:mm"
					},
					calendar: {
						sameDay: "[నేడు] LT",
						nextDay: "[రేపు] LT",
						nextWeek: "dddd, LT",
						lastDay: "[నిన్న] LT",
						lastWeek: "[గత] dddd, LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s లో",
						past: "%s క్రితం",
						s: "కొన్ని క్షణాలు",
						ss: "%d సెకన్లు",
						m: "ఒక నిమిషం",
						mm: "%d నిమిషాలు",
						h: "ఒక గంట",
						hh: "%d గంటలు",
						d: "ఒక రోజు",
						dd: "%d రోజులు",
						M: "ఒక నెల",
						MM: "%d నెలలు",
						y: "ఒక సంవత్సరం",
						yy: "%d సంవత్సరాలు"
					},
					dayOfMonthOrdinalParse: /\d{1,2}వ/,
					ordinal: "%dవ",
					meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
					},
					week: {
						dow: 0,
						doy: 6
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tet.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("tet", {
					months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
					monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
					weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
					weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
					weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Ohin iha] LT",
						nextDay: "[Aban iha] LT",
						nextWeek: "dddd [iha] LT",
						lastDay: "[Horiseik iha] LT",
						lastWeek: "dddd [semana kotuk] [iha] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "iha %s",
						past: "%s liuba",
						s: "minutu balun",
						ss: "minutu %d",
						m: "minutu ida",
						mm: "minutu %d",
						h: "oras ida",
						hh: "oras %d",
						d: "loron ida",
						dd: "loron %d",
						M: "fulan ida",
						MM: "fulan %d",
						y: "tinan ida",
						yy: "tinan %d"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tg.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					0: "-ум",
					1: "-ум",
					2: "-юм",
					3: "-юм",
					4: "-ум",
					5: "-ум",
					6: "-ум",
					7: "-ум",
					8: "-ум",
					9: "-ум",
					10: "-ум",
					12: "-ум",
					13: "-ум",
					20: "-ум",
					30: "-юм",
					40: "-ум",
					50: "-ум",
					60: "-ум",
					70: "-ум",
					80: "-ум",
					90: "-ум",
					100: "-ум"
				};
				e.defineLocale("tg", {
					months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
					monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
					weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
					weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
					weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Имрӯз соати] LT",
						nextDay: "[Пагоҳ соати] LT",
						lastDay: "[Дирӯз соати] LT",
						nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
						lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "баъди %s",
						past: "%s пеш",
						s: "якчанд сония",
						m: "як дақиқа",
						mm: "%d дақиқа",
						h: "як соат",
						hh: "%d соат",
						d: "як рӯз",
						dd: "%d рӯз",
						M: "як моҳ",
						MM: "%d моҳ",
						y: "як сол",
						yy: "%d сол"
					},
					meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
					ordinal: function(e) {
						return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/th.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("th", {
					months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
					monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
					monthsParseExact: !0,
					weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
					weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
					weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "H:mm",
						LTS: "H:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY เวลา H:mm",
						LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
					},
					meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
					isPM: function(e) {
						return "หลังเที่ยง" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
					},
					calendar: {
						sameDay: "[วันนี้ เวลา] LT",
						nextDay: "[พรุ่งนี้ เวลา] LT",
						nextWeek: "dddd[หน้า เวลา] LT",
						lastDay: "[เมื่อวานนี้ เวลา] LT",
						lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "อีก %s",
						past: "%sที่แล้ว",
						s: "ไม่กี่วินาที",
						ss: "%d วินาที",
						m: "1 นาที",
						mm: "%d นาที",
						h: "1 ชั่วโมง",
						hh: "%d ชั่วโมง",
						d: "1 วัน",
						dd: "%d วัน",
						M: "1 เดือน",
						MM: "%d เดือน",
						y: "1 ปี",
						yy: "%d ปี"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tl-ph.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("tl-ph", {
					months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
					monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
					weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
					weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
					weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "MM/D/YYYY",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY HH:mm",
						LLLL: "dddd, MMMM DD, YYYY HH:mm"
					},
					calendar: {
						sameDay: "LT [ngayong araw]",
						nextDay: "[Bukas ng] LT",
						nextWeek: "LT [sa susunod na] dddd",
						lastDay: "LT [kahapon]",
						lastWeek: "LT [noong nakaraang] dddd",
						sameElse: "L"
					},
					relativeTime: {
						future: "sa loob ng %s",
						past: "%s ang nakalipas",
						s: "ilang segundo",
						ss: "%d segundo",
						m: "isang minuto",
						mm: "%d minuto",
						h: "isang oras",
						hh: "%d oras",
						d: "isang araw",
						dd: "%d araw",
						M: "isang buwan",
						MM: "%d buwan",
						y: "isang taon",
						yy: "%d taon"
					},
					dayOfMonthOrdinalParse: /\d{1,2}/,
					ordinal: function(e) {
						return e
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tlh.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

				function n(e, n, a, s) {
					var r = function(e) {
						var n = Math.floor(e % 1e3 / 100),
							a = Math.floor(e % 100 / 10),
							s = e % 10,
							r = "";
						return n > 0 && (r += t[n] + "vatlh"), a > 0 && (r += ("" !== r ? " " : "") + t[a] + "maH"), s > 0 && (r += ("" !== r ? " " : "") + t[s]), "" === r ? "pagh" : r
					}(e);
					switch (a) {
						case "ss":
							return r + " lup";
						case "mm":
							return r + " tup";
						case "hh":
							return r + " rep";
						case "dd":
							return r + " jaj";
						case "MM":
							return r + " jar";
						case "yy":
							return r + " DIS"
					}
				}
				e.defineLocale("tlh", {
					months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
					monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
					monthsParseExact: !0,
					weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
					weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
					weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[DaHjaj] LT",
						nextDay: "[wa’leS] LT",
						nextWeek: "LLL",
						lastDay: "[wa’Hu’] LT",
						lastWeek: "LLL",
						sameElse: "L"
					},
					relativeTime: {
						future: function(e) {
							var t = e;
							return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
						},
						past: function(e) {
							var t = e;
							return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
						},
						s: "puS lup",
						ss: n,
						m: "wa’ tup",
						mm: n,
						h: "wa’ rep",
						hh: n,
						d: "wa’ jaj",
						dd: n,
						M: "wa’ jar",
						MM: n,
						y: "wa’ DIS",
						yy: n
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tr.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = {
					1: "'inci",
					5: "'inci",
					8: "'inci",
					70: "'inci",
					80: "'inci",
					2: "'nci",
					7: "'nci",
					20: "'nci",
					50: "'nci",
					3: "'üncü",
					4: "'üncü",
					100: "'üncü",
					6: "'ncı",
					9: "'uncu",
					10: "'uncu",
					30: "'uncu",
					60: "'ıncı",
					90: "'ıncı"
				};
				e.defineLocale("tr", {
					months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
					monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
					weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
					weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
					weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[bugün saat] LT",
						nextDay: "[yarın saat] LT",
						nextWeek: "[gelecek] dddd [saat] LT",
						lastDay: "[dün] LT",
						lastWeek: "[geçen] dddd [saat] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s sonra",
						past: "%s önce",
						s: "birkaç saniye",
						ss: "%d saniye",
						m: "bir dakika",
						mm: "%d dakika",
						h: "bir saat",
						hh: "%d saat",
						d: "bir gün",
						dd: "%d gün",
						M: "bir ay",
						MM: "%d ay",
						y: "bir yıl",
						yy: "%d yıl"
					},
					ordinal: function(e, n) {
						switch (n) {
							case "d":
							case "D":
							case "Do":
							case "DD":
								return e;
							default:
								if (0 === e) return e + "'ıncı";
								var a = e % 10;
								return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
						}
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tzl.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n, a) {
					var s = {
						s: ["viensas secunds", "'iensas secunds"],
						ss: [e + " secunds", e + " secunds"],
						m: ["'n míut", "'iens míut"],
						mm: [e + " míuts", e + " míuts"],
						h: ["'n þora", "'iensa þora"],
						hh: [e + " þoras", e + " þoras"],
						d: ["'n ziua", "'iensa ziua"],
						dd: [e + " ziuas", e + " ziuas"],
						M: ["'n mes", "'iens mes"],
						MM: [e + " mesen", e + " mesen"],
						y: ["'n ar", "'iens ar"],
						yy: [e + " ars", e + " ars"]
					};
					return a ? s[n][0] : t ? s[n][0] : s[n][1]
				}
				e.defineLocale("tzl", {
					months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
					monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
					weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
					weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
					weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
					longDateFormat: {
						LT: "HH.mm",
						LTS: "HH.mm.ss",
						L: "DD.MM.YYYY",
						LL: "D. MMMM [dallas] YYYY",
						LLL: "D. MMMM [dallas] YYYY HH.mm",
						LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
					},
					meridiemParse: /d\'o|d\'a/i,
					isPM: function(e) {
						return "d'o" === e.toLowerCase()
					},
					meridiem: function(e, t, n) {
						return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
					},
					calendar: {
						sameDay: "[oxhi à] LT",
						nextDay: "[demà à] LT",
						nextWeek: "dddd [à] LT",
						lastDay: "[ieiri à] LT",
						lastWeek: "[sür el] dddd [lasteu à] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "osprei %s",
						past: "ja%s",
						s: t,
						ss: t,
						m: t,
						mm: t,
						h: t,
						hh: t,
						d: t,
						dd: t,
						M: t,
						MM: t,
						y: t,
						yy: t
					},
					dayOfMonthOrdinalParse: /\d{1,2}\./,
					ordinal: "%d.",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tzm-latn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("tzm-latn", {
					months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
					monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
					weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
					weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
					weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[asdkh g] LT",
						nextDay: "[aska g] LT",
						nextWeek: "dddd [g] LT",
						lastDay: "[assant g] LT",
						lastWeek: "dddd [g] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "dadkh s yan %s",
						past: "yan %s",
						s: "imik",
						ss: "%d imik",
						m: "minuḍ",
						mm: "%d minuḍ",
						h: "saɛa",
						hh: "%d tassaɛin",
						d: "ass",
						dd: "%d ossan",
						M: "ayowr",
						MM: "%d iyyirn",
						y: "asgas",
						yy: "%d isgasn"
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/tzm.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("tzm", {
					months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
					monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
					weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
					weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
					weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
						nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
						nextWeek: "dddd [ⴴ] LT",
						lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
						lastWeek: "dddd [ⴴ] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
						past: "ⵢⴰⵏ %s",
						s: "ⵉⵎⵉⴽ",
						ss: "%d ⵉⵎⵉⴽ",
						m: "ⵎⵉⵏⵓⴺ",
						mm: "%d ⵎⵉⵏⵓⴺ",
						h: "ⵙⴰⵄⴰ",
						hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
						d: "ⴰⵙⵙ",
						dd: "%d oⵙⵙⴰⵏ",
						M: "ⴰⵢoⵓⵔ",
						MM: "%d ⵉⵢⵢⵉⵔⵏ",
						y: "ⴰⵙⴳⴰⵙ",
						yy: "%d ⵉⵙⴳⴰⵙⵏ"
					},
					week: {
						dow: 6,
						doy: 12
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ug-cn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("ug-cn", {
					months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
					monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
					weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
					weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
					weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY-MM-DD",
						LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
						LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
						LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
					},
					meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
					},
					meridiem: function(e, t, n) {
						var a = 100 * e + t;
						return a < 600 ? "يېرىم كېچە" : a < 900 ? "سەھەر" : a < 1130 ? "چۈشتىن بۇرۇن" : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ"
					},
					calendar: {
						sameDay: "[بۈگۈن سائەت] LT",
						nextDay: "[ئەتە سائەت] LT",
						nextWeek: "[كېلەركى] dddd [سائەت] LT",
						lastDay: "[تۆنۈگۈن] LT",
						lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s كېيىن",
						past: "%s بۇرۇن",
						s: "نەچچە سېكونت",
						ss: "%d سېكونت",
						m: "بىر مىنۇت",
						mm: "%d مىنۇت",
						h: "بىر سائەت",
						hh: "%d سائەت",
						d: "بىر كۈن",
						dd: "%d كۈن",
						M: "بىر ئاي",
						MM: "%d ئاي",
						y: "بىر يىل",
						yy: "%d يىل"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "-كۈنى";
							case "w":
							case "W":
								return e + "-ھەپتە";
							default:
								return e
						}
					},
					preparse: function(e) {
						return e.replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/,/g, "،")
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/uk.js": function(e, t, n) {
			! function(e) {
				"use strict";

				function t(e, t, n) {
					var a, s;
					return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (a = +e, s = {
						ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
						mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
						hh: t ? "година_години_годин" : "годину_години_годин",
						dd: "день_дні_днів",
						MM: "місяць_місяці_місяців",
						yy: "рік_роки_років"
					} [n].split("_"), a % 10 == 1 && a % 100 != 11 ? s[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? s[1] : s[2])
				}

				function n(e) {
					return function() {
						return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
					}
				}
				e.defineLocale("uk", {
					months: {
						format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
						standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
					},
					monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
					weekdays: function(e, t) {
						var n = {
							nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
							accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
							genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
						};
						return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
					},
					weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
					weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD.MM.YYYY",
						LL: "D MMMM YYYY р.",
						LLL: "D MMMM YYYY р., HH:mm",
						LLLL: "dddd, D MMMM YYYY р., HH:mm"
					},
					calendar: {
						sameDay: n("[Сьогодні "),
						nextDay: n("[Завтра "),
						lastDay: n("[Вчора "),
						nextWeek: n("[У] dddd ["),
						lastWeek: function() {
							switch (this.day()) {
								case 0:
								case 3:
								case 5:
								case 6:
									return n("[Минулої] dddd [").call(this);
								case 1:
								case 2:
								case 4:
									return n("[Минулого] dddd [").call(this)
							}
						},
						sameElse: "L"
					},
					relativeTime: {
						future: "за %s",
						past: "%s тому",
						s: "декілька секунд",
						ss: t,
						m: t,
						mm: t,
						h: "годину",
						hh: t,
						d: "день",
						dd: t,
						M: "місяць",
						MM: t,
						y: "рік",
						yy: t
					},
					meridiemParse: /ночі|ранку|дня|вечора/,
					isPM: function(e) {
						return /^(дня|вечора)$/.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
					},
					dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
					ordinal: function(e, t) {
						switch (t) {
							case "M":
							case "d":
							case "DDD":
							case "w":
							case "W":
								return e + "-й";
							case "D":
								return e + "-го";
							default:
								return e
						}
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/ur.js": function(e, t, n) {
			! function(e) {
				"use strict";
				var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
					n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
				e.defineLocale("ur", {
					months: t,
					monthsShort: t,
					weekdays: n,
					weekdaysShort: n,
					weekdaysMin: n,
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd، D MMMM YYYY HH:mm"
					},
					meridiemParse: /صبح|شام/,
					isPM: function(e) {
						return "شام" === e
					},
					meridiem: function(e, t, n) {
						return e < 12 ? "صبح" : "شام"
					},
					calendar: {
						sameDay: "[آج بوقت] LT",
						nextDay: "[کل بوقت] LT",
						nextWeek: "dddd [بوقت] LT",
						lastDay: "[گذشتہ روز بوقت] LT",
						lastWeek: "[گذشتہ] dddd [بوقت] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s بعد",
						past: "%s قبل",
						s: "چند سیکنڈ",
						ss: "%d سیکنڈ",
						m: "ایک منٹ",
						mm: "%d منٹ",
						h: "ایک گھنٹہ",
						hh: "%d گھنٹے",
						d: "ایک دن",
						dd: "%d دن",
						M: "ایک ماہ",
						MM: "%d ماہ",
						y: "ایک سال",
						yy: "%d سال"
					},
					preparse: function(e) {
						return e.replace(/،/g, ",")
					},
					postformat: function(e) {
						return e.replace(/,/g, "،")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/uz-latn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("uz-latn", {
					months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
					monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
					weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
					weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
					weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "D MMMM YYYY, dddd HH:mm"
					},
					calendar: {
						sameDay: "[Bugun soat] LT [da]",
						nextDay: "[Ertaga] LT [da]",
						nextWeek: "dddd [kuni soat] LT [da]",
						lastDay: "[Kecha soat] LT [da]",
						lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
						sameElse: "L"
					},
					relativeTime: {
						future: "Yaqin %s ichida",
						past: "Bir necha %s oldin",
						s: "soniya",
						ss: "%d soniya",
						m: "bir daqiqa",
						mm: "%d daqiqa",
						h: "bir soat",
						hh: "%d soat",
						d: "bir kun",
						dd: "%d kun",
						M: "bir oy",
						MM: "%d oy",
						y: "bir yil",
						yy: "%d yil"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/uz.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("uz", {
					months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
					monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
					weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
					weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
					weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "D MMMM YYYY, dddd HH:mm"
					},
					calendar: {
						sameDay: "[Бугун соат] LT [да]",
						nextDay: "[Эртага] LT [да]",
						nextWeek: "dddd [куни соат] LT [да]",
						lastDay: "[Кеча соат] LT [да]",
						lastWeek: "[Утган] dddd [куни соат] LT [да]",
						sameElse: "L"
					},
					relativeTime: {
						future: "Якин %s ичида",
						past: "Бир неча %s олдин",
						s: "фурсат",
						ss: "%d фурсат",
						m: "бир дакика",
						mm: "%d дакика",
						h: "бир соат",
						hh: "%d соат",
						d: "бир кун",
						dd: "%d кун",
						M: "бир ой",
						MM: "%d ой",
						y: "бир йил",
						yy: "%d йил"
					},
					week: {
						dow: 1,
						doy: 7
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/vi.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("vi", {
					months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
					monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
					monthsParseExact: !0,
					weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
					weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
					weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
					weekdaysParseExact: !0,
					meridiemParse: /sa|ch/i,
					isPM: function(e) {
						return /^ch$/i.test(e)
					},
					meridiem: function(e, t, n) {
						return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
					},
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "DD/MM/YYYY",
						LL: "D MMMM [năm] YYYY",
						LLL: "D MMMM [năm] YYYY HH:mm",
						LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
						l: "DD/M/YYYY",
						ll: "D MMM YYYY",
						lll: "D MMM YYYY HH:mm",
						llll: "ddd, D MMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[Hôm nay lúc] LT",
						nextDay: "[Ngày mai lúc] LT",
						nextWeek: "dddd [tuần tới lúc] LT",
						lastDay: "[Hôm qua lúc] LT",
						lastWeek: "dddd [tuần rồi lúc] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "%s tới",
						past: "%s trước",
						s: "vài giây",
						ss: "%d giây",
						m: "một phút",
						mm: "%d phút",
						h: "một giờ",
						hh: "%d giờ",
						d: "một ngày",
						dd: "%d ngày",
						M: "một tháng",
						MM: "%d tháng",
						y: "một năm",
						yy: "%d năm"
					},
					dayOfMonthOrdinalParse: /\d{1,2}/,
					ordinal: function(e) {
						return e
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/x-pseudo.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("x-pseudo", {
					months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
					monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
					monthsParseExact: !0,
					weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
					weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
					weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
					weekdaysParseExact: !0,
					longDateFormat: {
						LT: "HH:mm",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY HH:mm",
						LLLL: "dddd, D MMMM YYYY HH:mm"
					},
					calendar: {
						sameDay: "[T~ódá~ý át] LT",
						nextDay: "[T~ómó~rró~w át] LT",
						nextWeek: "dddd [át] LT",
						lastDay: "[Ý~ést~érdá~ý át] LT",
						lastWeek: "[L~ást] dddd [át] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "í~ñ %s",
						past: "%s á~gó",
						s: "á ~féw ~sécó~ñds",
						ss: "%d s~écóñ~ds",
						m: "á ~míñ~úté",
						mm: "%d m~íñú~tés",
						h: "á~ñ hó~úr",
						hh: "%d h~óúrs",
						d: "á ~dáý",
						dd: "%d d~áýs",
						M: "á ~móñ~th",
						MM: "%d m~óñt~hs",
						y: "á ~ýéár",
						yy: "%d ý~éárs"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
					ordinal: function(e) {
						var t = e % 10;
						return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/yo.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("yo", {
					months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
					monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
					weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
					weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
					weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
					longDateFormat: {
						LT: "h:mm A",
						LTS: "h:mm:ss A",
						L: "DD/MM/YYYY",
						LL: "D MMMM YYYY",
						LLL: "D MMMM YYYY h:mm A",
						LLLL: "dddd, D MMMM YYYY h:mm A"
					},
					calendar: {
						sameDay: "[Ònì ni] LT",
						nextDay: "[Ọ̀la ni] LT",
						nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
						lastDay: "[Àna ni] LT",
						lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
						sameElse: "L"
					},
					relativeTime: {
						future: "ní %s",
						past: "%s kọjá",
						s: "ìsẹjú aayá die",
						ss: "aayá %d",
						m: "ìsẹjú kan",
						mm: "ìsẹjú %d",
						h: "wákati kan",
						hh: "wákati %d",
						d: "ọjọ́ kan",
						dd: "ọjọ́ %d",
						M: "osù kan",
						MM: "osù %d",
						y: "ọdún kan",
						yy: "ọdún %d"
					},
					dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
					ordinal: "ọjọ́ %d",
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/zh-cn.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("zh-cn", {
					months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
					monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
					weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
					weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
					weekdaysMin: "日_一_二_三_四_五_六".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYY年M月D日",
						LLL: "YYYY年M月D日Ah点mm分",
						LLLL: "YYYY年M月D日ddddAh点mm分",
						l: "YYYY/M/D",
						ll: "YYYY年M月D日",
						lll: "YYYY年M月D日 HH:mm",
						llll: "YYYY年M月D日dddd HH:mm"
					},
					meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
					},
					meridiem: function(e, t, n) {
						var a = 100 * e + t;
						return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
					},
					calendar: {
						sameDay: "[今天]LT",
						nextDay: "[明天]LT",
						nextWeek: "[下]ddddLT",
						lastDay: "[昨天]LT",
						lastWeek: "[上]ddddLT",
						sameElse: "L"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "日";
							case "M":
								return e + "月";
							case "w":
							case "W":
								return e + "周";
							default:
								return e
						}
					},
					relativeTime: {
						future: "%s内",
						past: "%s前",
						s: "几秒",
						ss: "%d 秒",
						m: "1 分钟",
						mm: "%d 分钟",
						h: "1 小时",
						hh: "%d 小时",
						d: "1 天",
						dd: "%d 天",
						M: "1 个月",
						MM: "%d 个月",
						y: "1 年",
						yy: "%d 年"
					},
					week: {
						dow: 1,
						doy: 4
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/zh-hk.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("zh-hk", {
					months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
					monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
					weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
					weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
					weekdaysMin: "日_一_二_三_四_五_六".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYY年M月D日",
						LLL: "YYYY年M月D日 HH:mm",
						LLLL: "YYYY年M月D日dddd HH:mm",
						l: "YYYY/M/D",
						ll: "YYYY年M月D日",
						lll: "YYYY年M月D日 HH:mm",
						llll: "YYYY年M月D日dddd HH:mm"
					},
					meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						var a = 100 * e + t;
						return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
					},
					calendar: {
						sameDay: "[今天]LT",
						nextDay: "[明天]LT",
						nextWeek: "[下]ddddLT",
						lastDay: "[昨天]LT",
						lastWeek: "[上]ddddLT",
						sameElse: "L"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "日";
							case "M":
								return e + "月";
							case "w":
							case "W":
								return e + "週";
							default:
								return e
						}
					},
					relativeTime: {
						future: "%s內",
						past: "%s前",
						s: "幾秒",
						ss: "%d 秒",
						m: "1 分鐘",
						mm: "%d 分鐘",
						h: "1 小時",
						hh: "%d 小時",
						d: "1 天",
						dd: "%d 天",
						M: "1 個月",
						MM: "%d 個月",
						y: "1 年",
						yy: "%d 年"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/locale/zh-tw.js": function(e, t, n) {
			! function(e) {
				"use strict";
				e.defineLocale("zh-tw", {
					months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
					monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
					weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
					weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
					weekdaysMin: "日_一_二_三_四_五_六".split("_"),
					longDateFormat: {
						LT: "HH:mm",
						LTS: "HH:mm:ss",
						L: "YYYY/MM/DD",
						LL: "YYYY年M月D日",
						LLL: "YYYY年M月D日 HH:mm",
						LLLL: "YYYY年M月D日dddd HH:mm",
						l: "YYYY/M/D",
						ll: "YYYY年M月D日",
						lll: "YYYY年M月D日 HH:mm",
						llll: "YYYY年M月D日dddd HH:mm"
					},
					meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
					meridiemHour: function(e, t) {
						return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
					},
					meridiem: function(e, t, n) {
						var a = 100 * e + t;
						return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
					},
					calendar: {
						sameDay: "[今天] LT",
						nextDay: "[明天] LT",
						nextWeek: "[下]dddd LT",
						lastDay: "[昨天] LT",
						lastWeek: "[上]dddd LT",
						sameElse: "L"
					},
					dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
					ordinal: function(e, t) {
						switch (t) {
							case "d":
							case "D":
							case "DDD":
								return e + "日";
							case "M":
								return e + "月";
							case "w":
							case "W":
								return e + "週";
							default:
								return e
						}
					},
					relativeTime: {
						future: "%s內",
						past: "%s前",
						s: "幾秒",
						ss: "%d 秒",
						m: "1 分鐘",
						mm: "%d 分鐘",
						h: "1 小時",
						hh: "%d 小時",
						d: "1 天",
						dd: "%d 天",
						M: "1 個月",
						MM: "%d 個月",
						y: "1 年",
						yy: "%d 年"
					}
				})
			}(n("./node_modules/chart.js/node_modules/moment/moment.js"))
		},
		"./node_modules/chart.js/node_modules/moment/moment.js": function(e, t, n) {
			(function(e) {
				e.exports = function() {
					"use strict";
					var t, a;

					function s() {
						return t.apply(null, arguments)
					}

					function r(e) {
						return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
					}

					function i(e) {
						return null != e && "[object Object]" === Object.prototype.toString.call(e)
					}

					function o(e) {
						return void 0 === e
					}

					function d(e) {
						return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
					}

					function l(e) {
						return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
					}

					function u(e, t) {
						var n, a = [];
						for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
						return a
					}

					function m(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}

					function _(e, t) {
						for (var n in t) m(t, n) && (e[n] = t[n]);
						return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e
					}

					function h(e, t, n, a) {
						return Ot(e, t, n, a, !0).utc()
					}

					function c(e) {
						return null == e._pf && (e._pf = {
							empty: !1,
							unusedTokens: [],
							unusedInput: [],
							overflow: -2,
							charsLeftOver: 0,
							nullInput: !1,
							invalidMonth: null,
							invalidFormat: !1,
							userInvalidated: !1,
							iso: !1,
							parsedDateParts: [],
							meridiem: null,
							rfc2822: !1,
							weekdayMismatch: !1
						}), e._pf
					}

					function f(e) {
						if (null == e._isValid) {
							var t = c(e),
								n = a.call(t.parsedDateParts, (function(e) {
									return null != e
								})),
								s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
							if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
							e._isValid = s
						}
						return e._isValid
					}

					function p(e) {
						var t = h(NaN);
						return null != e ? _(c(t), e) : c(t).userInvalidated = !0, t
					}
					a = Array.prototype.some ? Array.prototype.some : function(e) {
						for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
							if (a in t && e.call(this, t[a], a, t)) return !0;
						return !1
					};
					var M = s.momentProperties = [];

					function y(e, t) {
						var n, a, s;
						if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = c(t)), o(t._locale) || (e._locale = t._locale), M.length > 0)
							for (n = 0; n < M.length; n++) o(s = t[a = M[n]]) || (e[a] = s);
						return e
					}
					var g = !1;

					function L(e) {
						y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, s.updateOffset(this), g = !1)
					}

					function Y(e) {
						return e instanceof L || null != e && null != e._isAMomentObject
					}

					function v(e) {
						return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
					}

					function k(e) {
						var t = +e,
							n = 0;
						return 0 !== t && isFinite(t) && (n = v(t)), n
					}

					function b(e, t, n) {
						var a, s = Math.min(e.length, t.length),
							r = Math.abs(e.length - t.length),
							i = 0;
						for (a = 0; a < s; a++)(n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && i++;
						return i + r
					}

					function D(e) {
						!1 === s.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
					}

					function w(e, t) {
						var n = !0;
						return _((function() {
							if (null != s.deprecationHandler && s.deprecationHandler(null, e), n) {
								for (var a, r = [], i = 0; i < arguments.length; i++) {
									if (a = "", "object" == typeof arguments[i]) {
										for (var o in a += "\n[" + i + "] ", arguments[0]) a += o + ": " + arguments[0][o] + ", ";
										a = a.slice(0, -2)
									} else a = arguments[i];
									r.push(a)
								}
								D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
							}
							return t.apply(this, arguments)
						}), t)
					}
					var T, x = {};

					function S(e, t) {
						null != s.deprecationHandler && s.deprecationHandler(e, t), x[e] || (D(t), x[e] = !0)
					}

					function j(e) {
						return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
					}

					function H(e, t) {
						var n, a = _({}, e);
						for (n in t) m(t, n) && (i(e[n]) && i(t[n]) ? (a[n] = {}, _(a[n], e[n]), _(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
						for (n in e) m(e, n) && !m(t, n) && i(e[n]) && (a[n] = _({}, a[n]));
						return a
					}

					function P(e) {
						null != e && this.set(e)
					}
					s.suppressDeprecationWarnings = !1, s.deprecationHandler = null, T = Object.keys ? Object.keys : function(e) {
						var t, n = [];
						for (t in e) m(e, t) && n.push(t);
						return n
					};
					var O = {};

					function A(e, t) {
						var n = e.toLowerCase();
						O[n] = O[n + "s"] = O[t] = e
					}

					function W(e) {
						return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0
					}

					function F(e) {
						var t, n, a = {};
						for (n in e) m(e, n) && (t = W(n)) && (a[t] = e[n]);
						return a
					}
					var C = {};

					function E(e, t) {
						C[e] = t
					}

					function I(e, t, n) {
						var a = "" + Math.abs(e),
							s = t - a.length;
						return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
					}
					var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
						R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
						N = {},
						V = {};

					function B(e, t, n, a) {
						var s = a;
						"string" == typeof a && (s = function() {
							return this[a]()
						}), e && (V[e] = s), t && (V[t[0]] = function() {
							return I(s.apply(this, arguments), t[1], t[2])
						}), n && (V[n] = function() {
							return this.localeData().ordinal(s.apply(this, arguments), e)
						})
					}

					function J(e, t) {
						return e.isValid() ? (t = U(t, e.localeData()), N[t] = N[t] || function(e) {
							var t, n, a, s = e.match(z);
							for (t = 0, n = s.length; t < n; t++) V[s[t]] ? s[t] = V[s[t]] : s[t] = (a = s[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
							return function(t) {
								var a, r = "";
								for (a = 0; a < n; a++) r += j(s[a]) ? s[a].call(t, e) : s[a];
								return r
							}
						}(t), N[t](e)) : e.localeData().invalidDate()
					}

					function U(e, t) {
						var n = 5;

						function a(e) {
							return t.longDateFormat(e) || e
						}
						for (R.lastIndex = 0; n >= 0 && R.test(e);) e = e.replace(R, a), R.lastIndex = 0, n -= 1;
						return e
					}
					var G = /\d/,
						q = /\d\d/,
						K = /\d{3}/,
						Z = /\d{4}/,
						$ = /[+-]?\d{6}/,
						X = /\d\d?/,
						Q = /\d\d\d\d?/,
						ee = /\d\d\d\d\d\d?/,
						te = /\d{1,3}/,
						ne = /\d{1,4}/,
						ae = /[+-]?\d{1,6}/,
						se = /\d+/,
						re = /[+-]?\d+/,
						ie = /Z|[+-]\d\d:?\d\d/gi,
						oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
						de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
						le = {};

					function ue(e, t, n) {
						le[e] = j(t) ? t : function(e, a) {
							return e && n ? n : t
						}
					}

					function me(e, t) {
						return m(le, e) ? le[e](t._strict, t._locale) : new RegExp(_e(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, a, s) {
							return t || n || a || s
						}))))
					}

					function _e(e) {
						return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
					}
					var he = {};

					function ce(e, t) {
						var n, a = t;
						for ("string" == typeof e && (e = [e]), d(t) && (a = function(e, n) {
								n[t] = k(e)
							}), n = 0; n < e.length; n++) he[e[n]] = a
					}

					function fe(e, t) {
						ce(e, (function(e, n, a, s) {
							a._w = a._w || {}, t(e, a._w, a, s)
						}))
					}

					function pe(e, t, n) {
						null != t && m(he, e) && he[e](t, n._a, n, e)
					}
					var Me = 0,
						ye = 1,
						ge = 2,
						Le = 3,
						Ye = 4,
						ve = 5,
						ke = 6,
						be = 7,
						De = 8;

					function we(e) {
						return Te(e) ? 366 : 365
					}

					function Te(e) {
						return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
					}
					B("Y", 0, 0, (function() {
						var e = this.year();
						return e <= 9999 ? "" + e : "+" + e
					})), B(0, ["YY", 2], 0, (function() {
						return this.year() % 100
					})), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), E("year", 1), ue("Y", re), ue("YY", X, q), ue("YYYY", ne, Z), ue("YYYYY", ae, $), ue("YYYYYY", ae, $), ce(["YYYYY", "YYYYYY"], Me), ce("YYYY", (function(e, t) {
						t[Me] = 2 === e.length ? s.parseTwoDigitYear(e) : k(e)
					})), ce("YY", (function(e, t) {
						t[Me] = s.parseTwoDigitYear(e)
					})), ce("Y", (function(e, t) {
						t[Me] = parseInt(e, 10)
					})), s.parseTwoDigitYear = function(e) {
						return k(e) + (k(e) > 68 ? 1900 : 2e3)
					};
					var xe, Se = je("FullYear", !0);

					function je(e, t) {
						return function(n) {
							return null != n ? (Pe(this, e, n), s.updateOffset(this, t), this) : He(this, e)
						}
					}

					function He(e, t) {
						return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
					}

					function Pe(e, t, n) {
						e.isValid() && !isNaN(n) && ("FullYear" === t && Te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
					}

					function Oe(e, t) {
						if (isNaN(e) || isNaN(t)) return NaN;
						var n, a = (t % (n = 12) + n) % n;
						return e += (t - a) / 12, 1 === a ? Te(e) ? 29 : 28 : 31 - a % 7 % 2
					}
					xe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
						var t;
						for (t = 0; t < this.length; ++t)
							if (this[t] === e) return t;
						return -1
					}, B("M", ["MM", 2], "Mo", (function() {
						return this.month() + 1
					})), B("MMM", 0, 0, (function(e) {
						return this.localeData().monthsShort(this, e)
					})), B("MMMM", 0, 0, (function(e) {
						return this.localeData().months(this, e)
					})), A("month", "M"), E("month", 8), ue("M", X), ue("MM", X, q), ue("MMM", (function(e, t) {
						return t.monthsShortRegex(e)
					})), ue("MMMM", (function(e, t) {
						return t.monthsRegex(e)
					})), ce(["M", "MM"], (function(e, t) {
						t[ye] = k(e) - 1
					})), ce(["MMM", "MMMM"], (function(e, t, n, a) {
						var s = n._locale.monthsParse(e, a, n._strict);
						null != s ? t[ye] = s : c(n).invalidMonth = e
					}));
					var Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
						We = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
						Fe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

					function Ce(e, t, n) {
						var a, s, r, i = e.toLocaleLowerCase();
						if (!this._monthsParse)
							for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) r = h([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
						return n ? "MMM" === t ? -1 !== (s = xe.call(this._shortMonthsParse, i)) ? s : null : -1 !== (s = xe.call(this._longMonthsParse, i)) ? s : null : "MMM" === t ? -1 !== (s = xe.call(this._shortMonthsParse, i)) ? s : -1 !== (s = xe.call(this._longMonthsParse, i)) ? s : null : -1 !== (s = xe.call(this._longMonthsParse, i)) ? s : -1 !== (s = xe.call(this._shortMonthsParse, i)) ? s : null
					}

					function Ee(e, t) {
						var n;
						if (!e.isValid()) return e;
						if ("string" == typeof t)
							if (/^\d+$/.test(t)) t = k(t);
							else if (!d(t = e.localeData().monthsParse(t))) return e;
						return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
					}

					function Ie(e) {
						return null != e ? (Ee(this, e), s.updateOffset(this, !0), this) : He(this, "Month")
					}
					var ze = de,
						Re = de;

					function Ne() {
						function e(e, t) {
							return t.length - e.length
						}
						var t, n, a = [],
							s = [],
							r = [];
						for (t = 0; t < 12; t++) n = h([2e3, t]), a.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
						for (a.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) a[t] = _e(a[t]), s[t] = _e(s[t]);
						for (t = 0; t < 24; t++) r[t] = _e(r[t]);
						this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
					}

					function Ve(e, t, n, a, s, r, i) {
						var o;
						return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, s, r, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, s, r, i), o
					}

					function Be(e) {
						var t;
						if (e < 100 && e >= 0) {
							var n = Array.prototype.slice.call(arguments);
							n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
						} else t = new Date(Date.UTC.apply(null, arguments));
						return t
					}

					function Je(e, t, n) {
						var a = 7 + t - n;
						return -(7 + Be(e, 0, a).getUTCDay() - t) % 7 + a - 1
					}

					function Ue(e, t, n, a, s) {
						var r, i, o = 1 + 7 * (t - 1) + (7 + n - a) % 7 + Je(e, a, s);
						return o <= 0 ? i = we(r = e - 1) + o : o > we(e) ? (r = e + 1, i = o - we(e)) : (r = e, i = o), {
							year: r,
							dayOfYear: i
						}
					}

					function Ge(e, t, n) {
						var a, s, r = Je(e.year(), t, n),
							i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
						return i < 1 ? a = i + qe(s = e.year() - 1, t, n) : i > qe(e.year(), t, n) ? (a = i - qe(e.year(), t, n), s = e.year() + 1) : (s = e.year(), a = i), {
							week: a,
							year: s
						}
					}

					function qe(e, t, n) {
						var a = Je(e, t, n),
							s = Je(e + 1, t, n);
						return (we(e) - a + s) / 7
					}

					function Ke(e, t) {
						return e.slice(t, 7).concat(e.slice(0, t))
					}
					B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), E("week", 5), E("isoWeek", 5), ue("w", X), ue("ww", X, q), ue("W", X), ue("WW", X, q), fe(["w", "ww", "W", "WW"], (function(e, t, n, a) {
						t[a.substr(0, 1)] = k(e)
					})), B("d", 0, "do", "day"), B("dd", 0, 0, (function(e) {
						return this.localeData().weekdaysMin(this, e)
					})), B("ddd", 0, 0, (function(e) {
						return this.localeData().weekdaysShort(this, e)
					})), B("dddd", 0, 0, (function(e) {
						return this.localeData().weekdays(this, e)
					})), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), E("day", 11), E("weekday", 11), E("isoWeekday", 11), ue("d", X), ue("e", X), ue("E", X), ue("dd", (function(e, t) {
						return t.weekdaysMinRegex(e)
					})), ue("ddd", (function(e, t) {
						return t.weekdaysShortRegex(e)
					})), ue("dddd", (function(e, t) {
						return t.weekdaysRegex(e)
					})), fe(["dd", "ddd", "dddd"], (function(e, t, n, a) {
						var s = n._locale.weekdaysParse(e, a, n._strict);
						null != s ? t.d = s : c(n).invalidWeekday = e
					})), fe(["d", "e", "E"], (function(e, t, n, a) {
						t[a] = k(e)
					}));
					var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
						$e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
						Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

					function Qe(e, t, n) {
						var a, s, r, i = e.toLocaleLowerCase();
						if (!this._weekdaysParse)
							for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) r = h([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
						return n ? "dddd" === t ? -1 !== (s = xe.call(this._weekdaysParse, i)) ? s : null : "ddd" === t ? -1 !== (s = xe.call(this._shortWeekdaysParse, i)) ? s : null : -1 !== (s = xe.call(this._minWeekdaysParse, i)) ? s : null : "dddd" === t ? -1 !== (s = xe.call(this._weekdaysParse, i)) ? s : -1 !== (s = xe.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = xe.call(this._minWeekdaysParse, i)) ? s : null : "ddd" === t ? -1 !== (s = xe.call(this._shortWeekdaysParse, i)) ? s : -1 !== (s = xe.call(this._weekdaysParse, i)) ? s : -1 !== (s = xe.call(this._minWeekdaysParse, i)) ? s : null : -1 !== (s = xe.call(this._minWeekdaysParse, i)) ? s : -1 !== (s = xe.call(this._weekdaysParse, i)) ? s : -1 !== (s = xe.call(this._shortWeekdaysParse, i)) ? s : null
					}
					var et = de,
						tt = de,
						nt = de;

					function at() {
						function e(e, t) {
							return t.length - e.length
						}
						var t, n, a, s, r, i = [],
							o = [],
							d = [],
							l = [];
						for (t = 0; t < 7; t++) n = h([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), i.push(a), o.push(s), d.push(r), l.push(a), l.push(s), l.push(r);
						for (i.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = _e(o[t]), d[t] = _e(d[t]), l[t] = _e(l[t]);
						this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
					}

					function st() {
						return this.hours() % 12 || 12
					}

					function rt(e, t) {
						B(e, 0, 0, (function() {
							return this.localeData().meridiem(this.hours(), this.minutes(), t)
						}))
					}

					function it(e, t) {
						return t._meridiemParse
					}
					B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, st), B("k", ["kk", 2], 0, (function() {
						return this.hours() || 24
					})), B("hmm", 0, 0, (function() {
						return "" + st.apply(this) + I(this.minutes(), 2)
					})), B("hmmss", 0, 0, (function() {
						return "" + st.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
					})), B("Hmm", 0, 0, (function() {
						return "" + this.hours() + I(this.minutes(), 2)
					})), B("Hmmss", 0, 0, (function() {
						return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
					})), rt("a", !0), rt("A", !1), A("hour", "h"), E("hour", 13), ue("a", it), ue("A", it), ue("H", X), ue("h", X), ue("k", X), ue("HH", X, q), ue("hh", X, q), ue("kk", X, q), ue("hmm", Q), ue("hmmss", ee), ue("Hmm", Q), ue("Hmmss", ee), ce(["H", "HH"], Le), ce(["k", "kk"], (function(e, t, n) {
						var a = k(e);
						t[Le] = 24 === a ? 0 : a
					})), ce(["a", "A"], (function(e, t, n) {
						n._isPm = n._locale.isPM(e), n._meridiem = e
					})), ce(["h", "hh"], (function(e, t, n) {
						t[Le] = k(e), c(n).bigHour = !0
					})), ce("hmm", (function(e, t, n) {
						var a = e.length - 2;
						t[Le] = k(e.substr(0, a)), t[Ye] = k(e.substr(a)), c(n).bigHour = !0
					})), ce("hmmss", (function(e, t, n) {
						var a = e.length - 4,
							s = e.length - 2;
						t[Le] = k(e.substr(0, a)), t[Ye] = k(e.substr(a, 2)), t[ve] = k(e.substr(s)), c(n).bigHour = !0
					})), ce("Hmm", (function(e, t, n) {
						var a = e.length - 2;
						t[Le] = k(e.substr(0, a)), t[Ye] = k(e.substr(a))
					})), ce("Hmmss", (function(e, t, n) {
						var a = e.length - 4,
							s = e.length - 2;
						t[Le] = k(e.substr(0, a)), t[Ye] = k(e.substr(a, 2)), t[ve] = k(e.substr(s))
					}));
					var ot, dt = je("Hours", !0),
						lt = {
							calendar: {
								sameDay: "[Today at] LT",
								nextDay: "[Tomorrow at] LT",
								nextWeek: "dddd [at] LT",
								lastDay: "[Yesterday at] LT",
								lastWeek: "[Last] dddd [at] LT",
								sameElse: "L"
							},
							longDateFormat: {
								LTS: "h:mm:ss A",
								LT: "h:mm A",
								L: "MM/DD/YYYY",
								LL: "MMMM D, YYYY",
								LLL: "MMMM D, YYYY h:mm A",
								LLLL: "dddd, MMMM D, YYYY h:mm A"
							},
							invalidDate: "Invalid date",
							ordinal: "%d",
							dayOfMonthOrdinalParse: /\d{1,2}/,
							relativeTime: {
								future: "in %s",
								past: "%s ago",
								s: "a few seconds",
								ss: "%d seconds",
								m: "a minute",
								mm: "%d minutes",
								h: "an hour",
								hh: "%d hours",
								d: "a day",
								dd: "%d days",
								M: "a month",
								MM: "%d months",
								y: "a year",
								yy: "%d years"
							},
							months: We,
							monthsShort: Fe,
							week: {
								dow: 0,
								doy: 6
							},
							weekdays: Ze,
							weekdaysMin: Xe,
							weekdaysShort: $e,
							meridiemParse: /[ap]\.?m?\.?/i
						},
						ut = {},
						mt = {};

					function _t(e) {
						return e ? e.toLowerCase().replace("_", "-") : e
					}

					function ht(t) {
						var a = null;
						if (!ut[t] && void 0 !== e && e && e.exports) try {
							a = ot._abbr, n("./node_modules/chart.js/node_modules/moment/locale sync recursive ^\\.\\/.*$")("./" + t), ct(a)
						} catch (s) {}
						return ut[t]
					}

					function ct(e, t) {
						var n;
						return e && ((n = o(t) ? pt(e) : ft(e, t)) ? ot = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ot._abbr
					}

					function ft(e, t) {
						if (null !== t) {
							var n, a = lt;
							if (t.abbr = e, null != ut[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = ut[e]._config;
							else if (null != t.parentLocale)
								if (null != ut[t.parentLocale]) a = ut[t.parentLocale]._config;
								else {
									if (null == (n = ht(t.parentLocale))) return mt[t.parentLocale] || (mt[t.parentLocale] = []), mt[t.parentLocale].push({
										name: e,
										config: t
									}), null;
									a = n._config
								} return ut[e] = new P(H(a, t)), mt[e] && mt[e].forEach((function(e) {
								ft(e.name, e.config)
							})), ct(e), ut[e]
						}
						return delete ut[e], null
					}

					function pt(e) {
						var t;
						if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ot;
						if (!r(e)) {
							if (t = ht(e)) return t;
							e = [e]
						}
						return function(e) {
							for (var t, n, a, s, r = 0; r < e.length;) {
								for (t = (s = _t(e[r]).split("-")).length, n = (n = _t(e[r + 1])) ? n.split("-") : null; t > 0;) {
									if (a = ht(s.slice(0, t).join("-"))) return a;
									if (n && n.length >= t && b(s, n, !0) >= t - 1) break;
									t--
								}
								r++
							}
							return ot
						}(e)
					}

					function Mt(e) {
						var t, n = e._a;
						return n && -2 === c(e).overflow && (t = n[ye] < 0 || n[ye] > 11 ? ye : n[ge] < 1 || n[ge] > Oe(n[Me], n[ye]) ? ge : n[Le] < 0 || n[Le] > 24 || 24 === n[Le] && (0 !== n[Ye] || 0 !== n[ve] || 0 !== n[ke]) ? Le : n[Ye] < 0 || n[Ye] > 59 ? Ye : n[ve] < 0 || n[ve] > 59 ? ve : n[ke] < 0 || n[ke] > 999 ? ke : -1, c(e)._overflowDayOfYear && (t < Me || t > ge) && (t = ge), c(e)._overflowWeeks && -1 === t && (t = be), c(e)._overflowWeekday && -1 === t && (t = De), c(e).overflow = t), e
					}

					function yt(e, t, n) {
						return null != e ? e : null != t ? t : n
					}

					function gt(e) {
						var t, n, a, r, i, o = [];
						if (!e._d) {
							for (a = function(e) {
									var t = new Date(s.now());
									return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
								}(e), e._w && null == e._a[ge] && null == e._a[ye] && function(e) {
									var t, n, a, s, r, i, o, d;
									if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, i = 4, n = yt(t.GG, e._a[Me], Ge(At(), 1, 4).year), a = yt(t.W, 1), ((s = yt(t.E, 1)) < 1 || s > 7) && (d = !0);
									else {
										r = e._locale._week.dow, i = e._locale._week.doy;
										var l = Ge(At(), r, i);
										n = yt(t.gg, e._a[Me], l.year), a = yt(t.w, l.week), null != t.d ? ((s = t.d) < 0 || s > 6) && (d = !0) : null != t.e ? (s = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : s = r
									}
									a < 1 || a > qe(n, r, i) ? c(e)._overflowWeeks = !0 : null != d ? c(e)._overflowWeekday = !0 : (o = Ue(n, a, s, r, i), e._a[Me] = o.year, e._dayOfYear = o.dayOfYear)
								}(e), null != e._dayOfYear && (i = yt(e._a[Me], a[Me]), (e._dayOfYear > we(i) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), n = Be(i, 0, e._dayOfYear), e._a[ye] = n.getUTCMonth(), e._a[ge] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t];
							for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
							24 === e._a[Le] && 0 === e._a[Ye] && 0 === e._a[ve] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Le] = 0), e._d = (e._useUTC ? Be : Ve).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Le] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
						}
					}
					var Lt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						Yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
						vt = /Z|[+-]\d\d(?::?\d\d)?/,
						kt = [
							["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
							["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
							["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
							["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
							["YYYY-DDD", /\d{4}-\d{3}/],
							["YYYY-MM", /\d{4}-\d\d/, !1],
							["YYYYYYMMDD", /[+-]\d{10}/],
							["YYYYMMDD", /\d{8}/],
							["GGGG[W]WWE", /\d{4}W\d{3}/],
							["GGGG[W]WW", /\d{4}W\d{2}/, !1],
							["YYYYDDD", /\d{7}/]
						],
						bt = [
							["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
							["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
							["HH:mm:ss", /\d\d:\d\d:\d\d/],
							["HH:mm", /\d\d:\d\d/],
							["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
							["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
							["HHmmss", /\d\d\d\d\d\d/],
							["HHmm", /\d\d\d\d/],
							["HH", /\d\d/]
						],
						Dt = /^\/?Date\((\-?\d+)/i;

					function wt(e) {
						var t, n, a, s, r, i, o = e._i,
							d = Lt.exec(o) || Yt.exec(o);
						if (d) {
							for (c(e).iso = !0, t = 0, n = kt.length; t < n; t++)
								if (kt[t][1].exec(d[1])) {
									s = kt[t][0], a = !1 !== kt[t][2];
									break
								} if (null == s) return void(e._isValid = !1);
							if (d[3]) {
								for (t = 0, n = bt.length; t < n; t++)
									if (bt[t][1].exec(d[3])) {
										r = (d[2] || " ") + bt[t][0];
										break
									} if (null == r) return void(e._isValid = !1)
							}
							if (!a && null != r) return void(e._isValid = !1);
							if (d[4]) {
								if (!vt.exec(d[4])) return void(e._isValid = !1);
								i = "Z"
							}
							e._f = s + (r || "") + (i || ""), Ht(e)
						} else e._isValid = !1
					}
					var Tt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

					function xt(e) {
						var t = parseInt(e, 10);
						return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
					}
					var St = {
						UT: 0,
						GMT: 0,
						EDT: -240,
						EST: -300,
						CDT: -300,
						CST: -360,
						MDT: -360,
						MST: -420,
						PDT: -420,
						PST: -480
					};

					function jt(e) {
						var t, n, a, s, r, i, o, d = Tt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
						if (d) {
							var l = (t = d[4], n = d[3], a = d[2], s = d[5], r = d[6], i = d[7], o = [xt(t), Fe.indexOf(n), parseInt(a, 10), parseInt(s, 10), parseInt(r, 10)], i && o.push(parseInt(i, 10)), o);
							if (! function(e, t, n) {
									return !e || $e.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (c(n).weekdayMismatch = !0, n._isValid = !1, !1)
								}(d[1], l, e)) return;
							e._a = l, e._tzm = function(e, t, n) {
								if (e) return St[e];
								if (t) return 0;
								var a = parseInt(n, 10),
									s = a % 100;
								return (a - s) / 100 * 60 + s
							}(d[8], d[9], d[10]), e._d = Be.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0
						} else e._isValid = !1
					}

					function Ht(e) {
						if (e._f !== s.ISO_8601)
							if (e._f !== s.RFC_2822) {
								e._a = [], c(e).empty = !0;
								var t, n, a, r, i, o = "" + e._i,
									d = o.length,
									l = 0;
								for (a = U(e._f, e._locale).match(z) || [], t = 0; t < a.length; t++) r = a[t], (n = (o.match(me(r, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && c(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), l += n.length), V[r] ? (n ? c(e).empty = !1 : c(e).unusedTokens.push(r), pe(r, n, e)) : e._strict && !n && c(e).unusedTokens.push(r);
								c(e).charsLeftOver = d - l, o.length > 0 && c(e).unusedInput.push(o), e._a[Le] <= 12 && !0 === c(e).bigHour && e._a[Le] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[Le] = function(e, t, n) {
									var a;
									return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((a = e.isPM(n)) && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
								}(e._locale, e._a[Le], e._meridiem), gt(e), Mt(e)
							} else jt(e);
						else wt(e)
					}

					function Pt(e) {
						var t = e._i,
							n = e._f;
						return e._locale = e._locale || pt(e._l), null === t || void 0 === n && "" === t ? p({
							nullInput: !0
						}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), Y(t) ? new L(Mt(t)) : (l(t) ? e._d = t : r(n) ? function(e) {
							var t, n, a, s, r;
							if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
							for (s = 0; s < e._f.length; s++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], Ht(t), f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == a || r < a) && (a = r, n = t));
							_(e, n || t)
						}(e) : n ? Ht(e) : function(e) {
							var t = e._i;
							o(t) ? e._d = new Date(s.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
								var t = Dt.exec(e._i);
								null === t ? (wt(e), !1 === e._isValid && (delete e._isValid, jt(e), !1 === e._isValid && (delete e._isValid, s.createFromInputFallback(e)))) : e._d = new Date(+t[1])
							}(e) : r(t) ? (e._a = u(t.slice(0), (function(e) {
								return parseInt(e, 10)
							})), gt(e)) : i(t) ? function(e) {
								if (!e._d) {
									var t = F(e._i);
									e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
										return e && parseInt(e, 10)
									})), gt(e)
								}
							}(e) : d(t) ? e._d = new Date(t) : s.createFromInputFallback(e)
						}(e), f(e) || (e._d = null), e))
					}

					function Ot(e, t, n, a, s) {
						var o, d = {};
						return !0 !== n && !1 !== n || (a = n, n = void 0), (i(e) && function(e) {
							if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
							var t;
							for (t in e)
								if (e.hasOwnProperty(t)) return !1;
							return !0
						}(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = s, d._l = n, d._i = e, d._f = t, d._strict = a, (o = new L(Mt(Pt(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
					}

					function At(e, t, n, a) {
						return Ot(e, t, n, a, !1)
					}
					s.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
						e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
					})), s.ISO_8601 = function() {}, s.RFC_2822 = function() {};
					var Wt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
							var e = At.apply(null, arguments);
							return this.isValid() && e.isValid() ? e < this ? this : e : p()
						})),
						Ft = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
							var e = At.apply(null, arguments);
							return this.isValid() && e.isValid() ? e > this ? this : e : p()
						}));

					function Ct(e, t) {
						var n, a;
						if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return At();
						for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
						return n
					}
					var Et = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

					function It(e) {
						var t = F(e),
							n = t.year || 0,
							a = t.quarter || 0,
							s = t.month || 0,
							r = t.week || t.isoWeek || 0,
							i = t.day || 0,
							o = t.hour || 0,
							d = t.minute || 0,
							l = t.second || 0,
							u = t.millisecond || 0;
						this._isValid = function(e) {
							for (var t in e)
								if (-1 === xe.call(Et, t) || null != e[t] && isNaN(e[t])) return !1;
							for (var n = !1, a = 0; a < Et.length; ++a)
								if (e[Et[a]]) {
									if (n) return !1;
									parseFloat(e[Et[a]]) !== k(e[Et[a]]) && (n = !0)
								} return !0
						}(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * r, this._months = +s + 3 * a + 12 * n, this._data = {}, this._locale = pt(), this._bubble()
					}

					function zt(e) {
						return e instanceof It
					}

					function Rt(e) {
						return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
					}

					function Nt(e, t) {
						B(e, 0, 0, (function() {
							var e = this.utcOffset(),
								n = "+";
							return e < 0 && (e = -e, n = "-"), n + I(~~(e / 60), 2) + t + I(~~e % 60, 2)
						}))
					}
					Nt("Z", ":"), Nt("ZZ", ""), ue("Z", oe), ue("ZZ", oe), ce(["Z", "ZZ"], (function(e, t, n) {
						n._useUTC = !0, n._tzm = Bt(oe, e)
					}));
					var Vt = /([\+\-]|\d\d)/gi;

					function Bt(e, t) {
						var n = (t || "").match(e);
						if (null === n) return null;
						var a = ((n[n.length - 1] || []) + "").match(Vt) || ["-", 0, 0],
							s = 60 * a[1] + k(a[2]);
						return 0 === s ? 0 : "+" === a[0] ? s : -s
					}

					function Jt(e, t) {
						var n, a;
						return t._isUTC ? (n = t.clone(), a = (Y(e) || l(e) ? e.valueOf() : At(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), s.updateOffset(n, !1), n) : At(e).local()
					}

					function Ut(e) {
						return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
					}

					function Gt() {
						return !!this.isValid() && this._isUTC && 0 === this._offset
					}
					s.updateOffset = function() {};
					var qt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
						Kt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

					function Zt(e, t) {
						var n, a, s, r, i, o, l = e,
							u = null;
						return zt(e) ? l = {
							ms: e._milliseconds,
							d: e._days,
							M: e._months
						} : d(e) ? (l = {}, t ? l[t] = e : l.milliseconds = e) : (u = qt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, l = {
							y: 0,
							d: k(u[ge]) * n,
							h: k(u[Le]) * n,
							m: k(u[Ye]) * n,
							s: k(u[ve]) * n,
							ms: k(Rt(1e3 * u[ke])) * n
						}) : (u = Kt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, l = {
							y: $t(u[2], n),
							M: $t(u[3], n),
							w: $t(u[4], n),
							d: $t(u[5], n),
							h: $t(u[6], n),
							m: $t(u[7], n),
							s: $t(u[8], n)
						}) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (r = At(l.from), i = At(l.to), s = r.isValid() && i.isValid() ? (i = Jt(i, r), r.isBefore(i) ? o = Xt(r, i) : ((o = Xt(i, r)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
							milliseconds: 0,
							months: 0
						}, (l = {}).ms = s.milliseconds, l.M = s.months), a = new It(l), zt(e) && m(e, "_locale") && (a._locale = e._locale), a
					}

					function $t(e, t) {
						var n = e && parseFloat(e.replace(",", "."));
						return (isNaN(n) ? 0 : n) * t
					}

					function Xt(e, t) {
						var n = {};
						return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
					}

					function Qt(e, t) {
						return function(n, a) {
							var s;
							return null === a || isNaN(+a) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = a, a = s), en(this, Zt(n = "string" == typeof n ? +n : n, a), e), this
						}
					}

					function en(e, t, n, a) {
						var r = t._milliseconds,
							i = Rt(t._days),
							o = Rt(t._months);
						e.isValid() && (a = null == a || a, o && Ee(e, He(e, "Month") + o * n), i && Pe(e, "Date", He(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), a && s.updateOffset(e, i || o))
					}
					Zt.fn = It.prototype, Zt.invalid = function() {
						return Zt(NaN)
					};
					var tn = Qt(1, "add"),
						nn = Qt(-1, "subtract");

					function an(e, t) {
						var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
							a = e.clone().add(n, "months");
						return -(n + (t - a < 0 ? (t - a) / (a - e.clone().add(n - 1, "months")) : (t - a) / (e.clone().add(n + 1, "months") - a))) || 0
					}

					function sn(e) {
						var t;
						return void 0 === e ? this._locale._abbr : (null != (t = pt(e)) && (this._locale = t), this)
					}
					s.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", s.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
					var rn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
						return void 0 === e ? this.localeData() : this.locale(e)
					}));

					function on() {
						return this._locale
					}
					var dn = 1e3,
						ln = 60 * dn,
						un = 60 * ln,
						mn = 3506328 * un;

					function _n(e, t) {
						return (e % t + t) % t
					}

					function hn(e, t, n) {
						return e < 100 && e >= 0 ? new Date(e + 400, t, n) - mn : new Date(e, t, n).valueOf()
					}

					function cn(e, t, n) {
						return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - mn : Date.UTC(e, t, n)
					}

					function fn(e, t) {
						B(0, [e, e.length], 0, t)
					}

					function pn(e, t, n, a, s) {
						var r;
						return null == e ? Ge(this, a, s).year : (t > (r = qe(e, a, s)) && (t = r), Mn.call(this, e, t, n, a, s))
					}

					function Mn(e, t, n, a, s) {
						var r = Ue(e, t, n, a, s),
							i = Be(r.year, 0, r.dayOfYear);
						return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
					}
					B(0, ["gg", 2], 0, (function() {
						return this.weekYear() % 100
					})), B(0, ["GG", 2], 0, (function() {
						return this.isoWeekYear() % 100
					})), fn("gggg", "weekYear"), fn("ggggg", "weekYear"), fn("GGGG", "isoWeekYear"), fn("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), E("weekYear", 1), E("isoWeekYear", 1), ue("G", re), ue("g", re), ue("GG", X, q), ue("gg", X, q), ue("GGGG", ne, Z), ue("gggg", ne, Z), ue("GGGGG", ae, $), ue("ggggg", ae, $), fe(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, a) {
						t[a.substr(0, 2)] = k(e)
					})), fe(["gg", "GG"], (function(e, t, n, a) {
						t[a] = s.parseTwoDigitYear(e)
					})), B("Q", 0, "Qo", "quarter"), A("quarter", "Q"), E("quarter", 7), ue("Q", G), ce("Q", (function(e, t) {
						t[ye] = 3 * (k(e) - 1)
					})), B("D", ["DD", 2], "Do", "date"), A("date", "D"), E("date", 9), ue("D", X), ue("DD", X, q), ue("Do", (function(e, t) {
						return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
					})), ce(["D", "DD"], ge), ce("Do", (function(e, t) {
						t[ge] = k(e.match(X)[0])
					}));
					var yn = je("Date", !0);
					B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), E("dayOfYear", 4), ue("DDD", te), ue("DDDD", K), ce(["DDD", "DDDD"], (function(e, t, n) {
						n._dayOfYear = k(e)
					})), B("m", ["mm", 2], 0, "minute"), A("minute", "m"), E("minute", 14), ue("m", X), ue("mm", X, q), ce(["m", "mm"], Ye);
					var gn = je("Minutes", !1);
					B("s", ["ss", 2], 0, "second"), A("second", "s"), E("second", 15), ue("s", X), ue("ss", X, q), ce(["s", "ss"], ve);
					var Ln, Yn = je("Seconds", !1);
					for (B("S", 0, 0, (function() {
							return ~~(this.millisecond() / 100)
						})), B(0, ["SS", 2], 0, (function() {
							return ~~(this.millisecond() / 10)
						})), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, (function() {
							return 10 * this.millisecond()
						})), B(0, ["SSSSS", 5], 0, (function() {
							return 100 * this.millisecond()
						})), B(0, ["SSSSSS", 6], 0, (function() {
							return 1e3 * this.millisecond()
						})), B(0, ["SSSSSSS", 7], 0, (function() {
							return 1e4 * this.millisecond()
						})), B(0, ["SSSSSSSS", 8], 0, (function() {
							return 1e5 * this.millisecond()
						})), B(0, ["SSSSSSSSS", 9], 0, (function() {
							return 1e6 * this.millisecond()
						})), A("millisecond", "ms"), E("millisecond", 16), ue("S", te, G), ue("SS", te, q), ue("SSS", te, K), Ln = "SSSS"; Ln.length <= 9; Ln += "S") ue(Ln, se);

					function vn(e, t) {
						t[ke] = k(1e3 * ("0." + e))
					}
					for (Ln = "S"; Ln.length <= 9; Ln += "S") ce(Ln, vn);
					var kn = je("Milliseconds", !1);
					B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
					var bn = L.prototype;

					function Dn(e) {
						return e
					}
					bn.add = tn, bn.calendar = function(e, t) {
						var n = e || At(),
							a = Jt(n, this).startOf("day"),
							r = s.calendarFormat(this, a) || "sameElse",
							i = t && (j(t[r]) ? t[r].call(this, n) : t[r]);
						return this.format(i || this.localeData().calendar(r, this, At(n)))
					}, bn.clone = function() {
						return new L(this)
					}, bn.diff = function(e, t, n) {
						var a, s, r;
						if (!this.isValid()) return NaN;
						if (!(a = Jt(e, this)).isValid()) return NaN;
						switch (s = 6e4 * (a.utcOffset() - this.utcOffset()), t = W(t)) {
							case "year":
								r = an(this, a) / 12;
								break;
							case "month":
								r = an(this, a);
								break;
							case "quarter":
								r = an(this, a) / 3;
								break;
							case "second":
								r = (this - a) / 1e3;
								break;
							case "minute":
								r = (this - a) / 6e4;
								break;
							case "hour":
								r = (this - a) / 36e5;
								break;
							case "day":
								r = (this - a - s) / 864e5;
								break;
							case "week":
								r = (this - a - s) / 6048e5;
								break;
							default:
								r = this - a
						}
						return n ? r : v(r)
					}, bn.endOf = function(e) {
						var t;
						if (void 0 === (e = W(e)) || "millisecond" === e || !this.isValid()) return this;
						var n = this._isUTC ? cn : hn;
						switch (e) {
							case "year":
								t = n(this.year() + 1, 0, 1) - 1;
								break;
							case "quarter":
								t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
								break;
							case "month":
								t = n(this.year(), this.month() + 1, 1) - 1;
								break;
							case "week":
								t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
								break;
							case "isoWeek":
								t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
								break;
							case "day":
							case "date":
								t = n(this.year(), this.month(), this.date() + 1) - 1;
								break;
							case "hour":
								t = this._d.valueOf(), t += un - _n(t + (this._isUTC ? 0 : this.utcOffset() * ln), un) - 1;
								break;
							case "minute":
								t = this._d.valueOf(), t += ln - _n(t, ln) - 1;
								break;
							case "second":
								t = this._d.valueOf(), t += dn - _n(t, dn) - 1
						}
						return this._d.setTime(t), s.updateOffset(this, !0), this
					}, bn.format = function(e) {
						e || (e = this.isUtc() ? s.defaultFormatUtc : s.defaultFormat);
						var t = J(this, e);
						return this.localeData().postformat(t)
					}, bn.from = function(e, t) {
						return this.isValid() && (Y(e) && e.isValid() || At(e).isValid()) ? Zt({
							to: this,
							from: e
						}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
					}, bn.fromNow = function(e) {
						return this.from(At(), e)
					}, bn.to = function(e, t) {
						return this.isValid() && (Y(e) && e.isValid() || At(e).isValid()) ? Zt({
							from: this,
							to: e
						}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
					}, bn.toNow = function(e) {
						return this.to(At(), e)
					}, bn.get = function(e) {
						return j(this[e = W(e)]) ? this[e]() : this
					}, bn.invalidAt = function() {
						return c(this).overflow
					}, bn.isAfter = function(e, t) {
						var n = Y(e) ? e : At(e);
						return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
					}, bn.isBefore = function(e, t) {
						var n = Y(e) ? e : At(e);
						return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
					}, bn.isBetween = function(e, t, n, a) {
						var s = Y(e) ? e : At(e),
							r = Y(t) ? t : At(t);
						return !!(this.isValid() && s.isValid() && r.isValid()) && ("(" === (a = a || "()")[0] ? this.isAfter(s, n) : !this.isBefore(s, n)) && (")" === a[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
					}, bn.isSame = function(e, t) {
						var n, a = Y(e) ? e : At(e);
						return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
					}, bn.isSameOrAfter = function(e, t) {
						return this.isSame(e, t) || this.isAfter(e, t)
					}, bn.isSameOrBefore = function(e, t) {
						return this.isSame(e, t) || this.isBefore(e, t)
					}, bn.isValid = function() {
						return f(this)
					}, bn.lang = rn, bn.locale = sn, bn.localeData = on, bn.max = Ft, bn.min = Wt, bn.parsingFlags = function() {
						return _({}, c(this))
					}, bn.set = function(e, t) {
						if ("object" == typeof e)
							for (var n = function(e) {
									var t = [];
									for (var n in e) t.push({
										unit: n,
										priority: C[n]
									});
									return t.sort((function(e, t) {
										return e.priority - t.priority
									})), t
								}(e = F(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]);
						else if (j(this[e = W(e)])) return this[e](t);
						return this
					}, bn.startOf = function(e) {
						var t;
						if (void 0 === (e = W(e)) || "millisecond" === e || !this.isValid()) return this;
						var n = this._isUTC ? cn : hn;
						switch (e) {
							case "year":
								t = n(this.year(), 0, 1);
								break;
							case "quarter":
								t = n(this.year(), this.month() - this.month() % 3, 1);
								break;
							case "month":
								t = n(this.year(), this.month(), 1);
								break;
							case "week":
								t = n(this.year(), this.month(), this.date() - this.weekday());
								break;
							case "isoWeek":
								t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
								break;
							case "day":
							case "date":
								t = n(this.year(), this.month(), this.date());
								break;
							case "hour":
								t = this._d.valueOf(), t -= _n(t + (this._isUTC ? 0 : this.utcOffset() * ln), un);
								break;
							case "minute":
								t = this._d.valueOf(), t -= _n(t, ln);
								break;
							case "second":
								t = this._d.valueOf(), t -= _n(t, dn)
						}
						return this._d.setTime(t), s.updateOffset(this, !0), this
					}, bn.subtract = nn, bn.toArray = function() {
						var e = this;
						return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
					}, bn.toObject = function() {
						var e = this;
						return {
							years: e.year(),
							months: e.month(),
							date: e.date(),
							hours: e.hours(),
							minutes: e.minutes(),
							seconds: e.seconds(),
							milliseconds: e.milliseconds()
						}
					}, bn.toDate = function() {
						return new Date(this.valueOf())
					}, bn.toISOString = function(e) {
						if (!this.isValid()) return null;
						var t = !0 !== e,
							n = t ? this.clone().utc() : this;
						return n.year() < 0 || n.year() > 9999 ? J(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : j(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", J(n, "Z")) : J(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
					}, bn.inspect = function() {
						if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
						var e = "moment",
							t = "";
						this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
						var n = "[" + e + '("]',
							a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
							s = t + '[")]';
						return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + s)
					}, bn.toJSON = function() {
						return this.isValid() ? this.toISOString() : null
					}, bn.toString = function() {
						return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
					}, bn.unix = function() {
						return Math.floor(this.valueOf() / 1e3)
					}, bn.valueOf = function() {
						return this._d.valueOf() - 6e4 * (this._offset || 0)
					}, bn.creationData = function() {
						return {
							input: this._i,
							format: this._f,
							locale: this._locale,
							isUTC: this._isUTC,
							strict: this._strict
						}
					}, bn.year = Se, bn.isLeapYear = function() {
						return Te(this.year())
					}, bn.weekYear = function(e) {
						return pn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
					}, bn.isoWeekYear = function(e) {
						return pn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
					}, bn.quarter = bn.quarters = function(e) {
						return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
					}, bn.month = Ie, bn.daysInMonth = function() {
						return Oe(this.year(), this.month())
					}, bn.week = bn.weeks = function(e) {
						var t = this.localeData().week(this);
						return null == e ? t : this.add(7 * (e - t), "d")
					}, bn.isoWeek = bn.isoWeeks = function(e) {
						var t = Ge(this, 1, 4).week;
						return null == e ? t : this.add(7 * (e - t), "d")
					}, bn.weeksInYear = function() {
						var e = this.localeData()._week;
						return qe(this.year(), e.dow, e.doy)
					}, bn.isoWeeksInYear = function() {
						return qe(this.year(), 1, 4)
					}, bn.date = yn, bn.day = bn.days = function(e) {
						if (!this.isValid()) return null != e ? this : NaN;
						var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
						return null != e ? (e = function(e, t) {
							return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
						}(e, this.localeData()), this.add(e - t, "d")) : t
					}, bn.weekday = function(e) {
						if (!this.isValid()) return null != e ? this : NaN;
						var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
						return null == e ? t : this.add(e - t, "d")
					}, bn.isoWeekday = function(e) {
						if (!this.isValid()) return null != e ? this : NaN;
						if (null != e) {
							var t = function(e, t) {
								return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
							}(e, this.localeData());
							return this.day(this.day() % 7 ? t : t - 7)
						}
						return this.day() || 7
					}, bn.dayOfYear = function(e) {
						var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
						return null == e ? t : this.add(e - t, "d")
					}, bn.hour = bn.hours = dt, bn.minute = bn.minutes = gn, bn.second = bn.seconds = Yn, bn.millisecond = bn.milliseconds = kn, bn.utcOffset = function(e, t, n) {
						var a, r = this._offset || 0;
						if (!this.isValid()) return null != e ? this : NaN;
						if (null != e) {
							if ("string" == typeof e) {
								if (null === (e = Bt(oe, e))) return this
							} else Math.abs(e) < 16 && !n && (e *= 60);
							return !this._isUTC && t && (a = Ut(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? en(this, Zt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, s.updateOffset(this, !0), this._changeInProgress = null)), this
						}
						return this._isUTC ? r : Ut(this)
					}, bn.utc = function(e) {
						return this.utcOffset(0, e)
					}, bn.local = function(e) {
						return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ut(this), "m")), this
					}, bn.parseZone = function() {
						if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
						else if ("string" == typeof this._i) {
							var e = Bt(ie, this._i);
							null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
						}
						return this
					}, bn.hasAlignedHourOffset = function(e) {
						return !!this.isValid() && (e = e ? At(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
					}, bn.isDST = function() {
						return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
					}, bn.isLocal = function() {
						return !!this.isValid() && !this._isUTC
					}, bn.isUtcOffset = function() {
						return !!this.isValid() && this._isUTC
					}, bn.isUtc = Gt, bn.isUTC = Gt, bn.zoneAbbr = function() {
						return this._isUTC ? "UTC" : ""
					}, bn.zoneName = function() {
						return this._isUTC ? "Coordinated Universal Time" : ""
					}, bn.dates = w("dates accessor is deprecated. Use date instead.", yn), bn.months = w("months accessor is deprecated. Use month instead", Ie), bn.years = w("years accessor is deprecated. Use year instead", Se), bn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
						return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
					})), bn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
						if (!o(this._isDSTShifted)) return this._isDSTShifted;
						var e = {};
						if (y(e, this), (e = Pt(e))._a) {
							var t = e._isUTC ? h(e._a) : At(e._a);
							this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
						} else this._isDSTShifted = !1;
						return this._isDSTShifted
					}));
					var wn = P.prototype;

					function Tn(e, t, n, a) {
						var s = pt(),
							r = h().set(a, t);
						return s[n](r, e)
					}

					function xn(e, t, n) {
						if (d(e) && (t = e, e = void 0), e = e || "", null != t) return Tn(e, t, n, "month");
						var a, s = [];
						for (a = 0; a < 12; a++) s[a] = Tn(e, a, n, "month");
						return s
					}

					function Sn(e, t, n, a) {
						"boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || "");
						var s, r = pt(),
							i = e ? r._week.dow : 0;
						if (null != n) return Tn(t, (n + i) % 7, a, "day");
						var o = [];
						for (s = 0; s < 7; s++) o[s] = Tn(t, (s + i) % 7, a, "day");
						return o
					}
					wn.calendar = function(e, t, n) {
						var a = this._calendar[e] || this._calendar.sameElse;
						return j(a) ? a.call(t, n) : a
					}, wn.longDateFormat = function(e) {
						var t = this._longDateFormat[e],
							n = this._longDateFormat[e.toUpperCase()];
						return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
							return e.slice(1)
						})), this._longDateFormat[e])
					}, wn.invalidDate = function() {
						return this._invalidDate
					}, wn.ordinal = function(e) {
						return this._ordinal.replace("%d", e)
					}, wn.preparse = Dn, wn.postformat = Dn, wn.relativeTime = function(e, t, n, a) {
						var s = this._relativeTime[n];
						return j(s) ? s(e, t, n, a) : s.replace(/%d/i, e)
					}, wn.pastFuture = function(e, t) {
						var n = this._relativeTime[e > 0 ? "future" : "past"];
						return j(n) ? n(t) : n.replace(/%s/i, t)
					}, wn.set = function(e) {
						var t, n;
						for (n in e) j(t = e[n]) ? this[n] = t : this["_" + n] = t;
						this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
					}, wn.months = function(e, t) {
						return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
					}, wn.monthsShort = function(e, t) {
						return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ae.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
					}, wn.monthsParse = function(e, t, n) {
						var a, s, r;
						if (this._monthsParseExact) return Ce.call(this, e, t, n);
						for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
							if (s = h([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
							if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
							if (!n && this._monthsParse[a].test(e)) return a
						}
					}, wn.monthsRegex = function(e) {
						return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Re), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
					}, wn.monthsShortRegex = function(e) {
						return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = ze), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
					}, wn.week = function(e) {
						return Ge(e, this._week.dow, this._week.doy).week
					}, wn.firstDayOfYear = function() {
						return this._week.doy
					}, wn.firstDayOfWeek = function() {
						return this._week.dow
					}, wn.weekdays = function(e, t) {
						var n = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
						return !0 === e ? Ke(n, this._week.dow) : e ? n[e.day()] : n
					}, wn.weekdaysMin = function(e) {
						return !0 === e ? Ke(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
					}, wn.weekdaysShort = function(e) {
						return !0 === e ? Ke(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
					}, wn.weekdaysParse = function(e, t, n) {
						var a, s, r;
						if (this._weekdaysParseExact) return Qe.call(this, e, t, n);
						for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
							if (s = h([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
							if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
							if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
							if (!n && this._weekdaysParse[a].test(e)) return a
						}
					}, wn.weekdaysRegex = function(e) {
						return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || at.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = et), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
					}, wn.weekdaysShortRegex = function(e) {
						return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || at.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
					}, wn.weekdaysMinRegex = function(e) {
						return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || at.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = nt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
					}, wn.isPM = function(e) {
						return "p" === (e + "").toLowerCase().charAt(0)
					}, wn.meridiem = function(e, t, n) {
						return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
					}, ct("en", {
						dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
						ordinal: function(e) {
							var t = e % 10;
							return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
						}
					}), s.lang = w("moment.lang is deprecated. Use moment.locale instead.", ct), s.langData = w("moment.langData is deprecated. Use moment.localeData instead.", pt);
					var jn = Math.abs;

					function Hn(e, t, n, a) {
						var s = Zt(t, n);
						return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
					}

					function Pn(e) {
						return e < 0 ? Math.floor(e) : Math.ceil(e)
					}

					function On(e) {
						return 4800 * e / 146097
					}

					function An(e) {
						return 146097 * e / 4800
					}

					function Wn(e) {
						return function() {
							return this.as(e)
						}
					}
					var Fn = Wn("ms"),
						Cn = Wn("s"),
						En = Wn("m"),
						In = Wn("h"),
						zn = Wn("d"),
						Rn = Wn("w"),
						Nn = Wn("M"),
						Vn = Wn("Q"),
						Bn = Wn("y");

					function Jn(e) {
						return function() {
							return this.isValid() ? this._data[e] : NaN
						}
					}
					var Un = Jn("milliseconds"),
						Gn = Jn("seconds"),
						qn = Jn("minutes"),
						Kn = Jn("hours"),
						Zn = Jn("days"),
						$n = Jn("months"),
						Xn = Jn("years"),
						Qn = Math.round,
						ea = {
							ss: 44,
							s: 45,
							m: 45,
							h: 22,
							d: 26,
							M: 11
						};

					function ta(e, t, n, a, s) {
						return s.relativeTime(t || 1, !!n, e, a)
					}
					var na = Math.abs;

					function aa(e) {
						return (e > 0) - (e < 0) || +e
					}

					function sa() {
						if (!this.isValid()) return this.localeData().invalidDate();
						var e, t, n = na(this._milliseconds) / 1e3,
							a = na(this._days),
							s = na(this._months);
						e = v(n / 60), t = v(e / 60), n %= 60, e %= 60;
						var r = v(s / 12),
							i = s %= 12,
							o = a,
							d = t,
							l = e,
							u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
							m = this.asSeconds();
						if (!m) return "P0D";
						var _ = m < 0 ? "-" : "",
							h = aa(this._months) !== aa(m) ? "-" : "",
							c = aa(this._days) !== aa(m) ? "-" : "",
							f = aa(this._milliseconds) !== aa(m) ? "-" : "";
						return _ + "P" + (r ? h + r + "Y" : "") + (i ? h + i + "M" : "") + (o ? c + o + "D" : "") + (d || l || u ? "T" : "") + (d ? f + d + "H" : "") + (l ? f + l + "M" : "") + (u ? f + u + "S" : "")
					}
					var ra = It.prototype;
					return ra.isValid = function() {
						return this._isValid
					}, ra.abs = function() {
						var e = this._data;
						return this._milliseconds = jn(this._milliseconds), this._days = jn(this._days), this._months = jn(this._months), e.milliseconds = jn(e.milliseconds), e.seconds = jn(e.seconds), e.minutes = jn(e.minutes), e.hours = jn(e.hours), e.months = jn(e.months), e.years = jn(e.years), this
					}, ra.add = function(e, t) {
						return Hn(this, e, t, 1)
					}, ra.subtract = function(e, t) {
						return Hn(this, e, t, -1)
					}, ra.as = function(e) {
						if (!this.isValid()) return NaN;
						var t, n, a = this._milliseconds;
						if ("month" === (e = W(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + On(t), e) {
							case "month":
								return n;
							case "quarter":
								return n / 3;
							case "year":
								return n / 12
						} else switch (t = this._days + Math.round(An(this._months)), e) {
							case "week":
								return t / 7 + a / 6048e5;
							case "day":
								return t + a / 864e5;
							case "hour":
								return 24 * t + a / 36e5;
							case "minute":
								return 1440 * t + a / 6e4;
							case "second":
								return 86400 * t + a / 1e3;
							case "millisecond":
								return Math.floor(864e5 * t) + a;
							default:
								throw new Error("Unknown unit " + e)
						}
					}, ra.asMilliseconds = Fn, ra.asSeconds = Cn, ra.asMinutes = En, ra.asHours = In, ra.asDays = zn, ra.asWeeks = Rn, ra.asMonths = Nn, ra.asQuarters = Vn, ra.asYears = Bn, ra.valueOf = function() {
						return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
					}, ra._bubble = function() {
						var e, t, n, a, s, r = this._milliseconds,
							i = this._days,
							o = this._months,
							d = this._data;
						return r >= 0 && i >= 0 && o >= 0 || r <= 0 && i <= 0 && o <= 0 || (r += 864e5 * Pn(An(o) + i), i = 0, o = 0), d.milliseconds = r % 1e3, e = v(r / 1e3), d.seconds = e % 60, t = v(e / 60), d.minutes = t % 60, n = v(t / 60), d.hours = n % 24, i += v(n / 24), s = v(On(i)), o += s, i -= Pn(An(s)), a = v(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
					}, ra.clone = function() {
						return Zt(this)
					}, ra.get = function(e) {
						return e = W(e), this.isValid() ? this[e + "s"]() : NaN
					}, ra.milliseconds = Un, ra.seconds = Gn, ra.minutes = qn, ra.hours = Kn, ra.days = Zn, ra.weeks = function() {
						return v(this.days() / 7)
					}, ra.months = $n, ra.years = Xn, ra.humanize = function(e) {
						if (!this.isValid()) return this.localeData().invalidDate();
						var t = this.localeData(),
							n = function(e, t, n) {
								var a = Zt(e).abs(),
									s = Qn(a.as("s")),
									r = Qn(a.as("m")),
									i = Qn(a.as("h")),
									o = Qn(a.as("d")),
									d = Qn(a.as("M")),
									l = Qn(a.as("y")),
									u = s <= ea.ss && ["s", s] || s < ea.s && ["ss", s] || r <= 1 && ["m"] || r < ea.m && ["mm", r] || i <= 1 && ["h"] || i < ea.h && ["hh", i] || o <= 1 && ["d"] || o < ea.d && ["dd", o] || d <= 1 && ["M"] || d < ea.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
								return u[2] = t, u[3] = +e > 0, u[4] = n, ta.apply(null, u)
							}(this, !e, t);
						return e && (n = t.pastFuture(+this, n)), t.postformat(n)
					}, ra.toISOString = sa, ra.toString = sa, ra.toJSON = sa, ra.locale = sn, ra.localeData = on, ra.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", sa), ra.lang = rn, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), ue("x", re), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", (function(e, t, n) {
						n._d = new Date(1e3 * parseFloat(e, 10))
					})), ce("x", (function(e, t, n) {
						n._d = new Date(k(e))
					})), s.version = "2.24.0", t = At, s.fn = bn, s.min = function() {
						return Ct("isBefore", [].slice.call(arguments, 0))
					}, s.max = function() {
						return Ct("isAfter", [].slice.call(arguments, 0))
					}, s.now = function() {
						return Date.now ? Date.now() : +new Date
					}, s.utc = h, s.unix = function(e) {
						return At(1e3 * e)
					}, s.months = function(e, t) {
						return xn(e, t, "months")
					}, s.isDate = l, s.locale = ct, s.invalid = p, s.duration = Zt, s.isMoment = Y, s.weekdays = function(e, t, n) {
						return Sn(e, t, n, "weekdays")
					}, s.parseZone = function() {
						return At.apply(null, arguments).parseZone()
					}, s.localeData = pt, s.isDuration = zt, s.monthsShort = function(e, t) {
						return xn(e, t, "monthsShort")
					}, s.weekdaysMin = function(e, t, n) {
						return Sn(e, t, n, "weekdaysMin")
					}, s.defineLocale = ft, s.updateLocale = function(e, t) {
						if (null != t) {
							var n, a, s = lt;
							null != (a = ht(e)) && (s = a._config), t = H(s, t), (n = new P(t)).parentLocale = ut[e], ut[e] = n, ct(e)
						} else null != ut[e] && (null != ut[e].parentLocale ? ut[e] = ut[e].parentLocale : null != ut[e] && delete ut[e]);
						return ut[e]
					}, s.locales = function() {
						return T(ut)
					}, s.weekdaysShort = function(e, t, n) {
						return Sn(e, t, n, "weekdaysShort")
					}, s.normalizeUnits = W, s.relativeTimeRounding = function(e) {
						return void 0 === e ? Qn : "function" == typeof e && (Qn = e, !0)
					}, s.relativeTimeThreshold = function(e, t) {
						return void 0 !== ea[e] && (void 0 === t ? ea[e] : (ea[e] = t, "s" === e && (ea.ss = t - 1), !0))
					}, s.calendarFormat = function(e, t) {
						var n = e.diff(t, "days", !0);
						return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
					}, s.prototype = bn, s.HTML5_FMT = {
						DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
						DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
						DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
						DATE: "YYYY-MM-DD",
						TIME: "HH:mm",
						TIME_SECONDS: "HH:mm:ss",
						TIME_MS: "HH:mm:ss.SSS",
						WEEK: "GGGG-[W]WW",
						MONTH: "YYYY-MM"
					}, s
				}()
			}).call(this, n("./node_modules/webpack/buildin/module.js")(e))
		},
		"./node_modules/react-chartjs-2/es/index.js": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "a", (function() {
					return L
				}));
				var a = n("./node_modules/react/index.js"),
					s = n.n(a),
					r = n("./node_modules/react-chartjs-2/node_modules/prop-types/index.js"),
					i = n.n(r),
					o = n("./node_modules/chart.js/dist/Chart.js"),
					d = n.n(o),
					l = n("./node_modules/lodash/isEqual.js"),
					u = n.n(l),
					m = n("./node_modules/lodash/keyBy.js"),
					_ = n.n(m),
					h = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
						}
						return e
					};

				function c(e, t) {
					var n = {};
					for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
					return n
				}

				function f(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function p(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}

				function M(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				var y = void 0 !== e && {} && "production",
					g = function(e) {
						function t() {
							var n, a;
							f(this, t);
							for (var s = arguments.length, r = Array(s), i = 0; i < s; i++) r[i] = arguments[i];
							return n = a = p(this, e.call.apply(e, [this].concat(r))), a.handleOnClick = function(e) {
								var t = a.chartInstance,
									n = a.props,
									s = n.getDatasetAtEvent,
									r = n.getElementAtEvent,
									i = n.getElementsAtEvent,
									o = n.onElementsClick;
								s && s(t.getDatasetAtEvent(e), e), r && r(t.getElementAtEvent(e), e), i && i(t.getElementsAtEvent(e), e), o && o(t.getElementsAtEvent(e), e)
							}, a.ref = function(e) {
								a.element = e
							}, p(a, n)
						}
						return M(t, e), t.prototype.componentWillMount = function() {
							this.chartInstance = void 0
						}, t.prototype.componentDidMount = function() {
							this.renderChart()
						}, t.prototype.componentDidUpdate = function() {
							if (this.props.redraw) return this.destroyChart(), void this.renderChart();
							this.updateChart()
						}, t.prototype.shouldComponentUpdate = function(e) {
							var t = this.props,
								n = (t.redraw, t.type),
								a = t.options,
								s = t.plugins,
								r = t.legend,
								i = t.height,
								o = t.width;
							if (!0 === e.redraw) return !0;
							if (i !== e.height || o !== e.width) return !0;
							if (n !== e.type) return !0;
							if (!u()(r, e.legend)) return !0;
							if (!u()(a, e.options)) return !0;
							var d = this.transformDataProp(e);
							return !u()(this.shadowDataProp, d) || !u()(s, e.plugins)
						}, t.prototype.componentWillUnmount = function() {
							this.destroyChart()
						}, t.prototype.transformDataProp = function(e) {
							var t = e.data;
							return "function" == typeof t ? t(this.element) : t
						}, t.prototype.memoizeDataProps = function() {
							if (this.props.data) {
								var e = this.transformDataProp(this.props);
								return this.shadowDataProp = h({}, e, {
									datasets: e.datasets && e.datasets.map((function(e) {
										return h({}, e)
									}))
								}), this.saveCurrentDatasets(), e
							}
						}, t.prototype.checkDatasets = function(e) {
							var n = "production" !== y && "prod" !== y,
								a = this.props.datasetKeyProvider !== t.getLabelAsKey,
								s = e.length > 1;
							if (n && s && !a) {
								var r = !1;
								e.forEach((function(e) {
									e.label || (r = !0)
								})), r && console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.')
							}
						}, t.prototype.getCurrentDatasets = function() {
							return this.chartInstance && this.chartInstance.config.data && this.chartInstance.config.data.datasets || []
						}, t.prototype.saveCurrentDatasets = function() {
							var e = this;
							this.datasets = this.datasets || {}, this.getCurrentDatasets().forEach((function(t) {
								e.datasets[e.props.datasetKeyProvider(t)] = t
							}))
						}, t.prototype.updateChart = function() {
							var e = this,
								t = this.props.options,
								n = this.memoizeDataProps(this.props);
							if (this.chartInstance) {
								t && (this.chartInstance.options = d.a.helpers.configMerge(this.chartInstance.options, t));
								var a = this.getCurrentDatasets(),
									s = n.datasets || [];
								this.checkDatasets(a);
								var r = _()(a, this.props.datasetKeyProvider);
								this.chartInstance.config.data.datasets = s.map((function(t) {
									var n = r[e.props.datasetKeyProvider(t)];
									if (n && n.type === t.type) {
										n.data.splice(t.data.length), t.data.forEach((function(e, a) {
											n.data[a] = t.data[a]
										}));
										t.data;
										var a = c(t, ["data"]);
										return h({}, n, a)
									}
									return t
								}));
								n.datasets;
								var i = c(n, ["datasets"]);
								this.chartInstance.config.data = h({}, this.chartInstance.config.data, i), this.chartInstance.update()
							}
						}, t.prototype.renderChart = function() {
							var e = this.props,
								n = e.options,
								a = e.legend,
								s = e.type,
								r = e.plugins,
								i = this.element,
								o = this.memoizeDataProps();
							void 0 === a || u()(t.defaultProps.legend, a) || (n.legend = a), this.chartInstance = new d.a(i, {
								type: s,
								data: o,
								options: n,
								plugins: r
							})
						}, t.prototype.destroyChart = function() {
							this.saveCurrentDatasets();
							var e = Object.values(this.datasets);
							this.chartInstance.config.data.datasets = e, this.chartInstance.destroy()
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.height,
								n = e.width,
								a = e.id;
							return s.a.createElement("canvas", {
								ref: this.ref,
								height: t,
								width: n,
								id: a,
								onClick: this.handleOnClick
							})
						}, t
					}(s.a.Component);
				g.getLabelAsKey = function(e) {
					return e.label
				}, g.propTypes = {
					data: i.a.oneOfType([i.a.object, i.a.func]).isRequired,
					getDatasetAtEvent: i.a.func,
					getElementAtEvent: i.a.func,
					getElementsAtEvent: i.a.func,
					height: i.a.number,
					legend: i.a.object,
					onElementsClick: i.a.func,
					options: i.a.object,
					plugins: i.a.arrayOf(i.a.object),
					redraw: i.a.bool,
					type: function(e, t, n) {
						if (!d.a.controllers[e[t]]) return new Error("Invalid chart type `" + e[t] + "` supplied to `" + n + "`.")
					},
					width: i.a.number,
					datasetKeyProvider: i.a.func
				}, g.defaultProps = {
					legend: {
						display: !0,
						position: "bottom"
					},
					type: "doughnut",
					height: 150,
					width: 300,
					redraw: !1,
					options: {},
					datasetKeyProvider: g.getLabelAsKey
				};
				(function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "doughnut"
						}))
					}
				})(s.a.Component),
				function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "pie"
						}))
					}
				}(s.a.Component);
				var L = function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					return M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "line"
						}))
					}, t
				}(s.a.Component);
				(function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "bar"
						}))
					}
				})(s.a.Component),
				function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "horizontalBar"
						}))
					}
				}(s.a.Component),
				function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "radar"
						}))
					}
				}(s.a.Component),
				function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "polarArea"
						}))
					}
				}(s.a.Component),
				function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "bubble"
						}))
					}
				}(s.a.Component),
				function(e) {
					function t() {
						return f(this, t), p(this, e.apply(this, arguments))
					}
					M(t, e), t.prototype.render = function() {
						var e = this;
						return s.a.createElement(g, h({}, this.props, {
							ref: function(t) {
								return e.chartInstance = t && t.chartInstance
							},
							type: "scatter"
						}))
					}
				}(s.a.Component), d.a.defaults
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/react-chartjs-2/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-chartjs-2/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}
			e.exports = function() {
				function e(e, t, n, s, r, i) {
					if (i !== a) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return n.checkPropTypes = s, n.PropTypes = n, n
			}
		},
		"./node_modules/react-chartjs-2/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-chartjs-2/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-chartjs-2/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~ModStatsChart.dcd40adc139bb8dccee7.js.map