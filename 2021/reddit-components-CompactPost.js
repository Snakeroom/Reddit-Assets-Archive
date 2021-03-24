// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.05f097cc118e9cf0b5ea.js
// Retrieved at 3/24/2021, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-dom/index.js"),
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
							s = t[1],
							o = void 0 === s ? r : s,
							a = t[2],
							c = void 0 === a ? r : a,
							d = t[3];
						return r + " " + o + " " + c + " " + (void 0 === d ? o : d)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = c.keys(); t = o.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || a(s, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var r, s = n.values(); r = s.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = l(t, e[n]);
					r && r.handleChange(e[n])
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
				v = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				y = O.hasOwnProperty,
				S = O.toString,
				g = function(e) {
					return x.reduce((function(t, n) {
						if (y.call(e, n)) {
							var r = "root" === n && "[object String]" === S.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
						return _(E(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), _(E(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), _(E(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(g(t.props)), t.target = t.targetNode, e = E(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
						var n = v.some((function(n) {
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
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(s.a.Component);
			_(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, i) {
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
					checkPropTypes: o,
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
					var s, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						E = !i && !u && !m && !p && /linux/i.test(t),
						_ = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !v && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, _ ? (s.msedge = e, s.version = _) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: _
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, x && (s.version = x)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, x && (s.version = x)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && x && (s.version = x)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : y ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : E && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var S = "";
					s.windows ? S = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? S = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? S = (S = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? S = (S = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? S = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? S = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? S = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? S = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (S = n(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (s.osversion = S);
					var g = !s.windows && S.split(".")[0];
					return v || c || "ipad" == o || i && (3 == g || g >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, s) {
					var i = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
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
				return r(e, (function(e, r, s) {
					return n = !!t(e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + n(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, o) {
					n = r ? (r = !1, e) : t(n, e, s, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : s;
				return n && a(e, t, n) && (t = void 0), c(e, o(t, 3))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && s(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, s)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
				s = "function" == typeof Set,
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
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && i instanceof Set) {
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
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var r = n("./node_modules/react/index.js");

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
				return s(l(e)).left + i(e).scrollLeft
			}

			function m(e) {
				return o(e).getComputedStyle(e)
			}

			function p(e) {
				var t = m(e),
					n = t.overflow,
					r = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + r)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var r, a, m = l(t),
					f = s(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					E = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || p(m)) && (h = (r = t) !== o(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), c(t) ? ((E = s(t)).x += t.clientLeft, E.y += t.clientTop) : m && (E.x = u(m))), {
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
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && p(t) ? t : e(h(t))
					}(e),
					r = "body" === d(n),
					s = o(n),
					i = r ? [s].concat(s.visualViewport || [], p(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(E(h(i)))
			}

			function _(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function x(e) {
				return c(e) && "fixed" !== m(e).position ? e.offsetParent : null
			}

			function v(e) {
				for (var t = o(e), n = x(e); n && _(n) && "static" === m(n).position;) n = x(n);
				return n && "body" === d(n) && "static" === m(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = m(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				y = "bottom",
				S = "right",
				g = "left",
				T = "auto",
				C = [O, y, S, g],
				j = "start",
				I = "end",
				k = "clippingParents",
				w = "viewport",
				P = "popper",
				A = "reference",
				L = C.reduce((function(e, t) {
					return e.concat([t + "-" + j, t + "-" + I])
				}), []),
				N = [].concat(C, [T]).reduce((function(e, t) {
					return e.concat([t, t + "-" + j, t + "-" + I])
				}), []),
				R = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function D(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(s) {
						n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var s = t.get(r);
								s && e(s)
							}
						})), r.push(s)
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
					s = t.defaultOptions,
					o = void 0 === s ? M : s;
				return function(e, t, n) {
					void 0 === n && (n = o);
					var s, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, M), o),
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
									reference: a(e) ? E(e) : e.contextElement ? E(e.contextElement) : [],
									popper: E(t)
								};
								var s = function(e) {
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
								return c.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										s = e.effect;
									if ("function" == typeof s) {
										var o = s({
											state: c,
											name: t,
											instance: u,
											options: r
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
									if (F(t, n)) {
										c.rects = {
											reference: f(t, v(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var s = c.orderedModifiers[r],
													o = s.fn,
													i = s.options,
													a = void 0 === i ? {} : i,
													d = s.name;
												"function" == typeof o && (c = o({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, r = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(s())
									}))
								}))), i
							}),
							destroy: function() {
								m(), l = !0
							}
						};
					if (!F(e, t)) return u;

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
			var B = {
				passive: !0
			};

			function G(e) {
				return e.split("-")[0]
			}

			function Y(e) {
				return e.split("-")[1]
			}

			function W(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function V(e) {
				var t, n = e.reference,
					r = e.element,
					s = e.placement,
					o = s ? G(s) : null,
					i = s ? Y(s) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (o) {
					case O:
						t = {
							x: a,
							y: n.y - r.height
						};
						break;
					case y:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case S:
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
				var d = o ? W(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case j:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case I:
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
					s = e.placement,
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
					m = u.x,
					p = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = g,
					E = O,
					_ = window;
				if (d) {
					var x = v(n);
					x === o(n) && (x = l(n)), s === O && (E = y, p -= x.clientHeight - r.height, p *= c ? 1 : -1), s === g && (h = S, m -= x.clientWidth - r.width, m *= c ? 1 : -1)
				}
				var T, C = Object.assign({
					position: a
				}, d && H);
				return c ? Object.assign(Object.assign({}, C), {}, ((T = {})[E] = b ? "0" : "", T[h] = f ? "0" : "", T.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", T)) : Object.assign(Object.assign({}, C), {}, ((t = {})[E] = b ? p + "px" : "", t[h] = f ? m + "px" : "", t.transform = "", t))
			}
			var q = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return q[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Z(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function J(e, t) {
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

			function $(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function Q(e, t) {
				return t === w ? $(function(e) {
					var t = o(e),
						n = l(e),
						r = t.visualViewport,
						s = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return r && (s = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
						width: s,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : $(function(e) {
					var t = l(e),
						n = i(e),
						r = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === m(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - s), {
						width: s,
						height: o,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = E(e),
							n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && c(e) ? v(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && J(e, n)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(r, [n]),
					o = s[0],
					i = s.reduce((function(t, n) {
						var r = Q(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
					}), Q(e, o));
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
					o = void 0 === r ? e.placement : r,
					i = n.boundary,
					c = void 0 === i ? k : i,
					d = n.rootBoundary,
					u = void 0 === d ? w : d,
					m = n.elementContext,
					p = void 0 === m ? P : m,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					E = void 0 === h ? 0 : h,
					_ = te("number" != typeof E ? E : ne(E, C)),
					x = p === P ? A : P,
					v = e.elements.reference,
					g = e.rects.popper,
					T = e.elements[b ? x : p],
					j = ee(a(T) ? T : T.contextElement || l(e.elements.popper), c, u),
					I = s(v),
					L = V({
						reference: I,
						element: g,
						strategy: "absolute",
						placement: o
					}),
					N = $(Object.assign(Object.assign({}, g), L)),
					R = p === P ? N : I,
					D = {
						top: j.top - R.top + _.top,
						bottom: R.bottom - j.bottom + _.bottom,
						left: j.left - R.left + _.left,
						right: R.right - j.right + _.right
					},
					M = e.modifiersData.offset;
				if (p === P && M) {
					var F = M[o];
					Object.keys(D).forEach((function(e) {
						var t = [S, y].indexOf(e) >= 0 ? 1 : -1,
							n = [O, y].indexOf(e) >= 0 ? "y" : "x";
						D[e] += F[n] * t
					}))
				}
				return D
			}

			function se(e, t, n) {
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
				return [O, S, y, g].some((function(t) {
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
								s = r.scroll,
								i = void 0 === s || s,
								a = r.resize,
								c = void 0 === a || a,
								d = o(t.elements.popper),
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
								r = n.gpuAcceleration,
								s = void 0 === r || r,
								o = n.adaptive,
								i = void 0 === o || o,
								a = {
									placement: G(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
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
									s = t.elements[e];
								c(s) && d(s) && (Object.assign(s.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
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
										var r = t.elements[e],
											s = t.attributes[e] || {},
											o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(r) && d(r) && (Object.assign(r.style, o), Object.keys(s).forEach((function(e) {
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
								s = n.offset,
								o = void 0 === s ? [0, 0] : s,
								i = N.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = G(e),
											s = [g, O].indexOf(r) >= 0 ? -1 : 1,
											o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = o[0],
											a = o[1];
										return i = i || 0, a = (a || 0) * s, [g, S].indexOf(r) >= 0 ? {
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
								for (var s = n.mainAxis, o = void 0 === s || s, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, m = n.altBoundary, p = n.flipVariations, f = void 0 === p || p, b = n.allowedAutoPlacements, h = t.options.placement, E = G(h), _ = c || (E === h || !f ? [K(h)] : function(e) {
										if (G(e) === T) return [];
										var t = K(e);
										return [Z(e), t, Z(t)]
									}(h)), x = [h].concat(_).reduce((function(e, n) {
										return e.concat(G(n) === T ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												s = n.boundary,
												o = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? N : c,
												l = Y(r),
												u = (l ? a ? L : L.filter((function(e) {
													return Y(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: s,
														rootBoundary: o,
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
									}), []), v = t.rects.reference, I = t.rects.popper, k = new Map, w = !0, P = x[0], A = 0; A < x.length; A++) {
									var R = x[A],
										D = G(R),
										M = Y(R) === j,
										F = [O, y].indexOf(D) >= 0,
										U = F ? "width" : "height",
										B = re(t, {
											placement: R,
											boundary: l,
											rootBoundary: u,
											altBoundary: m,
											padding: d
										}),
										W = F ? M ? S : g : M ? y : O;
									v[U] > I[U] && (W = K(W));
									var V = K(W),
										H = [];
									if (o && H.push(B[D] <= 0), a && H.push(B[W] <= 0, B[V] <= 0), H.every((function(e) {
											return e
										}))) {
										P = R, w = !1;
										break
									}
									k.set(R, H)
								}
								if (w)
									for (var z = function(e) {
											var t = x.find((function(t) {
												var n = k.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return P = t, "break"
										}, q = f ? 3 : 1; q > 0; q--) {
										if ("break" === z(q)) break
									}
								t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0)
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
								s = n.mainAxis,
								o = void 0 === s || s,
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
								E = re(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								_ = G(t.placement),
								x = Y(t.placement),
								T = !x,
								C = W(_),
								I = "x" === C ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								w = t.rects.reference,
								P = t.rects.popper,
								A = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								L = {
									x: 0,
									y: 0
								};
							if (k) {
								if (o) {
									var N = "y" === C ? O : g,
										R = "y" === C ? y : S,
										D = "y" === C ? "height" : "width",
										M = k[C],
										F = k[C] + E[N],
										U = k[C] - E[R],
										B = p ? -P[D] / 2 : 0,
										V = x === j ? w[D] : P[D],
										H = x === j ? -P[D] : -w[D],
										z = t.elements.arrow,
										q = p && z ? b(z) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[N],
										Z = K[R],
										J = se(0, w[D], q[D]),
										$ = T ? w[D] / 2 - B - J - X - A : V - J - X - A,
										Q = T ? -w[D] / 2 + B + J + Z + A : H + J + Z + A,
										ee = t.elements.arrow && v(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										oe = k[C] + $ - ne - te,
										ie = k[C] + Q - ne,
										ae = se(p ? Math.min(F, oe) : F, M, p ? Math.max(U, ie) : U);
									k[C] = ae, L[C] = ae - M
								}
								if (a) {
									var ce = "x" === C ? O : g,
										de = "x" === C ? y : S,
										le = k[I],
										ue = se(le + E[ce], le, le - E[de]);
									k[I] = ue, L[I] = ue - le
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
								s = n.elements.arrow,
								o = n.modifiersData.popperOffsets,
								i = G(n.placement),
								a = W(i),
								c = [g, S].indexOf(i) >= 0 ? "height" : "width";
							if (s && o) {
								var d = n.modifiersData[r + "#persistent"].padding,
									l = b(s),
									u = "y" === a ? O : g,
									m = "y" === a ? y : S,
									p = n.rects.reference[c] + n.rects.reference[a] - o[a] - n.rects.popper[c],
									f = o[a] - n.rects.reference[a],
									h = v(s),
									E = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									_ = p / 2 - f / 2,
									x = d[u],
									T = E - l[c] - d[m],
									C = E / 2 - l[c] / 2 + _,
									j = se(x, C, T),
									I = a;
								n.modifiersData[r] = ((t = {})[I] = j, t.centerOffset = j - C, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								s = n.element,
								o = void 0 === s ? "[data-popper-arrow]" : s,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && J(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[r + "#persistent"] = {
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
								s = t.rects.popper,
								o = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								c = oe(i, r),
								d = oe(a, s, o),
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
				ce = n("./node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				me = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var s = r.useRef(null),
						o = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || me
						},
						i = r.useState({
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
								onFirstUpdate: o.onFirstUpdate,
								placement: o.placement,
								strategy: o.strategy,
								modifiers: [].concat(o.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(s.current, e) ? s.current || e : (s.current = e, e)
						}), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, d]),
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
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
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
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const c = (e, t, n) => (r = (() => {})) => s => {
				const o = m(s.target, s.currentTarget),
					a = p(s.target, s.currentTarget);
				o && n && t && (u(s.target, s.currentTarget, l.anchors) ? n(t(e, o, a)) : n(n => {
					const r = t(e, o, a)(n);
					let s;
					if (r && r.actionInfo) {
						const {
							pageType: e,
							...t
						} = r.actionInfo;
						s = t
					}
					return {
						...r,
						actionInfo: Object(i.previousPageActionInfo)(n, s)
					}
				})), u(s.target, s.currentTarget, l.anchorsAndButtons) && r(s)
			};

			function d(e) {
				return Object(o.c)(t => {
					const {
						sendEvent: n,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, l = Object(r.useCallback)(c(i, o, n), [i, o, n]);
					return s.a.createElement(e, a({}, d, {
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
				m = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
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
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(r.c)(t)
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
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
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
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
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
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
				return E
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return y
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
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
				E = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				v = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				y = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return P
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
				s = n("./src/lib/makeActionCreator/index.ts"),
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
				b = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(s.a)(f),
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				_ = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				x = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				v = Object(s.a)(_),
				O = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				g = Object(s.a)(y),
				T = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				j = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				I = Object(s.a)(C),
				k = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				P = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				A = Object(s.a)(w),
				L = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				N = Object(s.a)(P),
				R = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(p.T)(o, {
							subredditId: e
						}).name;
					n(b());
					const a = await Object(c.k)(s(), i, t);
					if (a.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(E());
					return a.ok
				}, D = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(p.T)(o, {
							subredditId: e
						}).name;
					n(x());
					const a = await Object(c.j)(s(), t, l.d.LinkFlair, i);
					if (a.ok) {
						n(v({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(O());
					return a.ok
				}, M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const d = s(),
						m = Object(p.T)(d, {
							subredditId: t
						}).name;
					n(S());
					const f = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let b = f.ok && !(f.body && !1 === f.body.success);
					if (b) {
						const r = f.body;
						if (n(g({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[r.id];
							s ? b = await n(Object(i.d)(t, r.id, s)) : o && (b = await n(Object(i.c)(t, r.id)))
						}
					}
					if (b) {
						const e = Object(a.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(T());
						const s = Object(a.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(a.f)(s))
					}
					return b
				}, F = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						d = Object(p.T)(i, {
							subredditId: t
						}).name;
					if (n(j()), (await Object(c.b)(o(), e, d)).ok) {
						n(I({
							subredditId: t,
							templateId: e
						}));
						const s = Object(a.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(s))
					} else {
						n(k());
						const s = Object(a.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(a.f)(s))
					}
				}, U = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						d = Object(m.d)(i, {
							subredditId: t
						}).templateIds,
						f = Object(p.T)(i, {
							subredditId: t
						}).name;
					if (n(A({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), f, l.d.LinkFlair, e)).ok) {
						n(L());
						const e = Object(a.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(N({
							subredditId: t,
							templateIds: d
						}));
						const s = Object(a.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(a.f)(s))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (r, s, {
					apiContext: i
				}) => {
					const a = e.flair.filter(e => !Object(d.p)(e.type));
					if (t && a.unshift(t), r(Object(o.L)({
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
				return O
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
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
				E = n("./src/reddit/models/Image/index.tsx"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/telemetry/index.ts");
			const v = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: r
			}) => async (s, o, i) => {
				const a = o(),
					c = Object(_.T)(a, {
						subredditId: e
					});
				if (!c) return !1;
				s(Object(l.k)(r));
				const d = await (async (e, t, n, r, s, o) => Object(p.a)(Object(f.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(i.apiContext(), c.name, t, r.file.name, n, await Object(u.g)(r.file));
				let h = !1;
				try {
					const e = await Object(l.g)(o(), d, r, E.a.FlairTemplates);
					e && s(Object(l.j)(e)), h = !0
				} catch (x) {
					if (x instanceof Error) throw x;
					s(Object(l.i)(x))
				}
				return h
			}, O = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", y = Object(d.a)(O), S = (e, t, n) => async (r, o, a) => {
				const {
					apiContext: d
				} = a;
				let u = o();
				const {
					pendingImages: O,
					...S
				} = n;
				let g = S;
				const T = Object(_.T)(u, {
					subredditId: e
				});
				if (!T) return !1;
				const C = u.structuredStyles.flairTemplate.models[t];
				if (C && i()(C, g)) return !0;
				if (O) {
					const n = [];
					if (s()(O, (s, o) => {
							s && n.push(r(v({
								flairId: t,
								imageData: Object(E.m)(s),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					g = ((e, t, n) => {
						const r = {
							...e
						};
						return s()(t, (e, t) => {
							const s = e && n.imageUploads[e.id];
							s && s.kind === E.b.TempUploaded && (r[t] = s.url)
						}), r
					})(g, O, o())
				}
				u = o();
				let j = null,
					I = null;
				const k = [];
				try {
					(j = await Object(l.f)(u, E.a.FlairTemplates)) && (I = Object(l.m)(j)(r, o, a), k.push(...c()(j.imagesByKey)))
				} catch (L) {
					return !1
				}
				const w = await (async (e, t, n, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: r
					}))(d(), T.name, t, g),
					P = C ? "edit_post_flair_template" : "save_post_flair_template",
					A = Object(h.e)(u, P);
				if (w.ok) {
					let e;
					if (I) try {
						await I, e = ((e, t, n) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === E.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(g, k, o())
					} catch (L) {
						e = null
					} else e = g;
					r(y({
						flairId: t,
						template: e || g
					}))
				} else j && j.websocket.close();
				return Object(x.a)({
					...A,
					actionInfo: {
						...A.actionInfo,
						success: w.ok
					}
				}), w.ok
			}, g = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", T = Object(d.a)(g), C = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					i = Object(_.T)(o, {
						subredditId: e
					});
				if (!i) return !1;
				const a = await (async (e, t, n) => Object(p.a)(Object(f.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(s(), i.name, t),
					c = Object(h.e)(o, "delete_flair_template");
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
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var b = n("./src/graphql/operations/SubscribedSubreddits.json"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var _ = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				v = n("./src/reddit/models/GqlTopLevelField.ts"),
				O = n("./src/reddit/models/User/index.ts");

			function y(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== O.c.AvailableRedditor) continue;
					const e = Object(_.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== v.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var S = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/selectors/profile.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/subscriptions.ts"),
				j = n("./src/reddit/selectors/user.ts");
			const I = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				k = Object(o.a)(d.c),
				w = Object(o.a)(d.b),
				P = Object(o.a)(d.a),
				A = Object(o.a)(d.h),
				L = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(w());
					const s = await (e => Object(h.a)(e, b))(n());
					if (s.ok) {
						const t = y(s.body.data);
						e(k(t))
					} else e(P({
						error: s.error
					}))
				}),
				N = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				R = (e, t, n) => async (o, d, {
					apiContext: b
				}) => {
					let h = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(T.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(g.m)(d(), e.name),
						name: `${s.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(j.J)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.j)());
					const _ = Object(j.i)(d());
					if (_) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !N(_, e)), (e = e.filter(e => !N(_, e))).length !== n || h.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, S.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (o(A({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(C.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: r
						}) => Object(m.a)(Object(p.a)(e, [f.a]), {
							method: s.cb.POST,
							endpoint: Object(E.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(b(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${r.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "followed" : "unfollowed"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "joined" : "left"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(A({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(C.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(s, S.b.Error)))
					}
				}, D = Object(o.a)(d.f), M = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(T.L)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						h = d.indexOf(e.id),
						E = -1 === b && -1 === h,
						_ = o.subreddits.models,
						x = o.profiles.models;
					t(D({
						makeFavorite: E,
						identifier: e,
						subredditModels: _,
						profileModels: x
					}));
					const v = {
							type: e.type,
							name: i.name
						},
						O = () => Object(T.gb)(n(), {
							identifier: v
						});
					(O() || (await t(R([v], !0)), O())) && ((await ((e, t, n) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(r(), a, E)).ok || (t(D({
						makeFavorite: !E,
						identifier: e,
						subredditModels: _,
						profileModels: x
					})), t(Object(l.f)({
						text: I(),
						kind: S.b.Error
					}))))
				}, F = Object(o.a)(d.d), U = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: I(),
								kind: S.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(F({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(F({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, B = Object(o.a)(d.e), G = e => async (t, n, {
					apiContext: o
				}) => {
					const i = n(),
						a = i.multireddits.models;
					if (!Object(j.J)(i)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: S.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(B({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(B({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return o
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
				return m
			})), n.d(t, "o", (function() {
				return p
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
				return v
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				v = "USERFLAIR_FETCH_SUCCESS"
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
				s = n.n(r);
			const o = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !s && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(a.a, {
					href: c.url.replace(r.a.redditUrl, ""),
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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
			}) => s.a.createElement(i.a, d({
				className: Object(o.a)(e, c.a.CallToActionButton, {
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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
			}) => s.a.createElement(a.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/User/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				_ = n("./src/reddit/actions/post.ts"),
				x = n("./src/reddit/actions/postFlair.ts"),
				v = n("./src/reddit/actions/tooltip.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/moderatorPermissions.ts"),
				S = n("./src/reddit/selectors/postFlair.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				C = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = n("./src/reddit/components/AwardBadges/index.tsx"),
				I = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				k = n("./src/reddit/components/CommentsLink/index.tsx"),
				w = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				P = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = n("./src/reddit/components/ExpandoButton/index.tsx"),
				L = n("./src/reddit/components/Flatlist/index.tsx"),
				N = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				F = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				B = n("./src/reddit/components/ModModeReports/helpers.ts"),
				G = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				Y = n("./src/reddit/components/PopupPortal/index.tsx"),
				W = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = n("./src/reddit/components/PostBadges/index.tsx"),
				H = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				q = n("./src/reddit/components/PostLeftRail/index.tsx"),
				K = n("./src/reddit/components/PostMedia/index.tsx"),
				X = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Z = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				J = n("./src/reddit/components/PostTitle/index.tsx"),
				$ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				Q = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ee = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = n("./src/reddit/components/SubredditIcon/index.tsx"),
				re = n("./src/reddit/components/VerticalVotes/index.tsx"),
				se = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				oe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/contexts/Post/index.tsx"),
				ae = n("./src/reddit/controls/Checkbox/index.tsx"),
				ce = n("./src/reddit/controls/MetaData/index.tsx"),
				de = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ue = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				me = n("./src/reddit/helpers/postEvent.ts"),
				pe = n("./src/reddit/hooks/useIsOverlay.ts"),
				fe = n("./src/reddit/hooks/useTheme.ts"),
				be = n("./src/reddit/hooks/useUserContext.ts"),
				he = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ee = n("./src/reddit/icons/fonts/Report/index.tsx"),
				_e = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				xe = n.n(_e),
				ve = n("./src/reddit/components/CompactPost/index.m.less"),
				Oe = n.n(ve);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Se = ({
					isCompact: e,
					...t
				}) => s.a.createElement(A.a, ye({
					className: Object(d.a)(Oe.a.responsiveExpandoButton, {
						[Oe.a.mHideAboveSmallTablets]: !!e,
						[Oe.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				ge = () => Object(a.c)({
					activeModalId: O.a,
					crosspost: g.d,
					flairStyleTemplate: oe.S,
					isActive: g.j,
					isExpanded: g.l,
					layout: oe.O,
					moderatorPermissions: y.j,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: S.a
				}),
				Te = (e, {
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
						const r = n === E.a.upvoted ? Object(_.U)(t) : Object(_.r)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(_.S)(t)),
					onOpenReportsDropdown: t => e(Object(v.h)({
						tooltipId: t
					}))
				});
			class Ce extends s.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: r,
						currentUser: o,
						eventFactory: i,
						flairStyleTemplate: a,
						handleVote: l,
						imageGalleryCurrentItem: E,
						isCheckboxSelected: _ = !1,
						isCommentsPage: x,
						isCommentPermalink: v,
						isExpanded: O,
						isGalleryTileLayoutDefault: y,
						isOverlay: S,
						isProfilePostListing: g,
						inSubredditOrProfile: A = !1,
						layout: K,
						moderatorPermissions: te,
						modModeEnabled: ne,
						onClickPost: oe,
						onFlairChanged: ie,
						onIgnoreReports: ce,
						poll: pe,
						post: fe,
						subredditOrProfile: be,
						userIsOp: _e,
						hideModTools: ve,
						scrollerItemRef: ye,
						showBulkActionCheckbox: Se,
						showEditFlair: ge,
						toggleCheckbox: Te,
						tooltipType: Ce,
						sendEvent: Ie,
						shouldShowGalleryTileOption: we
					} = this.props, Ae = !!fe.media && fe.media.type === b.o.RTJSON, Le = _e && Ae, Ne = Object(z.b)(fe.id, S), Re = Object(ue.a)(te), De = Object(de.a)(te), Me = Object(le.a)(te), Fe = `-mod-actions-menu-${fe.id}`, Ue = `voting-arrows-${fe.id}`, Be = !!o && Object(h.e)(o) === fe.author, Ge = Object(B.c)(fe), Ye = Object(N.a)("View--Reports", fe.id, Ce), We = Object(B.a)(fe), Ve = !(S || x || v), He = fe.media && fe.media.type === b.o.LIVEVIDEO, {
						moderationPrompt: ze
					} = fe, qe = e => Ie(Object(f.f)(fe.id, e)), Ke = Object(c.t)(fe, E), {
						source: Xe
					} = Ke, Ze = s.a.createElement(H.a, {
						className: Object(d.a)(xe.a.compactPostStyles, Oe.a.postContainer, Object(p.a)(this.props), t),
						isOverlay: S,
						style: {
							...Object(p.d)(this.props),
							...Object(p.b)(this.props.flairStyleTemplate)
						},
						post: fe,
						onClick: oe,
						eventFactory: i
					}, s.a.createElement("div", {
						className: Oe.a.compactWrapper
					}, s.a.createElement("div", {
						className: Oe.a.leftRailWrapper
					}, s.a.createElement("div", {
						className: Oe.a.leftRail,
						style: {
							borderColor: Object(q.c)({
								isRemoved: !!fe.bannedBy,
								isReported: Object(m.a)(fe),
								isSponsored: fe.isSponsored,
								theme: this.props.theme
							})
						}
					}, Se && s.a.createElement(ae.a, {
						className: Oe.a.bulkActionCheckbox,
						isCheckboxSelected: _,
						toggleCheckbox: Te
					}), s.a.createElement(re.a, {
						className: Oe.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: a,
						model: fe,
						onVoteClick: l
					}), s.a.createElement(w.a, {
						className: Oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: a,
						model: fe,
						onVoteClick: l,
						upvoteTooltipId: Ue
					}), ze && s.a.createElement(Y.b, {
						rightOf: Ue
					}, "survey" === ze ? s.a.createElement(F.a, {
						post: fe,
						subredditName: be.name,
						isOverlay: !!S
					}) : s.a.createElement(M.a, {
						post: fe,
						subredditName: be.name,
						isOverlay: !!S
					})))), s.a.createElement(W.a, {
						className: Object(d.a)(Oe.a.content, {
							[Oe.a.isEvent]: Object(me.a)(fe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: a
					}, s.a.createElement(P.a, {
						isCompactMode: !0,
						post: fe
					}), s.a.createElement("div", {
						className: Oe.a.compactPostRow
					}, !ve && ke(fe, r, O, !1), !A && !fe.isSponsored && s.a.createElement(R.h, {
						type: fe.belongsTo.type,
						id: fe.belongsTo.id
					}), s.a.createElement("div", {
						className: Oe.a.topLine,
						"data-click-id": "body"
					}, s.a.createElement(J.c, {
						post: fe,
						poll: pe,
						size: J.b.Small,
						titleColor: a && a.postTitleColor,
						isOverlay: !1
					}), Pe(fe, be), s.a.createElement($.d, {
						className: Oe.a.postTopMeta,
						flairStyleTemplate: a,
						post: fe,
						showSub: !!be && !A && !fe.isSponsored,
						subredditOrProfile: be
					}), s.a.createElement(V.a, {
						className: Oe.a.postBadges,
						displayText: be ? be.displayText : null,
						inSubredditOrProfile: A,
						post: fe
					}), s.a.createElement(j.a, {
						thing: fe,
						tooltipType: S ? $.c.Lightbox : void 0
					})), Ve && !He && s.a.createElement("div", null, s.a.createElement(I.a, {
						className: Oe.a.liveDiscussionIcon,
						isMod: Re,
						postId: fe.postId
					})), s.a.createElement("div", {
						className: Oe.a.flatList
					}, s.a.createElement(k.a, {
						className: Oe.a.commentsLink,
						hasModPostPerms: Re,
						isCommentsPage: x,
						isCommentPermalink: v,
						isOverlay: S,
						postId: fe.id,
						modModeEnabled: ne,
						numComments: fe.numComments,
						type: u.g.Compact
					}), s.a.createElement(G.a, {
						className: Oe.a.modToolsFlatlist,
						isOverlay: !1,
						layout: K,
						modModeEnabled: ne,
						post: fe,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Re && s.a.createElement(D.a, {
						dropdownId: Fe,
						onClick: () => qe("post_mod_action_menu")
					}, s.a.createElement(L.b, null), s.a.createElement(X.a, {
						canEditFlair: De && ge,
						hasModPostPerms: Re,
						hasModFullPerms: Me,
						isOverlay: !1,
						isPostAuthor: Be,
						modModeEnabled: ne,
						post: fe,
						tooltipId: Fe
					})), Re && Ge && !ne && s.a.createElement(ee.c, {
						text: `${We}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ye), qe("post_report_menu")
						},
						id: Ye
					}, s.a.createElement(se.a, {
						model: fe,
						onIgnoreReports: () => {
							ce(), qe(fe.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ye
					}), fe.ignoreReports ? s.a.createElement(he.a, null) : s.a.createElement(Ee.a, null)), s.a.createElement(Z.g, {
						currentProfileName: n,
						isCommentsPage: x,
						isOverlay: !1,
						isProfilePostListing: g,
						layout: K,
						permalink: fe.permalink,
						sendEvent: Ie,
						showEditPost: Le,
						showEditFlair: ge,
						dropdownId: `${fe.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(Z.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && ke(fe, r, O, !0))), fe.isSponsored && Xe && Xe.url && s.a.createElement(T.a, {
						className: Oe.a.adLinkWrapper
					}, s.a.createElement(C.a, {
						post: fe,
						adLinkContent: Ke,
						isCompact: !0
					})), ne && Re && Ge && s.a.createElement("div", {
						className: Oe.a.compactPostRow
					}, s.a.createElement(U.a, {
						onIgnoreReports: ce,
						reportable: fe
					})), s.a.createElement(R.d, null))), O && s.a.createElement(je, {
						post: fe,
						scrollerItemRef: ye,
						flairStyleTemplate: a,
						shouldShowGalleryTileOption: we,
						isGalleryTileLayoutDefault: y
					}), e === Ne && s.a.createElement(z.a, {
						flairs: fe.flair,
						subredditId: fe.belongsTo.id,
						modalId: Ne,
						onFlairChanged: ie
					}));
					return s.a.createElement(Q.b, null, Ze)
				}
			}
			const je = e => s.a.createElement(W.a, {
					className: Object(d.a)(e.className, Oe.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? s.a.createElement("div", {
					className: Oe.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, n, r) => s.a.createElement(K.a, {
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
				ke = (e, t, n, r) => s.a.createElement(Se, {
					crosspost: t,
					isCompact: r,
					isExpanded: n,
					post: e,
					useMediaIcons: !0
				}),
				we = e => s.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, s.a.createElement(ne.b, {
					className: Oe.a.subredditIcon,
					subredditOrProfile: e
				})),
				Pe = (e, t) => s.a.createElement("div", {
					className: Oe.a.responsiveMeta
				}, s.a.createElement(ce.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), s.a.createElement(ce.c, null), Object(ce.d)(e.numComments), s.a.createElement(ce.c, null), t && s.a.createElement("a", {
					href: t.url
				}, s.a.createElement(ce.a, null, t.displayText)), e.isSponsored && [s.a.createElement(te.a, {
					key: "label"
				}), s.a.createElement(ce.c, {
					key: "separator"
				})], !e.isSponsored && s.a.createElement(ce.a, null, " Posted by "), s.a.createElement($.b, {
					post: e
				}));
			t.default = Object(ie.b)(s.a.memo((function(e) {
				const t = Object(be.a)(),
					n = Object(r.useMemo)(() => ge(), []),
					i = Object(o.e)(r => n(r, {
						...e,
						...t
					})),
					a = Object(o.d)(),
					c = Te(a, {
						...e,
						...t
					});
				return s.a.createElement(Ce, ye({}, e, t, i, c, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: n
					}) => c.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: n
					}),
					sendEvent: Object(l.b)(),
					isOverlay: Object(pe.a)(),
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
				s = n.n(r),
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
				const r = n && n.eventInfo,
					a = Object(l.a)(n),
					m = r && Object(i.c)(r.eventStart, r.eventEnd);
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, s.a.createElement(f, {
					className: p.a.eventMetaWrapper
				}, s.a.createElement(c.a, {
					post: n
				}), !a && m && s.a.createElement(d.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				m = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = n.n(m),
				f = n("./src/lib/lessComponent.tsx");
			const b = f.a.span("PostEventFutureText", p.a),
				h = f.a.span("PostEventPastText", p.a),
				E = f.a.span("PostEventNowText", p.a),
				_ = f.a.span("Container", p.a),
				x = f.a.wrapped(l.a, "CalendarIcon", p.a),
				v = f.a.wrapped(u.a, "LiveIcon", p.a),
				O = f.a.div("LoadingState", p.a);
			class y extends r.Component {
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
					} = n, m = Object(o.e)(u, r);
					let p, f;
					if (this.state.mounted || m === o.a.Live) p = function(e, t, n) {
						const r = Object(o.e)(e, t),
							s = new Date(e * a.Hb);
						let d;
						return r === o.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (r === o.a.Future ? d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? c(s) : s.toLocaleDateString(void 0, {
							weekday: "long"
						}) : r === o.a.Past && (d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(s)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s)}`)
					}(u, r, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = s.a.createElement(O, {
							className: e
						})
					}
					if (l) f = s.a.createElement(E, null, s.a.createElement(v, null), p);
					else if (m === o.a.Future) f = s.a.createElement(b, null, s.a.createElement(x, null), p);
					else {
						if (m !== o.a.Past) return null;
						f = s.a.createElement(h, null, s.a.createElement(x, null), p)
					}
					return s.a.createElement(_, {
						className: e
					}, f)
				}
			}
			t.a = y
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				E = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				x = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				v = n("./src/reddit/icons/fonts/Gif/index.tsx"),
				O = n("./src/reddit/icons/fonts/Link/index.tsx"),
				y = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				S = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				g = n("./src/reddit/icons/fonts/Text/index.tsx"),
				T = n("./src/reddit/icons/svgs/Gallery/index.tsx"),
				C = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				j = n("./src/reddit/models/Media/index.ts"),
				I = n("./src/reddit/components/ExpandoButton/index.m.less"),
				k = n.n(I);
			const w = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				P = (e, t = !1, n, r) => {
					const s = Object(c.a)(k.a.icon, k.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						className: s
					});
					if (n.pollData) return r ? o.a.createElement(f.a, {
						name: "poll_post",
						isFilled: !0
					}) : o.a.createElement(C.a, {
						className: s
					});
					switch (e) {
						case j.o.GIFVIDEO:
							return o.a.createElement(v.a, {
								className: s
							});
						case j.o.IMAGE:
							return o.a.createElement(S.a, {
								className: s
							});
						case j.o.TEXT:
						case j.o.RTJSON:
							return o.a.createElement(g.a, {
								className: s
							});
						case j.o.VIDEO:
							return o.a.createElement(x.a, {
								className: s
							});
						case j.o.GALLERY:
							return r ? o.a.createElement(f.a, {
								name: "media_gallery",
								isFilled: !0
							}) : o.a.createElement(T.a, {
								className: s
							});
						case j.o.EMBED:
						default:
							return o.a.createElement(O.a, {
								className: s
							})
					}
				};
			t.a = w(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isExpanded: i,
					post: l,
					toggle: f,
					useMediaIcons: b
				} = e, x = Object(p.a)(), v = n || l, O = s && !!n;
				return v.media && !(("rtjson" === v.media.type || "text" === v.media.type) && !Object(m.a)(v)) || !!l.pollData ? o.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, k.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: f
				}, i ? o.a.createElement(h.a, {
					className: k.a.icon,
					isFilled: !0
				}) : b ? o.a.createElement(o.a.Fragment, null, P(v.media && v.media.type, O, l, x), o.a.createElement(E.a, {
					className: Object(c.a)(k.a.icon, k.a.showOnHover)
				})) : o.a.createElement(E.a, {
					className: k.a.icon,
					isFilled: x
				})) : v.source && v.source.url ? o.a.createElement(u.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, k.a.outer),
					"data-click-id": "expando_open",
					href: v.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, o.a.createElement(y.a, {
					className: Object(c.a)(k.a.icon, k.a.outboundLinkIcon),
					isFilled: x
				})) : o.a.createElement(a.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, k.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(v.permalink),
					rel: "nofollow"
				}, o.a.createElement(_.a, {
					className: k.a.icon,
					isFilled: x
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), m = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(r.a)({
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
				fallback: o.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				m = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: b
				} = e, [h, E] = Object(s.useState)(!0), _ = Object(f.b)(n.id, b), x = Object(i.d)(), v = Object(p.a)(), O = Object(f.a)(n, b), y = (e, r) => v(Object(m.a)(t, n.id, e, r));
				Object(s.useEffect)(() => {
					O && y("modal", "show")
				}, [O]);
				if (!O || !h) return null;
				const S = r.fbt._("Help r/{subredditName} mods", [r.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return o.a.createElement(l.a, {
					id: _,
					title: S,
					onClose: () => {
						E(!1), y("close", "click"), x(Object(c.A)()), x(Object(c.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						x(Object(c.A)())
					}
				}, o.a.createElement("p", null, r.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), r.fbt._param("=community", o.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, r.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), o.a.createElement(u.a, {
					onClick: () => (E(!1), y("report", "click"), void x(Object(d.c)(n.id)))
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
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				u = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [E, _] = Object(o.useState)(r.Survey), x = Object(b.b)(n.id, h), v = Object(a.d)(), O = Object(f.a)(), y = Object(b.a)(n, h), S = (e, r) => O(Object(p.b)(t, n.id, e, r));
				Object(o.useEffect)(() => {
					y && S("modal", "show")
				}, [y]);
				const g = e => {
					_(r.Closed), S("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), v(Object(l.c)(n.id, void 0, e))
				};
				if (!y) return null;
				let T = null;
				const C = {
					id: x,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						_(r.Closed), S("close", "click"), v(Object(d.A)())
					},
					onClickOutside: () => {
						v(Object(d.A)())
					}
				};
				switch (E) {
					case r.Survey:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(m.a, {
							onClick: () => {
								_(r.OffTopic), S("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(m.a, {
							onClick: () => {
								_(r.DontLike), S("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(m.a, {
							onClick: () => {
								_(r.BreaksRules), S("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case r.OffTopic:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case r.DontLike:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case r.BreaksRules:
						T = i.a.createElement(u.a, C, i.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(m.a, {
							onClick: () => g("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(m.a, {
							onClick: () => g("community")
						}, s.fbt._("It breaks community rules", null, {
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
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(o);

			function a(e) {
				return s.a.createElement("button", {
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
				s = n.n(r),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: r,
					title: o,
					children: c
				} = e;
				return Object(a.a)(t, r), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: d.a.header
				}, s.a.createElement("span", {
					className: d.a.title
				}, o), s.a.createElement("button", {
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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
					theme: m,
					...p
				} = e;
				return s.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(r, e),
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = s.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						o = Object(r.useCallback)(t => {
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
					return Object(d.a)(t, o, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				_ = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				x = n("./src/reddit/components/PostContainer/index.m.less"),
				v = n.n(x);
			const O = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(E.a)((e, {
						post: t
					}) => Object(b.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(b.i)(e, {
						postId: t.id
					})
				})),
				y = e => {
					const t = Object(_.d)(e.target, e.currentTarget),
						n = Object(_.b)(e.target, e.currentTarget, _.a.buttons);
					return "subreddit" !== t && n
				};
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: r,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						onPostContentClick: p,
						sendEvent: b,
						style: E,
						ref: _
					} = this.props, x = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: E,
						ref: _,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, l, t, o))(n), p && y(n) && p(n, l)), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(v.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), O = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || O ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, x) : l.media && Object(f.E)(l.media) ? s.a.createElement(u, {
						postId: l.id
					}, x) : x
				}
			}
			t.a = O(Object(_.c)(Object(m.c)(S)))
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
								isFollowed: r
							},
							sendEvent: s
						} = this.props, o = !!r;
						s(e ? Object(u.o)({
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
					} = this.props, s = this.state.isHovered, i = n.isFollowed;
					let a = i ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && s && (a = r.fbt._("Unfollow", null, {
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
				onFollow: () => e(Object(d.v)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(i.a, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => o[s({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: n,
						disabled: r,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const r = !(!t && !n);
						let s = "";
						return s = e ? r ? l.a.mDisabledRedditStyle : l.a.mDisabled : r ? l.a.mActiveRedditStyle : l.a.mActive
					})(r, i, a);
					return s.a.createElement(e, u({
						className: Object(o.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				p = m(c.a),
				f = m(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? p : i.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(o.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
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
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = i.a.span("metaText", d.a),
				u = e => o.a.createElement(l, e, " · "),
				m = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
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
					return o.a.createElement(l, s, d)
				},
				p = e => o.a.createElement(l, null, r.fbt._({
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, r) => {
					let o = Object(s.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > n && o.prev && (i = o.prev, (o = Object(s.n)(r, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= n)););
					return i.id
				},
				u = (e, t, n) => {
					const {
						commentLists: r,
						comments: s
					} = e, {
						head: a
					} = r[t];
					if (a) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.Fd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} = e;
				return t && n && r && s ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
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

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
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
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.E.NO_STRIPE_SUBSCRIPTION:
							case r.E.USER_DOESNT_EXIST:
							case r.E.USER_REQUIRED_ERROR:
							case r.E.VALIDATION_ERROR:
								return e;
							case r.E.NO_USER:
							case r.E.NO_TEXT:
							case r.E.NO_URL:
								return r.E.VALIDATION_ERROR;
							case r.E.CREDIT_CARD_FAILURE:
							case r.E.CREDIT_CARD_FAILURE_GENERIC:
								return r.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.E.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
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
				return E
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				f = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				E = e => {
					const t = Object(o.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, n, s) => o => ({
					source: "report_prompt",
					noun: n,
					action: s,
					subreddit: r.subredditByName(o, e),
					post: r.post(o, t)
				}),
				o = (e, t, n, s) => o => ({
					source: "report_survey",
					noun: n,
					action: s,
					subreddit: r.subredditByName(o, e),
					post: r.post(o, t)
				})
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/InsideOverlay.tsx");

			function o() {
				return Object(r.useContext)(s.a)
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return s.a.createElement("i", {
					className: `${Object(o.b)(t?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return s.a.createElement("i", {
					className: `${Object(o.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(o.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return s.a.createElement("i", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, s.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
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
				return E
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "p", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
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
				m = e => e.__typename === s.a.Subreddit;
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
			const E = e => f[h[e]],
				_ = e => h[f[e]],
				x = e => b[f[e]],
				v = e => f[b[e]],
				O = e => h[b[e]];
			var y;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const S = e => {
					switch (e) {
						case y.Hourly:
						case y.Daily:
						case y.Weekly:
						case y.Monthly:
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
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
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
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
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
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
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
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
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
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
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
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (e = o, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				a = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				f = Object(r.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				b = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(b),
				E = n("./node_modules/lodash/values.js"),
				_ = n.n(E),
				x = n("./src/reddit/actions/comment/constants.ts"),
				v = n("./src/reddit/actions/comment/websocket/constants.ts");
			const O = {};

			function y(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var S = (e = O, t) => {
					switch (t.type) {
						case a.f:
						case x.u:
						case a.b: {
							const {
								comments: n,
								key: r
							} = t.payload, s = e[r] ? e[r] : [], o = function(e, t) {
								return _()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), i = y([...s, ...o]);
							return {
								...e,
								[r]: [...i]
							}
						}
						case v.b:
						case v.c:
						case v.d:
						case x.G:
						case x.F: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: i,
								isChatSort: a
							} = t.payload;
							return !1 === a ? e : {
								...e,
								[i]: [...y([...e[i] ? e[i] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				g = n("./node_modules/lodash/mapValues.js"),
				T = n.n(g),
				C = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/models/Comment/index.ts");
			const I = {};

			function k(e) {
				const t = e;
				return T()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var w = (e = I, t) => {
				switch (t.type) {
					case x.u: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: o,
							moreCommentsItem: i,
							moreComments: a
						} = t.payload, c = r[i.postId], d = e[o], l = {}, u = d[i.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(C.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								}),
								t = Object(C.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...k(n),
								...k(s),
								...k(a),
								...l
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...k(n),
								...k(r),
								...k(o)
							}
						}
					}
					case v.b:
						const {
							comment: n, commentsPageKey: r, depth: s, headCommentId: o, originId: i, isChatSort: c
						} = t.payload, d = e[r], l = {};
						let u = null;
						if (c) return o && (l[o] = {
							...d[o],
							prev: Object(j.g)(n.id)
						}, u = Object(j.g)(o)), {
							...e,
							[r]: {
								...e[r],
								...l,
								[n.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = n.parentId;
							if (i && o) {
								const n = "moreComments-" + i;
								if (d[o] && !d[n]) {
									const i = d[o].next;
									return i && (l[i.id] = {
										...d[i.id],
										prev: Object(j.h)(n)
									}, u = i), l[o] = {
										...d[o],
										next: Object(j.h)(n)
									}, t = Object(j.g)(o), {
										...e,
										[r]: {
											...e[r],
											...l,
											[n]: {
												depth: s || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case x.G: {
							const {
								comment: n,
								commentsPageKey: r,
								headCommentId: s
							} = t.payload, o = e[r], i = {};
							let a = null;
							return s && (i[s] = {
								...o[s],
								prev: Object(j.g)(n.id)
							}, a = Object(j.g)(s)), {
								...e,
								[r]: {
									...e[r],
									...i,
									[n.id]: {
										depth: 0,
										next: a,
										prev: null
									}
								}
							}
						}
						case x.F: {
							const {
								comment: n,
								commentsPageKey: r,
								parentCommentId: s,
								depth: o
							} = t.payload, i = e[r], a = {};
							let c = null;
							if (!i[s]) return e;
							const d = i[s].next;
							return d && (a[d.id] = {
								...i[d.id],
								prev: Object(j.g)(n.id)
							}, c = d), a[s] = {
								...i[s],
								next: Object(j.g)(n.id)
							}, {
								...e,
								[r]: {
									...e[r],
									...a,
									[n.id]: {
										depth: o,
										next: c,
										prev: Object(j.g)(s)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const P = {};
			var A = (e = P, t) => {
				switch (t.type) {
					case v.b:
					case v.c:
					case x.G: {
						const {
							comment: n,
							commentsPageKey: r,
							isChatSort: s
						} = t.payload;
						return !1 === s ? e : {
							...e,
							[r]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var N = (e = L, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case x.G: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: f,
				keyToChatCommentLinks: S,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: A,
				keyToPostId: N,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "G", (function() {
				return T
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "t", (function() {
				return R
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "I", (function() {
				return M
			})), n.d(t, "s", (function() {
				return F
			})), n.d(t, "B", (function() {
				return U
			})), n.d(t, "C", (function() {
				return B
			})), n.d(t, "E", (function() {
				return G
			})), n.d(t, "r", (function() {
				return Y
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "J", (function() {
				return H
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "F", (function() {
				return K
			})), n.d(t, "A", (function() {
				return X
			})), n.d(t, "H", (function() {
				return Z
			})), n.d(t, "p", (function() {
				return J
			})), n.d(t, "K", (function() {
				return $
			})), n.d(t, "D", (function() {
				return Q
			})), n.d(t, "y", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeCommentPermalink/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/lib/initializeClient/installReducer.ts"),
				b = n("./src/reddit/reducers/features/comments/index.ts"),
				h = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(f.a)({
				features: {
					comments: b.a
				},
				pages: {
					comments: h.a
				}
			});
			const E = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				_ = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				v = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				O = (e, t) => {
					const n = v(e, t);
					if (n) return Object(p.a)(e, {
						commentId: n
					})
				},
				y = [],
				S = Object(a.a)((e, t) => {
					const n = O(e, t),
						r = n && n.id;
					if (!r) return y;
					const {
						commentsPageKey: s
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[s], i = [];
					let a = {
						id: r,
						type: c.a.Comment
					};
					do {
						i.push(a), a = o[a.id].next
					} while (a);
					return i
				}),
				g = (e, t) => v(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				T = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				C = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				j = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				I = (e, t) => {
					const n = t.commentsPageKey ? C(e, t) : null;
					return n ? n.depth : null
				},
				k = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: r
					} = t;
					switch (r) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				w = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				P = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				A = e => e.moreComments.models,
				L = e => e.features.comments.models,
				N = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
						commentId: t
					});
					return n ? Object(i.a)(Object(l.C)(e, n), t) : ""
				},
				R = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				M = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				F = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						s = Object(p.a)(e, {
							commentId: r
						}),
						o = s && I(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				B = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				G = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				Y = (e, {
					id: t
				}) => e.continueThreads.models[t],
				W = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				V = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				H = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				z = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				q = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				K = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				X = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				J = e => e.features.comments.visitHighlightFilter,
				$ = (e, t) => {
					const n = Object(p.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				Q = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const n = Object(p.a)(e, {
							commentId: t
						}),
						r = n && n.authorId || "";
					return Object(m.R)(e, r)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.05f097cc118e9cf0b5ea.js.map