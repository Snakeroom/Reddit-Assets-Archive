// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.beb66b1768dcc16c44a5.js
// Retrieved at 2/29/2020, 12:36:29 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-dom/index.js");
			s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), s("./node_modules/invariant/browser.js");

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, o) {
					return i(e[o], t[o])
				})) : e !== t
			}

			function a() {
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
					r = d.keys(),
					n = Array.isArray(r),
					a = 0;
				for (r = n ? r : r[Symbol.iterator]();;) {
					var c;
					if (n) {
						if (a >= r.length) break;
						c = r[a++]
					} else {
						if ((a = r.next()).done) break;
						c = a.value
					}
					var l = c;
					if (![
							[t, l.root],
							[s, l.rootMargin],
							[o, l.thresholds]
						].some((function(e) {
							return i.apply(void 0, e)
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
						return a(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var s = d.get(t);
						if (s) {
							var o = s.values(),
								r = Array.isArray(o),
								n = 0;
							for (o = r ? o : o[Symbol.iterator]();;) {
								var i;
								if (r) {
									if (n >= o.length) break;
									i = o[n++]
								} else {
									if ((n = o.next()).done) break;
									i = n.value
								}
								var a = i;
								if (a.target === e.target) return a
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
				h = function(e) {
					function t() {
						var s, o;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
						return s = o = p(this, e.call.apply(e, [this].concat(n))), o.handleChange = function(e) {
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
						this.target = (e = this.target, r.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(n.findDOMNode)(this.target)), this.observer = c.create(m, this.options), c.observe(this)
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
							return i(e[s], t.props[s])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, r.a.cloneElement(r.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return u.reduce((function(t, s) {
								if (b.hasOwnProperty.call(e.props, s)) {
									var o, r = e.props[s];
									return "root" === s && "[object String]" === b.toString.call(e.props[s]) && (r = document.querySelector(r)), Object.assign({}, t, ((o = {})[s] = r, o))
								}
								return t
							}), {})
						}
					}]), t
				}(r.a.Component);
			h.displayName = "IntersectionObserver";
			var f = h;
			s.d(t, "a", (function() {
				return f
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, s, r, n, i) {
					if (i !== o) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
				return s.checkPropTypes = r, s.PropTypes = s, s
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
					var r, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						p = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !n && !l && /macintosh/i.test(t),
						v = !i && !p && !m && !u && /linux/i.test(t),
						x = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						P = !g && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: y || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: y || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (r.msedge = e, r.version = x) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : p ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, y && (r.version = y)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, y && (r.version = y)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && y && (r.version = y)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : v && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var O = "";
					r.windows ? O = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (r.osversion = O);
					var C = !r.windows && O.split(".")[0];
					return g || d || "ipad" == n || i && (3 == C || C >= 4 && !P) || r.silk ? r.tablet = e : (P || "iphone" == n || "ipod" == n || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function n(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = r(e, (function(e) {
							var s = t - o(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, r) {
					var i = s;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([a, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = n, s.check = function(e, t, s) {
					return !i(e, t, s)
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
				return o(e, (function(e, o, r) {
					return s = !!t(e, o, r)
				})), s
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, r) {
					if (t(e, s, r)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, r) {
				return r(e, (function(e, r, n) {
					s = o ? (o = !1, e) : t(s, e, r, n)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, s)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayEvery.js"),
				r = s("./node_modules/lodash/_baseEvery.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/isArray.js"),
				a = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? o : r;
				return s && a(e, t, s) && (t = void 0), d(e, n(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				r = s("./node_modules/lodash/_baseForOwn.js"),
				n = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, n(t, 3), r)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, n(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(y),
				P = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = P.a.div("Container", g.a),
				C = P.a.div("PostMetaWrapper", g.a),
				w = P.a.wrapped(u.c, "PostTitle", g.a),
				j = P.a.div("FlatList", g.a),
				S = P.a.div("FlatItem", g.a),
				E = P.a.span("FlatListDotSpacer", g.a),
				T = P.a.wrapped(O, "LinkContainer", g.a),
				k = P.a.div("Content", g.a),
				N = P.a.div("ThumbnailContainer", g.a),
				I = Object(a.c)({
					isCurrentUserProfilePost: v.h,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.zb.TOPIC),
					language: x.P,
					post: v.K,
					shouldOpenPostInNewTab: x.T,
					subreddit: v.W
				}),
				L = Object(n.b)(I);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: i,
					subreddit: a,
					language: d
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: d,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					l = t;
				return i && !i.media ? r.a.createElement(T, {
					className: l
				}, r.a.createElement(k, null, r.a.createElement(C, null, r.a.createElement(m.a, c)), A(i), i.source && r.a.createElement(b.a, {
					post: i
				}), R(e)), F(e)) : r.a.createElement(O, {
					className: l
				}, r.a.createElement(C, null, r.a.createElement(m.a, c)), A(i), M(e), R(e))
			});
			const A = e => r.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(p.a, _({}, o, {
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
					return r.a.createElement(j, null, r.a.createElement(S, null, Object(d.b)(t, "posts.points.noun", o, {
						count: Object(l.b)(o)
					})), r.a.createElement(E, null), r.a.createElement(S, null, B(e)))
				},
				B = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: o
					} = e, {
						numComments: n
					} = s;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: o ? "_blank" : void 0
					}, Object(d.b)(t, "posts.comments.noun", n, {
						count: Object(l.b)(n)
					}))
				},
				F = e => r.a.createElement(N, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const n = Object(o.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				d = s.n(a);
			t.a = function(e) {
				return r.a.createElement("div", {
					className: Object(n.a)(d.a.container, e.className)
				}, r.a.createElement(i.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Poll/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				g = s("./src/reddit/selectors/inFeedChaining.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = s("./src/reddit/components/CallToActionButton/index.tsx"),
				S = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				N = s("./src/reddit/components/Governance/Proposal/async.ts"),
				I = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostLeftRail/index.tsx"),
				W = s("./src/reddit/components/PostMedia/index.tsx"),
				D = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = s("./src/reddit/i18n/components.tsx"),
				U = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				V = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = s.n(V);
			var K = () => r.a.createElement("div", {
					className: z.a.container
				}, r.a.createElement(U.a, {
					className: z.a.pinnedIcon
				}), r.a.createElement("span", {
					className: z.a.metaText
				}, r.a.createElement(H.c, null, "pinned by moderators"))),
				G = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				X = s("./src/reddit/components/PostTopLine/index.tsx"),
				Q = s("./src/reddit/components/SourceLink/index.tsx"),
				Z = s("./src/reddit/contexts/InsideOverlay.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				$ = s("./src/reddit/helpers/isCrosspost.ts"),
				ee = s("./src/reddit/helpers/postEvent.ts"),
				te = s("./src/reddit/constants/experiments.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(i.a)(_.Q, e => e.some(oe.c)),
				ne = Object(i.a)(re, e => e),
				ie = (e, t) => Object(se.c)(e, {
					experimentName: te.B,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ne(e, {
							listingKey: s
						})
					}
				});
			var ae = s("./src/reddit/selectors/postFlair.ts"),
				de = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ce = s.n(de),
				le = s("./src/reddit/components/LargePost/index.m.less"),
				pe = s.n(le);
			const me = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(_.Q)(e, {
						listingKey: s
					}) : void 0
				},
				ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(_.E)(e, {
						listingKey: s
					}) : void 0
				},
				be = Object(n.b)(() => Object(i.c)({
					autoplayPref: O.b,
					activeModalId: y.a,
					currentUser: O.i,
					hideNSFWPref: O.y,
					flairStyleTemplate: q.P,
					isCurrentUserProfilePost: _.h,
					isLoggedIn: O.G,
					language: O.P,
					isActive: _.g,
					isPostChainDismissed: g.c,
					isPostChained: g.d,
					moderatorPermissions: P.i,
					modModeEnabled: q.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: _.K,
					posts: me,
					postHeightVariant: ie,
					postIds: ue,
					showEditFlair: ae.a,
					subredditOrProfile: _.W,
					userIsOp: O.fb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(m.d)({
								listingKey: s,
								listingName: o,
								postId: r
							}))
						},
						handleVote: t => {
							const s = t === x.a.upvoted ? Object(u.S)(r) : Object(u.s)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.Q)(r)),
						onOpenReportsDropdown: t => e(Object(b.h)({
							tooltipId: t
						}))
					}
				}),
				he = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: n,
						currentUser: i,
						eventFactory: m,
						flairStyleTemplate: u,
						forceLoadMedia: b,
						hideNSFWPref: x,
						inSubredditOrProfile: y = !1,
						isCommentsPage: g,
						isCurrentUserProfilePost: P,
						isFrontpage: _,
						isLoggedIn: O,
						isOverlay: H,
						isPostChainDismissed: U,
						isPostChained: V,
						isTopicPage: z,
						language: Z,
						listingKey: q,
						listingName: se,
						moderatorPermissions: oe,
						modModeEnabled: re,
						onClickPost: ne,
						onIgnoreReports: ie,
						onOpenReportsDropdown: ae,
						poll: de,
						pollResult: le,
						post: me,
						postHeightVariant: ue,
						scrollerItemRef: be,
						showEditFlair: he,
						subredditOrProfile: fe,
						userIsOp: ve
					} = e, xe = !!e.redditStyle || !!e["data-redditstyle"], ye = xe ? void 0 : u, ge = Object(l.a)(oe), Pe = re && ge, _e = Object(d.a)(oe), Oe = Object(c.a)(oe), Ce = Object(M.c)(me), we = !!me.media && me.media.type === h.n.RTJSON, je = ve && we, Se = s ? s - F.a : void 0, Ee = !!le && !!Object.keys(le.options).filter(e => le.options[e].userSelected).length, Te = !(_ && O || z), ke = (e => e === te.hb.OnlyTitles)(ue) && !Object($.a)(me), Ne = (e => e === te.hb.MediumHeight)(ue) && !Object($.a)(me), Ie = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(v.k)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							n = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(v.k)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: r
						}
					})(e), Le = r.a.createElement(B.a, {
						className: Object(C.a)(pe.a.container, n, ce.a.largeAndMediumPostStyles, ce.a.largeAndMediumActiveStyles, Object(p.a)(e), {
							[ce.a.mUseRedditTheme]: xe,
							promotedvideolink: me.isSponsored && !(me.media && h.a.has(me.media.type)),
							[pe.a.topCompactPost]: Ie && Ie.hasTopCompactPostStyles,
							[pe.a.bottomCompactPost]: Ie && Ie.hasBottomCompactPostStyles
						}),
						isOverlay: H,
						style: Object(p.b)(e.flairStyleTemplate),
						post: me,
						onClick: ne,
						onPostContentClick: o,
						eventFactory: m
					}, r.a.createElement(G.a, {
						model: me,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ye,
						redditStyle: xe
					}), r.a.createElement(R.a, {
						className: Object(C.a)(pe.a.backgroundWrapper, {
							[pe.a.isEvent]: Object(ee.a)(me)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ye,
						post: me,
						redditStyle: xe
					}, r.a.createElement(T.a, {
						post: me,
						language: Z
					}), Ie && Ie.showPinnnedHeader && r.a.createElement(K, null), r.a.createElement(X.a, {
						className: pe.a.postTopLine,
						hideNSFWPref: x,
						iconClassName: pe.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!g,
						isCompactPinnedPost: !!Ie,
						isCurrentUserProfilePost: P,
						isOverlay: !!H,
						isTopicPage: !!z,
						language: Z,
						post: me,
						shouldShowSubscribeButton: Te,
						showSubreddit: !y && !me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: fe
					}), r.a.createElement(J.c, {
						className: pe.a.postTitle,
						post: me,
						redditStyle: xe,
						size: J.b.Large,
						titleColor: ye && ye.postTitleColor,
						isOverlay: H
					}), me.source && !me.isSponsored && r.a.createElement(Q.a, {
						className: pe.a.sourceLink,
						post: me
					}), r.a.createElement("div", {
						className: Object(C.a)(pe.a.postMediaWrapper, {
							[pe.a.votedContent]: Ee
						})
					}, !Ie && r.a.createElement(W.a, {
						isListing: !0,
						isMediumHeight: Ne,
						isNotCardView: !!H,
						isTitleOnly: ke,
						showCentered: !0,
						flairStyleTemplate: ye,
						post: me,
						availableWidth: Se,
						shouldLoad: b,
						scrollerItemRef: be,
						autoplayPref: t
					})), de && r.a.createElement(N.a, {
						className: Object(C.a)(pe.a.proposal, {
							[pe.a.mHasNotVoted]: !le,
							[pe.a.mPollIsClosed]: !!le && Object(f.e)(de, le),
							[pe.a.mGAPoll]: de.type === f.a.GA
						}),
						pollId: de.id,
						subredditId: me.belongsTo.id
					}), me.isMeta && !de && r.a.createElement(I.a, {
						className: pe.a.noProposal
					}), me.source && me.source.url && me.isSponsored && r.a.createElement(w.a, {
						className: pe.a.adLinkWrapper
					}, r.a.createElement(Y.a, {
						href: me.source.url.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						source: me.source
					}, me.source.displayText), me.callToAction && r.a.createElement(j.a, {
						href: me.source.url.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						source: me.source
					}, me.callToAction)), re && ge && Ce && r.a.createElement(A.a, {
						language: Z,
						onIgnoreReports: ie,
						reportable: me
					}), r.a.createElement(L.d, {
						postId: me.id
					}), r.a.createElement("div", {
						className: pe.a.flatListContainer
					}, r.a.createElement(S.a, {
						className: pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ye,
						model: me,
						onVoteClick: e.handleVote
					}), r.a.createElement(k.c, {
						currentUser: i,
						hasModFlairPerms: _e,
						hasModFullPerms: Oe,
						hasModPostPerms: ge,
						isLargePost: !0,
						isOverlay: !!H,
						language: Z,
						modModeEnabled: re,
						onIgnoreReports: ie,
						onOpenReportsDropdown: ae,
						post: me,
						showEditPost: je,
						showEditFlair: he,
						useFlatlistBreakpoints: Object(D.h)({
							editPost: !1,
							save: !Pe,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(r.a.Fragment, null, Le, V && !U && r.a.createElement(E.a, {
						className: pe.a.chain,
						listingKey: q,
						listingName: se,
						postId: me.id
					}))
				});
			t.default = be(Object(Z.b)(he))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(n.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(i.a, Object.assign({}, e, {
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
				r = s.n(o),
				n = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/components/PostMeta/index.m.less"),
				y = s.n(x);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: x,
					isOverlay: g,
					isTopicPage: P,
					language: _,
					post: O,
					shouldShowSubscribeButton: C,
					subredditOrProfile: w,
					tooltipType: j
				} = e, S = !!P;
				return r.a.createElement("div", {
					className: y.a.metaContainer
				}, !o && !O.isSponsored && w && r.a.createElement(a.a, {
					postId: O.id,
					subredditName: w.name
				}, r.a.createElement(m.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: w.url
				}, w.displayText)), w && w.isQuarantined && r.a.createElement(p.a, null), !o && !O.isSponsored && w && C && !x && r.a.createElement(u.a, {
					getEventFactory: e => Object(f.f)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(v.e)(w) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: O.id,
					small: !0
				}), !o && !O.isSponsored && r.a.createElement(h.b, null), !o && !O.isSponsored && r.a.createElement(d.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), r.a.createElement(l.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					language: _,
					post: O,
					tooltipType: j
				}), r.a.createElement(c.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					language: _,
					post: O,
					tooltipType: j
				}), w && r.a.createElement(i.a, {
					className: y.a.donationAmount,
					contentId: O.id,
					subredditId: w.id
				}), !S && r.a.createElement(n.a, {
					hideCta: s,
					isOverlay: g,
					thing: O,
					tooltipType: j
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: m,
					redditStyle: u
				} = e, b = "upvote-button-".concat(t.id);
				return r.a.createElement(n.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: u
				}, o && r.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), r.a.createElement(i.a, {
					flairStyleTemplate: m,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: b
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(g);
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: g,
					inSubredditOrProfile: O,
					isCommentsPage: C,
					isCompactPinnedPost: w,
					isCurrentUserProfilePost: j,
					isOverlay: S,
					isTopicPage: E,
					language: T,
					post: k,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: I,
					showCornerOutboundLink: L,
					showSubreddit: A,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, B = C && N, F = E;
				return r.a.createElement(_, {
					className: t
				}, A && R && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && r.a.createElement(p.b, {
					className: Object(n.a)(P.a.subredditIcon, g),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, A && r.a.createElement(d.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), r.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: S ? l.c.Lightbox : void 0,
					language: T,
					post: k,
					showSub: A,
					subredditOrProfile: R
				}), r.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: O,
					language: T,
					isCompactPinnedPost: w,
					post: k,
					tooltipType: S ? l.c.Lightbox : void 0
				}), R && r.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: k.id,
					subredditId: R.id
				}), !F && r.a.createElement(i.a, {
					forceShowAllAwards: C,
					isOverlay: S,
					showAwarders: B,
					tooltipType: S ? l.c.Lightbox : void 0,
					thing: k
				})), R && A && I && !j && r.a.createElement(u.a, {
					getEventFactory: e => Object(f.f)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(y.e)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: k.id
				}, "Subscribe"), L && r.a.createElement(h.a, {
					className: P.a.OutboundLink,
					isSponsored: k.isSponsored,
					href: Object(x.A)(e.post),
					source: k.source
				}, r.a.createElement(v.a, {
					className: P.a.outboundLinkIcon
				})))
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(p);
			const u = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => n.a.createElement("div", {
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
			t.a = u(Object(a.a)(b))
		}
	}
]);
//# sourceMappingURL=reddit-components-LargePost.beb66b1768dcc16c44a5.js.map