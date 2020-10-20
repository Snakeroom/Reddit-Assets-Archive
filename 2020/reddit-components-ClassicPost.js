// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.d7ceabeb7b58261bca20.js
// Retrieved at 10/20/2020, 11:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost", "Governance~InFeedChaining~Reddit", "RpanListingUnit~reddit-components-MediumPost", "EconHelperActions", "vendors~InFeedChaining"], {
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
					var o, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						g = !i && !u && !m && !p && /linux/i.test(t),
						x = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = s(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						j = !v && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: O || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: O || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: O || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: O || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (o.msedge = e, o.version = x) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || O
					} : u ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: O || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: O || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: O
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, O && (o.version = O)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, O && (o.version = O)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || O
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && O && (o.version = O)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : y ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : g && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? _ = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? _ = (_ = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? _ = (_ = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? _ = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? _ = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? _ = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? _ = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (_ = s(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (o.osversion = _);
					var k = !o.windows && _.split(".")[0];
					return v || c || "ipad" == r || i && (3 == k || k >= 4 && !j) || o.silk ? o.tablet = e : (j || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function r(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = o(e, (function(e) {
							var s = t - n(e);
							return o((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, n, o) {
					var i = s;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = r, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseAssignValue.js"),
				o = s("./node_modules/lodash/eq.js");
			e.exports = function(e, t, s) {
				(void 0 === s || o(e[t], s)) && (void 0 !== s || t in e) || n(e, t, s)
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_Stack.js"),
				o = s("./node_modules/lodash/_assignMergeValue.js"),
				r = s("./node_modules/lodash/_baseFor.js"),
				i = s("./node_modules/lodash/_baseMergeDeep.js"),
				a = s("./node_modules/lodash/isObject.js"),
				c = s("./node_modules/lodash/keysIn.js"),
				d = s("./node_modules/lodash/_safeGet.js");
			e.exports = function e(t, s, l, u, m) {
				t !== s && r(s, (function(r, c) {
					if (m || (m = new n), a(r)) i(t, s, c, l, e, u, m);
					else {
						var p = u ? u(d(t, c), r, c + "", t, s, m) : void 0;
						void 0 === p && (p = r), o(t, c, p)
					}
				}), c)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_assignMergeValue.js"),
				o = s("./node_modules/lodash/_cloneBuffer.js"),
				r = s("./node_modules/lodash/_cloneTypedArray.js"),
				i = s("./node_modules/lodash/_copyArray.js"),
				a = s("./node_modules/lodash/_initCloneObject.js"),
				c = s("./node_modules/lodash/isArguments.js"),
				d = s("./node_modules/lodash/isArray.js"),
				l = s("./node_modules/lodash/isArrayLikeObject.js"),
				u = s("./node_modules/lodash/isBuffer.js"),
				m = s("./node_modules/lodash/isFunction.js"),
				p = s("./node_modules/lodash/isObject.js"),
				b = s("./node_modules/lodash/isPlainObject.js"),
				h = s("./node_modules/lodash/isTypedArray.js"),
				f = s("./node_modules/lodash/_safeGet.js"),
				g = s("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, t, s, x, O, v, j) {
				var y = f(e, s),
					_ = f(t, s),
					k = j.get(_);
				if (k) n(e, s, k);
				else {
					var C = v ? v(y, _, s + "", e, t, j) : void 0,
						E = void 0 === C;
					if (E) {
						var w = d(_),
							I = !w && u(_),
							P = !w && !I && h(_);
						C = _, w || I || P ? d(y) ? C = y : l(y) ? C = i(y) : I ? (E = !1, C = o(_, !0)) : P ? (E = !1, C = r(_, !0)) : C = [] : b(_) || c(_) ? (C = y, c(y) ? C = g(y) : p(y) && !m(y) || (C = a(_))) : E = !1
					}
					E && (j.set(_, C), O(C, _, x, v, j), j.delete(_)), n(e, s, C)
				}
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, o) {
				return o(e, (function(e, o, r) {
					s = n ? (n = !1, e) : t(s, e, o, r)
				})), s
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRest.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return n((function(t, s) {
					var n = -1,
						r = s.length,
						i = r > 1 ? s[r - 1] : void 0,
						a = r > 2 ? s[2] : void 0;
					for (i = e.length > 3 && "function" == typeof i ? (r--, i) : void 0, a && o(s[0], s[1], a) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t); ++n < r;) {
						var c = s[n];
						c && e(t, c, n, i)
					}
					return t
				}))
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, t) {
			e.exports = function(e, t) {
				if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				o = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = o(s)) == s ? s : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, s)
			}
		},
		"./node_modules/lodash/merge.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseMerge.js"),
				o = s("./node_modules/lodash/_createAssigner.js")((function(e, t, s) {
					n(e, t, s)
				}));
			e.exports = o
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, o)
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_copyObject.js"),
				o = s("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return n(e, o(e))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/graphql/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"5ea7b64bc8a4"}')
		},
		"./src/graphql/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"10d2b4634bba"}')
		},
		"./src/graphql/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"2a42d91744d4"}')
		},
		"./src/graphql/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"24ab40e0f21d"}')
		},
		"./src/graphql/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		},
		"./src/graphql/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r(e) {
				var t;
				return (t = class t extends o.a.Component {
					constructor(e) {
						super(e), this.mounted = !1, this.state = {
							Component: t.Component
						}
					}
					componentDidMount() {
						this.mounted = !0, this.state.Component !== e.ErrorComponent && e.getComponent().then(e => {
							t.Component = e, this.mounted && this.setState({
								Component: e
							})
						}, t => (this.mounted && this.setState({
							Component: e.ErrorComponent
						}), Promise.reject(t)))
					}
					componentWillUnmount() {
						this.mounted = !1
					}
					render() {
						const t = this.state.Component || e.LoadingComponent;
						return o.a.createElement(t, this.props)
					}
				}).Component = null, t
			}
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const u = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = h(o.target, o.currentTarget);
					s && t && (b(o.target, o.currentTarget, p.anchors) ? r && s(t(e, r)) : r && s(s => {
						const n = t(e, r)(s);
						let o;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(c.previousPageActionInfo)(s, o)
						})
					})), b(o.target, o.currentTarget, p.anchorsAndButtons) && n(o)
				}
			});

			function m(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(n, s, t)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				b = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : "https://".concat(e)
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/reddit/models/Media/index.ts"),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(o);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: o
				} = e;
				let i = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = o || Object(n.E)(e)
				} else i = Object(n.E)(e);
				const a = r.a.parse(i),
					c = a.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/lodash/every.js"),
				o = s.n(n);

			function r(e) {
				let t = null,
					s = null;
				return function() {
					for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
					return null !== t && r.length === t.length && o()(r, (e, s) => e === t[s]) || (t = r, s = e(...r)), s
				}
			}
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/brcast/dist/brcast.es.js");
			const o = () => "undefined" != typeof document,
				r = () => o() && "visible" === document.visibilityState,
				i = () => ({
					documentInFocus: r()
				}),
				{
					subscribe: a,
					unsubscribe: c,
					setState: d
				} = Object(n.a)(i()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => d(i());
			(() => {
				const e = (() => {
					if (!o()) return;
					const e = Object.keys(l).find(e => e in document);
					return e ? l[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !r(),
				isDocumentVisible: r,
				subscribe: a,
				unsubscribe: c
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = [o.ac, o.fb, o.x, o.J, o.eb, o.Fb],
				i = {
					[o.Fb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.eb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.J]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.fb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.ac]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Fb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.eb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.J]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.fb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "lYj4d"
					}),
					[o.ac]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "2OaZ5T"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const s = Date.now(),
					c = new Date(e).getTime(),
					d = {
						[o.ac]: "",
						[o.fb]: "",
						[o.x]: "",
						[o.J]: "",
						[o.eb]: "",
						[o.Fb]: ""
					};
				let l = c - s;
				if (l <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(l / n);
					e && (d[n] = (t ? a : i)[n](e).toString()), l -= e * n
				}
				const u = r.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t ? u : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", u)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			}));
			var n, o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/chat/endpoints/sendbird/index.ts"),
				a = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				d = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(n || (n = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: u,
				REQUEST_PENDING: m,
				REQUEST_SUCCESS: p
			} = n, b = Object(r.a)(l), h = Object(r.a)(u), f = Object(r.a)(m), g = Object(r.a)(p);
			let x;
			const O = 5 * o.eb,
				v = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t();
					if (!Object(d.I)(o) || !Object(c.f)(o)) return clearTimeout(x);
					x || e((() => async (e, t, s) => {
						let {
							apiContext: n
						} = s;
						const o = t(),
							{
								session: r
							} = o.user;
						if (r && Object(d.I)(o) && Object(c.f)(o)) {
							e(f());
							const t = await Object(i.i)(n(), r);
							t && t.ok ? (e(g({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(a.c)())) : e(h({
								error: t.error
							}))
						}
					})()), x = setTimeout(() => {
						e(v())
					}, O)
				}
		},
		"./src/reddit/actions/dashboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const o = "DASHBOARD__COMPONENT_SELECTED",
				r = "DASHBOARD__SUBREDDIT_SELECTED",
				i = "DASHBOARD__SUBREDDIT_LOADED",
				a = Object(n.a)(o),
				c = Object(n.a)(r),
				d = Object(n.a)(i)
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "j", (function() {
				return b
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b),
				a = Object(n.a)(o.c),
				c = Object(n.a)(o.d),
				d = Object(n.a)(o.e),
				l = Object(n.a)(o.f),
				u = Object(n.a)(o.g),
				m = Object(n.a)(o.h),
				p = Object(n.a)(o.i),
				b = Object(n.a)(o.j)
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return v
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return j
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return y
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return _
			})), s.d(t, "eventPostsRequested", (function() {
				return k
			})), s.d(t, "startEventNowSuccess", (function() {
				return C
			})), s.d(t, "startEventNowRequested", (function() {
				return E
			})), s.d(t, "editEventTimeSuccess", (function() {
				return w
			})), s.d(t, "editEventTimeRequested", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var p = (e, t, s, n, r) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/api/event_post_time.json"),
				method: o.db.POST,
				data: {
					id: t,
					event_start: s,
					event_end: n,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/eventPosts.ts"),
				x = s("./src/reddit/selectors/posts.ts");
			const O = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				v = Object(r.a)(i.e),
				j = Object(r.a)(i.c),
				y = Object(r.a)(i.b),
				_ = Object(r.a)(i.d),
				k = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, r = s();
					const i = Object(g.d)(r, {
							subredditName: e
						}),
						l = Object(g.b)(r, {
							subredditName: e
						}),
						u = Object(g.c)(r, {
							subredditName: e
						}),
						m = Object(g.a)(r, {
							subredditName: e
						}),
						p = l && u;
					if (i) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (p) b.nonInclusiveCursor = m;
					else if (l && !u) return;
					const x = Object(g.e)(r, {
						subredditName: e
					});
					t(v({
						key: x
					}));
					const k = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(o(), b);
					if (k.ok) {
						const {
							subredditInfoByName: e
						} = k.body.data, {
							eventPosts: n
						} = e, o = Object(h.a)(n);
						let i = [],
							a = {};
						const c = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (i = o.map(e => e.id), a = o.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((p ? _ : j)({
							key: x,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(y({
						error: k.error,
						key: x
					})), t(Object(a.e)({
						kind: f.b.Error,
						text: O()
					}))
				}, C = Object(r.a)(i.f), E = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await b(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(C({
							postId: e
						}));
						const r = s(),
							i = Object(x.N)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.e)({
							kind: f.b.SuccessMod,
							text: o()
						}))
					} else t(Object(a.e)({
						kind: f.b.Error,
						text: O()
					}))
				}, w = Object(r.a)(i.a), I = (e, t) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const d = await p(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							i = 14400,
							c = Math.round(t.event_start / o.Fb);
						let l = t.event_end;
						const u = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Fb) || c + i,
							eventIsLive: t.event_is_live
						};
						s(w({
							postId: e,
							eventInfo: u
						}));
						const m = r(),
							p = Object(x.N)(m, {
								postId: e
							}),
							b = p && p.title || "",
							h = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.e)({
							kind: f.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.e)({
						kind: f.b.Error,
						text: O()
					}))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/sentry/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = s("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = s("./src/reddit/endpoints/gold/purchase.ts"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(r.a)(b.r),
				f = Object(r.a)(b.e),
				g = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const i = Object(p.a)(s()),
						l = (null == i ? void 0 : i.pennies) || a.ob,
						b = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const h = await t(Object(d.validateAndCreateStripeToken)(e));
					if (h) try {
						const e = await Object(u.g)({
							context: r(),
							correlationId: b,
							pennies: l,
							token: h
						});
						if (e.error) {
							const s = Object(c.a)(e.error);
							t(Object(d.stripeApiError)(s))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (f) {
						const e = Object(c.a)(f);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, x = "PREMIUM_PURCHASE_MODAL__PAYMENT_BLOB_CREATED", O = Object(r.a)(x), v = e => {
					let {
						packageId: t,
						correlationId: s
					} = e;
					return async (e, o, r) => {
						let {
							apiContext: a
						} = r;
						e(h({
							packageId: t,
							correlationId: s
						}));
						const u = Object(p.a)(o()),
							m = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
						if (m) try {
							const t = await Object(l.f)({
								buttonId: m,
								context: a(),
								correlationId: s
							});
							if (t.error) {
								const s = Object(c.a)(t.error);
								e(Object(d.paypalApiError)(s))
							} else e(O(t))
						} catch (b) {
							const t = Object(c.a)(b);
							e(Object(d.paypalApiError)(t))
						} else i.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const o = "INBOX__COUNT_UPDATE",
				r = Object(n.a)(o)
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "q", (function() {
				return n
			})), s.d(t, "r", (function() {
				return o
			})), s.d(t, "s", (function() {
				return r
			})), s.d(t, "t", (function() {
				return i
			})), s.d(t, "u", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "m", (function() {
				return h
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "n", (function() {
				return g
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "A", (function() {
				return _
			})), s.d(t, "B", (function() {
				return k
			})), s.d(t, "z", (function() {
				return C
			})), s.d(t, "y", (function() {
				return E
			})), s.d(t, "v", (function() {
				return w
			})), s.d(t, "w", (function() {
				return I
			})), s.d(t, "x", (function() {
				return P
			})), s.d(t, "d", (function() {
				return S
			}));
			const n = "MULTIREDDIT__MORE_POSTS_FAILED",
				o = "MULTIREDDIT__MORE_POSTS_LOADED",
				r = "MULTIREDDIT__MORE_POSTS_PENDING",
				i = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				a = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				c = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				m = "MULTIREDDIT__DELETE_SUCCESS",
				p = "MULTIREDDIT__DELETE_FAILURE",
				b = "MULTIREDDIT__DUPLICATE_PENDING",
				h = "MULTIREDDIT__DUPLICATE_SUCCESS",
				f = "MULTIREDDIT__DUPLICATE_FAILURE",
				g = "MULTIREDDIT__EDIT_FAILURE",
				x = "MULTIREDDIT__EDIT_PENDING",
				O = "MULTIREDDIT__EDIT_SUCCESS",
				v = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				j = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				y = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				_ = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				k = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				C = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				E = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				P = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var S;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(S || (S = {}))
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return V
			})), s.d(t, "g", (function() {
				return W
			})), s.d(t, "b", (function() {
				return K
			})), s.d(t, "d", (function() {
				return Y
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "i", (function() {
				return ie
			})), s.d(t, "c", (function() {
				return le
			})), s.d(t, "e", (function() {
				return be
			})), s.d(t, "h", (function() {
				return xe
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				g = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = s("./src/graphql/operations/AllUserMultireddits.json"),
				v = s("./src/lib/makeGqlRequest/index.ts"),
				j = (e, t) => Object(v.a)(e, Object.assign(Object.assign({}, O), {
					variables: t
				})),
				y = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = s("./src/graphql/operations/SubredditRecommendations.json"),
				k = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = (s("./node_modules/core-js/modules/es6.regexp.split.js"), e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const i of e.subreddits)
							if (i.data.over_18) {
								t = !0;
								break
							} let s = e.quarantine || !1;
					if (!s)
						for (const i of e.subreddits) {
							const e = (i.data.audience_target || "").split(",");
							if (i.data.quarantine || e.indexOf("unsafe") > -1) {
								s = !0;
								break
							}
						}
					const n = e.subreddits.map(e => {
							const t = e.data,
								{
									name: s,
									display_name: n
								} = t;
							return {
								id: s,
								displayName: n.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						o = n.filter(e => !e.displayName.startsWith(a.Ub)).map(e => e.id),
						r = n.filter(e => e.displayName.startsWith(a.Ub)).map(e => e.id);
					return {
						created: e.created_utc,
						description: e.description_md,
						descriptionHtml: e.description_html,
						descriptionRtJson: null,
						displayText: e.display_name,
						followerCount: e.num_subscribers,
						icon: e.icon_url,
						isFavorited: !!e.is_favorited,
						isFollowed: !1,
						isNSFW: t,
						isQuarantined: s,
						name: e.name,
						ownerId: e.owner_id,
						profileIds: r,
						subredditCount: e.subreddits.length,
						subredditIds: o,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				}),
				P = s("./src/reddit/models/Multireddit/index.ts"),
				S = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/multireddit.ts"),
				N = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = s("./src/reddit/actions/multireddit/constants.ts");
			const A = Object(d.a)(R.q),
				D = Object(d.a)(R.r),
				B = Object(d.a)(R.s),
				V = e => async (t, s, n) => {
					const {
						gqlContext: o
					} = n, {
						sort: r = a.O.HOT,
						multiredditName: i,
						username: c
					} = e, d = s(), u = d.platform.currentPage, m = u ? u.queryParams : {}, p = Object(T.d)(d, {
						multiredditName: i,
						username: c
					}), b = Object(l.a)(p.url, r, m), h = d.listings.postOrder.loadMore[b];
					if (!h) return;
					const f = d.listings.postOrder.api.pending[b],
						g = d.listings.postOrder.fetchedTokens,
						x = g[b] && g[b][h.token] || !1;
					if (f || x) return;
					t(B({
						key: b,
						fetchedToken: h.token
					}));
					const O = p.url.replace(/\/$/, ""),
						v = m.t ? m.t.toUpperCase() : void 0,
						j = {
							after: h.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: v,
							sort: r.toUpperCase()
						},
						_ = await Object(y.a)(o(), j),
						{
							data: C
						} = _.body,
						w = Object(E.a)(C);
					_.ok && C && C.multireddit ? t(D(Object.assign(Object.assign(Object.assign({
						fetchedToken: h.token,
						key: b,
						meta: d.meta
					}, w), Object(k.a)(d, b, w)), {
						multiredditsModelsState: d.multireddits.models
					}))) : t(A(Object.assign(Object.assign({
						error: {
							type: a.E.NOT_FOUND_ERROR
						},
						fetchedToken: h.token,
						key: b
					}, _.body), Object(k.a)(d, b, w))))
				}, U = Object(d.a)(R.t), G = Object(d.a)(R.u), W = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, n, o) => {
						let {
							apiContext: r,
							gqlContext: i
						} = o;
						const a = n();
						if (!Object(L.i)(a)) return;
						if (!e && Object(T.h)(a) || Object(T.i)(a)) return;
						s(U());
						const c = await j(i(), {
							includeSources: t
						});
						if (c.ok) {
							const e = c.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(C.b)(e);
							s(G(Object.assign(Object.assign({}, t), {
								multiredditsModelsState: a.multireddits.models
							})))
						}
					}
				}, H = Object(d.a)(R.e), q = Object(d.a)(R.f), z = Object(d.a)(R.g), K = e => {
					let {
						description: t,
						displayName: s,
						shouldNavigate: o
					} = e;
					return async (e, r, c) => {
						let {
							apiContext: d
						} = c;
						const l = r(),
							m = Object(L.i)(l);
						if (!m) return;
						e(q());
						const b = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [g.a]), {
							endpoint: Object(x.a)("".concat(e.apiUrl, "/api/multi")),
							data: {
								model: JSON.stringify({
									description_md: s,
									display_name: t,
									visibility: "private",
									subreddits: []
								})
							},
							method: a.db.POST
						}))(d(), s, t);
						if (b.ok) {
							const {
								id: t
							} = m;
							if (await e(z({
									multireddit: I(b.body.data),
									multiredditsModelsState: l.multireddits.models,
									userId: t
								})), o) {
								e(Object(u.f)());
								const t = b.body.data.path.toLowerCase();
								await e(Object(i.b)(t))
							}
							e(Object(p.e)({
								text: n.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(H(b.error))
					}
				}, X = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t(),
						i = Object(L.i)(o),
						c = Object(N.i)(o) ? Object(N.m)(o) : Object(N.b)(o),
						d = c && c.routeMatch && c.routeMatch.match;
					if (!d) return;
					const u = d.params,
						p = u.sort || a.O.HOT,
						{
							multiredditName: h,
							username: f
						} = u;
					if (!h) return;
					const g = Object(P.h)((f || i && i.displayText || "").toLowerCase(), h.toLowerCase()),
						{
							queryParams: x
						} = d,
						O = Object(l.a)(g, p, x),
						v = b.x in x && x[b.x].toUpperCase() || "",
						j = a.Sb[v] || !1,
						y = Object(L.i)(o);
					(f || y && y.displayText) && await e(Object(m.B)(O, (f || y.displayText).toLowerCase(), h.toLowerCase(), Object.assign(Object.assign(Object.assign({}, r()(x, b.l)), r()(x, b.k)), {
						sort: p,
						t: Object(F.a)(p, j)
					})))
				}, J = Object(d.a)(R.k), Q = Object(d.a)(R.l), Z = Object(d.a)(R.m), Y = e => {
					let {
						description: t,
						displayName: s,
						fromName: o,
						fromUsername: r
					} = e;
					return async (e, c, d) => {
						let {
							apiContext: l
						} = d;
						const m = c(),
							b = Object(L.i)(m);
						if (!b || !b.displayText) return;
						const O = Object(P.h)((r || b.displayText).toLowerCase(), o.toLowerCase());
						e(Q());
						const v = await ((e, t) => Object(h.a)(Object(f.a)(e, [g.a]), {
							endpoint: Object(x.a)("".concat(e.apiUrl, "/api/multi/copy")),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: a.db.POST
						}))(l(), {
							from: O,
							displayName: s,
							description: t
						});
						if (v.ok) {
							const t = I(v.body.data);
							e(Object(u.f)()), e(Z({
								multireddit: t,
								multiredditsModelsState: m.multireddits.models,
								userId: b.id
							})), e(Object(p.e)({
								text: n.fbt._("Custom feed duplicated!", null, {
									hk: "2u48X"
								}),
								buttonText: n.fbt._("Go there", null, {
									hk: "4sXZMm"
								}),
								buttonAction: Object(i.b)(t.url)
							}))
						} else e(J(v.error)), e(Object(p.e)({
							text: n.fbt._("Something went wrong duplicating {multiName}", [n.fbt._param("multiName", o)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, $ = Object(d.a)(R.b), ee = Object(d.a)(R.c), te = Object(d.a)(R.a), se = e => {
					let {
						communityInfo: t,
						identifier: s,
						multiredditNames: o
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: d
						} = i;
						const l = r(),
							m = Object(L.i)(l);
						if (!m || l.multireddits.api.addSubreddit.pending) return;
						e($({
							name: s.name
						}));
						const {
							displayText: b
						} = m;
						if (!b) return;
						const O = o.map(e => "/user/".concat(b.toLowerCase(), "/m/").concat(e.toLowerCase())).join(","),
							v = "".concat("profile" === s.type ? a.Ub : "").concat(s.name),
							j = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [g.a]), {
								endpoint: Object(x.a)("".concat(e.apiUrl, "/api/multi/bulk_add/r/").concat(t)),
								data: {
									paths: s
								},
								method: a.db.PUT
							}))(d(), v, O);
						if (j.ok) {
							const r = Object(M.L)(l, {
									identifier: s
								}) || t && t.id || "",
								i = o.map(e => Object(P.h)(b, e));
							e(Object(u.f)()), e(Object(p.e)({
								text: n.fbt._({
									"*": "Successfully added {communityName} to {number} custom feeds!",
									_1: "Successfully added {communityName} to 1 custom feed!"
								}, [n.fbt._param("communityName", "".concat("subreddit" === s.type ? c.d.subreddit : c.d.profile).concat(s.name)), n.fbt._plural(o.length, "number")], {
									hk: "9EXsM"
								})
							})), await e(ee({
								communityInfo: t,
								id: r,
								multipaths: i,
								type: s.type
							})), 1 === o.length && await e(X())
						} else {
							e(te(j.error));
							let t = n.fbt._("Sorry, something went wrong adding {subredditName}.", [n.fbt._param("subredditName", s.name)], {
								hk: "ERdWO"
							});
							j.body && (j.body.reason === R.d.TooManySubreddits ? t = n.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : j.body.reason === R.d.InvalidSrQuarantine && (t = n.fbt._("{communityname} is invalid because it is quarantined", [n.fbt._param("communityname", "".concat("subreddit" === s.type ? c.d.subreddit : c.d.profile).concat(s.name))], {
								hk: "407xmS"
							}))), e(Object(p.e)({
								text: t,
								kind: S.b.Error
							}))
						}
					}
				}, ne = Object(d.a)(R.w), oe = Object(d.a)(R.x), re = Object(d.a)(R.v), ie = e => {
					let {
						id: t,
						multiredditName: s,
						name: o,
						type: r
					} = e;
					return async (e, i, c) => {
						let {
							apiContext: d
						} = c;
						const l = i(),
							m = Object(L.i)(l);
						if (!m || !m.displayText || l.multireddits.api.removeSubreddit.pending) return;
						e(ne({
							id: t
						}));
						const {
							displayText: b
						} = m, O = Object(P.h)(b, s), v = "".concat("profile" === r ? a.Ub : "").concat(o), j = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [g.a]), {
							endpoint: Object(x.a)("".concat(e.apiUrl, "/api/multi").concat(s, "r/").concat(t)),
							method: a.db.DELETE
						}))(d(), v, O);
						j.ok ? (e(Object(u.f)()), e(oe({
							id: t,
							multipath: O,
							type: r
						})), e(Object(p.e)({
							text: n.fbt._("{subredditname} removed from your custom feed!", [n.fbt._param("subredditname", o)], {
								hk: "uaWNe"
							}),
							buttonText: n.fbt._("undo", null, {
								hk: "3HH7IT"
							}),
							buttonAction: se({
								identifier: {
									name: o,
									type: r
								},
								multiredditNames: [s]
							})
						})), e(X())) : (e(re(j.error)), e(Object(p.e)({
							text: n.fbt._("Sorry, something went wrong removing {subredditName}.", [n.fbt._param("subredditName", o)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, ae = Object(d.a)(R.h), ce = Object(d.a)(R.i), de = Object(d.a)(R.j), le = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const c = s();
					if (!Object(L.i)(c)) return;
					t(ce());
					const d = await ((e, t) => Object(h.a)(Object(f.a)(e, [g.a]), {
						endpoint: Object(x.a)("".concat(e.apiUrl, "/api/multi").concat(t)),
						method: a.db.DELETE
					}))(r(), e);
					d.ok ? (await t(de(e)), t(Object(u.f)()), await t(Object(i.b)("/")), t(Object(p.e)({
						text: n.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ae(d.error))
				}, ue = Object(d.a)(R.n), me = Object(d.a)(R.o), pe = Object(d.a)(R.p), be = e => {
					let {
						description: t,
						displayText: s,
						multipath: o,
						visibility: r
					} = e;
					return async (e, i, c) => {
						let {
							apiContext: d
						} = c;
						const l = i();
						if (!Object(L.I)(l)) return;
						e(me());
						const m = await (e => {
							let {
								context: t,
								description: s,
								displayText: n,
								multipath: o,
								visibility: r
							} = e;
							return Object(h.a)(Object(f.a)(t, [g.a]), {
								endpoint: Object(x.a)("".concat(t.apiUrl, "/api/multi").concat(o)),
								data: {
									model: JSON.stringify({
										description_md: s,
										display_name: n,
										visibility: r
									}),
									expand_srs: !0
								},
								method: a.db.PUT
							})
						})({
							context: d(),
							description: t,
							displayText: s,
							multipath: o,
							visibility: r
						});
						m.ok ? (await e(pe(I(m.body.data))), e(Object(u.f)()), e(Object(p.e)({
							text: n.fbt._("Custom feed updated!", null, {
								hk: "39R30f"
							})
						}))) : (e(ue(m.error)), e(Object(p.e)({
							kind: S.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1Y6lli"
							})
						})))
					}
				}, he = Object(d.a)(R.z), fe = Object(d.a)(R.A), ge = Object(d.a)(R.B), xe = e => {
					let {
						multiredditName: t,
						username: s,
						toExcludeNames: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						const a = o(),
							c = Object(L.i)(a);
						if (!(s || c && c.displayText)) return;
						const d = Object(P.h)(s || c.displayText, t),
							l = a.multireddits.models[d];
						if (!l || !l.subredditIds) return;
						e(fe());
						const u = n && n.reduce((e, t) => {
								const s = Object(M.G)(a, t) || Object(M.H)(a, t);
								return s ? [...e, s] : e
							}, []),
							m = await ((e, t) => Object(v.a)(e, Object.assign(Object.assign({}, _), {
								variables: t
							})))(i(), {
								count: R.y,
								subredditIds: l.subredditIds,
								toExclude: u
							});
						if (m.ok) {
							const {
								data: t
							} = m.body;
							e(ge({
								multipath: d,
								subreddits: Object(w.b)(t)
							}))
						} else e(he(m.error))
					}
				}
		},
		"./src/reddit/actions/page.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return Xe
			})), s.d(t, "i", (function() {
				return Je
			})), s.d(t, "G", (function() {
				return Qe
			})), s.d(t, "h", (function() {
				return Ze
			})), s.d(t, "g", (function() {
				return Ye
			})), s.d(t, "f", (function() {
				return $e
			})), s.d(t, "w", (function() {
				return nt
			})), s.d(t, "y", (function() {
				return it
			})), s.d(t, "d", (function() {
				return at
			})), s.d(t, "b", (function() {
				return ct
			})), s.d(t, "a", (function() {
				return dt
			})), s.d(t, "s", (function() {
				return ut
			})), s.d(t, "r", (function() {
				return mt
			})), s.d(t, "t", (function() {
				return pt
			})), s.d(t, "q", (function() {
				return bt
			})), s.d(t, "c", (function() {
				return ht
			})), s.d(t, "z", (function() {
				return gt
			})), s.d(t, "A", (function() {
				return xt
			})), s.d(t, "n", (function() {
				return Ot
			})), s.d(t, "F", (function() {
				return vt
			})), s.d(t, "x", (function() {
				return yt
			})), s.d(t, "l", (function() {
				return _t
			})), s.d(t, "k", (function() {
				return kt
			})), s.d(t, "j", (function() {
				return Ct
			})), s.d(t, "B", (function() {
				return Pt
			})), s.d(t, "C", (function() {
				return St
			})), s.d(t, "e", (function() {
				return Tt
			})), s.d(t, "p", (function() {
				return Nt
			})), s.d(t, "o", (function() {
				return Mt
			})), s.d(t, "D", (function() {
				return Lt
			})), s.d(t, "E", (function() {
				return Ft
			})), s.d(t, "u", (function() {
				return Rt
			})), s.d(t, "v", (function() {
				return At
			})), s.d(t, "H", (function() {
				return Dt
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/getParsedUserAgent/index.ts"),
				d = s("./src/reddit/actions/category/index.ts"),
				l = s("./src/reddit/actions/discoveryUnit.ts"),
				u = s("./src/reddit/actions/focusedVerticals/index.ts"),
				m = s("./src/reddit/actions/multireddit/index.ts"),
				p = s("./src/reddit/actions/pages/subreddit.ts"),
				b = s("./src/reddit/actions/pages/userDataRequest/index.ts"),
				h = s("./src/reddit/actions/shortcuts/active.ts"),
				f = s("./src/reddit/actions/subredditSettings.ts"),
				g = s("./src/reddit/endpoints/governance/posts.ts"),
				x = s("./src/reddit/endpoints/page/commentsPage.ts"),
				O = s("./src/reddit/endpoints/page/frontpage.ts"),
				v = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				j = s("./src/reddit/endpoints/page/subredditPage.ts"),
				y = s("./src/reddit/endpoints/profile/info.ts"),
				_ = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/lib/constants/index.ts"),
				C = (s("./src/lib/makeDraftKey/index.ts"), s("./src/lib/opener/index.ts")),
				E = s("./src/lib/pageTitle.ts"),
				w = (s("./src/reddit/models/PostDraft/index.ts"), s("./src/reddit/actions/dashboard.ts"), s("./src/reddit/actions/economics/helpers/async.ts")),
				I = s("./src/reddit/actions/externalAccount.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				T = s("./src/reddit/actions/login.ts"),
				N = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				M = s("./src/config.ts"),
				L = s("./src/lib/makeActionCreator/index.ts"),
				F = s("./src/reddit/actions/platform.ts"),
				R = s("./src/reddit/endpoints/me/index.ts"),
				A = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				D = s("./src/reddit/actions/pages/appeal/constants.ts");
			const B = "".concat(M.a.redditHelpUrl, "/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked"),
				V = Object(L.a)(D.b),
				U = Object(L.a)(D.a);
			var G = s("./src/reddit/actions/post.ts"),
				W = s("./src/reddit/actions/profile/index.ts"),
				H = s("./src/reddit/actions/redditEmbed.ts"),
				q = s("./src/reddit/actions/subreddit.ts"),
				z = s("./src/reddit/actions/toaster.ts"),
				K = s("./src/reddit/actions/users.ts"),
				X = s("./src/reddit/constants/adEvents.ts"),
				J = s("./src/reddit/constants/graphql.ts"),
				Q = s("./src/reddit/constants/page.ts"),
				Z = s("./src/reddit/constants/parameters.ts"),
				Y = s("./src/reddit/constants/postLayout.ts"),
				$ = s("./src/reddit/constants/posts.ts"),
				ee = s("./src/reddit/contexts/PageLayer/index.tsx"),
				te = s("./src/reddit/helpers/commentList/index.ts"),
				se = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ne = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				oe = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				re = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				ie = s("./src/reddit/models/Comment/index.ts"),
				ae = s("./src/reddit/models/Media/index.ts"),
				ce = s("./src/reddit/models/Multireddit/index.ts"),
				de = s("./src/reddit/models/Subreddit/index.ts"),
				le = s("./src/reddit/models/Toast/index.ts"),
				ue = s("./src/reddit/models/User/index.ts"),
				me = s("./src/reddit/selectors/category.ts"),
				pe = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				be = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				he = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				fe = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ge = s("./src/reddit/selectors/experiments/postSeo.ts"),
				xe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Oe = s("./src/reddit/selectors/frontpage.ts"),
				ve = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				je = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ye = s("./src/reddit/selectors/multireddit.ts"),
				_e = s("./src/reddit/selectors/platform.ts"),
				ke = s("./src/reddit/selectors/posts.ts"),
				Ce = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				Ee = s("./src/reddit/selectors/seo/index.ts"),
				we = s("./src/reddit/selectors/subreddit.ts"),
				Ie = s("./src/reddit/selectors/user.ts"),
				Pe = s("./src/lib/makeCommentsPageKey/index.ts"),
				Se = s("./src/lib/makeListingKey/index.ts"),
				Te = s("./src/lib/matchRoute/index.ts"),
				Ne = s("./src/reddit/actions/ads/index.ts"),
				Me = s("./src/reddit/helpers/canonicalUrls.ts"),
				Le = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Fe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Re = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Ae = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				De = s("./src/reddit/actions/gold/powerups.ts"),
				Be = s("./src/reddit/actions/seo/linksModule.ts"),
				Ve = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				Ue = s("./src/reddit/constants/experiments.ts");
			const Ge = e => {
				var t, s;
				const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					o = n && Object(_.m)(n),
					{
						sortToUse: r
					} = Object(ne.a)(e, o);
				return (!r || r === k.r.CONFIDENCE) && Object(Le.c)(e, {
					experimentEligibilitySelector: () => Object(Ie.H)(e),
					experimentName: Ue.j
				}) === Ue.m.Enabled
			};
			var We = s("./src/reddit/selectors/chatPost.ts"),
				He = s("./src/reddit/selectors/realtimeComments.ts"),
				qe = s("./src/reddit/selectors/seo/linksModule.ts"),
				ze = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				Ke = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			s("./src/reddit/actions/publicAccessNetwork/streams.ts");
			const Xe = 25,
				Je = 100,
				Qe = function(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return async (s, n, o) => {
						let {
							routes: r
						} = o;
						const a = n();
						Object(Te.a)(e, r, a) ? s(Object(i.b)(e)) : t ? Object(C.d)(e, "_blank") : window.location.assign(e)
					}
				},
				Ze = "PAGE__FRONTPAGE_PENDING",
				Ye = "PAGE__FRONTPAGE_LOADED",
				$e = "PAGE__FRONTPAGE_FAILED",
				et = Object(L.a)(Ze),
				tt = Object(L.a)(Ye),
				st = Object(L.a)($e),
				nt = (e, t) => async (s, o, r) => {
					const i = o();
					if (i.listings.postOrder.api.pending[e]) return;
					const a = Y.e[Object(ee.N)(i, {})];
					t.isMobile = Object(c.e)(i.meta.userAgent), t.recentPostIds = i.posts.recent, t.layout = a, t.useMockData = !!i.platform.currentPage && (!!i.platform.currentPage.queryParams.useMockData && Object(Ce.b)(i)), s(et({
						key: e
					})); {
						const e = i.platform.currentPage,
							s = e && e.url;
						s && (t.clickUrl = s)
					}
					const d = await Object(Re.a)("index", () => Object(O.a)(r.gqlContext(), Object(O.b)(i, t), Object(Ie.P)(i), t.statsdPathsForExperiments));
					s(Object(F.m)(d.status));
					const l = "error-".concat(e);
					if (d.ok) {
						const t = d.body;
						s(tt(Object.assign({
							key: e,
							meta: i.meta
						}, t))), s(z.f(l)), s(Object(Ne.b)(Ae.a.FRONTPAGE))
					} else s(st(Object.assign({
						error: d.error,
						key: e
					}, d.body))), s(z.e({
						id: l,
						kind: le.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: nt(e, t)
					}))
				}, ot = (e, t) => async (s, n) => {
					const o = n(),
						i = Object(Oe.a)(o),
						{
							sort: a = i
						} = e.params,
						c = Object(Se.a)(Q.a, a, e.queryParams),
						d = o.listings.postOrder.ids[c],
						l = o.listings.postOrder.api.error[c],
						u = o.listings.postOrder.api.pending[c],
						m = Z.x in e.queryParams && e.queryParams[Z.x].toUpperCase() || "",
						p = m in k.Sb && k.Sb[m];
					if (u || d && !l && !t) return void(d && (s(F.l({
						title: E.c()
					})), o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						s(Object(Ne.b)(Ae.a.FRONTPAGE))
					})));
					const b = Object(se.a)(o),
						h = Object(se.b)(b),
						f = [Object(se.c)(b)];
					await s(nt(c, Object.assign(Object.assign(Object.assign({}, r()(e.queryParams, Z.l)), r()(e.queryParams, Z.k)), {
						limit: h,
						sort: a,
						statsdPathsForExperiments: f,
						t: Object(oe.a)(a, p)
					}))), s(F.l({
						title: E.c()
					})), Object(Le.c)(o, {
						experimentEligibilitySelector: Le.a,
						experimentName: "redesign_aa"
					});
					const g = Object(be.a)(o, {});
					Object(be.e)(g) && s(Object(T.i)())
				}, rt = () => async (e, t) => {
					const s = t();
					if (!Object(qe.a)(s)) return e(Object(Be.c)())
				}, it = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					await Promise.all([s(Object(u.b)()), s(ot(e, t)), s(rt()), s(Object(ze.c)(Ke.R))])
				}, at = "PAGE__COMMENTSPAGE_PENDING", ct = "PAGE__COMMENTSPAGE_LOADED", dt = "PAGE__COMMENTSPAGE_FAILED", lt = Object(L.a)(at), ut = Object(L.a)(ct), mt = Object(L.a)(dt), pt = e => async (t, s) => {
					const {
						partialPostId: n,
						partialCommentId: o
					} = e.params, {
						subredditName: r
					} = e.params || "", a = n ? Object(_.m)(n) : "", c = o && Object(ie.f)(o), {
						path: l,
						queryParams: u
					} = e, m = Object(N.d)(l), p = s(), {
						instanceId: b
					} = u, {
						hasSortParam: f,
						sortToUse: g
					} = Object(ne.a)(p, a), x = ["context", "depth", "limit", Z.f].reduce((e, t) => {
						const s = parseInt(u[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: r,
						hasSortParam: f,
						instanceId: b,
						include_categories: !0
					});
					f && (x.sort = g), x.onOtherDiscussions = m, t(G.l(a)), await t(bt(a, c, x, g));
					const O = s().posts.models[a],
						v = Object(Ie.I)(s());
					if (O && "subreddit" === O.belongsTo.type && Object(he.a)(p)) {
						const e = O.belongsTo.id;
						await Object(De.f)(e, {
							fullData: !0,
							includeIdentity: v
						})
					}
					if (O) {
						const n = ((e, t) => {
								const s = Object(ke.ab)(e, {
										postId: t
									}),
									n = Object(ke.N)(e, {
										postId: t
									});
								if (!s || !n) return "";
								const o = e.posts.models[t].title;
								return "".concat(o, " : ").concat(s.name)
							})(s(), a),
							o = Object(we.M)(s(), {
								identifier: O.belongsTo
							});
						if ((O.media && O.media.type) === ae.o.LIVEVIDEO) {
							const e = Object(xe.d)(p),
								s = O.belongsTo.type === $.a.SUBREDDIT,
								n = e && s ? o.url : "/",
								r = Object(_.n)(O.id),
								a = "/rpan".concat(n).concat(r);
							return void t(Object(i.c)(a))
						}
						if (O.belongsTo.type !== $.a.SUBREDDIT || O.isSponsored) O.belongsTo.type === $.a.PROFILE && await t(W.d(o.name));
						else {
							!!Object(we.R)(p, {
								subredditId: O.belongsTo.id
							}) || await t(q.o(o.name))
						}
						const r = Object(fe.b)(p),
							c = !!Object(Ee.b)(p, {
								identifier: O.belongsTo
							}),
							l = !!r,
							u = m,
							b = !l && (c || !0) && (!Object(de.g)(o) && !Object(We.d)(p, {
								postId: a
							}) && !!o || !Object(_e.i)(p) && Object(ge.d)(p)),
							f = !!Object(ge.b)(p, O, !1) && !1;
						if (u || b || l || f) {
							Object(Fe.d)(Fe.a.LinkedPosts);
							const e = Object(Fe.c)(Fe.a.LinkedPosts),
								s = {
									adContext: {
										layout: J.a.Card,
										reddaid: p.user.reddaid,
										sourcePostId: a
									},
									range: k.Sb.WEEK.toUpperCase(),
									sort: k.I.TOP,
									subredditName: o.name
								},
								n = {
									postId: a
								},
								r = {
									correlationId: e
								},
								i = t(Object(Ve.a)(Object.assign(Object.assign(Object.assign(Object.assign({}, n), s), r), {
									includePostImageOCRAltText: f,
									includeListingBelowExperiment: l,
									includeOtherDiscussions: u,
									includePostFeed: b
								})));
							(b && c || f) && await i
						}
						t(Object(I.p)()), t(F.l({
							title: n
						}));
						const g = s().posts.instances[a] ? e.queryParams.instanceId : O.postId;
						t(Object(h.b)(g)); {
							const e = Object(me.d)(s(), {
								subredditName: o.name
							});
							await Promise.all(e.map(e => t(d.c(e))))
						}
					} else t(F.l({
						title: E.c()
					}));
					const {
						routePrefix: j
					} = e.params;
					$.b[j] === $.a.PROFILE ? Object(Me.d)(s(), t, e) : Object(Me.b)(s(), t, e)
				}, bt = (e, t, s, n) => async (o, r, i) => {
					var a;
					const c = r(),
						d = Object(Pe.a)(e, t, s),
						{
							subredditName: u
						} = s,
						m = c.commentsPage.keyToHeadCommentId.hasOwnProperty(d),
						b = c.commentsPage.api.fullyLoaded[d],
						h = c.commentsPage.api.error[d],
						f = c.commentsPage.api.pending[d],
						O = !Object(Ie.H)(c),
						v = Object(Ie.i)(c),
						_ = n === k.r.CHAT,
						C = !!c.platform.lastPage;
					if ((f || m && !h) && !(_ && C)) {
						if (m && !c.sidebarPromotedPosts.firstFetch) {
							const t = Object(_e.i)(c) ? Ae.a.COMMENTS_OVERLAY : Ae.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(Ne.b)(t)), Math.random() <= .01 && o(Object(Ne.a)(e))
							})
						}
						return void(b || o(gt(e, t, s)))
					}
					o(l.g());
					const E = c.user.prefs.commentMode;
					o(lt({
						key: d,
						postId: e,
						commentMode: E
					}));
					const I = Object.assign(Object.assign({}, s), _ ? {
						sort: k.r.LIVE
					} : O ? {
						sort: s.sort,
						depth: 2
					} : {
						sort: s.sort
					}); {
						const t = Object(ke.N)(r(), {
							postId: e
						});
						t && t.numComments && t.numComments > Je && (I.truncate = Xe)
					}
					const P = Object(Re.a)("comments", () => Object(x.a)(i.apiContext(), e, t, I, Object(pe.a)(r()), Object(He.a)(r()), Ge(r()))),
						S = !O && v && Object(y.d)(i.gqlContext(), Object(ue.e)(v)) || null,
						[T, N] = await Promise.all([P, S]);
					let M;
					if (o(Object(F.m)(T.status)), T.ok) {
						const t = Object.keys(T.body.posts).filter(e => !!T.body.posts[e].isMeta),
							s = T.body.posts[e];
						if (t.length) {
							const e = await Object(g.a)(i.apiContext(), s.belongsTo.id, t);
							e.ok && (M = e.body)
						}
						if (N && N.ok) {
							const e = null === (a = N.body.data.redditorInfoByName) || void 0 === a ? void 0 : a.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : y.a;
							T.body && T.body.account && Object.assign(T.body.account, t)
						}
						const n = Object(te.a)(T.body, e, c);
						o(ut(Object.assign({
							key: d,
							postId: e,
							meta: c.meta,
							governance: M,
							shouldCollapse: n
						}, T.body)))
					} {
						const n = Object(ke.N)(r(), {
							postId: e
						});
						n && T.body.comments && Object.keys(T.body.comments).length < n.numComments ? o(gt(e, t, s)) : T.ok && o(ft({
							key: d
						}));
						const i = Object(_e.i)(c) ? Ae.a.COMMENTS_OVERLAY : Ae.a.COMMENTS;
						o(Object(Ne.b)(i)), Math.random() <= .01 && o(Object(Ne.a)(e))
					}
					if (T.ok) {
						o(z.f(d));
						const t = Object(ke.N)(r(), {
							postId: e
						});
						o(G.t(t, X.a.CommentsView)), t && "subreddit" === t.belongsTo.type && T.body.comments && await o(Object(w.a)({
							commentIds: Object.keys(T.body.comments),
							postIds: [t.id],
							subredditId: t.belongsTo.id
						}))
					} else {
						let e;
						u && (o(Object(p.k)({
							key: d
						})), e = await Object(Re.a)("subreddit", () => Object(j.a)(i.apiContext(), u, {})), o(Object(F.m)(e.status)), o(Object(p.f)(e, u))), o(mt(Object.assign({
							error: T.error,
							key: d
						}, e ? e.body : T.body)))
					}
				}, ht = "PAGE__COMMENTSPAGE_LOADED_FULL", ft = Object(L.a)(ht), gt = (e, t, s) => async (n, o, r) => {
					var i;
					const a = Object(Pe.a)(e, t, s),
						c = o(),
						d = Object(Ie.I)(c),
						l = Object(Ie.i)(c),
						u = Object(x.a)(r.apiContext(), e, t, s, Object(pe.a)(c), Object(He.a)(c), Ge(c)),
						m = d && l && Object(y.d)(r.gqlContext(), Object(ue.e)(l)) || null,
						[p, b] = await Promise.all([u, m]);
					if (n(Object(F.m)(p.status)), p.ok) {
						if (b && b.ok) {
							const e = null === (i = b.body.data.redditorInfoByName) || void 0 === i ? void 0 : i.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : y.a;
							p.body && p.body.account && Object.assign(p.body.account, t)
						}
						const t = Object(te.a)(p.body, e, c);
						n(ut(Object.assign({
							key: a,
							postId: e,
							meta: c.meta,
							shouldCollapse: t
						}, p.body))), n(ft({
							key: a
						}));
						const s = o().posts.models[e],
							r = s && Object(ke.ab)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(je.a)(c, {
							subredditId: r.id
						}) && n(Object(f.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && p.body.comments && await n(Object(w.a)({
							commentIds: Object.keys(p.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(mt(Object.assign({
						error: p.error,
						key: a
					}, p.body)))
				}, xt = e => async (t, s, n) => {
					await t(Object(H.c)(e, !0))
				}, Ot = () => async (e, t, s) => {
					await e((() => async (e, t, s) => {
						let {
							apiContext: n
						} = s;
						const o = t(),
							r = await Object(R.a)(n());
						if (r.ok && r.body)
							if (r.body.account)
								if (o.user.account && o.user.account.isFPR) {
									const e = B;
									window.location.href = e
								} else e(V(r.body));
						else Object(A.a)(e, o);
						else e(U(r.error))
					})())
				}, vt = (e, t, s) => async (n, o, r) => {
					let {
						routes: a
					} = r;
					const c = o(),
						d = (t || c.platform.currentPage).routeMatch.match,
						l = Object(Te.a)(d.url, a);
					if (!l) return;
					const u = e.metaKey || e.ctrlKey || 1 === e.button;
					if (l.route && l.route.meta && (l.route.meta.name === k.Bb.INDEX || l.route.meta.name === k.Bb.MULTIREDDIT || l.route.meta.name === k.Bb.SUBREDDIT)) u ? window.open(d.url) : s ? n(Object(i.b)(d.url)) : await n(l.route.action(d, !0));
					else if (l.match && l.match.params && l.match.params.subredditName) {
						const {
							subredditName: e
						} = l.match.params, t = "/r/".concat(e, "/");
						if (u) window.open(t);
						else if (s) n(Object(i.b)(t));
						else {
							const s = Object(Se.a)(e, k.O.HOT);
							await n(Object(i.b)(t)), n(Object(p.i)(s, e, {}))
						}
					}
				}, jt = Object(L.a)("PAGE__FRONTPAGE_RELOADED"), yt = e => async (t, s, n) => {
					const o = s(),
						r = o.platform.currentPage.routeMatch.match;
					Object(ve.n)(o) || Object(ve.s)(o) || (e || t(jt()), await t(it(r, !0)))
				}, _t = "PAGE__MULTIREDDIT_FEED_PENDING", kt = "PAGE__MULTIREDDIT_FEED_LOADED", Ct = "PAGE__MULTIREDDIT_FEED_FAILED", Et = Object(L.a)(_t), wt = Object(L.a)(kt), It = Object(L.a)(Ct), Pt = (e, t, s, o, r) => async (i, a, c) => {
					const {
						gqlContext: d
					} = c, l = a();
					if (l.listings.postOrder.api.pending[e]) return;
					i(Et({
						key: e
					})), o.layout = Y.e[Object(ee.N)(l, {})];
					const u = {
							path: Object(ce.h)(t, s).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: o.sort ? o.sort.toUpperCase() : void 0,
							range: o.t ? o.t.toUpperCase() : void 0
						},
						p = await Object(Re.a)("multireddit", () => Object(v.a)(d(), u)),
						{
							data: b
						} = p.body,
						h = "error-".concat(e);
					if (p.ok && b) {
						const n = Object(re.a)(b);
						if (!b.multireddit) return r && i(z.f(h)), void i(It(Object.assign(Object.assign({}, n), {
							error: {
								type: k.E.NOT_FOUND_ERROR
							},
							key: e
						})));
						i(wt(Object.assign(Object.assign({
							key: e,
							meta: l.meta
						}, n), {
							account: n.account || Object(Ie.i)(l),
							multiredditsModelsState: l.multireddits.models
						}))), r && i(z.f(h)), i(Object(m.h)({
							multiredditName: s,
							username: t
						})), window.addEventListener("load", () => {
							i(Object(Ne.b)(Ae.a.MULTIREDDIT))
						})
					} else r && i(z.e({
						id: h,
						kind: le.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: Pt(e, t, s, o, r)
					}))
				}, St = (e, t) => async (s, n) => {
					const {
						multiredditName: o
					} = e.params;
					let {
						username: c
					} = e.params;
					if (!c) {
						let t = n();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void s(Object(i.c)("/"));
						!t.user.account && t.user.session && await s(K.r()), t = n();
						const {
							account: r
						} = t.user;
						if (!r) return void s(Object(i.c)("/"));
						c = Object(ue.e)(r);
						let d = "/user/".concat(c, "/m/").concat(o);
						const {
							sort: l
						} = e.params;
						return d += l ? "/".concat(l) : "", void s(Object(i.c)(Object(a.a)(d, e.queryParams)))
					}
					const {
						sort: d = k.O.HOT
					} = e.params, l = {
						multiredditName: o,
						username: c
					}, u = n();
					c || (c = u.user.account ? Object(ue.e)(u.user.account) : "");
					const m = Object(ce.h)(c, o),
						p = Object(Se.a)(m, d, e.queryParams),
						b = u.listings.postOrder.ids[p],
						h = u.listings.postOrder.api.error[p],
						f = u.listings.postOrder.api.pending[p],
						g = Z.x in e.queryParams && e.queryParams[Z.x].toUpperCase() || "",
						x = g in k.Sb && k.Sb[g];
					if (f || b && !h && !t) return void(b && (s(F.l({
						title: Object(ye.f)(n(), l)
					})), u.sidebarPromotedPosts.firstFetch || s(Object(Ne.b)(Ae.a.MULTIREDDIT))));
					await s(Pt(p, c, o, Object.assign(Object.assign(Object.assign({}, r()(e.queryParams, Z.l)), r()(e.queryParams, Z.k)), {
						sort: d,
						t: Object(oe.a)(d, x)
					}), !0));
					const O = n();
					Object(ye.d)(O, l) && s(F.l({
						title: Object(ye.f)(n(), l)
					})), Object(Me.c)(O, s, e)
				}, Tt = "PAGE__DASHBOARD_PENDING", Nt = (Object(L.a)(Tt), e => async (e, t) => {
					const s = t();
					e(F.l({
						title: E.a()
					})), Object(Ie.I)(s) || await e(K.r())
				}), Mt = e => async (e, t) => e(F.l({
					title: E.a()
				})), Lt = e => async (t, n) => {
					const o = n();
					if (t(F.l({
							title: E.f()
						})), e.queryParams.thanks) {
						const e = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted);
						setTimeout(() => {
							t(S.c()), t(e({
								confirmed: !1
							}))
						}, 1e3)
					}
					Object(Ie.I)(o) || await t(K.r())
				}, Ft = e => async (e, t) => {
					const s = t();
					e(F.l({
						title: E.g()
					})), Object(Ie.I)(s) || await e(K.r())
				}, Rt = e => async (t, s) => {
					const n = s(),
						o = e.params.thingId;
					t(Object(P.c)({
						correlationId: Object(Fe.d)(Fe.a.GildingFlow),
						thingId: o
					})), Object(Ie.I)(n) || await t(K.r());
					const r = s();
					if (!Object(Ie.I)(r)) return t(Object(P.f)())
				}, At = e => async (e, t) => {
					const s = t();
					Object(Ie.I)(s) || await e(K.r());
					const n = t();
					if (!Object(Ie.I)(n)) throw new Error("Failed to login")
				}, Dt = () => async (e, t, s) => await e(b.d())
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "APPEAL_PAGE_LOADED",
				o = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/userDataRequest/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				r = s("./src/graphql/operations/UserDataExportEligibility.json"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userDataRequest.ts");
			const l = "USER_DATA_REQUEST_PAGE_LOADING",
				u = "USER_DATA_REQUEST_PAGE_LOADED",
				m = "USER_DATA_REQUEST_PAGE_FAILED",
				p = Object(n.a)(l),
				b = Object(n.a)(u),
				h = Object(n.a)(m),
				f = () => async (e, t, s) => {
					let {
						apiContext: n,
						gqlContext: l
					} = s;
					const u = t(),
						m = Object(c.i)(u),
						f = Object(d.b)(u);
					if (m && f.success) return;
					e(p());
					const g = await Object(o.a)(n());
					if (!g.ok || !g.body) return void e(h(g.error));
					if (!g.body.account) return void Object(a.a)(e, u);
					const x = await (e => Object(i.a)(e, Object.assign({}, r)))(l());
					if (!x.ok) return void e(h());
					const O = g.body,
						v = x.body;
					e(b({
						account: O.account,
						userDataExportEligibility: v.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => Object.assign({
				api_type: "json",
				show_error_list: !0,
				thing_id: e.post.id,
				validate_on_submit: !0
			}, (e => !(!e.document || !e.document.length))(e) ? (e => ({
				text: null,
				richtext_json: JSON.stringify({
					document: e.document
				})
			}))(e) : (e => ({
				text: e.markdown,
				return_rtjson: !0
			}))(e));
			var h = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(p.a)(Object(u.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.db.POST,
					data: b(t)
				}).then(m.b),
				f = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				x = s("./src/reddit/helpers/trackers/lightbox.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/helpers/trackers/postComposer.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/actions/postCreation/constants.ts"),
				E = s("./src/reddit/actions/postCreation/general.ts");
			const w = Object(o.a)(C.l),
				I = Object(o.a)(C.m),
				P = Object(o.a)(C.y),
				S = Object(o.a)(C.E),
				T = Object(o.a)(C.F),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n(),
						a = Object(k.N)(i, {
							postId: e
						});
					t ? (s(Object(f.a)(a.permalink)), Object(x.d)(e, "edit")(i)) : Object(O.b)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = y.h.RICH_TEXT,
						u = "";
					c.type === j.o.TEXT ? (l = y.h.MARKDOWN, u = c.content) : c.type === j.o.RTJSON && (u = (l = c.rteMode || y.h.RICH_TEXT) === y.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: d,
						postContent: u,
						postId: e
					}))
				}, M = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					v.u(s(), Object(E.n)(d)), t(P(c.id));
					const l = await h(a(), e),
						u = !1 === l.body.success;
					if (t(w(c.id)), l.ok && !u) {
						t(Object(i.e)({
							kind: _.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(T(c.id));
						const e = Object(g.a)(l.body);
						t(Object(r.J)({
							[c.id]: e
						}))
					} else t(I(l.error))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				o = s.n(n),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = o.a.parse(t);
					u.has(e) && (s.related = e);
					const n = o.a.stringify(s);
					return n ? "?".concat(n) : ""
				},
				p = Object(r.a)(i.N),
				b = Object(r.a)(i.y),
				h = Object(r.a)(i.O),
				f = Object(r.a)(i.z),
				g = Object(r.a)(i.M),
				x = Object(r.a)(i.L),
				O = Object(r.a)(i.t),
				v = Object(r.a)(i.u),
				j = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const r = Object(c.h)(e),
						i = s();
					if (Object(l.d)(i, r)) return;
					t(p(r));
					const d = await Object(a.e)(o(), r),
						u = Date.now();
					if (d.ok && d.body && d.body.data) {
						const e = d.body.data;
						t(b({
							model: e,
							utcTimeStamp: u
						}))
					} else t(C({
						streamId: r,
						error: d.error,
						utcTimeStamp: u
					}))
				}, y = (e, t) => async (s, n) => Object(d.d)(n()) ? s(k(e, t)) : s(_()), _ = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const o = t();
					if (Object(l.f)(o)) return;
					e(h());
					const r = await Object(a.g)(n()),
						i = Date.now();
					if (r.ok && r.body && r.body.data) {
						const t = r.body.data;
						e(f({
							models: t,
							utcTimeStamp: i
						}))
					} else e(E({
						error: r.error,
						utcTimeStamp: i
					}))
				}, k = (e, t) => async (s, n, o) => {
					let {
						gqlContext: r
					} = o;
					const i = n();
					if (Object(l.f)(i)) return;
					s(h());
					const c = await Object(a.f)(r(), e, t),
						d = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(f({
							listingName: e,
							models: t,
							utcTimeStamp: d
						}))
					} else s(E({
						error: c.error,
						utcTimeStamp: d
					}))
				}, C = e => async t => {
					t(g(e))
				}, E = e => async t => {
					t(x(e))
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				r = s("./src/reddit/endpoints/me/index.ts"),
				i = s("./src/reddit/helpers/pageActionLoginRedirect.ts");
			const a = "REDDIT_EMBED_LOADED",
				c = "REDDIT_EMBED_FAILED",
				d = Object(n.a)("REDDIT_EMBED_PENDING"),
				l = Object(n.a)(a),
				u = Object(n.a)(c),
				m = (e, t) => async (e, s, n) => {
					let {
						apiContext: a
					} = n;
					const c = s();
					e(d());
					const m = await Object(r.a)(a());
					m.ok && m.body ? !t || m.body.account ? (e(l(m.body)), e(Object(o.c)())) : Object(i.a)(e, c) : e(u(m.error))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/shortcuts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = "SHORTCUTS__ACTIVE_COMMENT_SET",
				o = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./src/lib/fastdom/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/chat/unreadCount.ts"),
				i = s("./src/reddit/actions/inbox.ts"),
				a = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/selectors/chat.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const u = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				m = Object(o.a)(u),
				p = e => async (t, s) => {
					const n = s(),
						o = Object(d.a)(n),
						a = Object(d.d)(n),
						c = Object(l.D)(n),
						{
							basicChannelCount: u,
							inboxCount: m
						} = e;
					o !== u && t(Object(r.b)(Object.assign(Object.assign({}, a), {
						basicChannelCount: u
					}))), m && m !== c && t(Object(i.b)({
						inboxCount: m
					})), (o !== u || m && m !== c) && t(f())
				}, b = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(c.b)(), window.document.title = "(".concat(e, ") ").concat(t)
					})
				}, h = e => {
					return {
						inboxCount: Object(l.D)(e) || 0,
						basicChannelCount: Object(d.a)(e) || 0
					}
				}, f = () => async (e, t) => {
					const s = t(),
						n = Object(a.e)(s, {});
					if (!(Object(l.H)(s) || Object(l.I)(s)) || !n) return;
					const o = (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = h(e);
						return t + s
					})(s);
					b(o, n), e(m({
						hasUnreadMessages: !!o
					}))
				}, g = () => async (e, t) => {
					{
						e(f());
						const s = h(t());
						Object(c.c)(s)
					}
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
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				b = s("./src/reddit/selectors/media.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const f = [{
					event: p.a.ViewableImpression,
					threshold: d.k,
					viewabilityMinimum: d.l
				}, {
					event: p.a.Impression,
					threshold: d.b,
					viewabilityMinimum: d.c
				}, {
					event: p.a.VendorFullyInView,
					threshold: d.a,
					viewabilityMinimum: d.e
				}, {
					event: p.a.GroupMViewable,
					threshold: d.a,
					viewabilityMinimum: d.l
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: d.k,
					viewabilityMinimum: d.g,
					remainingTime: d.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: d.k,
					viewabilityMinimum: d.f,
					remainingTime: d.f,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: p.a.VideoViewableImpression,
					threshold: d.k,
					viewabilityMinimum: d.j,
					remainingTime: d.j,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: d.a,
					viewabilityMinimum: d.h,
					remainingTime: d.h,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: d.j,
					remainingTime: d.j,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
					threshold: d.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				x = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: n,
						remainingTime: o,
						threshold: r = null,
						viewabilityMinimum: i,
						checkAudible: a = !1,
						timeViewingInterrupted: c
					} = e;
					return {
						event: t,
						cumulative: s,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: r,
						remainingTime: o,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: i,
						timeViewingInitialized: 0,
						timeViewingInterrupted: c
					}
				}),
				O = () => x(f),
				v = () => x(g),
				j = [d.b, d.d, d.k, d.i, d.a],
				y = [d.b, d.k, d.i, d.a],
				_ = [d.b, d.d, d.k, d.a],
				k = e => "boolean" == typeof e.cumulative && e.cumulative,
				C = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.c)(e, {
							postId: s.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: s
						} = t;
						const n = Object(h.i)(e, {
							postId: s.id
						});
						if (n) return n.length
					},
					isAudible: e => !Object(b.c)(e) && !!Object(b.d)(e),
					isPlaying: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.e)(e, {
							postId: s.id
						})
					}
				}),
				E = Object(m.a)(C);
			class w extends r.Component {
				constructor(e) {
					super(e), this.viewabilityStats = O(), this.videoStats = v(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, d.q), this.props.trackVideo && this.handleThresholds(e, d.o, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						o()(this.state.event, e) || this.setState({
							event: e
						}), this.props.trackDisplay && this.viewabilityStats.forEach(t => {
							this.checkViewability(e, t)
						}), this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (l.d(e.id, d.q, !1), this.viewabilityStats.forEach(e => {
						k(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, d.o, !0), this.videoStats.forEach(e => {
						k(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, d.o, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, n = !1,
						o = !1;
					return "object" == typeof t ? (s = t.threshold, n = !!t.playing, o = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!n || this.props.isPlaying) && (!o || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: n
					} = this.props, r = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!o()(r, this.inViewStats) && r.length > 0 && l.b(n.id, r, s);
					const i = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!o()(i, this.outOfViewStats) && i.length > 0 && l.d(n.id, i, s), this.outOfViewStats = i, this.inViewStats = r
				}
				isAdequatelyInView(e, t) {
					return !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, d.f) : e.viewabilityMinimum = d.f, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: n
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = n * s < 3e5 ? d.a : d.i, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && n * s > 242500 && (t.threshold = d.k), t
				}
				checkViewability(e, t) {
					if (k(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						k(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = j;
					return e && !t ? s = _ : !e && t && (s = y), i.a.createElement(c.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = E(w)
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				is2020: "mPBdw3hQ6e5P5e_cMM92-",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/hooks/useButtons2020.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = u(e, ["className"]);
				const n = Object(a.a)();
				return o.a.createElement(i.a, l({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView,
						[d.a.is2020]: n
					})
				}, s))
			}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, s) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, s) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const b = (e, t, s, n, o) => {
				const r = o || "*:*",
					i = s || l.P;
				return Object(p.a)("/search", {
					q: r,
					sort: i,
					t: n,
					category_name: e,
					category: t
				})
			};
			var h = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => s => Object.assign(Object.assign({
				source: "post",
				action: "click",
				noun: "meta_flair"
			}, f.defaults(s)), {
				correlationId: Object(h.c)(h.a.SearchResults),
				post: f.post(s, e),
				search: f.postFlairClickToSearch(s, t),
				subreddit: f.subreddit(s)
			});
			var x = s("./src/reddit/components/CategoryTag/index.m.less"),
				O = s.n(x);
			class v extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(g(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						s = e.categoryId,
						n = e.categoryName,
						r = o.a.createElement("span", null, n);
					return o.a.createElement("span", {
						className: Object(d.a)(O.a.metaFlair, {
							[O.a["m-lightboxHeader"]]: t
						})
					}, o.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(n, s, l.Lb.Relevance, l.Sb.DAY),
						children: r
					}))
				}
			}
			var j = s("./src/reddit/components/CategoryTagList/index.m.less"),
				y = s.n(j);
			const _ = Object(r.b)(() => Object(i.c)({
				labelNSFW: c.Q
			}));
			t.a = _(Object(a.c)(e => {
				let {
					postCategories: t,
					postId: s,
					inLightboxHeader: n,
					sendEvent: r
				} = e;
				return o.a.createElement("span", {
					className: n ? null : y.a.categoryTagWrapper
				}, t.map(e => o.a.createElement(v, {
					postId: s,
					category: e,
					key: e.categoryId,
					inLightboxHeader: n,
					sendEvent: r
				})))
			}))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(a);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: n,
					forceShowNSFW: a,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: b,
					url: h,
					usePreview: f
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.thumbnailContainer, t)
				}, o.a.createElement(i.a, {
					className: Object(r.a)(c.a.thumbnail, s),
					containerClassName: b,
					crosspost: n,
					forceShowNSFW: a,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					url: m ? void 0 : h,
					usePreview: f
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
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
				chain: "sfueWOUNVDpNGfP_Ow2yN",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return W
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return z
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				x = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				j = s("./src/reddit/components/PostMeta/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				_ = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				k = s("./src/reddit/components/PostTitle/index.tsx"),
				C = s("./src/reddit/components/PostTopMeta/index.tsx"),
				E = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				N = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				A = s.n(R),
				D = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(D);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 16;
			class G extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						isMeta: a,
						inSubredditOrProfile: v,
						eventFactory: S,
						first: T,
						flairStyleTemplate: R,
						formatTitle: D,
						hostPostId: G,
						isCheckboxSelected: H,
						isCurrentUserProfilePost: q,
						isFrontpage: z,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: X,
						isOverlay: J,
						imageGalleryCurrentItem: Q,
						moderatorPermissions: Z,
						modModeEnabled: Y,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						poll: se,
						post: ne,
						redditStyle: oe,
						scrollerItemRef: re,
						showBulkActionCheckbox: ie,
						showEditFlair: ae,
						showMedia: ce,
						subredditOrProfile: de,
						toggleCheckbox: le,
						userIsOp: ue,
						shouldShowGalleryTileOption: me
					} = this.props, pe = oe ? void 0 : R, be = this.props.crosspost || void 0, he = Object(L.a)(Z), fe = Object(N.a)(Z), ge = Object(M.a)(Z), xe = Y && L.a, Oe = !!ne.media && ne.media.type === I.o.RTJSON, ve = ue && Oe, je = v && !ce, ye = !!ne.media && Object(I.H)(ne.media), _e = {
						flairStyleTemplate: pe,
						post: ne,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: q,
						isOverlay: J,
						shouldShowSubscribeButton: !(z && X),
						subredditOrProfile: de
					}, ke = Object(r.s)(ne, Q), {
						source: Ce
					} = ke, Ee = o.a.createElement(O.a, {
						className: Object(i.a)(A.a.classicPostStyles, B.a.postContainer, Object(F.a)(this.props), T ? B.a.mFirst : void 0, e),
						isOverlay: J,
						style: Object.assign(Object.assign({}, Object(F.d)(this.props)), Object(F.b)(this.props.flairStyleTemplate)),
						post: ne,
						onClick: $,
						eventFactory: S
					}, o.a.createElement(_.a, {
						model: ne,
						handleVote: s,
						showBulkActionCheckbox: ie,
						isCheckboxSelected: H,
						toggleCheckbox: le,
						flairStyleTemplate: pe,
						redditStyle: oe,
						subreddit: de
					}), o.a.createElement(x.a, {
						"data-click-id": "background",
						flairStyleTemplate: pe
					}, o.a.createElement(m.a, {
						className: B.a.eventMeta,
						post: ne
					}), o.a.createElement("div", {
						className: B.a.mainBody
					}, o.a.createElement("div", {
						className: je ? B.a.expandoContainer : B.a.thumbnailContainer
					}, !je && o.a.createElement(P.a, {
						className: B.a.classicThumbnail,
						crosspost: be && ne,
						isMeta: a,
						post: be || ne,
						redditStyle: oe,
						templatePlaceholderImage: pe && pe.postPlaceholderImage,
						removeLink: ye
					}), o.a.createElement(p.a, {
						crosspost: be,
						className: B.a.rightExpando,
						isExpanded: !!n,
						post: ne,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: B.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(U, "px")
						}
					}, o.a.createElement(k.c, {
						className: se ? B.a.titleWithPoll : void 0,
						format: D,
						poll: se,
						post: ne,
						redditStyle: oe,
						size: k.b.Medium,
						titleColor: pe && pe.postTitleColor,
						isOverlay: J
					}, ne.source && !be && o.a.createElement(w.a, {
						href: ne.source.url,
						isSponsored: ne.isSponsored,
						postId: ne.id,
						source: ne.source
					}, Object(c.a)(ne))), o.a.createElement(j.a, V({
						key: "PostMeta"
					}, _e)), Y && he && Object(g.c)(ne) && o.a.createElement(f.a, {
						onIgnoreReports: ee,
						reportable: ne
					}), o.a.createElement("div", {
						className: B.a.spacer
					}), ne.isSponsored && Ce && Ce.url && o.a.createElement(d.a, {
						className: B.a.adLinkWrapper
					}, o.a.createElement(l.a, {
						post: ne,
						adLinkContent: ke
					})), o.a.createElement("div", {
						className: B.a.flatlistContainer
					}, o.a.createElement(p.a, {
						className: B.a.leftExpando,
						crosspost: be,
						isExpanded: !!n,
						post: ne,
						useMediaIcons: !1
					}), o.a.createElement(u.a, {
						className: B.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: pe,
						model: ne,
						onVoteClick: s
					}), o.a.createElement(b.a, {
						className: B.a.flatlistSeparator
					}), o.a.createElement(b.c, {
						className: B.a.flatlist,
						currentUser: t,
						hasModFlairPerms: fe,
						hasModPostPerms: he,
						hasModFullPerms: ge,
						hostPostId: G,
						isOverlay: !!J,
						modModeEnabled: Y,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						post: ne,
						showEditPost: ve,
						showEditFlair: ae,
						tooltipType: J ? C.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.h)({
							editPost: !xe,
							save: !xe,
							hide: !xe,
							report: !xe
						})
					})), o.a.createElement(h.d, {
						postId: ne.id
					}))), W(ne, re, n, me, K)));
					return o.a.createElement(E.b, null, Ee)
				}
			}
			const W = (e, t, s, n, r) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: B.a.crosspostMediaWrapper
				}, H(e, t, n, r)) : H(e, t, n, r) : null,
				H = (e, t, s, n) => o.a.createElement(v.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				q = Object(a.a)(G),
				z = Object(T.a)(q);
			t.default = Object(S.a)(q)
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				distinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Approve: "_19WnAmcAChJM1wTzSOV1p2",
				approve: "_19WnAmcAChJM1wTzSOV1p2",
				Lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				Remove: "_1TzXdATrX8P6QZjY89r6Ln",
				remove: "_1TzXdATrX8P6QZjY89r6Ln",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				Spam: "_2rc9zwviU90yoF6FCv5jvs",
				spam: "_2rc9zwviU90yoF6FCv5jvs",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return R
			})), s.d(t, "a", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/comment/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/selectors/moderatingComments.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/helpers.tsx"),
				E = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				w = s.n(E);
			var I = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(C.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", w.a),
				P = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				L = s.n(M),
				F = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const R = l.a.wrapped(h.c, "RestrictedButton", L.a),
				A = l.a.wrapped(k.a, "Approve", L.a),
				D = l.a.wrapped(P.a, "Lock", L.a),
				B = l.a.wrapped(S.a, "Remove", L.a),
				V = l.a.wrapped(T.a, "Spam", L.a),
				U = l.a.wrapped(N.a, "Show", L.a),
				G = l.a.wrapped(I, "DistinguishShield", L.a),
				W = Object(g.t)(),
				H = e => "Distinguish--Dropdown--".concat(e),
				q = Object(a.c)({
					currentUser: _.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(v.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(y.b)(H(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(g.g)(e, t) || Object(j.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: g.P
				}),
				z = Object(i.b)(q, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(u.H)(s.id)),
						onDistinguishComment: (t, n) => e(Object(u.S)(s.id, t, n)),
						onLockComment: () => e(Object(u.X)(s.id)),
						onRemoveComment: () => e(Object(u.cb)(s.id, !1)),
						onSpamComment: () => e(Object(u.cb)(s.id, !0)),
						onShowComment: () => e(Object(u.Y)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(m.h)({
							tooltipId: H(s.id)
						}))
					}
				});
			t.c = W(z(l.a.wrapped(Object(f.c)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: u,
					onApproveComment: m,
					onDistinguishComment: h,
					onLockComment: f,
					onRemoveComment: g,
					onShowComment: v,
					onSpamComment: j,
					onToggleDistinguishDropdown: y,
					sendEvent: _
				} = e, k = F(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const C = Object(x.a)(l),
					E = Object(b.b)(s),
					w = s.isApproved && E,
					I = !!o && o.isEmployee,
					P = !s.isRemoved,
					S = a,
					T = e => _(Object(O.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || E) && r.a.createElement(R, {
					text: w ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), T("approve")
					}
				}, r.a.createElement(A, null)), P && r.a.createElement(r.a.Fragment, null, r.a.createElement(R, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						g(), s.bannedBy === d.k ? T("confirm_remove") : T("remove")
					}
				}, r.a.createElement(B, null)), r.a.createElement(R, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						j(), T("spam")
					}
				}, r.a.createElement(V, null))), r.a.createElement(R, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						f(), T(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(D, null)), i && !I && !s.bannedBy && r.a.createElement(R, {
					className: Object(c.a)({
						[L.a.selected]: k.isDistinguishDropdownOpen
					}),
					onClick: () => {
						T("mod_distinguish_menu"), y()
					}
				}, r.a.createElement(G, null), r.a.createElement(p.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: k.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: I,
					isUserMod: C,
					onDistinguishComment: h,
					sendEventWithName: T,
					tooltipId: H(s.id)
				})), S && r.a.createElement(R, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
					}
				}, r.a.createElement(U, null)))
			}), "CommentModToolsFlatlist", L.a)))
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				IconText: "_6cNM5NdF82ASM5hiBVNN5",
				iconText: "_6cNM5NdF82ASM5hiBVNN5",
				Animate: "_3j98tX1WZapEArV-4rmJe5",
				animate: "_3j98tX1WZapEArV-4rmJe5",
				top: "_3Dr1MoYY5Yv4YhbQFFcks0",
				bottom: "_1GRYNQhMsR-00cWDJcE3UJ",
				bigCircle: "_85rqvRijdIsn3s0j-gUaw",
				midCircle: "RS1g6Gd_W67wwWKSteEB1",
				smallCircle: "lRlGcfTzZ7njZnIUyvhGH",
				play: "_3Kxa8oHGuT_QpP4zIN5jrV",
				blinker: "_20WvB_9deo7bJVi4af1dSS"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(u);
			const p = .1,
				b = Object(c.c)({
					isChatPost: l.d
				}),
				h = Object(a.b)(b);
			class f extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= p ? this.state.visible || this.setState({
							visible: !0
						}) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: !1
					}
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t
					} = this.props, s = t && e;
					return t ? i.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: p,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(m.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.top, {
							[m.a.play]: s
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})), i.a.createElement("p", {
						className: m.a.IconText
					}, o.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: s
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})))) : null
				}
			}
			t.a = h(f)
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/constants/componentTestIds.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				h = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = s("./src/reddit/selectors/chatPost.ts"),
				g = s("./src/reddit/selectors/experiments/postSeo.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CommentsLink/index.m.less"),
				j = s.n(v);
			const y = Object(i.b)(() => Object(c.c)({
					isChatPost: f.d,
					isPostSEOEligible: g.d,
					postPermalink: x.M,
					shouldOpenPostInNewTab: O.X
				})),
				_ = e => {
					let t, {
						type: s,
						numComments: i,
						isChatPost: a,
						modModeEnabled: c,
						hasModPostPerms: d,
						shouldShowIcon: l,
						shouldShowText: m,
						text: b
					} = e;
					return t = b || (s === p.g.Compact || a || c && d ? Object(u.b)(i) : n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(i, "number", Object(u.b)(i))], {
						hk: "1QeOde"
					})), r.a.createElement(o.Fragment, null, l && r.a.createElement(h.a, {
						className: j.a.commentIcon,
						role: "presentation"
					}), m && r.a.createElement("span", {
						className: j.a.text
					}, t))
				};
			t.a = y(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPost: n,
					isCommentPermalink: o,
					isCommentsPage: i,
					isOverlay: c,
					isPostSEOEligible: u,
					modModeEnabled: p,
					numComments: h,
					onClick: f,
					postPermalink: g,
					shouldOpenPostInNewTab: x,
					shouldShowIcon: O = !0,
					shouldShowText: v = !0,
					text: y,
					type: k
				} = e, C = i && !o && !u, E = o && !c, w = r.a.createElement(_, {
					type: k,
					numComments: h,
					isChatPost: n,
					modModeEnabled: p,
					hasModPostPerms: s,
					shouldShowIcon: O,
					shouldShowText: v,
					text: y
				});
				return C ? r.a.createElement("div", {
					className: Object(d.a)(j.a.commentsLink, j.a.defaultCursorWrapper, t),
					onClick: f
				}, w) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": m.a,
					className: Object(d.a)(j.a.commentsLink, j.a.link, t),
					target: x ? "_blank" : void 0,
					to: E ? Object(b.b)(g) : Object(l.a)(g, !0),
					onClick: f
				}, w)
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const m = Object(i.a)(e => {
				var {
					className: t
				} = e, s = u(e, ["className"]);
				return o.a.createElement(a.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/fastdom/index.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				b = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const x = {
					height: 200,
					width: 200
				},
				O = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				v = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: o,
						caretColor: i
					} = e, a = g(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", f({
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign(Object.assign({}, n), {
							"--contentTooltip-caretColor": i && i[o] ? i[o] : Object(m.a)(e).body
						})
					}, a), t)
				}),
				j = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				y = Object(c.a)(v, [n.a.Click, n.a.Keydown]),
				_ = Object(i.b)(j);
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						u.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									o = n.left > t.width;
									break;
								case "right":
									o = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = n.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : O(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: n
					} = this.getPositions(e);
					return r.a.createElement(y, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = _(k)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				v = s.n(O),
				j = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = j.a.div("Container", v.a),
				k = j.a.div("PostMetaWrapper", v.a),
				C = j.a.wrapped(p.c, "PostTitle", v.a),
				E = j.a.div("FlatList", v.a),
				w = j.a.div("FlatItem", v.a),
				I = j.a.span("FlatListDotSpacer", v.a),
				P = j.a.wrapped(_, "LinkContainer", v.a),
				S = j.a.div("Content", v.a),
				T = j.a.div("ThumbnailContainer", v.a),
				N = Object(c.c)({
					isCurrentUserProfilePost: g.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Bb.TOPIC),
					post: g.N,
					shouldOpenPostInNewTab: x.X,
					subreddit: g.ab
				}),
				M = Object(i.b)(N);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subreddit: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					d = t;
				return i && !i.media ? r.a.createElement(P, {
					className: d
				}, r.a.createElement(S, null, r.a.createElement(k, null, r.a.createElement(m.a, c)), L(i), i.source && r.a.createElement(b.a, {
					post: i
				}), R(e)), D(e)) : r.a.createElement(_, {
					className: d
				}, r.a.createElement(k, null, r.a.createElement(m.a, c)), L(i), F(e), R(e))
			});
			const L = e => r.a.createElement(C, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign(Object.assign({}, t), {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(u.a, y({}, n, {
						className: v.a.mediaContainer
					})))
				},
				R = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(E, null, r.a.createElement(w, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(w, null, A(e)))
				},
				A = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				D = e => r.a.createElement(T, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = s.n(m);
			const b = a.a.div("DistinguishWrapper", p.a),
				h = a.a.wrapped(u.a, "Inline", p.a),
				f = a.a.wrapped(d.a, "RadioOff", p.a),
				g = a.a.wrapped(l.a, "RadioOn", p.a),
				x = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(g, null) : o.a.createElement(f, null), e.text),
				O = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: u,
						onDistinguishComment: m
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: s
					}, o.a.createElement(x, {
						onClick: () => m(r.C.NONE, null),
						selected: !d && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && o.a.createElement(x, {
						onClick: () => m(r.C.MODERATOR, null),
						selected: d && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), u && c && o.a.createElement(x, {
						onClick: () => m(r.C.MODERATOR, !0),
						selected: d && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(x, {
						onClick: () => m(r.C.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && c && u && o.a.createElement(x, {
						onClick: () => m(r.C.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var v = Object(c.a)(O);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: l,
					sendEventWithName: u,
					tooltipId: m
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: m
				}, o.a.createElement(v, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: m,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? u(!c && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? u("admin_distinguish") : a && e !== r.C.MODERATOR ? u("undistinguish") : s && e !== r.C.ADMIN && u("admin_undistinguish"), c && !t && u("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(u.a)(n)) return null;
				const a = n && n.eventInfo,
					m = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !m && h && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				a = s("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(m),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", p.a),
				f = b.a.span("PostEventPastText", p.a),
				g = b.a.span("PostEventNowText", p.a),
				x = b.a.span("Container", p.a),
				O = b.a.wrapped(l.a, "CalendarIcon", p.a),
				v = b.a.wrapped(u.a, "LiveIcon", p.a),
				j = b.a.div("LoadingState", p.a);
			class y extends n.Component {
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
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: l,
						eventStart: u
					} = s, m = Object(r.e)(u, n);
					let p, b;
					if (this.state.mounted || m === r.a.Live) p = function(e, t, s) {
						const n = Object(r.e)(e, t),
							o = new Date(e * a.Fb);
						let d;
						if (n === r.a.Live || s) return i.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(d, " @ ").concat(l)
					}(u, n, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = o.a.createElement(j, {
							className: e
						})
					}
					if (l) b = o.a.createElement(g, null, o.a.createElement(v, null), p);
					else if (m === r.a.Future) b = o.a.createElement(h, null, o.a.createElement(O, null), p);
					else {
						if (m !== r.a.Past) return null;
						b = o.a.createElement(f, null, o.a.createElement(O, null), p)
					}
					return o.a.createElement(x, {
						className: e
					}, b)
				}
			}
			t.a = y
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				f = s("./src/reddit/icons/fonts/helpers.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				x = s.n(g);
			var O = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(f.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", x.a),
				v = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				j = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				_ = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				k = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				C = s("./src/reddit/icons/fonts/Text/index.tsx"),
				E = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				w = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(P);
			const T = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.r)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(S.a.icon, S.a.hideOnHover);
					if (t) return r.a.createElement(p.a, {
						className: n
					});
					if (s.pollData) return r.a.createElement(w.a, {
						className: n
					});
					switch (e) {
						case I.o.GIFVIDEO:
							return r.a.createElement(j.a, {
								className: n
							});
						case I.o.IMAGE:
							return r.a.createElement(k.a, {
								className: n
							});
						case I.o.TEXT:
						case I.o.RTJSON:
							return r.a.createElement(C.a, {
								className: n
							});
						case I.o.VIDEO:
							return r.a.createElement(v.a, {
								className: n
							});
						case I.o.GALLERY:
							return r.a.createElement(E.a, {
								className: n
							});
						case I.o.EMBED:
						default:
							return r.a.createElement(y.a, {
								className: n
							})
					}
				};
			t.a = T(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: i,
					post: l,
					toggle: p,
					useMediaIcons: f
				} = e, g = s || l, x = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(m.a)(g)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: p
				}, i ? r.a.createElement(b.a, {
					className: S.a.icon
				}) : f ? r.a.createElement(r.a.Fragment, null, N(g.media && g.media.type, x, l), r.a.createElement(h.a, {
					className: Object(c.a)(S.a.icon, S.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: S.a.icon
				})) : g.source && g.source.url ? r.a.createElement(u.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(_.a, {
					className: Object(c.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, r.a.createElement(O, {
					className: S.a.icon
				}))
			})
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return G
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				i = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Emoji/index.m.less"),
				h = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const x = p.a.wrapped(e => {
				var {
					backgroundImage: t,
					style: s
				} = e, n = g(e, ["backgroundImage", "style"]);
				return c.a.createElement("div", f({
					style: Object.assign(Object.assign({}, s || {}), {
						backgroundImage: "url('".concat(t, "')")
					})
				}, n))
			}, "EmojiDisplay", h.a);
			var O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/constants/colors.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = s("./src/reddit/icons/svgs/Close/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = s("./src/reddit/components/Flair/index.m.less"),
				P = s.n(I);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var T = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const N = Object(v.a)(O.b),
				M = p.a.div("FlairWrapper", P.a),
				L = p.a.wrapped(d.a, "CloseButton", P.a),
				F = p.a.wrapped(Object(m.a)(e => {
					var {
						forceSmallEmojis: t,
						theme: s
					} = e, n = T(e, ["forceSmallEmojis", "theme"]);
					const o = s;
					return c.a.createElement(x, S({
						style: Object.assign({}, R(!!t, o) || {})
					}, n))
				}), "FlairEmojiDisplay", P.a),
				R = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: "".concat(t.subredditContext.emojiHeight, "px"),
						width: "".concat(t.subredditContext.emojiWidth, "px")
					}
				},
				A = (e, t) => {
					const s = t ? "/r/".concat(t, "/search") : "/search",
						n = "".concat(t ? "flair_name" : "flair", ':"').concat(e, '"');
					return Object(l.a)(s, {
						[y.p]: n,
						[y.s]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? c.a.createElement(_.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(_.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: A(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class B extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[P.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(w.a)(this.props).flair,
							color: "".concat(G(this.props))
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(L, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(C.a, {
						className: P.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(w.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(N, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(D, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const V = Object(m.a)(B),
				U = Object(m.a)(e => {
					let t = "",
						s = !1;
					const n = e.richtext.map((n, o) => {
						if (n.e === E.c.Emoji) {
							const r = n;
							return t += r.a, s = !0, c.a.createElement(F, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: o,
								title: r.a
							})
						} {
							const e = n;
							return t += e.t, c.a.createElement("span", {
								key: o
							}, e.t)
						}
					});
					let o;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (o = {
						marginTop: "-".concat(e.theme.subredditContext.emojiHeight - 16, "px")
					});
					const r = c.a.createElement(M, {
						className: Object(u.a)(e.className, {
							[P.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: Object.assign(Object.assign({}, o), {
							backgroundColor: e.backgroundColor || Object(w.a)(e).flair,
							color: "".concat(G(e))
						})
					}, n, e.isSelected && c.a.createElement(L, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(C.a, {
						className: P.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(w.a)(e).flair
						}
					})));
					return c.a.createElement(D, {
						flair: r,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				G = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(w.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(k.a)(Object(w.a)(e).post, j.a.black, j.a.white) : e.textColor === E.e.Dark ? j.a.black : j.a.white,
				W = p.a.wrapped(V, "TextFlair", P.a),
				H = p.a.wrapped(U, "RichTextFlair", P.a),
				q = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.j)(.1, Object(w.a)(r()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				z = p.a.wrapped(e => {
					const t = q(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: "1px solid ".concat(t),
								color: t
							}
						}, e.text);
					return c.a.createElement(D, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", P.a);

			function K(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: o,
					isFlairFilter: r,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: h
				} = e, f = Object(u.a)({
					[P.a.flairVariant]: r,
					[P.a.small]: r && !e.large,
					[P.a.large]: r && e.large
				}, t);
				switch (o.type) {
					case E.f.Richtext:
						return s || !o.richtext ? null : c.a.createElement(H, {
							backgroundColor: o.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: r,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: o.richtext,
							subredditName: m,
							textColor: o.textColor,
							to: h
						});
					case E.f.Text:
						return s || !o.text ? null : c.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: f,
							isFlairFilter: r,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: h
						});
					case E.f.Meta:
						return c.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: t,
							isFlairFilter: r,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: h
						});
					case E.f.Nsfw:
					case E.f.Spoiler:
						return c.a.createElement(z, {
							className: t,
							text: o.text,
							type: o.type
						});
					case E.f.Quarantined:
						return null;
					case E.f.Oc:
						return c.a.createElement(W, {
							backgroundColor: j.a.alienblue,
							text: o.text,
							textColor: E.e.Light,
							tooltip: n.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return o.text ? c.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: f,
							isFlairFilter: r,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							redditStyle: !p,
							to: h
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.Q
				}),
				b = Object(a.b)(p),
				h = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return "".concat(e.type, "--").concat(t)
					}
					return "".concat(e.type, "--").concat(e.text)
				};
			t.a = b(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: n,
					onMouseDown: r,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const b = !!c.find(e => e.type === u.f.Richtext),
					f = c.map(e => {
						if (e.type === u.f.Text && b) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							c = "/r/".concat(p, "/"),
							f = r ? () => r(e) : o.a;
						return i.a.createElement(d.b, {
							isFlairFilter: s,
							key: h(e),
							onClick: n,
							onMouseDown: f,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(l.e)(c, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, f)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => i.a.createElement(a.h, {
				className: l.a.modalHeader
			}, i.a.createElement(a.p, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || o.a
			}, i.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = s.n(o);
			const i = n.a.div("Wrapper", r.a);
			t.a = i
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, s) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, n.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, s) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/once.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = o()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(a.a)({
						getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = s("./src/reddit/components/Flair/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				f = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				x = s("./src/reddit/icons/svgs/Search/index.tsx"),
				O = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				v = s.n(O);
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: s
					} = this.props, {
						searchQuery: o
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), a = !!s && i.some(e => e.id === s);
					return r.a.createElement("div", {
						className: v.a.container
					}, r.a.createElement("div", {
						className: v.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: v.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(x.a, {
						className: v.a.searchIcon
					})), r.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							o = s === e.id || !a && 0 === t;
						return r.a.createElement(f.a, {
							className: v.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(b.b, {
							className: v.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(g.a, {
							className: v.a.pencil
						}))
					})))
				}
			}
			var y = s("./src/reddit/components/FlairSearch/index.m.less"),
				_ = s.n(y);
			const k = "FlairSearch-EmojiPicker-DropdownId",
				C = Object(d.a)(e => e && Object(u.c)(e)),
				E = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.d
				}),
				w = Object(i.b)(E);
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, s = t && e.templateId ? t[e.templateId] : void 0;
						let n = e;
						s && (n = Object(u.d)({
							flair: e,
							template: s,
							ignoreTextAllowance: !0
						})), this.props.onChange(n)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const s = t[e],
								n = Object(u.c)(s);
							this.props.onChange(n)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: s,
						templateIds: o,
						subredditId: i
					} = e, a = s && e.flair && e.flair.templateId && s[e.flair.templateId] || void 0, d = Object(p.a)(), l = e.flair || C(a);
					return r.a.createElement("div", {
						className: Object(c.a)(e.className, _.a.container)
					}, s && o && r.a.createElement(j, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: a ? a.id : "",
						templateIds: o,
						templates: s
					}), l && a && (t || a.textEditable) ? r.a.createElement("div", {
						className: _.a.flairEditSection
					}, r.a.createElement("div", {
						className: _.a.editLabel
					}, n.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && r.a.createElement("div", {
						className: _.a.restrictionHintText
					}, Object(u.k)(a)), r.a.createElement(d, {
						autofocus: !0,
						emojiPickerId: k,
						flair: l,
						flairTemplate: a,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: a.modOnly,
						onChange: this.onFlairEdit,
						subredditId: i
					})) : null)
				}
			}
			t.a = w(I)
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/CategoryTagList/index.tsx"),
				l = s("./src/reddit/components/FlairList/index.tsx"),
				u = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/flair.ts"),
				h = s("./src/reddit/helpers/trackers/postFlair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.m.less"),
				j = s.n(v);
			const y = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(m.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.r)(e, {
							postId: s.id
						})
					},
					isPostFlairEnabled: (e, t) => Object(g.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.E)(e, s)
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				_ = (e, t) => {
					const s = [];
					return t.isOriginalContent && s.push({
						text: n.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e && s.push({
						text: n.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), s.push(...t.flair), s
				};
			t.a = y(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: n,
					isFlairFilter: o,
					isPostFlairEnabled: i,
					isMeta: a,
					nowrap: m,
					post: g,
					postCategories: x,
					sendEvent: O,
					showCategoryTag: v,
					subredditName: y,
					titleFlair: k
				} = e;
				const C = Object(u.b)(),
					E = n === f.b.Left,
					w = k || _(a, g),
					I = [];
				let P = [];
				E ? w.map(e => {
					Object(b.p)(e.type) ? I.push(e) : P.push(e)
				}) : P = w;
				const S = m ? j.a.flairNoWrap : I.length > 0 || P.length > 0 || x && v ? j.a.flairWrapper : null,
					T = e => {
						const t = {
							id: g.belongsTo.id,
							eventType: g.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), O && O(Object(h.a)(g.id, t))
					},
					N = e => {
						Object(p.d)(p.a.SearchResults), O && O(Object(h.e)(e, g.id))
					},
					M = !(s || !w || !w.length),
					L = !!(v && x && x.length);
				return M || L ? r.a.createElement("div", {
					className: Object(c.a)(S, t),
					"data-ignore-click": C
				}, M && I && r.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: o,
					key: "leftFlair",
					onClick: T,
					onMouseDown: N,
					flair: I,
					disabled: !i,
					subredditName: y
				}), M && r.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: o,
					key: "rightFlair",
					onClick: T,
					onMouseDown: N,
					flair: P,
					disabled: !i,
					subredditName: y
				}), L && r.a.createElement(d.a, {
					inLightboxHeader: m,
					postId: g.id,
					postCategories: x
				})) : null
			})
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/components/Flatlist/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: n,
					noBreakpoints: c
				} = e, m = u(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return o.a.createElement("div", {
					"data-ignore-click": !!m.searchIgnoreClick
				}, o.a.createElement(a.a, l({}, m, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
					}))
				})))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
				}(n || (n = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return u
			}));
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(o || (o = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[d.a.EditFlair]: o.Editing,
					[d.a.EditPost]: o.Editing,
					[d.a.Gild]: o.Awarding,
					[d.a.Hide]: o.First,
					[d.a.PostOverflowMenu]: o.First,
					[d.a.Report]: o.First,
					[d.a.Save]: o.First,
					[d.a.Share]: o.Second
				},
				u = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							n = c.a[e.groupVariant];
						return Object(i.a)(t, s, n)
					})({
						type: e.breakpointType || n.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				large: "_26YkhAfncIjLM3iT6Gbcvt"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return fe
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return ye
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timezone/index.ts"),
				m = s("./src/reddit/actions/gold/modals.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/postCreation/editing.ts"),
				f = s("./src/reddit/actions/postFlair.ts"),
				g = s("./src/reddit/actions/reportFlow.ts"),
				x = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				O = s("./src/reddit/components/CommentsLink/index.tsx"),
				v = s("./src/reddit/constants/colors.ts"),
				j = s("./src/reddit/components/ContentTooltip/index.tsx"),
				y = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				_ = s.n(y);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class C extends r.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return r.a.createElement(j.a, {
						caretColor: {
							top: v.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, r.a.createElement("div", {
						className: _.a.container
					}, r.a.createElement("div", {
						className: _.a.newBadge
					}, k._("New", null, {
						hk: "1XUPF"
					})), r.a.createElement("div", {
						className: _.a.text
					}, k._("Try giving a new Appreciation Award", null, {
						hk: "1V7ZWF"
					}))))
				}
			}
			var E = C,
				w = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				S = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				T = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				L = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				A = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				V = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/trackers/modTools.ts"),
				q = s("./src/reddit/helpers/trackers/post.ts"),
				z = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				K = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				X = s("./src/reddit/icons/fonts/Report/index.tsx"),
				J = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Q = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				Y = s("./src/reddit/models/PostCreationForm/index.ts"),
				$ = s("./src/reddit/models/User/index.ts"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				oe = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				re = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ae = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/components/Flatlist/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ue = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let me, pe;
			const be = l.a.button("ShareButton", de.a),
				he = l.a.wrapped(L.a, "ShareMenu", de.a),
				fe = Object(d.a)(e => {
					var {
						className: t
					} = e, s = ue(e, ["className"]);
					return r.a.createElement(K.a, le({}, s, {
						className: Object(c.a)(de.a.modActionsIcon, t),
						style: {
							color: Object(V.a)(Object(B.a)(s), Z.a.actionIcon, Z.b.actionIcon)
						}
					}))
				}),
				ge = e => r.a.createElement("div", le({}, e, {
					className: Object(c.a)(de.a.flatlistSeparator, e.className)
				})),
				xe = Object(D.t)({
					currentProfileName: D.h,
					isCommentPermalink: D.v,
					isCommentsPage: D.w,
					isProfilePostListing: D.I,
					pageLayer: e => e
				}),
				Oe = Object(a.c)({
					activeModalId: ae.a,
					layout: D.N,
					userIsOp: U.kb,
					subreddit: D.q
				}),
				ve = Object(i.b)(Oe, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ne.a)(t, s)),
						onToggleModal: t => e(Object(p.i)(t)),
						onToggleSave: () => e(Object(b.L)(n.postId)),
						onHide: t => e(Object(b.P)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(g.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !r;
							e(Object(h.a)(n.postId, t))
						},
						onFlairPost: () => e(Object(p.i)(Object(S.b)(n.postId, o))),
						onGildClick: t => e(Object(m.d)({
							correlationId: t,
							thingId: n.postId
						})),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: o
							} = t;
							return e(Object(f.h)({
								post: n,
								selectedTemplateId: s,
								previewFlair: o
							}))
						},
						toggleEditStartTimeModal: async () => {
							me && pe || ([me, pe] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(p.i)(Object(Y.r)(n.postId, o, Y.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							pe && e(pe(n.id, t))
						}
					}
				});
			class je extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						e(Object(W.d)(W.a.GildingFlow, !0));
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(t.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, s = Object(Y.s)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = (e, t) => {
						const {
							hostPostId: s,
							isOverlay: n,
							listingKey: o,
							post: r,
							sendEvent: i
						} = this.props;
						i(Object(q.f)(r.id, e, n ? "post_detail" : "post", o, s, void 0, null == t ? void 0 : t.referralId))
					}, this.onSaveClick = () => {
						this.props.onToggleSave(), this.sendEventWithName(this.props.post.saved ? "unsave" : "save")
					}, this.onHideClick = () => {
						this.props.onHide(!!this.props.post.hidden), this.sendEventWithName(this.props.post.hidden ? "unhide" : "hide")
					}, this.onReportClick = () => {
						this.props.onReportClick(), this.sendEventWithName("report")
					}
				}
				render() {
					const {
						activeModalId: e,
						addEventStartTime: t,
						className: s,
						currentProfileName: o,
						currentUser: i,
						hasModFlairPerms: a,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isCommentPermalink: m,
						isCommentsPage: p,
						isLargePost: b,
						isOverlay: h,
						isProfilePostListing: f,
						isSticky: g,
						layout: v,
						modModeEnabled: j,
						onFlairChanged: y,
						onIgnoreReports: _,
						onOpenReportsDropdown: k,
						pageLayer: C,
						post: L,
						sendEvent: F,
						showEditFlair: D,
						showEditPost: B,
						subreddit: V,
						toggleEditStartTimeModal: U,
						tooltipType: W,
						userIsOp: K,
						searchIgnoreClick: Z
					} = this.props, ne = !!i && Object($.e)(i) === L.author, ie = Object(se.a)("View--Reports", L.id, W), ae = Object(se.a)("View--GiveAward", L.id, W), ce = Object(I.c)(L), le = ye("-mod-actions-menu", L.id, h, g), ue = Object(I.a)(L), pe = L.postId, ge = v === A.g.Large, xe = !p && ge || l && j, Oe = !(h || p || m), ve = i && L.isGildable, je = L.media && L.media.type === Q.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(de.a.flatlistContainer, s)
					}, r.a.createElement(O.a, {
						className: de.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: p,
						isCommentPermalink: m,
						isOverlay: h,
						postId: L.id,
						modModeEnabled: j,
						numComments: L.numComments
					}), ve && r.a.createElement(r.a.Fragment, null, r.a.createElement(G.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: ee.a.Gild,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.handleGild,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, r.a.createElement(N.a, {
						id: ae
					})), r.a.createElement(E, {
						postOrComment: L,
						tooltipId: ae
					})), r.a.createElement(he, {
						className: Object(te.b)({
							flatlistItem: ee.a.Share,
							isLoggedIn: !!i,
							isUserOp: K
						}),
						dropdownId: ye("-share-menu", L.id, h, g),
						permalink: L.permalink,
						post: L,
						sendEventWithName: this.sendEventWithName,
						subreddit: V
					}, r.a.createElement(be, {
						"data-click-id": "share"
					}, r.a.createElement(J.a, {
						className: de.a.shareIcon
					}), r.a.createElement("span", {
						className: de.a.shareText
					}, n.fbt._("share", null, {
						hk: "1eAfZg"
					})))), B && !xe && r.a.createElement(G.a, {
						displayText: n.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: ee.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(N.c, null)), (!l || !j) && r.a.createElement(G.a, {
						displayText: L.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: ee.a.Save,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.onSaveClick,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, L.saved ? r.a.createElement(N.f, null) : r.a.createElement(N.e, null)), !L.isSponsored && !xe && r.a.createElement(G.a, {
						displayText: L.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: ee.a.Hide,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.onHideClick,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, r.a.createElement(N.b, null)), !ne && !L.isSponsored && !xe && r.a.createElement(G.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: ee.a.Report,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.onReportClick,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, r.a.createElement(N.d, null)), r.a.createElement(P.a, {
						isOverlay: h,
						layout: v,
						modModeEnabled: j,
						post: L,
						sendEvent: F
					}), l && r.a.createElement(w.a, {
						dropdownId: le,
						onClick: () => F(Object(q.f)(L.id, "post_mod_action_menu"))
					}, r.a.createElement(fe, null), r.a.createElement(T.a, {
						canEditFlair: a && !!D,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!h,
						isPostAuthor: ne,
						modModeEnabled: j,
						post: L,
						tooltipId: le
					})), l && ce && !j && r.a.createElement(M.c, {
						text: "".concat(ue),
						onClick: () => {
							k(ie), F(Object(q.f)(L.id, "post_report_menu"))
						},
						id: ie
					}, r.a.createElement(R.a, {
						model: L,
						onIgnoreReports: () => {
							_(), F(Object(H.j)(L.ignoreReports ? "restore_reports" : "ignore_reports", L.id))
						},
						tooltipId: ie
					}), L.ignoreReports ? r.a.createElement(z.a, null) : r.a.createElement(X.a, null)), (i || !L.isSponsored) && r.a.createElement(N.g, {
						currentProfileName: o,
						dropdownId: ye("-overflow-menu", L.id, h, g),
						isCommentsPage: p,
						isFixed: g,
						isOverlay: !!h,
						isProfilePostListing: f,
						layout: v,
						modModeWithPost: j && l,
						pageLayer: C,
						permalink: L.permalink,
						postId: pe,
						sendEvent: F,
						showEditPost: !!B,
						showEditFlair: !!D,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: U,
						toggleEditStartTimeModal: U
					}), e === Object(Y.s)(L.id, h) && r.a.createElement(oe.a, {
						subredditId: L.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: L.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: h
					}), e === Object(Y.r)(L.id, h, Y.j.POST_OVERFLOW_MENU) && me && r.a.createElement(me, {
						onChange: t,
						onClose: U,
						schedule: Object(u.c)(L),
						shouldShowDeleteButton: !1
					}), e === Object(Y.t)(L.id, h) && r.a.createElement(re.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: L.belongsTo.id
					}), e === Object(S.b)(L.id, h) && r.a.createElement(S.a, {
						flairs: L.flair,
						subredditId: L.belongsTo.id,
						modalId: Object(S.b)(L.id, h),
						onFlairChanged: y
					}), r.a.createElement("div", {
						className: de.a.flexSpacer
					})), Oe && !je && r.a.createElement(x.a, {
						className: Object(c.a)(de.a.liveDiscussionWrapper, {
							[de.a.large]: b
						}),
						isMod: l,
						postId: L.postId
					}))
				}
			}
			const ye = (e, t, s, n) => {
					let o = t;
					return s && (o += "-overlay"), n && (o += "-sticky"), o += e
				},
				_e = xe(ve(Object(F.c)(je)));
			t.c = r.a.memo((function(e) {
				const t = Object(ie.b)();
				return r.a.createElement(_e, le({}, e, {
					searchIgnoreClick: t
				}))
			}))
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb"
			}
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("SubredditHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react/index.js");
			const n = e => new Promise((t, s) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = s, n.src = e
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = o.a.memo((function(e) {
				var {
					visible: t
				} = e, s = d(e, ["visible"]);
				const [i, l] = Object(n.useState)(t);
				return Object(n.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, l(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), l(!1)
					}
				}, [t]), t ? o.a.createElement("div", c({
					className: Object(r.a)(a.a.tooltip, {
						[a.a.visible]: i
					})
				}, s.popperProps), s.children, i && o.a.createElement("div", c({
					className: a.a.arrow
				}, s.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
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
			const b = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				f = e => o.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return o.a.createElement(h, {
						className: e.className,
						style: Object.assign(Object.assign({}, e.style), {
							"--infoTextTooltip-overflow-left": "".concat(t, "px")
						})
					}, e.text, e.children)
				},
				x = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(d.b)(s)(e)
					}
				}),
				O = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				v = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				j = Object(r.b)(x);
			t.c = j(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(O, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(v, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				m = Object(r.b)(u, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				p = () => null;
			t.a = m(e => o.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? p : e.onClick
			}, e.inCommentFlatlist ? o.a.createElement(c.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), m = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(n || (n = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return u
			}));
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(c);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				u = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						n = d.a[t],
						o = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(i.a)(s, n, o)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(P);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(I.b)({
						breakpointType: I.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(i.b)(() => Object(a.c)({
					activeModalId: k.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(E.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(C.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(u.m)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(m.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(u.K)(s.id, !1)),
						onSpamPost: () => e(Object(u.K)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: i,
					layout: a,
					moderatorPermissions: l,
					modModeEnabled: u,
					onApprovePost: m,
					onFlairPost: k,
					onRemovePost: C,
					onSpamPost: E,
					post: I,
					sendEvent: P,
					showIconsOnly: N
				} = e, M = Object(x.a)(l), L = Object(b.b)(I), F = !(!I.approvedBy || !L), R = Object(h.b)(I.id, i), A = M && u && !I.isSponsored, D = t && u;
				let B, V, U;
				N || (B = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(F, I.approvedBy), V = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(I.isRemoved, I.bannedBy), U = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(I.isSpam));
				const G = !i && a === g.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(S.a.container, s)
				}, A && r.a.createElement(o.Fragment, null, r.a.createElement(f.b, {
					className: T(w.a.Approve, G),
					key: "approveButton",
					text: B,
					disabled: !!I.approvedBy && !L,
					onClick: () => {
						m(), P(Object(O.f)(I.id, "approve"))
					}
				}, r.a.createElement(v.a, null)), r.a.createElement(f.d, {
					className: T(w.a.Remove, G),
					key: "removeButton",
					text: V,
					disabled: I.isRemoved && I.bannedBy !== d.k,
					onClick: () => {
						C(), I.isRemoved && I.bannedBy === d.k ? P(Object(O.f)(I.id, "confirm_remove")) : P(Object(O.f)(I.id, "remove"))
					}
				}, r.a.createElement(j.a, null)), r.a.createElement(f.d, {
					className: T(w.a.Spam, G),
					key: "removeSpamButton",
					text: U,
					disabled: I.isSpam,
					onClick: () => {
						E(), P(Object(O.f)(I.id, "spam"))
					}
				}, r.a.createElement(y.a, null))), D && r.a.createElement(f.c, {
					className: T(w.a.Flair, G),
					key: "tagButton",
					onClick: () => {
						k(R)(), P(Object(O.f)(I.id, "post_flair_picker"))
					}
				}, r.a.createElement(_.a, null)), r.a.createElement(p.f, {
					postId: I.id
				}))
			})
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				u = s("./src/reddit/components/Popup/Button.tsx"),
				m = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: h
				} = e, [f, g] = Object(o.useState)(!0), x = Object(b.b)(s.id, h), O = Object(i.c)(), v = Object(p.a)(), j = Object(b.a)(s, h), y = (e, n) => v(Object(m.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					j && y("modal", "show")
				}, [j]);
				if (!j || !f) return null;
				const _ = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: x,
					title: _,
					onClose: () => {
						g(!1), y("close", "click"), O(Object(c.y)()), O(Object(c.J)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						O(Object(c.y)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(a.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
					onClick: () => (g(!1), y("report", "click"), void O(Object(d.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				u = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: f
				} = e, [g, x] = Object(r.useState)(n.Survey), O = Object(h.b)(s.id, f), v = Object(a.c)(), j = Object(b.a)(), y = Object(h.a)(s, f), _ = (e, n) => j(Object(p.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					y && _("modal", "show")
				}, [y]);
				const k = e => {
					x(n.Closed), _("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), v(Object(l.j)(s.id, void 0, e))
				};
				if (!y) return null;
				let C = null;
				const E = {
					id: O,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						x(n.Closed), _("close", "click"), v(Object(d.y)())
					},
					onClickOutside: () => {
						v(Object(d.y)())
					}
				};
				switch (g) {
					case n.Survey:
						C = i.a.createElement(u.a, E, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(m.a, {
							onClick: () => {
								x(n.OffTopic), _("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(m.a, {
							onClick: () => {
								x(n.DontLike), _("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(m.a, {
							onClick: () => {
								x(n.BreaksRules), _("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						C = i.a.createElement(u.a, E, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						C = i.a.createElement(u.a, E, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						C = i.a.createElement(u.a, E, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(c.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(m.a, {
							onClick: () => k("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(m.a, {
							onClick: () => k("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return C
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(r.a)(e, t);
				class n extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/timeAgo/index.ts"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(o.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				i = s.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, s) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				i = s.n(r),
				a = s("./src/reddit/hooks/useOnClickOutside.ts"),
				c = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: s,
					onClickOutside: n,
					title: r,
					children: c
				} = e;
				return Object(a.a)(t, n), o.a.createElement("div", {
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
					onClick: s
				}, "✕")), c)
			}
		},
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/CSSVariableProvider/index.tsx"),
				a = s("./src/reddit/constants/zIndex.ts");
			const c = "POPUP_CONTAINER";
			let d;
			const l = ["right", "top"],
				u = ["left", "top"];

			function m(e) {
				const [t, s] = Object(n.useState)(null);
				return Object(n.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const s = t.getBoundingClientRect(),
								{
									style: n
								} = Object(r.b)({
									isFixed: !1,
									targetBox: s,
									targetPosition: l,
									tooltipPosition: u,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: n.left,
								y: n.top
							}
						})(e);
						t && s(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function p(e) {
				const {
					children: t,
					rightOf: s
				} = e, n = m(s);
				return n && (d || (d = document.getElementById(c))) ? Object(i.d)(o.a.createElement("div", {
					style: {
						position: "absolute",
						transform: "t".concat("ranslate(", n.x, "px, ").concat(n.y, "px)"),
						zIndex: a.e
					}
				}, t), d) : null
			}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				j = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				y = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = s("./src/reddit/icons/fonts/Report/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				E = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				w = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = s("./src/reddit/components/PostBadges/index.m.less"),
				S = s.n(P);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => r.a.createElement("span", T({
					className: S.a.removalReason
				}, e), e.children),
				M = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				L = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				F = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				A = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				D = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				B = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				V = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.u)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.P
				}),
				U = Object(i.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = B(U(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: O,
					modModeEnabled: P,
					onHideTooltip: B,
					onOpenRemovalReasonModal: V,
					onShowTooltip: U,
					post: G,
					tooltipType: W
				} = e;
				const H = {
						caretOnTop: !1
					},
					q = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === p.a.SUBREDDIT,
					z = D("Approve", G.id, W),
					K = D("Archived", G.id, W),
					X = D("Automod", G.id, W),
					J = D("Lock", G.id, W),
					Q = D("Mod", G.id, W),
					Z = D("Remove", G.id, W),
					Y = D("Report", G.id, W),
					$ = D("Spam", G.id, W),
					ee = D("Sticky", G.id, W),
					te = D("Pinned", G.id, W);
				return r.a.createElement("div", {
					className: t
				}, a && s && G.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(I.a, {
					className: S.a.modIcon,
					desc: F(s),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: Q,
					text: F(s)
				}, H))), G.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: S.a.archivedIcon,
					desc: M(),
					id: K,
					onMouseEnter: U(K),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: K,
					text: M()
				}, H))), G.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: S.a.lockIcon,
					desc: L(),
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: J,
					text: L()
				}, H))), i && Object(x.k)(G) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: S.a.stickyIcon,
					desc: R(),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: ee,
					text: R()
				}, H))), O && b && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: S.a.stickyIcon,
					desc: A(),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: te,
					text: A()
				}, H))), (G.isApproved || G.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(v.a, {
					className: S.a.approveIcon,
					desc: Object(f.a)(G),
					id: z,
					onMouseEnter: U(z),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: z,
					text: Object(f.a)(G)
				}, H))), Object(h.a)(G) && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: S.a.removeIcon,
					desc: Object(f.c)(G),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: B
				}), q && r.a.createElement(m.a, {
					className: S.a.addRemovalReason,
					onClick: V,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && r.a.createElement(N, {
					onMouseEnter: U(Z),
					onMouseLeave: B
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, T({
					tooltipId: Z,
					text: Object(f.c)(G)
				}, H))), G.bannedBy && G.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: S.a.spamIcon,
					desc: Object(f.e)(G),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: $,
					text: Object(f.e)(G)
				}, H))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: Object(c.a)(S.a.automoderator, !!G.bannedBy && S.a.isRemoved),
					desc: f.b,
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: X,
					text: f.b
				}, H))), Object(g.a)(G) && !P && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: S.a.reportIcon,
					desc: Object(f.d)(G.numReports),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: B
				}), r.a.createElement(u.c, T({
					tooltipId: Y,
					text: Object(f.d)(G.numReports)
				}, H))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						"aria-role": "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/video.ts"),
				x = s("./src/lib/classNames/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				j = s.n(v);
			const y = Object(r.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					currentIndex: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.a)(e, s.id)
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.c)(e, {
							postId: s.id
						})
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.i)(e, {
							postId: s.id
						})
					}
				}),
				_ = Object(p.a)(y),
				k = e => {
					const t = Object(O.d)(e.target, e.currentTarget),
						s = Object(O.b)(e.target, e.currentTarget, O.a.buttons);
					return "subreddit" !== t && s
				};
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: r,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: m,
						onClick: p,
						onPostContentClick: h,
						sendEvent: f,
						style: g,
						ref: O
					} = this.props, v = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: O,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => p && p(s, m, t, d))(s), h && k(s) && h(s, m)), m.id && d) {
								const {
									source: e
								} = Object(i.s)(m, d);
								if (e && e.outboundUrl) {
									const t = r + 1;
									f(Object(c.c)(m.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(x.a)(j.a.WrappedPost, n, "Post ".concat(m.id), {
							promotedlink: m.isSponsored
						}),
						id: l ? l(m.id) : m.id,
						tabIndex: -1,
						"data-testid": m.id
					}, s), y = !!m.media && m.media.type === b.o.VIDEO;
					return m.isSponsored || y ? o.a.createElement(a.a, {
						post: m,
						trackDisplay: !0
					}, v) : m.media && Object(b.F)(m.media) ? o.a.createElement(u, {
						postId: m.id
					}, v) : v
				}
			}
			t.a = _(Object(O.c)(Object(m.c)(C)))
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				u = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = s("./src/reddit/icons/svgs/Search/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/selectors/postCollection.ts"),
				y = s("./src/lib/timeAgo/index.ts"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(P),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = T.a.div("Container", S.a), L = T.a.h2("PostTitle", S.a), F = T.a.div("MetaLine", S.a), R = T.a.span("SubredditName", S.a), A = T.a.time("InfoSpan", S.a), D = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(w.S)(e, {
						subredditId: s
					}) : void 0
				},
				user: I.i
			});
			class B extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: s,
						onHoverActionText: n
					} = this.props, o = t && Object(C.g)(t) && s ? Object(k.c)(Object(E.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(L, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(F, {
						"data-redditstyle": !0
					}, o && i.a.createElement(R, {
						"data-redditstyle": !0
					}, o), o && i.a.createElement(_.b, null), i.a.createElement(A, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(_.b, null), i.a.createElement(A, null, N._("created {time}", [N._param("time", Object(y.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), n && i.a.createElement("div", {
						className: S.a.onHoverActionText
					}, i.a.createElement("span", null, n)))
				}
			}
			var V = Object(a.b)(D)(B),
				U = s("./src/reddit/helpers/trackers/postCollection.ts"),
				G = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				W = s.n(G);
			const H = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				q = T.a.div("TopRow", W.a),
				z = T.a.div("TitleRow", W.a),
				K = T.a.div("DetailsContainer", W.a),
				X = T.a.wrapped(O.a, "ButtonRow", W.a),
				J = T.a.div("CloseWrapper", W.a),
				Q = T.a.wrapped(f.a, "Close", W.a),
				Z = T.a.div("Empty", W.a),
				Y = T.a.img("EmptyImage", W.a),
				$ = T.a.p("EmptyText", W.a),
				ee = T.a.div("FilterWrapper", W.a),
				te = T.a.wrapped(h.a, "FilterInput", W.a),
				se = T.a.wrapped(x.a, "SearchIcon", W.a),
				ne = T.a.wrapped(g.a, "PlusIcon", W.a),
				oe = T.a.wrapped(b.m, "CreateCollectionButton", W.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(c.c)({
					collections: j.w
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = v.b;
							s && (t = Object(v.t)(s, !!n)), e(Object(u.x)(t))
						}
					}
				});
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(U.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === p.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(U.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(U.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(V, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(U.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Z, null, i.a.createElement(Y, {
						src: H
					}), i.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Z, null, i.a.createElement($, null, o.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let s;
					if (0 === e.length) s = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: W.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(q, null, i.a.createElement(z, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(J, {
						onClick: this.close
					}, i.a.createElement(Q, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(se, null), i.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(K, null, s), i.a.createElement(X, null, i.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ne, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(m.c)(ce)));
			t.a = de
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				j = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				y = s.n(j),
				_ = s("./src/lib/lessComponent.tsx");
			const k = _.a.div("Container", y.a),
				C = _.a.div("Content", y.a),
				E = _.a.div("TitleRow", y.a),
				w = _.a.div("Details", y.a),
				I = _.a.wrapped(u.f, "Footer", y.a),
				P = _.a.wrapped(p.l, "CancelButton", y.a),
				S = _.a.div("CloseWrapper", y.a),
				T = _.a.wrapped(x.a, "CloseIcon", y.a),
				N = _.a.label("Label", y.a),
				M = _.a.wrapped(h.a, "TitleInput", y.a),
				L = _.a.wrapped(g.a, "AddCollectionIcon", y.a),
				F = _.a.wrapped(p.i, "PrimaryActionButton", y.a),
				R = _.a.wrapped(f.a, "LoadingIcon", y.a),
				A = _.a.wrapped(b.b, "ErrorText", y.a),
				D = Object(a.c)({
					collection: v.r,
					error: v.c,
					isPending: v.h
				}),
				B = Object(i.b)(D, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class V extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s
					} = this.props, o = !e, i = !!this.state.collectionTitle.trim(), a = o ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(k, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(C, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(E, null, r.a.createElement(L, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(w, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(I, null, r.a.createElement(O.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(F, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(R, {
						sizePx: 10
					}) : a)), t && r.a.createElement(A, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(B(V))
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/flair.ts"),
				i = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, s) => {
				if (s && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const n = e && t.templateId ? e[t.templateId] : void 0;
				if (!n) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const a = Object(i.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.q)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = s.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				E = Object(c.c)({
					flairData: O.d,
					subreddit: v.S,
					isMod: (e, t) => !!Object(x.j)(e, t)
				});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(j.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(y.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(y.c)(this.props.flairs) || null;
					return Object(y.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(p.a, {
						className: s
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: k.a.buttonsRow
					}, i.a.createElement(f.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.l, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(E, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(w);
			t.a = Object(l.a)(Object(d.c)(I))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
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
						post: s
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.u)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign(Object.assign({}, e), {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(i.a, Object.assign(Object.assign({}, e), {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostMeta/index.m.less"),
				x = s.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: g,
					isOverlay: O,
					isTopicPage: v,
					post: j,
					shouldShowSubscribeButton: y,
					subredditOrProfile: _,
					tooltipType: k
				} = e, C = !!v;
				return o.a.createElement("div", {
					className: x.a.metaContainer
				}, !n && !j.isSponsored && _ && o.a.createElement(i.a, {
					postId: j.id,
					subredditName: _.name
				}, o.a.createElement(u.a, {
					className: x.a.subredditName,
					"data-click-id": "subreddit",
					to: _.url
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(l.a, null), !n && !j.isSponsored && _ && y && !g && o.a.createElement(m.a, {
					getEventFactory: e => Object(h.f)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(f.g)(_) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: j.id,
					small: !0
				}), !n && !j.isSponsored && o.a.createElement(b.b, null), !n && !j.isSponsored && o.a.createElement(a.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), o.a.createElement(d.d, {
					className: x.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: k
				}), o.a.createElement(c.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!n,
					post: j,
					tooltipType: k
				}), !C && o.a.createElement(r.a, {
					hideCta: s,
					thing: j,
					tooltipType: O ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ye
			})), s.d(t, "b", (function() {
				return _e
			})), s.d(t, "c", (function() {
				return ke
			})), s.d(t, "d", (function() {
				return Ce
			})), s.d(t, "f", (function() {
				return Ee
			})), s.d(t, "e", (function() {
				return we
			})), s.d(t, "h", (function() {
				return Ve
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				u = s("./node_modules/uuid/v4.js"),
				m = s.n(u),
				p = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				f = s("./src/reddit/actions/eventPosts/index.ts"),
				g = s("./src/reddit/actions/gold/modals.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				v = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/actions/postCreation/editing.ts"),
				y = s("./src/reddit/actions/reportFlow.ts"),
				_ = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				w = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				P = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				S = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				T = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				N = s("./src/reddit/icons/fonts/helpers.tsx"),
				M = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				L = s.n(M);
			var F = h.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(N.b)("hide"), " ").concat(e.className)
				}), "HideIcon", L.a),
				R = s("./src/reddit/icons/fonts/Link/index.tsx"),
				A = s("./src/reddit/icons/fonts/Live/index.tsx"),
				D = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				B = s("./src/reddit/icons/fonts/Report/index.tsx"),
				V = s("./src/reddit/icons/fonts/Save/index.tsx"),
				U = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				G = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				W = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				H = s.n(W);
			var q = h.a.wrapped(e => i.a.createElement("i", {
					className: Object(b.a)(Object(N.b)("unpin"), e.className)
				}), "UnpinIcon", H.a),
				z = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				K = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				X = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				J = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Q = s("./src/reddit/components/ReportFlow/index.tsx"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				$ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/constants/postLayout.ts"),
				ne = s("./src/reddit/helpers/correlationIdTracker.ts"),
				oe = s("./src/reddit/helpers/isCrosspost.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ie = s("./src/reddit/helpers/trackers/post.ts"),
				ae = s("./src/reddit/models/Post/index.ts"),
				ce = s("./src/reddit/models/Subreddit/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				be = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				he = s("./src/reddit/actions/postCollection/index.ts"),
				fe = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ge = s("./src/reddit/models/PostCreationForm/index.ts"),
				xe = s("./src/reddit/selectors/postCollection.ts"),
				Oe = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ve = s.n(Oe),
				je = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const ye = h.a.wrapped(T.a, "Icon", ve.a),
				_e = h.a.wrapped(F, "Icon", ve.a),
				ke = h.a.wrapped(D.a, "Icon", ve.a),
				Ce = h.a.wrapped(B.a, "Icon", ve.a),
				Ee = h.a.wrapped(K.a, "Icon", ve.a),
				we = h.a.wrapped(V.a, "Icon", ve.a),
				Ie = h.a.wrapped(I.a, "Icon", ve.a),
				Pe = h.a.wrapped(z.a, "AddCollectionIcon", ve.a),
				Se = h.a.wrapped(S.a, "Icon", ve.a),
				Te = h.a.wrapped(U.a, "Icon", ve.a),
				Ne = h.a.wrapped(G.a, "Icon", ve.a),
				Me = h.a.wrapped(X.b, "Icon", ve.a),
				Le = h.a.wrapped(q, "Icon", ve.a),
				Fe = h.a.wrapped(A.a, "LiveIcon", ve.a),
				Re = h.a.wrapped(P.a, "CalendarIcon", ve.a),
				Ae = h.a.wrapped(R.a, "LinkIcon", ve.a),
				De = h.a.wrapped($.b, "DropdownRow", ve.a),
				Be = h.a.wrapped(Y.a, "PostCheckboxMenuItem", ve.a),
				Ve = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: r = !0,
						hide: i = !0
					} = e;
					return {
						[ee.a.Gild]: t,
						[ee.a.Save]: s,
						[ee.a.Share]: n,
						[ee.a.Report]: o,
						[ee.a.EditPost]: r,
						[ee.a.Hide]: i
					}
				},
				Ue = Object(a.b)(() => Object(d.c)({
					currentUser: me.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(de.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: xe.j,
					isSaved: le.x,
					isHidden: le.p,
					isSponsored: le.z,
					isNSFW: le.s,
					isOC: le.t,
					isPinned: le.u,
					isSpoiler: le.y,
					post: le.N,
					postSubredditAboutInfo: le.O,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: le.X,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = je(t, ["isProfilePostListing"]);
						return Object(Z.B)(e, n) && s && Object(me.kb)(e, n) && Object(me.ib)(e, {
							userName: Object(le.N)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: le.ab,
					hasSubredditRules: ue.k,
					userIsOp: me.kb,
					isPostPartOfACollection: xe.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(le.N)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(le.ab)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === ce.e.User;
						return Object(xe.s)(e, n.name, o)
					}
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: t => e(Object(v.v)(t)),
						onDelete: t => e(Object(v.E)(n, t, o)),
						onDistinguishPost: t => e(Object(v.p)(n, t)),
						onGildClick: t => e(Object(g.d)({
							correlationId: t,
							thingId: n
						})),
						onToggleSave: () => e(Object(v.L)(n)),
						onToggleNSFW: () => e(Object(v.A)(n)),
						onToggleOC: () => e(Object(v.B)(n)),
						onTogglePinned: () => e(Object(O.i)(n)),
						onToggleSpoiler: () => e(Object(v.O)(n)),
						onHide: t => e(Object(v.P)(n, !t, o, !0)),
						onReportClick: () => e(Object(y.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(w.p)()(t()))), e(Object(f.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(j.a)(n, t))
						},
						onFlairPost: () => e(Object(x.i)(Object(be.b)(n, o))),
						onToggleSendReplies: () => e(Object(v.M)(n)),
						showCollectionsList: (t, s) => {
							e(Object(he.e)(t)).then(() => {
								const t = Object(ge.s)(s, o);
								e(x.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(x.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n)))
					}
				});
			class Ge extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: n,
							sendEvent: o
						} = this.props;
						o(Object(ie.f)(n.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						const e = Object(ne.d)(ne.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.postId))
					}, this.toggleHide = () => {
						const e = this.props.isHidden ? "unhide" : "hide";
						this.handlePostEvent(e), this.props.onHide(this.props.isHidden)
					}, this.toggleSave = () => {
						const e = this.props.isSaved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.isOC ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(ie.g)(this.props.post.id)) : this.props.sendEvent(Object(ie.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(te.b)({
							breakpointType: te.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: n
						} = this.props;
						e || (n(Object(fe.b)(s.id)), t(s.belongsTo.id, s.id))
					}
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === se.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(te.b)({
						breakpointType: te.a.HideIfVWLarger,
						flatlistItem: ee.a.PostOverflowMenu,
						isLoggedIn: !!e.currentUser,
						isUserOp: e.userIsOp
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: s,
						isPinned: r,
						onStartEventNow: a,
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: u,
						toggleAddEventStartTimeModal: b,
						toggleEditStartTimeModal: h,
						userIsOp: f
					} = e, g = e.currentUser && e.currentUser.isEmployee, x = Object(oe.a)(e.post), O = e.post.belongsTo.type === C.a.PROFILE || Object(ce.f)(e.postSubredditAboutInfo), v = t && c.isGildable, j = Object(re.a)(e.post);
					return i.a.createElement("div", null, v && i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(ye, null)), i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(ae.i)(s)) {
								const t = Object(E.a)(s.id),
									n = m()(),
									o = Object(p.a)(t, {
										[k.q]: n,
										utm_source: "share",
										utm_medium: "web2x",
										utm_content: "rpan_stream"
									});
								this.handlePostEvent("share_copy", {
									referralId: n
								}), e.onCopyLink(o)
							} else this.handlePostEvent("share_copy"), e.onCopyLink(t)
						}
					}, i.a.createElement(Ae, null)), i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(Se, null)), e.showEditPost && i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(ke, null)), l && i.a.createElement(De, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(Ne, null)), i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(Ee, null) : i.a.createElement(we, null)), u && i.a.createElement(De, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Le, null) : i.a.createElement(Te, null)), !e.isSponsored && i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(_e, null)), !e.isSponsored && !f && i.a.createElement(De, {
						className: this.getBreakpointClass(ee.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(Ce, null)), d && s && a && i.a.createElement(De, {
						onClick: a,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(Fe, null)), d && s && h && i.a.createElement(De, {
						onClick: h,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Re, null)), d && !j && b && i.a.createElement(De, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: b
					}, i.a.createElement(Re, null)), d && i.a.createElement(De, {
						className: this.props.isPostPartOfACollection ? ve.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(Pe, null)), f && i.a.createElement(De, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(Me, null)), g && e.userIsOp && i.a.createElement(De, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, i.a.createElement(Ie, null)), f && O && !x && i.a.createElement(Be, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), f && i.a.createElement(Be, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), f && i.a.createElement(Be, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && i.a.createElement(Be, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: e.onToggleSendReplies,
						isSelected: this.props.sendRepliesToggled
					}))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", null, i.a.createElement(J.b, {
						className: Object(b.a)(ve.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && i.a.createElement(Q.a, {
						withOverlay: !0,
						overlayCustomStyles: Q.b,
						postId: e.postId,
						timestamp: this.context.currentTime
					}), this.props.isConfirmDeleteOpen && i.a.createElement(We, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const We = Object(c.i)(e => i.a.createElement(pe.a, {
				toggleModal: e.toggleConfirmDelete,
				onConfirm: () => e.handleDeletePost(e.location),
				actionText: n.fbt._("delete post", null, {
					hk: "49hVoG"
				}),
				headerText: n.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}),
				modalText: n.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
					hk: "2eDKWP"
				}),
				withOverlay: !0
			}));
			Ge.contextType = _.a;
			t.g = Ue(Ge)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				u = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: p = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					subreddit: g,
					isOverlay: x
				} = e, O = "upvote-button-".concat(t.id).concat(x ? "-overlay" : ""), {
					moderationPrompt: v
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(m.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: p,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: O
				}), v && o.a.createElement(a.b, {
					rightOf: O
				}, "survey" === v ? o.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!x
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!x
				})))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return G
			})), s.d(t, "a", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				g = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				j = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/lib/getShortenedLink.ts"),
				E = s("./src/reddit/components/FlairWrapper/index.tsx"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				P = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				S = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				T = s.n(S);
			const N = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var M = Object(i.b)(N)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(l.a)(e.className, T.a.proposalMetaData)
					}, r.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(I.a)(n)), w.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(P.a, {
						className: T.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				L = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/PostTitle/index.m.less"),
				B = s.n(D),
				V = s("./src/config.ts");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var G, W = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(G || (G = {}));
			const H = m.a.wrapped(Object(u.a)(e => {
					var {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: i,
						className: a,
						redditStyle: c,
						theme: d
					} = e, u = W(e, ["size", "titleColor", "titleType", "nowrap", "children", "className", "redditStyle", "theme"]);
					let m = "";
					switch (t) {
						case G.ExtraLarge:
							m = B.a.ExtraLarge;
							break;
						case G.Large:
							m = B.a.Large;
							break;
						case G.Medium:
							m = B.a.Medium;
							break;
						case G.Small:
							m = B.a.Small;
							break;
						case G.ExtraSmall:
							m = B.a.ExtraSmall
					}
					return r.a.createElement("div", U({
						className: Object(l.a)(a, m, {
							[B.a.isNoWrap]: o
						}),
						style: {
							"--posttitletextcolor": s || Object(k.a)(Object.assign({
								redditStyle: c,
								theme: d
							}, u)).titleText
						}
					}, u), n ? r.a.createElement(L.b, {
						type: n
					}, i) : i)
				}), "Title", B.a),
				q = e => {
					var {
						className: t,
						disableVisited: s,
						titleColor: n
					} = e, o = W(e, ["className", "disableVisited", "titleColor"]);
					return r.a.createElement(a.a, U({}, o, {
						className: Object(l.a)(t, B.a.styledLink, {
							[B.a.isVisitedEnabled]: !s
						})
					}), o.children)
				},
				z = e => {
					var {
						disableVisited: t,
						nowrap: s
					} = e, n = W(e, ["disableVisited", "nowrap"]);
					return r.a.createElement("div", U({}, n, {
						className: Object(l.a)(B.a.titleContainer, n.className, {
							[B.a.isNoWrap]: s,
							[B.a.isVisitedEnabled]: !t
						})
					}))
				},
				K = Object(b.t)({
					isCommentPermalink: b.v,
					pageLayer: e => e
				}),
				X = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(b.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(F.r)(e, {
							postId: s.id
						})
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(R.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					},
					shouldOpenPostInNewTab: A.X,
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(F.i)(e, {
							postId: s.id
						})
					}
				}),
				J = Object(i.b)(X),
				Q = e => {
					const {
						post: t,
						subredditName: s
					} = e, {
						isSponsored: n
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(z, {
						nowrap: e.nowrap
					}, r.a.createElement(Z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, r.a.createElement(Z, e)); {
						const o = t.media && Object(_.H)(t.media) ? Object(v.c)(t.id, s) : t.permalink,
							i = e.isCommentPermalink ? Object(O.b)(o) : Object(g.a)(o);
						return r.a.createElement(z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.s)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(h.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, r.a.createElement(Z, t)) : r.a.createElement(Z, t)
						})(t, e) : r.a.createElement(q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i
						}, r.a.createElement(Z, e)))
					}
				},
				Z = e => {
					const {
						leftFlair: t,
						post: s
					} = e, n = e.format ? e.format(s) : s.title, o = e.isCommentsPage ? L.a.PostComments : L.a.PostItem;
					return r.a.createElement(H, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && r.a.createElement(E.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				Y = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, o = !t && !e.isCrosspost && e.size !== G.Large && !s.isSponsored && !(s.media && Object(_.H)(s.media)) && (s.source || s.media && (s.media.type === _.o.GIFVIDEO || s.media.type === _.o.IMAGE || s.media.type === _.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return r.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(_.E)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source
						}, Object(C.a)(s), !s.isSponsored && r.a.createElement(j.a, {
							className: B.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== G.Large && e.size !== G.ExtraLarge) return r.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source
					}, Object(C.a)(s), !s.isSponsored && r.a.createElement(j.a, {
						className: B.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n        .".concat(this.props.post.id, " .").concat(B.a.Component, " {\n          --postTitle-VisitedLinkColor: ").concat(Object(n.c)(.45, Object(k.a)(this.props).titleText, "#FFFFFF"), ";\n          --postTitleLink-VisitedLinkColor: ").concat(Object(n.c)(.45, this.props.titleColor || Object(k.a)(this.props).titleText, Object(k.a)(this.props).body), ";\n        }\n      ")
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isMeta: o,
						isOverlay: i,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, u = s === y.b.Left, m = Object(E.b)(o, c), p = d ? m.filter(e => e.type === y.f.Nsfw || e.type === y.f.Spoiler) : u ? m.filter(e => Object(x.p)(e.type)) : [], b = d ? [] : u ? m.filter(e => !Object(x.p)(e.type)) : m, h = !i && !n, f = !t && p && p.length > 0 && h, g = !t && b && b.length > 0 && h;
					return r.a.createElement("div", {
						className: Object(l.a)(e, c.id)
					}, !d && f && r.a.createElement(E.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement(Q, U({}, this.props, {
						leftFlair: d ? p : void 0
					})), a && r.a.createElement(M, {
						className: B.a.pollMeta,
						pollId: a.id
					}), r.a.createElement(Y, this.props), g && r.a.createElement(E.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: B.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n              <img alt="" src="'.concat(V.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            ')
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = m.a.wrapped(K(J(Object(u.a)(Object(p.c)($)))), "Component", B.a)
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), a = {
						currentTime: s,
						setCurrentTime: i
					};
					return o.a.createElement(r.Provider, {
						value: a
					}, t)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => r.a.createElement("div", {
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
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(a.a)(b))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = i.a.span("TextWrapper", c.a),
				l = i.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(d, null, e.text, " ")), "Button", c.a),
				u = i.a.wrapped(l, "ApproveButton", c.a),
				m = i.a.wrapped(l, "RemoveButton", c.a),
				p = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");
			const o = Object(n.createContext)(!1);

			function r() {
				return Object(n.useContext)(o)
			}
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./node_modules/uuid/v4.js"),
				u = s.n(l),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				j = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				_ = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/routes/postCreation/constants.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/ShareMenu/index.m.less"),
				I = s.n(w),
				P = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const S = Object(h.a)(g.a),
				T = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(E.b)(s)(e)
					}
				}),
				N = Object(i.b)(T, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = P(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(c.b)("".concat(C.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(b.h)({
								tooltipId: s
							}))
						},
						copyLink: t => e(Object(p.v)(t))
					}
				});
			t.a = N(Object(a.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === k.e.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, r.a.createElement(S, {
					className: I.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, r.a.createElement(x.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("Copy link", null, {
						hk: "1tCqox"
					}),
					onClick: () => {
						const {
							permalink: t,
							post: s
						} = e;
						if (s && Object(_.i)(s)) {
							const t = Object(O.a)(s.id),
								n = u()(),
								o = Object(m.a)(t, {
									[f.q]: n,
									utm_source: "share",
									utm_medium: "web2x",
									utm_content: "rpan_stream",
									context: 3
								});
							e.sendEventWithName("share_copy", {
								referralId: n
							}), e.copyLink(o)
						} else {
							const s = Object(m.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), e.copyLink(s)
						}
					}
				}, r.a.createElement(y.a, {
					className: I.a.linkIcon
				})), s && r.a.createElement(x.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("crosspost", null, {
						hk: "23zSN6"
					}),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, r.a.createElement(v.a, {
					className: I.a.crosspostIcon
				})), t && r.a.createElement(x.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("Embed", null, {
						hk: "2CcsuC"
					}),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, r.a.createElement(j.a, {
					className: I.a.embedIcon
				}))))
			}))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);

			function b(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: c,
					isSponsored: d
				} = s;
				return c ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c
				}, Object(i.a)(s), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const x = h.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = g(e, ["small", "shouldReverseColor"]);
					const i = Object(r.b)(),
						a = s ? c.l : c.i;
					return o.a.createElement(a, f({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						}),
						"data-ignore-click": !!i
					}))
				}, "SubscribeInternalButton", p.a),
				O = h.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, i = g(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = Object(r.b)(),
						d = n ? c.i : c.l;
					return o.a.createElement(d, f({}, i, {
						className: Object(b.a)(i.className, {
							[p.a.isLarge]: !t
						}),
						"data-ignore-click": !!a
					}))
				}, "UnsubscribeButton", p.a),
				v = h.a.wrapped(d.a, "Checkmark", p.a),
				j = h.a.wrapped(l.a, "Plus", p.a),
				y = h.a.div("ButtonSpacer", p.a);
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: a,
							small: c = !1,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: l,
							getEventFactory: m,
							onSubscriptionsRequested: h
						} = e,
						_ = g(e, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						k = this.state.isHovered;
					let C = d ? "subscribed" : "subscribe";
					d && k && (C = "unsubscribe");
					const E = Object(u.a)({
						type: s.type,
						key: C
					});
					return d ? this.state.hasJustSubscribed || l ? o.a.createElement(O, f({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !c,
							[p.a.unsubscribeButtonHoverStyles]: !c
						}),
						onClick: this.onClick,
						small: c,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, _), c && o.a.createElement(v, null), !c && !k && o.a.createElement(v, null), !c && E) : c ? null : o.a.createElement(y, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(x, f({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !c
						}),
						onClick: this.onClick,
						small: c
					}, _, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(j, null), !c && E))
				}
			}
			t.a = Object(a.a)(Object(i.c)(_))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[o({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return q
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				m = s("./src/reddit/icons/fonts/Link/index.tsx"),
				p = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				b = s("./src/reddit/icons/fonts/Text/index.tsx"),
				h = s("./src/reddit/icons/fonts/helpers.tsx"),
				f = s("./src/reddit/icons/fonts/Video/index.m.less"),
				g = s.n(f);
			var x = c.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(h.b)("video"), " ").concat(e.className)
				}), "VideoIcon", g.a),
				O = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				v = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				j = s("./src/reddit/constants/elementClassNames.ts"),
				y = s("./src/reddit/controls/ContentType/index.m.less"),
				_ = s.n(y);
			const k = e => Object(i.a)(_.a.contentTypeIcon, e.className),
				C = e => r.a.createElement(m.a, {
					className: Object(i.a)(j.a, k(e))
				});

			function E(e) {
				const t = k(e);
				switch (e.type) {
					case "gifvideo":
						return r.a.createElement(u.a, {
							className: t
						});
					case "image":
						return r.a.createElement(p.a, {
							className: t
						});
					case "meta":
						return r.a.createElement(v.a, {
							className: t
						});
					case "rtjson":
					case "text":
						return r.a.createElement(b.a, {
							className: t
						});
					case "video":
						return r.a.createElement(x, {
							className: t
						});
					case "gallery":
						return r.a.createElement(O.a, {
							className: t
						});
					default:
						return r.a.createElement(C, e)
				}
			}
			var w = s("./src/reddit/controls/OutboundLink/index.tsx"),
				I = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Theme/index.ts"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/Thumbnail/index.m.less"),
				M = s.n(N);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => e.placeholderImage || Object(T.a)(e).placeholderImage,
				R = e => e.placeholderImage ? "cover" : Object(T.a)(e).placeholderImagePosition,
				A = c.a.span("LinkText", M.a),
				D = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						onClick: s,
						className: Object(i.a)(M.a.linkIcon, t)
					}, n)
				},
				B = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(M.a.hiddenImage, e.className)
				}),
				V = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = "url(".concat(n, ")"))
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(M.a.thumbnail, M.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: "url(".concat(e.src, ")"),
							borderColor: e.isOutbound ? Object(T.a)(e).button : Object(T.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(D, {
						className: e.linkIconClassName
					}, r.a.createElement(I.a, {
						className: Object(i.a)(M.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && r.a.createElement(A, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(B, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				U = e => e.isOutbound ? Object(T.a)(e).button : e.placeholderImage ? "transparent" : Object(T.a)(e).line,
				G = e => {
					const t = F(e),
						s = t && {
							background: Object(S.g)(Object(T.a)(e).placeholder, t, R(e))
						};
					return r.a.createElement("div", {
						className: Object(i.a)(M.a.thumbnail, M.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: Object.assign(Object.assign({}, s), {
							borderColor: U(e)
						})
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(E, {
						className: Object(i.a)(e.contentTypeClassName, M.a.contentType, {
							[M.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(D, {
						className: e.linkIconClassName
					}, r.a.createElement(I.a, {
						className: Object(i.a)(M.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && r.a.createElement(A, {
						className: e.linkTextClassName
					}, e.text)))
				},
				W = e => r.a.createElement(V, L({}, e, {
					className: Object(i.a)(M.a.blurredThumbnail, e.className)
				})),
				H = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: o,
						crosspost: a,
						forceShowNSFW: c,
						isMeta: d,
						linkIconClassName: l,
						linkTextClassName: u,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: b,
						removeLink: h,
						showContentType: f,
						templatePlaceholderImage: g,
						text: x,
						theme: O,
						usePreview: v
					} = e, j = !O.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!a || !a.isNSFW)) && !c, y = F({
						placeholderImage: g,
						redditStyle: b,
						theme: O
					}), _ = q(e), k = K(p, t, y, j, x, O, _, d, f, h, b, l, u, m, o), C = Object(P.E)(p);
					return Object(n.a)(C) && !h && C.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(i.a)(M.a.container, v ? M.a.usePreview : "", s)
					}, r.a.createElement(w.b, {
						href: Object(P.E)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, k)) : r.a.createElement("div", {
						className: Object(i.a)(M.a.container, v ? M.a.usePreview : "", s)
					}, k)
				}),
				q = e => {
					let {
						crosspost: t,
						post: s,
						url: n,
						usePreview: o
					} = e;
					if (n) return n;
					const {
						preview: r,
						media: i,
						thumbnail: a
					} = t || s;
					return o && r ? r.url : z(i) ? i.scrubberThumbSource : a.url
				},
				z = e => !!e && e.type === P.o.LIVEVIDEO,
				K = (e, t, s, o, a, c, l, u, m, p, b, h, f, g, x) => {
					const O = e.source && !e.isSponsored || !1;
					if (Object(n.a)(l)) {
						const s = z(e.media),
							n = s ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[M.a.verticallyCenterThumbnail]: s
							});
						return o ? r.a.createElement(W, L({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: O && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: b,
							text: a,
							theme: c
						})) : r.a.createElement(V, L({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: O && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return r.a.createElement(G, {
						className: t,
						contentTypeClassName: x,
						placeholderImage: s,
						isMeta: u,
						isOutbound: O && !p,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: g,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = H
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/VerticalVotes/index.m.less"),
				g = s.n(f);
			const x = Object(a.c)({
					isNightmode: h.T
				}),
				O = Object(i.b)(x),
				v = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class y extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isNightmode: s,
							shouldShowScore: o = !0,
							upvoteButtonClassName: i,
							containerRef: a,
							model: d
						} = e,
						p = v(e),
						h = j(e),
						f = d.voteState;
					return r.a.createElement("div", {
						className: Object(c.a)(g.a.votesContainer, e.className),
						id: "vote-arrows-".concat(d.id),
						ref: a
					}, p ? r.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": f === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: s,
						onClick: this.onUpvote,
						voteState: f
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": f === b.a.upvoted,
						className: Object(c.a)(l.o, i),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: f
					})), !e.compact && o && r.a.createElement(u.a, {
						className: e.scoreClassName,
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: f,
						isScoreHidden: e.model.isScoreHidden
					}), h ? r.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": f === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: s,
						onClick: this.onDownvote,
						voteState: f
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": f === b.a.downvoted,
						className: Object(c.a)(l.o, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: f
					})))
				}
			}
			const _ = Object(d.a)(O(y));
			t.a = _
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const f = {
					autoplayPref: h.b,
					activeModalId: l.a,
					crosspost: b.d,
					currentUser: h.i,
					isActive: b.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.m,
					isLoggedIn: h.I,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(b.r)(e, s)
					},
					imageGalleryCurrentItem: b.i,
					moderatorPermissions: m.i,
					modModeEnabled: d.P,
					post: b.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: p.a,
					showMedia: d.r,
					subredditOrProfile: b.ab,
					userIsOp: h.kb,
					flairStyleTemplate: d.R
				},
				g = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const s = t === a.a.upvoted ? Object(r.S)(o) : Object(r.q)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(r.Q)(o)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				},
				x = Object(n.b)(() => Object(o.c)(f), g, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: e => e.title
				}));
			t.a = e => x(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				u = new a.a(250),
				m = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = u.get(s);
						if (void 0 === n) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								i = e.title.split(r);
							for (let e = 1; e < i.length; e += 2) i[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, i[e]);
							n = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(i)), u.set(s, n)
						}
						return n
					}
				},
				p = Object(r.b)(() => Object(i.c)(d.c), d.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: m(s.searchQuery || "")
				}));
			t.a = e => l(p(e))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(n.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign(Object.assign({}, e), {
					onPostViewable: o.H
				})
			}(t))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: i.fb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				l = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const p = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: i,
						"data-redditstyle": a
					} = t, c = m(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, i, a);
					return o.a.createElement(e, u({
						className: Object(r.a)(l.a.Checkbox, d, s)
					}, c))
				},
				b = p(c.a),
				h = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? b : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
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
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const p = e => o.a.createElement("div", {
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(c.a, {
					className: l.a.expandRight
				}, e.isSelected ? o.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(i.a, {
					className: l.a.checkbox
				}), e.text)),
				b = e => {
					var {
						className: t
					} = e, s = m(e, ["className"]);
					return o.a.createElement(p, u({
						className: Object(r.a)(l.a.postCheckboxMenuItem, t)
					}, s))
				};
			t.b = p
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				x = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				O = s.n(x);
			var v = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: O.a.wrapper
					}, d.a.createElement(g.a, {
						className: O.a.titleRow
					}, s), d.a.createElement("div", {
						className: O.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: O.a.buttonRow
					}, d.a.createElement(f.i, {
						className: O.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				j = s("./src/reddit/controls/ErrorText/index.m.less"),
				y = s.n(j);
			const _ = Object(u.c)({
				activeModalId: b.a
			});
			class k extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: o,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(y.a.wrapper, s)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && d.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const C = Object(l.b)(_, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(k),
				E = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(C, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(E, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = C
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(i);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(i);
			t.a = n.a.wrapped(r.b, "styledOutboundLink", {
				styledOutboundLink: "".concat(a.a.styledOutboundLink, " ").concat(o.l)
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, s) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/keycodes.ts");
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props;
						t || this.state.value !== e && (s(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return o.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const o = e.key === r.b.ArrowUp,
							i = e.key === r.b.ArrowDown;
						if (o || i) {
							const t = this.getValues();
							if (!t.length) return;
							const r = n ? t.indexOf(n) : 0,
								i = t[((o ? r - 1 : r + 1) + t.length) % t.length];
							s(i), this.setState({
								value: i
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (s, n) => {
						const r = 0 === n,
							i = s.props.value === t,
							a = null !== t ? i ? 0 : -1 : r ? 0 : -1;
						return o.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: i,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				l = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/controls/Score/index.m.less"),
				b = s.n(p);
			const h = e => e.voteState === m.a.downvoted ? Object(u.a)(e).voteText.downvote : e.voteState === m.a.upvoted ? Object(u.a)(e).voteText.upvote : Object(l.a)(Object(d.a)(e)),
				f = Object(i.a)(e => {
					const t = {
							color: e.light ? c.a.lightboxHeaderText : h(e)
						},
						s = e.isScoreHidden ? "•" : Object(a.b)(e.score);
					return o.a.createElement("div", {
						className: Object(r.a)(b.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, s)
				});
			t.a = f
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts");
			const i = e => Object(r.a)(e, {
				endpoint: "".concat(n.a.gatewayUrl, "/desktopapi/v1/me"),
				method: o.db.GET
			})
		},
		"./src/reddit/endpoints/page/frontpage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "a", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./src/graphql/operations/Frontpage.json"),
				o = s("./src/lib/base64/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/performanceTimings/index.tsx"),
				c = s("./src/reddit/constants/graphql.ts"),
				d = s("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				l = s("./src/reddit/models/Post/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				g = s("./src/reddit/selectors/platform.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const O = (e, t) => {
					const {
						after: s,
						dist: n,
						isMobile: r,
						layout: i,
						limit: a,
						sort: l,
						t: u
					} = t, m = Object(x.P)(e), p = Object(g.q)(e), b = {
						recentPostIds: e.posts.recent,
						includeIdentity: m && !e.user.account,
						includeFeatured: !0,
						adContext: {
							layout: i ? i.toUpperCase() : c.a.Card,
							reddaid: e.user.reddaid,
							distance: n
						}
					};
					return l && (b.sort = l.toUpperCase()), u && (b.range = u.toUpperCase()), r ? b.pageSize = Object(d.a)(i) : a && (b.pageSize = a), p && p.ad && (b.forceAds = {
						ad: p.ad
					}), s && (b.after = Object(o.a)(s)), b
				},
				v = async (e, t, s, o) => {
					const c = Date.now(),
						d = await ((e, t) => Object(i.a)(e, Object.assign(Object.assign({}, n), {
							variables: t
						}), {
							traceRequestName: "get_frontpage"
						}))(e, t),
						g = Date.now();
					let x;
					try {
						const e = Date.now();
						x = (e => {
							let {
								trendingSubreddits: t = [],
								identity: s,
								home: n,
								featuredAnnouncements: o,
								featuredLiveEvent: r,
								recentPosts: i = []
							} = e;
							const a = [],
								c = [],
								d = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								g = e => {
									if (d.posts[e.id]) return e.id;
									const t = Object(m.e)(e);
									d.posts[t.id] = t;
									const {
										crosspostRoot: s
									} = e;
									s && s.type === l.a.Post && s.postInfo && g(s.postInfo);
									let n = t.id;
									switch (e.__typename) {
										case l.f.ProfilePost:
											d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(b.a)(e.profile));
											break;
										case l.f.SubredditPost:
											d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(h.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(u.a)(e.subreddit));
											break;
										case l.f.AdPost:
											const s = Object(m.b)(e);
											if (!s) {
												n = null;
												break
											}
											n = s, d.posts[s] = Object.assign(Object.assign({}, t), {
												id: s,
												permalink: "".concat(t.permalink, "?instanceId=").concat(encodeURIComponent(s))
											}), d.posts[t.id] || (d.posts[t.id] = Object.assign(Object.assign({}, t), {
												events: []
											})), d.postInstances[e.id] || (d.postInstances[e.id] = []), d.postInstances[e.id].push(s)
									}
									return n
								};
							for (const l of t) {
								const e = Object(h.a)(l);
								d.subreddits[e.id] = e, a.push(e.id)
							}
							for (const {
									node: l
								} of n.posts.edges) {
								const e = g(l);
								e && d.postIds.push(e)
							}
							for (const l of i) {
								if (!l) continue;
								const e = g(l);
								e && c.push(e)
							}
							const x = d.postIds.length - 1,
								O = x >= 0 ? d.postIds[x] : "",
								v = n.posts.dist;
							return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, d), {
								account: s && Object(f.a)(s) || null,
								featuredLiveThread: r,
								announcements: o,
								preferences: s && s.preferences && Object(p.a)(s.preferences, s.interactions) || null
							}), 0 !== a.length && {
								trendingSubredditIds: a
							}), 0 !== c.length && {
								recentPostIds: c
							}), {
								token: O
							}), null !== v && {
								dist: v
							})
						})(d.body.data);
						const t = Date.now(),
							n = [{
								duration: g - c,
								logKeyType: a.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: a.a.gqlNormalizationTiming
							}];
						Object(a.h)({
							name: r.p.FRONTPAGE,
							isLoggedIn: s,
							metrics: n,
							statsdPathsForExperiments: o
						})
					} catch (O) {}
					return Object.assign(Object.assign({}, d), {
						body: x
					})
				}
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/graphql/operations/MultiredditListing.json"),
				o = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(o.a)(e, Object.assign(Object.assign({}, n), {
				variables: t
			}))
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n, o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/meta.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function l(e) {
				return Object(a.N)(e, {}) === r.g.Large && !Object(d.H)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(i.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: o.lb
				})
			}

			function m(e) {
				switch (e) {
					case o.mb.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(n || (n = {}));
			const p = e => {
				switch (e) {
					case o.mb.Enabled:
						return n.Enabled;
					default:
						return n.NoBucket
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				l = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				const t = {
					account: null,
					dist: 0,
					features: null,
					multireddits: {},
					multiredditsByUser: {},
					pageInfo: null,
					postFlair: {},
					postIds: [],
					postInstances: {},
					posts: {},
					preferences: null,
					profiles: {},
					subreddits: {},
					token: void 0
				};
				if (!e) return t;
				const {
					identity: s,
					multireddit: u
				} = e;
				if (s && (t.account = Object(d.a)(s) || null, t.preferences = Object(a.a)(s.preferences, s.interactions) || null), !u) return t;
				const {
					posts: m
				} = u;
				if (m) {
					t.pageInfo = m.pageInfo;
					for (const {
							node: e
						} of m.edges) {
						const s = e;
						t.postIds.push(s.id);
						const {
							post: o,
							crosspost: a
						} = s && Object(i.a)(s);
						t.posts[o.id] = o, a && (t.posts[a.id] = a), s.__typename !== l.f.DeletedProfilePost && s.__typename !== l.f.DeletedSubredditPost && (s.authorFlair && (t.postFlair[o.belongsTo.id] || (t.postFlair[o.belongsTo.id] = {}), t.postFlair[o.belongsTo.id][o.author] = Object(n.a)(s.authorFlair)[0]), s.__typename === l.f.SubredditPost && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(c.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(r.a)(s.subreddit))))
					}
				} else t.pageInfo = {
					endCursor: null,
					hasNextPage: !1,
					hasPreviousPage: !1,
					startCursor: null
				};
				t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || "");
				const {
					multireddits: p,
					multiredditsByUser: b,
					profiles: h,
					subreddits: f
				} = Object(o.a)(u);
				return Object.assign(Object.assign({}, t), {
					multireddits: p,
					multiredditsByUser: b,
					profiles: Object.assign(Object.assign({}, t.profiles), h),
					subreddits: Object.assign(Object.assign({}, t.subreddits), f)
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/RichTextJson/index.ts");
			const o = "giphy|",
				r = "|downsized";

			function i(e, t) {
				return o + e + (t ? r : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(o)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function d(e) {
				let t = e.substring(o.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}

			function l(e) {
				return "object" == typeof e && null !== e && !!e.e
			}

			function u(e) {
				const t = e => {
					let s = [];
					const o = e.c && Array.isArray(e.c) ? e.c : [];
					for (const n of o) l(n) && (s = [...s, ...t(n)]);
					return n.F(e) && s.push(e.id), s
				};
				return e.reduce((e, s) => [...e, ...t(s)], [])
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return g
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
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
				b = e => Object(n.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/config.ts");
			const o = "".concat(n.a.assetPath, "/img/favicon/badged-favicon-32x32.png"),
				r = "".concat(n.a.assetPath, "/img/favicon/badged-favicon-16x16.png"),
				i = "".concat(n.a.assetPath, "/img/favicon/favicon-32x32.png"),
				a = "".concat(n.a.assetPath, "/img/favicon/favicon-16x16.png"),
				c = "badgeCountSync",
				d = e => window.document.querySelector('link[href="'.concat(e, '"]')),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? i : o),
						s = d(e ? a : r);
					t && s && (t.href = e ? o : i, s.href = e ? r : a)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign({
					gallery: r.gallery(e, t, s),
					post: r.post(e, t)
				}, r.defaults(e)),
				a = (e, t) => s => Object.assign(Object.assign({}, i(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(s, e)
				}),
				c = (e, t, s) => a => {
					const c = Object(o.a)(t);
					return Object.assign(Object.assign({}, i(a, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(a, e)), {
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						})
					})
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, s) => o => Object.assign(Object.assign({}, i(o, e, s)), {
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "j", (function() {
				return k
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/models/Gold/ProductOffer.ts"),
				r = s("./src/reddit/selectors/gold/giveAwards.ts"),
				i = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				d = s("./src/reddit/selectors/telemetry.ts"),
				l = s("./src/telemetry/models/GoldPurchase.ts"),
				u = s("./src/telemetry/models/Payment.ts"),
				m = s("./src/reddit/helpers/trackers/gild.ts"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/isComment.ts");
			const h = (e, t) => {
					const {
						thingId: s,
						packageId: c
					} = t, u = !!s, h = r.b(e), f = h ? Object(m.getAwardTypeFromAward)(h) : null, g = u ? f : a.n(e) ? l.Premium : l.Coins, x = s ? Object(b.a)(s) ? "comment" : "post" : void 0, O = c || a.r(e), v = [...Object(i.b)(e), ...Object(i.d)(e)].filter(e => e.mobileId === O)[0], j = Object(o.b)(v, u), y = v ? Math.round(1e4 * (v.baselinePennies - v.pennies) / v.baselinePennies) / 100 : 0, _ = v ? Math.round(1e4 * (v.coins - v.baselineCoins) / v.coins) / 100 : 0, k = v ? v.baselinePennies !== v.pennies ? "".concat(y, "_percent_price") : v.baselineCoins !== v.coins ? "".concat(_, "_percent_bonus") : void 0 : void 0, C = g === l.Premium ? n.ob : v ? v.pennies : void 0;
					return Object.assign(Object.assign({}, d.defaults(e)), {
						comment: s ? d.comment(e, s) : null,
						correlationId: a.p(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: s ? d.post(e, s) : null,
						screen: d.screen(e),
						subreddit: s ? d.subreddit(e) : null,
						goldPurchase: Object.assign(Object.assign({}, h ? {
							awardId: h.id,
							awardName: h.name,
							numberCoinsToRecipient: h.coinReward
						} : null), {
							type: g,
							gildedContent: u,
							contentType: x,
							numberCoins: v ? v.coins : void 0,
							offerContext: j,
							offerType: k
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: C
						},
						purchase: {
							priceMicros: C
						}
					})
				},
				f = (e, t) => s => Object.assign(Object.assign({}, h(s, {
					packageId: t,
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				x = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				O = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				v = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				j = e => t => Object.assign(Object.assign({}, h(t, {
					packageId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				y = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t) => s => {
					const n = h(s, {
						packageId: t,
						thingId: e
					});
					return Object.assign(Object.assign({}, n), {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign(Object.assign({}, n.payment), {
							defaultOption: u.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign(Object.assign({}, n.goldPurchase), {
							source: e ? l.GiveGold : a.n(s) ? l.PremiumMarketing : l.CoinsMarketing
						})
					})
				},
				k = e => t => {
					const s = h(t, {
						thingId: e
					});
					return Object.assign(Object.assign({}, s), {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign(Object.assign({}, s.payment), {
							method: Object(c.b)(t).queryParams.thanks ? u.PaymentMethod.Paypal : u.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/telemetry/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				c = (e, t, s) => n => Object.assign(Object.assign({
					source: Object(r.i)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t
				}, a(n)), {
					post: i.post(n, e)
				}),
				d = (e, t) => s => {
					const n = i.currentPost(s);
					return n ? c(n.id, e, t)(s) : Object.assign({
						source: Object(r.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e
					}, a(s))
				},
				l = (e, t) => s => Object(o.a)(Object.assign(Object.assign({}, c(e, t)(s)), i.defaults(s))),
				u = e => t => Object.assign(Object.assign({
					source: "id_card",
					action: n.c.CLICK,
					noun: e
				}, a(t)), {
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return r
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(n.screen)(e),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e),
					userSubreddit: Object(n.userSubreddit)(e)
				}),
				r = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off"
				}, o(t)),
				i = (e, t) => s => Object.assign({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t)
				}, o(s)),
				a = (e, t) => s => Object.assign({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, o(s)),
				c = (e, t) => s => Object.assign({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, o(s)),
				d = (e, t) => s => Object.assign({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, o(s)),
				l = (e, t) => s => Object.assign({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, o(s)),
				u = (e, t) => s => Object.assign({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t)
				}, o(s)),
				m = (e, t) => s => Object.assign({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t)
				}, o(s)),
				p = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				}),
				b = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/reddit/helpers/flair.ts");
			const i = (e, t) => s => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "post_flair"
				}, o.defaults(s)), {
					actionInfo: o.actionInfo(s),
					correlationId: Object(n.c)(n.a.SearchResults),
					post: o.post(s, e),
					search: Object.assign(Object.assign({}, o.postFlairClickToSearch(s, t)), {
						query: "flair_name:'".concat(t.postFlairName, "'"),
						queryId: Object(n.c)(n.a.SearchResults)
					}),
					subreddit: o.subreddit(s)
				}),
				a = e => t => Object.assign(Object.assign({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search"
				}, o.defaults(t)), {
					actionInfo: o.actionInfo(t),
					correlationId: Object(n.c)(n.a.SearchResults),
					search: o.postFlairClickToSearch(t, e),
					subreddit: o.subreddit(t)
				}),
				c = e => t => {
					const s = Object(r.g)(e);
					return Object.assign(Object.assign({}, o.defaults(t)), {
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				d = () => e => Object.assign(Object.assign({}, o.defaults(e)), {
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.subreddit(e)
				}),
				l = e => t => {
					const s = Object(r.g)(e);
					return Object.assign(Object.assign({}, o.defaults(t)), {
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				u = (e, t) => s => {
					const i = Object(r.g)(e),
						a = o.post(s, t);
					return Object.assign(Object.assign({}, o.defaults(s)), {
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.subreddit(s),
						postFlair: {
							id: e.templateId,
							title: i
						},
						post: a,
						search: {
							query: "flair_name:'".concat(i, "'"),
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: i,
							originElement: "post_flair",
							queryId: Object(n.c)(n.a.SearchResults),
							originPageType: s.platform.currentPage ? o.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o) => r => ({
					source: "report_prompt",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, s, o) => r => ({
					source: "report_survey",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return a
			})), s.d(t, "E", (function() {
				return c
			})), s.d(t, "q", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "u", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "s", (function() {
				return b
			})), s.d(t, "v", (function() {
				return h
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "F", (function() {
				return x
			})), s.d(t, "C", (function() {
				return O
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "r", (function() {
				return j
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "p", (function() {
				return P
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "D", (function() {
				return M
			})), s.d(t, "z", (function() {
				return L
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "x", (function() {
				return R
			})), s.d(t, "A", (function() {
				return A
			})), s.d(t, "B", (function() {
				return D
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign(Object.assign({}, o.defaults(e)), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.o)(e)
				}),
				a = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				b = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				h = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				f = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				g = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				x = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				O = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				v = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				j = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				y = e => t => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t)), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				C = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				P = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				S = (e, t, s) => i => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.l)(e)
				}, r(i)), {
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				T = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				N = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				M = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				L = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				F = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				R = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				A = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				D = () => (e, t) => {
					const s = r(e);
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s), {
						actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
							reason: "failed_post"
						}),
						scheduledPost: i(t)
					})
				}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				o = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}
			const c = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function d(e) {
				return function(e) {
					const [t, s] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), h = Object(o.useMemo)(() => {
						const t = a(e);
						return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
							name: "arrow",
							options: {
								element: d
							}
						})) : t
					}, [d, e]), {
						attributes: f,
						styles: g
					} = Object(r.a)(t, i, h);
					return Object(o.useMemo)(() => ({
						arrowProps: Object.assign({
							ref: l,
							style: g.arrow
						}, f.arrow),
						hide: b,
						popperProps: Object.assign({
							ref: c,
							style: g.popper
						}, f.popper),
						show: p,
						target: {
							element: t,
							ref: s
						},
						visible: u
					}), [l, f, c, b, p, g, t, s, u])
				}(Object(o.useMemo)(() => {
					const t = a(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, c))
				}, [e]))
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js");
			t.a = function(e, t, s) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, s);
					return o.observe(n), () => {
						o.unobserve(n)
					}
				}, [e, t, s])
			}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e, t) {
				const s = Object(n.useCallback)(s => {
					if (!t) return;
					const n = document.getElementById(e);
					n && (n.contains(s.target) || t(s))
				}, [e, t]);
				Object(n.useEffect)(() => {
					if (t) return document.body.addEventListener("click", s), () => {
						document.body.removeEventListener("click", s)
					}
				}, [t, s])
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement("i", d({
					className: Object(r.a)(Object(i.b)("comment"), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.m.less": function(e, t, s) {
			e.exports = {
				EmbedIcon: "_1J2DOAiKZ5l1xq516M9W_Q",
				embedIcon: "_1J2DOAiKZ5l1xq516M9W_Q"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, s) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("gif"), " ").concat(e.className)
			}), "GifIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, t, s) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, s) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Link/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("link"), " ").concat(e.className)
			}), "LinkIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("modActions"), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("outboundLink"), " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("photos"), " ").concat(e.className)
			}), "PhotoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, s) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: "".concat(Object(r.b)("premium"), " ").concat(e.className)
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Save/index.m.less": function(e, t, s) {
			e.exports = {
				SaveIcon: "_3n1jtdyipCtmS0HkOM1Tfd",
				saveIcon: "_3n1jtdyipCtmS0HkOM1Tfd"
			}
		},
		"./src/reddit/icons/fonts/Save/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Save/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Text/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("text"), " ").concat(e.className)
			}), "TextIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, s) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = d(e, ["className"]);
				return o.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(a.a.checkbox, t)
				}, s), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", c({}, e, {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: a
				} = e, u = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, u), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, o, r;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						post: s
					} = t;
					const n = s.belongsTo.id;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					if (!o) return null;
					const r = s.author;
					return r && o[r] || null
				},
				o = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!s) return null;
					const o = e.authorFlair.models[s];
					return o ? o[n] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = e => e.chat.unread.count,
				a = e => {
					return i(e).basicChannelCount
				},
				c = e => e.chat.promos,
				d = e => !(e.chat.isInited || e.chat.unread.api.pending),
				l = (e, t) => {
					const {
						chatConfig: s
					} = n.c;
					return Object(o.a)(s)(e, t)
				},
				u = e => {
					const t = Object(r.d)(e);
					if (e.chat.subredditSettings.subredditId === t) return e.chat.subredditSettings
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "x", (function() {
				return x
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "r", (function() {
				return v
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "z", (function() {
				return y
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "o", (function() {
				return k
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "s", (function() {
				return M
			})), s.d(t, "y", (function() {
				return L
			})), s.d(t, "u", (function() {
				return F
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "t", (function() {
				return B
			})), s.d(t, "g", (function() {
				return V
			})), s.d(t, "l", (function() {
				return U
			})), s.d(t, "j", (function() {
				return G
			})), s.d(t, "n", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/economics/sortBadges.ts"),
				r = s("./src/reddit/helpers/richTextJson/index.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Gold/Powerups/index.ts"),
				d = s("./src/reddit/models/Payments/index.ts"),
				l = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/gold/powerups.ts");
			const h = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				f = (e, t) => {
					const s = h(e, t);
					return s && s.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const x = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = f(e, t),
							n = Date.now();
						return s && n < s ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				O = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[a.a.Loyalty]: n.find(e => e.placement === i.a.First),
							[a.a.Achievement]: n.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				},
				v = (e, t, s) => {
					if (!n.d.spBadges(e)) return [];
					const r = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(o.a)(r.map(t => e.badges.models[t]).filter(Boolean))
				},
				j = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function y(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function _(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(i.c)(s) && s.userId === o) return s;
				const r = e.badges.models,
					a = e.user.ownedBadges[n] || {},
					c = Object(i.c)(s) ? s.type : s.id;
				return Object.keys(a).map(e => r[e]).find(e => e && e.type === c)
			}

			function k(e, t, s, n) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === m.a.Fetched) {
					if (s === a.a.Loyalty || s === a.a.Achievement) return o.data.collections[s];
					if (s === a.a.Cosmetic && n) return o.data.collections[s][n]
				}
				return []
			}

			function C(e, t) {
				const s = k(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function E(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.d)
				}
				return []
			}

			function w(e, t) {
				return k(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.d)(e) || !!e.price))
			}
			const I = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: "".concat(n.brand, " •••• ").concat(n.last4),
							id: s,
							type: d.a.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var P;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(P || (P = {}));
			const S = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				N = (e, t) => {
					if (!t) return {};
					const s = S.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				M = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						n = s && s.extra && s.extra.nomenclature || S;
					return {
						prices: N(e, t),
						member: n.member || S.member,
						memberPlural: n.memberPlural || S.memberPlural,
						memberAlt: n.memberAlt || S.memberAlt,
						memberAltPlural: n.memberAltPlural || S.memberAltPlural,
						membership: n.membership || S.membership,
						membershipAlt: n.membershipAlt || S.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				A = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				D = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				B = (e, t, s) => {
					const o = "replyToPost" !== s && Object(p.n)(e, {
						commentId: s
					});
					if (!!o && Object(r.a)(o)) return !0;
					if (t && Object(b.i)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const i = n.d.spGiphy(e),
						a = D(e, t);
					return i && a
				},
				V = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				U = (e, t) => {
					if (!t || !t.subredditId) return null;
					const s = (e.economics.me.data.claimPoints || {})[t.subredditId];
					if (!s || !s.length) return null;
					const n = (e.user.wallets[t.subredditId] || {}).latest,
						o = n && n.publicAddress && n.publicAddress.toLowerCase(),
						r = s.filter(e => !e.address || e.address.toLowerCase() === o);
					return r.reduce((e, t) => parseInt(t.round) < parseInt(e.round) ? t : e, r[0]) || null
				},
				G = (e, t) => {
					const s = e.economics.claims[t.subredditId];
					return !!s && s.isClaiming
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				i = (e, t) => {
					const s = r(e, t);
					return Object(o.T)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				c = (e, t) => {
					const s = r(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				d = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				l = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts"),
				c = s("./src/reddit/selectors/meta.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = Object(n.a)(d.P, (e, t) => {
					let {
						pageLayer: s
					} = t;
					return !s || Object(r.y)(s)
				}, c.c, (e, t, s) => !e && t && !s),
				u = Object(n.a)((e, t) => Object(i.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: o.S,
					throttledVariants: {
						[o.nb.CurrentThrottled]: o.S
					}
				}), a.a),
				m = e => e === o.nb.CurrentThrottled,
				p = e => e === o.nb.CurrentThrottled || e === o.nb.CurrentUnthrottled || e === o.nb.CurrentUnthrottledCopy || e === o.nb.NewPopUnthrottledCopy,
				b = e => e === o.nb.NewPopUnthrottledCopy,
				h = e => e === o.nb.NewPageUnthrottledCopy || e === o.nb.NewPageUnthrottledCopyFields,
				f = e => e === o.nb.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts");
			const o = e => {
				if (!Object(n.Oc)(e)) return e || void 0
			}
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const i = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = e => (e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: () => Object(c.H)(e),
					experimentName: n.ec
				}) === n.mc.Enabled
			})(e) && (e => {
				const t = Object(r.e)(e);
				return !!t && i.has(t.toLowerCase())
			})(e) && o.d.realtimeCommentsExperiment(e)
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				o = e => e.userDataRequestPage.userDataRequestPageApi
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll('meta[name="'.concat(a, '"]'));
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, "".concat(n.a.redditUrl).concat(c), e))
					} catch (s) {
						return void console.error(i, "".concat(n.a.redditUrl).concat(c), s)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const n = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.d7ceabeb7b58261bca20.js.map