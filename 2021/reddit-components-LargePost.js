// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.4fc85249c4f8cf76cc36.js
// Retrieved at 3/9/2021, 6:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
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
				j = O.hasOwnProperty,
				_ = O.toString,
				k = function(e) {
					return g.reduce((function(t, n) {
						if (j.call(e, n)) {
							var s = "root" === n && "[object String]" === _.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				w = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
						return x(v(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(v(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), x(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(k(t.props)), t.target = t.targetNode, e = v(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
					n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = s.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
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
			x(w, "displayName", "IntersectionObserver")
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
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !o && !l && /macintosh/i.test(t),
						v = !i && !u && !p && !m && /linux/i.test(t),
						x = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
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
					} : i ? r = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, g && (r.version = g)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, g && (r.version = g)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : j ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : v && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? _ = (_ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? _ = (_ = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? _ = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? _ = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (_ = n(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (r.osversion = _);
					var k = !r.windows && _.split(".")[0];
					return y || c || "ipad" == o || i && (3 == k || k >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
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
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
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
				return me
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

			function p(e) {
				return o(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					s = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + s)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, p = l(t),
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
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== o(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((v = r(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
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
					s = "body" === d(n),
					r = o(n),
					i = s ? [r].concat(r.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(v(h(i)))
			}

			function x(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = o(e), n = g(e); n && x(n) && "static" === p(n).position;) n = g(n);
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
				j = "bottom",
				_ = "right",
				k = "left",
				w = "auto",
				C = [O, j, _, k],
				E = "start",
				P = "end",
				I = "clippingParents",
				S = "viewport",
				T = "popper",
				N = "reference",
				A = C.reduce((function(e, t) {
					return e.concat([t + "-" + E, t + "-" + P])
				}), []),
				L = [].concat(C, [w]).reduce((function(e, t) {
					return e.concat([t, t + "-" + E, t + "-" + P])
				}), []),
				M = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
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
			var F = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function D() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function R(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					r = t.defaultOptions,
					o = void 0 === r ? F : r;
				return function(e, t, n) {
					void 0 === n && (n = o);
					var r, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), o),
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
								p(), c.options = Object.assign(Object.assign(Object.assign({}, o), c.options), n), c.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var r = function(e) {
									var t = B(e);
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
									if (D(t, n)) {
										c.rects = {
											reference: f(t, y(n), "fixed" === c.options.strategy),
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
								p(), l = !0
							}
						};
					if (!D(e, t)) return u;

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
			var U = {
				passive: !0
			};

			function W(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function q(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function V(e) {
				var t, n = e.reference,
					s = e.element,
					r = e.placement,
					o = r ? W(r) : null,
					i = r ? H(r) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (o) {
					case O:
						t = {
							x: a,
							y: n.y - s.height
						};
						break;
					case j:
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
					case k:
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
				var d = o ? q(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case E:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case P:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
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
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = k,
					v = O,
					x = window;
				if (d) {
					var g = y(n);
					g === o(n) && (g = l(n)), r === O && (v = j, m -= g.clientHeight - s.height, m *= c ? 1 : -1), r === k && (h = _, p -= g.clientWidth - s.width, p *= c ? 1 : -1)
				}
				var w, C = Object.assign({
					position: a
				}, d && z);
				return c ? Object.assign(Object.assign({}, C), {}, ((w = {})[v] = b ? "0" : "", w[h] = f ? "0" : "", w.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", w)) : Object.assign(Object.assign({}, C), {}, ((t = {})[v] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var G = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function J(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return G[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Y(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function Q(e, t) {
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

			function Z(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === S ? Z(function(e) {
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
				}(t) : Z(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - r), {
						width: r,
						height: o,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Q(e, n)
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
					c = void 0 === i ? I : i,
					d = n.rootBoundary,
					u = void 0 === d ? S : d,
					p = n.elementContext,
					m = void 0 === p ? T : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					x = te("number" != typeof v ? v : ne(v, C)),
					g = m === T ? N : T,
					y = e.elements.reference,
					k = e.rects.popper,
					w = e.elements[b ? g : m],
					E = ee(a(w) ? w : w.contextElement || l(e.elements.popper), c, u),
					P = r(y),
					A = V({
						reference: P,
						element: k,
						strategy: "absolute",
						placement: o
					}),
					L = Z(Object.assign(Object.assign({}, k), A)),
					M = m === T ? L : P,
					B = {
						top: E.top - M.top + x.top,
						bottom: M.bottom - E.bottom + x.bottom,
						left: E.left - M.left + x.left,
						right: M.right - E.right + x.right
					},
					F = e.modifiersData.offset;
				if (m === T && F) {
					var D = F[o];
					Object.keys(B).forEach((function(e) {
						var t = [_, j].indexOf(e) >= 0 ? 1 : -1,
							n = [O, j].indexOf(e) >= 0 ? "y" : "x";
						B[e] += D[n] * t
					}))
				}
				return B
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
				return [O, _, j, k].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = R({
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
							t.modifiersData[n] = V({
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
									placement: W(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
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
										var s = W(e),
											r = [k, O].indexOf(s) >= 0 ? -1 : 1,
											o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = o[0],
											a = o[1];
										return i = i || 0, a = (a || 0) * r, [k, _].indexOf(s) >= 0 ? {
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
								for (var r = n.mainAxis, o = void 0 === r || r, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, v = W(h), x = c || (v === h || !f ? [J(h)] : function(e) {
										if (W(e) === w) return [];
										var t = J(e);
										return [Y(e), t, Y(t)]
									}(h)), g = [h].concat(x).reduce((function(e, n) {
										return e.concat(W(n) === w ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												r = n.boundary,
												o = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = H(s),
												u = (l ? a ? A : A.filter((function(e) {
													return H(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: r,
														rootBoundary: o,
														padding: i
													})[W(n)], t
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
									}), []), y = t.rects.reference, P = t.rects.popper, I = new Map, S = !0, T = g[0], N = 0; N < g.length; N++) {
									var M = g[N],
										B = W(M),
										F = H(M) === E,
										D = [O, j].indexOf(B) >= 0,
										R = D ? "width" : "height",
										U = se(t, {
											placement: M,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										q = D ? F ? _ : k : F ? j : O;
									y[R] > P[R] && (q = J(q));
									var V = J(q),
										z = [];
									if (o && z.push(U[B] <= 0), a && z.push(U[q] <= 0, U[V] <= 0), z.every((function(e) {
											return e
										}))) {
										T = M, S = !1;
										break
									}
									I.set(M, z)
								}
								if (S)
									for (var K = function(e) {
											var t = g.find((function(t) {
												var n = I.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === K(G)) break
									}
								t.placement !== T && (t.modifiersData[s]._skip = !0, t.placement = T, t.reset = !0)
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
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								v = se(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								x = W(t.placement),
								g = H(t.placement),
								w = !g,
								C = q(x),
								P = "x" === C ? "y" : "x",
								I = t.modifiersData.popperOffsets,
								S = t.rects.reference,
								T = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								A = {
									x: 0,
									y: 0
								};
							if (I) {
								if (o) {
									var L = "y" === C ? O : k,
										M = "y" === C ? j : _,
										B = "y" === C ? "height" : "width",
										F = I[C],
										D = I[C] + v[L],
										R = I[C] - v[M],
										U = m ? -T[B] / 2 : 0,
										V = g === E ? S[B] : T[B],
										z = g === E ? -T[B] : -S[B],
										K = t.elements.arrow,
										G = m && K ? b(K) : {
											width: 0,
											height: 0
										},
										J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = J[L],
										Y = J[M],
										Q = re(0, S[B], G[B]),
										Z = w ? S[B] / 2 - U - Q - X - N : V - Q - X - N,
										$ = w ? -S[B] / 2 + U + Q + Y + N : z + Q + Y + N,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										oe = I[C] + Z - ne - te,
										ie = I[C] + $ - ne,
										ae = re(m ? Math.min(D, oe) : D, F, m ? Math.max(R, ie) : R);
									I[C] = ae, A[C] = ae - F
								}
								if (a) {
									var ce = "x" === C ? O : k,
										de = "x" === C ? j : _,
										le = I[P],
										ue = re(le + v[ce], le, le - v[de]);
									I[P] = ue, A[P] = ue - le
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
								i = W(n.placement),
								a = q(i),
								c = [k, _].indexOf(i) >= 0 ? "height" : "width";
							if (r && o) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = b(r),
									u = "y" === a ? O : k,
									p = "y" === a ? j : _,
									m = n.rects.reference[c] + n.rects.reference[a] - o[a] - n.rects.popper[c],
									f = o[a] - n.rects.reference[a],
									h = y(r),
									v = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									x = m / 2 - f / 2,
									g = d[u],
									w = v - l[c] - d[p],
									C = v / 2 - l[c] / 2 + x,
									E = re(g, C, w),
									P = a;
								n.modifiersData[s] = ((t = {})[P] = E, t.centerOffset = E - C, t)
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
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && Q(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[s + "#persistent"] = {
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
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var r = s.useRef(null),
						o = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
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
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"543b8c2b28d0"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"dc992aad76fe"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"ed5cdf6f8a4d"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"4c828c7881cf"}')
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (s = (() => {})) => r => {
				const o = p(r.target, r.currentTarget),
					a = m(r.target, r.currentTarget);
				o && n && t && (u(r.target, r.currentTarget, l.anchors) ? n(t(e, o, a)) : n(n => {
					const s = t(e, o, a)(n);
					let r;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						r = t
					}
					return {
						...s,
						actionInfo: Object(i.previousPageActionInfo)(n, r)
					}
				})), u(r.target, r.currentTarget, l.anchorsAndButtons) && s(r)
			};

			function d(e) {
				return Object(o.c)(t => {
					const {
						sendEvent: n,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(c(i, o, n), [i, o, n]);
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
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				r = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "e", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/discoveryUnit.ts"),
				d = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				l = n("./src/reddit/actions/subreddit/subredditPosts.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/constants/inFeedChaining.ts"),
				m = n("./src/reddit/constants/page.ts"),
				f = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/inFeedChaining.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const y = "FEED_CHAINING__CHAIN_LOADED",
				O = Object(i.a)(y),
				j = e => {
					const t = Date.now() - e,
						n = Object(f.y)();
					return Object.keys(n).filter(e => n[e].when >= t).map(e => n[e])
				},
				_ = ({
					listingName: e,
					listingKey: t,
					postId: n
				}) => async (s, i, u) => {
					if (!n) return;
					const h = Object(x.U)(i(), {
						postId: n
					});
					if (!h) return;
					const y = h.name.toLowerCase(),
						_ = e === y;
					if (!(e === m.f || e === m.b || _)) return;
					if (_) return void P(h, t, n)(s, i, u);
					0 === j(o.hb).length && Object(f.qb)(!1);
					let k = i();
					if (Object(v.d)(k, {
							listingKey: t,
							postId: n
						}) || Object(v.a)(k).length >= p.a || Object(f.K)() || j(o.x).length >= p.a) return;
					const w = Object(x.w)(k, {
						listingKey: t,
						postId: n
					});
					if (w && w.isSponsored) return;
					await s(Object(c.g)()), k = i();
					const C = Object(v.b)(k, {
						listingName: e
					});
					if (!C) return;
					if (!h || Object(v.e)(k, {
							subredditId: h.id
						}) || (e => {
							return j(o.x).some(t => t.subredditId === e)
						})(h.id)) return;
					const E = {
						subredditIds: [h.id],
						count: p.b
					};
					await s(Object(d.b)(E));
					const I = Object(d.a)(E);
					k = i();
					const S = Object(g.v)(k, {
						key: I
					});
					0 !== S.length ? (await s((e => async (t, n) => {
						const s = o.Ub.DAY.toUpperCase(),
							r = e.filter(e => {
								const t = Object(a.a)(e, o.P.TOP, {
										t: s
									}),
									r = n();
								return 0 === Object(x.B)(r, {
									listingKey: t
								}).length
							});
						await t(Object(l.b)({
							first: 1,
							range: s,
							sort: o.I.TOP,
							subredditNames: r
						}))
					})(S.map(e => e.name))), k = i(), Object(v.f)(k, {
						postId: n
					}).length < p.c ? Object(r.a)(Object(b.c)(C, "other", h)(k)) : (Object(f.a)(n, h.id), Object(r.a)(Object(b.d)(C, h)(k)), s(O({
						listingKey: t,
						postId: n
					})))) : Object(r.a)(Object(b.c)(C, "no_chaining", h)(k))
				}, k = "FEED_CHAINING__CHAIN_TOGGLED", w = (Object(i.a)(k), "FEED_CHAINING__CHAINING_TOGGLED"), C = Object(i.a)(w), E = () => async e => {
					Object(f.qb)(!0), e(C({
						isDismissed: !0
					})), e(Object(u.e)(Object(u.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), h.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(f.qb)(!1), e(C({
							isDismissed: !1
						}))
					})))
				}, P = (e, t, n) => async (e, t, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/endpoints/category/subreddits.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			! function(e) {
				e.Factorization = "factorization", e.CustomModRelevant = "custom_mod_relevant"
			}(s || (s = {}));
			var u = n("./src/reddit/selectors/subreddit.ts");
			const p = e => {
					let t = e.subredditIds.join(",");
					return e.count && (t += `--[count:'${e.count}']`), e.variant && (t += `--[variant:'${e.variant}']`), t.toLowerCase()
				},
				m = Object(r.a)(o.q),
				f = Object(r.a)(o.p),
				b = Object(r.a)(o.o),
				h = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = p(e),
						h = Object(u.u)(r, {
							key: o
						}),
						v = Object(u.t)(r, {
							key: o
						});
					if (h || v.length > 0) return;
					t(m({
						key: o
					}));
					const x = await ((e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: a.cb.GET
					}))(s(), e);
					if (x.ok) {
						const e = Object(i.b)(x.body);
						t(f({
							key: o,
							...e
						}))
					} else {
						const e = x.error;
						t(b({
							key: o,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return W
			})), n.d(t, "a", (function() {
				return H
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				a = n("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(a.b),
				d = Object(r.a)(a.a);
			var l = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(l.b),
				p = Object(r.a)(l.a);
			var m = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				b = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = n("./src/reddit/models/Post/index.ts");
			var y = ({
				getState: e,
				onFailure: t,
				onSuccess: n,
				postId: s,
				response: r
			}) => {
				if (!r.ok) return void t(r.error);
				const o = r.body,
					{
						post: a
					} = o && o.data,
					c = e(),
					d = Object(i.a)(s, null, {
						isOtherDiscussions: !0
					});
				if (a) {
					if (a.otherDiscussions && a.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = a, {
							postFlair: r,
							postIds: o,
							posts: i,
							profiles: l,
							subreddits: u
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								n = e => {
									const n = Object(h.e)(e);
									t.posts[n.id] = n;
									const {
										crosspostRoot: s
									} = e;
									if (s && s.type === g.a.Post && s.postInfo) {
										const e = Object(h.e)(s.postInfo);
										t.posts[e.id] = e
									}
									return Object(g.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(v.a)(e.profile)) : Object(g.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(x.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(b.a)(e.subreddit))), n.id
								};
							if (e && e.edges)
								for (const {
										node: s
									} of e.edges) {
									const e = n(s);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						n({
							count: t,
							key: d,
							meta: c.meta,
							postFlair: r,
							postId: s,
							postIds: o,
							posts: i,
							profiles: l,
							subreddits: u
						})
					}
				} else n({
					count: 0,
					key: d,
					meta: c.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const O = Object(r.a)(m.a),
				j = Object(r.a)(m.b),
				_ = Object(r.a)(m.c);
			var k = n("./src/reddit/actions/subreddit/constants.ts"),
				w = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				C = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var E = ({
				getState: e,
				onSuccess: t,
				onFailure: n,
				postId: s,
				post: r
			}) => {
				try {
					t({
						altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
						postId: s
					})
				} catch (o) {
					n(o)
				}
			};
			var P = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					postId: s,
					post: r
				}) => {
					try {
						const n = [],
							i = {},
							a = {};
						if (!r || !r.linked) return;
						const c = e(),
							d = c.posts && c.posts.models,
							l = Object(o.a)(s),
							u = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: e
							} of u) {
							if (!e) break;
							if (e.id && !d.hasOwnProperty(e.id)) {
								n.push(e.id);
								const t = Object(h.a)(e);
								i[e.id] = t.post, t.crosspost && (i[t.crosspost.id] = t.crosspost)
							}
							if (Object(g.l)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(x.a)(t)
							}
						}
						t({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: l,
							meta: c.meta,
							posts: i,
							postIds: n,
							subreddits: a
						})
					} catch (i) {
						n(i)
					}
				},
				I = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var S = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var T = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					options: r,
					subreddit: o
				}) => {
					try {
						if (!o) return;
						const n = o.elements || o.posts,
							a = e(),
							c = ((e, t) => {
								const {
									edges: n
								} = e, s = n.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: s
								}
							})(n, a.posts && a.posts.models);
						if (!c.edges.length) return;
						const d = Object(I.a)(c),
							{
								range: l,
								sort: u,
								subredditName: p
							} = r,
							m = Object(i.a)(p, s.P[u], {
								t: l
							}),
							f = S(d),
							b = d.map(e => e.id);
						t({
							dist: n.dist,
							key: m,
							meta: a.meta,
							postIds: b,
							posts: f
						})
					} catch (a) {
						n(a)
					}
				},
				N = n("./src/reddit/models/Media/index.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const M = Object(r.a)(L.b),
				B = Object(r.a)(L.a),
				F = Object(r.a)(k.k),
				D = Object(r.a)(k.j),
				R = Object(r.a)(k.s),
				U = Object(r.a)(k.r),
				W = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = (await ((e, t) => Object(f.a)(e, {
							...C,
							variables: t
						}))(s(), e)).body,
						{
							subredditNames: o,
							...i
						} = e,
						a = [];
					try {
						for (const e of r.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(g.l)(t.node) && T({
								getState: n,
								onFailure: e => {
									throw e
								},
								onSuccess: e => a.push(e),
								options: {
									...i,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(R(a))
					} catch (c) {
						t(U(c))
					}
				}, H = e => async (t, n, {
					gqlContext: r
				}) => {
					var a;
					const {
						includePostImageOCRAltText: l,
						includeListingBelowExperiment: m,
						includeOtherDiscussions: b,
						includePostFeed: h,
						includePostQASchemaEligibilityFlag: v,
						postId: x,
						range: g,
						sort: k,
						subredditName: C
					} = e, I = Object(i.a)(x, null, {
						isOtherDiscussions: !0
					}), S = n(), L = Object(A.B)(S, {
						listingKey: I
					}), R = b && (!L || 0 === L.length), U = Object(i.a)(C, s.P[k], {
						t: g
					}), W = Object(A.B)(S, {
						listingKey: U
					}), H = h && (!W || 0 === W.length), q = Object(o.a)(x), V = Object(A.B)(S, {
						listingKey: q
					}), z = m && (!V || 0 === V.length), K = Object(A.I)(S, {
						postId: x
					}), G = l && !!K && !!K.media && (Object(N.H)(K.media) || Object(N.F)(K.media)) && !K.media.altText;
					if (!(R || H || z || G || v)) return;
					R && t(_({
						key: I
					}));
					const J = await ((e, t) => Object(f.a)(e, {
							...w,
							variables: t
						}))(r(), e),
						X = J.body;
					v && (J.ok ? X.data && X.data.post && t(c({
						postId: x,
						isEligibleForQASchema: null !== (a = X.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(d())), R && y({
						getState: n,
						onFailure: e => t(O(e)),
						onSuccess: e => t(j(e)),
						postId: x,
						response: J
					}), H && (J.ok ? X.data && T({
						getState: n,
						onFailure: e => t(D(e)),
						onSuccess: e => t(F(e)),
						options: e,
						subreddit: X.data.subreddit
					}) : t(D(J.error))), z && J.ok && P({
						getState: n,
						onFailure: e => t(p(e)),
						onSuccess: e => t(u(e)),
						postId: x,
						post: X.data.post
					}), G && J.ok && E({
						getState: n,
						onFailure: e => t(B(e)),
						onSuccess: e => t(M(e)),
						postId: x,
						post: X.data.post
					})
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
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
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
				}, p)), l && o.a.createElement(i.a, {
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
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
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
			}) => r.a.createElement(i.a, d({
				className: Object(o.a)(e, c.a.CallToActionButton, {
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
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = n[r],
						t = d[e].belongsTo.id;
					m(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (p = !0))
				}
				return p ? r.a.createElement(i.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function m(e) {
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("InFeedChaining")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: o.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					a = Object(l.a)(n),
					p = s && Object(i.c)(s.eventStart, s.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, r.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !a && p && r.a.createElement(d.a, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/eventTools/index.ts"),
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
				u = n("./src/reddit/icons/fonts/Live/index.tsx"),
				p = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = n.n(p),
				f = n("./src/lib/lessComponent.tsx");
			const b = f.a.span("PostEventFutureText", m.a),
				h = f.a.span("PostEventPastText", m.a),
				v = f.a.span("PostEventNowText", m.a),
				x = f.a.span("Container", m.a),
				g = f.a.wrapped(l.a, "CalendarIcon", m.a),
				y = f.a.wrapped(u.a, "LiveIcon", m.a),
				O = f.a.div("LoadingState", m.a);
			class j extends s.Component {
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
						eventIsLive: l,
						eventStart: u
					} = n, p = Object(o.e)(u, s);
					let m, f;
					if (this.state.mounted || p === o.a.Live) m = function(e, t, n) {
						const s = Object(o.e)(e, t),
							r = new Date(e * a.Hb);
						let d;
						return s === o.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (s === o.a.Future ? d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? c(r) : r.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === o.a.Past && (d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(r)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r)}`)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = r.a.createElement(O, {
							className: e
						})
					}
					if (l) f = r.a.createElement(v, null, r.a.createElement(y, null), m);
					else if (p === o.a.Future) f = r.a.createElement(b, null, r.a.createElement(g, null), m);
					else {
						if (p !== o.a.Past) return null;
						f = r.a.createElement(h, null, r.a.createElement(g, null), m)
					}
					return r.a.createElement(x, {
						className: e
					}, f)
				}
			}
			t.a = j
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
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				d = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = n("./src/reddit/actions/inFeedChaining.ts"),
				p = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				g = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				y = n("./src/reddit/selectors/inFeedChaining.ts"),
				O = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				k = n("./src/lib/ads/index.ts"),
				w = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				E = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				P = n("./src/reddit/components/AwardBadges/index.tsx"),
				I = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				S = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = n("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = n("./src/reddit/components/Flatlist/index.tsx"),
				L = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = n("./src/reddit/components/ModModeReports/index.tsx"),
				B = n("./src/reddit/components/ModModeReports/helpers.ts"),
				F = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = n("./src/reddit/components/PostContainer/index.tsx"),
				R = n("./src/reddit/components/PostLeftRail/index.tsx"),
				U = n("./src/reddit/components/PostMedia/index.tsx"),
				W = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				q = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				V = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var G = () => {
					const e = Object(H.a)();
					return r.a.createElement("div", {
						className: z.a.container
					}, r.a.createElement(q.a, {
						className: z.a.pinnedIcon,
						isFilled: e
					}), r.a.createElement("span", {
						className: z.a.metaText
					}, K._("pinned by moderators", null, {
						hk: "1qU8t4"
					})))
				},
				J = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				X = n("./src/reddit/components/PostTitle/index.tsx"),
				Y = n("./src/reddit/components/PostTopLine/index.tsx"),
				Q = n("./src/reddit/components/SourceLink/index.tsx"),
				Z = n("./src/reddit/constants/experiments.ts"),
				$ = n("./src/reddit/contexts/InsideOverlay.tsx"),
				ee = n("./src/reddit/contexts/PageLayer/index.tsx"),
				te = n("./src/reddit/contexts/Post/index.tsx"),
				ne = n("./src/reddit/helpers/isCrosspost.ts"),
				se = n("./src/reddit/helpers/postEvent.ts"),
				re = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				oe = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const ae = Object(i.a)(j.O, e => e.some(ie.c)),
				ce = Object(i.a)(ae, e => e),
				de = (e, t) => Object(oe.c)(e, {
					experimentName: Z.eb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && ce(e, {
							listingKey: n
						})
					}
				});
			var le = n("./src/reddit/selectors/postFlair.ts"),
				ue = n("./src/reddit/components/PostTopMeta/index.tsx"),
				pe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				me = n.n(pe),
				fe = n("./src/reddit/components/LargePost/index.m.less"),
				be = n.n(fe);
			const he = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(j.O)(e, {
						listingKey: n
					}) : void 0
				},
				ve = Object(o.b)(() => Object(i.c)({
					autoplayPref: _.b,
					activeModalId: x.a,
					hideNSFWPref: _.B,
					flairStyleTemplate: ee.S,
					isCurrentUserProfilePost: j.k,
					isLoggedIn: _.J,
					isActive: j.j,
					isPostChainDismissed: y.c,
					isPostChained: y.d,
					listingBelowVariant: re.b,
					imageGalleryCurrentItem: j.i,
					moderatorPermissions: O.h,
					modModeEnabled: ee.Q,
					posts: he,
					postHeightVariant: de,
					showEditFlair: le.a,
					showAwardsPlaque: g.a
				}), (e, {
					listingKey: t,
					listingName: n,
					postId: s
				}) => ({
					chainPost: () => {
						n && t && e(Object(u.d)({
							listingKey: t,
							listingName: n,
							postId: s
						}))
					},
					handleVote: t => {
						const n = t === v.a.upvoted ? Object(p.U)(s) : Object(p.r)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(p.S)(s)),
					onOpenReportsDropdown: t => e(Object(m.h)({
						tooltipId: t
					}))
				})),
				xe = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						chainPost: s,
						className: o,
						currentUser: i,
						eventFactory: u,
						flairStyleTemplate: p,
						forceLoadMedia: m,
						hideNSFWPref: v,
						hostPostId: x,
						imageGalleryCurrentItem: g,
						inSubredditOrProfile: y = !1,
						isCommentsPage: O,
						isCurrentUserProfilePost: j,
						isFrontpage: _,
						isGalleryTileLayoutDefault: H,
						isLoggedIn: q,
						isOverlay: V,
						isPostChainDismissed: z,
						isPostChained: K,
						isTopicPage: $,
						listingBelowVariant: ee,
						listingKey: te,
						listingName: re,
						moderatorPermissions: oe,
						modModeEnabled: ie,
						onClickPost: ae,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: le,
						postHeightVariant: pe,
						scrollerItemRef: fe,
						shouldShowGalleryTileOption: he,
						showAwardsPlaque: ve,
						showEditFlair: xe,
						subredditOrProfile: ge,
						userIsOp: ye,
						isActionBarAnimationEnabled: Oe,
						postId: je,
						postIds: _e
					} = e, ke = !!e.redditStyle || !!e["data-redditstyle"], we = ke ? void 0 : p, Ce = Object(d.a)(oe), Ee = ie && Ce, Pe = Object(a.a)(oe), Ie = Object(c.a)(oe), Se = Object(B.c)(le), Te = !!le.media && le.media.type === b.o.RTJSON, Ne = ye && Te, Ae = n ? n - R.a : void 0, Le = !(_ && q || $), Me = (e => e === Z.xc.OnlyTitles)(pe) && !Object(ne.a)(le), Be = (e => e === Z.xc.MediumHeight)(pe) && !Object(ne.a)(le), Fe = (e => {
						const {
							post: t,
							postIds: n,
							posts: s
						} = e;
						if (!Object(h.p)(t)) return;
						const r = n && 0 === n.indexOf(t.id),
							o = n && 1 === n.indexOf(t.id),
							i = s && s[1] && Object(h.p)(s[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: o,
							showPinnnedHeader: r
						}
					})(e), De = !!ee && !Object(Z.ud)(ee), Re = (!y || De) && !le.isSponsored, Ue = Object(k.t)(le, g), {
						source: We
					} = Ue, He = r.a.createElement(r.a.Fragment, null, r.a.createElement(D.a, {
						className: Object(w.a)(be.a.container, o, me.a.largeAndMediumPostStyles, me.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[me.a.mUseRedditTheme]: ke,
							promotedvideolink: le.isSponsored && !(le.media && b.a.has(le.media.type)),
							[be.a.topCompactPost]: Fe && Fe.hasTopCompactPostStyles,
							[be.a.bottomCompactPost]: Fe && Fe.hasBottomCompactPostStyles
						}),
						isOverlay: V,
						style: Object(l.b)(e.flairStyleTemplate),
						post: le,
						onClick: ae,
						onPostContentClick: s,
						eventFactory: u
					}, r.a.createElement(J.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: we,
						redditStyle: ke,
						subreddit: ge,
						isActionBarAnimationEnabled: Oe,
						postId: je
					}), r.a.createElement(F.a, {
						className: Object(w.a)(be.a.backgroundWrapper, {
							[be.a.isEvent]: Object(se.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: we,
						post: le,
						redditStyle: ke
					}, r.a.createElement(N.a, {
						post: le
					}), Fe && Fe.showPinnnedHeader && r.a.createElement(G, null), r.a.createElement(Y.a, {
						className: be.a.postTopLine,
						hideAwards: ve,
						hideNSFWPref: v,
						hostPostId: x,
						iconClassName: be.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!O,
						isCompactPinnedPost: !!Fe,
						isCurrentUserProfilePost: j,
						isOverlay: !!V,
						isTopicPage: !!$,
						listingKey: te,
						post: le,
						shouldShowSubscribeButton: Le,
						showSubreddit: Re,
						showSubredditIcon: !0,
						subredditOrProfile: ge
					}), r.a.createElement(X.c, {
						className: be.a.postTitle,
						post: le,
						redditStyle: ke,
						size: X.b.Large,
						titleColor: we && we.postTitleColor,
						isOverlay: V
					}), le.source && !le.isSponsored && !(le.media && Object(b.G)(le.media)) && r.a.createElement(Q.a, {
						className: be.a.sourceLink,
						post: le
					}), r.a.createElement("div", {
						className: be.a.postMediaWrapper
					}, !Fe && r.a.createElement(U.a, {
						isGalleryTileLayoutDefault: H,
						isListing: !0,
						isMediumHeight: Be,
						isNotCardView: !!V,
						isTitleOnly: Me,
						showCentered: !0,
						flairStyleTemplate: we,
						post: le,
						availableWidth: Ae,
						shouldLoad: m,
						scrollerItemRef: fe,
						autoplayPref: t,
						shouldShowGalleryTileOption: he
					})), le.isSponsored && We && We.url && r.a.createElement(C.a, {
						className: be.a.adLinkWrapper
					}, r.a.createElement(E.a, {
						post: le,
						adLinkContent: Ue
					})), ie && Ce && Se && r.a.createElement(M.a, {
						onIgnoreReports: ce,
						reportable: le
					}), r.a.createElement(L.d, null), ve && r.a.createElement(P.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: le,
						tooltipType: V ? ue.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: be.a.flatListContainer
					}, r.a.createElement(S.a, {
						className: be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: we,
						model: le,
						onVoteClick: e.handleVote
					}), r.a.createElement(A.c, {
						currentUser: i,
						hasModFlairPerms: Pe,
						hasModFullPerms: Ie,
						hasModPostPerms: Ce,
						hostPostId: x,
						isActionBarAnimationEnabled: Oe,
						isLargePost: !0,
						isOverlay: !!V,
						listingKey: te,
						modModeEnabled: ie,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: le,
						showEditPost: Ne,
						showEditFlair: xe,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !Ee,
							hide: !1,
							report: !1
						})
					}))), _ && r.a.createElement(I.a, {
						post: le,
						postIds: null != _e ? _e : [],
						subredditId: null == ge ? void 0 : ge.id
					})));
					return r.a.createElement(f.b, null, He, K && !z && r.a.createElement(T.a, {
						className: be.a.chain,
						listingKey: te,
						listingName: re,
						postId: le.id
					}))
				});
			xe.displayName = "LargePostMemoized";
			t.default = Object(te.b)(ve(Object($.b)(xe)))
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), p = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), m = Object(s.a)({
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
				fallback: o.a.createElement(p, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				} = e, [h, v] = Object(r.useState)(!0), x = Object(f.b)(n.id, b), g = Object(i.d)(), y = Object(m.a)(), O = Object(f.a)(n, b), j = (e, s) => y(Object(p.a)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					O && j("modal", "show")
				}, [O]);
				if (!O || !h) return null;
				const _ = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return o.a.createElement(l.a, {
					id: x,
					title: _,
					onClose: () => {
						v(!1), j("close", "click"), g(Object(c.A)()), g(Object(c.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(c.A)())
					}
				}, o.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", o.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), o.a.createElement(u.a, {
					onClick: () => (v(!1), j("report", "click"), void g(Object(d.c)(n.id)))
				}, s.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
				} = e, [v, x] = Object(o.useState)(s.Survey), g = Object(b.b)(n.id, h), y = Object(a.d)(), O = Object(f.a)(), j = Object(b.a)(n, h), _ = (e, s) => O(Object(m.b)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					j && _("modal", "show")
				}, [j]);
				const k = e => {
					x(s.Closed), _("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.c)(n.id, void 0, e))
				};
				if (!j) return null;
				let w = null;
				const C = {
					id: g,
					title: r.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						x(s.Closed), _("close", "click"), y(Object(d.A)())
					},
					onClickOutside: () => {
						y(Object(d.A)())
					}
				};
				switch (v) {
					case s.Survey:
						w = i.a.createElement(u.a, C, i.a.createElement("p", null, r.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [r.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.OffTopic), _("off_topic", "click")
							}
						}, r.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.DontLike), _("dont_like", "click")
							}
						}, r.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.BreaksRules), _("breaks_rules", "click")
							}
						}, r.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						w = i.a.createElement(u.a, C, i.a.createElement("p", null, r.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						w = i.a.createElement(u.a, C, i.a.createElement("p", null, r.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						w = i.a.createElement(u.a, C, i.a.createElement("p", null, r.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", i.a.createElement("a", {
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
						})), i.a.createElement(p.a, {
							onClick: () => k("site")
						}, r.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => k("community")
						}, r.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return w
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(o);

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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: o,
					children: c
				} = e;
				return Object(a.a)(t, s), r.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, r.a.createElement("h3", {
					className: d.a.header
				}, r.a.createElement("span", {
					className: d.a.title
				}, o), r.a.createElement("button", {
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
					theme: p,
					...m
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
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
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/media.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/video.ts"),
				x = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(O);
			const _ = Object(m.a)(() => Object(o.c)({
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
					}) => Object(v.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(v.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(v.c)(e, {
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
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						currentIndex: o,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: p,
						onClick: m,
						onPostContentClick: b,
						sendEvent: h,
						style: v,
						ref: g
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, p, t, d))(n), b && k(n) && b(n, p)), p.id && d) {
								const {
									source: e
								} = Object(i.t)(p, d);
								if (e && e.outboundUrl) {
									const t = o + 1;
									h(Object(c.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(x.a)(j.a.WrappedPost, s, `Post ${p.id}`, {
							promotedlink: p.isSponsored
						}),
						id: l ? l(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, n), O = !!p.media && p.media.type === f.o.VIDEO;
					return p.isSponsored || O ? r.a.createElement(a.a, {
						post: p,
						trackDisplay: !0
					}, y) : p.media && Object(f.E)(p.media) ? r.a.createElement(u, {
						postId: p.id
					}, y) : y
				}
			}
			t.a = _(Object(y.c)(Object(p.c)(w)))
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
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.a, {
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
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				f = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: v,
					subreddit: x,
					isOverlay: g,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: j
				} = e, _ = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return r.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: v
				}, s && r.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), r.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: v,
					upvoteTooltipId: _,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: j,
					scoreClassName: f.a.score
				}), k && r.a.createElement(a.b, {
					rightOf: _
				}, "survey" === k ? r.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				}) : r.a.createElement(o.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
			e.exports = {
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
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				v = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/Subreddit/index.ts"),
				y = n("./src/reddit/components/PostTopLine/index.m.less"),
				O = n.n(y);
			const j = n("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					hideAwards: s,
					hideNSFWPref: y,
					hostPostId: _,
					iconClassName: k,
					inSubredditOrProfile: w,
					isCommentsPage: C,
					isCompactPinnedPost: E,
					isCurrentUserProfilePost: P,
					isOverlay: I,
					isTopicPage: S,
					listingKey: T,
					post: N,
					shouldShowSubscribeButton: A,
					showCornerOutboundLink: L,
					showSubreddit: M,
					showSubredditIcon: B,
					subredditOrProfile: F
				} = e, D = s || S;
				return r.a.createElement(j, {
					className: t
				}, M && F && r.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, r.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: F.url
				}, B && r.a.createElement(l.b, {
					className: Object(o.a)(O.a.subredditIcon, k),
					shouldHideNsfwIcon: y,
					subredditOrProfile: F
				}))), r.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, M && r.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: n,
					tooltipType: I ? d.c.Lightbox : void 0,
					post: N,
					showSub: M,
					subredditOrProfile: F
				}), r.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: F ? F.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: E,
					post: N,
					tooltipType: I ? d.c.Lightbox : void 0
				}), !D && r.a.createElement(i.a, {
					isPostDetail: C,
					thing: N,
					tooltipType: I ? d.c.Lightbox : void 0
				})), F && M && A && !P && r.a.createElement(p.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(h.f)(N.id, e ? "unsubscribe" : "subscribe", "post", T, _),
					identifier: {
						name: F.name,
						type: Object(g.g)(F) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: N.id,
					size: f.c.XS
				}), L && r.a.createElement(b.b, {
					className: O.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(e.post),
					source: N.source
				}, r.a.createElement(v.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = 3,
				r = 5,
				o = 10
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const s = !(!t && !n);
						let r = "";
						return r = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, i, a);
					return r.a.createElement(e, u({
						className: Object(o.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				m = p(c.a),
				f = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? m : i.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(o.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(o.a)(l.a.CheckboxSizing, e.className),
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
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
				if (!(t && n && s && r)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				}
			}
			n.d(t, "b", (function() {
				return s
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
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				f = e => Object(s.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "E", (function() {
				return k
			})), n.d(t, "F", (function() {
				return w
			})), n.d(t, "M", (function() {
				return E
			})), n.d(t, "B", (function() {
				return P
			})), n.d(t, "C", (function() {
				return I
			})), n.d(t, "D", (function() {
				return S
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "L", (function() {
				return L
			})), n.d(t, "K", (function() {
				return M
			})), n.d(t, "I", (function() {
				return B
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "z", (function() {
				return R
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "N", (function() {
				return W
			})), n.d(t, "J", (function() {
				return H
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "H", (function() {
				return V
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "f", (function() {
				return J
			})), n.d(t, "e", (function() {
				return X
			})), n.d(t, "s", (function() {
				return Z
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "p", (function() {
				return re
			})), n.d(t, "q", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return ae
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/models/Widgets/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/reddit/selectors/widgets.ts"),
				f = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const b = "discovery_unit",
				h = (e, t, n) => ({
					...p.defaults(e),
					source: b,
					screen: p.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(r.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				v = (e, t, n) => ({
					...h(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				x = (e, t) => {
					Object(f.a)(g(t)(e))
				},
				g = (e, t) => n => v(n, e, t),
				y = (e, t, n, s) => "unitName" in t ? h(e, t, s) : ((e, t, n) => ({
					...p.defaults(e),
					source: "search",
					screen: p.screen(e),
					search: n ? {
						...p.search(e, n),
						structureType: p.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				O = (e, t, n, r, o) => ({
					...y(e, t, r, o),
					action: "view",
					noun: s.ITEM_POST,
					post: p.post(e, n)
				}),
				j = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.StructureType.PromotedTrend : p.StructureType.Trending
				});
			var _;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(_ || (_ = {}));
			const k = (e, t, n) => {
					Object(f.a)(C(e, t, n, i.c.CLICK))
				},
				w = (e, t, n) => {
					Object(f.a)(C(e, t, n, i.c.VIEW))
				},
				C = (e, t, n, s) => {
					const r = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: j(t),
						discoveryUnit: n === _.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: p.actionInfo(e, {
							paneName: n,
							position: r
						}),
						search: {
							originPageType: e.platform.currentPage ? p.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.StructureType.Trending,
							queryId: s === i.c.CLICK ? Object(a.c)(a.a.SearchResults) : void 0
						}
					}
				},
				E = (e, t, n, s, r, o, a) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(c.e)(e, n, s, r, o, t),
						action: i.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				P = (e, t, n, s) => {
					Object(f.a)(O(e, t, n, s))
				},
				I = (e, t, n, s) => r => O(r, e, t, n, s),
				S = (e, t, n, r) => {
					const o = y(e, t, r);
					Object(f.a)({
						...o,
						...Object(m.b)(e, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				T = (e, t) => {
					Object(f.a)({
						...h(e, t),
						source: b,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				N = (e, t, n, s) => {
					Object(f.a)(A(t, n, s)(e))
				},
				A = (e, t, n, r) => o => {
					return {
						...y(o, e, n, r),
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(o, t)
					}
				},
				L = (e, t, n, s) => r => o => Object(c.e)(o, r, e, t, n, s),
				M = (e, t, n, s) => r => o => Object(c.d)(o, e, t, void 0, n, r, s),
				B = (e, t, n, s) => r => o => ({
					...Object(c.e)(o, r, e, t, n, s),
					noun: "ad"
				}),
				F = (e, t) => n => r => ({
					...e ? h(r, e, t) : {},
					source: b,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(r, n)
				}),
				D = (e, t, n, s) => {
					Object(f.a)(R(t, n, s)(e))
				},
				R = (e, t, n, s) => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						a = o ? Object(m.b)(r, o) : void 0;
					return {
						...y(r, e, n, s),
						...a,
						source: b,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(r, t)
					}
				},
				U = (e, t, n) => s => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						a = o ? Object(m.b)(r, o) : void 0;
					return {
						...y(r, e, void 0, n),
						...a,
						source: b,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(r, t)
					}
				},
				W = (e, t, n) => {
					const s = y(e, t);
					Object(f.a)({
						...s,
						...Object(m.b)(e, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				H = (e, t, n, s, r, o) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(c.d)(e, t, n, s, r, void 0, o)
					})
				},
				q = (e, t, n) => {
					const s = y(e, t);
					Object(f.a)({
						...s,
						...Object(m.b)(e, n),
						source: b,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				V = (e, t) => n => {
					const s = Object(l.j)(t);
					return {
						...h(n, e, t),
						...Object(m.b)(n, s),
						source: b,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				z = (e, t) => n => ({
					...h(n, e, t),
					action: "status",
					actionInfo: p.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				K = (e, t, n) => s => ({
					...h(s, e, n),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				G = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				J = (e, t, n) => s => ({
					...y(s, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				X = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				Y = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Q = (e, t, n) => p.actionInfo(e, {
					position: n
				}),
				Z = (e, t, n) => {
					const s = Y();
					return e => ({
						...v(e, s),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = Y();
					return e => ({
						...O(e, s, t),
						actionInfo: Q(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const r = Y();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const r = Y();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						post: p.post(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, r) => {
					const o = Y();
					return e => ({
						...h(e, o),
						actionInfo: Q(e, 0, r),
						subreddit: p.subredditById(e, n) || null,
						post: p.post(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const r = Y();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				re = (e, t, n, r) => {
					const o = Y();
					return e => ({
						...h(e, o),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: r ? p.post(e, r) : null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				oe = (e, t, n, r) => {
					const o = Y();
					return e => ({
						...h(e, o),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: r ? p.post(e, r) : null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, n) => {
					const r = Y();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ae = (e, t, n) => {
					const r = Y();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ce = (e, t) => n => ({
					...h(n, e),
					...t && Object(m.b)(n, t),
					source: b,
					action: i.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...h(t, e),
					source: b,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, n, r) => o => ({
					source: "report_prompt",
					noun: n,
					action: r,
					subreddit: s.subredditByName(o, e),
					post: s.post(o, t)
				}),
				o = (e, t, n, r) => o => ({
					source: "report_survey",
					noun: n,
					action: r,
					subreddit: s.subredditByName(o, e),
					post: s.post(o, t)
				})
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
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
					experimentName: s.ob
				});
				return !(!t || Object(s.ud)(t))
			}
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				a = n("./src/reddit/constants/inFeedChaining.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = n("./src/reddit/selectors/discoveryUnit.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const p = [],
				m = (e, t) => {
					const n = e.posts.chained.idToListingKey[t.postId];
					return t.listingKey === n
				},
				f = (e, t) => {
					const n = e.posts.chained.dismissedIdToListingKey[t.postId];
					return (e => e.posts.chained.dismissed)(e) || t.listingKey === n
				},
				b = Object(s.a)(e => e.posts.chained.idToListingKey, e => Object.keys(e).filter(t => e[t])),
				h = (e, {
					subredditId: t
				}) => {
					return b(e).some(n => {
						const s = Object(l.U)(e, {
							postId: n
						});
						return !!s && s.id === t
					})
				},
				v = (e, {
					subredditName: t
				}) => {
					const n = r.Ub.DAY.toUpperCase(),
						s = Object(o.a)(t, r.P.TOP, {
							t: n
						}),
						i = Object(l.B)(e, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const r of i) {
							const t = Object(l.I)(e, {
								postId: r
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				x = (e, {
					postId: t
				}) => {
					const n = ((e, {
							postId: t
						}) => {
							const n = Object(l.I)(e, {
								postId: t
							});
							if (!n) return p;
							const s = Object(i.a)({
								subredditIds: [n.belongsTo.id],
								count: a.b
							});
							return Object(u.v)(e, {
								key: s
							})
						})(e, {
							postId: t
						}),
						s = [];
					for (const {
							name: r
						} of n) {
						const t = v(e, {
							subredditName: r
						});
						t && s.push(t.id)
					}
					return s
				},
				g = (e, {
					listingName: t
				}) => {
					const n = c.b;
					return Object(d.c)(e, {
						unitName: n
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.4fc85249c4f8cf76cc36.js.map