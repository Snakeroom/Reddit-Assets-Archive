// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.98002b067e28d8ef8736.js
// Retrieved at 5/17/2022, 12:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, o) {
					return a(e[o], t[o])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							o = void 0 === n ? "0px" : n,
							s = t[1],
							r = void 0 === s ? o : s,
							a = t[2],
							d = void 0 === a ? o : a,
							c = t[3];
						return o + " " + r + " " + d + " " + (void 0 === c ? r : c)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], r = d.keys(); t = r.next().value;) {
					if (!(n !== t.root || o !== t.rootMargin || a(s, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = d.get(e);
				if (n)
					for (var o, s = n.values(); o = s.next().value;)
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
				return c(e) || new IntersectionObserver(u, e)
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
			var y = ["root", "rootMargin", "threshold"],
				g = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				w = O.hasOwnProperty,
				j = O.toString,
				E = function(e) {
					return y.reduce((function(t, n) {
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
						for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
						return x(v(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(v(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var o = n.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(r.findDOMNode)(e)
						})), x(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(E(t.props)), t.target = t.targetNode, e = v(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), x(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var n = d.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(v(t), e)
						})), x(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = o.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = g.some((function(n) {
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
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, o
				}(s.a.Component);
			x(_, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function r() {}
			r.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, r, i) {
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
					checkPropTypes: r,
					resetWarningCache: s
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
					var s, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						v = !i && !u && !p && !m && /linux/i.test(t),
						x = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (s.msedge = e, s.version = x) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, y && (s.version = y)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, y && (s.version = y)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && y && (s.version = y)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : w ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var j = "";
					s.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (s.osversion = j);
					var E = !s.windows && j.split(".")[0];
					return g || d || "ipad" == r || i && (3 == E || E >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = s(e, (function(e) {
							var n = t - o(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, s) {
					var i = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
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
				return o(e, (function(e, o, s) {
					return n = !!t(e, o, s)
				})), n
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, o, s) {
				return s(e, (function(e, s, r) {
					n = o ? (o = !1, e) : t(n, e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), o(s(e), t, n)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var d = i(e) ? o : s;
				return n && a(e, t, n) && (t = void 0), d(e, r(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, s)
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var o = n("./node_modules/react/index.js");

			function s(e) {
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

			function r(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = r(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof r(e).Element || e instanceof Element
			}

			function d(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return s(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					o = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, a, p = l(t),
					f = s(e),
					b = d(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== c(t) || m(p)) && (h = (o = t) !== r(o) && d(o) ? {
					scrollLeft: (a = o).scrollLeft,
					scrollTop: a.scrollTop
				} : i(o)), d(t) ? ((v = s(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
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
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : d(t) && m(t) ? t : e(h(t))
					}(e),
					o = "body" === c(n),
					s = r(n),
					i = o ? [s].concat(s.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return o ? a : a.concat(v(h(i)))
			}

			function x(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return d(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = r(e), n = y(e); n && x(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === c(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); d(t) && ["html", "body"].indexOf(c(t)) < 0;) {
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
				P = [O, w, j, E],
				C = "start",
				S = "end",
				k = "clippingParents",
				T = "viewport",
				N = "popper",
				A = "reference",
				M = P.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + S])
				}), []),
				I = [].concat(P, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + S])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					n = new Set,
					o = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(s) {
						n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(o) {
							if (!n.has(o)) {
								var s = t.get(o);
								s && e(s)
							}
						})), o.push(s)
					}(e)
				})), o
			}
			var F = {
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

			function W(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					s = t.defaultOptions,
					r = void 0 === s ? F : s;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var s, i, d = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), r),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						c = [],
						l = !1,
						u = {
							state: d,
							setOptions: function(n) {
								p(), d.options = Object.assign(Object.assign(Object.assign({}, r), d.options), n), d.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var s = function(e) {
									var t = B(e);
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
								}([].concat(o, d.options.modifiers)));
								return d.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), d.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										o = void 0 === n ? {} : n,
										s = e.effect;
									if ("function" == typeof s) {
										var r = s({
											state: d,
											name: t,
											instance: u,
											options: o
										});
										c.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = d.elements,
										t = e.reference,
										n = e.popper;
									if (R(t, n)) {
										d.rects = {
											reference: f(t, g(n), "fixed" === d.options.strategy),
											popper: b(n)
										}, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach((function(e) {
											return d.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < d.orderedModifiers.length; o++)
											if (!0 !== d.reset) {
												var s = d.orderedModifiers[o],
													r = s.fn,
													i = s.options,
													a = void 0 === i ? {} : i,
													c = s.name;
												"function" == typeof r && (d = r({
													state: d,
													options: a,
													name: c,
													instance: u
												}) || d)
											} else d.reset = !1, o = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(d)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(s())
									}))
								}))), i
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!R(e, t)) return u;

					function p() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var D = {
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

			function q(e) {
				var t, n = e.reference,
					o = e.element,
					s = e.placement,
					r = s ? H(s) : null,
					i = s ? U(s) : null,
					a = n.x + n.width / 2 - o.width / 2,
					d = n.y + n.height / 2 - o.height / 2;
				switch (r) {
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
					case j:
						t = {
							x: n.x + n.width,
							y: d
						};
						break;
					case E:
						t = {
							x: n.x - o.width,
							y: d
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var c = r ? V(r) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (i) {
						case C:
							t[c] = Math.floor(t[c]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case S:
							t[c] = Math.floor(t[c]) + Math.ceil(n[l] / 2 - o[l] / 2)
					}
				}
				return t
			}
			var z = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function K(e) {
				var t, n = e.popper,
					o = e.popperRect,
					s = e.placement,
					i = e.offsets,
					a = e.position,
					d = e.gpuAcceleration,
					c = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(n * o) / o || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = E,
					v = O,
					x = window;
				if (c) {
					var y = g(n);
					y === r(n) && (y = l(n)), s === O && (v = w, m -= y.clientHeight - o.height, m *= d ? 1 : -1), s === E && (h = j, p -= y.clientWidth - o.width, p *= d ? 1 : -1)
				}
				var _, P = Object.assign({
					position: a
				}, c && z);
				return d ? Object.assign(Object.assign({}, P), {}, ((_ = {})[v] = b ? "0" : "", _[h] = f ? "0" : "", _.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", _)) : Object.assign(Object.assign({}, P), {}, ((t = {})[v] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
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
			var G = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return G[e]
				}))
			}

			function Q(e, t) {
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

			function Y(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === T ? Y(function(e) {
					var t = r(e),
						n = l(e),
						o = t.visualViewport,
						s = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						d = 0;
					return o && (s = o.width, i = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, d = o.offsetTop)), {
						width: s,
						height: i,
						x: a + u(e),
						y: d
					}
				}(e)) : d(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Y(function(e) {
					var t = l(e),
						n = i(e),
						o = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						d = -n.scrollTop;
					return "rtl" === p(o || t).direction && (a += Math.max(t.clientWidth, o ? o.clientWidth : 0) - s), {
						width: s,
						height: r,
						x: a,
						y: d
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && d(e) ? g(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Q(e, n)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(o, [n]),
					r = s[0],
					i = s.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
					}), $(e, r));
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
					r = void 0 === o ? e.placement : o,
					i = n.boundary,
					d = void 0 === i ? k : i,
					c = n.rootBoundary,
					u = void 0 === c ? T : c,
					p = n.elementContext,
					m = void 0 === p ? N : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					x = te("number" != typeof v ? v : ne(v, P)),
					y = m === N ? A : N,
					g = e.elements.reference,
					E = e.rects.popper,
					_ = e.elements[b ? y : m],
					C = ee(a(_) ? _ : _.contextElement || l(e.elements.popper), d, u),
					S = s(g),
					M = q({
						reference: S,
						element: E,
						strategy: "absolute",
						placement: r
					}),
					I = Y(Object.assign(Object.assign({}, E), M)),
					L = m === N ? I : S,
					B = {
						top: C.top - L.top + x.top,
						bottom: L.bottom - C.bottom + x.bottom,
						left: C.left - L.left + x.left,
						right: L.right - C.right + x.right
					},
					F = e.modifiersData.offset;
				if (m === N && F) {
					var R = F[r];
					Object.keys(B).forEach((function(e) {
						var t = [j, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
						B[e] += R[n] * t
					}))
				}
				return B
			}

			function se(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function re(e, t, n) {
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
				return [O, j, w, E].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = W({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								o = e.options,
								s = o.scroll,
								i = void 0 === s || s,
								a = o.resize,
								d = void 0 === a || a,
								c = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, D)
								})), d && c.addEventListener("resize", n.update, D),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, D)
									})), d && c.removeEventListener("resize", n.update, D)
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
							t.modifiersData[n] = q({
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
								s = void 0 === o || o,
								r = n.adaptive,
								i = void 0 === r || r,
								a = {
									placement: H(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), K(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), K(Object.assign(Object.assign({}, a), {}, {
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
									s = t.elements[e];
								d(s) && c(s) && (Object.assign(s.style, n), Object.keys(o).forEach((function(e) {
									var t = o[e];
									!1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
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
											s = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										d(o) && c(o) && (Object.assign(o.style, r), Object.keys(s).forEach((function(e) {
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
								s = n.offset,
								r = void 0 === s ? [0, 0] : s,
								i = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = H(e),
											s = [E, O].indexOf(o) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * s, [E, j].indexOf(o) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, r), e
								}), {}),
								a = i[t.placement],
								d = a.x,
								c = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = i
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
								for (var s = n.mainAxis, r = void 0 === s || s, i = n.altAxis, a = void 0 === i || i, d = n.fallbackPlacements, c = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, v = H(h), x = d || (v === h || !f ? [Z(h)] : function(e) {
										if (H(e) === _) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), y = [h].concat(x).reduce((function(e, n) {
										return e.concat(H(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												s = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												d = n.allowedAutoPlacements,
												c = void 0 === d ? I : d,
												l = U(o),
												u = (l ? a ? M : M.filter((function(e) {
													return U(e) === l
												})) : P).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: s,
														rootBoundary: r,
														padding: i
													})[H(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: u,
											padding: c,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), g = t.rects.reference, S = t.rects.popper, k = new Map, T = !0, N = y[0], A = 0; A < y.length; A++) {
									var L = y[A],
										B = H(L),
										F = U(L) === C,
										R = [O, w].indexOf(B) >= 0,
										W = R ? "width" : "height",
										D = oe(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: c
										}),
										V = R ? F ? j : E : F ? w : O;
									g[W] > S[W] && (V = Z(V));
									var q = Z(V),
										z = [];
									if (r && z.push(D[B] <= 0), a && z.push(D[V] <= 0, D[q] <= 0), z.every((function(e) {
											return e
										}))) {
										N = L, T = !1;
										break
									}
									k.set(L, z)
								}
								if (T)
									for (var K = function(e) {
											var t = y.find((function(t) {
												var n = k.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, J = f ? 3 : 1; J > 0; J--) {
										if ("break" === K(J)) break
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
								s = n.mainAxis,
								r = void 0 === s || s,
								i = n.altAxis,
								a = void 0 !== i && i,
								d = n.boundary,
								c = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								v = oe(t, {
									boundary: d,
									rootBoundary: c,
									padding: u,
									altBoundary: l
								}),
								x = H(t.placement),
								y = U(t.placement),
								_ = !y,
								P = V(x),
								S = "x" === P ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								T = t.rects.reference,
								N = t.rects.popper,
								A = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								M = {
									x: 0,
									y: 0
								};
							if (k) {
								if (r) {
									var I = "y" === P ? O : E,
										L = "y" === P ? w : j,
										B = "y" === P ? "height" : "width",
										F = k[P],
										R = k[P] + v[I],
										W = k[P] - v[L],
										D = m ? -N[B] / 2 : 0,
										q = y === C ? T[B] : N[B],
										z = y === C ? -N[B] : -T[B],
										K = t.elements.arrow,
										J = m && K ? b(K) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										G = Z[I],
										X = Z[L],
										Q = se(0, T[B], J[B]),
										Y = _ ? T[B] / 2 - D - Q - G - A : q - Q - G - A,
										$ = _ ? -T[B] / 2 + D + Q + X + A : z + Q + X + A,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === P ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][P] : 0,
										re = k[P] + Y - ne - te,
										ie = k[P] + $ - ne,
										ae = se(m ? Math.min(R, re) : R, F, m ? Math.max(W, ie) : W);
									k[P] = ae, M[P] = ae - F
								}
								if (a) {
									var de = "x" === P ? O : E,
										ce = "x" === P ? w : j,
										le = k[S],
										ue = se(le + v[de], le, le - v[ce]);
									k[S] = ue, M[S] = ue - le
								}
								t.modifiersData[o] = M
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
								s = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								i = H(n.placement),
								a = V(i),
								d = [E, j].indexOf(i) >= 0 ? "height" : "width";
							if (s && r) {
								var c = n.modifiersData[o + "#persistent"].padding,
									l = b(s),
									u = "y" === a ? O : E,
									p = "y" === a ? w : j,
									m = n.rects.reference[d] + n.rects.reference[a] - r[a] - n.rects.popper[d],
									f = r[a] - n.rects.reference[a],
									h = g(s),
									v = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									x = m / 2 - f / 2,
									y = c[u],
									_ = v - l[d] - c[p],
									P = v / 2 - l[d] / 2 + x,
									C = se(y, P, _),
									S = a;
								n.modifiersData[o] = ((t = {})[S] = C, t.centerOffset = C - P, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								s = n.element,
								r = void 0 === s ? "[data-popper-arrow]" : s,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Q(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, P))
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
								s = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = oe(t, {
									elementContext: "reference"
								}),
								a = oe(t, {
									altBoundary: !0
								}),
								d = re(i, o),
								c = re(a, s, r),
								l = ie(d),
								u = ie(c);
							t.modifiersData[n] = {
								referenceClippingOffsets: d,
								popperEscapeOffsets: c,
								isReferenceHidden: l,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				de = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = n.n(de),
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
					var s = o.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = o.useState({
							styles: {
								popper: {
									position: r.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						d = i[1],
						c = o.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									d({
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
								onFirstUpdate: r.onFirstUpdate,
								placement: r.placement,
								strategy: r.strategy,
								modifiers: [].concat(r.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(s.current, e) ? s.current || e : (s.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, c]),
						u = o.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var o = (n.createPopper || ae)(e, t, l);
							return u.current = o,
								function() {
									o.destroy(), u.current = null
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
				o = "function" == typeof Map,
				s = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, d, c, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (!e(t[d], i[d])) return !1;
								return !0
							}
							if (o && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!e(d.value[1], i.get(d.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								return !0
							}
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (t[d] !== i[d]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (c = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (d = a; 0 != d--;)
								if (!Object.prototype.hasOwnProperty.call(i, c[d])) return !1;
							if (n && t instanceof Element) return !1;
							for (d = a; 0 != d--;)
								if (("_owner" !== c[d] && "__v" !== c[d] && "__o" !== c[d] || !t.$$typeof) && !e(t[c[d]], i[c[d]])) return !1;
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
				return i
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, a) => {
					let {
						routes: d
					} = a;
					const c = i();
					Object(o.a)(e, d, c) ? n(Object(r.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
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
				s = n.n(o);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = r
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: d,
					callToAction: l,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, u && !s && r.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
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
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
				return s.a.createElement(i.b, c({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: n,
					subredditId: o
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let s = 0, r = -999; s <= l; s += 1) {
					const e = n[s],
						t = c[e].belongsTo.id;
					m(e) && s - r >= a && !u.has(t) && (r = s, u.add(t), s === l && (p = !0))
				}
				return p ? s.a.createElement(i.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function m(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(o.a)({
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
			t.a = s
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
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				return h
			}));
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					participantsCount: t
				} = e;
				return u._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [u._param("total participated users", Object(l.b)(t)), u._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var m = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				f = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					post: t
				} = e;
				const n = t.predictionTournament,
					s = n.status === d.a.Live,
					l = n.status === d.a.Closed,
					u = Object(i.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: f.a.container
				}, r.a.createElement("div", {
					className: f.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), s && r.a.createElement("span", {
					className: Object(o.a)(f.a.badge, f.a.live)
				}, b._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(o.a)(f.a.badge, f.a.ended)
				}, b._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== n.totalParticipantsCount && r.a.createElement(p, {
					participantsCount: n.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: f.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: f.a.title
				}, n.name))
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
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: o
				} = e;
				if (!Object(u.a)(o)) return null;
				const a = o && o.eventInfo,
					p = Object(l.a)(o),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(m.a.container, t, {
						[m.a.isCompact]: !!n
					})
				}, s.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, s.a.createElement(d.a, {
					post: o
				}), !p && b && s.a.createElement(c.a, {
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
				s = n.n(o),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(c);
			var u = e => s.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => s.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const v = h.a.span("PostEventFutureText", b.a),
				x = h.a.span("PostEventPastText", b.a),
				y = h.a.span("PostEventNowText", b.a),
				g = h.a.span("Container", b.a),
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
						eventIsLive: a,
						eventStart: d
					} = n, c = Object(r.e)(d, o);
					let l, u;
					if (this.state.mounted || c === r.a.Live) l = s.a.createElement(m.c, {
						startTime: d,
						endTime: o,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = s.a.createElement(j, {
							className: e
						})
					}
					if (a) u = s.a.createElement(y, null, s.a.createElement(w, null), l);
					else if (c === r.a.Future) u = s.a.createElement(v, null, s.a.createElement(O, null), l);
					else {
						if (c !== r.a.Past) return null;
						u = s.a.createElement(x, null, s.a.createElement(O, null), l)
					}
					return s.a.createElement(g, {
						className: e
					}, u)
				}
			}
			t.a = E
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				creatorStatsContainer: "_29kkIwCUHX4r6IdznhyYEE",
				shouldShowOverflow: "_24r9i5ZTqf6P77tAstM-O3",
				shouldUseRoundedBorder: "_3LGrZR10DLu8LvoWRwzdHL",
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/components/Econ/Audio/async.ts"),
				b = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				v = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				x = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				w = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				_ = n("./src/reddit/selectors/moderatorPermissions.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				S = n("./src/lib/ads/index.ts"),
				k = n("./src/lib/classNames/index.ts"),
				T = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				A = n("./src/reddit/components/AwardBadges/index.tsx"),
				M = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				I = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = n("./src/reddit/components/CreatorStats/loader.tsx"),
				B = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = n("./src/reddit/components/ModModeReports/index.tsx"),
				U = n("./src/reddit/components/ModModeReports/helpers.ts"),
				V = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				q = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = n("./src/reddit/components/PostContainer/index.tsx"),
				K = n("./src/reddit/components/PostLeftRail/index.tsx"),
				J = n("./src/reddit/components/PostMedia/index.tsx"),
				Z = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				X = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Q = n.n(X);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = () => s.a.createElement("div", {
					className: Q.a.container
				}, s.a.createElement(G.a, {
					className: Q.a.pinnedIcon,
					isFilled: !0
				}), s.a.createElement("span", {
					className: Q.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ee = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				te = n("./src/reddit/components/PostTitle/index.tsx"),
				ne = n("./src/reddit/components/PostTopLine/index.tsx"),
				oe = n("./src/reddit/components/SourceLink/index.tsx"),
				se = n("./src/reddit/constants/postLayout.ts"),
				re = n("./src/reddit/contexts/InsideOverlay.tsx"),
				ie = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = n("./src/reddit/contexts/Post/index.tsx"),
				de = n("./src/reddit/helpers/isCrosspost.ts"),
				ce = n("./src/reddit/helpers/localStorage/index.ts"),
				le = n("./src/reddit/helpers/postEvent.ts"),
				ue = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				pe = n("./src/reddit/models/Audio/index.ts"),
				me = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				fe = n("./src/reddit/constants/experiments.ts"),
				be = n("./src/reddit/helpers/chooseVariant/index.ts"),
				he = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const ve = Object(a.a)(P.N, e => e.some(he.c)),
				xe = Object(a.a)(ve, e => e),
				ye = (e, t) => Object(be.c)(e, {
					experimentName: fe.Dc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && xe(e, {
							listingKey: n
						})
					}
				});
			var ge = n("./src/reddit/selectors/postFlair.ts"),
				Oe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				we = n("./src/reddit/components/PostTopMeta/index.tsx"),
				je = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ee = n.n(je),
				_e = n("./src/reddit/selectors/i18n/index.ts"),
				Pe = n("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				Ce = n("./src/reddit/components/LargePost/index.m.less"),
				Se = n.n(Ce);
			const ke = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(P.N)(e, {
						listingKey: n
					}) : void 0
				},
				Te = Object(r.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: j.a,
					hideNSFWPref: C.F,
					flairStyleTemplate: ie.V,
					isBlurredPreview: me.b,
					isCurrentUserProfilePost: P.l,
					isLoggedIn: C.P,
					isActive: P.j,
					showPromotedCTA: Oe.a,
					moderatorPermissions: _.m,
					modModeEnabled: ie.T,
					posts: ke,
					postHeightVariant: ye,
					shouldShowNsfwListingBelow: _e.b,
					showEditFlair: ge.a,
					showAwardsPlaque: E.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(_.i)(e, n.id)
					},
					isAdblockAAMitigationEnabled: Pe.a
				}), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						handleVote: t => {
							const o = t === w.a.upvoted ? Object(p.kb)(n) : Object(p.w)(n);
							e(o)
						},
						onIgnoreReports: () => e(Object(p.gb)(n)),
						onOpenReportsDropdown: t => e(Object(m.h)({
							tooltipId: t
						}))
					}
				}),
				Ne = s.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: m,
						forceLoadMedia: w,
						hideNSFWPref: j,
						hostPostData: E,
						imageGalleryCurrentItem: _,
						inSubredditOrProfile: P = !1,
						isBlurredPreview: C,
						isCommentsPage: G,
						isCurrentUserProfilePost: X,
						isFrontpage: Q,
						isGalleryTileLayoutDefault: Y,
						isModWithUserNotesPermissions: re,
						isLoggedIn: ie,
						isOverlay: ae,
						isTopicPage: me,
						isCommentCountAnimationEnabled: be,
						isVoteCountAnimationEnabled: he,
						isCountAnimShadowTestEnabled: ve,
						listingIndex: xe,
						listingKey: ye,
						moderatorPermissions: ge,
						modModeEnabled: Oe,
						onClickPost: je,
						onIgnoreReports: _e,
						onOpenReportsDropdown: Pe,
						post: Ce,
						postHeightVariant: ke,
						scrollerItemRef: Te,
						shouldShowGalleryTileOption: Ne,
						shouldShowInsightsButton: Ae,
						shouldShowNsfwListingBelow: Me,
						showAwardsPlaque: Ie,
						showEditFlair: Le,
						showPromotedCTA: Be,
						subredditOrProfile: Fe,
						userIsOp: Re,
						postId: We,
						postIds: De,
						onceInViewport: He,
						isAdblockAAMitigationEnabled: Ue
					} = e, Ve = Object(y.a)(), qe = !!e.redditStyle || !!e["data-redditstyle"], ze = qe ? void 0 : m, Ke = Object(l.a)(ge), Je = Oe && Ke, Ze = Object(d.a)(ge), Ge = Object(c.a)(ge), Xe = Object(U.c)(Ce), Qe = Object(D.a)(Ce), Ye = !!Ce.media && Ce.media.type === g.o.RTJSON, $e = Re && Ye, et = n ? n - K.a : void 0, tt = !!Ce.recommendationContext, nt = !(Q && ie || me) || tt && ie, ot = (e => e === fe.Je.OnlyTitles)(ke) && !Object(de.a)(Ce), st = (e => e === fe.Je.MediumHeight)(ke) && !Object(de.a)(Ce), rt = (e => {
						var t;
						const {
							post: n,
							postIds: o,
							posts: s
						} = e;
						if (!Object(O.r)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(n.id),
							i = o && 1 === o.indexOf(n.id),
							a = s && s[1] && Object(O.r)(s[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), it = !!(null == E ? void 0 : E.shouldShowLinkedPosts), at = (!P || it || Me) && !Ce.isSponsored, dt = Object(S.t)(Ce, _), {
						source: ct
					} = dt, lt = Object(o.useRef)(null), ut = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == He || He(xe))
						})
					}, [He, xe]);
					Object(x.a)(lt, ut);
					const [pt, mt] = Object(o.useState)(!1), ft = Object(o.useCallback)(() => {
						mt(!pt), Object(ce.Kb)(), Ve(Object(ue.d)(We))
					}, [pt, Ve, We]), bt = Ce.isSponsored && !(Ce.media && g.a.has(Ce.media.type)) && !Ue, ht = !!(C && (null == Fe ? void 0 : Fe.isNSFW));
					return s.a.createElement(v.b, null, s.a.createElement(z.a, {
						className: Object(k.a)(Se.a.container, r, Ee.a.largeAndMediumPostStyles, Ee.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[Ee.a.mUseRedditTheme]: qe,
							promotedvideolink: bt,
							[Se.a.topCompactPost]: rt && rt.hasTopCompactPostStyles,
							[Se.a.bottomCompactPost]: rt && rt.hasBottomCompactPostStyles,
							[Se.a.shouldShowOverflow]: Ae
						}),
						isOverlay: ae,
						style: Object(u.b)(e.flairStyleTemplate),
						post: Ce,
						onClick: je,
						eventFactory: p
					}, s.a.createElement("div", {
						ref: lt
					}), s.a.createElement(ee.a, {
						model: Ce,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ve,
						isVoteCountAnimation: he,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ze,
						redditStyle: qe,
						postId: We
					}), s.a.createElement(q.a, {
						className: Object(k.a)(Se.a.backgroundWrapper, {
							[Se.a.isEvent]: Object(le.a)(Ce),
							[Se.a.shouldUseRoundedBorder]: Ae
						}),
						"data-click-id": "background",
						flairStyleTemplate: ze,
						post: Ce,
						redditStyle: qe
					}, s.a.createElement(B.a, {
						post: Ce
					}), rt && rt.showPinnnedHeader && s.a.createElement($, null), Object(i.c)(Ce) && s.a.createElement(s.a.Fragment, null, s.a.createElement(h.a, {
						post: Ce
					}), s.a.createElement(b.a, {
						post: Ce
					})), !Object(i.c)(Ce) && s.a.createElement(s.a.Fragment, null, !!Ce.recommendationContext && s.a.createElement(V.a, {
						content: Ce.recommendationContext.content,
						layout: se.g.Large,
						post: Ce
					}), s.a.createElement(ne.a, {
						className: Se.a.postTopLine,
						hideAwards: Ie,
						hideNSFWPref: j,
						hostPostData: E,
						iconClassName: Se.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!G,
						isCompactPinnedPost: !!rt,
						isCurrentUserProfilePost: X,
						isModWithUserNotesPermissions: re,
						isOverlay: !!ae,
						isTopicPage: !!me,
						listingKey: ye,
						post: Ce,
						shouldShowSubscribeButton: nt,
						showSubreddit: at,
						showSubredditIcon: !0,
						subredditOrProfile: Fe
					}), s.a.createElement(te.c, {
						className: Se.a.postTitle,
						post: Ce,
						redditStyle: qe,
						size: te.b.Large,
						titleColor: ze && ze.postTitleColor,
						isOverlay: ae
					}), Ce.source && !Ce.isSponsored && !(Ce.media && Object(g.H)(Ce.media)) && !ht && s.a.createElement(oe.a, {
						className: Se.a.sourceLink,
						post: Ce
					})), s.a.createElement("div", {
						className: Se.a.postMediaWrapper
					}, !rt && s.a.createElement(J.a, {
						isGalleryTileLayoutDefault: Y,
						isListing: !0,
						isMediumHeight: st,
						isNotCardView: !!ae,
						isTitleOnly: ot,
						showCentered: !0,
						flairStyleTemplate: ze,
						post: Ce,
						availableWidth: et,
						shouldLoad: w,
						scrollerItemRef: Te,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ne,
						showPromotedCTA: Be
					})), Be && ct && ct.url && !Ce.isSurveyAd && s.a.createElement(T.a, {
						className: Se.a.adLinkWrapper
					}, s.a.createElement(N.a, {
						post: Ce,
						adLinkContent: dt
					})), Oe && Ke && Qe && s.a.createElement("div", {
						className: Se.a.modModeBannerWrapper
					}, s.a.createElement(W.a, {
						thing: Ce
					})), Oe && Ke && Xe && s.a.createElement("div", {
						className: Se.a.modModeBannerWrapper
					}, s.a.createElement(H.a, {
						onIgnoreReports: _e,
						reportable: Ce
					})), Object(pe.b)(Ce) && s.a.createElement(f.a, {
						post: Ce
					}), s.a.createElement(R.d, null), Ie && s.a.createElement(A.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Ce,
						tooltipType: ae ? we.c.Lightbox : void 0
					}), s.a.createElement("div", {
						className: Se.a.flatListContainer
					}, s.a.createElement(I.a, {
						className: Se.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ze,
						model: Ce,
						onVoteClick: e.handleVote
					}), !Ce.isSurveyAd && s.a.createElement(F.c, {
						currentUser: a,
						hasModFlairPerms: Ze,
						hasModFullPerms: Ge,
						hasModPostPerms: Ke,
						hostPostData: E,
						isCommentCountAnimation: be,
						isCountAnimShadowTestEnabled: ve,
						isLargePost: !0,
						isOverlay: !!ae,
						listingKey: ye,
						modModeEnabled: Oe,
						onClickInsightsButton: ft,
						onIgnoreReports: _e,
						onOpenReportsDropdown: Pe,
						post: Ce,
						shouldShowInsightsButton: Ae,
						showEditPost: $e,
						showEditFlair: Le,
						useFlatlistBreakpoints: Object(Z.b)({
							editPost: !1,
							save: !Je,
							hide: !1,
							report: !1
						})
					})), Fe && pt && s.a.createElement(L.a, {
						className: Se.a.creatorStatsContainer,
						post: Ce,
						subreddit: Fe,
						isOwnProfileStats: !0
					})), Q && s.a.createElement(M.a, {
						post: Ce,
						postIds: null != De ? De : [],
						subredditId: null == Fe ? void 0 : Fe.id
					})))
				});
			Ne.displayName = "LargePostMemoized";
			t.default = Object(ae.b)(Te(Object(re.b)(Ne)))
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
				return s
			}));
			var o = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const s = e => (e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(s.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading filter reason…", null, {
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(s.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading reports…", null, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: o,
						hasTooltip: c,
						tooltipText: u,
						className: p
					} = e;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, s.a.createElement(d.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), c && s.a.createElement(i.a, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = n.n(l);
			const p = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : s.a.createElement(a.a, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === d.g.Classic,
						[u.a.compactLayout]: n === d.g.Compact,
						[u.a.largeLayout]: n === d.g.Large
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
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = n.n(d);

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
					post: d,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return s.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, n),
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
				s = n.n(o),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = s.a.memo(e => {
					const t = Object(o.useRef)(null),
						n = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
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
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(g);
			const w = Object(m.a)(() => Object(r.c)({
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
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: m,
						sendEvent: b,
						style: h,
						ref: x,
						shouldAddGalleryViewability: y = !0
					} = this.props, g = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => p && p(n, l, t, r, m))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(O.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": j,
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, n), w = !!l.media && l.media.type === f.o.VIDEO;
					return (e => l.media && Object(f.E)(l.media) && y ? s.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || w ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(g))
				}
			}
			t.a = w(Object(y.a)(Object(p.c)(E)))
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
			class f extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: o
							},
							sendEvent: s
						} = this.props, r = !!o;
						s(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
							isFollowed: r
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
					} = this.props, s = this.state.isHovered, i = n.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && s && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(m.a.collectionFollow, {
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
					onFollow: () => e(Object(c.A)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(i.a, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
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
					postId: y,
					shouldShowUpvoteRatioOnHover: g
				} = e, O = `upvote-button-${t.id}${v?"-overlay":""}`;
				return s.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && s.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), s.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				y = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = n("./src/reddit/models/Media/index.ts"),
				w = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/PostTopLine/index.m.less"),
				_ = n.n(E);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: s,
					hideAwards: E,
					hideNSFWPref: P,
					hostPostData: C,
					iconClassName: S,
					inSubredditOrProfile: k,
					isCommentsPage: T,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: A,
					isModWithUserNotesPermissions: M,
					isOverlay: I,
					isTopicPage: L,
					listingKey: B,
					post: F,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: W,
					showSubreddit: D,
					showSubredditIcon: H,
					subredditOrProfile: U,
					isFollowed: V,
					shouldShowFollowButton: q,
					onFollowPostClick: z
				} = e;
				const K = E || L,
					J = U && Object(w.i)(U),
					Z = Object(i.e)(e => {
						if (!J) return !0;
						const t = Object(j.Fb)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(_.a.container, t)
				}, D && U && r.a.createElement("div", {
					className: _.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, H && r.a.createElement(m.b, {
					className: Object(a.a)(_.a.subredditIcon, S),
					shouldHideNsfwIcon: P,
					subredditOrProfile: U
				}))), r.a.createElement("div", {
					className: _.a.everythingElseWrapper
				}, D && r.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), r.a.createElement(p.d, {
					className: _.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: n,
					isModWithUserNotesPermissions: M,
					tooltipType: I ? p.c.Lightbox : void 0,
					post: F,
					showSub: D,
					subredditOrProfile: U
				}), r.a.createElement(u.a, {
					className: _.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: N,
					post: F,
					tooltipType: I ? p.c.Lightbox : void 0
				}), !K && r.a.createElement(d.a, {
					isPostDetail: T,
					thing: F,
					tooltipType: I ? p.c.Lightbox : void 0
				})), U && Z && D && R && !A && r.a.createElement(b.a, {
					className: _.a.SubscribeButton,
					getEventFactory: e => Object(y.h)(F.id, e ? "unsubscribe" : "subscribe", "post", B, C),
					identifier: {
						name: U.name,
						type: J ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: F.id,
					size: v.d.XS
				}), W && r.a.createElement(x.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(O.D)(F),
					source: F.source
				}, r.a.createElement(g.a, {
					className: _.a.outboundLinkIcon
				})), q && Z && r.a.createElement(l.a, {
					isFilled: !!V,
					onClick: z,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: o,
					cta: s
				} = e;
				return t && n && o && s ? {
					subreddit: t,
					amount: n,
					memo: o,
					cta: s
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: s
					} of t) n.push(Object(o.f)(s));
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
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(c);
			const u = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
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
					const t = Object(r.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return a
			})), n.d(t, "b", (function() {
				return d
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
				s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = e => {
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
				a = (e, t) => n => ({
					...Object(r.n)(n),
					action: s.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.gb)(n),
					post: Object(r.H)(n, e),
					userSubreddit: Object(r.qb)(n),
					actionInfo: Object(r.d)(n, {
						reason: i(t)
					})
				}),
				d = (e, t) => n => ({
					...Object(r.n)(n),
					action: s.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.H)(n, t),
					subreddit: Object(r.gb)(n),
					userSubreddit: Object(r.qb)(n)
				}),
				c = e => {
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
					...Object(r.n)(t),
					action: s.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.H)(t, e, void 0, 0),
					profile: Object(r.Q)(t)
				}),
				u = (e, t, n) => o => ({
					...Object(r.n)(o),
					action: s.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.H)(o, e, void 0, n)
				}),
				p = (e, t, n, o, i, a) => d => ({
					...Object(r.n)(d),
					action: s.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.H)(d, e, void 0, a),
					subreddit: Object(r.gb)(d),
					outbound: {
						postId: n,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				m = (e, t, n) => o => ({
					...Object(r.n)(o),
					action: s.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.H)(o, e, void 0, n),
					subreddit: Object(r.gb)(o)
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var o;

			function s(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.Nc
				});
				return !(!t || Object(o.Kf)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(s.Kf)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: s.Ge,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === s.Oe.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(o.a)(i.G, a, (e, t) => d(e, t));
			Object(o.a)((e, t) => t, a, (e, t) => d(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.98002b067e28d8ef8736.js.map