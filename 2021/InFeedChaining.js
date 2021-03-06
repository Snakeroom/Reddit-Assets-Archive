// https://www.redditstatic.com/desktop2x/InFeedChaining.6936603488e996fce48e.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InFeedChaining"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var r, i = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						l = /CrOS/.test(t),
						d = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						f = !i && !d && /macintosh/i.test(t),
						v = !o && !u && !m && !p && /linux/i.test(t),
						x = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !g && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
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
					} : h ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (r.msedge = e, r.version = x) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? r = {
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : d ? r = {
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
					} : p ? (r = {
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
					} : o ? r = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, y && (r.version = y)) : i ? (r = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, y && (r.version = y)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && y && (r.version = y)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !o && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : w ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : v && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var C = "";
					r.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (r.osversion = C);
					var j = !r.windows && C.split(".")[0];
					return g || c || "ipad" == i || o && (3 == j || j >= 4 && !_) || r.silk ? r.tablet = e : (_ || "iphone" == i || "ipod" == i || o || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function i(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = r(e, (function(e) {
							var s = t - n(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, n, r) {
					var o = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (o = t(r));
					var a = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return i([a, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = i, s.check = function(e, t, s) {
					return !o(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, i) {
					s = n ? (n = !1, e) : t(s, e, r, i)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), n(r(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				i = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : o,
					l = arguments.length < 3;
				return c(e, i(t, 4), s, l, r)
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}();

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(s("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(s("./node_modules/react-motion/lib/stripStyle.js")),
				c = i(s("./node_modules/react-motion/lib/stepper.js")),
				l = i(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = i(s("./node_modules/raf/index.js")),
				u = i(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = i(s("./node_modules/react/index.js")),
				p = i(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				h = 1e3 / 60,
				b = function(e) {
					function t(s) {
						var r = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, s), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								s = r.state,
								i = s.currentStyle,
								o = s.currentVelocity,
								a = s.lastIdealStyle,
								c = s.lastIdealVelocity;
							for (var l in e)
								if (Object.prototype.hasOwnProperty.call(e, l)) {
									var d = e[l];
									"number" == typeof d && (t || (t = !0, i = n({}, i), o = n({}, o), a = n({}, a), c = n({}, c)), i[l] = d, o[l] = 0, a[l] = d, c[l] = 0)
								} t && r.setState({
								currentStyle: i,
								currentVelocity: o,
								lastIdealStyle: a,
								lastIdealVelocity: c
							})
						}, this.startAnimationIfNecessary = function() {
							r.animationID = d.default((function(e) {
								var t = r.props.style;
								if (u.default(r.state.currentStyle, t, r.state.currentVelocity)) return r.wasAnimating && r.props.onRest && r.props.onRest(), r.animationID = null, r.wasAnimating = !1, void(r.accumulatedTime = 0);
								r.wasAnimating = !0;
								var s = e || l.default(),
									n = s - r.prevTime;
								if (r.prevTime = s, r.accumulatedTime = r.accumulatedTime + n, r.accumulatedTime > 10 * h && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								var i = (r.accumulatedTime - Math.floor(r.accumulatedTime / h) * h) / h,
									o = Math.floor(r.accumulatedTime / h),
									a = {},
									d = {},
									m = {},
									p = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var f = t[b];
										if ("number" == typeof f) m[b] = f, p[b] = 0, a[b] = f, d[b] = 0;
										else {
											for (var v = r.state.lastIdealStyle[b], x = r.state.lastIdealVelocity[b], y = 0; y < o; y++) {
												var g = c.default(h / 1e3, v, x, f.val, f.stiffness, f.damping, f.precision);
												v = g[0], x = g[1]
											}
											var _ = c.default(h / 1e3, v, x, f.val, f.stiffness, f.damping, f.precision),
												w = _[0],
												C = _[1];
											m[b] = v + (w - v) * i, p[b] = x + (C - x) * i, a[b] = v, d[b] = x
										}
									} r.animationID = null, r.accumulatedTime -= o * h, r.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: a,
									lastIdealVelocity: d
								}), r.unreadPropStyle = null, r.startAnimationIfNecessary()
							}))
						}, this.state = this.defaultState()
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), r(t, null, [{
						key: "propTypes",
						value: {
							defaultStyle: p.default.objectOf(p.default.number),
							style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired,
							children: p.default.func.isRequired,
							onRest: p.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							s = e.style,
							n = t || a.default(s),
							r = o.default(n);
						return {
							currentStyle: n,
							currentVelocity: r,
							lastIdealStyle: n,
							lastIdealVelocity: r
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = l.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && m.default.Children.only(e)
					}, t
				}(m.default.Component);
			t.default = b, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}();

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(s("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(s("./node_modules/react-motion/lib/stripStyle.js")),
				c = i(s("./node_modules/react-motion/lib/stepper.js")),
				l = i(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = i(s("./node_modules/raf/index.js")),
				u = i(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = i(s("./node_modules/react/index.js")),
				p = i(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				h = 1e3 / 60;
			var b = function(e) {
				function t(s) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = r.state, s = t.currentStyles, i = t.currentVelocities, o = t.lastIdealStyles, a = t.lastIdealVelocities, c = !1, l = 0; l < e.length; l++) {
							var d = e[l],
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, c = !0, s[l] = n({}, s[l]), i[l] = n({}, i[l]), o[l] = n({}, o[l]), a[l] = n({}, a[l])), s[l][m] = p, i[l][m] = 0, o[l][m] = p, a[l][m] = 0)
								}
						}
						c && r.setState({
							currentStyles: s,
							currentVelocities: i,
							lastIdealStyles: o,
							lastIdealVelocities: a
						})
					}, this.startAnimationIfNecessary = function() {
						r.animationID = d.default((function(e) {
							var t = r.props.styles(r.state.lastIdealStyles);
							if (function(e, t, s) {
									for (var n = 0; n < e.length; n++)
										if (!u.default(e[n], t[n], s[n])) return !1;
									return !0
								}(r.state.currentStyles, t, r.state.currentVelocities)) return r.animationID = null, void(r.accumulatedTime = 0);
							var s = e || l.default(),
								n = s - r.prevTime;
							if (r.prevTime = s, r.accumulatedTime = r.accumulatedTime + n, r.accumulatedTime > 10 * h && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
							for (var i = (r.accumulatedTime - Math.floor(r.accumulatedTime / h) * h) / h, o = Math.floor(r.accumulatedTime / h), a = [], d = [], m = [], p = [], b = 0; b < t.length; b++) {
								var f = t[b],
									v = {},
									x = {},
									y = {},
									g = {};
								for (var _ in f)
									if (Object.prototype.hasOwnProperty.call(f, _)) {
										var w = f[_];
										if ("number" == typeof w) v[_] = w, x[_] = 0, y[_] = w, g[_] = 0;
										else {
											for (var C = r.state.lastIdealStyles[b][_], j = r.state.lastIdealVelocities[b][_], O = 0; O < o; O++) {
												var E = c.default(h / 1e3, C, j, w.val, w.stiffness, w.damping, w.precision);
												C = E[0], j = E[1]
											}
											var S = c.default(h / 1e3, C, j, w.val, w.stiffness, w.damping, w.precision),
												P = S[0],
												I = S[1];
											v[_] = C + (P - C) * i, x[_] = j + (I - j) * i, y[_] = C, g[_] = j
										}
									} m[b] = v, p[b] = x, a[b] = y, d[b] = g
							}
							r.animationID = null, r.accumulatedTime -= o * h, r.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: a,
								lastIdealVelocities: d
							}), r.unreadPropStyles = null, r.startAnimationIfNecessary()
						}))
					}, this.state = this.defaultState()
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), r(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: p.default.arrayOf(p.default.objectOf(p.default.number)),
						styles: p.default.func.isRequired,
						children: p.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						s = e.styles,
						n = t || s().map(a.default),
						r = n.map((function(e) {
							return o.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: r,
						lastIdealStyles: n,
						lastIdealVelocities: r
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = l.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && m.default.Children.only(e)
				}, t
			}(m.default.Component);
			t.default = b, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}();

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(s("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(s("./node_modules/react-motion/lib/stripStyle.js")),
				c = i(s("./node_modules/react-motion/lib/stepper.js")),
				l = i(s("./node_modules/react-motion/lib/mergeDiff.js")),
				d = i(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = i(s("./node_modules/raf/index.js")),
				m = i(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = i(s("./node_modules/react/index.js")),
				h = i(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;

			function f(e, t, s) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: s[t]
					}
				})) : e.map((function(e, t) {
					for (var r = 0; r < n.length; r++)
						if (n[r].key === e.key) return {
							key: n[r].key,
							data: n[r].data,
							style: s[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: s[t]
					}
				}))
			}

			function v(e, t, s, n, r, i, a, c, d) {
				for (var u = l.default(n, r, (function(e, n) {
						var r = t(n);
						return null == r ? (s({
							key: n.key,
							data: n.data
						}), null) : m.default(i[e], r, a[e]) ? (s({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: r
						}
					})), p = [], h = [], b = [], f = [], v = 0; v < u.length; v++) {
					for (var x = u[v], y = null, g = 0; g < n.length; g++)
						if (n[g].key === x.key) {
							y = g;
							break
						} if (null == y) {
						var _ = e(x);
						p[v] = _, b[v] = _;
						var w = o.default(x.style);
						h[v] = w, f[v] = w
					} else p[v] = i[y], b[v] = c[y], h[v] = a[y], f[v] = d[y]
				}
				return [u, p, h, b, f]
			}
			var x = function(e) {
				function t(s) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = v(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), s = t[0], i = t[1], o = t[2], a = t[3], c = t[4], l = 0; l < e.length; l++) {
							var d = e[l].style,
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, i[l] = n({}, i[l]), o[l] = n({}, o[l]), a[l] = n({}, a[l]), c[l] = n({}, c[l]), s[l] = {
										key: s[l].key,
										data: s[l].data,
										style: n({}, s[l].style)
									}), i[l][m] = p, o[l][m] = 0, a[l][m] = p, c[l][m] = 0, s[l].style[m] = p)
								}
						}
						r.setState({
							currentStyles: i,
							currentVelocities: o,
							mergedPropsStyles: s,
							lastIdealStyles: a,
							lastIdealVelocities: c
						})
					}, this.startAnimationIfNecessary = function() {
						r.unmounting || (r.animationID = u.default((function(e) {
							if (!r.unmounting) {
								var t = r.props.styles,
									s = "function" == typeof t ? t(f(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles)) : t;
								if (function(e, t, s, n) {
										if (n.length !== t.length) return !1;
										for (var r = 0; r < n.length; r++)
											if (n[r].key !== t[r].key) return !1;
										for (r = 0; r < n.length; r++)
											if (!m.default(e[r], t[r].style, s[r])) return !1;
										return !0
									}(r.state.currentStyles, s, r.state.currentVelocities, r.state.mergedPropsStyles)) return r.animationID = null, void(r.accumulatedTime = 0);
								var n = e || d.default(),
									i = n - r.prevTime;
								if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + i, r.accumulatedTime > 10 * b && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								for (var o = (r.accumulatedTime - Math.floor(r.accumulatedTime / b) * b) / b, a = Math.floor(r.accumulatedTime / b), l = v(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, s, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), u = l[0], p = l[1], h = l[2], x = l[3], y = l[4], g = 0; g < u.length; g++) {
									var _ = u[g].style,
										w = {},
										C = {},
										j = {},
										O = {};
									for (var E in _)
										if (Object.prototype.hasOwnProperty.call(_, E)) {
											var S = _[E];
											if ("number" == typeof S) w[E] = S, C[E] = 0, j[E] = S, O[E] = 0;
											else {
												for (var P = x[g][E], I = y[g][E], k = 0; k < a; k++) {
													var N = c.default(b / 1e3, P, I, S.val, S.stiffness, S.damping, S.precision);
													P = N[0], I = N[1]
												}
												var T = c.default(b / 1e3, P, I, S.val, S.stiffness, S.damping, S.precision),
													L = T[0],
													M = T[1];
												w[E] = P + (L - P) * o, C[E] = I + (M - I) * o, j[E] = P, O[E] = I
											}
										} x[g] = j, y[g] = O, p[g] = w, h[g] = C
								}
								r.animationID = null, r.accumulatedTime -= a * b, r.setState({
									currentStyles: p,
									currentVelocities: h,
									lastIdealStyles: x,
									lastIdealVelocities: y,
									mergedPropsStyles: u
								}), r.unreadPropStyles = null, r.startAnimationIfNecessary()
							}
						})))
					}, this.state = this.defaultState()
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), r(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: h.default.arrayOf(h.default.shape({
							key: h.default.string.isRequired,
							data: h.default.any,
							style: h.default.objectOf(h.default.number).isRequired
						})),
						styles: h.default.oneOfType([h.default.func, h.default.arrayOf(h.default.shape({
							key: h.default.string.isRequired,
							data: h.default.any,
							style: h.default.objectOf(h.default.oneOfType([h.default.number, h.default.object])).isRequired
						}))]).isRequired,
						children: h.default.func.isRequired,
						willEnter: h.default.func,
						willLeave: h.default.func,
						didLeave: h.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return a.default(e.style)
						},
						willLeave: function() {
							return null
						},
						didLeave: function() {}
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						s = e.styles,
						n = e.willEnter,
						r = e.willLeave,
						i = e.didLeave,
						c = "function" == typeof s ? s(t) : s,
						l = void 0;
					l = null == t ? c : t.map((function(e) {
						for (var t = 0; t < c.length; t++)
							if (c[t].key === e.key) return c[t];
						return e
					}));
					var d = null == t ? c.map((function(e) {
							return a.default(e.style)
						})) : t.map((function(e) {
							return a.default(e.style)
						})),
						u = null == t ? c.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						m = v(n, r, i, l, c, d, u, d, u),
						p = m[0];
					return {
						currentStyles: m[1],
						currentVelocities: m[2],
						lastIdealStyles: m[3],
						lastIdealVelocities: m[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = d.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(f(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = f(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = x, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s) {
				for (var n = {}, r = 0; r < e.length; r++) n[e[r].key] = r;
				var i = {};
				for (r = 0; r < t.length; r++) i[t[r].key] = r;
				var o = [];
				for (r = 0; r < t.length; r++) o[r] = t[r];
				for (r = 0; r < e.length; r++)
					if (!Object.prototype.hasOwnProperty.call(i, e[r].key)) {
						var a = s(r, e[r]);
						null != a && o.push(a)
					} return o.sort((function(e, s) {
					var r = i[e.key],
						o = i[s.key],
						a = n[e.key],
						c = n[s.key];
					if (null != r && null != o) return i[e.key] - i[s.key];
					if (null != a && null != c) return n[e.key] - n[s.key];
					if (null != r) {
						for (var l = 0; l < t.length; l++) {
							var d = t[l].key;
							if (Object.prototype.hasOwnProperty.call(n, d)) {
								if (r < i[d] && c > n[d]) return -1;
								if (r > i[d] && c < n[d]) return 1
							}
						}
						return 1
					}
					for (l = 0; l < t.length; l++) {
						d = t[l].key;
						if (Object.prototype.hasOwnProperty.call(n, d)) {
							if (o < i[d] && a > n[d]) return 1;
							if (o > i[d] && a < n[d]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = {
				noWobble: {
					stiffness: 170,
					damping: 26
				},
				gentle: {
					stiffness: 120,
					damping: 14
				},
				wobbly: {
					stiffness: 180,
					damping: 12
				},
				stiff: {
					stiffness: 210,
					damping: 20
				}
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, s) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var r = s("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(r);
			var i = s("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(i);
			var o = s("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(o);
			var a = s("./node_modules/react-motion/lib/spring.js");
			t.spring = n(a);
			var c = s("./node_modules/react-motion/lib/presets.js");
			t.presets = n(c);
			var l = s("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(l);
			var d = s("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = n(d)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						if (0 !== s[n]) return !1;
						var r = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== r) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var s = arguments[t];
					for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
				}
				return e
			};
			t.default = function(e, t) {
				return n({}, a, t, {
					val: e
				})
			};
			var r, i = s("./node_modules/react-motion/lib/presets.js"),
				o = (r = i) && r.__esModule ? r : {
					default: r
				},
				a = n({}, o.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s, r, i, o, a) {
				var c = s + (-i * (t - r) + -o * s) * e,
					l = t + c * e;
				if (Math.abs(c) < a && Math.abs(l - r) < a) return n[0] = r, n[1] = 0, n;
				return n[0] = l, n[1] = c, n
			};
			var n = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = "number" == typeof e[s] ? e[s] : e[s].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, s) {
			(function(t) {
				(function() {
					var s, n, r;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (s() - r) / 1e6
					}, n = t.hrtime, r = (s = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - r
					}, r = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - r
					}, r = (new Date).getTime())
				}).call(this)
			}).call(this, s("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function i() {}
			i.resetWarningCache = r, e.exports = function() {
				function e(e, t, s, r, i, o) {
					if (o !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					checkPropTypes: i,
					resetWarningCache: r
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				r = s("./src/lib/opener/index.ts"),
				i = s("./node_modules/react-router-redux/es/index.js");
			const o = (e, t = !0) => async (s, o, {
				routes: a
			}) => {
				const c = o();
				Object(n.a)(e, a, c) ? s(Object(i.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			}));
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				d = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				u = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				m = s.n(u);
			const p = e => o.a.createElement("button", {
					className: Object(a.a)(m.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(l.a, {
					className: m.a.arrowIcon,
					seed: e.seed
				})),
				h = e => o.a.createElement("button", {
					className: Object(a.a)(m.a.arrow, e.className),
					onClick: e.onClick
				}, o.a.createElement(d.a, {
					className: m.a.arrowIcon,
					seed: e.seed
				}));
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						itemsFitInContainer: !1,
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: {
								...this.state.viewableItems,
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							}
						})
					}, this.getVisibleItemsCount = () => {
						return r()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = ({
						adjustment: e,
						itemWidth: t,
						scrollIndex: s,
						spacerWidth: n = 0
					}) => {
						return e - s * (t + n) + n
					}, this.getAdjustment = ({
						itemWidth: e,
						maxScrollIndex: t,
						scrollIndex: s,
						spacerWidth: n = 0,
						visibleItemsCount: r
					}) => {
						let i = 0;
						if (s === t && r) {
							const t = r * e + this.getSpacerCount(r) * n;
							i = (this.container ? this.container.offsetWidth : t) - t
						} else s > 0 && (i = 0);
						return i
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.spacerWidth = 0, this.itemWidth = 0, this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					}), this.calcItemsFitInContainer()
				}
				componentDidUpdate(e, t) {
					this.calcItemsFitInContainer()
				}
				calcItemsFitInContainer() {
					c.a.read(() => {
						this.setState(e => {
							const t = this.doItemsFitInContainer({
								container: this.container,
								items: this.props.items,
								itemWidth: this.itemWidth,
								spacerWidth: this.spacerWidth
							});
							return e.itemsFitInContainer !== t ? {
								itemsFitInContainer: t
							} : null
						})
					})
				}
				doItemsFitInContainer({
					container: e,
					items: t,
					itemWidth: s,
					spacerWidth: n = 0
				}) {
					if (!e) return !0;
					const r = t.length * s,
						i = this.getSpacerCount(t.length) * n;
					return e.offsetWidth >= r + i
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						n = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: n,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			t.c = b
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_1TdTKnpCL4r-8b_P6N_s2H",
				thumbnailWrapper: "_1GhzoJvAGDHDieNmaBbc1j",
				thumbnail: "_29LP0yOv3qdH7Hw0i42rY1",
				thumbnailContainer: "_3D4UF6ZAO5wiwsAaqGPFD_",
				thumbnailLinkIcon: "_3nmCxKiXx-UyUgMfxQMQYO",
				bodyWrapper: "_2DMHAzKjqjnl-PBICpGvvP",
				mediaWrapper: "_2nVhK4TJW8rFpCW0J71MeZ",
				textWrapper: "_3HyzG7Bun5vaTrdBWvTTmT",
				postTitle: "_1ft5B5IP2RM9FAOkd6O_30",
				postTitleCompact: "_2y0S2HAq5enRe-8puwGqvp",
				flexSpacer: "_2pXLfUYWqtorJfsnyUPLpy"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_16DxRuw4PntaiR7Mb8IpKz",
				metaText: "_2OKlRpghzNcnid45bc1QFg"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1eoxIROAsv7YNisHStsspM",
				icon: "_1r7shGI3FRi8x8jB0wJFIw",
				iconLink: "_2aYABiczSUxClJTIX1tUoW",
				name: "_3n6BCmTgHdb1J5H2L_XX4A",
				link: "_3ZwhnERcT6sV1cfCBsQmAP"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = 236
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-uI1CWUC-WOhm-MolZUT8",
				background: "_2KsrA9nTjIN0VD69GqImgf"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				d = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/connectors/miniCardPost.ts"),
				m = s("./src/reddit/contexts/Post/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/config.ts"),
				f = s("./src/lib/isUrl/index.ts"),
				v = s("./src/reddit/components/Media/index.tsx"),
				x = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				g = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				_ = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				w = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				O = s.n(j),
				E = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				S = s.n(E);
			const P = `${b.a.assetPath}/img/link-placeholder.png`;
			var I = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: i,
						flairStyleTemplate: a,
						forceLoadMedia: c,
						post: l,
						scrollerItemRef: d,
						shouldPause: u
					} = e, {
						media: m
					} = i || l, p = m && r.a.createElement(v.a, {
						autoplayPref: t,
						availableWidth: s,
						className: O.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: C.c,
						imageBoxClassName: O.a.mediaImageBox,
						imageBoxContentImageClassName: O.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: i || l,
						scrollerItemRef: d,
						shouldLoad: c,
						shouldPause: u,
						showCentered: !1,
						showFull: !1
					});
					let h, b = !0;
					const j = !!l.source && Object(f.a)(l.source.url) || !!l.thumbnail && Object(f.a)(l.thumbnail.url);
					return !m && j ? (b = !1, h = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: S.a.flexSpacer
					}), r.a.createElement("div", {
						className: S.a.mediaWrapper
					}, r.a.createElement(x.a, {
						className: S.a.thumbnailWrapper,
						thumbnailClassName: S.a.thumbnail,
						thumbnailContainerClassName: S.a.thumbnailContainer,
						thumbnailLinkIconClassName: S.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: l,
						showPlaceholderContentType: !a || !a.postPlaceholderImage,
						templatePlaceholderImage: a ? a.postPlaceholderImage : P,
						usePreview: !0
					})))) : m && p ? m.type !== C.o.RTJSON && m.type !== C.o.TEXT ? (b = !1, h = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: S.a.flexSpacer
					}), r.a.createElement("div", {
						className: S.a.mediaWrapper
					}, p))) : h = Object(w.a)(l) || Object(_.c)(l) && Object(g.a)(l) ? r.a.createElement("div", {
						className: S.a.textWrapper
					}, p) : r.a.createElement("div", {
						className: S.a.flexSpacer
					}) : h = r.a.createElement("div", {
						className: S.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(o.a)(S.a.body, n)
					}, r.a.createElement(y.c, {
						className: b ? S.a.postTitle : S.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: y.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: a && a.postTitleColor
					}), h)
				},
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				L = s.n(T);
			var M = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(L.a.footer, t)
					}, r.a.createElement("span", {
						className: L.a.metaText
					}, k.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [k.fbt._plural(s.score, "number", Object(N.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: L.a.metaText
					}, k.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [k.fbt._plural(s.numComments, "number", Object(N.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				D = s("./src/reddit/components/SubredditIcon/index.tsx"),
				U = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				R = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				B = s("./src/reddit/constants/posts.ts"),
				W = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				F = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				V = s.n(F);
			var H = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: i,
						subredditOrProfile: a
					} = e, c = Object(h.h)(a) ? B.a.PROFILE : B.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(o.a)(V.a.header, t)
					}, r.a.createElement(A.a, {
						className: V.a.iconLink,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, r.a.createElement(D.b, {
						className: V.a.icon,
						subredditOrProfile: a
					})), r.a.createElement("div", {
						className: V.a.name
					}, r.a.createElement(A.a, {
						className: V.a.link,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, Object(R.b)(a.displayText || a.name, c))), i && r.a.createElement(U.a, {
						className: V.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: a.name,
							type: c
						},
						size: W.c.XXS,
						small: !0
					}))
				},
				J = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				G = s.n(J),
				q = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				Y = s.n(q);
			const X = Object(i.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(h.h)(e) ? t : s).some(t => t.id === e.id)
			});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditOrProfileClicked = e => {
						e.stopPropagation(), this.props.onSubredditOrProfileClick(this.props.postId)
					}, this.getSubscribeEventFactory = e => {
						const t = this.props.getSubscribeEventFactory(this.props.postId);
						if (t) return t(e)
					}
				}
				render() {
					const {
						className: e,
						...t
					} = this.props, {
						eventFactory: s,
						flairStyleTemplate: n,
						onClickPost: i,
						post: a,
						subredditOrProfile: u,
						subscribedProfiles: m,
						subscribedSubreddits: h
					} = t, b = !X({
						subredditOrProfile: u,
						subscribedProfiles: m,
						subscribedSubreddits: h
					});
					return r.a.createElement(d.a, {
						className: Object(o.a)(Y.a.container, G.a.largeAndMediumActiveStyles, G.a.largeAndMediumPostStyles, G.a.mUseRedditTheme, O.a.postContainer, Object(p.a)(this.props), e),
						eventFactory: s,
						onClick: i,
						post: a,
						style: {
							...Object(p.b)(this.props.flairStyleTemplate),
							...Object(p.d)(this.props)
						}
					}, r.a.createElement(l.a, {
						className: Y.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, u && r.a.createElement(H, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: u,
						shouldShowSubscribeButton: b
					}), r.a.createElement(I, t), r.a.createElement(M, {
						"data-redditstyle": !0,
						post: a
					})), r.a.createElement(c.d, null))
				}
			}
			const K = Object(m.b)(Object(u.a)(Object(a.a)(z)));
			class Q extends r.a.Component {
				render() {
					return r.a.createElement(K, this.props)
				}
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3ecQI6Cj7AUan8ODNedckX",
				carousel: "_3iT7bTTSmhcS5Y5g0HA_6O",
				containerVisible: "_3rsj8PUqTkCf6pe9416Gyy",
				expand: "_250lv3fevotwjop-AocHoR",
				fadeIn: "_3ZZS9kQ22NEA4xZZYY0spW",
				layout: "_3h7LpVpRI9GJtQIvq99wXT",
				header: "_1BBGDcB7hA6-TZL0ttf8GW",
				title: "_1fjygDYdKjBJL0LwqMGbmi",
				subredditLink: "_3U4JOEplD94U2FGR06uT9j",
				description: "_1963n3Yxcv9NC7ip9v_G55",
				overflow: "_3-Jj2CfWoB4geanC8TePf3",
				overflowDropdown: "cfnCFp3MEBqCBFKNqYCKh",
				overflowItemIconWrapper: "_1n_xSjRDa84SL-VXSHRa_b",
				hideIcon: "_1qgpARPT0gQIpbWQmCrZx9",
				body: "_2LVnfX2Exeku8qbknNjlSc",
				carouselVisible: "swB-w41jlb9yWuRozt8Wr",
				arrow: "_33n6Hxno5QDQIbv7MzWYA6"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/helpers/name/index.ts"),
				y = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				_ = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/selectors/inFeedChaining.ts"),
				j = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subscriptions.ts"),
				S = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less"),
				k = s.n(I);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = 500,
				L = 600,
				M = {
					stiffness: 200,
					damping: 20
				},
				D = Object(c.c)({
					discoveryUnit: C.b,
					postChain: C.f,
					postSubreddit: O.R,
					routeName: j.p,
					subscribedProfiles: E.c,
					subscribedSubreddits: E.d
				}),
				U = Object(a.b)(D, (e, {
					listingKey: t,
					postId: s
				}) => ({
					dismissPostChaining: () => {
						t && e(Object(m.e)())
					},
					openPost: t => e(Object(y.a)(t.permalink))
				}));
			class R extends o.a.Component {
				constructor(e) {
					super(e), this.showCarouselTimer = null, this.showDUTimer = null, this.showDU = () => {
						this.showDUTimer = window.setTimeout(() => {
							this.setState({
								isDUVisible: !0
							}, this.showCarousel)
						}, T)
					}, this.showCarousel = () => {
						this.showCarouselTimer = window.setTimeout(() => {
							this.setState({
								isCarouselVisible: !0
							})
						}, L)
					}, this.onOverflowClick = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(g.e)(e, t))
					}, this.onShowMeLessClick = () => {
						const {
							discoveryUnit: e,
							dismissPostChaining: t,
							postSubreddit: s
						} = this.props;
						t(), e && this.props.sendEvent(Object(g.b)(e, s))
					}, this.getItemPostSubredditSubscribeEventFactory = e => {
						const {
							discoveryUnit: t,
							postSubreddit: s
						} = this.props;
						if (t) return Object(g.A)(t, e, s)
					}, this.trackDiscoveryUnitViewed = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(g.h)(e, t))
					}, this.trackArrowClicked = e => {
						const {
							postSubreddit: t
						} = this.props;
						this.props.sendEvent(Object(g.f)(e, void 0, t))
					}, this.trackPostViewed = (e, t) => {
						const {
							postSubreddit: s
						} = this.props;
						this.props.sendEvent(Object(g.C)(e, t, void 0, s))
					}, this.trackSubredditClicked = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && t && this.props.sendEvent(Object(g.H)(e, t))
					}, this.trackPostSubredditOrProfileClicked = e => {
						const {
							discoveryUnit: t,
							postSubreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(g.z)(t, e, void 0, s))
					}, this.openPost = (e, t) => {
						this.props.openPost(t);
						const {
							discoveryUnit: s
						} = this.props;
						s && this.trackPostViewed(s, t.id)
					}, this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props, {
							subscribedProfiles: s,
							subscribedSubreddits: n
						} = this.state;
						return t ? o.a.createElement(S.a, N({}, e, {
							getSubscribeEventFactory: this.getItemPostSubredditSubscribeEventFactory,
							onClickPost: this.openPost,
							onSubredditOrProfileClick: this.trackPostSubredditOrProfileClicked,
							subscribedProfiles: s,
							subscribedSubreddits: n
						})) : null
					}, this.state = {
						isCarouselVisible: !1,
						isDUVisible: !1,
						subscribedProfiles: e.subscribedProfiles,
						subscribedSubreddits: e.subscribedSubreddits
					}
				}
				componentDidMount() {
					this.trackDiscoveryUnitViewed(), this.props.routeName !== d.Jb.COMMENTS && this.setState({
						isCarouselVisible: !0,
						isDUVisible: !0
					})
				}
				componentDidUpdate(e) {
					this.state.isCarouselVisible || e.routeName !== d.Jb.COMMENTS || this.props.routeName === d.Jb.COMMENTS || this.showDU()
				}
				componentWillUnmount() {
					this.showCarouselTimer && clearTimeout(this.showCarouselTimer), this.showDUTimer && clearTimeout(this.showDUTimer)
				}
				render() {
					const {
						discoveryUnit: e,
						postId: t,
						postChain: s,
						postSubreddit: i
					} = this.props, {
						isDUVisible: a,
						isCarouselVisible: c
					} = this.state;
					return e ? o.a.createElement("div", {
						className: Object(l.a)(k.a.container, a && k.a.containerVisible, this.props.className),
						"data-redditstyle": !0
					}, o.a.createElement("div", {
						className: k.a.layout,
						style: {
							backgroundColor: Object(r.d)(-.95, Object(w.a)(this.props).navIcon)
						}
					}, o.a.createElement("div", {
						className: k.a.header
					}, o.a.createElement("div", {
						className: k.a.title
					}, i ? n.fbt._("Similar communities to {subredditLink}", [n.fbt._param("subredditLink", o.a.createElement(v.a, {
						className: k.a.subredditLink,
						to: i.url,
						onMouseDown: this.trackSubredditClicked
					}, Object(x.c)(i.name)))], {
						hk: "2Qq224"
					}) : n.fbt._("Similar communities", null, {
						hk: "ntT00"
					})), o.a.createElement("div", {
						className: k.a.description
					}, n.fbt._("Top posts from the last 24 hours", null, {
						hk: "2iAfYj"
					})), o.a.createElement(h.b, {
						className: k.a.overflow,
						dropdownClassName: k.a.overflowDropdown,
						dropdownId: `chain-overflow-${t}`,
						onClick: this.onOverflowClick
					}, o.a.createElement(f.b, {
						className: k.a.overflowItem,
						displayText: n.fbt._("Show me less of this", null, {
							hk: "1l1vKC"
						}),
						iconWrapperClassName: k.a.overflowItemIconWrapper,
						onClick: this.onShowMeLessClick
					}, o.a.createElement(_.a, {
						className: k.a.hideIcon
					})))), o.a.createElement("div", {
						className: k.a.body
					}, o.a.createElement(p.a, {
						className: Object(l.a)(k.a.carousel, c && k.a.carouselVisible),
						discoveryUnit: e,
						discoveryUnitSubreddit: i,
						isHidden: !c,
						isLoading: !1,
						items: s,
						itemWidth: P.a,
						leftArrowClassName: k.a.arrow,
						onArrowClick: this.trackArrowClicked,
						onPostView: this.trackPostViewed,
						renderPost: this.renderPost,
						rightArrowClassName: k.a.arrow,
						seed: t,
						shouldSlideIn: !0,
						springConfig: M
					})))) : null
				}
			}
			t.default = Object(u.a)(U(Object(b.c)(R)))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/clickSourceData/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/prettyPrintNumber/index.ts"),
				y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = s("./src/lib/timeAgo/index.ts"),
				w = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				S = s.n(E);
			var P = e => {
					const t = w.a.PROFILE,
						s = Object(C.a)(e.author, t),
						n = Object(j.a)();
					return i.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className)
					}, i.a.createElement(O.a, {
						className: S.a.layout
					}, i.a.createElement("div", {
						className: S.a.textContainer
					}, i.a.createElement("span", {
						className: S.a.description
					}, f.fbt._("posted by", null, {
						hk: "wl0iP"
					})), i.a.createElement(g.a, {
						className: S.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(C.b)(e.author, t)), i.a.createElement("span", {
						className: S.a.timestamp
					}, Object(_.d)(e.created / 1e3)))))
				},
				I = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				k = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				T = s.n(N);
			var L = e => {
					const t = Object(C.a)(e.name, e.type);
					return i.a.createElement("div", {
						className: Object(c.a)(T.a.container, e.className)
					}, i.a.createElement(k.a, {
						className: T.a.layout
					}, i.a.createElement("div", {
						className: T.a.iconContainer
					}, e.iconUrl ? i.a.createElement("img", {
						className: T.a.icon,
						src: e.iconUrl
					}) : i.a.createElement(I.a, {
						className: T.a.planetIcon,
						"data-redditstyle": !0
					})), i.a.createElement("div", {
						className: T.a.textContainer
					}, i.a.createElement(g.a, {
						"data-click-id": "subreddit",
						className: T.a.name,
						to: t
					}, Object(C.b)(e.displayText || e.name, e.type)), i.a.createElement("span", {
						className: T.a.separator
					}, "•"), i.a.createElement("span", {
						className: T.a.timestamp
					}, Object(_.d)(e.created / 1e3)))))
				},
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/Media/index.tsx"),
				U = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				R = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				F = s("./src/reddit/connectors/miniCardPost.ts"),
				V = s("./src/reddit/contexts/Post/index.tsx"),
				H = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				J = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				G = s("./src/reddit/models/Media/index.ts"),
				q = s("./src/reddit/models/Subreddit/index.ts"),
				Y = s("./src/reddit/models/Widgets/index.ts"),
				X = s("./src/reddit/components/MiniCardPost/index.m.less"),
				z = s.n(X),
				K = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(K),
				Z = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				$ = s.n(Z);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class te extends i.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: o,
						flairStyleTemplate: a,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: u = !0,
						onClickPost: m,
						post: p,
						scrollerItemRef: h,
						shouldPause: b,
						showAuthorBlock: y = !1,
						showMetaLine: g = !0,
						showSubscribeBlock: _ = !1,
						subredditOrProfile: w
					} = this.props, {
						media: C
					} = n || p, j = !C && !!p.source && Object(v.a)(p.source.url);
					let O = C && i.a.createElement(D.a, {
							autoplayPref: e,
							availableWidth: t,
							className: z.a.media,
							forceAspectRatio: G.c,
							imageBoxClassName: z.a.mediaImageBox,
							imageBoxContentImageClassName: z.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: u,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: h,
							shouldPause: b,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						E = !1;
					C && O && (C.type !== G.o.RTJSON && C.type !== G.o.TEXT ? (O = i.a.createElement("div", {
						className: $.a.mediaWrapper
					}, O), E = !0) : C && C.content && Object(H.a)(p) && (O = i.a.createElement("div", {
						className: $.a.textWrapper
					}, O)));
					const S = !E && !j;
					let I;
					return w && (I = Object(q.h)(w) ? Object(Y.h)(w) : Object(Y.i)(w)), i.a.createElement(W.a, {
						className: Object(c.a)($.a.container, Q.a.largeAndMediumActiveStyles, Q.a.largeAndMediumPostStyles, z.a.postContainer, Object(J.a)(this.props), s),
						post: p,
						onClick: m,
						eventFactory: o,
						style: {
							...Object(J.b)(this.props.flairStyleTemplate),
							...Object(J.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, i.a.createElement(B.a, {
						className: z.a.backgroundWrapper,
						flairStyleTemplate: a
					}, i.a.createElement("div", {
						className: Object(c.a)($.a.innerContainer, z.a.innerContainer)
					}, _ && w && i.a.createElement(L, ee({
						created: p.created
					}, I)), y && w && i.a.createElement(P, ee({
						created: p.created,
						author: p.author
					}, I)), i.a.createElement(A.c, {
						className: S ? $.a.postTitle : $.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: A.b.Large,
						titleColor: a && a.postTitleColor
					}), g && w && i.a.createElement(U.a, {
						className: $.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: w
					}), (E || j) && i.a.createElement("div", {
						className: $.a.flexSpacer
					}), j && i.a.createElement("div", {
						className: $.a.mediaWrapper
					}, i.a.createElement(R.a, {
						className: $.a.thumbnailWrapper,
						thumbnailClassName: $.a.thumbnail,
						thumbnailContainerClassName: $.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: a && a.postPlaceholderImage
					})), O, i.a.createElement("div", {
						className: $.a.metaWrapper
					}, i.a.createElement("span", {
						className: $.a.meta
					}, f.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [f.fbt._plural(p.score, "number", Object(x.b)(p.score))], {
						hk: "2ncFte"
					})), i.a.createElement("span", {
						className: $.a.meta
					}, f.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [f.fbt._plural(p.numComments, "number", Object(x.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), i.a.createElement(M.d, null))
				}
			}
			const se = Object(V.b)(Object(F.a)(Object(y.a)(te)));
			class ne extends i.a.Component {
				render() {
					return i.a.createElement(se, this.props)
				}
			}
			var re = s("./node_modules/reselect/es/index.js"),
				ie = s("./src/reddit/components/SubredditIcon/index.tsx"),
				oe = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ae = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ce = s("./src/reddit/models/Vote/index.ts"),
				le = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				de = s.n(le);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(u.t)(),
				pe = Object(re.c)({
					isFakeSubreddit: u.x
				}),
				he = Object(a.b)(pe),
				be = e => {
					const t = {
						interactive: !1,
						voteState: ce.a.notVoted
					};
					return i.a.createElement("div", {
						className: Object(c.a)(de.a.emptyVotes, e.className)
					}, i.a.createElement(oe.d, t), i.a.createElement("div", {
						className: Object(c.a)(de.a.emptyScore, Object(ae.b)({
							isLoading: e.isLoading
						}))
					}), i.a.createElement(oe.c, t))
				};
			var fe = me(he(Object(y.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...n
				}) => i.a.createElement("div", {
					className: Object(c.a)(de.a.container, Q.a.largeAndMediumPostStyles, e)
				}, i.a.createElement("div", {
					className: Object(c.a)(de.a.thumbnail, Object(ae.b)({
						isLoading: t
					}))
				}), i.a.createElement("div", {
					className: de.a.content
				}, i.a.createElement("div", {
					className: de.a.titleContainer
				}, i.a.createElement("div", {
					className: Object(c.a)(de.a.title, Object(ae.b)({
						isLoading: t
					}))
				}), i.a.createElement("div", {
					className: Object(c.a)(de.a.title, Object(ae.b)({
						isLoading: t
					}))
				})), s && i.a.createElement(O.a, {
					className: de.a.subreddit
				}, i.a.createElement(ie.a, ue({
					className: Object(c.a)(Object(ae.b)({
						isLoading: !1
					}))
				}, n)), i.a.createElement("div", {
					className: Object(c.a)(de.a.subredditName, Object(ae.b)({
						isLoading: t
					}))
				})), i.a.createElement(O.a, null, i.a.createElement(be, ue({
					isLoading: t
				}, n)), i.a.createElement("div", {
					className: Object(c.a)(de.a.comments, Object(ae.b)({
						isLoading: t
					}))
				}), i.a.createElement("div", {
					className: Object(c.a)(de.a.share, Object(ae.b)({
						isLoading: t
					}))
				}), i.a.createElement("div", {
					className: Object(c.a)(de.a.ellipsis, Object(ae.b)({
						isLoading: t
					}))
				}))))))),
				ve = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				xe = s.n(ve);
			var ye = e => i.a.createElement("div", {
					className: Object(c.a)(xe.a.container, e.className)
				}, i.a.createElement("div", {
					className: xe.a.largePosts
				}, i.a.createElement(fe, {
					className: xe.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), i.a.createElement(fe, {
					className: xe.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), i.a.createElement(fe, {
					className: xe.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				ge = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				_e = s.n(ge);
			const we = 326,
				Ce = 12,
				je = {
					stiffness: 210,
					damping: 30
				},
				Oe = 100,
				Ee = "post_carousel_item",
				Se = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...r
				}) => {
					const o = s ? s(r) : i.a.createElement(ne, r);
					return i.a.createElement(n.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, o)
				},
				Pe = Object(a.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: n
				}) => ({
					openOverlay: t => e(Object(p.a)({
						pathname: Object(h.b)(t.permalink),
						state: Object(m.a)(n)
					})),
					trackPostClick: (t, n) => e((e, r) => s ? b.w(r(), s, t, n) : null),
					trackPostSubredditClick: n => e((e, r) => t ? b.y(r(), t, n) : s ? b.y(r(), s, n) : null)
				})),
				Ie = Object(u.t)();
			class ke extends l.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							discoveryUnit: s,
							discoveryUnitSubreddit: n,
							listingKey: r,
							pageLayer: i,
							searchDiscoveryUnit: o,
							searchOptions: a
						} = this.props;
						let c;
						return (c = "subreddit" === t && a ? b.K(a, i, r, o) : o && a ? b.L(a, i, r, o) : b.v(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return i.a.createElement(Se, {
							"data-click-id": Ee,
							className: _e.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!r,
							showMetaLine: !1,
							showSubscribeBlock: !r,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => i.a.createElement("div", {
						className: _e.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel", this.itemWidth = e.itemWidth
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					if (super.componentDidUpdate(e, t), this.state !== t) {
						const e = Object.keys(this.state.viewableItems).filter(e => !1 === t.viewableItems[e] && !0 === this.state.viewableItems[e]);
						this.trackPostsViewed(this.props, e)
					}
				}
				trackPostsViewed(e, t) {
					e.isLoading || 0 === e.items.length || t.forEach(t => {
						this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, e.items[t], e.searchOptions, e.listingKey, e.pageLayer) : this.props.discoveryUnit && e.onPostView(this.props.discoveryUnit, e.items[t])
					})
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: n
					} = this.props, r = s || e;
					r && t && t(r, n)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick()
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: n,
						shouldSlideIn: r,
						springConfig: a
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return i.a.createElement(ye, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = we
					} = this.props, {
						scrollIndex: u,
						visibleItemsCount: m
					} = this.state, p = this.getMaxScrollIndex(m), h = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: p,
						scrollIndex: u,
						spacerWidth: Ce,
						visibleItemsCount: m
					}), b = e ? Oe : this.getMarginLeft({
						adjustment: h,
						itemWidth: d,
						scrollIndex: u,
						spacerWidth: Ce
					});
					return i.a.createElement("div", {
						className: Object(c.a)(_e.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, i.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Oe : 0
						},
						style: {
							marginLeft: Object(o.spring)(b, a || je)
						}
					}, this.renderPosts), 0 !== u && i.a.createElement(l.a, {
						className: Object(c.a)(_e.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == p || u < p) && i.a.createElement(l.b, {
						className: Object(c.a)(_e.a.arrowRight, r && !e && _e.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = Ie(Pe(Object(d.c)(ke)))
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				d = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = s.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.V
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(l.a)(e.source), t) : Object(l.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(d.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/ads.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				x = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/constants/tracking.ts"),
				j = s("./src/reddit/components/Media/blurredContent.ts"),
				O = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = s.n(O);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = e => e > 2 * x.e,
				I = e => {
					const t = Object(l.a)(E.a.image, h.g, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${x.j}px`), e.isListing || e.isTall && P(e.height) || (s.maxHeight = `${x.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				k = e => {
					const t = {};
					return (!e.showFull && Object(x.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${x.j}px`, e.shouldBlur && (t.maxWidth = Object(x.I)(e.height, e.width) ? `${x.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(l.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				N = Object(o.b)(() => Object(c.a)(g.E, w.bb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(g.b)(e, s) : null, y.a, _.actionInfo, g.F, (e, t, s, n, r, i) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: n,
					pageType: r.pageType,
					post: i
				})));
			t.a = N(e => {
				const t = e.sendGoodVisitEvent ? Object(v.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, L(e)) : L(e)
			});
			const T = (e, t) => i.a.createElement(I, {
					altText: t.altText,
					className: Object(l.a)(t.imageClassName, {
						[C.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(d.a)(t.source),
					width: t.width
				}),
				L = ({
					onClick: e,
					...t
				}) => {
					const s = Object(x.I)(t.height, t.width),
						r = P(t.height) && s;
					return i.a.createElement(k, S({}, t, {
						className: `${s?`${C.a} `:""}${t.className||""}`
					}), t.isListing ? i.a.createElement("div", {
						className: t.contentImageClassName
					}, T(s, t)) : i.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, T(s, t)), t.isListing && !t.showFull && t.height > x.j && Object(x.I)(t.height, t.width) && i.a.createElement("div", {
						className: E.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && i.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && i.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: E.a.unblurButton
					}, Object(j.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				l = s.n(c);
			const d = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: l.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(i.a)(l.a.container, e.className, {
						[l.a.video]: e.isVideo,
						[l.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: l.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(l.a.wrapper, {
						[l.a.mColoredBackground]: !e.blurSrc,
						[l.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(d, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const b = 100,
				f = b / 2 / 1e3;
			var v = s("./src/lib/forceHttps/index.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							i = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							c = 0;
						const l = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(a = c);
							if (e.paused || e.seeking || !s) return void(a = c);
							const r = o;
							4 === e.readyState ? o = !1 : !o && c >= a && c < a + f ? o = !0 : o && c >= a && c > a + f && (o = !1), a = c, r !== o && t(o)
						}, b);
						return () => {
							clearInterval(l), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: s,
						onBufferingChange: n,
						shouldLoad: r,
						shouldPause: i,
						showCentered: a,
						showFull: c,
						source: l,
						...d
					} = this.props;
					return o.a.createElement("video", x({}, d, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), o.a.createElement("source", {
						src: Object(v.a)(this.props.source || "")
					}))
				}
			}
			var g = y,
				_ = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				w = s.n(_);
			const C = Object(c.c)({
					autoplayPref: p.b,
					consumed: h.a,
					loadTimes: h.f,
					metadata: h.h,
					started: h.k
				}),
				j = Object(a.b)(C, (e, {
					postId: t
				}) => ({
					onBufferingChanged: s => {
						e(s ? d.r(t) : d.E(t))
					},
					onLoadStarted: s => e(d.q(t, s)),
					onMetadataReceived: s => e(d.D({
						metadata: s,
						postId: t
					})),
					onPaused: () => e(d.z({
						postId: t
					})),
					onPlayable: s => e(d.A(t, s)),
					onPlaying: () => e(d.C(t)),
					onWatched: () => e(d.s(t)),
					onViewableImpression: () => e(d.x(t)),
					onFullyViewableImpression: () => e(d.u(t)),
					onPlayedWithSound: () => e(d.B(!1, t)),
					onWatchedPercent: s => e(d.N(s, t))
				}));
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, s = {};
						return e && (s.margin = "0 auto"), t || (s.maxHeight = `${m.e}px`), o.a.createElement(g, {
							autoplay: this.props.autoplayPref,
							className: Object(l.a)(u.a, w.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: s,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : o.a.createElement("div", {
						className: Object(l.a)(w.a.container, this.props.className, {
							[w.a.centered]: this.props.showCentered
						})
					}, o.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = j(O)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? n.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? n.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: h
				} = e;
				return i.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
				}, i.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, i.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: h
				}), i.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return i.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(d.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, i.a.createElement(u.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(m.author, s), h && h.isQuarantined && i.a.createElement(a.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(a);

			function l(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className)
				}, r.a.createElement(o.a, {
					className: Object(i.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(i.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(i.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
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
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/urlRequested.ts"),
				d = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const h = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(l.a)(t))
				})),
				b = c.a.wrapped(e => {
					const t = Object(d.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									r && n(s, r), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.g)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = h(Object(a.a)(b))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(d),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				v = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				y = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => i.a.createElement(x, p({}, s, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				g = Object(l.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return i.a.createElement(y, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(v, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(g, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return d
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "v", (function() {
				return v
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "u", (function() {
				return _
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "t", (function() {
				return E
			})), s.d(t, "p", (function() {
				return S
			})), s.d(t, "o", (function() {
				return P
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "s", (function() {
				return k
			})), s.d(t, "r", (function() {
				return N
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "w", (function() {
				return L
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(o),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const d = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				h = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				v = c.a.ul("Ul", a.a),
				x = c.a.ol("Ol", a.a),
				y = c.a.strong("B", a.a),
				g = c.a.em("I", a.a),
				_ = c.a.span("U", a.a),
				w = e => r.a.createElement("del", e),
				C = c.a.sub("Sub", a.a),
				j = c.a.sup("Sup", a.a),
				O = c.a.table("Table", a.a),
				E = c.a.tr("Tr", a.a),
				S = c.a.td("Tdl", a.a),
				P = c.a.td("Tdc", a.a),
				I = c.a.td("Tdr", a.a),
				k = c.a.th("Thl", a.a),
				N = c.a.th("Thc", a.a),
				T = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(i.b, e), "A", a.a)),
				L = c.a.wrapped(l.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				d = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				f = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.m.less"),
				x = s.n(v);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = s("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				_ = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => o.a.createElement(g, y({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				w = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				C = e => r()(e, w),
				j = e => e.findIndex(w),
				O = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: i,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: v,
						useExplicitTextColor: y,
						shouldBlur: w
					} = e, O = n.document, E = [], S = e.mediaMetadata || null, P = j(O), I = C(O);
					if (w && !r) return o.a.createElement(g, {
						className: Object(a.a)(u.j, s)
					}, o.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(d.a)(!!i, !!c))));
					if (-1 !== P)
						for (let o = P; o <= I; o++) {
							const e = O[o];
							switch (e.e) {
								case h.k:
									E.push(f.c(e, v, o));
									break;
								case h.l:
									E.push(f.d(o));
									break;
								case h.b:
									E.push(f.a(e, S, v, o));
									break;
								case h.c:
									E.push(f.b(e, o));
									break;
								case h.p:
									E.push(f.f(e, S, v, o));
									break;
								case h.z:
									E.push(f.h(e, S, v, o));
									break;
								case h.u:
									E.push(f.g(e, S, v, o));
									break;
								case h.h:
									E.push(Object(b.a)(e, o));
									break;
								case h.m:
								case h.a:
								case h.D:
									E.push(...Object(b.b)(e, o, S, p, m, t))
							}
						}
					return y ? o.a.createElement(g, {
						className: Object(a.a)(u.j, s)
					}, E) : o.a.createElement(_, {
						className: Object(a.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, E)
				};
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return O(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				l = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				d = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/elements.tsx"),
				f = s("./src/reddit/components/RichTextJson/media.m.less"),
				v = s.n(f),
				x = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = /\/(\w+)\/asset\/(\w+)\//,
				_ = x.a.wrapped(b.a, "A", v.a),
				w = x.a.wrapped(d.a, "ImageBox", v.a),
				C = x.a.wrapped(e => i.a.createElement("p", e), "Caption", v.a),
				j = x.a.div("Placeholder", v.a),
				O = x.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const r = t === h.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(j, y({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, s))
				}, "Placeholder", v.a),
				E = ({
					c: e,
					x: t,
					y: s
				}, n) => i.a.createElement("div", {
					className: v.a.MediaWrapper
				}, i.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, i.a.createElement(l.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				S = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === h.s ? r = s.s.u : s.e === h.r ? r = s.s.gif : s.e === h.t && (r = (e => {
						const t = g.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? i.a.createElement(_, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				P = (e, t, s, n, r, a) => {
					const l = h.E(s, e.id);
					if (n) return [S(e, t, l)];
					const d = [];
					return l ? l.e === h.s ? d.push((({
						id: e,
						s: t
					}, s, n, r) => i.a.createElement("div", {
						className: Object(o.a)(v.a.MediaWrapper, {
							[v.a.mHasCaption]: n
						})
					}, i.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, i.a.createElement(w, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(l, t, !!e.c, a)) : l.e === h.r ? d.push((({
						id: e,
						ext: t,
						s
					}, n, r) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return i.a.createElement("div", {
								className: Object(o.a)(v.a.MediaWrapper, {
									[v.a.mHasCaption]: r
								})
							}, i.a.createElement(_, {
								href: a,
								key: n,
								target: "_blank"
							}, s.mp4 ? i.a.createElement("video", {
								className: v.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: a
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, i.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c)) : l.e === h.t && d.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: r
					}, a, l, d) => i.a.createElement("div", {
						className: Object(o.a)(v.a.MediaWrapper, {
							[v.a.mHasCaption]: l
						})
					}, i.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: s
					}, i.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: d,
						isGif: r
					}))))(l, t, !!e.c, r)) : d.push(((e, t) => i.a.createElement(O, {
						e,
						key: t
					}))(e.e, t)), e.c && d.push(((e, t) => i.a.createElement(C, {
						key: t
					}, e))(e.c, `caption${t}`)), d
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return D
			})), s.d(t, "f", (function() {
				return U
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "g", (function() {
				return W
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "e", (function() {
				return F
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				i = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				l = s("./node_modules/uuid/v4.js"),
				d = s.n(l),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = s.n(v);
			const y = 1e3,
				g = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, y)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, g)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = h.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === p.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === p.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? d()() : void 0;
					return r ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: r,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var C = Object(u.c)(w),
				j = s("./src/reddit/components/RichTextJson/media.tsx"),
				O = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				E = s("./src/reddit/components/SubredditMention/index.tsx"),
				S = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				P = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/helpers/isPost.ts"),
				k = s("./src/reddit/helpers/richTextJson/index.ts"),
				N = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						i = [],
						o = n.length;
					for (let a = 0; a < o; a++) {
						const e = n[a];
						i.push(e.e === p.w ? e.t : F(e, t, a))
					}
					const l = c.x[r - 1];
					return a.a.createElement(l, {
						key: s
					}, i)
				},
				L = e => a.a.createElement(c.e, {
					key: e
				}),
				M = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						o = [];
					for (let a = 0; a < i; a++) o.push(R(r[a], t, s, a));
					return a.a.createElement(c.c, {
						key: n
					}, o)
				},
				D = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				U = (e, t, s, n) => {
					const r = e.c,
						i = [],
						o = r.length;
					for (let d = 0; d < o; d++) {
						const e = r[d].c;
						e && e.length && i.push(a.a.createElement(c.g, {
							key: d
						}, e.map((e, n) => R(e, t, s, n))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: n
					}, i)
				},
				R = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return M(e, t, s, n);
						case p.c:
							return D(e, n);
						case p.k:
							return T(e, s, n);
						case p.l:
							return L(n);
						case p.p:
							return U(e, t, s, n);
						case p.u:
							return W(e, t, s, n);
						case p.z:
							return B(e, t, s, n)
					}
				},
				B = (e, t, s, n) => {
					const r = e.c,
						i = e.h,
						o = r.length,
						l = i.length,
						d = [],
						u = [],
						m = [];
					for (let c = 0; c < l; c++) {
						const e = i[c],
							{
								H: n,
								D: r
							} = G(e.a),
							{
								c: o = []
							} = e;
						d.push(a.a.createElement(n, {
							key: c
						}, A(o, t, s))), m[c] = r
					}
					for (let p = 0; p < o; p++) {
						const e = r[p],
							n = e.length,
							i = [];
						for (let r = 0; r < n; r++) {
							const n = m[r],
								{
									c: o = []
								} = e[r];
							i.push(a.a.createElement(n, {
								key: r
							}, A(o, t, s)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, i))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, d)), a.a.createElement("tbody", null, u))
				},
				W = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(k.f)(r.id) ? a.a.createElement(c.j, {
						key: n
					}, A(e.c, t, s)) : Object(j.b)(r, n, t)
				},
				A = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === p.A) n.push(V(r, i));
						else if (r.e === p.x) n.push(a.a.createElement(O.a, {
							key: i
						}, A(r.c, t, s)));
						else if (r.e === p.n) n.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && n.push(a.a.createElement(C, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else n.push(F(r, s, i))
					}
					return n
				},
				F = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = V({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, i;
							const o = Object(N.a)(t),
								l = t.renderingObjectInfo;
							return l && Object(I.b)(l) && (r = l.postId), l && Object(P.b)(l) && (i = l.id, r = l.postId), a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: o,
								postId: r,
								commentId: i
							}, n);
						case p.y:
							return a.a.createElement(E.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				V = (e, t) => {
					const {
						f: s,
						t: r
					} = e, i = [];
					if (!s) return J(0, r, t);
					const o = Object(n.a)(r);
					let a = 0,
						c = 0;
					const l = s.length;
					for (; a < l; a++) {
						const [e, t, n] = s[a], l = t + n, d = o[t], u = o[l] - d;
						d > c && i.push(J(0, r.substr(c, d - c), `between${a}`)), i.push(J(e, r.substr(d, u), a)), c = d + u
					}
					return c < r.length && i.push(J(0, r.substr(c), `remaining${a}`)), i
				},
				H = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				J = (e, t, s) => {
					let n = t;
					return n = i()(H, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				G = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				l = s.n(c);
			const d = i.a.wrapped(o.b, "SubredditIcon", l.a),
				u = i.a.wrapped(e => r.a.createElement(a.b, e), "S", l.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(l.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(d.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(d.b, null)), `r/${e}`))
				}),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				v = s("./src/reddit/selectors/subredditMention.ts");
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const y = Object(h.c)(x),
				g = Object(o.c)({
					isFeatureFlagEnabled: v.b,
					isUserInTreatment: v.e,
					userVariant: v.a
				}),
				_ = Object(i.b)(g),
				w = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: i
				}) => {
					if (!t || !e) return r.a.createElement(y, {
						subredditName: s,
						rtJsonElementProps: i
					});
					switch (n) {
						case b.Hd.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: i
							});
						case b.Hd.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(y, {
								subredditName: s,
								rtJsonElementProps: i
							})
					}
				};
			t.b = _(w)
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, s) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return L
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, s) => n => {
				const r = e(n),
					o = t(n),
					a = !r && o;
				return Object(i.a)(s.baseClassName, n.className, {
					[s.mIsInteractive]: o,
					[s.mIsActive]: r,
					[s.mIsVoteable]: a
				})
			};
			var c = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/controls/Downvote/index.m.less"),
				u = s.n(d);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === l.a.downvoted,
				h = a(p, ({
					interactive: e
				}) => !1 !== e, m);
			var b = e => r.a.createElement(c.a, {
					className: h(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/controls/Upvote/index.m.less"),
				x = s.n(v);
			const y = {
					...x.a,
					baseClassName: x.a.Upvote
				},
				g = ({
					voteState: e
				}) => e === l.a.upvoted,
				_ = a(g, ({
					interactive: e
				}) => !1 !== e, y);
			var w = e => r.a.createElement(f.a, {
					className: _(e),
					compact: e.compact,
					isFilled: g(e)
				}),
				C = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = s.n(E);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => Object(i.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(j.b)(Object(C.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				k = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(O.a)(e), s = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...o
					} = e;
					return r.a.createElement("button", P({}, o, {
						className: Object(i.a)(S.a.customDownvote, I(e), {
							[S.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				N = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(O.a)(e), s = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...o
					} = e;
					return r.a.createElement("button", P({}, o, {
						className: Object(i.a)(S.a.customUpvote, I(e), {
							[S.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				T = b,
				L = w
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.b)(() => Object(r.c)({
				activeModalId: d.a,
				autoplayPref: h.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: l.S,
				hideNSFWPref: h.B,
				isActive: p.j,
				moderatorPermissions: u.k,
				modModeEnabled: l.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				}) => e(Object(o.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				})),
				handleVote: s => {
					const n = s === c.a.upvoted ? Object(i.fb)(t) : Object(i.w)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(i.bb)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: n
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: n
				})
			}), {
				forwardRef: !0
			});
			t.a = b
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(n)(e => {
					const {
						featureEnabled: n,
						...i
					} = e, o = i;
					return n ? r.a.createElement(t, o) : void 0 !== s ? r.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: r
				} = e;
				return t && s && n && r ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const a = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(i.b)(e))) return Object(r.b)(e) ? o.SourceElement.Comment : Object(n.w)(t) ? o.SourceElement.PostDetail : Object(n.E)(t) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return w
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				l = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: l.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(a.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const r = Object(a.b)(s) ? "postId" : "commentId",
						i = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[r]: s.id
						},
						l = Object(d.y)(e, {
							subredditName: n
						});
					return l ? {
						outbound: {
							...i,
							url: l.url,
							subredditId: l.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(o.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...h(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...b(t, e)
				}),
				v = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				y = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => r.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", l({}, s, {
				className: Object(i.a)(c.a.compactDownvoteWrapper, s.className)
			}), r.a.createElement(d, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", l({}, s, {
				className: Object(i.a)(c.a.downvoteWrapper, s.className)
			}), r.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => r.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", l({}, s, {
				className: Object(i.a)(c.a.compactUpvoteWrapper, s.className)
			}), r.a.createElement(d, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", l({}, s, {
				className: Object(i.a)(c.a.upvoteWrapper, s.className)
			}), r.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/colors.ts");
			const o = (e, t = "") => `${t}-du-left-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), a = o("c", t), c = o("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), r.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, r.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), r.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), r.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), r.a.createElement("path", {
					id: a,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, r.a.createElement("use", {
					fill: i.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: i.b.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: i.b.white
				}, r.a.createElement("use", {
					xlinkHref: `#${a}`
				})), r.a.createElement("use", {
					fill: i.b.black,
					xlinkHref: `#${a}`
				}), r.a.createElement("g", {
					fill: i.b.alienblue,
					mask: `url(#${c})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/colors.ts");
			const o = (e, t = "") => `${t}-du-right-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), a = o("c", t), c = o("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), r.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, r.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), r.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), r.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), r.a.createElement("path", {
					id: a,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, r.a.createElement("use", {
					fill: i.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: i.b.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: i.b.white
				}, r.a.createElement("use", {
					xlinkHref: `#${a}`
				})), r.a.createElement("use", {
					fill: i.b.black,
					xlinkHref: `#${a}`
				}), r.a.createElement("g", {
					fill: i.b.alienblue,
					mask: `url(#${c})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.zd
					}) || ""
				},
				l = e => {
					const t = c(e);
					return t === n.Hd.SmIcon || t === n.Hd.SmIconHc
				},
				d = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(o.W)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InFeedChaining.6936603488e996fce48e.js.map