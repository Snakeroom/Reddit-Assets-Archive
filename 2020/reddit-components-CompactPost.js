// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.924f9511435027d6fe43.js
// Retrieved at 6/4/2020, 7:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-dom/index.js"),
				a = (s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, o) {
					return i(e[o], t[o])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, s = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							s = t[0],
							o = void 0 === s ? "0px" : s,
							r = t[1],
							n = void 0 === r ? o : r,
							i = t[2],
							d = void 0 === i ? o : i,
							c = t[3];
						return o + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(s !== t.root || o !== t.rootMargin || i(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var s = d.get(e);
				if (s)
					for (var o, r = s.values(); o = r.next().value;)
						if (o.target === t.target) return o;
				return null
			}

			function p(e, t) {
				for (var s = 0; s < e.length; s++) {
					var o = l(t, e[s]);
					o && o.handleChange(e[s])
				}
			}

			function m(e) {
				return c(e) || new IntersectionObserver(p, e)
			}
			var u = s("./node_modules/invariant/browser.js"),
				b = s.n(u),
				x = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return x.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							x.errorReporter = e
						}
					}
				});

			function h(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var y = ["root", "rootMargin", "threshold"],
				g = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				_ = O.hasOwnProperty,
				E = O.toString,
				j = function(e) {
					return y.reduce((function(t, s) {
						if (_.call(e, s)) {
							var o = "root" === s && "[object String]" === E.call(e[s]);
							t[s] = o ? document.querySelector(e[s]) : e[s]
						}
						return t
					}), {})
				},
				w = function(e) {
					var t, s;

					function o() {
						for (var t, s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
						return v(h(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(h(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var o = s.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), v(h(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(j(t.props)), t.target = t.targetNode, e = h(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(h(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var s = d.get(e.observer);
									s.delete(e) && (s.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(h(t), e)
						})), v(h(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					s = e, (t = o).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
					var a = o.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = g.some((function(s) {
							return i(t.props[s], e[s])
						}));
						return s && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), s
					}, a.componentDidUpdate = function(e, t, s) {
						var o = !1;
						s || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (s || o) && this.observe()
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
			v(w, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function n() {}
			n.resetWarningCache = r, e.exports = function() {
				function e(e, t, s, r, n, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
					checkPropTypes: n,
					resetWarningCache: r
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function o(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var r, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						p = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !n && !l && /macintosh/i.test(t),
						h = !a && !p && !m && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: y || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: y || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (r.msedge = e, r.version = v) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : p ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, y && (r.version = y)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, y && (r.version = y)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && y && (r.version = y)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : x ? (r.windows = e, r.osname = "Windows") : h && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var E = "";
					r.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var j = !r.windows && E.split(".")[0];
					return g || d || "ipad" == n || a && (3 == j || j >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == n || "ipod" == n || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function n(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = r(e, (function(e) {
							var s = t - o(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, r) {
					var a = s;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([i, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = n, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, r) {
					if (t(e, s, r)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, r) {
				return r(e, (function(e, r, n) {
					s = o ? (o = !1, e) : t(s, e, r, n)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, s)
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				r = s("./node_modules/lodash/_baseForOwn.js"),
				n = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, n(t, 3), r)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? o : a,
					c = arguments.length < 3;
				return d(e, n(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = s.n(o);
			const n = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = n
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(a.a, c({
					className: Object(n.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const m = Object(a.a)(e => {
				var {
					className: t
				} = e, s = p(e, ["className"]);
				return r.a.createElement(i.a, l({}, s, {
					className: Object(n.a)(c.a.horizontalVotes, t),
					scoreClassName: Object(n.a)(c.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
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
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Te
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/postFlair.ts"),
				O = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				k = s("./src/reddit/components/AwardBadges/index.tsx"),
				S = s("./src/reddit/components/CallToActionButton/index.tsx"),
				T = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				N = s("./src/reddit/components/CommentsLink/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				L = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/ExpandoButton/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				F = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				W = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				V = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PopupPortal/index.tsx"),
				G = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Z = s("./src/reddit/components/PostBadges/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				J = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Q = s("./src/reddit/components/PostMedia/index.tsx"),
				q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/components/PostTopMeta/index.tsx"),
				se = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				oe = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				re = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ne = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/contexts/InsideOverlay.tsx"),
				de = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/controls/Checkbox/index.tsx"),
				le = s("./src/reddit/controls/MetaData/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				me = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ue = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				be = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				xe = s("./src/reddit/helpers/postEvent.ts"),
				fe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				he = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ve = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ye = s.n(ve),
				ge = s("./src/reddit/components/CompactPost/index.m.less"),
				Oe = s.n(ge);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Ee = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const je = e => {
					var {
						isCompact: t
					} = e, s = Ee(e, ["isCompact"]);
					return r.a.createElement(A.a, _e({
						className: Object(c.a)(Oe.a.responsiveExpandoButton, {
							[Oe.a.mHideAboveSmallTablets]: !!t,
							[Oe.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				we = Object(n.b)(() => Object(i.c)({
					activeModalId: _.a,
					crosspost: w.d,
					currentUser: P.i,
					flairStyleTemplate: de.R,
					isActive: w.j,
					isExpanded: w.m,
					layout: de.N,
					moderatorPermissions: E.i,
					modModeEnabled: de.P,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: w.O,
					showEditFlair: j.a,
					subredditOrProfile: w.bb,
					userIsOp: P.hb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: r
							} = t;
							return e(Object(g.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const s = t === v.a.upvoted ? Object(y.cb)(r) : Object(y.y)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(y.ab)(r)),
						onOpenReportsDropdown: t => e(Object(O.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: r
						})
					}
				}));
			class Pe extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: n,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						isCheckboxSelected: p = !1,
						isCommentsPage: v,
						isCommentPermalink: y,
						isExpanded: g,
						isOverlay: O,
						isProfilePostListing: _,
						inSubredditOrProfile: E = !1,
						layout: j,
						moderatorPermissions: w,
						modModeEnabled: P,
						onClickPost: A,
						onFlairChanged: Q,
						onIgnoreReports: oe,
						poll: re,
						post: ie,
						subredditOrProfile: de,
						userIsOp: le,
						hideModTools: ve,
						scrollerItemRef: ge,
						showBulkActionCheckbox: _e,
						showEditFlair: Ee,
						toggleCheckbox: je,
						tooltipType: we,
						sendEvent: Pe
					} = this.props, ke = !!ie.media && ie.media.type === f.n.RTJSON, Te = le && ke, Ie = Object(J.b)(ie.id, O), Me = Object(be.a)(w), Le = Object(me.a)(w), Ae = Object(ue.a)(w), Be = "-mod-actions-menu-".concat(ie.id), Re = "voting-arrows-".concat(ie.id), Fe = !!n && Object(h.e)(n) === ie.author, De = Object(z.c)(ie), We = Object(R.a)("View--Reports", ie.id, we), Ve = Object(z.a)(ie), He = !(O || v || y), ze = ie.media && ie.media.type === f.n.LIVEVIDEO, {
						moderationPrompt: Ue
					} = ie, Ke = e => Pe(Object(x.f)(ie.id, e)), Ge = r.a.createElement(X.a, {
						className: Object(c.a)(ye.a.compactPostStyles, Oe.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: O,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ie,
						onClick: A,
						eventFactory: a
					}, r.a.createElement("div", {
						className: Oe.a.compactWrapper
					}, r.a.createElement("div", {
						className: Oe.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: Oe.a.leftRail,
						style: {
							borderColor: Object(Y.c)({
								isRemoved: !!ie.bannedBy,
								isReported: Object(u.a)(ie),
								isSponsored: ie.isSponsored,
								theme: this.props.theme
							})
						}
					}, _e && r.a.createElement(ce.a, {
						className: Oe.a.bulkActionCheckbox,
						isCheckboxSelected: p,
						toggleCheckbox: je
					}), r.a.createElement(ne.a, {
						className: Oe.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: ie,
						onVoteClick: l
					}), r.a.createElement(I.a, {
						className: Oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: ie,
						onVoteClick: l,
						upvoteTooltipId: Re
					}), Ue && r.a.createElement(K.b, {
						rightOf: Re
					}, "survey" === Ue ? r.a.createElement(V.a, {
						post: ie,
						subredditName: de.name,
						isOverlay: !!O
					}) : r.a.createElement(W.a, {
						post: ie,
						subredditName: de.name,
						isOverlay: !!O
					})))), r.a.createElement(G.a, {
						className: Object(c.a)(Oe.a.content, {
							[Oe.a.isEvent]: Object(xe.a)(ie)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(L.a, {
						isCompactMode: !0,
						post: ie
					}), r.a.createElement("div", {
						className: Oe.a.compactPostRow
					}, !ve && Se(ie, o, g, !1), !E && !ie.isSponsored && r.a.createElement(F.h, {
						type: ie.belongsTo.type,
						id: ie.belongsTo.id
					}), r.a.createElement("div", {
						className: Oe.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(ee.c, {
						post: ie,
						poll: re,
						size: ee.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Ne(ie, de), r.a.createElement(te.d, {
						className: Oe.a.postTopMeta,
						flairStyleTemplate: i,
						post: ie,
						showSub: !!de && !E && !ie.isSponsored,
						subredditOrProfile: de
					}), r.a.createElement(Z.a, {
						className: Oe.a.postBadges,
						displayText: de ? de.displayText : null,
						inSubredditOrProfile: E,
						post: ie
					}), de && r.a.createElement(M.a, {
						className: Oe.a.donationAmount,
						contentId: ie.id,
						subredditId: de.id
					}), r.a.createElement(k.a, {
						isOverlay: !!O,
						thing: ie
					})), He && !ze && r.a.createElement("div", null, r.a.createElement(T.a, {
						className: Oe.a.liveDiscussionIcon,
						isMod: Me,
						postId: ie.postId
					})), r.a.createElement("div", {
						className: Oe.a.flatList
					}, r.a.createElement(N.a, {
						className: Oe.a.commentsLink,
						hasModPostPerms: Me,
						isCommentsPage: v,
						isCommentPermalink: y,
						isOverlay: O,
						postId: ie.id,
						modModeEnabled: P,
						numComments: ie.numComments,
						type: m.g.Compact
					}), r.a.createElement(U.a, {
						className: Oe.a.modToolsFlatlist,
						isOverlay: !1,
						layout: j,
						modModeEnabled: P,
						post: ie,
						sendEvent: Pe,
						showIconsOnly: !0
					}), Me && r.a.createElement(D.a, {
						dropdownId: Be,
						onClick: () => Ke("post_mod_action_menu")
					}, r.a.createElement(B.b, null), r.a.createElement(q.a, {
						canEditFlair: Le && Ee,
						hasModPostPerms: Me,
						hasModFullPerms: Ae,
						isOverlay: !1,
						isPostAuthor: Fe,
						modModeEnabled: P,
						post: ie,
						tooltipId: Be
					})), Me && De && !P && r.a.createElement(se.c, {
						text: "".concat(Ve),
						onClick: () => {
							this.props.onOpenReportsDropdown(We), Ke("post_report_menu")
						},
						id: We
					}, r.a.createElement(ae.a, {
						model: ie,
						onIgnoreReports: () => {
							oe(), Ke(ie.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: We
					}), ie.ignoreReports ? r.a.createElement(fe.a, null) : r.a.createElement(he.a, null)), r.a.createElement($.g, {
						currentProfileName: s,
						isCommentsPage: v,
						isOverlay: !1,
						isProfilePostListing: _,
						layout: j,
						permalink: ie.permalink,
						postId: ie.postId,
						sendEvent: Pe,
						showEditPost: Te,
						showEditFlair: Ee,
						dropdownId: "".concat(ie.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object($.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && Se(ie, o, g, !0))), ie.source && ie.source.url && ie.isSponsored && r.a.createElement(C.a, {
						className: Oe.a.adLinkWrapper
					}, r.a.createElement(pe.a, {
						href: ie.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ie.isSponsored,
						postId: ie.id,
						source: ie.source
					}, ie.source.displayText), ie.callToAction && r.a.createElement(S.a, {
						href: ie.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ie.isSponsored,
						postId: ie.id,
						source: ie.source,
						isNotCardView: !0
					}, ie.callToAction)), P && Me && De && r.a.createElement("div", {
						className: Oe.a.compactPostRow
					}, r.a.createElement(H.a, {
						onIgnoreReports: oe,
						reportable: ie
					})), r.a.createElement(F.d, {
						postId: ie.id
					}))), g && r.a.createElement(Ce, {
						post: ie,
						scrollerItemRef: ge,
						flairStyleTemplate: i
					}), e === Ie && r.a.createElement(J.a, {
						flairs: ie.flair,
						subredditId: ie.belongsTo.id,
						modalId: Ie,
						onFlairChanged: Q
					}));
					return r.a.createElement(r.a.Fragment, null, Ge)
				}
			}
			const Ce = e => r.a.createElement(G.a, {
					className: Object(c.a)(e.className, Oe.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: Oe.a.crosspostMediaWrapper
				}, ke(e.post, e.scrollerItemRef)) : ke(e.post, e.scrollerItemRef)),
				ke = (e, t) => r.a.createElement(Q.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				Se = (e, t, s, o) => r.a.createElement(je, {
					crosspost: t,
					isCompact: o,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Te = e => r.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(re.b, {
					className: Oe.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ne = (e, t) => r.a.createElement("div", {
					className: Oe.a.responsiveMeta
				}, r.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(le.c, null), Object(le.d)(e.numComments), r.a.createElement(le.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(le.a, null, t.displayText)), e.isSponsored && [r.a.createElement(oe.a, {
					key: "label"
				}), r.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(le.a, null, " Posted by "), r.a.createElement(te.b, {
					post: e
				}));
			t.default = we(Object(p.c)(Object(ie.b)(Object(l.a)(Pe))))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(y),
				O = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = O.a.div("Container", g.a),
				j = O.a.div("PostMetaWrapper", g.a),
				w = O.a.wrapped(u.c, "PostTitle", g.a),
				P = O.a.div("FlatList", g.a),
				C = O.a.div("FlatItem", g.a),
				k = O.a.span("FlatListDotSpacer", g.a),
				S = O.a.wrapped(E, "LinkContainer", g.a),
				T = O.a.div("Content", g.a),
				N = O.a.div("ThumbnailContainer", g.a),
				I = Object(d.c)({
					isCurrentUserProfilePost: h.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.zb.TOPIC),
					post: h.O,
					shouldOpenPostInNewTab: v.U,
					subreddit: h.bb
				}),
				M = Object(a.b)(I);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: r,
					post: a,
					subreddit: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					c = t;
				return a && !a.media ? n.a.createElement(S, {
					className: c
				}, n.a.createElement(T, null, n.a.createElement(j, null, n.a.createElement(m.a, d)), L(a), a.source && n.a.createElement(b.a, {
					post: a
				}), B(e)), F(e)) : n.a.createElement(E, {
					className: c
				}, n.a.createElement(j, null, n.a.createElement(m.a, d)), L(a), A(e), B(e))
			});
			const L = e => n.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return n.a.createElement("div", null, n.a.createElement(p.a, _({}, o, {
						className: g.a.mediaContainer
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return n.a.createElement(P, null, n.a.createElement(C, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), n.a.createElement(k, null), n.a.createElement(C, null, R(e)))
				},
				R = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return n.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				F = e => n.a.createElement(N, null, n.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				f = s("./src/reddit/icons/fonts/helpers.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(h);
			var y = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(f.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				w = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(k);
			const T = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.z)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(S.a.icon, S.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: o
					});
					if (s.pollData) return n.a.createElement(P.a, {
						className: o
					});
					switch (e) {
						case C.n.GIFVIDEO:
							return n.a.createElement(O.a, {
								className: o
							});
						case C.n.IMAGE:
							return n.a.createElement(j.a, {
								className: o
							});
						case C.n.TEXT:
						case C.n.RTJSON:
							return n.a.createElement(w.a, {
								className: o
							});
						case C.n.VIDEO:
							return n.a.createElement(g.a, {
								className: o
							});
						case C.n.EMBED:
						default:
							return n.a.createElement(_.a, {
								className: o
							})
					}
				};
			t.a = T(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: f
				} = e, h = s || l, v = r && !!s;
				return h.media && !(("rtjson" === h.media.type || "text" === h.media.type) && !Object(m.a)(h)) || !!l.pollData ? n.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? n.a.createElement(b.a, {
					className: S.a.icon
				}) : f ? n.a.createElement(n.a.Fragment, null, N(h.media && h.media.type, v, l), n.a.createElement(x.a, {
					className: Object(d.a)(S.a.icon, S.a.showOnHover)
				})) : n.a.createElement(x.a, {
					className: S.a.icon
				})) : h.source && h.source.url ? n.a.createElement(p.a, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: h.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, n.a.createElement(E.a, {
					className: Object(d.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : n.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(h.permalink),
					rel: "nofollow"
				}, n.a.createElement(y, {
					className: S.a.icon
				}))
			})
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: d,
					redditStyle: m,
					theme: u
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(n.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(n.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(a.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				y = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: g,
					isTopicPage: O,
					post: _,
					shouldShowSubscribeButton: E,
					subredditOrProfile: j,
					tooltipType: w
				} = e, P = !!O;
				return r.a.createElement("div", {
					className: y.a.metaContainer
				}, !o && !_.isSponsored && j && r.a.createElement(i.a, {
					postId: _.id,
					subredditName: j.name
				}, r.a.createElement(m.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && r.a.createElement(p.a, null), !o && !_.isSponsored && j && E && !v && r.a.createElement(u.a, {
					getEventFactory: e => Object(f.f)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(h.f)(j) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: _.id,
					small: !0
				}), !o && !_.isSponsored && r.a.createElement(x.b, null), !o && !_.isSponsored && r.a.createElement(d.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), r.a.createElement(l.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: _,
					tooltipType: w
				}), r.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					post: _,
					tooltipType: w
				}), j && r.a.createElement(a.a, {
					className: y.a.donationAmount,
					contentId: _.id,
					subredditId: j.id
				}), !P && r.a.createElement(n.a, {
					hideCta: s,
					isOverlay: !!g,
					thing: _
				}))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(p);
			const u = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => n.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(o.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(o.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = u(Object(i.a)(b))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(d),
				l = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const p = a.a.span("metaText", c.a),
				m = e => n.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: r
					} = e, a = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const d = Object(i.b)(s),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(s, "number", d)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(s, "number", d)], {
							hk: "gf67v"
						});
					return n.a.createElement(p, a, m)
				},
				b = e => n.a.createElement(p, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const p = {},
				m = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(o.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(n.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, s) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = d
		}
	}
]);
//# sourceMappingURL=reddit-components-CompactPost.924f9511435027d6fe43.js.map