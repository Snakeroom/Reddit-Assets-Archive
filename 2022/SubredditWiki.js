// https://www.redditstatic.com/desktop2x/SubredditWiki.0ae11f6f8c0afce45597.js
// Retrieved at 5/2/2022, 11:00:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
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
					var n, i = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						d = /nexus\s*[0-6]\s*/i.test(t),
						a = !d && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !i && !l && /macintosh/i.test(t),
						v = !o && !u && !m && !p && /linux/i.test(t),
						x = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !O && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, x ? (n.msedge = e, n.version = x) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : u ? n = {
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
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? n = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, g && (n.version = g)) : i ? (n = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, g && (n.version = g)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && g && (n.version = g)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && i ? (n[i] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : j ? (n.xbox = e, n.osname = "Xbox") : h ? (n.windows = e, n.osname = "Windows") : v && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var E = "";
					n.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (n.osversion = E);
					var w = !n.windows && E.split(".")[0];
					return O || a || "ipad" == i || o && (3 == w || w >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == i || "ipod" == i || o || d || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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

				function i(e) {
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

				function o(e, r, n) {
					var o = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (o = t(n));
					var d = "" + o.version;
					for (var a in e)
						if (e.hasOwnProperty(a) && o[a]) {
							if ("string" != typeof e[a]) throw new Error("Browser version in the minVersion map should be a string: " + a + ": " + String(e));
							return i([d, e[a]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = i, s.check = function(e, t, s) {
					return !o(e, t, s)
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
				return n(e, (function(e, n, i) {
					s = r ? (r = !1, e) : t(s, e, n, i)
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
				i = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				d = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var a = d(e) ? r : o,
					c = arguments.length < 3;
				return a(e, i(t, 4), s, c, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				d = 4294967295,
				a = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var s = d,
					c = a(e, d);
				t = n(t), e -= d;
				for (var l = r(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			const r = e => {
					let t = 0,
						s = 0;
					const r = [0];
					for (const n of e) t++, s += n.length, r[t] = s;
					return r
				},
				n = e => {
					let t = 0,
						s = 0;
					const r = [];
					for (const n of e) {
						for (let e = 0; e < n.length; e++) r[s] = t, s++;
						t++
					}
					return r[s] = t, r
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/config.ts"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/controls/InternalLink/index.tsx"),
				l = s("./src/reddit/hooks/useClickSourceData.ts"),
				u = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = s("./src/reddit/components/AuthorLink/index.m.less"),
				p = s.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, s;
				const r = Object(o.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					h = Object(i.d)(),
					f = Object(i.e)(u.b),
					v = Object(i.e)(u.c),
					x = t => {
						var s;
						if (null === (s = e.onClick) || void 0 === s || s.call(e, t), f || v) {
							const s = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${d.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(a.db)(s))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: r,
					href: `${d.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: x
				}), e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(o.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(c.a, b({}, null !== (s = e.linkProps) && void 0 !== s ? s : {}, {
					className: r,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: x
				}), e.children)
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "MSTY2ZpsdupobywLEfx9u",
				stickyWrapper: "VJkPo4gom3XvkL4X-w0JS",
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				isSticking: "ZGQod_mafxz0rQZ6X1osG",
				buttonWrapper: "_2I_YJCANrzkY2DZkeu2nht",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				SubredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				subredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				blur: "_38oiFpMv7UiE7wnlYWtYvR",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/actions/subreddit/notifications.ts"),
				m = s("./src/lib/combineRefs/index.tsx"),
				p = s("./src/lib/hooks/useOnClickOutside.ts"),
				b = s("./src/lib/hooks/useTooltip.ts"),
				h = s("./src/reddit/components/CommonTooltip/index.m.less"),
				f = s.n(h);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = n.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: s,
						className: i,
						arrowClassName: o,
						...a
					} = e;
					const [c, l] = Object(r.useState)(t);
					return Object(r.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? n.a.createElement("div", v({
						id: s,
						className: Object(d.a)(f.a.tooltip, i, {
							[f.a.visible]: c
						})
					}, a.popperProps), c && n.a.createElement(n.a.Fragment, null, a.arrowProps && n.a.createElement("div", v({
						className: Object(d.a)(f.a.arrow, o)
					}, a.arrowProps)), a.children)) : null
				})),
				g = s("./src/reddit/models/Subreddit/index.ts");
			const O = e => {
					switch (e) {
						case g.b.FREQUENT:
							return "notification_frequent";
						case g.b.OFF:
							return "notification_off";
						case g.b.LOW:
						default:
							return "notification"
					}
				},
				y = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				j = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var E = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				I = s("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				C = s.n(I);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var N = e => {
					return n.a.createElement(w.a, {
						id: e.dropdownId,
						className: C.a.notificationDropdown
					}, [{
						displayText: E.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(g.b.FREQUENT),
						isSelected: e.notificationLevel === g.b.FREQUENT,
						icon: n.a.createElement(k.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === g.b.FREQUENT
						})
					}, {
						displayText: E.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(g.b.LOW),
						isSelected: e.notificationLevel === g.b.LOW,
						icon: n.a.createElement(k.a, {
							name: "notification",
							isFilled: e.notificationLevel === g.b.LOW
						})
					}, {
						displayText: E.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(g.b.OFF),
						isSelected: e.notificationLevel === g.b.OFF,
						icon: n.a.createElement(k.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === g.b.OFF
						})
					}].map(e => n.a.createElement(_.b, S({
						className: Object(d.a)(C.a.notificationDropdown, C.a.notificationRow, {
							[C.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...T.n(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: T.gb(t)
			});
			var B = s("./src/reddit/hooks/useTracking.ts"),
				M = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const F = c.a.img("SubredditIcon", C.a),
				D = c.a.wrapped(M.a, "DefaultIcon", C.a);
			var R = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: s,
						subredditIcon: r,
						onHide: i,
						onUpdate: o
					} = e;
					const d = Object(B.a)(),
						a = s ? n.a.createElement(F, {
							src: r || void 0
						}) : n.a.createElement(D, null),
						c = `r/${t}`;
					return n.a.createElement("div", {
						className: C.a.notificationPopup
					}, n.a.createElement("div", {
						className: C.a.title
					}, n.a.createElement("h2", null, E.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), n.a.createElement("h3", null, E.fbt._("{subreddit name}", [E.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), n.a.createElement("div", {
						className: C.a.subredditWrapper
					}, n.a.createElement("div", {
						className: C.a.subredditTitle
					}, a, n.a.createElement("span", null, c), n.a.createElement(k.a, {
						name: "notification_frequent",
						className: C.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(P.t, {
						className: C.a.subscribeButton,
						priority: P.c.Primary,
						size: P.d.M,
						text: E.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), o(g.b.FREQUENT), d(L(g.b.FREQUENT.toLowerCase()))
						}
					})), n.a.createElement("button", {
						className: C.a.hideButton,
						onClick: i
					}, E.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				H = s("./src/reddit/helpers/localStorage/index.ts");
			var U = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var W = e => {
					const t = Object(i.d)(),
						s = Object(B.a)(),
						o = Object(b.b)(y),
						d = Object(b.b)(j),
						[a, c] = function(e, t) {
							const [s, n] = Object(r.useState)(Object(H.O)(e, t));
							return [s, Object(r.useCallback)(() => {
								const s = Object(H.a)(e, t);
								n(s)
							}, [e, t, n])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(U.a)(e));
					Object(r.useEffect)(() => {
						e.notificationLevel !== g.b.LOW && e.notificationLevel !== g.b.OFF || c()
					}, [e.subredditId]);
					const h = 2 === a,
						f = () => {
							o.hide()
						},
						v = () => {
							d.hide()
						};
					Object(r.useEffect)(() => (h && (d.update && d.update(), d.show()), () => {
						v(), f()
					}), [e.subredditName, h]);
					const E = () => {
							v(), o.show()
						},
						w = (e => `dropdown-${e}`)(e.subredditName),
						_ = (e => `popup-${e}`)(e.subredditName);
					Object(p.a)(w, f);
					const I = Object(r.useCallback)(e => {
							e.stopPropagation(), o.visible ? f() : E()
						}, [f, E, o.visible]),
						S = Object(r.useCallback)(t => {
							t === g.b.FREQUENT && Object(H.cb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						P = Object(r.useCallback)(r => {
							const {
								subredditId: n
							} = e;
							f(), v(), t(Object(u.b)({
								subredditId: n,
								notificationLevel: r,
								successCallback: () => S(r)
							})), s(L(r.toLowerCase()))
						}, [f, e.subredditId, t, s]);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
						type: "button",
						className: C.a.notificationButton,
						ref: Object(m.a)(o.target.ref, d.target.ref),
						onClick: I,
						"data-testid": "subredditNotificationButton"
					}, n.a.createElement(k.a, {
						name: O(e.notificationLevel),
						className: C.a.notificationIcon,
						isFilled: !0
					})), n.a.createElement(x, {
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: w
					}, n.a.createElement(N, {
						dropdownId: w,
						notificationLevel: e.notificationLevel,
						onClick: P
					})), h && !l && n.a.createElement(x, {
						arrowProps: d.arrowProps,
						popperProps: d.popperProps,
						visible: d.visible,
						tooltipId: _,
						className: C.a.popupTooltip
					}, n.a.createElement(R, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: v,
						onUpdate: P
					})))
				},
				A = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				V = s("./src/reddit/components/SubredditNav/index.tsx"),
				G = s("./src/reddit/components/SubscribeButton/index.tsx"),
				J = s("./src/reddit/constants/componentSizes.ts"),
				q = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/featureFlags/index.ts"),
				K = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				X = s("./src/reddit/constants/tracking.ts");
			var Q = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Z = s("./src/reddit/hooks/useWindowEvent.ts"),
				$ = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ee = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				te = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/selectors/widgets.ts"),
				ie = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				oe = s.n(ie);
			const de = c.a.img("SubredditIcon", oe.a),
				ae = Object(o.c)({
					notificationLevel: se.H,
					nsfwBlurSubreddit: ee.d,
					spPollsEnabled: z.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(te.a)(e, {
							subredditId: s
						})
					},
					tournamentsEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return !!s && Object(se.O)(e, {
							subredditId: s
						})
					},
					userId: re.i,
					userIsSubscriber: (e, t) => {
						let {
							subredditName: s
						} = t;
						const r = s;
						return Object(se.gb)(e, {
							identifier: {
								name: r,
								type: "subreddit"
							}
						})
					},
					widget: (e, t) => {
						let {
							subredditId: s
						} = t;
						return s ? Object(ne.f)(e, {
							subredditId: s
						}) : void 0
					}
				}),
				ce = {
					threshold: [.5, .001],
					rootMargin: `${1-J.f}px 0px 0px 0px`
				};
			t.a = Object(i.b)(ae, (e, t) => ({
				_updateSubredditInfo: () => {
					var s;
					const r = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (r) return e(Object(u.a)({
						subredditAboutInfo: {
							[r]: {
								notificationLevel: g.b.LOW
							}
						}
					}))
				}
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(a.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					o = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					c = Object(i.e)($.b),
					u = Object(i.e)($.a),
					m = c || u,
					[p, b] = Object(r.useState)(!1),
					h = Object(r.useRef)(null),
					[f, v] = Object(r.useState)(),
					[x, g] = Object(r.useState)(null),
					O = Object(r.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: s
							} = t;
							s >= .5 ? e(!1) : s <= .001 && e(!0)
						})
					})(b), []);
				Object(Z.a)("resize", ((e, t, s) => () => {
					var r;
					e(t && s ? null === (r = t.getBoundingClientRect()) || void 0 === r ? void 0 : r.height : void 0)
				})(v, x, m)), Object(Q.a)(h, O, ce);
				const y = e.subreddit && Object(K.a)(e),
					j = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					E = s.charAt(0).toUpperCase() + s.slice(1),
					w = !!e.subreddit && e.subredditInlineEditingEnabled,
					_ = Object(d.a)(oe.a.SubredditIcon, oe.a.editableIcon, {
						[oe.a.emptyEditableIcon]: !y
					}),
					k = j ? n.a.createElement(A.a, {
						className: _,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : n.a.createElement(M.a, {
						className: oe.a.DefaultIcon
					}),
					I = j ? n.a.createElement(de, {
						className: Object(d.a)(oe.a.SubredditIconImg, {
							[oe.a.blur]: e.nsfwBlurSubreddit
						}),
						src: y || void 0
					}) : n.a.createElement(M.a, {
						className: Object(d.a)(oe.a.DefaultIcon, {
							[oe.a.blur]: e.nsfwBlurSubreddit
						})
					}),
					C = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					S = e.layout ? e.layout === q.g.Large ? "984px" : "100%" : "1086px";
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(d.a)(oe.a.wrapper, {
						[oe.a.stickyWrapper]: m,
						[oe.a.isSticking]: p
					})
				}, n.a.createElement("div", {
					className: oe.a.container,
					style: {
						maxWidth: S
					},
					ref: m ? g : void 0
				}, n.a.createElement("div", {
					className: oe.a.subredditMetaContainer
				}, w ? k : I, n.a.createElement("div", {
					className: Object(d.a)(oe.a.textContainer, {
						[oe.a.textContainerNoIcon]: !j
					})
				}, n.a.createElement("div", {
					className: Object(d.a)(oe.a.text, {
						[oe.a.blur]: e.nsfwBlurSubreddit
					})
				}, n.a.createElement("h1", {
					className: oe.a.title
				}, a || E), !!a && n.a.createElement("h2", {
					className: oe.a.description
				}, "r/", s)), n.a.createElement("div", {
					className: oe.a.buttonWrapper
				}, n.a.createElement("div", {
					className: oe.a.subscribeButtonContainer
				}, n.a.createElement(G.a, {
					className: oe.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...T.n(t),
							source: "sticky_banner",
							action: X.c.CLICK,
							noun: e,
							subreddit: T.gb(t)
						}))(t) : (e => t => ({
							...T.n(t),
							source: "id_banner",
							action: X.c.CLICK,
							noun: e,
							subreddit: T.gb(t)
						}))(t)
					},
					identifier: {
						name: s,
						type: Y.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(H.cb)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && n.a.createElement("div", {
					className: oe.a.notificationButtonContainer
				}, n.a.createElement(W, {
					notificationLevel: e.notificationLevel,
					subredditName: s,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: j,
					userId: e.userId
				}))))), C && n.a.createElement(V.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: o,
					subredditId: t,
					subredditNavContainerClassName: oe.a.subredditNavContainer
				}))), n.a.createElement("div", {
					className: oe.a.intersectionWrapper
				}, n.a.createElement("div", {
					style: {
						height: m ? f : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(s.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
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
				o = Object(n.a)("spBurnLinks", Object(r.a)({
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip";
			t.b = Object(r.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("AuthorHovercard~Reddit"), s.e("AuthorHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return y
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(a.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var s;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (s = t.onShow) || void 0 === s || s.call(t)
					}
				})),
				f = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = s.n(f);
			class x extends n.a.Component {
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
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
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
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const g = i.a.wrapped(x, "HoverDiv", v.a),
				O = m(g),
				y = h(g)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				i = s("./src/reddit/components/Hovercards/helpers.m.less"),
				o = s.n(i);
			const d = r.a.wrapped(n.a, "UserActionItem", o.a),
				a = e => {
					const {
						author: t,
						itemId: s,
						subredditName: r,
						tooltipIdPrefix: n,
						tooltipType: i
					} = e;
					let o = n;
					return s && (o = `${o}--${s}`), i && (o = `${o}--${i}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "i", (function() {
				return C
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/lodash/isNil.js"),
				a = s.n(d),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...r
							}
						} = this;
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					a()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					a()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(h.b)(e, t),
					r = Object(f.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(i.b)(() => Object(o.a)(v, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
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
			const g = (e, t) => {
				const s = Object(h.b)(e, t),
					r = Object(f.J)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var O = Object(i.b)(() => Object(o.a)(g, e => e))(e => n.a.createElement(p, {
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
			var y = Object(i.b)(() => Object(o.c)({
					subreddit: f.U
				}))(e => n.a.createElement(p, {
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
				j = s("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const t = Object(j.a)(),
					s = Object(r.useMemo)(() => ({
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var w = e => {
				const t = Object(j.a)(),
					s = Object(r.useMemo)(() => ({
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var _ = e => {
				const t = Object(j.a)(),
					s = Object(r.useMemo)(() => ({
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var k = Object(i.b)(() => Object(o.c)({
				subreddit: f.U
			}))(e => n.a.createElement(p, {
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
			var I = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
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
			var C = Object(i.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(f.U)(e, {
						subredditId: s
					}) : null
				}
			}))(e => n.a.createElement(p, {
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
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/components/Media/index.m.less"),
				d = s.n(o);
			const a = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: s
					} = e;
					return i.a.createElement("div", {
						className: d.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: d.a.unblurButton
					}, a(t, s)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.eb
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(d.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), e.isTweet || (r.height = "100%"), n.a.createElement("iframe", {
					className: Object(a.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: r,
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
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/ads.ts"),
				x = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/constants/tracking.ts"),
				w = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				_ = s.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => e > 2 * g.e,
				C = e => {
					const t = Object(c.a)(_.a.image, h.g, e.className, {
							[_.a.mShowCentered]: e.showCentered,
							[_.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && I(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(g.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.L)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(_.a.container, e.className),
						style: t
					}, e.children)
				},
				N = Object(o.b)(() => Object(a.a)(O.F, j.kb, (e, t) => {
					let {
						isSponsored: s,
						postId: r
					} = t;
					return s && r ? Object(O.b)(e, r) : null
				}, y.d, O.G, (e, t, s, r, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: r.pageType,
					post: n
				})));
			t.a = N(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(v.a)(e.post, e.pageType)
					}
				}, T(e)) : e.isListing && e.postPermalink ? i.a.createElement(d.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, T(e)) : T(e)
			});
			const P = (e, t) => i.a.createElement(C, {
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
				T = e => {
					let {
						onClick: t,
						...s
					} = e;
					const n = Object(g.L)(s.height, s.width),
						o = I(s.height) && n;
					return i.a.createElement(S, k({}, s, {
						className: `${n?`${E.a} `:""}${s.className||""}`
					}), s.isListing ? i.a.createElement("div", {
						className: s.contentImageClassName
					}, P(n, s)) : i.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: _.a.imageLink
					}, P(n, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > g.j && Object(g.L)(s.height, s.width) && i.a.createElement("div", {
						className: _.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && i.a.createElement(b.a, {
						onClick: t
					}))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/forceHttps/index.ts"),
				d = s("./src/reddit/models/Media/index.ts"),
				a = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(a);
			const l = e => {
				let t = null;
				(e.showFull || e.height < d.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
					r = e.blurSrc ? n.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					a = Object(d.B)(e.height, e.width, e.forceAspectRatio);
				return n.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, r, !e.isGalleryTileLayout && n.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${a}%`
					}
				}), n.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends n.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return n.a.Children.only(this.props.children) || n.a.createElement("div", null)
					}
					return n.a.createElement(l, this.props)
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
			s.d(t, "a", (function() {
				return _
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@reddit/adblock-detection/browser.js"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/video.ts"),
				m = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const f = 100,
				v = f / 2 / 1e3;
			var x = s("./src/lib/forceHttps/index.ts"),
				g = s("./src/lib/hooks/usePrevious.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function y(e) {
				let {
					autoplay: t,
					isListing: s,
					isNotCardView: r,
					onBufferingChange: n,
					shouldLoad: d,
					shouldPause: a,
					showCentered: c,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(i.useRef)(),
					b = Object(i.useRef)(),
					h = Object(g.a)(a);

				function y(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (y(!a && (t || r)), b.current && n) return p.current = function(e, t) {
						let s = !1,
							r = !1;
						const n = () => s = !0,
							i = () => r = !0;
						e.addEventListener("loadeddata", n), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							d = 0,
							a = 0;
						const c = window.setInterval(() => {
							if (a = e.currentTime, r) return r = !1, void(d = a);
							if (e.paused || e.seeking || !s) return void(d = a);
							const n = o;
							4 === e.readyState ? o = !1 : !o && a >= d && a < d + v ? o = !0 : o && a >= d && a > d + v && (o = !1), d = a, n !== o && t(o)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", n)
						}
					}(b.current, n), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					h !== a && y(!a && (t || r))
				}, [h, a, t, r]), o.a.createElement("video", O({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var j = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = s.n(j);
			const w = Object(a.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function _(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: r,
					metadata: i,
					started: a
				} = Object(d.e)(t => w(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: v,
					isNotCardView: x,
					showFull: g,
					shouldPause: O,
					width: j,
					isListing: _,
					className: k,
					showCentered: I,
					originalSource: C,
					isPromoted: S
				} = e, N = t && !(S && Object(c.hasAcceptableAds)()), P = Object(d.d)();

				function T(e) {
					P(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function L() {
					return P(Object(u.z)({
						postId: b
					}))
				}
				const B = n()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(b))
				}, 200);

				function M(e) {
					e.persist(), B(e)
				}

				function F(e) {
					var t;
					(i || R(e), a) || (t = e.timeStamp, P(Object(u.A)(b, t)))
				}

				function D(e) {
					P(Object(u.q)(b, e.timeStamp))
				}

				function R(e) {
					! function(e) {
						P(Object(u.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function H(e) {
					r || F(e), i || R(e), P(Object(u.C)(b))
				}

				function U() {
					const e = {};
					return I && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.e}px`), o.a.createElement(y, {
						autoplay: N,
						className: Object(l.a)(m.a, E.a.styledVideo),
						height: v,
						isListing: _,
						isNotCardView: x,
						key: b,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: D,
						onLoadedData: F,
						onLoadedMetadata: R,
						onPause: L,
						onPlaying: H,
						onTimeUpdate: M,
						shouldLoad: h,
						shouldPause: O,
						showCentered: I,
						showFull: g,
						source: f,
						style: e,
						width: j
					})
				}
				return _ ? U() : o.a.createElement("div", {
					className: Object(l.a)(E.a.container, k, {
						[E.a.centered]: I
					})
				}, o.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
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
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), s.e("ModProgressModule")]).then(s.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				v = s.n(f);
			const x = c.a.wrapped(m.a, "_Dropdown", v.a),
				g = Object(u.a)(x),
				O = c.a.button("MenuButton", v.a),
				y = c.a.wrapped(p.b, "DropdownRow", v.a),
				j = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				E = Object(o.b)(j, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				w = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => i.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[v.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: w(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: v.a.MenuIcon
			}), i.a.createElement(g, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = s.n(h);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: d,
					post: h,
					share: x
				} = e;
				const g = Object(l.b)(),
					O = Object(o.d)(),
					y = h && h.id,
					j = h && h.voteState;
				let E = null;
				y || (E = t ? "user_hovercard" : "profile_overview");
				const w = Object(n.useCallback)(() => g(Object(m.g)(t ? "user_hovercard" : "profile_overview", s)), [t, g, s]);
				return i.a.createElement(u.t, {
					onClick: () => {
						d ? (g(m.h), y && j === b.a.notVoted && O(Object(a.kb)(y))) : w();
						const e = d ? "postify" : "copy";
						O(Object(c.b)({
							clickSource: E,
							share: x,
							source: e
						}))
					},
					className: Object(r.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: d
					}),
					isFullWidth: !0
				}, i.a.createElement(p.a, {
					className: Object(r.a)({
						[f.a.shirtIcon]: !d,
						[f.a.avatarPostButtonShirtIcon]: d
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), i.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = a.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, r, n) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									n && r(s, n), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(r.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(r.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(d.a)(h))
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				v = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				g = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...r
					} = e;
					return i.a.createElement(x, p({}, r, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", u.a),
				O = Object(c.a)(m.a.wrapped(a.b, "Component", u.a), [d.a.Click, d.a.Keydown]);
			class y extends i.a.Component {
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
					return i.a.createElement(g, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(f, null, i.a.createElement(v, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(O, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = y
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
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "v", (function() {
				return v
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "o", (function() {
				return C
			})), s.d(t, "q", (function() {
				return S
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "w", (function() {
				return L
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/components/RichTextJson/elements.m.less"),
				d = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [a.a.div("H1", d.a), a.a.div("H2", d.a), a.a.div("H3", d.a), a.a.div("H4", d.a), a.a.div("H5", d.a), a.a.div("H6", d.a)],
				u = a.a.hr("Hr", d.a),
				m = a.a.code("M", d.a),
				p = a.a.pre("Pre", d.a),
				b = a.a.blockquote("Blockquote", d.a),
				h = a.a.p("P", d.a),
				f = a.a.li("Li", d.a),
				v = a.a.ul("Ul", d.a),
				x = a.a.ol("Ol", d.a),
				g = a.a.strong("B", d.a),
				O = a.a.em("I", d.a),
				y = a.a.span("U", d.a),
				j = e => n.a.createElement("del", e),
				E = a.a.sub("Sub", d.a),
				w = a.a.sup("Sup", d.a),
				_ = a.a.table("Table", d.a),
				k = a.a.tr("Tr", d.a),
				I = a.a.td("Tdl", d.a),
				C = a.a.td("Tdc", d.a),
				S = a.a.td("Tdr", d.a),
				N = a.a.th("Thl", d.a),
				P = a.a.th("Thc", d.a),
				T = (a.a.th("Thr", d.a), a.a.wrapped(e => n.a.createElement(i.b, e), "A", d.a)),
				L = a.a.wrapped(c.a, "A", d.a)
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
				return w
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return I
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/findLastIndex.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				u = s("./src/reddit/components/Media/BlurredContent.tsx"),
				m = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				f = s("./src/reddit/components/RichTextJson/media.tsx"),
				v = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.m.less"),
				g = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				j = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...r
					} = e;
					return d.a.createElement(y, O({}, r, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: s,
								...r
							}))
						}
					}))
				}),
				E = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				w = e => i()(e, E),
				_ = e => e.findIndex(E),
				k = e => {
					const {
						altText: t,
						className: s,
						content: r,
						isListing: n,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: x,
						useExplicitTextColor: O,
						shouldBlur: E
					} = e, k = r.document, I = [], C = e.mediaMetadata || null, S = _(k), N = w(k);
					if (E && !n && !o) return d.a.createElement(y, {
						className: Object(a.a)(m.j, s)
					}, d.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, d.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== S)
						for (let d = S; d <= N; d++) {
							const e = k[d];
							switch (e.e) {
								case h.k:
									I.push(v.c(e, x, d));
									break;
								case h.l:
									I.push(v.d(d));
									break;
								case h.b:
									I.push(v.a(e, C, x, d));
									break;
								case h.c:
									I.push(v.b(e, d));
									break;
								case h.p:
									I.push(v.f(e, C, x, d));
									break;
								case h.z:
									I.push(v.h(e, C, x, d));
									break;
								case h.u:
									I.push(v.g(e, C, x, d));
									break;
								case h.h:
									I.push(Object(f.a)(e, d));
									break;
								case h.m:
								case h.a:
								case h.D:
									I.push(...Object(f.b)(e, d, C, b, p, t))
							}
						}
					return O ? d.a.createElement(y, {
						className: Object(a.a)(m.j, s)
					}, I) : d.a.createElement(j, {
						className: Object(a.a)(m.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, I)
				};
			class I extends d.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => r.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
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
						return k(t)
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
				return k
			})), s.d(t, "b", (function() {
				return C
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/config.ts"),
				a = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				f = s("./src/reddit/components/RichTextJson/media.m.less"),
				v = s.n(f),
				x = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = /\/(\w+)\/asset\/(\w+)\//,
				y = x.a.wrapped(h.a, "A", v.a),
				j = x.a.wrapped(l.a, "ImageBox", v.a),
				E = x.a.wrapped(e => i.a.createElement("p", e), "Caption", v.a),
				w = x.a.div("Placeholder", v.a),
				_ = x.a.wrapped(e => {
					let {
						className: t,
						e: s,
						...n
					} = e;
					const o = s === b.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(w, g({
						className: t,
						style: {
							"--placeholder-content-text": `'${o}'`
						}
					}, n))
				}, "Placeholder", v.a),
				k = (e, t) => {
					let {
						c: s,
						x: r,
						y: n
					} = e;
					return i.a.createElement("div", {
						className: v.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: n,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: s,
						height: n,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				I = (e, t, s) => {
					const r = e.c;
					let n = "";
					return s && (s.e === b.s ? n = s.s.u : s.e === b.r ? n = s.s.gif : s.e === b.t && (n = (e => {
						const t = O.exec(e);
						return t ? `${d.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), n ? i.a.createElement(y, {
						href: n,
						key: t,
						title: r
					}, r || n) : null
				},
				C = (e, t, s, r, n, d) => {
					const c = b.E(s, e.id);
					if (r) return [I(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push(((e, t, s, r) => {
						let {
							id: n,
							s: d
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: s
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(j, {
							altText: r,
							originalSource: d.u,
							postId: n,
							source: d.u,
							height: d.y,
							width: d.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(c, t, !!e.c, d)) : c.e === b.r ? l.push(((e, t, s) => {
						let {
							id: r,
							ext: n,
							s: d
						} = e;
						if (Object(p.g)(r)) {
							const e = n || Object(p.f)(r);
							return i.a.createElement("div", {
								className: Object(o.a)(v.a.MediaWrapper, {
									[v.a.mHasCaption]: s
								})
							}, i.a.createElement(y, {
								href: e,
								key: t,
								target: "_blank"
							}, d.mp4 ? i.a.createElement("video", {
								className: v.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: d.mp4
							})) : {
								originalSource: e
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: s
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: r,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push(((e, t, s, r) => {
						let {
							hlsUrl: n,
							dashUrl: d,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: s
							})
						}, i.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, i.a.createElement(a.b, {
							shouldLoad: !0,
							shouldPause: !0,
							autoPlay: m,
							hlsSource: n,
							mpegDashSource: d,
							postId: r,
							isGif: m
						})))
					})(c, t, !!e.c, n)) : l.push(((e, t) => i.a.createElement(_, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => i.a.createElement(E, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "g", (function() {
				return H
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "e", (function() {
				return W
			}));
			var r = s("./src/lib/unicodeUtils/index.ts"),
				n = s("./node_modules/lodash/reduce.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = s.n(v);
			const g = 1e3,
				O = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class j extends d.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, O)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.gb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, r, n;
					t.e === p.s ? (s = t.s.x, r = t.s.y, n = t.s.u) : t.e === p.r && (s = t.s.x, r = t.s.y, n = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return n ? d.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, d.a.createElement("img", {
						id: i,
						src: n,
						width: s,
						height: r,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && d.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var E = Object(u.c)(j),
				w = s("./src/reddit/components/RichTextJson/media.tsx"),
				_ = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = s("./src/reddit/components/SubredditMention/index.tsx"),
				I = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				C = s("./src/reddit/helpers/isComment.ts"),
				S = s("./src/reddit/helpers/isPost.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts"),
				P = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, s) => {
					const r = e.c || [],
						n = e.l,
						i = [],
						o = r.length;
					for (let d = 0; d < o; d++) {
						const e = r[d];
						i.push(e.e === p.w ? e.t : W(e, t, d))
					}
					const c = a.x[n - 1];
					return d.a.createElement(c, {
						key: s
					}, i)
				},
				L = e => d.a.createElement(a.e, {
					key: e
				}),
				B = (e, t, s, r) => {
					const n = e.c;
					if (!n) return;
					const i = n.length,
						o = [];
					for (let d = 0; d < i; d++) o.push(D(n[d], t, s, d));
					return d.a.createElement(a.c, {
						key: r
					}, o)
				},
				M = (e, t) => {
					const s = e.c;
					return d.a.createElement(a.k, {
						key: t
					}, d.a.createElement(a.h, null, s.reduce((e, t, s, r) => e += t.t + (s < r.length ? "\n" : ""), "")))
				},
				F = (e, t, s, r) => {
					const n = e.c,
						i = [],
						o = n.length;
					for (let l = 0; l < o; l++) {
						const e = n[l].c;
						e && e.length && i.push(d.a.createElement(a.g, {
							key: l
						}, e.map((e, r) => D(e, t, s, r))))
					}
					const c = e.o ? a.i : a.v;
					return d.a.createElement(c, {
						key: r
					}, i)
				},
				D = (e, t, s, r) => {
					switch (e.e) {
						case p.b:
							return B(e, t, s, r);
						case p.c:
							return M(e, r);
						case p.k:
							return T(e, s, r);
						case p.l:
							return L(r);
						case p.p:
							return F(e, t, s, r);
						case p.u:
							return H(e, t, s, r);
						case p.z:
							return R(e, t, s, r)
					}
				},
				R = (e, t, s, r) => {
					const n = e.c,
						i = e.h,
						o = n.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let a = 0; a < c; a++) {
						const e = i[a],
							{
								H: r,
								D: n
							} = J(e.a),
							{
								c: o = []
							} = e;
						l.push(d.a.createElement(r, {
							key: a
						}, U(o, t, s))), m[a] = n
					}
					for (let p = 0; p < o; p++) {
						const e = n[p],
							r = e.length,
							i = [];
						for (let n = 0; n < r; n++) {
							const r = m[n],
								{
									c: o = []
								} = e[n];
							i.push(d.a.createElement(r, {
								key: n
							}, U(o, t, s)))
						}
						u.push(d.a.createElement(a.t, {
							key: p
						}, i))
					}
					return d.a.createElement(a.n, {
						key: r
					}, d.a.createElement("thead", null, d.a.createElement(a.t, null, l)), d.a.createElement("tbody", null, u))
				},
				H = (e, t, s, r) => {
					if (!e.c || !e.c.length) return (e => d.a.createElement(a.j, {
						key: e
					}, d.a.createElement("br", null)))(r);
					const n = e.c[0];
					return n.e !== p.m && n.e !== p.a || !Object(N.g)(n.id) ? d.a.createElement(a.j, {
						key: r
					}, U(e.c, t, s)) : Object(w.b)(n, r, t)
				},
				U = (e, t, s) => {
					const r = [],
						n = e.length;
					for (let i = 0; i < n; i++) {
						const n = e[i];
						if (n.e === p.A) r.push(A(n, i));
						else if (n.e === p.x) r.push(d.a.createElement(_.a, {
							key: i
						}, U(n.c, t, s)));
						else if (n.e === p.n) r.push(d.a.createElement("br", {
							key: i
						}));
						else if (n.e === p.m || n.e === p.a) {
							if (n.id.startsWith("emote|")) {
								const e = p.E(t, n.id);
								e && r.push(d.a.createElement(E, {
									key: i,
									node: n,
									media: e
								}))
							}
						} else r.push(W(n, s, i))
					}
					return r
				},
				W = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const r = A({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(I.b)(e.u)) return d.a.createElement(a.w, {
								to: e.u,
								key: s,
								title: e.a
							}, r);
							let n, i;
							const o = Object(P.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(S.b)(c) && (n = c.postId), c && Object(C.b)(c) && (i = c.id, n = c.postId), d.a.createElement(a.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: o,
								postId: n,
								commentId: i
							}, r);
						case p.y:
							return d.a.createElement(k.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return d.a.createElement(a.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return d.a.createElement(a.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: s,
						t: n
					} = e, i = [];
					if (!s) return G(0, n, t);
					const o = Object(r.a)(n);
					let d = 0,
						a = 0;
					const c = s.length;
					for (; d < c; d++) {
						const [e, t, r] = s[d], c = t + r, l = o[t], u = o[c] - l;
						l > a && i.push(G(0, n.substr(a, l - a), `between${d}`)), i.push(G(e, n.substr(l, u), d)), a = l + u
					}
					return a < n.length && i.push(G(0, n.substr(a), `remaining${d}`)), i
				},
				V = {
					[p.j.monospace]: a.h,
					[p.j.bold]: a.b,
					[p.j.italic]: a.f,
					[p.j.underline]: a.u,
					[p.j.strikethrough]: a.d,
					[p.j.subscript]: a.l,
					[p.j.superscript]: a.m
				},
				G = (e, t, s) => {
					let r = t;
					return r = i()(V, (t, r, n) => e & parseInt(n, 10) ? d.a.createElement(r, {
						key: s
					}, t) : t, r)
				},
				J = e => {
					switch (e) {
						case p.f:
							return {
								H: a.r, D: a.q
							};
						case p.d:
							return {
								H: a.r, D: a.o
							};
						case p.e:
						default:
							return {
								H: a.r, D: a.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				g = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/components/MiniCardPost/index.m.less"),
				w = s.n(E),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				k = s.n(_);
			const I = e => e.type === O.f.Spoiler,
				C = Object(h.u)();
			t.a = C(Object(f.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: O,
					showSubredditMeta: E = !0,
					showSubredditName: _,
					subredditOrProfile: C
				} = e, S = h && h.preview && h.preview.url || void 0, N = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = O && P || f && Object(d.a)("/search", {
					q: f.rawQuery,
					source: N
				}) || P, L = f ? f.subredditInfo && f.subredditInfo.icon : C && C.icon.url, B = f ? f.subredditInfo && f.subredditInfo.displayText : C && (C.displayText || C.name), M = h ? h.flair.filter(I) : [], F = h ? h.score : 0, D = h ? h.numComments : 0, R = h && h.isSponsored, H = Object(j.a)(e).body, U = `linear-gradient(\n      ${Object(n.f)(H,.2)},\n      ${Object(n.f)(H,.3)},\n      ${Object(n.f)(H,.4)},\n      ${Object(n.f)(H,.6)},\n      ${Object(n.f)(H,.8)},\n      ${H}\n    )`, W = o.a.createElement("div", {
					id: i,
					className: Object(a.a)(k.a.trendingPost, {
						[k.a["m-background"]]: !!S
					})
				}, o.a.createElement(v.a, {
					to: T
				}, o.a.createElement("div", {
					className: Object(a.a)(k.a.backgroundWrapper, w.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(j.a)(e).body, S || Object(j.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, R && o.a.createElement("div", {
					className: k.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(a.a)(k.a.innerContainer, w.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? k.a.title : k.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(a.a)(k.a.description, s)
				}, M.length > 0 && o.a.createElement(m.a, {
					className: k.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: h
				}), h.title) : o.a.createElement("div", {
					className: k.a.spacer
				}), E && L && B && o.a.createElement(x.a, {
					className: k.a.relatedSubredditMetaData,
					iconClassName: k.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !E && h && o.a.createElement("div", {
					className: k.a.metaLine
				}, _ && B && o.a.createElement("span", {
					className: k.a.meta
				}, Object(g.c)(B)), o.a.createElement("span", {
					className: k.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: k.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "311aXY"
				})))))));
				return R ? o.a.createElement(p.a, {
					post: h
				}, W) : W
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.u)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: r
				} = t;
				const n = Object(d.b)(e, {
						listingName: s,
						pageLayer: r
					}),
					i = Object(c.F)(e) || Object(a.a)(e),
					o = Object(d.e)(e);
				return {
					canShowAd: n && !i,
					awaitingBrandSafetyCheck: !Object(d.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: o
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: r,
					pageLayer: i,
					...o
				} = e;
				return !s && t && i ? n.a.createElement(l.a, u({
					forceHouseAd: r
				}, o)) : null
			}))
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
				i = s.n(n);
			t.a = r.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/ImageInput/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/ApiRequestState/index.ts"),
				v = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = s("./src/reddit/components/SubredditIcon/index.m.less"),
				g = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: r,
						...n
					} = e, o = [s, g.a.inTopBar, g.a.iconContainer];
					return r ? o.push(g.a.emptyEditableIconInTopBar) : o.push(g.a.editableIcon, g.a.emptyEditableIcon), i.a.createElement("span", O({}, n, {
						className: Object(a.a)(...o)
					}), r ? i.a.createElement(h.a, {
						name: "upload",
						className: g.a.emptyUploadButton
					}) : i.a.createElement(h.a, {
						name: "add",
						className: g.a.emptyPlusButton
					}), e.children)
				},
				j = e => {
					const {
						iconColor: t,
						className: s,
						alt: r,
						role: n,
						onClick: o,
						inTopBar: d,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: g.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: o,
						role: n,
						src: c,
						className: Object(a.a)(s, {
							[g.a.editableIcon]: !d
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				E = Object(d.c)({
					isLoading: v.b
				});
			class w extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: g.a.imageUploader,
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
						className: g.a.clickableUploadText,
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
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = i.a.createElement(i.a.Fragment, null, i.a.createElement(j, O({
						alt: r.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(y, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, O({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [g.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(g.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
							className: Object(a.a)(...e),
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
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? i.a.createElement("div", {
						className: g.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(E, (e, t) => ({
				onFileSelected: (s, r) => {
					e(Object(c.a)(t.subreddit.id, s, r))
				}
			}))(Object(l.c)(w))
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
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = s.n(a);
			const l = i.a.wrapped(o.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => n.a.createElement(d.b, e), "S", c.a)
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
				return j
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(a.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return n.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, n.a.createElement(l.a, {
							href: `/r/${t}/`
						}, n.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, n.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				v = s("./src/reddit/selectors/subredditMention.ts");
			class x extends n.a.PureComponent {
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
					return n.a.createElement(d.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const g = Object(b.c)(x),
				O = Object(o.c)({
					isFeatureFlagEnabled: v.b,
					isUserInTreatment: v.e,
					userVariant: v.a
				}),
				y = Object(i.b)(O),
				j = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: r,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!s || !t) return n.a.createElement(g, {
						subredditName: r,
						rtJsonElementProps: o
					});
					switch (i) {
						case h.qf.SmIcon:
							return n.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: o
							});
						case h.qf.SmIconHc:
							return n.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return n.a.createElement(g, {
								subredditName: r,
								rtJsonElementProps: o
							})
					}
				};
			t.b = y(j)
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/isEqual.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = s("./src/reddit/components/IdCard/async.tsx"),
				v = s("./src/lib/isFakeSubreddit/index.ts"),
				x = s("./src/reddit/components/IdCard/helpers.ts"),
				g = e => !Object(v.a)(e) || Object(x.e)(e) || Object(x.f)(e) || Object(x.g)(e),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/ModProgressModule/async.tsx"),
				j = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				E = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				w = s("./src/reddit/components/SidebarContainer/index.tsx"),
				_ = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				k = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				I = s("./src/lib/makeListingKey/index.ts"),
				C = s("./src/reddit/actions/subreddit.ts"),
				S = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/helpers/name/index.ts"),
				L = s("./src/reddit/helpers/overlay/index.ts"),
				B = s("./src/reddit/selectors/experiments/topPosts.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				F = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const D = .99;
			class R extends d.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= D && t(s)
					}
				}
				render() {
					return d.a.createElement(F.a, {
						threshold: D,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var H = R,
				U = s("./src/lib/isUrl/index.ts"),
				W = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/FlairWrapper/index.tsx"),
				V = s("./src/reddit/components/Thumbnail/index.tsx"),
				G = s("./src/reddit/models/Flair/index.ts"),
				J = s("./src/reddit/models/Subreddit/index.ts"),
				q = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				Y = s.n(q);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, X = Object(c.c)({
				post: M.G,
				subredditOrProfile: M.U
			});
			class Q extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: r,
						subredditOrProfile: n
					} = this.props, i = {
						post: t
					}, o = Object(U.a)(Object(V.b)(i)), a = t.flair.filter(K);
					return d.a.createElement("div", {
						className: Object(S.a)(Y.a.container, e, {
							[Y.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, d.a.createElement("div", {
						className: Y.a.mainLine
					}, o && d.a.createElement("div", {
						className: Y.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, d.a.createElement(V.a, i)), d.a.createElement("div", {
						className: Object(S.a)(Y.a.title, !o && Y.a.titleSingle),
						title: t.title
					}, a.length > 0 && d.a.createElement(A.a, {
						className: Y.a.flair,
						titleFlair: a,
						nowrap: !0,
						post: t
					}), t.title)), d.a.createElement("div", {
						className: Y.a.metaLine
					}, r && !!n && d.a.createElement("span", {
						className: Y.a.meta
					}, Object(J.h)(n) ? Object(T.d)(n.displayText || n.name) : Object(T.c)(n.displayText || n.name)), d.a.createElement("span", {
						className: Y.a.meta
					}, z._({
						"*": "{score} points",
						_1: "1 point"
					}, [z._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), d.a.createElement("span", {
						className: Y.a.meta
					}, z._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [z._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Z = Object(a.b)(X, e => ({
					openLightbox: t => e(Object(L.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Q),
				$ = s("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 10, re = 2, ne = Object(c.a)(M.N, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class oe extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [r] = s;
						r && (t(r), e && e(r.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || se, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, r) => (e = Math.ceil(r.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: r,
							redditStyle: n,
							smallPostClassName: i
						} = this.props;
						return d.a.createElement(H, {
							key: e.id,
							onPostVisible: r,
							postId: e.id
						}, d.a.createElement(Z, {
							className: Object(S.a)(ee.a.smallPost, i),
							containerOnClick: s,
							postId: e.id,
							redditStyle: n,
							showSubredditName: Object(v.a)(Object(T.g)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: r,
						onPostVisible: n,
						posts: i,
						redditStyle: o,
						showMoreButton: a,
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
						[f, ...x] = h,
						g = b ? h.slice(0, re) : x.slice(0, re),
						O = b ? h.slice(re) : x.slice(re);
					return d.a.createElement("div", {
						className: Object(S.a)(ee.a.container, t, {
							[ee.a.redditStyle]: o
						})
					}, !b && d.a.createElement(H, {
						onPostVisible: n,
						postId: f.id
					}, d.a.createElement(N.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(v.a)(Object(T.g)(s)),
						trendingPost: f
					})), g.map(this.renderSmallPost), e, O.map(this.renderSmallPost), a && d.a.createElement(P.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, r || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var de = Object(a.b)(ie, e => ({
					openPost: t => e(Object(L.a)(t.permalink))
				}))(oe),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ue = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = s("./src/reddit/selectors/discoveryUnit.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				be = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = s.n(be);
			const fe = 10,
				ve = Object(c.a)((e, t) => t.subredditName, e => Object(I.a)(e, l.X.TOP, {
					t: l.jc.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: ve,
					posts: (e, t) => {
						const s = ve(e, t);
						return Object(M.N)(e, {
							listingKey: s
						})
					},
					subreddit: pe.z
				});
			class ge extends d.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(le.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(le.q)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(le.t)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: n,
						posts: i,
						subredditName: o,
						topPostsVariant: a
					} = this.props;
					if (0 === i.length) return null;
					const c = o,
						l = i.length > fe;
					return d.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: r.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, d.a.createElement(de, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: a
					}, d.a.createElement("div", null, e)))
				}
			}
			var Oe = Object(a.b)(xe, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(C.r)({
							sort: l.X.TOP,
							subredditName: s,
							t: l.jc.WEEK
						}))
					}
				})(Object(ae.c)(ge)),
				ye = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				je = s("./src/reddit/constants/tracking.ts"),
				Ee = s("./src/reddit/selectors/seo/linksModule.ts"),
				we = s("./src/reddit/selectors/telemetry.ts"),
				_e = s("./src/telemetry/models/Subreddit.ts");
			const ke = e => t => ({
					...we.n(t),
					action: je.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ie = e => t => s => ({
					...we.n(s),
					action: je.c.CLICK,
					noun: Object(_e.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ce = Object(c.c)({
					communities: Ee.c
				});
			var Se = Object(a.b)(Ce)(e => {
					const t = Object(ae.b)();
					return e.communities && e.communities.length ? d.a.createElement(_.a, null, d.a.createElement(ye.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: ke,
						getSubscribeEventFactoryHandler: Ie,
						sendEvent: t,
						title: r.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Ne = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Pe = s("./src/reddit/constants/experiments.ts"),
				Te = s("./src/reddit/featureFlags/index.ts"),
				Le = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Be = s("./src/reddit/models/Widgets/index.ts"),
				Me = s("./src/reddit/selectors/communityFlairs.ts"),
				Fe = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				De = s("./src/reddit/selectors/listings.ts"),
				Re = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				He = s.n(Re);
			const Ue = 250,
				We = 270,
				Ae = u.a.wrapped(w.a, "SidebarContainer", He.a),
				Ve = Object(c.c)({
					apiError: De.c,
					apiPending: De.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Me.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Me.c)(e, s)
					},
					isInNewModuleNCPV3Experiment: e => Object(Fe.a)(e) === Pe.te.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(pe.N)(e, {
							subredditId: s
						}) && !Object(pe.O)(e, {
							subredditId: s
						})
					},
					widgets: pe.u
				}),
				Ge = Object(a.b)(Ve);
			class Je extends o.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: Be.i.CommunityList,
							shortName: r.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Be.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Be.g.Cloud,
							shortName: r.fbt._("Filter by flair", null, {
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
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: s,
						showGovernance: r,
						showLeaderboard: n,
						showPredictionsLeaderboard: i,
						subredditId: o,
						subredditName: a,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const v = Object(B.a)(c),
						x = Object(B.b)(c),
						w = Object(B.c)(c),
						I = v || x;
					let C, S;
					!!this.getPostFlairWidget() ? C = this.props.widgets : (C = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const N = this.makeRelatedCommunitiesWidget(v, x),
						P = !v,
						T = x,
						L = d.a.createElement(E.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.FIRST,
							sizes: l.i
						});
					return d.a.createElement(Ae, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, s && d.a.createElement(y.a, {
						subredditId: o,
						subredditName: a
					}), g(t) && d.a.createElement(f.a, {
						listingName: t
					}), d.a.createElement(p.a, {
						cardClassName: He.a.card,
						subredditId: o
					}), d.a.createElement(j.a, {
						subredditId: o
					}), i && d.a.createElement(m.a, {
						subredditId: o
					}), I && d.a.createElement(_.a, null, d.a.createElement(Oe, {
						subredditName: a,
						topPostsVariant: c
					}, d.a.createElement("div", {
						className: He.a.inFeedAd
					}, L))), I && N && d.a.createElement(_.a, null, d.a.createElement(Ne.a, {
						subredditName: a,
						truncateThreshold: We,
						widget: N
					})), T && C.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return d.a.createElement(_.a, {
							key: `widgetSpacer${t}`
						}, d.a.createElement(Ne.a, {
							subredditName: a,
							truncateThreshold: Ue,
							widget: e
						}))
					}), r && d.a.createElement(b.a, {
						className: He.a.card,
						subredditId: o
					}), S && d.a.createElement(_.a, null, d.a.createElement(Ne.a, {
						subredditName: a,
						widget: S
					})), n && d.a.createElement(h.a, {
						className: He.a.card,
						subredditId: o,
						uniqueId: o
					}), d.a.createElement(O.g, {
						subredditId: o
					}), !I && L, d.a.createElement(Se, {
						subredditId: o
					}), P && !T && C.map((e, t) => {
						const s = "community-list" === e.kind;
						return d.a.createElement(_.a, {
							key: `widgetSpacer${t}`
						}, d.a.createElement(Ne.a, {
							subredditName: a,
							truncateThreshold: w && s ? We : w ? Ue : void 0,
							widget: e
						}))
					}), d.a.createElement(k.a, {
						adComponent: d.a.createElement(E.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = Ge(Je)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, s) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.V,
				hideNSFWPref: b.G,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: c.T,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: r,
							selectedTemplateId: n
						} = t;
						return e(Object(o.h)({
							post: s,
							previewFlair: r,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const r = t === a.a.upvoted ? Object(i.kb)(s) : Object(i.w)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(i.gb)(s)),
					onOpenReportsDropdown: t => e(Object(d.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: r,
						selectedTemplateId: n
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: r,
						selectedTemplateId: n
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
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
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = s.n(o);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: r = 10
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(d.a.loadingIcon, s, {
						[d.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/featureFlags/index.ts");

			function a(e, t, s) {
				const r = Object(o.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(i.b)(r)(e => {
					const {
						featureEnabled: r,
						...i
					} = e, o = i;
					return r ? n.a.createElement(t, o) : void 0 !== s ? n.a.createElement(s, o) : null
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(n);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				d = e => Object(r.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const d = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(n.b)(t) || Object(i.b)(t))) return Object(n.b)(t) ? o.SourceElement.Comment : Object(r.x)(s) ? o.SourceElement.PostDetail : Object(r.H)(s) ? o.SourceElement.ListingPostDetail : void 0
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
				return g
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "e", (function() {
				return j
			}));
			var r, n, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				d = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(n || (n = {}));
			const m = e => ({
					...u.n(e),
					source: n.LINK,
					action: i.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: n,
					screen: u.Y(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: r
					} = t;
					if (!s || !Object(d.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const n = Object(d.b)(s) ? "postId" : "commentId",
						i = {
							url: `/r/${r}/`,
							sourceElement: Object(a.a)(t),
							subredditName: r,
							[n]: s.id
						},
						c = Object(l.z)(e, {
							subredditName: r
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
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(d.b)(s) && !Object(o.b)(s)) return {};
					const r = Object(d.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.H(e, s.id),
						subreddit: u.hb(e, r),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				v = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.ib(t, e),
					screen: u.Y(t)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: n.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: r.ITEM_POST,
					post: u.H(s, t),
					subreddit: u.ib(s, e),
					screen: u.Y(s)
				}),
				g = (e, t) => s => ({
					...p(s),
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: u.H(s, t),
					subreddit: u.ib(s, e),
					screen: u.Y(s)
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				j = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(r || (r = {}));
			const n = e => e.category === r.Supporter,
				i = e => e.category === r.Achievement
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/shared.ts"),
				a = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, r = Object(m.a)(s, u.X.HOT, {});
					return n.a.createElement(p.a, {
						listingKey: r,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				f = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				v = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/constants/wiki.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				j = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				E = s("./src/reddit/components/JumpToContent/index.tsx"),
				w = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				_ = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				k = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				I = s.n(k);

			function C(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return r.createElement(r.Fragment, null, r.createElement(E.a, null), r.createElement(_.a, {
					isModHub: !1,
					className: I.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), r.createElement(w.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var S = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				N = s.n(S);
			class P extends n.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: r
					} = e, {
						wikiSubRoute: i,
						wikiPageName: o
					} = s, d = r[x.I], a = r[x.J], c = x.K in r;
					switch (i) {
						case g.m.Create:
						case g.m.Edit:
							return n.a.createElement(f.a, {
								contentClassName: N.a.wikiPageEditorContent,
								isCreation: i === g.m.Create,
								subredditName: t,
								topBarClassName: N.a.communityWikiTopBar,
								wikiPageName: o
							});
						case g.m.Revisions:
							return n.a.createElement(j.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && d && a ? n.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(a),
								revisionId: Object(y.a)(d),
								subredditName: t,
								wikiPageName: o
							}) : o && (d || c) ? n.a.createElement(v.a, {
								revisionId: d ? Object(y.a)(d) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? n.a.createElement(C, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(O.u)()(P),
				L = s("./src/reddit/constants/componentSizes.ts"),
				B = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				M = s("./src/reddit/layout/page/Listing/index.tsx"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const R = Object(O.u)(),
				H = Object(i.b)(() => Object(o.c)({
					contentGateInfo: (e, t) => {
						let {
							match: s
						} = t;
						return Object(D.f)(e, s.params.subredditName)
					},
					layout: O.R,
					over18Pref: D.lb,
					subreddit: (e, t) => {
						let {
							match: s
						} = t;
						return Object(F.z)(e, {
							subredditName: s.params.subredditName || g.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.subredditName || g.e
					},
					wikiPageName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.wikiPageName || g.i
					}
				}), e => ({
					onPageViewed: () => e(Object(d.a)())
				}));
			class U extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: r
					} = this.props, i = !!s && s.isNSFW && !D.lb, o = Object(B.a)(t, i, r);
					if (o) return n.a.createElement(c.default, o);
					const d = `/r/${r}/`;
					return n.a.createElement(M.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: L.i,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : r,
							maxWidth: L.i,
							subredditOrProfile: s,
							url: d
						}), n.a.createElement(a.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: r,
							subredditUrl: d
						})),
						content: n.a.createElement(T, {
							subredditName: r
						}),
						sidebar: s && n.a.createElement(b, {
							subreddit: s,
							subredditName: r
						})
					})
				}
			}
			t.default = R(H(U))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/gold/constants.ts"),
				i = s("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var d = s("./node_modules/icepick/icepick.js"),
				a = s("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, s;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (s = e[0]) || void 0 === s ? void 0 : s.type)
				},
				u = {};
			t.a = Object(r.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.pb:
							const {
								subredditId: s, subredditAchievementFlairs: r
							} = t.payload;
							if (!(null == r ? void 0 : r.length)) return e;
							const o = r.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								d = r.filter(i.a).map(e => e.type),
								a = r.filter(i.b).map(e => e.type);
							return {
								...e, [s]: {
									flairsByType: o,
									achievementTypes: d,
									supporterTypes: a
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.d: {
							const {
								id: s,
								userAchievementFlairsByRedditorIds: r
							} = t.payload;
							let n = e[s] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of r) {
								const s = o.filter(i.a),
									r = s.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									d = o.filter(i.b),
									a = d.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									c = l(s),
									u = l(d);
								n = {
									...n,
									[e]: {
										achievementTypes: r,
										supporterTypes: a,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[s]: n
							}
						}
						case a.f: {
							const {
								subredditId: s,
								userId: r,
								achievementFlairType: n,
								supporterFlairType: i
							} = t.payload;
							return Object(d.updateIn)(e, [s, r], e => ({
								...e,
								pendingAchievementType: n,
								pendingSupporterType: i
							}))
						}
						case a.g: {
							const {
								subredditId: s,
								userId: r,
								achievementFlairType: n,
								supporterFlairType: i
							} = t.payload;
							return Object(d.updateIn)(e, [s, r], e => ({
								...e,
								preferredAchievementType: n,
								preferredSupporterType: i,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case a.e: {
							const {
								subredditId: s,
								userId: r
							} = t.payload;
							return Object(d.updateIn)(e, [s, r], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case a.h: {
							const {
								subredditId: s,
								userId: r,
								isHidden: n
							} = t.payload;
							return Object(d.updateIn)(e, [s, r], e => ({
								...e,
								isHidden: n
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.i: {
							let s = {};
							return t.payload.forEach(e => {
								const t = e.id,
									r = e.powerups;
								if (!t || !r) return;
								const n = r.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
								s = {
									...s,
									[t]: n.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "a", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/commentSelector.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: o.a
				}
			});
			const d = (e, t) => {
					let {
						subredditId: s
					} = t;
					var r;
					return s ? null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[s] : null
				},
				a = (e, t) => {
					let {
						subredditId: s
					} = t;
					var r, n;
					return s ? null === (n = null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[s]) || void 0 === n ? void 0 : n.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					var n, i;
					return s && r ? null === (i = null === (n = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === n ? void 0 : n[s]) || void 0 === i ? void 0 : i[r] : null
				},
				l = Object(r.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(r.a)([a, l], (e, t) => e && t ? e[t] : null),
				m = Object(r.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(r.a)([a, m], (e, t) => e && t ? e[t] : null),
				b = Object(r.a)([a, c], (e, t) => {
					if (!e) return [];
					const s = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						r = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						n = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !s.includes(e.type),
						isPreferred: e.type === r || e.type === n
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(r.a)([d, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: s,
						achievementTypes: r,
						flairsByType: n
					} = e, {
						supporterTypes: i,
						achievementTypes: o,
						preferredSupporterType: d,
						preferredAchievementType: a,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: x(s, i, n, c || d),
						achievementFlairs: x(r, o, n, l || a)
					}
				}),
				f = Object(r.a)([c], e => !!e && e.isHidden),
				v = Object(r.a)([d, c, p], (e, t, s) => {
					if (!e || !t) return [];
					const r = t.achievementTypes.map(t => e.flairsByType[t]);
					return s ? [s, ...r] : r
				}),
				x = (e, t, s, r) => e.map(e => ({
					...s[e],
					isLocked: !t.includes(e),
					isPreferred: e === r
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, t) => {
					let {
						commentId: s
					} = t;
					const r = Object(n.b)(e, {
							commentId: s
						}),
						i = null == r ? void 0 : r.subredditId,
						o = null == r ? void 0 : r.authorId;
					return !(!i || !o) && !!((e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						var n, i, o;
						return s && r ? null === (o = null === (i = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === i ? void 0 : i[r]) || void 0 === o ? void 0 : o[s] : null
					})(e, {
						subredditId: i,
						userId: o
					})
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			const d = e => n.d.subredditMentionD2xExperiment(e),
				a = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: d,
						experimentName: r.kf
					}) || ""
				},
				c = e => {
					const t = a(e);
					return t === r.qf.SmIcon || t === r.qf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				m = (e, t) => {
					let {
						subredditName: s
					} = t;
					const r = Object(o.Y)(e, {
						subredditName: s
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.0ae11f6f8c0afce45597.js.map