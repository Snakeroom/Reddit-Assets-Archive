// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.28127bec24a2638f6bf3.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							o = t[1],
							s = void 0 === o ? r : o,
							a = t[2],
							c = void 0 === a ? r : a,
							d = t[3];
						return r + " " + s + " " + c + " " + (void 0 === d ? s : d)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = c.keys(); t = s.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || a(o, t.thresholds))) return t
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

			function E(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function _(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var x = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				v = Object.prototype,
				S = v.hasOwnProperty,
				y = v.toString,
				g = function(e) {
					return x.reduce((function(t, n) {
						if (S.call(e, n)) {
							var r = "root" === n && "[object String]" === y.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
						return _(E(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), _(E(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), _(E(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(g(t.props)), t.target = t.targetNode, e = E(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), _(E(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(E(t), e)
						})), _(E(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = r.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = O.some((function(n) {
							return a(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(o.a.Component);
			_(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, i) {
					if (i !== r) {
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
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !s && !l && /macintosh/i.test(t),
						E = !i && !u && !p && !m && /linux/i.test(t),
						_ = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !O && /[^-]mobi/i.test(t),
						S = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, _ ? (o.msedge = e, o.version = _) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: _
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, x && (o.version = x)) : s ? (o = {
						name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
					}, x && (o.version = x)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && x && (o.version = x)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && s ? (o[s] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : S ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : E && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var y = "";
					o.windows ? y = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? y = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? y = (y = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? y = (y = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? y = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? y = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? y = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? y = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (y = n(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (o.osversion = y);
					var g = !o.windows && y.split(".")[0];
					return O || c || "ipad" == s || i && (3 == g || g >= 4 && !v) || o.silk ? o.tablet = e : (v || "iphone" == s || "ipod" == s || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function i(e, r, o) {
					var i = n;
					"string" == typeof r && (o = r, r = void 0), void 0 === r && (r = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return s([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = s, n.check = function(e, t, n) {
					return !i(e, t, n)
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
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : o;
				return n && a(e, t, n) && (t = void 0), c(e, s(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, s(t, 4), n, d, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return r(e) + t
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

			function u(e) {
				return o(l(e)).left + i(e).scrollLeft
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
				var r, a, p = l(t),
					f = o(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					E = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (r = t) !== s(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), c(t) ? ((E = o(t)).x += t.clientLeft, E.y += t.clientTop) : p && (E.x = u(p))), {
					x: f.left + h.scrollLeft - E.x,
					y: f.top + h.scrollTop - E.y,
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

			function E(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					r = "body" === d(n),
					o = s(n),
					i = r ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(E(h(i)))
			}

			function _(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function x(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = s(e), n = x(e); n && _(n) && "static" === p(n).position;) n = x(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var v = "top",
				S = "bottom",
				y = "right",
				g = "left",
				T = "auto",
				C = [v, S, y, g],
				j = "start",
				k = "end",
				I = "clippingParents",
				w = "viewport",
				N = "popper",
				P = "reference",
				L = C.reduce((function(e, t) {
					return e.concat([t + "-" + j, t + "-" + k])
				}), []),
				A = [].concat(C, [T]).reduce((function(e, t) {
					return e.concat([t, t + "-" + j, t + "-" + k])
				}), []),
				R = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function D(e) {
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
			var M = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function F() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					s = void 0 === o ? M : o;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var o, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, M), s),
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
									reference: a(e) ? E(e) : e.contextElement ? E(e.contextElement) : [],
									popper: E(t)
								};
								var o = function(e) {
									var t = D(e);
									return R.reduce((function(e, n) {
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
									if (F(t, n)) {
										c.rects = {
											reference: f(t, O(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[r],
													s = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof s && (c = s({
													state: c,
													options: a,
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
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!F(e, t)) return u;

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
			var B = {
				passive: !0
			};

			function G(e) {
				return e.split("-")[0]
			}

			function Y(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function W(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					s = o ? G(o) : null,
					i = o ? Y(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (s) {
					case v:
						t = {
							x: a,
							y: n.y - r.height
						};
						break;
					case S:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case y:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case g:
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
				var d = s ? V(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case j:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case k:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - r[l] / 2)
					}
				}
				return t
			}
			var H = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function z(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
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
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = g,
					E = v,
					_ = window;
				if (d) {
					var x = O(n);
					x === s(n) && (x = l(n)), o === v && (E = S, m -= x.clientHeight - r.height, m *= c ? 1 : -1), o === g && (h = y, p -= x.clientWidth - r.width, p *= c ? 1 : -1)
				}
				var T, C = Object.assign({
					position: a
				}, d && H);
				return c ? Object.assign(Object.assign({}, C), {}, ((T = {})[E] = b ? "0" : "", T[h] = f ? "0" : "", T.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", T)) : Object.assign(Object.assign({}, C), {}, ((t = {})[E] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var q = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return q[e]
				}))
			}
			var Z = {
				start: "end",
				end: "start"
			};

			function Q(e) {
				return e.replace(/start|end/g, (function(e) {
					return Z[e]
				}))
			}

			function K(e, t) {
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

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === w ? J(function(e) {
					var t = s(e),
						n = l(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = l(e),
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = E(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? O(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && K(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					s = o[0],
					i = o.reduce((function(t, n) {
						var r = $(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
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

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					s = void 0 === r ? e.placement : r,
					i = n.boundary,
					c = void 0 === i ? I : i,
					d = n.rootBoundary,
					u = void 0 === d ? w : d,
					p = n.elementContext,
					m = void 0 === p ? N : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					E = void 0 === h ? 0 : h,
					_ = te("number" != typeof E ? E : ne(E, C)),
					x = m === N ? P : N,
					O = e.elements.reference,
					g = e.rects.popper,
					T = e.elements[b ? x : m],
					j = ee(a(T) ? T : T.contextElement || l(e.elements.popper), c, u),
					k = o(O),
					L = W({
						reference: k,
						element: g,
						strategy: "absolute",
						placement: s
					}),
					A = J(Object.assign(Object.assign({}, g), L)),
					R = m === N ? A : k,
					D = {
						top: j.top - R.top + _.top,
						bottom: R.bottom - j.bottom + _.bottom,
						left: j.left - R.left + _.left,
						right: R.right - j.right + _.right
					},
					M = e.modifiersData.offset;
				if (m === N && M) {
					var F = M[s];
					Object.keys(D).forEach((function(e) {
						var t = [y, S].indexOf(e) >= 0 ? 1 : -1,
							n = [v, S].indexOf(e) >= 0 ? "y" : "x";
						D[e] += F[n] * t
					}))
				}
				return D
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

			function ie(e) {
				return [v, y, S, g].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = U({
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
								i = void 0 === o || o,
								a = r.resize,
								c = void 0 === a || a,
								d = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, B)
								})), c && d.addEventListener("resize", n.update, B),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, B)
									})), c && d.removeEventListener("resize", n.update, B)
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
							t.modifiersData[n] = W({
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
								i = void 0 === s || s,
								a = {
									placement: G(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), z(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), z(Object.assign(Object.assign({}, a), {}, {
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
								i = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = G(e),
											o = [g, v].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * o, [g, y].indexOf(r) >= 0 ? {
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
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i
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
								for (var o = n.mainAxis, s = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, E = G(h), _ = c || (E === h || !f ? [X(h)] : function(e) {
										if (G(e) === T) return [];
										var t = X(e);
										return [Q(e), t, Q(t)]
									}(h)), x = [h].concat(_).reduce((function(e, n) {
										return e.concat(G(n) === T ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = Y(r),
												u = (l ? a ? L : L.filter((function(e) {
													return Y(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: s,
														padding: i
													})[G(n)], t
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
									}), []), O = t.rects.reference, k = t.rects.popper, I = new Map, w = !0, N = x[0], P = 0; P < x.length; P++) {
									var R = x[P],
										D = G(R),
										M = Y(R) === j,
										F = [v, S].indexOf(D) >= 0,
										U = F ? "width" : "height",
										B = re(t, {
											placement: R,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										V = F ? M ? y : g : M ? S : v;
									O[U] > k[U] && (V = X(V));
									var W = X(V),
										H = [];
									if (s && H.push(B[D] <= 0), a && H.push(B[V] <= 0, B[W] <= 0), H.every((function(e) {
											return e
										}))) {
										N = R, w = !1;
										break
									}
									I.set(R, H)
								}
								if (w)
									for (var z = function(e) {
											var t = x.find((function(t) {
												var n = I.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, q = f ? 3 : 1; q > 0; q--) {
										if ("break" === z(q)) break
									}
								t.placement !== N && (t.modifiersData[r]._skip = !0, t.placement = N, t.reset = !0)
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
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								E = re(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								_ = G(t.placement),
								x = Y(t.placement),
								T = !x,
								C = V(_),
								k = "x" === C ? "y" : "x",
								I = t.modifiersData.popperOffsets,
								w = t.rects.reference,
								N = t.rects.popper,
								P = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								L = {
									x: 0,
									y: 0
								};
							if (I) {
								if (s) {
									var A = "y" === C ? v : g,
										R = "y" === C ? S : y,
										D = "y" === C ? "height" : "width",
										M = I[C],
										F = I[C] + E[A],
										U = I[C] - E[R],
										B = m ? -N[D] / 2 : 0,
										W = x === j ? w[D] : N[D],
										H = x === j ? -N[D] : -w[D],
										z = t.elements.arrow,
										q = m && z ? b(z) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Z = X[A],
										Q = X[R],
										K = oe(0, w[D], q[D]),
										J = T ? w[D] / 2 - B - K - Z - P : W - K - Z - P,
										$ = T ? -w[D] / 2 + B + K + Q + P : H + K + Q + P,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										se = I[C] + J - ne - te,
										ie = I[C] + $ - ne,
										ae = oe(m ? Math.min(F, se) : F, M, m ? Math.max(U, ie) : U);
									I[C] = ae, L[C] = ae - M
								}
								if (a) {
									var ce = "x" === C ? v : g,
										de = "x" === C ? S : y,
										le = I[k],
										ue = oe(le + E[ce], le, le - E[de]);
									I[k] = ue, L[k] = ue - le
								}
								t.modifiersData[r] = L
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
								i = G(n.placement),
								a = V(i),
								c = [g, y].indexOf(i) >= 0 ? "height" : "width";
							if (o && s) {
								var d = n.modifiersData[r + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? v : g,
									p = "y" === a ? S : y,
									m = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
									f = s[a] - n.rects.reference[a],
									h = O(o),
									E = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									_ = m / 2 - f / 2,
									x = d[u],
									T = E - l[c] - d[p],
									C = E / 2 - l[c] / 2 + _,
									j = oe(x, C, T),
									k = a;
								n.modifiersData[r] = ((t = {})[k] = j, t.centerOffset = j - C, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								s = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && K(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, C))
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
								i = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								c = se(i, r),
								d = se(a, o, s),
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
						i = r.useState({
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
							var r = (n.createPopper || ae)(e, t, l);
							return u.current = r,
								function() {
									r.destroy(), u.current = null
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
				r = "function" == typeof Map,
				o = "function" == typeof Set,
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
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
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
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (r = (() => {})) => o => {
				const s = p(o.target, o.currentTarget),
					a = m(o.target, o.currentTarget);
				s && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, s, a)) : n(n => {
					const r = t(e, s, a)(n);
					let o;
					if (r && r.actionInfo) {
						const {
							pageType: e,
							...t
						} = r.actionInfo;
						o = t
					}
					return {
						...r,
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && r(o)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: s,
						clickTrackingId: i,
						...d
					} = t, l = Object(r.useCallback)(c(i, s, n), [i, s, n]);
					return o.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(s.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				p = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: o
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(r.D)(e)
				} else i = Object(r.D)(e);
				const a = s.a.parse(i),
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const s = [o.kc, o.nb, o.z, o.O, o.ib, o.Nb],
				i = {
					[o.Nb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.ib]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.O]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.z]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.nb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.kc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Nb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.ib]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.O]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.z]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.nb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.kc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.nb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.kc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.kc]: "",
						[o.nb]: "",
						[o.z]: "",
						[o.O]: "",
						[o.ib]: "",
						[o.Nb]: ""
					};
				let u = d - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of s) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const p = s.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? p : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", p)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
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
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				s = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
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
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return S
			}));
			const r = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				s = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				v = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/postFlair.ts"),
				m = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				b = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(o.a)(f),
				E = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				_ = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				x = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				O = Object(o.a)(_),
				v = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				y = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				g = Object(o.a)(S),
				T = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				j = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				k = Object(o.a)(C),
				I = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(o.a)(w),
				L = Object(o.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(o.a)(N),
				R = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const s = r(),
						i = Object(m.S)(s, {
							subredditId: e
						}).name;
					n(b());
					const a = await Object(c.k)(o(), i, t);
					if (a.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(E());
					return a.ok
				}, D = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const s = r(),
						i = Object(m.S)(s, {
							subredditId: e
						}).name;
					n(x());
					const a = await Object(c.j)(o(), t, l.d.LinkFlair, i);
					if (a.ok) {
						n(O({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(v());
					return a.ok
				}, M = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const d = o(),
						p = Object(m.S)(d, {
							subredditId: t
						}).name;
					n(y());
					const f = await Object(c.f)(s(), e, p, l.d.LinkFlair);
					let b = f.ok && !(f.body && !1 === f.body.success);
					if (b) {
						const r = f.body;
						if (n(g({
								subredditId: t,
								template: r
							})), r.id) {
							const o = e.styleTemplate,
								s = d.structuredStyles.flairTemplate.models[r.id];
							o ? b = await n(Object(i.d)(t, r.id, o)) : s && (b = await n(Object(i.c)(t, r.id)))
						}
					}
					if (b) {
						const e = Object(a.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(T());
						const o = Object(a.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(a.f)(o))
					}
					return b
				}, F = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const i = o(),
						d = Object(m.S)(i, {
							subredditId: t
						}).name;
					if (n(j()), (await Object(c.b)(s(), e, d)).ok) {
						n(k({
							subredditId: t,
							templateId: e
						}));
						const o = Object(a.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(o))
					} else {
						n(I());
						const o = Object(a.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(a.f)(o))
					}
				}, U = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const i = o(),
						d = Object(p.d)(i, {
							subredditId: t
						}).templateIds,
						f = Object(m.S)(i, {
							subredditId: t
						}).name;
					if (n(P({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(s(), f, l.d.LinkFlair, e)).ok) {
						n(L());
						const e = Object(a.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(A({
							subredditId: t,
							templateIds: d
						}));
						const o = Object(a.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(a.f)(o))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (r, o, {
					apiContext: i
				}) => {
					const a = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && a.unshift(t), r(Object(s.T)({
							[e.id]: {
								flair: a
							}
						})), t) {
						const r = Object(d.g)(t);
						Object(c.h)(i(), e.id, n, r)
					} else Object(c.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				o = n.n(r),
				s = n("./node_modules/lodash/isEqual.js"),
				i = n.n(s),
				a = n("./node_modules/lodash/values.js"),
				c = n.n(a),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				E = n("./src/reddit/models/Image/index.tsx"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/telemetry/index.ts");
			const O = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: r
			}) => async (o, s, i) => {
				const a = s(),
					c = Object(_.S)(a, {
						subredditId: e
					});
				if (!c) return !1;
				o(Object(l.k)(r));
				const d = await (async (e, t, n, r, o, s) => Object(m.a)(Object(f.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: p.hb.POST,
					data: {
						filepath: r,
						imagetype: o,
						mimetype: s
					}
				}))(i.apiContext(), c.name, t, r.file.name, n, await Object(u.g)(r.file));
				let h = !1;
				try {
					const e = await Object(l.g)(s(), d, r, E.a.FlairTemplates);
					e && o(Object(l.j)(e)), h = !0
				} catch (x) {
					if (x instanceof Error) throw x;
					o(Object(l.i)(x))
				}
				return h
			}, v = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", S = Object(d.a)(v), y = (e, t, n) => async (r, s, a) => {
				const {
					apiContext: d
				} = a;
				let u = s();
				const {
					pendingImages: v,
					...y
				} = n;
				let g = y;
				const T = Object(_.S)(u, {
					subredditId: e
				});
				if (!T) return !1;
				const C = u.structuredStyles.flairTemplate.models[t];
				if (C && i()(C, g)) return !0;
				if (v) {
					const n = [];
					if (o()(v, (o, s) => {
							o && n.push(r(O({
								flairId: t,
								imageData: Object(E.m)(o),
								imageKey: s,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					g = ((e, t, n) => {
						const r = {
							...e
						};
						return o()(t, (e, t) => {
							const o = e && n.imageUploads[e.id];
							o && o.kind === E.b.TempUploaded && (r[t] = o.url)
						}), r
					})(g, v, s())
				}
				u = s();
				let j = null,
					k = null;
				const I = [];
				try {
					(j = await Object(l.f)(u, E.a.FlairTemplates)) && (k = Object(l.m)(j)(r, s, a), I.push(...c()(j.imagesByKey)))
				} catch (L) {
					return !1
				}
				const w = await (async (e, t, n, r) => Object(m.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: p.hb.PUT,
						data: r
					}))(d(), T.name, t, g),
					N = C ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(h.e)(u, N);
				if (w.ok) {
					let e;
					if (k) try {
						await k, e = ((e, t, n) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === E.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(g, I, s())
					} catch (L) {
						e = null
					} else e = g;
					r(S({
						flairId: t,
						template: e || g
					}))
				} else j && j.websocket.close();
				return Object(x.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: w.ok
					}
				}), w.ok
			}, g = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", T = Object(d.a)(g), C = (e, t) => async (n, r, {
				apiContext: o
			}) => {
				const s = r(),
					i = Object(_.S)(s, {
						subredditId: e
					});
				if (!i) return !1;
				const a = await (async (e, t, n) => Object(m.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: p.hb.DELETE
					}))(o(), i.name, t),
					c = Object(h.e)(s, "delete_flair_template");
				return a.ok && n(T({
					flairId: t
				})), Object(x.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: a.ok
					}
				}), a.ok
			}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return s
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "k", (function() {
				return O
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				o = "AUTHOR_FLAIR_DATA__MUTATED",
				s = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				O = "USERFLAIR_FETCH_SUCCESS"
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
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				}, u), s.a.createElement(a.a, {
					href: c.url.replace(r.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && s.a.createElement(i.a, {
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
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(i.a, d({
				className: Object(s.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
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
			const u = Object(i.a)(({
				className: e,
				...t
			}) => o.a.createElement(a.a, l({}, t, {
				className: Object(s.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(s.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
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
				return we
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/User/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				_ = n("./src/reddit/actions/post.ts"),
				x = n("./src/reddit/actions/postFlair.ts"),
				O = n("./src/reddit/actions/tooltip.ts"),
				v = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/reddit/selectors/moderatorPermissions.ts"),
				y = n("./src/reddit/selectors/postFlair.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				C = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = n("./src/reddit/components/AwardBadges/index.tsx"),
				k = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = n("./src/reddit/components/CommentsLink/index.tsx"),
				w = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = n("./src/reddit/components/ExpandoButton/index.tsx"),
				L = n("./src/reddit/components/Flatlist/index.tsx"),
				A = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				F = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				B = n("./src/reddit/components/ModModeReports/helpers.ts"),
				G = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				Y = n("./src/reddit/components/PopupPortal/index.tsx"),
				V = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = n("./src/reddit/components/PostBadges/index.tsx"),
				H = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				q = n("./src/reddit/components/PostLeftRail/index.tsx"),
				X = n("./src/reddit/components/PostMedia/index.tsx"),
				Z = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Q = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				K = n("./src/reddit/components/PostTitle/index.tsx"),
				J = n("./src/reddit/components/PostTopMeta/index.tsx"),
				$ = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ee = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = n("./src/reddit/components/SubredditIcon/index.tsx"),
				re = n("./src/reddit/components/VerticalVotes/index.tsx"),
				oe = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				se = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/controls/Checkbox/index.tsx"),
				ce = n("./src/reddit/controls/MetaData/index.tsx"),
				de = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ue = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				pe = n("./src/reddit/helpers/postEvent.ts"),
				me = n("./src/reddit/hooks/useIsOverlay.ts"),
				fe = n("./src/reddit/hooks/useTheme.ts"),
				be = n("./src/reddit/hooks/useUserContext.ts"),
				he = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Report/index.tsx"),
				_e = n("./src/reddit/selectors/showPromotedCTA.ts"),
				xe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = n.n(xe),
				ve = n("./src/reddit/components/CompactPost/index.m.less"),
				Se = n.n(ve);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ge = ({
					isCompact: e,
					...t
				}) => o.a.createElement(P.a, ye({
					className: Object(d.a)(Se.a.responsiveExpandoButton, {
						[Se.a.mHideAboveSmallTablets]: !!e,
						[Se.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				Te = () => Object(a.c)({
					activeModalId: v.a,
					crosspost: g.d,
					flairStyleTemplate: se.S,
					isActive: g.j,
					isExpanded: g.l,
					showPromotedCTA: _e.a,
					layout: se.O,
					moderatorPermissions: S.k,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: y.a
				}),
				Ce = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: r
					}) => e(Object(x.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: r
					})),
					handleVote: n => {
						const r = n === E.a.upvoted ? Object(_.fb)(t) : Object(_.w)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(_.bb)(t)),
					onOpenReportsDropdown: t => e(Object(O.h)({
						tooltipId: t
					}))
				});
			class je extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: r,
						currentUser: s,
						eventFactory: i,
						flairStyleTemplate: a,
						handleVote: l,
						imageGalleryCurrentItem: E,
						isCheckboxSelected: _ = !1,
						isCommentsPage: x,
						isCommentPermalink: O,
						isExpanded: v,
						isGalleryTileLayoutDefault: S,
						isOverlay: y,
						isProfilePostListing: g,
						inSubredditOrProfile: P = !1,
						layout: X,
						moderatorPermissions: te,
						modModeEnabled: ne,
						onClickPost: se,
						onFlairChanged: ie,
						onIgnoreReports: ce,
						poll: me,
						post: fe,
						subredditOrProfile: be,
						userIsOp: _e,
						hideModTools: xe,
						scrollerItemRef: ve,
						showBulkActionCheckbox: ye,
						showEditFlair: Te,
						toggleCheckbox: Ce,
						tooltipType: je,
						sendEvent: Ie,
						shouldShowGalleryTileOption: we,
						showPromotedCTA: Pe
					} = this.props, Le = !!fe.media && fe.media.type === b.o.RTJSON, Ae = _e && Le, Re = Object(z.b)(fe.id, y), De = Object(ue.a)(te), Me = Object(de.a)(te), Fe = Object(le.a)(te), Ue = `-mod-actions-menu-${fe.id}`, Be = `voting-arrows-${fe.id}`, Ge = !!s && Object(h.e)(s) === fe.author, Ye = Object(B.c)(fe), Ve = Object(A.a)("View--Reports", fe.id, je), We = Object(B.a)(fe), He = !(y || x || O), ze = fe.media && fe.media.type === b.o.LIVEVIDEO, {
						moderationPrompt: qe
					} = fe, Xe = e => Ie(Object(f.h)(fe.id, e)), Ze = Object(c.t)(fe, E), {
						source: Qe
					} = Ze, Ke = o.a.createElement(H.a, {
						className: Object(d.a)(Oe.a.compactPostStyles, Se.a.postContainer, Object(m.a)(this.props), t),
						isOverlay: y,
						style: {
							...Object(m.d)(this.props),
							...Object(m.b)(this.props.flairStyleTemplate)
						},
						post: fe,
						onClick: se,
						eventFactory: i
					}, o.a.createElement("div", {
						className: Se.a.compactWrapper
					}, o.a.createElement("div", {
						className: Se.a.leftRailWrapper
					}, o.a.createElement("div", {
						className: Se.a.leftRail,
						style: {
							borderColor: Object(q.c)({
								isRemoved: !!fe.bannedBy,
								isReported: Object(p.a)(fe),
								isSponsored: fe.isSponsored,
								theme: this.props.theme
							})
						}
					}, ye && o.a.createElement(ae.a, {
						className: Se.a.bulkActionCheckbox,
						isCheckboxSelected: _,
						toggleCheckbox: Ce
					}), o.a.createElement(re.a, {
						className: Se.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: a,
						model: fe,
						onVoteClick: l
					}), o.a.createElement(w.a, {
						className: Se.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: a,
						model: fe,
						onVoteClick: l,
						upvoteTooltipId: Be
					}), qe && o.a.createElement(Y.b, {
						rightOf: Be
					}, "survey" === qe ? o.a.createElement(F.a, {
						post: fe,
						subredditName: be.name,
						isOverlay: !!y
					}) : o.a.createElement(M.a, {
						post: fe,
						subredditName: be.name,
						isOverlay: !!y
					})))), o.a.createElement(V.a, {
						className: Object(d.a)(Se.a.content, {
							[Se.a.isEvent]: Object(pe.a)(fe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: a
					}, o.a.createElement(N.a, {
						isCompactMode: !0,
						post: fe
					}), o.a.createElement("div", {
						className: Se.a.compactPostRow
					}, !xe && o.a.createElement(ge, {
						crosspost: r,
						isCommentsPage: x,
						isCompact: !1,
						isExpanded: v,
						post: fe,
						useMediaIcons: !0
					}), !P && !fe.isSponsored && o.a.createElement(R.h, {
						type: fe.belongsTo.type,
						id: fe.belongsTo.id
					}), o.a.createElement("div", {
						className: Se.a.topLine,
						"data-click-id": "body"
					}, o.a.createElement(K.c, {
						post: fe,
						poll: me,
						size: K.b.Small,
						titleColor: a && a.postTitleColor,
						isOverlay: !1
					}), Ne(fe, be), o.a.createElement(J.d, {
						className: Se.a.postTopMeta,
						flairStyleTemplate: a,
						post: fe,
						showSub: !!be && !P && !fe.isSponsored,
						subredditOrProfile: be
					}), o.a.createElement(W.a, {
						className: Se.a.postBadges,
						displayText: be ? be.displayText : null,
						inSubredditOrProfile: P,
						post: fe
					}), o.a.createElement(j.a, {
						thing: fe,
						tooltipType: y ? J.c.Lightbox : void 0
					})), He && !ze && o.a.createElement("div", null, o.a.createElement(k.a, {
						className: Se.a.liveDiscussionIcon,
						isMod: De,
						postId: fe.postId
					})), o.a.createElement("div", {
						className: Se.a.flatList
					}, o.a.createElement(I.a, {
						className: Se.a.commentsLink,
						hasModPostPerms: De,
						isCommentsPage: x,
						isCommentPermalink: O,
						isOverlay: y,
						postId: fe.id,
						modModeEnabled: ne,
						numComments: fe.numComments,
						type: u.g.Compact
					}), o.a.createElement(G.a, {
						className: Se.a.modToolsFlatlist,
						isOverlay: !1,
						layout: X,
						modModeEnabled: ne,
						post: fe,
						sendEvent: Ie,
						showIconsOnly: !0
					}), De && o.a.createElement(D.a, {
						dropdownId: Ue,
						onClick: () => Xe("post_mod_action_menu")
					}, o.a.createElement(L.b, null), o.a.createElement(Z.a, {
						canEditFlair: Me && Te,
						hasModPostPerms: De,
						hasModFullPerms: Fe,
						isOverlay: !1,
						isPostAuthor: Ge,
						modModeEnabled: ne,
						post: fe,
						tooltipId: Ue
					})), De && Ye && !ne && o.a.createElement(ee.c, {
						text: `${We}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ve), Xe("post_report_menu")
						},
						id: Ve
					}, o.a.createElement(oe.a, {
						model: fe,
						onIgnoreReports: () => {
							ce(), Xe(fe.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ve
					}), fe.ignoreReports ? o.a.createElement(he.a, null) : o.a.createElement(Ee.a, null)), o.a.createElement(Q.a, {
						currentProfileName: n,
						isCommentsPage: x,
						isOverlay: !1,
						isProfilePostListing: g,
						layout: X,
						permalink: fe.permalink,
						sendEvent: Ie,
						showEditPost: Ae,
						showEditFlair: Te,
						dropdownId: `${fe.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(Q.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !xe && o.a.createElement(ge, {
						crosspost: r,
						isCommentsPage: x,
						isCompact: !0,
						isExpanded: v,
						post: fe,
						useMediaIcons: !0
					}))), Pe && Qe && Qe.url && o.a.createElement(T.a, {
						className: Se.a.adLinkWrapper
					}, o.a.createElement(C.a, {
						post: fe,
						adLinkContent: Ze,
						isCompact: !0
					})), ne && De && Ye && o.a.createElement("div", {
						className: Se.a.compactPostRow
					}, o.a.createElement(U.a, {
						onIgnoreReports: ce,
						reportable: fe
					})), o.a.createElement(R.d, null))), v && o.a.createElement(ke, {
						post: fe,
						scrollerItemRef: ve,
						flairStyleTemplate: a,
						shouldShowGalleryTileOption: we,
						isGalleryTileLayoutDefault: S
					}), e === Re && o.a.createElement(z.a, {
						flairs: fe.flair,
						subredditId: fe.belongsTo.id,
						modalId: Re,
						onFlairChanged: ie
					}));
					return o.a.createElement($.b, null, Ke)
				}
			}
			const ke = e => o.a.createElement(V.a, {
					className: Object(d.a)(e.className, Se.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? o.a.createElement("div", {
					className: Se.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, n, r) => o.a.createElement(X.a, {
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
				}),
				we = e => o.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, o.a.createElement(ne.b, {
					className: Se.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ne = (e, t) => o.a.createElement("div", {
					className: Se.a.responsiveMeta
				}, o.a.createElement(ce.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), o.a.createElement(ce.c, null), Object(ce.d)(e.numComments), o.a.createElement(ce.c, null), t && o.a.createElement("a", {
					href: t.url
				}, o.a.createElement(ce.a, null, t.displayText)), e.isSponsored && [o.a.createElement(te.a, {
					key: "label"
				}), o.a.createElement(ce.c, {
					key: "separator"
				})], !e.isSponsored && o.a.createElement(ce.a, null, " Posted by "), o.a.createElement(J.b, {
					post: e
				}));
			t.default = Object(ie.b)(o.a.memo((function(e) {
				const t = Object(be.a)(),
					n = Object(r.useMemo)(() => Te(), []),
					i = Object(s.e)(r => n(r, {
						...e,
						...t
					})),
					a = Object(s.d)(),
					c = Ce(a, {
						...e,
						...t
					});
				return o.a.createElement(je, ye({}, e, t, i, c, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: n
					}) => c.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: n
					}),
					sendEvent: Object(l.b)(),
					isOverlay: Object(me.a)(),
					theme: Object(fe.a)()
				}))
			})))
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
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const r = n && n.eventInfo,
					a = Object(l.a)(n),
					p = r && Object(i.c)(r.eventStart, r.eventEnd);
				return o.a.createElement("div", {
					className: Object(s.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, o.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !a && p && o.a.createElement(d.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/icons/fonts/helpers.tsx"),
				p = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				m = n.n(p);
			var f = e => o.a.createElement("i", {
				className: Object(l.a)(Object(u.b)("scheduled", e.isFilled), m.a.calendarIcon, e.className)
			});
			var b = e => o.a.createElement("i", {
					className: Object(l.a)(Object(u.b)("live", e.isFilled), m.a.liveIcon, e.className)
				}),
				h = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				E = n.n(h),
				_ = n("./src/lib/lessComponent.tsx");
			const x = _.a.span("PostEventFutureText", E.a),
				O = _.a.span("PostEventPastText", E.a),
				v = _.a.span("PostEventNowText", E.a),
				S = _.a.span("Container", E.a),
				y = _.a.wrapped(f, "CalendarIcon", E.a),
				g = _.a.wrapped(b, "LiveIcon", E.a),
				T = _.a.div("LoadingState", E.a);
			class C extends r.Component {
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
						eventIsLive: l,
						eventStart: u
					} = n, p = Object(s.e)(u, r);
					let m, f;
					if (this.state.mounted || p === s.a.Live) m = function(e, t, n) {
						const r = Object(s.e)(e, t),
							o = new Date(e * a.Nb);
						let d;
						return r === s.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (r === s.a.Future ? d = Object(s.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(s.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : r === s.a.Past && (d = Object(s.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(o)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o)}`)
					}(u, r, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = o.a.createElement(T, {
							className: e
						})
					}
					if (l) f = o.a.createElement(v, null, o.a.createElement(g, null), m);
					else if (p === s.a.Future) f = o.a.createElement(x, null, o.a.createElement(y, null), m);
					else {
						if (p !== s.a.Past) return null;
						f = o.a.createElement(O, null, o.a.createElement(y, null), m)
					}
					return o.a.createElement(S, {
						className: e
					}, f)
				}
			}
			t.a = C
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/telemetry/models/Outbound.ts"),
				h = n("./src/reddit/components/ExpandoButton/index.m.less"),
				E = n.n(h);
			const _ = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				x = (e, t = !1, n) => {
					const r = Object(c.a)(E.a.icon, E.a.hideOnHover);
					if (t) return s.a.createElement(m.a, {
						name: "crosspost",
						className: r
					});
					if (n.pollData) return s.a.createElement(m.a, {
						name: "poll_post",
						className: r
					});
					switch (e) {
						case f.o.GIFVIDEO:
							return s.a.createElement(m.a, {
								name: "gif_post",
								className: r
							});
						case f.o.IMAGE:
							return s.a.createElement(m.a, {
								name: "image_post",
								className: r
							});
						case f.o.TEXT:
						case f.o.RTJSON:
							return s.a.createElement(m.a, {
								name: "text_post",
								className: r
							});
						case f.o.VIDEO:
							return s.a.createElement(m.a, {
								name: "video_post",
								className: r
							});
						case f.o.GALLERY:
							return s.a.createElement(m.a, {
								name: "media_gallery",
								className: r
							});
						case f.o.EMBED:
						default:
							return s.a.createElement(m.a, {
								name: "embed",
								className: r
							})
					}
				};
			t.a = _(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: o,
					isCommentsPage: i,
					isExpanded: l,
					post: f,
					toggle: h,
					useMediaIcons: _
				} = e, O = n || f, v = o && !!n;
				return O.media && !(("rtjson" === O.media.type || "text" === O.media.type) && !Object(p.a)(O)) || !!f.pollData ? s.a.createElement("button", {
					"aria-expanded": !!l,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, E.a.outer),
					"data-click-id": l ? "expando_close" : "expando_open",
					onClick: h
				}, l ? s.a.createElement(m.a, {
					name: "collapse",
					className: E.a.icon
				}) : _ ? s.a.createElement(s.a.Fragment, null, x(O.media && O.media.type, v, f), s.a.createElement(m.a, {
					name: "expand",
					className: Object(c.a)(E.a.icon, E.a.showOnHover)
				})) : s.a.createElement(m.a, {
					name: "expand",
					className: E.a.icon
				})) : O.source && O.source.url ? s.a.createElement(u.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					href: O.source.url,
					isSponsored: f.isSponsored,
					postId: f.id,
					source: f.source,
					sourceElement: i ? b.SourceElement.PostImage : b.SourceElement.ListingPostImage,
					target: "_blank"
				}, s.a.createElement(m.a, {
					name: "external_link",
					className: Object(c.a)(E.a.icon, E.a.outboundLinkIcon)
				})) : s.a.createElement(a.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(O.permalink),
					rel: "nofollow"
				}, s.a.createElement(m.a, {
					name: "text_post",
					className: E.a.icon
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), p = () => s.a.createElement(u, null, s.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), m = Object(r.a)({
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
				fallback: s.a.createElement(p, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: b
				} = e, [h, E] = Object(o.useState)(!0), _ = Object(f.b)(n.id, b), x = Object(i.d)(), O = Object(m.a)(), v = Object(f.a)(n, b), S = (e, r) => O(Object(p.a)(t, n.id, e, r));
				Object(o.useEffect)(() => {
					v && S("modal", "show")
				}, [v]);
				if (!v || !h) return null;
				const y = r.fbt._("Help r/{subredditName} mods", [r.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return s.a.createElement(l.a, {
					id: _,
					title: y,
					onClose: () => {
						E(!1), S("close", "click"), x(Object(c.G)()), x(Object(c.T)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						x(Object(c.G)())
					}
				}, s.a.createElement("p", null, r.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), r.fbt._param("=community", s.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, r.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), s.a.createElement(u.a, {
					onClick: () => (E(!1), S("report", "click"), void x(Object(d.c)(n.id)))
				}, r.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				u = n("./src/reddit/components/Popup/index.tsx"),
				p = n("./src/reddit/components/Popup/Button.tsx"),
				m = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [E, _] = Object(s.useState)(r.Survey), x = Object(b.b)(n.id, h), O = Object(a.d)(), v = Object(f.a)(), S = Object(b.a)(n, h), y = (e, r) => v(Object(m.b)(t, n.id, e, r));
				Object(s.useEffect)(() => {
					S && y("modal", "show")
				}, [S]);
				const g = e => {
					_(r.Closed), y("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), O(Object(l.c)(n.id, void 0, e))
				};
				if (!S) return null;
				let T = null;
				const C = {
					id: x,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						_(r.Closed), y("close", "click"), O(Object(d.G)())
					},
					onClickOutside: () => {
						O(Object(d.G)())
					}
				};
				switch (E) {
					case r.Survey:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								_(r.OffTopic), y("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								_(r.DontLike), y("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								_(r.BreaksRules), y("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case r.OffTopic:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case r.DontLike:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case r.BreaksRules:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => g("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => g("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case r.Closed:
				}
				return T
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(r || (r = {}))
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/timeAgo/index.ts"),
				s = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? r.fbt._("Voting closed {timeAgo}", [r.fbt._param("timeAgo", Object(o.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(s.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(s);

			function a(e) {
				return o.a.createElement("button", {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				a = n("./src/lib/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: r,
					title: s,
					children: c
				} = e;
				return Object(a.a)(t, r), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, s), o.a.createElement("button", {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(s.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(r, e),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
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
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/objectSelector/index.ts"),
				x = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				v = n.n(O);
			const S = Object(m.a)(() => Object(s.c)({
					basePixelMetadata: Object(_.a)((e, {
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
				})),
				y = e => {
					const t = Object(x.d)(e.target, e.currentTarget),
						n = Object(x.b)(e.target, e.currentTarget, x.a.buttons);
					return "subreddit" !== t && n
				};
			class g extends o.a.Component {
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
						onPostContentClick: m,
						pageType: b,
						sendEvent: h,
						style: _,
						ref: x,
						shouldAddGalleryViewability: O = !0
					} = this.props, S = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: _,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => p && p(n, l, t, s, b))(n), m && y(n) && m(n, l)), l.id && s) {
								const {
									source: e
								} = Object(i.t)(l, s);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(E.a)(v.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), g = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || g ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, S) : l.media && Object(f.E)(l.media) && O ? o.a.createElement(u, {
						postId: l.id
					}, S) : S
				}
			}
			t.a = S(Object(x.c)(Object(p.c)(g)))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
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
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let a = i ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = r.fbt._("Unfollow", null, {
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
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(s.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
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
				return P
			})), n.d(t, "a", (function() {
				return H
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				E = n("./src/reddit/helpers/flair.ts"),
				_ = n("./src/reddit/helpers/path/index.ts"),
				x = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/lib/getShortenedLink.ts"),
				T = n("./src/reddit/components/FlairWrapper/index.tsx"),
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				k = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				I = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				w = n.n(I);
			const N = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, L = Object(i.b)(N)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return s.a.createElement("div", {
						className: Object(l.a)(e.className, w.a.proposalMetaData)
					}, s.a.createElement("span", null, C.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [C.fbt._param("count", Object(j.a)(r)), C.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && s.a.createElement(k.a, {
						className: w.a.proposalExpiry,
						poll: t
					}))
				})),
				A = n("./src/reddit/components/SEOTitle/index.tsx"),
				R = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/PostTitle/index.m.less"),
				M = n.n(D),
				F = n("./src/config.ts"),
				U = n("./src/reddit/hooks/useClickSourceData.ts"),
				B = n("./src/reddit/hooks/useExperimentVariant.ts"),
				G = n("./src/reddit/hooks/usePostContext.ts"),
				Y = n("./src/reddit/hooks/useTheme.ts"),
				V = n("./src/telemetry/models/Outbound.ts");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const H = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: r,
					children: o,
					className: i,
					redditStyle: a
				}) => {
					const c = Object(Y.a)();
					let d = "";
					switch (e) {
						case P.ExtraLarge:
							d = M.a.ExtraLarge;
							break;
						case P.Large:
							d = M.a.Large;
							break;
						case P.Medium:
							d = M.a.Medium;
							break;
						case P.Small:
							d = M.a.Small;
							break;
						case P.ExtraSmall:
							d = M.a.ExtraSmall
					}
					return s.a.createElement("div", {
						className: Object(l.a)(M.a.Title, i, d, {
							[M.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": t || Object(y.a)({
								redditStyle: a,
								theme: c
							}).titleText
						}
					}, n ? s.a.createElement(A.b, {
						type: n
					}, o) : o)
				},
				z = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: r,
					...o
				}) => s.a.createElement(a.a, W({}, o, {
					className: Object(l.a)(e, M.a.styledLink, {
						[M.a.isVisitedEnabled]: !t
					})
				}), r),
				q = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: r
				}) => s.a.createElement("div", {
					className: Object(l.a)(M.a.titleContainer, n, {
						[M.a.isNoWrap]: t,
						[M.a.isVisitedEnabled]: !e
					})
				}, r),
				X = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: R.bb
				}),
				Z = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t, o = Object(U.a)(), i = Object(B.a)(p.gc) === p.kc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return s.a.createElement(q, {
						nowrap: e.nowrap
					}, s.a.createElement(Q, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return s.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, s.a.createElement(Q, e)); {
						const a = t.media && Object(S.G)(t.media) ? Object(x.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(_.b)(a) : i ? Object(h.a)(a, void 0, o) : Object(h.a)(a);
						return s.a.createElement(q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? s.a.createElement(f.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, s.a.createElement(Q, t)) : s.a.createElement(Q, t)
						})(t, e) : s.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, s.a.createElement(Q, e)))
					}
				},
				Q = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let o = e.format ? e.format(r) : r.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const i = e.isCommentsPage ? A.a.PostComments : A.a.PostItem;
					return s.a.createElement(H, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && s.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), o)
				},
				K = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: r
					} = n, o = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== P.Large && !n.isSponsored && !(n.media && Object(S.G)(n.media)) && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return s.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(g.a)(n), !n.isSponsored && s.a.createElement(O.a, {
							name: "external_link",
							className: M.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return s.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(g.a)(n), !n.isSponsored && s.a.createElement(O.a, {
						name: "external_link",
						className: M.a.outboundLinkIcon
					}));
					return null
				};
			class J extends s.a.Component {
				getDynamicStyleTags() {
					return s.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${M.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(y.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(y.a)(this.props).titleText,Object(y.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: o,
						poll: i,
						post: a,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = n === v.b.Left, u = Object(T.b)(a), p = c ? u.filter(e => e.type === v.f.Nsfw || e.type === v.f.Spoiler) : d ? u.filter(e => Object(E.q)(e.type)) : [], m = c ? [] : d ? u.filter(e => !Object(E.q)(e.type)) : u, f = !o && !r, b = !t && p && p.length > 0 && f, h = !t && m && m.length > 0 && f;
					return s.a.createElement("div", {
						className: Object(l.a)(M.a.Component, e, a.id)
					}, !c && b && s.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement(Z, W({}, this.props, {
						leftFlair: c ? p : void 0
					})), i && s.a.createElement(L, {
						className: M.a.pollMeta,
						pollId: i.id
					}), s.a.createElement(K, this.props), h && s.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), s.a.createElement("div", {
						className: M.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${F.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = s.a.memo((function(e) {
				const t = Object(m.ab)(),
					n = Object(m.v)(t),
					r = Object(G.a)(),
					o = Object(i.e)(o => X(o, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					a = Object(Y.a)(),
					c = Object(u.b)();
				return s.a.createElement(J, W({
					pageLayer: t,
					isCommentPermalink: n
				}, r, o, e, {
					theme: a,
					sendEvent: c
				}))
			}))
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
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
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
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = i.a.span("metaText", d.a),
				u = e => s.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const i = Object(a.b)(t),
						c = r.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [r.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						d = e ? r.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : r.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [r.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return s.a.createElement(l, o, d)
				},
				m = e => s.a.createElement(l, null, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r,
						...s
					} = e, i = s;
					return r ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
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
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(r)
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
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(r.e)(n));
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
			var r = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.G.NO_STRIPE_SUBSCRIPTION:
							case r.G.USER_DOESNT_EXIST:
							case r.G.USER_REQUIRED_ERROR:
							case r.G.VALIDATION_ERROR:
								return e;
							case r.G.NO_USER:
							case r.G.NO_TEXT:
							case r.G.NO_URL:
								return r.G.VALIDATION_ERROR;
							case r.G.CREDIT_CARD_FAILURE:
							case r.G.CREDIT_CARD_FAILURE_GENERIC:
								return r.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.G.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
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
						error: s(e)
					} : e
				};
			t.a = s
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
				return E
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				s = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				p = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
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
						background: p(t)
					}
				},
				f = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				E = e => {
					const t = Object(s.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => s => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: r.subredditByName(s, e),
					post: r.post(s, t)
				}),
				s = (e, t, n, o) => s => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: r.subredditByName(s, e),
					post: r.post(s, t)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");

			function s(e, t = o.a) {
				return Object(r.e)(n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/InsideOverlay.tsx");

			function s() {
				return Object(r.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(s.b)("ignore_reports",e.isFilled)} ${e.className}`
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, o, s = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[r.Loyalty]: s.a.First,
					[r.Achievement]: s.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === s.a.First ? r.Loyalty : e === s.a.Second ? r.Achievement : r.Cosmetic
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
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "p", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				s = n("./src/reddit/models/User/index.ts");
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
				u = e => e.__typename === s.c.AvailableRedditor,
				p = e => e.__typename === o.a.Subreddit;
			var m, f, b, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(m || (m = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const E = e => f[h[e]],
				_ = e => h[f[e]],
				x = e => b[f[e]],
				O = e => f[b[e]],
				v = e => h[b[e]];
			var S;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const y = e => {
					switch (e) {
						case S.Hourly:
						case S.Daily:
						case S.Weekly:
						case S.Monthly:
							return !0
					}
					return !1
				},
				g = "custom",
				T = e => {
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
							return Object(r.a)(e)
					}
				},
				C = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const s = {
				status: r.NotFetched
			};
			t.b = (e = s, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case o.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case o.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, o = n("./src/lib/constants/specialMembership.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let s;
						(s = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][o] : r[c.a.Achievement][o] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][o] : r[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(p).sort((e, n) => {
					const r = t[e.id],
						o = t[n.id];
					return Object(i.b)(r, o)
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
					const r = e.collections[n],
						o = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[c.a.Loyalty]: m(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: m(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: m(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: m(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case s.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === r.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case s.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === r.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case s.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = Object(r.a)(e => Object(s.c)(e, {
				experimentName: o.Vc,
				experimentEligibilitySelector: s.a
			}), i.F, (e, t) => e === o.fd.Enabled && (null == t ? void 0 : t.isCreatedFromAdsUi) || (null == t ? void 0 : t.isSponsored))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.28127bec24a2638f6bf3.js.map