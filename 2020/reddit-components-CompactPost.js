// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.909debb464ca15970ce9.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-dom/index.js");
			s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), s("./node_modules/invariant/browser.js");

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, o) {
					return a(e[o], t[o])
				})) : e !== t
			}

			function i() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.root || null,
					s = function(e) {
						var t = /^-?\d*\.?\d+(px|%)$/,
							s = (e || "0px").split(/\s+/).map((function(e) {
								if (!t.test(e)) throw new Error("rootMargin must be specified in pixels or percent");
								return e
							}));
						return s[1] = s[1] || s[0], s[2] = s[2] || s[0], s[3] = s[3] || s[1], s.join(" ")
					}(e.rootMargin),
					o = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					n = d.keys(),
					r = Array.isArray(n),
					i = 0;
				for (n = r ? n : n[Symbol.iterator]();;) {
					var c;
					if (r) {
						if (i >= n.length) break;
						c = n[i++]
					} else {
						if ((i = n.next()).done) break;
						c = i.value
					}
					var l = c;
					if (![
							[t, l.root],
							[s, l.rootMargin],
							[o, l.thresholds]
						].some((function(e) {
							return a.apply(void 0, e)
						}))) return l
				}
				return null
			}
			var d = new Map,
				c = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, t) {
						return i(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var s = d.get(t);
						if (s) {
							var o = s.values(),
								n = Array.isArray(o),
								r = 0;
							for (o = n ? o : o[Symbol.iterator]();;) {
								var a;
								if (n) {
									if (r >= o.length) break;
									a = o[r++]
								} else {
									if ((r = o.next()).done) break;
									a = r.value
								}
								var i = a;
								if (i.target === e.target) return i
							}
						}
						return null
					}, e.observe = function(e) {
						var t = void 0;
						d.has(e.observer) ? t = d.get(e.observer) : (t = new Set, d.set(e.observer, t)), t.add(e), e.observer.observe(e.target)
					}, e.unobserve = function(e) {
						if (d.has(e.observer)) {
							var t = d.get(e.observer);
							t.delete(e) && (t.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), d.delete(e.observer)))
						}
					}, e.clear = function() {
						d.clear()
					}, e.count = function() {
						return d.size
					}, e
				}(),
				l = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var o = t[s];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, s, o) {
						return s && e(t.prototype, s), o && e(t, o), t
					}
				}();

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function m(e, t) {
				e.forEach((function(e) {
					var s = c.findElement(e, t);
					s && s.handleChange(e)
				}))
			}
			var u = ["root", "rootMargin", "threshold"],
				b = Object.prototype,
				x = function(e) {
					function t() {
						var s, o;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
						return s = o = p(this, e.call.apply(e, [this].concat(r))), o.handleChange = function(e) {
							o.props.onChange(e), o.props.onlyOnce && e.isIntersecting && o.unobserve()
						}, o.handleNode = function(e) {
							"function" == typeof o.props.children.ref && o.props.children.ref(e), o.currentTarget && e && o.currentTarget !== e && (o.unobserve(), o.shouldResetObserver = !0), o.target = e
						}, p(o, s)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t.prototype.observe = function() {
						var e;
						this.target = (e = this.target, n.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(r.findDOMNode)(this.target)), this.observer = c.create(m, this.options), c.observe(this)
					}, t.prototype.unobserve = function() {
						c.unobserve(this)
					}, t.prototype.reobserve = function() {
						this.unobserve(), this.props.disabled || this.observe()
					}, t.prototype.componentDidMount = function() {
						this.props.disabled || this.observe()
					}, t.prototype.componentWillUnmount = function() {
						this.unobserve()
					}, t.prototype.componentDidUpdate = function() {
						this.shouldResetObserver && this.reobserve()
					}, t.prototype.componentWillUpdate = function(e) {
						var t = this;
						this.shouldResetObserver = u.concat(["disabled"]).some((function(s) {
							return a(e[s], t.props[s])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, n.a.cloneElement(n.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return u.reduce((function(t, s) {
								if (b.hasOwnProperty.call(e.props, s)) {
									var o, n = e.props[s];
									return "root" === s && "[object String]" === b.toString.call(e.props[s]) && (n = document.querySelector(n)), Object.assign({}, t, ((o = {})[s] = n, o))
								}
								return t
							}), {})
						}
					}]), t
				}(n.a.Component);
			x.displayName = "IntersectionObserver";
			var f = x;
			s.d(t, "a", (function() {
				return f
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, s, n, r, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
				return s.checkPropTypes = n, s.PropTypes = s, s
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function o(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						p = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						h = !a && !p && !m && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !g && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: y || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: y || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : p ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? n = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, y && (n.version = y)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, y && (n.version = y)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && y && (n.version = y)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : _ ? (n.xbox = e, n.osname = "Xbox") : x ? (n.windows = e, n.osname = "Windows") : h && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var O = "";
					n.windows ? O = function(e) {
						switch (e) {
							case "NT":
								return "NT";
							case "XP":
								return "XP";
							case "NT 5.0":
								return "2000";
							case "NT 5.1":
								return "XP";
							case "NT 5.2":
								return "2003";
							case "NT 6.0":
								return "Vista";
							case "NT 6.1":
								return "7";
							case "NT 6.2":
								return "8";
							case "NT 6.3":
								return "8.1";
							case "NT 10.0":
								return "10";
							default:
								return
						}
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);
					var w = !n.windows && O.split(".")[0];
					return g || d || "ipad" == r || a && (3 == w || w >= 4 && !E) || n.silk ? n.tablet = e : (E || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = n(e, (function(e) {
							var s = t - o(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, n) {
					var a = s;
					"string" == typeof o && (n = o, o = void 0), void 0 === o && (o = !1), n && (a = t(n));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([i, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var s = -1, o = null == e ? 0 : e.length; ++s < o;)
					if (!t(e[s], s, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = !0;
				return o(e, (function(e, o, n) {
					return s = !!t(e, o, n)
				})), s
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, n) {
				return n(e, (function(e, n, r) {
					s = o ? (o = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), o(n(e), t, s)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayEvery.js"),
				n = s("./node_modules/lodash/_baseEvery.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? o : n;
				return s && i(e, t, s) && (t = void 0), d(e, r(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? o : a,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Te
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/postFlair.ts"),
				E = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AwardBadges/index.tsx"),
				k = s("./src/reddit/components/CallToActionButton/index.tsx"),
				I = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				N = s("./src/reddit/components/CommentsLink/index.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				A = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/ExpandoButton/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				B = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				D = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				H = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/index.tsx"),
				W = s("./src/reddit/components/ModModeReports/helpers.ts"),
				z = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = s("./src/reddit/components/PostBadges/index.tsx"),
				G = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				J = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = s("./src/reddit/components/PostMedia/index.tsx"),
				Y = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				q = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = s("./src/reddit/components/SubredditIcon/index.tsx"),
				oe = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/controls/Checkbox/index.tsx"),
				de = s("./src/reddit/controls/MetaData/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				le = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				pe = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				me = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ue = s("./src/reddit/helpers/postEvent.ts"),
				be = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				xe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				fe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(fe),
				ve = s("./src/reddit/components/CompactPost/index.m.less"),
				ye = s.n(ve);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Ee = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const _e = e => {
					var {
						isCompact: t
					} = e, s = Ee(e, ["isCompact"]);
					return n.a.createElement(R.a, ge({
						className: Object(c.a)(ye.a.responsiveExpandoButton, {
							[ye.a.mHideAboveSmallTablets]: !!t,
							[ye.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				Oe = Object(r.b)(() => Object(i.c)({
					activeModalId: _.a,
					crosspost: P.c,
					currentUser: C.i,
					flairStyleTemplate: ae.P,
					isActive: P.h,
					isExpanded: P.k,
					language: C.O,
					layout: ae.L,
					moderatorPermissions: w.i,
					modModeEnabled: ae.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: P.M,
					showEditFlair: j.a,
					subredditOrProfile: P.Y,
					userIsOp: C.eb,
					isInAdLeftSidebarExperiment: O.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							} = t;
							return e(Object(g.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const s = t === v.a.upvoted ? Object(y.X)(n) : Object(y.u)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(y.V)(n)),
						onOpenReportsDropdown: t => e(Object(E.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: n
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: n
						})
					}
				}));
			class we extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: r,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						isCheckboxSelected: p = !1,
						isCommentsPage: v,
						isCommentPermalink: y,
						isExpanded: g,
						isInAdLeftSidebarExperiment: E,
						isOverlay: _,
						isProfilePostListing: O,
						inSubredditOrProfile: w = !1,
						language: j,
						layout: P,
						moderatorPermissions: C,
						modModeEnabled: R,
						onClickPost: Z,
						onFlairChanged: te,
						onIgnoreReports: se,
						poll: re,
						post: ae,
						subredditOrProfile: de,
						userIsOp: fe,
						hideModTools: ve,
						scrollerItemRef: ge,
						showBulkActionCheckbox: Ee,
						showEditFlair: _e,
						toggleCheckbox: Oe,
						tooltipType: we,
						sendEvent: Pe
					} = this.props, Te = !!ae.media && ae.media.type === f.n.RTJSON, ke = fe && Te, Ie = Object(X.b)(ae.id, _), Ne = Object(me.a)(C), Me = Object(le.a)(C), Le = Object(pe.a)(C), Ae = "-mod-actions-menu-".concat(ae.id), Re = !!r && Object(h.f)(r) === ae.author, Fe = Object(W.c)(ae), Be = Object(B.a)("View--Reports", ae.id, we), De = Object(W.a)(ae), He = !(_ || v || y), Ve = ae.media && ae.media.type === f.n.LIVEVIDEO, We = e => Pe(Object(x.f)(ae.id, e)), ze = n.a.createElement(G.a, {
						className: Object(c.a)(he.a.compactPostStyles, ye.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: _,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ae,
						onClick: Z,
						eventFactory: a
					}, n.a.createElement("div", {
						className: ye.a.compactWrapper
					}, n.a.createElement("div", {
						className: ye.a.leftRailWrapper
					}, n.a.createElement("div", {
						className: ye.a.leftRail,
						style: {
							borderColor: Object(J.c)({
								isRemoved: !!ae.bannedBy,
								isReported: Object(u.a)(ae),
								isSponsored: ae.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: E
							})
						}
					}, Ee && n.a.createElement(ie.a, {
						className: ye.a.bulkActionCheckbox,
						isCheckboxSelected: p,
						toggleCheckbox: Oe
					}), n.a.createElement(oe.a, {
						className: ye.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: ae,
						onVoteClick: l
					}), n.a.createElement(M.a, {
						className: ye.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: ae,
						onVoteClick: l
					}))), n.a.createElement(K.a, {
						className: Object(c.a)(ye.a.content, {
							[ye.a.isEvent]: Object(ue.a)(ae)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, n.a.createElement(A.a, {
						isCompactMode: !0,
						language: j,
						post: ae
					}), n.a.createElement("div", {
						className: ye.a.compactPostRow
					}, !ve && Ce(ae, o, g, !1), !w && !ae.isSponsored && n.a.createElement(D.h, {
						type: ae.belongsTo.type,
						id: ae.belongsTo.id
					}), n.a.createElement("div", {
						className: ye.a.topLine,
						"data-click-id": "body"
					}, n.a.createElement(Q.c, {
						post: ae,
						poll: re,
						size: Q.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Se(ae, de, j), n.a.createElement($.d, {
						className: ye.a.postTopMeta,
						flairStyleTemplate: i,
						language: j,
						post: ae,
						showSub: !!de && !w && !ae.isSponsored,
						subredditOrProfile: de
					}), n.a.createElement(U.a, {
						className: ye.a.postBadges,
						displayText: de ? de.displayText : null,
						inSubredditOrProfile: w,
						language: j,
						post: ae
					}), de && n.a.createElement(L.a, {
						className: ye.a.donationAmount,
						contentId: ae.id,
						subredditId: de.id
					}), n.a.createElement(S.a, {
						isOverlay: _,
						tooltipType: we,
						thing: ae
					})), He && !Ve && n.a.createElement("div", null, n.a.createElement(I.a, {
						className: ye.a.liveDiscussionIcon,
						isMod: Ne,
						postId: ae.postId
					})), n.a.createElement("div", {
						className: ye.a.flatList
					}, n.a.createElement(N.a, {
						className: ye.a.commentsLink,
						hasModPostPerms: Ne,
						isCommentsPage: v,
						isCommentPermalink: y,
						isOverlay: _,
						postId: ae.id,
						modModeEnabled: R,
						numComments: ae.numComments,
						type: m.g.Compact
					}), n.a.createElement(z.a, {
						className: ye.a.modToolsFlatlist,
						isOverlay: !1,
						layout: P,
						modModeEnabled: R,
						post: ae,
						sendEvent: Pe,
						showIconsOnly: !0
					}), Ne && n.a.createElement(H.a, {
						dropdownId: Ae,
						onClick: () => We("post_mod_action_menu")
					}, n.a.createElement(F.b, null), n.a.createElement(Y.a, {
						canEditFlair: Me && _e,
						hasModPostPerms: Ne,
						hasModFullPerms: Le,
						isOverlay: !1,
						isPostAuthor: Re,
						language: j,
						modModeEnabled: R,
						post: ae,
						tooltipId: Ae
					})), Ne && Fe && !R && n.a.createElement(ee.c, {
						text: "".concat(De),
						onClick: () => {
							this.props.onOpenReportsDropdown(Be), We("post_report_menu")
						},
						id: Be
					}, n.a.createElement(ne.a, {
						model: ae,
						onIgnoreReports: () => {
							se(), We(ae.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Be
					}), ae.ignoreReports ? n.a.createElement(be.a, null) : n.a.createElement(xe.a, null)), n.a.createElement(q.g, {
						currentProfileName: s,
						isCommentsPage: v,
						isOverlay: !1,
						isProfilePostListing: O,
						layout: P,
						permalink: ae.permalink,
						postId: ae.postId,
						sendEvent: Pe,
						showEditPost: ke,
						showEditFlair: _e,
						dropdownId: "".concat(ae.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(q.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && Ce(ae, o, g, !0))), ae.source && ae.source.url && ae.isSponsored && n.a.createElement(T.a, {
						className: ye.a.adLinkWrapper
					}, n.a.createElement(ce.a, {
						href: ae.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ae.isSponsored,
						source: ae.source
					}, ae.source.displayText), ae.callToAction && n.a.createElement(k.a, {
						href: ae.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ae.isSponsored,
						source: ae.source,
						isNotCardView: !0
					}, ae.callToAction)), R && Ne && Fe && n.a.createElement("div", {
						className: ye.a.compactPostRow
					}, n.a.createElement(V.a, {
						language: j,
						onIgnoreReports: se,
						reportable: ae
					})), n.a.createElement(D.d, {
						postId: ae.id
					}))), g && n.a.createElement(je, {
						post: ae,
						scrollerItemRef: ge,
						flairStyleTemplate: i
					}), e === Ie && n.a.createElement(X.a, {
						flairs: ae.flair,
						subredditId: ae.belongsTo.id,
						modalId: Ie,
						onFlairChanged: te
					}));
					return n.a.createElement(n.a.Fragment, null, ze)
				}
			}
			const je = e => n.a.createElement(K.a, {
					className: Object(c.a)(e.className, ye.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? n.a.createElement("div", {
					className: ye.a.crosspostMediaWrapper
				}, Pe(e.post, e.scrollerItemRef)) : Pe(e.post, e.scrollerItemRef)),
				Pe = (e, t) => n.a.createElement(Z.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				Ce = (e, t, s, o) => n.a.createElement(_e, {
					crosspost: t,
					isCompact: o,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Te = e => n.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, n.a.createElement(se.b, {
					className: ye.a.subredditIcon,
					subredditOrProfile: e
				})),
				Se = (e, t, s) => n.a.createElement("div", {
					className: ye.a.responsiveMeta
				}, n.a.createElement(de.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), n.a.createElement(de.c, null), Object(de.d)(e.numComments, s), n.a.createElement(de.c, null), t && n.a.createElement("a", {
					href: t.url
				}, n.a.createElement(de.a, null, t.displayText)), e.isSponsored && [n.a.createElement(te.a, {
					key: "label"
				}), n.a.createElement(de.c, {
					key: "separator"
				})], !e.isSponsored && n.a.createElement(de.a, null, " Posted by "), n.a.createElement($.b, {
					post: e
				}));
			t.default = Oe(Object(p.b)(Object(re.b)(Object(l.a)(we))))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(y),
				E = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = E.a.div("Container", g.a),
				w = E.a.div("PostMetaWrapper", g.a),
				j = E.a.wrapped(u.c, "PostTitle", g.a),
				P = E.a.div("FlatList", g.a),
				C = E.a.div("FlatItem", g.a),
				T = E.a.span("FlatListDotSpacer", g.a),
				S = E.a.wrapped(O, "LinkContainer", g.a),
				k = E.a.div("Content", g.a),
				I = E.a.div("ThumbnailContainer", g.a),
				N = Object(i.c)({
					isCurrentUserProfilePost: h.i,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.zb.TOPIC),
					language: v.O,
					post: h.M,
					shouldOpenPostInNewTab: v.S,
					subreddit: h.Y
				}),
				M = Object(r.b)(N);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: r,
					post: a,
					subreddit: i,
					language: d
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						language: d,
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					l = t;
				return a && !a.media ? n.a.createElement(S, {
					className: l
				}, n.a.createElement(k, null, n.a.createElement(w, null, n.a.createElement(m.a, c)), L(a), a.source && n.a.createElement(b.a, {
					post: a
				}), R(e)), B(e)) : n.a.createElement(O, {
					className: l
				}, n.a.createElement(w, null, n.a.createElement(m.a, c)), L(a), A(e), R(e))
			});
			const L = e => n.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return n.a.createElement("div", null, n.a.createElement(p.a, _({}, o, {
						className: g.a.mediaContainer
					})))
				},
				R = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: o
					} = s;
					return n.a.createElement(P, null, n.a.createElement(C, null, Object(d.b)(t, "posts.points.noun", o, {
						count: Object(l.b)(o)
					})), n.a.createElement(T, null), n.a.createElement(C, null, F(e)))
				},
				F = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: o
					} = e, {
						numComments: r
					} = s;
					return n.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: o ? "_blank" : void 0
					}, Object(d.b)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				B = e => n.a.createElement(I, null, n.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				f = s("./src/reddit/icons/fonts/helpers.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(h);
			var y = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(f.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				E = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				T = s.n(C);
			const S = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(T.a.icon, T.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case P.n.GIFVIDEO:
							return n.a.createElement(E.a, {
								className: s
							});
						case P.n.IMAGE:
							return n.a.createElement(w.a, {
								className: s
							});
						case P.n.TEXT:
						case P.n.RTJSON:
							return n.a.createElement(j.a, {
								className: s
							});
						case P.n.VIDEO:
							return n.a.createElement(g.a, {
								className: s
							});
						case P.n.EMBED:
						default:
							return n.a.createElement(_.a, {
								className: s
							})
					}
				};
			t.a = S(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: f
				} = e, h = s || l, v = o && !!s;
				return h.media && !(("rtjson" === h.media.type || "text" === h.media.type) && !Object(m.a)(h)) ? n.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(c.c)("Expand content"),
					className: Object(i.a)(t, T.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? n.a.createElement(b.a, {
					className: T.a.icon
				}) : f ? n.a.createElement(n.a.Fragment, null, k(h.media && h.media.type, v), n.a.createElement(x.a, {
					className: Object(i.a)(T.a.icon, T.a.showOnHover)
				})) : n.a.createElement(x.a, {
					className: T.a.icon
				})) : h.source && h.source.url ? n.a.createElement(p.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(i.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					href: h.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, n.a.createElement(O.a, {
					className: Object(i.a)(T.a.icon, T.a.outboundLinkIcon)
				})) : n.a.createElement(a.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(i.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(h.permalink),
					rel: "nofollow"
				}, n.a.createElement(y, {
					className: T.a.icon
				}))
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : n.a.createElement(a.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				y = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: g,
					isTopicPage: E,
					language: _,
					post: O,
					shouldShowSubscribeButton: w,
					subredditOrProfile: j,
					tooltipType: P
				} = e, C = !!E;
				return n.a.createElement("div", {
					className: y.a.metaContainer
				}, !o && !O.isSponsored && j && n.a.createElement(i.a, {
					postId: O.id,
					subredditName: j.name
				}, n.a.createElement(m.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && n.a.createElement(p.a, null), !o && !O.isSponsored && j && w && !v && n.a.createElement(u.a, {
					getEventFactory: e => Object(f.f)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(h.e)(j) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: O.id,
					small: !0
				}), !o && !O.isSponsored && n.a.createElement(x.b, null), !o && !O.isSponsored && n.a.createElement(d.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), n.a.createElement(l.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					language: _,
					post: O,
					tooltipType: P
				}), n.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					language: _,
					post: O,
					tooltipType: P
				}), j && n.a.createElement(a.a, {
					className: y.a.donationAmount,
					contentId: O.id,
					subredditId: j.id
				}), !C && n.a.createElement(r.a, {
					hideCta: s,
					isOverlay: g,
					thing: O,
					tooltipType: P
				}))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(p);
			const u = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(o.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(o.j)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = u(Object(i.a)(b))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				c = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(c),
				p = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const m = a.a.span("metaText", l.a),
				u = e => n.a.createElement(m, e, " · "),
				b = Object(r.c)("comment.point"),
				x = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: r
					} = e, a = p(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(i.b)(o),
						l = Object(d.c)("\n    ".concat(Object(d.b)("score", c), " ").concat(Object(d.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(d.c)("Score hidden") : r ? l : b(s, o, {
							count: c
						});
					return n.a.createElement(m, a, u)
				},
				f = (e, t) => {
					const s = Object(r.b)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return n.a.createElement(m, null, s)
				}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, s) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = d
		}
	}
]);
//# sourceMappingURL=reddit-components-CompactPost.909debb464ca15970ce9.js.map