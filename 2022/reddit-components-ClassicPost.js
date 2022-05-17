// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.c466964dfe9a13221611.js
// Retrieved at 5/17/2022, 12:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-dom/index.js"),
				a = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, o) {
					return i(e[o], t[o])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							o = void 0 === n ? "0px" : n,
							r = t[1],
							s = void 0 === r ? o : r,
							i = t[2],
							c = void 0 === i ? o : i,
							d = t[3];
						return o + " " + s + " " + c + " " + (void 0 === d ? s : d)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = c.keys(); t = s.next().value;) {
					if (!(n !== t.root || o !== t.rootMargin || i(r, t.thresholds))) return t
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

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var o = l(t, e[n]);
					o && o.handleChange(e[n])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(u, e)
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

			function v(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function x(e, t, n) {
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
				j = O.toString,
				E = function(e) {
					return g.reduce((function(t, n) {
						if (w.call(e, n)) {
							var o = "root" === n && "[object String]" === j.call(e[n]);
							t[n] = o ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				_ = function(e) {
					var t, n;

					function o() {
						for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
						return x(v(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(v(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var o = n.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), x(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(E(t.props)), t.target = t.targetNode, e = v(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), x(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(v(t), e)
						})), x(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var a = o.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
							return i(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, a.componentDidUpdate = function(e, t, n) {
						var o = !1;
						n || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || o) && this.observe()
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
			x(_, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function s() {}
			s.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, s, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !s && !l && /macintosh/i.test(t),
						v = !a && !u && !p && !m && /linux/i.test(t),
						x = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
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
					}, x ? (r.msedge = e, r.version = x) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: x
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
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
					} : p ? r = {
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
					} : a ? r = {
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
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && s ? (r[s] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : w ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : v && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var j = "";
					r.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (r.osversion = j);
					var E = !r.windows && j.split(".")[0];
					return y || c || "ipad" == s || a && (3 == E || E >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == s || "ipod" == s || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function a(e, o, r) {
					var a = n;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([i, e[c]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = s, n.check = function(e, t, n) {
					return !a(e, t, n)
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
				a = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? o : r;
				return n && i(e, t, n) && (t = void 0), c(e, s(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? o : a,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, r)
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

			function a(e) {
				var t = s(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function i(e) {
				return e instanceof s(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (i(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return r(l(e)).left + a(e).scrollLeft
			}

			function p(e) {
				return s(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					o = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, i, p = l(t),
					f = r(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (o = t) !== s(o) && c(o) ? {
					scrollLeft: (i = o).scrollLeft,
					scrollTop: i.scrollTop
				} : a(o)), c(t) ? ((v = r(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
					x: f.left + h.scrollLeft - v.x,
					y: f.top + h.scrollTop - v.y,
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

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					o = "body" === d(n),
					r = s(n),
					a = o ? [r].concat(r.visualViewport || [], m(n) ? n : []) : n,
					i = t.concat(a);
				return o ? i : i.concat(v(h(a)))
			}

			function x(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = s(e), n = g(e); n && x(n) && "static" === p(n).position;) n = g(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				w = "bottom",
				j = "right",
				E = "left",
				_ = "auto",
				k = [O, w, j, E],
				C = "start",
				S = "end",
				P = "clippingParents",
				N = "viewport",
				M = "popper",
				A = "reference",
				T = k.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + S])
				}), []),
				I = [].concat(k, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + S])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

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

			function W(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					r = t.defaultOptions,
					s = void 0 === r ? R : r;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var r, a, c = {
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
						u = {
							state: c,
							setOptions: function(n) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), n), c.scrollParents = {
									reference: i(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var r = function(e) {
									var t = F(e);
									return L.reduce((function(e, n) {
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
											instance: u,
											options: o
										});
										d.push(s || function() {})
									}
								})), u.update()
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
													a = r.options,
													i = void 0 === a ? {} : a,
													d = r.name;
												"function" == typeof s && (c = s({
													state: c,
													options: i,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, o = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(r())
									}))
								}))), a
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!B(e, t)) return u;

					function p() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var D = {
				passive: !0
			};

			function V(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function U(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, n = e.reference,
					o = e.element,
					r = e.placement,
					s = r ? V(r) : null,
					a = r ? H(r) : null,
					i = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (s) {
					case O:
						t = {
							x: i,
							y: n.y - o.height
						};
						break;
					case w:
						t = {
							x: i,
							y: n.y + n.height
						};
						break;
					case j:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case E:
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
				var d = s ? U(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case S:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - o[l] / 2)
					}
				}
				return t
			}
			var q = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function G(e) {
				var t, n = e.popper,
					o = e.popperRect,
					r = e.placement,
					a = e.offsets,
					i = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(n * o) / o || 0
						}
					}(a),
					p = u.x,
					m = u.y,
					f = a.hasOwnProperty("x"),
					b = a.hasOwnProperty("y"),
					h = E,
					v = O,
					x = window;
				if (d) {
					var g = y(n);
					g === s(n) && (g = l(n)), r === O && (v = w, m -= g.clientHeight - o.height, m *= c ? 1 : -1), r === E && (h = j, p -= g.clientWidth - o.width, p *= c ? 1 : -1)
				}
				var _, k = Object.assign({
					position: i
				}, d && q);
				return c ? Object.assign(Object.assign({}, k), {}, ((_ = {})[v] = b ? "0" : "", _[h] = f ? "0" : "", _.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", _)) : Object.assign(Object.assign({}, k), {}, ((t = {})[v] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var J = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return J[e]
				}))
			}
			var Q = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return Q[e]
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

			function K(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === N ? K(function(e) {
					var t = s(e),
						n = l(e),
						o = t.visualViewport,
						r = n.clientWidth,
						a = n.clientHeight,
						i = 0,
						c = 0;
					return o && (r = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = o.offsetLeft, c = o.offsetTop)), {
						width: r,
						height: a,
						x: i + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : K(function(e) {
					var t = l(e),
						n = a(e),
						o = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						i = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(o || t).direction && (i += Math.max(t.clientWidth, o ? o.clientWidth : 0) - r), {
						width: r,
						height: s,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return i(n) ? t.filter((function(e) {
							return i(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					r = [].concat(o, [n]),
					s = r[0],
					a = r.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
					}), $(e, s));
				return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
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
					a = n.boundary,
					c = void 0 === a ? P : a,
					d = n.rootBoundary,
					u = void 0 === d ? N : d,
					p = n.elementContext,
					m = void 0 === p ? M : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					x = te("number" != typeof v ? v : ne(v, k)),
					g = m === M ? A : M,
					y = e.elements.reference,
					E = e.rects.popper,
					_ = e.elements[b ? g : m],
					C = ee(i(_) ? _ : _.contextElement || l(e.elements.popper), c, u),
					S = r(y),
					T = z({
						reference: S,
						element: E,
						strategy: "absolute",
						placement: s
					}),
					I = K(Object.assign(Object.assign({}, E), T)),
					L = m === M ? I : S,
					F = {
						top: C.top - L.top + x.top,
						bottom: L.bottom - C.bottom + x.bottom,
						left: C.left - L.left + x.left,
						right: L.right - C.right + x.right
					},
					R = e.modifiersData.offset;
				if (m === M && R) {
					var B = R[s];
					Object.keys(F).forEach((function(e) {
						var t = [j, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
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

			function ae(e) {
				return [O, j, w, E].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ie = W({
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
								a = void 0 === r || r,
								i = o.resize,
								c = void 0 === i || i,
								d = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, D)
								})), c && d.addEventListener("resize", n.update, D),
								function() {
									a && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, D)
									})), c && d.removeEventListener("resize", n.update, D)
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
								a = void 0 === s || s,
								i = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), G(Object.assign(Object.assign({}, i), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), G(Object.assign(Object.assign({}, i), {}, {
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
								a = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = V(e),
											r = [E, O].indexOf(o) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											a = s[0],
											i = s[1];
										return a = a || 0, i = (i || 0) * r, [E, j].indexOf(o) >= 0 ? {
											x: i,
											y: a
										} : {
											x: a,
											y: i
										}
									}(n, t.rects, s), e
								}), {}),
								i = a[t.placement],
								c = i.x,
								d = i.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = a
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
								for (var r = n.mainAxis, s = void 0 === r || r, a = n.altAxis, i = void 0 === a || a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, v = V(h), x = c || (v === h || !f ? [Z(h)] : function(e) {
										if (V(e) === _) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(x).reduce((function(e, n) {
										return e.concat(V(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												r = n.boundary,
												s = n.rootBoundary,
												a = n.padding,
												i = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? I : c,
												l = H(o),
												u = (l ? i ? T : T.filter((function(e) {
													return H(e) === l
												})) : k).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: r,
														rootBoundary: s,
														padding: a
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
									}), []), y = t.rects.reference, S = t.rects.popper, P = new Map, N = !0, M = g[0], A = 0; A < g.length; A++) {
									var L = g[A],
										F = V(L),
										R = H(L) === C,
										B = [O, w].indexOf(F) >= 0,
										W = B ? "width" : "height",
										D = oe(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										U = B ? R ? j : E : R ? w : O;
									y[W] > S[W] && (U = Z(U));
									var z = Z(U),
										q = [];
									if (s && q.push(D[F] <= 0), i && q.push(D[U] <= 0, D[z] <= 0), q.every((function(e) {
											return e
										}))) {
										M = L, N = !1;
										break
									}
									P.set(L, q)
								}
								if (N)
									for (var G = function(e) {
											var t = g.find((function(t) {
												var n = P.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, J = f ? 3 : 1; J > 0; J--) {
										if ("break" === G(J)) break
									}
								t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0)
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
								a = n.altAxis,
								i = void 0 !== a && a,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								v = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								x = V(t.placement),
								g = H(t.placement),
								_ = !g,
								k = U(x),
								S = "x" === k ? "y" : "x",
								P = t.modifiersData.popperOffsets,
								N = t.rects.reference,
								M = t.rects.popper,
								A = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								T = {
									x: 0,
									y: 0
								};
							if (P) {
								if (s) {
									var I = "y" === k ? O : E,
										L = "y" === k ? w : j,
										F = "y" === k ? "height" : "width",
										R = P[k],
										B = P[k] + v[I],
										W = P[k] - v[L],
										D = m ? -M[F] / 2 : 0,
										z = g === C ? N[F] : M[F],
										q = g === C ? -M[F] : -N[F],
										G = t.elements.arrow,
										J = m && G ? b(G) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Q = Z[I],
										X = Z[L],
										Y = re(0, N[F], J[F]),
										K = _ ? N[F] / 2 - D - Y - Q - A : z - Y - Q - A,
										$ = _ ? -N[F] / 2 + D + Y + X + A : q + Y + X + A,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										se = P[k] + K - ne - te,
										ae = P[k] + $ - ne,
										ie = re(m ? Math.min(B, se) : B, R, m ? Math.max(W, ae) : W);
									P[k] = ie, T[k] = ie - R
								}
								if (i) {
									var ce = "x" === k ? O : E,
										de = "x" === k ? w : j,
										le = P[S],
										ue = re(le + v[ce], le, le - v[de]);
									P[S] = ue, T[S] = ue - le
								}
								t.modifiersData[o] = T
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
								a = V(n.placement),
								i = U(a),
								c = [E, j].indexOf(a) >= 0 ? "height" : "width";
							if (r && s) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = b(r),
									u = "y" === i ? O : E,
									p = "y" === i ? w : j,
									m = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c],
									f = s[i] - n.rects.reference[i],
									h = y(r),
									v = h ? "y" === i ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									x = m / 2 - f / 2,
									g = d[u],
									_ = v - l[c] - d[p],
									k = v / 2 - l[c] / 2 + x,
									C = re(g, k, _),
									S = i;
								n.modifiersData[o] = ((t = {})[S] = C, t.centerOffset = C - k, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								r = n.element,
								s = void 0 === r ? "[data-popper-arrow]" : r,
								a = n.padding,
								i = void 0 === a ? 0 : a;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && Y(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof i ? i : ne(i, k))
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
								a = oe(t, {
									elementContext: "reference"
								}),
								i = oe(t, {
									altBoundary: !0
								}),
								c = se(a, o),
								d = se(i, r, s),
								l = ae(c),
								u = ae(d);
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
							o = t[1];
						return e[n] = o, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var r = o.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						a = o.useState({
							styles: {
								popper: {
									position: s.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						i = a[0],
						c = a[1],
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
						u = o.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var o = (n.createPopper || ie)(e, t, l);
							return u.current = o,
								function() {
									o.destroy(), u.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: i.styles,
						attributes: i.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
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
					return function e(t, a) {
						if (t === a) return !0;
						if (t && a && "object" == typeof t && "object" == typeof a) {
							if (t.constructor !== a.constructor) return !1;
							var i, c, d, l;
							if (Array.isArray(t)) {
								if ((i = t.length) != a.length) return !1;
								for (c = i; 0 != c--;)
									if (!e(t[c], a[c])) return !1;
								return !0
							}
							if (o && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], a.get(c.value[0]))) return !1;
								return !0
							}
							if (r && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
								if ((i = t.length) != a.length) return !1;
								for (c = i; 0 != c--;)
									if (t[c] !== a[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
							if ((i = (d = Object.keys(t)).length) !== Object.keys(a).length) return !1;
							for (c = i; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(a, d[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = i; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], a[d[c]])) return !1;
							return !0
						}
						return t != t && a != a
					}(e, t)
				} catch (a) {
					if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw a
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
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
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
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && s.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), s.a.createElement(i.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && s.a.createElement(a.a, {
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
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(i);

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
				return r.a.createElement(a.b, d({
					className: Object(s.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				i = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: o,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: m,
					thumbnailContainerClassName: f,
					url: b,
					usePreview: h
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(c.a.thumbnailContainer, t)
				}, r.a.createElement(a.a, {
					className: Object(s.a)(c.a.thumbnail, n),
					containerClassName: f,
					crosspost: o,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: m,
					url: p ? void 0 : b,
					usePreview: h
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				creatorStatsContainer: "_2I70Qhfz-GbGzP54PWXR3P",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				shouldShowOverflow: "_3FOlcZoWAvyAWZYSVd8-WD",
				shouldUseRoundedBorder: "_2g8Jz2obQVOELSfntlgVsJ",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/ads/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/getShortenedLink.ts"),
				d = n("./src/lib/hooks/usePrevious.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				f = n("./src/reddit/components/CreatorStats/loader.tsx"),
				b = n("./src/config.ts"),
				h = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/Econ/Audio/index.m.less"),
				g = n.n(x),
				y = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				O = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: n
					} = t, s = () => Math.floor(10 * Math.random() + 1), i = Object(h.e)(v.cb), [c, d] = Object(o.useState)(!1), [l, u] = Object(o.useState)(s());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							d(!0), setTimeout(() => d(!1), 3500), u(s())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == n ? void 0 : n.isLive) ? r.a.createElement("a", {
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: g.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, r.a.createElement("div", {
						className: g.a.classicSpeaker
					}, c && r.a.createElement(O.a, {
						className: Object(a.a)(g.a.speakerRings, {
							[g.a.nightMode]: i
						})
					}), r.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: g.a.snoovatar,
						src: `${b.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: w._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !c && r.a.createElement("div", {
						className: g.a.muteContainer
					}, r.a.createElement(y.a, {
						className: g.a.muteIcon
					})))) : r.a.createElement("div", {
						className: g.a.endedClassicContainer
					}, r.a.createElement(y.a, {
						className: g.a.muteIcon
					}))
				},
				E = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				_ = n("./src/reddit/components/ExpandoButton/index.tsx"),
				k = n("./src/reddit/components/Flatlist/index.tsx"),
				C = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				P = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				N = n("./src/reddit/components/ModModeReports/index.tsx"),
				M = n("./src/reddit/components/ModModeReports/helpers.ts"),
				A = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				T = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = n("./src/reddit/components/PostContainer/index.tsx"),
				L = n("./src/reddit/components/PostMeta/index.tsx"),
				F = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = n("./src/reddit/components/PostTitle/index.tsx"),
				W = n("./src/reddit/components/PostTopMeta/index.tsx"),
				D = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				V = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				H = n("./src/reddit/models/Audio/index.ts"),
				U = n("./src/reddit/models/Media/index.ts"),
				z = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				q = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				G = n("./src/reddit/constants/postLayout.ts"),
				J = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Z = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Q = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				X = n("./src/reddit/helpers/localStorage/index.ts"),
				Y = n("./src/reddit/helpers/search/renderMedia.tsx"),
				K = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ClassicPost/index.m.less"),
				oe = n.n(ne);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(i.a)(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: i,
					handleVote: b,
					isExpanded: h,
					inSubredditOrProfile: v,
					eventFactory: x,
					first: g,
					flairStyleTemplate: y,
					formatTitle: O,
					hostPostData: w,
					isCheckboxSelected: q,
					isCurrentUserProfilePost: ee,
					isFrontpage: ne,
					isGalleryTileLayoutDefault: se,
					isLoggedIn: ae,
					isOverlay: ie,
					isProfileCreatorStatsEnabled: ce,
					imageGalleryCurrentItem: de,
					moderatorPermissions: le,
					modModeEnabled: ue,
					onClickPost: pe,
					onIgnoreReports: me,
					onOpenReportsDropdown: fe,
					onSizeChanged: be,
					poll: he,
					post: ve,
					postId: xe,
					redditStyle: ge,
					scrollerItemRef: ye,
					showBulkActionCheckbox: Oe,
					showEditFlair: we,
					showMedia: je,
					subredditOrProfile: Ee,
					toggleCheckbox: _e,
					userIsOp: ke,
					shouldShowGalleryTileOption: Ce,
					showPromotedCTA: Se
				} = e, Pe = Object(l.a)(), Ne = ke && ce, Me = Object(d.a)(h);
				Object(o.useEffect)(() => {
					be && Me !== h && be(ve.id)
				}, [h, be, ve.id, Me]);
				const Ae = ge ? void 0 : y,
					Te = n || void 0,
					Ie = Object(Q.a)(le),
					Le = Object(J.a)(le),
					Fe = Object(Z.a)(le),
					Re = ue && Q.a,
					Be = Object(P.a)(ve),
					We = Object(M.c)(ve),
					De = !!ve.media && ve.media.type === U.o.RTJSON,
					Ve = ke && De,
					He = v && !je,
					Ue = !!ve.media && Object(U.H)(ve.media),
					ze = !!ve.recommendationContext,
					qe = {
						flairStyleTemplate: Ae,
						post: ve,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: ee,
						isOverlay: ie,
						shouldShowSubscribeButton: !(ne && ae) || ze && ae,
						subredditOrProfile: Ee
					},
					Ge = Object(s.t)(ve, de),
					{
						source: Je
					} = Ge,
					[Ze, Qe] = Object(o.useState)(!1),
					Xe = Object(o.useCallback)(() => {
						Qe(!Ze), Object(X.Kb)(), Pe(Object($.d)(xe))
					}, [Ze, xe, Pe]);
				let Ye = r.a.createElement(z.a, {
					className: oe.a.classicThumbnail,
					crosspost: Te && ve,
					isMeta: ve.isMeta,
					post: Te || ve,
					redditStyle: ge,
					templatePlaceholderImage: Ae && Ae.postPlaceholderImage,
					removeLink: Ue
				});
				Object(H.b)(ve) && (Ye = r.a.createElement(j, {
					post: ve
				}));
				const Ke = r.a.createElement(I.a, {
					className: Object(a.a)(te.a.classicPostStyles, oe.a.postContainer, Object(K.a)(e), {
						[oe.a.mFirst]: g,
						[oe.a.shouldShowOverflow]: Ne
					}, t),
					isOverlay: ie,
					style: {
						...Object(K.d)(e),
						...Object(K.b)(Ae)
					},
					post: ve,
					onClick: pe,
					eventFactory: x
				}, r.a.createElement(R.a, {
					model: ve,
					handleVote: b,
					showBulkActionCheckbox: Oe,
					isCheckboxSelected: q,
					toggleCheckbox: _e,
					flairStyleTemplate: Ae,
					redditStyle: ge,
					postId: xe
				}), r.a.createElement(T.a, {
					className: Ne ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ae
				}, r.a.createElement(E.a, {
					className: oe.a.eventMeta,
					post: ve
				}), r.a.createElement("div", {
					className: oe.a.mainBody
				}, r.a.createElement("div", {
					className: He ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !He && Ye, r.a.createElement(_.a, {
					crosspost: Te,
					className: oe.a.rightExpando,
					isExpanded: !!h,
					post: ve,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(a.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: Oe
					}),
					"data-click-id": "body"
				}, !!ve.recommendationContext && r.a.createElement(A.a, {
					content: ve.recommendationContext.content,
					layout: G.g.Classic,
					post: ve
				}), r.a.createElement(B.c, {
					className: he ? oe.a.titleWithPoll : void 0,
					format: O,
					poll: he,
					post: ve,
					redditStyle: ge,
					size: B.b.Medium,
					titleColor: Ae && Ae.postTitleColor,
					isOverlay: ie
				}, ve.source && !Te && !ve.isSurveyAd && r.a.createElement(V.a, {
					href: ve.source.url,
					isSponsored: ve.isSponsored,
					postId: ve.id,
					source: ve.source
				}, Object(c.a)(ve))), r.a.createElement(L.a, re({
					key: "PostMeta"
				}, qe)), ue && Ie && Be && r.a.createElement(S.a, {
					thing: ve
				}), ue && Ie && We && r.a.createElement(N.a, {
					onIgnoreReports: me,
					reportable: ve
				}), Se && Je && Je.url && !ve.isSurveyAd && r.a.createElement(u.a, {
					className: oe.a.adLinkWrapper
				}, r.a.createElement(p.a, {
					post: ve,
					adLinkContent: Ge
				})), r.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, r.a.createElement(_.a, {
					className: oe.a.leftExpando,
					crosspost: Te,
					isExpanded: !!h,
					post: ve,
					useMediaIcons: !1
				}), r.a.createElement(m.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ae,
					model: ve,
					onVoteClick: b
				}), r.a.createElement(k.a, {
					className: oe.a.flatlistSeparator
				}), !ve.isSurveyAd && r.a.createElement(k.c, {
					className: oe.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Le,
					hasModPostPerms: Ie,
					hasModFullPerms: Fe,
					hostPostData: w,
					isOverlay: !!ie,
					modModeEnabled: ue,
					onClickInsightsButton: Xe,
					onIgnoreReports: me,
					onOpenReportsDropdown: fe,
					post: ve,
					shouldShowInsightsButton: Ne,
					showEditPost: Ve,
					showEditFlair: we,
					tooltipType: ie ? W.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !Re,
						hide: !Re,
						report: !Re
					})
				})), r.a.createElement(C.d, null))), Object(Y.a)(ve, oe.a, ye, h, Ce, se), Ee && Ze && r.a.createElement(f.a, {
					className: oe.a.creatorStatsContainer,
					post: ve,
					subreddit: Ee,
					isOwnProfileStats: !0
				})));
				return r.a.createElement(D.b, null, Ke)
			});
			t.default = Object(q.a)(se)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CreatorStats").then(n.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					opacity: "0.8"
				}, r.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), r.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), r.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), r.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), r.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, r.a.createElement("stop", {
					stopColor: "#FF538C"
				}), r.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = i.a.div("EventMetaWrapper", m.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: o
				} = e;
				if (!Object(u.a)(o)) return null;
				const i = o && o.eventInfo,
					p = Object(l.a)(o),
					b = i && Object(a.c)(i.eventStart, i.eventEnd);
				return r.a.createElement("div", {
					className: Object(s.a)(m.a.container, t, {
						[m.a.isCompact]: !!n
					})
				}, r.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: o
				}), !p && b && r.a.createElement(d.a, {
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
				a = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => r.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => r.a.createElement("i", {
					className: Object(i.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const v = h.a.span("PostEventFutureText", b.a),
				x = h.a.span("PostEventPastText", b.a),
				g = h.a.span("PostEventNowText", b.a),
				y = h.a.span("Container", b.a),
				O = h.a.wrapped(u, "CalendarIcon", b.a),
				w = h.a.wrapped(p, "LiveIcon", b.a),
				j = h.a.div("LoadingState", b.a);
			class E extends o.Component {
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
						eventIsLive: i,
						eventStart: c
					} = n, d = Object(s.e)(c, o);
					let l, u;
					if (this.state.mounted || d === s.a.Live) l = r.a.createElement(m.c, {
						startTime: c,
						endTime: o,
						isLive: i
					});
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						l = r.a.createElement(j, {
							className: e
						})
					}
					if (i) u = r.a.createElement(g, null, r.a.createElement(w, null), l);
					else if (d === s.a.Future) u = r.a.createElement(v, null, r.a.createElement(O, null), l);
					else {
						if (d !== s.a.Past) return null;
						u = r.a.createElement(x, null, r.a.createElement(O, null), l)
					}
					return r.a.createElement(y, {
						className: e
					}, u)
				}
			}
			t.a = E
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = n("./src/telemetry/models/Outbound.ts"),
				x = n("./src/reddit/components/ExpandoButton/index.m.less"),
				g = n.n(x);
			const y = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(c.a)(g.a.icon, g.a.hideOnHover);
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
			t.a = y(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: r,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: x,
					useMediaIcons: y
				} = e, w = n || b, j = Object(a.e)(h.b), E = Object(a.e)(h.c), _ = t => {
					(j || E) && (t.preventDefault(), e.showModalOnPostLinkClick(w))
				}, k = r && !!n;
				return w.media && !(("rtjson" === w.media.type || "text" === w.media.type || "liveaudio" === w.media.type) && !Object(m.a)(w)) || !!b.pollData ? s.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: x
				}, p ? s.a.createElement(f.a, {
					name: "collapse",
					className: g.a.icon
				}) : y ? s.a.createElement(s.a.Fragment, null, O(w.media && w.media.type, k, b), s.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(g.a.icon, g.a.showOnHover)
				})) : s.a.createElement(f.a, {
					name: "expand",
					className: g.a.icon
				})) : w.source && w.source.url ? s.a.createElement(u.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: w.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, s.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(g.a.icon, g.a.outboundLinkIcon)
				})) : s.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(w.permalink),
					rel: "nofollow",
					onClick: _
				}, s.a.createElement(f.a, {
					name: "text_post",
					className: g.a.icon
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
				a = n.n(s),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(o.a)({
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(o.a)({
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
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
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = n.n(l);
			const p = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: o
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : r.a.createElement(i.a, {
					className: Object(s.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === c.g.Classic,
						[u.a.compactLayout]: n === c.g.Compact,
						[u.a.largeLayout]: n === c.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
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
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: o,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return r.a.createElement("div", l({
					className: Object(s.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(o, e),
					onClick: a
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
				a = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
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
						a = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, a), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/objectSelector/index.ts"),
				g = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(y);
			const w = Object(m.a)(() => Object(s.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
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
				j = "post-container";
			class E extends r.a.Component {
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
						onClick: p,
						pageType: m,
						sendEvent: b,
						style: h,
						ref: x,
						shouldAddGalleryViewability: g = !0
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => p && p(n, l, t, s, m))(n), l.id && s) {
								const {
									source: e
								} = Object(a.t)(l, s);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(O.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": j,
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), w = !!l.media && l.media.type === f.o.VIDEO;
					return (e => l.media && Object(f.E)(l.media) && g ? r.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || w ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(y))
				}
			}
			t.a = w(Object(g.a)(Object(p.c)(E)))
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
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
						r(e ? Object(u.o)({
							postId: n,
							isFollowed: s
						}) : Object(u.g)({
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
					} = this.props, r = this.state.isHovered, a = n.isFollowed;
					let i = a ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && r && (i = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), s.a.createElement("button", {
						className: Object(c.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!n.isFollowed,
							[m.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const b = Object(a.b)(() => Object(i.c)({}), (e, t) => {
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
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
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
				}) : r.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: v,
					isVoteCountAnimation: x,
					postId: g,
					shouldShowUpvoteRatioOnHover: y
				} = e, O = `upvote-button-${t.id}${v?"-overlay":""}`;
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && r.a.createElement(c.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), r.a.createElement(i.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: m,
					postId: g,
					scoreClassName: Object(s.a)(p.a.score, {
						[p.a.allowPointerEvents]: y
					}),
					shouldShowUpvoteRatioOnHover: y
				}))
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/Post/index.tsx"),
				u = n("./src/reddit/selectors/activeModalId.ts"),
				p = n("./src/reddit/selectors/chatPost.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/showPromotedCTA.ts"),
				v = n("./src/reddit/selectors/user.ts");
			const x = {
					autoplayPref: v.b,
					activeModalId: u.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: v.P,
					showPromotedCTA: h.a,
					moderatorPermissions: m.m,
					modModeEnabled: d.T,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.V
				},
				g = Object(o.b)(() => Object(r.c)(x), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						handleVote: t => {
							const o = t === i.a.upvoted ? Object(s.kb)(n) : Object(s.w)(n);
							e(o)
						},
						onIgnoreReports: () => e(Object(s.gb)(n)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(g(Object(c.b)(e)))
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
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const o = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(s.b)(o)(e => {
					const {
						featureEnabled: o,
						...s
					} = e, a = s;
					return o ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
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
				return t && n && o && r ? {
					subreddit: t,
					amount: n,
					memo: o,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}))
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, n, o, s, a) => o ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, s, a)) : i(e, n, s, a) : null,
				i = (e, t, n, o) => r.a.createElement(s.a, {
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
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				s = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				p = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				f = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(s.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var o = n("./src/reddit/components/CreatorStats/helpers.ts"),
				r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => n => ({
					...Object(s.n)(n),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(s.gb)(n),
					post: Object(s.H)(n, e),
					userSubreddit: Object(s.qb)(n),
					actionInfo: Object(s.d)(n, {
						reason: a(t)
					})
				}),
				c = (e, t) => n => ({
					...Object(s.n)(n),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(s.H)(n, t),
					subreddit: Object(s.gb)(n),
					userSubreddit: Object(s.qb)(n)
				}),
				d = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(s.d)(t, {
						pageType: "profile"
					}),
					post: Object(s.H)(t, e, void 0, 0),
					profile: Object(s.Q)(t)
				}),
				u = (e, t, n) => o => ({
					...Object(s.n)(o),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(s.d)(o, {
						reason: d(t)
					}),
					post: Object(s.H)(o, e, void 0, n)
				}),
				p = (e, t, n, o, a, i) => c => ({
					...Object(s.n)(c),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(s.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(s.H)(c, e, void 0, i),
					subreddit: Object(s.gb)(c),
					outbound: {
						postId: n,
						url: t,
						subredditId: o,
						subredditName: a
					}
				}),
				m = (e, t, n) => o => ({
					...Object(s.n)(o),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(s.d)(o, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(s.H)(o, e, void 0, n),
					subreddit: Object(s.gb)(o)
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
				a = n("./src/reddit/selectors/posts.ts");
			const i = e => Object(s.c)(e, {
					experimentName: r.Ge,
					experimentEligibilitySelector: s.a
				}),
				c = (e, t) => t === r.Oe.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(o.a)(a.G, i, (e, t) => c(e, t));
			Object(o.a)((e, t) => t, i, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.c466964dfe9a13221611.js.map