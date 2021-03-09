// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.be625cbf06e15be98ea4.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, o) {
					return a(e[o], t[o])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							o = void 0 === n ? "0px" : n,
							r = t[1],
							s = void 0 === r ? o : r,
							a = t[2],
							c = void 0 === a ? o : a,
							d = t[3];
						return o + " " + s + " " + c + " " + (void 0 === d ? s : d)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = c.keys(); t = s.next().value;) {
					if (!(n !== t.root || o !== t.rootMargin || a(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var o, r = n.values(); o = r.next().value;)
						if (o.target === t.target) return o;
				return null
			}

			function p(e, t) {
				for (var n = 0; n < e.length; n++) {
					var o = l(t, e[n]);
					o && o.handleChange(e[n])
				}
			}

			function u(e) {
				return d(e) || new IntersectionObserver(p, e)
			}
			var m = n("./node_modules/invariant/browser.js"),
				f = n.n(m),
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
			var g = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				w = O.hasOwnProperty,
				E = O.toString,
				k = function(e) {
					return g.reduce((function(t, n) {
						if (w.call(e, n)) {
							var o = "root" === n && "[object String]" === E.call(e[n]);
							t[n] = o ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				j = function(e) {
					var t, n;

					function o() {
						for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
						return v(x(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(x(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var o = n.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), v(x(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = u(k(t.props)), t.target = t.targetNode, e = x(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
					n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = o.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
							return a(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var o = !1;
						n || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || o) && this.observe()
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
			v(j, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function s() {}
			s.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, s, i) {
					if (i !== o) {
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
					checkPropTypes: s,
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
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function o(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var r, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						p = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !s && !l && /macintosh/i.test(t),
						x = !i && !p && !u && !m && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : p ? r = {
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
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, g && (r.version = g)) : s ? (r = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, g && (r.version = g)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : w ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var E = "";
					r.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var k = !r.windows && E.split(".")[0];
					return y || c || "ipad" == s || i && (3 == k || k >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == s || "ipod" == s || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function s(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = r(e, (function(e) {
							var n = t - o(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, r) {
					var i = n;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([a, e[c]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = s, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = o() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				o = Math.random;
			e.exports = function(e, t) {
				return e + n(o() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, o, r) {
				return r(e, (function(e, r, s) {
					n = o ? (o = !1, e) : t(n, e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, n)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = s(e), void 0 === t ? (t = e, e = 0) : t = s(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return o(e, t)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? o : i,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return o(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var o = n("./node_modules/react/index.js");

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

			function s(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = s(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof s(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function p(e) {
				return r(l(e)).left + i(e).scrollLeft
			}

			function u(e) {
				return s(e).getComputedStyle(e)
			}

			function m(e) {
				var t = u(e),
					n = t.overflow,
					o = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, a, u = l(t),
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
				return (b || !b && !n) && (("body" !== d(t) || m(u)) && (h = (o = t) !== s(o) && c(o) ? {
					scrollLeft: (a = o).scrollLeft,
					scrollTop: a.scrollTop
				} : i(o)), c(t) ? ((x = r(t)).x += t.clientLeft, x.y += t.clientTop) : u && (x.x = p(u))), {
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
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					o = "body" === d(n),
					r = s(n),
					i = o ? [r].concat(r.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return o ? a : a.concat(x(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== u(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = s(e), n = g(e); n && v(n) && "static" === u(n).position;) n = g(n);
				return n && "body" === d(n) && "static" === u(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = u(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				w = "bottom",
				E = "right",
				k = "left",
				j = "auto",
				_ = [O, w, E, k],
				C = "start",
				P = "end",
				S = "clippingParents",
				M = "viewport",
				N = "popper",
				T = "reference",
				I = _.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + P])
				}), []),
				L = [].concat(_, [j]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + P])
				}), []),
				A = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function F(e) {
				var t = new Map,
					n = new Set,
					o = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(r) {
						n.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(o) {
							if (!n.has(o)) {
								var r = t.get(o);
								r && e(r)
							}
						})), o.push(r)
					}(e)
				})), o
			}
			var B = {
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

			function D(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					r = t.defaultOptions,
					s = void 0 === r ? B : r;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var r, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, B), s),
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
						p = {
							state: c,
							setOptions: function(n) {
								u(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var r = function(e) {
									var t = F(e);
									return A.reduce((function(e, n) {
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
								}([].concat(o, c.options.modifiers)));
								return c.orderedModifiers = r.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										o = void 0 === n ? {} : n,
										r = e.effect;
									if ("function" == typeof r) {
										var s = r({
											state: c,
											name: t,
											instance: p,
											options: o
										});
										d.push(s || function() {})
									}
								})), p.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (R(t, n)) {
										c.rects = {
											reference: f(t, y(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < c.orderedModifiers.length; o++)
											if (!0 !== c.reset) {
												var r = c.orderedModifiers[o],
													s = r.fn,
													i = r.options,
													a = void 0 === i ? {} : i,
													d = r.name;
												"function" == typeof s && (c = s({
													state: c,
													options: a,
													name: d,
													instance: p
												}) || c)
											} else c.reset = !1, o = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									p.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(r())
									}))
								}))), i
							}),
							destroy: function() {
								u(), l = !0
							}
						};
					if (!R(e, t)) return p;

					function u() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return p.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), p
				}
			}
			var W = {
				passive: !0
			};

			function V(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function z(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function G(e) {
				var t, n = e.reference,
					o = e.element,
					r = e.placement,
					s = r ? V(r) : null,
					i = r ? H(r) : null,
					a = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (s) {
					case O:
						t = {
							x: a,
							y: n.y - o.height
						};
						break;
					case w:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case E:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case k:
						t = {
							x: n.x - o.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = s ? z(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case P:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - o[l] / 2)
					}
				}
				return t
			}
			var U = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function X(e) {
				var t, n = e.popper,
					o = e.popperRect,
					r = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					p = function(e) {
						var t = e.x,
							n = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(n * o) / o || 0
						}
					}(i),
					u = p.x,
					m = p.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = k,
					x = O,
					v = window;
				if (d) {
					var g = y(n);
					g === s(n) && (g = l(n)), r === O && (x = w, m -= g.clientHeight - o.height, m *= c ? 1 : -1), r === k && (h = E, u -= g.clientWidth - o.width, u *= c ? 1 : -1)
				}
				var j, _ = Object.assign({
					position: a
				}, d && U);
				return c ? Object.assign(Object.assign({}, _), {}, ((j = {})[x] = b ? "0" : "", j[h] = f ? "0" : "", j.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + m + "px)" : "translate3d(" + u + "px, " + m + "px, 0)", j)) : Object.assign(Object.assign({}, _), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? u + "px" : "", t.transform = "", t))
			}
			var Z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Y(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return Z[e]
				}))
			}
			var q = {
				start: "end",
				end: "start"
			};

			function J(e) {
				return e.replace(/start|end/g, (function(e) {
					return q[e]
				}))
			}

			function K(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var o = t;
					do {
						if (o && e.isSameNode(o)) return !0;
						o = o.parentNode || o.host
					} while (o)
				}
				return !1
			}

			function Q(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === M ? Q(function(e) {
					var t = s(e),
						n = l(e),
						o = t.visualViewport,
						r = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return o && (r = o.width, i = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, c = o.offsetTop)), {
						width: r,
						height: i,
						x: a + p(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						o = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						a = -n.scrollLeft + p(e),
						c = -n.scrollTop;
					return "rtl" === u(o || t).direction && (a += Math.max(t.clientWidth, o ? o.clientWidth : 0) - r), {
						width: r,
						height: s,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(u(e).position) >= 0 && c(e) ? y(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && K(e, n)
						})) : []
					}(e) : [].concat(t),
					r = [].concat(o, [n]),
					s = r[0],
					i = r.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
					}), $(e, s));
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

			function oe(e, t) {
				void 0 === t && (t = {});
				var n = t,
					o = n.placement,
					s = void 0 === o ? e.placement : o,
					i = n.boundary,
					c = void 0 === i ? S : i,
					d = n.rootBoundary,
					p = void 0 === d ? M : d,
					u = n.elementContext,
					m = void 0 === u ? N : u,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, _)),
					g = m === N ? T : N,
					y = e.elements.reference,
					k = e.rects.popper,
					j = e.elements[b ? g : m],
					C = ee(a(j) ? j : j.contextElement || l(e.elements.popper), c, p),
					P = r(y),
					I = G({
						reference: P,
						element: k,
						strategy: "absolute",
						placement: s
					}),
					L = Q(Object.assign(Object.assign({}, k), I)),
					A = m === N ? L : P,
					F = {
						top: C.top - A.top + v.top,
						bottom: A.bottom - C.bottom + v.bottom,
						left: C.left - A.left + v.left,
						right: A.right - C.right + v.right
					},
					B = e.modifiersData.offset;
				if (m === N && B) {
					var R = B[s];
					Object.keys(F).forEach((function(e) {
						var t = [E, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
						F[e] += R[n] * t
					}))
				}
				return F
			}

			function re(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function se(e, t, n) {
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
				return [O, E, w, k].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = D({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								o = e.options,
								r = o.scroll,
								i = void 0 === r || r,
								a = o.resize,
								c = void 0 === a || a,
								d = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, W)
								})), c && d.addEventListener("resize", n.update, W),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, W)
									})), c && d.removeEventListener("resize", n.update, W)
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
							t.modifiersData[n] = G({
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
								o = n.gpuAcceleration,
								r = void 0 === o || o,
								s = n.adaptive,
								i = void 0 === s || s,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), X(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), X(Object.assign(Object.assign({}, a), {}, {
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
									o = t.attributes[e] || {},
									r = t.elements[e];
								c(r) && d(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function(e) {
									var t = o[e];
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
										var o = t.elements[e],
											r = t.attributes[e] || {},
											s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(o) && d(o) && (Object.assign(o.style, s), Object.keys(r).forEach((function(e) {
											o.removeAttribute(e)
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
								o = e.name,
								r = n.offset,
								s = void 0 === r ? [0, 0] : r,
								i = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = V(e),
											r = [k, O].indexOf(o) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * r, [k, E].indexOf(o) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, s), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name;
							if (!t.modifiersData[o]._skip) {
								for (var r = n.mainAxis, s = void 0 === r || r, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, p = n.rootBoundary, u = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = V(h), v = c || (x === h || !f ? [Y(h)] : function(e) {
										if (V(e) === j) return [];
										var t = Y(e);
										return [J(e), t, J(t)]
									}(h)), g = [h].concat(v).reduce((function(e, n) {
										return e.concat(V(n) === j ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												r = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = H(o),
												p = (l ? a ? I : I.filter((function(e) {
													return H(e) === l
												})) : _).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: r,
														rootBoundary: s,
														padding: i
													})[V(n)], t
												}), {});
											return Object.keys(p).sort((function(e, t) {
												return p[e] - p[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: p,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), y = t.rects.reference, P = t.rects.popper, S = new Map, M = !0, N = g[0], T = 0; T < g.length; T++) {
									var A = g[T],
										F = V(A),
										B = H(A) === C,
										R = [O, w].indexOf(F) >= 0,
										D = R ? "width" : "height",
										W = oe(t, {
											placement: A,
											boundary: l,
											rootBoundary: p,
											altBoundary: u,
											padding: d
										}),
										z = R ? B ? E : k : B ? w : O;
									y[D] > P[D] && (z = Y(z));
									var G = Y(z),
										U = [];
									if (s && U.push(W[F] <= 0), a && U.push(W[z] <= 0, W[G] <= 0), U.every((function(e) {
											return e
										}))) {
										N = A, M = !1;
										break
									}
									S.set(A, U)
								}
								if (M)
									for (var X = function(e) {
											var t = g.find((function(t) {
												var n = S.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, Z = f ? 3 : 1; Z > 0; Z--) {
										if ("break" === X(Z)) break
									}
								t.placement !== N && (t.modifiersData[o]._skip = !0, t.placement = N, t.reset = !0)
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
								o = e.name,
								r = n.mainAxis,
								s = void 0 === r || r,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								p = n.padding,
								u = n.tether,
								m = void 0 === u || u,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: p,
									altBoundary: l
								}),
								v = V(t.placement),
								g = H(t.placement),
								j = !g,
								_ = z(v),
								P = "x" === _ ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								N = t.rects.popper,
								T = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								I = {
									x: 0,
									y: 0
								};
							if (S) {
								if (s) {
									var L = "y" === _ ? O : k,
										A = "y" === _ ? w : E,
										F = "y" === _ ? "height" : "width",
										B = S[_],
										R = S[_] + x[L],
										D = S[_] - x[A],
										W = m ? -N[F] / 2 : 0,
										G = g === C ? M[F] : N[F],
										U = g === C ? -N[F] : -M[F],
										X = t.elements.arrow,
										Z = m && X ? b(X) : {
											width: 0,
											height: 0
										},
										Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										q = Y[L],
										J = Y[A],
										K = re(0, M[F], Z[F]),
										Q = j ? M[F] / 2 - W - K - q - T : G - K - q - T,
										$ = j ? -M[F] / 2 + W + K + J + T : U + K + J + T,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === _ ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
										se = S[_] + Q - ne - te,
										ie = S[_] + $ - ne,
										ae = re(m ? Math.min(R, se) : R, B, m ? Math.max(D, ie) : D);
									S[_] = ae, I[_] = ae - B
								}
								if (a) {
									var ce = "x" === _ ? O : k,
										de = "x" === _ ? w : E,
										le = S[P],
										pe = re(le + x[ce], le, le - x[de]);
									S[P] = pe, I[P] = pe - le
								}
								t.modifiersData[o] = I
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								o = e.name,
								r = n.elements.arrow,
								s = n.modifiersData.popperOffsets,
								i = V(n.placement),
								a = z(i),
								c = [k, E].indexOf(i) >= 0 ? "height" : "width";
							if (r && s) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = b(r),
									p = "y" === a ? O : k,
									u = "y" === a ? w : E,
									m = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
									f = s[a] - n.rects.reference[a],
									h = y(r),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									g = d[p],
									j = x - l[c] - d[u],
									_ = x / 2 - l[c] / 2 + v,
									C = re(g, _, j),
									P = a;
								n.modifiersData[o] = ((t = {})[P] = C, t.centerOffset = C - _, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								r = n.element,
								s = void 0 === r ? "[data-popper-arrow]" : r,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && K(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, _))
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
								o = t.rects.reference,
								r = t.rects.popper,
								s = t.modifiersData.preventOverflow,
								i = oe(t, {
									elementContext: "reference"
								}),
								a = oe(t, {
									altBoundary: !0
								}),
								c = se(i, o),
								d = se(a, r, s),
								l = ie(c),
								p = ie(d);
							t.modifiersData[n] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: l,
								hasPopperEscaped: p
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": p
							})
						}
					}]
				}),
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							o = t[1];
						return e[n] = o, e
					}), {})
				},
				pe = "undefined" != typeof window && window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
				ue = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var r = o.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || ue
						},
						i = o.useState({
							styles: {
								popper: {
									position: s.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = o.useMemo((function() {
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
						l = o.useMemo((function() {
							var e = {
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(r.current, e) ? r.current || e : (r.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, d]),
						p = o.useRef();
					return pe((function() {
						p.current && p.current.setOptions(l)
					}), [l]), pe((function() {
						if (null != e && null != t) {
							var o = (n.createPopper || ae)(e, t, l);
							return p.current = o,
								function() {
									o.destroy(), p.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: p.current ? p.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: p.current ? p.current.update : null,
						forceUpdate: p.current ? p.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				o = "function" == typeof Map,
				r = "function" == typeof Set,
				s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (o && t instanceof Map && i instanceof Map) {
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
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (o = (() => {})) => r => {
				const s = u(r.target, r.currentTarget),
					a = m(r.target, r.currentTarget);
				s && n && t && (p(r.target, r.currentTarget, l.anchors) ? n(t(e, s, a)) : n(n => {
					const o = t(e, s, a)(n);
					let r;
					if (o && o.actionInfo) {
						const {
							pageType: e,
							...t
						} = o.actionInfo;
						r = t
					}
					return {
						...o,
						actionInfo: Object(i.previousPageActionInfo)(n, r)
					}
				})), p(r.target, r.currentTarget, l.anchorsAndButtons) && o(r)
			};

			function d(e) {
				return Object(s.c)(t => {
					const {
						sendEvent: n,
						eventFactory: s,
						clickTrackingId: i,
						...d
					} = t, l = Object(o.useCallback)(c(i, s, n), [i, s, n]);
					return r.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				})
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				p = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, n)),
				u = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				m = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && m(e.parentElement, t))
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
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
			var o = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = n.n(o);
			const s = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = s
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
			var o = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					caption: p
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: d.a.leftSideContent
				}, p && !r && s.a.createElement("span", {
					className: d.a.caption,
					title: p
				}, p), s.a.createElement(a.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && s.a.createElement(i.a, {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement(i.a, d({
				className: Object(s.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, n) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
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
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Pe
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				f = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/models/User/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/actions/post.ts"),
				y = n("./src/reddit/actions/postFlair.ts"),
				O = n("./src/reddit/actions/tooltip.ts"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/moderatorPermissions.ts"),
				k = n("./src/reddit/selectors/postFlair.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				C = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				P = n("./src/reddit/components/AwardBadges/index.tsx"),
				S = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				M = n("./src/reddit/components/CommentsLink/index.tsx"),
				N = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = n("./src/reddit/components/ExpandoButton/index.tsx"),
				L = n("./src/reddit/components/Flatlist/index.tsx"),
				A = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				F = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				D = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				W = n("./src/reddit/components/ModModeReports/index.tsx"),
				V = n("./src/reddit/components/ModModeReports/helpers.ts"),
				H = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				z = n("./src/reddit/components/PopupPortal/index.tsx"),
				G = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = n("./src/reddit/components/PostBadges/index.tsx"),
				X = n("./src/reddit/components/PostContainer/index.tsx"),
				Z = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Y = n("./src/reddit/components/PostLeftRail/index.tsx"),
				q = n("./src/reddit/components/PostMedia/index.tsx"),
				J = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				K = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = n("./src/reddit/components/PostTitle/index.tsx"),
				$ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				te = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ne = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				oe = n("./src/reddit/components/SubredditIcon/index.tsx"),
				re = n("./src/reddit/components/VerticalVotes/index.tsx"),
				se = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = n("./src/reddit/contexts/InsideOverlay.tsx"),
				ae = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = n("./src/reddit/contexts/Post/index.tsx"),
				de = n("./src/reddit/controls/Checkbox/index.tsx"),
				le = n("./src/reddit/controls/MetaData/index.tsx"),
				pe = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ue = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				me = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				fe = n("./src/reddit/helpers/postEvent.ts"),
				be = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				he = n("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				ve = n.n(xe),
				ge = n("./src/reddit/components/CompactPost/index.m.less"),
				ye = n.n(ge);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const we = ({
					isCompact: e,
					...t
				}) => r.a.createElement(I.a, Oe({
					className: Object(d.a)(ye.a.responsiveExpandoButton, {
						[ye.a.mHideAboveSmallTablets]: !!e,
						[ye.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				Ee = Object(s.b)(() => Object(a.c)({
					activeModalId: w.a,
					crosspost: j.d,
					flairStyleTemplate: ae.S,
					imageGalleryCurrentItem: j.i,
					isActive: j.j,
					isExpanded: j.m,
					layout: ae.O,
					moderatorPermissions: E.h,
					modModeEnabled: ae.Q,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: k.a
				}), (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					}) => e(Object(y.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					})),
					handleVote: n => {
						const o = n === v.a.upvoted ? Object(g.U)(t) : Object(g.r)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(g.S)(t)),
					onOpenReportsDropdown: t => e(Object(O.h)({
						tooltipId: t
					}))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onFlairChanged: ({
						previewFlair: e,
						selectedTemplateId: o
					}) => t.dispatchFlairChanged({
						post: n.post,
						previewFlair: e,
						selectedTemplateId: o
					})
				}));
			class ke extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: o,
						currentUser: s,
						eventFactory: i,
						flairStyleTemplate: a,
						handleVote: l,
						imageGalleryCurrentItem: p,
						isCheckboxSelected: v = !1,
						isCommentsPage: g,
						isCommentPermalink: y,
						isExpanded: O,
						isGalleryTileLayoutDefault: w,
						isOverlay: E,
						isProfilePostListing: k,
						inSubredditOrProfile: j = !1,
						layout: I,
						moderatorPermissions: q,
						modModeEnabled: ne,
						onClickPost: oe,
						onFlairChanged: ie,
						onIgnoreReports: ae,
						poll: ce,
						post: le,
						subredditOrProfile: xe,
						userIsOp: ge,
						hideModTools: Oe,
						scrollerItemRef: we,
						showBulkActionCheckbox: Ee,
						showEditFlair: ke,
						toggleCheckbox: _e,
						tooltipType: Pe,
						sendEvent: Me,
						shouldShowGalleryTileOption: Ne
					} = this.props, Te = !!le.media && le.media.type === h.o.RTJSON, Ie = ge && Te, Le = Object(Z.b)(le.id, E), Ae = Object(me.a)(q), Fe = Object(pe.a)(q), Be = Object(ue.a)(q), Re = `-mod-actions-menu-${le.id}`, De = `voting-arrows-${le.id}`, We = !!s && Object(x.e)(s) === le.author, Ve = Object(V.c)(le), He = Object(A.a)("View--Reports", le.id, Pe), ze = Object(V.a)(le), Ge = !(E || g || y), Ue = le.media && le.media.type === h.o.LIVEVIDEO, {
						moderationPrompt: Xe
					} = le, Ze = e => Me(Object(b.f)(le.id, e)), Ye = Object(c.t)(le, p), {
						source: qe
					} = Ye, Je = r.a.createElement(X.a, {
						className: Object(d.a)(ve.a.compactPostStyles, ye.a.postContainer, Object(f.a)(this.props), t),
						isOverlay: E,
						style: {
							...Object(f.d)(this.props),
							...Object(f.b)(this.props.flairStyleTemplate)
						},
						post: le,
						onClick: oe,
						eventFactory: i
					}, r.a.createElement("div", {
						className: ye.a.compactWrapper
					}, r.a.createElement("div", {
						className: ye.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: ye.a.leftRail,
						style: {
							borderColor: Object(Y.c)({
								isRemoved: !!le.bannedBy,
								isReported: Object(m.a)(le),
								isSponsored: le.isSponsored,
								theme: this.props.theme
							})
						}
					}, Ee && r.a.createElement(de.a, {
						className: ye.a.bulkActionCheckbox,
						isCheckboxSelected: v,
						toggleCheckbox: _e
					}), r.a.createElement(re.a, {
						className: ye.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: a,
						model: le,
						onVoteClick: l
					}), r.a.createElement(N.a, {
						className: ye.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: a,
						model: le,
						onVoteClick: l,
						upvoteTooltipId: De
					}), Xe && r.a.createElement(z.b, {
						rightOf: De
					}, "survey" === Xe ? r.a.createElement(D.a, {
						post: le,
						subredditName: xe.name,
						isOverlay: !!E
					}) : r.a.createElement(R.a, {
						post: le,
						subredditName: xe.name,
						isOverlay: !!E
					})))), r.a.createElement(G.a, {
						className: Object(d.a)(ye.a.content, {
							[ye.a.isEvent]: Object(fe.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: a
					}, r.a.createElement(T.a, {
						isCompactMode: !0,
						post: le
					}), r.a.createElement("div", {
						className: ye.a.compactPostRow
					}, !Oe && Ce(le, o, O, !1), !j && !le.isSponsored && r.a.createElement(F.h, {
						type: le.belongsTo.type,
						id: le.belongsTo.id
					}), r.a.createElement("div", {
						className: ye.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(Q.c, {
						post: le,
						poll: ce,
						size: Q.b.Small,
						titleColor: a && a.postTitleColor,
						isOverlay: !1
					}), Se(le, xe), r.a.createElement($.d, {
						className: ye.a.postTopMeta,
						flairStyleTemplate: a,
						post: le,
						showSub: !!xe && !j && !le.isSponsored,
						subredditOrProfile: xe
					}), r.a.createElement(U.a, {
						className: ye.a.postBadges,
						displayText: xe ? xe.displayText : null,
						inSubredditOrProfile: j,
						post: le
					}), r.a.createElement(P.a, {
						thing: le,
						tooltipType: E ? $.c.Lightbox : void 0
					})), Ge && !Ue && r.a.createElement("div", null, r.a.createElement(S.a, {
						className: ye.a.liveDiscussionIcon,
						isMod: Ae,
						postId: le.postId
					})), r.a.createElement("div", {
						className: ye.a.flatList
					}, r.a.createElement(M.a, {
						className: ye.a.commentsLink,
						hasModPostPerms: Ae,
						isCommentsPage: g,
						isCommentPermalink: y,
						isOverlay: E,
						postId: le.id,
						modModeEnabled: ne,
						numComments: le.numComments,
						type: u.g.Compact
					}), r.a.createElement(H.a, {
						className: ye.a.modToolsFlatlist,
						isOverlay: !1,
						layout: I,
						modModeEnabled: ne,
						post: le,
						sendEvent: Me,
						showIconsOnly: !0
					}), Ae && r.a.createElement(B.a, {
						dropdownId: Re,
						onClick: () => Ze("post_mod_action_menu")
					}, r.a.createElement(L.b, null), r.a.createElement(J.a, {
						canEditFlair: Fe && ke,
						hasModPostPerms: Ae,
						hasModFullPerms: Be,
						isOverlay: !1,
						isPostAuthor: We,
						modModeEnabled: ne,
						post: le,
						tooltipId: Re
					})), Ae && Ve && !ne && r.a.createElement(te.c, {
						text: `${ze}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(He), Ze("post_report_menu")
						},
						id: He
					}, r.a.createElement(se.a, {
						model: le,
						onIgnoreReports: () => {
							ae(), Ze(le.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: He
					}), le.ignoreReports ? r.a.createElement(be.a, null) : r.a.createElement(he.a, null)), r.a.createElement(K.g, {
						currentProfileName: n,
						isCommentsPage: g,
						isOverlay: !1,
						isProfilePostListing: k,
						layout: I,
						permalink: le.permalink,
						sendEvent: Me,
						showEditPost: Ie,
						showEditFlair: ke,
						dropdownId: `${le.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(K.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !Oe && Ce(le, o, O, !0))), le.isSponsored && qe && qe.url && r.a.createElement(_.a, {
						className: ye.a.adLinkWrapper
					}, r.a.createElement(C.a, {
						post: le,
						adLinkContent: Ye,
						isCompact: !0
					})), ne && Ae && Ve && r.a.createElement("div", {
						className: ye.a.compactPostRow
					}, r.a.createElement(W.a, {
						onIgnoreReports: ae,
						reportable: le
					})), r.a.createElement(F.d, null))), O && r.a.createElement(je, {
						post: le,
						scrollerItemRef: we,
						flairStyleTemplate: a,
						shouldShowGalleryTileOption: Ne,
						isGalleryTileLayoutDefault: w
					}), e === Le && r.a.createElement(Z.a, {
						flairs: le.flair,
						subredditId: le.belongsTo.id,
						modalId: Le,
						onFlairChanged: ie
					}));
					return r.a.createElement(ee.b, null, Je)
				}
			}
			const je = e => r.a.createElement(G.a, {
					className: Object(d.a)(e.className, ye.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: ye.a.crosspostMediaWrapper
				}, _e(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : _e(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				_e = (e, t, n, o) => r.a.createElement(q.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0
				}),
				Ce = (e, t, n, o) => r.a.createElement(we, {
					crosspost: t,
					isCompact: o,
					isExpanded: n,
					post: e,
					useMediaIcons: !0
				}),
				Pe = e => r.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(oe.b, {
					className: ye.a.subredditIcon,
					subredditOrProfile: e
				})),
				Se = (e, t) => r.a.createElement("div", {
					className: ye.a.responsiveMeta
				}, r.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(le.c, null), Object(le.d)(e.numComments), r.a.createElement(le.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(le.a, null, t.displayText)), e.isSponsored && [r.a.createElement(ne.a, {
					key: "label"
				}), r.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(le.a, null, " Posted by "), r.a.createElement($.b, {
					post: e
				}));
			t.default = Object(ce.b)(Ee(Object(p.c)(Object(ie.b)(Object(l.a)(ke)))))
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				p = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(u);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(p.a)(n)) return null;
				const o = n && n.eventInfo,
					a = Object(l.a)(n),
					u = o && Object(i.c)(o.eventStart, o.eventEnd);
				return r.a.createElement("div", {
					className: Object(s.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, r.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !a && u && r.a.createElement(d.a, {
					className: m.a.eventFollowButton,
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/eventTools/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				p = n("./src/reddit/icons/fonts/Live/index.tsx"),
				u = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = n.n(u),
				f = n("./src/lib/lessComponent.tsx");
			const b = f.a.span("PostEventFutureText", m.a),
				h = f.a.span("PostEventPastText", m.a),
				x = f.a.span("PostEventNowText", m.a),
				v = f.a.span("Container", m.a),
				g = f.a.wrapped(l.a, "CalendarIcon", m.a),
				y = f.a.wrapped(p.a, "LiveIcon", m.a),
				O = f.a.div("LoadingState", m.a);
			class w extends o.Component {
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
						eventEnd: o,
						eventIsLive: l,
						eventStart: p
					} = n, u = Object(s.e)(p, o);
					let m, f;
					if (this.state.mounted || u === s.a.Live) m = function(e, t, n) {
						const o = Object(s.e)(e, t),
							r = new Date(e * a.Hb);
						let d;
						return o === s.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (o === s.a.Future ? d = Object(s.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(s.b)(e) >= 5 ? c(r) : r.toLocaleDateString(void 0, {
							weekday: "long"
						}) : o === s.a.Past && (d = Object(s.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(r)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r)}`)
					}(p, o, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = r.a.createElement(O, {
							className: e
						})
					}
					if (l) f = r.a.createElement(x, null, r.a.createElement(y, null), m);
					else if (u === s.a.Future) f = r.a.createElement(b, null, r.a.createElement(g, null), m);
					else {
						if (u !== s.a.Past) return null;
						f = r.a.createElement(h, null, r.a.createElement(g, null), m)
					}
					return r.a.createElement(v, {
						className: e
					}, f)
				}
			}
			t.a = w
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				m = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				x = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				v = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				g = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				O = n("./src/reddit/icons/fonts/Link/index.tsx"),
				w = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				k = n("./src/reddit/icons/fonts/Text/index.tsx"),
				j = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				C = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/components/ExpandoButton/index.m.less"),
				S = n.n(P);
			const M = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				N = (e, t = !1, n, o) => {
					const r = Object(c.a)(S.a.icon, S.a.hideOnHover);
					if (t) return s.a.createElement(b.a, {
						className: r
					});
					if (n.pollData) return o ? s.a.createElement(f.a, {
						name: "poll_post",
						isFilled: !0
					}) : s.a.createElement(_.a, {
						className: r
					});
					switch (e) {
						case C.o.GIFVIDEO:
							return s.a.createElement(y.a, {
								className: r
							});
						case C.o.IMAGE:
							return s.a.createElement(E.a, {
								className: r
							});
						case C.o.TEXT:
						case C.o.RTJSON:
							return s.a.createElement(k.a, {
								className: r
							});
						case C.o.VIDEO:
							return s.a.createElement(g.a, {
								className: r
							});
						case C.o.GALLERY:
							return o ? s.a.createElement(f.a, {
								name: "media_gallery",
								isFilled: !0
							}) : s.a.createElement(j.a, {
								className: r
							});
						case C.o.EMBED:
						default:
							return s.a.createElement(O.a, {
								className: r
							})
					}
				};
			t.a = M(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: r,
					isExpanded: i,
					post: l,
					toggle: f,
					useMediaIcons: b
				} = e, g = Object(m.a)(), y = n || l, O = r && !!n;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type) && !Object(u.a)(y)) || !!l.pollData ? s.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: f
				}, i ? s.a.createElement(h.a, {
					className: S.a.icon,
					isFilled: !0
				}) : b ? s.a.createElement(s.a.Fragment, null, N(y.media && y.media.type, O, l, g), s.a.createElement(x.a, {
					className: Object(c.a)(S.a.icon, S.a.showOnHover)
				})) : s.a.createElement(x.a, {
					className: S.a.icon,
					isFilled: g
				})) : y.source && y.source.url ? s.a.createElement(p.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, s.a.createElement(w.a, {
					className: Object(c.a)(S.a.icon, S.a.outboundLinkIcon),
					isFilled: g
				})) : s.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow"
				}, s.a.createElement(v.a, {
					className: S.a.icon,
					isFilled: g
				}))
			})
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), p = i.a.div("Placeholder", c.a), u = () => s.a.createElement(p, null, s.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), m = Object(o.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: s.a.createElement(u, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				p = n("./src/reddit/components/Popup/Button.tsx"),
				u = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: b
				} = e, [h, x] = Object(r.useState)(!0), v = Object(f.b)(n.id, b), g = Object(i.d)(), y = Object(m.a)(), O = Object(f.a)(n, b), w = (e, o) => y(Object(u.a)(t, n.id, e, o));
				Object(r.useEffect)(() => {
					O && w("modal", "show")
				}, [O]);
				if (!O || !h) return null;
				const E = o.fbt._("Help r/{subredditName} mods", [o.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return s.a.createElement(l.a, {
					id: v,
					title: E,
					onClose: () => {
						x(!1), w("close", "click"), g(Object(c.A)()), g(Object(c.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(c.A)())
					}
				}, s.a.createElement("p", null, o.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, o.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), o.fbt._param("=community", s.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, o.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), s.a.createElement(p.a, {
					onClick: () => (x(!1), w("report", "click"), void g(Object(d.c)(n.id)))
				}, o.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				p = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				m = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [x, v] = Object(s.useState)(o.Survey), g = Object(b.b)(n.id, h), y = Object(a.d)(), O = Object(f.a)(), w = Object(b.a)(n, h), E = (e, o) => O(Object(m.b)(t, n.id, e, o));
				Object(s.useEffect)(() => {
					w && E("modal", "show")
				}, [w]);
				const k = e => {
					v(o.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.c)(n.id, void 0, e))
				};
				if (!w) return null;
				let j = null;
				const _ = {
					id: g,
					title: r.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(o.Closed), E("close", "click"), y(Object(d.A)())
					},
					onClickOutside: () => {
						y(Object(d.A)())
					}
				};
				switch (x) {
					case o.Survey:
						j = i.a.createElement(p.a, _, i.a.createElement("p", null, r.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [r.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.OffTopic), E("off_topic", "click")
							}
						}, r.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.DontLike), E("dont_like", "click")
							}
						}, r.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.BreaksRules), E("breaks_rules", "click")
							}
						}, r.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case o.OffTopic:
						j = i.a.createElement(p.a, _, i.a.createElement("p", null, r.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case o.DontLike:
						j = i.a.createElement(p.a, _, i.a.createElement("p", null, r.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case o.BreaksRules:
						j = i.a.createElement(p.a, _, i.a.createElement("p", null, r.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), r.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, r.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(u.a, {
							onClick: () => k("site")
						}, r.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(u.a, {
							onClick: () => k("community")
						}, r.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case o.Closed:
				}
				return j
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(o || (o = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(s);

			function a(e) {
				return r.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: o,
					title: s,
					children: c
				} = e;
				return Object(a.a)(t, o), r.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, r.a.createElement("h3", {
					className: d.a.header
				}, r.a.createElement("span", {
					className: d.a.title
				}, s), r.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), c)
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: o,
					onClick: i,
					post: c,
					redditStyle: p,
					theme: u,
					...m
				} = e;
				return r.a.createElement("div", l({
					className: Object(s.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(o, e),
					onClick: i
				}, m), t)
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var p = r.a.memo(e => {
					const t = Object(o.useRef)(null),
						n = Object(l.a)(),
						s = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/media.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/video.ts"),
				v = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				w = n.n(O);
			const E = Object(m.a)(() => Object(s.c)({
					basePixelMetadata: Object(g.a)((e, {
						post: t
					}) => Object(h.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					currentIndex: (e, {
						post: t
					}) => Object(b.b)(e, t.id),
					buffering: (e, {
						post: t
					}) => Object(x.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(x.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(x.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.i)(e, {
						postId: t.id
					})
				})),
				k = e => {
					const t = Object(y.d)(e.target, e.currentTarget),
						n = Object(y.b)(e.target, e.currentTarget, y.a.buttons);
					return "subreddit" !== t && n
				};
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: o,
						currentIndex: s,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: u,
						onClick: m,
						onPostContentClick: b,
						sendEvent: h,
						style: x,
						ref: g
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, u, t, d))(n), b && k(n) && b(n, u)), u.id && d) {
								const {
									source: e
								} = Object(i.t)(u, d);
								if (e && e.outboundUrl) {
									const t = s + 1;
									h(Object(c.c)(u.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(v.a)(w.a.WrappedPost, o, `Post ${u.id}`, {
							promotedlink: u.isSponsored
						}),
						id: l ? l(u.id) : u.id,
						tabIndex: -1,
						"data-testid": u.id
					}, n), O = !!u.media && u.media.type === f.o.VIDEO;
					return u.isSponsored || O ? r.a.createElement(a.a, {
						post: u,
						trackDisplay: !0
					}, y) : u.media && Object(f.E)(u.media) ? r.a.createElement(p, {
						postId: u.id
					}, y) : y
				}
			}
			t.a = E(Object(y.c)(Object(u.c)(j)))
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(u);
			class f extends s.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: o
							},
							sendEvent: r
						} = this.props, s = !!o;
						r(e ? Object(p.o)({
							postId: n,
							isFollowed: s
						}) : Object(p.g)({
							postId: n,
							isFollowed: s
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
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), s.a.createElement("button", {
						className: Object(c.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!n.isFollowed,
							[m.a.isEventFollow]: t
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
				onFollow: () => e(Object(d.v)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(s.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				s = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => s[r({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(r.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(s.d([t], !0)),
				onSubscriptionsRequested: () => e(s.e()),
				onUnsubscribe: () => e(s.d([t], !1))
			}))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => t => {
					const {
						className: n,
						disabled: o,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const o = !(!t && !n);
						let r = "";
						return r = e ? o ? l.a.mDisabledRedditStyle : l.a.mDisabled : o ? l.a.mActiveRedditStyle : l.a.mActive
					})(o, i, a);
					return r.a.createElement(e, p({
						className: Object(s.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				m = u(c.a),
				f = u(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? m : i.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(s.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(s.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => r.a.createElement("div", {
				className: Object(s.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = i.a.span("metaText", d.a),
				p = e => s.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...r
				}) => {
					const i = Object(a.b)(t),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						d = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return s.a.createElement(l, r, d)
				},
				m = e => s.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(s.b)(o)(e => {
					const {
						featureEnabled: o,
						...s
					} = e, i = s;
					return o ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: o,
					cta: r
				} = e;
				if (!(t && n && o && r)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: o,
					cta: r
				}
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				s = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const p = {},
				u = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				f = e => Object(o.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : p,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(s.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, n, r) => s => ({
					source: "report_prompt",
					noun: n,
					action: r,
					subreddit: o.subredditByName(s, e),
					post: o.post(s, t)
				}),
				s = (e, t, n, r) => s => ({
					source: "report_survey",
					noun: n,
					action: r,
					subreddit: o.subredditByName(s, e),
					post: o.post(s, t)
				})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return r.a.createElement("i", {
					className: `${Object(s.b)(t?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "CollapseIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return r.a.createElement("i", {
					className: `${Object(s.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, n) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(s.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
				onClick: e.onClick
			}), "LightboxIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(s.a)();
				return r.a.createElement("i", {
					className: `${Object(i.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(s.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, r.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, r.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.be625cbf06e15be98ea4.js.map