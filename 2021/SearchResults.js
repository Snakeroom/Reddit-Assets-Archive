// https://www.redditstatic.com/desktop2x/SearchResults.f1e486f06661604a1eec.js
// Retrieved at 4/28/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function r(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						x = !o && !l && /macintosh/i.test(t),
						f = !i && !m && !p && !u && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						C = !y && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (n.msedge = e, n.version = g) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : m ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? n = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, v && (n.version = v)) : o ? (n = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (n.version = v)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && v && (n.version = v)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && o ? (n[o] = e, n.ios = e, n.osname = "iOS") : x ? (n.mac = e, n.osname = "macOS") : E ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var O = "";
					n.windows ? O = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);
					var k = !n.windows && O.split(".")[0];
					return y || c || "ipad" == o || i && (3 == k || k >= 4 && !C) || n.silk ? n.tablet = e : (C || "iphone" == o || "ipod" == o || i || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) r.push(t(e[s]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), s = n(e, (function(e) {
							var s = t - r(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, n) {
					var i = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (i = t(n));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = o, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = r() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, r, n) {
				return n(e, (function(e, n, o) {
					s = r ? (r = !1, e) : t(s, e, n, o)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), r(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), s, d, n)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : n(t), r(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var r = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return r(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, s) => (r = (() => {})) => n => {
				const o = p(n.target, n.currentTarget),
					a = u(n.target, n.currentTarget);
				o && s && t && (m(n.target, n.currentTarget, l.anchors) ? s(t(e, o, a)) : s(s => {
					const r = t(e, o, a)(s);
					let n;
					if (r && r.actionInfo) {
						const {
							pageType: e,
							...t
						} = r.actionInfo;
						n = t
					}
					return {
						...r,
						actionInfo: Object(i.previousPageActionInfo)(s, n)
					}
				})), m(n.target, n.currentTarget, l.anchorsAndButtons) && r(n)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, l = Object(r.useCallback)(c(i, o, s), [i, o, s]);
					return n.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(o.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, s)),
				p = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				u = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && u(e.parentElement, t))
		},
		"./src/lib/colors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			}));
			const r = "#FFF",
				n = "#FF4500",
				o = "#0079D3",
				i = "#46D160",
				a = {
					black: "#000",
					white: r,
					orangered: n,
					alienblue: o,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: n,
					downvote: "#7193FF",
					positive: i,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: n,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: n,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				c = {
					...a,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return _
			}));
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(i.g),
				x = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				g = Object(n.a)(i.c),
				v = Object(n.a)(i.f),
				y = Object(n.a)(i.j),
				C = Object(n.a)(i.i),
				E = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						o = Object(p.e)(n),
						i = Object(p.d)(n),
						d = Object(h.I)(n);
					if (o || !i) return;
					e(f());
					let u = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (O(t)) {
								if (k(t)) {
									e(g({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (j(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: o
										} = s.focusRecommendations[0],
										i = [r, n],
										a = Object(m.d)(i),
										c = Object(l.b)(i),
										d = Object(m.c)(r),
										p = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (v) {
						u = !1
					}
					u || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !k(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, _ = () => async (e, t, s) => {
					var r, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (r = Object(u.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.J)(i);
						return Object(o.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			})), s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/structuredStyles/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/blade.ts"),
				d = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/structuredStyles.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/telemetry/index.ts");
			const b = Object(n.a)(i.t),
				x = Object(n.a)(i.u),
				f = Object(n.a)(i.s),
				g = (e, t, s) => async (r, n, o) => {
					const i = Object(u.A)(n(), {
						subredditName: e
					});
					if (i) return y(i, t, s)(r, n, o)
				}, v = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, s) => async (n, i, u) => {
					const g = await Object(l.e)(t);
					n(b());
					const y = i();
					try {
						await Object(o.g)("communityIcon", g, e.id)(n, i, u)
					} catch (E) {
						return Object(h.a)(Object(d.c)(y, "something went wrong with the uploading the image")), n(Object(a.f)({
							kind: m.b.Error,
							text: v()
						})), void n(f())
					}
					const C = Object(p.c)(i(), {
						name: "communityIcon"
					});
					if (!C) return Object(h.a)(Object(d.c)(y, "image is null")), n(Object(a.f)({
						kind: m.b.Error,
						text: v()
					})), void n(f());
					await Object(o.k)(e.id, {
						communityIcon: C
					}, c.b.idCard, s)(n, i, u), n(Object(a.f)({
						kind: m.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), n(x())
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
			var r = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(r);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = o
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
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !n && o.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), o.a.createElement(a.a, {
					href: c.url.replace(r.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && o.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement(i.a, d({
				className: Object(o.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return H
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return K
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				O = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				k = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				I = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				N = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				T = s("./src/reddit/contexts/Post/index.tsx"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				D = s.n(A),
				B = s("./src/reddit/components/ClassicPost/index.m.less"),
				U = s.n(B);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class W extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: r,
						inSubredditOrProfile: a,
						eventFactory: y,
						first: w,
						flairStyleTemplate: N,
						formatTitle: T,
						hostPostId: A,
						isActionBarAnimationEnabled: B,
						isCheckboxSelected: W,
						isCurrentUserProfilePost: q,
						isFrontpage: z,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: G,
						isOverlay: Y,
						imageGalleryCurrentItem: J,
						moderatorPermissions: Q,
						modModeEnabled: X,
						onClickPost: Z,
						onIgnoreReports: $,
						onOpenReportsDropdown: ee,
						poll: te,
						post: se,
						postId: re,
						redditStyle: ne,
						scrollerItemRef: oe,
						showBulkActionCheckbox: ie,
						showEditFlair: ae,
						showMedia: ce,
						subredditOrProfile: de,
						toggleCheckbox: le,
						userIsOp: me,
						shouldShowGalleryTileOption: pe
					} = this.props, ue = ne ? void 0 : N, he = this.props.crosspost || void 0, be = Object(F.a)(Q), xe = Object(L.a)(Q), fe = Object(M.a)(Q), ge = X && F.a, ve = !!se.media && se.media.type === S.o.RTJSON, ye = me && ve, Ce = a && !ce, Ee = !!se.media && Object(S.G)(se.media), Oe = {
						flairStyleTemplate: ue,
						post: se,
						inSubredditOrProfile: a,
						isCurrentUserProfilePost: q,
						isOverlay: Y,
						shouldShowSubscribeButton: !(z && G),
						subredditOrProfile: de
					}, ke = Object(o.t)(se, J), {
						source: je
					} = ke, _e = n.a.createElement(v.a, {
						className: Object(i.a)(D.a.classicPostStyles, U.a.postContainer, Object(R.a)(this.props), w ? U.a.mFirst : void 0, e),
						isOverlay: Y,
						style: {
							...Object(R.d)(this.props),
							...Object(R.b)(this.props.flairStyleTemplate)
						},
						post: se,
						onClick: Z,
						eventFactory: y
					}, n.a.createElement(O.a, {
						model: se,
						handleVote: s,
						showBulkActionCheckbox: ie,
						isCheckboxSelected: W,
						toggleCheckbox: le,
						flairStyleTemplate: ue,
						redditStyle: ne,
						subreddit: de,
						isActionBarAnimationEnabled: B,
						postId: re
					}), n.a.createElement(g.a, {
						"data-click-id": "background",
						flairStyleTemplate: ue
					}, n.a.createElement(p.a, {
						className: U.a.eventMeta,
						post: se
					}), n.a.createElement("div", {
						className: U.a.mainBody
					}, n.a.createElement("div", {
						className: Ce ? U.a.expandoContainer : U.a.thumbnailContainer
					}, !Ce && n.a.createElement(P.a, {
						className: U.a.classicThumbnail,
						crosspost: he && se,
						isMeta: se.isMeta,
						post: he || se,
						redditStyle: ne,
						templatePlaceholderImage: ue && ue.postPlaceholderImage,
						removeLink: Ee
					}), n.a.createElement(u.a, {
						crosspost: he,
						className: U.a.rightExpando,
						isExpanded: !!r,
						post: se,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: U.a.content,
						"data-click-id": "body"
					}, n.a.createElement(k.c, {
						className: te ? U.a.titleWithPoll : void 0,
						format: T,
						poll: te,
						post: se,
						redditStyle: ne,
						size: k.b.Medium,
						titleColor: ue && ue.postTitleColor,
						isOverlay: Y
					}, se.source && !he && n.a.createElement(I.a, {
						href: se.source.url,
						isSponsored: se.isSponsored,
						postId: se.id,
						source: se.source
					}, Object(c.a)(se))), n.a.createElement(C.a, V({
						key: "PostMeta"
					}, Oe)), X && be && Object(f.c)(se) && n.a.createElement(x.a, {
						onIgnoreReports: $,
						reportable: se
					}), se.isSponsored && je && je.url && n.a.createElement(d.a, {
						className: U.a.adLinkWrapper
					}, n.a.createElement(l.a, {
						post: se,
						adLinkContent: ke
					})), n.a.createElement("div", {
						className: U.a.flatlistContainer
					}, n.a.createElement(u.a, {
						className: U.a.leftExpando,
						crosspost: he,
						isExpanded: !!r,
						post: se,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: U.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ue,
						model: se,
						onVoteClick: s
					}), n.a.createElement(h.a, {
						className: U.a.flatlistSeparator
					}), n.a.createElement(h.c, {
						className: U.a.flatlist,
						currentUser: t,
						hasModFlairPerms: xe,
						hasModPostPerms: be,
						hasModFullPerms: fe,
						hostPostId: A,
						isActionBarAnimationEnabled: B,
						isOverlay: !!Y,
						modModeEnabled: X,
						onIgnoreReports: $,
						onOpenReportsDropdown: ee,
						post: se,
						showEditPost: ye,
						showEditFlair: ae,
						tooltipType: Y ? j.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.h)({
							editPost: !ge,
							save: !ge,
							hide: !ge,
							report: !ge
						})
					})), n.a.createElement(b.d, null))), H(se, oe, r, pe, K)));
					return n.a.createElement(_.b, null, _e)
				}
			}
			const H = (e, t, s, r, o) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: U.a.crosspostMediaWrapper
				}, q(e, t, r, o)) : q(e, t, r, o) : null,
				q = (e, t, s, r) => n.a.createElement(y.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: r,
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
				z = Object(a.a)(W),
				K = Object(T.b)(Object(N.a)(z));
			t.default = Object(w.a)(z)
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, s) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, s) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, s) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, s) {
			e.exports = {
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, s) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, s) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, s) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0",
				userBadges: "_3Ofd-Ek86mwX500i92F84q"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/helpers/trackers/powerups.ts"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				x = s("./src/reddit/components/AuthorLink/index.tsx"),
				f = s("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				g = s("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				v = s.n(g);
			const y = e => {
				const t = Object(i.e)(f.a),
					{
						className: s,
						comment: r,
						isAuthorDeleted: n,
						isLivestreaming: a,
						isStrong: c,
						style: d
					} = e;
				return o.a.createElement(x.a, {
					className: Object(m.a)(v.a.commentAuthorLink, s),
					author: r.author,
					isAdmin: r.isAdmin,
					isAdminEmeritus: r.distinguishType === p.C.ALUMNI_ADMIN,
					isAuthorDeleted: n,
					isLivestreaming: a,
					isMod: r.isMod,
					isOp: r.isOp,
					isStrong: c,
					isUnstyled: t,
					style: d
				}, r.author)
			};
			var C = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				E = s("./src/reddit/components/Flair/index.tsx"),
				O = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/controls/MetaData/index.tsx"),
				_ = s("./src/reddit/helpers/flair.ts"),
				I = s("./src/reddit/models/Comment/index.ts"),
				S = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				P = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = s("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = s.n(w);
			const T = ({
				authorClassName: e,
				className: t,
				comment: s,
				isLivestreaming: r,
				isStrong: n,
				renderedInOverlay: i
			}) => o.a.createElement(P.b, {
				className: Object(m.a)(N.a.authorHoverCard, t),
				postOrComment: s,
				tooltipType: i ? k.c.Lightbox : void 0
			}, o.a.createElement(S.b, {
				ignore: Object(I.f)(s) || !!s.distinguishType && s.distinguishType !== p.C.NONE,
				subredditId: s.subredditId,
				userId: s.authorId
			}, o.a.createElement(y, {
				className: e,
				comment: s,
				isLivestreaming: r,
				isStrong: n,
				isAuthorDeleted: Object(I.f)(s)
			})));
			var L = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				M = s("./src/reddit/icons/fonts/index.tsx"),
				F = s("./src/reddit/icons/svgs/Cake/index.tsx");
			const R = (e, t, s = !1) => `${e}${t}${s?"inOverlay":""}`,
				A = () => r.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				D = () => r.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				B = e => r.fbt._("Moderator of {subredditDisplayText}, speaking officially", [r.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				U = () => r.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				V = () => r.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var W = s("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				H = s.n(W);
			const q = ({
				className: e,
				commentId: t,
				isInIcons2020: s,
				renderedInOverlay: n
			}) => {
				const a = Object(i.d)(),
					c = () => a(Object(l.h)({
						tooltipId: d
					})),
					d = R("CommentTopMeta--cakeday--", t, n),
					p = r.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return o.a.createElement(o.a.Fragment, null, s ? o.a.createElement(M.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(H.a.cakeIcon, e),
					"aria-label": p,
					id: d,
					onMouseEnter: c,
					onMouseLeave: c
				}) : o.a.createElement(F.a, {
					"aria-label": p,
					className: Object(m.a)(H.a.cakeIcon, e),
					id: d,
					onMouseEnter: c,
					onMouseLeave: c
				}), o.a.createElement(L.c, {
					tooltipId: d,
					text: p
				}))
			};
			var z = s("./src/lib/addQueryParams/index.ts"),
				K = s("./src/lib/humanizeDateTime/index.ts"),
				G = s("./src/lib/timeAgo/index.ts"),
				Y = s("./src/reddit/actions/comment/index.ts");
			const J = e => {
					const {
						className: t,
						comment: s,
						compact: r,
						renderedInOverlay: n
					} = e, a = Object(i.d)(), c = R("CommentTopMeta--Created--", s.id, n), d = () => a(Object(l.h)({
						tooltipId: c
					}));
					return o.a.createElement("a", {
						className: t,
						href: Object(z.a)(s.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							Q(a, s.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(G.d)(s.created, {
						noPostfix: r,
						shortenedUnit: r
					}), o.a.createElement(L.c, {
						tooltipId: c,
						text: Object(K.a)(s.created)
					}))
				},
				Q = (e, t) => {
					window.addEventListener("focus", (function s() {
						X(e, t, s)
					}))
				},
				X = (e, t, s) => {
					window.removeEventListener("focus", s), e(Object(Y.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(Y.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Z = s("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = () => o.a.createElement(j.a, {
				className: $.a.crowdControlText
			}, ee._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var se = s("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				re = s.n(se);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), oe = ({
				compact: e,
				editedAt: t
			}) => o.a.createElement(j.a, {
				className: re.a.editedText
			}, ne._("edited {time}", [ne._param("time", Object(G.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ie = s("./src/reddit/helpers/isRemoved.ts"),
				ae = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ce = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				de = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				le = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				me = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				he = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				be = s("./src/reddit/models/AutomatedReporting/index.ts"),
				xe = s("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				fe = s.n(xe);
			const ge = ({
				comment: e,
				ignoreLock: t,
				isInIcons2020: n,
				renderedInOverlay: a
			}) => {
				const c = Object(i.d)(),
					d = e => () => c(Object(l.f)({
						tooltipId: e
					})),
					p = () => c(Object(l.i)()),
					u = t => R(t, e.id, a),
					h = u("CommentTopMeta--Automod--"),
					b = u("CommentTopMeta--Approve--"),
					x = u("CommentTopMeta--Remove--"),
					f = u("CommentTopMeta--Report--"),
					g = u("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(be.b)(e.bannedBy),
					y = d(x);
				return o.a.createElement(o.a.Fragment, null, (e.approvedBy || e.isApproved) && o.a.createElement(o.a.Fragment, null, o.a.createElement(de.a, {
					className: fe.a.approveIcon,
					desc: Object(ae.a)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: p,
					isFilled: n
				}), o.a.createElement(L.c, {
					tooltipId: b,
					text: Object(ae.a)(e)
				})), Object(ie.a)(e) && !v && o.a.createElement(o.a.Fragment, null, o.a.createElement(me.a, {
					className: fe.a.removeIcon,
					desc: Object(ae.c)(e),
					id: x,
					onMouseEnter: y,
					onMouseLeave: p,
					isFilled: n
				}), o.a.createElement(L.c, {
					tooltipId: x,
					text: Object(ae.c)(e)
				})), Object(ie.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && o.a.createElement("a", {
					className: fe.a.removalReason,
					onClick: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => c(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, r.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ie.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && o.a.createElement("a", {
					className: fe.a.removalReason,
					onMouseEnter: y,
					onMouseLeave: p
				}, r.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && o.a.createElement(le.a, {
					className: fe.a.lockIcon,
					desc: r.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: n
				}), e.bannedBy && e.isSpam && o.a.createElement(ue.a, {
					className: fe.a.spamIcon,
					desc: Object(ae.e)(e),
					id: g,
					onMouseEnter: d(g),
					onMouseLeave: p,
					isFilled: n
				}), e.bannedBy && e.isSpam && o.a.createElement(L.c, {
					tooltipId: g,
					text: Object(ae.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (n ? o.a.createElement(M.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(fe.a.automoderatorIcon, {
						[fe.a.removed]: !!e.bannedBy
					}),
					"aria-label": ae.b,
					id: h,
					key: h,
					onMouseEnter: d(h),
					onMouseLeave: p
				}) : o.a.createElement(he.a, {
					className: Object(m.a)(fe.a.automoderatorIcon, {
						[fe.a.removed]: !!e.bannedBy
					}),
					desc: ae.b,
					id: h,
					key: h,
					onMouseEnter: d(h),
					onMouseLeave: p
				})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && o.a.createElement(L.c, {
					tooltipId: h,
					text: ae.b
				}), Object(ce.a)(e) && o.a.createElement(pe.a, {
					className: fe.a.reportIcon,
					desc: Object(ae.d)(e.numReports),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: p,
					isFilled: n
				}), Object(ce.a)(e) && o.a.createElement(L.c, {
					tooltipId: f,
					text: Object(ae.d)(e.numReports)
				}), v && o.a.createElement("a", {
					className: fe.a.removalReason
				}, r.fbt._("• Removed by the Automated {filterName}", [r.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var ve, ye = s("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ve || (ve = {}));
			var Ce = s("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ee = s.n(Ce);
			const Oe = {
					[ve.Admin]: {
						color: ye.b,
						label: r.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: A
					},
					[ve.Mod]: {
						color: ye.c,
						label: r.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => B(e.subredditDisplayText)
					},
					[ve.Op]: {
						color: ye.a,
						label: r.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: U
					},
					[ve.AlumniAdmin]: {
						color: ye.b,
						label: r.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: D
					},
					[ve.Contractor]: {
						color: ye.a,
						label: r.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: V
					}
				},
				ke = e => {
					const t = Object(i.d)(),
						s = function(e) {
							return e.isAdmin ? ve.Admin : e.isMod ? ve.Mod : e.isOp ? ve.Op : e.distinguishType === p.C.ALUMNI_ADMIN ? ve.AlumniAdmin : e.authorIsContractor ? ve.Contractor : null
						}(e.comment);
					if (!s) return null;
					if (s === ve.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: r,
						color: n,
						label: a,
						tooltipTemplate: c
					} = Oe[s], d = R(r, e.comment.id, e.renderedInOverlay), u = c(e), h = () => t(Object(l.h)({
						tooltipId: d
					}));
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: Object(m.a)(Ee.a.role, e.className),
						style: {
							color: n
						},
						id: d,
						onMouseEnter: h,
						onMouseLeave: h
					}, a), o.a.createElement(L.c, {
						tooltipId: d,
						text: u
					}))
				};
			var je = s("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				_e = s.n(je);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Se = () => o.a.createElement(j.a, {
				className: _e.a.stickiedText
			}, Ie._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Pe = s("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				we = s.n(Pe);
			const Ne = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: s,
					comment: n,
					flair: i,
					ignoreLock: a,
					isInIcons2020: c,
					isLivestreaming: d,
					renderedInOverlay: l,
					subredditDisplayText: p,
					renderContractorBadge: u
				} = e;
				return n.isDeleted ? o.a.createElement("div", {
					className: Object(m.a)(we.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, o.a.createElement("span", {
					className: we.a.authorLine
				}, o.a.createElement("span", {
					className: we.a.metaText
				}, n.deletedBy === I.c.User ? r.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : r.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), o.a.createElement(j.c, {
					className: we.a.separator
				}), o.a.createElement(J, {
					key: "Created",
					className: we.a.metaText,
					comment: n,
					compact: !0,
					renderedInOverlay: l
				}))) : o.a.createElement("div", {
					className: Object(m.a)(we.a.container, t),
					"data-testid": "post-comment-header"
				}, o.a.createElement("span", {
					className: we.a.authorLine
				}, !Object(I.f)(n) && o.a.createElement(C.b, {
					className: we.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: n.subredditId,
					userId: n.authorId,
					uniqueIdentifier: n.id
				}), o.a.createElement(T, {
					authorClassName: we.a.author,
					comment: n,
					isLivestreaming: d,
					renderedInOverlay: l
				}), s && o.a.createElement(te, null), n.isAuthorCakeday && o.a.createElement(q, {
					className: we.a.baselineItem,
					commentId: n.id,
					isInIcons2020: c,
					renderedInOverlay: l
				}), o.a.createElement(O.a, {
					className: we.a.cryptoPoints,
					contentId: n.id,
					subredditId: n.subredditId,
					userId: n.authorId,
					username: n.author
				}), o.a.createElement(ke, {
					className: we.a.role,
					comment: n,
					subredditDisplayText: p,
					renderContractorBadge: u,
					renderedInOverlay: l
				}), o.a.createElement(j.c, {
					className: we.a.separator
				}), o.a.createElement(J, {
					key: "Created",
					className: we.a.metaText,
					comment: n,
					compact: !0,
					renderedInOverlay: l
				}), n.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.c, {
					className: we.a.separator
				}), o.a.createElement(Se, null)), n.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.c, {
					className: we.a.separator
				}), o.a.createElement(oe, {
					compact: !0,
					editedAt: n.editedAt
				})), o.a.createElement(ge, {
					comment: n,
					ignoreLock: a,
					isInIcons2020: c,
					renderedInOverlay: l
				}), o.a.createElement(b.a, {
					thing: n,
					tooltipType: l ? k.c.Lightbox : void 0
				})), i && !Object(_.o)(i) && o.a.createElement("span", {
					className: we.a.userFlairLine
				}, o.a.createElement(E.b, {
					className: we.a.flair,
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var Te = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Le = s("./src/reddit/selectors/economics.ts"),
				Me = s("./src/reddit/models/Flair/index.ts"),
				Fe = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				Re = s("./src/reddit/icons/fonts/Op/index.tsx"),
				Ae = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				De = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				Be = s("./src/reddit/selectors/subreddit.ts"),
				Ue = s("./src/reddit/selectors/userFlair.ts"),
				Ve = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				We = s.n(Ve);

			function He() {
				return (He = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const qe = u.a.wrapped(E.b, "RightPositionedAuthorFlair", We.a),
				ze = u.a.wrapped(Fe.a, "AdminIcon", We.a),
				Ke = u.a.div("AdminEmeritus", We.a),
				Ge = u.a.wrapped(Ae.a, "ModeratorIcon", We.a),
				Ye = u.a.wrapped(Re.a, "OpIcon", We.a),
				Je = u.a.wrapped(Fe.a, "ContractorIcon", We.a),
				Qe = u.a.span("DeletedText", We.a),
				Xe = u.a.wrapped(j.a, "MetaSeparator", We.a),
				Ze = e => (t, {
					comment: s,
					renderedInOverlay: r
				}) => R(e, s.id, r),
				$e = Object(i.b)(() => Object(a.c)({
					adminTooltipId: Ze("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Ze("CommentTopMeta--AdEm--"),
					contractorTooltipId: Ze("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ze("CommentTopMeta--Gold--"),
					modTooltipId: Ze("CommentTopMeta--Mod--"),
					opTooltipId: Ze("CommentTopMeta--OP--"),
					topSupporterTooltipId: Ze("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Le.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const s = Object(Be.I)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ue.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: De.a,
					isCommentHeaderRedesignEnabled: f.a
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(d.c)())
				}));
			t.a = $e(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					children: r,
					className: n,
					collapsed: i,
					collapsedBecauseCrowdControl: a,
					comment: d,
					commentsPageKey: l,
					contractorTooltipId: p,
					compact: u,
					flair: x,
					flairPosition: f,
					hasBadges: g,
					isCommentHeaderRedesignEnabled: v,
					isInIcons2020: y,
					isLivestreaming: _,
					isPostComment: S,
					ignoreFlairPosition: P,
					ignoreLock: w,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: F,
					openPowerupsModal: R,
					renderContractorBadge: A,
					renderedInOverlay: D,
					subredditDisplayText: B,
					topSupporterTooltipId: U
				} = e, V = Object(c.a)(), W = o.a.createElement(o.a.Fragment, null, o.a.createElement(Te.b, {
					commentId: d.id
				}), o.a.createElement(Te.a, {
					commentId: d.id,
					commentsPageKey: l
				}));
				if (S && v) return o.a.createElement(o.a.Fragment, null, o.a.createElement(Ne, {
					className: Object(m.a)(n, {
						[We.a.collapsed]: i
					}),
					collapsedBecauseCrowdControl: a,
					comment: d,
					flair: x || null,
					ignoreLock: w,
					isInIcons2020: y,
					isLivestreaming: _,
					renderedInOverlay: D,
					subredditDisplayText: B,
					renderContractorBadge: !!A
				}), W);
				if (d.isDeleted) return o.a.createElement(et, He({}, e, {
					className: Object(m.a)(n, We.a.container, {
						[We.a.collapsed]: i
					})
				}));
				if (i) return o.a.createElement(tt, He({}, e, {
					className: Object(m.a)(n, We.a.container, {
						[We.a.collapsed]: i
					})
				}));
				const H = !P && f === Me.b.Left;
				return o.a.createElement("div", {
					className: Object(m.a)(n, We.a.container, {
						[We.a.collapsed]: i,
						[We.a.hasBadges]: g,
						[We.a.liveStreaming]: _
					}),
					"data-testid": "comment-top-meta"
				}, x && H && o.a.createElement(E.b, {
					flair: x,
					forceSmallEmojis: u
				}), !Object(I.f)(d) && o.a.createElement(C.b, {
					className: We.a.userBadges,
					showAddCustom: !0,
					subredditId: d.subredditId,
					userId: d.authorId,
					uniqueIdentifier: d.id
				}), r && r, o.a.createElement(T, {
					comment: d,
					isLivestreaming: _,
					isStrong: !!u,
					renderedInOverlay: D
				}), a && o.a.createElement(te, null), a && o.a.createElement(j.c, {
					className: We.a.metaText,
					key: "crowdControlSeparator"
				}), x && !H && o.a.createElement(qe, {
					flair: x,
					forceSmallEmojis: u
				}), !u && o.a.createElement(O.a, {
					className: We.a.publicPoints,
					contentId: d.id,
					metaSeparator: o.a.createElement(j.c, {
						className: We.a.metaText
					}),
					subredditId: d.subredditId,
					userId: d.authorId,
					username: d.author
				}), o.a.createElement(o.a.Fragment, null, W, !v && o.a.createElement(rt, {
					comment: d,
					compact: u,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					contractorTooltipId: p,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					openPowerupsModal: () => {
						V(Object(h.p)("comment")), R()
					},
					opTooltipId: F,
					renderContractorBadge: A,
					renderedInOverlay: D,
					subredditDisplayText: B,
					topSupporterTooltipId: U,
					isInIcons2020: y
				}), v && o.a.createElement(ke, {
					className: We.a.authorRole,
					comment: d,
					subredditDisplayText: B,
					renderContractorBadge: !!A,
					renderedInOverlay: D
				})), !u && o.a.createElement(o.a.Fragment, null, !d.isDeleted && !S && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.b, {
					className: We.a.metaText,
					isScoreHidden: d.isScoreHidden,
					score: d.score
				}), o.a.createElement(j.c, {
					className: We.a.metaText,
					key: "scoreCreatedSeparator"
				})), o.a.createElement(J, {
					key: "Created",
					className: We.a.MetaLink,
					comment: d,
					renderedInOverlay: D
				}), d.isStickied && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.c, {
					className: We.a.separator
				}), o.a.createElement(Se, null)), d.editedAt && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.c, {
					className: We.a.separator
				}), o.a.createElement(oe, {
					editedAt: d.editedAt
				}))), o.a.createElement(ge, {
					comment: d,
					ignoreLock: w,
					isInIcons2020: y,
					renderedInOverlay: D
				}), o.a.createElement(b.a, {
					thing: d,
					tooltipType: D ? k.c.Lightbox : void 0
				}))
			});
			const et = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: n,
						comment: i,
						renderedInOverlay: a
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement(Qe, null, i.deletedBy === I.c.User ? r.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : r.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), o.a.createElement(J, {
						key: "Created",
						className: We.a.MetaLink,
						comment: i,
						renderedInOverlay: a
					}), s && st({
						childrenInfo: t
					}))
				},
				tt = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: r,
						renderedInOverlay: n
					} = e;
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement("div", null, o.a.createElement(y, {
						comment: t,
						isAuthorDeleted: Object(I.f)(t)
					})), o.a.createElement(j.b, {
						className: We.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), o.a.createElement(j.c, {
						className: We.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(J, {
						key: "Created",
						className: We.a.MetaLink,
						comment: t,
						renderedInOverlay: n
					}), st({
						childrenInfo: r
					}))
				},
				st = e => {
					const {
						hasContinueThread: t,
						numChildren: s
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return o.a.createElement(Xe, {
						className: We.a.metaText
					}, t ? r.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [r.fbt._plural(s, "number")], {
						hk: "13XC7a"
					}) : r.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [r.fbt._plural(s, "number")], {
						hk: "dhX9w"
					}))
				};
			class rt extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						renderedInOverlay: s,
						...r
					} = this.props;
					return o.a.createElement(n.Fragment, null, e.isAuthorCakeday && o.a.createElement(q, {
						commentId: e.id,
						isInIcons2020: t,
						renderedInOverlay: s
					}), e.isAdmin && o.a.createElement(ze, {
						desc: A(),
						id: r.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: r.onHideTooltip,
						isFilled: t
					}), e.isAdmin && nt(r.adminTooltipId, A()), e.distinguishType === p.C.ALUMNI_ADMIN && o.a.createElement(Ke, {
						"aria-label": D(),
						id: r.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: r.onHideTooltip
					}, "Δ"), e.distinguishType === p.C.ALUMNI_ADMIN && nt(r.adminEmeritusTooltipId, D()), e.isMod && (t ? o.a.createElement(M.a, {
						name: "mod",
						isFilled: !0,
						className: We.a.ModeratorIcon,
						"aria-label": B(r.subredditDisplayText),
						id: r.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: r.onHideTooltip
					}) : o.a.createElement(Ge, {
						desc: B(r.subredditDisplayText),
						id: r.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: r.onHideTooltip
					})), e.isMod && nt(r.modTooltipId, B(r.subredditDisplayText)), e.isOp && o.a.createElement(Ye, {
						desc: U(),
						id: r.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: r.onHideTooltip,
						isFilled: t
					}), e.isOp && nt(r.opTooltipId, U()), r.renderContractorBadge && o.a.createElement(Je, {
						desc: V(),
						id: r.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: r.onHideTooltip,
						isFilled: t
					}), r.renderContractorBadge && nt(r.contractorTooltipId, V()))
				}
			}
			const nt = (e, t) => o.a.createElement(L.c, {
				tooltipId: e,
				text: t
			})
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, s) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, s) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				c = s("./src/reddit/helpers/overlay/index.ts");
			const d = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(c.a)(t))
			}));
			class l extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: s,
						...r
					} = this.props, o = r => e(() => r.metaKey || r.ctrlKey || 1 === r.button ? window.open(Object(i.a)(t, {
						context: 3
					})) : s(Object(i.a)(t, {
						context: 3
					})))(r);
					return n.a.createElement("div", {
						className: r.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
						}
					}, r.children)
				}
			}
			t.a = d(Object(a.c)(l))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(b),
				f = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = f.a.wrapped(d.c, "StyledTooltip", x.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.gb)(e),
					userIsSuspended: h.O
				});
			t.a = Object(i.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(u.b)(t)), e(Object(p.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: n,
				openCommunityCreation: i,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d
			}) => o.a.createElement(m.l, {
				className: e,
				disabled: d || c,
				onClick: () => i(a),
				onMouseEnter: s,
				onMouseLeave: n,
				id: g,
				isFullWidth: !0
			}, r.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), c ? o.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : d ? o.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
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
				return u
			})), s.d(t, "b", (function() {
				return h
			}));
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				l = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				m = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				p = s.n(m);
			const u = e => i.a.createElement("button", {
					className: Object(a.a)(p.a.arrow, e.className),
					onClick: e.onClick
				}, i.a.createElement(d.a, {
					className: p.a.arrowIcon,
					seed: e.seed
				})),
				h = e => i.a.createElement("button", {
					className: Object(a.a)(p.a.arrow, e.className),
					onClick: e.onClick
				}, i.a.createElement(l.a, {
					className: p.a.arrowIcon,
					seed: e.seed
				}));
			class b extends i.a.Component {
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
						return n()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = ({
						adjustment: e,
						itemWidth: t,
						scrollIndex: s,
						spacerWidth: r = 0
					}) => {
						return e - s * (t + r) + r
					}, this.getAdjustment = ({
						itemWidth: e,
						maxScrollIndex: t,
						scrollIndex: s,
						spacerWidth: r = 0,
						visibleItemsCount: n
					}) => {
						let o = 0;
						if (s === t && n) {
							const t = n * e + this.getSpacerCount(n) * r;
							o = (this.container ? this.container.offsetWidth : t) - t
						} else s > 0 && (o = 0);
						return o
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
					spacerWidth: r = 0
				}) {
					if (!e) return !0;
					const n = t.length * s,
						o = this.getSpacerCount(t.length) * r;
					return e.offsetWidth >= n + o
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						r = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: r,
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
			var r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./node_modules/uuid/v4.js"),
				g = s.n(f),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./src/lib/isUrl/index.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				E = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				k = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				I = s("./src/reddit/hooks/useClickSourceData.ts"),
				S = s("./src/reddit/layout/row/Inline/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				w = s.n(P);
			var N = e => {
					const t = j.a.PROFILE,
						s = Object(_.a)(e.author, t),
						r = Object(I.a)();
					return o.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className)
					}, o.a.createElement(S.a, {
						className: w.a.layout
					}, o.a.createElement("div", {
						className: w.a.textContainer
					}, o.a.createElement("span", {
						className: w.a.description
					}, v.fbt._("posted by", null, {
						hk: "wl0iP"
					})), o.a.createElement(O.a, {
						className: w.a.authorName,
						to: {
							pathname: s,
							state: r
						}
					}, Object(_.b)(e.author, t)), o.a.createElement("span", {
						className: w.a.timestamp
					}, Object(k.d)(e.created / 1e3)))))
				},
				T = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				L = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				M = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				F = s.n(M);
			var R = e => {
					const t = Object(_.a)(e.name, e.type);
					return o.a.createElement("div", {
						className: Object(c.a)(F.a.container, e.className)
					}, o.a.createElement(L.a, {
						className: F.a.layout
					}, o.a.createElement("div", {
						className: F.a.iconContainer
					}, e.iconUrl ? o.a.createElement("img", {
						className: F.a.icon,
						src: e.iconUrl
					}) : o.a.createElement(T.a, {
						className: F.a.planetIcon,
						"data-redditstyle": !0
					})), o.a.createElement("div", {
						className: F.a.textContainer
					}, o.a.createElement(O.a, {
						"data-click-id": "subreddit",
						className: F.a.name,
						to: t
					}, Object(_.b)(e.displayText || e.name, e.type)), o.a.createElement("span", {
						className: F.a.separator
					}, "•"), o.a.createElement("span", {
						className: F.a.timestamp
					}, Object(k.d)(e.created / 1e3)))))
				},
				A = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/Media/index.tsx"),
				B = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				U = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				H = s("./src/reddit/components/PostTitle/index.tsx"),
				q = s("./src/reddit/connectors/miniCardPost.ts"),
				z = s("./src/reddit/contexts/Post/index.tsx"),
				K = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				G = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = s("./src/reddit/models/Media/index.ts"),
				J = s("./src/reddit/models/Subreddit/index.ts"),
				Q = s("./src/reddit/models/Widgets/index.ts"),
				X = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Z = s.n(X),
				$ = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ee = s.n($),
				te = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				se = s.n(te);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class ne extends o.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: r,
						crosspostSubredditOrProfile: n,
						eventFactory: i,
						flairStyleTemplate: a,
						forceLoadMedia: d,
						hideNSFWPref: l,
						isMiniCard: m = !0,
						onClickPost: p,
						post: u,
						scrollerItemRef: h,
						shouldPause: b,
						showAuthorBlock: x = !1,
						showMetaLine: f = !0,
						showSubscribeBlock: g = !1,
						subredditOrProfile: E
					} = this.props, {
						media: O
					} = r || u, k = !O && !!u.source && Object(y.a)(u.source.url);
					let j = O && o.a.createElement(D.a, {
							autoplayPref: e,
							availableWidth: t,
							className: Z.a.media,
							forceAspectRatio: Y.c,
							imageBoxClassName: Z.a.mediaImageBox,
							imageBoxContentImageClassName: Z.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: r || u,
							scrollerItemRef: h,
							shouldPause: b,
							shouldLoad: d,
							showCentered: !1,
							showFull: !1
						}),
						_ = !1;
					O && j && (O.type !== Y.o.RTJSON && O.type !== Y.o.TEXT ? (j = o.a.createElement("div", {
						className: se.a.mediaWrapper
					}, j), _ = !0) : O && O.content && Object(K.a)(u) && (j = o.a.createElement("div", {
						className: se.a.textWrapper
					}, j)));
					const I = !_ && !k;
					let S;
					return E && (S = Object(J.h)(E) ? Object(Q.h)(E) : Object(Q.i)(E)), o.a.createElement(W.a, {
						className: Object(c.a)(se.a.container, ee.a.largeAndMediumActiveStyles, ee.a.largeAndMediumPostStyles, Z.a.postContainer, Object(G.a)(this.props), s),
						post: u,
						onClick: p,
						eventFactory: i,
						style: {
							...Object(G.b)(this.props.flairStyleTemplate),
							...Object(G.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, o.a.createElement(V.a, {
						className: Z.a.backgroundWrapper,
						flairStyleTemplate: a
					}, o.a.createElement("div", {
						className: Object(c.a)(se.a.innerContainer, Z.a.innerContainer)
					}, g && E && o.a.createElement(R, re({
						created: u.created
					}, S)), x && E && o.a.createElement(N, re({
						created: u.created,
						author: u.author
					}, S)), o.a.createElement(H.c, {
						className: I ? se.a.postTitle : se.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: u,
						size: H.b.Large,
						titleColor: a && a.postTitleColor
					}), f && E && o.a.createElement(B.a, {
						className: se.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: l,
						post: u,
						subredditOrProfile: E
					}), (_ || k) && o.a.createElement("div", {
						className: se.a.flexSpacer
					}), k && o.a.createElement("div", {
						className: se.a.mediaWrapper
					}, o.a.createElement(U.a, {
						className: se.a.thumbnailWrapper,
						thumbnailClassName: se.a.thumbnail,
						thumbnailContainerClassName: se.a.thumbnailContainer,
						post: u,
						templatePlaceholderImage: a && a.postPlaceholderImage
					})), j, o.a.createElement("div", {
						className: se.a.metaWrapper
					}, o.a.createElement("span", {
						className: se.a.meta
					}, v.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [v.fbt._plural(u.score, "number", Object(C.b)(u.score))], {
						hk: "2ncFte"
					})), o.a.createElement("span", {
						className: se.a.meta
					}, v.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [v.fbt._plural(u.numComments, "number", Object(C.b)(u.numComments))], {
						hk: "1QQoSA"
					}))))), o.a.createElement(A.d, null))
				}
			}
			const oe = Object(z.b)(Object(q.a)(Object(E.a)(ne)));
			class ie extends o.a.Component {
				render() {
					return o.a.createElement(oe, this.props)
				}
			}
			var ae = s("./node_modules/reselect/es/index.js"),
				ce = s("./src/reddit/components/SubredditIcon/index.tsx"),
				de = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				le = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				me = s("./src/reddit/models/Vote/index.ts"),
				pe = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				ue = s.n(pe);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const be = Object(p.t)(),
				xe = Object(ae.c)({
					isFakeSubreddit: p.x
				}),
				fe = Object(a.b)(xe),
				ge = e => {
					const t = {
						interactive: !1,
						voteState: me.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(c.a)(ue.a.emptyVotes, e.className)
					}, o.a.createElement(de.d, t), o.a.createElement("div", {
						className: Object(c.a)(ue.a.emptyScore, Object(le.b)({
							isLoading: e.isLoading
						}))
					}), o.a.createElement(de.c, t))
				};
			var ve = be(fe(Object(E.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...r
				}) => o.a.createElement("div", {
					className: Object(c.a)(ue.a.container, ee.a.largeAndMediumPostStyles, e)
				}, o.a.createElement("div", {
					className: Object(c.a)(ue.a.thumbnail, Object(le.b)({
						isLoading: t
					}))
				}), o.a.createElement("div", {
					className: ue.a.content
				}, o.a.createElement("div", {
					className: ue.a.titleContainer
				}, o.a.createElement("div", {
					className: Object(c.a)(ue.a.title, Object(le.b)({
						isLoading: t
					}))
				}), o.a.createElement("div", {
					className: Object(c.a)(ue.a.title, Object(le.b)({
						isLoading: t
					}))
				})), s && o.a.createElement(S.a, {
					className: ue.a.subreddit
				}, o.a.createElement(ce.a, he({
					className: Object(c.a)(Object(le.b)({
						isLoading: !1
					}))
				}, r)), o.a.createElement("div", {
					className: Object(c.a)(ue.a.subredditName, Object(le.b)({
						isLoading: t
					}))
				})), o.a.createElement(S.a, null, o.a.createElement(ge, he({
					isLoading: t
				}, r)), o.a.createElement("div", {
					className: Object(c.a)(ue.a.comments, Object(le.b)({
						isLoading: t
					}))
				}), o.a.createElement("div", {
					className: Object(c.a)(ue.a.share, Object(le.b)({
						isLoading: t
					}))
				}), o.a.createElement("div", {
					className: Object(c.a)(ue.a.ellipsis, Object(le.b)({
						isLoading: t
					}))
				}))))))),
				ye = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ce = s.n(ye);
			var Ee = e => o.a.createElement("div", {
					className: Object(c.a)(Ce.a.container, e.className)
				}, o.a.createElement("div", {
					className: Ce.a.largePosts
				}, o.a.createElement(ve, {
					className: Ce.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), o.a.createElement(ve, {
					className: Ce.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), o.a.createElement(ve, {
					className: Ce.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Oe = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				ke = s.n(Oe);
			const je = 326,
				_e = 12,
				Ie = {
					stiffness: 210,
					damping: 30
				},
				Se = 100,
				Pe = "post_carousel_item",
				we = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...n
				}) => {
					const i = s ? s(n) : o.a.createElement(ie, n);
					return o.a.createElement(r.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				Ne = Object(a.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: r
				}) => ({
					openOverlay: t => e(Object(u.a)({
						pathname: Object(h.b)(t.permalink),
						state: {
							[m.a.ClickSource]: r ? Object(x.getPageTypeFromCurrentPage)(r) : void 0,
							[m.a.ClickId]: g()()
						}
					})),
					trackPostClick: (t, r) => e((e, n) => s ? b.w(n(), s, t, r) : null),
					trackPostSubredditClick: r => e((e, n) => t ? b.y(n(), t, r) : s ? b.y(n(), s, r) : null)
				})),
				Te = Object(p.t)();
			class Le extends d.c {
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
							discoveryUnitSubreddit: r,
							listingKey: n,
							pageLayer: o,
							searchDiscoveryUnit: i,
							searchOptions: a
						} = this.props;
						let c;
						return (c = "subreddit" === t && a ? b.K(a, o, n, i) : i && a ? b.L(a, o, n, i) : b.v(s, r))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: r,
							singleSubredditMode: n
						} = this.props;
						return o.a.createElement(we, {
							"data-click-id": Pe,
							className: ke.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!n,
							showMetaLine: !1,
							showSubscribeBlock: !n,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: r,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => o.a.createElement("div", {
						className: ke.a.posts,
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
						searchOptions: r
					} = this.props, n = s || e;
					n && t && t(n, r)
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
						seed: r,
						shouldSlideIn: n,
						springConfig: a
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return o.a.createElement(Ee, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = je
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: p
					} = this.state, u = this.getMaxScrollIndex(p), h = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: u,
						scrollIndex: m,
						spacerWidth: _e,
						visibleItemsCount: p
					}), b = e ? Se : this.getMarginLeft({
						adjustment: h,
						itemWidth: l,
						scrollIndex: m,
						spacerWidth: _e
					});
					return o.a.createElement("div", {
						className: Object(c.a)(ke.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, o.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Se : 0
						},
						style: {
							marginLeft: Object(i.spring)(b, a || Ie)
						}
					}, this.renderPosts), 0 !== m && o.a.createElement(d.a, {
						className: Object(c.a)(ke.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: r
					}), !this.state.itemsFitInContainer && (null == u || m < u) && o.a.createElement(d.b, {
						className: Object(c.a)(ke.a.arrowRight, n && !e && ke.a.slideIn, s),
						onClick: this.onClickNext,
						seed: r
					}))
				}
			}
			t.a = Te(Ne(Object(l.c)(Le)))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = s.n(i);
			class c extends n.a.Component {
				render() {
					return n.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, n.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), n.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
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
		"./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_9NiPD_Y6ULK2kfnj6HAWU",
				widgetHeader: "_399v9gOxlS3W_H9wZmXoNb"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1COz1Tx5o15cdern21VVSz",
				banner: "_2QcNoBY8XDHeNxLPPWosos",
				count: "_3dhl5ru8XWXWiHceQZgvmX",
				description: "_2NDrYKicDgvwWzXCzmbe3B",
				searchCommunity: "_2avCQIRO_XhtwE35l4pHKk",
				subscribeButton: "_3rBXfFCJtMOpkX5d1qOs3t",
				subscribeButtonWrapper: "qvXmbzEDFiJbX3a20kAq2",
				titleWrapper: "_2As61Nvoof8WaOWg8gK3hL",
				userCounts: "_11nEOgdNBB8PVfb7gfCXMS"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less": function(e, t, s) {
			e.exports = {
				communitiesWrapper: "ASRebb1StRvOIky_q-Mo3",
				community: "_1tyb0MHpubC9eZwyNDYbS",
				more: "_2KPjJc9CYMGLqb1xtu4BRB",
				arrow: "R7D7NBsG_dBVhgcyLjeRr",
				arrowLeft: "_2XUWhMpaHEcva44sK2SHlK",
				arrowRight: "_1VaaTlcbtbOY3vMVVUs95z",
				searchCommunityPlaceholder: "_1TqF5iTUMrGQD9IW-Geul6"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const o = n.a.createContext(() => {}),
				i = n.a.createContext(() => {});

			function a() {
				return Object(r.useContext)(o)
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "MDNEpwVbINN2HKkEgewE",
				title: "_28leyXRU4PE0vSyWQBBfCO",
				categoryColor: "_3IpRhkSUKq2uGRGPp6qbrS",
				categoryIcon: "_3pQECr4zYB0SAUZkRjo6YZ",
				categoryIconImage: "_1SQZ_ROOFGoOb-mG8rau8h",
				categoryName: "_1JAksQIWTP0gR9_SMTJ9zL",
				categoryNameLink: "ZYsipABw5xewyrDRkYWOH",
				titlePlaceholder: "_2XTuSC4OKqz0VJ6Tjr3-KI",
				categoryIconPlaceholder: "_2Ycj9YQX1II68m3spPXScd",
				categoryNamePlaceholder: "_2k0YcuIbGygzb-DrLnF5H6",
				subTitle: "X17uzKWGZ45lx2ERTqFPA",
				viewCategoryLink: "_3kOnUMhkqJziBPMilQ9yPH",
				layout: "_31dK3_ftR_ZBlLq-y0ygJV",
				widgetHeader: "SrCd6nizt-45KR76UdCv3"
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = a.a.div("EventMetaWrapper", u.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(m.a)(s)) return null;
				const r = s && s.eventInfo,
					a = Object(l.a)(s),
					p = r && Object(i.c)(r.eventStart, r.eventEnd);
				return n.a.createElement("div", {
					className: Object(o.a)(u.a.container, e, {
						[u.a.isCompact]: !!t
					})
				}, n.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					post: s
				}), !a && p && n.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: s,
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", u.a),
				x = h.a.span("PostEventPastText", u.a),
				f = h.a.span("PostEventNowText", u.a),
				g = h.a.span("Container", u.a),
				v = h.a.wrapped(l.a, "CalendarIcon", u.a),
				y = h.a.wrapped(m.a, "LiveIcon", u.a),
				C = h.a.div("LoadingState", u.a);
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
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: r,
						eventIsLive: l,
						eventStart: m
					} = s, p = Object(o.e)(m, r);
					let u, h;
					if (this.state.mounted || p === o.a.Live) u = function(e, t, s) {
						const r = Object(o.e)(e, t),
							n = new Date(e * a.Kb);
						let d;
						return r === o.a.Live || s ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (r === o.a.Future ? d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? c(n) : n.toLocaleDateString(void 0, {
							weekday: "long"
						}) : r === o.a.Past && (d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(n)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(n)}`)
					}(m, r, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						u = n.a.createElement(C, {
							className: e
						})
					}
					if (l) h = n.a.createElement(f, null, n.a.createElement(y, null), u);
					else if (p === o.a.Future) h = n.a.createElement(b, null, n.a.createElement(v, null), u);
					else {
						if (p !== o.a.Past) return null;
						h = n.a.createElement(x, null, n.a.createElement(v, null), u)
					}
					return n.a.createElement(g, {
						className: e
					}, h)
				}
			}
			t.a = E
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				f = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				v = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				C = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				k = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ExpandoButton/index.m.less"),
				P = s.n(S);
			const w = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				N = (e, t = !1, s, r) => {
					const n = Object(c.a)(P.a.icon, P.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						className: n
					});
					if (s.pollData) return r ? o.a.createElement(h.a, {
						name: "poll_post",
						isFilled: !0
					}) : o.a.createElement(_.a, {
						className: n
					});
					switch (e) {
						case I.o.GIFVIDEO:
							return o.a.createElement(y.a, {
								className: n
							});
						case I.o.IMAGE:
							return o.a.createElement(O.a, {
								className: n
							});
						case I.o.TEXT:
						case I.o.RTJSON:
							return o.a.createElement(k.a, {
								className: n
							});
						case I.o.VIDEO:
							return o.a.createElement(v.a, {
								className: n
							});
						case I.o.GALLERY:
							return r ? o.a.createElement(h.a, {
								name: "media_gallery",
								isFilled: !0
							}) : o.a.createElement(j.a, {
								className: n
							});
						case I.o.EMBED:
						default:
							return o.a.createElement(C.a, {
								className: n
							})
					}
				};
			t.a = w(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: i,
					post: l,
					toggle: h,
					useMediaIcons: b
				} = e, v = Object(u.a)(), y = s || l, C = n && !!s;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type) && !Object(p.a)(y)) || !!l.pollData ? o.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, P.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: h
				}, i ? o.a.createElement(x.a, {
					className: P.a.icon,
					isFilled: !0
				}) : b ? o.a.createElement(o.a.Fragment, null, N(y.media && y.media.type, C, l, v), o.a.createElement(f.a, {
					className: Object(c.a)(P.a.icon, P.a.showOnHover)
				})) : o.a.createElement(f.a, {
					className: P.a.icon,
					isFilled: v
				})) : y.source && y.source.url ? o.a.createElement(m.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, o.a.createElement(E.a, {
					className: Object(c.a)(P.a.icon, P.a.outboundLinkIcon),
					isFilled: v
				})) : o.a.createElement(a.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow"
				}, o.a.createElement(g.a, {
					className: P.a.icon,
					isFilled: v
				}))
			})
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/IdCard/placeholder.m.less"),
				a = s.n(i);
			t.a = n.a.memo(e => n.a.createElement("div", {
				className: Object(o.a)(a.a.container)
			}, n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.banner)
			}), n.a.createElement("div", {
				className: a.a.title
			}, n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.icon)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.name)
			})), n.a.createElement("div", {
				className: a.a.counts
			}, n.a.createElement("div", {
				className: a.a.side
			}, n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.count)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.text)
			})), n.a.createElement("div", {
				className: a.a.side
			}, n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.count)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.text)
			}))), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.one)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.two)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.three)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.four)
			}), n.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.subscribe)
			})))
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				l = s("./src/reddit/hooks/useClickSourceData.ts"),
				m = s("./src/reddit/components/IdCard/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function h(e) {
				const t = Object(n.useCallback)(t => {
						t.stopPropagation(), e.onTitleClick && e.onTitleClick()
					}, [e.onTitleClick]),
					{
						canEditIcon: s,
						isTargetBlank: m,
						largeSubredditIcon: h,
						linkUrl: b,
						subredditIcon: x,
						titleText: f,
						primaryColor: g,
						subreddit: v,
						onOpenFilePicker: y
					} = e,
					C = x.url ? u._("Update icon", null, {
						hk: "GXdPy"
					}) : u._("Add icon", null, {
						hk: "31odkm"
					}),
					E = Object(l.a)();
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.Title, e.className)
				}, s && v ? o.a.createElement(d.a, {
					className: h ? p.a.largeSubredditIcon : p.a.subredditIcon,
					key: x.url,
					iconUrl: x.url,
					primaryColor: g,
					subreddit: v,
					inTopBar: !1
				}) : o.a.createElement(c.b, {
					altText: x.altText,
					className: h ? p.a.largeSubredditIcon : p.a.subredditIcon,
					key: x.url,
					iconUrl: x.url,
					primaryColor: g
				}), o.a.createElement("div", {
					className: p.a.titleTextContainer
				}, b ? o.a.createElement(i.a, {
					className: p.a.TitleLink,
					key: b,
					to: {
						pathname: Object(r.c)(b).pathname,
						state: E,
						search: Object(r.c)(b).search
					},
					onClick: t,
					target: m ? "_blank" : void 0,
					rel: m ? "noopener noreferrer" : void 0
				}, o.a.createElement("span", {
					className: p.a.TitleText,
					title: f
				}, f)) : o.a.createElement("span", {
					className: p.a.TitleText,
					key: f
				}, f), s && v && y && o.a.createElement("div", {
					className: p.a.editIconText,
					onClick: y
				}, C)))
			}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, s) {
			e.exports = {
				banner: "c_dVyWK3BXRxSN3ULLJ_t",
				title: "_1OQL3FCA9BfgI57ghHHgV3",
				icon: "_33jgwegeMTJ-FJaaHMeOjV",
				name: "_1wQQNkVR4qNpQCzA19X4B6",
				counts: "_39IvqNe6cqNVXcMFxFWFxx",
				side: "_29TSdL_ZMpyzfQ_bfdcBSc",
				count: "JEV9fXVlt_7DgH-zLepBH",
				text: "_3YCOmnWpGeRBW_Psd5WMPR",
				desc: "_2iO5zt81CSiYhWRF9WylyN",
				one: "_2E9u5XvlGwlpnzki78vasG",
				two: "fDElwzn43eJToKzSCkejE",
				three: "_2kNB7LAYYqYdyS85f8pqfi",
				four: "_1XmngqAPKZO_1lDBwcQrR7",
				subscribe: "_3XbVvl-zJDbcDeEdSgxV4_",
				shimmer: "_2hgXdc8jVQaXYAXvnqEyED",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				container: "_1KWSZXqSM_BLhBzkPyJFGR"
			}
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: m,
					subredditOrProfile: p
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, o.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: p.url
				}, o.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: p
				}), o.a.createElement("span", null, p.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": r.fbt._("Crossposted by{author}from{community}", [r.fbt._param("author", Object(l.d)(e)), r.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(h, null))
				})(m.author, s), p && p.isQuarantined && o.a.createElement(a.a, null))
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
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(a);

			function d(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, n.a.createElement(i.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), m = i.a.div("Placeholder", c.a), p = () => o.a.createElement(m, null, o.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(r.a)({
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
				fallback: o.a.createElement(p, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow/index.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: b
				} = e, [x, f] = Object(n.useState)(!0), g = Object(h.b)(s.id, b), v = Object(i.d)(), y = Object(u.a)(), C = Object(h.a)(s, b), E = (e, r) => y(Object(p.a)(t, s.id, e, r));
				Object(n.useEffect)(() => {
					C && E("modal", "show")
				}, [C]);
				if (!C || !x) return null;
				const O = r.fbt._("Help r/{subredditName} mods", [r.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return o.a.createElement(l.a, {
					id: g,
					title: O,
					onClose: () => {
						f(!1), E("close", "click"), v(Object(c.E)()), v(Object(c.P)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(c.E)())
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
				})), o.a.createElement(m.a, {
					onClick: () => (f(!1), E("report", "click"), void v(Object(d.c)(s.id)))
				}, r.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var r, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow/index.ts"),
				m = s("./src/reddit/components/Popup/index.tsx"),
				p = s("./src/reddit/components/Popup/Button.tsx"),
				u = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [f, g] = Object(o.useState)(r.Survey), v = Object(b.b)(s.id, x), y = Object(a.d)(), C = Object(h.a)(), E = Object(b.a)(s, x), O = (e, r) => C(Object(u.b)(t, s.id, e, r));
				Object(o.useEffect)(() => {
					E && O("modal", "show")
				}, [E]);
				const k = e => {
					g(r.Closed), O("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.c)(s.id, void 0, e))
				};
				if (!E) return null;
				let j = null;
				const _ = {
					id: v,
					title: n.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						g(r.Closed), O("close", "click"), y(Object(d.E)())
					},
					onClickOutside: () => {
						y(Object(d.E)())
					}
				};
				switch (f) {
					case r.Survey:
						j = i.a.createElement(m.a, _, i.a.createElement("p", null, n.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [n.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								g(r.OffTopic), O("off_topic", "click")
							}
						}, n.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								g(r.DontLike), O("dont_like", "click")
							}
						}, n.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								g(r.BreaksRules), O("breaks_rules", "click")
							}
						}, n.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case r.OffTopic:
						j = i.a.createElement(m.a, _, i.a.createElement("p", null, n.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case r.DontLike:
						j = i.a.createElement(m.a, _, i.a.createElement("p", null, n.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case r.BreaksRules:
						j = i.a.createElement(m.a, _, i.a.createElement("p", null, n.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, n.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), n.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, n.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => k("site")
						}, n.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => k("community")
						}, n.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case r.Closed:
				}
				return j
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(r || (r = {}))
		},
		"./src/reddit/components/MoreCommunitiesIcon/index.m.less": function(e, t, s) {
			e.exports = {
				moreCommunities: "z54Tq9pM9dZADYsxyAlMi",
				numCommunities: "_1-PSRpyxO4pzCPYOJNRMwe",
				InternalLink: "_1YInFAwL0if5cbF4P9QIJb",
				internalLink: "_1YInFAwL0if5cbF4P9QIJb"
			}
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/Popup/index.m.less"),
				i = s.n(o);

			function a(e) {
				return n.a.createElement("button", {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/uuid/v4.js"),
				i = s.n(o),
				a = s("./src/reddit/hooks/useOnClickOutside.ts"),
				c = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: s,
					onClickOutside: r,
					title: o,
					children: c
				} = e;
				return Object(a.a)(t, r), n.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, n.a.createElement("h3", {
					className: d.a.header
				}, n.a.createElement("span", {
					className: d.a.title
				}, o), n.a.createElement("button", {
					className: d.a.closeButton,
					onClick: s
				}, "✕")), c)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return n.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(r, e),
					onClick: i
				}, u), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(r.useRef)(null),
						s = Object(l.a)(),
						o = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(v);
			const C = Object(u.a)(() => Object(o.c)({
					basePixelMetadata: Object(f.a)((e, {
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
				E = e => {
					const t = Object(g.d)(e.target, e.currentTarget),
						s = Object(g.b)(e.target, e.currentTarget, g.a.buttons);
					return "subreddit" !== t && s
				};
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: r,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: p,
						onPostContentClick: u,
						sendEvent: b,
						style: f,
						ref: g
					} = this.props, v = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => p && p(s, l, t, o))(s), u && E(s) && u(s, l)), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(y.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), C = !!l.media && l.media.type === h.o.VIDEO;
					return l.isSponsored || C ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, v) : l.media && Object(h.E)(l.media) ? n.a.createElement(m, {
						postId: l.id
					}, v) : v
				}
			}
			t.a = C(Object(g.c)(Object(p.c)(O)))
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
				return b
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: r
							},
							sendEvent: n
						} = this.props, o = !!r;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: o
						}) : Object(m.g)({
							postId: s,
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
						post: s
					} = this.props, n = this.state.isHovered, i = s.isFollowed;
					let a = i ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (a = r.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
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
				onFollow: () => e(Object(d.y)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(h))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Y
			})), s.d(t, "a", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				C = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				E = s("./src/reddit/components/Scroller/Simple.tsx"),
				O = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				P = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				w = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				M = s("./src/telemetry/index.ts"),
				F = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(R);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = 500, U = new L.a(B), V = new L.a(B), W = new L.a(B), H = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, q = f.a.div("SeeMore", A.a), z = f.a.wrapped(w.a, "ArrowRight", A.a), K = (e, t, s, r, n, o, i, a) => {
				const c = `entered-${e}-${t}-${s?`last-${r}-${n}`:""}-${o}`;
				let d = U.get(c);
				return void 0 === d && (d = () => {
					s && i.onBottomViewed(r, n), i.trackOnPostEnteredViewport(e, t, a)
				}, U.set(c, d)), d
			}, G = (e, t, s, r, n) => {
				const o = `left-${e}-${t}`;
				let i = V.get(o);
				return void 0 === i && (i = o => {
					s.trackOnPostExitedViewport(e, t, o, r, n)
				}, V.set(o, i)), i
			}, Y = (e, t) => {
				const s = `click-${e}`;
				let r = W.get(s);
				return void 0 === r && (r = (e, s, r, n) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, O.a.Click);
						const {
							source: e
						} = Object(u.t)(s, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(I.a)(s.id, r, t).url), Object(g.d)(t, g.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(S.a)(e)
					})
				}, W.set(s, r)), r
			}, J = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Q extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(B), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, r = e(), n = [];
						r.forEach(e => n.push(e.id));
						const o = n.map(e => t[e]).filter(Boolean),
							i = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(o, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && M.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = M.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = M.c.end(this.timerId);
						setTimeout(() => Object(M.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && M.c.cancel(this.timerId), e.postIds.length && (this.timerId = M.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (x.a.read(() => this.checkAndSendScreenview()), this.timerId && M.c.has(this.timerId)) {
						const e = M.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(M.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const r = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					r && r !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(r)
				}
				componentWillUnmount() {
					this.timerId && M.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return M.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = M.c.end(e);
					setTimeout(() => {
						s(t(r, F.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						...s
					} = this.props, {
						postsById: r,
						...n
					} = e, o = Object.keys(s), i = Object.keys(n);
					if (i.length !== o.length) return !0;
					if (i.some(e => s[e] !== n[e])) return !0;
					if (t === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const i = 0 === o;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[n]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: n,
						hostPostId: o,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: p,
						listingName: u,
						pageLayer: h,
						pageReferrer: x,
						postClickEventFactory: f,
						redditStyle: g,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: C,
						postIds: E
					} = this.props, O = 0 === t, k = `post-${r}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${x}`;
					let _;
					if (void 0 === (_ = this.scrollChildCache.get(k))) {
						const {
							inSubredditOrProfile: I,
							postsById: S
						} = this.props, w = S[e], T = w.crosspostRootId && S[w.crosspostRootId] ? S[w.crosspostRootId] : w;
						w.crosspostRootId && !S[w.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${w.id} is crosspost of ${w.crosspostRootId}, but ` + `${w.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const L = this.props.postComponentForLayout({
								isCrosspost: !!w.crosspostRootId,
								isFirstPost: O,
								layout: r,
								post: T
							}),
							M = `post-list-item-[layout: ${r}]-[postId: ${e}]`,
							F = K(e, r, s, p, u, x, this.props, t),
							R = G(e, r, this.props, t, h),
							A = Y(e, this.props),
							D = T.media && T.media.type === N.o.EMBED ? T.media.provider : null;
						_ = {
							estHeight: Object(P.c)(w, r),
							id: e,
							isFocusable: !(!T.media || !(r === j.g.Large || r === j.g.Classic && Object(N.G)(T.media))) && (N.d.has(T.media.type) && (!D || !N.s.has(D)) && !T.isSpoiler && !T.isNSFW),
							trackOnEnteredViewport: F,
							trackOnExitedViewport: R,
							render: ({
								className: t,
								height: r,
								width: b,
								remeasure: x,
								setScrollerChildRef: v,
								shouldLoadInitially: k
							}) => m.a.createElement(L, {
								className: t,
								currentProfileName: n,
								key: M,
								availableWidth: b,
								eventFactory: f,
								first: O,
								forceLoadMedia: k,
								hostPostId: o,
								inSubredditOrProfile: I,
								isActionBarAnimationEnabled: C,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: p,
								listingName: u,
								pageLayer: h,
								last: s,
								onClickPost: A,
								onSizeChanged: x,
								postId: e,
								postIds: E,
								redditStyle: g,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: y
							})
						}, this.scrollChildCache.set(k, _)
					}
					return _
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: r,
						onTryAgain: n,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const i = o;
					return m.a.createElement("div", {
						className: A.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && m.a.createElement(C.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: n,
						onLoadMore: o
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: A.a.placeholder
					}, m.a.createElement(y.a, {
						className: n,
						isLoading: !!t,
						layout: r,
						countOverride: H[r]
					}), !!e && m.a.createElement(C.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: u
					} = this.props;
					let x = d.map((e, t, s) => {
						const r = t === d.length - 1;
						return this.scrollChildForPost(e, t, r, i)
					});
					n && (x = J(x, n));
					const f = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						g = a ? Object(r.e)(a) : null,
						v = g || o;
					return m.a.createElement(l.Fragment, null, m.a.createElement(E.b, {
						innerRef: this.updateScrollerRef,
						className: v ? A.a.truncatedPostList : Object(h.a)(A.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: f,
						viewportTopPadding: k.f
					}, x), g && m.a.createElement(q, {
						className: A.a.seeMoreButton
					}, m.a.createElement(_.a, {
						className: A.a.seeMorePostsText,
						to: Object(p.a)(g, {
							type: b.Sb.Posts
						})
					}, D._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(z, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				h = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: f,
					subreddit: g,
					isOverlay: v,
					isActionBarAnimationEnabled: y,
					postId: C,
					isForceSelected: E
				} = e, O = `upvote-button-${t.id}${v?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return n.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, r && n.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), n.a.createElement(d.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: O,
					isActionBarAnimationEnabled: y,
					postId: C,
					isForceSelected: E,
					scoreClassName: h.a.score
				}), k && n.a.createElement(a.b, {
					rightOf: O
				}, "survey" === k ? n.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!v
				}) : n.a.createElement(o.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!v
				})))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less": function(e, t, s) {
			e.exports = {
				commentMeta: "_2GB9z5qEEGqUlVd7_AZ0Gd",
				postedInfo: "_1IuU3sDpVjxHmNu8hy7ke-"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EfAVKHNVRtvNT-8VkDC-8",
				layout: "CVce26qZfY7ojFzPuc8YO",
				icon: "_3HND8rCvmfwgjXVVqJERhm",
				header: "_2_cX1qWUgmW8pfAWGvFh8p",
				postTitle: "O2eUhZf8GsGivGF4UEz5D",
				postIcon: "K-RJ57NaqoKc87tgv6tg7",
				innerContainer: "_2AFBK0BD8EbiNGolgAo1Hq",
				bodyWrapper: "_1tvEudu_F3pE1RiVAQrGvD",
				mediaPlaceholder: "_2C0inkNJdF-Ov9MOBPF4zU",
				mediaWrapper: "_1FoZeus-f2nDzrVv5WpY_G",
				thumbnail: "_3gEhWanOXMU-ksmhp_q6lV",
				flexSpacer: "vB0xdI2bqGNNfqozIzmfD",
				arrowIcon: "_1R6w1GOLZm3dSI11WCzCQG",
				seeFullPost: "_1cwpynsCToYyTFd63E30QA",
				commentWrapper: "_1OQ-tv6o7fwLv-Xi-aDeHM",
				numComments: "_2Y_MxrLEpKLdjpgTcHwdp",
				commentIcon: "_2-ZseoXCsZV7Xau4_E7Om_",
				textMediaWrapper: "_3pcRVwv7cNJ8Pv-9ZM98wD",
				textMedia: "DX83wFTjNyEjCXYelqumz",
				seeMore: "_3Tyc8Rp7EGv_mZ37PKjpfQ",
				outboundLink: "_1hIKBJ8OWtaPMnfYwyHGFc",
				adLinkWrapper: "_3A4sFX94xrspYFRVMV-s6U",
				layoutBody: "_2tbAAoNeEb_-ogWVF8pxCo",
				layoutHeader: "_3mCoL3r3LzuKXr4dtE3b_v",
				callToAction: "_1i9ocNVQgxgTH0Os3zmf_6"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less": function(e, t, s) {
			e.exports = {
				container: "_1qi8CaHgb-Xm_3oGIAF8wc",
				commentContentWrapper: "_5y5OcwmowpRI5lhW8hAf8",
				commentBody: "_1vkza3ACM30oYHiA5vOGJh"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "h5UKl2V1Is5GCXY54VWZi",
				layout: "_3jaIP3UzpcymE9ShGaYPRY",
				icon: "_1pffhH3DYAI7rRTUAlHpsg",
				header: "_3mXJ9ydjIpRKpQ-KxPLqwA",
				postTitle: "_2VhF1mF_293NpbRPStvDPF",
				postIcon: "T0ysSxk3cKkw05qgwX4rE",
				innerContainer: "_3MpvbgSzWyQ81sLfHzYAgT",
				bodyWrapper: "_2OVKLZk2ubyZ0t5amZqqZN",
				mediaPlaceholder: "_3d88aDP4u4C5DLMu8SfYZ8",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				thumbnail: "_22Yz5UFhuhlNCyt3gMwKtc",
				flexSpacer: "_16ij1n1alsDJYUSapHkvTu",
				arrowIcon: "_2j1ValrGx6OpuxteMFAH40",
				forwardIcon: "ub4fEA5JEd91Dm3G37lsf",
				seeFullPost: "_20vqKvo2gYgPLLM2nvt9xx",
				commentWrapper: "_28vLaY2cJfWy30C_YcyA76",
				numComments: "_3Nr7HrlwLllPDfaR7Mo2-l",
				commentIcon: "_6cbxXo8Vg0cqLtcSW7sfq",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/index.m.less": function(e, t, s) {
			e.exports = {
				bold: "_3j9XjJayuKq7dJ8huVnCuS",
				container: "_2SYp_6fbfcr6uPKUz5DybH",
				metaDataContainer: "_2eSrmICxfeYScrkl_a0PPz",
				metaData: "_1z_GZgOeapyyCdKo34Eqir",
				icon: "GDc4zpCBZubZHeypInBQJ",
				follow: "tlgyC9DArM6YOdfYfAA4R",
				share: "_1zFWIhf2ANVvGFxQN9FG5X",
				header: "_3S4kZJ2srKP3X_EH9Rx1wn",
				postIcon: "HU9OnSjgAUl0uezzCEN8G",
				metadataContainer: "_3sYSU_0JVt4q8DdUaqBPDp",
				metaSeparator: "_3GCG9ku78CvsDODsUdz3ze",
				postBadges: "_2_3bLbSOJmeKpz84PVvmCy"
			}
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less": function(e, t, s) {
			e.exports = {
				communityPlaceholder: "_1fqvxIYppV310uLQjODSFf",
				separatedCommunity: "_12I4LEbhoIMSoIIXC_OHwT"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				userInfo: "_3eEGmb1TERzQ2jBCUr-XNg",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				titleContainer: "NnbPVsleaxwPg_xH-gVn4",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ObyNmd6TiLgPGR5-1jj_R",
				userInfo: "_3_4sSzkdFVidwJjdKcy3N1",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				titleContainer: "_1PHQ-ZJkmjaCiPbk9dZtbl",
				title: "_11V3zVIqp59I7JvzWnky0w",
				subtitle: "_1udmVL2hhq7PSlgxTaeJw2",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				descriptionContainer: "_3zCQAIsCB1OIYQILnEJD61",
				button: "DEgV8HnF3Dr9R22X_SHUw"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(c);
			t.a = e => n.a.createElement("div", {
				className: Object(o.a)(d.a.container, e.className)
			}, n.a.createElement("div", {
				className: d.a.userInfo
			}, n.a.createElement(i.b, {
				className: Object(o.a)(d.a.subreddtiIcon, Object(a.a)(e))
			}), n.a.createElement("div", {
				className: d.a.titleContainer
			}, n.a.createElement("div", {
				className: Object(o.a)(d.a.title, Object(a.b)(e))
			}), n.a.createElement("div", {
				className: Object(o.a)(d.a.subtitle, Object(a.b)(e))
			}))), n.a.createElement("div", {
				className: d.a.descriptionContainer
			}, n.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(a.b)(e))
			}), n.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(a.b)(e))
			})), n.a.createElement("div", {
				className: Object(o.a)(d.a.button, Object(a.b)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "FkQALOgNG0XnM_qGE3GOB",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				semiBold: "_2Kn5gtljobl1Fv05YLAeKK",
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/search.ts"),
				d = s("./src/lib/search/index.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = s("./src/reddit/components/Widgets/Base/index.tsx"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/selectors/discoveryUnit.ts"),
				f = s("./src/reddit/selectors/listings.ts");
			const g = [];
			var v = s("./src/reddit/components/DiscoveryUnit/PostsDiscoveryUnit/index.m.less"),
				y = s.n(v);
			var C = Object(o.b)(() => {
					const e = Object(x.a)();
					return Object(i.c)({
						isDataPending: (e, {
							categoryId: t,
							discoveryUnit: s,
							listingKey: r
						}) => {
							if (r) return Object(f.h)(e, {
								listingKey: r
							});
							if (!t || !s) return !1;
							const n = Object(m.a)(s.unitName, a.R.HOT, {
								category: t
							});
							return Object(f.h)(e, {
								listingKey: n
							})
						},
						postIds: (t, {
							categoryId: s,
							discoveryUnit: r,
							searchDiscoveryUnit: n,
							heroPostId: o
						}) => s && r ? e(t, {
							unitName: r.unitName,
							id: s
						}) : ((e, t) => {
							if (!e) return g;
							const s = e.postOrder;
							if (t && s) {
								const e = s.indexOf(t);
								if (e > -1) return s.splice(e, 1), s
							}
							return s || g
						})(n, o)
					})
				}, e => ({
					trackPostView: (t, s, r, n, o) => "unitName" in t ? e((e, n) => b.B(n(), t, s, r)) : r ? e((e, i) => b.M(i(), t, s, r, o, n)) : void 0
				}))(e => {
					const t = n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, {
						className: y.a.widgetHeader
					}, e.categoryId && e.category ? l.fbt._("Top {category} Posts", [l.fbt._param("category", e.category)], {
						hk: "zMaSt"
					}) : l.fbt._("Top posts across Reddit", null, {
						hk: "SCQfF"
					})));
					return e.isDataPending || e.postIds && 0 !== e.postIds.length ? n.a.createElement("div", {
						className: e.className
					}, n.a.createElement(p.a, {
						className: y.a.layout,
						header: t,
						hidePadding: !0
					}, n.a.createElement(u.a, {
						discoveryUnit: e.discoveryUnit,
						listingKey: e.listingKey,
						searchDiscoveryUnit: e.searchDiscoveryUnit,
						isLoading: e.isDataPending,
						items: e.postIds,
						searchOptions: e.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						onPostView: e.trackPostView
					}))) : null
				}),
				E = s("./node_modules/lodash/memoize.js"),
				O = s.n(E),
				k = s("./node_modules/react-router-redux/es/index.js"),
				j = s("./src/reddit/constants/history.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/selectors/category.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./node_modules/uuid/v4.js"),
				N = s.n(w),
				T = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/communityClickContext.ts"),
				L = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				M = s("./node_modules/react-motion/lib/react-motion.js"),
				F = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				A = s("./src/lib/classNames/index.ts"),
				D = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				B = s("./src/lib/prettyPrintNumber/index.ts"),
				U = s("./src/reddit/components/IdCard/Title.tsx"),
				V = s("./src/reddit/components/SubscribeButton/index.tsx"),
				W = s("./src/reddit/controls/Button/index.tsx"),
				H = s("./src/reddit/models/Theme/index.ts"),
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = s("./src/reddit/components/IdCard/index.m.less"),
				K = s.n(z),
				G = s("./src/reddit/components/DiscoveryUnit/SearchCommunity/index.m.less"),
				Y = s.n(G);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class Q extends n.a.Component {
				constructor(e) {
					super(e), this.onSubscribeClick = this.onSubscribeClick.bind(this), this.onTitleClick = this.onTitleClick.bind(this)
				}
				onSubscribeClick(e, t) {
					e.stopPropagation(), this.props.id && t({
						id: this.props.id,
						type: this.props.type
					})
				}
				onTitleClick(e) {
					return () => {
						this.props.id && e({
							id: this.props.id,
							type: this.props.type
						})
					}
				}
				render() {
					const {
						onCommunityClick: e
					} = this.props, t = Object(H.g)(this.props.bannerBackgroundColor || this.props.primaryColor || Object(q.a)(this.props).active, this.props.bannerBackgroundImage || Object(q.a)(this.props).banner.backgroundImage, "cover");
					return n.a.createElement("div", {
						className: Object(A.a)(Y.a.container, this.props.className),
						style: this.props.style
					}, n.a.createElement("div", {
						className: Y.a.searchCommunity,
						onClick: this.props.onClick
					}, n.a.createElement("div", {
						className: Y.a.banner,
						style: {
							background: t
						}
					}), n.a.createElement(U.a, {
						className: Y.a.titleWrapper,
						largeSubredditIcon: !0,
						linkUrl: `/r/${this.props.name}`,
						subredditIcon: {
							url: this.props.iconUrl
						},
						titleText: `r/${this.props.name}`,
						primaryColor: this.props.primaryColor,
						onTitleClick: this.onTitleClick(e)
					}), this.props.subscribers && n.a.createElement("span", {
						className: Y.a.count
					}, l.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [l.fbt._plural(this.props.subscribers, "number", Object(B.b)(this.props.subscribers))], {
						hk: "2ji2gJ"
					})), n.a.createElement("div", {
						className: Object(A.a)(K.a.Description, Y.a.description)
					}, this.props.description), n.a.createElement("div", {
						className: Y.a.subscribeButtonWrapper
					}, n.a.createElement(V.a, {
						className: Y.a.subscribeButton,
						identifier: {
							name: this.props.name,
							type: this.props.type
						},
						getEventFactory: this.props.getSubscribeEventFactory,
						onClick: t => this.onSubscribeClick(t, e),
						size: W.c.S
					}))))
				}
			}
			const X = Object(D.a)(Q);
			class Z extends n.a.Component {
				constructor() {
					super(...arguments), this.renderCommunityItem = e => n.a.createElement(X, J({}, this.props, {
						onCommunityClick: e
					}))
				}
				render() {
					return n.a.createElement(T.a.Consumer, null, this.renderCommunityItem)
				}
			}
			var $ = Z,
				ee = s("./src/reddit/components/IdCard/Placeholder.tsx"),
				te = s("./src/reddit/constants/posts.ts"),
				se = s("./src/reddit/selectors/tooltip.ts"),
				re = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/SearchCommunities/index.m.less"),
				ne = s.n(re);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = 338,
				ae = {
					stiffness: 210,
					damping: 30
				},
				ce = Object(o.b)(() => Object(i.c)({
					toolTipId: se.a
				}), (e, t) => ({
					toggleTooltip: t => e(Object(F.h)({
						tooltipId: t
					}))
				})),
				de = ({
					root: e,
					handleVisibilityChange: t,
					...s
				}) => n.a.createElement(L.a, {
					root: e,
					threshold: .99,
					rootMargin: "0px 0px 0px 0px",
					onChange: t
				}, n.a.createElement($, s));
			class le extends R.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.id = "CollectionInfoCommunities", this.itemWidth = ie, this.spacerWidth = 0
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					super.componentDidUpdate(e, t), this.trackCommunitiesViewed()
				}
				onClickNext() {
					super.onClickNext(), this.trackCommunitiesViewed()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackCommunitiesViewed()
				}
				trackCommunitiesViewed() {
					if (this.props.isLoading || 0 === this.props.items.length) return;
					const e = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length),
						t = this.state.scrollIndex;
					void 0 !== t && this.props.items.slice(t, e).map(e => this.props.onCommunityView(e))
				}
				render() {
					const {
						items: e,
						isLoading: t,
						searchResults: s,
						toggleTooltip: r
					} = this.props, o = !t && e.length > 0, {
						scrollIndex: i,
						visibleItemsCount: a
					} = this.state, c = this.getMaxScrollIndex(a), d = this.getAdjustment({
						itemWidth: ie,
						maxScrollIndex: c,
						scrollIndex: i,
						visibleItemsCount: a
					}), l = this.getMarginLeft({
						adjustment: d,
						itemWidth: ie,
						scrollIndex: i
					});
					return n.a.createElement(n.a.Fragment, null, s && o && n.a.createElement("div", {
						className: ne.a.communitiesWrapper,
						id: this.id,
						ref: this.setContainerRef
					}, n.a.createElement(M.Motion, {
						defaultStyle: {
							marginLeft: 0
						},
						style: {
							marginLeft: Object(M.spring)(l, ae)
						}
					}, t => n.a.createElement(n.a.Fragment, null, e.map((e, s) => n.a.createElement(de, oe({}, e, {
						className: ne.a.community,
						handleVisibilityChange: this.makeVisibilityChangeHandler(s),
						key: e.name,
						root: this.id,
						style: 0 === s ? t : void 0,
						onClick: () => this.props.onCommunityClick(e),
						toggleTooltip: r,
						type: e.type || te.a.SUBREDDIT
					}))))), 0 !== i && n.a.createElement(R.a, {
						className: ne.a.arrowLeft,
						onClick: this.onClickPrev
					}), !this.state.itemsFitInContainer && (null == c || i < c) && n.a.createElement(R.b, {
						className: ne.a.arrowRight,
						onClick: this.onClickNext
					})), s && !o && n.a.createElement("div", {
						className: ne.a.searchCommunityPlaceholder
					}, n.a.createElement(ee.a, null), n.a.createElement(ee.a, null), n.a.createElement(ee.a, null), n.a.createElement(ee.a, null)))
				}
			}
			var me = ce(le),
				pe = s("./src/reddit/components/DiscoveryUnit/SubredditsDiscoveryUnit/index.m.less"),
				ue = s.n(pe);
			const he = Object(o.b)(() => Object(i.c)({
				subredditCategory: (e, {
					categoryId: t
				}) => Object(I.l)(e, {
					id: t
				}),
				communities: (e, {
					categoryId: t,
					searchDiscoveryUnit: s
				}) => t ? Object(I.a)(e, {
					id: t
				}) : s && s.subredditOrder ? Object(S.e)(e, {
					subredditIds: s.subredditOrder
				}) : [],
				isDataPending: (e, {
					categoryId: t,
					listingKey: s
				}) => t ? !!Object(I.n)(e, {
					id: t
				}) : !!s && Object(f.h)(e, {
					listingKey: s
				})
			}), (e, {
				discoveryUnit: t,
				listingKey: s,
				pageLayer: r,
				searchDiscoveryUnit: n,
				searchOptions: o
			}) => ({
				trackSubredditView: O()((t, s) => e((e, r) => b.D(r(), t, s, o)), ({
					id: e
				}, {
					name: t
				}) => `${e}-${t}`),
				navigateToSubreddit: i => {
					e((e, s) => {
						t ? b.t(s(), t, i) : n && b.N(s(), n, i), i.displayText && e(Object(k.b)({
							pathname: `/${i.displayText}`,
							state: {
								[j.a.ClickSource]: r ? Object(P.getPageTypeFromCurrentPage)(r) : void 0,
								[j.a.ClickId]: N()()
							}
						}))
					}), n && o && i.id && e((e, t) => b.J(t(), o, r, {
						id: i.id,
						type: i.type
					}, s, n))
				},
				onCommunityClick: t => {
					n && o && e((e, i) => b.J(i(), o, r, t, s, n))
				}
			}));
			class be extends n.a.Component {
				trackCommunityView(e) {
					this.props.discoveryUnit ? this.props.trackSubredditView(this.props.discoveryUnit, e) : this.props.searchDiscoveryUnit && this.props.trackSubredditView(this.props.searchDiscoveryUnit, e)
				}
				onCommunityClick(e) {
					this.props.navigateToSubreddit(e)
				}
				render() {
					const {
						categoryName: e,
						onCommunityClick: t
					} = this.props, s = n.a.createElement(h.a, {
						className: ue.a.widgetHeader
					}, e ? l.fbt._("Top {categoryName} Communities", [l.fbt._param("categoryName", e)], {
						hk: "301UWB"
					}) : l.fbt._("Communities talking about this", null, {
						hk: "Azews"
					}));
					return this.props.isDataPending || this.props.communities && 0 !== this.props.communities.length ? n.a.createElement("div", {
						className: ue.a.container
					}, n.a.createElement(p.a, {
						header: s,
						hidePadding: !0,
						className: ue.a.layout
					}, n.a.createElement(T.a.Provider, {
						value: t
					}, n.a.createElement(me, {
						category: this.props.subredditCategory,
						items: this.props.communities,
						isLoading: this.props.isDataPending,
						onCommunityClick: e => this.onCommunityClick(e),
						onCommunityView: e => this.trackCommunityView(e),
						searchResults: !0
					})))) : null
				}
			}
			var xe = Object(_.t)()(he(be)),
				fe = s("./node_modules/lodash/constant.js"),
				ge = s.n(fe),
				ve = s("./node_modules/lodash/take.js"),
				ye = s.n(ve),
				Ce = s("./node_modules/lodash/times.js"),
				Ee = s.n(Ce),
				Oe = s("./src/lib/addQueryParams/index.ts"),
				ke = s("./src/lib/LRUCache/index.ts"),
				je = s("./src/reddit/components/Scroller/Simple.tsx"),
				_e = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Ie = s("./src/reddit/helpers/trackers/searchResults.ts");
			const Se = new ke.a(250),
				Pe = (e, t, s, r) => {
					const n = `last-${t}`,
						o = `entered-${e.id}-${n}`;
					let i = Se.get(o);
					return void 0 === i && (i = "subreddit" === e.type ? () => Ne(s, e.id, r) : () => we(s, e.id, r), Se.set(o, i)), i
				},
				we = (e, t, s) => e(e => ({
					...Object(Ie.c)(e, s),
					source: "search",
					action: "view",
					noun: "search_results_profile",
					correlationId: Object(_e.c)(_e.a.SearchResults),
					actionInfo: P.actionInfo(e),
					search: P.search(e, s),
					profile: P.profile(e)
				})),
				Ne = (e, t, s) => e(e => ({
					...Object(Ie.c)(e, s),
					source: "search",
					action: "view",
					noun: "search_results_subreddit",
					correlationId: Object(_e.c)(_e.a.SearchResults),
					actionInfo: P.actionInfo(e),
					search: P.search(e, s),
					subreddit: P.subreddit(e)
				}));
			var Te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Le = s("./src/reddit/components/Flair/index.tsx"),
				Me = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Fe = s("./src/reddit/constants/tracking.ts"),
				Re = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ae = s("./src/reddit/hooks/useClickSourceData.ts"),
				De = s("./src/reddit/hooks/useTracking.ts"),
				Be = s("./src/reddit/models/Flair/index.ts");
			const Ue = {},
				Ve = ({
					pageLayer: e
				}) => e && e.locationState || Ue,
				We = Object(i.a)((e, t) => Ve(t), e => e.fromPage && e.fromPage.subredditName),
				He = Object(i.a)((e, t) => Ve(t), e => e.fromPage && e.fromPage.routeName),
				qe = ({
					pageLayer: e
				}) => e && e.locationState && e.locationState.searchSwitcherType,
				ze = Object(i.a)(He, (e, {
					pageLayer: t
				}) => Object(_.z)(t), (e, t) => t && (e === a.Gb.COMMENTS || e === a.Gb.SUBREDDIT));
			var Ke = s("./src/reddit/selectors/user.ts"),
				Ge = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				Ye = s.n(Ge);
			const Je = Object(_.t)(),
				Qe = Object(i.c)({
					hideNSFWPref: Ke.B,
					subredditOrProfile: S.L,
					subredditOrProfileAboutInfo: S.H,
					userIsSubscriber: S.gb
				}),
				Xe = Object(o.b)(Qe);
			var Ze = Je(Xe(e => {
					const {
						identifier: t,
						listingKey: s,
						pageLayer: o,
						searchOptions: i,
						subredditOrProfile: a
					} = e, c = Object(De.a)(), d = Object(Ae.a)(), m = Object(r.useCallback)(() => {
						c(Object(Ie.m)(t.type, i, qe({
							pageLayer: o
						}))), c(Object(Ie.j)(i, o, t, s))
					}, [c, i, o, s, t]), p = Object(r.useCallback)(e => {
						e.preventDefault(), e.stopPropagation(), c(Object(Ie.j)(i, o, t, s))
					}, [c, i, o, t, s]);
					if (!a) return null;
					const u = e.subredditOrProfile.displayText,
						h = e.subredditOrProfileAboutInfo.publicDescription;
					let b, x;
					const f = t => {
						if (!t) return ((e, t) => s => ({
							source: "search",
							action: Fe.c.CLICK,
							noun: `result_subscribe_${e}`,
							correlationId: Object(_e.c)(_e.a.SearchResults),
							actionInfo: P.actionInfo(s),
							search: P.search(s, t)
						}))(e.identifier.type, e.searchOptions)
					};
					if ("subreddit" === e.identifier.type) {
						const t = e.subredditOrProfileAboutInfo;
						b = "number" == typeof t.subscribers ? l.fbt._({
							"*": "{number of subscribers} Members",
							_1: "1 Member"
						}, [l.fbt._plural(t.subscribers, "number of subscribers", Object(B.b)(t.subscribers))], {
							hk: "vb11y"
						}) : null, x = "number" != typeof t.subscribers ? null : n.a.createElement(V.a, {
							identifier: {
								name: e.subredditOrProfile.name,
								type: "subreddit"
							},
							onClick: p,
							getEventFactory: f,
							small: !0
						})
					} else {
						const t = e.subredditOrProfileAboutInfo,
							s = Object(B.b)(t.commentKarma + t.postKarma);
						b = l.fbt._({
							"*": "{karma count} Karma",
							_1: "1 Karma"
						}, [l.fbt._plural(t.commentKarma + t.postKarma, "karma count", s)], {
							hk: "4r0tyT"
						}), x = n.a.createElement(V.a, {
							identifier: {
								name: e.subredditOrProfile.name,
								type: "profile"
							},
							onClick: p,
							getEventFactory: f,
							small: !0
						})
					}
					return n.a.createElement(Re.a, {
						className: Object(A.a)(Ye.a.container, e.className),
						onClick: m,
						to: {
							pathname: e.subredditOrProfile.url,
							state: d
						}
					}, n.a.createElement("div", {
						className: Ye.a.userInfo
					}, n.a.createElement(Me.b, {
						className: Ye.a.subredditIcon,
						shouldHideNsfwIcon: e.hideNSFWPref,
						subredditOrProfile: e.subredditOrProfile
					}), n.a.createElement("div", {
						className: Ye.a.titleContainer
					}, n.a.createElement("div", {
						className: Ye.a.title
					}, u), b ? n.a.createElement("div", {
						className: Ye.a.subtitle
					}, b) : null, e.subredditOrProfile.isNSFW && n.a.createElement(Le.b, {
						flair: {
							type: Be.f.Nsfw,
							text: "nsfw"
						}
					}))), n.a.createElement("div", {
						className: Ye.a.description
					}, h), n.a.createElement("div", {
						className: Ye.a.buttonContainer
					}, x))
				})),
				$e = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				et = s("./src/reddit/helpers/trackers/screenview.ts"),
				tt = s("./src/reddit/selectors/searchResults.ts"),
				st = s("./src/reddit/selectors/tracking.ts"),
				rt = s("./src/telemetry/index.ts"),
				nt = s("./src/telemetry/models/Timer.ts"),
				ot = s("./src/reddit/components/SearchResultsContent/CommunitiesList/index.m.less"),
				it = s.n(ot);
			const at = 32,
				ct = 250,
				dt = Object(i.c)({
					apiError: tt.e,
					apiPending: tt.f,
					loadMore: tt.g,
					viewportDataLoaded: st.a
				}),
				lt = [a.Sb.Subreddits, a.Sb.Users],
				mt = Object(o.b)(dt, e => ({
					onLoadMore: () => e(Object(c.k)(lt))
				}));
			class pt extends n.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new ke.a(ct), this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						pageLayer: t,
						searchOptions: s,
						sendEvent: r
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = rt.c.end(e);
					r(Object(et.u)(e, s, nt.TimerType.InApp, n, t))
				}
				componentDidMount() {
					this.checkAndSendScreenview(), this.timerId && Object(rt.b)(a.l.Redesign, {
						type: "mount",
						component: "communitySearchResults",
						duration: rt.c.end(this.timerId)
					})
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && rt.c.has(this.timerId)) {
						const e = rt.c.end(this.timerId);
						if (e < 10) return;
						Object(rt.b)(a.l.Redesign, {
							duration: e,
							type: "mount",
							component: "communitySearchResults"
						})
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && rt.c.cancel(this.timerId), e.identifiers.length && (this.timerId = rt.c.start()), (e.listingKey !== this.props.listingKey || !this.isListLongEnough() && e.identifiers.length !== this.props.identifiers.length) && (this.didRenderLastVisibleChild = !1)
				}
				componentWillUnmount() {
					this.timerId && rt.c.cancel(this.timerId), this.scrollerRef = void 0, this.didRenderLastVisibleChild = !1
				}
				scrollChildForItem(e, t) {
					const {
						listingKey: s,
						searchOptions: r,
						sendEvent: o
					} = this.props, i = {
						...r,
						id: e.id,
						eventType: e.type
					}, a = `community-search-${t}-${s}`, c = Pe(e, s, o, i);
					let d;
					if (void 0 === (d = this.scrollChildCache.get(a))) {
						const t = `community-search-item-[id:${e.id}]`;
						d = {
							estHeight: at,
							trackOnEnteredViewport: c,
							id: e.id,
							render: () => n.a.createElement(Ze, {
								className: it.a.separatedCommunity,
								identifier: e,
								key: t,
								listingKey: s,
								searchOptions: this.props.searchOptions
							})
						}
					}
					return this.scrollChildCache.set(a, d), d
				}
				hasAttemptedLoad() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 === t
				}
				hasContent() {
					return this.props.identifiers.length > 0
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && e.pop();
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				render() {
					return this.hasContent() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.hasAttemptedLoad() ? (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty()) : (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder())
				}
				renderEmpty() {
					return this.renderList()
				}
				renderPlaceholder() {
					const e = !this.props.apiError;
					return n.a.createElement("div", null, Ee()(10, t => n.a.createElement($e.a, {
						className: it.a.communityPlaceholder,
						key: t,
						isLoading: e
					})))
				}
				renderList() {
					const {
						identifiers: e,
						listingKey: t,
						loadMore: s,
						onLoadMore: r
					} = this.props, o = e.map((e, t) => this.scrollChildForItem(e, t));
					return n.a.createElement(je.b, {
						key: t,
						innerRef: this.updateScrollerRef,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: r
					}, o)
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props, r = this.isListLongEnough();
					return rt.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (r || s)))
				}
			}
			var ut = Object(_.t)()(mt(Object(Te.c)(pt))),
				ht = s("./src/reddit/helpers/history/index.ts"),
				bt = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				xt = s.n(bt);
			const {
				fbt: ft
			} = s("./node_modules/fbt/lib/FbtPublic.js"), gt = Object(_.t)({
				pageLayer: e => e,
				queryParams: _.T
			}), vt = Object(i.c)({
				apiError: tt.e,
				apiPending: tt.f,
				identifiers: tt.b,
				loadMore: tt.g
			}), yt = 36, Ct = 5, Et = Object(o.b)(vt), Ot = (e, t) => () => e(e => ({
				...Object(Ie.c)(e),
				source: "search",
				action: "click",
				noun: "view_more_communities",
				correlationId: Object(_e.c)(_e.a.SearchResults),
				actionInfo: P.actionInfo(e),
				search: P.search(e, t)
			})), kt = e => {
				const {
					loadMore: t,
					identifiers: s
				} = e;
				return Boolean(t && t.token) && s.length > 0
			};
			class jt extends n.a.Component {
				constructor() {
					super(...arguments), this.scrollChildCache = new ke.a(Ct)
				}
				scrollChildForItem(e, t) {
					const {
						listingKey: s,
						searchOptions: r,
						sendEvent: o
					} = this.props, i = {
						...r,
						id: e.id,
						eventType: e.type
					}, a = Pe(e, s, o, r), c = `community-search-${t}-${s}`;
					let d;
					return void 0 === (d = this.scrollChildCache.get(c)) && (d = {
						estHeight: yt,
						trackOnEnteredViewport: a,
						id: e.id,
						render: () => n.a.createElement(Ze, {
							className: xt.a.previewCommunityStyles,
							identifier: e,
							key: e.id,
							listingKey: s,
							searchOptions: i
						})
					}), this.scrollChildCache.set(c, d), d
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						identifiers: s,
						listingKey: r,
						loadMore: o,
						preview: i,
						queryParams: a,
						searchOptions: c,
						sendEvent: d
					} = this.props;
					if (i) {
						let r;
						if (t || e) r = Ee()(3, t => n.a.createElement($e.a, {
							className: xt.a.previewCommunityStyles,
							key: t,
							isLoading: !e
						}));
						else {
							let e = s.map((e, t) => this.scrollChildForItem(e, t));
							e = ye()(e, 3), r = n.a.createElement(je.b, null, e)
						}
						return n.a.createElement("div", {
							className: xt.a.container
						}, n.a.createElement("span", {
							className: xt.a.title
						}, ft._("Communities and users", null, {
							hk: "3edzgd"
						})), n.a.createElement("div", {
							className: xt.a.separator
						}), r, n.a.createElement(Re.a, {
							className: xt.a.viewMore,
							onClick: Ot(d, c),
							to: {
								pathname: "/search",
								state: {
									[j.a.SearchOriginPage]: Object(ht.b)(j.a.SearchOriginPage)
								},
								search: Object(Oe.a)("", {
									...a,
									type: "sr,user"
								})
							}
						}, ft._("View more", null, {
							hk: "JKJPb"
						})))
					}
					return n.a.createElement("div", {
						className: xt.a.container
					}, !c.is_multi && n.a.createElement(ut, {
						identifiers: s,
						listingKey: r,
						searchOptions: c
					}), kt({
						identifiers: s,
						loadMore: o
					}) && n.a.Children.toArray(Ee()(3, ge()(n.a.createElement($e.a, {
						className: xt.a.loadMoreItem,
						isLoading: !0
					})))))
				}
			}
			var _t = gt(Et(Object(Te.c)(jt))),
				It = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				St = s("./src/reddit/icons/svgs/SnooCrying/index.tsx"),
				Pt = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				wt = s.n(Pt);
			const {
				fbt: Nt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Tt;
			! function(e) {
				e.Category = "category", e.Communities = "communities", e.Posts = "posts"
			}(Tt || (Tt = {}));
			var Lt = e => {
					if (Object(It.a)(e.query)) return null;
					let t = Nt._("Sorry, there were no results for {=“ [search query] ”}", [Nt._param("=“ [search query] ”", n.a.createElement("span", {
						className: wt.a.semiBold
					}, Nt._("“ {search query} ”", [Nt._param("search query", e.query)], {
						hk: "1VMw0P"
					})))], {
						hk: "4eAu8m"
					});
					return e.type === Tt.Category ? t = Nt._("Sorry, there were no results for the category {=“ [search query] ”}", [Nt._param("=“ [search query] ”", n.a.createElement("span", {
						className: wt.a.semiBold
					}, Nt._("“ {search query} ”", [Nt._param("search query", e.query)], {
						hk: "2vXsw0"
					})))], {
						hk: "42nr3u"
					}) : e.type === Tt.Communities ? t = Nt._("Sorry, there were no community results for {=“ [search query] ”}", [Nt._param("=“ [search query] ”", n.a.createElement("span", {
						className: wt.a.semiBold
					}, Nt._("“ {search query} ”", [Nt._param("search query", e.query)], {
						hk: "41Nh2l"
					})))], {
						hk: "ztoCJ"
					}) : e.type === Tt.Posts && (t = Nt._("Sorry, there were no post results for {=“ [search query] ”}", [Nt._param("=“ [search query] ”", n.a.createElement("span", {
						className: wt.a.semiBold
					}, Nt._("“ {search query} ”", [Nt._param("search query", e.query)], {
						hk: "2n8mO1"
					})))], {
						hk: "3fsKtO"
					})), n.a.createElement("div", {
						className: wt.a.noResults
					}, n.a.createElement(St.a, {
						className: wt.a.icon
					}), n.a.createElement("div", {
						className: wt.a.text
					}, t))
				},
				Mt = s("./src/reddit/components/PostList/index.tsx"),
				Ft = s("./src/reddit/components/ClassicPost/index.tsx"),
				Rt = s("./src/reddit/constants/postLayout.ts"),
				At = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Dt = s("./src/reddit/helpers/trackers/post.ts"),
				Bt = s("./src/reddit/selectors/posts.ts"),
				Ut = s("./src/reddit/connectors/PostList/index.ts");
			const Vt = Object(Ut.c)(),
				Wt = Object(i.c)({
					...Ut.d,
					layout: () => Rt.g.Classic,
					viewportDataLoaded: st.a,
					postIds: (e, {
						heroPostId: t,
						listingKey: s,
						listingName: r,
						inSubredditOrProfile: n,
						searchDiscoveryUnit: o
					}) => {
						const i = o && o.postOrder;
						if (i && i.length > 0) {
							if (t) {
								const s = i.indexOf(t);
								if (s > -1) return i.splice(s, 1), Object(Bt.T)(e, i)
							}
							return Object(Bt.T)(e, i)
						}
						const {
							models: a
						} = e.posts;
						return Object(Bt.C)(e, s, r, !!n).filter(e => a && a[e] && !a[e].isSponsored)
					}
				}),
				Ht = Object(o.b)(Wt, (e, t) => ({
					...Object(Ut.b)(e, t),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(Ie.l)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, qe(t))), t.sendEvent(Object(Ie.n)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: (e, t, r) => r ? Object(Dt.g)(e, t) : ("body" === t || "background" === t || "expando_open" === t || "image" === t || "timestamp" === t ? (s.sendEvent(Object(Ie.i)(s.listingKey, e, {
						...s.searchOptions,
						id: e,
						eventType: "post"
					}, qe(s))), s.sendEvent(Object(Ie.k)(e, {
						...s.searchOptions,
						id: e,
						eventType: "post"
					}, s.pageLayer, s.listingKey, s.searchDiscoveryUnit))) : "subreddit" === t ? (s.sendEvent(Object(Ie.o)({
						...s.searchOptions,
						id: e,
						eventType: "subreddit"
					}, qe(s))), s.sendEvent(Object(Ie.j)(s.searchOptions, s.pageLayer, void 0, s.listingKey, e, s.searchDiscoveryUnit))) : "comments" === t && (((e, t, s = "post") => e(e => ({
						...Object(Ie.c)(e, t),
						action: "click",
						noun: s,
						source: "search_results"
					})))(s.sendEvent, s.searchOptions, "comments"), s.sendEvent(Object(Ie.k)(e, {
						...s.searchOptions,
						id: e,
						eventType: "post"
					}, s.pageLayer, s.listingKey, s.searchDiscoveryUnit))), Object(Dt.g)(e, t)),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? At.a : Ft.SearchResultsClassicPost
				}));
			var qt = (e => Object(Te.c)(Vt(Ht(e))))(Mt.a),
				zt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Kt = s("./src/lib/lessComponent.tsx"),
				Gt = s("./node_modules/lodash/fromPairs.js"),
				Yt = s.n(Gt),
				Jt = s("./node_modules/query-string/index.js"),
				Qt = s.n(Jt),
				Xt = s("./src/higherOrderComponents/asTooltip.tsx"),
				Zt = s("./src/lib/extractQueryParams/index.ts"),
				$t = s("./src/reddit/controls/Dropdown/index.tsx"),
				es = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ts = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				ss = s("./src/reddit/icons/fonts/index.tsx"),
				rs = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ns = s("./src/reddit/components/SearchResultsSubNav/Select.m.less"),
				os = s.n(ns);

			function is() {
				return (is = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const as = Object(Xt.a)(Kt.a.wrapped($t.a, "Component", os.a)),
				cs = Kt.a.div("Title", os.a),
				ds = Kt.a.wrapped(rs.b, "DropdownTriangle", os.a),
				ls = Kt.a.div("Wrapper", os.a),
				ms = Kt.a.wrapped(({
					isOpen: e,
					...t
				}) => n.a.createElement("div", is({
					className: Object(A.a)(os.a.ValueWrapper, {
						[os.a.mIsOpen]: !!e
					})
				}, t)), "ValueWrapper", os.a),
				ps = Kt.a.wrapped(es.b, "SelectOption", os.a),
				us = (e, t, s, r) => () => e(e => ({
					...Object(Ie.c)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(_e.c)(_e.a.SearchResults),
					actionInfo: P.actionInfo(e),
					search: P.search(e, hs(s, r))
				})),
				hs = (e, t) => {
					const s = Yt()([...Object(Zt.a)(e)]);
					return Object(a.ic)(s.sort) && (t.sort = s.sort), Object(a.ic)(s.t) && (t.t = s.t), t
				},
				bs = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(se.b)(t)(e)
				}),
				xs = Object(o.b)(bs, (e, t) => ({
					onClose: () => e(Object(F.i)()),
					onOpen: () => e(Object(F.f)({
						tooltipId: t.tooltipId
					}))
				}), (e, t, s) => ({
					...e,
					...s,
					onToggle: e.isOpen ? t.onClose : t.onOpen
				}));
			var fs = Object(Te.c)(xs(e => {
					const t = Object(ts.a)();
					return n.a.createElement(ls, {
						className: e.className,
						onClick: e.onToggle
					}, n.a.createElement(cs, null, e.label), n.a.createElement(ms, {
						id: e.tooltipId
					}, e.optionLabels[e.value], t ? n.a.createElement(ss.a, {
						name: "caret_down",
						className: os.a.caret
					}) : n.a.createElement(ds, null), n.a.createElement(as, {
						isOpen: !!e.isOpen,
						tooltipId: e.tooltipId
					}, e.options.map(t => n.a.createElement(zt.a, {
						key: t,
						to: {
							pathname: Qt.a.parseUrl(t).url,
							state: {
								[j.a.SearchOriginPage]: Object(ht.b)(j.a.SearchOriginPage)
							},
							search: t.replace(Qt.a.parseUrl(t).url + "?", "")
						},
						onClick: us(e.sendEvent, "full_search_filter_changed", t, e.searchOptions)
					}, n.a.createElement(ps, {
						className: Object(A.a)({
							[os.a.mIsSelected]: t === e.value
						}),
						displayText: e.optionLabels[t],
						isSelected: t === e.value
					}))))))
				})),
				gs = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				vs = s("./src/reddit/constants/page.ts"),
				ys = s("./src/reddit/constants/parameters.ts");

			function Cs(e, t) {
				let s = "/search",
					r = "",
					n = e && e[ys.p] || "";
				t ? (n = n.replace("flair:", "flair_name:"), s = `/r/${t}/search`, r = "1") : n = n.replace("flair_name:", "flair:");
				const o = Object(Oe.a)(s, {
					[ys.p]: n,
					[ys.s]: r
				});
				return Object(d.c)(o, n, {
					[ys.s]: r
				})
			}
			var Es = s("./src/reddit/layout/row/Inline/index.tsx"),
				Os = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				ks = s.n(Os);
			const js = [a.Qb.Relevance, a.Qb.Hot, a.Qb.Top, a.Qb.New, a.Qb.Comments],
				_s = {
					[a.Qb.Hot]: () => l.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[a.Qb.Relevance]: () => l.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[a.Qb.Top]: () => l.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[a.Qb.New]: () => l.fbt._("New", null, {
						hk: "23egpt"
					}),
					[a.Qb.Comments]: () => l.fbt._("Comments", null, {
						hk: "3s76RE"
					})
				},
				Is = [a.Yb.HOUR, a.Yb.DAY, a.Yb.WEEK, a.Yb.MONTH, a.Yb.YEAR, a.Yb.ALL],
				Ss = {
					[a.Yb.HOUR]: () => l.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[a.Yb.DAY]: () => l.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[a.Yb.WEEK]: () => l.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[a.Yb.MONTH]: () => l.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[a.Yb.YEAR]: () => l.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[a.Yb.ALL]: () => l.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				},
				Ps = Kt.a.wrapped(fs, "LeftSelect", ks.a),
				ws = Kt.a.wrapped(gs.a, "ArrowRight", ks.a),
				Ns = Kt.a.wrapped(W.o, "TertiaryButton", ks.a),
				Ts = Kt.a.wrapped(Ns, "AllRedditResultsButton", ks.a),
				Ls = Object(_.t)({
					queryParams: _.T,
					url: _.Y
				}),
				Ms = Object(i.c)({
					subreddit: S.A,
					shouldSeeNSFW: Ke.cb
				}),
				Fs = Object(o.b)(Ms),
				Rs = e => {
					const t = e.queryParams && e.queryParams[ys.p] || "",
						s = Object(d.b)(t),
						r = e.queryParams && e.queryParams[ys.u],
						o = {};
					let i = Object(d.c)(e.url || "", s, {
						[ys.u]: a.Ib
					});
					const c = [];
					for (const n of js) {
						const t = Object(d.c)(e.url || "", s, {
							sort: n
						});
						o[t] = _s[n](), c.push(t), r === n && (i = t)
					}
					return n.a.createElement(Ps, {
						label: l.fbt._("Sort By", null, {
							hk: "4Dbt40"
						}),
						options: c,
						optionLabels: o,
						tooltipId: "search-results-sort",
						value: i,
						searchOptions: e.searchOptions
					})
				},
				As = e => {
					const t = e.queryParams && e.queryParams[ys.p] || "",
						s = Object(d.b)(t),
						r = e.queryParams && e.queryParams[ys.x],
						o = {};
					let i = Object(d.c)(e.url || "", s, {
						[ys.x]: a.Jb
					});
					const c = [];
					for (const n of Is) {
						const t = Object(d.c)(e.url || "", s, {
							[ys.x]: n
						});
						o[t] = Ss[n](), c.push(t), r === n && (i = t)
					}
					const m = e.tab === vs.g.Listings ? l.fbt._("Communities From", null, {
						hk: "1oVrVu"
					}) : l.fbt._("Posts From", null, {
						hk: "1abcgn"
					});
					return n.a.createElement(Ps, {
						label: m,
						options: c,
						optionLabels: o,
						tooltipId: "search-results-time",
						value: i,
						searchOptions: e.searchOptions
					})
				};
			class Ds extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.sendEvent(e => ({
							...Object(Ie.c)(e, this.props.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(zt.a, {
						to: Cs(e.queryParams)
					}, n.a.createElement(Ts, {
						onClick: this.onClick,
						"data-redditstyle": !0
					}, l.fbt._("All reddit results", null, {
						hk: "2IBCsX"
					}), e.isInIcons2020 ? n.a.createElement(ss.a, {
						name: "forward"
					}) : n.a.createElement(ws, null)))
				}
			}
			var Bs = Kt.a.wrapped(Ls(Fs(Object(Te.c)(({
					className: e,
					...t
				}) => n.a.createElement(Es.a, {
					className: e
				}, n.a.createElement(Rs, t), t.searchOptions && t.searchOptions.sort !== a.R.NEW && n.a.createElement(As, t), t.subreddit && !!t.searchOptions.restrict_sr && !t.shouldHideGlobalSearchLink && n.a.createElement(Ds, t))))), "Component", ks.a),
				Us = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				Vs = s.n(Us),
				Ws = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Hs = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				qs = s.n(Hs);
			const {
				fbt: zs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ks extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(Ie.v)(!!s, e))
					}
				}
				render() {
					const {
						isInIcons2020: e,
						subreddit: t,
						url: s
					} = this.props, r = {
						[qs.a.mSr]: !!t
					}, {
						pathname: o,
						search: i
					} = Vs.a.parse(s), c = t ? a.Rb.ToSubreddit : a.Rb.ToGlobal, d = t ? n.a.createElement(n.a.Fragment, null, n.a.createElement("span", null, zs._("Show results from", null, {
						hk: "3aVDvz"
					})), n.a.createElement(Me.b, {
						className: qs.a.subredditIcon,
						subredditOrProfile: t
					}), n.a.createElement("p", {
						className: Object(A.a)(qs.a.searchSwitcherText, r)
					}, t.displayText)) : n.a.createElement(n.a.Fragment, null, zs._("{=Show results from}{=all of Reddit}", [zs._param("=Show results from", n.a.createElement("span", null, zs._("Show results from", null, {
						hk: "4l8fSw"
					}))), zs._param("=all of Reddit", n.a.createElement("p", {
						className: Object(A.a)(qs.a.searchSwitcherText, r)
					}, zs._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return n.a.createElement(Re.a, {
						className: Object(A.a)(qs.a.searchSwitcher, r),
						onClick: this.onClick,
						to: {
							pathname: o,
							search: i,
							state: {
								searchSwitcherType: c
							}
						}
					}, d, e ? n.a.createElement(ss.a, {
						name: "forward",
						className: Object(A.a)(qs.a.arrowIcon, r)
					}) : n.a.createElement(gs.a, {
						className: Object(A.a)(qs.a.arrowIcon, r)
					}))
				}
			}
			var Gs = Object(Te.c)(e => e.subreddit ? n.a.createElement(Ws.b, {
					subredditName: e.subreddit.name
				}, n.a.createElement(Ks, e)) : n.a.createElement(Ks, e)),
				Ys = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				Js = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less"),
				Qs = s.n(Js);
			const Xs = Kt.a.div("Spacer", Qs.a),
				Zs = () => null,
				$s = Object(_.t)({
					pageLayer: e => e,
					queryParams: _.T
				}),
				er = Object(i.c)({
					fromSubreddit: (e, t) => {
						const s = We(e, t);
						return s ? Object(S.A)(e, {
							subredditName: s
						}) : null
					},
					shouldShowGlobalSearchSwitcher: ze
				});
			var tr = $s(Object(o.b)(er)(e => {
				const t = Object(De.a)(),
					{
						hasCommunityResults: s,
						hasPostResults: o,
						fromSubreddit: i,
						isInIcons2020: a,
						listingKey: c,
						listingName: l,
						morePostsRequested: m,
						onViewed: p,
						pageLayer: u,
						postsDiscoveryUnit: h,
						searchOptions: b,
						shouldShowGlobalSearchSwitcher: x,
						subredditsDiscoveryUnit: f,
						tab: g,
						queryParams: v
					} = e,
					y = Object(r.useCallback)(e => {
						t(Object(Ie.j)(b, u, void 0, c, e))
					}, [c, u, b, t]),
					E = Object(d.a)(b[ys.c]),
					O = b.category,
					k = b.is_multi,
					j = !b.restrict_sr && !O && !E,
					_ = h && O && E,
					I = f && O && E,
					S = s && !Object(It.a)(b.q) && !b.category;
				return n.a.createElement(n.a.Fragment, null, x && i && n.a.createElement(Gs, {
					isInIcons2020: a,
					searchOptions: b,
					subreddit: i,
					url: Cs(v, i.name)
				}), j && n.a.createElement(Xs, {
					key: "subNav"
				}, n.a.createElement(Bs, {
					isInIcons2020: a,
					searchOptions: b,
					subredditName: l,
					tab: g
				})), I && n.a.createElement(xe, {
					key: "subredditsDiscoveryUnit",
					categoryId: O,
					categoryName: E,
					discoveryUnit: f
				}), _ && n.a.createElement(C, {
					key: "postsDiscoveryUnit",
					categoryId: O,
					category: E,
					discoveryUnit: h
				}), S ? n.a.createElement(Xs, {
					key: "communitiesPreview"
				}, n.a.createElement(_t, {
					listingKey: c,
					preview: !0,
					searchOptions: b
				})) : !k && !O && n.a.createElement(Lt, {
					query: Object(d.a)(b.q || ""),
					type: Tt.Communities
				}), o ? n.a.createElement(T.b.Provider, {
					value: y
				}, n.a.createElement(Ys.a.Provider, {
					value: !0
				}, n.a.createElement(qt, {
					key: "posts",
					listingKey: c,
					listingName: l,
					listingViewed: p,
					inSubredditOrProfile: !1,
					noPostsComponent: Zs,
					onLoadMore: m,
					searchOptions: b
				}))) : n.a.createElement(Lt, {
					query: Object(d.a)(b.q || ""),
					type: O ? void 0 : Tt.Posts
				}))
			}));

			function sr(e) {
				const {
					hasCommunityResults: t,
					isInIcons2020: s,
					listingKey: r,
					listingName: o,
					searchOptions: i,
					tab: a
				} = e, c = !i.is_multi && !i.category;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(Bs, {
					isInIcons2020: s,
					key: "subNav",
					searchOptions: i,
					subredditName: o,
					tab: a
				}), t && !Object(It.a)(i.q) ? n.a.createElement(_t, {
					key: "communitiesPreview",
					listingKey: r,
					searchOptions: i
				}) : !c && n.a.createElement(Lt, {
					query: Object(d.a)(i.q || ""),
					type: Tt.Communities
				}))
			}
			const rr = () => null,
				nr = Object(_.t)({
					pageLayer: e => e,
					queryParams: _.T
				}),
				or = Object(i.c)({
					shouldShowSrSearchSwitcher: (e, {
						pageLayer: t
					}) => Object(_.M)(t)
				});
			var ir = nr(Object(o.b)(or)(e => {
					const {
						hasPostResults: t,
						isInIcons2020: s,
						listingKey: r,
						listingName: o,
						location: i,
						morePostsRequested: a,
						onViewed: c,
						searchOptions: l,
						shouldShowSrSearchSwitcher: m,
						tab: p,
						queryParams: u
					} = e, h = Object(d.a)(l[ys.c]), b = l.category, x = !b && !h;
					return n.a.createElement(n.a.Fragment, null, m && n.a.createElement(Gs, {
						isInIcons2020: s,
						searchOptions: l,
						url: Cs(u)
					}), x && n.a.createElement(Bs, {
						isInIcons2020: s,
						key: "subNav",
						searchOptions: l,
						shouldHideGlobalSearchLink: m,
						subredditName: o,
						tab: p
					}), t ? n.a.createElement(qt, {
						key: "posts",
						listingKey: r,
						listingName: o,
						listingViewed: c,
						location: i,
						inSubredditOrProfile: !1,
						noPostsComponent: rr,
						onLoadMore: a,
						searchOptions: l
					}) : n.a.createElement(Lt, {
						query: h,
						type: b && h ? Tt.Category : Tt.Posts
					}))
				})),
				ar = s("./src/config.ts"),
				cr = s("./src/lib/intersectionObserver/index.ts"),
				dr = s("./src/lib/isUrl/index.ts"),
				lr = s("./src/lib/objectSelector/index.ts"),
				mr = s("./src/lib/opener/index.ts"),
				pr = s("./src/reddit/actions/post.ts"),
				ur = s("./src/reddit/components/BlankPost/index.tsx"),
				hr = s("./src/reddit/components/Media/index.tsx"),
				br = s("./src/reddit/components/PostContainer/index.tsx"),
				xr = s("./src/reddit/components/Thumbnail/index.tsx"),
				fr = s("./src/reddit/connectors/PostViewable/index.ts"),
				gr = s("./src/reddit/constants/adEvents.ts"),
				vr = s("./src/reddit/contexts/Post/index.tsx"),
				yr = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				Cr = s("./src/reddit/helpers/overlay/index.ts"),
				Er = s("./src/reddit/helpers/path/index.ts"),
				Or = s("./src/reddit/models/Media/index.ts"),
				kr = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				jr = s("./src/reddit/components/PostTitle/index.tsx"),
				_r = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				Ir = s("./src/reddit/components/RichTextJson/index.tsx"),
				Sr = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Pr = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/CommentMeta.m.less"),
				wr = s.n(Pr);
			var Nr = e => n.a.createElement(Es.a, {
					className: Object(A.a)(wr.a.commentMeta, e.className)
				}, n.a.createElement(Es.a, {
					className: wr.a.postedInfo
				}, n.a.createElement(Sr.a, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: e.comment,
					flair: e.flair,
					renderedInOverlay: !1
				}))),
				Tr = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Lr = s("./src/reddit/selectors/comments.ts"),
				Mr = s("./src/reddit/selectors/commentSelector.ts"),
				Fr = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/UnthreadedComment.m.less"),
				Rr = s.n(Fr);
			const Ar = Object(i.c)({
					comment: (e, t) => Object(Mr.a)(e, t),
					flair: Lr.e,
					subreddit: S.I
				}),
				Dr = Object(o.b)(Ar),
				Br = Object(lr.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var Ur = Dr(e => {
					const {
						className: t,
						comment: s,
						flair: r,
						subreddit: o
					} = e;
					return n.a.createElement(_r.a, {
						className: Object(A.a)(Rr.a.container, t),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, n.a.createElement("div", null, n.a.createElement(Nr, {
						comment: s,
						flair: r,
						subredditName: o ? o.displayText : null
					}), n.a.createElement("div", {
						className: Rr.a.commentContentWrapper
					}, n.a.createElement("div", {
						className: Rr.a.commentBody
					}, n.a.createElement(Ir.a, {
						content: Object(Tr.a)(s),
						rtJsonElementProps: Br(e)
					})))))
				}),
				Vr = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Wr = s("./src/lib/timeAgo/index.ts"),
				Hr = s("./src/reddit/components/PostBadges/index.tsx"),
				qr = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				zr = s("./src/reddit/controls/MetaData/index.tsx"),
				Kr = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				Gr = s("./src/reddit/helpers/name/index.ts"),
				Yr = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				Jr = s.n(Yr);

			function Qr(e) {
				const {
					className: t,
					post: s,
					subredditOrProfile: r
				} = e, {
					isSponsored: o,
					author: i
				} = s, a = Object(Ae.a)();
				return n.a.createElement("div", {
					className: Object(A.a)(t, Jr.a.metadataContainer)
				}, !o && r && n.a.createElement(n.a.Fragment, null, n.a.createElement(Me.b, {
					className: Jr.a.postIcon,
					subredditOrProfile: r
				}), n.a.createElement(qr.a, {
					"data-click-id": "subreddit",
					to: {
						pathname: r.url,
						state: a
					}
				}, r.displayText)), o && n.a.createElement(n.a.Fragment, null, n.a.createElement(Me.b, {
					className: Jr.a.postIcon,
					subredditOrProfile: r
				}), Object(Gr.d)(i)), n.a.createElement(kr.e, null), n.a.createElement(Kr.b, {
					className: Jr.a.metaSeparator
				}), Object(Wr.d)(s.created / 1e3), !o && n.a.createElement(n.a.Fragment, null, n.a.createElement(Kr.b, {
					className: Jr.a.metaSeparator
				}), n.a.createElement(zr.b, {
					isScoreHidden: s.isScoreHidden,
					score: s.score
				})), o && r && n.a.createElement(Hr.a, {
					className: Jr.a.postBadges,
					displayText: r.displayText,
					inSubredditOrProfile: !1,
					post: s
				}))
			}
			var Xr = s("./src/reddit/components/ClassicPost/index.m.less"),
				Zr = s.n(Xr),
				$r = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				en = s.n($r);
			const {
				fbt: tn
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var sn = ({
					mainContent: e,
					post: t,
					previewText: s,
					searchDiscoveryUnit: r,
					subredditOrProfile: o
				}) => {
					const i = Object(ts.a)(),
						a = {
							inSubredditOrProfile: !0,
							post: t,
							shouldShowSubscribeButton: !1,
							subredditOrProfile: o
						};
					return n.a.createElement("div", {
						className: Zr.a.mainBody,
						"data-click-id": "body"
					}, e, n.a.createElement("div", {
						className: en.a.innerContainer
					}, n.a.createElement(Qr, a), n.a.createElement(jr.c, {
						className: en.a.postTitle,
						isOverlay: !1,
						post: t,
						size: jr.b.Medium
					}), s, n.a.createElement("div", {
						className: en.a.numComments
					}, n.a.createElement(Vr.a, {
						className: Object(A.a)(en.a.icon, en.a.commentIcon)
					}), tn._({
						"*": "{Comments count} Comments",
						_1: "1 Comment"
					}, [tn._plural(t.numComments, "Comments count")], {
						hk: "1EFnt0"
					})), n.a.createElement(kr.d, null), n.a.createElement("div", {
						className: en.a.commentWrapper
					}, r.commentOrder && r.commentOrder.map(e => n.a.createElement(Ur, {
						commentId: e,
						key: e
					}))), n.a.createElement("div", {
						className: en.a.seeFullPost
					}, tn._("See full post", null, {
						hk: "SntP8"
					}), i ? n.a.createElement(ss.a, {
						name: "forward",
						className: en.a.forwardIcon
					}) : n.a.createElement(gs.a, {
						className: en.a.arrowIcon
					}))))
				},
				rn = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				nn = s("./src/reddit/components/CallToActionButton/index.tsx"),
				on = s("./src/reddit/controls/OutboundLink/index.tsx"),
				an = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/PromotedHeroUnit/index.m.less"),
				cn = s.n(an);
			var dn = ({
				header: e,
				mainContent: t,
				post: s,
				subredditOrProfile: r
			}) => {
				const o = {
					inSubredditOrProfile: !0,
					post: s,
					shouldShowSubscribeButton: !1,
					subredditOrProfile: r
				};
				return n.a.createElement("div", {
					className: Object(A.a)(Zr.a.mainBody, Zr.a.promotedMainBody),
					"data-click-id": "body"
				}, t, n.a.createElement("div", {
					className: cn.a.innerContainer
				}, n.a.createElement(Qr, o), n.a.createElement(jr.c, {
					className: cn.a.postTitle,
					isOverlay: !1,
					post: s,
					size: jr.b.Large
				}), !(!s.source || !s.source.url) && n.a.createElement(rn.a, {
					className: cn.a.adLinkWrapper
				}, n.a.createElement(on.b, {
					className: cn.a.outboundLink,
					href: s.source.url.replace(ar.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: s.source
				}, s.source.displayText), s.callToAction && n.a.createElement(nn.a, {
					className: cn.a.callToAction,
					href: s.source.url.replace(ar.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: s.source
				}, s.callToAction)), n.a.createElement(kr.d, null)), n.a.createElement("hr", null), e)
			};
			const {
				fbt: ln
			} = s("./node_modules/fbt/lib/FbtPublic.js"), mn = `${ar.a.assetPath}/img/link-placeholder.png`, pn = (e, t) => t && t.length ? Object(Bt.F)(e, {
				postId: t[0]
			}) : void 0, un = {
				fireAdPixelsOfType: pr.x,
				openLightbox: e => Object(Cr.a)(e)
			}, hn = Object(fr.a)(() => Object(i.c)({
				autoplayPref: Ke.b,
				crosspostRoot: (e, t) => {
					const s = pn(e, t.searchDiscoveryUnit.postOrder);
					if (s) return Object(Bt.d)(e, {
						postId: s.id
					})
				},
				post: (e, t) => pn(e, t.searchDiscoveryUnit.postOrder),
				subredditOrProfile: Object(lr.a)((e, t) => {
					const s = pn(e, t.searchDiscoveryUnit.postOrder);
					if (s) return Object(S.L)(e, {
						identifier: s.belongsTo
					})
				})
			}), un);
			class bn extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.scrollerItemRef = null, this.setRef = e => {
						this.ref = e
					}, this.scrollerItemRefFn = e => {
						this.scrollerItemRef = e && this.isVideo() && this.isSponsored() ? e : null
					}, this.onClickMedia = e => {
						this.isSponsored() && this.isVideo() || this.onClickPost(e), this.isSponsored() && this.onClickAd(e)
					}, this.onClickPost = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							post: t,
							pageLayer: s
						} = this.props;
						t && (this.props.sendEvent(Object(Ie.p)(t.id, "search_result_post", this.props.searchOptions, this.props.searchDiscoveryUnit)), t.isSponsored ? (this.props.fireAdPixelsOfType(t, gr.a.Click), t.source ? t.source.outboundUrl ? Object(mr.d)(t.source.outboundUrl, mr.c.BLANK) : Object(mr.d)(t.source.url, mr.c.BLANK) : Object(mr.d)(t.permalink, mr.c.BLANK)) : this.props.openLightbox({
							pathname: Object(Er.b)(t.permalink),
							state: {
								[j.a.ClickSource]: s ? Object(P.getPageTypeFromCurrentPage)(s) : void 0,
								[j.a.ClickId]: N()()
							}
						}))
					}, this.onClickAd = e => {
						this.isVideo() || (e.stopPropagation(), e.preventDefault());
						const {
							listingKey: t,
							pageLayer: s,
							post: r,
							searchOptions: n,
							searchDiscoveryUnit: o
						} = this.props;
						r && this.props.sendEvent(Object(Ie.r)(r.id, n, o, t, s))
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							listingKey: s,
							searchDiscoveryUnit: r,
							searchOptions: n,
							pageLayer: o,
							post: i
						} = this.props;
						let a;
						return (a = "subreddit" === t ? b.K(n, o, s, r) : i && i.isSponsored ? b.I(n, o, s, r) : b.L(n, o, s, r))(e)
					}
				}
				componentDidMount() {
					this.ref && cr.a(this.ref, (e, t) => {
						this.scrollerItemRef && (t ? this.scrollerItemRef.focusContent() : this.scrollerItemRef.pauseContent())
					}), Object(Ie.g)(this.props.listingKey, this.props.searchOptions, this.props.searchDiscoveryUnit)
				}
				componentWillUnmount() {
					this.ref && cr.b(this.ref), this.scrollerItemRef && this.scrollerItemRef.stopContent(), this.ref = null, this.scrollerItemRef = null
				}
				isSponsored() {
					return !!this.props.post && this.props.post.isSponsored
				}
				isVideo() {
					const {
						crosspostRoot: e,
						post: t
					} = this.props;
					if (t) {
						const {
							media: s
						} = e || t;
						return !!s && (s.type === Or.o.VIDEO || s.type === Or.o.GIFVIDEO)
					}
					return !1
				}
				render() {
					const {
						autoplayPref: e,
						crosspostRoot: t,
						post: s,
						onPostViewable: r,
						searchDiscoveryUnit: o,
						subredditOrProfile: i
					} = this.props;
					if (!s) return null;
					if (s.isBlank) return n.a.createElement(ur.BlankPost, {
						onPostViewable: r,
						post: s,
						postId: s.id
					});
					const {
						media: a
					} = t || s, c = s.isSponsored ? cn.a : en.a, d = s.isSponsored ? dn : sn, l = a && n.a.createElement("div", {
						onClickCapture: e => this.onClickMedia(e),
						ref: this.setRef
					}, n.a.createElement(hr.a, {
						autoplayPref: e,
						isListing: !1,
						isMiniCard: !s.isSponsored,
						isNotCardView: !1,
						isPromotedTrend: s.isSponsored,
						post: t || s,
						primaryContent: s.isSponsored,
						scrollerItemRef: this.scrollerItemRefFn,
						shouldLoad: !0,
						shouldPause: !0,
						showCentered: !1,
						showFull: s.isSponsored
					}));
					let m = n.a.createElement("div", {
						className: c.flexSpacer
					});
					const u = !!s.source && Object(dr.a)(s.source.url) || !!s.thumbnail && Object(dr.a)(s.thumbnail.url);
					let b;
					if (!a && u) m = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: c.mediaWrapper
					}, n.a.createElement(xr.a, {
						className: c.thumbnail,
						post: s,
						templatePlaceholderImage: mn,
						usePreview: !0
					})));
					else if (a && l)
						if (a.type !== Or.o.RTJSON && a.type !== Or.o.TEXT) m = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
							className: c.mediaWrapper
						}, l));
						else {
							m = n.a.createElement("div", {
								className: c.mediaPlaceholder
							}), (a.type === Or.o.RTJSON && a.richtextContent || a.type === Or.o.TEXT && a.content) && Object(yr.a)(s) && (b = n.a.createElement("div", {
								className: c.textMediaWrapper,
								onClickCapture: e => this.onClickPost(e)
							}, n.a.createElement(hr.a, {
								autoplayPref: e,
								className: c.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: t || s,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !1,
								showFull: !0
							}), n.a.createElement("div", {
								className: c.seeMore
							}, "...", ln._("More", null, {
								hk: "362mDE"
							}))))
						} const x = n.a.createElement(h.a, {
						className: c.header
					}, s.isSponsored ? ln._("Promoted", null, {
						hk: "2QTd86"
					}) : ln._("Top Post", null, {
						hk: "R69MV"
					}));
					return n.a.createElement(vr.a, {
						postId: s.id
					}, n.a.createElement(br.a, {
						className: c.container,
						eventFactory: this.itemPostClickEventFactory,
						onClick: e => this.onClickPost(e),
						post: s,
						"data-click-id": "hero_unit"
					}, n.a.createElement(p.a, {
						className: c.layout,
						headerClassName: Object(A.a)({
							[c.layoutHeader]: s.isSponsored
						}),
						bodyClassName: Object(A.a)({
							[c.layoutBody]: s.isSponsored
						}),
						header: s.isSponsored ? null : x
					}, n.a.createElement(d, {
						header: x,
						mainContent: m,
						post: s,
						previewText: b,
						searchDiscoveryUnit: o,
						subredditOrProfile: i
					}))))
				}
			}
			var xn = Object(_.t)()(hn(Object(Te.c)(bn))),
				fn = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				gn = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less"),
				vn = s.n(gn);
			const yn = Object(_.t)(),
				Cn = () => null;
			var En = yn(n.a.memo(e => {
				const {
					listingKey: t,
					pageLayer: s,
					searchOptions: o,
					searchDiscoveryUnit: i
				} = e, a = Object(De.a)(), c = Object(r.useCallback)(e => {
					a(Object(Ie.j)(o, s, void 0, t, e, i))
				}, [a, o, s, t, i]);
				return n.a.createElement(T.b.Provider, {
					value: c
				}, n.a.createElement(Ys.a.Provider, {
					value: !0
				}, n.a.createElement(qt, {
					className: vn.a.postList,
					disablePlaceholder: !0,
					heroPostId: e.heroPostId,
					key: "posts",
					listingKey: e.listingKey,
					listingName: e.listingName,
					listingViewed: e.onViewed,
					location: e.location,
					inSubredditOrProfile: !1,
					noPostsComponent: Cn,
					onLoadMore: e.morePostsRequested,
					searchOptions: e.searchOptions,
					searchDiscoveryUnit: e.searchDiscoveryUnit
				})))
			}));
			const On = new ke.a(1),
				kn = Object(o.b)(null, e => ({
					trackOnHeroUnitEnteredViewport: (t, s, r, n, o, i) => e((e, a) => b.M(a(), t, s, r, o, n, i))
				}));
			var jn = Object(_.t)()(kn(Object(Te.c)(e => {
					const {
						listingKey: t,
						listingName: s,
						location: r,
						morePostsRequested: o,
						onViewed: i,
						searchDiscoveryUnitsModels: a,
						searchDiscoveryUnitsOrder: c,
						searchOptions: d
					} = e, {
						Hero: l,
						PromotedTrendHero: m
					} = fn.b, p = new ke.a(1), u = (t, s) => {
						const {
							listingKey: r,
							searchOptions: o,
							pageLayer: i,
							trackOnHeroUnitEnteredViewport: a
						} = e, c = ((e, t, s, r, n, o) => {
							const {
								PromotedTrendHero: i
							} = fn.b, a = `entered-hero-unit-${t}`;
							let c = On.get(a);
							if (void 0 === c) {
								const d = e.layout.viewTypeWeb === i;
								c = () => {
									o.trackOnHeroUnitEnteredViewport(e, t, s, r, n, d)
								}, On.set(a, c)
							}
							return c
						})(t, s, o, r, i, {
							trackOnHeroUnitEnteredViewport: a
						}), d = `hero-unit-search-${r}`;
						let l;
						return void 0 === (l = p.get(d)) && (l = {
							estHeight: 376,
							trackOnEnteredViewport: c,
							id: t.id,
							render: () => n.a.createElement(xn, {
								key: "heroUnit",
								searchDiscoveryUnit: t,
								searchOptions: o,
								listingKey: r
							})
						}), p.set(d, l), [l]
					}, h = (e => {
						for (const t in e) {
							const s = e[t];
							if (s.layout.viewTypeWeb === l || s.layout.viewTypeWeb === m) return s.postOrder[0]
						}
					})(a);
					return n.a.createElement(n.a.Fragment, null, c.map(e => {
						if (a[e]) return ((e, a) => {
							const {
								viewTypeWeb: c
							} = e.layout, {
								Carousel: l,
								Hero: m,
								PromotedTrendHero: p,
								Row: h
							} = fn.b;
							switch (e.type) {
								case fn.a.Posts:
									if (c === l) return n.a.createElement(C, {
										heroPostId: a,
										listingKey: t,
										key: "postsDiscoveryUnit",
										searchDiscoveryUnit: e,
										searchOptions: d
									});
									if (c === m || c === p) return n.a.createElement(je.b, null, u(e, a));
									if (c === h) return n.a.createElement(En, {
										searchDiscoveryUnit: e,
										heroPostId: a,
										listingKey: t,
										listingName: s,
										location: r,
										onViewed: i,
										morePostsRequested: o,
										searchOptions: d
									});
									break;
								case fn.a.Communities:
									if (c === l) return n.a.createElement(xe, {
										listingKey: t,
										key: "subredditsDiscoveryUnit",
										searchDiscoveryUnit: e,
										searchOptions: d
									});
									break;
								default:
									return null
							}
						})(a[e], h)
					}))
				}))),
				_n = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				In = s("./src/reddit/selectors/experiments/coreStyles.ts");
			const Sn = {
					unitName: _n.g
				},
				Pn = {
					unitName: _n.h
				},
				wn = Object(i.c)({
					hasCommunityResults: (e, t) => !!Object(tt.f)(e, t) || !Object(tt.e)(e, t) && Object(tt.b)(e, t).length > 0,
					hasPostResults: (e, t) => !!Object(tt.f)(e, t) || !Object(tt.e)(e, t) && Object(Bt.L)(e, {
						...t
					}).length > 0,
					isInIcons2020: In.a,
					postsDiscoveryUnit: e => Object(x.c)(e, Sn),
					subredditsDiscoveryUnit: e => Object(x.c)(e, Pn),
					searchDiscoveryUnitsModels: e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.models[t];
						return s || {}
					},
					searchDiscoveryUnitsOrder: e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.order[t];
						return s || g
					},
					viewTreatment: tt.i
				}),
				Nn = Object(o.b)(wn, e => ({
					morePostsRequested: () => e(c.k([a.Sb.Posts]))
				})),
				Tn = Object(_.t)();
			class Ln extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(et.u)(this.props.listingKey, this.props.searchOptions, t, e, this.props.pageLayer, qe(this.props))
				}
				render() {
					const {
						hasCommunityResults: e,
						hasPostResults: t,
						isInIcons2020: s,
						listingKey: r,
						listingName: o,
						location: i,
						morePostsRequested: a,
						postsDiscoveryUnit: c,
						searchDiscoveryUnitsModels: d,
						searchDiscoveryUnitsOrder: l,
						searchOptions: m,
						subredditsDiscoveryUnit: p,
						tab: u,
						viewTreatment: h
					} = this.props;
					switch (u) {
						case vs.g.Posts:
							return n.a.createElement(ir, {
								hasPostResults: t,
								isInIcons2020: s,
								listingKey: r,
								listingName: o,
								location: i,
								morePostsRequested: a,
								onViewed: this.onViewed,
								searchOptions: m,
								tab: u
							});
						case vs.g.Listings:
							return n.a.createElement(sr, {
								hasCommunityResults: e,
								isInIcons2020: s,
								listingKey: r,
								listingName: o,
								searchOptions: m,
								tab: u
							});
						case vs.g.Top:
						default: {
							const b = h === fn.c.Trending;
							return n.a.createElement(n.a.Fragment, null, b ? n.a.createElement(jn, {
								listingKey: r,
								listingName: o,
								location: i,
								morePostsRequested: a,
								onViewed: this.onViewed,
								searchDiscoveryUnitsModels: d,
								searchDiscoveryUnitsOrder: l,
								searchOptions: m
							}) : n.a.createElement(tr, {
								hasCommunityResults: e,
								hasPostResults: t,
								isInIcons2020: s,
								listingKey: r,
								listingName: o,
								morePostsRequested: a,
								onViewed: this.onViewed,
								postsDiscoveryUnit: c,
								searchOptions: m,
								subredditsDiscoveryUnit: p,
								tab: u
							}))
						}
					}
				}
			}
			t.a = Tn(Nn(Ln))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/BestResults.m.less": function(e, t, s) {
			e.exports = {
				Spacer: "GOElXytTteFnMub22F_Vt",
				spacer: "GOElXytTteFnMub22F_Vt"
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/index.m.less": function(e, t, s) {
			e.exports = {
				postList: "_3DKpvMPtj9USfmesFmERqc"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				subredditName: "_2qt_wFNwf1Nfy1x73i1HFG",
				icon: "_3DuNwpHyVCczHzo0uGKTbQ"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/search/index.ts"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/components/MoreCommunitiesIcon/index.m.less"),
				p = s.n(m);
			const u = s("./src/lib/lessComponent.tsx").a.wrapped(l.a, "InternalLink", p.a),
				h = ({
					currentPageUrl: e,
					numCommunities: t,
					searchQuery: s
				}) => i.a.createElement(u, {
					className: p.a.moreCommunities,
					to: e ? Object(c.c)(e, s, {
						type: [a.Sb.Subreddits, a.Sb.Users].join(",")
					}) : "#"
				}, i.a.createElement("span", {
					className: p.a.numCommunities
				}, t));
			var b = s("./src/reddit/components/ShareMenu/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				v = s("./src/reddit/helpers/trackers/searchResults.ts"),
				y = s("./src/reddit/icons/fonts/Share/index.tsx"),
				C = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				E = s("./src/reddit/components/SearchDiscoveryUnits/index.m.less"),
				O = s.n(E);
			const k = 5,
				j = [];
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.onFollow = () => {
						this.props.sendEvent(Object(v.f)("trending_header", this.state.isFollowed ? "unfollow" : "follow", this.props.searchOptions)), this.setState({
							isFollowed: !this.state.isFollowed
						})
					}, this.onShare = () => {
						this.props.sendEvent(Object(v.f)("trending_header", "share", this.props.searchOptions))
					}, this.onShareMenuClick = e => {
						this.props.sendEvent(Object(v.x)(e, this.props.searchOptions))
					}, this.state = {
						isFollowed: !1
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isCategorySearch: s,
						isInFollowExperiment: n,
						isSubreddit: o,
						isTrendingSearch: a,
						searchOptions: d,
						searchQuery: l,
						suffix: m
					} = this.props, p = t && !o && t.subredditIcons ? t.subredditIcons.length <= k ? t.subredditIcons : t.subredditIcons.slice(0, k - 1) : j, u = Object(c.a)(l).replace("flair_name:", "flair:").replace('"', "").replace('"', ""), v = t && t.subredditIcons.length > k && i.a.createElement(h, {
						currentPageUrl: e,
						searchQuery: l,
						numCommunities: t.subredditIcons.length ? t.subredditIcons.length - k + 1 : 0
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
						className: O.a.bold
					}, s ? d[x.c] : u), i.a.createElement("p", {
						className: O.a.metaData
					}, m), i.a.createElement("div", {
						className: O.a.metaDataContainer
					}, i.a.createElement(g.a, {
						className: O.a.metaData,
						isHeaderContent: !0,
						subredditIcons: p,
						suffix: v
					}), a && n && (this.state.isFollowed ? i.a.createElement(f.l, {
						className: O.a.follow,
						onClick: this.onFollow
					}, r.fbt._("Unfollow", null, {
						hk: "ddl2J"
					})) : i.a.createElement(f.i, {
						className: O.a.follow,
						onClick: this.onFollow
					}, i.a.createElement(C.a, {
						className: O.a.icon
					}), r.fbt._("Follow", null, {
						hk: "4ddkyZ"
					}))), a && !n && e && i.a.createElement(b.a, {
						dropdownId: "rails-share-button",
						permalink: e,
						sendEventWithName: this.onShareMenuClick,
						subreddit: null
					}, i.a.createElement(I, {
						onClick: this.onShare
					}))))
				}
			}
			const I = i.a.memo(({
				onClick: e
			}) => {
				const t = r.fbt._("Share", null, {
					hk: "1PIfHd"
				});
				return i.a.createElement(f.q, {
					className: O.a.share,
					"data-click-id": "share",
					onClick: e,
					text: t,
					Icon: y.a,
					priority: f.b.Plain,
					size: f.c.XS
				})
			});
			var S = _,
				P = s("./src/reddit/components/SubredditIcon/index.tsx"),
				w = s("./src/reddit/components/TabNav/index.tsx"),
				N = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				L = s("./src/reddit/constants/page.ts"),
				M = s("./src/reddit/helpers/history/index.ts"),
				F = s("./src/reddit/helpers/search/hasSearchGrammar.ts"),
				R = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				A = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				D = s.n(A);
			class B extends i.a.Component {
				constructor() {
					super(...arguments), this.sendTopTabClickEvent = () => {
						this.props.tab === L.g.Top && this.props.sendEvent(Object(v.h)(v.a.TopResults, this.props.searchOptions))
					}, this.sendPostsTabClickEvent = () => {
						this.props.tab === L.g.Posts && this.props.sendEvent(Object(v.h)(v.a.Posts, this.props.searchOptions))
					}, this.sendCommunitiesTabClickEvent = () => {
						this.props.tab === L.g.Listings && this.props.sendEvent(Object(v.h)(v.a.CommunitiesAndUsers, this.props.searchOptions))
					}
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: o,
						searchOptions: m,
						sendEvent: p,
						subreddit: u,
						tab: h,
						viewTreatment: b
					} = this.props, f = m[x.c] || (t ? t.searchQuery || "" : m.q || ""), g = !(!u || !m.restrict_sr), v = !!m[x.c], y = b === R.c.Trending, C = Object(n.e)(o);
					let E = r.fbt._("Search results", null, {
						hk: "1N3gsY"
					});
					f && (g ? E = u.icon && u.icon.url ? i.a.createElement("span", null, r.fbt._("Search results in {subreddit name}", [r.fbt._param("subreddit name", i.a.createElement(d.a, {
						subredditName: u.name
					}, i.a.createElement(l.a, {
						to: `/r/${u.name}/`
					}, i.a.createElement(P.b, {
						className: D.a.icon,
						key: u.icon.url,
						iconUrl: u.icon.url
					}), i.a.createElement("span", {
						className: D.a.subredditName
					}, u.displayText))))], {
						hk: "JrpKl"
					})) : r.fbt._("Search results in {subreddit name}", [r.fbt._param("subreddit name", u.displayText)], {
						hk: "JrpKl"
					}) : (v || y) && t && t.displayText && (E = r.fbt._("Topic • {topic name} and {num occurrences} more communities talking about this", [r.fbt._param("topic name", t.displayText), r.fbt._param("num occurrences", t.subredditOccurrences.toString())], {
						hk: "4hWnTn"
					})));
					const O = i.a.createElement(S, {
						currentPageUrl: e,
						headerContent: y || v ? t : void 0,
						isInFollowExperiment: s,
						isSubreddit: g,
						isCategorySearch: v,
						isTrendingSearch: y,
						searchOptions: m,
						searchQuery: f,
						sendEvent: p,
						suffix: E
					});
					return i.a.createElement(w.c, {
						title: O,
						isCategoryPage: !!m[x.c]
					}, !g && i.a.createElement(i.a.Fragment, null, i.a.createElement(w.a, {
						active: h === L.g.Top,
						onClick: this.sendTopTabClickEvent,
						key: "top",
						to: {
							pathname: o.pathname,
							state: {
								[T.a.SearchOriginPage]: Object(M.b)(T.a.SearchOriginPage)
							},
							search: Object(c.c)(C, f, {
								type: ""
							}).replace(o.pathname + "?", "")
						}
					}, r.fbt._("Best results", null, {
						hk: "40v7Dh"
					})), !Object(F.a)(f) && i.a.createElement(w.a, {
						active: h === L.g.Posts,
						onClick: this.sendPostsTabClickEvent,
						key: "posts",
						to: {
							pathname: o.pathname,
							state: {
								[T.a.SearchOriginPage]: Object(M.b)(T.a.SearchOriginPage)
							},
							search: Object(c.c)(C, f, {
								type: a.Sb.Posts
							}).replace(o.pathname + "?", "")
						}
					}, r.fbt._("Posts", null, {
						hk: "vNVpl"
					})), !Object(F.a)(f) && !m.is_multi && i.a.createElement(w.a, {
						active: h === L.g.Listings,
						onClick: this.sendCommunitiesTabClickEvent,
						key: "listings",
						to: {
							pathname: o.pathname,
							state: {
								[T.a.SearchOriginPage]: Object(M.b)(T.a.SearchOriginPage)
							},
							search: Object(c.c)(C, f, {
								type: [a.Sb.Subreddits, a.Sb.Users].join(",")
							}).replace(o.pathname + "?", "")
						}
					}, r.fbt._("Communities and users", null, {
						hk: "xcZ7c"
					}))))
				}
			}
			t.a = Object(N.c)(B)
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				d = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = m.a.div("ButtonContainer", l.a), h = m.a.div("Container", l.a), b = m.a.img("BannerImg", l.a), x = m.a.img("SnooImg", l.a), f = m.a.div("CommunityText", l.a);
			var g = () => n.a.createElement(h, null, n.a.createElement(b, {
					src: `${a.a.assetPath}/img/search-results-community-banner.png`
				}), n.a.createElement(x, {
					src: `${a.a.assetPath}/img/snoo-thinking.png`
				}), n.a.createElement(f, null, p._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), n.a.createElement(u, null, n.a.createElement(c.a, {
					className: l.a.Button,
					eventSource: "sidebar"
				}))),
				v = s("./src/reddit/components/IdCard/async.tsx"),
				y = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/lib/addQueryParams/index.ts"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/helpers/trackers/searchResults.ts"),
				w = s("./src/reddit/icons/svgs/Search/index.tsx"),
				N = s("./src/reddit/components/Widgets/RelatedQueries/index.m.less"),
				T = s.n(N);
			var L = Object(_.c)(e => {
					const {
						className: t,
						relatedQueries: s,
						searchOptions: r,
						sendEvent: o
					} = e;
					return n.a.createElement(I.a, {
						className: t,
						title: k.fbt._("People also searched for", null, {
							hk: "tjjwf"
						})
					}, s.slice(0, 8).map(e => {
						o(Object(P.q)("view", r));
						const t = {
							...r,
							q: e.q
						};
						return n.a.createElement(S.a, {
							className: T.a.relatedQuery,
							key: e.q,
							onClick: e => o(Object(P.q)("click", t)),
							to: Object(j.a)("/search", {
								q: e.q
							})
						}, n.a.createElement("li", {
							className: T.a.relatedQueryItem
						}, n.a.createElement(w.a, {
							className: T.a.searchIcon
						}), e.q))
					}))
				}),
				M = s("./src/reddit/selectors/searchResults.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/selectors/widgets.ts");
			const D = Object(i.c)({
				isLoggedIn: R.J,
				subredditId: (e, {
					listingName: t
				}) => Object(F.F)(e, t),
				postFlairWidgets: (e, {
					listingName: t
				}) => {
					const s = Object(F.F)(e, t);
					return Object(A.g)(e, {
						subredditId: s
					})
				},
				relatedQueries: (e, {
					searchOptions: t
				}) => Object(M.h)(e, t.q)
			});
			t.a = Object(o.b)(D)(e => n.a.createElement(y.a, {
				className: e.className
			}, e.subredditId && e.searchOptions.restrict_sr && n.a.createElement(v.a, {
				listingName: e.listingName
			}), !e.searchOptions.restrict_sr && e.isLoggedIn && n.a.createElement(g, null), e.subredditId && e.searchOptions.restrict_sr && e.postFlairWidgets && e.postFlairWidgets.map((t, s) => n.a.createElement(C.a, {
				key: `widgetSpacer-${s}`
			}, n.a.createElement(O.a, {
				subredditName: e.listingName,
				widget: t
			}))), e.searchOptions.q && e.relatedQueries && e.relatedQueries.length > 0 && n.a.createElement(C.a, {
				key: "widgetSpacer-relatedQueries"
			}, n.a.createElement(L, {
				searchOptions: e.searchOptions,
				relatedQueries: e.relatedQueries
			})), n.a.createElement(E.a, null)))
		},
		"./src/reddit/components/SearchResultsSubNav/Select.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2IEJWluPyA1cstR9aDWVE5",
				component: "_2IEJWluPyA1cstR9aDWVE5",
				Title: "_3g64D6uVm5QtFZxpgrLt0x",
				title: "_3g64D6uVm5QtFZxpgrLt0x",
				DropdownTriangle: "_3gVMU-TMInP74AYvzlITk0",
				dropdownTriangle: "_3gVMU-TMInP74AYvzlITk0",
				Wrapper: "Ok_V8Hz99m2KvmtrN-eKW",
				wrapper: "Ok_V8Hz99m2KvmtrN-eKW",
				ValueWrapper: "_37VvvhtKn3kg8VG5ZIjfGE",
				valueWrapper: "_37VvvhtKn3kg8VG5ZIjfGE",
				mIsOpen: "_G07hxQI8X2C6IUlaYQqO",
				SelectOption: "_1FuIuPDupAajDS-8lDP3nq",
				selectOption: "_1FuIuPDupAajDS-8lDP3nq",
				mIsSelected: "_7BNV9rHjX9oIq_WWuCr38",
				caret: "_3ufJhJuU4wrQeCWinte9ZH"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				LeftSelect: "_3gCS2R6Y3iUcpUIWBCd6k9",
				leftSelect: "_3gCS2R6Y3iUcpUIWBCd6k9",
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				TertiaryButton: "_2m_kIMm5x_7I8EyAg72YYX",
				tertiaryButton: "_2m_kIMm5x_7I8EyAg72YYX",
				AllRedditResultsButton: "_2usjl1DPvh2qlLL9D4TlLJ",
				allRedditResultsButton: "_2usjl1DPvh2qlLL9D4TlLJ",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(n);
			t.a = r.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(r),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", n.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/ImageInput/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				h = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				b = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = s("./src/reddit/icons/svgs/Upload/index.tsx"),
				v = s("./src/reddit/models/ApiRequestState/index.ts"),
				y = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				C = s("./src/reddit/components/SubredditIcon/index.m.less"),
				E = s.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: r,
						...n
					} = e, i = Object(b.a)(), a = [s, E.a.inTopBar, E.a.iconContainer];
					return r ? a.push(E.a.emptyEditableIconInTopBar) : a.push(E.a.editableIcon, E.a.emptyEditableIcon), o.a.createElement("span", O({}, n, {
						className: Object(c.a)(...a)
					}), r ? i ? o.a.createElement(x.a, {
						name: "upload",
						className: E.a.emptyUploadButton
					}) : o.a.createElement(g.a, {
						className: E.a.emptyUploadButton
					}) : i ? o.a.createElement(x.a, {
						name: "add",
						className: E.a.emptyPlusButton
					}) : o.a.createElement(f.a, {
						className: E.a.emptyPlusButton
					}), e.children)
				},
				j = e => {
					const {
						iconColor: t,
						className: s,
						alt: r,
						role: n,
						onClick: i,
						inTopBar: a,
						src: d
					} = e;
					return o.a.createElement("span", {
						className: E.a.iconContainer
					}, o.a.createElement("img", {
						alt: r,
						onClick: i,
						role: n,
						src: d,
						className: Object(c.a)(s, {
							[E.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				_ = Object(a.c)({
					isLoading: y.b
				});
			class I extends o.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(h.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => o.a.createElement(m.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(v.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(u.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? o.a.createElement("span", {
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : r.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(u.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = o.a.createElement(o.a.Fragment, null, o.a.createElement(j, O({
						alt: r.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, o.a.createElement(k, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : o.a.createElement(o.a.Fragment, null, o.a.createElement(k, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), o.a.createElement(p.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(u.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? o.a.createElement("div", {
						className: E.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(i.b)(_, (e, t) => ({
				onFileSelected: (s, r) => {
					e(Object(d.a)(t.subreddit, s, r))
				}
			}))(Object(l.c)(I))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ({
					border: e,
					small: t,
					...s
				}) => o.a.createElement(i.q, m({}, s, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				u = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					small: s,
					...r
				}) => o.a.createElement(i.q, m({}, r, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: s ? i.c.S : i.c.M,
					text: u(e)
				}));
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						small: r = !1,
						isFullWidth: n = !1
					} = this.props, i = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: n
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, m({}, i, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, m({}, i, {
						id: s
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = ({
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
				}) => o[n({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(o.a))
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, s) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return E
			}));
			var r, n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				p = s("./src/reddit/constants/zIndex.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = s("./src/reddit/components/TabNav/index.m.less"),
				x = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(r || (r = {}));
			const g = l.a.wrapped(h.a, "Gear", x.a),
				v = l.a.h3("Title", x.a),
				y = l.a.div("TabNavContainer", x.a),
				C = l.a.div("Tabs", x.a),
				E = l.a.wrapped(({
					active: e,
					children: t,
					enabled: s,
					...r
				}) => a.a.createElement(u.a, f({}, r, {
					"aria-selected": e,
					className: Object(c.a)(r.className, {
						[x.a.mIsActive]: e,
						[x.a.mIsEnabled]: !1 !== s
					}),
					role: "tab"
				}), t), "Tab", x.a),
				O = e => {
					switch (e) {
						case r.GEAR:
							return a.a.createElement(g, null);
						default:
							return null
					}
				},
				k = () => window.pageYOffset || window.scrollY,
				j = 75,
				_ = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: p.g
				};
			class I extends a.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? k() < j && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : k() >= j && this.setState({
							sticky: !0
						})
					}, d.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: s
					} = this.props, r = Object(c.a)({
						[x.a.mResponsive]: t
					});
					return a.a.createElement(y, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: s
					}, a.a.createElement(v, {
						className: Object(c.a)(r, {
							[x.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, O(this.props.icon), this.props.title), a.a.createElement(C, {
						className: Object(c.a)(r, {
							[x.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? _ : void 0
					}, this.props.children))
				}
			}
			t.c = I
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(a);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(({
					children: e,
					...t
				}) => n.a.createElement("div", t, n.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/reddit/constants/posts.ts"),
				n = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === r.a.PROFILE ? Object(n.d)(e) : Object(n.c)(e)
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				g = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				y = s("./src/reddit/models/Widgets/index.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				O = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 129,
				_ = Object(b.t)({
					filterName: e => Object(b.T)(e)[h.g],
					url: e => Object(b.Y)(e)
				}),
				I = Object(a.c)({
					subredditId: (e, t) => Object(C.F)(e, t.subredditName)
				}),
				S = Object(i.b)(I),
				P = l.a.div("WidgetContent", O.a),
				w = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: s,
					...r
				}) => o.a.createElement("li", {
					className: Object(c.a)(O.a.StyledFlair, e === y.d.Cloud && O.a.cloudDisplay, {
						[O.a.flairFilter]: t,
						[O.a["m-selected"]]: r.isSelected
					}),
					onMouseDown: s
				}, o.a.createElement(m.b, k({}, r, {
					className: O.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(g.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(g.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > j && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(x.o, {
						className: O.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? r.fbt._("See more", null, {
						hk: "2fWFes"
					}) : r.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(w, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(g.e)(this.props.url, Object(g.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? j : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: O.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(w, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(g.e)(this.props.url, Object(g.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, r = t.order, n = this.getFlairsFromIds(r), i = e && this.getSelectedFlair(n) || void 0, a = t.order.length > r.length || s && !i;
					return o.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(P, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(n), a && this.renderButton()))
				}
			}
			t.a = _(S(Object(p.c)(N)))
		},
		"./src/reddit/components/Widgets/RelatedQueries/index.m.less": function(e, t, s) {
			e.exports = {
				searchIcon: "_340rztSaG5YZbk-QlUAAnx",
				relatedQuery: "BX_EeSBX4OAnmdUGshwZt",
				relatedQueryItem: "_3BhePshwzZv2tclBZKhutZ"
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const f = {
					autoplayPref: x.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.l,
					isLoggedIn: x.J,
					moderatorPermissions: u.j,
					modModeEnabled: d.Q,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: d.r,
					flairStyleTemplate: d.S
				},
				g = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const r = s === a.a.upvoted ? Object(o.bb)(t) : Object(o.u)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(o.X)(t)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}),
				v = Object(r.b)(() => Object(n.c)(f), g, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(v(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.W
				}),
				m = new a.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${t}`;
						let r = m.get(s);
						if (void 0 === r) {
							const o = new RegExp(`(\\b${t}\\b)`, "gi"),
								i = e.title.split(o);
							for (let e = 1; e < i.length; e += 2) i[e] = n.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, i[e]);
							r = n.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, n.a.Children.toArray(i)), m.set(s, r)
						}
						return r
					}
				},
				u = Object(o.b)(() => Object(i.c)(d.c), d.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return S
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isFrontpage: u.y,
					isPredictionsPage: u.L,
					isProfilePostListing: u.I,
					isTopicPage: u.N,
					pageLayer: e => e
				})
			}
			const j = k(),
				_ = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(y.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(E.F)(e, t.listingName);
							return Object(v.k)(e, {
								subredditId: s
							})
						}
						return Object(C.P)(e, {
							...t
						})
					},
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: r,
						inSubredditOrProfile: n
					}) => {
						if (r) {
							const t = Object(E.F)(e, s);
							return Object(v.j)(e, {
								subredditId: t
							})
						}
						return Object(C.C)(e, t, s, n)
					}),
					subredditsById: E.ab,
					viewportDataLoaded: O.a,
					pageReferrer: u.R,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: g.d
				},
				I = Object(n.c)(_),
				S = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.I(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.x(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r) => {
						e(d.L(t, r))
					},
					trackOnPostExitedViewport: (t, s, r, n, o) => {
						e(d.M(t, r, n, o))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				P = Object(r.b)(I, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.g)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(j(P(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: d.S,
				hideNSFWPref: h.B,
				isActive: u.j,
				moderatorPermissions: m.j,
				modModeEnabled: d.Q,
				showEditFlair: p.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				}) => e(Object(i.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				})),
				handleVote: s => {
					const r = s === c.a.upvoted ? Object(o.bb)(t) : Object(o.u)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(o.X)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: r
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: r
				})
			}), {
				forwardRef: !0
			});
			t.a = b
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: s,
						disabled: r,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, s) => {
						const r = !(!t && !s);
						let n = "";
						return n = e ? r ? l.a.mDisabledRedditStyle : l.a.mDisabled : r ? l.a.mActiveRedditStyle : l.a.mActive
					})(r, i, a);
					return n.a.createElement(e, m({
						className: Object(o.a)(l.a.CheckboxIcon, d, s)
					}, c))
				},
				u = p(c.a),
				h = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? u : i.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(o.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(o.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			class o extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, o = s || r;
					return n.a.createElement("div", {
						className: e.className
					}, s && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !o && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => n.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return u
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = i.a.span("metaText", d.a),
				m = e => o.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...n
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
						}) : s ? c : r.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [r.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return o.a.createElement(l, n, d)
				},
				u = e => o.a.createElement(l, null, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? n.a.createElement(t, i) : void 0 !== s ? n.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !n
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
		"./src/reddit/helpers/search/hasSearchGrammar.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return /\b(author|subreddit|flair|nsfw|self|selftext|site|url):[^\b]+/.test(e)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
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
				h = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, s, n) => o => ({
					source: "report_prompt",
					noun: s,
					action: n,
					subreddit: r.subredditByName(o, e),
					post: r.post(o, t)
				}),
				o = (e, t, s, n) => o => ({
					source: "report_survey",
					noun: s,
					action: n,
					subreddit: r.subredditByName(o, e),
					post: r.post(o, t)
				})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"collapse":"expandoArrowCollapse",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "CollapseIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(o.b)("expandoMediaLightbox",e.isFilled)} ${e.className}`,
				onClick: e.onClick
			}), "LightboxIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Op/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return n.a.createElement("i", {
					className: `${Object(i.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(i.a, null, e.desc))
			}, "OpIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, n.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, n.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-left-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), r = i("b", t), a = i("c", t), c = i("d", t);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: r,
					cx: "18",
					cy: "18",
					r: "18"
				}), n.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, n.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), n.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), n.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), n.a.createElement("path", {
					id: a,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, n.a.createElement("use", {
					fill: o.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${r}`
				}), n.a.createElement("use", {
					fill: o.b.white,
					xlinkHref: `#${r}`
				})), n.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: o.b.white
				}, n.a.createElement("use", {
					xlinkHref: `#${a}`
				})), n.a.createElement("use", {
					fill: o.b.black,
					xlinkHref: `#${a}`
				}), n.a.createElement("g", {
					fill: o.b.alienblue,
					mask: `url(#${c})`
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-right-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), r = i("b", t), a = i("c", t), c = i("d", t);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: r,
					cx: "18",
					cy: "18",
					r: "18"
				}), n.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, n.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), n.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), n.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), n.a.createElement("path", {
					id: a,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, n.a.createElement("use", {
					fill: o.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${r}`
				}), n.a.createElement("use", {
					fill: o.b.white,
					xlinkHref: `#${r}`
				})), n.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: o.b.white
				}, n.a.createElement("use", {
					xlinkHref: `#${a}`
				})), n.a.createElement("use", {
					fill: o.b.black,
					xlinkHref: `#${a}`
				}), n.a.createElement("g", {
					fill: o.b.alienblue,
					mask: `url(#${c})`
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/SnooCrying/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 6 50 43"
			}, e), n.a.createElement("path", {
				d: "M38.89 17.7a3.37 3.37 0 0 1-3-.49 17.79 17.79 0 0 0-7.63-2.81 17.34 17.34 0 0 0-4.26-.07 48.12 48.12 0 0 0-5.83 1.38 26.66 26.66 0 0 0-3.08 1.53 2.24 2.24 0 0 1-1.34.23c-4.27-1.06-7.54.28-10 4-2.09 3.17-.74 8 1.58 9.76a2.39 2.39 0 0 1 .91 1.53 12.18 12.18 0 0 0 5 8.87c.16.13.33.24.49.35a25.65 25.65 0 0 0 5.52 2.81A24 24 0 0 0 25.61 46c2.74-.09 5.49-.1 8.06-1.18a22.6 22.6 0 0 0 6.25-4c2.21-2.67 4.31-5.45 4.62-9a11.29 11.29 0 0 1 1.64-4.91 4.66 4.66 0 0 0 .54-1.58c.79-4.74-3.49-9.23-7.83-7.63z"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M41.17 18.88a12.74 12.74 0 0 0-2.48 0c1.76 2.1 3.33 3.86 4 6.23-4-5.95-9.64-9.32-16.71-9.37A19.14 19.14 0 0 0 9 24.76c-.17-.53-.51-1-.38-1.3a9.3 9.3 0 0 1 4.18-4.51c-3-1.13-6.34.54-8 3.85-1.29 2.58-.52 6.08 1.74 7.5a18.14 18.14 0 0 1 .55-2.24 15.39 15.39 0 0 1 1-1.9.86.86 0 0 1 .07.69 12.41 12.41 0 0 0 .4 8.24 11.06 11.06 0 0 0 3.82 5.31c7.18 5.27 17.21 6.56 25.28.91a13.72 13.72 0 0 0 5.74-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29 1.12-.49 1.3-.9a6.06 6.06 0 0 0-3.98-7.95z"
			}), n.a.createElement("path", {
				d: "M32 37c-2.43-2.06-9.28-2.47-11.58.17-.55.63-1.87.06-.9-.76 3.77-3.18 9.79-3.13 12.76-.43.79.73.3 1.53-.28 1.02zM19.83 24.64a4.94 4.94 0 0 0-4-.8h-.07l-.17.06a2.72 2.72 0 0 0-.9.42v.1c-1.42 1.15-2.26 3.53-1.09 5.16a2.38 2.38 0 0 0 1.82.9 10.49 10.49 0 0 0 2 0 6.32 6.32 0 0 0 2.53-.74c.81-.38 1.16-.67 1.2-1.51a5.3 5.3 0 0 0-1.32-3.59zM37.58 25.53a4.65 4.65 0 0 0-4.51-1.76.37.37 0 0 0-.15 0h-.06l-.29.06c-.14 0-.16.1-.12.16a3.83 3.83 0 0 0-1.08 5.22 2.24 2.24 0 0 0 1.84.93 10.6 10.6 0 0 1 2.55.48 2.4 2.4 0 0 0 1.2.08c.9-.11 1.26-1.56 1.36-2.31a4.18 4.18 0 0 0-.74-2.86z"
			}), n.a.createElement("path", {
				fill: "#ff4500",
				d: "M17.34 29.52a10 10 0 0 1-1 .12c-1 .09-1.46.05-1.76-.84a2.88 2.88 0 0 1 1.82-3.64l.31-.08a2.62 2.62 0 0 1 3.14 2.67c0 1.92-1.53 1.6-2.51 1.77zM37 28.88c-.29 1.13-1.17 1.09-2.1.82a3.83 3.83 0 0 0-1.06-.15 1.61 1.61 0 0 1-1.77-1.5 2.62 2.62 0 0 1 1.55-3.11A3 3 0 0 1 37 27.11a3.24 3.24 0 0 1 0 1.77z"
			}), n.a.createElement("path", {
				d: "M26.55 9.48a2.79 2.79 0 0 0-2.42-1.7c-3.48-.29-6.76 1.65-8.87 3.32l-.34-.23a3.23 3.23 0 0 0-1.06-.58l-.45-.1a2.06 2.06 0 0 0-1 .1 3 3 0 0 0-1.41.54s-.37.31-.46.41A4.09 4.09 0 0 0 9.52 15a3 3 0 0 0 2.37 2.09 4 4 0 0 0 .87.1 3.42 3.42 0 0 0 2.76-1.35 3.8 3.8 0 0 0 .61-3.12 2.92 2.92 0 0 0-.21-.63h.05l.15-.13A16.39 16.39 0 0 1 21 9.17c2-.72 3.55-.32 4.22 1a4.15 4.15 0 0 1-.42 3.93.37.37 0 0 0 0 .36c.14.27.57.34.79.34a.57.57 0 0 0 .51-.22 5.9 5.9 0 0 0 .45-5.1z"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M10.82 13.06a2.9 2.9 0 0 1 2.4-1.66 1.79 1.79 0 0 1 .87.22 3.13 3.13 0 0 1 .2.3v.09a5.83 5.83 0 0 1 .53 1.38 2.58 2.58 0 0 1-.55 2 2.16 2.16 0 0 1-1.67 1 2.21 2.21 0 0 1-1.76-1.17 2.07 2.07 0 0 1-.02-2.16z"
			}), n.a.createElement("path", {
				fill: "#0079d3",
				d: "M14.53 29.43h-.05a3.3 3.3 0 0 0-3.27.77 1.49 1.49 0 0 0-.37 1.54c.19.53.93.65 1.4.73 1.34.21 3 .31 3.91-.84a1.46 1.46 0 0 0 .2-1.63c-.21-.43-1.4-.53-1.82-.57zM38.77 31.39c-.35-1-1.73-1.25-2.64-1.32H36a1.21 1.21 0 0 0-1.36 1.57c.08.39.83.8 1.15 1a4.16 4.16 0 0 0 1.62.42 1.41 1.41 0 0 0 1.24-.33 1.35 1.35 0 0 0 .12-1.34z"
			}), n.a.createElement("path", {
				fill: "#91cff6",
				d: "M13.26 32.13c-.66-.07-1.43-.15-1.52-.94-.13-1.06 1.26-1.64 2.08-1.4h.08a.57.57 0 0 0 .18 0c.66.06 1.42.17 1.45.94.04 1.27-1.39 1.49-2.27 1.4zM37.63 32.57c-.32.37-1.33-.25-1.59-.45a1 1 0 0 1-.46-.74c0-.18.17-1 .49-.88a.79.79 0 0 0 .41 0 1.6 1.6 0 0 1 1.27.71 1.16 1.16 0 0 1-.12 1.36z"
			}))
		},
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, n.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				p = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/JumpToContent/index.tsx"),
				h = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				b = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				x = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/covid.ts"),
				v = s("./src/reddit/constants/page.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/correlationIdTracker.ts"),
				O = s("./src/reddit/helpers/trackers/searchResults.ts"),
				k = s("./src/reddit/layout/page/Listing/index.tsx"),
				j = s("./src/reddit/selectors/experiments/railsSearchResults.ts"),
				_ = s("./src/reddit/selectors/meta.ts"),
				I = s("./src/reddit/selectors/searchResults.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/pages/SearchResults/index.m.less"),
				w = s.n(P);
			const N = 3e3,
				T = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				L = Object(C.t)({
					currentPageUrl: C.e,
					queryParams: C.T,
					shouldShowCovidBanner: C.X
				}),
				M = () => Object(d.c)({
					headerContent: I.a,
					isInFollowExperiment: j.a,
					origin: _.j,
					subreddit: (e, t) => Object(S.A)(e, {
						subredditName: t.match.params.subredditName
					}),
					viewTreatment: I.i
				}),
				F = e => ({
					searchViewedTrigger: () => e(Object(p.f)())
				}),
				R = Object(c.b)(M, F);
			class A extends a.a.Component {
				constructor(e) {
					super(e), this.renderCovidBanner = () => {
						const {
							queryParams: e,
							sendEvent: t
						} = this.props, s = s => t(Object(O.b)(s, Object(m.c)(o()(e || {}, y.t))));
						return this.state.didSendCovidSeenEvent || (s("view"), this.setState({
							didSendCovidSeenEvent: !0
						})), a.a.createElement(T, {
							announcement: g.a,
							className: w.a.announcement,
							onBtnClick: () => s("click"),
							onClose: () => {
								s("dismiss"), this.setState({
									isCovidBannerHidden: !0
								})
							}
						})
					}, this.state = {
						didSendCovidSeenEvent: !1,
						isCovidBannerHidden: !1
					}, this.triggerTimeoutId = 0
				}
				componentDidMount() {
					Object(E.c)(E.a.SearchResults) || Object(E.d)(E.a.SearchResults), this.triggerTimeoutId = window.setTimeout(() => this.props.searchViewedTrigger(), N)
				}
				componentWillUnmount() {
					Object(E.b)(E.a.SearchResults), window.clearTimeout(this.triggerTimeoutId)
				}
				componentDidUpdate(e) {
					this.props.queryParams !== e.queryParams && this.setState({
						didSendCovidSeenEvent: !1,
						isCovidBannerHidden: !1
					}), this.props.queryParams && e.queryParams && this.props.queryParams[y.p] !== e.queryParams[y.p] && (Object(E.b)(E.a.SearchResults), Object(E.d)(E.a.SearchResults))
				}
				render() {
					const {
						currentPageUrl: e,
						headerContent: t,
						isInFollowExperiment: s,
						location: r,
						match: n,
						origin: i,
						queryParams: c,
						shouldShowCovidBanner: d,
						subreddit: p,
						viewTreatment: f
					} = this.props, {
						isCovidBannerHidden: g
					} = this.state, C = n.params.subredditName || n.params.multiredditName || "", E = n.params.username, O = Object(m.c)(o()(c || {}, y.t)), j = {
						...O,
						sort: O.category ? l.Qb.Relevance : O.sort,
						t: O.category ? l.Yb.DAY : O.t
					}, _ = Object(m.b)(C, E, j);
					let I;
					return I = p && O.restrict_sr || 1 === j.type.length && j.type[0] === l.Sb.Posts ? v.g.Posts : j.type.length > 0 && -1 === j.type.indexOf(l.Sb.Posts) && (j.type.indexOf(l.Sb.Subreddits) > -1 || j.type.indexOf(l.Sb.Users) > -1) ? v.g.Listings : v.g.Top, a.a.createElement(k.a, {
						className: this.props.className,
						navBar: a.a.createElement(b.a, {
							currentPageUrl: `${i}${e}`,
							headerContent: t,
							isInFollowExperiment: s,
							location: r,
							searchOptions: j,
							subreddit: p,
							tab: I,
							viewTreatment: f
						}),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(u.a, null), d && !g && this.renderCovidBanner(), a.a.createElement(h.a, {
							listingKey: _,
							listingName: C,
							location: r,
							searchOptions: j,
							tab: I
						})),
						sidebar: a.a.createElement(x.a, {
							className: w.a.sidebar,
							listingKey: _,
							listingName: C || v.b,
							searchOptions: j,
							tab: I
						})
					})
				}
			}
			t.default = L(R(Object(f.c)(A)))
		},
		"./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(n.a)(r.wb)
		},
		"./src/reddit/selectors/experiments/railsSearchResults.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => r.dd.Treatment1 === Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: r.Tc
			})
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			}));
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.T)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = (e, t) => {
					const s = p(e, t);
					if (!s) return l;
					const r = Object(o.X)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.T)(e, {
						subredditId: s
					}) : null
				},
				u = (e, t, s, r, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							o = s[t],
							i = o && Object(n.F)(e, {
								postId: r
							}) || null,
							a = o && Object(n.F)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const r = t.slice().sort();
					let o = -1;
					const i = Object(n.y)(e, {
							listingKey: s
						}),
						a = [];
					return h.forEach(t => {
						let s = o + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !u(e, s, t, i, r);) s += 1;
							s < i.length && (a.push(s), o = s)
						}
					}), a
				},
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.I)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.f1e486f06661604a1eec.js.map