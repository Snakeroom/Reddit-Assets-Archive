// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.d0146ff4731a355f075f.js
// Retrieved at 6/6/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-dom/index.js"),
				a = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return i(e[r], t[r])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							o = t[1],
							s = void 0 === o ? r : o,
							i = t[2],
							c = void 0 === i ? r : i,
							d = t[3];
						return r + " " + s + " " + c + " " + (void 0 === d ? s : d)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = c.keys(); t = s.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || i(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var r, o = n.values(); r = o.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = l(t, e[n]);
					r && r.handleChange(e[n])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var m = n("./node_modules/invariant/browser.js"),
				f = n.n(m),
				h = {},
				b = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return f()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function v(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var y = ["root", "rootMargin", "threshold"],
				x = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				w = O.hasOwnProperty,
				j = O.toString,
				E = function(e) {
					return y.reduce((function(t, n) {
						if (w.call(e, n)) {
							var r = "root" === n && "[object String]" === j.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
						return g(v(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(v(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), g(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(E(t.props)), t.target = t.targetNode, e = v(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (b.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(v(t), e)
						})), g(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var a = r.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = x.some((function(n) {
							return i(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, a.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(o.a.Component);
			g(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, a) {
					if (a !== r) {
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
					resetWarningCache: o
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
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function r(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var o, s = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						b = !s && !l && /macintosh/i.test(t),
						v = !a && !u && !p && !m && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						x = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !x && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : f ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (o.msedge = e, o.version = g) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, y && (o.version = y)) : s ? (o = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, y && (o.version = y)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && s ? (o[s] = e, o.ios = e, o.osname = "iOS") : b ? (o.mac = e, o.osname = "macOS") : w ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var j = "";
					o.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var E = !o.windows && j.split(".")[0];
					return x || c || "ipad" == s || a && (3 == E || E >= 4 && !O) || o.silk ? o.tablet = e : (O || "iphone" == s || "ipod" == s || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function s(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = o(e, (function(e) {
							var n = t - r(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, r, o) {
					var a = n;
					"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (a = t(o));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([i, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = s, n.check = function(e, t, n) {
					return !a(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
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
			var r = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return r(e, (function(e, r, o) {
					return n = !!t(e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, o) {
				return o(e, (function(e, o, s) {
					n = r ? (r = !1, e) : t(n, e, o, s)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), r(o(e), t, n)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				o = n("./node_modules/lodash/_baseEvery.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : o;
				return n && i(e, t, n) && (t = void 0), c(e, s(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : a,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, o)
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var r = n("./node_modules/react/index.js");

			function o(e) {
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
				return o(l(e)).left + a(e).scrollLeft
			}

			function p(e) {
				return s(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var r, i, p = l(t),
					f = o(e),
					h = c(t),
					b = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (h || !h && !n) && (("body" !== d(t) || m(p)) && (b = (r = t) !== s(r) && c(r) ? {
					scrollLeft: (i = r).scrollLeft,
					scrollTop: i.scrollTop
				} : a(r)), c(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
					x: f.left + b.scrollLeft - v.x,
					y: f.top + b.scrollTop - v.y,
					width: f.width,
					height: f.height
				}
			}

			function h(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function b(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(b(t))
					}(e),
					r = "body" === d(n),
					o = s(n),
					a = r ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					i = t.concat(a);
				return r ? i : i.concat(v(b(a)))
			}

			function g(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function x(e) {
				for (var t = s(e), n = y(e); n && g(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = b(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
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
				k = "auto",
				_ = [O, w, j, E],
				I = "start",
				C = "end",
				S = "clippingParents",
				P = "viewport",
				M = "popper",
				N = "reference",
				T = _.reduce((function(e, t) {
					return e.concat([t + "-" + I, t + "-" + C])
				}), []),
				A = [].concat(_, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + I, t + "-" + C])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function F(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = t.get(r);
								o && e(o)
							}
						})), r.push(o)
					}(e)
				})), r
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
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					s = void 0 === o ? R : o;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var o, a, c = {
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
								var o = function(e) {
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
								}([].concat(r, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var s = o({
											state: c,
											name: t,
											instance: u,
											options: r
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
											reference: f(t, x(n), "fixed" === c.options.strategy),
											popper: h(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[r],
													s = o.fn,
													a = o.options,
													i = void 0 === a ? {} : a,
													d = o.name;
												"function" == typeof s && (c = s({
													state: c,
													options: i,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(o())
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
			var W = {
				passive: !0
			};

			function U(e) {
				return e.split("-")[0]
			}

			function V(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					s = o ? U(o) : null,
					a = o ? V(o) : null,
					i = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (s) {
					case O:
						t = {
							x: i,
							y: n.y - r.height
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
							x: n.x - r.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = s ? H(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (a) {
						case I:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case C:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - r[l] / 2)
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

			function G(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					a = e.offsets,
					i = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(a),
					p = u.x,
					m = u.y,
					f = a.hasOwnProperty("x"),
					h = a.hasOwnProperty("y"),
					b = E,
					v = O,
					g = window;
				if (d) {
					var y = x(n);
					y === s(n) && (y = l(n)), o === O && (v = w, m -= y.clientHeight - r.height, m *= c ? 1 : -1), o === E && (b = j, p -= y.clientWidth - r.width, p *= c ? 1 : -1)
				}
				var k, _ = Object.assign({
					position: i
				}, d && z);
				return c ? Object.assign(Object.assign({}, _), {}, ((k = {})[v] = h ? "0" : "", k[b] = f ? "0" : "", k.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", k)) : Object.assign(Object.assign({}, _), {}, ((t = {})[v] = h ? m + "px" : "", t[b] = f ? p + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Q(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var Z = {
				start: "end",
				end: "start"
			};

			function J(e) {
				return e.replace(/start|end/g, (function(e) {
					return Z[e]
				}))
			}

			function X(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var r = t;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
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
				return t === P ? Y(function(e) {
					var t = s(e),
						n = l(e),
						r = t.visualViewport,
						o = n.clientWidth,
						a = n.clientHeight,
						i = 0,
						c = 0;
					return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, c = r.offsetTop)), {
						width: o,
						height: a,
						x: i + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Y(function(e) {
					var t = l(e),
						n = a(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						i = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(r || t).direction && (i += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: i,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? x(e) : e;
						return i(n) ? t.filter((function(e) {
							return i(e) && X(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					s = o[0],
					a = o.reduce((function(t, n) {
						var r = $(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
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

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					s = void 0 === r ? e.placement : r,
					a = n.boundary,
					c = void 0 === a ? S : a,
					d = n.rootBoundary,
					u = void 0 === d ? P : d,
					p = n.elementContext,
					m = void 0 === p ? M : p,
					f = n.altBoundary,
					h = void 0 !== f && f,
					b = n.padding,
					v = void 0 === b ? 0 : b,
					g = te("number" != typeof v ? v : ne(v, _)),
					y = m === M ? N : M,
					x = e.elements.reference,
					E = e.rects.popper,
					k = e.elements[h ? y : m],
					I = ee(i(k) ? k : k.contextElement || l(e.elements.popper), c, u),
					C = o(x),
					T = q({
						reference: C,
						element: E,
						strategy: "absolute",
						placement: s
					}),
					A = Y(Object.assign(Object.assign({}, E), T)),
					L = m === M ? A : C,
					F = {
						top: I.top - L.top + g.top,
						bottom: L.bottom - I.bottom + g.bottom,
						left: I.left - L.left + g.left,
						right: L.right - I.right + g.right
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

			function oe(e, t, n) {
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
			var ie = D({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								r = e.options,
								o = r.scroll,
								a = void 0 === o || o,
								i = r.resize,
								c = void 0 === i || i,
								d = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, W)
								})), c && d.addEventListener("resize", n.update, W),
								function() {
									a && l.forEach((function(e) {
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
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								s = n.adaptive,
								a = void 0 === s || s,
								i = {
									placement: U(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
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
									r = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
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
										var r = t.elements[e],
											o = t.attributes[e] || {},
											s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(r) && d(r) && (Object.assign(r.style, s), Object.keys(o).forEach((function(e) {
											r.removeAttribute(e)
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
								r = e.name,
								o = n.offset,
								s = void 0 === o ? [0, 0] : o,
								a = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = U(e),
											o = [E, O].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											a = s[0],
											i = s[1];
										return a = a || 0, i = (i || 0) * o, [E, j].indexOf(r) >= 0 ? {
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
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = a
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name;
							if (!t.modifiersData[r]._skip) {
								for (var o = n.mainAxis, s = void 0 === o || o, a = n.altAxis, i = void 0 === a || a, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, h = n.allowedAutoPlacements, b = t.options.placement, v = U(b), g = c || (v === b || !f ? [Q(b)] : function(e) {
										if (U(e) === k) return [];
										var t = Q(e);
										return [J(e), t, J(t)]
									}(b)), y = [b].concat(g).reduce((function(e, n) {
										return e.concat(U(n) === k ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												s = n.rootBoundary,
												a = n.padding,
												i = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = V(r),
												u = (l ? i ? T : T.filter((function(e) {
													return V(e) === l
												})) : _).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: s,
														padding: a
													})[U(n)], t
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
											allowedAutoPlacements: h
										}) : n)
									}), []), x = t.rects.reference, C = t.rects.popper, S = new Map, P = !0, M = y[0], N = 0; N < y.length; N++) {
									var L = y[N],
										F = U(L),
										R = V(L) === I,
										B = [O, w].indexOf(F) >= 0,
										D = B ? "width" : "height",
										W = re(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										H = B ? R ? j : E : R ? w : O;
									x[D] > C[D] && (H = Q(H));
									var q = Q(H),
										z = [];
									if (s && z.push(W[F] <= 0), i && z.push(W[H] <= 0, W[q] <= 0), z.every((function(e) {
											return e
										}))) {
										M = L, P = !1;
										break
									}
									S.set(L, z)
								}
								if (P)
									for (var G = function(e) {
											var t = y.find((function(t) {
												var n = S.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, K = f ? 3 : 1; K > 0; K--) {
										if ("break" === G(K)) break
									}
								t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0)
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
								r = e.name,
								o = n.mainAxis,
								s = void 0 === o || o,
								a = n.altAxis,
								i = void 0 !== a && a,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								b = void 0 === f ? 0 : f,
								v = re(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								g = U(t.placement),
								y = V(t.placement),
								k = !y,
								_ = H(g),
								C = "x" === _ ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								P = t.rects.reference,
								M = t.rects.popper,
								N = "function" == typeof b ? b(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : b,
								T = {
									x: 0,
									y: 0
								};
							if (S) {
								if (s) {
									var A = "y" === _ ? O : E,
										L = "y" === _ ? w : j,
										F = "y" === _ ? "height" : "width",
										R = S[_],
										B = S[_] + v[A],
										D = S[_] - v[L],
										W = m ? -M[F] / 2 : 0,
										q = y === I ? P[F] : M[F],
										z = y === I ? -M[F] : -P[F],
										G = t.elements.arrow,
										K = m && G ? h(G) : {
											width: 0,
											height: 0
										},
										Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Z = Q[A],
										J = Q[L],
										X = oe(0, P[F], K[F]),
										Y = k ? P[F] / 2 - W - X - Z - N : q - X - Z - N,
										$ = k ? -P[F] / 2 + W + X + J + N : z + X + J + N,
										ee = t.elements.arrow && x(t.elements.arrow),
										te = ee ? "y" === _ ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
										se = S[_] + Y - ne - te,
										ae = S[_] + $ - ne,
										ie = oe(m ? Math.min(B, se) : B, R, m ? Math.max(D, ae) : D);
									S[_] = ie, T[_] = ie - R
								}
								if (i) {
									var ce = "x" === _ ? O : E,
										de = "x" === _ ? w : j,
										le = S[C],
										ue = oe(le + v[ce], le, le - v[de]);
									S[C] = ue, T[C] = ue - le
								}
								t.modifiersData[r] = T
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								r = e.name,
								o = n.elements.arrow,
								s = n.modifiersData.popperOffsets,
								a = U(n.placement),
								i = H(a),
								c = [E, j].indexOf(a) >= 0 ? "height" : "width";
							if (o && s) {
								var d = n.modifiersData[r + "#persistent"].padding,
									l = h(o),
									u = "y" === i ? O : E,
									p = "y" === i ? w : j,
									m = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c],
									f = s[i] - n.rects.reference[i],
									b = x(o),
									v = b ? "y" === i ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
									g = m / 2 - f / 2,
									y = d[u],
									k = v - l[c] - d[p],
									_ = v / 2 - l[c] / 2 + g,
									I = oe(y, _, k),
									C = i;
								n.modifiersData[r] = ((t = {})[C] = I, t.centerOffset = I - _, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								s = void 0 === o ? "[data-popper-arrow]" : o,
								a = n.padding,
								i = void 0 === a ? 0 : a;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && X(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof i ? i : ne(i, _))
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
								r = t.rects.reference,
								o = t.rects.popper,
								s = t.modifiersData.preventOverflow,
								a = re(t, {
									elementContext: "reference"
								}),
								i = re(t, {
									altBoundary: !0
								}),
								c = se(a, r),
								d = se(i, o, s),
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
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						a = r.useState({
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
						d = r.useMemo((function() {
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
						l = r.useMemo((function() {
							var e = {
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, d]),
						u = r.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || ie)(e, t, l);
							return u.current = r,
								function() {
									r.destroy(), u.current = null
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
				r = "function" == typeof Map,
				o = "function" == typeof Set,
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
							if (r && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], a.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && a instanceof Set) {
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
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				a = Object(r.a)(o),
				i = Object(r.a)(s)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				o = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
					Object(r.a)(e, c, d) ? n(Object(s.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
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
			var r = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(r);
			const s = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
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
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && s.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), s.a.createElement(i.a, {
					href: c.url.replace(r.a.redditUrl, ""),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(a.b, d({
					className: Object(s.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				i = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: m,
					thumbnailContainerClassName: f,
					url: h,
					usePreview: b
				} = e;
				return o.a.createElement("div", {
					className: Object(s.a)(c.a.thumbnailContainer, t)
				}, o.a.createElement(a.a, {
					className: Object(s.a)(c.a.thumbnail, n),
					containerClassName: f,
					crosspost: r,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: p,
					templatePlaceholderImage: m,
					url: p ? void 0 : h,
					usePreview: b
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				h = n("./src/config.ts"),
				b = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/Econ/Audio/index.m.less"),
				y = n.n(g),
				x = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
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
					} = t, s = () => Math.floor(10 * Math.random() + 1), i = Object(b.e)(v.db), [c, d] = Object(r.useState)(!1), [l, u] = Object(r.useState)(s());
					return Object(r.useEffect)(() => {
						const e = setInterval(() => {
							d(!0), setTimeout(() => d(!1), 3500), u(s())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == n ? void 0 : n.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: y.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement("div", {
						className: y.a.classicSpeaker
					}, c && o.a.createElement(O.a, {
						className: Object(a.a)(y.a.speakerRings, {
							[y.a.nightMode]: i
						})
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: y.a.snoovatar,
						src: `${h.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: w._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !c && o.a.createElement("div", {
						className: y.a.muteContainer
					}, o.a.createElement(x.a, {
						className: y.a.muteIcon
					})))) : o.a.createElement("div", {
						className: y.a.endedClassicContainer
					}, o.a.createElement(x.a, {
						className: y.a.muteIcon
					}))
				},
				E = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				k = n("./src/reddit/components/ExpandoButton/index.tsx"),
				_ = n("./src/reddit/components/Flatlist/index.tsx"),
				I = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				S = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				P = n("./src/reddit/components/ModModeReports/index.tsx"),
				M = n("./src/reddit/components/ModModeReports/helpers.ts"),
				N = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				T = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				A = n("./src/reddit/components/PostContainer/index.tsx"),
				L = n("./src/reddit/components/PostMeta/index.tsx"),
				F = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = n("./src/reddit/components/PostTitle/index.tsx"),
				D = n("./src/reddit/components/PostTopMeta/index.tsx"),
				W = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				U = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				V = n("./src/reddit/models/Audio/index.ts"),
				H = n("./src/reddit/models/Media/index.ts"),
				q = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				G = n("./src/reddit/constants/postLayout.ts"),
				K = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Q = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = n("./src/reddit/helpers/localStorage/index.ts"),
				X = n("./src/reddit/helpers/search/renderMedia.tsx"),
				Y = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ClassicPost/index.m.less"),
				re = n.n(ne);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(i.a)(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: i,
					handleVote: h,
					isExpanded: b,
					inSubredditOrProfile: v,
					eventFactory: g,
					first: y,
					flairStyleTemplate: x,
					formatTitle: O,
					hostPostData: w,
					isCheckboxSelected: z,
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
					onSizeChanged: he,
					poll: be,
					post: ve,
					postId: ge,
					redditStyle: ye,
					scrollerItemRef: xe,
					showBulkActionCheckbox: Oe,
					showEditFlair: we,
					showMedia: je,
					subredditOrProfile: Ee,
					toggleCheckbox: ke,
					userIsOp: _e,
					shouldShowGalleryTileOption: Ie,
					showPromotedCTA: Ce
				} = e, Se = Object(l.a)(), Pe = _e && ce, Me = Object(d.a)(b);
				Object(r.useEffect)(() => {
					he && Me !== b && he(ve.id)
				}, [b, he, ve.id, Me]);
				const Ne = ye ? void 0 : x,
					Te = n || void 0,
					Ae = Object(Z.a)(le),
					Le = Object(K.a)(le),
					Fe = Object(Q.a)(le),
					Re = ue && Z.a,
					Be = Object(S.a)(ve),
					De = Object(M.c)(ve),
					We = !!ve.media && ve.media.type === H.o.RTJSON,
					Ue = _e && We,
					Ve = v && !je,
					He = !!ve.media && Object(H.H)(ve.media),
					qe = !!ve.recommendationContext,
					ze = {
						flairStyleTemplate: Ne,
						post: ve,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: ee,
						isOverlay: ie,
						shouldShowSubscribeButton: !(ne && ae) || qe && ae,
						subredditOrProfile: Ee
					},
					Ge = Object(s.t)(ve, de),
					{
						source: Ke
					} = Ge,
					[Qe, Ze] = Object(r.useState)(!1),
					Je = Object(r.useCallback)(() => {
						Ze(!Qe), Object(J.Kb)(), Se(Object($.d)(ge))
					}, [Qe, ge, Se]);
				let Xe = o.a.createElement(q.a, {
					className: re.a.classicThumbnail,
					crosspost: Te && ve,
					isMeta: ve.isMeta,
					post: Te || ve,
					redditStyle: ye,
					templatePlaceholderImage: Ne && Ne.postPlaceholderImage,
					removeLink: He
				});
				Object(V.b)(ve) && (Xe = o.a.createElement(j, {
					post: ve
				}));
				const Ye = o.a.createElement(A.a, {
					className: Object(a.a)(te.a.classicPostStyles, re.a.postContainer, Object(Y.a)(e), {
						[re.a.mFirst]: y,
						[re.a.shouldShowOverflow]: Pe
					}, t),
					isOverlay: ie,
					style: {
						...Object(Y.d)(e),
						...Object(Y.b)(Ne)
					},
					post: ve,
					onClick: pe,
					eventFactory: g
				}, o.a.createElement(R.a, {
					model: ve,
					handleVote: h,
					showBulkActionCheckbox: Oe,
					isCheckboxSelected: z,
					toggleCheckbox: ke,
					flairStyleTemplate: Ne,
					redditStyle: ye,
					postId: ge
				}), o.a.createElement(T.a, {
					className: Pe ? re.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ne
				}, o.a.createElement(E.a, {
					className: re.a.eventMeta,
					post: ve
				}), o.a.createElement("div", {
					className: re.a.mainBody
				}, o.a.createElement("div", {
					className: Ve ? re.a.expandoContainer : re.a.thumbnailContainer
				}, !Ve && Xe, o.a.createElement(k.a, {
					crosspost: Te,
					className: re.a.rightExpando,
					isExpanded: !!b,
					post: ve,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)(re.a.content, {
						[re.a.showBulkActionCheckbox]: Oe
					}),
					"data-click-id": "body"
				}, !!ve.recommendationContext && o.a.createElement(N.a, {
					content: ve.recommendationContext.content,
					layout: G.g.Classic,
					post: ve
				}), o.a.createElement(B.c, {
					className: be ? re.a.titleWithPoll : void 0,
					format: O,
					poll: be,
					post: ve,
					redditStyle: ye,
					size: B.b.Medium,
					titleColor: Ne && Ne.postTitleColor,
					isOverlay: ie
				}, ve.source && !Te && !ve.isSurveyAd && o.a.createElement(U.a, {
					href: ve.source.url,
					isSponsored: ve.isSponsored,
					postId: ve.id,
					source: ve.source
				}, Object(c.a)(ve))), o.a.createElement(L.a, oe({
					key: "PostMeta"
				}, ze)), ue && Ae && Be && o.a.createElement(C.a, {
					thing: ve
				}), ue && Ae && De && o.a.createElement(P.a, {
					onIgnoreReports: me,
					reportable: ve
				}), Ce && Ke && Ke.url && !ve.isSurveyAd && o.a.createElement(u.a, {
					className: re.a.adLinkWrapper
				}, o.a.createElement(p.a, {
					post: ve,
					adLinkContent: Ge
				})), o.a.createElement("div", {
					className: re.a.flatlistContainer
				}, o.a.createElement(k.a, {
					className: re.a.leftExpando,
					crosspost: Te,
					isExpanded: !!b,
					post: ve,
					useMediaIcons: !1
				}), o.a.createElement(m.a, {
					className: re.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ne,
					model: ve,
					onVoteClick: h
				}), o.a.createElement(_.a, {
					className: re.a.flatlistSeparator
				}), !ve.isSurveyAd && o.a.createElement(_.c, {
					className: re.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Le,
					hasModPostPerms: Ae,
					hasModFullPerms: Fe,
					hostPostData: w,
					isOverlay: !!ie,
					modModeEnabled: ue,
					onClickInsightsButton: Je,
					onIgnoreReports: me,
					onOpenReportsDropdown: fe,
					post: ve,
					shouldShowInsightsButton: Pe,
					showEditPost: Ue,
					showEditFlair: we,
					tooltipType: ie ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !Re,
						hide: !Re,
						report: !Re
					})
				})), o.a.createElement(I.d, null))), Object(X.a)(ve, re.a, xe, b, Ie, se), Ee && Qe && o.a.createElement(f.a, {
					className: re.a.creatorStatsContainer,
					post: ve,
					subreddit: Ee,
					isOwnProfileStats: !0
				})));
				return o.a.createElement(W.b, null, Ye)
			});
			t.default = Object(z.a)(se)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", {
					opacity: "0.8"
				}, o.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), o.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), o.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), o.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), o.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					post: r
				} = e;
				if (!Object(u.a)(r)) return null;
				const i = r && r.eventInfo,
					p = Object(l.a)(r),
					h = i && Object(a.c)(i.eventStart, i.eventEnd);
				return o.a.createElement("div", {
					className: Object(s.a)(m.a.container, t, {
						[m.a.isCompact]: !!n
					})
				}, o.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: r
				}), !p && h && o.a.createElement(d.a, {
					className: m.a.eventFollowButton,
					post: r,
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/eventTools/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(i.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = n.n(f),
				b = n("./src/lib/lessComponent.tsx");
			const v = b.a.span("PostEventFutureText", h.a),
				g = b.a.span("PostEventPastText", h.a),
				y = b.a.span("PostEventNowText", h.a),
				x = b.a.span("Container", h.a),
				O = b.a.wrapped(u, "CalendarIcon", h.a),
				w = b.a.wrapped(p, "LiveIcon", h.a),
				j = b.a.div("LoadingState", h.a);
			class E extends r.Component {
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
						eventEnd: r,
						eventIsLive: i,
						eventStart: c
					} = n, d = Object(s.e)(c, r);
					let l, u;
					if (this.state.mounted || d === s.a.Live) l = o.a.createElement(m.c, {
						startTime: c,
						endTime: r,
						isLive: i
					});
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						l = o.a.createElement(j, {
							className: e
						})
					}
					if (i) u = o.a.createElement(y, null, o.a.createElement(w, null), l);
					else if (d === s.a.Future) u = o.a.createElement(v, null, o.a.createElement(O, null), l);
					else {
						if (d !== s.a.Past) return null;
						u = o.a.createElement(g, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(x, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/components/ExpandoButton/index.m.less"),
				x = n.n(y);
			const O = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 ? arguments[2] : void 0;
					const r = Object(c.a)(x.a.icon, x.a.hideOnHover);
					if (t) return s.a.createElement(f.a, {
						name: "crosspost",
						className: r
					});
					if (n.pollData) return s.a.createElement(f.a, {
						name: "poll_post",
						className: r
					});
					if (n.audioRoom) return s.a.createElement(f.a, {
						name: "audio",
						className: r
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return s.a.createElement(f.a, {
								name: "gif_post",
								className: r
							});
						case h.o.IMAGE:
							return s.a.createElement(f.a, {
								name: "image_post",
								className: r
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return s.a.createElement(f.a, {
								name: "text_post",
								className: r
							});
						case h.o.VIDEO:
							return s.a.createElement(f.a, {
								name: "video_post",
								className: r
							});
						case h.o.GALLERY:
							return s.a.createElement(f.a, {
								name: "media_gallery",
								className: r
							});
						case h.o.EMBED:
						default:
							return s.a.createElement(f.a, {
								name: "embed",
								className: r
							})
					}
				};
			t.a = O(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: p,
					post: h,
					toggle: y,
					useMediaIcons: O
				} = e, j = n || h, E = Object(a.e)(v.b), k = Object(a.e)(v.c), _ = t => {
					(E || k) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, I = j.media, C = Object(b.p)(h), S = o && !!n;
				return I && !C && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(m.a)(j)) || !!h.pollData ? s.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: y
				}, p ? s.a.createElement(f.a, {
					name: "collapse",
					className: x.a.icon
				}) : O ? s.a.createElement(s.a.Fragment, null, w(j.media && j.media.type, S, h), s.a.createElement(f.a, {
					name: "expand",
					className: Object(c.a)(x.a.icon, x.a.showOnHover)
				})) : s.a.createElement(f.a, {
					name: "expand",
					className: x.a.icon
				})) : j.source && j.source.url ? s.a.createElement(u.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? g.SourceElement.PostImage : g.SourceElement.ListingPostImage,
					target: "_blank"
				}, s.a.createElement(f.a, {
					name: "external_link",
					className: Object(c.a)(x.a.icon, x.a.outboundLinkIcon)
				})) : s.a.createElement(i.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, x.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(j.permalink),
					rel: "nofollow",
					onClick: _
				}, s.a.createElement(f.a, {
					name: "text_post",
					className: x.a.icon
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
				return o
			}));
			var r = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(r.b)(e, r.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(r.b)(e, r.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(r.b)(e, r.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(r.b)(e, r.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(r.a)({
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					post: r
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.a, {
					className: Object(s.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === c.g.Classic,
						[u.a.compactLayout]: n === c.g.Compact,
						[u.a.largeLayout]: n === c.g.Large
					}),
					content: t,
					rtJsonElementProps: p(r),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(s.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(r, e),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						s = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						a = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, a), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				x = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(x);
			const w = Object(m.a)(() => Object(s.c)({
					basePixelMetadata: Object(g.a)((e, t) => {
						let {
							post: n
						} = t;
						return Object(h.b)(e, n.id)
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
						return Object(h.i)(e, {
							postId: n.id
						})
					},
					pageType: e => Object(b.d)(e).pageType
				})),
				j = "post-container";
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: r,
						imageGalleryCurrentItem: s,
						makePostContainerId: d,
						post: l,
						onClick: p,
						pageType: m,
						sendEvent: h,
						style: b,
						ref: g,
						shouldAddGalleryViewability: y = !0
					} = this.props, x = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: b,
						ref: g,
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
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(O.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": j,
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), w = !!l.media && l.media.type === f.o.VIDEO;
					return (e => l.media && Object(f.E)(l.media) && y ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || w ? o.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(x))
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
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
								isFollowed: r
							},
							sendEvent: o
						} = this.props, s = !!r;
						o(e ? Object(u.o)({
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
					} = this.props, o = this.state.isHovered, a = n.isFollowed;
					let i = a ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && o && (i = r.fbt._("Unfollow", null, {
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
			const h = Object(a.b)(() => Object(i.c)({}), (e, t) => {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(s.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * s.b - 2 * s.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(a.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: h,
					redditStyle: b,
					isOverlay: v,
					isVoteCountAnimation: g,
					postId: y,
					shouldShowUpvoteRatioOnHover: x
				} = e, O = `upvote-button-${t.id}${v?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: b
				}, r && o.a.createElement(c.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: b,
					upvoteTooltipId: O,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(s.a)(p.a.score, {
						[p.a.allowPointerEvents]: x
					}),
					shouldShowUpvoteRatioOnHover: x
				}))
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
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
				h = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/showPromotedCTA.ts"),
				v = n("./src/reddit/selectors/user.ts");
			const g = {
					autoplayPref: v.b,
					activeModalId: u.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.Q,
					showPromotedCTA: b.a,
					moderatorPermissions: m.m,
					modModeEnabled: d.U,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.W
				},
				y = Object(r.b)(() => Object(o.c)(g), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						handleVote: t => {
							const r = t === i.a.upvoted ? Object(s.kb)(n) : Object(s.w)(n);
							e(r)
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
			t.a = e => Object(l.b)(y(Object(c.b)(e)))
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r,
						...s
					} = e, a = s;
					return r ? o.a.createElement(t, a) : void 0 !== n ? o.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: o
				} = e;
				return t && n && r && o ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: o
					} of t) n.push(Object(r.f)(o));
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, n, r, s, a) => r ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, s, a)) : i(e, n, s, a) : null,
				i = (e, t, n, r) => o.a.createElement(s.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: r,
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
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return v
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				f = e => Object(r.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				b = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(s.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
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
			var r = n("./src/reddit/components/CreatorStats/helpers.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case r.b.Available:
							return "insights_shown";
						case r.b.NotAvailableYet:
							return "not_enough_views";
						case r.b.NotAvailable:
							return "post_too_old";
						case r.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => n => ({
					...Object(s.n)(n),
					action: o.c.VIEW,
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
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(s.H)(n, t),
					subreddit: Object(s.gb)(n),
					userSubreddit: Object(s.qb)(n)
				}),
				d = e => {
					switch (e) {
						case r.b.Available:
							return "stats";
						case r.b.NotAvailableYet:
							return "not_enough_views";
						case r.b.NotAvailable:
						case r.b.Expired:
							return "no_data";
						case r.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(s.n)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(s.d)(t, {
						pageType: "profile"
					}),
					post: Object(s.H)(t, e, void 0, 0),
					profile: Object(s.Q)(t)
				}),
				u = (e, t, n) => r => ({
					...Object(s.n)(r),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(s.d)(r, {
						reason: d(t)
					}),
					post: Object(s.H)(r, e, void 0, n)
				}),
				p = (e, t, n, r, a, i) => c => ({
					...Object(s.n)(c),
					action: o.c.CLICK,
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
						subredditId: r,
						subredditName: a
					}
				}),
				m = (e, t, n) => r => ({
					...Object(s.n)(r),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(s.d)(r, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(s.H)(r, e, void 0, n),
					subreddit: Object(s.gb)(r)
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(r || (r = {}))
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/subredditModeration/constants.ts");
			var s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.g:
						case o.f:
							return null;
						case o.e:
							return t.payload;
						default:
							return e
					}
				},
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(a.e)(n, r);
							return {
								...e,
								[o]: !0
							}
						}
						case o.f:
						case o.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(a.e)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(r.c)({
					error: s,
					pending: c
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, o = Object(a.e)(r, n);
						return {
							...e,
							[o]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var m = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				f = n("./node_modules/icepick/icepick.js");
			const h = {};
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.d:
					case o.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, o = {
							[n]: r
						};
						return Object(f.merge)(e, o)
					}
					case o.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(f.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.j:
					case o.i:
						return null;
					case o.h:
						return t.payload;
					default:
						return e
				}
			};
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.j:
							return !0;
						case o.i:
						case o.h:
							return !1;
						default:
							return e
					}
				},
				y = Object(r.c)({
					error: v,
					pending: g
				});
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.j:
							return null;
						case o.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(r.c)({
					api: y,
					result: x
				});
			const w = {};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case o.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case o.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, o = r[0];
							return o && e[n] && -1 === e[n].indexOf(o) ? {
								[n]: [o, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				E = Object(r.c)({
					api: d,
					fetchedTokens: u,
					loadMore: m,
					models: b,
					search: O,
					userOrder: j
				});
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.n:
					case o.m:
						return null;
					case o.l:
						return t.payload;
					default:
						return e
				}
			};
			const _ = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(a.f)(n, r);
							return {
								...e,
								[o]: !0
							}
						}
						case o.m:
						case o.l: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(a.f)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				C = Object(r.c)({
					error: k,
					pending: I
				});
			const S = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, o = Object(a.f)(r, n);
						return {
							...e,
							[o]: !0
						}
					}
					default:
						return e
				}
			};
			const M = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.m: {
						const {
							subredditId: e,
							loadMoreToken: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								subredditId: n,
								approvedTalkHosts: r,
								forceRefresh: o
							} = t.payload, s = {
								[n]: [...o ? [] : e[n] || [], ...r]
							};
							return Object(f.merge)(e, s)
						}
						case o.o: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = {
								[n]: e[n].filter(e => e.redditor.id !== r)
							};
							return Object(f.merge)(e, o)
						}
						default:
							return e
					}
				},
				L = Object(r.c)({
					api: C,
					fetchedTokens: P,
					loadMore: N,
					models: A
				}),
				F = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.g:
					case F.i:
						return null;
					case F.f:
						return t.payload;
					default:
						return e
				}
			};
			var B = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.i:
							return !0;
						case F.g:
						case F.f:
							return !1;
						default:
							return e
					}
				},
				D = Object(r.c)({
					error: R,
					pending: B
				}),
				W = n("./node_modules/lodash/merge.js"),
				U = n.n(W),
				V = n("./node_modules/lodash/omit.js"),
				H = n.n(V);
			const q = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.g:
					case F.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return U()({
							...e
						}, {
							[n]: r
						})
					}
					case F.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, o = H()(e[n], r);
						return {
							...e,
							[n]: o
						}
					}
					case F.a:
					case F.b:
					case F.h:
						const {
							subredditId: n, userName: r, applied: o
						} = t.payload;
						return o ? {
							...e,
							[n]: {
								...e[n],
								[r]: o
							}
						} : e;
					default:
						return e
				}
			};
			const G = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.g: {
						const {
							key: n,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var Q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case F.l:
					case F.k:
						return null;
					case F.j:
						return t.payload;
					default:
						return e
				}
			};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.l:
							return !0;
						case F.k:
						case F.j:
							return !1;
						default:
							return e
					}
				},
				J = Object(r.c)({
					error: Q,
					pending: Z
				});
			var X = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case F.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				Y = Object(r.c)({
					api: J,
					result: X
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case F.a: {
							const {
								key: n,
								userName: r
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(r)) {
								const t = [...e[n], r];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case F.c: {
							const {
								userName: n
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== n);
							return r
						}
						default:
							return e
					}
				},
				te = Object(r.c)({
					api: D,
					models: z,
					pageInfo: K,
					search: Y,
					userOrder: ee
				}),
				ne = n("./src/reddit/actions/moderationLog/constants.ts");
			const re = {};
			var oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							actionIds: n,
							key: r,
							subredditId: o
						} = t.payload;
						return {
							...e,
							[o]: {
								...e[o] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const se = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, o = {};
							n.forEach(e => {
								o[e.id] = e
							});
							const s = {
								[r]: o
							};
							return U()({
								...e
							}, s)
						}
						default:
							return e
					}
				},
				ie = Object(r.c)({
					itemOrder: oe,
					models: ae
				});
			var ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const de = {};
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							hasNextPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ue = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							hasPreviousPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const me = [];
			var fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.a: {
						const {
							normalizedModerators: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				be = Object(r.c)({
					actions: ie,
					endCursor: ce,
					hasNextPage: le,
					hasPreviousPage: pe,
					moderators: fe,
					startCursor: he
				});
			const ve = {};
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.O:
					case o.y: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, o = {
							[n]: r
						};
						return Object(f.merge)(e, o)
					}
					case o.C: {
						const {
							subredditId: n,
							userId: r,
							permissions: o
						} = t.payload;
						return Object(f.setIn)(e, [n, r, "modPermissions"], o)
					}
					case o.jb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(f.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const ye = {};
			var xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.z:
					case o.y: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case o.x: {
						const {
							error: n,
							key: r,
							subredditId: o
						} = t.payload;
						return o ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const Oe = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.x:
						case o.y: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case o.z: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				je = Object(r.c)({
					error: xe,
					pending: we
				});
			const Ee = {};
			var ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.y: {
							const {
								subredditId: n,
								response: r,
								key: o
							} = t.payload;
							return Object(f.setIn)(e, [n, o], r.moderatorIds)
						}
						case o.jb: {
							const {
								subredditId: n,
								userId: r,
								key: o
							} = t.payload, s = e[n][o].filter(e => e !== r);
							return Object(f.setIn)(e, [n, o], s)
						}
						default:
							return e
					}
				},
				_e = Object(r.c)({
					data: ke,
					api: je
				});
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.F:
					case o.E:
						return null;
					case o.D:
						return t.payload;
					default:
						return e
				}
			};
			var Ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.E:
						case o.D:
							return !1;
						case o.F:
							return !0;
						default:
							return e
					}
				},
				Se = Object(r.c)({
					error: Ie,
					pending: Ce
				});
			const Pe = {};
			var Me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.E: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(f.set)(e, n, r)
					}
					case o.gb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(f.unsetIn)(e, [n, r])
					}
					case o.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: o
							} = n,
							s = {
								[r]: o
							};
						return Object(f.merge)(e, s)
					}
					default:
						return e
				}
			};
			const Ne = {};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.E: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case o.gb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: o
							}
						}
						case o.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: o
								} = n,
								s = [...e[r] || [], ...o];
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Ae = Object(r.c)({
					api: Se,
					models: Me,
					userOrder: Te
				});
			const Le = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: o
						} = r, s = {
							[n]: o
						};
						return Object(f.merge)(e, s)
					}
					case o.I:
					case o.J: {
						const {
							subredditId: n
						} = t.payload;
						return Object(f.unset)(e, n)
					}
					default:
						return e
				}
			};
			const Re = {};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.y: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const De = {};
			var We = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ue = {};
			var Ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.L: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(f.merge)({
							...e
						}, r)
					}
					case o.C: {
						const n = t.payload,
							{
								subredditId: r,
								userId: o,
								permissions: s
							} = n;
						return e[r] && e[r][o] ? Object(f.setIn)(e, [r, o, "modPermissions"], s) : e
					}
					default:
						return e
				}
			};
			var He = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.P:
					case o.O:
						return null;
					case o.N:
						return t.payload;
					default:
						return e
				}
			};
			var qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.P:
							return !0;
						case o.O:
						case o.N:
							return !1;
						default:
							return e
					}
				},
				ze = Object(r.c)({
					error: He,
					pending: qe
				}),
				Ge = n("./node_modules/lodash/isEqual.js"),
				Ke = n.n(Ge);
			var Qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.P:
						case o.N:
						case o.jb:
							return null;
						case o.O: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case o.C: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Ke()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Ze = Object(r.c)({
					api: ze,
					result: Qe
				});
			const Je = {};
			var Xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.M:
					case o.L: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case o.K: {
						const {
							error: n,
							subredditId: r,
							key: o
						} = t.payload;
						return r ? {
							...e,
							[o]: n
						} : e
					}
					default:
						return e
				}
			};
			const Ye = {};
			var $e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.K:
						case o.L: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case o.M: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				et = Object(r.c)({
					error: Xe,
					pending: $e
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const tt = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.L: {
							const {
								response: n,
								subredditId: r,
								key: o
							} = t.payload, {
								moderatorIds: s
							} = n;
							return Object(f.merge)(e, {
								[r]: {
									[o]: s
								}
							})
						}
						case o.jb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, o = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const s = e[n][t].filter(e => e !== r);
								o[t] = s
							}), Object(f.set)(e, n, o)
						}
						default:
							return e
					}
				},
				rt = Object(r.c)({
					data: nt,
					api: et
				}),
				ot = Object(r.c)({
					editableModerators: ge,
					editableUserOrder: _e,
					invitedModerators: Ae,
					invitePending: Fe,
					loadMoreModerators: We,
					loadMoreEditableModerators: Be,
					models: Ve,
					search: Ze,
					userOrder: rt
				}),
				st = n("./src/reddit/actions/bulkActions/constants.ts");
			var at = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.c:
						case st.b:
							return null;
						case st.a:
							return t.payload;
						default:
							return e
					}
				},
				it = n("./src/reddit/actions/modQueue/constants.ts");
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.c:
							return !0;
						case st.b:
						case st.a:
						case it.s:
						case it.r:
							return !1;
						default:
							return e
					}
				},
				dt = Object(r.c)({
					error: at,
					pending: ct
				});
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case it.d: {
							const {
								ids: n
							} = t.payload;
							return H()(e, n)
						}
						case it.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				pt = n("./src/reddit/models/ModQueue/index.ts");
			const mt = {};
			var ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? mt : {
								[pt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				ht = Object(r.c)({
					api: dt,
					selectedItems: ut,
					undoLastAction: ft
				});
			var bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.g:
					case it.f:
						return null;
					case it.e:
						return t.payload;
					default:
						return e
				}
			};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.g:
							return !0;
						case it.f:
						case it.e:
							return !1;
						default:
							return e
					}
				},
				gt = Object(r.c)({
					error: bt,
					pending: vt
				});
			const yt = {};
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.f: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: s
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Ot = {};
			var wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, s = o[o.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				jt = Object(r.c)({
					api: gt,
					itemOrder: xt,
					loadMore: wt
				}),
				Et = n("./src/reddit/actions/pages/modListing/constants.ts");
			var kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Et.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case it.i:
					case it.f:
					case it.m:
					case it.p:
					case it.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case it.k: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const _t = [];
			var It = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.i:
					case it.f:
					case it.m:
					case it.p:
					case it.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case it.k: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case Et.e: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return r || e
					}
					default:
						return e
				}
			};
			var Ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.b:
						return !0;
					default:
						return e
				}
			};
			var St = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.k:
							return !0;
						case it.b:
							return !1;
						default:
							return e
					}
				},
				Pt = Object(r.c)({
					after: kt,
					data: It,
					loaded: Ct,
					pending: St
				});
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.j:
					case it.i:
						return null;
					case it.h:
						return t.payload;
					default:
						return e
				}
			};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.j:
							return !0;
						case it.i:
						case it.h:
							return !1;
						default:
							return e
					}
				},
				Tt = Object(r.c)({
					error: Mt,
					pending: Nt
				});
			const At = {};
			var Lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.i: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: s
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, s = o[o.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Bt = Object(r.c)({
					api: Tt,
					itemOrder: Lt,
					loadMore: Rt
				});
			var Dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.n:
					case it.m:
						return null;
					case it.l:
						return t.payload;
					default:
						return e
				}
			};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.n:
							return !0;
						case it.m:
						case it.l:
							return !1;
						default:
							return e
					}
				},
				Ut = Object(r.c)({
					error: Dt,
					pending: Wt
				});
			const Vt = {};
			var Ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.m: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: s
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const qt = {};
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, s = o[o.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Gt = Object(r.c)({
					api: Ut,
					itemOrder: Ht,
					loadMore: zt
				});
			var Kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.q:
					case it.p:
						return null;
					case it.o:
						return t.payload;
					default:
						return e
				}
			};
			var Qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.q:
							return !0;
						case it.p:
						case it.o:
							return !1;
						default:
							return e
					}
				},
				Zt = Object(r.c)({
					error: Kt,
					pending: Qt
				});
			const Jt = {};
			var Xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.p: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: s
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Yt = {};
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, s = o[o.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				en = Object(r.c)({
					api: Zt,
					itemOrder: Xt,
					loadMore: $t
				});
			var tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.w:
					case it.v:
						return null;
					case it.u:
						return t.payload;
					default:
						return e
				}
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.w:
							return !0;
						case it.v:
						case it.u:
							return !1;
						default:
							return e
					}
				},
				rn = Object(r.c)({
					error: tn,
					pending: nn
				});
			const on = {};
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : on,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.v: {
						const {
							listingKey: n,
							page: r,
							response: o
						} = t.payload, {
							modqueue: s
						} = o;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const an = {};
			var cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : an,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: o
							} = r, s = o[o.length - 1] || null;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				dn = Object(r.c)({
					api: rn,
					itemOrder: sn,
					loadMore: cn
				}),
				ln = Object(r.c)({
					bulkAction: ht,
					edited: jt,
					moderatedCommunitiesOrder: Pt,
					modqueue: Bt,
					reports: Gt,
					spam: en,
					unmoderated: dn
				});
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.Y:
					case o.W:
						return null;
					case o.V:
						return t.payload;
					default:
						return e
				}
			};
			const pn = {};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.Y: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(a.e)(n, r);
							return {
								...e,
								[o]: !0
							}
						}
						case o.W:
						case o.V: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(a.e)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				fn = Object(r.c)({
					error: un,
					pending: mn
				});
			const hn = {};
			var bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.W: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, o = Object(a.e)(r, n);
							return {
								...e,
								[o]: !0
							}
						}
						default:
							return e
					}
				},
				vn = n("./src/reddit/actions/inContextModeration.ts");
			var gn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vn.b:
						return t.payload;
					default:
						return e
				}
			};
			const yn = {};
			var xn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.W: {
						const {
							subredditId: e,
							after: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const On = {};
			var wn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.X:
					case o.W: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, o = {
							[n]: r
						};
						return Object(f.merge)(e, o)
					}
					case o.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(f.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var jn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.bb:
					case o.ab:
						return null;
					case o.Z:
						return t.payload;
					default:
						return e
				}
			};
			var En = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.bb:
							return !0;
						case o.ab:
						case o.Z:
							return !1;
						default:
							return e
					}
				},
				kn = Object(r.c)({
					error: jn,
					pending: En
				});
			var _n = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.bb:
						case o.Z:
							return null;
						case o.ab: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				In = Object(r.c)({
					api: kn,
					result: _n
				});
			const Cn = {};
			var Sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.W: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case o.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case o.X: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, o = r[0];
							return o && e[n] && -1 === e[n].indexOf(o) ? {
								[n]: [o, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Pn = Object(r.c)({
					api: fn,
					fetchedTokens: bn,
					inContext: gn,
					loadMore: xn,
					models: wn,
					search: In,
					userOrder: Sn
				});
			t.a = Object(r.c)({
				approvedSubmitters: E,
				approvedTalkHosts: L,
				flairedUsers: te,
				moderationLog: be,
				moderators: ot,
				modQueue: ln,
				muted: Pn
			})
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/posts.ts");
			const i = e => Object(s.c)(e, {
					experimentName: o.Le,
					experimentEligibilitySelector: s.a
				}),
				c = (e, t) => t === o.Te.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(r.a)(a.G, i, (e, t) => c(e, t));
			Object(r.a)((e, t) => t, i, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.d0146ff4731a355f075f.js.map