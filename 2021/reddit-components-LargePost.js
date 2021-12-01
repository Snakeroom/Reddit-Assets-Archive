// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.daf6c3214addc88eb329.js
// Retrieved at 12/1/2021, 1:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, s) {
					return a(e[s], t[s])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, s = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							s = void 0 === n ? "0px" : n,
							r = t[1],
							o = void 0 === r ? s : r,
							a = t[2],
							c = void 0 === a ? s : a,
							d = t[3];
						return s + " " + o + " " + c + " " + (void 0 === d ? o : d)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = c.keys(); t = o.next().value;) {
					if (!(n !== t.root || s !== t.rootMargin || a(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var s, r = n.values(); s = r.next().value;)
						if (s.target === t.target) return s;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var s = l(t, e[n]);
					s && s.handleChange(e[n])
				}
			}

			function m(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var p = n("./node_modules/invariant/browser.js"),
				f = n.n(p),
				b = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return b.errorReporter || function(e) {
								return f()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							b.errorReporter = e
						}
					}
				});

			function x(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var E = ["root", "rootMargin", "threshold"],
				_ = ["root", "rootMargin", "threshold", "disabled"],
				g = Object.prototype,
				y = g.hasOwnProperty,
				O = g.toString,
				w = function(e) {
					return E.reduce((function(t, n) {
						if (y.call(e, n)) {
							var s = "root" === n && "[object String]" === O.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				S = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
						return v(x(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(x(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), v(x(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(w(t.props)), t.target = t.targetNode, e = x(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(x(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(x(t), e)
						})), v(x(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = s.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = _.some((function(n) {
							return a(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var s = !1;
						n || (s = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || s) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? r.a.cloneElement(r.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(r.a.Component);
			v(S, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, o, i) {
					if (i !== s) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: r
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function s(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !o && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						v = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = n(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !_ && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: E || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: E || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (r.msedge = e, r.version = v) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || E
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: E || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, E && (r.version = E)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, E && (r.version = E)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && E && (r.version = E)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : y ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? O = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? O = (O = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? O = (O = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? O = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? O = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? O = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (O = n(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (r.osversion = O);
					var w = !r.windows && O.split(".")[0];
					return _ || c || "ipad" == o || i && (3 == w || w >= 4 && !g) || r.silk ? r.tablet = e : (g || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function o(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = r(e, (function(e) {
							var n = t - s(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, r) {
					var i = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, s = null == e ? 0 : e.length; ++n < s;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return s(e, (function(e, s, r) {
					return n = !!t(e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, o) {
					n = s ? (s = !1, e) : t(n, e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayEvery.js"),
				r = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : r;
				return n && a(e, t, n) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				var t = e.getBoundingClientRect();
				return {
					width: t.width,
					height: t.height,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					y: t.top
				}
			}

			function o(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = o(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof o(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return r(l(e)).left + i(e).scrollLeft
			}

			function m(e) {
				return o(e).getComputedStyle(e)
			}

			function p(e) {
				var t = m(e),
					n = t.overflow,
					s = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + s)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, m = l(t),
					f = r(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || p(m)) && (h = (s = t) !== o(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((x = r(t)).x += t.clientLeft, x.y += t.clientTop) : m && (x.x = u(m))), {
					x: f.left + h.scrollLeft - x.x,
					y: f.top + h.scrollTop - x.y,
					width: f.width,
					height: f.height
				}
			}

			function b(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function h(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function x(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(h(t))
					}(e),
					s = "body" === d(n),
					r = o(n),
					i = s ? [r].concat(r.visualViewport || [], p(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(x(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function E(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function _(e) {
				for (var t = o(e), n = E(e); n && v(n) && "static" === m(n).position;) n = E(n);
				return n && "body" === d(n) && "static" === m(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = m(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var g = "top",
				y = "bottom",
				O = "right",
				w = "left",
				S = "auto",
				j = [g, y, O, w],
				C = "start",
				T = "end",
				N = "clippingParents",
				P = "viewport",
				k = "popper",
				I = "reference",
				A = j.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + T])
				}), []),
				L = [].concat(j, [S]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + T])
				}), []),
				M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function F(e) {
				var t = new Map,
					n = new Set,
					s = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(r) {
						n.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(s) {
							if (!n.has(s)) {
								var r = t.get(s);
								r && e(r)
							}
						})), s.push(r)
					}(e)
				})), s
			}
			var D = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function R() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function B(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					r = t.defaultOptions,
					o = void 0 === r ? D : r;
				return function(e, t, n) {
					void 0 === n && (n = o);
					var r, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, D), o),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						d = [],
						l = !1,
						u = {
							state: c,
							setOptions: function(n) {
								m(), c.options = Object.assign(Object.assign(Object.assign({}, o), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var r = function(e) {
									var t = F(e);
									return M.reduce((function(e, n) {
										return e.concat(t.filter((function(e) {
											return e.phase === n
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var n = e[t.name];
										return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
											options: Object.assign(Object.assign({}, n.options), t.options),
											data: Object.assign(Object.assign({}, n.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(s, c.options.modifiers)));
								return c.orderedModifiers = r.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										r = e.effect;
									if ("function" == typeof r) {
										var o = r({
											state: c,
											name: t,
											instance: u,
											options: s
										});
										d.push(o || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (R(t, n)) {
										c.rects = {
											reference: f(t, _(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < c.orderedModifiers.length; s++)
											if (!0 !== c.reset) {
												var r = c.orderedModifiers[s],
													o = r.fn,
													i = r.options,
													a = void 0 === i ? {} : i,
													d = r.name;
												"function" == typeof o && (c = o({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, s = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(r())
									}))
								}))), i
							}),
							destroy: function() {
								m(), l = !0
							}
						};
					if (!R(e, t)) return u;

					function m() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var U = {
				passive: !0
			};

			function V(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function Y(e) {
				var t, n = e.reference,
					s = e.element,
					r = e.placement,
					o = r ? V(r) : null,
					i = r ? W(r) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (o) {
					case g:
						t = {
							x: a,
							y: n.y - s.height
						};
						break;
					case y:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case O:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case w:
						t = {
							x: n.x - s.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = o ? H(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case T:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
					}
				}
				return t
			}
			var G = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function q(e) {
				var t, n = e.popper,
					s = e.popperRect,
					r = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							s = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * s) / s || 0,
							y: Math.round(n * s) / s || 0
						}
					}(i),
					m = u.x,
					p = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = w,
					x = g,
					v = window;
				if (d) {
					var E = _(n);
					E === o(n) && (E = l(n)), r === g && (x = y, p -= E.clientHeight - s.height, p *= c ? 1 : -1), r === w && (h = O, m -= E.clientWidth - s.width, m *= c ? 1 : -1)
				}
				var S, j = Object.assign({
					position: a
				}, d && G);
				return c ? Object.assign(Object.assign({}, j), {}, ((S = {})[x] = b ? "0" : "", S[h] = f ? "0" : "", S.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", S)) : Object.assign(Object.assign({}, j), {}, ((t = {})[x] = b ? p + "px" : "", t[h] = f ? m + "px" : "", t.transform = "", t))
			}
			var z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return z[e]
				}))
			}
			var Q = {
				start: "end",
				end: "start"
			};

			function K(e) {
				return e.replace(/start|end/g, (function(e) {
					return Q[e]
				}))
			}

			function X(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var s = t;
					do {
						if (s && e.isSameNode(s)) return !0;
						s = s.parentNode || s.host
					} while (s)
				}
				return !1
			}

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === P ? J(function(e) {
					var t = o(e),
						n = l(e),
						s = t.visualViewport,
						r = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return s && (r = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, c = s.offsetTop)), {
						width: r,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === m(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - r), {
						width: r,
						height: o,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? _(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && X(e, n)
						})) : []
					}(e) : [].concat(t),
					r = [].concat(s, [n]),
					o = r[0],
					i = r.reduce((function(t, n) {
						var s = $(e, n);
						return t.top = Math.max(s.top, t.top), t.right = Math.min(s.right, t.right), t.bottom = Math.min(s.bottom, t.bottom), t.left = Math.max(s.left, t.left), t
					}), $(e, o));
				return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function se(e, t) {
				void 0 === t && (t = {});
				var n = t,
					s = n.placement,
					o = void 0 === s ? e.placement : s,
					i = n.boundary,
					c = void 0 === i ? N : i,
					d = n.rootBoundary,
					u = void 0 === d ? P : d,
					m = n.elementContext,
					p = void 0 === m ? k : m,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, j)),
					E = p === k ? I : k,
					_ = e.elements.reference,
					w = e.rects.popper,
					S = e.elements[b ? E : p],
					C = ee(a(S) ? S : S.contextElement || l(e.elements.popper), c, u),
					T = r(_),
					A = Y({
						reference: T,
						element: w,
						strategy: "absolute",
						placement: o
					}),
					L = J(Object.assign(Object.assign({}, w), A)),
					M = p === k ? L : T,
					F = {
						top: C.top - M.top + v.top,
						bottom: M.bottom - C.bottom + v.bottom,
						left: C.left - M.left + v.left,
						right: M.right - C.right + v.right
					},
					D = e.modifiersData.offset;
				if (p === k && D) {
					var R = D[o];
					Object.keys(F).forEach((function(e) {
						var t = [O, y].indexOf(e) >= 0 ? 1 : -1,
							n = [g, y].indexOf(e) >= 0 ? "y" : "x";
						F[e] += R[n] * t
					}))
				}
				return F
			}

			function re(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function oe(e, t, n) {
				return void 0 === n && (n = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - n.y,
					right: e.right - t.width + n.x,
					bottom: e.bottom - t.height + n.y,
					left: e.left - t.width - n.x
				}
			}

			function ie(e) {
				return [g, O, y, w].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = B({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								s = e.options,
								r = s.scroll,
								i = void 0 === r || r,
								a = s.resize,
								c = void 0 === a || a,
								d = o(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, U)
								})), c && d.addEventListener("resize", n.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, U)
									})), c && d.removeEventListener("resize", n.update, U)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = Y({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: "absolute",
								placement: t.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = n.gpuAcceleration,
								r = void 0 === s || s,
								o = n.adaptive,
								i = void 0 === o || o,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), q(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), q(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-placement": t.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var t = e.state;
							Object.keys(t.elements).forEach((function(e) {
								var n = t.styles[e] || {},
									s = t.attributes[e] || {},
									r = t.elements[e];
								c(r) && d(r) && (Object.assign(r.style, n), Object.keys(s).forEach((function(e) {
									var t = s[e];
									!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								n = {
									popper: {
										position: t.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var s = t.elements[e],
											r = t.attributes[e] || {},
											o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(s) && d(s) && (Object.assign(s.style, o), Object.keys(r).forEach((function(e) {
											s.removeAttribute(e)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								r = n.offset,
								o = void 0 === r ? [0, 0] : r,
								i = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = V(e),
											r = [w, g].indexOf(s) >= 0 ? -1 : 1,
											o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = o[0],
											a = o[1];
										return i = i || 0, a = (a || 0) * r, [w, O].indexOf(s) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, o), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[s] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name;
							if (!t.modifiersData[s]._skip) {
								for (var r = n.mainAxis, o = void 0 === r || r, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, m = n.altBoundary, p = n.flipVariations, f = void 0 === p || p, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), v = c || (x === h || !f ? [Z(h)] : function(e) {
										if (V(e) === S) return [];
										var t = Z(e);
										return [K(e), t, K(t)]
									}(h)), E = [h].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === S ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												r = n.boundary,
												o = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = W(s),
												u = (l ? a ? A : A.filter((function(e) {
													return W(e) === l
												})) : j).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: r,
														rootBoundary: o,
														padding: i
													})[V(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), _ = t.rects.reference, T = t.rects.popper, N = new Map, P = !0, k = E[0], I = 0; I < E.length; I++) {
									var M = E[I],
										F = V(M),
										D = W(M) === C,
										R = [g, y].indexOf(F) >= 0,
										B = R ? "width" : "height",
										U = se(t, {
											placement: M,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: d
										}),
										H = R ? D ? O : w : D ? y : g;
									_[B] > T[B] && (H = Z(H));
									var Y = Z(H),
										G = [];
									if (o && G.push(U[F] <= 0), a && G.push(U[H] <= 0, U[Y] <= 0), G.every((function(e) {
											return e
										}))) {
										k = M, P = !1;
										break
									}
									N.set(M, G)
								}
								if (P)
									for (var q = function(e) {
											var t = E.find((function(t) {
												var n = N.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return k = t, "break"
										}, z = f ? 3 : 1; z > 0; z--) {
										if ("break" === q(z)) break
									}
								t.placement !== k && (t.modifiersData[s]._skip = !0, t.placement = k, t.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								r = n.mainAxis,
								o = void 0 === r || r,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								m = n.tether,
								p = void 0 === m || m,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = se(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = V(t.placement),
								E = W(t.placement),
								S = !E,
								j = H(v),
								T = "x" === j ? "y" : "x",
								N = t.modifiersData.popperOffsets,
								P = t.rects.reference,
								k = t.rects.popper,
								I = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								A = {
									x: 0,
									y: 0
								};
							if (N) {
								if (o) {
									var L = "y" === j ? g : w,
										M = "y" === j ? y : O,
										F = "y" === j ? "height" : "width",
										D = N[j],
										R = N[j] + x[L],
										B = N[j] - x[M],
										U = p ? -k[F] / 2 : 0,
										Y = E === C ? P[F] : k[F],
										G = E === C ? -k[F] : -P[F],
										q = t.elements.arrow,
										z = p && q ? b(q) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Q = Z[L],
										K = Z[M],
										X = re(0, P[F], z[F]),
										J = S ? P[F] / 2 - U - X - Q - I : Y - X - Q - I,
										$ = S ? -P[F] / 2 + U + X + K + I : G + X + K + I,
										ee = t.elements.arrow && _(t.elements.arrow),
										te = ee ? "y" === j ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][j] : 0,
										oe = N[j] + J - ne - te,
										ie = N[j] + $ - ne,
										ae = re(p ? Math.min(R, oe) : R, D, p ? Math.max(B, ie) : B);
									N[j] = ae, A[j] = ae - D
								}
								if (a) {
									var ce = "x" === j ? g : w,
										de = "x" === j ? y : O,
										le = N[T],
										ue = re(le + x[ce], le, le - x[de]);
									N[T] = ue, A[T] = ue - le
								}
								t.modifiersData[s] = A
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								s = e.name,
								r = n.elements.arrow,
								o = n.modifiersData.popperOffsets,
								i = V(n.placement),
								a = H(i),
								c = [w, O].indexOf(i) >= 0 ? "height" : "width";
							if (r && o) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = b(r),
									u = "y" === a ? g : w,
									m = "y" === a ? y : O,
									p = n.rects.reference[c] + n.rects.reference[a] - o[a] - n.rects.popper[c],
									f = o[a] - n.rects.reference[a],
									h = _(r),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = p / 2 - f / 2,
									E = d[u],
									S = x - l[c] - d[m],
									j = x / 2 - l[c] / 2 + v,
									C = re(E, j, S),
									T = a;
								n.modifiersData[s] = ((t = {})[T] = C, t.centerOffset = C - j, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								r = n.element,
								o = void 0 === r ? "[data-popper-arrow]" : r,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && X(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, j))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var t = e.state,
								n = e.name,
								s = t.rects.reference,
								r = t.rects.popper,
								o = t.modifiersData.preventOverflow,
								i = se(t, {
									elementContext: "reference"
								}),
								a = se(t, {
									altBoundary: !0
								}),
								c = oe(i, s),
								d = oe(a, r, o),
								l = ie(c),
								u = ie(d);
							t.modifiersData[n] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: l,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							s = t[1];
						return e[n] = s, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? s.useLayoutEffect : s.useEffect,
				me = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var r = s.useRef(null),
						o = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || me
						},
						i = s.useState({
							styles: {
								popper: {
									position: o.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = s.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									c({
										styles: le(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: le(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						l = s.useMemo((function() {
							var e = {
								onFirstUpdate: o.onFirstUpdate,
								placement: o.placement,
								strategy: o.strategy,
								modifiers: [].concat(o.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(r.current, e) ? r.current || e : (r.current = e, e)
						}), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, d]),
						u = s.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var s = (n.createPopper || ae)(e, t, l);
							return u.current = s,
								function() {
									s.destroy(), u.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				s = "function" == typeof Map,
				r = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, c, d, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], i[c])) return !1;
								return !0
							}
							if (s && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (r && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (t[c] !== i[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (d = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(i, d[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], i[d[c]])) return !1;
							return !0
						}
						return t != t && i != i
					}(e, t)
				} catch (i) {
					if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw i
				}
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: r
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = r || Object(s.D)(e)
				} else i = Object(s.D)(e);
				const a = o.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = [r.oc, r.pb, r.B, r.Q, r.kb, r.Rb],
				i = {
					[r.Rb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.kb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.Q]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.B]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.pb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.oc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Rb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.kb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.Q]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.B]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.oc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.oc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.oc]: "",
						[r.pb]: "",
						[r.B]: "",
						[r.Q]: "",
						[r.kb]: "",
						[r.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of o) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "o", (function() {
				return y
			}));
			const s = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				_ = "UPDATE_COLLECTION_LAYOUT_PENDING",
				g = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				y = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "l", (function() {
				return M
			})), n.d(t, "k", (function() {
				return F
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "h", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				b = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(r.a)(f),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				v = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(r.a)(v),
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				w = Object(r.a)(y),
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				C = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				T = Object(r.a)(j),
				N = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				P = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				I = Object(r.a)(P),
				A = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				L = Object(r.a)(k),
				M = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(p.Q)(o, {
							subredditId: e
						}).name;
					n(b());
					const a = await Object(c.k)(r(), i, t);
					if (a.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(x());
					return a.ok
				}, F = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(p.Q)(o, {
							subredditId: e
						}).name;
					n(E());
					const a = await Object(c.j)(r(), t, l.d.LinkFlair, i);
					if (a.ok) {
						n(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(g());
					return a.ok
				}, D = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const d = r(),
						m = Object(p.Q)(d, {
							subredditId: t
						}).name;
					n(O());
					const f = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let b = f.ok && !(f.body && !1 === f.body.success);
					if (b) {
						const s = f.body;
						if (n(w({
								subredditId: t,
								template: s
							})), s.id) {
							const r = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[s.id];
							r ? b = await n(Object(i.d)(t, s.id, r)) : o && (b = await n(Object(i.c)(t, s.id)))
						}
					}
					if (b) {
						const e = Object(a.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(S());
						const r = Object(a.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), D(e, t));
						n(Object(a.f)(r))
					}
					return b
				}, R = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const i = r(),
						d = Object(p.Q)(i, {
							subredditId: t
						}).name;
					if (n(C()), (await Object(c.b)(o(), e, d)).ok) {
						n(T({
							subredditId: t,
							templateId: e
						}));
						const r = Object(a.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(r))
					} else {
						n(N());
						const r = Object(a.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), R(e, t));
						n(Object(a.f)(r))
					}
				}, B = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const i = r(),
						d = Object(m.d)(i, {
							subredditId: t
						}).templateIds,
						f = Object(p.Q)(i, {
							subredditId: t
						}).name;
					if (n(I({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), f, l.d.LinkFlair, e)).ok) {
						n(A());
						const e = Object(a.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(L({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(a.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), B(e, t));
						n(Object(a.f)(r))
					}
				}, U = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (s, r, {
					apiContext: i
				}) => {
					const a = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && a.unshift(t), s(Object(o.R)({
							[e.id]: {
								flair: a
							}
						})), t) {
						const s = Object(d.g)(t);
						Object(c.h)(i(), e.id, n, s)
					} else Object(c.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "c", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				a = n("./node_modules/lodash/values.js"),
				c = n.n(a),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				x = n("./src/reddit/models/Image/index.tsx"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/telemetry/index.ts");
			const _ = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: s
			}) => async (r, o, i) => {
				const a = o(),
					c = Object(v.Q)(a, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(l.k)(s));
				const d = await (async (e, t, n, s, r, o) => Object(p.a)(Object(f.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.jb.POST,
					data: {
						filepath: s,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), c.name, t, s.file.name, n, await Object(u.g)(s.file));
				let h = !1;
				try {
					const e = await Object(l.g)(o(), d, s, x.a.FlairTemplates);
					e && r(Object(l.j)(e)), h = !0
				} catch (E) {
					if (E instanceof Error) throw E;
					r(Object(l.i)(E))
				}
				return h
			}, g = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", y = Object(d.a)(g), O = (e, t, n) => async (s, o, a) => {
				const {
					apiContext: d
				} = a;
				let u = o();
				const {
					pendingImages: g,
					...O
				} = n;
				let w = O;
				const S = Object(v.Q)(u, {
					subredditId: e
				});
				if (!S) return !1;
				const j = u.structuredStyles.flairTemplate.models[t];
				if (j && i()(j, w)) return !0;
				if (g) {
					const n = [];
					if (r()(g, (r, o) => {
							r && n.push(s(_({
								flairId: t,
								imageData: Object(x.m)(r),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					w = ((e, t, n) => {
						const s = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && n.imageUploads[e.id];
							r && r.kind === x.b.TempUploaded && (s[t] = r.url)
						}), s
					})(w, g, o())
				}
				u = o();
				let C = null,
					T = null;
				const N = [];
				try {
					(C = await Object(l.f)(u, x.a.FlairTemplates)) && (T = Object(l.m)(C)(s, o, a), N.push(...c()(C.imagesByKey)))
				} catch (A) {
					return !1
				}
				const P = await (async (e, t, n, s) => Object(p.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.jb.PUT,
						data: s
					}))(d(), S.name, t, w),
					k = j ? "edit_post_flair_template" : "save_post_flair_template",
					I = Object(h.e)(u, k);
				if (P.ok) {
					let e;
					if (T) try {
						await T, e = ((e, t, n) => {
							const s = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === x.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
							}), s
						})(w, N, o())
					} catch (A) {
						e = null
					} else e = w;
					s(y({
						flairId: t,
						template: e || w
					}))
				} else C && C.websocket.close();
				return Object(E.a)({
					...I,
					actionInfo: {
						...I.actionInfo,
						success: P.ok
					}
				}), P.ok
			}, w = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", S = Object(d.a)(w), j = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				const o = s(),
					i = Object(v.Q)(o, {
						subredditId: e
					});
				if (!i) return !1;
				const a = await (async (e, t, n) => Object(p.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.jb.DELETE
					}))(r(), i.name, t),
					c = Object(h.e)(o, "delete_flair_template");
				return a.ok && n(S({
					flairId: t
				})), Object(E.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: a.ok
					}
				}), a.ok
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const c = i();
				Object(s.a)(e, a, c) ? n(Object(o.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = n.n(s);
			const o = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: r
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(a.a, {
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && o.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement(i.b, d({
				className: Object(o.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = n[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(i.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => r.a.createElement(a.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("index~reddit-components-Econ-Prediction"), n.e("index")]).then(n.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("index~reddit-components-Econ-Prediction"), n.e("index")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				v2Container: "_3Ck2ZoZ2ImMBMvI1gp5MaL",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				participantsCount: e
			}) => m._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [m._param("total participated users", Object(u.b)(e)), m._plural(e)], {
				hk: "1yrPLH"
			});
			var f = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = n.n(f);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					n = t.status === c.a.Live,
					r = t.status === c.a.Closed,
					u = Object(i.e)(d.x),
					m = Object(i.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return u ? o.a.createElement("div", {
					className: b.a.v2Container
				}, o.a.createElement("div", {
					className: b.a.label
				}, o.a.createElement("span", null, null == m ? void 0 : m.displayText), n && o.a.createElement("span", {
					className: Object(s.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), r && o.a.createElement("span", {
					className: Object(s.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), t.totalParticipantsCount && o.a.createElement("span", {
					className: b.a.predictions
				}, o.a.createElement(p, {
					participantsCount: t.totalParticipantsCount
				})), o.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				})), o.a.createElement("h3", {
					className: b.a.title
				}, t.name)) : o.a.createElement("div", {
					className: b.a.container
				}, o.a.createElement("h3", {
					className: b.a.title
				}, t.name), o.a.createElement("div", {
					className: b.a.label
				}, o.a.createElement("span", null, h._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), n && o.a.createElement("span", {
					className: Object(s.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), r && o.a.createElement("span", {
					className: Object(s.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				}))), o.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				}))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				m = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(m);
			const f = a.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					a = Object(l.a)(n),
					m = s && Object(i.c)(s.eventStart, s.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, r.a.createElement(f, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !a && m && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => r.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => r.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", b.a),
				v = h.a.span("PostEventPastText", b.a),
				E = h.a.span("PostEventNowText", b.a),
				_ = h.a.span("Container", b.a),
				g = h.a.wrapped(u, "CalendarIcon", b.a),
				y = h.a.wrapped(m, "LiveIcon", b.a),
				O = h.a.div("LoadingState", b.a);
			class w extends s.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: a,
						eventStart: c
					} = n, d = Object(o.e)(c, s);
					let l, u;
					if (this.state.mounted || d === o.a.Live) l = r.a.createElement(p.c, {
						startTime: c,
						endTime: s,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = r.a.createElement(O, {
							className: e
						})
					}
					if (a) u = r.a.createElement(E, null, r.a.createElement(y, null), l);
					else if (d === o.a.Future) u = r.a.createElement(x, null, r.a.createElement(g, null), l);
					else {
						if (d !== o.a.Past) return null;
						u = r.a.createElement(v, null, r.a.createElement(g, null), l)
					}
					return r.a.createElement(_, {
						className: e
					}, u)
				}
			}
			t.a = w
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, n) {
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
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/components/Econ/Audio/async.ts"),
				b = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Post/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/experiments/econ/index.ts"),
				w = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				S = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				T = n("./src/lib/ads/index.ts"),
				N = n("./src/lib/classNames/index.ts"),
				P = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				k = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				I = n("./src/reddit/components/AwardBadges/index.tsx"),
				A = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = n("./src/reddit/components/Flatlist/index.tsx"),
				D = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				B = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				V = n("./src/reddit/components/ModModeReports/helpers.ts"),
				W = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				H = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Y = n("./src/reddit/components/PostContainer/index.tsx"),
				G = n("./src/reddit/components/PostLeftRail/index.tsx"),
				q = n("./src/reddit/components/PostMedia/index.tsx"),
				z = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Z = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Q = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				K = n.n(Q);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var J = () => r.a.createElement("div", {
					className: K.a.container
				}, r.a.createElement(Z.a, {
					className: K.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: K.a.metaText
				}, X._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				$ = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ee = n("./src/reddit/components/PostTitle/index.tsx"),
				te = n("./src/reddit/components/PostTopLine/index.tsx"),
				ne = n("./src/reddit/components/SourceLink/index.tsx"),
				se = n("./src/reddit/constants/postLayout.ts"),
				re = n("./src/reddit/contexts/InsideOverlay.tsx"),
				oe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/helpers/isCrosspost.ts"),
				ce = n("./src/reddit/helpers/postEvent.ts"),
				de = n("./src/reddit/models/Audio/index.ts"),
				le = n("./src/reddit/constants/experiments.ts"),
				ue = n("./src/reddit/helpers/chooseVariant/index.ts"),
				me = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const pe = Object(a.a)(j.N, e => e.some(me.c)),
				fe = Object(a.a)(pe, e => e),
				be = (e, t) => Object(ue.c)(e, {
					experimentName: le.hc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && fe(e, {
							listingKey: n
						})
					}
				});
			var he = n("./src/reddit/selectors/postFlair.ts"),
				xe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				ve = n("./src/reddit/components/PostTopMeta/index.tsx"),
				Ee = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				_e = n.n(Ee),
				ge = n("./src/reddit/selectors/i18n/index.ts"),
				ye = n("./src/reddit/components/LargePost/index.m.less"),
				Oe = n.n(ye);
			const we = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(j.N)(e, {
						listingKey: n
					}) : void 0
				},
				Se = Object(o.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: y.a,
					hideNSFWPref: C.C,
					flairStyleTemplate: oe.U,
					isCurrentUserProfilePost: j.l,
					isLoggedIn: C.K,
					isActive: j.j,
					showPromotedCTA: xe.b,
					moderatorPermissions: S.l,
					modModeEnabled: oe.S,
					posts: we,
					postHeightVariant: be,
					shouldShowNsfwListingBelow: ge.b,
					showEditFlair: he.a,
					showAwardsPlaque: w.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(O.w)(e),
					isAudioRoomPostEnabled: O.c
				}), (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const s = n === g.a.upvoted ? Object(m.db)(t) : Object(m.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(m.Z)(t)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				})),
				je = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: o,
						currentUser: a,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: g,
						hideNSFWPref: y,
						hostPostData: O,
						imageGalleryCurrentItem: w,
						inSubredditOrProfile: S = !1,
						isCommentsPage: j,
						isCurrentUserProfilePost: C,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: Q,
						isLoggedIn: K,
						isOverlay: X,
						isTopicPage: re,
						isTournamentPost: oe,
						isAudioRoomPostEnabled: ie,
						isCommentCountAnimationEnabled: ue,
						isVoteCountAnimationEnabled: me,
						isCountAnimShadowTestEnabled: pe,
						listingIndex: fe,
						listingKey: be,
						moderatorPermissions: he,
						modModeEnabled: xe,
						onClickPost: Ee,
						onIgnoreReports: ge,
						onOpenReportsDropdown: ye,
						post: we,
						postHeightVariant: Se,
						scrollerItemRef: je,
						shouldShowGalleryTileOption: Ce,
						shouldShowNsfwListingBelow: Te,
						showAwardsPlaque: Ne,
						showEditFlair: Pe,
						showPromotedCTA: ke,
						subredditOrProfile: Ie,
						userIsOp: Ae,
						postId: Le,
						postIds: Me,
						onceInViewport: Fe
					} = e, De = !!e.redditStyle || !!e["data-redditstyle"], Re = De ? void 0 : p, Be = Object(l.a)(he), Ue = xe && Be, Ve = Object(c.a)(he), We = Object(d.a)(he), He = Object(V.c)(we), Ye = Object(B.c)(we), Ge = !!we.media && we.media.type === E.o.RTJSON, qe = Ae && Ge, ze = n ? n - G.a : void 0, Ze = !!we.recommendationContext, Qe = !(Z && K || re) || Ze && K, Ke = (e => e === le.re.OnlyTitles)(Se) && !Object(ae.a)(we), Xe = (e => e === le.re.MediumHeight)(Se) && !Object(ae.a)(we), Je = (e => {
						var t;
						const {
							post: n,
							postIds: s,
							posts: r
						} = e;
						if (!Object(_.r)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const o = s && 0 === s.indexOf(n.id),
							i = s && 1 === s.indexOf(n.id),
							a = r && r[1] && Object(_.r)(r[1]);
						return {
							hasTopCompactPostStyles: o && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: o
						}
					})(e), $e = !!(null == O ? void 0 : O.shouldShowLinkedPosts), et = (!S || $e || Te) && !we.isSponsored, tt = Object(T.t)(we, w), {
						source: nt
					} = tt, st = Object(s.useRef)(null), rt = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Fe || Fe(fe))
						})
					}, [Fe, fe]);
					return Object(v.a)(st, rt), r.a.createElement(x.b, null, r.a.createElement(Y.a, {
						className: Object(N.a)(Oe.a.container, o, _e.a.largeAndMediumPostStyles, _e.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[_e.a.mUseRedditTheme]: De,
							promotedvideolink: we.isSponsored && !(we.media && E.a.has(we.media.type)),
							[Oe.a.topCompactPost]: Je && Je.hasTopCompactPostStyles,
							[Oe.a.bottomCompactPost]: Je && Je.hasBottomCompactPostStyles
						}),
						isOverlay: X,
						style: Object(u.b)(e.flairStyleTemplate),
						post: we,
						onClick: Ee,
						eventFactory: m
					}, r.a.createElement("div", {
						ref: st
					}), r.a.createElement($.a, {
						model: we,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: pe,
						isVoteCountAnimation: me,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Re,
						redditStyle: De,
						postId: Le
					}), r.a.createElement(H.a, {
						className: Object(N.a)(Oe.a.backgroundWrapper, {
							[Oe.a.isEvent]: Object(ce.a)(we)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Re,
						post: we,
						redditStyle: De
					}, r.a.createElement(M.a, {
						post: we
					}), Je && Je.showPinnnedHeader && r.a.createElement(J, null), oe && Object(i.c)(we) && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.a, {
						post: we
					}), r.a.createElement(b.a, {
						post: we
					})), !oe && r.a.createElement(r.a.Fragment, null, !!we.recommendationContext && r.a.createElement(W.a, {
						content: we.recommendationContext.content,
						layout: se.g.Large,
						post: we
					}), r.a.createElement(te.a, {
						className: Oe.a.postTopLine,
						hideAwards: Ne,
						hideNSFWPref: y,
						hostPostData: O,
						iconClassName: Oe.a.postTopLineIcon,
						inSubredditOrProfile: S,
						isCommentsPage: !!j,
						isCompactPinnedPost: !!Je,
						isCurrentUserProfilePost: C,
						isOverlay: !!X,
						isTopicPage: !!re,
						listingKey: be,
						post: we,
						shouldShowSubscribeButton: Qe,
						showSubreddit: et,
						showSubredditIcon: !0,
						subredditOrProfile: Ie
					}), r.a.createElement(ee.c, {
						className: Oe.a.postTitle,
						post: we,
						redditStyle: De,
						size: ee.b.Large,
						titleColor: Re && Re.postTitleColor,
						isOverlay: X
					}), we.source && !we.isSponsored && !(we.media && Object(E.H)(we.media)) && r.a.createElement(ne.a, {
						className: Oe.a.sourceLink,
						post: we
					})), r.a.createElement("div", {
						className: Oe.a.postMediaWrapper
					}, !Je && r.a.createElement(q.a, {
						isGalleryTileLayoutDefault: Q,
						isListing: !0,
						isMediumHeight: Xe,
						isNotCardView: !!X,
						isTitleOnly: Ke,
						showCentered: !0,
						flairStyleTemplate: Re,
						post: we,
						availableWidth: ze,
						shouldLoad: g,
						scrollerItemRef: je,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ce,
						showPromotedCTA: ke
					})), ke && nt && nt.url && r.a.createElement(P.a, {
						className: Oe.a.adLinkWrapper
					}, r.a.createElement(k.a, {
						post: we,
						adLinkContent: tt
					})), xe && Be && Ye && r.a.createElement("div", {
						className: Oe.a.modModeBannerWrapper
					}, r.a.createElement(R.a, {
						thing: we
					})), xe && Be && He && r.a.createElement("div", {
						className: Oe.a.modModeBannerWrapper
					}, r.a.createElement(U.a, {
						onIgnoreReports: ge,
						reportable: we
					})), Object(de.a)(we) && ie && r.a.createElement(f.a, {
						post: we
					}), r.a.createElement(D.d, null), Ne && r.a.createElement(I.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: we,
						tooltipType: X ? ve.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: Oe.a.flatListContainer
					}, r.a.createElement(L.a, {
						className: Oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Re,
						model: we,
						onVoteClick: e.handleVote
					}), r.a.createElement(F.c, {
						currentUser: a,
						hasModFlairPerms: Ve,
						hasModFullPerms: We,
						hasModPostPerms: Be,
						hostPostData: O,
						isCommentCountAnimation: ue,
						isCountAnimShadowTestEnabled: pe,
						isLargePost: !0,
						isOverlay: !!X,
						listingKey: be,
						modModeEnabled: xe,
						onIgnoreReports: ge,
						onOpenReportsDropdown: ye,
						post: we,
						showEditPost: qe,
						showEditFlair: Pe,
						useFlatlistBreakpoints: Object(z.b)({
							editPost: !1,
							save: !Ue,
							hide: !1,
							report: !1
						})
					}))), Z && r.a.createElement(A.a, {
						post: we,
						postIds: null != Me ? Me : [],
						subredditId: null == Ie ? void 0 : Ie.id
					})))
				});
			je.displayName = "LargePostMemoized";
			t.default = Object(ie.b)(Se(Object(re.b)(je)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			const s = n("./src/lib/constants/index.ts").l.toLowerCase(),
				r = e => "string" == typeof e.bannedBy && e.bannedBy.toLowerCase() === s,
				o = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				i = e => r(e) || o(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: s,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: s
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), d && r.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, n) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				l = n.n(d);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => r.a.createElement(a.a, {
				className: Object(o.a)(l.a.RecommendationContextStyles, {
					[l.a.classicLayout]: t === c.g.Classic,
					[l.a.compactLayout]: t === c.g.Compact,
					[l.a.largeLayout]: t === c.g.Large
				}),
				content: e,
				rtJsonElementProps: u(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(r.d, {
					seconds: e.poll.endsAt / s.Rb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						o = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/objectSelector/index.ts"),
				E = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = n("./src/reddit/components/PostContainer/index.m.less"),
				g = n.n(_);
			const y = Object(p.a)(() => Object(o.c)({
				basePixelMetadata: Object(v.a)((e, {
					post: t
				}) => Object(b.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(b.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(h.actionInfo)(e).pageType
			}));
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: b,
						style: h,
						ref: v,
						shouldAddGalleryViewability: E = !0
					} = this.props, _ = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, o, p))(n), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(g.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), y = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || y ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, _) : l.media && Object(f.E)(l.media) && E ? r.a.createElement(u, {
						postId: l.id
					}, _) : _
				}
			}
			t.a = y(Object(E.a)(Object(m.c)(O)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				m = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(m);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: r
						} = this.props, o = !!s;
						r(e ? Object(u.o)({
							postId: n,
							isFollowed: o
						}) : Object(u.g)({
							postId: n,
							isFollowed: o
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: n
					} = this.props, r = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: E,
					isReadingIndicatorsExperimentEnabled: _
				} = e, g = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, s && r.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), r.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: g,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(o.a)(m.a.score, {
						[m.a.allowPointerEvents]: _
					}),
					isReadingIndicatorsExperimentEnabled: _
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return q
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = n("./src/lib/getShortenedLink.ts"),
				S = n("./src/reddit/components/FlairWrapper/index.tsx"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/lib/prettyPrintNumber/index.ts"),
				T = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				N = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				P = n.n(N);
			const k = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var I, A = Object(i.b)(k)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, P.a.proposalMetaData)
					}, o.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(C.a)(s)), j.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(T.a, {
						className: P.a.proposalExpiry,
						poll: t
					}))
				})),
				L = n("./src/reddit/components/SEOTitle/index.tsx"),
				M = n("./src/reddit/selectors/experiments/econ/index.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/PostTitle/index.m.less"),
				R = n.n(D),
				B = n("./src/config.ts"),
				U = n("./src/reddit/hooks/useClickSourceData.ts"),
				V = n("./src/reddit/hooks/useExperimentVariant.ts"),
				W = n("./src/reddit/hooks/usePostContext.ts"),
				H = n("./src/reddit/hooks/useTheme.ts"),
				Y = n("./src/telemetry/models/Outbound.ts");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(I || (I = {}));
			const q = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: s,
					children: r,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(H.a)();
					let d = "";
					switch (e) {
						case I.ExtraLarge:
							d = R.a.ExtraLarge;
							break;
						case I.Large:
							d = R.a.Large;
							break;
						case I.Medium:
							d = R.a.Medium;
							break;
						case I.Small:
							d = R.a.Small;
							break;
						case I.ExtraSmall:
							d = R.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(R.a.Title, i, d, {
							[R.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? o.a.createElement(L.b, {
						type: n
					}, r) : r)
				},
				z = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: s,
					...r
				}) => o.a.createElement(a.a, G({}, r, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), s),
				Z = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: s
				}) => o.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, n, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, s),
				Q = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.db,
					isTournamentPredictionPostV2: M.x
				}),
				K = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, r = Object(U.a)(), i = Object(V.a)(m.jd) === m.od.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(Z, {
						nowrap: e.nowrap
					}, o.a.createElement(X, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, o.a.createElement(X, e)); {
						const a = t.media && Object(y.H)(t.media) ? Object(E.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(v.b)(a) : i ? Object(h.a)(a, void 0, r) : Object(h.a)(a);
						return o.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(f.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement(X, t)) : o.a.createElement(X, t)
						})(t, e) : o.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, o.a.createElement(X, e)))
					}
				},
				X = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: s
					} = e;
					let r = e.format ? e.format(s) : s.title;
					n && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const i = e.isCommentsPage ? L.a.PostComments : L.a.PostItem;
					return o.a.createElement(q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(S.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				J = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: s
					} = n, r = e.isCommentsPage ? Y.SourceElement.PostLink : Y.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== I.Large && !n.isSponsored && !(n.media && Object(y.H)(n.media)) && (n.source || n.media && (n.media.type === y.o.GIFVIDEO || n.media.type === y.o.IMAGE || n.media.type === y.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(y.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(w.a)(n), !n.isSponsored && o.a.createElement(_.a, {
							name: "external_link",
							className: R.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== I.Large && e.size !== I.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(w.a)(n), !n.isSponsored && o.a.createElement(_.a, {
						name: "external_link",
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: n,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: i,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, m = s === g.b.Left, p = Object(S.b)(c), f = d ? p.filter(e => e.type === g.f.Nsfw || e.type === g.f.Spoiler) : m ? p.filter(e => Object(x.q)(e.type)) : [], b = d ? [] : m ? p.filter(e => !Object(x.q)(e.type)) : p, h = !i && !r, v = !n && f && f.length > 0 && h, E = !n && b && b.length > 0 && h, _ = !(u && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return o.a.createElement("div", {
						className: Object(l.a)(R.a.Component, t, c.id)
					}, !d && v && o.a.createElement(S.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), _ && o.a.createElement(K, G({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && o.a.createElement(A, {
						className: R.a.pollMeta,
						pollId: a.id
					}), o.a.createElement(J, this.props), E && o.a.createElement(S.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${B.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.eb)(),
					n = Object(p.w)(t),
					s = Object(W.a)(),
					r = Object(i.e)(r => Q(r, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(H.a)(),
					c = Object(u.b)();
				return s ? o.a.createElement($, G({
					pageLayer: t,
					isCommentPermalink: n
				}, s, r, e, {
					theme: a,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				isInExperimentStyles: "yM5jY9oh36Af0F7EUOj4L"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				m = n("./src/reddit/components/PostTopMeta/index.tsx"),
				p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/OutboundLink/index.tsx"),
				E = n("./src/reddit/helpers/trackers/post.ts"),
				_ = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/PostTopLine/index.m.less"),
				S = n.n(w);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: n,
				hideAwards: r,
				hideNSFWPref: w,
				hostPostData: j,
				iconClassName: C,
				inSubredditOrProfile: T,
				isCommentsPage: N,
				isCompactPinnedPost: P,
				isCurrentUserProfilePost: k,
				isOverlay: I,
				isTopicPage: A,
				listingKey: L,
				post: M,
				shouldShowSubscribeButton: F,
				showCornerOutboundLink: D,
				showSubreddit: R,
				showSubredditIcon: B,
				subredditOrProfile: U,
				isFollowed: V,
				shouldShowFollowButton: W,
				onFollowPostClick: H
			}) => {
				const Y = r || A,
					G = U && Object(y.h)(U),
					q = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(O.tb)(e, M.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(a.a)(S.a.container, e)
				}, R && U && o.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, o.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, B && o.a.createElement(p.b, {
					className: Object(a.a)(S.a.subredditIcon, C),
					shouldHideNsfwIcon: w,
					subredditOrProfile: U
				}))), o.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, R && o.a.createElement(d.h, {
					type: M.belongsTo.type,
					id: M.belongsTo.id
				}), o.a.createElement(m.d, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: t,
					tooltipType: I ? m.c.Lightbox : void 0,
					post: M,
					showSub: R,
					subredditOrProfile: U
				}), o.a.createElement(u.a, {
					className: S.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: T,
					isCompactPinnedPost: P,
					post: M,
					tooltipType: I ? m.c.Lightbox : void 0
				}), !Y && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: M,
					tooltipType: I ? m.c.Lightbox : void 0
				})), U && q && R && F && !k && o.a.createElement(b.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(E.h)(M.id, e ? "unsubscribe" : "subscribe", "post", L, j),
					identifier: {
						name: U.name,
						type: G ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: M.id,
					size: x.d.XS
				}), D && o.a.createElement(v.b, {
					isSponsored: M.isSponsored,
					postId: M.id,
					href: Object(g.D)(M),
					source: M.source
				}, o.a.createElement(_.a, {
					className: S.a.outboundLinkIcon
				})), W && q && o.a.createElement(l.a, {
					isFilled: !!V,
					onClick: H,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				f = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(f);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(x, h({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(o);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.f)(n));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.I.NO_STRIPE_SUBSCRIPTION:
							case s.I.USER_DOESNT_EXIST:
							case s.I.USER_REQUIRED_ERROR:
							case s.I.VALIDATION_ERROR:
								return e;
							case s.I.NO_USER:
							case s.I.NO_TEXT:
							case s.I.NO_URL:
								return s.I.VALIDATION_ERROR;
							case s.I.CREDIT_CARD_FAILURE:
							case s.I.CREDIT_CARD_FAILURE_GENERIC:
								return s.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.I.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				f = e => Object(s.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "u", (function() {
				return T
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "v", (function() {
				return k
			})), n.d(t, "w", (function() {
				return I
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				_ = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				g = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				y = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : g[e],
					...o(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				w = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...o(i),
					actionInfo: r.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				C = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				N = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				P = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				k = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				I = () => (e, t) => {
					const n = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = r.a) {
				return Object(s.e)(n => Object(r.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), r.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1x0QJr7iXMkiGpOnQbAvYN"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, r.a.createElement("g", {
				fill: "none"
			}, r.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M8,2A1,1,0,0,0,7,3V5.59L3.76,2.34A1,1,0,0,0,2.34,3.76L5.59,7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11XLCF2uLCEj35_lDddpNT"
			}
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M17,11a1,1,0,0,0-1,1v2.59l-3.24-3.24a1,1,0,0,0-1.41,1.41L14.59,16H12a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V12A1,1,0,0,0,17,11Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "Ui8OEQfWnkN9BO2o-qSXV"
			}
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M19.5 17.3h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5zm8.5 0h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5z"
			})))
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "o2NVVhdZrQ3VeGMHO8aA0"
			}
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoInstall/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3DFi9BDKHWFWnty75sJhyJ"
			}
		},
		"./src/reddit/icons/svgs/VideoInstall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M30.7 25c.5 0 1 .4 1 1v2.9c0 1.6-1.3 2.9-2.9 2.9h-9.6c-1.6 0-2.9-1.3-2.9-2.9v-3c0-.5.4-1 1-1s1 .4 1 1v2.9c0 .5.4 1 1 1h9.6c.5 0 1-.4 1-1v-2.9c-.1-.5.3-.9.8-.9zm-7.4 1.6l-2.9-2.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3v-6.3c0-.5.4-1 1-1 .5 0 1 .4 1 1v6.3l1.2-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2.9 2.8c-.1.1-.2.2-.3.2-.2.1-.3.1-.4.1-.1 0-.2 0-.4-.1-.1 0-.2-.1-.3-.2z"
			})))
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PkP2GybP9Bh6mN4gmbPN4"
			}
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "eI6Ep6BNFA5DZjPWNVb4O"
			}
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), r.a.createElement("rect", {
				x: "3",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M18.5,9.14l-12-7A1,1,0,0,0,5,3V17a1,1,0,0,0,1.5.86l12-7a1,1,0,0,0,0-1.73Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1EfHCA6m0dIgLYzGW2aor1"
			}
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M32.5,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4 C33.8,22.8,33.2,23.5,32.5,23.5 M29.8,26.2c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C31.1,25.6,30.5,26.2,29.8,26.2 M27.1,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C28.4,22.8,27.8,23.5,27.1,23.5 M21.6,23.1H20v1.7c0,0.6-0.5,1-1,1s-1-0.5-1-1v-1.7h-1.7c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1H18 v-1.7c0-0.6,0.5-1,1-1s1,0.5,1,1v1.7h1.7c0.6,0,1,0.5,1,1C22.7,22.7,22.2,23.1,21.6,23.1 M29.8,18c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4c-0.7,0-1.4-0.6-1.4-1.4C28.4,18.6,29,18,29.8,18 M37.3,28.1l-1.7-9.5c-0.4-1.9-2-3.3-4-3.3H17.1 c-2,0-3.6,1.4-4,3.3l-1.7,9.5c-0.2,1.2,0.1,2.4,0.9,3.3c0.8,0.9,1.9,1.5,3.1,1.5h0.2c1.8,0,3.3-1.1,3.9-2.8l0.4-1.3h8.9 l0.4,1.3c0.6,1.7,2.1,2.8,3.9,2.8h0.2c1.2,0,2.3-0.5,3.1-1.5C37.2,30.5,37.5,29.3,37.3,28.1"
			})))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "G2_89gx6TwcALtRI4k7hc"
			}
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "#fff",
				d: "M18.5,8.94,16.32,8.5h0a6.46,6.46,0,0,0-.79-1.9h0l1.23-1.85a1.08,1.08,0,0,0-1.5-1.5L13.41,4.47h0a6.45,6.45,0,0,0-1.9-.79h0L11.06,1.5a1.08,1.08,0,0,0-2.12,0L8.5,3.68h0a6.45,6.45,0,0,0-1.9.79h0L4.74,3.24a1.08,1.08,0,0,0-1.5,1.5L4.47,6.59h0a6.45,6.45,0,0,0-.79,1.9h0L1.5,8.94a1.08,1.08,0,0,0,0,2.12l2.18.44h0a6.45,6.45,0,0,0,.79,1.9h0L3.24,15.26a1.08,1.08,0,0,0,1.5,1.5l1.85-1.23h0a6.45,6.45,0,0,0,1.9.79h0l.44,2.18a1.08,1.08,0,0,0,2.12,0l.44-2.18h0a6.45,6.45,0,0,0,1.9-.79h0l1.85,1.23a1.08,1.08,0,0,0,1.5-1.5l-1.23-1.85h0a6.45,6.45,0,0,0,.79-1.9h0l2.18-.44a1.08,1.08,0,0,0,0-2.12ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2kG3YOJULmYUC8YtVtNO9J"
			}
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm-6.9-6c0-.5.4-1 1-1H27c.6 0 1 .4 1 1v2.1h-5.9V20zM21 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm11.7-3.6c-.2-.2-.5-.3-.7-.3h-2V20c0-1.6-1.3-3-3-3h-3.9c-1.7 0-3 1.3-3 3v2.1H18c-.3 0-.6.1-.7.3-.2.2-.3.5-.2.8l1 9c.1.5.5.9 1 .9h12c.5 0 .9-.4 1-.9l1-9c-.1-.4-.2-.6-.4-.8z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1NxifIlpri3Af8fEoxkaUr"
			}
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M13.43,13.02125 C12.5683333,13.02125 11.8675,12.3204167 11.8675,11.45875 C11.8675,10.5970833 12.5683333,9.89583333 13.43,9.89583333 C14.2916667,9.89583333 14.9925,10.5970833 14.9925,11.45875 C14.9925,12.3204167 14.2916667,13.02125 13.43,13.02125 M13.705,15.5875 C12.63875,16.6525 10.595,16.735 9.99416667,16.735 C9.39333333,16.735 7.34958333,16.6525 6.28458333,15.5870833 C6.12625,15.4291667 6.12625,15.1725 6.28458333,15.0145833 C6.4425,14.8566667 6.69916667,14.85625 6.85708333,15.0145833 C7.52916667,15.6866667 8.96708333,15.9254167 9.99416667,15.9254167 C11.02125,15.9254167 12.4595833,15.6866667 13.1329167,15.0141667 C13.29125,14.85625 13.5475,14.8566667 13.7054167,15.0145833 C13.8633333,15.1729167 13.8633333,15.4291667 13.705,15.5875 M4.9925,11.45875 C4.9925,10.5970833 5.69375,9.89583333 6.55583333,9.89583333 C7.41666667,9.89583333 8.1175,10.5970833 8.1175,11.45875 C8.1175,12.32 7.41666667,13.0208333 6.55583333,13.0208333 C5.69375,13.0208333 4.9925,12.32 4.9925,11.45875 M19.99,9.89583333 C19.99,8.68791667 19.0108333,7.70833333 17.8025,7.70833333 C17.2129167,7.70833333 16.67875,7.94291667 16.2854167,8.32208333 C14.79,7.24333333 12.73,6.54625 10.4354167,6.46625 L11.4316667,1.77833333 L14.6875,2.47041667 C14.7270833,3.29791667 15.405,3.95833333 16.2425,3.95833333 C17.1054167,3.95833333 17.805,3.25875 17.805,2.39583333 C17.805,1.53291667 17.1054167,0.833333333 16.2425,0.833333333 C15.62875,0.833333333 15.1029167,1.19083333 14.8475,1.70541667 L11.2120833,0.932916667 C11.1108333,0.910833333 11.005,0.930833333 10.9183333,0.987083333 C10.83125,1.04375 10.7704167,1.1325 10.74875,1.23375 L9.65541667,6.37791667 C9.64916667,6.4075 9.65416667,6.43541667 9.65458333,6.46458333 C7.31875,6.52583333 5.21875,7.22458333 3.7,8.31833333 C3.30708333,7.94125 2.775,7.70833333 2.1875,7.70833333 C0.979166667,7.70833333 0,8.68791667 0,9.89583333 C0,10.785 0.530833333,11.5483333 1.29208333,11.8904167 C1.25833333,12.1079167 1.24,12.32875 1.24,12.5520833 C1.24,15.9179167 5.1575,18.6458333 9.99,18.6458333 C14.8225,18.6458333 18.74,15.9179167 18.74,12.5520833 C18.74,12.33 18.7220833,12.1108333 18.68875,11.895 C19.455,11.5545833 19.99,10.7883333 19.99,9.89583333"
			})))
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2X_GdgwreX3clU-MfCHx-Y"
			}
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "egx9Z9oH6-wpjLKKhAEoM"
			}
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/models/Audio/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return Boolean(e.audioRoom)
			}
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Unknown = "UNKNOWN", e.Twilio = "TWILIO"
				}(s || (s = {}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, r, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[s.Loyalty]: o.a.First,
					[s.Achievement]: o.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? s.Loyalty : e === o.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "p", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === r.a.Subreddit;
			var p, f, b, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const x = e => f[h[e]],
				v = e => h[f[e]],
				E = e => b[f[e]],
				_ = e => f[b[e]],
				g = e => h[b[e]];
			var y;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const O = e => {
					switch (e) {
						case y.Hourly:
						case y.Daily:
						case y.Weekly:
						case y.Monthly:
							return !0
					}
					return !1
				},
				w = "custom",
				S = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(e)
					}
				},
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const o = {
				status: s.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case r.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case r.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][r] : s[c.a.Achievement][r] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][r] : s[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const s = t[e.id],
						r = t[n.id];
					return Object(i.b)(s, r)
				})
			}

			function f(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						r = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.tc
				});
				return !(!t || Object(s.wf)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.wf)(t)
				},
				c = Object(s.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(o.c)(e, {
					experimentName: r.ne,
					experimentEligibilitySelector: o.a
				}),
				c = (e, t) => t === r.we.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(s.a)(i.H, a, (e, t) => c(e, t)),
				l = Object(s.a)((e, t) => t, a, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.daf6c3214addc88eb329.js.map