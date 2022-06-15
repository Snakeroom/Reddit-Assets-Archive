// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.45707a6479fea3451b14.js
// Retrieved at 6/15/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost", "vendors~reddit-components-MediumPost"], {
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
				E = O.hasOwnProperty,
				_ = O.toString,
				w = function(e) {
					return g.reduce((function(t, n) {
						if (E.call(e, n)) {
							var o = "root" === n && "[object String]" === _.call(e[n]);
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
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = u(w(t.props)), t.target = t.targetNode, e = x(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
						E = /xbox/i.test(t);
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
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : E ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var _ = "";
					r.windows ? _ = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? _ = (_ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? _ = (_ = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? _ = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? _ = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (_ = n(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (r.osversion = _);
					var w = !r.windows && _.split(".")[0];
					return y || c || "ipad" == s || i && (3 == w || w >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == s || "ipod" == s || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
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
			var o = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return o(e, (function(e, o, r) {
					return n = !!t(e, o, r)
				})), n
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
		"./node_modules/lodash/every.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayEvery.js"),
				r = n("./node_modules/lodash/_baseEvery.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? o : r;
				return n && a(e, t, n) && (t = void 0), c(e, s(t, 3))
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
				E = "bottom",
				_ = "right",
				w = "left",
				j = "auto",
				k = [O, E, _, w],
				C = "start",
				P = "end",
				T = "clippingParents",
				M = "viewport",
				S = "popper",
				N = "reference",
				I = k.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + P])
				}), []),
				L = [].concat(k, [j]).reduce((function(e, t) {
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
			var R = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function B() {
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
					s = void 0 === r ? R : r;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var r, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, R), s),
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
									if (B(t, n)) {
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
					if (!B(e, t)) return p;

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

			function H(e) {
				return e.split("-")[0]
			}

			function U(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, n = e.reference,
					o = e.element,
					r = e.placement,
					s = r ? H(r) : null,
					i = r ? U(r) : null,
					a = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (s) {
					case O:
						t = {
							x: a,
							y: n.y - o.height
						};
						break;
					case E:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case _:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case w:
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
				var d = s ? V(s) : null;
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
			var G = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function J(e) {
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
					h = w,
					x = O,
					v = window;
				if (d) {
					var g = y(n);
					g === s(n) && (g = l(n)), r === O && (x = E, m -= g.clientHeight - o.height, m *= c ? 1 : -1), r === w && (h = _, u -= g.clientWidth - o.width, u *= c ? 1 : -1)
				}
				var j, k = Object.assign({
					position: a
				}, d && G);
				return c ? Object.assign(Object.assign({}, k), {}, ((j = {})[x] = b ? "0" : "", j[h] = f ? "0" : "", j.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + m + "px)" : "translate3d(" + u + "px, " + m + "px, 0)", j)) : Object.assign(Object.assign({}, k), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? u + "px" : "", t.transform = "", t))
			}
			var q = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return q[e]
				}))
			}
			var K = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return K[e]
				}))
			}

			function Y(e, t) {
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
							return a(e) && Y(e, n)
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
					c = void 0 === i ? T : i,
					d = n.rootBoundary,
					p = void 0 === d ? M : d,
					u = n.elementContext,
					m = void 0 === u ? S : u,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, k)),
					g = m === S ? N : S,
					y = e.elements.reference,
					w = e.rects.popper,
					j = e.elements[b ? g : m],
					C = ee(a(j) ? j : j.contextElement || l(e.elements.popper), c, p),
					P = r(y),
					I = z({
						reference: P,
						element: w,
						strategy: "absolute",
						placement: s
					}),
					L = Q(Object.assign(Object.assign({}, w), I)),
					A = m === S ? L : P,
					F = {
						top: C.top - A.top + v.top,
						bottom: A.bottom - C.bottom + v.bottom,
						left: C.left - A.left + v.left,
						right: A.right - C.right + v.right
					},
					R = e.modifiersData.offset;
				if (m === S && R) {
					var B = R[s];
					Object.keys(F).forEach((function(e) {
						var t = [_, E].indexOf(e) >= 0 ? 1 : -1,
							n = [O, E].indexOf(e) >= 0 ? "y" : "x";
						F[e] += B[n] * t
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
				return [O, _, E, w].some((function(t) {
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
							t.modifiersData[n] = z({
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
									placement: H(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), J(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), J(Object.assign(Object.assign({}, a), {}, {
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
										var o = H(e),
											r = [w, O].indexOf(o) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * r, [w, _].indexOf(o) >= 0 ? {
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
								for (var r = n.mainAxis, s = void 0 === r || r, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, p = n.rootBoundary, u = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = H(h), v = c || (x === h || !f ? [Z(h)] : function(e) {
										if (H(e) === j) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(v).reduce((function(e, n) {
										return e.concat(H(n) === j ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												r = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = U(o),
												p = (l ? a ? I : I.filter((function(e) {
													return U(e) === l
												})) : k).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: r,
														rootBoundary: s,
														padding: i
													})[H(n)], t
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
									}), []), y = t.rects.reference, P = t.rects.popper, T = new Map, M = !0, S = g[0], N = 0; N < g.length; N++) {
									var A = g[N],
										F = H(A),
										R = U(A) === C,
										B = [O, E].indexOf(F) >= 0,
										D = B ? "width" : "height",
										W = oe(t, {
											placement: A,
											boundary: l,
											rootBoundary: p,
											altBoundary: u,
											padding: d
										}),
										V = B ? R ? _ : w : R ? E : O;
									y[D] > P[D] && (V = Z(V));
									var z = Z(V),
										G = [];
									if (s && G.push(W[F] <= 0), a && G.push(W[V] <= 0, W[z] <= 0), G.every((function(e) {
											return e
										}))) {
										S = A, M = !1;
										break
									}
									T.set(A, G)
								}
								if (M)
									for (var J = function(e) {
											var t = g.find((function(t) {
												var n = T.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return S = t, "break"
										}, q = f ? 3 : 1; q > 0; q--) {
										if ("break" === J(q)) break
									}
								t.placement !== S && (t.modifiersData[o]._skip = !0, t.placement = S, t.reset = !0)
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
								v = H(t.placement),
								g = U(t.placement),
								j = !g,
								k = V(v),
								P = "x" === k ? "y" : "x",
								T = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								S = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								I = {
									x: 0,
									y: 0
								};
							if (T) {
								if (s) {
									var L = "y" === k ? O : w,
										A = "y" === k ? E : _,
										F = "y" === k ? "height" : "width",
										R = T[k],
										B = T[k] + x[L],
										D = T[k] - x[A],
										W = m ? -S[F] / 2 : 0,
										z = g === C ? M[F] : S[F],
										G = g === C ? -S[F] : -M[F],
										J = t.elements.arrow,
										q = m && J ? b(J) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										K = Z[L],
										X = Z[A],
										Y = re(0, M[F], q[F]),
										Q = j ? M[F] / 2 - W - Y - K - N : z - Y - K - N,
										$ = j ? -M[F] / 2 + W + Y + X + N : G + Y + X + N,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										se = T[k] + Q - ne - te,
										ie = T[k] + $ - ne,
										ae = re(m ? Math.min(B, se) : B, R, m ? Math.max(D, ie) : D);
									T[k] = ae, I[k] = ae - R
								}
								if (a) {
									var ce = "x" === k ? O : w,
										de = "x" === k ? E : _,
										le = T[P],
										pe = re(le + x[ce], le, le - x[de]);
									T[P] = pe, I[P] = pe - le
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
								i = H(n.placement),
								a = V(i),
								c = [w, _].indexOf(i) >= 0 ? "height" : "width";
							if (r && s) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = b(r),
									p = "y" === a ? O : w,
									u = "y" === a ? E : _,
									m = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
									f = s[a] - n.rects.reference[a],
									h = y(r),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									g = d[p],
									j = x - l[c] - d[u],
									k = x / 2 - l[c] / 2 + v,
									C = re(g, k, j),
									P = a;
								n.modifiersData[o] = ((t = {})[P] = C, t.centerOffset = C - k, t)
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
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && Y(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, k))
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
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, a) => {
					let {
						routes: c
					} = a;
					const d = i();
					Object(o.a)(e, c, d) ? n(Object(s.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
				}
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
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
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
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement(i.b, d({
					className: Object(s.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
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
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe",
				modModeBannerWrapper: "_1_voPxd0-GKljAjvO7ZcgJ"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Ne
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				f = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/models/User/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				y = n("./src/reddit/actions/post.ts"),
				O = n("./src/reddit/actions/postFlair.ts"),
				E = n("./src/reddit/actions/tooltip.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/postFlair.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				T = n("./src/reddit/components/AwardBadges/index.tsx"),
				M = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				S = n("./src/reddit/components/CommentsLink/index.tsx"),
				N = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				L = n("./src/reddit/components/ExpandoButton/index.tsx"),
				A = n("./src/reddit/components/Flatlist/index.tsx"),
				F = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				W = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = n("./src/reddit/components/ModModeReports/index.tsx"),
				U = n("./src/reddit/components/ModModeReports/helpers.ts"),
				V = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				z = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				G = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = n("./src/reddit/components/PostBadges/index.tsx"),
				q = n("./src/reddit/components/PostContainer/index.tsx"),
				Z = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				K = n("./src/reddit/components/PostLeftRail/index.tsx"),
				X = n("./src/reddit/components/PostMedia/index.tsx"),
				Y = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Q = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				$ = n("./src/reddit/components/PostTitle/index.tsx"),
				ee = n("./src/reddit/components/PostTopMeta/index.tsx"),
				te = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ne = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				oe = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				re = n("./src/reddit/components/SubredditIcon/index.tsx"),
				se = n("./src/reddit/components/VerticalVotes/index.tsx"),
				ie = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ae = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = n("./src/reddit/contexts/Post/index.tsx"),
				de = n("./src/reddit/controls/Checkbox/index.tsx"),
				le = n("./src/reddit/controls/MetaData/index.tsx"),
				pe = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ue = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				me = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				fe = n("./src/reddit/helpers/postEvent.ts"),
				be = n("./src/reddit/hooks/useIsOverlay.ts"),
				he = n("./src/reddit/hooks/useTheme.ts"),
				xe = n("./src/reddit/hooks/useUserContext.ts"),
				ve = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ge = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ye = n("./src/reddit/selectors/showPromotedCTA.ts"),
				Oe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ee = n.n(Oe),
				_e = n("./src/reddit/components/CompactPost/index.m.less"),
				we = n.n(_e);

			function je() {
				return (je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ke = e => {
					let {
						isCompact: t,
						...n
					} = e;
					return s.a.createElement(L.a, je({
						className: Object(l.a)(we.a.responsiveExpandoButton, {
							[we.a.mHideAboveSmallTablets]: !!t,
							[we.a.mHideBelowSmallTablets]: !t
						})
					}, n))
				},
				Ce = () => Object(c.c)({
					activeModalId: _.a,
					crosspost: k.d,
					flairStyleTemplate: ae.W,
					isActive: k.j,
					isExpanded: k.m,
					showPromotedCTA: ye.a,
					layout: ae.S,
					moderatorPermissions: w.n,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: j.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(w.j)(e, n.id)
					}
				}),
				Pe = (e, t) => {
					let {
						postId: n
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: n,
								previewFlair: o,
								selectedTemplateId: r
							} = t;
							return e(Object(O.h)({
								post: n,
								previewFlair: o,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const o = t === g.a.upvoted ? Object(y.kb)(n) : Object(y.w)(n);
							e(o)
						},
						onIgnoreReports: () => e(Object(y.gb)(n)),
						onOpenReportsDropdown: t => e(Object(E.h)({
							tooltipId: t
						}))
					}
				};
			class Te extends s.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: o,
						currentUser: r,
						eventFactory: i,
						flairStyleTemplate: a,
						handleVote: c,
						imageGalleryCurrentItem: p,
						isCheckboxSelected: u = !1,
						isCommentsPage: g,
						isCommentPermalink: y,
						isExpanded: O,
						isGalleryTileLayoutDefault: E,
						isModWithUserNotesPermissions: _,
						isOverlay: w,
						isProfilePostListing: j,
						inSubredditOrProfile: k = !1,
						layout: L,
						moderatorPermissions: X,
						modModeEnabled: oe,
						onClickPost: re,
						onFlairChanged: ae,
						onIgnoreReports: ce,
						poll: le,
						post: be,
						subredditOrProfile: he,
						userIsOp: xe,
						hideModTools: ye,
						scrollerItemRef: Oe,
						showBulkActionCheckbox: _e,
						showEditFlair: je,
						toggleCheckbox: Ce,
						tooltipType: Pe,
						sendEvent: Te,
						shouldShowGalleryTileOption: Se,
						showPromotedCTA: Ne
					} = this.props, Le = !!be.media && be.media.type === x.o.RTJSON, Ae = xe && Le, Fe = Object(Z.b)(be.id, w), Re = Object(me.a)(X), Be = Object(pe.a)(X), De = Object(ue.a)(X), We = `-mod-actions-menu-${be.id}`, He = `voting-arrows-${be.id}`, Ue = !!r && Object(v.e)(r) === be.author, Ve = Object(W.a)(be), ze = Object(U.c)(be), Ge = Object(F.a)("View--Reports", be.id, Pe), Je = Object(U.a)(be), qe = !(w || g || y), Ze = be.media && be.media.type === x.o.LIVEVIDEO, Ke = e => Te(Object(h.k)(be.id, e)), Xe = Object(d.t)(be, p), {
						source: Ye
					} = Xe, Qe = s.a.createElement(q.a, {
						className: Object(l.a)(Ee.a.compactPostStyles, we.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: w,
						style: {
							...Object(b.d)(this.props),
							...Object(b.b)(this.props.flairStyleTemplate)
						},
						post: be,
						onClick: re,
						eventFactory: i
					}, s.a.createElement("div", {
						className: we.a.compactWrapper
					}, s.a.createElement("div", {
						className: we.a.leftRailWrapper
					}, s.a.createElement("div", {
						className: we.a.leftRail,
						style: {
							borderColor: Object(K.c)({
								isRemoved: !!be.bannedBy,
								isReported: Object(f.a)(be),
								isSponsored: be.isSponsored,
								theme: this.props.theme
							})
						}
					}, _e && s.a.createElement(de.a, {
						className: we.a.bulkActionCheckbox,
						isCheckboxSelected: u,
						toggleCheckbox: Ce
					}), s.a.createElement(se.a, {
						className: we.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: a,
						model: be,
						onVoteClick: c
					}), s.a.createElement(N.a, {
						className: we.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: a,
						model: be,
						onVoteClick: c,
						upvoteTooltipId: He
					}))), s.a.createElement(G.a, {
						className: Object(l.a)(we.a.content, {
							[we.a.isEvent]: Object(fe.a)(be)
						}),
						"data-click-id": "background",
						flairStyleTemplate: a
					}, s.a.createElement(I.a, {
						isCompactMode: !0,
						post: be
					}), s.a.createElement("div", {
						className: we.a.compactPostRow
					}, !ye && s.a.createElement(ke, {
						crosspost: o,
						isCommentsPage: g,
						isCompact: !1,
						isExpanded: O,
						post: be,
						useMediaIcons: !0
					}), !k && !be.isSponsored && s.a.createElement(R.h, {
						type: be.belongsTo.type,
						id: be.belongsTo.id
					}), s.a.createElement("div", {
						className: we.a.topLine,
						"data-click-id": "body"
					}, !!be.recommendationContext && s.a.createElement(z.a, {
						content: be.recommendationContext.content,
						layout: m.g.Compact,
						post: be
					}), s.a.createElement($.c, {
						post: be,
						poll: le,
						size: $.b.Small,
						titleColor: a && a.postTitleColor,
						isOverlay: !1
					}), Ie(be, he), s.a.createElement(ee.d, {
						className: we.a.postTopMeta,
						flairStyleTemplate: a,
						isModWithUserNotesPermissions: _,
						post: be,
						showSub: !!he && !k && !be.isSponsored,
						subredditOrProfile: he
					}), s.a.createElement(J.a, {
						className: we.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: k,
						post: be
					}), s.a.createElement(T.a, {
						thing: be,
						tooltipType: w ? ee.c.Lightbox : void 0
					})), qe && !Ze && s.a.createElement("div", null, s.a.createElement(M.a, {
						className: we.a.liveDiscussionIcon,
						postId: be.postId
					})), !be.isSurveyAd && s.a.createElement("div", {
						className: we.a.flatList
					}, s.a.createElement(S.a, {
						className: we.a.commentsLink,
						hasModPostPerms: Re,
						isCommentsPage: g,
						isCommentPermalink: y,
						isOverlay: w,
						postId: be.id,
						modModeEnabled: oe,
						numComments: be.numComments,
						type: m.g.Compact
					}), s.a.createElement(V.a, {
						className: we.a.modToolsFlatlist,
						isOverlay: !1,
						layout: L,
						modModeEnabled: oe,
						post: be,
						sendEvent: Te,
						showIconsOnly: !0
					}), Re && s.a.createElement(B.a, {
						dropdownId: We,
						onClick: () => Ke("post_mod_action_menu")
					}, s.a.createElement(A.b, null), s.a.createElement(Y.a, {
						canEditFlair: Be && je,
						hasModPostPerms: Re,
						hasModFullPerms: De,
						isOverlay: !1,
						isPostAuthor: Ue,
						modModeEnabled: oe,
						post: be,
						tooltipId: We
					})), Re && ze && !oe && s.a.createElement(ne.c, {
						text: `${Je}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ge), Ke("post_report_menu")
						},
						id: Ge
					}, s.a.createElement(ie.a, {
						model: be,
						onIgnoreReports: () => {
							ce(), Ke(be.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ge
					}), be.ignoreReports ? s.a.createElement(ve.a, null) : s.a.createElement(ge.a, null)), s.a.createElement(Q.a, {
						currentProfileName: n,
						isCommentsPage: g,
						isOverlay: !1,
						isProfilePostListing: j,
						isRecommendationPost: !!be.recommendationContext,
						layout: L,
						permalink: be.permalink,
						sendEvent: Te,
						showEditPost: Ae,
						showEditFlair: je,
						dropdownId: `${be.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(Q.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ye && s.a.createElement(ke, {
						crosspost: o,
						isCommentsPage: g,
						isCompact: !0,
						isExpanded: O,
						post: be,
						useMediaIcons: !0
					}))), Ne && Ye && Ye.url && !be.isSurveyAd && s.a.createElement(C.a, {
						className: we.a.adLinkWrapper
					}, s.a.createElement(P.a, {
						post: be,
						adLinkContent: Xe,
						isCompact: !0
					})), oe && Re && Ve && s.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, s.a.createElement(D.a, {
						thing: be
					})), oe && Re && ze && s.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, s.a.createElement(H.a, {
						onIgnoreReports: ce,
						reportable: be
					})), s.a.createElement(R.d, null))), O && s.a.createElement(Me, {
						post: be,
						scrollerItemRef: Oe,
						flairStyleTemplate: a,
						shouldShowGalleryTileOption: Se,
						isGalleryTileLayoutDefault: E
					}), e === Fe && s.a.createElement(Z.a, {
						flairs: be.flair,
						subredditId: be.belongsTo.id,
						modalId: Fe,
						onFlairChanged: ae
					}));
					return s.a.createElement(te.b, null, Qe)
				}
			}
			const Me = e => s.a.createElement(G.a, {
					className: Object(l.a)(e.className, we.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? s.a.createElement("div", {
					className: we.a.crosspostMediaWrapper
				}, Se(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Se(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Se = (e, t, n, o) => s.a.createElement(X.a, {
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
					showFull: !0,
					showPromotedCTA: !0
				}),
				Ne = e => s.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, s.a.createElement(re.b, {
					className: we.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ie = (e, t) => s.a.createElement("div", {
					className: we.a.responsiveMeta
				}, s.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), s.a.createElement(le.c, null), Object(le.d)(e.numComments), s.a.createElement(le.c, null), t && s.a.createElement("a", {
					href: t.url
				}, s.a.createElement(le.a, null, t.displayText)), e.isSponsored && [s.a.createElement(oe.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), s.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && s.a.createElement(le.a, null, " ", o.fbt._("Posted by", null, {
					hk: "UqFDR"
				}), " "), s.a.createElement(ee.b, {
					post: e,
					isDeleted: e.author === p.E
				}));
			t.default = Object(ce.b)(s.a.memo((function(e) {
				const t = Object(xe.a)(),
					n = Object(r.useMemo)(() => Ce(), []),
					o = Object(i.e)(o => n(o, {
						...e,
						...t
					})),
					a = Object(i.d)(),
					c = Pe(a, {
						...e,
						...t
					});
				return s.a.createElement(Te, je({}, e, t, o, c, {
					onFlairChanged: t => {
						let {
							previewFlair: n,
							selectedTemplateId: o
						} = t;
						return c.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: o
						})
					},
					sendEvent: Object(u.b)(),
					isOverlay: Object(be.a)(),
					theme: Object(he.a)()
				}))
			})))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				p = n("./src/reddit/components/Media/index.tsx"),
				u = n("./src/reddit/components/PostMeta/index.tsx"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/CrosspostBox/index.m.less"),
				O = n.n(y),
				E = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const w = 8,
				j = 1,
				k = E.a.div("Container", O.a),
				C = E.a.div("PostMetaWrapper", O.a),
				P = E.a.wrapped(m.c, "PostTitle", O.a),
				T = E.a.div("FlatList", O.a),
				M = E.a.div("FlatItem", O.a),
				S = E.a.span("FlatListDotSpacer", O.a),
				N = E.a.wrapped(k, "LinkContainer", O.a),
				I = E.a.div("Content", O.a),
				L = E.a.div("ThumbnailContainer", O.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Nb.TOPIC),
					shouldOpenPostInNewTab: g.jb
				}),
				F = Object(i.b)(A);
			t.c = Object(x.b)(F(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: o,
					mediaProps: r,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return i && !i.media ? s.a.createElement(N, {
					className: d
				}, s.a.createElement(I, null, s.a.createElement(C, null, s.a.createElement(u.a, c)), R(i), i.source && s.a.createElement(f.a, {
					post: i
				}), D(e)), H(e)) : s.a.createElement(k, {
					className: d
				}, s.a.createElement(C, null, s.a.createElement(u.a, c)), R(i), B(e), D(e))
			}));
			const R = e => s.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: m.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: n
					} = e, o = {
						...t,
						post: n,
						crosspost: t.post
					};
					return s.a.createElement("div", null, s.a.createElement(p.a, _({}, o, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return s.a.createElement(T, null, s.a.createElement(M, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), s.a.createElement(S, null), s.a.createElement(M, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: r
					} = t;
					return s.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				H = e => s.a.createElement(L, null, s.a.createElement(b.a, {
					post: e.post
				}))
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
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: o
				} = e;
				if (!Object(p.a)(o)) return null;
				const a = o && o.eventInfo,
					u = Object(l.a)(o),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return r.a.createElement("div", {
					className: Object(s.a)(m.a.container, t, {
						[m.a.isCompact]: !!n
					})
				}, r.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: o
				}), !u && b && r.a.createElement(d.a, {
					className: m.a.eventFollowButton,
					post: o,
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
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var p = e => r.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var u = e => r.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", b.a),
				v = h.a.span("PostEventPastText", b.a),
				g = h.a.span("PostEventNowText", b.a),
				y = h.a.span("Container", b.a),
				O = h.a.wrapped(p, "CalendarIcon", b.a),
				E = h.a.wrapped(u, "LiveIcon", b.a),
				_ = h.a.div("LoadingState", b.a);
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
						eventIsLive: a,
						eventStart: c
					} = n, d = Object(s.e)(c, o);
					let l, p;
					if (this.state.mounted || d === s.a.Live) l = r.a.createElement(m.c, {
						startTime: c,
						endTime: o,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = r.a.createElement(_, {
							className: e
						})
					}
					if (a) p = r.a.createElement(g, null, r.a.createElement(E, null), l);
					else if (d === s.a.Future) p = r.a.createElement(x, null, r.a.createElement(O, null), l);
					else {
						if (d !== s.a.Past) return null;
						p = r.a.createElement(v, null, r.a.createElement(O, null), l)
					}
					return r.a.createElement(y, {
						className: e
					}, p)
				}
			}
			t.a = w
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
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
				u = n("./src/reddit/helpers/path/index.ts"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = n("./src/telemetry/models/Outbound.ts"),
				g = n("./src/reddit/components/ExpandoButton/index.m.less"),
				y = n.n(g);
			const O = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(u.b)(t.permalink), t.id))
				})),
				E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(c.a)(y.a.icon, y.a.hideOnHover);
					if (t) return s.a.createElement(f.a, {
						name: "crosspost",
						className: o
					});
					if (n.pollData) return s.a.createElement(f.a, {
						name: "poll_post",
						className: o
					});
					if (n.audioRoom) return s.a.createElement(f.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return s.a.createElement(f.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return s.a.createElement(f.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return s.a.createElement(f.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return s.a.createElement(f.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return s.a.createElement(f.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return s.a.createElement(f.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = O(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: u,
					post: b,
					toggle: g,
					useMediaIcons: O
				} = e, _ = n || b, w = Object(i.e)(x.b), j = Object(i.e)(x.c), k = t => {
					(w || j) && (t.preventDefault(), e.showModalOnPostLinkClick(_))
				}, C = _.media, P = Object(h.p)(b), T = r && !!n;
				return C && !P && !(("rtjson" === C.type || "text" === C.type || "liveaudio" === C.type) && !Object(m.a)(_)) || !!b.pollData ? s.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: g
				}, u ? s.a.createElement(f.a, {
					name: "collapse",
					className: y.a.icon
				}) : O ? s.a.createElement(s.a.Fragment, null, E(_.media && _.media.type, T, b), s.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(y.a.icon, y.a.showOnHover)
				})) : s.a.createElement(f.a, {
					name: "expand",
					className: y.a.icon
				})) : _.source && _.source.url ? s.a.createElement(p.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: _.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, s.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : s.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(_.permalink),
					rel: "nofollow",
					onClick: k
				}, s.a.createElement(f.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
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
			}));
			var o = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), p = Object(o.a)({
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
			t.a = p
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), p = Object(o.a)({
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
			t.a = p
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				p = n.n(l);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: o
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : r.a.createElement(a.b, {
					className: Object(s.a)(p.a.RecommendationContextStyles, {
						[p.a.classicLayout]: n === c.g.Classic,
						[p.a.compactLayout]: n === c.g.Compact,
						[p.a.largeLayout]: n === c.g.Large
					}),
					content: t,
					rtJsonElementProps: u(o),
					useExplicitTextColor: !0
				})
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
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/objectSelector/index.ts"),
				g = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(y);
			const E = Object(m.a)(() => Object(s.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: n
						} = t;
						return Object(b.b)(e, n.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: n
						} = t;
						return Object(b.i)(e, {
							postId: n.id
						})
					},
					pageType: e => Object(h.d)(e).pageType
				})),
				_ = "post-container";
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: o,
						imageGalleryCurrentItem: s,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: m,
						sendEvent: b,
						style: h,
						ref: v,
						shouldAddGalleryViewability: g = !0
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => u && u(n, l, t, s, m))(n), l.id && s) {
								const {
									source: e
								} = Object(i.t)(l, s);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(O.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": _,
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), E = !!l.media && l.media.type === f.o.VIDEO;
					return (e => l.media && Object(f.E)(l.media) && g ? r.a.createElement(p, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(y))
				}
			}
			t.a = E(Object(g.a)(Object(u.c)(w)))
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
			const b = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.A)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(f))
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
				return t.crosspostRootId ? r.a.createElement(s.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * s.b - 2 * s.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				u = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				y = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/components/PostMeta/index.m.less"),
				E = n.n(O);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: O,
					isOverlay: _,
					isTopicPage: w,
					post: j,
					shouldShowSubscribeButton: k,
					subredditOrProfile: C,
					tooltipType: P
				} = e, T = !!w, M = Object(g.a)(), S = Object(s.e)(e => !!C && Object(i.j)(e, C.id));
				return r.a.createElement("div", {
					className: E.a.metaContainer
				}, !o && !j.isSponsored && C && r.a.createElement(c.a, {
					postId: j.id,
					subredditName: C.name
				}, r.a.createElement(m.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: C.url,
						state: M
					}
				}, C.displayText)), C && C.isQuarantined && r.a.createElement(u.a, null), !o && !j.isSponsored && C && k && !O && r.a.createElement(f.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: C.name,
						type: Object(y.i)(C) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: j.id,
					size: h.d.XXS,
					small: !0
				}), !o && !j.isSponsored && r.a.createElement(x.b, null), !o && !j.isSponsored && r.a.createElement(d.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), r.a.createElement(p.d, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: P,
					isModWithUserNotesPermissions: S
				}), r.a.createElement(l.a, {
					displayText: C ? C.displayText : null,
					inSubredditOrProfile: !!o,
					post: j,
					tooltipType: P
				}), !T && r.a.createElement(a.a, {
					hideCta: n,
					thing: j,
					tooltipType: _ ? p.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const f = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				b = c.a.wrapped(e => {
					const t = Object(l.a)();
					return s.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, o, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && o(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(o.f)(Object(p.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(o.f)(Object(p.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", m.a);
			t.a = f(Object(a.a)(b))
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
				className: Object(s.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: r,
						...i
					} = e;
					const c = Object(a.b)(n),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						p = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return s.a.createElement(l, i, p)
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: r
					} of t) n.push(Object(o.f)(r));
				return n
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
				f = e => Object(o.k)(.2, e),
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
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var o;

			function r(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(s.c)(e, {
					experimentName: r.Oe,
					experimentEligibilitySelector: s.a
				}),
				c = (e, t) => t === r.We.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(o.a)(i.G, a, (e, t) => c(e, t));
			Object(o.a)((e, t) => t, a, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.45707a6479fea3451b14.js.map