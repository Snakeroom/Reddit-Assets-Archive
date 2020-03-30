// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.3798991389f08a347ddd.js
// Retrieved at 3/30/2020, 7:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-dom/index.js"),
				i = (s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, o) {
					return a(e[o], t[o])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, s = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							s = t[0],
							o = void 0 === s ? "0px" : s,
							r = t[1],
							n = void 0 === r ? o : r,
							a = t[2],
							d = void 0 === a ? o : a,
							c = t[3];
						return o + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(s !== t.root || o !== t.rootMargin || a(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var s = d.get(e);
				if (s)
					for (var o, r = s.values(); o = r.next().value;)
						if (o.target === t.target) return o;
				return null
			}

			function p(e, t) {
				for (var s = 0; s < e.length; s++) {
					var o = l(t, e[s]);
					o && o.handleChange(e[s])
				}
			}

			function m(e) {
				return c(e) || new IntersectionObserver(p, e)
			}
			var u = s("./node_modules/invariant/browser.js"),
				b = s.n(u),
				h = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function x(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function f(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var g = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				P = Object.prototype,
				_ = P.hasOwnProperty,
				O = P.toString,
				C = function(e) {
					return g.reduce((function(t, s) {
						if (_.call(e, s)) {
							var o = "root" === s && "[object String]" === O.call(e[s]);
							t[s] = o ? document.querySelector(e[s]) : e[s]
						}
						return t
					}), {})
				},
				j = function(e) {
					var t, s;

					function o() {
						for (var t, s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
						return f(x(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), f(x(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var o = s.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), f(x(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(C(t.props)), t.target = t.targetNode, e = x(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), f(x(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var s = d.get(e.observer);
									s.delete(e) && (s.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(x(t), e)
						})), f(x(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					s = e, (t = o).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
					var i = o.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = y.some((function(s) {
							return a(t.props[s], e[s])
						}));
						return s && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), s
					}, i.componentDidUpdate = function(e, t, s) {
						var o = !1;
						s || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (s || o) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? r.a.cloneElement(r.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, o
				}(r.a.Component);
			f(j, "displayName", "IntersectionObserver"), s.d(t, "a", (function() {
				return j
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function n() {}
			n.resetWarningCache = r, e.exports = function() {
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
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: n,
					resetWarningCache: r
				};
				return s.PropTypes = s, s
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
						v = !n && !l && /macintosh/i.test(t),
						x = !i && !p && !m && !u && /linux/i.test(t),
						f = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						P = !y && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, f ? (r.msedge = e, r.version = f) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: f
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
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
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, g && (r.version = g)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, g && (r.version = g)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					return y || d || "ipad" == n || i && (3 == C || C >= 4 && !P) || r.silk ? r.tablet = e : (P || "iphone" == n || "ipod" == n || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(g),
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
			const O = P.a.div("Container", y.a),
				C = P.a.div("PostMetaWrapper", y.a),
				j = P.a.wrapped(u.c, "PostTitle", y.a),
				w = P.a.div("FlatList", y.a),
				S = P.a.div("FlatItem", y.a),
				T = P.a.span("FlatListDotSpacer", y.a),
				E = P.a.wrapped(O, "LinkContainer", y.a),
				N = P.a.div("Content", y.a),
				k = P.a.div("ThumbnailContainer", y.a),
				I = Object(d.c)({
					isCurrentUserProfilePost: x.j,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== v.Ab.TOPIC),
					language: f.O,
					post: x.N,
					shouldOpenPostInNewTab: f.S,
					subreddit: x.Z
				}),
				L = Object(i.b)(I);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: r,
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
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					l = t;
				return i && !i.media ? n.a.createElement(E, {
					className: l
				}, n.a.createElement(N, null, n.a.createElement(C, null, n.a.createElement(m.a, c)), M(i), i.source && n.a.createElement(b.a, {
					post: i
				}), R(e)), F(e)) : n.a.createElement(O, {
					className: l
				}, n.a.createElement(C, null, n.a.createElement(m.a, c)), M(i), A(e), R(e))
			});
			const M = e => n.a.createElement(j, {
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
						className: y.a.mediaContainer
					})))
				},
				R = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return n.a.createElement(w, null, n.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), n.a.createElement(T, null), n.a.createElement(S, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return n.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				F = e => n.a.createElement(k, null, n.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const i = Object(o.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: n.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
				v = s("./src/reddit/models/Poll/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/inFeedChaining.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				w = s("./src/reddit/components/CallToActionButton/index.tsx"),
				S = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				E = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				N = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/Governance/Proposal/async.ts"),
				I = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostLeftRail/index.tsx"),
				D = s("./src/reddit/components/PostMedia/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				U = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				V = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = s.n(V);
			var K = () => r.a.createElement("div", {
					className: z.a.container
				}, r.a.createElement(H.a, {
					className: z.a.pinnedIcon
				}), r.a.createElement("span", {
					className: z.a.metaText
				}, r.a.createElement(U.c, null, "pinned by moderators"))),
				G = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				X = s("./src/reddit/components/PostTopLine/index.tsx"),
				Z = s("./src/reddit/components/SourceLink/index.tsx"),
				q = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				$ = s("./src/reddit/helpers/isCrosspost.ts"),
				ee = s("./src/reddit/helpers/postEvent.ts"),
				te = s("./src/reddit/constants/experiments.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(i.a)(_.T, e => e.some(oe.c)),
				ne = Object(i.a)(re, e => e),
				ie = (e, t) => Object(se.c)(e, {
					experimentName: te.I,
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
					return s ? Object(_.T)(e, {
						listingKey: s
					}) : void 0
				},
				ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(_.G)(e, {
						listingKey: s
					}) : void 0
				},
				be = Object(n.b)(() => Object(i.c)({
					autoplayPref: O.b,
					activeModalId: g.a,
					currentUser: O.i,
					hideNSFWPref: O.y,
					flairStyleTemplate: Q.Q,
					isCurrentUserProfilePost: _.j,
					isLoggedIn: O.G,
					language: O.O,
					isActive: _.i,
					isPostChainDismissed: y.c,
					isPostChained: y.d,
					moderatorPermissions: P.i,
					modModeEnabled: Q.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: _.N,
					posts: me,
					postHeightVariant: ie,
					postIds: ue,
					showEditFlair: ae.a,
					subredditOrProfile: _.Z,
					userIsOp: O.eb
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
							const s = t === f.a.upvoted ? Object(u.cb)(r) : Object(u.x)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.ab)(r)),
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
						hideNSFWPref: f,
						inSubredditOrProfile: g = !1,
						isCommentsPage: y,
						isCurrentUserProfilePost: P,
						isFrontpage: _,
						isLoggedIn: O,
						isOverlay: U,
						isPostChainDismissed: H,
						isPostChained: V,
						isTopicPage: z,
						language: q,
						listingKey: Q,
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
						subredditOrProfile: ve,
						userIsOp: xe
					} = e, fe = !!e.redditStyle || !!e["data-redditstyle"], ge = fe ? void 0 : u, ye = Object(l.a)(oe), Pe = re && ye, _e = Object(d.a)(oe), Oe = Object(c.a)(oe), Ce = Object(A.c)(me), je = !!me.media && me.media.type === h.n.RTJSON, we = xe && je, Se = s ? s - F.a : void 0, Te = !!le && !!Object.keys(le.options).filter(e => le.options[e].userSelected).length, Ee = !(_ && O || z), Ne = (e => e === te.sb.OnlyTitles)(ue) && !Object($.a)(me), ke = (e => e === te.sb.MediumHeight)(ue) && !Object($.a)(me), Ie = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(x.k)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							n = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(x.k)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: r
						}
					})(e), Le = r.a.createElement(B.a, {
						className: Object(C.a)(pe.a.container, n, ce.a.largeAndMediumPostStyles, ce.a.largeAndMediumActiveStyles, Object(p.a)(e), {
							[ce.a.mUseRedditTheme]: fe,
							promotedvideolink: me.isSponsored && !(me.media && h.a.has(me.media.type)),
							[pe.a.topCompactPost]: Ie && Ie.hasTopCompactPostStyles,
							[pe.a.bottomCompactPost]: Ie && Ie.hasBottomCompactPostStyles
						}),
						isOverlay: U,
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
						flairStyleTemplate: ge,
						redditStyle: fe,
						subreddit: ve
					}), r.a.createElement(R.a, {
						className: Object(C.a)(pe.a.backgroundWrapper, {
							[pe.a.isEvent]: Object(ee.a)(me)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ge,
						post: me,
						redditStyle: fe
					}, r.a.createElement(E.a, {
						post: me,
						language: q
					}), Ie && Ie.showPinnnedHeader && r.a.createElement(K, null), r.a.createElement(X.a, {
						className: pe.a.postTopLine,
						hideNSFWPref: f,
						iconClassName: pe.a.postTopLineIcon,
						inSubredditOrProfile: g,
						isCommentsPage: !!y,
						isCompactPinnedPost: !!Ie,
						isCurrentUserProfilePost: P,
						isOverlay: !!U,
						isTopicPage: !!z,
						language: q,
						post: me,
						shouldShowSubscribeButton: Ee,
						showSubreddit: !g && !me.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ve
					}), r.a.createElement(J.c, {
						className: pe.a.postTitle,
						post: me,
						redditStyle: fe,
						size: J.b.Large,
						titleColor: ge && ge.postTitleColor,
						isOverlay: U
					}), me.source && !me.isSponsored && !(me.media && Object(h.C)(me.media)) && r.a.createElement(Z.a, {
						className: pe.a.sourceLink,
						post: me
					}), r.a.createElement("div", {
						className: Object(C.a)(pe.a.postMediaWrapper, {
							[pe.a.votedContent]: Te
						})
					}, !Ie && r.a.createElement(D.a, {
						isListing: !0,
						isMediumHeight: ke,
						isNotCardView: !!U,
						isTitleOnly: Ne,
						showCentered: !0,
						flairStyleTemplate: ge,
						post: me,
						availableWidth: Se,
						shouldLoad: b,
						scrollerItemRef: be,
						autoplayPref: t
					})), de && r.a.createElement(k.a, {
						className: Object(C.a)(pe.a.proposal, {
							[pe.a.mHasNotVoted]: !le,
							[pe.a.mPollIsClosed]: !!le && Object(v.e)(de, le),
							[pe.a.mGAPoll]: de.type === v.a.GA
						}),
						pollId: de.id,
						subredditId: me.belongsTo.id
					}), me.isMeta && !de && r.a.createElement(I.a, {
						className: pe.a.noProposal
					}), me.source && me.source.url && me.isSponsored && r.a.createElement(j.a, {
						className: pe.a.adLinkWrapper
					}, r.a.createElement(Y.a, {
						href: me.source.url.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source
					}, me.source.displayText), me.callToAction && r.a.createElement(w.a, {
						href: me.source.url.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source
					}, me.callToAction)), re && ye && Ce && r.a.createElement(M.a, {
						language: q,
						onIgnoreReports: ie,
						reportable: me
					}), r.a.createElement(L.d, {
						postId: me.id
					}), r.a.createElement("div", {
						className: pe.a.flatListContainer
					}, r.a.createElement(S.a, {
						className: pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ge,
						model: me,
						onVoteClick: e.handleVote
					}), r.a.createElement(N.c, {
						currentUser: i,
						hasModFlairPerms: _e,
						hasModFullPerms: Oe,
						hasModPostPerms: ye,
						isLargePost: !0,
						isOverlay: !!U,
						language: q,
						modModeEnabled: re,
						onIgnoreReports: ie,
						onOpenReportsDropdown: ae,
						post: me,
						showEditPost: we,
						showEditFlair: he,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !Pe,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(r.a.Fragment, null, Le, V && !H && r.a.createElement(T.a, {
						className: pe.a.chain,
						listingKey: Q,
						listingName: se,
						postId: me.id
					}))
				});
			t.default = be(Object(q.b)(he))
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
				v = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				g = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: f,
					isOverlay: y,
					isTopicPage: P,
					language: _,
					post: O,
					shouldShowSubscribeButton: C,
					subredditOrProfile: j,
					tooltipType: w
				} = e, S = !!P;
				return r.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !O.isSponsored && j && r.a.createElement(a.a, {
					postId: O.id,
					subredditName: j.name
				}, r.a.createElement(m.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && r.a.createElement(p.a, null), !o && !O.isSponsored && j && C && !f && r.a.createElement(u.a, {
					getEventFactory: e => Object(v.f)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(x.e)(j) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: O.id,
					small: !0
				}), !o && !O.isSponsored && r.a.createElement(h.b, null), !o && !O.isSponsored && r.a.createElement(d.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), r.a.createElement(l.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					language: _,
					post: O,
					tooltipType: w
				}), r.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					language: _,
					post: O,
					tooltipType: w
				}), j && r.a.createElement(i.a, {
					className: g.a.donationAmount,
					contentId: O.id,
					subredditId: j.id
				}), !S && r.a.createElement(n.a, {
					hideCta: s,
					isOverlay: y,
					thing: O,
					tooltipType: w
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
				n = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				p = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: v,
					subreddit: x,
					isOverlay: f
				} = e, g = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return r.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(m.a)(t),
					isSponsored: !!Object(p.b)(t) && t.isSponsored,
					redditStyle: v
				}, o && r.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), r.a.createElement(c.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: v,
					upvoteTooltipId: g
				}), y && r.a.createElement(a.b, {
					rightOf: g
				}, "survey" === y ? r.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!f
				}) : r.a.createElement(n.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!f
				})))
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
				v = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(y);
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: y,
					inSubredditOrProfile: O,
					isCommentsPage: C,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: w,
					isOverlay: S,
					isTopicPage: T,
					language: E,
					post: N,
					publicAwardersEnabled: k,
					shouldShowSubscribeButton: I,
					showCornerOutboundLink: L,
					showSubreddit: M,
					showSubredditIcon: A,
					subredditOrProfile: R
				} = e, B = C && k, F = T;
				return r.a.createElement(_, {
					className: t
				}, M && R && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, A && r.a.createElement(p.b, {
					className: Object(n.a)(P.a.subredditIcon, y),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, M && r.a.createElement(d.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: S ? l.c.Lightbox : void 0,
					language: E,
					post: N,
					showSub: M,
					subredditOrProfile: R
				}), r.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: O,
					language: E,
					isCompactPinnedPost: j,
					post: N,
					tooltipType: S ? l.c.Lightbox : void 0
				}), R && r.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: N.id,
					subredditId: R.id
				}), !F && r.a.createElement(i.a, {
					forceShowAllAwards: C,
					isOverlay: S,
					showAwarders: B,
					tooltipType: S ? l.c.Lightbox : void 0,
					thing: N
				})), R && M && I && !w && r.a.createElement(u.a, {
					getEventFactory: e => Object(v.f)(N.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(g.e)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: N.id
				}, "Subscribe"), L && r.a.createElement(h.a, {
					className: P.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(f.A)(e.post),
					source: N.source
				}, r.a.createElement(x.a, {
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
//# sourceMappingURL=reddit-components-LargePost.3798991389f08a347ddd.js.map