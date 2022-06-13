// https://www.redditstatic.com/desktop2x/vendors~reddit-components-MediumPost.b5e60fd2552c800c006f.js
// Retrieved at 6/13/2022, 1:00:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-dom/index.js"),
				s = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, n) {
					return a(e[n], t[n])
				})) : e !== t
			}
			var c = new Map;

			function u(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, n = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!s.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							n = void 0 === r ? "0px" : r,
							o = t[1],
							i = void 0 === o ? n : o,
							a = t[2],
							c = void 0 === a ? n : a,
							u = t[3];
						return n + " " + i + " " + c + " " + (void 0 === u ? i : u)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = c.keys(); t = i.next().value;) {
					if (!(r !== t.root || n !== t.rootMargin || a(o, t.thresholds))) return t
				}
				return null
			}

			function d(e, t) {
				var r = c.get(e);
				if (r)
					for (var n, o = r.values(); n = o.next().value;)
						if (n.target === t.target) return n;
				return null
			}

			function f(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n = d(t, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function p(e) {
				return u(e) || new IntersectionObserver(f, e)
			}
			var l = r("./node_modules/invariant/browser.js"),
				m = r.n(l),
				h = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return m()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function b(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var y = ["root", "rootMargin", "threshold"],
				w = ["root", "rootMargin", "threshold", "disabled"],
				x = Object.prototype,
				O = x.hasOwnProperty,
				j = x.toString,
				_ = function(e) {
					return y.reduce((function(t, r) {
						if (O.call(e, r)) {
							var n = "root" === r && "[object String]" === j.call(e[r]);
							t[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, r;

					function n() {
						for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
						return g(b(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(b(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), g(b(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(_(t.props)), t.target = t.targetNode, e = b(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(b(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var r = c.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(b(t), e)
						})), g(b(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var s = n.prototype;
					return s.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = w.some((function(r) {
							return a(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, s.componentDidUpdate = function(e, t, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, s.componentDidMount = function() {
						this.observe()
					}, s.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, s.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			g(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, i, s) {
					if (s !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
					checkPropTypes: i,
					resetWarningCache: o
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function n(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var o, i = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						s = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						u = /CrOS/.test(t),
						d = /silk/i.test(t),
						f = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						l = /(web|hpw)os/i.test(t),
						m = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
						v = !i && !d && /macintosh/i.test(t),
						b = !s && !f && !p && !l && /linux/i.test(t),
						g = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = r(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !w && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: y || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: y || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : m ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (o.msedge = e, o.version = g) : (o.msie = e, o.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : f ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : d ? o = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : l ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : s ? o = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, y && (o.version = y)) : i ? (o = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, y && (o.version = y)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || r(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !s && !o.silk ? !o.windowsphone && i ? (o[i] = e, o.ios = e, o.osname = "iOS") : v ? (o.mac = e, o.osname = "macOS") : O ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : b && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? j = (j = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? j = r(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = r(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = r(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var _ = !o.windows && j.split(".")[0];
					return w || c || "ipad" == i || s && (3 == _ || _ >= 4 && !x) || o.silk ? o.tablet = e : (x || "iphone" == i || "ipod" == i || s || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var r, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) n.push(t(e[r]));
					return n
				}

				function i(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), r = o(e, (function(e) {
							var r = t - n(e);
							return o((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function s(e, n, o) {
					var s = r;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (s = t(o));
					var a = "" + s.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && s[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return i([a, e[c]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = s, r.compareVersions = i, r.check = function(e, t, r) {
					return !s(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return n(e, (function(e, n, o) {
					return r = !!t(e, n, o)
				})), r
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, o) {
				return o(e, (function(e, o, i) {
					r = n ? (n = !1, e) : t(r, e, o, i)
				})), r
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				o = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = o(r)) == r ? r : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, r)
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayEvery.js"),
				o = r("./node_modules/lodash/_baseEvery.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/isArray.js"),
				a = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var c = s(e) ? n : o;
				return r && a(e, t, r) && (t = void 0), c(e, i(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				o = r("./node_modules/lodash/_baseEach.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/_baseReduce.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var c = a(e) ? n : s,
					u = arguments.length < 3;
				return c(e, i(t, 4), r, u, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return le
			}));
			var n = r("./node_modules/react/index.js");

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

			function i(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function s(e) {
				var t = i(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof i(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof i(e).HTMLElement || e instanceof HTMLElement
			}

			function u(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function d(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function f(e) {
				return o(d(e)).left + s(e).scrollLeft
			}

			function p(e) {
				return i(e).getComputedStyle(e)
			}

			function l(e) {
				var t = p(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function m(e, t, r) {
				void 0 === r && (r = !1);
				var n, a, p = d(t),
					m = o(e),
					h = c(t),
					v = {
						scrollLeft: 0,
						scrollTop: 0
					},
					b = {
						x: 0,
						y: 0
					};
				return (h || !h && !r) && (("body" !== u(t) || l(p)) && (v = (n = t) !== i(n) && c(n) ? {
					scrollLeft: (a = n).scrollLeft,
					scrollTop: a.scrollTop
				} : s(n)), c(t) ? ((b = o(t)).x += t.clientLeft, b.y += t.clientTop) : p && (b.x = f(p))), {
					x: m.left + v.scrollLeft - b.x,
					y: m.top + v.scrollTop - b.y,
					width: m.width,
					height: m.height
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

			function v(e) {
				return "html" === u(e) ? e : e.assignedSlot || e.parentNode || e.host || d(e)
			}

			function b(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(u(t)) >= 0 ? t.ownerDocument.body : c(t) && l(t) ? t : e(v(t))
					}(e),
					n = "body" === u(r),
					o = i(r),
					s = n ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r,
					a = t.concat(s);
				return n ? a : a.concat(b(v(s)))
			}

			function g(e) {
				return ["table", "td", "th"].indexOf(u(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function w(e) {
				for (var t = i(e), r = y(e); r && g(r) && "static" === p(r).position;) r = y(r);
				return r && "body" === u(r) && "static" === p(r).position ? t : r || function(e) {
					for (var t = v(e); c(t) && ["html", "body"].indexOf(u(t)) < 0;) {
						var r = p(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var x = "top",
				O = "bottom",
				j = "right",
				_ = "left",
				k = "auto",
				E = [x, O, j, _],
				S = "start",
				M = "end",
				A = "clippingParents",
				P = "viewport",
				T = "popper",
				D = "reference",
				B = E.reduce((function(e, t) {
					return e.concat([t + "-" + S, t + "-" + M])
				}), []),
				N = [].concat(E, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + S, t + "-" + M])
				}), []),
				C = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function R(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(o) {
						r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var L = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function W() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					i = void 0 === o ? L : o;
				return function(e, t, r) {
					void 0 === r && (r = i);
					var o, s, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, L), i),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						u = [],
						d = !1,
						f = {
							state: c,
							setOptions: function(r) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, i), c.options), r), c.scrollParents = {
									reference: a(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
									popper: b(t)
								};
								var o = function(e) {
									var t = R(e);
									return C.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var i = o({
											state: c,
											name: t,
											instance: f,
											options: n
										});
										u.push(i || function() {})
									}
								})), f.update()
							},
							forceUpdate: function() {
								if (!d) {
									var e = c.elements,
										t = e.reference,
										r = e.popper;
									if (W(t, r)) {
										c.rects = {
											reference: m(t, w(r), "fixed" === c.options.strategy),
											popper: h(r)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[n],
													i = o.fn,
													s = o.options,
													a = void 0 === s ? {} : s,
													u = o.name;
												"function" == typeof i && (c = i({
													state: c,
													options: a,
													name: u,
													instance: f
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									f.forceUpdate(), e(c)
								}))
							}, function() {
								return s || (s = new Promise((function(e) {
									Promise.resolve().then((function() {
										s = void 0, e(o())
									}))
								}))), s
							}),
							destroy: function() {
								p(), d = !0
							}
						};
					if (!W(e, t)) return f;

					function p() {
						u.forEach((function(e) {
							return e()
						})), u = []
					}
					return f.setOptions(r).then((function(e) {
						!d && r.onFirstUpdate && r.onFirstUpdate(e)
					})), f
				}
			}
			var z = {
				passive: !0
			};

			function I(e) {
				return e.split("-")[0]
			}

			function q(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function V(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					i = o ? I(o) : null,
					s = o ? q(o) : null,
					a = r.x + r.width / 2 - n.width / 2,
					c = r.y + r.height / 2 - n.height / 2;
				switch (i) {
					case x:
						t = {
							x: a,
							y: r.y - n.height
						};
						break;
					case O:
						t = {
							x: a,
							y: r.y + r.height
						};
						break;
					case j:
						t = {
							x: r.x + r.width,
							y: c
						};
						break;
					case _:
						t = {
							x: r.x - n.width,
							y: c
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var u = i ? H(i) : null;
				if (null != u) {
					var d = "y" === u ? "height" : "width";
					switch (s) {
						case S:
							t[u] = Math.floor(t[u]) - Math.floor(r[d] / 2 - n[d] / 2);
							break;
						case M:
							t[u] = Math.floor(t[u]) + Math.ceil(r[d] / 2 - n[d] / 2)
					}
				}
				return t
			}
			var F = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function X(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					s = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					u = e.adaptive,
					f = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(s),
					p = f.x,
					l = f.y,
					m = s.hasOwnProperty("x"),
					h = s.hasOwnProperty("y"),
					v = _,
					b = x,
					g = window;
				if (u) {
					var y = w(r);
					y === i(r) && (y = d(r)), o === x && (b = O, l -= y.clientHeight - n.height, l *= c ? 1 : -1), o === _ && (v = j, p -= y.clientWidth - n.width, p *= c ? 1 : -1)
				}
				var k, E = Object.assign({
					position: a
				}, u && F);
				return c ? Object.assign(Object.assign({}, E), {}, ((k = {})[b] = h ? "0" : "", k[v] = m ? "0" : "", k.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + l + "px)" : "translate3d(" + p + "px, " + l + "px, 0)", k)) : Object.assign(Object.assign({}, E), {}, ((t = {})[b] = h ? l + "px" : "", t[v] = m ? p + "px" : "", t.transform = "", t))
			}
			var Y = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return Y[e]
				}))
			}
			var $ = {
				start: "end",
				end: "start"
			};

			function G(e) {
				return e.replace(/start|end/g, (function(e) {
					return $[e]
				}))
			}

			function J(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
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

			function Z(e, t) {
				return t === P ? Q(function(e) {
					var t = i(e),
						r = d(e),
						n = t.visualViewport,
						o = r.clientWidth,
						s = r.clientHeight,
						a = 0,
						c = 0;
					return n && (o = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = n.offsetLeft, c = n.offsetTop)), {
						width: o,
						height: s,
						x: a + f(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = d(e),
						r = s(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						i = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						a = -r.scrollLeft + f(e),
						c = -r.scrollTop;
					return "rtl" === p(n || t).direction && (a += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: a,
						y: c
					}
				}(d(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = b(e),
							r = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? w(e) : e;
						return a(r) ? t.filter((function(e) {
							return a(e) && J(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					i = o[0],
					s = o.reduce((function(t, r) {
						var n = Z(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Z(e, i));
				return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					i = void 0 === n ? e.placement : n,
					s = r.boundary,
					c = void 0 === s ? A : s,
					u = r.rootBoundary,
					f = void 0 === u ? P : u,
					p = r.elementContext,
					l = void 0 === p ? T : p,
					m = r.altBoundary,
					h = void 0 !== m && m,
					v = r.padding,
					b = void 0 === v ? 0 : v,
					g = te("number" != typeof b ? b : re(b, E)),
					y = l === T ? D : T,
					w = e.elements.reference,
					_ = e.rects.popper,
					k = e.elements[h ? y : l],
					S = ee(a(k) ? k : k.contextElement || d(e.elements.popper), c, f),
					M = o(w),
					B = V({
						reference: M,
						element: _,
						strategy: "absolute",
						placement: i
					}),
					N = Q(Object.assign(Object.assign({}, _), B)),
					C = l === T ? N : M,
					R = {
						top: S.top - C.top + g.top,
						bottom: C.bottom - S.bottom + g.bottom,
						left: S.left - C.left + g.left,
						right: C.right - S.right + g.right
					},
					L = e.modifiersData.offset;
				if (l === T && L) {
					var W = L[i];
					Object.keys(R).forEach((function(e) {
						var t = [j, O].indexOf(e) >= 0 ? 1 : -1,
							r = [x, O].indexOf(e) >= 0 ? "y" : "x";
						R[e] += W[r] * t
					}))
				}
				return R
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function ie(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function se(e) {
				return [x, j, O, _].some((function(t) {
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
								r = e.instance,
								n = e.options,
								o = n.scroll,
								s = void 0 === o || o,
								a = n.resize,
								c = void 0 === a || a,
								u = i(t.elements.popper),
								d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return s && d.forEach((function(e) {
									e.addEventListener("scroll", r.update, z)
								})), c && u.addEventListener("resize", r.update, z),
								function() {
									s && d.forEach((function(e) {
										e.removeEventListener("scroll", r.update, z)
									})), c && u.removeEventListener("resize", r.update, z)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = V({
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
								r = e.options,
								n = r.gpuAcceleration,
								o = void 0 === n || n,
								i = r.adaptive,
								s = void 0 === i || i,
								a = {
									placement: I(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), X(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: s
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
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && u(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
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
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											o = t.attributes[e] || {},
											i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(n) && u(n) && (Object.assign(n.style, i), Object.keys(o).forEach((function(e) {
											n.removeAttribute(e)
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
								r = e.options,
								n = e.name,
								o = r.offset,
								i = void 0 === o ? [0, 0] : o,
								s = N.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = I(e),
											o = [_, x].indexOf(n) >= 0 ? -1 : 1,
											i = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											s = i[0],
											a = i[1];
										return s = s || 0, a = (a || 0) * o, [_, j].indexOf(n) >= 0 ? {
											x: a,
											y: s
										} : {
											x: s,
											y: a
										}
									}(r, t.rects, i), e
								}), {}),
								a = s[t.placement],
								c = a.x,
								u = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = r.mainAxis, i = void 0 === o || o, s = r.altAxis, a = void 0 === s || s, c = r.fallbackPlacements, u = r.padding, d = r.boundary, f = r.rootBoundary, p = r.altBoundary, l = r.flipVariations, m = void 0 === l || l, h = r.allowedAutoPlacements, v = t.options.placement, b = I(v), g = c || (b === v || !m ? [K(v)] : function(e) {
										if (I(e) === k) return [];
										var t = K(e);
										return [G(e), t, G(t)]
									}(v)), y = [v].concat(g).reduce((function(e, r) {
										return e.concat(I(r) === k ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												i = r.rootBoundary,
												s = r.padding,
												a = r.flipVariations,
												c = r.allowedAutoPlacements,
												u = void 0 === c ? N : c,
												d = q(n),
												f = (d ? a ? B : B.filter((function(e) {
													return q(e) === d
												})) : E).filter((function(e) {
													return u.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: i,
														padding: s
													})[I(r)], t
												}), {});
											return Object.keys(f).sort((function(e, t) {
												return f[e] - f[t]
											}))
										}(t, {
											placement: r,
											boundary: d,
											rootBoundary: f,
											padding: u,
											flipVariations: m,
											allowedAutoPlacements: h
										}) : r)
									}), []), w = t.rects.reference, M = t.rects.popper, A = new Map, P = !0, T = y[0], D = 0; D < y.length; D++) {
									var C = y[D],
										R = I(C),
										L = q(C) === S,
										W = [x, O].indexOf(R) >= 0,
										U = W ? "width" : "height",
										z = ne(t, {
											placement: C,
											boundary: d,
											rootBoundary: f,
											altBoundary: p,
											padding: u
										}),
										H = W ? L ? j : _ : L ? O : x;
									w[U] > M[U] && (H = K(H));
									var V = K(H),
										F = [];
									if (i && F.push(z[R] <= 0), a && F.push(z[H] <= 0, z[V] <= 0), F.every((function(e) {
											return e
										}))) {
										T = C, P = !1;
										break
									}
									A.set(C, F)
								}
								if (P)
									for (var X = function(e) {
											var t = y.find((function(t) {
												var r = A.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, Y = m ? 3 : 1; Y > 0; Y--) {
										if ("break" === X(Y)) break
									}
								t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0)
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
								r = e.options,
								n = e.name,
								o = r.mainAxis,
								i = void 0 === o || o,
								s = r.altAxis,
								a = void 0 !== s && s,
								c = r.boundary,
								u = r.rootBoundary,
								d = r.altBoundary,
								f = r.padding,
								p = r.tether,
								l = void 0 === p || p,
								m = r.tetherOffset,
								v = void 0 === m ? 0 : m,
								b = ne(t, {
									boundary: c,
									rootBoundary: u,
									padding: f,
									altBoundary: d
								}),
								g = I(t.placement),
								y = q(t.placement),
								k = !y,
								E = H(g),
								M = "x" === E ? "y" : "x",
								A = t.modifiersData.popperOffsets,
								P = t.rects.reference,
								T = t.rects.popper,
								D = "function" == typeof v ? v(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : v,
								B = {
									x: 0,
									y: 0
								};
							if (A) {
								if (i) {
									var N = "y" === E ? x : _,
										C = "y" === E ? O : j,
										R = "y" === E ? "height" : "width",
										L = A[E],
										W = A[E] + b[N],
										U = A[E] - b[C],
										z = l ? -T[R] / 2 : 0,
										V = y === S ? P[R] : T[R],
										F = y === S ? -T[R] : -P[R],
										X = t.elements.arrow,
										Y = l && X ? h(X) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										$ = K[N],
										G = K[C],
										J = oe(0, P[R], Y[R]),
										Q = k ? P[R] / 2 - z - J - $ - D : V - J - $ - D,
										Z = k ? -P[R] / 2 + z + J + G + D : F + J + G + D,
										ee = t.elements.arrow && w(t.elements.arrow),
										te = ee ? "y" === E ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][E] : 0,
										ie = A[E] + Q - re - te,
										se = A[E] + Z - re,
										ae = oe(l ? Math.min(W, ie) : W, L, l ? Math.max(U, se) : U);
									A[E] = ae, B[E] = ae - L
								}
								if (a) {
									var ce = "x" === E ? x : _,
										ue = "x" === E ? O : j,
										de = A[M],
										fe = oe(de + b[ce], de, de - b[ue]);
									A[M] = fe, B[M] = fe - de
								}
								t.modifiersData[n] = B
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								o = r.elements.arrow,
								i = r.modifiersData.popperOffsets,
								s = I(r.placement),
								a = H(s),
								c = [_, j].indexOf(s) >= 0 ? "height" : "width";
							if (o && i) {
								var u = r.modifiersData[n + "#persistent"].padding,
									d = h(o),
									f = "y" === a ? x : _,
									p = "y" === a ? O : j,
									l = r.rects.reference[c] + r.rects.reference[a] - i[a] - r.rects.popper[c],
									m = i[a] - r.rects.reference[a],
									v = w(o),
									b = v ? "y" === a ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
									g = l / 2 - m / 2,
									y = u[f],
									k = b - d[c] - u[p],
									E = b / 2 - d[c] / 2 + g,
									S = oe(y, E, k),
									M = a;
								r.modifiersData[n] = ((t = {})[M] = S, t.centerOffset = S - E, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								s = r.padding,
								a = void 0 === s ? 0 : s;
							null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && J(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof a ? a : re(a, E))
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
								r = e.name,
								n = t.rects.reference,
								o = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								s = ne(t, {
									elementContext: "reference"
								}),
								a = ne(t, {
									altBoundary: !0
								}),
								c = ie(s, n),
								u = ie(a, o, i),
								d = se(c),
								f = se(u);
							t.modifiersData[r] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: u,
								isReferenceHidden: d,
								hasPopperEscaped: f
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": d,
								"data-popper-escaped": f
							})
						}
					}]
				}),
				ce = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ue = r.n(ce),
				de = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				fe = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				pe = [],
				le = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						i = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || pe
						},
						s = n.useState({
							styles: {
								popper: {
									position: i.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = s[0],
						c = s[1],
						u = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									c({
										styles: de(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: de(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						d = n.useMemo((function() {
							var e = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [u, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ue()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u]),
						f = n.useRef();
					return fe((function() {
						f.current && f.current.setOptions(d)
					}), [d]), fe((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || ae)(e, t, d);
							return f.current = n,
								function() {
									n.destroy(), f.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: f.current ? f.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: f.current ? f.current.update : null,
						forceUpdate: f.current ? f.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, s) {
						if (t === s) return !0;
						if (t && s && "object" == typeof t && "object" == typeof s) {
							if (t.constructor !== s.constructor) return !1;
							var a, c, u, d;
							if (Array.isArray(t)) {
								if ((a = t.length) != s.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], s[c])) return !1;
								return !0
							}
							if (n && t instanceof Map && s instanceof Map) {
								if (t.size !== s.size) return !1;
								for (d = t.entries(); !(c = d.next()).done;)
									if (!s.has(c.value[0])) return !1;
								for (d = t.entries(); !(c = d.next()).done;)
									if (!e(c.value[1], s.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && s instanceof Set) {
								if (t.size !== s.size) return !1;
								for (d = t.entries(); !(c = d.next()).done;)
									if (!s.has(c.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(s)) {
								if ((a = t.length) != s.length) return !1;
								for (c = a; 0 != c--;)
									if (t[c] !== s[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === s.source && t.flags === s.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === s.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === s.toString();
							if ((a = (u = Object.keys(t)).length) !== Object.keys(s).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(s, u[c])) return !1;
							if (r && t instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== u[c] && "__v" !== u[c] && "__o" !== u[c] || !t.$$typeof) && !e(t[u[c]], s[u[c]])) return !1;
							return !0
						}
						return t != t && s != s
					}(e, t)
				} catch (s) {
					if ((s.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw s
				}
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-MediumPost.b5e60fd2552c800c006f.js.map