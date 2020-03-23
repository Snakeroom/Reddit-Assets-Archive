// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.a0c93990b139fc771f2c.js
// Retrieved at 3/23/2020, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-dom/index.js"),
				a = (s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, o) {
					return i(e[o], t[o])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, s = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							s = t[0],
							o = void 0 === s ? "0px" : s,
							r = t[1],
							n = void 0 === r ? o : r,
							i = t[2],
							d = void 0 === i ? o : i,
							c = t[3];
						return o + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(s !== t.root || o !== t.rootMargin || i(r, t.thresholds))) return t
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
				x = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return x.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							x.errorReporter = e
						}
					}
				});

			function h(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var g = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				_ = Object.prototype,
				E = _.hasOwnProperty,
				O = _.toString,
				w = function(e) {
					return g.reduce((function(t, s) {
						if (E.call(e, s)) {
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
						return v(h(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(h(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var o = s.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), v(h(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(w(t.props)), t.target = t.targetNode, e = h(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(h(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var s = d.get(e.observer);
									s.delete(e) && (s.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(h(t), e)
						})), v(h(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					s = e, (t = o).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
					var a = o.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = y.some((function(s) {
							return i(t.props[s], e[s])
						}));
						return s && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), s
					}, a.componentDidUpdate = function(e, t, s) {
						var o = !1;
						s || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (s || o) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? r.a.cloneElement(r.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, o
				}(r.a.Component);
			v(j, "displayName", "IntersectionObserver"), s.d(t, "a", (function() {
				return j
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function n() {}
			n.resetWarningCache = r, e.exports = function() {
				function e(e, t, s, r, n, a) {
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
						f = !n && !l && /macintosh/i.test(t),
						h = !a && !p && !m && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !y && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
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
					}, v ? (r.msedge = e, r.version = v) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: v
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
					} : a ? r = {
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
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : E ? (r.xbox = e, r.osname = "Xbox") : x ? (r.windows = e, r.osname = "Windows") : h && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (r.osversion = O);
					var w = !r.windows && O.split(".")[0];
					return y || d || "ipad" == n || a && (3 == w || w >= 4 && !_) || r.silk ? r.tablet = e : (_ || "iphone" == n || "ipod" == n || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function a(e, o, r) {
					var a = s;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([i, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = n, s.check = function(e, t, s) {
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
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? o : r;
				return s && i(e, t, s) && (t = void 0), d(e, n(t, 3))
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
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? o : a,
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
				return Ne
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				g = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/postFlair.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AwardBadges/index.tsx"),
				k = s("./src/reddit/components/CallToActionButton/index.tsx"),
				N = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = s("./src/reddit/components/CommentsLink/index.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				R = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/ExpandoButton/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				B = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				D = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				H = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				W = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				V = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				U = s("./src/reddit/components/ModModeReports/index.tsx"),
				K = s("./src/reddit/components/ModModeReports/helpers.ts"),
				z = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				G = s("./src/reddit/components/PopupPortal/index.tsx"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				X = s("./src/reddit/components/PostBadges/index.tsx"),
				Z = s("./src/reddit/components/PostContainer/index.tsx"),
				Y = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Q = s("./src/reddit/components/PostMedia/index.tsx"),
				$ = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				ee = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				te = s("./src/reddit/components/PostTitle/index.tsx"),
				se = s("./src/reddit/components/PostTopMeta/index.tsx"),
				oe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				re = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ae = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ie = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				de = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ce = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/controls/Checkbox/index.tsx"),
				pe = s("./src/reddit/controls/MetaData/index.tsx"),
				me = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ue = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				be = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				xe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				he = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ve = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ye = s.n(ge),
				_e = s("./src/reddit/components/CompactPost/index.m.less"),
				Ee = s.n(_e);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var we = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const je = e => {
					var {
						isCompact: t
					} = e, s = we(e, ["isCompact"]);
					return r.a.createElement(A.a, Oe({
						className: Object(c.a)(Ee.a.responsiveExpandoButton, {
							[Ee.a.mHideAboveSmallTablets]: !!t,
							[Ee.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				Pe = Object(n.b)(() => Object(i.c)({
					activeModalId: E.a,
					crosspost: P.c,
					currentUser: C.i,
					flairStyleTemplate: ce.P,
					isActive: P.h,
					isExpanded: P.k,
					language: C.O,
					layout: ce.L,
					moderatorPermissions: w.i,
					modModeEnabled: ce.N,
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
						postId: r
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: r
							} = t;
							return e(Object(y.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const s = t === v.a.upvoted ? Object(g.cb)(r) : Object(g.x)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(g.ab)(r)),
						onOpenReportsDropdown: t => e(Object(_.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: r
						})
					}
				}));
			class Ce extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: n,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						isCheckboxSelected: p = !1,
						isCommentsPage: v,
						isCommentPermalink: g,
						isExpanded: y,
						isInAdLeftSidebarExperiment: _,
						isOverlay: E,
						isProfilePostListing: O,
						inSubredditOrProfile: w = !1,
						language: j,
						layout: P,
						moderatorPermissions: C,
						modModeEnabled: A,
						onClickPost: Q,
						onFlairChanged: re,
						onIgnoreReports: ne,
						poll: de,
						post: ce,
						subredditOrProfile: pe,
						userIsOp: ge,
						hideModTools: _e,
						scrollerItemRef: Oe,
						showBulkActionCheckbox: we,
						showEditFlair: je,
						toggleCheckbox: Pe,
						tooltipType: Ce,
						sendEvent: Se
					} = this.props, Ne = !!ce.media && ce.media.type === f.n.RTJSON, Me = ge && Ne, Le = Object(Y.b)(ce.id, E), Re = Object(xe.a)(C), Ae = Object(ue.a)(C), Fe = Object(be.a)(C), Be = "-mod-actions-menu-".concat(ce.id), De = "voting-arrows-".concat(ce.id), He = !!n && Object(h.f)(n) === ce.author, We = Object(K.c)(ce), Ve = Object(B.a)("View--Reports", ce.id, Ce), Ue = Object(K.a)(ce), Ke = !(E || v || g), ze = ce.media && ce.media.type === f.n.LIVEVIDEO, {
						moderationPrompt: Ge
					} = ce, Je = e => Se(Object(x.f)(ce.id, e)), Xe = r.a.createElement(Z.a, {
						className: Object(c.a)(ye.a.compactPostStyles, Ee.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: E,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ce,
						onClick: Q,
						eventFactory: a
					}, r.a.createElement("div", {
						className: Ee.a.compactWrapper
					}, r.a.createElement("div", {
						className: Ee.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: Ee.a.leftRail,
						style: {
							borderColor: Object(q.c)({
								isRemoved: !!ce.bannedBy,
								isReported: Object(u.a)(ce),
								isSponsored: ce.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: _
							})
						}
					}, we && r.a.createElement(le.a, {
						className: Ee.a.bulkActionCheckbox,
						isCheckboxSelected: p,
						toggleCheckbox: Pe
					}), r.a.createElement(ae.a, {
						className: Ee.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: ce,
						onVoteClick: l
					}), r.a.createElement(M.a, {
						className: Ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: ce,
						onVoteClick: l,
						upvoteTooltipId: De
					}), Ge && r.a.createElement(G.b, {
						rightOf: De
					}, "survey" === Ge ? r.a.createElement(V.a, {
						post: ce,
						subredditName: pe.name,
						isOverlay: !!E
					}) : r.a.createElement(W.a, {
						post: ce,
						subredditName: pe.name,
						isOverlay: !!E
					})))), r.a.createElement(J.a, {
						className: Object(c.a)(Ee.a.content, {
							[Ee.a.isEvent]: Object(fe.a)(ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(R.a, {
						isCompactMode: !0,
						language: j,
						post: ce
					}), r.a.createElement("div", {
						className: Ee.a.compactPostRow
					}, !_e && ke(ce, o, y, !1), !w && !ce.isSponsored && r.a.createElement(D.h, {
						type: ce.belongsTo.type,
						id: ce.belongsTo.id
					}), r.a.createElement("div", {
						className: Ee.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(te.c, {
						post: ce,
						poll: de,
						size: te.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Ie(ce, pe, j), r.a.createElement(se.d, {
						className: Ee.a.postTopMeta,
						flairStyleTemplate: i,
						language: j,
						post: ce,
						showSub: !!pe && !w && !ce.isSponsored,
						subredditOrProfile: pe
					}), r.a.createElement(X.a, {
						className: Ee.a.postBadges,
						displayText: pe ? pe.displayText : null,
						inSubredditOrProfile: w,
						language: j,
						post: ce
					}), pe && r.a.createElement(L.a, {
						className: Ee.a.donationAmount,
						contentId: ce.id,
						subredditId: pe.id
					}), r.a.createElement(S.a, {
						isOverlay: E,
						tooltipType: Ce,
						thing: ce
					})), Ke && !ze && r.a.createElement("div", null, r.a.createElement(N.a, {
						className: Ee.a.liveDiscussionIcon,
						isMod: Re,
						postId: ce.postId
					})), r.a.createElement("div", {
						className: Ee.a.flatList
					}, r.a.createElement(I.a, {
						className: Ee.a.commentsLink,
						hasModPostPerms: Re,
						isCommentsPage: v,
						isCommentPermalink: g,
						isOverlay: E,
						postId: ce.id,
						modModeEnabled: A,
						numComments: ce.numComments,
						type: m.g.Compact
					}), r.a.createElement(z.a, {
						className: Ee.a.modToolsFlatlist,
						isOverlay: !1,
						layout: P,
						modModeEnabled: A,
						post: ce,
						sendEvent: Se,
						showIconsOnly: !0
					}), Re && r.a.createElement(H.a, {
						dropdownId: Be,
						onClick: () => Je("post_mod_action_menu")
					}, r.a.createElement(F.b, null), r.a.createElement($.a, {
						canEditFlair: Ae && je,
						hasModPostPerms: Re,
						hasModFullPerms: Fe,
						isOverlay: !1,
						isPostAuthor: He,
						language: j,
						modModeEnabled: A,
						post: ce,
						tooltipId: Be
					})), Re && We && !A && r.a.createElement(oe.c, {
						text: "".concat(Ue),
						onClick: () => {
							this.props.onOpenReportsDropdown(Ve), Je("post_report_menu")
						},
						id: Ve
					}, r.a.createElement(ie.a, {
						model: ce,
						onIgnoreReports: () => {
							ne(), Je(ce.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ve
					}), ce.ignoreReports ? r.a.createElement(he.a, null) : r.a.createElement(ve.a, null)), r.a.createElement(ee.g, {
						currentProfileName: s,
						isCommentsPage: v,
						isOverlay: !1,
						isProfilePostListing: O,
						layout: P,
						permalink: ce.permalink,
						postId: ce.postId,
						sendEvent: Se,
						showEditPost: Me,
						showEditFlair: je,
						dropdownId: "".concat(ce.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(ee.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !_e && ke(ce, o, y, !0))), ce.source && ce.source.url && ce.isSponsored && r.a.createElement(T.a, {
						className: Ee.a.adLinkWrapper
					}, r.a.createElement(me.a, {
						href: ce.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.source.displayText), ce.callToAction && r.a.createElement(k.a, {
						href: ce.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source,
						isNotCardView: !0
					}, ce.callToAction)), A && Re && We && r.a.createElement("div", {
						className: Ee.a.compactPostRow
					}, r.a.createElement(U.a, {
						language: j,
						onIgnoreReports: ne,
						reportable: ce
					})), r.a.createElement(D.d, {
						postId: ce.id
					}))), y && r.a.createElement(Te, {
						post: ce,
						scrollerItemRef: Oe,
						flairStyleTemplate: i
					}), e === Le && r.a.createElement(Y.a, {
						flairs: ce.flair,
						subredditId: ce.belongsTo.id,
						modalId: Le,
						onFlairChanged: re
					}));
					return r.a.createElement(r.a.Fragment, null, Xe)
				}
			}
			const Te = e => r.a.createElement(J.a, {
					className: Object(c.a)(e.className, Ee.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: Ee.a.crosspostMediaWrapper
				}, Se(e.post, e.scrollerItemRef)) : Se(e.post, e.scrollerItemRef)),
				Se = (e, t) => r.a.createElement(Q.a, {
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
				ke = (e, t, s, o) => r.a.createElement(je, {
					crosspost: t,
					isCompact: o,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Ne = e => r.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(ne.b, {
					className: Ee.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ie = (e, t, s) => r.a.createElement("div", {
					className: Ee.a.responsiveMeta
				}, r.a.createElement(pe.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), r.a.createElement(pe.c, null), Object(pe.d)(e.numComments, s), r.a.createElement(pe.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(pe.a, null, t.displayText)), e.isSponsored && [r.a.createElement(re.a, {
					key: "label"
				}), r.a.createElement(pe.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(pe.a, null, " Posted by "), r.a.createElement(se.b, {
					post: e
				}));
			t.default = Pe(Object(p.c)(Object(de.b)(Object(l.a)(Ce))))
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
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(g),
				_ = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = _.a.div("Container", y.a),
				w = _.a.div("PostMetaWrapper", y.a),
				j = _.a.wrapped(u.c, "PostTitle", y.a),
				P = _.a.div("FlatList", y.a),
				C = _.a.div("FlatItem", y.a),
				T = _.a.span("FlatListDotSpacer", y.a),
				S = _.a.wrapped(O, "LinkContainer", y.a),
				k = _.a.div("Content", y.a),
				N = _.a.div("ThumbnailContainer", y.a),
				I = Object(i.c)({
					isCurrentUserProfilePost: h.i,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Ab.TOPIC),
					language: v.O,
					post: h.M,
					shouldOpenPostInNewTab: v.S,
					subreddit: h.Y
				}),
				M = Object(n.b)(I);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
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
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					l = t;
				return a && !a.media ? r.a.createElement(S, {
					className: l
				}, r.a.createElement(k, null, r.a.createElement(w, null, r.a.createElement(m.a, c)), L(a), a.source && r.a.createElement(b.a, {
					post: a
				}), A(e)), B(e)) : r.a.createElement(O, {
					className: l
				}, r.a.createElement(w, null, r.a.createElement(m.a, c)), L(a), R(e), A(e))
			});
			const L = e => r.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(p.a, E({}, o, {
						className: y.a.mediaContainer
					})))
				},
				A = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: o
					} = s;
					return r.a.createElement(P, null, r.a.createElement(C, null, Object(d.b)(t, "posts.points.noun", o, {
						count: Object(l.b)(o)
					})), r.a.createElement(T, null), r.a.createElement(C, null, F(e)))
				},
				F = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: o
					} = e, {
						numComments: n
					} = s;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: o ? "_blank" : void 0
					}, Object(d.b)(t, "posts.comments.noun", n, {
						count: Object(l.b)(n)
					}))
				},
				B = e => r.a.createElement(N, null, r.a.createElement(x.a, {
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
			var g = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(f.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				y = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				T = s.n(C);
			const S = Object(n.b)(null, (e, t) => ({
					toggle: () => e(Object(l.y)({
						postId: t.post.id
					}))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(T.a.icon, T.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case P.n.GIFVIDEO:
							return r.a.createElement(_.a, {
								className: s
							});
						case P.n.IMAGE:
							return r.a.createElement(w.a, {
								className: s
							});
						case P.n.TEXT:
						case P.n.RTJSON:
							return r.a.createElement(j.a, {
								className: s
							});
						case P.n.VIDEO:
							return r.a.createElement(y.a, {
								className: s
							});
						case P.n.EMBED:
						default:
							return r.a.createElement(E.a, {
								className: s
							})
					}
				};
			t.a = S(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: n,
					post: l,
					toggle: u,
					useMediaIcons: f
				} = e, h = s || l, v = o && !!s;
				return h.media && !(("rtjson" === h.media.type || "text" === h.media.type) && !Object(m.a)(h)) ? r.a.createElement("button", {
					"aria-expanded": n,
					"aria-haspopup": !0,
					"aria-label": Object(c.c)("Expand content"),
					className: Object(i.a)(t, T.a.outer),
					"data-click-id": n ? "expando_close" : "expando_open",
					onClick: u
				}, n ? r.a.createElement(b.a, {
					className: T.a.icon
				}) : f ? r.a.createElement(r.a.Fragment, null, k(h.media && h.media.type, v), r.a.createElement(x.a, {
					className: Object(i.a)(T.a.icon, T.a.showOnHover)
				})) : r.a.createElement(x.a, {
					className: T.a.icon
				})) : h.source && h.source.url ? r.a.createElement(p.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(i.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					href: h.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(O.a, {
					className: Object(i.a)(T.a.icon, T.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(i.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(h.permalink),
					rel: "nofollow"
				}, r.a.createElement(g, {
					className: T.a.icon
				}))
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
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
				}) : r.a.createElement(a.a, Object.assign({}, e, {
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
				g = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: y,
					isTopicPage: _,
					language: E,
					post: O,
					shouldShowSubscribeButton: w,
					subredditOrProfile: j,
					tooltipType: P
				} = e, C = !!_;
				return r.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !O.isSponsored && j && r.a.createElement(i.a, {
					postId: O.id,
					subredditName: j.name
				}, r.a.createElement(m.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && r.a.createElement(p.a, null), !o && !O.isSponsored && j && w && !v && r.a.createElement(u.a, {
					getEventFactory: e => Object(f.f)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(h.e)(j) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: O.id,
					small: !0
				}), !o && !O.isSponsored && r.a.createElement(x.b, null), !o && !O.isSponsored && r.a.createElement(d.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), r.a.createElement(l.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: O,
					tooltipType: P
				}), r.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					language: E,
					post: O,
					tooltipType: P
				}), j && r.a.createElement(a.a, {
					className: g.a.donationAmount,
					contentId: O.id,
					subredditId: j.id
				}), !C && r.a.createElement(n.a, {
					hideCta: s,
					isOverlay: y,
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				return p
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(d),
				l = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const p = a.a.span("metaText", c.a),
				m = e => n.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: r,
						useUpvotes: a
					} = e, d = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(i.b)(r),
						m = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(r, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? m : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(r, "number", c)], {
							hk: "gf67v"
						});
					return n.a.createElement(p, d, u)
				},
				b = (e, t) => n.a.createElement(p, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
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
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoArrowCollapse"), " ").concat(e.className),
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
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoArrowExpand"), " ").concat(e.className),
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
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = d
		}
	}
]);
//# sourceMappingURL=reddit-components-CompactPost.a0c93990b139fc771f2c.js.map