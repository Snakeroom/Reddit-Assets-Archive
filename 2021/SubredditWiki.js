// https://www.redditstatic.com/desktop2x/SubredditWiki.099a53108faf89df2721.js
// Retrieved at 12/2/2021, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki", "reddit-components-ContentGate"], {
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
					var r, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						d = !o && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						x = !a && !u && !m && !p && /linux/i.test(t),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						k = !y && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (r.msedge = e, r.version = g) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, v && (r.version = v)) : i ? (r = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, v && (r.version = v)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var O = "";
					r.windows ? O = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? O = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? O = (O = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? O = (O = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? O = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? O = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? O = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? O = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (O = n(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (r.osversion = O);
					var E = !r.windows && O.split(".")[0];
					return y || d || "ipad" == i || a && (3 == E || E >= 4 && !k) || r.silk ? r.tablet = e : (k || "iphone" == i || "ipod" == i || a || o || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function i(e) {
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

				function a(e, s, r) {
					var a = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (a = t(r));
					var o = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([o, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = i, n.check = function(e, t, n) {
					return !a(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, r, i) {
				for (var a = -1, o = s(n((t - e) / (r || 1)), 0), d = Array(o); o--;) d[i ? o : ++a] = e, e += r;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, i) {
					n = s ? (s = !1, e) : t(n, e, r, i)
				})), n
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && r(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), s(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				o = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = o(e) ? s : a,
					c = arguments.length < 3;
				return d(e, i(t, 4), n, c, r)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				o = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > a) return [];
				var n = o,
					c = d(e, o);
				t = r(t), e -= o;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: a
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				i = "INCONTEXT__MUTED",
				a = Object(s.a)(r),
				o = Object(s.a)(i)
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts"),
				i = n("./src/reddit/helpers/trackers/screenview.ts"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const n = t(),
					{
						currentPage: d
					} = n.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(s.a)(n),
					u = Object(r.b)(c, n, l);
				u && a.c.has(u) && Object(i.k)(c, n, o.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), n.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), n.d(t, "subredditWikiDataFailed", (function() {
				return Ve
			})), n.d(t, "fetchSubredditWikiData", (function() {
				return Je
			})), n.d(t, "handleWikiRedirects", (function() {
				return Ye
			})), n.d(t, "subredditWikDataRequested", (function() {
				return Qe
			})), n.d(t, "subredditWikiPageRequested", (function() {
				return Xe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEmpty.js"),
				i = n.n(r),
				a = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				m = n("./src/reddit/helpers/path/index.ts");
			var p = n("./src/reddit/actions/ads/index.ts"),
				b = n("./src/reddit/actions/pages/subreddit.ts"),
				h = n("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				g = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				v = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				k = n("./src/redditGQL/operations/WikiComparisonDiff.json");
			var _ = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				O = n("./src/reddit/selectors/subredditWiki.ts");
			const E = Object(d.a)("WIKI_DIFF_PENDING"),
				w = Object(d.a)("WIKI_DIFF_LOADED"),
				C = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, n, s) => {
					const r = n(),
						i = Object(_.a)(e),
						a = Object(O.i)(r, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(E(d));
					const c = await ((e, t) => Object(v.a)(e, {
						...k,
						variables: {
							...t,
							comparisonRevisionId: Object(y.b)(t.comparisonRevisionId),
							revisionId: Object(y.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							n = t && t.page && t.page.revisionComparisonDiffHtml;
						n ? u = n : l = {
							type: o.I.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.I.UNKNOWN_ERROR
					};
					return t(l ? C({
						...d,
						error: l
					}) : w({
						...d,
						htmlDiff: u
					})), !l
				};
			var I = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				N = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/constants/wiki.ts"),
				P = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				B = n("./src/reddit/helpers/brandSafety/index.ts"),
				L = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				U = n("./src/lib/initializeClient/installReducer.ts"),
				A = n("./node_modules/redux/es/redux.js");
			const W = {};
			var H = (e = W, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: n,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[n]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var q = (e = K, t) => {
					switch (t.type) {
						case h.b:
							const n = t.payload,
								{
									subredditWiki: s,
									options: r
								} = n,
								i = s && s.directory;
							if (!i) return e;
							const {
								subredditName: a
							} = r;
							return {
								...e, [a.toLowerCase()]: i
							};
						default:
							return e
					}
				},
				G = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const V = {};
			var z = (e = V, t) => {
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: n,
								pageKey: s
							} = t.payload, {
								page: r
							} = n;
							return s && r ? {
								...e,
								[s]: r
							} : e
						}
						case G.a: {
							const {
								pageKey: n,
								page: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				J = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Y = {};
			var Q = (e = Y, t) => {
					switch (t.type) {
						case J.c: {
							const {
								settings: n,
								pageKey: s
							} = t.payload;
							return n ? {
								...e,
								[s]: n
							} : e
						}
						case J.d: {
							const {
								isVisible: n,
								editPermissions: s,
								pageKey: r
							} = t.payload, i = e[r];
							return i ? {
								...e,
								[r]: {
									...i,
									isVisible: n,
									editPermissions: s
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: n,
								afterToken: s,
								pageKey: r
							} = t.payload, i = e[r];
							if (!i) return e;
							const a = [...i.editorsInfo, ...n];
							return {
								...e,
								[r]: {
									...i,
									editorsInfo: a,
									afterToken: s
								}
							}
						}
						case J.a: {
							const {
								username: n,
								pageKey: s
							} = t.payload, r = e[s];
							if (!r) return e;
							const i = r.editorsInfo.filter(e => e.username !== n);
							return {
								...e,
								[s]: {
									...r,
									editorsInfo: i
								}
							}
						}
						default:
							return e
					}
				},
				X = n("./src/lib/omitKey/index.ts");
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case G.b: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case G.d:
					case G.c: {
						const {
							key: n
						} = t.payload;
						return Object(X.a)(e, n)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case G.d:
						case G.b:
						case G.c: {
							const {
								key: n
							} = t.payload, s = t.type === G.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ne = Object(A.c)({
					error: $,
					pending: te
				}),
				se = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const re = {};
			var ie = (e = re, t) => {
				switch (t.type) {
					case G.c: {
						const {
							key: n,
							options: s,
							pageInfo: r,
							revisionsIds: i
						} = t.payload, a = e[n], o = s.after && a ? [...a.ids, ...i] : i;
						return {
							...e,
							[n]: {
								ids: o,
								pageInfo: r
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: n
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: r
						} = t.payload, i = e[s];
						return i && n ? {
							...Object(X.a)(e, r),
							[s]: {
								...i,
								ids: [n.id, ...i.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, r = {
							...e
						};
						return delete r[n], delete r[s], r
					}
					default:
						return e
				}
			};
			const ae = {};
			var oe = (e = ae, t) => {
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: {
									page: n
								}
							} = t.payload, s = n && n.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case G.c: {
							const {
								revisions: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						case G.a: {
							const {
								page: n
							} = t.payload, s = n.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case G.e: {
							const {
								revisionId: n,
								isHidden: s
							} = t.payload, r = e[n];
							return r ? {
								...e,
								[n]: {
									...r,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(A.c)({
					api: ne,
					listings: ie,
					models: oe
				}),
				ce = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = (e = le, t) => {
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = (e = me, t) => {
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(X.a)(e, n)
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				fe = Object(A.c)({
					error: pe,
					pending: he
				});
			const xe = {};
			var ge = (e = xe, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload, r = Object(X.a)(e[n], s);
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				ve = n("./node_modules/lodash/uniq.js"),
				ye = n.n(ve);
			const ke = {};
			var _e = (e = ke, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ye()([...e[n] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ye()([...s, ...e[n] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Oe = Object(A.c)({
					afterToken: ue,
					api: fe,
					models: ge,
					userOrder: _e
				});
			const Ee = {};
			var we = (e = Ee, t) => {
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Ce = Object(A.c)({
					listing: Oe,
					search: we
				}),
				je = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ie = {};
			var Ne = (e = Ie, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Te = (e = Se, t) => {
				switch (t.type) {
					case je.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(X.a)(e, n)
					}
					default:
						return e
				}
			};
			const Pe = {};
			var Be = (e = Pe, t) => {
					switch (t.type) {
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === je.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Le = Object(A.c)({
					error: Te,
					pending: Be
				});
			const Re = {};
			var De = (e = Re, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							contributors: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.e: {
						const {
							subredditName: n,
							contributor: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.f: {
						const {
							subredditName: n,
							userId: s
						} = t.payload, r = Object(X.a)(e[n], s);
						return {
							...e,
							newState: r
						}
					}
					default:
						return e
				}
			};
			const Fe = {};
			var Me = (e = Fe, t) => {
					switch (t.type) {
						case je.c:
						case je.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ye()([...e[n] || [], ...s])
							}
						}
						case je.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: [...s, ...e[n] || []]
							}
						}
						case je.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ue = Object(A.c)({
					afterToken: Ne,
					api: Le,
					models: De,
					userOrder: Me
				});
			const Ae = {};
			var We = (e = Ae, t) => {
					switch (t.type) {
						case je.g: {
							const {
								subredditName: n,
								contributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				He = Object(A.c)({
					listing: Ue,
					search: We
				}),
				Ke = Object(A.c)({
					diff: H,
					directory: q,
					pages: z,
					pageSettings: Q,
					revisions: de,
					wikiBannedContributors: Ce,
					wikiContributors: He
				});
			Object(U.a)({
				pages: {
					subredditWiki: Ke
				}
			});
			const qe = Object(d.a)(h.c),
				Ge = Object(d.a)(h.b),
				Ve = Object(d.a)(h.a),
				ze = (e, t) => !!Object(O.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, n, r) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === T.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(L.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(qe({
						options: l,
						pageKey: u
					}));
					const m = await Object(P.a)(r.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(Ge({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(Ve({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.I.NOT_FOUND_ERROR
						}
					})), a && t(Object(f.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: R.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
				}, Ye = e => async (t, n) => {
					const {
						params: s,
						url: r
					} = e, {
						wikiPageName: i
					} = s, o = Object(F.a)(r, s);
					let d = !1;
					return T.l.includes(i || "") ? (await (async (e, t) => {
						const n = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = n
					})(e.url), d = !0) : r !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Qe = (e, t, n = !1) => async (r, i, a) => {
					const {
						subredditName: d = T.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, m = t[S.D], p = t[S.E], h = m ? Object(y.a)(m) : void 0, v = p ? Object(y.a)(p) : void 0, k = l === T.j, _ = u === T.m.Revisions;
					let E = !1,
						w = !1;
					if (n) {
						const {
							pageName: t
						} = e;
						E = t === o.dc.WikiContributors, w = t === o.dc.WikiBanned
					}
					const C = i(),
						P = (k || n) && !ze(C, d),
						B = !!l && !((e, t, n, s) => {
							return n === T.j ? ze(e, t) : !!Object(O.c)(e, {
								subredditName: t,
								wikiPageName: n,
								revisionId: s
							})
						})(C, d, l, h),
						L = [];
					L.push(r(((e, t = !1) => async (n, s) => {
						const r = s(),
							i = {
								sort: o.W.HOT
							},
							a = Object(c.a)(e, i.sort),
							d = r.listings.postOrder.api.error[a],
							l = r.listings.postOrder.api.pending[a],
							u = !!r.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await n(Object(b.subredditDataRequested)(a, e, i, t)), !s().listings.postOrder.api.error[a])
					})(d))), (P || B) && L.push(r(Je({
						includeDirectory: P,
						includePageData: B,
						revisionId: h,
						subredditName: d,
						wikiPageName: l
					}))), u === T.m.Settings && l && L.push(r(Object(I.c)(d, l))), l && h && v && L.push(r(j({
						comparisonRevisionId: v,
						revisionId: h,
						subredditName: d,
						wikiPageName: l
					}))), _ && L.push(r(Object(N.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), E && L.push(r(Object(g.e)(d))), w && L.push(r(Object(x.e)(d))), (await Promise.all(L)).every(Boolean) || r(Object(f.f)({
						kind: R.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Qe(e, t, n)
					}))
				}, Xe = e => async (t, n) => {
					if (await t(Ye(e))) return;
					const {
						params: s,
						queryParams: r
					} = e, i = s.subredditName || T.e;
					t(u.m({
						title: s.wikiPageName ? `${s.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Qe(s, r));
					const a = Object(M.v)(n(), {
							subredditName: i
						}),
						o = n();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(D.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(B.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(a.w),
				f = Object(r.a)(a.x),
				x = Object(r.a)(a.v),
				g = (e, t, n) => async (s, r, i) => {
					const a = Object(p.v)(r(), {
						subredditName: e
					});
					if (a) return y(a, t, n)(s, r, i)
				}, v = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, n) => async (r, a, p) => {
					const g = await Object(l.e)(t);
					r(h());
					const y = a();
					try {
						await Object(i.g)("communityIcon", g, e.id)(r, a, p)
					} catch (_) {
						return Object(b.a)(Object(c.c)(y, "something went wrong with the uploading the image")), r(Object(o.f)({
							kind: u.b.Error,
							text: v()
						})), void r(x())
					}
					const k = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!k) return Object(b.a)(Object(c.c)(y, "image is null")), r(Object(o.f)({
						kind: u.b.Error,
						text: v()
					})), void r(x());
					await Object(i.k)(e.id, {
						communityIcon: k
					}, d.b.idCard, n)(r, a, p), r(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(f())
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				c = n("./src/reddit/models/Subreddit/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(a.u),
				m = Object(r.a)(a.t),
				p = Object(r.a)(a.s),
				b = e => {
					switch (e) {
						case c.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case c.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case c.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const h = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: n,
				undoCallback: r
			}) => async (a, h, {
				gqlContext: f
			}) => {
				var x, g, v;
				a(m());
				const y = (e => {
						switch (e) {
							case c.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case c.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case c.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					k = await Object(d.b)(f(), e, y);
				if ((null === (g = null === (x = k.error) || void 0 === x ? void 0 : x.fields) || void 0 === g ? void 0 : g.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(k.body) && (null === (v = k.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return a(p()), a(Object(o.f)({
					kind: l.b.Error,
					text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				k.ok && (a(u({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), n && n(), a(r ? Object(o.f)(Object(o.e)(b(t), l.b.Undo, s.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(i.i)(e, r))) : Object(o.f)(Object(o.e)(b(t), l.b.SuccessCommunityGreen))))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return se
			})), n.d(t, "b", (function() {
				return ae
			})), n.d(t, "e", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				i = n.n(r),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				f = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(x.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var v = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				I = n("./node_modules/redux/es/redux.js");
			var N = (e = null, t) => {
				switch (t.type) {
					case C.o:
					case C.n:
						return null;
					case C.m:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var T = (e = S, t) => {
					switch (t.type) {
						case C.o: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(y.d)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case C.n:
						case C.m: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(y.d)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				P = Object(I.c)({
					error: N,
					pending: T
				});
			const B = {};
			var L = (e = B, t) => {
					switch (t.type) {
						case C.n: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, r = Object(y.d)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				R = n("./src/reddit/actions/inContextModeration.ts");
			var D = (e = null, t) => {
				switch (t.type) {
					case R.a:
						return t.payload;
					default:
						return e
				}
			};
			const F = {};
			var M = (e = F, t) => {
					switch (t.type) {
						case C.n: {
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
				U = n("./node_modules/icepick/icepick.js");
			const A = {};
			var W = (e = A, t) => {
				switch (t.type) {
					case C.l:
					case C.n: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(U.merge)(e, {
							[n]: s
						})
					}
					case C.s: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(U.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var H = (e = null, t) => {
				switch (t.type) {
					case C.r:
					case C.q:
						return null;
					case C.p:
						return t.payload;
					default:
						return e
				}
			};
			var K = (e = !1, t) => {
					switch (t.type) {
						case C.r:
							return !0;
						case C.q:
						case C.p:
							return !1;
						default:
							return e
					}
				},
				q = Object(I.c)({
					error: H,
					pending: K
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case C.r:
						case C.p:
							return null;
						case C.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				V = Object(I.c)({
					api: q,
					result: G
				});
			const z = {};
			var J = (e = z, t) => {
					switch (t.type) {
						case C.n: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case C.s: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case C.l: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload, r = s[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Y = Object(I.c)({
					api: P,
					fetchedTokens: L,
					inContext: D,
					loadMore: M,
					models: W,
					search: V,
					userOrder: J
				});
			Object(j.a)({
				features: {
					banned: Y
				}
			});
			const Q = Object(a.a)(C.o),
				X = Object(a.a)(C.n),
				Z = Object(a.a)(C.m),
				$ = (e, t = {}) => async (n, s, {
					apiContext: r
				}) => {
					const i = s(),
						a = t.after || "",
						o = Object(y.d)(e, a),
						d = i.features.banned.fetchedTokens[o];
					if (i.features.banned.api.pending[o] || d) return;
					n(Q({
						subredditId: e,
						fetchedToken: a
					}));
					const c = i.subreddits.models[e].name,
						l = await g(r(), c, t);
					l.ok ? n(X({
						...l.body,
						fetchedToken: a
					})) : n(Z({
						subredditId: e,
						fetchedToken: a
					}))
				}, ee = Object(a.a)(C.r), te = Object(a.a)(C.q), ne = Object(a.a)(C.p), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const i = s().subreddits.models[e].name,
						a = {
							username: Object(v.a)(t)
						};
					n(ee());
					const o = await g(r(), i, a);
					o.ok ? n(te(o.body)) : n(ne(o.error))
				}, re = Object(a.a)(C.l), ie = Object(a.a)(C.s), ae = (e, t, n) => async (r, a, {
					apiContext: d
				}) => {
					const c = a(),
						u = c.subreddits.models[e].url,
						f = c.subreddits.models[e].name;
					t.username = Object(v.a)(t.username), r(Object(o.h)(n));
					const x = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(d(), u, t);
					if (x.ok) {
						r(Object(o.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: k.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await g(d(), f, e);
						i.ok && r(re(i.body))
					} else {
						r(Object(o.f)(n, x.error));
						const e = i()(x, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: k.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const o = r().subreddits.models[e].url,
						d = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(a(), o, t);
					if (d.ok) n(ie({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: k.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(d, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: k.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, s) => {
					const r = s();
					await Promise.all([(async () => {
						if (!Object(_.b)(u.a.BAN_USER)(r) && !Object(E.M)(r, {
								subredditId: e
							})) {
							const t = Object(E.P)(r, {
								subredditId: e
							});
							await n(Object(c.o)(t.name))
						}
					})(), (async () => {
						const s = Object(w.nb)(r, {
							userName: t
						});
						if (!s) return;
						const i = Object(O.h)(r, {
							subredditId: e
						});
						i && i[s.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				r = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, r = [], i = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n,
							editWikiBanInfo: s
						} = e.node;
						n.id && n.name && n.icon && (i[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, r.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: i,
						userOrder: r
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const f = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				g = Object(i.a)(h.b),
				v = e => async (t, n, s) => {
					t(f({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(s.gqlContext(), i);
					if (a.ok) {
						const n = a.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = a.error || {
							type: r.I.UNKNOWN_ERROR
						};
						t(g({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, y = Object(i.a)(h.a), k = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(y({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: k(e, t)
					}));
					return d.ok
				}, _ = Object(i.a)(h.e), O = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: r.jb.POST,
						data: {
							api_type: "json",
							name: n.username,
							type: "wikibanned",
							duration: n.duration,
							ban_reason: n.banReason,
							note: n.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(a.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const r = {
								subredditName: e,
								username: t.username
							},
							i = (await m(d.gqlContext(), r)).body;
						if (i.data.subreddit.wiki) {
							const t = p(i.data.subreddit.wiki);
							n(_({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === r.I.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), n(Object(a.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, E = Object(i.a)(h.f), w = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: r.jb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(a.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), n(E({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t)
					})), u.ok
				}, C = Object(i.a)(h.g), j = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								r = Object.keys(s.bannedContributors)[0];
							n(C({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[r]
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				r = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, r = [], i = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n
						} = e.node;
						n.id && n.name && n.icon && (i[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t
						}, r.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: i,
						userOrder: r
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const f = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				g = Object(i.a)(h.b),
				v = e => async (t, n, s) => {
					t(f({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(s.gqlContext(), i);
					if (a.ok) {
						const n = a.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = a.error || {
							type: r.I.UNKNOWN_ERROR
						};
						t(g({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, y = Object(i.a)(h.a), k = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(y({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: k(e, t)
					}));
					return d.ok
				}, _ = Object(i.a)(h.e), O = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: r.jb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(a.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const r = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), r)).body;
						if (o.data.subreddit.wiki) {
							const t = p(o.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || n(_({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === r.I.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === r.I.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), n(Object(a.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, E = Object(i.a)(h.f), w = (e, t) => async (n, i, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: r.jb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(a.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), n(E({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t)
					})), u.ok
				}, C = Object(i.a)(h.g), j = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								r = Object.keys(s.contributors)[0];
							n(C({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[r]
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				r = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "d", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/subredditSettings.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = n("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const b = (e, t) => Object(c.a)(e, {
					...p,
					variables: t
				}),
				h = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var f = e => {
					const {
						editPermissions: t,
						editorsInfo: n,
						isVisible: s
					} = e, {
						edges: r,
						pageInfo: i
					} = n, a = [];
					return r.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: s,
						afterToken: i.hasNextPage ? i.endCursor : null
					}
				},
				x = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const k = Object(i.a)(y.c),
				_ = (e, t) => async (n, s, r) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(r.gqlContext(), i),
						d = Object(v.A)(s(), e);
					if (Object(v.R)(s(), d) || await n(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = f(t.page.settings);
							n(k({
								pageKey: Object(x.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, O = Object(i.a)(y.b), E = (e, t, n) => async (r, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: n
						},
						c = await b(a.gqlContext(), d);
					if (c.ok) {
						const n = c.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s && s.page) {
							const n = f(s.page.settings),
								{
									editorsInfo: i,
									afterToken: a
								} = n;
							r(O({
								editorsInfo: i,
								afterToken: a,
								pageKey: Object(x.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else r(Object(o.f)({
						kind: g.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t, n)
					}));
					return c.ok
				}, w = Object(i.a)(y.d), C = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: n,
					subredditName: s
				}) => async (i, a, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: r.jb.POST,
						data: {
							permlevel: h[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: o.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: n,
						subredditName: s
					});
					return c.ok && i(w({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(x.a)({
							wikiPageName: n,
							subredditName: s
						})
					})), c.ok
				}, j = ({
					subredditName: e,
					username: t,
					wikiPageName: n
				}) => async (i, a, c) => {
					const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: r.jb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: c.apiContext(),
						wikiPageName: n,
						subredditName: e,
						username: t
					});
					if (m.ok) i(Object(o.f)({
						kind: g.b.SuccessCommunity,
						text: "User successfully added"
					})), await i(_(e, n));
					else if (m.error) {
						const e = m.error.type;
						let t = s.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === r.I.NOT_FOUND_ERROR && (t = s.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), i(Object(o.f)({
							kind: g.b.Error,
							text: t
						}))
					}
					return m.ok
				}, I = Object(i.a)(y.a), N = ({
					subredditName: e,
					username: t,
					wikiPageName: n
				}) => async (s, i, a) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: r.jb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: a.apiContext(),
						wikiPageName: n,
						subredditName: e,
						username: t
					});
					return c.ok && (s(Object(o.f)({
						kind: g.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), s(I({
						username: t,
						pageKey: Object(x.a)({
							wikiPageName: n,
							subredditName: e
						})
					}))), c.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = "WIKI_REVISIONS_PENDING",
				r = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/WikiRevisions.json");
			var l = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				p = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: r.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: r.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var f = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						n = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!n) throw new Error("Invalid response");
					return (e => {
						const t = {},
							n = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, n.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: n
						}
					})(n)
				},
				x = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				g = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/subredditWiki.ts"),
				k = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const _ = Object(i.a)(k.d),
				O = Object(i.a)(k.c),
				E = Object(i.a)(k.b),
				w = e => async (t, n, i) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = n(), h = Object(x.a)(e), g = Object(y.p)(b, {
						listingKey: h
					});
					if (!o && !!g) return !0;
					const k = g && g.pageInfo.endCursor || void 0;
					if (!(!g || g.pageInfo.hasNextPage)) return !0;
					const C = {
							after: k,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						j = {
							key: h,
							options: C
						};
					t(_(j));
					const I = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(i.gqlContext(), C);
					if (I.ok) {
						const e = I.body;
						if (e.data.subreddit) {
							const n = f(e.data);
							t(O({
								...j,
								...n
							}))
						}
					} else {
						const n = I.error || {
							type: r.I.UNKNOWN_ERROR
						};
						t(E({
							...j,
							error: n
						})), l && t(Object(a.f)({
							kind: v.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: w(e)
						}))
					}
					return I.ok
				}, C = Object(i.a)(k.a), j = e => async (t, n, r) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(g.a)({
						...e,
						revisionId: void 0
					}), l = Object(x.a)({
						...e,
						isRecent: !1
					}), u = Object(x.a)({
						...e,
						isRecent: !0
					}), m = Object(y.p)(n(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(r.apiContext(), e)).ok) {
						const e = (await Object(o.a)(r.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							n = e.data.subreddit && e.data.subreddit.wiki,
							m = n && n.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.f)({
							kind: v.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(C({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: i,
							wikiPageName: d
						}))
					} else t(Object(a.f)({
						kind: v.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, I = Object(i.a)(k.e), N = e => async (t, n, r) => {
					const i = await b(r.apiContext(), e);
					if (i.ok) {
						const n = i.body.status;
						t(I({
							revisionId: e.revisionId,
							isHidden: n
						}))
					} else t(Object(a.f)({
						kind: v.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, n) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/hooks/useClickSourceData.ts"),
				c = n("./src/reddit/components/AuthorLink/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(i.a)(e.className, l.a.authorLinkStyles, {
						[l.a.isLivestreaming]: e.isLivestreaming,
						[l.a.isStrong]: e.isStrong,
						[l.a.isUnstyled]: e.isUnstyled
					}),
					n = Object(d.a)();
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? r.a.createElement("a", {
					className: t,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? r.a.createElement("span", {
					className: Object(i.a)(l.a.deletedAuthorLink, e.className)
				}, e.children) : r.a.createElement(o.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: n
					}
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: a,
				priority: o,
				Icon: d,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: h,
				children: f
			}) => {
				return i.a.createElement(c.t, {
					onClick: t => {
						if (b && b(t), e(), p === s.awardNotification) return h();
						r(Object(l.b)(a))
					},
					className: n,
					text: t,
					priority: o,
					Icon: d,
					redditStyle: u,
					isFullWidth: m
				}, f)
			};
			u.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(o.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(o.a)(n))
				}
			}));
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subredditTitle: "_8eiyc5qzybrCg1tKBvgsm",
				icon: "_28KZtJenmDKbbe4nGYKwSQ",
				SubredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				subredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				DefaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				defaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/notifications.ts"),
				m = n("./src/reddit/actions/subredditWelcomeMessage.ts"),
				p = n("./src/lib/combineRefs/index.tsx"),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				h = n("./src/lib/hooks/useTooltip.ts"),
				f = n("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				x = n("./src/reddit/models/Subreddit/index.ts");
			const g = e => {
					switch (e) {
						case x.b.FREQUENT:
							return "notification_frequent";
						case x.b.OFF:
							return "notification_off";
						case x.b.LOW:
						default:
							return "notification"
					}
				},
				v = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				y = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var k = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/controls/Dropdown/Row.tsx"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				w = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				C = n.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => {
					return r.a.createElement(_.a, {
						id: e.dropdownId,
						className: C.a.notificationDropdown
					}, [{
						displayText: k.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.b.FREQUENT),
						isSelected: e.notificationLevel === x.b.FREQUENT,
						icon: r.a.createElement(E.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.b.FREQUENT
						})
					}, {
						displayText: k.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.b.LOW),
						isSelected: e.notificationLevel === x.b.LOW,
						icon: r.a.createElement(E.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.b.LOW
						})
					}, {
						displayText: k.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.b.OFF),
						isSelected: e.notificationLevel === x.b.OFF,
						icon: r.a.createElement(E.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.b.OFF
						})
					}].map(e => r.a.createElement(O.b, j({
						className: Object(o.a)(C.a.notificationDropdown, C.a.notificationRow, {
							[C.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				N = n("./src/reddit/controls/Button/index.tsx"),
				S = n("./src/reddit/selectors/telemetry.ts");
			const T = e => t => ({
				...S.defaults(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: S.subreddit(t)
			});
			var P = n("./src/reddit/hooks/useTracking.ts"),
				B = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const L = c.a.img("SubredditIcon", C.a),
				R = c.a.wrapped(B.a, "DefaultIcon", C.a);
			var D = ({
					subredditName: e,
					shouldShowSubredditIcon: t,
					subredditIcon: n,
					onHide: s,
					onUpdate: i
				}) => {
					const a = Object(P.a)(),
						o = t ? r.a.createElement(L, {
							src: n || void 0
						}) : r.a.createElement(R, null),
						d = `r/${e}`;
					return r.a.createElement("div", {
						className: C.a.notificationPopup
					}, r.a.createElement("div", {
						className: C.a.title
					}, r.a.createElement("h2", null, k.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, k.fbt._("{subreddit name}", [k.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), r.a.createElement("div", {
						className: C.a.subredditWrapper
					}, r.a.createElement("div", {
						className: C.a.subredditTitle
					}, o, r.a.createElement("span", null, d), r.a.createElement(E.a, {
						name: "notification_frequent",
						className: C.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(N.t, {
						className: C.a.subscribeButton,
						priority: N.c.Primary,
						size: N.d.M,
						text: k.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							s(), i(x.b.FREQUENT), a(T(x.b.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: C.a.hideButton,
						onClick: s
					}, k.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				F = n("./src/reddit/helpers/localStorage/index.ts");
			var M = e => {
					const t = Object(i.d)(),
						n = Object(P.a)(),
						a = Object(h.b)(v),
						o = Object(h.b)(y),
						[d, c] = function(e, t) {
							const [n, r] = Object(s.useState)(Object(F.M)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(F.a)(e, t);
								r(n)
							}, [e, t, r])]
						}(e.userId, e.subredditId);
					Object(s.useEffect)(() => {
						e.notificationLevel !== x.b.LOW && e.notificationLevel !== x.b.OFF || c()
					}, [e.subredditId]);
					const l = 2 === d,
						m = () => {
							a.hide()
						},
						k = () => {
							o.hide()
						};
					Object(s.useEffect)(() => (l && (o.update && o.update(), o.show()), () => {
						k(), m()
					}), [e.subredditName, l]);
					const _ = () => {
							k(), a.show()
						},
						O = (e => `dropdown-${e}`)(e.subredditName),
						w = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(O, m);
					const j = Object(s.useCallback)(e => {
							e.stopPropagation(), a.visible ? m() : _()
						}, [m, _, a.visible]),
						N = Object(s.useCallback)(t => {
							t === x.b.FREQUENT && Object(F.Z)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						S = Object(s.useCallback)(s => {
							const {
								subredditId: r
							} = e;
							m(), k(), t(Object(u.b)({
								subredditId: r,
								notificationLevel: s,
								successCallback: () => N(s)
							})), n(T(s.toLowerCase()))
						}, [m, e.subredditId, t, n]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: C.a.notificationButton,
						ref: Object(p.a)(a.target.ref, o.target.ref),
						onClick: j,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(E.a, {
						name: g(e.notificationLevel),
						className: C.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(f.a, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: O
					}, r.a.createElement(I, {
						dropdownId: O,
						notificationLevel: e.notificationLevel,
						onClick: S
					})), l && r.a.createElement(f.a, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: w,
						className: C.a.popupTooltip
					}, r.a.createElement(D, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: k,
						onUpdate: S
					})))
				},
				U = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				A = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				W = n("./src/reddit/components/SubredditNav/index.tsx"),
				H = n("./src/reddit/components/SubscribeButton/index.tsx"),
				K = n("./src/reddit/constants/postLayout.ts"),
				q = n("./src/reddit/constants/posts.ts"),
				G = n("./src/reddit/featureFlags/index.ts"),
				V = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				z = n("./src/reddit/constants/tracking.ts");
			var J = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Y = n("./src/reddit/selectors/subreddit.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/selectors/widgets.ts"),
				Z = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				$ = n.n(Z);
			const ee = c.a.img("SubredditIcon", $.a),
				te = Object(a.c)({
					notificationLevel: Y.C,
					spPollsEnabled: G.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(J.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(Y.J)(e, {
						subredditId: t
					}),
					userId: Q.i,
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const n = t;
						return Object(Y.bb)(e, {
							identifier: {
								name: n,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(X.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(i.b)(te, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(m.d)(s))
				},
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(u.a)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: x.b.LOW
							}
						}
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal(),
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					s = e.subreddit ? e.subreddit.url : e.subredditUrl,
					i = e.subreddit ? e.subreddit.title : "",
					a = e.subreddit && Object(V.a)(e),
					d = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && a),
					c = n.charAt(0).toUpperCase() + n.slice(1),
					u = !!e.subreddit && e.subredditInlineEditingEnabled,
					m = Object(o.a)($.a.SubredditIcon, $.a.editableIcon, {
						[$.a.emptyEditableIcon]: !a
					}),
					p = d ? r.a.createElement(A.a, {
						className: m,
						subreddit: e.subreddit,
						iconUrl: a || void 0,
						inTopBar: !0
					}) : r.a.createElement(B.a, {
						className: $.a.DefaultIcon
					}),
					b = d ? r.a.createElement(ee, {
						src: a || void 0
					}) : r.a.createElement(B.a, {
						className: $.a.DefaultIcon
					}),
					h = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					f = e.layout ? e.layout === K.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement("div", {
					className: $.a.container,
					style: {
						maxWidth: f
					}
				}, r.a.createElement("div", {
					className: $.a.subredditMetaContainer
				}, u ? p : b, r.a.createElement("div", {
					className: Object(o.a)($.a.textContainer, {
						[$.a.textContainerNoIcon]: !d
					})
				}, r.a.createElement("div", {
					className: $.a.text
				}, r.a.createElement("h1", {
					className: $.a.title
				}, i || c), !!i && r.a.createElement("h2", {
					className: $.a.description
				}, "r/", n)), r.a.createElement("div", {
					className: $.a.subscribeButtonContainer
				}, r.a.createElement(H.a, {
					className: $.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...S.defaults(t),
							source: "id_banner",
							action: z.c.CLICK,
							noun: e,
							subreddit: S.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: n,
						type: q.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0,
					afterUnsubscribeAction: () => {
						t && (Object(F.Z)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && r.a.createElement("div", {
					className: $.a.notificationButtonContainer
				}, r.a.createElement(M, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: a,
					shouldShowSubredditIcon: d,
					userId: e.userId
				})), e.subreddit && r.a.createElement(U.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), h && r.a.createElement(W.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: s,
					subredditId: t,
					subredditNavContainerClassName: $.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => i.a.createElement(o.e, null, i.a.createElement(o.i, null, i.a.createElement(c.a, null, i.a.createElement(o.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(o.b, null)))), i.a.createElement(o.l, null, i.a.createElement(o.p, {
				className: u.a.ModalText
			}, e.modalText)), i.a.createElement(o.g, null, !e.hideCancelButton && i.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(o.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.m.less"),
				x = n.n(f);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = l.a.div("FooterContainer", x.a), y = l.a.div("UserAgreement", x.a), k = l.a.a("UserAgreementLink", x.a), _ = l.a.a("PrivacyLink", x.a);
			var O = () => i.a.createElement(v, null, i.a.createElement(y, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", i.a.createElement(k, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", i.a.createElement(_, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = n("./node_modules/lodash/flatMap.js"),
				j = n.n(C),
				I = n("./src/lib/linkMatchers/index.ts"),
				N = n("./src/lib/linkMatchers/customLinks.ts"),
				S = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, i] = t.slice(s, s + 3);
						n.push(e), n.push([i, r])
					}
					return n
				};
			var B = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, P)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = I.f.add(N.g.subreddit.prefix, N.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return i.a.createElement(S.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, r)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				L = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/chat/controls/Svg/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var M = e => i.a.createElement(D.a, F({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				U = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var K = n("./src/reddit/selectors/meta.ts"),
				q = n("./src/reddit/components/ContentGate/index.m.less"),
				G = n.n(q);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = l.a.wrapped(M, "PrivateKey", G.a), J = l.a.div("ButtonsContainer", G.a), Y = l.a.div("Container", G.a), Q = l.a.div("ContainerExp", G.a), X = l.a.div("Description", G.a), Z = l.a.div("PrivateSubredditDetails", G.a), $ = l.a.div("PrivateSubredditDescription", G.a), ee = l.a.h3("PrivateSubredditName", G.a), te = l.a.a("Link", G.a), ne = l.a.wrapped(R.n, "LinkRouterButton", G.a), se = l.a.wrapped(R.m, "LinkButton", G.a), re = l.a.wrapped(R.q, "SecondaryLinkRouterButton", G.a), ie = l.a.wrapped(R.p, "SecondaryLinkButton", G.a), ae = l.a.wrapped(ne, "GoHomeLinkButton", G.a), oe = l.a.wrapped(h.a, "CreateCommunityButton", G.a), de = l.a.img("Image", G.a), ce = l.a.img("ImagePlaceholder", G.a), le = l.a.wrapped(ne, "LeftLinkRouterButton", G.a), ue = l.a.wrapped(se, "LeftLinkButton", G.a), me = l.a.wrapped(ie, "SecondaryLeftLinkButton", G.a), pe = l.a.wrapped(re, "SecondaryLeftLinkRouterButton", G.a), be = l.a.h3("Title", G.a), he = l.a.div("PageBody", G.a), fe = l.a.div("QuarantineMessageWrapper", G.a), xe = Object(c.c)({
				isLoggedIn: H.J,
				origin: K.j,
				user: H.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.K)(e)) return !1;
					const t = Object(W.d)(e);
					if (!t) return !1;
					const n = Object(H.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * A.B;
					return s > Date.now() - r
				})(e)
			}), ge = Object(L.u)(), ve = Object(a.b)(xe, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), ye = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: a,
					isContributorRequestsDisabled: o,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: l,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: g,
					setNSFWPreference: v,
					subredditDescription: y,
					subredditName: k,
					user: _
				} = e, O = async () => {
					a ? await v() : await Object(m.k)(), window.location.reload()
				};
				switch (n) {
					case U.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(be, null, V._("r/{community name} is a Reddit Premium community", [V._param("community name", k)], {
							hk: "2lyDwB"
						})), i.a.createElement(X, null, V._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(J, null, _ ? i.a.createElement(me, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, V._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ue, {
							href: Object(u.a)(c, l),
							redditStyle: !0
						}, V._("Sign Up", null, {
							hk: "rvpjy"
						})), _ ? i.a.createElement(ne, {
							to: "/",
							redditStyle: !0
						}, V._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(ie, {
							href: Object(u.a)(c, l),
							redditStyle: !0
						}, V._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case U.a.Nsfw:
					case U.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(be, null, n === U.a.Nsfw ? V._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : V._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(X, null, V._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(J, null, i.a.createElement(le, {
							to: "/",
							redditStyle: !0
						}, V._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ie, {
							onClick: O,
							redditStyle: !0
						}, V._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case U.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(z, null), i.a.createElement(be, null, "r/", k, " ", V._("is a private community", null, {
							hk: "7zZmq"
						})), y && y.length && i.a.createElement(Z, null, i.a.createElement(ee, null, "r/", k), i.a.createElement($, null, i.a.createElement("div", null, y))), i.a.createElement(X, null, V._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", k, " ", V._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), V._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(J, null, _ ? i.a.createElement(i.a.Fragment, null, !o && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(me, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${k}`,
							redditStyle: !0
						}, V._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(me, {
							href: Object(u.a)(c, l),
							redditStyle: !0
						}, V._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(ne, {
							to: "/",
							redditStyle: !0
						}, V._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case U.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(be, null, V._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(X, null, V._("This community is {=quarantined}", [V._param("=quarantined", i.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, V._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(fe, null, g ? i.a.createElement(w.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : x ? i.a.createElement(E.a, {
							html: x
						}) : f || V._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), V._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(J, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(J, null, i.a.createElement(pe, {
								to: "/",
								redditStyle: !0
							}, V._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(se, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, V._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(J, null, i.a.createElement(le, {
								to: "/",
								redditStyle: !0
							}, V._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(ie, {
								onClick: t,
								redditStyle: !0
							}, V._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(_, r, h)));
					case U.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(be, null, V._("r/{community name} has been banned from Reddit", [V._param("community name", k)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(X, null, e ? i.a.createElement(B, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : V._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(J, null, i.a.createElement(ne, {
							to: "/",
							redditStyle: !0
						}, V._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(be, null, V._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(J, null, i.a.createElement(ne, {
							to: "/",
							redditStyle: !0
						}, V._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ce, null), i.a.createElement(be, null, V._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(X, null, V._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(J, null, _ && i.a.createElement(oe, {
							eventSource: "content_gate"
						}), i.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.ProfileDoesNotExist:
					case U.a.ProfileDeleted:
					case U.a.ProfileSuspended:
					case U.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(be, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case U.a.ProfileBlockedForLegalReason:
									return V._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case U.a.ProfileDeleted:
									return V._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case U.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, V._("This account has been {=suspended} .", [V._param("=suspended", i.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, V._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case U.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(be, null, V._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(X, null, V._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(J, null, i.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(be, null, V._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(J, null, i.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(be, null, V._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(J, null, i.a.createElement(ne, {
							to: "/",
							redditStyle: !0
						}, V._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ge(ve(Object(o.i)(e => {
				const t = Object(r.useContext)(d.a) ? Q : Y;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(he, null, ye(e))), i.a.createElement(O, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				y = g.a.wrapped(l.c, "StyledTooltip", x.a),
				k = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ib)(e),
					userIsSuspended: h.R
				});
			t.a = Object(a.b)(k, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(b.c)(t)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: v
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: a,
				sendEvent: o,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c,
				onClick: l
			}) => {
				return i.a.createElement(p.t, {
					className: e,
					disabled: c || d,
					onClick: e => {
						l && l(e), a(o)
					},
					onMouseEnter: n,
					onMouseLeave: r,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? i.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
				m = n("./src/reddit/selectors/experiments/downToChat.ts"),
				p = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = Object(a.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), x = Object(i.b)(f, e => ({
				startChatting: t => e(Object(o.i)(t))
			}));
			t.a = x(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: n,
					isDownToChatExperimentEnabled: s
				} = e;
				if (!n || !s) return null;
				const i = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return r.a.createElement(c.t, {
					className: b.a.button,
					text: i,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: n
						} = e;
						t(n.id)
					},
					redditStyle: !0
				})
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: n,
				isProfileCard: s,
				isLoading: m,
				imageUrl: b,
				onFileSelected: h
			}) => {
				const f = Object(i.e)(u.a);
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.Container, n)
				}, r.a.createElement("label", {
					className: p.a.HitBox
				}, r.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? r.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), r.a.createElement(o.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: f ? m : void 0
				}), !m && r.a.createElement("div", {
					className: Object(a.a)(p.a.EditButton, {
						[p.a.profileCard]: s
					})
				}, r.a.createElement(c.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), m && r.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/selectors/gold/awardIcon.ts"),
				l = n("./src/reddit/selectors/meta.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/selectors/userFlair.ts"),
				g = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/config.ts"),
				k = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = n("./src/lib/lessComponent.tsx"),
				O = n("./src/lib/prettyPrintNumber/index.ts"),
				E = n("./src/reddit/components/ChatButton/index.tsx"),
				w = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/SubscribeButton/index.tsx"),
				I = n("./src/reddit/components/UserIcon/index.tsx"),
				N = n("./src/reddit/endpoints/profile/info.ts"),
				S = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				T = n("./src/reddit/icons/fonts/Info/index.tsx"),
				P = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var B = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				L = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				R = n("./src/reddit/models/Gold/Award.ts"),
				D = n("./src/reddit/models/User/index.ts"),
				F = n("./src/reddit/components/HumanDate/index.tsx"),
				M = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				A = n("./src/reddit/actions/inContextModeration.ts"),
				W = n("./src/reddit/actions/modal.ts"),
				H = n("./src/reddit/actions/subredditModeration/ban.ts"),
				K = n("./src/reddit/constants/modals.ts"),
				q = n("./src/reddit/components/Hovercards/helpers.ts"),
				G = n("./src/reddit/icons/fonts/index.tsx"),
				V = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				z = n("./src/reddit/selectors/bannedUser.ts"),
				J = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Y = n.n(J);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = Object(a.c)({
				hasModMailPermissions: Object(u.b)(V.c.mail),
				isUserBanned: (e, t) => !!Object(z.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.nb)(e, {
					userName: t.username
				})
			});
			class Z extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: s,
						onUnbanUser: i,
						sendEvent: a,
						toggleBanModal: o,
						toggleMuteModal: d
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, s ? r.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), a(S.e(t))
						}
					}, r.a.createElement(G.a, {
						name: "ban",
						isFilled: !0,
						className: Y.a.icon
					}), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							o(), a(S.a(t))
						}
					}, r.a.createElement(G.a, {
						name: "ban",
						className: Y.a.icon
					}), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							d(), a(S.d(t))
						}
					}, r.a.createElement(G.a, {
						name: "mod_mute",
						className: Y.a.icon
					}), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(i.b)(X, (e, {
					username: t,
					subredditId: n,
					contextId: s
				}) => ({
					onUnbanUser: t => e(Object(H.e)(n, t)),
					requestUserBanInfo: () => e(Object(H.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(A.c)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(H.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(A.d)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(W.i)(K.a.MUTE_USER))
					}
				}))(Z),
				ee = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(S.c(e.contextId))
					}
				}, r.a.createElement(G.a, {
					name: "tag",
					className: Y.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				se = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = n.n(se);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = _.a.wrapped(I.a, "UserIcon", re.a),
				oe = _.a.wrapped(j.a, "SubscribeButton", re.a),
				de = _.a.wrapped(E.b, "ChatButton", re.a),
				ce = _.a.wrapped(B, "KarmaIcon", re.a),
				le = _.a.wrapped(L.a, "PremiumIcon", re.a),
				ue = _.a.wrapped(k.a, "UserNameLink", re.a),
				me = _.a.div("UserNameMetaData", re.a),
				pe = _.a.div("MetaDataItem", re.a),
				be = _.a.div("Bullet", re.a),
				he = _.a.div("UserNameContainer", re.a),
				fe = _.a.div("UserInfoContainer", re.a),
				xe = _.a.div("PostKarma", re.a),
				ge = _.a.div("CommentKarma", re.a),
				ve = _.a.div("KarmaGrid", re.a),
				ye = _.a.div("GenericKarma", re.a),
				ke = _.a.a("InfoLink", re.a),
				_e = _.a.div("KarmaCount", re.a),
				Oe = _.a.div("KarmaLabel", re.a),
				Ee = _.a.div("GenericKarmaLabel", re.a),
				we = _.a.div("BannerImage", re.a),
				Ce = _.a.div("UserContainer", re.a),
				je = _.a.div("BottomSpacer", re.a),
				Ie = _.a.div("Container", re.a),
				Ne = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && r.a.createElement(P.a, {
					className: re.a.adminIcon,
					title: v.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(k.a, {
					to: "/premium"
				}, r.a.createElement(le, null))), r.a.createElement(me, null, e.user.username && r.a.createElement(pe, null, e.user.username, r.a.createElement(be, null, "•")), r.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && r.a.createElement(F.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: n
						}
					} = e, s = {
						...N.a,
						...n
					};
					return t ? r.a.createElement(ve, null, r.a.createElement(ye, null, r.a.createElement(_e, null, Object(O.b)(s.fromPosts)), r.a.createElement(Ee, null, v.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [v.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(ye, null, r.a.createElement(_e, null, Object(O.b)(s.fromComments)), r.a.createElement(Ee, null, v.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [v.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(ye, null, r.a.createElement(_e, null, Object(O.b)(s.fromAwardsReceived)), r.a.createElement(Ee, null, v.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [v.fbt._plural(s.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(ke, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(T.a, {
						className: re.a.infoIcon
					})))), r.a.createElement(ye, null, r.a.createElement(_e, null, Object(O.b)(s.fromAwardsGiven)), r.a.createElement(Ee, null, v.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [v.fbt._plural(s.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(ke, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(T.a, {
						className: re.a.infoIcon
					}))))) : r.a.createElement(fe, null, r.a.createElement(ce, null), r.a.createElement(xe, null, r.a.createElement(_e, null, Object(O.b)(s.fromPosts)), r.a.createElement(Oe, null, v.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [v.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(ge, null, r.a.createElement(_e, null, Object(O.b)(s.fromComments)), r.a.createElement(Oe, null, v.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [v.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Te = e => {
					const {
						className: t,
						contextId: n,
						currentUser: s,
						hideNSFWPref: i,
						hoverId: a,
						isLoggedIn: o,
						onClickSnoovatar: d,
						origin: c,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						sendEvent: m,
						showAwardKarma: p,
						style: b,
						subredditId: h,
						topAwardIcon: f,
						userName: x,
						user: g,
						userFlair: k,
						userIsBanned: _,
						userProfileStyles: O,
						acceptChats: E,
						isCommentAuthorBlocked: C
					} = e;
					if (!g) return r.a.createElement(Ie, {
						style: b
					});
					const j = !!s && Object(D.e)(s) === x,
						I = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						N = g.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						T = l && l.flair,
						P = l && l.access,
						B = k && k.templateIds && k.templateIds.length > 0,
						L = k && k.displaySettings && k.displaySettings.isEnabled,
						{
							awardedLastMonth: R
						} = g,
						F = !!g.snoovatarFullBodyAsset,
						A = g.isNSFW && i;
					let W;
					return W = F ? !A && O && O.bannerBackgroundImage || void 0 : A ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(Ie, {
						className: t,
						id: a,
						style: b
					}, !F && W && r.a.createElement(we, {
						style: {
							backgroundImage: `url('${W}')`
						}
					}), r.a.createElement(Ce, null, F ? r.a.createElement(U.a, {
						isHovercard: !0,
						bannerBackgroundImage: W,
						compact: !0,
						currentUserHasSnoovatar: I,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!u,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null,
						userCreated: g.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(he, null, r.a.createElement(ae, {
						iconUrl: N,
						isNSFW: g.isNSFW,
						userName: x
					}), r.a.createElement(Ne, {
						origin: c,
						user: g,
						userName: x
					})), r.a.createElement(Se, {
						showAwardKarma: p,
						user: g
					}), R && r.a.createElement(M.a, {
						recentAwardings: R,
						topAwardIcon: f,
						username: x
					}), o && !j && !_ && E && !C && r.a.createElement(de, {
						contextId: n,
						userId: g.id,
						text: v.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !_ && !C && !j && g.enableFollowers && r.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(S.g)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0
					})), P && n && !j && h && r.a.createElement($, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: x
					}), T && n && B && L && h && r.a.createElement(ne, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: x
					}), r.a.createElement(w.i, {
						contextId: n,
						subredditId: h,
						user: g
					}), !(P || o) && r.a.createElement(je, null))
				},
				Pe = Object(C.a)(Te),
				Be = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Pe, ie({
						isOpen: t
					}, e))
				};
			Be.WrappedComponent = Te;
			var Le = Be;
			const Re = Object(a.c)({
					activeTooltipId: h.a,
					currentUser: f.k,
					isLoggedIn: f.K,
					hideNSFWPref: f.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: g.c,
					showAwardKarma: (e, t) => {
						return Object(h.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: f.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(x.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.ab)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				De = Object(i.b)(Re, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = De(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(Le, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return r.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, r.a.createElement(a.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(a.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(a.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				f = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				x = n.n(f);
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return r.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const v = i.a.wrapped(g, "HoverDiv", x.a),
				y = m(v),
				k = h(v)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/reddit/components/Hovercards/helpers.m.less"),
				a = n.n(i);
			const o = s.a.wrapped(r.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: r,
						tooltipType: i
					} = e;
					let a = r;
					return n && (a = `${a}--${n}`), i && (a = `${a}--${i}`), t && (a = `${a}--${t}`), s && (a = `${a}--${s}`), a
				}
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(i);
			const o = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(a);
			const d = ({
				snooBackground: e
			}) => r.a.createElement("div", {
				className: o.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => r.a.createElement("div", {
				className: Object(i.a)(o.a.Title, o.a.TitleShifted)
			}, r.a.createElement(d, {
				snooBackground: t
			}), r.a.createElement("div", {
				className: o.a.TitleTextShiftedContainer
			}, r.a.createElement("span", {
				className: o.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/lodash/isNil.js"),
				d = n.n(o),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(c.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(f.E)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(i.b)(() => Object(a.a)(x, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const v = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(f.E)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(i.b)(() => Object(a.a)(v, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var k = Object(i.b)(() => Object(a.c)({
					subreddit: f.P
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				_ = n("./src/reddit/hooks/usePostContext.ts");
			var O = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var E = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var w = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var C = Object(i.b)(() => Object(a.c)({
				subreddit: f.P
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var j = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.H)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var I = Object(i.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.P)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/Media/index.m.less"),
				o = n.n(a);
			const d = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = ({
					isNSFW: e,
					isSpoiler: t
				}) => i.a.createElement("div", {
					className: o.a.unblurButtonContainer
				}, i.a.createElement("button", {
					className: o.a.unblurButton
				}, d(e, t)))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(a.c)({
					isNightmodeOn: m.X
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(o.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/constants/tracking.ts"),
				w = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				C = n.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * v.e,
				N = e => {
					const t = Object(c.a)(C.a.image, h.g, e.className, {
							[C.a.mShowCentered]: e.showCentered,
							[C.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && I(e.height) || (n.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(v.K)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.K)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className),
						style: t
					}, e.children)
				},
				T = Object(a.b)(() => Object(d.a)(k.G, O.db, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(k.b)(e, n) : null, y.a, _.actionInfo, k.H, (e, t, n, s, r, i) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					sendGoodVisitEvent: s,
					pageType: r.pageType,
					post: i
				})));
			t.a = T(e => {
				const t = e.sendGoodVisitEvent ? Object(g.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, B(e)) : e.isListing && e.postPermalink ? i.a.createElement(o.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, B(e)) : B(e)
			});
			const P = (e, t) => i.a.createElement(N, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[E.a]: !e
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
					src: Object(l.a)(t.source),
					width: t.width
				}),
				B = ({
					onClick: e,
					...t
				}) => {
					const n = Object(v.K)(t.height, t.width),
						r = I(t.height) && n;
					return i.a.createElement(S, j({}, t, {
						className: `${n?`${E.a} `:""}${t.className||""}`
					}), t.isListing ? i.a.createElement("div", {
						className: t.contentImageClassName
					}, P(n, t)) : i.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: C.a.imageLink
					}, P(n, t), t.shouldBlur && !t.isVideoThumbnail && i.a.createElement(p.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > v.j && Object(v.K)(t.height, t.width) && i.a.createElement("div", {
						className: C.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && i.a.createElement(b.a, {
						onClick: e
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/forceHttps/index.ts"),
				o = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(o.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				g = n("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function y({
				autoplay: e,
				isListing: t,
				isNotCardView: n,
				onBufferingChange: s,
				shouldLoad: r,
				shouldPause: o,
				showCentered: d,
				showFull: c,
				source: l,
				...u
			}) {
				const m = Object(i.useRef)(),
					p = Object(i.useRef)(),
					b = Object(g.a)(o);

				function y(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (y(!o && (e || n)), p.current && s) return m.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let a = !1,
							o = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(o = d);
							if (e.paused || e.seeking || !n) return void(o = d);
							const r = a;
							4 === e.readyState ? a = !1 : !a && d >= o && d < o + f ? a = !0 : a && d >= o && d > o + f && (a = !1), o = d, r !== a && t(a)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(p.current, s), () => {
						m.current && m.current()
					}
				}, []), Object(i.useEffect)(() => {
					b !== o && y(!o && (e || n))
				}, [b, o, e, n]), a.a.createElement("video", v({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(x.a)(l || "")
				}))
			}
			var k = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = n.n(k);
			const O = Object(d.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function E(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: i,
					started: d
				} = Object(o.e)(t => O(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: x,
					showFull: g,
					shouldPause: v,
					width: k,
					isListing: E,
					className: w,
					showCentered: C,
					originalSource: j
				} = e, I = Object(o.d)();

				function N(e) {
					I(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function S() {
					return I(Object(l.z)({
						postId: p
					}))
				}
				const T = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && I(Object(l.s)(p))
				}, 200);

				function P(e) {
					e.persist(), T(e)
				}

				function B(e) {
					var t;
					(i || R(e), d) || (t = e.timeStamp, I(Object(l.A)(p, t)))
				}

				function L(e) {
					I(Object(l.q)(p, e.timeStamp))
				}

				function R(e) {
					! function(e) {
						I(Object(l.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function D(e) {
					s || B(e), i || R(e), I(Object(l.C)(p))
				}

				function F() {
					const e = {};
					return C && (e.margin = "0 auto"), E || (e.maxHeight = `${m.e}px`), a.a.createElement(y, {
						autoplay: t,
						className: Object(c.a)(u.a, _.a.styledVideo),
						height: f,
						isListing: E,
						isNotCardView: x,
						key: p,
						loop: !0,
						onBufferingChange: N,
						onLoadStart: L,
						onLoadedData: B,
						onLoadedMetadata: R,
						onPause: S,
						onPlaying: D,
						onTimeUpdate: P,
						shouldLoad: b,
						shouldPause: v,
						showCentered: C,
						showFull: g,
						source: h,
						style: e,
						width: k
					})
				}
				return E ? F() : a.a.createElement("div", {
					className: Object(c.a)(_.a.container, w, {
						[_.a.centered]: C
					})
				}, a.a.createElement("a", {
					href: j,
					target: "_blank",
					rel: "noopener noreferrer"
				}, F()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				c = n("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = n.n(c);
			const u = Object(i.a)(o.a),
				m = ["center", "bottom"],
				p = ["center", "top"];
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, r.a.createElement(d.a, null), r.a.createElement(u, {
						className: Object(a.a)(e.className, l.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						text: e.text,
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(f);
			const g = c.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(g),
				y = c.a.button("MenuButton", x.a),
				k = c.a.wrapped(p.b, "DropdownRow", x.a),
				_ = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				O = Object(a.b)(_, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), i.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/config.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(o);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: o
					} = t, l = s.description ? s.description : s.name;
					return r.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${i.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: d.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), o > 1 && r.a.createElement("span", {
						className: d.a.count
					}, `+${Object(a.b)(o-1)}`)), r.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", s.name), c._plural(o)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/models/Image/index.tsx"),
				o = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(a.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: r,
						isNSFW: a,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? i.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(d.e)(n) === c ? i.a.createElement(o.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : a && r ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = Object(r.c)({
					currentUser: a.k,
					hideNSFWPref: a.C
				}),
				d = Object(s.b)(o, e => ({
					imageUpdateRequested: (t, n) => e(Object(i.B)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = n.n(h);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: o,
				share: h
			}) => {
				const g = Object(l.b)(),
					v = Object(a.d)(),
					y = o && o.id,
					k = o && o.voteState;
				let _ = null;
				y || (_ = e ? "user_hovercard" : "profile_overview");
				const O = Object(r.useCallback)(() => g(Object(m.f)(e ? "user_hovercard" : "profile_overview", t)), [e, g, t]);
				return i.a.createElement(u.t, {
					onClick: () => {
						n ? (g(m.g), y && k === b.a.notVoted && v(Object(d.db)(y))) : O();
						const e = n ? "postify" : "copy";
						v(Object(c.b)({
							clickSource: _,
							share: h,
							source: e
						}))
					},
					className: Object(s.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, i.a.createElement(p.a, {
					className: Object(s.a)({
						[f.a.shirtIcon]: !n,
						[f.a.avatarPostButtonShirtIcon]: n
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), i.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: s,
				onClick: c
			}) {
				return r.a.createElement(a.t, {
					onClick: c,
					isFullWidth: !0,
					className: Object(i.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && s,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? r.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : s ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
					className: l.a.chevronIcon
				}) : r.a.createElement(o.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				o = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = n.n(d),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: s,
				isDeletingBanner: d,
				onDeleteBanner: l
			}) {
				return r.a.createElement("div", {
					className: c.a.bannerWrapper
				}, r.a.createElement(o.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), s && e && (d ? r.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : r.a.createElement(a.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/components/HumanDate/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: s,
				username: d,
				...c
			}) {
				const l = t ? r.a.createElement(r.a.Fragment, null, "u/", d, " · ", r.a.createElement(a.d, {
					seconds: s,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return n ? r.a.createElement(i.a, o({}, c, {
					className: e,
					to: n
				}), l) : r.a.createElement("span", o({}, c, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: i,
				isNSFW: l
			}) => a.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && a.a.createElement(o.a, {
				className: u.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), i && a.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${s.a.redditUrl}/premium`
			}, a.a.createElement(c.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && a.a.createElement(d.a, {
				className: u.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				h = n.n(b);
			const f = 25;

			function x(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function g(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = x("particleDelay", h.a),
				y = x("particleX", h.a),
				k = x("particleFloat", h.a),
				_ = () => {
					const e = g(y),
						t = g(k),
						n = g(v);
					return Object(a.a)(h.a.particle, e, t, n)
				};
			class O extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return r.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return r.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var E = O,
				w = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				C = n.n(w),
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: s,
				isDeletingBanner: b,
				isEmployee: f,
				isGold: x,
				isNSFW: g,
				isOwnProfile: v,
				onClickSnoovatar: y,
				onDeleteBanner: k,
				prefersReducedAnimations: _,
				snoovatarUrl: O,
				title: w,
				userCreated: I,
				username: N,
				url: S,
				isHovercard: T
			}) => {
				const P = Object(i.e)(e => !v && !!O && Object(c.h)(e));
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!s,
					isNSFW: g,
					username: N,
					isDeletingBanner: !!b,
					onDeleteBanner: k
				}), r.a.createElement("div", {
					className: h.a.snoovatarContainer
				}, x && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: h.a.topGlow
				}), r.a.createElement("div", {
					className: h.a.bottomGlow
				}), !_ && r.a.createElement(E, null)), r.a.createElement("img", {
					className: Object(a.a)(h.a.snoovatar, {
						[h.a.premiumGlow]: x
					}),
					src: O || void 0
				})), !s && v && r.a.createElement(o.a, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, r.a.createElement(d.a, {
					name: "settings",
					className: C.a.settingsIcon
				})), r.a.createElement(j.a, {
					isEmployee: f,
					isGold: x,
					isNSFW: g,
					title: w,
					username: N
				}), r.a.createElement(p.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: N,
					userCreated: I,
					url: S
				}), (v || !n && !!O) && r.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: v,
					onClick: y
				}), P && r.a.createElement(u.a, {
					username: N,
					isHovercard: !!T,
					share: {
						username: N
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(o.a)(h))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => i.a.createElement(g, p({}, n, {
					className: Object(a.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [o.a.Click, o.a.Keydown]);
			class k extends i.a.Component {
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
					return i.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = k
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "w", (function() {
				return B
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.m.less"),
				o = n.n(a),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", o.a), d.a.div("H2", o.a), d.a.div("H3", o.a), d.a.div("H4", o.a), d.a.div("H5", o.a), d.a.div("H6", o.a)],
				u = d.a.hr("Hr", o.a),
				m = d.a.code("M", o.a),
				p = d.a.pre("Pre", o.a),
				b = d.a.blockquote("Blockquote", o.a),
				h = d.a.p("P", o.a),
				f = d.a.li("Li", o.a),
				x = d.a.ul("Ul", o.a),
				g = d.a.ol("Ol", o.a),
				v = d.a.strong("B", o.a),
				y = d.a.em("I", o.a),
				k = d.a.span("U", o.a),
				_ = e => r.a.createElement("del", e),
				O = d.a.sub("Sub", o.a),
				E = d.a.sup("Sup", o.a),
				w = d.a.table("Table", o.a),
				C = d.a.tr("Tr", o.a),
				j = d.a.td("Tdl", o.a),
				I = d.a.td("Tdc", o.a),
				N = d.a.td("Tdr", o.a),
				S = d.a.th("Thl", o.a),
				T = d.a.th("Thc", o.a),
				P = (d.a.th("Thr", o.a), d.a.wrapped(e => r.a.createElement(i.b, e), "A", o.a)),
				B = d.a.wrapped(c.a, "A", o.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				k = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => a.a.createElement(y, v({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				_ = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				O = e => r()(e, _),
				E = e => e.findIndex(_),
				w = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: v,
						shouldBlur: _
					} = e, w = s.document, C = [], j = e.mediaMetadata || null, I = E(w), N = O(w);
					if (_ && !r) return a.a.createElement(y, {
						className: Object(o.a)(u.j, n)
					}, a.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: c
					}, Object(l.b)(!!i, !!d))));
					if (-1 !== I)
						for (let a = I; a <= N; a++) {
							const e = w[a];
							switch (e.e) {
								case b.k:
									C.push(f.c(e, x, a));
									break;
								case b.l:
									C.push(f.d(a));
									break;
								case b.b:
									C.push(f.a(e, j, x, a));
									break;
								case b.c:
									C.push(f.b(e, a));
									break;
								case b.p:
									C.push(f.f(e, j, x, a));
									break;
								case b.z:
									C.push(f.h(e, j, x, a));
									break;
								case b.u:
									C.push(f.g(e, j, x, a));
									break;
								case b.h:
									C.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									C.push(...Object(h.b)(e, a, j, p, m, t))
							}
						}
					return v ? a.a.createElement(y, {
						className: Object(o.a)(u.j, n)
					}, C) : a.a.createElement(k, {
						className: Object(o.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, C)
				};
			class C extends a.a.Component {
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
					c.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), c.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return w(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				k = g.a.wrapped(h.a, "A", x.a),
				_ = g.a.wrapped(l.a, "ImageBox", x.a),
				O = g.a.wrapped(e => i.a.createElement("p", e), "Caption", x.a),
				E = g.a.div("Placeholder", x.a),
				w = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(E, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", x.a),
				C = ({
					c: e,
					x: t,
					y: n
				}, s) => i.a.createElement("div", {
					className: x.a.MediaWrapper
				}, i.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, i.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				j = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = y.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(k, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				I = (e, t, n, s, r, o) => {
					const c = b.E(n, e.id);
					if (s) return [j(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => i.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: s
						})
					}, i.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, i.a.createElement(_, {
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
					}))))(c, t, !!e.c, o)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.g)(e)) {
							const o = t || Object(p.f)(e);
							return i.a.createElement("div", {
								className: Object(a.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: r
								})
							}, i.a.createElement(k, {
								href: o,
								key: s,
								target: "_blank"
							}, n.mp4 ? i.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: o
							}))
						}
						return i.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, i.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, o, c, l) => i.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: o,
						showCentered: !0,
						showFull: !0,
						width: n
					}, i.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => i.a.createElement(w, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => i.a.createElement(O, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const v = 1e3,
				y = 1e3;
			var k;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(k || (k = {}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = k.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = k.Inside, setTimeout(() => {
							this.mouseLocation === k.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = k.Outside, setTimeout(() => {
							this.mouseLocation !== k.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return r ? o.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(_),
				E = n("./src/reddit/components/RichTextJson/media.tsx"),
				w = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = n("./src/reddit/components/SubredditMention/index.tsx"),
				j = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = n("./src/reddit/helpers/isComment.ts"),
				N = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts"),
				T = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						a = s.length;
					for (let o = 0; o < a; o++) {
						const e = s[o];
						i.push(e.e === p.w ? e.t : W(e, t, o))
					}
					const c = d.x[r - 1];
					return o.a.createElement(c, {
						key: n
					}, i)
				},
				B = e => o.a.createElement(d.e, {
					key: e
				}),
				L = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						a = [];
					for (let o = 0; o < i; o++) a.push(F(r[o], t, n, o));
					return o.a.createElement(d.c, {
						key: s
					}, a)
				},
				R = (e, t) => {
					const n = e.c;
					return o.a.createElement(d.k, {
						key: t
					}, o.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				D = (e, t, n, s) => {
					const r = e.c,
						i = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && i.push(o.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => F(e, t, n, s))))
					}
					const c = e.o ? d.i : d.v;
					return o.a.createElement(c, {
						key: s
					}, i)
				},
				F = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return L(e, t, n, s);
						case p.c:
							return R(e, s);
						case p.k:
							return P(e, n, s);
						case p.l:
							return B(s);
						case p.p:
							return D(e, t, n, s);
						case p.u:
							return U(e, t, n, s);
						case p.z:
							return M(e, t, n, s)
					}
				},
				M = (e, t, n, s) => {
					const r = e.c,
						i = e.h,
						a = r.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: r
							} = G(e.a),
							{
								c: a = []
							} = e;
						l.push(o.a.createElement(s, {
							key: d
						}, A(a, t, n))), m[d] = r
					}
					for (let p = 0; p < a; p++) {
						const e = r[p],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: a = []
								} = e[r];
							i.push(o.a.createElement(s, {
								key: r
							}, A(a, t, n)))
						}
						u.push(o.a.createElement(d.t, {
							key: p
						}, i))
					}
					return o.a.createElement(d.n, {
						key: s
					}, o.a.createElement("thead", null, o.a.createElement(d.t, null, l)), o.a.createElement("tbody", null, u))
				},
				U = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => o.a.createElement(d.j, {
						key: e
					}, o.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(S.g)(r.id) ? o.a.createElement(d.j, {
						key: s
					}, A(e.c, t, n)) : Object(E.b)(r, s, t)
				},
				A = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === p.A) s.push(H(r, i));
						else if (r.e === p.x) s.push(o.a.createElement(w.a, {
							key: i
						}, A(r.c, t, n)));
						else if (r.e === p.n) s.push(o.a.createElement("br", {
							key: i
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(o.a.createElement(O, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else s.push(W(r, n, i))
					}
					return s
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(j.b)(e.u)) return o.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, i;
							const a = Object(T.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(N.b)(c) && (r = c.postId), c && Object(I.b)(c) && (i = c.id, r = c.postId), o.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: i
							}, s);
						case p.y:
							return o.a.createElement(C.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return o.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return o.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return q(0, r, t);
					const a = Object(s.a)(r);
					let o = 0,
						d = 0;
					const c = n.length;
					for (; o < c; o++) {
						const [e, t, s] = n[o], c = t + s, l = a[t], u = a[c] - l;
						l > d && i.push(q(0, r.substr(d, l - d), `between${o}`)), i.push(q(e, r.substr(l, u), o)), d = l + u
					}
					return d < r.length && i.push(q(0, r.substr(d), `remaining${o}`)), i
				},
				K = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				q = (e, t, n) => {
					let s = t;
					return s = i()(K, (t, s, r) => e & parseInt(r, 10) ? o.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				G = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				E = n.n(O),
				w = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				C = n.n(w);
			const j = e => e.type === y.f.Spoiler,
				I = Object(h.u)();
			t.a = I(Object(f.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: y,
					showSubredditMeta: O = !0,
					showSubredditName: w,
					subredditOrProfile: I
				} = e, N = h && h.preview && h.preview.url || void 0, S = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", P = y && T || f && Object(o.a)("/search", {
					q: f.rawQuery,
					source: S
				}) || T, B = f ? f.subredditInfo && f.subredditInfo.icon : I && I.icon.url, L = f ? f.subredditInfo && f.subredditInfo.displayText : I && (I.displayText || I.name), R = h ? h.flair.filter(j) : [], D = h ? h.score : 0, F = h ? h.numComments : 0, M = h && h.isSponsored, U = Object(_.a)(e).body, A = `linear-gradient(\n      ${Object(r.f)(U,.2)},\n      ${Object(r.f)(U,.3)},\n      ${Object(r.f)(U,.4)},\n      ${Object(r.f)(U,.6)},\n      ${Object(r.f)(U,.8)},\n      ${U}\n    )`, W = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(C.a.trendingPost, {
						[C.a["m-background"]]: !!N
					})
				}, a.a.createElement(x.a, {
					to: P
				}, a.a.createElement("div", {
					className: Object(d.a)(C.a.backgroundWrapper, E.a.backgroundWrapper, t),
					style: {
						background: Object(k.g)(Object(_.a)(e).body, N || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": A
					}
				}, M && a.a.createElement("div", {
					className: C.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(C.a.innerContainer, E.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? C.a.title : C.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(C.a.description, n)
				}, R.length > 0 && a.a.createElement(m.a, {
					className: C.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: C.a.spacer
				}), O && B && L && a.a.createElement(g.a, {
					className: C.a.relatedSubredditMetaData,
					iconClassName: C.a.subredditIcon,
					iconUrl: B || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !O && h && a.a.createElement("div", {
					className: C.a.metaLine
				}, w && L && a.a.createElement("span", {
					className: C.a.meta
				}, Object(v.c)(L)), a.a.createElement("span", {
					className: C.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: C.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(p.a, {
					post: h
				}, W) : W
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.u)();
			t.a = m(Object(i.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(o.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(c.B)(e) || Object(d.a)(e),
					i = Object(o.e)(e);
				return {
					canShowAd: s && !r,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: i
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: s,
				...i
			}) => !t && e && s ? r.a.createElement(l.a, u({
				forceHouseAd: n
			}, i)) : null))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SidebarFooter/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: c.a
			}), f = Object(a.b)(h), x = Object(d.u)({
				isFrontpage: d.z
			});
			t.a = x(f(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? r.a.createElement(o.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: m.a.LinkContainer
			}, r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("User Agreement", null, {
				hk: "2RA6JL"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			}))), r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, p._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), r.a.createElement("div", {
				className: m.a.Copyright
			}, p._("© {year} Reddit, Inc. All rights reserved.", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : r.a.createElement(o.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: m.a.LinkContainer
			}, r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://www.reddithelp.com"
			}, p._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/coins"
			}, p._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/premium"
			}, p._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(b, {
				href: "https://redditgifts.com/"
			}, p._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(b, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, p._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/posts/2020/"
			}, p._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/topics/a-1/"
			}, p._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(b, {
				href: "https://about.reddit.com"
			}, p._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(b, {
				href: "https://about.reddit.com/careers/"
			}, p._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(b, {
				href: "https://about.reddit.com/press/"
			}, p._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/advertising"
			}, p._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(b, {
				href: "http://www.redditblog.com/"
			}, p._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, p._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, p._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(b, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, p._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(b, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, p._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: m.a.Copyright
			}, p._("Reddit Inc © {year} . All rights reserved", [p._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: n
				}) => o.a.createElement("div", {
					className: Object(s.a)(e, m.a.container),
					style: n
				}, o.a.createElement(l.l, {
					className: m.a.button,
					onClick: () => b(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = n.n(v),
				k = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = d.e[1] + 24,
				E = x.f + 8,
				w = E + 152 + 16,
				C = w + O + 8,
				j = k.a.div("Container", y.a),
				I = k.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => o.a.createElement(h, _({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?E:8}px)`
					}
				}, n)), "BackToTop", y.a),
				N = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: r
				}) => o.a.createElement("div", {
					className: Object(s.a)(t, {
						[y.a.StickyStyles]: r && !n,
						[y.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class S extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > w
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: i,
							pageLayer: a
						}
					} = this, d = this.state.isAdSticky && !(!t && !s);
					return o.a.createElement(j, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isFakeOverlay: n,
						isSticky: d
					}, t, s, !i && o.a.createElement(f.a, null)), !this.props.hideBackToTop && o.a.createElement(I, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(g.u)();
			t.a = T(S)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				x = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, a = [n, v.a.inTopBar, v.a.iconContainer];
					return s ? a.push(v.a.emptyEditableIconInTopBar) : a.push(v.a.editableIcon, v.a.emptyEditableIcon), i.a.createElement("span", y({}, r, {
						className: Object(d.a)(...a)
					}), s ? i.a.createElement(h.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}), e.children)
				},
				_ = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: v.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: a,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[v.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				O = Object(o.c)({
					isLoading: x.b
				});
			class E extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
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
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
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
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(_, y({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(k, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(k, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? i.a.createElement("div", {
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(a.b)(O, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(E))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = i.a.wrapped(a.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => r.a.createElement(o.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(g),
				y = Object(a.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				k = Object(i.b)(y),
				_ = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: i
				}) => {
					if (!t || !e) return r.a.createElement(v, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (s) {
						case h.Te.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.Te.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(v, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = k(_)
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = n("./src/reddit/components/IdCard/async.tsx"),
				x = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/reddit/components/IdCard/helpers.ts"),
				v = e => !Object(x.a)(e) || Object(g.f)(e) || Object(g.g)(e) || Object(g.h)(e),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				_ = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				O = n("./src/reddit/components/SidebarContainer/index.tsx"),
				E = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				w = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/reddit/actions/subreddit.ts"),
				I = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/helpers/name/index.ts"),
				P = n("./src/reddit/helpers/overlay/index.ts"),
				B = n("./src/reddit/selectors/experiments/topPosts.ts"),
				L = n("./src/reddit/selectors/posts.ts"),
				R = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const D = .99;
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= D && t(n)
					}
				}
				render() {
					return o.a.createElement(R.a, {
						threshold: D,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var M = F,
				U = n("./src/lib/isUrl/index.ts"),
				A = n("./src/lib/prettyPrintNumber/index.ts"),
				W = n("./src/reddit/components/FlairWrapper/index.tsx"),
				H = n("./src/reddit/components/Thumbnail/index.tsx"),
				K = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				G = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				V = n.n(G);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = e => e.type === K.f.Nsfw || e.type === K.f.Spoiler, Y = Object(c.c)({
				post: L.H,
				subredditOrProfile: L.U
			});
			class Q extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, i = {
						post: t
					}, a = Object(U.a)(Object(H.b)(i)), d = t.flair.filter(J);
					return o.a.createElement("div", {
						className: Object(I.a)(V.a.container, e, {
							[V.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: V.a.mainLine
					}, a && o.a.createElement("div", {
						className: V.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(H.a, i)), o.a.createElement("div", {
						className: Object(I.a)(V.a.title, !a && V.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(W.a, {
						className: V.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: V.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: V.a.meta
					}, Object(q.h)(r) ? Object(T.d)(r.displayText || r.name) : Object(T.c)(r.displayText || r.name)), o.a.createElement("span", {
						className: V.a.meta
					}, z._({
						"*": "{score} points",
						_1: "1 point"
					}, [z._plural(t.score, "score", Object(A.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: V.a.meta
					}, z._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [z._plural(t.numComments, "numComments", Object(A.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(Y, e => ({
					openLightbox: t => e(Object(P.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Q),
				Z = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, se = Object(c.a)(L.N, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => se(e, {
					...t
				})
			});
			class ie extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(M, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(X, {
							className: Object(I.a)($.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(x.a)(Object(T.g)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: i,
						redditStyle: a,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(B.a)(c),
						p = Object(B.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[f, ...g] = h,
						v = b ? h.slice(0, ne) : g.slice(0, ne),
						y = b ? h.slice(ne) : g.slice(ne);
					return o.a.createElement("div", {
						className: Object(I.a)($.a.container, t, {
							[$.a.redditStyle]: a
						})
					}, !b && o.a.createElement(M, {
						onPostVisible: r,
						postId: f.id
					}, o.a.createElement(N.a, {
						postId: f.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(T.g)(n)),
						trendingPost: f
					})), v.map(this.renderSmallPost), e, y.map(this.renderSmallPost), d && o.a.createElement(S.r, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, s || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(re, e => ({
					openPost: t => e(Object(P.a)(t.permalink))
				}))(ie),
				oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				fe = Object(c.a)((e, t) => t.subredditName, e => Object(C.a)(e, l.W.TOP, {
					t: l.fc.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(ue.b)(e, {
						unitName: le.i
					}),
					listingKey: fe,
					posts: (e, t) => {
						const n = fe(e, t);
						return Object(L.N)(e, {
							listingKey: n
						})
					},
					subreddit: me.v
				});
			class ge extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ce.c)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.r)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.u)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > he;
					return o.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(ae, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var ve = Object(d.b)(xe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(j.r)({
						sort: l.W.TOP,
						subredditName: t,
						t: l.fc.WEEK
					}))
				}))(Object(oe.c)(ge)),
				ye = n("./src/config.ts"),
				ke = n("./src/lib/localStorageAvailable/index.ts"),
				_e = n("./src/reddit/actions/modal.ts"),
				Oe = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ee = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				we = n("./src/reddit/controls/TextButton/index.tsx"),
				Ce = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Ie extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Ee.e, null, o.a.createElement(Ee.i, null, o.a.createElement(Ce.a, null, o.a.createElement(Ee.q, null, je._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(we.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Ee.b, null)))), o.a.createElement(Ee.l, null, o.a.createElement(Ee.p, null, je._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Ee.g, null, o.a.createElement(Ee.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, je._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Ee.r, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, je._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Ne = Object(Oe.a)(Ie),
				Se = n("./src/reddit/components/IdCard/Banner.tsx"),
				Te = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Pe = n("./src/reddit/constants/blade.ts"),
				Be = n("./src/reddit/controls/InternalLink/index.tsx"),
				Le = n("./src/reddit/helpers/localStorage/index.ts"),
				Re = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				De = n("./src/reddit/icons/fonts/index.tsx"),
				Fe = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				Me = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = n("./src/reddit/selectors/activeModalId.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				We = n("./src/reddit/selectors/structuredStyles.ts"),
				He = n("./src/reddit/components/IdCard/index.m.less"),
				Ke = n.n(He),
				qe = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ge = n.n(qe);
			const Ve = "mod_onboarding_modal",
				ze = "mod_onboarding_widget",
				Je = Object(c.a)(Ue.a, (e, t) => Object(Ae.b)(Me.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(We.k)(e, {
					subredditId: t.subredditId
				}), (e, t, n) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Ye extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Le.Eb)(ze, !0, this.props.subredditId), this.props.sendEvent(Object(Re.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Re.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Re.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Re.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Re.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditId: r
					} = this.props, i = e && !(t && n && s) && (!Object(ke.a)() || !Object(Le.D)(ze, r));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(Re.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: r,
						subredditName: i,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(de.a, {
						className: Object(I.a)(Ge.a.container, this.props.className)
					}, o.a.createElement(Se.a, {
						bannerBackgroundImage: `${ye.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), o.a.createElement(De.a, {
						name: "close",
						className: Ge.a.closeIcon,
						onClick: a
					}), Object(Te.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(g.e)(`url('${ye.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), o.a.createElement("div", {
						className: Object(I.a)(Ke.a.Description, Ge.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: Pe.e.exportImport,
						className: Ge.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(Be.a, {
						to: `/r/${i}?styling=true&route=${Pe.c.NameAndIcon}`,
						className: Ge.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(Fe.a, {
						className: Ge.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ge.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(Be.a, {
						to: `/r/${i}?styling=true&route=${Pe.c.Banner}`,
						className: Ge.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(Fe.a, {
						className: Ge.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ge.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(Be.a, {
						to: `/r/${i}?styling=true&route=${Pe.c.Global}`,
						className: Ge.a.link,
						onClick: this.customizeThemeColors
					}, n ? o.a.createElement(Fe.a, {
						className: Ge.a.checked
					}) : o.a.createElement(Fe.a, {
						className: Ge.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(S.q, {
						to: `/r/${i}?styling=true`,
						className: Ge.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: Ge.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Ve && o.a.createElement(Ne, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Qe = Object(d.b)(Je, (e, {
					subredditId: t,
					subredditName: n
				}) => ({
					toggleCloseMenuModal: () => e(Object(_e.i)(Ve))
				}))(Object(oe.c)(Ye)),
				Xe = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Ze = n("./src/reddit/constants/tracking.ts"),
				$e = n("./src/reddit/selectors/seo/linksModule.ts"),
				et = n("./src/reddit/selectors/telemetry.ts"),
				tt = n("./src/telemetry/models/Subreddit.ts");
			const nt = e => t => ({
					...et.defaults(t),
					action: Ze.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				st = e => t => n => ({
					...et.defaults(n),
					action: Ze.c.CLICK,
					noun: Object(tt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				rt = Object(c.c)({
					communities: $e.c
				});
			var it = Object(d.b)(rt)(e => {
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? o.a.createElement(E.a, null, o.a.createElement(Xe.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: nt,
						getSubscribeEventFactoryHandler: st,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				at = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				ot = n("./src/reddit/featureFlags/index.ts"),
				dt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				ct = n("./src/reddit/models/Widgets/index.ts"),
				lt = n("./src/reddit/selectors/communityFlairs.ts"),
				ut = n("./src/reddit/selectors/listings.ts"),
				mt = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				pt = n.n(mt);
			const bt = 250,
				ht = 270,
				ft = u.a.wrapped(O.a, "SidebarContainer", pt.a),
				xt = Object(c.c)({
					apiError: ut.c,
					apiPending: ut.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(lt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(lt.c)(e, t),
					showGovernance: ot.d.spPoints,
					showLeaderboard: ot.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.I)(e, {
						subredditId: t
					}) && !Object(me.J)(e, {
						subredditId: t
					}),
					widgets: me.q
				}),
				gt = Object(d.b)(xt);
			class vt extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: ct.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: ct.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: ct.g.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						showGovernance: n,
						showLeaderboard: s,
						showPredictionsLeaderboard: r,
						subredditId: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					let c = 0;
					const u = Object(B.a)(d),
						x = Object(B.b)(d),
						g = Object(B.c)(d),
						O = u || x;
					let C, j;
					!!this.getPostFlairWidget() ? C = this.props.widgets : (C = this.getCommunityWidgets(), j = this.makeFlairFilterWidget());
					const I = this.makeRelatedCommunitiesWidget(u, x),
						N = !u,
						S = x,
						T = o.a.createElement(_.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: dt.a.FIRST,
							sizes: l.i
						});
					return o.a.createElement(ft, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, v(t) && o.a.createElement(f.a, {
						listingName: t
					}), o.a.createElement(p.a, {
						cardClassName: pt.a.card,
						subredditId: i
					}), o.a.createElement(k.a, {
						subredditId: i
					}), r && o.a.createElement(m.a, {
						subredditId: i
					}), O && o.a.createElement(E.a, null, o.a.createElement(ve, {
						subredditName: a,
						topPostsVariant: d
					}, o.a.createElement("div", {
						className: pt.a.inFeedAd
					}, T))), O && I && o.a.createElement(E.a, null, o.a.createElement(at.a, {
						subredditName: a,
						truncateThreshold: ht,
						widget: I
					})), S && C.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(E.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(at.a, {
							subredditName: a,
							truncateThreshold: bt,
							widget: e
						}))
					}), o.a.createElement(Qe, {
						subredditId: i,
						subredditName: a
					}), n && o.a.createElement(b.a, {
						className: pt.a.card,
						subredditId: i
					}), j && o.a.createElement(E.a, null, o.a.createElement(at.a, {
						subredditName: a,
						widget: j
					})), s && o.a.createElement(h.a, {
						className: pt.a.card,
						subredditId: i,
						uniqueId: i
					}), o.a.createElement(y.g, {
						subredditId: i
					}), !O && T, o.a.createElement(it, {
						subredditId: i
					}), N && !S && C.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(E.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(at.a, {
							subredditName: a,
							truncateThreshold: g && n ? ht : g ? bt : void 0,
							widget: e
						}))
					}), o.a.createElement(w.a, {
						adComponent: o.a.createElement(_.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: dt.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = gt(vt)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(o);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				E = n.n(O);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => i.a.createElement(b.a, {
					className: Object(c.a)(E.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: E.a.container
				}, e.isLoading ? i.a.createElement(x.a, {
					className: E.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: E.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(I, w({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.t, {
					className: E.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: k.C,
					nightmode: k.X
				}),
				I = Object(a.b)(j)(e => i.a.createElement("div", {
					className: Object(c.a)(E.a.communityItemContainer, {
						[E.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(v.a, {
					className: E.a.communityItemExpandCenter,
					widthRight: h.t
				}, i.a.createElement("div", {
					className: E.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: E.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(E.a.defaultCommunityIcon, {
						[E.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: E.a.communityDescriptionContainer
				}, i.a.createElement(o.a, {
					className: E.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), i.a.createElement("div", {
					className: E.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: E.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: E.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(x.a, {
					className: Object(c.a)(E.a.communityCta, E.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: Object(c.a)(E.a.communityCta, {
						[E.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: E.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = y(e);
					return Object(g.f)(t)
				},
				O = e => {
					const t = k(e);
					return Object(g.f)(t)
				};
			var E = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = n.n(E);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), I = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(x.X)(e);
					return s || r
				},
				nigtmode: x.X,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: i,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = n ? w.a.widgetContentOnly : w.a.widgetContent, b = !s && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, f = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: s,
							[w.a.clickable]: !!a,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: h
					}, d && r.a.createElement("div", {
						className: w.a.widgetHeader,
						style: f
					}, r.a.createElement("div", {
						className: Object(o.a)(w.a.widgetTitle, l)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), i), r.a.createElement("div", {
						className: Object(o.a)(p, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(I(Object(d.a)(Object(l.c)(N))))
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, n) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, n) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.U,
				hideNSFWPref: b.C,
				isActive: p.j,
				moderatorPermissions: u.l,
				modModeEnabled: c.S,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				}) => e(Object(a.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				})),
				handleVote: n => {
					const s = n === d.a.upvoted ? Object(i.db)(t) : Object(i.w)(t);
					e(s)
				},
				onIgnoreReports: () => e(Object(i.Z)(t)),
				onOpenReportsDropdown: t => e(Object(o.h)({
					tooltipId: t
				}))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: s
				}) => t.dispatchFlairChanged({
					post: n.post,
					previewFlair: e,
					selectedTemplateId: s
				})
			}), {
				forwardRef: !0
			});
			t.a = h
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				o = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(o);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(i.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(o.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(d.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(o.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(x, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class i extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
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
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, i = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(i.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(i);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/SubredditWiki.json");
			const i = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, a = i;
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = n.n(r);
			const a = ({
					isLoading: e
				}) => Object(s.a)(i.a.loadingBackground, {
					[i.a["m-loading"]]: e
				}),
				o = e => Object(s.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const o = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(i.b)(e))) return Object(r.b)(e) ? a.SourceElement.Comment : Object(s.x)(t) ? a.SourceElement.PostDetail : Object(s.G)(t) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				i = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				a = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				o = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return _
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(o.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(o.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[r]: n.id
						},
						c = Object(l.v)(e, {
							subredditName: s
						});
					return c ? {
						outbound: {
							...i,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(o.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(o.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				k = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const o = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.post(n, e),
					subreddit: a.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.defaults(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.defaults(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...a.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/sortBy.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/wiki.ts");
			const a = e => {
				return r()(e, e => `${e.path}/`.startsWith(`${i.i}/`) ? `\0${e.path}` : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					n = [];
				return a(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						r = s.parent ? t.get(s.parent) : null;
					r ? r.children.push(s) : n.push(s), t.set(s.path, s)
				}), n
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: n,
					subredditName: s,
					wikiPageName: r
				} = e;
				return `[${s}]--[${r}]--[rev1:${n}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/wiki.ts");
			const r = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				i = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!i.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const n = e.toLowerCase(),
						i = n.split("/")[0],
						o = s.b.has(i),
						d = s.f.has(i) && n !== s.h && n !== s.k;
					if (o || d) return a.RestrictedPageName;
					if (!r.test(n)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === n)) return a.PageAlreadyExists
					}
					return n.length > s.d ? a.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				r = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(o);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const r = e => e.category === s.Supporter,
				i = e => e.category === s.Achievement
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/pages/shared.ts"),
				d = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = n("./src/reddit/components/ContentGate/index.tsx"),
				l = n("./src/reddit/components/HeaderImage/index.tsx"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: n
					} = e, s = Object(m.a)(n, u.W.HOT, {});
					return r.a.createElement(p.a, {
						listingKey: s,
						listingName: n.toLowerCase(),
						subredditId: t.id,
						subredditName: n
					})
				},
				h = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				f = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				x = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				g = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/constants/wiki.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				_ = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				O = n("./src/reddit/components/JumpToContent/index.tsx"),
				E = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				w = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				C = n("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				j = n.n(C);

			function I(e) {
				const {
					wikiPageName: t,
					subredditName: n
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(O.a, null), s.createElement(w.a, {
					isModHub: !1,
					className: j.a.topBar,
					wikiPageName: t,
					subredditName: n
				}), s.createElement(E.a, {
					showRevisionInfo: !0,
					subredditName: n,
					wikiPageName: t
				}))
			}
			var N = n("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				S = n.n(N);
			class T extends r.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: n,
						queryParams: s
					} = e, {
						wikiSubRoute: i,
						wikiPageName: a
					} = n, o = s[g.D], d = s[g.E], c = g.F in s;
					switch (i) {
						case v.m.Create:
						case v.m.Edit:
							return r.a.createElement(f.a, {
								contentClassName: S.a.wikiPageEditorContent,
								isCreation: i === v.m.Create,
								subredditName: t,
								topBarClassName: S.a.communityWikiTopBar,
								wikiPageName: a
							});
						case v.m.Revisions:
							return r.a.createElement(_.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? r.a.createElement(h.a, {
								comparisonRevisionId: Object(k.a)(d),
								revisionId: Object(k.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? r.a.createElement(x.a, {
								revisionId: o ? Object(k.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? r.a.createElement(I, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var P = Object(y.u)()(T),
				B = n("./src/reddit/constants/componentSizes.ts"),
				L = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				R = n("./src/reddit/layout/page/Listing/index.tsx"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				F = n("./src/reddit/selectors/user.ts");
			const M = Object(y.u)(),
				U = Object(i.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(F.f)(e, t.params.subredditName),
					layout: y.Q,
					over18Pref: F.eb,
					subreddit: (e, {
						match: t
					}) => Object(D.v)(e, {
						subredditName: t.params.subredditName || v.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || v.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || v.i
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class A extends r.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: n,
						subredditName: s
					} = this.props, i = !!n && n.isNSFW && !F.eb, a = Object(L.a)(t, i, s);
					if (a) return r.a.createElement(c.default, a);
					const o = `/r/${s}/`;
					return r.a.createElement(R.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: B.i,
						navBar: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: n ? n.name : s,
							maxWidth: B.i,
							subredditOrProfile: n,
							url: o
						}), r.a.createElement(d.a, {
							subreddit: n || void 0,
							subredditId: n ? n.id : void 0,
							subredditName: s,
							subredditUrl: o
						})),
						content: r.a.createElement(P, {
							subredditName: s
						}),
						sidebar: n && r.a.createElement(b, {
							subreddit: n,
							subredditName: s
						})
					})
				}
			}
			t.default = M(U(A))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts"),
				i = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var o = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case r.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								o = s.filter(i.a).map(e => e.type),
								d = s.filter(i.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: o,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let r = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const n = a.filter(i.a),
									s = n.map(({
										type: e
									}) => e),
									o = a.filter(i.b),
									d = o.map(({
										type: e
									}) => e),
									c = l(n),
									u = l(o);
								r = {
									...r,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: r
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: i
							} = t.payload;
							return Object(o.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: r,
								pendingSupporterType: i
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: i
							} = t.payload;
							return Object(o.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: r,
								preferredSupporterType: i,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(o.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: r
							} = t.payload;
							return Object(o.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: r
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = u, t) => {
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const r = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: r.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = e => s.jc.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: i.K,
				experimentName: s.ic
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: a.a
				}
			});
			const o = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var n, s;
					return t ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s, r;
					return t && n ? null === (r = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === r ? void 0 : r[n] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, m], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						r = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === r
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([o, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: r
					} = e, {
						supporterTypes: i,
						achievementTypes: a,
						preferredSupporterType: o,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, i, r, c || o),
						achievementFlairs: g(s, a, r, l || d)
					}
				}),
				f = Object(s.a)([c], e => !!e && e.isHidden),
				x = Object(s.a)([o, c, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				v = (e, {
					commentId: t
				}) => {
					const n = Object(r.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						i = null == n ? void 0 : n.authorId;
					return !(!s || !i) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, r, i;
						return t && n ? null === (i = null === (r = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === r ? void 0 : r[n]) || void 0 === i ? void 0 : i[t] : null
					})(e, {
						subredditId: s,
						userId: i
					})
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const o = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: s.Me
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.Te.SmIcon || t === s.Te.SmIconHc
				},
				l = (e, {
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
					const n = Object(a.T)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return _
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				a = (e, t) => {
					var n;
					const {
						subredditName: s
					} = t;
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.api.wiki.pending[n.toLowerCase()]
				},
				d = (e, t) => {
					var n;
					const s = Object(r.a)(t);
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				c = (e, {
					listingKey: t
				}) => e.pages.subredditWiki.revisions.listings[t],
				l = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.pending[t],
				u = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.error[t],
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				b = (e, t) => {
					const n = Object(r.a)(t);
					return e.pages.subredditWiki.pageSettings[n]
				},
				h = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[n.toLowerCase()]
				},
				f = Object(s.a)((e, {
					subredditName: t
				}) => {
					const n = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						r = s.userOrder[n],
						a = s.models[n];
					return r ? r.map(e => a[e]) : i
				}),
				x = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[n.toLowerCase()]
				},
				g = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[n.toLowerCase()]
				},
				v = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[n.toLowerCase()]
				},
				y = Object(s.a)((e, {
					subredditName: t
				}) => {
					const n = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						r = s.userOrder[n],
						a = s.models[n];
					return r ? r.map(e => a[e]) : i
				}),
				k = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[n.toLowerCase()]
				},
				_ = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[n.toLowerCase()]
				}
		},
		"./src/redditGQL/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/redditGQL/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/redditGQL/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/redditGQL/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.099a53108faf89df2721.js.map