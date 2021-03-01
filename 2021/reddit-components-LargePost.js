// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.c165289993e8e93a6d52.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-dom/index.js"),
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
							o = t[1],
							r = void 0 === o ? s : o,
							a = t[2],
							c = void 0 === a ? s : a,
							d = t[3];
						return s + " " + r + " " + c + " " + (void 0 === d ? r : d)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], r = c.keys(); t = r.next().value;) {
					if (!(n !== t.root || s !== t.rootMargin || a(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var s, o = n.values(); s = o.next().value;)
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
				O = ["root", "rootMargin", "threshold", "disabled"],
				y = Object.prototype,
				j = y.hasOwnProperty,
				_ = y.toString,
				w = function(e) {
					return g.reduce((function(t, n) {
						if (j.call(e, n)) {
							var s = "root" === n && "[object String]" === _.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o];
						return x(v(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(v(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(r.findDOMNode)(e)
						})), x(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(w(t.props)), t.target = t.targetNode, e = v(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
						var n = O.some((function(n) {
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
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(o.a.Component);
			x(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function r() {}
			r.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, r, i) {
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
					checkPropTypes: r,
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
					var o, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						h = !r && !l && /macintosh/i.test(t),
						v = !i && !u && !p && !m && /linux/i.test(t),
						x = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !O && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: g || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: g || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, x ? (o.msedge = e, o.version = x) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: x
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || g
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
						version: g || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : m ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, g && (o.version = g)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (o.version = g)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : j ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var _ = "";
					o.windows ? _ = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? _ = (_ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? _ = (_ = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? _ = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? _ = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (_ = n(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (o.osversion = _);
					var w = !o.windows && _.split(".")[0];
					return O || c || "ipad" == r || i && (3 == w || w >= 4 && !y) || o.silk ? o.tablet = e : (y || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = o(e, (function(e) {
							var n = t - s(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, o) {
				return o(e, (function(e, o, r) {
					n = s ? (s = !1, e) : t(n, e, o, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), s(o(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var s = n("./node_modules/react/index.js");

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

			function c(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
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
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					s = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + s)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, p = l(t),
					f = o(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== r(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
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
					o = r(n),
					i = s ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(v(h(i)))
			}

			function x(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = r(e), n = g(e); n && x(n) && "static" === p(n).position;) n = g(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var y = "top",
				j = "bottom",
				_ = "right",
				w = "left",
				k = "auto",
				C = [y, j, _, w],
				E = "start",
				S = "end",
				I = "clippingParents",
				P = "viewport",
				T = "popper",
				N = "reference",
				A = C.reduce((function(e, t) {
					return e.concat([t + "-" + E, t + "-" + S])
				}), []),
				D = [].concat(C, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + E, t + "-" + S])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function M(e) {
				var t = new Map,
					n = new Set,
					s = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(s) {
							if (!n.has(s)) {
								var o = t.get(s);
								o && e(o)
							}
						})), s.push(o)
					}(e)
				})), s
			}
			var B = {
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

			function R(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					o = t.defaultOptions,
					r = void 0 === o ? B : o;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var o, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, B), r),
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
								p(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), n), c.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = M(e);
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
								}([].concat(s, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: c,
											name: t,
											instance: u,
											options: s
										});
										d.push(r || function() {})
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
										for (var s = 0; s < c.orderedModifiers.length; s++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[s],
													r = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof r && (c = r({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, s = -1
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

			function q(e) {
				var t, n = e.reference,
					s = e.element,
					o = e.placement,
					r = o ? V(o) : null,
					i = o ? W(o) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (r) {
					case y:
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
				var d = r ? H(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case E:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case S:
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

			function G(e) {
				var t, n = e.popper,
					s = e.popperRect,
					o = e.placement,
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
					h = w,
					v = y,
					x = window;
				if (d) {
					var g = O(n);
					g === r(n) && (g = l(n)), o === y && (v = j, m -= g.clientHeight - s.height, m *= c ? 1 : -1), o === w && (h = _, p -= g.clientWidth - s.width, p *= c ? 1 : -1)
				}
				var k, C = Object.assign({
					position: a
				}, d && z);
				return c ? Object.assign(Object.assign({}, C), {}, ((k = {})[v] = b ? "0" : "", k[h] = f ? "0" : "", k.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", k)) : Object.assign(Object.assign({}, C), {}, ((t = {})[v] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Y(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var J = {
				start: "end",
				end: "start"
			};

			function Q(e) {
				return e.replace(/start|end/g, (function(e) {
					return J[e]
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

			function Z(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === P ? Z(function(e) {
					var t = r(e),
						n = l(e),
						s = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return s && (o = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, c = s.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Z(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? O(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && X(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(s, [n]),
					r = o[0],
					i = o.reduce((function(t, n) {
						var s = $(e, n);
						return t.top = Math.max(s.top, t.top), t.right = Math.min(s.right, t.right), t.bottom = Math.min(s.bottom, t.bottom), t.left = Math.max(s.left, t.left), t
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

			function se(e, t) {
				void 0 === t && (t = {});
				var n = t,
					s = n.placement,
					r = void 0 === s ? e.placement : s,
					i = n.boundary,
					c = void 0 === i ? I : i,
					d = n.rootBoundary,
					u = void 0 === d ? P : d,
					p = n.elementContext,
					m = void 0 === p ? T : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					x = te("number" != typeof v ? v : ne(v, C)),
					g = m === T ? N : T,
					O = e.elements.reference,
					w = e.rects.popper,
					k = e.elements[b ? g : m],
					E = ee(a(k) ? k : k.contextElement || l(e.elements.popper), c, u),
					S = o(O),
					A = q({
						reference: S,
						element: w,
						strategy: "absolute",
						placement: r
					}),
					D = Z(Object.assign(Object.assign({}, w), A)),
					L = m === T ? D : S,
					M = {
						top: E.top - L.top + x.top,
						bottom: L.bottom - E.bottom + x.bottom,
						left: E.left - L.left + x.left,
						right: L.right - E.right + x.right
					},
					B = e.modifiersData.offset;
				if (m === T && B) {
					var F = B[r];
					Object.keys(M).forEach((function(e) {
						var t = [_, j].indexOf(e) >= 0 ? 1 : -1,
							n = [y, j].indexOf(e) >= 0 ? "y" : "x";
						M[e] += F[n] * t
					}))
				}
				return M
			}

			function oe(e, t, n) {
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
				return [y, _, j, w].some((function(t) {
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
								o = s.scroll,
								i = void 0 === o || o,
								a = s.resize,
								c = void 0 === a || a,
								d = r(t.elements.popper),
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
								s = n.gpuAcceleration,
								o = void 0 === s || s,
								r = n.adaptive,
								i = void 0 === r || r,
								a = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), G(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), G(Object.assign(Object.assign({}, a), {}, {
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
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(s).forEach((function(e) {
									var t = s[e];
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
										var s = t.elements[e],
											o = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(s) && d(s) && (Object.assign(s.style, r), Object.keys(o).forEach((function(e) {
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
								o = n.offset,
								r = void 0 === o ? [0, 0] : o,
								i = D.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = V(e),
											o = [w, y].indexOf(s) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [w, _].indexOf(s) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, r), e
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
								for (var o = n.mainAxis, r = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, v = V(h), x = c || (v === h || !f ? [Y(h)] : function(e) {
										if (V(e) === k) return [];
										var t = Y(e);
										return [Q(e), t, Q(t)]
									}(h)), g = [h].concat(x).reduce((function(e, n) {
										return e.concat(V(n) === k ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												o = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? D : c,
												l = W(s),
												u = (l ? a ? A : A.filter((function(e) {
													return W(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: o,
														rootBoundary: r,
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
									}), []), O = t.rects.reference, S = t.rects.popper, I = new Map, P = !0, T = g[0], N = 0; N < g.length; N++) {
									var L = g[N],
										M = V(L),
										B = W(L) === E,
										F = [y, j].indexOf(M) >= 0,
										R = F ? "width" : "height",
										U = se(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										H = F ? B ? _ : w : B ? j : y;
									O[R] > S[R] && (H = Y(H));
									var q = Y(H),
										z = [];
									if (r && z.push(U[M] <= 0), a && z.push(U[H] <= 0, U[q] <= 0), z.every((function(e) {
											return e
										}))) {
										T = L, P = !1;
										break
									}
									I.set(L, z)
								}
								if (P)
									for (var G = function(e) {
											var t = g.find((function(t) {
												var n = I.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, K = f ? 3 : 1; K > 0; K--) {
										if ("break" === G(K)) break
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
								o = n.mainAxis,
								r = void 0 === o || o,
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
								x = V(t.placement),
								g = W(t.placement),
								k = !g,
								C = H(x),
								S = "x" === C ? "y" : "x",
								I = t.modifiersData.popperOffsets,
								P = t.rects.reference,
								T = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								A = {
									x: 0,
									y: 0
								};
							if (I) {
								if (r) {
									var D = "y" === C ? y : w,
										L = "y" === C ? j : _,
										M = "y" === C ? "height" : "width",
										B = I[C],
										F = I[C] + v[D],
										R = I[C] - v[L],
										U = m ? -T[M] / 2 : 0,
										q = g === E ? P[M] : T[M],
										z = g === E ? -T[M] : -P[M],
										G = t.elements.arrow,
										K = m && G ? b(G) : {
											width: 0,
											height: 0
										},
										Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										J = Y[D],
										Q = Y[L],
										X = oe(0, P[M], K[M]),
										Z = k ? P[M] / 2 - U - X - J - N : q - X - J - N,
										$ = k ? -P[M] / 2 + U + X + Q + N : z + X + Q + N,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										re = I[C] + Z - ne - te,
										ie = I[C] + $ - ne,
										ae = oe(m ? Math.min(F, re) : F, B, m ? Math.max(R, ie) : R);
									I[C] = ae, A[C] = ae - B
								}
								if (a) {
									var ce = "x" === C ? y : w,
										de = "x" === C ? j : _,
										le = I[S],
										ue = oe(le + v[ce], le, le - v[de]);
									I[S] = ue, A[S] = ue - le
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
								o = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								i = V(n.placement),
								a = H(i),
								c = [w, _].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? y : w,
									p = "y" === a ? j : _,
									m = n.rects.reference[c] + n.rects.reference[a] - r[a] - n.rects.popper[c],
									f = r[a] - n.rects.reference[a],
									h = O(o),
									v = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									x = m / 2 - f / 2,
									g = d[u],
									k = v - l[c] - d[p],
									C = v / 2 - l[c] / 2 + x,
									E = oe(g, C, k),
									S = a;
								n.modifiersData[s] = ((t = {})[S] = E, t.centerOffset = E - C, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								o = n.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && X(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[s + "#persistent"] = {
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
								o = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = se(t, {
									elementContext: "reference"
								}),
								a = se(t, {
									altBoundary: !0
								}),
								c = re(i, s),
								d = re(a, o, r),
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
					var o = s.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = s.useState({
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
								onFirstUpdate: r.onFirstUpdate,
								placement: r.placement,
								strategy: r.strategy,
								modifiers: [].concat(r.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, d]),
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
				o = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
			e.exports = JSON.parse('{"id":"7fc3f75ce98a"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"90defcf94579"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"f90184fd040d"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"3785f4aa83f3"}')
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
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const c = (e, t, n) => (s = (() => {})) => o => {
				const r = p(o.target, o.currentTarget),
					a = m(o.target, o.currentTarget);
				r && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
					const s = t(e, r, a)(n);
					let o;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						o = t
					}
					return {
						...s,
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
			};

			function d(e) {
				return Object(r.c)(t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(c(i, r, n), [i, r, n]);
					return o.a.createElement(e, a({}, d, {
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
				return o
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				o = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				o = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "e", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/lib/constants/index.ts"),
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
			const O = "FEED_CHAINING__CHAIN_LOADED",
				y = Object(i.a)(O),
				j = e => {
					const t = Date.now() - e,
						n = Object(f.x)();
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
					const O = h.name.toLowerCase(),
						_ = e === O;
					if (!(e === m.f || e === m.b || _)) return;
					if (_) return void S(h, t, n)(s, i, u);
					0 === j(r.hb).length && Object(f.nb)(!1);
					let w = i();
					if (Object(v.d)(w, {
							listingKey: t,
							postId: n
						}) || Object(v.a)(w).length >= p.a || Object(f.J)() || j(r.x).length >= p.a) return;
					const k = Object(x.w)(w, {
						listingKey: t,
						postId: n
					});
					if (k && k.isSponsored) return;
					await s(Object(c.g)()), w = i();
					const C = Object(v.b)(w, {
						listingName: e
					});
					if (!C) return;
					if (!h || Object(v.e)(w, {
							subredditId: h.id
						}) || (e => {
							return j(r.x).some(t => t.subredditId === e)
						})(h.id)) return;
					const E = {
						subredditIds: [h.id],
						count: p.b
					};
					await s(Object(d.b)(E));
					const I = Object(d.a)(E);
					w = i();
					const P = Object(g.v)(w, {
						key: I
					});
					0 !== P.length ? (await s((e => async (t, n) => {
						const s = r.Ub.DAY.toUpperCase(),
							o = e.filter(e => {
								const t = Object(a.a)(e, r.P.TOP, {
										t: s
									}),
									o = n();
								return 0 === Object(x.B)(o, {
									listingKey: t
								}).length
							});
						await t(Object(l.b)({
							first: 1,
							range: s,
							sort: r.I.TOP,
							subredditNames: o
						}))
					})(P.map(e => e.name))), w = i(), Object(v.f)(w, {
						postId: n
					}).length < p.c ? Object(o.a)(Object(b.c)(C, "other", h)(w)) : (Object(f.a)(n, h.id), Object(o.a)(Object(b.d)(C, h)(w)), s(y({
						listingKey: t,
						postId: n
					})))) : Object(o.a)(Object(b.c)(C, "no_chaining", h)(w))
				}, w = "FEED_CHAINING__CHAIN_TOGGLED", k = (Object(i.a)(w), "FEED_CHAINING__CHAINING_TOGGLED"), C = Object(i.a)(k), E = () => async e => {
					Object(f.nb)(!0), e(C({
						isDismissed: !0
					})), e(Object(u.e)(Object(u.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), h.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(f.nb)(!1), e(C({
							isDismissed: !1
						}))
					})))
				}, S = (e, t, n) => async (e, t, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				o = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			}));
			var s, o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
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
				m = Object(o.a)(r.q),
				f = Object(o.a)(r.p),
				b = Object(o.a)(r.o),
				h = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = p(e),
						h = Object(u.u)(o, {
							key: r
						}),
						v = Object(u.t)(o, {
							key: r
						});
					if (h || v.length > 0) return;
					t(m({
						key: r
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
							key: r,
							...e
						}))
					} else {
						const e = x.error;
						t(b({
							key: r,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return V
			})), n.d(t, "a", (function() {
				return W
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				a = n("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(o.a)(a.b),
				d = Object(o.a)(a.a);
			var l = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(o.a)(l.b),
				p = Object(o.a)(l.a);
			var m = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				b = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = n("./src/reddit/models/Post/index.ts");
			var O = ({
				getState: e,
				onFailure: t,
				onSuccess: n,
				postId: s,
				response: o
			}) => {
				if (!o.ok) return void t(o.error);
				const r = o.body,
					{
						post: a
					} = r && r.data,
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
							postFlair: o,
							postIds: r,
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
							postFlair: o,
							postId: s,
							postIds: r,
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
			const y = Object(o.a)(m.a),
				j = Object(o.a)(m.b),
				_ = Object(o.a)(m.c);
			var w = n("./src/reddit/actions/subreddit/constants.ts"),
				k = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				C = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var E = ({
				getState: e,
				onSuccess: t,
				onFailure: n,
				postId: s,
				post: o
			}) => {
				try {
					t({
						altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
						postId: s
					})
				} catch (r) {
					n(r)
				}
			};
			var S = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					postId: s,
					post: o
				}) => {
					try {
						const n = [],
							i = {},
							a = {};
						if (!o || !o.linked) return;
						const c = e(),
							d = c.posts && c.posts.models,
							l = Object(r.a)(s),
							u = o.linked.posts && o.linked.posts.edges || [];
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
							dist: o.linked.posts && o.linked.posts.dist || null,
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
			var P = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var T = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					options: o,
					subreddit: r
				}) => {
					try {
						if (!r) return;
						const n = r.elements || r.posts,
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
							} = o,
							m = Object(i.a)(p, s.P[u], {
								t: l
							}),
							f = P(d),
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
				D = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const L = Object(o.a)(D.b),
				M = Object(o.a)(D.a),
				B = Object(o.a)(w.k),
				F = Object(o.a)(w.j),
				R = Object(o.a)(w.s),
				U = Object(o.a)(w.r),
				V = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = (await ((e, t) => Object(f.a)(e, {
							...C,
							variables: t
						}))(s(), e)).body,
						{
							subredditNames: r,
							...i
						} = e,
						a = [];
					try {
						for (const e of o.data.subredditsInfoByNames) {
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
				}, W = e => async (t, n, {
					gqlContext: o
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
						sort: w,
						subredditName: C
					} = e, I = Object(i.a)(x, null, {
						isOtherDiscussions: !0
					}), P = n(), D = Object(A.B)(P, {
						listingKey: I
					}), R = b && (!D || 0 === D.length), U = Object(i.a)(C, s.P[w], {
						t: g
					}), V = Object(A.B)(P, {
						listingKey: U
					}), W = h && (!V || 0 === V.length), H = Object(r.a)(x), q = Object(A.B)(P, {
						listingKey: H
					}), z = m && (!q || 0 === q.length), G = Object(A.I)(P, {
						postId: x
					}), K = l && !!G && !!G.media && (Object(N.H)(G.media) || Object(N.F)(G.media)) && !G.media.altText;
					if (!(R || W || z || K || v)) return;
					R && t(_({
						key: I
					}));
					const Y = await ((e, t) => Object(f.a)(e, {
							...k,
							variables: t
						}))(o(), e),
						J = Y.body;
					v && (Y.ok ? J.data && J.data.post && t(c({
						postId: x,
						isEligibleForQASchema: null !== (a = J.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(d())), R && O({
						getState: n,
						onFailure: e => t(y(e)),
						onSuccess: e => t(j(e)),
						postId: x,
						response: Y
					}), W && (Y.ok ? J.data && T({
						getState: n,
						onFailure: e => t(F(e)),
						onSuccess: e => t(B(e)),
						options: e,
						subreddit: J.data.subreddit
					}) : t(F(Y.error))), z && Y.ok && S({
						getState: n,
						onFailure: e => t(p(e)),
						onSuccess: e => t(u(e)),
						postId: x,
						post: J.data.post
					}), K && Y.ok && E({
						getState: n,
						onFailure: e => t(M(e)),
						onSuccess: e => t(L(e)),
						postId: x,
						post: J.data.post
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
				o = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
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
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
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
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/components/CallToActionButton/index.m.less"),
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
			t.a = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)();
				return o.a.createElement(i.a, l({
					className: Object(r.a)(e, d.a.CallToActionButton, {
						[d.a.mNotCardView]: t.isNotCardView,
						[d.a.is2020]: n
					})
				}, t))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					m(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
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
			const o = Object(s.a)({
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
			t.a = o
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
			}) => o.a.createElement(a.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = n("./src/reddit/hooks/usePrevious.ts"),
				a = n("./src/reddit/components/CountAnimation/config.ts"),
				c = n("./src/reddit/components/CountAnimation/helpers.ts"),
				d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: n,
					incrementDelta: d,
					initialDelay: u,
					subsequentRecurringDelay: p,
					shouldDisjointAnimation: m,
					id: f
				} = e, [b, h] = Object(s.useState)(!1), [v, x] = Object(s.useState)(!0), [g, O] = Object(s.useState)([]), [y, j] = Object(s.useState)(Object(c.d)(t).reverse()), _ = Object(s.useRef)(!1), w = Object(s.useRef)(null), k = Object(s.useRef)(e => {}), C = Object(s.useRef)();
				k.current = Object(s.useCallback)(e => {
					let t = e || d();
					const s = [...y].reverse().join("");
					let o = parseInt(s) + t;
					o > n && (t = n - parseInt(s), o = n);
					const r = Object(c.d)(o).reverse();
					h(!1), O(y), j(r), x(!1), C.current = setTimeout(() => {
						h(!0)
					}, 0)
				}, [n, d, y]);
				const E = Object(s.useRef)(() => {}),
					S = Object(s.useRef)(),
					I = Object(s.useRef)();
				E.current = Object(s.useCallback)(() => {
					I.current = setTimeout(() => {
						k.current();
						const e = [...g].reverse().join("");
						parseInt(e) < n && E.current()
					}, p())
				}, [n, p, g]);
				const P = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (_.current || (_.current = !0, S.current = setTimeout(() => {
							k.current(), E.current()
						}, u())))
					})
				}, []);
				Object(r.a)(w, P);
				const T = Object(i.a)(n);
				Object(s.useEffect)(() => (void 0 !== T && T !== n && k.current(n - T), () => {
					clearTimeout(S.current), clearTimeout(I.current), clearTimeout(C.current)
				}), [n]);
				const N = Object(s.useCallback)(() => x(!0), [x]),
					A = 0 === g.length,
					D = v || A;
				return o.a.createElement("div", {
					className: l.a.countAnimation,
					ref: w
				}, y.map((e, t) => {
					const n = g[t] || 0,
						s = Object(c.f)(n, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: N,
						style: b && g.length > 0 && !v ? {
							transform: `translateY(-${m&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(m?a.b.disjointAnimationDuration:a.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, D ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!m || m && n) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					id: f,
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...y].reverse().join("")))
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("InFeedChaining")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
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
				fallback: r.a.createElement("div", null),
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: Object(r.a)(m.a.container, e, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
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
				O = f.a.wrapped(u.a, "LiveIcon", m.a),
				y = f.a.div("LoadingState", m.a);
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
					} = n, p = Object(r.e)(u, s);
					let m, f;
					if (this.state.mounted || p === r.a.Live) m = function(e, t, n) {
						const s = Object(r.e)(e, t),
							o = new Date(e * a.Hb);
						let d;
						return s === r.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (s === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(o)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o)}`)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = o.a.createElement(y, {
							className: e
						})
					}
					if (l) f = o.a.createElement(v, null, o.a.createElement(O, null), m);
					else if (p === r.a.Future) f = o.a.createElement(b, null, o.a.createElement(g, null), m);
					else {
						if (p !== r.a.Past) return null;
						f = o.a.createElement(h, null, o.a.createElement(g, null), m)
					}
					return o.a.createElement(x, {
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
				O = n("./src/reddit/selectors/inFeedChaining.ts"),
				y = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				w = n("./src/lib/ads/index.ts"),
				k = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				E = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				S = n("./src/reddit/components/AwardBadges/index.tsx"),
				I = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				P = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = n("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = n("./src/reddit/components/Flatlist/index.tsx"),
				D = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = n("./src/reddit/components/ModModeReports/index.tsx"),
				M = n("./src/reddit/components/ModModeReports/helpers.ts"),
				B = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = n("./src/reddit/components/PostContainer/index.tsx"),
				R = n("./src/reddit/components/PostLeftRail/index.tsx"),
				U = n("./src/reddit/components/PostMedia/index.tsx"),
				V = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				H = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				q = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = n.n(q);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var K = () => {
					const e = Object(W.b)();
					return o.a.createElement("div", {
						className: z.a.container
					}, o.a.createElement(H.a, {
						className: z.a.pinnedIcon,
						isFilled: e
					}), o.a.createElement("span", {
						className: z.a.metaText
					}, G._("pinned by moderators", null, {
						hk: "1qU8t4"
					})))
				},
				Y = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				J = n("./src/reddit/components/PostTitle/index.tsx"),
				Q = n("./src/reddit/components/PostTopLine/index.tsx"),
				X = n("./src/reddit/components/SourceLink/index.tsx"),
				Z = n("./src/reddit/constants/experiments.ts"),
				$ = n("./src/reddit/contexts/InsideOverlay.tsx"),
				ee = n("./src/reddit/contexts/PageLayer/index.tsx"),
				te = n("./src/reddit/contexts/Post/index.tsx"),
				ne = n("./src/reddit/helpers/isCrosspost.ts"),
				se = n("./src/reddit/helpers/postEvent.ts"),
				oe = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				re = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const ae = Object(i.a)(j.O, e => e.some(ie.c)),
				ce = Object(i.a)(ae, e => e),
				de = (e, t) => Object(re.c)(e, {
					experimentName: Z.db,
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
				ve = Object(r.b)(() => Object(i.c)({
					autoplayPref: _.b,
					activeModalId: x.a,
					hideNSFWPref: _.B,
					flairStyleTemplate: ee.R,
					isCurrentUserProfilePost: j.k,
					isLoggedIn: _.J,
					isActive: j.j,
					isPostChainDismissed: O.c,
					isPostChained: O.d,
					listingBelowVariant: oe.b,
					imageGalleryCurrentItem: j.i,
					moderatorPermissions: y.h,
					modModeEnabled: ee.P,
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
				xe = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						chainPost: s,
						className: r,
						currentUser: i,
						eventFactory: u,
						flairStyleTemplate: p,
						forceLoadMedia: m,
						hideNSFWPref: v,
						hostPostId: x,
						imageGalleryCurrentItem: g,
						inSubredditOrProfile: O = !1,
						isCommentsPage: y,
						isCurrentUserProfilePost: j,
						isFrontpage: _,
						isGalleryTileLayoutDefault: W,
						isLoggedIn: H,
						isOverlay: q,
						isPostChainDismissed: z,
						isPostChained: G,
						isTopicPage: $,
						listingBelowVariant: ee,
						listingKey: te,
						listingName: oe,
						moderatorPermissions: re,
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
						userIsOp: Oe,
						isActionBarAnimationEnabled: ye,
						postId: je,
						postIds: _e
					} = e, we = !!e.redditStyle || !!e["data-redditstyle"], ke = we ? void 0 : p, Ce = Object(d.a)(re), Ee = ie && Ce, Se = Object(a.a)(re), Ie = Object(c.a)(re), Pe = Object(M.c)(le), Te = !!le.media && le.media.type === b.o.RTJSON, Ne = Oe && Te, Ae = n ? n - R.a : void 0, De = !(_ && H || $), Le = (e => e === Z.xc.OnlyTitles)(pe) && !Object(ne.a)(le), Me = (e => e === Z.xc.MediumHeight)(pe) && !Object(ne.a)(le), Be = (e => {
						const {
							post: t,
							postIds: n,
							posts: s
						} = e;
						if (!Object(h.p)(t)) return;
						const o = n && 0 === n.indexOf(t.id),
							r = n && 1 === n.indexOf(t.id),
							i = s && s[1] && Object(h.p)(s[1]);
						return {
							hasTopCompactPostStyles: o && i,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: o
						}
					})(e), Fe = !!ee && !Object(Z.qd)(ee), Re = (!O || Fe) && !le.isSponsored, Ue = Object(w.t)(le, g), {
						source: Ve
					} = Ue, We = o.a.createElement(o.a.Fragment, null, o.a.createElement(F.a, {
						className: Object(k.a)(be.a.container, r, me.a.largeAndMediumPostStyles, me.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[me.a.mUseRedditTheme]: we,
							promotedvideolink: le.isSponsored && !(le.media && b.a.has(le.media.type)),
							[be.a.topCompactPost]: Be && Be.hasTopCompactPostStyles,
							[be.a.bottomCompactPost]: Be && Be.hasBottomCompactPostStyles
						}),
						isOverlay: q,
						style: Object(l.b)(e.flairStyleTemplate),
						post: le,
						onClick: ae,
						onPostContentClick: s,
						eventFactory: u
					}, o.a.createElement(Y.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ke,
						redditStyle: we,
						subreddit: ge,
						isActionBarAnimationEnabled: ye,
						postId: je
					}), o.a.createElement(B.a, {
						className: Object(k.a)(be.a.backgroundWrapper, {
							[be.a.isEvent]: Object(se.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ke,
						post: le,
						redditStyle: we
					}, o.a.createElement(N.a, {
						post: le
					}), Be && Be.showPinnnedHeader && o.a.createElement(K, null), o.a.createElement(Q.a, {
						className: be.a.postTopLine,
						hideAwards: ve,
						hideNSFWPref: v,
						hostPostId: x,
						iconClassName: be.a.postTopLineIcon,
						inSubredditOrProfile: O,
						isCommentsPage: !!y,
						isCompactPinnedPost: !!Be,
						isCurrentUserProfilePost: j,
						isOverlay: !!q,
						isTopicPage: !!$,
						listingKey: te,
						post: le,
						shouldShowSubscribeButton: De,
						showSubreddit: Re,
						showSubredditIcon: !0,
						subredditOrProfile: ge
					}), o.a.createElement(J.c, {
						className: be.a.postTitle,
						post: le,
						redditStyle: we,
						size: J.b.Large,
						titleColor: ke && ke.postTitleColor,
						isOverlay: q
					}), le.source && !le.isSponsored && !(le.media && Object(b.G)(le.media)) && o.a.createElement(X.a, {
						className: be.a.sourceLink,
						post: le
					}), o.a.createElement("div", {
						className: be.a.postMediaWrapper
					}, !Be && o.a.createElement(U.a, {
						isGalleryTileLayoutDefault: W,
						isListing: !0,
						isMediumHeight: Me,
						isNotCardView: !!q,
						isTitleOnly: Le,
						showCentered: !0,
						flairStyleTemplate: ke,
						post: le,
						availableWidth: Ae,
						shouldLoad: m,
						scrollerItemRef: fe,
						autoplayPref: t,
						shouldShowGalleryTileOption: he
					})), le.isSponsored && Ve && Ve.url && o.a.createElement(C.a, {
						className: be.a.adLinkWrapper
					}, o.a.createElement(E.a, {
						post: le,
						adLinkContent: Ue
					})), ie && Ce && Pe && o.a.createElement(L.a, {
						onIgnoreReports: ce,
						reportable: le
					}), o.a.createElement(D.d, null), ve && o.a.createElement(S.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: le,
						tooltipType: q ? ue.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: be.a.flatListContainer
					}, o.a.createElement(P.a, {
						className: be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ke,
						model: le,
						onVoteClick: e.handleVote
					}), o.a.createElement(A.c, {
						currentUser: i,
						hasModFlairPerms: Se,
						hasModFullPerms: Ie,
						hasModPostPerms: Ce,
						hostPostId: x,
						isActionBarAnimationEnabled: ye,
						isLargePost: !0,
						isOverlay: !!q,
						listingKey: te,
						modModeEnabled: ie,
						onIgnoreReports: ce,
						onOpenReportsDropdown: de,
						post: le,
						showEditPost: Ne,
						showEditFlair: xe,
						useFlatlistBreakpoints: Object(V.h)({
							editPost: !1,
							save: !Ee,
							hide: !1,
							report: !1
						})
					}))), _ && o.a.createElement(I.a, {
						post: le,
						postIds: null != _e ? _e : [],
						subredditId: null == ge ? void 0 : ge.id
					})));
					return o.a.createElement(f.b, null, We, G && !z && o.a.createElement(T.a, {
						className: be.a.chain,
						listingKey: te,
						listingName: oe,
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), p = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
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
				fallback: r.a.createElement(p, null),
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				} = e, [h, v] = Object(o.useState)(!0), x = Object(f.b)(n.id, b), g = Object(i.d)(), O = Object(m.a)(), y = Object(f.a)(n, b), j = (e, s) => O(Object(p.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					y && j("modal", "show")
				}, [y]);
				if (!y || !h) return null;
				const _ = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
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
				}, r.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", r.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
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
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				} = e, [v, x] = Object(r.useState)(s.Survey), g = Object(b.b)(n.id, h), O = Object(a.d)(), y = Object(f.a)(), j = Object(b.a)(n, h), _ = (e, s) => y(Object(m.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					j && _("modal", "show")
				}, [j]);
				const w = e => {
					x(s.Closed), _("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), O(Object(l.c)(n.id, void 0, e))
				};
				if (!j) return null;
				let k = null;
				const C = {
					id: g,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						x(s.Closed), _("close", "click"), O(Object(d.A)())
					},
					onClickOutside: () => {
						O(Object(d.A)())
					}
				};
				switch (v) {
					case s.Survey:
						k = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.OffTopic), _("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.DontLike), _("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.BreaksRules), _("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						k = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						k = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						k = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
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
							onClick: () => w("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => w("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return k
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
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: c
				} = e;
				return Object(a.a)(t, s), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), c)
			}
		},
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				a = n("./src/reddit/constants/zIndex.ts");
			const c = "POPUP_CONTAINER";
			let d;
			const l = ["right", "top"],
				u = ["left", "top"];

			function p(e) {
				const [t, n] = Object(s.useState)(null);
				return Object(s.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const n = t.getBoundingClientRect(),
								{
									style: s
								} = Object(r.b)({
									isFixed: !1,
									targetBox: n,
									targetPosition: l,
									tooltipPosition: u,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: s.left,
								y: s.top
							}
						})(e);
						t && n(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function m(e) {
				const {
					children: t,
					rightOf: n
				} = e, s = p(n);
				return s && (d || (d = document.getElementById(c))) ? Object(i.d)(o.a.createElement("div", {
					style: {
						position: "absolute",
						transform: `translate(${s.x}px, ${s.y}px)`,
						zIndex: a.e
					}
				}, t), d) : null
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, n),
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
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
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
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
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
				O = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(y);
			const _ = Object(m.a)(() => Object(r.c)({
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
				w = e => {
					const t = Object(O.d)(e.target, e.currentTarget),
						n = Object(O.b)(e.target, e.currentTarget, O.a.buttons);
					return "subreddit" !== t && n
				};
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						currentIndex: r,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: p,
						onClick: m,
						onPostContentClick: b,
						sendEvent: h,
						style: v,
						ref: g
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, p, t, d))(n), b && w(n) && b(n, p)), p.id && d) {
								const {
									source: e
								} = Object(i.t)(p, d);
								if (e && e.outboundUrl) {
									const t = r + 1;
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
					}, n), y = !!p.media && p.media.type === f.o.VIDEO;
					return p.isSponsored || y ? o.a.createElement(a.a, {
						post: p,
						trackDisplay: !0
					}, O) : p.media && Object(f.E)(p.media) ? o.a.createElement(u, {
						postId: p.id
					}, O) : O
				}
			}
			t.a = _(Object(O.c)(Object(p.c)(k)))
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
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
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
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
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
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
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
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
				o = n.n(s),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
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
					isActionBarAnimationEnabled: O,
					postId: y,
					isForceSelected: j
				} = e, _ = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: w
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: v
				}, s && o.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: v,
					upvoteTooltipId: _,
					isActionBarAnimationEnabled: O,
					postId: y,
					isForceSelected: j,
					scoreClassName: f.a.score
				}), w && o.a.createElement(a.b, {
					rightOf: _
				}, "survey" === w ? o.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				}) : o.a.createElement(r.a, {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				O = n("./src/reddit/components/PostTopLine/index.m.less"),
				y = n.n(O);
			const j = n("./src/lib/lessComponent.tsx").a.div("Container", y.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					hideAwards: s,
					hideNSFWPref: O,
					hostPostId: _,
					iconClassName: w,
					inSubredditOrProfile: k,
					isCommentsPage: C,
					isCompactPinnedPost: E,
					isCurrentUserProfilePost: S,
					isOverlay: I,
					isTopicPage: P,
					listingKey: T,
					post: N,
					shouldShowSubscribeButton: A,
					showCornerOutboundLink: D,
					showSubreddit: L,
					showSubredditIcon: M,
					subredditOrProfile: B
				} = e, F = s || P;
				return o.a.createElement(j, {
					className: t
				}, L && B && o.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, o.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, M && o.a.createElement(l.b, {
					className: Object(r.a)(y.a.subredditIcon, w),
					shouldHideNsfwIcon: O,
					subredditOrProfile: B
				}))), o.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, L && o.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), o.a.createElement(d.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: n,
					tooltipType: I ? d.c.Lightbox : void 0,
					post: N,
					showSub: L,
					subredditOrProfile: B
				}), o.a.createElement(c.a, {
					className: y.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: E,
					post: N,
					tooltipType: I ? d.c.Lightbox : void 0
				}), !F && o.a.createElement(i.a, {
					isPostDetail: C,
					thing: N,
					tooltipType: I ? d.c.Lightbox : void 0
				})), B && L && A && !S && o.a.createElement(p.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(h.f)(N.id, e ? "unsubscribe" : "subscribe", "post", T, _),
					identifier: {
						name: B.name,
						type: Object(g.g)(B) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: N.id,
					size: f.c.XS
				}), D && o.a.createElement(b.b, {
					className: y.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(e.post),
					source: N.source
				}, o.a.createElement(v.a, {
					className: y.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
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
				}) => r[o({
					type: e
				})][t]()
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				p = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/VerticalVotes/index.m.less"),
				x = n.n(v);
			const g = Object(a.c)({
					isNightmode: h.U,
					totalDiscount: b.d,
					variantAnimationConfig: b.e
				}),
				O = Object(i.b)(g),
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(m.a)(e).voteIcons.upvoteInactive && Object(m.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(m.a)(e).voteIcons.downvoteInactive && Object(m.a)(e).voteIcons.downvoteActive;
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: f.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(f.a.upvoted), this.setState({
							voted: e !== f.a.upvoted ? f.a.upvoted : f.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(f.a.downvoted), this.setState({
							voted: e !== f.a.downvoted ? f.a.downvoted : f.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isNightmode: n,
							shouldShowScore: o = !0,
							upvoteButtonClassName: i,
							containerRef: a,
							model: d,
							totalDiscount: m,
							variantAnimationConfig: b,
							postId: h
						} = e,
						v = y(e),
						g = j(e),
						O = d.voteState;
					return r.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className),
						id: `vote-arrows-${d.id}`,
						ref: a
					}, v ? r.a.createElement(p.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": O === f.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: n,
						onClick: this.onUpvote,
						voteState: O
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": O === f.a.upvoted,
						className: Object(c.a)(l.n, i),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(p.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: O
					})), !e.compact && o && r.a.createElement(u.a, {
						className: Object(c.a)(x.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: O,
						isScoreHidden: e.model.isScoreHidden,
						totalDiscount: m,
						shouldDisjointAnimation: null == b ? void 0 : b.shouldDisjointAnimation,
						shouldShowPageTransPersistence: null == b ? void 0 : b.shouldShowPageTransPersistence,
						postId: h
					}), g ? r.a.createElement(p.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": O === f.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: n,
						onClick: this.onDownvote,
						voteState: O
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": O === f.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(p.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: O
					})))
				}
			}
			const w = Object(d.a)(O(_));
			t.a = w
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "d", (function() {
				return D
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => s => {
				const o = e(s),
					i = t(s),
					a = !o && i;
				return Object(r.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: o,
					[n.mIsVoteable]: a
				})
			};
			var c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/controls/Downvote/index.m.less"),
				p = n.n(u);
			const m = {
					...p.a,
					baseClassName: p.a.Downvote
				},
				f = ({
					voteState: e
				}) => e === l.a.downvoted,
				b = a(f, ({
					interactive: e
				}) => !1 !== e, m);
			var h = e => {
					const t = Object(c.b)();
					return o.a.createElement(d.b, {
						className: b(e),
						compact: e.compact,
						isFilled: t && f(e)
					})
				},
				v = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				x = n("./src/reddit/controls/Upvote/index.m.less"),
				g = n.n(x);
			const O = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				y = ({
					voteState: e
				}) => e === l.a.upvoted,
				j = a(y, ({
					interactive: e
				}) => !1 !== e, O);
			var _ = e => {
					const t = Object(c.b)();
					return o.a.createElement(v.b, {
						className: j(e),
						compact: e.compact,
						isFilled: t && y(e)
					})
				},
				w = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				k = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(E);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = e => Object(r.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(k.b)(Object(w.a)(e)),
					[S.a.nightmode]: e.isNightmode
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return o.a.createElement("button", I({}, i, {
						className: Object(r.a)(S.a.customDownvote, P(e), {
							[S.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return o.a.createElement("button", I({}, i, {
						className: Object(r.a)(S.a.customUpvote, P(e), {
							[S.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				A = h,
				D = _
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: i.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = 3,
				o = 5,
				r = 10
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
						let o = "";
						return o = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, i, a);
					return o.a.createElement(e, u({
						className: Object(r.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				m = p(c.a),
				f = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? m : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => o.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/CountAnimation/index.tsx"),
				d = n("./src/reddit/components/CountAnimation/config.ts"),
				l = n("./src/reddit/components/CountAnimation/helpers.ts"),
				u = n("./src/reddit/constants/colors.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				m = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/controls/Score/index.m.less"),
				v = n.n(h);
			const x = e => e.voteState === b.a.downvoted ? Object(f.a)(e).voteText.downvote : e.voteState === b.a.upvoted ? Object(f.a)(e).voteText.upvote : Object(m.a)(Object(p.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: g,
							upper: O
						},
						subsequentRecurringDelayRange: {
							lower: y,
							upper: j
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: _,
							upper: w
						}
					}
				} = d.b,
				k = () => Object(l.l)(g, O),
				C = () => Object(l.l)(y, j),
				E = Object(i.a)(e => {
					const t = {
							color: e.light ? u.b.lightboxHeaderText : x(e)
						},
						{
							totalDiscount: n,
							score: i,
							shouldDisjointAnimation: d,
							shouldShowPageTransPersistence: p,
							postId: m = ""
						} = e,
						f = e.isScoreHidden ? "Vote" : Object(a.b)(i),
						b = Object(s.useCallback)(() => Object(l.l)(Math.ceil((n || 0) * _), Math.ceil((n || 0) * w)), [n]),
						h = Object(s.useRef)(Object(l.k)(m, l.a.Vote)),
						g = Object(s.useRef)(p && void 0 !== n && Object(l.e)(h.current));
					return o.a.createElement("div", {
						className: Object(r.a)(v.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === n ? f : o.a.createElement(c.a, {
						initialDisplayCount: g.current || i - n,
						countToUpperBound: i,
						initialDelay: k,
						subsequentRecurringDelay: C,
						incrementDelta: b,
						shouldDisjointAnimation: d,
						id: h.current
					}))
				});
			t.a = E
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				if (!(t && n && s && o)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				}
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
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
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
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
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return w
			})), n.d(t, "F", (function() {
				return k
			})), n.d(t, "M", (function() {
				return E
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "C", (function() {
				return I
			})), n.d(t, "D", (function() {
				return P
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "L", (function() {
				return D
			})), n.d(t, "K", (function() {
				return L
			})), n.d(t, "I", (function() {
				return M
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "z", (function() {
				return R
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "N", (function() {
				return V
			})), n.d(t, "J", (function() {
				return W
			})), n.d(t, "t", (function() {
				return H
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "b", (function() {
				return K
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "e", (function() {
				return J
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
				return oe
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return ae
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, o = n("./src/lib/stringInterpolate/index.ts"),
				r = n("./src/reddit/actions/focusedVerticals/constants.ts"),
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
						title: t.title && n ? Object(o.a)(t.title, {
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
				O = (e, t, n, s) => "unitName" in t ? h(e, t, s) : ((e, t, n) => ({
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
				y = (e, t, n, o, r) => ({
					...O(e, t, o, r),
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
			const w = (e, t, n) => {
					Object(f.a)(C(e, t, n, i.c.CLICK))
				},
				k = (e, t, n) => {
					Object(f.a)(C(e, t, n, i.c.VIEW))
				},
				C = (e, t, n, s) => {
					const o = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
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
							position: o
						}),
						search: {
							originPageType: e.platform.currentPage ? p.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.StructureType.Trending,
							queryId: s === i.c.CLICK ? Object(a.c)(a.a.SearchResults) : void 0
						}
					}
				},
				E = (e, t, n, s, o, r, a) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(c.e)(e, n, s, o, r, t),
						action: i.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				S = (e, t, n, s) => {
					Object(f.a)(y(e, t, n, s))
				},
				I = (e, t, n, s) => o => y(o, e, t, n, s),
				P = (e, t, n, o) => {
					const r = O(e, t, o);
					Object(f.a)({
						...r,
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
				A = (e, t, n, o) => r => {
					return {
						...O(r, e, n, o),
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(r, t)
					}
				},
				D = (e, t, n, s) => o => r => Object(c.e)(r, o, e, t, n, s),
				L = (e, t, n, s) => o => r => Object(c.d)(r, e, t, void 0, n, o, s),
				M = (e, t, n, s) => o => r => ({
					...Object(c.e)(r, o, e, t, n, s),
					noun: "ad"
				}),
				B = (e, t) => n => o => ({
					...e ? h(o, e, t) : {},
					source: b,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(o, n)
				}),
				F = (e, t, n, s) => {
					Object(f.a)(R(t, n, s)(e))
				},
				R = (e, t, n, s) => o => {
					const r = Object(u.c)(o, {
							postId: t
						}),
						a = r ? Object(m.b)(o, r) : void 0;
					return {
						...O(o, e, n, s),
						...a,
						source: b,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(o, t)
					}
				},
				U = (e, t, n) => s => o => {
					const r = Object(u.c)(o, {
							postId: t
						}),
						a = r ? Object(m.b)(o, r) : void 0;
					return {
						...O(o, e, void 0, n),
						...a,
						source: b,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(o, t)
					}
				},
				V = (e, t, n) => {
					const s = O(e, t);
					Object(f.a)({
						...s,
						...Object(m.b)(e, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				W = (e, t, n, s, o, r) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(c.d)(e, t, n, s, o, void 0, r)
					})
				},
				H = (e, t, n) => {
					const s = O(e, t);
					Object(f.a)({
						...s,
						...Object(m.b)(e, n),
						source: b,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				q = (e, t) => n => {
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
				G = (e, t, n) => s => ({
					...h(s, e, n),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				K = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				Y = (e, t, n) => s => ({
					...O(s, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				J = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				Q = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				X = (e, t, n) => p.actionInfo(e, {
					position: n
				}),
				Z = (e, t, n) => {
					const s = Q();
					return e => ({
						...v(e, s),
						actionInfo: X(e, 0, n),
						subreddit: p.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = Q();
					return e => ({
						...y(e, s, t),
						actionInfo: X(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const o = Q();
					return e => ({
						...h(e, o),
						actionInfo: X(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const o = Q();
					return e => ({
						...h(e, o),
						actionInfo: X(e, 0, n),
						post: p.post(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, o) => {
					const r = Q();
					return e => ({
						...h(e, r),
						actionInfo: X(e, 0, o),
						subreddit: p.subredditById(e, n) || null,
						post: p.post(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const o = Q();
					return e => ({
						...h(e, o),
						actionInfo: X(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				oe = (e, t, n, o) => {
					const r = Q();
					return e => ({
						...h(e, r),
						actionInfo: X(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: o ? p.post(e, o) : null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				re = (e, t, n, o) => {
					const r = Q();
					return e => ({
						...h(e, r),
						actionInfo: X(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: o ? p.post(e, o) : null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, n) => {
					const o = Q();
					return e => ({
						...h(e, o),
						actionInfo: X(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: b,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ae = (e, t, n) => {
					const o = Q();
					return e => ({
						...h(e, o),
						actionInfo: X(e, 0, n),
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
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.profile(e),
					screen: a.screen(e),
					subreddit: a.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(i.h)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: a.post(s, e)
				}),
				l = (e, t, n, s) => o => {
					const i = n ? a.comment(o, n) : null,
						{
							sortToUse: c
						} = Object(r.a)(o, e);
					return {
						...d(e, t, s)(o),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = a.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(i.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				p = (e, t) => n => Object(o.a)({
					...d(e, t)(n),
					...a.defaults(n)
				}),
				m = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: a.currentPost(t),
					userSubreddit: a.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return f
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				r = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...o(n)
				}),
				a = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				f = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => r => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				}),
				r = (e, t, n, o) => r => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				})
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return document.body.addEventListener("click", n), () => {
						document.body.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
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
			const l = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				...t
			}) => e ? o.a.createElement("span", d({}, t, {
				className: Object(r.a)(c.a.compactDownvoteWrapper, t.className)
			}), o.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t.isFilled
			})) : o.a.createElement("span", d({}, t, {
				className: Object(r.a)(c.a.downvoteWrapper, t.className)
			}), o.a.createElement(l, {
				isFilled: t.isFilled
			}))
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
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
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
			const l = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				...t
			}) => e ? o.a.createElement("span", d({}, t, {
				className: Object(r.a)(c.a.compactUpvoteWrapper, t.className)
			}), o.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t.isFilled
			})) : o.a.createElement("span", d({}, t, {
				className: Object(r.a)(c.a.upvoteWrapper, t.className)
			}), o.a.createElement(l, {
				isFilled: t.isFilled
			}))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, o.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, o.a.createElement("path", {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), o.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => s.v.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.s
				}),
				i = e => s.Xb.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.Rb
				})
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.nb
				});
				return !(!t || Object(s.qd)(t))
			}
		},
		"./src/reddit/selectors/experiments/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts");
			const o = e => {
				if (!Object(s.qd)(e)) return e || void 0
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeListingKey/index.ts"),
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
					const n = o.Ub.DAY.toUpperCase(),
						s = Object(r.a)(t, o.P.TOP, {
							t: n
						}),
						i = Object(l.B)(e, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const o of i) {
							const t = Object(l.I)(e, {
								postId: o
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
							name: o
						} of n) {
						const t = v(e, {
							subredditName: o
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.c165289993e8e93a6d52.js.map