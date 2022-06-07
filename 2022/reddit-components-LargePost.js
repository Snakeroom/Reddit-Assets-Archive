// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.595be675840b4660423b.js
// Retrieved at 6/7/2022, 3:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
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
			var d = new Map;

			function c(e) {
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
							d = void 0 === a ? r : a,
							c = t[3];
						return r + " " + s + " " + d + " " + (void 0 === c ? s : c)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = d.keys(); t = s.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || a(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = d.get(e);
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
				return c(e) || new IntersectionObserver(u, e)
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
				_ = function(e) {
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
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(E(t.props)), t.target = t.targetNode, e = v(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (b.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var n = d.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(v(t), e)
						})), g(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = r.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = x.some((function(n) {
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
			g(_, "displayName", "IntersectionObserver")
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
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						m = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						b = !s && !l && /macintosh/i.test(t),
						v = !i && !u && !p && !m && /linux/i.test(t),
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
					} : c ? o = {
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
					} : i ? o = {
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
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && y && (o.version = y)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && s ? (o[s] = e, o.ios = e, o.osname = "iOS") : b ? (o.mac = e, o.osname = "macOS") : w ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var E = !o.windows && j.split(".")[0];
					return x || d || "ipad" == s || i && (3 == E || E >= 4 && !O) || o.silk ? o.tablet = e : (O || "iphone" == s || "ipod" == s || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return s([a, e[d]]) < 0
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
				var d = i(e) ? r : o;
				return n && a(e, t, n) && (t = void 0), d(e, s(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? r : i,
					c = arguments.length < 3;
				return d(e, s(t, 4), n, c, o)
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

			function d(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
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
					h = d(t),
					b = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (h || !h && !n) && (("body" !== c(t) || m(p)) && (b = (r = t) !== s(r) && d(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), d(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
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
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : d(t) && m(t) ? t : e(b(t))
					}(e),
					r = "body" === c(n),
					o = s(n),
					i = r ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(v(b(i)))
			}

			function g(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return d(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function x(e) {
				for (var t = s(e), n = y(e); n && g(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === c(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = b(e); d(t) && ["html", "body"].indexOf(c(t)) < 0;) {
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
				k = "start",
				I = "end",
				C = "clippingParents",
				S = "viewport",
				T = "popper",
				N = "reference",
				M = P.reduce((function(e, t) {
					return e.concat([t + "-" + k, t + "-" + I])
				}), []),
				A = [].concat(P, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + k, t + "-" + I])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
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
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					s = void 0 === o ? F : o;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var o, i, d = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), s),
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
								p(), d.options = Object.assign(Object.assign(Object.assign({}, s), d.options), n), d.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
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
								}([].concat(r, d.options.modifiers)));
								return d.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), d.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var s = o({
											state: d,
											name: t,
											instance: u,
											options: r
										});
										c.push(s || function() {})
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
											reference: f(t, x(n), "fixed" === d.options.strategy),
											popper: h(n)
										}, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach((function(e) {
											return d.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < d.orderedModifiers.length; r++)
											if (!0 !== d.reset) {
												var o = d.orderedModifiers[r],
													s = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													c = o.name;
												"function" == typeof s && (d = s({
													state: d,
													options: a,
													name: c,
													instance: u
												}) || d)
											} else d.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(d)
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

			function U(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					s = o ? U(o) : null,
					i = o ? H(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					d = n.y + n.height / 2 - r.height / 2;
				switch (s) {
					case O:
						t = {
							x: a,
							y: n.y - r.height
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
							x: n.x - r.width,
							y: d
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var c = s ? V(s) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (i) {
						case k:
							t[c] = Math.floor(t[c]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case I:
							t[c] = Math.floor(t[c]) + Math.ceil(n[l] / 2 - r[l] / 2)
					}
				}
				return t
			}
			var K = {
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
					d = e.gpuAcceleration,
					c = e.adaptive,
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
					h = i.hasOwnProperty("y"),
					b = E,
					v = O,
					g = window;
				if (c) {
					var y = x(n);
					y === s(n) && (y = l(n)), o === O && (v = w, m -= y.clientHeight - r.height, m *= d ? 1 : -1), o === E && (b = j, p -= y.clientWidth - r.width, p *= d ? 1 : -1)
				}
				var _, P = Object.assign({
					position: a
				}, c && K);
				return d ? Object.assign(Object.assign({}, P), {}, ((_ = {})[v] = h ? "0" : "", _[b] = f ? "0" : "", _.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", _)) : Object.assign(Object.assign({}, P), {}, ((t = {})[v] = h ? m + "px" : "", t[b] = f ? p + "px" : "", t.transform = "", t))
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

			function G(e, t) {
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
				return t === S ? Y(function(e) {
					var t = s(e),
						n = l(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						d = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, d = r.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: d
					}
				}(e)) : d(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Y(function(e) {
					var t = l(e),
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						d = -n.scrollTop;
					return "rtl" === p(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: a,
						y: d
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && d(e) ? x(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && G(e, n)
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
					d = void 0 === i ? C : i,
					c = n.rootBoundary,
					u = void 0 === c ? S : c,
					p = n.elementContext,
					m = void 0 === p ? T : p,
					f = n.altBoundary,
					h = void 0 !== f && f,
					b = n.padding,
					v = void 0 === b ? 0 : b,
					g = te("number" != typeof v ? v : ne(v, P)),
					y = m === T ? N : T,
					x = e.elements.reference,
					E = e.rects.popper,
					_ = e.elements[h ? y : m],
					k = ee(a(_) ? _ : _.contextElement || l(e.elements.popper), d, u),
					I = o(x),
					M = q({
						reference: I,
						element: E,
						strategy: "absolute",
						placement: s
					}),
					A = Y(Object.assign(Object.assign({}, E), M)),
					L = m === T ? A : I,
					B = {
						top: k.top - L.top + g.top,
						bottom: L.bottom - k.bottom + g.bottom,
						left: k.left - L.left + g.left,
						right: L.right - k.right + g.right
					},
					F = e.modifiersData.offset;
				if (m === T && F) {
					var R = F[s];
					Object.keys(B).forEach((function(e) {
						var t = [j, w].indexOf(e) >= 0 ? 1 : -1,
							n = [O, w].indexOf(e) >= 0 ? "y" : "x";
						B[e] += R[n] * t
					}))
				}
				return B
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
								r = e.options,
								o = r.scroll,
								i = void 0 === o || o,
								a = r.resize,
								d = void 0 === a || a,
								c = s(t.elements.popper),
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
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								s = n.adaptive,
								i = void 0 === s || s,
								a = {
									placement: U(t.placement),
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
								d(o) && c(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
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
										d(r) && c(r) && (Object.assign(r.style, s), Object.keys(o).forEach((function(e) {
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
										var r = U(e),
											o = [E, O].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * o, [E, j].indexOf(r) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, s), e
								}), {}),
								a = i[t.placement],
								d = a.x,
								c = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i
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
								for (var o = n.mainAxis, s = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, d = n.fallbackPlacements, c = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, h = n.allowedAutoPlacements, b = t.options.placement, v = U(b), g = d || (v === b || !f ? [Z(b)] : function(e) {
										if (U(e) === _) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(b)), y = [b].concat(g).reduce((function(e, n) {
										return e.concat(U(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												d = n.allowedAutoPlacements,
												c = void 0 === d ? A : d,
												l = H(r),
												u = (l ? a ? M : M.filter((function(e) {
													return H(e) === l
												})) : P).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: s,
														padding: i
													})[U(n)], t
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
											allowedAutoPlacements: h
										}) : n)
									}), []), x = t.rects.reference, I = t.rects.popper, C = new Map, S = !0, T = y[0], N = 0; N < y.length; N++) {
									var L = y[N],
										B = U(L),
										F = H(L) === k,
										R = [O, w].indexOf(B) >= 0,
										W = R ? "width" : "height",
										D = re(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: c
										}),
										V = R ? F ? j : E : F ? w : O;
									x[W] > I[W] && (V = Z(V));
									var q = Z(V),
										K = [];
									if (s && K.push(D[B] <= 0), a && K.push(D[V] <= 0, D[q] <= 0), K.every((function(e) {
											return e
										}))) {
										T = L, S = !1;
										break
									}
									C.set(L, K)
								}
								if (S)
									for (var z = function(e) {
											var t = y.find((function(t) {
												var n = C.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, J = f ? 3 : 1; J > 0; J--) {
										if ("break" === z(J)) break
									}
								t.placement !== T && (t.modifiersData[r]._skip = !0, t.placement = T, t.reset = !0)
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
								d = n.boundary,
								c = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								b = void 0 === f ? 0 : f,
								v = re(t, {
									boundary: d,
									rootBoundary: c,
									padding: u,
									altBoundary: l
								}),
								g = U(t.placement),
								y = H(t.placement),
								_ = !y,
								P = V(g),
								I = "x" === P ? "y" : "x",
								C = t.modifiersData.popperOffsets,
								S = t.rects.reference,
								T = t.rects.popper,
								N = "function" == typeof b ? b(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : b,
								M = {
									x: 0,
									y: 0
								};
							if (C) {
								if (s) {
									var A = "y" === P ? O : E,
										L = "y" === P ? w : j,
										B = "y" === P ? "height" : "width",
										F = C[P],
										R = C[P] + v[A],
										W = C[P] - v[L],
										D = m ? -T[B] / 2 : 0,
										q = y === k ? S[B] : T[B],
										K = y === k ? -T[B] : -S[B],
										z = t.elements.arrow,
										J = m && z ? h(z) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Q = Z[A],
										X = Z[L],
										G = oe(0, S[B], J[B]),
										Y = _ ? S[B] / 2 - D - G - Q - N : q - G - Q - N,
										$ = _ ? -S[B] / 2 + D + G + X + N : K + G + X + N,
										ee = t.elements.arrow && x(t.elements.arrow),
										te = ee ? "y" === P ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][P] : 0,
										se = C[P] + Y - ne - te,
										ie = C[P] + $ - ne,
										ae = oe(m ? Math.min(R, se) : R, F, m ? Math.max(W, ie) : W);
									C[P] = ae, M[P] = ae - F
								}
								if (a) {
									var de = "x" === P ? O : E,
										ce = "x" === P ? w : j,
										le = C[I],
										ue = oe(le + v[de], le, le - v[ce]);
									C[I] = ue, M[I] = ue - le
								}
								t.modifiersData[r] = M
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
								i = U(n.placement),
								a = V(i),
								d = [E, j].indexOf(i) >= 0 ? "height" : "width";
							if (o && s) {
								var c = n.modifiersData[r + "#persistent"].padding,
									l = h(o),
									u = "y" === a ? O : E,
									p = "y" === a ? w : j,
									m = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d],
									f = s[a] - n.rects.reference[a],
									b = x(o),
									v = b ? "y" === a ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
									g = m / 2 - f / 2,
									y = c[u],
									_ = v - l[d] - c[p],
									P = v / 2 - l[d] / 2 + g,
									k = oe(y, P, _),
									I = a;
								n.modifiersData[r] = ((t = {})[I] = k, t.centerOffset = k - P, t)
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
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && G(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[r + "#persistent"] = {
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
								r = t.rects.reference,
								o = t.rects.popper,
								s = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								d = se(i, r),
								c = se(a, o, s),
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
						d = i[1],
						c = r.useMemo((function() {
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
						l = r.useMemo((function() {
							var e = {
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, c]),
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
							var a, d, c, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (!e(t[d], i[d])) return !1;
								return !0
							}
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!e(d.value[1], i.get(d.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				i = Object(r.a)(o),
				a = Object(r.a)(s)
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
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, a) => {
					let {
						routes: d
					} = a;
					const c = i();
					Object(r.a)(e, d, c) ? n(Object(s.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
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
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: c.a.leftSideContent
				}, u && !o && s.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), s.a.createElement(a.a, {
					href: d.url.replace(r.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && s.a.createElement(i.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
				return o.a.createElement(i.b, c({
					className: Object(s.a)(d.a.CallToActionButton, t, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: n,
					subredditId: r
				} = e, d = Object(s.e)(e => e.subreddits.questions), c = Object(s.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, s = -999; o <= l; o += 1) {
					const e = n[o],
						t = c[e].belongsTo.id;
					m(e) && o - s >= a && !u.has(t) && (s = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: r,
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(r.a)({
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
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
				return b
			}));
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				let {
					post: t
				} = e;
				const n = t.predictionTournament,
					o = n.status === d.a.Live,
					l = n.status === d.a.Closed,
					u = Object(i.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return s.a.createElement("div", {
					className: f.a.container
				}, s.a.createElement("div", {
					className: f.a.label
				}, s.a.createElement("span", null, null == u ? void 0 : u.displayText), o && s.a.createElement("span", {
					className: Object(r.a)(f.a.badge, f.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && s.a.createElement("span", {
					className: Object(r.a)(f.a.badge, f.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== n.totalParticipantsCount && s.a.createElement(p, {
					participantsCount: n.totalParticipantsCount
				}), s.a.createElement(a.a, {
					className: f.a.awards,
					thing: t
				})), s.a.createElement("h3", {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
					post: r
				} = e;
				if (!Object(u.a)(r)) return null;
				const a = r && r.eventInfo,
					p = Object(l.a)(r),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(s.a)(m.a.container, t, {
						[m.a.isCompact]: !!n
					})
				}, o.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: r
				}), !p && h && o.a.createElement(c.a, {
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
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(c);
			var u = e => o.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
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
						eventIsLive: a,
						eventStart: d
					} = n, c = Object(s.e)(d, r);
					let l, u;
					if (this.state.mounted || c === s.a.Live) l = o.a.createElement(m.c, {
						startTime: d,
						endTime: r,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(j, {
							className: e
						})
					}
					if (a) u = o.a.createElement(y, null, o.a.createElement(w, null), l);
					else if (c === s.a.Future) u = o.a.createElement(v, null, o.a.createElement(O, null), l);
					else {
						if (c !== s.a.Past) return null;
						u = o.a.createElement(g, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(x, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/components/Econ/Audio/async.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				b = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				v = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				w = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				_ = n("./src/reddit/selectors/moderatorPermissions.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				I = n("./src/lib/ads/index.ts"),
				C = n("./src/lib/classNames/index.ts"),
				S = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				T = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = n("./src/reddit/components/AwardBadges/index.tsx"),
				M = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				A = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = n("./src/reddit/components/CreatorStats/loader.tsx"),
				B = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				H = n("./src/reddit/components/ModModeReports/helpers.ts"),
				V = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				q = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				K = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				J = n("./src/reddit/components/PostMedia/index.tsx"),
				Z = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				X = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				G = n.n(X);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = () => o.a.createElement("div", {
					className: G.a.container
				}, o.a.createElement(Q.a, {
					className: G.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: G.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ee = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				te = n("./src/reddit/components/PostTitle/index.tsx"),
				ne = n("./src/reddit/components/PostTopLine/index.tsx"),
				re = n("./src/reddit/components/SourceLink/index.tsx"),
				oe = n("./src/reddit/constants/postLayout.ts"),
				se = n("./src/reddit/contexts/InsideOverlay.tsx"),
				ie = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = n("./src/reddit/contexts/Post/index.tsx"),
				de = n("./src/reddit/helpers/isCrosspost.ts"),
				ce = n("./src/reddit/helpers/localStorage/index.ts"),
				le = n("./src/reddit/helpers/postEvent.ts"),
				ue = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				pe = n("./src/reddit/models/Audio/index.ts"),
				me = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				fe = n("./src/reddit/constants/experiments.ts"),
				he = n("./src/reddit/helpers/chooseVariant/index.ts"),
				be = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const ve = Object(a.a)(P.N, e => e.some(be.c)),
				ge = Object(a.a)(ve, e => e),
				ye = (e, t) => Object(he.c)(e, {
					experimentName: fe.Fc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && ge(e, {
							listingKey: n
						})
					}
				});
			var xe = n("./src/reddit/selectors/postFlair.ts"),
				Oe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				we = n("./src/reddit/components/PostTopMeta/index.tsx"),
				je = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ee = n.n(je),
				_e = n("./src/reddit/selectors/i18n/index.ts"),
				Pe = n("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				ke = n("./src/reddit/components/LargePost/index.m.less"),
				Ie = n.n(ke);
			const Ce = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(P.N)(e, {
						listingKey: n
					}) : void 0
				},
				Se = Object(s.b)(() => Object(a.c)({
					autoplayPref: k.b,
					activeModalId: j.a,
					hideNSFWPref: k.F,
					flairStyleTemplate: ie.W,
					isBlurredPreview: me.b,
					isCurrentUserProfilePost: P.l,
					isLoggedIn: k.Q,
					isActive: P.j,
					showPromotedCTA: Oe.a,
					moderatorPermissions: _.m,
					modModeEnabled: ie.U,
					posts: Ce,
					postHeightVariant: ye,
					shouldShowNsfwListingBelow: _e.b,
					showEditFlair: xe.a,
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
							const r = t === w.a.upvoted ? Object(p.kb)(n) : Object(p.w)(n);
							e(r)
						},
						onIgnoreReports: () => e(Object(p.gb)(n)),
						onOpenReportsDropdown: t => e(Object(m.h)({
							tooltipId: t
						}))
					}
				}),
				Te = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: s,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: m,
						forceLoadMedia: w,
						hideNSFWPref: j,
						hostPostData: E,
						imageGalleryCurrentItem: _,
						inSubredditOrProfile: P = !1,
						isBlurredPreview: k,
						isCommentsPage: Q,
						isCurrentUserProfilePost: X,
						isFrontpage: G,
						isGalleryTileLayoutDefault: Y,
						isModWithUserNotesPermissions: se,
						isLoggedIn: ie,
						isOverlay: ae,
						isTopicPage: me,
						isCommentCountAnimationEnabled: he,
						isVoteCountAnimationEnabled: be,
						isCountAnimShadowTestEnabled: ve,
						listingIndex: ge,
						listingKey: ye,
						moderatorPermissions: xe,
						modModeEnabled: Oe,
						onClickPost: je,
						onIgnoreReports: _e,
						onOpenReportsDropdown: Pe,
						post: ke,
						postHeightVariant: Ce,
						scrollerItemRef: Se,
						shouldShowGalleryTileOption: Te,
						shouldShowInsightsButton: Ne,
						shouldShowNsfwListingBelow: Me,
						showAwardsPlaque: Ae,
						showEditFlair: Le,
						showPromotedCTA: Be,
						subredditOrProfile: Fe,
						userIsOp: Re,
						postId: We,
						postIds: De,
						onceInViewport: Ue,
						isAdblockAAMitigationEnabled: He
					} = e, Ve = Object(y.a)(), qe = !!e.redditStyle || !!e["data-redditstyle"], Ke = qe ? void 0 : m, ze = Object(l.a)(xe), Je = Oe && ze, Ze = Object(d.a)(xe), Qe = Object(c.a)(xe), Xe = Object(H.c)(ke), Ge = Object(D.a)(ke), Ye = !!ke.media && ke.media.type === x.o.RTJSON, $e = Re && Ye, et = n ? n - z.a : void 0, tt = !!ke.recommendationContext, nt = !(G && ie || me) || tt && ie, rt = (e => e === fe.Ke.OnlyTitles)(Ce) && !Object(de.a)(ke), ot = (e => e === fe.Ke.MediumHeight)(Ce) && !Object(de.a)(ke), st = (e => {
						var t;
						const {
							post: n,
							postIds: r,
							posts: o
						} = e;
						if (!Object(O.s)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const s = r && 0 === r.indexOf(n.id),
							i = r && 1 === r.indexOf(n.id),
							a = o && o[1] && Object(O.s)(o[1]);
						return {
							hasTopCompactPostStyles: s && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: s
						}
					})(e), it = !!(null == E ? void 0 : E.shouldShowLinkedPosts), at = (!P || it || Me) && !ke.isSponsored, dt = Object(I.t)(ke, _), {
						source: ct
					} = dt, lt = Object(r.useRef)(null), ut = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ue || Ue(ge))
						})
					}, [Ue, ge]);
					Object(g.a)(lt, ut);
					const [pt, mt] = Object(r.useState)(!1), ft = Object(r.useCallback)(() => {
						mt(!pt), Object(ce.Kb)(), Ve(Object(ue.d)(We))
					}, [pt, Ve, We]), ht = ke.isSponsored && !(ke.media && x.a.has(ke.media.type)) && !He, bt = !!(k && (null == Fe ? void 0 : Fe.isNSFW));
					return o.a.createElement(v.b, null, o.a.createElement(K.a, {
						className: Object(C.a)(Ie.a.container, s, Ee.a.largeAndMediumPostStyles, Ee.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[Ee.a.mUseRedditTheme]: qe,
							promotedvideolink: ht,
							[Ie.a.topCompactPost]: st && st.hasTopCompactPostStyles,
							[Ie.a.bottomCompactPost]: st && st.hasBottomCompactPostStyles,
							[Ie.a.shouldShowOverflow]: Ne
						}),
						isOverlay: ae,
						style: Object(u.b)(e.flairStyleTemplate),
						post: ke,
						onClick: je,
						eventFactory: p
					}, o.a.createElement("div", {
						ref: lt
					}), o.a.createElement(ee.a, {
						model: ke,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ve,
						isVoteCountAnimation: be,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ke,
						redditStyle: qe,
						postId: We
					}), o.a.createElement(q.a, {
						className: Object(C.a)(Ie.a.backgroundWrapper, {
							[Ie.a.isEvent]: Object(le.a)(ke),
							[Ie.a.shouldUseRoundedBorder]: Ne
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ke,
						post: ke,
						redditStyle: qe
					}, o.a.createElement(B.a, {
						post: ke
					}), st && st.showPinnnedHeader && o.a.createElement($, null), Object(i.c)(ke) && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.a, {
						post: ke
					}), o.a.createElement(h.a, {
						post: ke
					})), !Object(i.c)(ke) && o.a.createElement(o.a.Fragment, null, !!ke.recommendationContext && o.a.createElement(V.a, {
						content: ke.recommendationContext.content,
						layout: oe.g.Large,
						post: ke
					}), o.a.createElement(ne.a, {
						className: Ie.a.postTopLine,
						hideAwards: Ae,
						hideNSFWPref: j,
						hostPostData: E,
						iconClassName: Ie.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!Q,
						isCompactPinnedPost: !!st,
						isCurrentUserProfilePost: X,
						isModWithUserNotesPermissions: se,
						isOverlay: !!ae,
						isTopicPage: !!me,
						listingKey: ye,
						post: ke,
						shouldShowSubscribeButton: nt,
						showSubreddit: at,
						showSubredditIcon: !0,
						subredditOrProfile: Fe
					}), o.a.createElement(te.c, {
						className: Ie.a.postTitle,
						post: ke,
						redditStyle: qe,
						size: te.b.Large,
						titleColor: Ke && Ke.postTitleColor,
						isOverlay: ae
					}), ke.source && !ke.isSponsored && !(ke.media && Object(x.H)(ke.media)) && !bt && o.a.createElement(re.a, {
						className: Ie.a.sourceLink,
						post: ke
					})), o.a.createElement("div", {
						className: Ie.a.postMediaWrapper
					}, !st && o.a.createElement(J.a, {
						isGalleryTileLayoutDefault: Y,
						isListing: !0,
						isMediumHeight: ot,
						isNotCardView: !!ae,
						isTitleOnly: rt,
						showCentered: !0,
						flairStyleTemplate: Ke,
						post: ke,
						availableWidth: et,
						shouldLoad: w,
						scrollerItemRef: Se,
						autoplayPref: t,
						shouldShowGalleryTileOption: Te,
						showPromotedCTA: Be
					})), Be && ct && ct.url && !ke.isSurveyAd && o.a.createElement(S.a, {
						className: Ie.a.adLinkWrapper
					}, o.a.createElement(T.a, {
						post: ke,
						adLinkContent: dt
					})), Oe && ze && Ge && o.a.createElement("div", {
						className: Ie.a.modModeBannerWrapper
					}, o.a.createElement(W.a, {
						thing: ke
					})), Oe && ze && Xe && o.a.createElement("div", {
						className: Ie.a.modModeBannerWrapper
					}, o.a.createElement(U.a, {
						onIgnoreReports: _e,
						reportable: ke
					})), Object(pe.b)(ke) && o.a.createElement(f.a, {
						post: ke
					}), o.a.createElement(R.d, null), Ae && o.a.createElement(N.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: ke,
						tooltipType: ae ? we.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: Ie.a.flatListContainer
					}, o.a.createElement(A.a, {
						className: Ie.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ke,
						model: ke,
						onVoteClick: e.handleVote
					}), !ke.isSurveyAd && o.a.createElement(F.c, {
						currentUser: a,
						hasModFlairPerms: Ze,
						hasModFullPerms: Qe,
						hasModPostPerms: ze,
						hostPostData: E,
						isCommentCountAnimation: he,
						isCountAnimShadowTestEnabled: ve,
						isLargePost: !0,
						isOverlay: !!ae,
						listingKey: ye,
						modModeEnabled: Oe,
						onClickInsightsButton: ft,
						onIgnoreReports: _e,
						onOpenReportsDropdown: Pe,
						post: ke,
						shouldShowInsightsButton: Ne,
						showEditPost: $e,
						showEditFlair: Le,
						useFlatlistBreakpoints: Object(Z.b)({
							editPost: !1,
							save: !Je,
							hide: !1,
							report: !1
						})
					})), Fe && pt && o.a.createElement(L.a, {
						className: Ie.a.creatorStatsContainer,
						post: ke,
						subreddit: Fe,
						isOwnProfileStats: !0
					})), G && o.a.createElement(M.a, {
						post: ke,
						postIds: null != De ? De : [],
						subredditId: null == Fe ? void 0 : Fe.id
					})))
				});
			Te.displayName = "LargePostMemoized";
			t.default = Object(ae.b)(Se(Object(se.b)(Te)))
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
				i = n.n(s),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading filter reason…", null, {
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading reports…", null, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: r,
						hasTooltip: c,
						tooltipText: u,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(s.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: r
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), c && o.a.createElement(i.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
					post: r
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : o.a.createElement(a.a, {
					className: Object(s.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === d.g.Classic,
						[u.a.compactLayout]: n === d.g.Compact,
						[u.a.largeLayout]: n === d.g.Large
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
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = n.n(d);

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
					post: d,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(s.a)(c.a.backgroundWrapper, n),
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
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						s = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, s, i), o.a.createElement("div", {
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
						makePostContainerId: c,
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
								} = Object(i.t)(l, s);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(O.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": j,
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, n), w = !!l.media && l.media.type === f.o.VIDEO;
					return (e => l.media && Object(f.E)(l.media) && y ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || w ? o.a.createElement(a.a, {
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
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
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: b
				}, r && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(a.a, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/OutboundLink/index.tsx"),
				y = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = n("./src/reddit/models/Media/index.ts"),
				w = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/PostTopLine/index.m.less"),
				_ = n.n(E);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: o,
					hideAwards: E,
					hideNSFWPref: P,
					hostPostData: k,
					iconClassName: I,
					inSubredditOrProfile: C,
					isCommentsPage: S,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: M,
					isOverlay: A,
					isTopicPage: L,
					listingKey: B,
					post: F,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: W,
					showSubreddit: D,
					showSubredditIcon: U,
					subredditOrProfile: H,
					isFollowed: V,
					shouldShowFollowButton: q,
					onFollowPostClick: K
				} = e;
				const z = E || L,
					J = H && Object(w.i)(H),
					Z = Object(i.e)(e => {
						if (!J) return !0;
						const t = Object(j.Gb)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return s.a.createElement("div", {
					className: Object(a.a)(_.a.container, t)
				}, D && H && s.a.createElement("div", {
					className: _.a.subredditIconWrapper
				}, s.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: H.url
				}, U && s.a.createElement(m.b, {
					className: Object(a.a)(_.a.subredditIcon, I),
					shouldHideNsfwIcon: P,
					subredditOrProfile: H
				}))), s.a.createElement("div", {
					className: _.a.everythingElseWrapper
				}, D && s.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), s.a.createElement(p.d, {
					className: _.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: n,
					isModWithUserNotesPermissions: M,
					tooltipType: A ? p.c.Lightbox : void 0,
					post: F,
					showSub: D,
					subredditOrProfile: H
				}), s.a.createElement(u.a, {
					className: _.a.postBadges,
					displayText: H ? H.displayText : null,
					inSubredditOrProfile: C,
					isCompactPinnedPost: T,
					post: F,
					tooltipType: A ? p.c.Lightbox : void 0
				}), !z && s.a.createElement(d.a, {
					isPostDetail: S,
					thing: F,
					tooltipType: A ? p.c.Lightbox : void 0
				})), H && Z && D && R && !N && s.a.createElement(h.a, {
					className: _.a.SubscribeButton,
					getEventFactory: e => Object(y.k)(F.id, e ? "unsubscribe" : "subscribe", "post", B, k),
					identifier: {
						name: H.name,
						type: J ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: F.id,
					size: v.d.XS
				}), W && s.a.createElement(g.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(O.D)(F),
					source: F.source
				}, s.a.createElement(x.a, {
					className: _.a.outboundLinkIcon
				})), q && Z && s.a.createElement(l.a, {
					isFilled: !!V,
					onClick: K,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
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
				f = e => Object(r.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				b = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(s.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
			var r = n("./src/reddit/components/CreatorStats/helpers.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => {
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
				a = (e, t) => n => ({
					...Object(s.n)(n),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(s.gb)(n),
					post: Object(s.H)(n, e),
					userSubreddit: Object(s.qb)(n),
					actionInfo: Object(s.d)(n, {
						reason: i(t)
					})
				}),
				d = (e, t) => n => ({
					...Object(s.n)(n),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(s.H)(n, t),
					subreddit: Object(s.gb)(n),
					userSubreddit: Object(s.qb)(n)
				}),
				c = e => {
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
						reason: c(t)
					}),
					post: Object(s.H)(r, e, void 0, n)
				}),
				p = (e, t, n, r, i, a) => d => ({
					...Object(s.n)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(s.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(s.H)(d, e, void 0, a),
					subreddit: Object(s.gb)(d),
					outbound: {
						postId: n,
						url: t,
						subredditId: r,
						subredditName: i
					}
				}),
				m = (e, t, n) => r => ({
					...Object(s.n)(r),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(s.d)(r, {
						pageType: "post_stats",
						reason: c(t)
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
				i = n("./src/reddit/models/SubredditModeration/index.ts");
			const a = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(i.e)(n, r);
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
							} = t.payload, o = Object(i.e)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				c = Object(r.c)({
					error: s,
					pending: d
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
						} = t.payload, o = Object(i.e)(r, n);
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
					api: c,
					fetchedTokens: u,
					loadMore: m,
					models: b,
					search: O,
					userOrder: j
				});
			var _ = function() {
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
			const P = {};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, o = Object(i.f)(n, r);
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
							} = t.payload, o = Object(i.f)(n, r);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				I = Object(r.c)({
					error: _,
					pending: k
				});
			const C = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, o = Object(i.f)(r, n);
						return {
							...e,
							[o]: !0
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
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
			const M = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
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
					api: I,
					fetchedTokens: S,
					loadMore: N,
					models: A
				}),
				B = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.g:
					case B.i:
						return null;
					case B.f:
						return t.payload;
					default:
						return e
				}
			};
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.i:
							return !0;
						case B.g:
						case B.f:
							return !1;
						default:
							return e
					}
				},
				W = Object(r.c)({
					error: F,
					pending: R
				}),
				D = n("./node_modules/lodash/merge.js"),
				U = n.n(D),
				H = n("./node_modules/lodash/omit.js"),
				V = n.n(H);
			const q = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.g:
					case B.k: {
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
					case B.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, o = V()(e[n], r);
						return {
							...e,
							[n]: o
						}
					}
					case B.a:
					case B.b:
					case B.h:
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
			const z = {};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.g: {
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
			var Z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.l:
					case B.k:
						return null;
					case B.j:
						return t.payload;
					default:
						return e
				}
			};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.l:
							return !0;
						case B.k:
						case B.j:
							return !1;
						default:
							return e
					}
				},
				X = Object(r.c)({
					error: Z,
					pending: Q
				});
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case B.c: {
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
					api: X,
					result: G
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case B.a: {
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
						case B.c: {
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
					api: W,
					models: K,
					pageInfo: J,
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
			var ie = function() {
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
				ae = Object(r.c)({
					itemOrder: oe,
					models: ie
				});
			var de = function() {
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
			const ce = {};
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
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
					actions: ae,
					endCursor: de,
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
			var _e = function() {
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
				Pe = Object(r.c)({
					data: _e,
					api: je
				});
			var ke = function() {
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
			var Ie = function() {
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
				Ce = Object(r.c)({
					error: ke,
					pending: Ie
				});
			const Se = {};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
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
			var Me = function() {
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
					api: Ce,
					models: Te,
					userOrder: Me
				});
			const Le = {};
			var Be = function() {
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
			const Fe = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
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
			const We = {};
			var De = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
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
			var He = function() {
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
			var Ve = function() {
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
				Ke = Object(r.c)({
					error: Ve,
					pending: qe
				}),
				ze = n("./node_modules/lodash/isEqual.js"),
				Je = n.n(ze);
			var Ze = function() {
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
							return e && e.id === n && !Je()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Qe = Object(r.c)({
					api: Ke,
					result: Ze
				});
			const Xe = {};
			var Ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
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
					error: Ge,
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
					editableUserOrder: Pe,
					invitedModerators: Ae,
					invitePending: Be,
					loadMoreModerators: De,
					loadMoreEditableModerators: Re,
					models: He,
					search: Qe,
					userOrder: rt
				}),
				st = n("./src/reddit/actions/bulkActions/constants.ts");
			var it = function() {
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
				at = n("./src/reddit/actions/modQueue/constants.ts");
			var dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case st.c:
							return !0;
						case st.b:
						case st.a:
						case at.s:
						case at.r:
							return !1;
						default:
							return e
					}
				},
				ct = Object(r.c)({
					error: it,
					pending: dt
				});
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case at.d: {
							const {
								ids: n
							} = t.payload;
							return V()(e, n)
						}
						case at.c: {
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
					api: ct,
					selectedItems: ut,
					undoLastAction: ft
				});
			var bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.g:
					case at.f:
						return null;
					case at.e:
						return t.payload;
					default:
						return e
				}
			};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.g:
							return !0;
						case at.f:
						case at.e:
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
					case at.f: {
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
						case at.f: {
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
			var _t = function() {
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
					case at.i:
					case at.f:
					case at.m:
					case at.p:
					case at.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case at.k: {
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
			const Pt = [];
			var kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.i:
					case at.f:
					case at.m:
					case at.p:
					case at.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case at.k: {
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
			var It = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.b:
						return !0;
					default:
						return e
				}
			};
			var Ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.k:
							return !0;
						case at.b:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					after: _t,
					data: kt,
					loaded: It,
					pending: Ct
				});
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.j:
					case at.i:
						return null;
					case at.h:
						return t.payload;
					default:
						return e
				}
			};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.j:
							return !0;
						case at.i:
						case at.h:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(r.c)({
					error: Tt,
					pending: Nt
				});
			const At = {};
			var Lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.i: {
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
			const Bt = {};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.i: {
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
				Rt = Object(r.c)({
					api: Mt,
					itemOrder: Lt,
					loadMore: Ft
				});
			var Wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.n:
					case at.m:
						return null;
					case at.l:
						return t.payload;
					default:
						return e
				}
			};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.n:
							return !0;
						case at.m:
						case at.l:
							return !1;
						default:
							return e
					}
				},
				Ut = Object(r.c)({
					error: Wt,
					pending: Dt
				});
			const Ht = {};
			var Vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ht,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.m: {
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
			var Kt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.m: {
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
				zt = Object(r.c)({
					api: Ut,
					itemOrder: Vt,
					loadMore: Kt
				});
			var Jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.q:
					case at.p:
						return null;
					case at.o:
						return t.payload;
					default:
						return e
				}
			};
			var Zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.q:
							return !0;
						case at.p:
						case at.o:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(r.c)({
					error: Jt,
					pending: Zt
				});
			const Xt = {};
			var Gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.p: {
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
						case at.p: {
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
					api: Qt,
					itemOrder: Gt,
					loadMore: $t
				});
			var tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case at.w:
					case at.v:
						return null;
					case at.u:
						return t.payload;
					default:
						return e
				}
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.w:
							return !0;
						case at.v:
						case at.u:
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
					case at.v: {
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
			var dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : an,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.v: {
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
				cn = Object(r.c)({
					api: rn,
					itemOrder: sn,
					loadMore: dn
				}),
				ln = Object(r.c)({
					bulkAction: ht,
					edited: jt,
					moderatedCommunitiesOrder: St,
					modqueue: Rt,
					reports: zt,
					spam: en,
					unmoderated: cn
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
							} = t.payload, o = Object(i.e)(n, r);
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
							} = t.payload, o = Object(i.e)(n, r);
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
							} = t.payload, o = Object(i.e)(r, n);
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
				_n = Object(r.c)({
					error: jn,
					pending: En
				});
			var Pn = function() {
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
				kn = Object(r.c)({
					api: _n,
					result: Pn
				});
			const In = {};
			var Cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In,
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
				Sn = Object(r.c)({
					api: fn,
					fetchedTokens: bn,
					inContext: gn,
					loadMore: xn,
					models: wn,
					search: kn,
					userOrder: Cn
				});
			t.a = Object(r.c)({
				approvedSubmitters: E,
				approvedTalkHosts: L,
				flairedUsers: te,
				moderationLog: be,
				moderators: ot,
				modQueue: ln,
				muted: Sn
			})
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.Pc
				});
				return !(!t || Object(r.Qf)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Qf)(t)
				},
				d = Object(r.a)(a, s.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(s.c)(e, {
					experimentName: o.He,
					experimentEligibilitySelector: s.a
				}),
				d = (e, t) => t === o.Pe.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(r.a)(i.G, a, (e, t) => d(e, t));
			Object(r.a)((e, t) => t, a, (e, t) => d(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.595be675840b4660423b.js.map