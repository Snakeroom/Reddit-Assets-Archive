// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.3dd0d2d6f1fa5ea03076.js
// Retrieved at 11/15/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-MediumPost", "removalReasonActions"], {
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
					var r, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !o && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = s(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !_ && /[^-]mobi/i.test(t),
						g = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: O || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: O || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: O || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: O || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : d ? r = {
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
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || O
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
						version: O || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: O || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: O
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, O && (r.version = O)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, O && (r.version = O)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || O
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && O && (r.version = O)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : g ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var j = "";
					r.windows ? j = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? j = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? j = (j = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? j = (j = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? j = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? j = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? j = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (j = s(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (r.osversion = j);
					var C = !r.windows && j.split(".")[0];
					return _ || c || "ipad" == o || i && (3 == C || C >= 4 && !E) || r.silk ? r.tablet = e : (E || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function o(e) {
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

				function i(e, n, r) {
					var i = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = o, s.check = function(e, t, s) {
					return !i(e, t, s)
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
				return r(e, (function(e, r, o) {
					s = n ? (n = !1, e) : t(s, e, r, o)
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
		"./node_modules/lodash/map.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayMap.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseMap.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : o)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), s, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
				}(n || (n = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(r || (r = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.gb(e),
				user: i.sb(e),
				media: s ? i.C(e, s) : null,
				post: s ? i.K(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const s = Object(o.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? r.a.createElement("div", {
						onClickCapture: function(e, n) {
							var r, o;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(n)(s, i, null === (o = t.post) || void 0 === o ? void 0 : o.postId)) : Object(d.a)(a(n)(s, c.a.UNKNOWN, null === (r = t.post) || void 0 === r ? void 0 : r.postId)))
						}
					}, r.a.createElement(e, t)) : r.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") || e.startsWith("blob") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: r,
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (r) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = i || Object(n.D)(e)
				} else c = Object(n.D)(e);
				const d = o.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(r.useState)(null), [i, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), f = Object(r.useCallback)(() => m(!u), [u]), h = Object(r.useMemo)(() => {
					const t = a(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: x,
					styles: v,
					update: O
				} = Object(o.a)(t, i, h);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: v.arrow,
						...x.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: v.popper,
						...x.popper
					},
					show: p,
					target: {
						element: t,
						ref: s
					},
					toggle: f,
					visible: u,
					update: O
				}), [l, x, c, b, p, v, t, s, f, u, O])
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/constants/intlSupport.ts");

			function i(e) {
				let {
					showDay: t,
					useUtc: s,
					shortMonths: i,
					locale: a = n.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * r.Xb);
				return o.a ? new Intl.DateTimeFormat(a, {
					month: i ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.DEFAULT_LOCALE;
				const s = e.toString().length > 10,
					r = new Date(e * (s ? 1 : 1e3));
				return r.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/lodash/every.js"),
				r = s.n(n);

			function o(e) {
				let t = null,
					s = null;
				return function() {
					for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
					return null !== t && o.length === t.length && r()(o, (e, s) => e === t[s]) || (t = o, s = e(...o)), s
				}
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.yc, r.ub, r.E, r.U, r.pb, r.Xb],
				i = {
					[r.Xb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.U]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.E]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.ub]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.yc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Xb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.U]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.E]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.yc]: "",
						[r.ub]: "",
						[r.E]: "",
						[r.U]: "",
						[r.pb]: "",
						[r.Xb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? a : i)[n](e).toString()), u -= e * n
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(r.c),
				i = Object(n.a)(r.b),
				a = Object(n.a)(r.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return _
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "b", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				v = s("./src/reddit/actions/comment/constants.ts");
			const O = Object(o.a)(v.p),
				_ = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					s().features.comments.models[e] && (await Object(u.j)(r(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					if (!Object(h.R)(s())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = s().features.comments.models[e];
					if (!i) return;
					const c = i.isLocked ? u.l : u.f;
					t(Object(x.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await c(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(x.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, g = Object(o.a)(v.J), j = e => async (t, s, r) => {
					let {
						apiContext: o,
						gqlContext: i
					} = r;
					const a = s(),
						l = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					l && m && (t(Object(x.j)({
						[e]: {
							isApproved: !0,
							approvedBy: m,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(i(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(x.j)({
						[e]: {
							isApproved: l.isApproved,
							approvedBy: null,
							bannedBy: l.bannedBy,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam,
							modNote: l.modNote,
							modReasonBy: l.modReasonBy,
							modRemovalReason: l.modRemovalReason,
							numReports: l.numReports || null
						}
					})), Object(c.d)())
				}, C = (e, t) => async (s, r, o) => {
					let {
						apiContext: i,
						gqlContext: a
					} = o;
					const l = r(),
						m = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					m && p && (s(Object(x.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(a(), e, t)).ok ? s(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(x.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam
						}
					})), Object(c.d)())
				}, y = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? u.k : u.e;
					t(Object(x.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(o(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(x.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, S = (e, t, s) => async (o, i, a) => {
					let {
						gqlContext: c
					} = a;
					const l = Object(f.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = s === r.kc.Snoozed,
						h = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(c(), {
							input: h
						})).ok) o(Object(x.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(d.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(d.f)(e))
					}
				}, k = (e, t, s) => async (n, o, a) => {
					let {
						apiContext: c,
						gqlContext: d
					} = a;
					const l = o(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					n(Object(x.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.J.ADMIN,
							isMod: t === r.J.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && n(Object(x.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(u.c)(d(), e, t),
						h = Object(u.d)(d(), e, !!s),
						v = [f];
					(s || !s && e === b) && v.push(h), (await Promise.all(v)).every(e => e.ok) ? s && n(g({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: r.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(x.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), n(Object(x.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "CREATOR_STATS_PENDING",
				r = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = e => () => s.e("CommunityAwards").then(s.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(r("awardSheetInfoRequested")),
				i = Object(n.a)(r("manageableAwardsRequested")),
				a = Object(n.a)(r("createCommunityAward")),
				c = Object(n.a)(r("createGlobalAward")),
				d = Object(n.a)(r("createModAward")),
				l = Object(n.a)(r("createAwardFailed")),
				u = Object(n.a)(r("createAwardSuccessful")),
				m = Object(n.a)(r("removeCommunityAward")),
				p = Object(n.a)(r("disableAwardinCommunity")),
				b = Object(n.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "f", (function() {
				return C
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/postParentMessage/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/selectors/gild.ts"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts"),
				f = s("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(f.J),
				x = Object(n.a)(f.f),
				v = () => async (e, t) => {
					const n = t();
					e(x()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(r()(n))
				}, O = Object(n.a)(f.I), _ = e => {
					let {
						awardId: t,
						correlationId: s,
						thingId: n
					} = e;
					return async (e, r) => {
						const a = r(),
							c = t ? Object(u.a)(a, t) : void 0;
						e(O({
							award: c && c.isEnabled ? c : void 0,
							thingId: n,
							correlationId: s
						})), e(Object(l.h)(i.a.GOLD_GILD_MODAL));
						const b = Object(p.O)(a, {
							thingId: n
						});
						let f = null;
						if (b) f = b.id;
						else if (Object(o.a)(n)) {
							const e = Object(m.G)(a, {
								postId: n
							});
							e && (f = e.belongsTo.id)
						}
						f && Object(d.a)(f, n)
					}
				}, E = Object(n.a)(f.e), g = Object(n.a)(f.H), j = () => async (e, t) => {
					const n = t(),
						o = Object(a.d)(n);
					if (Object(a.g)(n)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(n)), Object(c.b)(c.a.GildingFlow)
				}, C = () => async () => {
					Object(r.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const r = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(n.a)(r)
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			}));
			var n = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/comment/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/users.ts"),
				d = s("./src/reddit/endpoints/redditor/index.ts"),
				l = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				b = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				f = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				h = s("./src/reddit/actions/modQueue/constants.ts");
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.o:
							return t.payload;
						default:
							return e
					}
				},
				v = s("./src/reddit/reducers/pages/modHub/index.ts"),
				O = s("./src/reddit/selectors/modQueue.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				E = s("./src/redditGQL/types.ts");
			Object(r.a)({
				pages: {
					modHub: v.a
				}
			}), Object(r.a)({
				features: {
					modActivitySummaries: b.a
				}
			}), Object(r.a)({
				features: {
					realtimeModqueue: f.a
				}
			}), Object(r.a)({
				features: {
					realtimeUpdateAnimationId: x
				}
			});
			const g = Object(o.a)(h.l),
				j = e => async (t, s, r) => {
					let {
						gqlContext: o
					} = r;
					e && t((e => async (t, s, r) => {
						let {
							gqlContext: o
						} = r;
						const i = await Object(n.d)(o(), {
								id: e
							}),
							a = Object(u.a)(i.body.data.subredditInfoById);
						t(g(a))
					})(e))
				}, C = Object(o.a)(h.m), y = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: r
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, o = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == o ? void 0 : o.page) || "1",
								pageName: r,
								subredditName: n || (null == o ? void 0 : o.subreddit),
								queryParams: o
							}
						})(e),
						n = Object(O.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, S = [E.w.ApproveComment, E.w.ApproveLink, E.w.RemoveComment, E.w.RemoveLink, E.w.SpamComment, E.w.SpamLink], k = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o, i;
					const {
						moderatorID: a,
						targetID: l,
						action: u
					} = null === (o = null == e ? void 0 : e.subscribe) || void 0 === o ? void 0 : o.data, m = s(), p = Object(_.j)(m), b = S.includes(u), f = a === p, h = y(m, l);
					if (!b || f || !h) return;
					const x = await Object(d.b)(r(), {
						id: a
					}) || (null === (i = Object(_.Ab)(m, {
						userId: a
					})) || void 0 === i ? void 0 : i.username);
					x && t(Object(c.z)(x)), t(C({
						targetID: l
					}))
				}, T = Object(o.a)(h.p), I = Object(o.a)(h.o), N = e => async (t, s, r) => {
					let {
						gqlContext: o
					} = r;
					var c, d, u, b, f, h;
					const x = Object(p.a)(e),
						v = s(),
						O = null === (d = null === (c = null == v ? void 0 : v.features) || void 0 === c ? void 0 : c.realtimeModqueue) || void 0 === d ? void 0 : d.toUpdate.includes(e),
						_ = y(v, e);
					if (!O || !_) return;
					const E = x ? () => Object(n.b)(o(), {
							id: e
						}) : () => Object(n.a)(o(), {
							id: e
						}),
						g = await E();
					if (g.ok) {
						if (x) {
							const s = null === (b = null === (u = null == g ? void 0 : g.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(a.R)({
								[e]: Object(m.f)(s)
							}))
						} else {
							const s = null === (h = null === (f = null == g ? void 0 : g.body) || void 0 === f ? void 0 : f.data) || void 0 === h ? void 0 : h.commentById;
							t(Object(i.j)({
								[e]: Object(l.a)(s)
							}))
						}
						t(I(e)), t(T({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "s", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "o", (function() {
				return g
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				_ = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				g = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "g", (function() {
				return D
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "h", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(r.a)(b),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				v = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(r.a)(v),
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(r.a)(g),
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				k = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				T = Object(r.a)(S),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(r.a)(N),
				A = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				R = Object(r.a)(w),
				L = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n(),
						a = Object(p.Y)(i, {
							subredditId: e
						}).name;
					s(f());
					const d = await Object(c.k)(o(), a, t);
					if (d.ok) {
						s(h({
							subredditId: e,
							isEnabled: t
						}))
					} else s(x());
					return d.ok
				}, F = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n(),
						a = Object(p.Y)(i, {
							subredditId: e
						}).name;
					s(O());
					const d = await Object(c.j)(o(), t, l.d.LinkFlair, a);
					if (d.ok) {
						s(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(E());
					return d.ok
				}, M = (e, t) => async (s, r, o) => {
					let {
						apiContext: d
					} = o;
					const m = r(),
						b = Object(p.Y)(m, {
							subredditId: t
						}).name;
					s(j());
					const f = await Object(c.f)(d(), e, b, l.d.LinkFlair);
					let h = f.ok && !(f.body && !1 === f.body.success);
					if (h) {
						const n = f.body;
						if (s(C({
								subredditId: t,
								template: n
							})), n.id) {
							const r = e.styleTemplate,
								o = m.structuredStyles.flairTemplate.models[n.id];
							r ? h = await s(Object(i.d)(t, n.id, r)) : o && (h = await s(Object(i.c)(t, n.id)))
						}
					}
					if (h) {
						const e = Object(a.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(a.f)(e))
					} else {
						s(y());
						const r = Object(a.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(a.f)(r))
					}
					return h
				}, D = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const d = r(),
						l = Object(p.Y)(d, {
							subredditId: t
						}).name;
					if (s(k()), (await Object(c.b)(i(), e, l)).ok) {
						s(T({
							subredditId: t,
							templateId: e
						}));
						const r = Object(a.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(a.f)(r))
					} else {
						s(I());
						const r = Object(a.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), D(e, t));
						s(Object(a.f)(r))
					}
				}, U = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const d = r(),
						b = Object(m.d)(d, {
							subredditId: t
						}).templateIds,
						f = Object(p.Y)(d, {
							subredditId: t
						}).name;
					if (s(P({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(i(), f, l.d.LinkFlair, e)).ok) {
						s(A());
						const e = Object(a.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(a.f)(e))
					} else {
						s(R({
							subredditId: t,
							templateIds: b
						}));
						const r = Object(a.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(a.f)(r))
					}
				}, B = e => {
					let {
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: a
						} = i;
						const l = t.flair.filter(e => !Object(d.q)(e.type));
						if (s && l.unshift(s), e(Object(o.R)({
								[t.id]: {
									flair: l
								}
							})), s) {
							const e = Object(d.g)(s);
							Object(c.h)(a(), t.id, n, e)
						} else Object(c.h)(a(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				a = s("./node_modules/lodash/values.js"),
				c = s.n(a),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/helpers/trackers/blade.ts"),
				x = s("./src/reddit/models/Image/index.tsx"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/telemetry/index.ts");
			const _ = e => {
					let {
						subredditId: t,
						flairId: s,
						imageKey: n,
						imageData: r
					} = e;
					return async (e, o, i) => {
						const a = o(),
							c = Object(v.Y)(a, {
								subredditId: t
							});
						if (!c) return !1;
						e(Object(l.k)(r));
						const d = await (async (e, t, s, n, r, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
							method: m.ob.POST,
							data: {
								filepath: n,
								imagetype: r,
								mimetype: o
							}
						}))(i.apiContext(), c.name, s, r.file.name, n, await Object(u.h)(r.file));
						let h = !1;
						try {
							const t = await Object(l.g)(o(), d, r, x.a.FlairTemplates);
							t && e(Object(l.j)(t)), h = !0
						} catch (O) {
							if (O instanceof Error) throw O;
							e(Object(l.i)(O))
						}
						return h
					}
				},
				E = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				g = Object(d.a)(E),
				j = (e, t, s) => async (n, o, a) => {
					const {
						apiContext: d
					} = a;
					let u = o();
					const {
						pendingImages: E,
						...j
					} = s;
					let C = j;
					const y = Object(v.Y)(u, {
						subredditId: e
					});
					if (!y) return !1;
					const S = u.structuredStyles.flairTemplate.models[t];
					if (S && i()(S, C)) return !0;
					if (E) {
						const s = [];
						if (r()(E, (r, o) => {
								r && s.push(n(_({
									flairId: t,
									imageData: Object(x.m)(r),
									imageKey: o,
									subredditId: e
								})))
							}), !(await Promise.all(s)).every(e => e)) return !1;
						C = ((e, t, s) => {
							const n = {
								...e
							};
							return r()(t, (e, t) => {
								const r = e && s.imageUploads[e.id];
								r && r.kind === x.b.TempUploaded && (n[t] = r.url)
							}), n
						})(C, E, o())
					}
					u = o();
					let k = null,
						T = null;
					const I = [];
					try {
						(k = await Object(l.f)(u, x.a.FlairTemplates)) && (T = Object(l.m)(k)(n, o, a), I.push(...c()(k.imagesByKey)))
					} catch (A) {
						return !1
					}
					const N = await (async (e, t, s, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.ob.PUT,
							data: n
						}))(d(), y.name, t, C),
						w = S ? "edit_post_flair_template" : "save_post_flair_template",
						P = Object(h.e)(u, w);
					if (N.ok) {
						let e;
						if (T) try {
							await T, e = ((e, t, s) => {
								const n = {
									...e
								};
								return t.forEach(e => {
									const t = s.imageUploads[e.id];
									t && t.kind === x.b.Uploaded && (e.url === n.postBackgroundImage ? n.postBackgroundImage = t.url : e.url === n.postPlaceholderImage && (n.postPlaceholderImage = t.url))
								}), n
							})(C, I, o())
						} catch (A) {
							e = null
						} else e = C;
						n(g({
							flairId: t,
							template: e || C
						}))
					} else k && k.websocket.close();
					return Object(O.a)({
						...P,
						actionInfo: {
							...P.actionInfo,
							success: N.ok
						}
					}), N.ok
				}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", y = Object(d.a)(C), S = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n(),
						a = Object(v.Y)(i, {
							subredditId: e
						});
					if (!a) return !1;
					const c = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.ob.DELETE
						}))(o(), a.name, t),
						d = Object(h.e)(i, "delete_flair_template");
					return c.ok && s(y({
						flairId: t
					})), Object(O.a)({
						...d,
						actionInfo: {
							...d.actionInfo,
							success: c.ok
						}
					}), c.ok
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return X
			})), s.d(t, "removalReasonsLoaded", (function() {
				return $
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return oe
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return xe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ve
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Oe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ge
			})), s.d(t, "submitRemovalReason", (function() {
				return je
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case i:
					case a:
					case c:
					case l:
					case u:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case f:
						return t.payload;
					default:
						return e
				}
			};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case l:
						case p:
							return !0;
						case i:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case d:
						case u:
						case m:
						case b:
						case f:
							return !1;
						default:
							return e
					}
				},
				v = Object(o.c)({
					error: h,
					pending: x
				});
			const O = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case c:
					case u: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const E = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: r
						} = n;
						return {
							...e,
							[s]: r
						}
					}
					case c: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, r = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				C = Object(o.c)({
					api: v,
					models: _,
					reasonOrder: g,
					removedItemIds: j
				}),
				y = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				T = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				A = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				F = s("./src/reddit/constants/modals.ts"),
				M = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				U = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(M.a)(Object(D.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: y.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(M.a)(Object(D.a)(e, [U.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: y.ob.POST,
					type: "json",
					data: t
				});
			var G = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				z = s("./src/reddit/models/ModQueue/index.ts"),
				Y = s("./src/reddit/models/PostDraft/index.ts"),
				K = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: C
				}
			});
			const X = Object(S.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(S.a)(i),
				ee = Object(S.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s().subreddits.models[e].name;
					t(X());
					const i = await ((e, t) => Object(M.a)(Object(D.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: y.ob.GET
					}))(r(), o);
					i.ok ? t($({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, se = Object(S.a)(a), ne = Object(S.a)(c), re = Object(S.a)(d), oe = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const a = r().subreddits.models[e].name;
					s(se());
					const c = await ((e, t, s) => Object(M.a)(Object(D.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: y.ob.POST,
						data: s
					}))(i(), a, t);
					if (c.ok) {
						const {
							id: r
						} = c.body, o = {
							...t,
							id: r
						};
						s(ne({
							subredditId: e,
							reason: o
						})), s(Object(L.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, ie = Object(S.a)(l), ae = Object(S.a)(u), ce = Object(S.a)(m), de = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const a = r().subreddits.models[e].name;
					s(ie());
					const c = await ((e, t, s) => Object(M.a)(Object(D.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: y.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(i(), a, t);
					c.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(L.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(c.error))
				}, le = Object(S.a)(p), ue = Object(S.a)(b), me = Object(S.a)(f), pe = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const a = r().subreddits.models[e].name;
					s(le());
					const c = await ((e, t, s) => Object(M.a)(Object(D.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: y.ob.DELETE
					}))(i(), a, t);
					c.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(L.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(c.error))
				}, be = Object(S.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(A.i)(F.a.ADD_REMOVAL_REASON))
				}, he = Object(S.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(S.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(S.a)("REMOVALREASONS__SUBMIT_FAILED"), Oe = Object(S.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(S.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(S.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ge = Object(S.a)("REMOVALREASONS__MESSAGE_FAILED"), je = (e, t, s, n, r, o) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(G.a)(m) ? K.e.Post : K.e.Comment,
						b = p === K.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === K.e.Post ? R.R : N.j;
					if (!b || !u) return !1;
					i(he()), i(f({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const h = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						x = await V(d(), h);
					if (x.ok) {
						if (i(xe()), t) {
							i(Oe());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: o,
									type: n
								},
								a = await W(d(), Object(K.h)(r, p), p);
							if (a.ok) {
								if ([K.f.Public, K.f.PublicAsSubreddit].includes(n)) {
									if (i(Ee()), a.body) {
										const e = Object(H.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Z.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let r = s && n && Object(q.a)(n, l, l.posts.models[e.postId]);
										if (r || (r = Object(k.a)(e.postId, null, {
												sort: y.x,
												hasSortParam: !0
											})), p === K.e.Post) {
											const s = Object(T.a)(Y.c.replyToPost, m);
											i(Object(w.r)({
												...t,
												headCommentId: Object(J.w)(l, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											i(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), n && n !== e.id && i(Object(N.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === K.e.Comment) {
											const e = Object(T.a)(Y.c.replyToComment, b.id),
												s = Object(J.j)(l, {
													commentId: m,
													commentsPageKey: r
												});
											i(Object(w.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else i(_e());
								return !0
							}
							return i(ge(a.error)), !1
						}
					} else i(ve(x.error)), i(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, r, o) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					i(he());
					const m = Object(L.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await V(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: z.a.RemovalReason,
							username: u,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (i(Object(I.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								o = await W(d(), Object(K.h)(n, K.e.Bulk), K.e.Bulk);
							o.ok ? (i(_e()), i(m)) : i(ge(o.error))
						} else i(m)
					} else i(ve(b.error))
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return _
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			var u = s("./src/reddit/reducers/features/avatar/index.ts"),
				m = s("./src/reddit/selectors/avatar.ts"),
				p = s("./src/reddit/actions/users.ts");
			Object(n.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(r.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				x = Object(r.a)(h),
				v = (e, t, s) => async (n, r, o) => {
					let {
						apiContext: u
					} = o;
					var b, f, h, x;
					const v = Object(m.b)(r()),
						O = await (async (e, t, s, n, r) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": r || ""
							},
							data: {
								accessory_ids: t,
								styles: s,
								...n
							}
						}))(u(), e, t, s, v);
					if (!O.ok) throw new Error("User avatar failed to save");
					return n(Object(p.y)(O.body)), {
						accountIcon: null === (f = null === (b = O.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (x = null === (h = O.body) || void 0 === h ? void 0 : h.avatar) || void 0 === x ? void 0 : x.image_url
					}
				}, O = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.ob.GET
						}))(n());
						t.ok && e(f(t.body))
					} catch (r) {
						o.c.captureException(r)
					}
				}, _ = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ob.GET
						}))(n());
						t.ok && e(x(t.body))
					} catch (r) {
						o.c.captureException(r)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/actions/login.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const s = t();
				Object(d.a)(Object(a.l)(s)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(r.g)(i.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, s) => {
					const {
						clickSource: o,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					} = e, h = s();
					o && Object(d.a)(Object(a.g)(o)(h)), Object(c.R)(h) ? await t(Object(r.h)(i.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					})) : await t(Object(n.openLoginModal)())
				}
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts");
			var f = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				v = s("./src/reddit/models/GqlTopLevelField.ts"),
				O = s("./src/reddit/models/User/index.ts");

			function _(e) {
				const t = [],
					s = [],
					n = {},
					r = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== O.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(h.a)(a.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = a.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== v.a.Subreddit) continue;
					const e = Object(x.a)(a.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: n,
					subreddits: r
				}
			}
			var E = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/profile.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/subscriptions.ts"),
				y = s("./src/reddit/selectors/user.ts");
			const S = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				k = Object(i.a)(d.c),
				T = Object(i.a)(d.b),
				I = Object(i.a)(d.a),
				N = Object(i.a)(d.h),
				w = (Object(i.a)(d.i), Object(i.a)(d.g), () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(T());
					const o = await Object(f.a)(n());
					if (o.ok) {
						const t = _(o.body.data);
						e(k(t))
					} else e(I({
						error: o.error
					}))
				}),
				P = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				A = (e, t, s) => async (i, d, m) => {
					let {
						apiContext: p
					} = m, b = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.I)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(g.o)(d(), e.name),
						name: `${r.qc}${e.name}`,
						type: e.type
					});
					if (!Object(y.R)(d())) return i(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void i(Object(a.openRegisterModal)());
					const h = Object(y.l)(d());
					if (h) {
						const t = b.length,
							s = e.length;
						if (b = b.filter(e => !P(h, e)), (e = e.filter(e => !P(h, e))).length !== s || b.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(l.f)(Object(l.e)(e, E.b.Error)))
						}
						if (!e.length && !b.length) return
					}
					i(N({
						identifiers: b,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(C.b)(d()),
						userIsSubscriber: t,
						widgetId: s
					}));
					const x = await Object(f.c)(p(), {
						subredditNames: b.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (x.ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							r = n.fbt._("Successfully followed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "23Snyg"
							}),
							a = n.fbt._("Successfully unfollowed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "jfC0S"
							}),
							c = n.fbt._("Successfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1W9UY3"
							}),
							d = n.fbt._("Successfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1saMW"
							});
						i(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? r : a : t ? c : d
						}))
					} else {
						i(N({
							identifiers: b,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(C.b)(d()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const r = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(l.f)(Object(l.e)(r, E.b.Error)))
					}
					return x.ok
				}, R = Object(i.a)(d.f), L = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s(),
						i = Object(j.Q)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						m = c.indexOf(e.id),
						p = d.indexOf(e.id),
						b = -1 === m && -1 === p,
						h = o.subreddits.models,
						x = o.profiles.models,
						v = {
							type: e.type,
							name: i.name
						},
						O = () => Object(j.kb)(s(), {
							identifier: v
						});
					(O() || (await t(A([v], !0)), O())) && (t(R({
						makeFavorite: b,
						identifier: e,
						subredditModels: h,
						profileModels: x
					})), (await Object(f.b)(r(), a, b)).ok || (t(R({
						makeFavorite: !b,
						identifier: e,
						subredditModels: h,
						profileModels: x
					})), t(Object(l.f)({
						text: S(),
						kind: E.b.Error
					}))))
				}, F = Object(i.a)(d.d), M = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const i = s().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: S(),
								kind: E.b.Error
							}))
						},
						c = i[e];
					if (!c) return void a();
					const d = !c.isFavorited;
					t(F({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(o(), e, d)).ok || (t(F({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), a())
				}, D = Object(i.a)(d.e), U = e => async (t, s, o) => {
					let {
						apiContext: i
					} = o;
					const a = s(),
						c = a.multireddits.models;
					if (!Object(y.R)(a)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : n.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: E.b.Error
							}))
						},
						u = c[e];
					if (!u) return void d();
					const f = !u.isFollowed;
					t(D({
						follow: f,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: r.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(i(), e, f)).ok || (t(D({
						follow: !f,
						multiredditPath: e,
						multiredditsModelsState: c
					})), d(f))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				r = s("./src/lib/opener/index.ts"),
				o = s("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (s, i, a) => {
					let {
						routes: c
					} = a;
					const d = i();
					Object(n.a)(e, c, d) ? s(Object(o.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "j", (function() {
				return i
			})), s.d(t, "h", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "p", (function() {
				return u
			})), s.d(t, "q", (function() {
				return m
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "k", (function() {
				return _
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				x = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				_ = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
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
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n,
					...a
				} = e, l = Object(o.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return r.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), n)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: u,
					callToAction: p,
					caption: b
				} = t;
				if (!u || !u.url) return null;
				let f = u.displayText;
				u.displayText.length >= 40 && (f = u.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(d.u)(s, u.displayText),
					x = Object(d.v)(s) ? f : b,
					v = Object(d.v)(s) ? s.subcaption : u.displayText,
					O = Object(i.a)(m.a.leftSideContent, {
						[m.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[m.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					_ = Object(i.a)(m.a.displayUrl, {
						[m.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: O
				}, b && !r && !h && o.a.createElement("span", {
					className: m.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && o.a.createElement(c.a, {
					href: u.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: u,
					className: _,
					"data-adclicklocation": l.a.CTA_URL
				}, f), h && o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: m.a.productTitle
				}, x), o.a.createElement("span", {
					className: m.a.subcaption
				}, v))), p && o.a.createElement(a.a, {
					className: m.a.callToAction,
					href: u.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: u,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.m.less": function(e, t, s) {
			e.exports = {
				AdSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				adSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				Content: "dND6Q1_345dpzB_NMYBC8",
				content: "dND6Q1_345dpzB_NMYBC8",
				ExtraLarge: "uh_X09jq4S7lMKSY8ZDii",
				extraLarge: "uh_X09jq4S7lMKSY8ZDii",
				Large: "_1l7lMJqbov2T29ncxpJBlP",
				large: "_1l7lMJqbov2T29ncxpJBlP"
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				m = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const f = e => {
				let t;
				switch (e) {
					case m.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case m.b.Large:
						t = b.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const m = Object(o.d)();
				if (!Object(o.e)(u.a) || !Object(a.C)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return r.a.createElement("div", {
					className: Object(i.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && m(Object(c.y)(t, l.a.Click))
					}
				}, r.a.createElement(d.b, {
					className: Object(i.a)(b.a.Content, f(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				u = s("./src/reddit/components/Hovercards/helpers.ts"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/hooks/useIsOverlay.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/redditGQL/types.ts");
			const h = Object(c.v)();
			t.a = h(e => {
				let {
					pageLayer: t,
					postOrComment: s,
					className: c
				} = e;
				var h;
				const x = Object(p.a)(),
					v = Object(i.d)(),
					O = (null === (h = null == t ? void 0 : t.urlParams) || void 0 === h ? void 0 : h.pageName) === a.wb.Modqueue,
					_ = Object(r.useCallback)(() => {
						const e = Object(u.b)({
							itemId: s.id,
							tooltipIdPrefix: l.a,
							tooltipType: x ? m.f.Lightbox : void 0
						});
						v(Object(d.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: f.x.Note
							}
						}))
					}, [s, v, x]);
				return !O || Object(b.p)(s.author) ? null : o.a.createElement("button", {
					className: c,
					onClick: _
				}, n.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
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
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return r.a.createElement(i.b, l({
					className: Object(o.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(i.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
			const u = Object(i.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement(a.a, l({}, s, {
					className: Object(o.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.e, null, o.a.createElement(a.i, null, o.a.createElement(d.a, null, o.a.createElement(a.q, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(a.b, null)))), o.a.createElement(a.l, null, o.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(a.g, null, !e.hideCancelButton && o.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/hooks/usePrevious.ts"),
				i = s("./src/realtime/GQLSubscription/async.tsx"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = s("./src/reddit/components/CountAnimation/index.m.less"),
				l = s.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: s,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: b,
					onDataCB: f,
					postId: h,
					queryKey: x,
					queryVariables: v,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: _
				} = e, [E, g] = Object(n.useState)(!1), [j, C] = Object(n.useState)(!0), [y, S] = Object(n.useState)([]), [k, T] = Object(n.useState)(c(p).reverse()), I = Object(n.useRef)(!1), N = Object(n.useRef)(null), w = Object(n.useRef)(e => {}), P = Object(n.useRef)();
				w.current = Object(n.useCallback)(e => {
					let s = e || d();
					const n = [...k].reverse().join("");
					let r = parseInt(n) + s;
					r > t && (s = t - parseInt(n), r = t);
					const o = c(r).reverse();
					g(!1), S(k), T(o), C(!1), P.current = setTimeout(() => {
						g(!0)
					}, 0)
				}, [t, d, k]);
				const A = Object(n.useRef)(() => {}),
					R = Object(n.useRef)(),
					L = Object(n.useRef)();
				A.current = Object(n.useCallback)(() => {
					L.current = setTimeout(() => {
						w.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && A.current()
					}, _())
				}, [t, _, y]);
				const F = Object(n.useRef)(0),
					M = Object(n.useRef)(!1),
					D = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, n = 1 !== s;
							t ? (M.current = !0, I.current || (I.current = !0, R.current = setTimeout(() => {
								w.current(), A.current()
							}, u())), F.current > 0 && (w.current(F.current), F.current = 0)) : n && (M.current = !1)
						})
					}, []);
				Object(a.a)(N, D);
				const [U, B] = Object(n.useState)(!1), V = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, n = 1 !== s;
						t ? B(!0) : n && B(!1)
					})
				}, []), W = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(N, V, W.current);
				const G = Object(o.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== G && G !== t) {
						const e = t - G;
						M.current ? w.current(e) : F.current += e
					}
					return () => {
						clearTimeout(R.current), clearTimeout(L.current), clearTimeout(P.current)
					}
				}, [t]);
				const H = Object(n.useCallback)(() => C(!0), [C]),
					q = 0 === y.length,
					z = j || q,
					Y = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, s));
				return r.a.createElement(r.a.Fragment, null, !b && r.a.createElement("div", {
					className: l.a.countAnimation
				}, k.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const n = Math.abs(t),
							r = [s];
						if (s === n) return r;
						let o = !0;
						for (; o;) ++s > 9 && (s = 0), r.push(s), s === n && (o = !1);
						return r
					})(y[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: H,
						style: E && y.length > 0 && !j ? {
							transform: `translateY(-${O&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, z ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!O || O && n) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...k].reverse().join(""))), r.a.createElement("span", {
					ref: N
				}), U && r.a.createElement(i.a, {
					variables: v,
					onData: b ? m : f,
					queryKey: x,
					uniqueKey: Y.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = 16374492e5,
				o = 45 * n.E;
			var i;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(i || (i = {}));
			const a = e => {
					return e < Date.now() - o
				},
				c = e => e > r,
				d = (e, t, s, n) => {
					if (!s && !c(e.created)) return i.NotAvailable;
					if (s && !c(e.created) || a(e.created)) return i.Expired;
					if (s && n) return i.Quarantined;
					if (!t) return i.NotAvailableYet;
					const {
						shareAllCountTotals: r,
						shareCopyCountTotals: o,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == r ? void 0 : r.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? i.NotAvailableYet : i.Available : i.NotAvailableYet
				}
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
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
			s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CrosspostBox/index.m.less"),
				E = s.n(_),
				g = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 8,
				y = 1,
				S = g.a.div("Container", E.a),
				k = g.a.div("PostMetaWrapper", E.a),
				T = g.a.wrapped(p.c, "PostTitle", E.a),
				I = g.a.div("FlatList", E.a),
				N = g.a.div("FlatItem", E.a),
				w = g.a.span("FlatListDotSpacer", E.a),
				P = g.a.wrapped(S, "LinkContainer", E.a),
				A = g.a.div("Content", E.a),
				R = g.a.div("ThumbnailContainer", E.a),
				L = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Sb.TOPIC),
					shouldOpenPostInNewTab: O.kb
				}),
				F = Object(i.b)(L);
			t.c = Object(x.b)(F(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: i,
					subredditOrProfile: a
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
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return i && !i.media ? o.a.createElement(P, {
					className: d
				}, o.a.createElement(A, null, o.a.createElement(k, null, o.a.createElement(m.a, c)), M(i), i.source && o.a.createElement(b.a, {
					post: i
				}), U(e)), V(e)) : o.a.createElement(S, {
					className: d
				}, o.a.createElement(k, null, o.a.createElement(m.a, c)), M(i), D(e), U(e))
			}));
			const M = e => o.a.createElement(T, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				D = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(u.a, j({}, n, {
						className: E.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(I, null, o.a.createElement(N, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(w, null), o.a.createElement(N, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				V = e => o.a.createElement(R, null, o.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
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
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					r = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					u = Object(i.e)(e => Object(d.V)(e, {
						postId: t.id
					}));
				return o.a.createElement("div", {
					className: b.a.container
				}, o.a.createElement("div", {
					className: b.a.label
				}, o.a.createElement("span", null, null == u ? void 0 : u.displayText), r && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), l && o.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && o.a.createElement(m, {
					participantsCount: s.totalParticipantsCount
				}), o.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), o.a.createElement("h3", {
					className: b.a.title
				}, s.name))
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
					f = a && Object(i.c)(a.eventStart, a.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !m && f && r.a.createElement(d.a, {
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
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = s("./src/reddit/icons/fonts/Live/index.tsx"),
				d = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.span("PostEventFutureText", u.a),
				b = m.a.span("PostEventPastText", u.a),
				f = m.a.span("PostEventNowText", u.a),
				h = m.a.span("Container", u.a),
				x = m.a.wrapped(a.a, "CalendarIcon", u.a),
				v = m.a.wrapped(c.a, "LiveIcon", u.a),
				O = m.a.div("LoadingState", u.a);
			class _ extends n.Component {
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
						eventIsLive: a,
						eventStart: c
					} = s, l = Object(o.e)(c, n);
					let u, m;
					if (this.state.mounted || l === o.a.Live) u = r.a.createElement(d.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						u = r.a.createElement(O, {
							className: e
						})
					}
					if (a) m = r.a.createElement(f, null, r.a.createElement(v, null), u);
					else if (l === o.a.Future) m = r.a.createElement(p, null, r.a.createElement(x, null), u);
					else {
						if (l !== o.a.Past) return null;
						m = r.a.createElement(b, null, r.a.createElement(x, null), u)
					}
					return r.a.createElement(h, {
						className: e
					}, m)
				}
			}
			t.a = _
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
				return B
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "b", (function() {
				return q
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Emoji/index.m.less"),
				f = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: s,
					...n
				} = e;
				return c.a.createElement("div", h({
					style: {
						...s || {},
						backgroundImage: `url('${t}')`
					}
				}, n))
			}, "EmojiDisplay", f.a);
			var v = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = s("./src/reddit/constants/colors.ts"),
				E = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = s("./src/reddit/icons/svgs/Close/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/reddit/components/Flair/index.m.less"),
				T = s.n(k);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(O.a)(v.b),
				w = p.a.div("FlairWrapper", T.a),
				P = p.a.wrapped(d.a, "CloseButton", T.a),
				A = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: s,
						...n
					} = e;
					const r = s;
					return c.a.createElement(x, I({
						style: {
							...R(!!t, r) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", T.a),
				R = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				L = (e, t) => {
					const s = t ? `/r/${t}/search` : "/search",
						n = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(s, {
						[E.z]: n,
						[E.C]: t ? "1" : ""
					})
				},
				F = e => e.isFlairFilter ? c.a.createElement(g.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(g.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: L(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class M extends c.a.Component {
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
							[T.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(S.a)(this.props).flair,
							color: `${B(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(P, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(C.a, {
						className: T.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(S.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(N, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(F, {
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
			const D = Object(m.a)(M),
				U = Object(m.a)(e => {
					let t = "",
						s = !1;
					const n = e.richtext.map((n, r) => {
						if (n.e === y.c.Emoji) {
							const o = n;
							return t += o.a, s = !0, c.a.createElement(A, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: r,
								title: o.a
							})
						} {
							const e = n;
							return t += e.t, c.a.createElement("span", {
								key: r
							}, e.t)
						}
					});
					let r;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (r = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(w, {
						className: Object(u.a)(e.className, {
							[T.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...r,
							backgroundColor: e.backgroundColor || Object(S.a)(e).flair,
							color: `${B(e)}`
						}
					}, n, e.isSelected && c.a.createElement(P, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(C.a, {
						className: T.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(S.a)(e).flair
						}
					})));
					return c.a.createElement(F, {
						flair: o,
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
				B = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(S.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(j.a)(Object(S.a)(e).post, _.a.black, _.a.white) : e.textColor === y.e.Dark ? _.a.black : _.a.white,
				V = p.a.wrapped(D, "TextFlair", T.a),
				W = p.a.wrapped(U, "RichTextFlair", T.a),
				G = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(S.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				H = p.a.wrapped(e => {
					const t = G(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(F, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", T.a);

			function q(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: r,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[T.a.flairVariant]: o,
					[T.a.small]: o && !e.large,
					[T.a.large]: o && e.large
				}, t);
				switch (r.type) {
					case y.f.Richtext:
						return s || !r.richtext ? null : c.a.createElement(W, {
							backgroundColor: r.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: r.richtext,
							subredditName: m,
							textColor: r.textColor,
							to: f
						});
					case y.f.Text:
						return s || !r.text ? null : c.a.createElement(V, {
							backgroundColor: r.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: f
						});
					case y.f.Meta:
						return c.a.createElement(V, {
							backgroundColor: r.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: f
						});
					case y.f.Nsfw:
					case y.f.Spoiler:
						return c.a.createElement(H, {
							className: t,
							text: r.text,
							type: r.type
						});
					case y.f.Quarantined:
						return null;
					case y.f.Oc:
						return c.a.createElement(V, {
							backgroundColor: _.a.alienblue,
							text: r.text,
							textColor: y.e.Light,
							tooltip: n.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return r.text ? c.a.createElement(V, {
							backgroundColor: r.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.m.less": function(e, t, s) {
			e.exports = {
				flairVariantInList: "_1Dl-kvSxyJMWO9nuoTof8N"
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/FlairList/index.m.less"),
				b = s.n(p);
			const f = Object(c.c)({
					labelNSFW: m.bb
				}),
				h = Object(a.b)(f),
				x = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: n,
					onMouseDown: o,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const f = !!c.find(e => e.type === u.f.Richtext),
					h = c.map(e => {
						if (e.type === u.f.Text && f) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							c = `/r/${p}/`,
							h = o ? () => o(e) : r.a,
							v = s && (e.type === u.f.Richtext || e.type === u.f.Text);
						return i.a.createElement(d.b, {
							className: v ? b.a.flairVariantInList : void 0,
							isFlairFilter: s,
							key: x(e),
							onClick: n,
							onMouseDown: h,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(l.e)(c, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, h)
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
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => i.a.createElement(a.i, {
				className: l.a.modalHeader
			}, i.a.createElement(a.q, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
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
				r = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = s.n(r);
			const i = n.a.div("Wrapper", o.a);
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, n.fbt._("No flair selected", null, {
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
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
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
				b = r()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(a.a)({
						getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = s("./src/reddit/components/Flair/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/index.tsx"),
				O = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				j = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				C = s.n(j);
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(_.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: s
					} = this.props, {
						searchQuery: r
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), a = !!s && i.some(e => e.id === s);
					return o.a.createElement("div", {
						className: C.a.container
					}, o.a.createElement("div", {
						className: C.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: C.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(g.a, {
						className: C.a.searchIcon
					})), o.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							r = s === e.id || !a && 0 === t;
						return o.a.createElement(O.a, {
							className: C.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(h.b, {
							className: C.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(E.a, {
							className: C.a.pencil
						}))
					})))
				}
			}
			var S = Object(x.c)(y),
				k = s("./src/reddit/components/FlairSearch/index.m.less"),
				T = s.n(k);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				N = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				w = Object(i.b)(N);
			t.a = w(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: r,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, x = Object(p.a)(), v = d && s && s.templateId && d[s.templateId] || void 0, O = Object(f.a)(), _ = s || I(v);
				return o.a.createElement("div", {
					className: Object(c.a)(r, T.a.container)
				}, d && l && o.a.createElement(S, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							x(Object(m.b)({
								userFlair: t
							})), i(s)
						}
					},
					selectedTemplateId: v ? v.id : "",
					templateIds: l,
					templates: d
				}), _ && v && (h || v.textEditable) && o.a.createElement("div", {
					className: T.a.flairEditSection
				}, o.a.createElement("div", {
					className: T.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: T.a.restrictionHintText
				}, Object(u.k)(v)), o.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: _,
					flairTemplate: v,
					flairTemplateType: t,
					isFlairModOnly: v.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let s = e;
						t && (s = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(s)
					},
					subredditId: a
				})))
			})
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
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/FlairList/index.tsx"),
				l = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				u = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/trackers/postFlair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.m.less"),
				O = s.n(v);
			const _ = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(m.r)(e, {
							pageLayer: s
						})
					},
					isPostFlairEnabled: (e, t) => Object(h.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.Y)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				E = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: n.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e.isMeta && t.push({
						text: n.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = _(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: n,
					isFlairFilter: r,
					isPostFlairEnabled: i,
					nowrap: a,
					post: m,
					sendEvent: h,
					subredditName: x,
					titleFlair: v
				} = e;
				const _ = Object(u.a)(),
					g = n === f.b.Left,
					j = v || E(m),
					{
						leftFlair: C,
						rightFlair: y
					} = Object(l.a)({
						flair: j,
						isFlairPositionedLeft: g
					}),
					S = a ? O.a.flairNoWrap : C.length > 0 || y.length > 0 ? O.a.flairWrapper : null,
					k = e => {
						const t = {
							id: m.belongsTo.id,
							eventType: m.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), h && h(Object(b.a)(m.id, t))
					},
					T = e => {
						Object(p.d)(p.a.SearchResults), h && h(Object(b.e)(e, m.id))
					},
					I = !(s || !j || !j.length);
				return I ? o.a.createElement("div", {
					className: Object(c.a)(S, t),
					"data-ignore-click": _
				}, I && C && o.a.createElement(d.a, {
					className: O.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: k,
					onMouseDown: T,
					flair: C,
					disabled: !i,
					subredditName: x
				}), I && o.a.createElement(d.a, {
					className: O.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: k,
					onMouseDown: T,
					flair: y,
					disabled: !i,
					subredditName: x
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(n.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/humanizeDate/index.ts"),
				i = s("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...s
				} = e;
				var n;
				const a = Object(i.a)(),
					c = {
						...s,
						locale: null !== (n = s.locale) && void 0 !== n ? n : a
					};
				return r.a.createElement(r.a.Fragment, null, Object(o.a)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = s("./src/lib/constants/index.ts");
			var a = s("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: s
				} = e;
				const n = Object(a.a)(),
					c = null != s ? s : n;
				return r.a.createElement(r.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.DEFAULT_LOCALE;
					const s = e * i.Xb;
					return new Date(s).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, c))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/timeAgo/index.ts"),
				i = s("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...s
				} = e;
				var n;
				const a = Object(i.a)(),
					c = {
						...s,
						locale: null !== (n = s.locale) && void 0 !== n ? n : a
					};
				return r.a.createElement(r.a.Fragment, null, Object(o.d)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n.a
			})), s.d(t, "a", (function() {
				return r.a
			})), s.d(t, "b", (function() {
				return o.a
			})), s.d(t, "c", (function() {
				return f
			}));
			var n = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				r = s("./src/reddit/components/HumanDate/HumanDate.tsx"),
				o = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				d = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function p(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.DEFAULT_LOCALE;
				const r = Object(u.e)(e, t),
					o = new Date(e * l.Xb);
				let i;
				if (r === u.a.Live || s) return d.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === u.a.Future ? i = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(o, n) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, n) : r === u.a.Past && (i = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(o, n)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,n)}`
			}
			var b = s("./src/reddit/hooks/useLocale.ts");
			var f = function(e) {
				let {
					startTime: t,
					endTime: s,
					isLive: n,
					locale: r
				} = e;
				const o = Object(b.a)(),
					i = null != r ? r : o;
				return a.a.createElement(a.a.Fragment, null, p(t, s, n, i))
			};
			s("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return _
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = i.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = a.a;
						break;
					default:
						t = i.a
				}
				return o.a.createElement(t, {
					className: u.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = "clear_fill";
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = "delete_fill";
						break;
					case d.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, f = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "3MHgRl"
			}))), m._param("=Content Policy", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), h = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "yMHtU"
			}))), m._param("=Content Policy", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), x = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return m._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case d.g.Author:
						return m._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case d.g.AuthorDeleted:
						return m._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case d.g.AutomodFiltered:
						return m._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case d.g.CommunityOps:
						return m._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case d.g.ContentTakedown:
						return m._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case d.g.CopyrightTakedown:
						return m._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case d.g.Moderator:
						return m._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [m._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case d.g.Reddit:
						return m._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return m._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, v = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return o.a.createElement(f, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", o.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("{subreddit name}", [m._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case d.g.CommunityOps:
						return m._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case d.g.ContentTakedown:
						return o.a.createElement(h, null);
					case d.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case d.g.Moderator:
						return m._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case d.g.Reddit:
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, O = (e, t, s) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return m._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case d.g.Author:
						return m._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case d.g.AuthorDeleted:
						return m._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case d.g.AutomodFiltered:
						return m._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case d.g.CommunityOps:
						return m._("This post was removed by Reddit admin, u/{username}.", [m._param("username", t)], {
							hk: "34nHWu"
						});
					case d.g.ContentTakedown:
						return m._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case d.g.CopyrightTakedown:
						return m._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case d.g.Moderator:
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", s), m._param("username", t)], {
							hk: "270bcn"
						});
					case d.g.Reddit:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, _ = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return o.a.createElement(f, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case d.g.AutomodFiltered:
						return m._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case d.g.CommunityOps:
						return m._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [m._param("=just ask", o.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return o.a.createElement(h, null);
					case d.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case d.g.Moderator:
						return m._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case d.g.Reddit:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
			t.a = r.a.memo((function(e) {
				let {
					visible: t,
					...s
				} = e;
				const [i, d] = Object(n.useState)(t);
				return Object(n.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? r.a.createElement("div", c({
					className: Object(o.a)(a.a.tooltip, s.className, {
						[a.a.visible]: i
					})
				}, s.popperProps), s.children, i && r.a.createElement("div", c({
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
				return h
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				f = m.a.div("BottomText", u.a),
				h = e => r.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				v = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(d.b)(s)(e)
					}
				}),
				O = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				_ = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				E = Object(o.b)(v);
			t.c = E(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(O, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(_, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
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
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw",
				liveLabel: "_1HHtbJesYWFlnffF_u9U5U",
				realtimeAnimation: "AtOuz7HaZcKodxvKABuOw",
				realtimeFade: "Uuedk2mN8afhHTXUH825B",
				isNightMode: "_1Qs6zz6oqdrQbR7yE_ntfY",
				realtimeFadeNight: "hjNeLkbGFHNdcoj6SGxE0",
				realtimeUpdated: "_2U6P_aTp-ha87x11OgMyff"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				P = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				A = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				R = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				L = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				F = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				M = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				D = s("./src/reddit/components/CreatorStats/loader.tsx"),
				U = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				G = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				q = s("./src/reddit/components/ModModeReports/helpers.ts"),
				z = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				Y = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				K = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Q = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				Z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				X = s("./src/reddit/components/PostMedia/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				te = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				se = s.n(te);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var re = () => r.a.createElement("div", {
					className: se.a.container
				}, r.a.createElement(ee.a, {
					className: se.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: se.a.metaText
				}, ne._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ie = s("./src/reddit/components/PostTitle/index.tsx"),
				ae = s("./src/reddit/components/PostTopLine/index.tsx"),
				ce = s("./src/reddit/components/SourceLink/index.tsx"),
				de = s("./src/reddit/constants/postLayout.ts"),
				le = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				me = s("./src/reddit/contexts/Post/index.tsx"),
				pe = s("./src/reddit/helpers/isCrosspost.ts"),
				be = s("./src/reddit/helpers/localStorage/index.ts"),
				fe = s("./src/reddit/helpers/path/index.ts"),
				he = s("./src/reddit/helpers/postEvent.ts"),
				xe = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				ve = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = s.n(ve),
				_e = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Ee = s("./src/reddit/hooks/useClickSourceData.ts"),
				ge = s("./src/reddit/models/Audio/index.ts"),
				je = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Ce = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ye = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Se = s("./src/reddit/constants/experiments.ts"),
				ke = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Te = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ie = Object(a.a)(k.N, e => e.some(Te.d)),
				Ne = Object(a.a)(Ie, e => e),
				we = (e, t) => Object(ke.c)(e, {
					experimentName: Se.fd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Ne(e, {
							listingKey: s
						})
					}
				});
			var Pe = s("./src/reddit/selectors/modQueue.ts"),
				Ae = s("./src/reddit/selectors/postFlair.ts"),
				Re = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Le = s("./src/reddit/selectors/i18n/index.ts"),
				Fe = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Me = s("./src/reddit/components/LargePost/index.m.less"),
				De = s.n(Me);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...o
					} = e;
					return r.a.createElement(P.a, Ue({}, o, {
						className: Object(N.a)(t, De.a.styledLink, {
							[De.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				Ve = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(k.N)(e, {
						listingKey: s
					}) : void 0
				},
				We = Object(o.b)(() => Object(a.c)({
					autoplayPref: T.c,
					isModQueueDisplayEnabled: Pe.b,
					activeModalId: C.a,
					hideNSFWPref: T.G,
					flairStyleTemplate: ue.Y,
					isBlurredPreview: ye.b,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: T.R,
					isActive: k.j,
					showPromotedCTA: Re.a,
					moderatorPermissions: S.m,
					modModeEnabled: ue.W,
					posts: Ve,
					postHeightVariant: we,
					shouldShowNsfwListingBelow: Le.b,
					showEditFlair: Ae.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(S.i)(e, s.id)
					},
					isOptionalTextEnabled: je.a,
					showCTAExperimentDesign: y.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, r;
						return !!(null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === r ? void 0 : r.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: T.eb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === j.a.upvoted ? Object(m.jb)(s) : Object(m.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(m.fb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ge = r.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: o,
						shouldStylePostAfterVisitLink: i,
						children: a
					} = e;
					return i ? r.a.createElement(Be, {
						"data-click-id": "body",
						target: o ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : r.a.createElement(r.a.Fragment, null, a)
				}),
				He = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: a,
						currentUser: p,
						eventFactory: j,
						flairStyleTemplate: C,
						forceLoadMedia: y,
						hideNSFWPref: S,
						hostPostData: k,
						imageGalleryCurrentItem: P,
						inSubredditOrProfile: ee = !1,
						isBlurredPreview: te,
						isCommentsPage: se,
						isCurrentUserProfilePost: ne,
						isFrontpage: le,
						isGalleryTileLayoutDefault: ue,
						isModWithUserNotesPermissions: me,
						isLoggedIn: ve,
						isOverlay: je,
						isTopicPage: ye,
						isCommentCountAnimationEnabled: ke,
						isVoteCountAnimationEnabled: Te,
						isCountAnimShadowTestEnabled: Ie,
						listingIndex: Ne,
						listingKey: we,
						moderatorPermissions: Pe,
						modModeEnabled: Ae,
						onClickPost: Re,
						onIgnoreReports: Le,
						onOpenReportsDropdown: Me,
						post: Ue,
						postHeightVariant: Be,
						scrollerItemRef: Ve,
						shouldShowGalleryTileOption: We,
						shouldShowInsightsButton: He,
						shouldShowNsfwListingBelow: qe,
						showEditFlair: ze,
						showPromotedCTA: Ye,
						subredditOrProfile: Ke,
						userIsOp: Qe,
						postId: Je,
						postIds: Ze,
						onceInViewport: Xe,
						isOptionalTextEnabled: $e,
						showCTAExperimentDesign: et,
						isModQueueDisplayEnabled: tt,
						showRealtimeUpdateAnimation: st,
						isUpdatedContent: nt,
						isNightMode: rt
					} = e, ot = Object(_.a)(), it = Ke, at = !!e.redditStyle || !!e["data-redditstyle"], ct = at ? void 0 : C, dt = Object(l.a)(Pe), lt = Ae && dt, ut = Object(c.a)(Pe), mt = Object(d.a)(Pe), pt = Object(q.c)(Ue), bt = Object(G.a)(Ue), ft = !!Ue.media && Ue.media.type === E.o.RTJSON, ht = Qe && ft, xt = s ? s - Z.a : void 0, vt = !!Ue.recommendationContext, Ot = !(le && ve || ye) || vt && ve, _t = (e => e === Se.df.OnlyTitles)(Be) && !Object(pe.a)(Ue), Et = (e => e === Se.df.MediumHeight)(Be) && !Object(pe.a)(Ue), gt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: r
						} = e;
						if (!Object(g.w)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const o = n && 0 === n.indexOf(s.id),
							i = n && 1 === n.indexOf(s.id),
							a = r && r[1] && Object(g.w)(r[1]);
						return {
							hasTopCompactPostStyles: o && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: o
						}
					})(e), jt = Object(o.d)(), Ct = Object(o.e)(Ce.b), yt = Object(o.e)(Ce.c), St = Object(o.e)(T.kb), kt = Object(Ee.a)(), Tt = Ue.media && Object(E.I)(Ue.media) ? Object(xe.c)(Ue.id, it.name) : Ue.permalink, It = e.isCommentPermalink ? Object(fe.b)(Tt) : Object(w.a)(Tt, void 0, kt), Nt = !!(null == k ? void 0 : k.shouldShowLinkedPosts), wt = (!ee || Nt || qe) && !Ue.isSponsored, Pt = Object(I.t)(Ue, P), {
						source: At
					} = Pt, Rt = Object(n.useRef)(null), Lt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Xe || Xe(Ne))
						})
					}, [Xe, Ne]);
					Object(O.a)(Rt, Lt);
					const [Ft, Mt] = Object(n.useState)(!1), Dt = Object(n.useCallback)(() => {
						Mt(!Ft), Object(be.Qb)(), ot(Object(_e.d)(Je))
					}, [Ft, ot, Je]), Ut = !!(te && (null == Ke ? void 0 : Ke.isNSFW)), Bt = Object(n.useRef)({
						renderingObjectInfo: Ue
					}), Vt = Object(n.useCallback)(e => {
						!Ct && !yt || Ue.media && Object(E.I)(Ue.media) || (e.preventDefault(), jt(Object(m.ab)(Object(fe.b)(Ue.permalink), Ue.id)))
					}, [jt, Ct, yt, Ue.id, Ue.media, Ue.permalink]), Wt = Ue && Ue.media && (Ue.media.type === E.o.TEXT || Ue.media.type === E.o.RTJSON), Gt = Object(g.s)(Ue);
					return r.a.createElement(v.b, null, r.a.createElement(J.b, {
						className: Object(N.a)(De.a.container, a, Oe.a.largeAndMediumPostStyles, Oe.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[Oe.a.mUseRedditTheme]: at,
							[De.a.topCompactPost]: gt && gt.hasTopCompactPostStyles,
							[De.a.bottomCompactPost]: gt && gt.hasBottomCompactPostStyles,
							[De.a.shouldShowOverflow]: He,
							[De.a.realtimeAnimation]: st,
							[De.a.realtimeUpdated]: nt,
							[De.a.isNightMode]: rt
						}),
						isOverlay: je,
						style: tt && (st || nt) ? rt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(u.b)(e.flairStyleTemplate),
						post: Ue,
						onClick: Re,
						eventFactory: j
					}, r.a.createElement("div", {
						ref: Rt
					}), r.a.createElement(oe.a, {
						model: Ue,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Ie,
						isVoteCountAnimation: Te,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ct,
						redditStyle: at,
						postId: Je
					}), r.a.createElement(Q.a, {
						className: Object(N.a)(De.a.backgroundWrapper, {
							[De.a.isEvent]: Object(he.a)(Ue),
							[De.a.shouldUseRoundedBorder]: He,
							[De.a.realtimeAnimation]: st,
							[De.a.realtimeUpdated]: nt,
							[De.a.isNightMode]: rt
						}),
						"data-click-id": "background",
						flairStyleTemplate: ct,
						post: Ue,
						redditStyle: at,
						overrideBackgroundColor: tt && (st || nt) ? rt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, r.a.createElement(U.a, {
						post: Ue
					}), gt && gt.showPinnnedHeader && r.a.createElement(re, null), Object(i.c)(Ue) && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.a, {
						post: Ue
					}), r.a.createElement(f.a, {
						post: Ue
					})), !Object(i.c)(Ue) && r.a.createElement(r.a.Fragment, null, Gt && r.a.createElement(K.a, {
						content: Ue.recommendationContext.content,
						layout: de.g.Large,
						post: Ue
					}), r.a.createElement(ae.a, {
						className: De.a.postTopLine,
						hideNSFWPref: S,
						hostPostData: k,
						iconClassName: De.a.postTopLineIcon,
						inSubredditOrProfile: ee,
						isCommentsPage: !!se,
						isCompactPinnedPost: !!gt,
						isCurrentUserProfilePost: ne,
						isModWithUserNotesPermissions: me,
						isOverlay: !!je,
						isTopicPage: !!ye,
						listingKey: we,
						post: Ue,
						shouldShowSubscribeButton: Ot,
						showSubreddit: wt,
						showSubredditIcon: !0,
						subredditOrProfile: Ke
					}), r.a.createElement(ie.c, {
						className: De.a.postTitle,
						post: Ue,
						redditStyle: at,
						size: ie.b.Large,
						titleColor: ct && ct.postTitleColor,
						isOverlay: je
					}), r.a.createElement(L.a, {
						className: De.a.adSupplementaryText,
						post: Ue,
						size: ie.b.Large
					}), Ue.source && !Ue.isSponsored && !(Ue.media && Object(E.I)(Ue.media)) && !Ut && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
						className: De.a.sourceLink,
						post: Ue
					}), $e && Ue.media && Ue.media.type !== E.o.TEXT && Ue.media.type !== E.o.IMAGE && Ue.media.richtextContent && r.a.createElement(x.a, {
						content: Ue.media.richtextContent,
						rtJsonElementProps: Bt.current
					}))), r.a.createElement("div", {
						className: De.a.postMediaWrapper
					}, !gt && r.a.createElement(Ge, {
						handlePostLinkClick: Vt,
						postPermalink: It,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: St,
						shouldStylePostAfterVisitLink: Wt
					}, r.a.createElement(X.a, {
						isGalleryTileLayoutDefault: ue,
						isListing: !0,
						isMediumHeight: Et,
						isNotCardView: !!je,
						isTitleOnly: _t,
						showCentered: !0,
						flairStyleTemplate: ct,
						post: Ue,
						availableWidth: xt,
						shouldLoad: y,
						scrollerItemRef: Ve,
						autoplayPref: t,
						shouldShowGalleryTileOption: We,
						showPromotedCTA: Ye
					}))), Ye && At && At.url && !Ue.isSurveyAd && r.a.createElement(A.a, {
						className: De.a.adLinkWrapper,
						ctaExperimentDesign: et && "card"
					}, r.a.createElement(R.a, {
						post: Ue,
						adLinkContent: Pt,
						ctaExperimentDesign: et && "card"
					})), Ae && dt && bt && !tt && r.a.createElement("div", {
						className: De.a.modModeBannerWrapper
					}, r.a.createElement(W.a, {
						thing: Ue
					})), Ae && dt && pt && !tt && r.a.createElement("div", {
						className: De.a.modModeBannerWrapper
					}, r.a.createElement(H.a, {
						onIgnoreReports: Le,
						reportable: Ue
					})), Object(ge.c)(Ue) && r.a.createElement(b.a, {
						post: Ue
					}), r.a.createElement(V.d, null), tt && r.a.createElement(Y.a, {
						post: Ue
					}), Ue.discussionType === g.b.Chat && r.a.createElement(Fe.a, {
						postId: Ue.id,
						className: De.a.liveLabel
					}), r.a.createElement("div", {
						className: De.a.flatListContainer
					}, r.a.createElement(M.a, {
						className: De.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ct,
						model: Ue,
						onVoteClick: e.handleVote
					}), !Ue.isSurveyAd && (tt ? r.a.createElement(z.a, {
						content: Ue,
						listingKey: we,
						hostPostData: k
					}) : r.a.createElement(B.c, {
						currentUser: p,
						hasModFlairPerms: ut,
						hasModFullPerms: mt,
						hasModPostPerms: dt,
						hostPostData: k,
						isCommentCountAnimation: ke,
						isCountAnimShadowTestEnabled: Ie,
						isLargePost: !0,
						isOverlay: !!je,
						listingKey: we,
						modModeEnabled: Ae,
						onClickInsightsButton: Dt,
						onIgnoreReports: Le,
						onOpenReportsDropdown: Me,
						post: Ue,
						shouldShowInsightsButton: He,
						showEditPost: ht,
						showEditFlair: ze,
						useFlatlistBreakpoints: Object($.b)({
							editPost: !1,
							save: !lt,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Ke && Ft && r.a.createElement(D.a, {
						className: De.a.creatorStatsContainer,
						post: Ue,
						subreddit: Ke,
						isOwnProfileStats: !0
					})), le && r.a.createElement(F.a, {
						post: Ue,
						postIds: null != Ze ? Ze : [],
						subredditId: null == Ke ? void 0 : Ke.id
					})))
				});
			He.displayName = "LargePostMemoized";
			t.default = Object(me.b)(We(Object(le.b)(He)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(a);
			const d = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? r.fbt._("{userCount} here now", [r.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : r.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				u = s.n(l);
			const m = () => i.a.createElement("span", {
				className: u.a.LiveLabel
			}, r.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const f = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, i.a.createElement(m, null), i.a.createElement(d, {
					userCount: t
				}))
			};
			var h = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const O = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(h.e)(e => Object(x.a)(e, t));
				return Object(h.e)(v.e) ? i.a.createElement(f, {
					userCount: n,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
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
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = s.n(i);
			const c = e => {
				let {
					post: t
				} = e;
				var s;
				return o.a.createElement("p", {
					className: a.a.postStats
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", n.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [n.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return he
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/modQueue/realtime.ts"),
				l = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				u = s("./src/reddit/components/OverflowMenu/index.tsx"),
				m = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				p = s("./src/reddit/components/ReportFlow/new.tsx"),
				b = s("./src/reddit/constants/modals.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				E = s("./src/reddit/helpers/trackers/gild.ts"),
				g = s("./src/reddit/helpers/trackers/modTools.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/actions/comment/moderation.ts"),
				T = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/post.ts"),
				w = s("./src/reddit/actions/postFlair.ts"),
				P = s("./src/reddit/actions/removalReasons/index.ts"),
				A = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/selectors/activeModal.ts"),
				L = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const D = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.m || Object(_.b)(e) && [M.g.AntiEvilOps, M.g.CommunityOps, M.g.ContentTakedown, M.g.CopyrightTakedown, M.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : e.isSpam ? n.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.m ? n.FILTERED : n.UNMODERATED
			};
			var U = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				B = s.n(U),
				V = s("./src/lib/classNames/index.ts"),
				W = s("./src/reddit/components/HumanDate/index.tsx"),
				G = s("./src/reddit/components/UserIcon/index.tsx"),
				H = s("./src/reddit/helpers/name/index.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				Y = s.n(z);
			const K = e => {
				let {
					content: t
				} = e;
				var s;
				const n = (null == t ? void 0 : t.approvedBy) || "",
					o = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(q.Bb)(e, {
						userName: n
					}) : null),
					c = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Y.a.userIconWrapper
				}, i.a.createElement(G.a, {
					className: Object(V.a)(Y.a.userIcon),
					iconUrl: null == o ? void 0 : o.accountIcon,
					userName: n,
					isNSFW: !!(null == o ? void 0 : o.isNSFW)
				})), i.a.createElement("div", {
					className: Y.a.statusText
				}, i.a.createElement("p", {
					className: Y.a.status
				}, r.fbt._("Approved", null, {
					hk: "4d15LY"
				})), i.a.createElement("p", null, Object(H.e)(n), c && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(W.d, {
					seconds: c
				})))))
			};
			var Q = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const J = e => {
				let {
					content: t
				} = e;
				const s = Object(o.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || s.push({
						icon: "bot_fill",
						heading: r.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case Q.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case Q.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case Q.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case Q.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: r.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case Q.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: n.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return i.a.createElement("div", {
					className: Y.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: r
					} = e;
					return i.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: Y.a.filteredRow
					}, i.a.createElement(S.a, {
						isFilled: !0,
						name: r,
						className: Object(V.a)(Y.a.coloredIcon, Y.a.icon)
					}), i.a.createElement("div", {
						className: Y.a.statusText
					}, i.a.createElement("p", {
						className: Y.a.status
					}, s), n && i.a.createElement("p", null, n)))
				}))
			};
			var Z = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				X = s("./src/reddit/selectors/subreddit.ts");
			const $ = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(q.Bb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					o = Object(_.b)(t),
					c = Object(a.e)(e => Object(X.Y)(e, {
						subredditId: o ? t.belongsTo.id : t.subredditId
					})),
					d = o && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(Z.b)(d) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, n ? i.a.createElement("div", {
					className: Y.a.userIconWrapper
				}, i.a.createElement(G.a, {
					className: Object(V.a)(Y.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : i.a.createElement(S.a, {
					isFilled: !0,
					name: l,
					className: Object(V.a)(Y.a.coloredIcon, Y.a.icon)
				}), i.a.createElement("div", {
					className: Y.a.statusText
				}, i.a.createElement("p", {
					className: Y.a.status
				}, r.fbt._("Removed{spam}{reason}", [r.fbt._param("spam", t.isSpam ? " as spam" : ""), r.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), i.a.createElement("p", null, (null == n ? void 0 : n.username) ? i.a.createElement(i.a.Fragment, null, Object(H.e)(null == n ? void 0 : n.username), u && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(W.d, {
					seconds: u
				}))) : d && Object(Z.f)(d, c.name))))
			};
			var ee = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				te = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var re = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				oe = (s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx"), s("./src/reddit/icons/fonts/Menu/index.tsx"), s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx"), s("./src/reddit/icons/fonts/Op/index.m.less")),
				ie = s.n(oe),
				ae = s("./src/lib/lessComponent.tsx");
			ae.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(ne.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(ne.a, null, e.desc)), "OpIcon", ie.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ce = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				de = s.n(ce);
			ae.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(ne.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", de.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var le = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				me = s.n(ue);
			ae.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(ne.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", me.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const pe = e => {
					let {
						content: t
					} = e;
					const s = Object(se.b)(),
						n = Object(a.d)(),
						c = Object(o.useCallback)(() => {
							const e = Object(_.a)(t.id),
								r = e ? N.fb : k.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								i = e ? Object(g.j)(o, t.id) : Object(g.i)(o, t.id);
							n(r(t.id)), s(i)
						}, [t.id, t.ignoreReports, s, n]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(S.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(V.a)(Y.a.coloredIcon, Y.a.icon)
					}), i.a.createElement("div", {
						className: Y.a.reportedWrapper
					}, !!t.modReports.length && i.a.createElement("div", {
						className: Y.a.statusText
					}, i.a.createElement("p", {
						className: Y.a.status
					}, r.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [r.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return i.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(H.e)(n), ": ", s)
					})), !!t.userReports.length && i.a.createElement("div", {
						className: Y.a.statusText
					}, i.a.createElement("div", {
						className: Y.a.reportMeta
					}, i.a.createElement("p", {
						className: Y.a.status
					}, r.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [r.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !d && i.a.createElement(te.c, {
						className: Y.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? r.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : r.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? i.a.createElement(le.a, {
						className: Y.a.ignoreButtonIcon
					}) : i.a.createElement(re.a, {
						className: Y.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, r, o, a] = e;
						return n ? void 0 !== o && a ? i.a.createElement(ee.a, {
							key: `user-${n}`,
							reason: n,
							amount: r,
							reportedThingId: t.id,
							isSnoozed: o,
							useNewFormat: !0,
							className: Y.a.snoozabledButton,
							dropdownClassName: Y.a.snoozableDropdown,
							iconClassName: Y.a.snoozeIcon
						}) : i.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", r, ")") : null
					}))))
				},
				be = e => {
					let {
						content: t
					} = e;
					const s = D(t),
						r = Object(o.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return i.a.createElement(K, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return i.a.createElement($, {
										content: t
									});
								case n.FILTERED:
									return i.a.createElement(J, {
										content: t
									});
								case n.REPORTED:
									return i.a.createElement(pe, {
										content: t
									});
								default:
									return i.a.createElement(o.Fragment, null)
							}
						}, [s, t]);
					return s === n.UNMODERATED ? null : i.a.createElement("div", {
						className: Object(V.a)(Y.a.wrapper, {
							[Y.a.approved]: s === n.APPROVED,
							[Y.a.reported]: s === n.REPORTED
						})
					}, r)
				},
				fe = (e, t) => Object(g.b)(t, e),
				he = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: M
					} = e;
					const U = Object(y.a)(),
						V = Object(a.d)(),
						W = D(t),
						G = Object(a.e)(L.b),
						H = Object(a.e)(R.b),
						q = Object(_.b)(t),
						z = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						Y = Object(a.e)(e => Object(F.m)(e, {
							postId: t.id
						})),
						K = Object(O.a)(Y),
						Q = Object(v.a)(Y),
						[J, Z] = Object(o.useState)(!1),
						X = Object(a.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						$ = Object(o.useRef)(null),
						ee = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? Z(!0) : t || Z(!1)
							})
						}, []);
					J && X && V(Object(d.b)(t.id));
					const te = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(C.a)($, ee, te);
					const se = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(W),
						ne = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(W),
						re = q && Q,
						oe = W === n.REMOVED && !t.modRemovalReason,
						ie = W === n.FILTERED,
						ae = !q,
						ce = [n.REMOVED, n.SPAM].indexOf(W) > -1,
						de = Object(o.useCallback)(e => {
							U(Object(j.k)(t.id, e, "post", s, M, void 0))
						}, [U, s, M, t]),
						le = q ? j.k : fe,
						ue = Object(o.useCallback)(() => {
							const e = q ? N.r : k.a;
							V(e(t.id)), U(le(t.id, "approve"))
						}, [U, V, t, q, le]),
						me = Object(o.useCallback)(() => {
							const e = q ? N.T : k.e;
							V(e(t.id, !1)), t.isRemoved && t.bannedBy === c.m ? U(le(t.id, "confirm_remove")) : U(le(t.id, "remove"))
						}, [U, V, t, q, le]),
						pe = Object(o.useCallback)(() => {
							V(Object(P.fetchReasonsAndOpenModal)(q ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, q, V]),
						he = Object(o.useCallback)(() => {
							const e = q ? N.D : k.c;
							V(e(t.id)), U(le(t.id, t.isLocked ? "unlock" : "lock"))
						}, [le, U, V, t, q]),
						xe = Object(o.useCallback)(() => {
							V(Object(I.i)(Object(m.b)(t.id, !1))), U(Object(j.k)(t.id, "post_flair_picker"))
						}, [U, V, t]),
						ve = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							q && V(Object(w.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [V, q, t]),
						Oe = Object(o.useCallback)(() => {
							q && (V(Object(N.hb)(t.id)), U(Object(g.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [U, V, t, q]),
						_e = Object(o.useCallback)(() => {
							q && (V(Object(N.I)(t.id)), U(Object(g.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [U, V, t, q]),
						Ee = Object(o.useCallback)(() => {
							q && (V(Object(N.F)(t.id)), Object(g.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [V, t, q]),
						ge = Object(o.useCallback)(() => {
							q && (V(Object(I.i)(b.a.CROWD_CONTROL)), V(Object(N.t)(t.id)))
						}, [V, t, q]),
						je = Object(o.useCallback)(() => {
							q && (V(Object(N.C)(t.permalink)), de("copy"))
						}, [de, V, t, q]),
						Ce = Object(o.useCallback)(async () => {
							if (!q) return;
							const e = Object(x.d)(x.a.GildingFlow, !0);
							V(Object(T.d)({
								awardId: null == G ? void 0 : G.id,
								correlationId: e,
								thingId: t.id
							})), U(Object(E.clickGildEvent)(t.id))
						}, [U, V, t, G, q]),
						ye = Object(o.useCallback)(() => {
							V(Object(A.c)(t.id)), de("report")
						}, [de, V, t]),
						Se = Object(o.useCallback)(() => {
							var e;
							q && (V(Object(N.eb)(t.id, !t.hidden, !1, !0)), de((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [de, V, t, q]),
						ke = Object(o.useCallback)(() => {
							q && (V(Object(N.T)(t.id, !1)), U(Object(g.l)("spam", t.id)))
						}, [U, V, t, q]);
					return i.a.createElement("div", {
						className: B.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: $
					}, i.a.createElement(be, {
						content: t
					}), i.a.createElement("div", {
						className: B.a.actionBar
					}, se && i.a.createElement(f.t, {
						className: [B.a.button, B.a.approve].join(" "),
						Icon: Object(S.b)("checkmark"),
						iconPosition: f.h.L,
						iconClassName: B.a.icon,
						onClick: ue,
						text: r.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), ne && i.a.createElement(f.t, {
						className: B.a.button,
						Icon: Object(S.b)("close"),
						iconPosition: f.h.L,
						iconClassName: B.a.icon,
						onClick: me,
						text: r.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), oe && i.a.createElement(f.t, {
						className: B.a.button,
						onClick: pe,
						text: r.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), ie && i.a.createElement(f.t, {
						className: B.a.button,
						Icon: Object(S.b)("close"),
						iconPosition: f.h.L,
						iconClassName: B.a.icon,
						onClick: me,
						text: r.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), ce && i.a.createElement(f.t, {
						className: B.a.button,
						Icon: Object(S.b)("checkmark"),
						iconPosition: f.h.L,
						iconClassName: B.a.icon,
						onClick: ue,
						text: r.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), ae && i.a.createElement(f.t, {
						className: B.a.button,
						priority: t.isLocked ? f.c.Primary : f.c.Plain,
						Icon: Object(S.b)("lock"),
						iconPosition: f.h.L,
						iconClassName: B.a.icon,
						onClick: he,
						text: t.isLocked ? r.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : r.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), re && i.a.createElement(f.t, {
						className: B.a.button,
						Icon: Object(S.b)("tag"),
						priority: f.c.Plain,
						iconPosition: f.h.L,
						iconClassName: B.a.icon,
						onClick: xe,
						text: r.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), q && H === Object(m.b)(t.id, !1) && i.a.createElement(m.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(m.b)(t.id, !1),
						onFlairChanged: ve
					}), q && i.a.createElement(u.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: B.a.overflowButton,
						icon: i.a.createElement(S.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, i.a.createElement("h6", {
						className: B.a.overflowHeading
					}, r.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ke
					}, i.a.createElement(S.a, {
						name: "spam"
					})), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: t.isStickied ? r.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : r.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: Oe
					}, i.a.createElement(S.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: he,
						displayText: (null == t ? void 0 : t.isLocked) ? r.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : r.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, i.a.createElement(S.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: _e,
						displayText: t.isOriginalContent ? r.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : r.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, i.a.createElement(S.a, {
						name: "original"
					})), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: Ee,
						displayText: t.isNSFW ? r.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : r.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, i.a.createElement(S.a, {
						name: "nsfw"
					})), K && "subreddit" === t.belongsTo.type && i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ge
					}, i.a.createElement(S.a, {
						name: "crowd_control"
					})), i.a.createElement("h6", {
						className: B.a.overflowHeading
					}, r.fbt._("Other", null, {
						hk: "2543kN"
					})), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: je
					}, i.a.createElement(S.a, {
						name: "share"
					})), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: Ce,
						displayText: r.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, i.a.createElement(S.a, {
						name: "award"
					}), i.a.createElement(l.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						displayText: r.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: ye
					}, i.a.createElement(S.a, {
						name: "report"
					})), i.a.createElement(h.b, {
						className: B.a.dropdownRow,
						onClick: Se,
						displayText: t.hidden ? r.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : r.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, i.a.createElement(S.a, {
						name: "hide"
					}))), z && i.a.createElement(p.a, {
						withOverlay: !0,
						postId: t.id
					})))
				}
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && r.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : r.a.createElement(a.b, {
					className: Object(o.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: s === c.g.Classic,
						[u.a.compactLayout]: s === c.g.Compact,
						[u.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: m(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
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
				const s = Object(o.a)(e, t);
				class n extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(s, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				o = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Xb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return r.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, s),
					style: b || Object(a.c)(n, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, f), t)
			}))
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
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/isRemoved.ts"),
				h = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				x = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				g = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = s("./src/reddit/icons/fonts/Report/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/selectors/modQueue.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/components/PostBadges/index.m.less"),
				N = s.n(I);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = e => o.a.createElement("span", w({
					className: N.a.removalReason
				}, e), e.children),
				A = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				R = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				L = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				F = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				M = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				D = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				U = Object(b.v)({
					isProfilePostListing: b.N,
					isSubreddit: b.Q
				}),
				B = Object(a.c)({
					isModQueueDisplayEnabled: k.b,
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(T.q)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.W
				}),
				V = Object(i.b)(B, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						Promise.all([s.e("Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-components-Not~05f7c62f"), s.e("removalReasonActions")]).then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = U(V(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: k,
					modModeEnabled: T,
					onHideTooltip: I,
					onOpenRemovalReasonModal: U,
					onShowTooltip: B,
					post: V,
					tooltipType: W,
					isModQueueDisplayEnabled: G
				} = e;
				const H = {
						caretOnTop: !1
					},
					q = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === p.a.SUBREDDIT,
					z = D("Approve", V.id, W),
					Y = D("Archived", V.id, W),
					K = D("Lock", V.id, W),
					Q = D("Mod", V.id, W),
					J = D("Remove", V.id, W),
					Z = D("Report", V.id, W),
					X = D("Spam", V.id, W),
					$ = D("Sticky", V.id, W),
					ee = D("Pinned", V.id, W);
				return o.a.createElement("div", {
					className: t
				}, a && s && V.distinguishType === d.J.MODERATOR && o.a.createElement(r.Fragment, null, o.a.createElement(v.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.modIcon)
				}), o.a.createElement(u.c, w({
					tooltipId: Q,
					text: L(s)
				}, H))), V.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.archivedIcon),
					desc: A(),
					id: Y,
					onMouseEnter: B(Y),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: Y,
					text: A()
				}, H))), V.isLocked && !V.isSponsored && o.a.createElement(r.Fragment, null, o.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.lockIcon),
					desc: R(),
					id: K,
					onMouseEnter: B(K),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: K,
					text: R()
				}, H))), i && Object(S.w)(V) && !l && o.a.createElement(r.Fragment, null, o.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: F(),
					id: $,
					onMouseEnter: B($),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: $,
					text: F()
				}, H))), k && b && o.a.createElement(r.Fragment, null, o.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: M(),
					id: ee,
					onMouseEnter: B(ee),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: ee,
					text: M()
				}, H))), !G && o.a.createElement(o.a.Fragment, null, (V.isApproved || V.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.approveIcon),
					desc: Object(h.a)(V),
					id: z,
					onMouseEnter: B(z),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: z,
					text: Object(h.a)(V)
				}, H))), Object(f.a)(V) && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.removeIcon),
					desc: Object(h.b)(V),
					id: J,
					onMouseEnter: B(J),
					onMouseLeave: I
				}), q && o.a.createElement(m.a, {
					className: N.a.addRemovalReason,
					onClick: U,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && o.a.createElement(P, {
					onMouseEnter: B(J),
					onMouseLeave: I
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(u.c, w({
					tooltipId: J,
					text: Object(h.b)(V)
				}, H))), V.bannedBy && V.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.spamIcon),
					desc: Object(h.d)(V),
					id: X,
					onMouseEnter: B(X),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: X,
					text: Object(h.d)(V)
				}, H)))), Object(x.a)(V) && !T && !G && o.a.createElement(r.Fragment, null, o.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.reportIcon),
					desc: Object(h.c)(V.numReports),
					id: Z,
					onMouseEnter: B(Z),
					onMouseLeave: I
				}), o.a.createElement(u.c, w({
					tooltipId: Z,
					text: Object(h.c)(V.numReports)
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
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
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
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/PostContainer/index.m.less"),
				j = s.n(g);
			const C = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(f.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(h.d)(e).pageType
				})),
				y = "post-container";
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: h,
						ref: v,
						shouldAddGalleryViewability: O = !0
					} = this.props, _ = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(j.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": y,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": E.a.BACKGROUND
					}, s), g = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.F)(l.media) && O ? r.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || g ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(_))
				}
			}
			t.b = C(Object(_.a)(Object(O.a)(Object(m.c)(S))))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/CreatorStats/helpers.ts"),
				l = s("./src/reddit/selectors/creatorStats.ts"),
				u = s("./src/reddit/components/PostContent/viewCount.m.less"),
				m = s.n(u);
			t.a = e => {
				let {
					className: t,
					post: s,
					showViewCount: r
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						s = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: n.fbt._("{percent upvoted}% Upvoted", [n.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: n.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [n.fbt._plural(e.viewCount, "number of views", s)], {
							hk: "rP01m"
						})
					}
				})(s), b = r && !!s.viewCount, f = Object(i.e)(e => Object(l.a)(e, s.id)), h = Object(i.e)(e => Object(l.c)(e, s.id)), x = Object(d.c)(s, h), v = f && x === d.b.Available;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.viewCounts, t)
				}, b && o.a.createElement("span", null, p), b && !!s.upvoteRatio && o.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!s.upvoteRatio && !v && o.a.createElement("span", null, u))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
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
				r = s.n(n),
				o = s("./src/reddit/constants/flair.ts"),
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
				} : a > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : r()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
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
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(u.o)({
							postId: s,
							isFollowed: o
						}) : Object(u.g)({
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
					} = this.props, r = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
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
			const f = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.z)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx"),
				a = s("./src/reddit/models/Post/index.ts"),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.vc
			}), e => e === u.Jd);
			var f = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/classNames/index.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				g = s.n(E);
			const j = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(c.e)(e => Object(O.G)(e, {
						postId: t
					})),
					o = Object(c.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(_.Y)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return o ? r.a.createElement(x.a, {
					className: Object(h.a)(g.a.link, s),
					to: o.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), r.a.createElement(v.b, {
					className: g.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: o
				}), r.a.createElement("span", {
					className: g.a.subredditName
				}, o.displayText)) : null
			};
			var C = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/connectors/PostViewable/index.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/contexts/Post/index.tsx"),
				T = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/hooks/useClickSourceData.ts"),
				N = s("./src/reddit/hooks/useIsOverlay.ts"),
				w = s("./src/reddit/hooks/usePageLayer.ts"),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				R = s.n(A);
			const L = e => {
				let {
					post: t
				} = e;
				const s = `${Object(P.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(P.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return r.a.createElement("div", {
					className: R.a.postInformation
				}, r.a.createElement("h5", {
					className: R.a.title
				}, t.title), r.a.createElement("div", {
					className: R.a.interactions
				}, r.a.createElement("p", null, s), r.a.createElement("p", null, n)))
			};
			var F = s("./src/lib/isUrl/index.ts"),
				M = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/components/UserIcon/index.tsx"),
				B = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				G = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				H = s.n(G);
			const q = e => {
				let {
					post: t
				} = e;
				var s, o, i, a;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(W.l)(t.author)),
					u = Object(n.useMemo)(() => Object(D.c)({
						post: t
					}), [t]),
					m = Object(n.useMemo)(() => Object(F.a)(u), [u]);
				Object(n.useEffect)(() => {
					m || d(Object(M.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(V.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(B.c)(null === (o = null == l ? void 0 : l.icon) || void 0 === o ? void 0 : o.url);
				return r.a.createElement("div", {
					className: H.a.media
				}, m ? r.a.createElement(D.b, {
					post: t,
					url: u,
					className: H.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: H.a.mediaThumbnailContainer
				}) : null, !m && (null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url) && !l.isNSFW && r.a.createElement("div", {
					className: H.a.userIconContainer
				}, r.a.createElement(U.a, {
					className: Object(h.a)({
						[H.a.snoovatarUserIcon]: p,
						[H.a.defaultUserIcon]: b
					}, H.a.userIcon),
					iconUrl: null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url,
					userName: l.name,
					isNSFW: t.isNSFW,
					wrapperClassName: H.a.userIconWrapper
				})))
			};
			var z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Y = s.n(z);
			const K = Object(y.a)(null);
			var Q = Object(k.b)(K(e => {
					let {
						post: t
					} = e;
					const s = Object(w.a)(),
						n = Object(N.a)(),
						o = Object(I.a)(),
						i = Object(S.x)(s) && !n;
					return r.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(T.b)(t.permalink) : Object(C.a)(t.permalink, !1, o)
					}, r.a.createElement("div", {
						className: Y.a.container
					}, r.a.createElement(L, {
						post: t
					}), r.a.createElement(q, {
						post: t
					})))
				})),
				J = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Z = s.n(J);
			const X = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => r.a.createElement(Q, {
					postId: e,
					key: e
				}));
				return r.a.createElement("div", {
					className: Z.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(c.d)();
				if (!Object(c.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return r.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(d.y)(t, l.a.Click))
				}, r.a.createElement(X, {
					postIds: t.adPromotedUserPostIds
				}), r.a.createElement(j, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(a.C)(t) && Object(a.B)(t) ? r.a.createElement(te, {
					post: t
				}) : r.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostMeta/index.m.less"),
				j = s.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: g,
					isOverlay: C,
					isTopicPage: y,
					post: S,
					shouldShowSubscribeButton: k,
					subredditOrProfile: T,
					tooltipType: I
				} = e, N = !!y, w = Object(_.a)(), P = Object(o.e)(e => !!T && Object(i.i)(e, T.id));
				return r.a.createElement("div", {
					className: j.a.metaContainer
				}, !n && !S.isSponsored && T && r.a.createElement(d.a, {
					postId: S.id,
					subredditName: T.name
				}, r.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: T.url,
						state: w
					}
				}, T.displayText)), T && T.isQuarantined && r.a.createElement(p.a, null), !n && !S.isSponsored && T && k && !g && r.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(O.k)(S.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: T.name,
						type: Object(E.i)(T) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: S.id,
					size: x.d.XXS,
					small: !0
				}), !n && !S.isSponsored && r.a.createElement(v.b, null), !n && !S.isSponsored && r.a.createElement(l.h, {
					type: S.belongsTo.type,
					id: S.belongsTo.id
				}), r.a.createElement(m.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: S,
					tooltipType: I,
					isModWithUserNotesPermissions: P
				}), r.a.createElement(u.a, {
					displayText: T ? T.displayText : null,
					inSubredditOrProfile: !!n,
					post: S,
					tooltipType: I
				}), !N && r.a.createElement(a.a, {
					hideCta: s,
					thing: S,
					tooltipType: C ? m.f.Lightbox : void 0
				}), P && r.a.createElement(c.a, {
					postOrComment: S,
					className: j.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: O,
					shouldShowUpvoteRatioOnHover: _
				} = e, E = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && r.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), r.a.createElement(a.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: E,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: O,
					scoreClassName: Object(o.a)(m.a.score, {
						[m.a.allowPointerEvents]: _
					}),
					shouldShowUpvoteRatioOnHover: _
				}))
			}
		},
		"./src/reddit/components/PostTitle/getLeftAndRightFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/models/Flair/index.ts");

			function o(e) {
				let {
					flair: t,
					isFlairPositionedLeft: s,
					showNSFWSpoilerFlairsOnly: o,
					hideNSFWSpoilerFlair: i
				} = e;
				const a = [],
					c = [],
					d = [];
				for (const m of t) m.type === r.f.Nsfw || m.type === r.f.Spoiler ? a.push(m) : Object(n.q)(m.type) ? c.push(m) : d.push(m);
				let l = [],
					u = [];
				return s ? o ? (l = a, u = []) : i ? (l = c, u = d) : (l = c, u = [...a, ...d]) : o ? (l = [], u = a) : i ? (l = [], u = [...c, ...d]) : (l = [], u = [...c, ...a, ...d]), {
					leftFlair: l,
					rightFlair: u
				}
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
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
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return M
			})), s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				g = s("./src/reddit/hooks/usePostContext.ts"),
				j = s("./src/reddit/hooks/useTheme.ts"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = s("./src/lib/getShortenedLink.ts"),
				N = s("./src/reddit/components/FlairWrapper/index.tsx"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				R = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(R);
			const F = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var M, D = Object(a.b)(F)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(E.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, L.a.proposalMetaData)
					}, i.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(P.a)(n)), w.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(A.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				B = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				G = s("./src/telemetry/models/Outbound.ts"),
				H = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				q = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = s("./src/reddit/components/PostTitle/index.m.less"),
				Y = s.n(z);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(M || (M = {}));
			const Q = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: o,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(j.a)();
					let m = "";
					switch (t) {
						case M.ExtraLarge:
							m = Y.a.ExtraLarge;
							break;
						case M.Large:
							m = Y.a.Large;
							break;
						case M.Medium:
							m = Y.a.Medium;
							break;
						case M.Small:
							m = Y.a.Small;
							break;
						case M.ExtraSmall:
							m = Y.a.ExtraSmall;
							break;
						case M.Metadata:
							m = Y.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(Y.a.Title, a, m, {
							[Y.a.isNoWrap]: r,
							[Y.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(T.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? i.a.createElement(U.b, {
						type: n
					}, o) : o)
				},
				J = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...o
					} = e;
					return i.a.createElement(c.a, K({}, o, {
						className: Object(u.a)(t, Y.a.styledLink, {
							[Y.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(Y.a.titleContainer, n, {
							[Y.a.isNoWrap]: s,
							[Y.a.isVisitedEnabled]: !t
						})
					}, r)
				},
				X = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.r)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: V.e,
					shouldOpenPostInNewTab: W.kb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(a.d)(), o = Object(_.a)(), c = Object(a.e)(B.b), d = Object(a.e)(B.c), u = e => {
						!c && !d || t.media && Object(S.I)(t.media) || (e.preventDefault(), r(Object(x.ab)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const r = t.media && Object(S.I)(t.media) ? Object(O.c)(t.id, s.name) : t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(r) : Object(h.a)(r, void 0, o);
						return i.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(ee, t)) : i.a.createElement(ee, t)
						})(t, e) : i.a.createElement(J, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: u
						}, i.a.createElement(ee, e)))
					}
				},
				ee = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const o = e.isCommentsPage ? U.a.PostComments : U.a.PostItem,
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(Q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && i.a.createElement(N.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, o = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink;
					if (Object(E.a)()) return null;
					if (s && n.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== M.Large && !n.isSponsored && !(n.media && Object(S.I)(n.media)) && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(I.a)(n), !n.isSponsored && i.a.createElement(C.a, {
							name: "external_link",
							className: Y.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(I.a)(n), !n.isSponsored && i.a.createElement(C.a, {
						name: "external_link",
						className: Y.a.outboundLinkIcon
					}));
					return null
				};
			class se extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Y.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(T.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(T.a)(this.props).titleText,Object(T.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(r.c)(.45,Object(T.a)(this.props).bodyText,Object(T.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: o,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === y.b.Left, b = Object(N.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(H.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), x = !o && !r && !t, v = x && f && f.length > 0, O = x && h && h.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(Y.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": q.a.TITLE,
						onClick: m
					}, !d && v && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(k.b)(c) && i.a.createElement($, K({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && i.a.createElement(D, {
						className: Y.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(te, this.props), O && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: Y.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.gb)(),
					s = Object(p.x)(t),
					n = Object(g.a)(),
					r = Object(a.e)(r => X(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(j.a)(),
					c = Object(m.b)();
				return n ? i.a.createElement(se, K({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: o,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				S = s.n(y);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: y,
					hostPostData: k,
					iconClassName: T,
					inSubredditOrProfile: I,
					isCommentsPage: N,
					isCompactPinnedPost: w,
					isCurrentUserProfilePost: P,
					isModQueuePage: A,
					isModWithUserNotesPermissions: R,
					isOverlay: L,
					isTopicPage: F,
					listingKey: M,
					post: D,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: B,
					showSubreddit: V,
					showSubredditIcon: W,
					subredditOrProfile: G,
					isFollowed: H,
					shouldShowFollowButton: q,
					onFollowPostClick: z
				} = e;
				const Y = F,
					K = G && Object(j.i)(G),
					Q = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(C.Hb)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(a.a)(S.a.container, t)
				}, V && G && o.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, o.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: G.url
				}, W && o.a.createElement(b.b, {
					className: Object(a.a)(S.a.subredditIcon, T),
					shouldHideNsfwIcon: y,
					subredditOrProfile: G
				}))), o.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, V && o.a.createElement(l.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), o.a.createElement(p.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: R,
					tooltipType: L ? p.f.Lightbox : void 0,
					post: D,
					showSub: V,
					subredditOrProfile: G
				}), o.a.createElement(m.a, {
					className: S.a.postBadges,
					displayText: G ? G.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: w,
					post: D,
					tooltipType: L ? p.f.Lightbox : void 0
				}), !Y && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: D,
					tooltipType: L ? p.f.Lightbox : void 0
				}), R && o.a.createElement(d.a, {
					postOrComment: D,
					className: S.a.addModNote
				})), G && Q && V && U && !P && o.a.createElement(h.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(_.k)(D.id, e ? "unsubscribe" : "subscribe", "post", M, k),
					identifier: {
						name: G.name,
						type: K ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: D.id,
					size: v.d.XS
				}), B && o.a.createElement(O.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(g.D)(D),
					source: D.source
				}, o.a.createElement(E.a, {
					className: S.a.outboundLinkIcon
				})), q && Q && o.a.createElement(u.a, {
					isFilled: !!H,
					onClick: z,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = s.n(f);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: a,
					post: f,
					share: v
				} = e;
				const O = Object(l.b)(),
					_ = Object(i.d)(),
					E = f && f.id,
					g = f && f.voteState;
				let j = null;
				E || (j = t ? "user_hovercard" : "profile_overview");
				const C = Object(r.useCallback)(() => O(Object(m.h)(t ? "user_hovercard" : "profile_overview", s)), [t, O, s]);
				return o.a.createElement(u.t, {
					onClick: () => {
						a ? (O(m.i), E && g === b.a.notVoted && _(Object(c.jb)(E))) : C();
						const e = a ? "postify" : "copy";
						_(Object(d.b)({
							clickSource: j,
							share: v,
							source: e
						}))
					},
					className: Object(n.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(n.a)({
						[h.a.shirtIcon]: !a,
						[h.a.avatarPostButtonShirtIcon]: a
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: h.a.chevronIcon
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
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				x = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				E = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				C = s.n(j);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = (e, t) => `SnoozableReport--${t}--${e}`, k = Object(o.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(g.b)(S(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: S(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.gb)(t.reportedThingId, t.reason, s))
				}
			})), T = Object(m.a)(b.a);
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(x.n)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: o,
						isSnoozed: i,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = S(e, s);
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, r.a.createElement(f.b, {
						id: m,
						className: Object(a.a)(C.a.DropdownLabelContainer, d),
						onClick: n
					}, r.a.createElement("label", {
						htmlFor: m,
						className: C.a.DropdownLabel
					}, i ? y._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, o ? r.a.createElement(O.a, null) : r.a.createElement(v.a, null))), r.a.createElement(T, {
						isOpen: o,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, r.a.createElement("button", {
						className: Object(a.a)(C.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, r.a.createElement("div", {
						className: C.a.SnoozeButtonContent
					}, i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(E.a, {
						className: u
					}), y._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(_.a, {
						className: u
					}), y._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = k(Object(p.c)(I))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");
			const r = Object(n.createContext)(!1);

			function o() {
				return Object(n.useContext)(r)
			}
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
				return k
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				m = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				f = s.n(b);
			var h = e => {
					let {
						sourceUrl: t,
						username: s,
						post: n
					} = e;
					const [o, i] = new URL(t).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?m:u}/shared/${e}.png`
					}(i);
					return r.a.createElement("div", {
						className: f.a.avatarPostContainer
					}, r.a.createElement("img", {
						className: f.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), r.a.createElement(p.a, {
						isHovercard: !1,
						username: s,
						isAvatarPost: !0,
						post: n,
						share: {
							username: o,
							avatarId: i
						}
					}))
				},
				x = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/components/SourceLink/index.m.less"),
				E = s.n(_),
				g = s("./src/lib/lessComponent.tsx"),
				j = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const y = g.a.wrapped(O.a, "OutboundLinkIcon", E.a),
				S = g.a.div("SourceLinkWrapper", E.a);

			function k(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n,
					pageLayer: c
				} = e, d = n ? j.SourceElement.PostLink : j.SourceElement.ListingPostLink, {
					source: l
				} = s, u = s.isSponsored || Object(o.u)(c), m = Object(v.a)(s), p = Object(C.a)();
				return !l || p ? null : m ? r.a.createElement(h, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : r.a.createElement(S, {
					className: Object(i.a)({
						[E.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(x.a, {
					href: l.url,
					isSponsored: u,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...s,
					isSponsored: u
				}), r.a.createElement(y, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = s.n(r);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
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
			const m = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends r.a.Component {
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
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: o,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...f
						} = this.props, h = this.state.isHovered, x = Object(c.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(a.t, u({
							className: e,
							priority: f.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: x,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, f))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: o,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...f
						} = this.props, h = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return r.a.createElement(a.t, u({
							className: e,
							priority: f.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: h,
							onClick: this.onClick
						}, f, {
							id: `subscribe-button-${o}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(o.c)(p))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
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
					return o[r({
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
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "c", (function() {
				return P
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/controls/ContentType/index.tsx"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/Thumbnail/index.m.less"),
				_ = s.n(O);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = e => e.placeholderImage || Object(h.a)(e).placeholderImage,
				j = e => e.placeholderImage ? "cover" : Object(h.a)(e).placeholderImagePosition,
				C = c.a.span("LinkText", _.a),
				y = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return o.a.createElement("div", {
						onClick: s,
						className: Object(i.a)(_.a.linkIcon, t)
					}, n)
				},
				S = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(_.a.hiddenImage, e.className)
				}),
				k = e => {
					const t = o.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.b)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(_.a.thumbnail, _.a.imageThumbnail, e.className),
						"data-click-id": "image",
						"data-adclicklocation": v.a.MEDIA,
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(h.a)(e).button : Object(h.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(y, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(C, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(S, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				T = e => e.isOutbound ? Object(h.a)(e).button : e.placeholderImage ? "transparent" : Object(h.a)(e).line,
				I = e => {
					const t = g(e),
						s = t && {
							background: Object(f.g)(Object(h.a)(e).placeholder, t, j(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(_.a.thumbnail, _.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: T(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(i.a)(e.contentTypeClassName, _.a.contentType, {
							[_.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(y, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(C, {
						className: e.linkTextClassName
					}, e.text)))
				},
				N = e => o.a.createElement(k, E({}, e, {
					className: Object(i.a)(_.a.blurredThumbnail, e.className)
				})),
				w = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: r,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: f,
						post: h,
						redditStyle: v,
						removeLink: O,
						showContentType: E,
						templatePlaceholderImage: j,
						text: C,
						theme: y,
						usePreview: S
					} = e, k = !y.subredditContext.shouldShowNSFWContent && (h.isNSFW || !(!a || !a.isNSFW)) && !c, T = g({
						placeholderImage: j,
						redditStyle: v,
						theme: y
					}), I = P(e), N = d ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage, w = R(h, t, T, k, C, y, I, l, E, O, v, u, p, f, r), A = Object(b.D)(h);
					return Object(n.a)(A) && !O && A.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(_.a.container, S ? _.a.usePreview : "", s)
					}, o.a.createElement(m.b, {
						href: Object(b.D)(h),
						isSponsored: h.isSponsored,
						postId: h.id,
						source: h.source,
						sourceElement: N
					}, w)) : o.a.createElement("div", {
						className: Object(i.a)(_.a.container, S ? _.a.usePreview : "", s)
					}, w)
				}),
				P = e => {
					let {
						crosspost: t,
						post: s,
						url: n,
						usePreview: r
					} = e;
					if (n) return n;
					const {
						preview: o,
						media: i,
						thumbnail: a
					} = t || s;
					return r && o ? o.url : s.isSponsored && o && "default" === a.url ? o.url : A(i) ? i.scrubberThumbSource : a.url
				},
				A = e => !!e && e.type === b.o.LIVEVIDEO,
				R = (e, t, s, r, a, c, l, u, m, p, b, f, h, x, v) => {
					const O = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(n.a)(l)) {
						const s = A(e.media),
							n = s ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[_.a.verticallyCenterThumbnail]: s
							});
						return r ? o.a.createElement(N, E({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: O && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(k, E({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: O && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(I, {
						className: t,
						contentTypeClassName: v,
						placeholderImage: s,
						isMeta: u,
						isOutbound: O && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: x,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.b = w
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledVoteIcon: "mvlZFfW9BWm1bmljE_0Rg"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = s("./src/reddit/components/VerticalVotes/index.m.less"),
				O = s.n(v);
			const _ = Object(a.c)({
					isNightMode: h.eb,
					isAnimatingUpvotePostId: f.k
				}),
				E = Object(i.b)(_),
				g = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class C extends o.a.Component {
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
							isCountAnimShadowTestEnabled: s,
							isNightMode: r,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: v,
							postId: _
						} = e,
						E = g(e),
						C = j(e),
						y = v.voteState,
						S = i === _;
					return o.a.createElement("div", {
						className: Object(c.a)(O.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: h
					}, E ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": y === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": x.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: y
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": y === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[O.a.bounceUp]: S
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": x.b.UPVOTE,
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: y
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(c.a)(O.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: y,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!s,
						postId: _
					}), C ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": y === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": x.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: y
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": y === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": x.b.DOWNVOTE
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: y
					})))
				}
			}
			const y = Object(d.a)(E(C));
			t.a = y
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: i.kb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(o.d([s], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			}));
			const n = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/icons.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/constants/elementClassNames.ts"),
				d = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(d);
			const u = e => Object(o.a)(l.a.contentTypeIcon, e.className),
				m = {
					embed: i.a.embed,
					gallery: i.a.media_gallery,
					gifvideo: i.a.gif_post,
					image: i.a.image_post,
					meta: i.a.poll_post,
					rpan: i.a.video_live,
					rtjson: i.a.text_post,
					text: i.a.text_post,
					video: i.a.video_post,
					liveaudio: i.a.audio
				};

			function p(e) {
				const t = u(e),
					s = e.type && m[e.type] || i.a.link_post;
				return r.a.createElement(a.a, {
					name: s,
					className: Object(o.a)({
						[c.a]: s === i.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/constants/elementClassNames.ts"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(i);
			t.a = n.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${r.l}`
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends r.a.Component {
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
					return e.hidden ? null : r.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(a.a, {
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
				r = s.n(n),
				o = s("./src/reddit/constants/keycodes.ts");
			class i extends r.a.Component {
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
						return r.a.Children.forEach(this.props.children, t => {
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
						const r = e.key === o.b.ArrowUp,
							i = e.key === o.b.ArrowDown;
						if (r || i) {
							const t = this.getValues();
							if (!t.length) return;
							const o = n ? t.indexOf(n) : 0,
								i = t[((r ? o - 1 : o + 1) + t.length) % t.length];
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
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (s, n) => {
						const o = 0 === n,
							i = s.props.value === t,
							a = null !== t ? i ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(s, {
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
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = s("./src/reddit/constants/colors.ts"),
				f = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				E = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				j = s("./node_modules/reselect/es/index.js"),
				C = s("./src/reddit/controls/Score/index.m.less"),
				y = s.n(C);
			const S = {
					placement: "right"
				},
				k = e => e.voteState === O.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(h.a)(Object(f.a)(e)),
				T = Object(j.c)({
					locale: e => Object(E.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: s,
							postId: n
						} = t;
						if (s && n) return Object(g.G)(e, {
							postId: n
						})
					}
				}),
				I = () => 0,
				N = Object(d.b)(T),
				w = Object(o.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : k(e)
						},
						{
							score: s,
							postId: o = "",
							locale: f,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: v,
							shouldShowUpvoteRatioOnHover: O,
							post: E
						} = e,
						g = Object(d.d)(),
						j = null == f ? void 0 : f.startsWith("en"),
						C = e.isScoreHidden ? j ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(i.b)(s),
						T = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && g(Object(l.H)({
								postId: o,
								delta: t
							}))
						}, [g, o]),
						N = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						w = !e.isScoreHidden && h && s < _.a,
						P = Object(x.a)(S),
						A = s < 0 ? 0 : s;
					return c.a.createElement("div", {
						className: Object(r.a)(y.a.score, e.className),
						style: t,
						onMouseEnter: O ? P.show : void 0,
						onMouseLeave: O ? P.hide : void 0,
						ref: O ? P.target.ref : void 0
					}, (w || v) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: A,
						countToUpperBound: A,
						initialDelay: I,
						subsequentRecurringDelay: I,
						incrementDelta: I,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: N.current,
						onDataCB: T,
						isLoadTestOnly: v && !w
					})), !w && C, O && E && c.a.createElement(m.a, P, c.a.createElement(p.a, {
						className: y.a.viewCount,
						post: E,
						showViewCount: !1
					})))
				});
			t.a = N(w)
		},
		"./src/reddit/endpoints/modQueue/modActivity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/LastModActionInSubreddit.json"),
				o = s("./src/redditGQL/operations/ModActivitySummaryByID.json"),
				i = s("./src/redditGQL/operations/SingleCommentById.json"),
				a = s("./src/redditGQL/operations/SinglePostInfoById.json");
			const c = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				}),
				d = (e, t) => Object(n.a)(e, {
					...r,
					variables: t
				}),
				l = (e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}),
				u = (e, t) => Object(n.a)(e, {
					...i,
					variables: t
				})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/redditGQL/operations/SubscribedSubreddits.json"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, n);
			const l = (e, t) => {
					let {
						subredditIds: s,
						subredditNames: n,
						subscribe: i
					} = t;
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: r.ob.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: i ? "sub" : "unsub",
							sr: s && s.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, s) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: r.ob.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: s ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, i = o;
					return n ? r.a.createElement(t, i) : void 0 !== s ? r.a.createElement(s, i) : null
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
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function r(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModActionAt: r,
					activeModerators: o
				} = (null == t ? void 0 : t.modActivitySummary) || {}, i = [], a = {};
				null == o || o.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const n = null == s ? void 0 : s.id;
					n && (i.push(n), a[n] || (a[n] = {
						info: {},
						lastModAction: {}
					}), a[n].info = s, a[n].lastModAction = {
						...t
					})
				});
				const c = {
					lastModActionAt: r,
					activeMods: i
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: c,
						mods: a
					}
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: r
					} of t) s.push(Object(n.f)(r));
				return s
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.L.NO_STRIPE_SUBSCRIPTION:
							case n.L.USER_DOESNT_EXIST:
							case n.L.USER_REQUIRED_ERROR:
							case n.L.VALIDATION_ERROR:
								return e;
							case n.L.NO_USER:
							case n.L.NO_TEXT:
							case n.L.NO_URL:
								return n.L.VALIDATION_ERROR;
							case n.L.CREDIT_CARD_FAILURE:
							case n.L.CREDIT_CARD_FAILURE_GENERIC:
								return n.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.L.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
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
				return f
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				b = e => Object(n.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "k", (function() {
				return g
			}));
			var n = s("./src/lib/makeCommentsPageKey/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/comments.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				c = s("./src/telemetry/models/Event.ts");
			const d = (e, t) => ({
					...Object(a.o)(e),
					subreddit: Object(a.kb)(e),
					profile: Object(a.T)(e),
					post: Object(a.K)(e, t),
					comment: Object(a.h)({
						state: e,
						commentId: t
					})
				}),
				l = (e, t) => {
					const s = Object(i.b)(e, {
							commentId: t
						}),
						r = s && Object(n.a)(s.postId);
					if (!s || !r) return null;
					const c = {
							commentId: t,
							commentsPageKey: r
						},
						d = t && r && Object(o.j)(e, c) || 0;
					return Object(a.z)(e, void 0, {
						depth: d
					})
				},
				u = e => {
					var t;
					return null !== (t = e.split("chat_reaction_")[1]) && void 0 !== t ? t : ""
				},
				m = (e, t) => s => ({
					action: "load",
					noun: e,
					post: Object(a.K)(s, t),
					source: c.b.ChatView,
					subreddit: Object(a.kb)(s)
				}),
				p = (e, t) => s => ({
					...d(s, t),
					source: "live_post",
					action: r.c.CLICK,
					noun: e,
					actionInfo: {
						reason: "live_post",
						pageType: "actions_menu"
					},
					listing: l(s, t)
				}),
				b = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: r.c.VIEW,
					noun: "last_message"
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: r.c.SUBMIT,
					noun: "reply",
					post: Object(a.K)(t, e),
					comment: Object(a.h)({
						state: t,
						commentId: e
					}),
					actionInfo: Object(a.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: r.c.CLICK,
					noun: "comment",
					actionInfo: Object(a.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				x = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: r.c.VIEW,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: r.c.CLOSE,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				O = e => t => ({
					...d(t, e),
					source: "global",
					action: r.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				_ = (e, t, s) => n => ({
					...d(n, t),
					source: c.b.Chat,
					action: r.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: s,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(n, t)
				}),
				E = (e, t, s) => n => ({
					...d(n, t),
					source: c.b.Chat,
					action: r.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: s,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(n, t)
				}),
				g = () => e => {
					var t;
					return {
						...Object(a.o)(e),
						subreddit: Object(a.kb)(e),
						profile: Object(a.T)(e),
						actionInfo: {
							...Object(a.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: r.c.VIEW,
						noun: "hint"
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			}));
			var n = s("./src/reddit/models/Gold/Award.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...r.o(e),
					screen: r.cb(e),
					subreddit: r.kb(e),
					userSubreddit: r.ub(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, s) => n => ({
					...a(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s
				}),
				m = (e, t, s, n) => r => ({
					...a(r),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: s,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, s) => n => ({
					...a(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: s ? c(s) : null
				}),
				b = (e, t, s) => n => ({
					...a(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s ? c(s) : null
				}),
				f = (e, t, s) => n => ({
					...a(n),
					source: "awards",
					action: "click",
					noun: s,
					goldPurchase: c(e),
					profile: r.U(n, t),
					subreddit: r.lb(n, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				x = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				a = (e, t) => s => ({
					...Object(o.o)(s),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.kb)(s),
					post: Object(o.K)(s, e),
					userSubreddit: Object(o.ub)(s),
					actionInfo: Object(o.d)(s, {
						reason: i(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(o.o)(s),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.K)(s, t),
					subreddit: Object(o.kb)(s),
					userSubreddit: Object(o.ub)(s)
				}),
				d = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(o.d)(t, {
						pageType: "profile"
					}),
					post: Object(o.K)(t, e, void 0, 0),
					profile: Object(o.T)(t)
				}),
				u = (e, t, s) => n => ({
					...Object(o.o)(n),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						reason: d(t)
					}),
					post: Object(o.K)(n, e, void 0, s)
				}),
				m = (e, t, s, n, i, a) => c => ({
					...Object(o.o)(c),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.K)(c, e, void 0, a),
					subreddit: Object(o.kb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				p = (e, t, s) => n => ({
					...Object(o.o)(n),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(o.K)(n, e, void 0, s),
					subreddit: Object(o.kb)(n)
				})
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), s.d(t, "clickGildEvent", (function() {
				return b
			})), s.d(t, "clickRpanGiveAward", (function() {
				return f
			})), s.d(t, "clickAddAward", (function() {
				return h
			})), s.d(t, "clickHideAward", (function() {
				return x
			})), s.d(t, "clickConfirmHideAward", (function() {
				return v
			})), s.d(t, "clickCancelHideAward", (function() {
				return O
			})), s.d(t, "clickAwardReportFlow", (function() {
				return E
			})), s.d(t, "clickCancelAwardReportFlow", (function() {
				return g
			})), s.d(t, "clickFlagAwardUsage", (function() {
				return j
			})), s.d(t, "clickCancelFlagAwardUsage", (function() {
				return C
			})), s.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), s.d(t, "clickReportAward", (function() {
				return S
			})), s.d(t, "clickCancelReportAward", (function() {
				return k
			})), s.d(t, "clickConfirmReportAward", (function() {
				return T
			})), s.d(t, "viewGildModalEvent", (function() {
				return I
			})), s.d(t, "clickSelectAwardEvent", (function() {
				return N
			})), s.d(t, "triggerAnonymousEvent", (function() {
				return w
			})), s.d(t, "clickMessageInputEvent", (function() {
				return P
			})), s.d(t, "typeMessageInputEvent", (function() {
				return A
			})), s.d(t, "clickLearnMoreLinkEvent", (function() {
				return R
			})), s.d(t, "clickQuestionMarkEvent", (function() {
				return L
			})), s.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), s.d(t, "clickGetPremiumEvent", (function() {
				return M
			})), s.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), s.d(t, "clickNextButtonEvent", (function() {
				return U
			})), s.d(t, "clickCloseGildModalEvent", (function() {
				return B
			})), s.d(t, "viewKarmaSuccessEvent", (function() {
				return V
			})), s.d(t, "clickFilterEvent", (function() {
				return W
			})), s.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), s.d(t, "clickPreviousFiltersEvent", (function() {
				return H
			}));
			var n = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				r = s("./src/reddit/models/Gold/Award.ts"),
				o = s("./src/reddit/selectors/commentSelector.ts"),
				i = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/telemetry/models/GoldPurchase.ts"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/helpers/isComment.ts"),
				l = s("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, s) => {
					const r = t && Object(o.f)(e, {
						commentId: t
					});
					return {
						...i.o(e),
						actionInfo: i.d(e, {
							reason: r ? "live_post" : void 0,
							...s
						}),
						comment: t ? i.h({
							state: e,
							commentId: t
						}) : void 0,
						correlationId: Object(l.b)(e) || Object(c.d)(c.a.GildingFlow, !1),
						post: t ? i.K(e, t) : void 0,
						screen: i.cb(e),
						subreddit: i.kb(e),
						userSubreddit: i.ub(e),
						listing: t ? Object(n.i)(e, t) : void 0
					}
				},
				b = (e, t) => s => ({
					...p(s, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: i.r(s)
				}),
				f = e => t => ({
					...p(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: i.r(t)
				}),
				x = (e, t) => s => ({
					...p(s, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				v = (e, t) => s => ({
					...p(s, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				O = (e, t) => s => ({
					...p(s, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				_ = e => (t, s) => n => ({
					...p(n, s),
					source: Object(d.a)(s) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				E = _("award_hovercard_report"),
				g = _("cancel_award_hovercard_report"),
				j = _("flag_award"),
				C = _("cancel_flag_award"),
				y = _("confirm_flag_award"),
				S = _("report_community_award"),
				k = _("cancel_report_community_award"),
				T = _("confirm_report_community_award"),
				I = (e, t, s) => n => ({
					...p(n, s),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				N = (e, t, s) => n => ({
					...p(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, s)
				}),
				w = (e, t) => s => ({
					...p(s, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				P = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				A = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				R = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				L = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				F = (e, t) => s => ({
					...p(s, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				M = (e, t) => s => ({
					...p(s, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				D = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				U = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				B = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				V = e => {
					let {
						award: t,
						awardeeKarmaEarned: s,
						awarderKarmaEarned: n,
						numberCoins: r,
						thingId: o
					} = e;
					return e => ({
						...p(e, o),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(o) ? "comment" : "post",
							awardeeKarmaEarned: s,
							awarderKarmaEarned: n,
							numberCoins: r,
							...m(t)
						}
					})
				},
				W = e => t => ({
					...p(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				H = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return f
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "j", (function() {
				return C
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				o = s("./src/reddit/selectors/gold/giveAwards.ts"),
				i = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/telemetry.ts"),
				d = s("./src/telemetry/models/GoldPurchase.ts"),
				l = s("./src/telemetry/models/Payment.ts"),
				u = s("./src/reddit/helpers/trackers/gild.ts"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/isComment.ts"),
				b = s("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: s,
						packageId: l
					} = t, f = !!s, h = o.b(e), x = h ? Object(u.getAwardTypeFromAward)(h) : null, v = f ? x : a.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = s ? Object(p.a)(s) ? "comment" : "post" : void 0, _ = l || a.u(e), E = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === _)[0], g = t.offerContext || (h && 0 === h.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(E, f)), j = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, C = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, y = E ? E.baselinePennies !== E.pennies ? `${j}_percent_price` : E.baselineCoins !== E.coins ? `${C}_percent_bonus` : void 0 : void 0, S = v === d.GoldPurchaseType.Premium ? n.Db : E ? E.pennies : void 0;
					return {
						...c.o(e),
						comment: s ? c.h({
							state: e,
							commentId: s
						}) : null,
						correlationId: a.s(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: s ? c.K(e, s) : null,
						screen: c.cb(e),
						subreddit: s ? c.kb(e) : null,
						goldPurchase: {
							...h ? Object(b.a)(h) : null,
							type: v,
							gildedContent: f,
							contentType: O,
							numberCoins: E ? E.coins : void 0,
							offerContext: g,
							offerType: y
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: S
						},
						purchase: {
							priceMicros: S
						}
					}
				},
				h = (e, t, s) => n => ({
					...f(n, {
						packageId: t,
						thingId: e,
						offerContext: s
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				v = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				E = (e, t) => s => ({
					...f(s, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t, s) => n => {
					const r = f(n, {
						packageId: t,
						thingId: e,
						offerContext: s
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...r.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...r.goldPurchase,
							source: e ? d.GiveGold : a.p(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				C = e => t => {
					var s;
					const n = f(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (s = t.platform.currentPage) || void 0 === s ? void 0 : s.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/telemetry/index.ts"),
				o = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.T(e),
					screen: a.cb(e),
					subreddit: a.kb(e)
				}),
				d = (e, t, s) => n => ({
					source: Object(i.j)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(n),
					post: a.K(n, e)
				}),
				l = (e, t, s, n) => r => {
					const i = s ? a.h({
							state: r,
							commentId: s
						}) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...d(e, t, n)(r),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => s => {
					const n = a.k(s);
					return n ? d(n.id, e, t)(s) : {
						source: Object(i.j)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(s)
					}
				},
				m = (e, t) => s => Object(r.a)({
					...d(e, t)(s),
					...a.o(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...c(t),
					post: a.k(t),
					userSubreddit: a.ub(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return i
			})), s.d(t, "l", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(r.cb)(e),
					profile: Object(r.T)(e),
					subreddit: Object(r.kb)(e),
					userSubreddit: Object(r.ub)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				a = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					...o(s)
				}),
				c = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					media: {
						mimetype: Object(r.j)(s, t)
					},
					...o(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: n.c.CLICK,
					noun: e,
					post: Object(r.K)(s, t),
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...o(s)
				}),
				l = (e, t) => s => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(r.K)(s, t),
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					...o(s)
				}),
				u = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					...o(s)
				}),
				m = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					...o(s)
				}),
				p = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					...o(s)
				}),
				b = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					post: Object(r.K)(s, t),
					...o(s)
				}),
				f = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					...o(s)
				}),
				h = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.K)(s, t),
					subreddit: Object(r.nb)(s, t)
				}),
				x = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.h)({
						state: s,
						commentId: t
					}),
					post: Object(r.K)(s, t),
					subreddit: Object(r.nb)(s, t)
				}),
				v = (e, t, s, n) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.K)(o, s),
					subreddit: Object(r.nb)(o, s),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(r.h)({
							state: o,
							commentId: s
						})
					}
				}),
				O = () => e => ({
					...o(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				r = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/helpers/search/searchImpressionId.ts");
			const c = (e, t) => s => {
					const i = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...o.o(s),
						actionInfo: o.d(s),
						correlationId: Object(n.c)(n.a.SearchResults),
						post: o.K(s, e),
						search: {
							...o.O(s, t),
							query: i,
							queryId: o.eb(s, r.a.SERP),
							impressionId: a.a.get(r.a.SERP)
						},
						subreddit: o.kb(s)
					}
				},
				d = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...o.o(t),
					actionInfo: o.d(t),
					correlationId: Object(n.c)(n.a.SearchResults),
					search: o.O(t, e),
					subreddit: o.kb(t)
				}),
				l = e => t => {
					const s = Object(i.g)(e);
					return {
						...o.o(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.kb(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				u = () => e => ({
					...o.o(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.kb(e)
				}),
				m = e => t => {
					const s = Object(i.g)(e);
					return {
						...o.o(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.kb(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				p = (e, t) => s => {
					const n = Object(i.g)(e),
						c = o.K(s, t),
						d = `flair_name:'${n}'`;
					return {
						...o.o(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.kb(s),
						postFlair: {
							id: e.templateId,
							title: n
						},
						post: c,
						search: {
							query: d,
							subredditId: c ? c.subredditId : void 0,
							subredditName: c ? c.subredditName : void 0,
							postFlairName: n,
							originElement: "post_flair",
							queryId: o.eb(s, r.a.SERP),
							impressionId: a.a.get(r.a.SERP),
							originPageType: s.platform.currentPage ? o.v(s.platform.currentPage) : void 0
						},
						feed: o.r(s)
					}
				}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "y", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "x", (function() {
				return k
			})), s.d(t, "u", (function() {
				return T
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "v", (function() {
				return w
			})), s.d(t, "w", (function() {
				return P
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.o(e),
					screen: r.cb(e),
					subreddit: r.kb(e),
					userSubreddit: r.ub(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.q)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				_ = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: r.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				g = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...o(t)
				}),
				j = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				C = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...o(i),
					actionInfo: r.d(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				w = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				P = () => (e, t) => {
					const s = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "p", (function() {
				return y
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "o", (function() {
				return I
			}));
			var n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				r = s("./src/reddit/selectors/avatarMarketing.ts"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				c = e => t => {
					const s = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.o(t)
					};
					return Object(r.a)(t) && Object.assign(s, a), s
				},
				d = (e, t) => s => {
					const {
						id: n
					} = Object(i.Bb)(s, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.o(s),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...o.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.ib(e)
				}),
				u = e => ({
					...o.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.ib(e)
				}),
				m = e => ({
					...o.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.ib(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.o(e),
					...a
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.o(e),
					...a
				}),
				f = e => t => ({
					...o.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				h = e => t => s => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.o(s),
					snoovatar: o.ib(s),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				x = h("view"),
				v = h("click"),
				O = h("dismiss"),
				_ = (e, t, s) => () => n => ({
					source: e,
					action: t,
					noun: s,
					...o.o(n),
					snoovatar: o.ib(n)
				}),
				E = _("anniversary_achievement", "view", "anniversary_achievement"),
				g = _("anniversary_achievement", "click", "close"),
				j = _("anniversary_achievement", "click", "equip"),
				C = e => () => t => ({
					...o.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				y = C("view"),
				S = C("click"),
				k = (e, t, s) => n => ({
					source: e,
					action: t,
					noun: s,
					...o.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.ib(n)
				}),
				T = e => k("onboarding", "click", e),
				I = () => k("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.o(e)
				}),
				i = e => t => {
					const s = r.kb(t),
						{
							userFlair: o,
							achievementFlair: i
						} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.o(t),
						subreddit: s,
						userFlair: {
							id: null == o ? void 0 : o.id,
							title: o ? Object(n.g)(o) : void 0,
							isActive: !!o || void 0,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name,
							isLocked: null == i ? void 0 : i.isLocked
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.o(e)
				}),
				c = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.kb(t),
					...r.o(t)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(r.e)(e => e.platform.currentPage),
					[t, s] = Object(n.useState)({});
				return Object(n.useEffect)(() => {
					s(Object(o.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				o = s("./src/lib/hooks/useTooltip.ts");
			const i = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(r.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const r = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				o = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(n.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: s,
						avatarShareUrl: n
					} = e;
					const a = i.test(n.trim()),
						c = r.includes(t),
						d = o.includes(s);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.a)(t)
			})
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/removedPosts.ts");
			const o = () => Object(n.e)(e => Object(r.d)(e))
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(i.j) || r.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
				const e = a(),
					t = Object(o.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = n.gb
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/sentry/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(r.useContext)(o.c);
				return e || n.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(n.useContext)(r.b)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = s.n(c);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("collapse",e.isFilled)} ${e.className}`,
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(c.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, s) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
			t.a = e => r.a.createElement("svg", c({}, e, {
				className: Object(o.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			var n, r, o = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const r = 50,
				o = 50,
				i = 1e4,
				a = 100;
			var c, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				u = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "r", (function() {
				return x
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "q", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
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
				m = e => e.__typename === r.a.Subreddit;
			var p, b, f, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const x = e => b[h[e]],
				v = e => h[b[e]],
				O = e => f[b[e]],
				_ = e => b[f[e]],
				E = e => h[f[e]];
			var g;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const j = e => {
					switch (e) {
						case g.Hourly:
						case g.Daily:
						case g.Weekly:
						case g.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
				y = e => {
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
							return Object(n.a)(e)
					}
				},
				S = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case r.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case r.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = s("./src/lib/constants/specialMembership.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = s("./src/reddit/helpers/economics/sortBadges.ts"),
				a = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? n[c.a.Loyalty][r] : n[c.a.Achievement][r] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][r] : n[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(i.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, s) => {
					const n = t[e.id],
						r = t[s.id];
					return Object(i.b)(n, r)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(s => {
					const n = e.collections[s],
						r = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && s.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), s, n, t), u(Object.keys(e.products).map(t => e.products[t]), s, n, t), {
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
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: b(s),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var n, r, o = s("./node_modules/redux/es/redux.js"),
				i = s("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
			const a = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [n.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null,
						experimentRequired: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const s = e.split(":");
							if (!s.length && s.length < 3) return null;
							try {
								t[s[1]] = JSON.parse(s[2])
							} catch {
								t[s[1]] = s[2]
							}
						}
					}), t
				};

			function b(e) {
				if (!e) return d;
				const t = d;
				return e.forEach(e => {
					var s;
					const {
						startsAt: n,
						endsAt: r,
						webAssetUrls: o,
						tags: i
					} = e, a = n && new Date(n) <= new Date, c = !!r && new Date(r) < new Date, d = !!a && !c, b = (i || []).includes(m);
					if (i && i.includes(l) && !b) {
						const {
							text: s,
							id: n
						} = e, r = o || null, a = p(i);
						t && (t.quickCreateV1 = {
							...a,
							id: n,
							text: s,
							active: d && !!r,
							webAssetUrls: r
						})
					}
					if (i && i.includes(u) && !b) {
						const e = o || null,
							n = (null === (s = i.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === s ? void 0 : s.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: d && !!e,
							assetUrls: e,
							experimentRequired: n
						})
					}
				}), t
			}
			var f = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/constants/modals.ts");
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var s;
				switch (t.type) {
					case f.s:
						const {
							avatarMarketingEvents: n
						} = t.payload;
						return n ? b(n) : d;
					case h.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === x.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							image: e,
							accessory_ids: s
						} = t.payload;
						return {
							image: e,
							accessoryIds: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: O
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							postOtherDiscussions: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			const a = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							postStats: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			const d = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							subredditKarma: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				postOtherDiscussions: i,
				postStats: c,
				subredditKarma: l
			})
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.l: {
						const {
							summary: s,
							subreddit: n
						} = t.payload;
						return {
							...e,
							[n.id]: {
								...e[n.id],
								...s
							}
						}
					}
					case n.i:
					case n.f:
					case n.r:
					case n.u:
					case n.A: {
						const {
							response: s
						} = t.payload;
						return {
							...e,
							...s.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/modQueue/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case r.p: {
							const {
								targetID: s
							} = t.payload, n = e.indexOf(s);
							return n > -1 && e.splice(n, 1), e
						}
						default:
							return e
					}
				},
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				a = s("./src/reddit/actions/platform.ts"),
				c = s("./src/reddit/actions/post.ts");
			const d = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.q:
					case c.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let r = !1;
							n.map(e => {
								d.includes(e) && (r = !0)
							}), !e.includes(t) && r && (e = [...e, t])
						}), e
					}
					case r.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case a.f:
						return [];
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				toUpdate: o,
				updated: l
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				o = s("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = s("./src/reddit/actions/modQueue/constants.ts"),
				a = s("./src/reddit/actions/pages/constants.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				d = s("./src/reddit/actions/pages/postDraft.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				u = s("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var s, n, p, b, f;
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case a.b:
					case a.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.r:
					case i.u:
					case i.A: {
						const {
							response: s
						} = t.payload, {
							userFlair: n
						} = s, r = {
							...e
						};
						return Object.keys(n).forEach(e => {
							r[e] || (r[e] = n[e])
						}), r
					}
					case u.r: {
						const {
							subredditId: s,
							applied: n,
							displaySettings: r
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n && {
									applied: n
								},
								displaySettings: r
							}
						}
					}
					case o.h: {
						const {
							subredditId: s,
							applied: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								applied: n
							}
						}
					}
					case u.j: {
						const {
							subredditId: s,
							isEnabled: n
						} = t.payload, r = {
							...e[s].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[s]: {
								...e[s],
								displaySettings: r
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: r
						} = t.payload, o = {
							...null === (s = e[n]) || void 0 === s ? void 0 : s.permissions,
							canAssignOwn: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: o
							}
						}
					}
					case u.q: {
						const s = t.payload,
							r = e[s.subredditId],
							o = null === (n = e[s.subredditId]) || void 0 === n ? void 0 : n.templates,
							i = null === (p = e[s.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							a = (null === (b = s.template) || void 0 === b ? void 0 : b.id) || (null === (f = s.template) || void 0 === f ? void 0 : f.templateId);
						if (!a) return;
						const c = {
								...o,
								[a]: s.template
							},
							d = [...i];
						return d.includes(a) || d.push(a), {
							...e,
							[s.subredditId]: {
								...r,
								templates: c,
								templateIds: d
							}
						}
					}
					case u.g: {
						const s = t.payload,
							n = e[s.subredditId],
							o = e[s.subredditId].templates,
							i = e[s.subredditId].templateIds,
							a = r()(o, s.templateId),
							c = i.filter(e => e !== s.templateId);
						return {
							...e,
							[s.subredditId]: {
								...n,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const s = t.payload,
							n = e[s.subredditId];
						return {
							...e,
							[s.subredditId]: {
								...n,
								templateIds: s.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			}));
			const n = (e, t) => {
					let {
						post: s
					} = t;
					const n = s.belongsTo.id;
					if (!n) return null;
					const r = e.authorFlair.models[n];
					if (!r) return null;
					const o = s.author;
					return o && r[o] || null
				},
				r = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!s) return null;
					const r = e.authorFlair.models[s];
					return r ? r[n] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				i = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				},
				a = e => {
					var t, s;
					return (null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/avatar/index.ts"),
				o = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(n.a)({
				features: {
					avatar: r.a
				}
			});
			const i = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing)
				},
				a = e => {
					var t, s, n, r;
					const i = null === (n = null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (r = null == i ? void 0 : i.assetUrls) || void 0 === r ? void 0 : r.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(o.a)(i.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js");
			Object(n.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const r = e => !(e.chat.isInited || e.chat.unread.api.pending),
				o = e => e.chat.liveChatTooltipShowState,
				i = Object(n.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, s) {
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
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: r.a
				}
			});
			const c = (e, t) => {
					var s, n;
					return null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.postOtherDiscussions[t]
				},
				d = (e, t) => {
					var s, n;
					return null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.postStats[t]
				},
				l = (e, t) => {
					var s, n, r;
					const o = null === (r = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === r ? void 0 : r.karma;
					if (!o) return;
					const {
						fromComments: i,
						fromPosts: a
					} = o;
					return {
						fromComments: i,
						fromPosts: a
					}
				},
				u = (e, t, s) => {
					const n = Object(i.G)(e, {
						postId: t
					});
					if (!n || n.isSponsored || n.removedByCategory) return !1;
					const r = Object(i.V)(e, {
						postId: t
					});
					if (r && r.isQuarantined) return !1;
					const c = !s && !!Object(o.m)(e, {
						postId: t
					});
					return Object(a.Eb)(e, {
						postId: t
					}) || c
				}
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.ub
			}), e => ({
				bucketed: e === n.Qc.ExpandedSearch || e === n.Qc.CollapsedSearch,
				collapsed: e === n.Qc.CollapsedSearch,
				expanded: e === n.Qc.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts"),
				a = s("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.k
					});
					return t === n.o.VoteCountOnly || t === n.o.CommentCountOnly || t === n.o.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.k
					});
					return t === n.o.VoteCountOnly || t === n.o.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.k
					});
					return t === n.o.CommentCountOnly || t === n.o.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: s
					} = t;
					return p(e, {
						postId: s.id
					})
				},
				p = (e, t) => {
					let {
						postId: s
					} = t;
					const r = e.posts.models[s];
					if (Object(a.d)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: n.k
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.o.VoteCountOnly || l === n.o.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: s
					} = t;
					const r = e.posts.models[s];
					if (Object(a.d)(e) || !r || r.isSponsored || r.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: n.k
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.o.CommentCountOnly || l === n.o.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.xc
					}) === n.ad.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.Xe
				}) === n.Jd
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.eg,
					experimentEligibilitySelector: o.a
				}), e => e),
				a = Object(n.a)(i, e => e === r.Wf)
		},
		"./src/reddit/selectors/gild.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Gold/Award.ts"),
				o = s("./src/reddit/selectors/commentSelector.ts"),
				i = s("./src/reddit/selectors/gold/giveAwards.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, s) => {
					const n = t ? e[`staticIcon${s}`] : e[`icon${s}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = e => {
					let {
						award: t,
						size: s,
						prefersReducedMotion: n,
						postOrComment: o
					} = e;
					return t.awardSubType === r.d.Group ? (e => {
						let {
							award: t,
							size: s,
							prefersReducedMotion: n,
							postOrComment: r
						} = e, o = t;
						if ((null == r ? void 0 : r.awardCountsById) && r.awardCountsById[t.id] && t.tiers) {
							const e = r.awardCountsById[t.id];
							o = t.tiers.reduce((t, s) => e >= s.awardingsRequired ? s : t)
						}
						return u(o, n, s)
					})({
						award: t,
						size: s,
						prefersReducedMotion: n,
						postOrComment: o
					}) : u(t, n, s)
				},
				p = Object(n.a)((e, t) => {
					let {
						awards: s,
						minSize: n,
						postOrCommentId: r
					} = t;
					const i = Object(d.d)(e),
						c = l.find(e => e >= n),
						u = r ? Object(a.G)(e, {
							postId: r
						}) || Object(o.b)(e, {
							commentId: r
						}) : void 0;
					return s.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: c,
						prefersReducedMotion: i,
						postOrComment: u
					})), e), {})
				}),
				b = (e, t) => {
					let {
						award: s,
						minSize: n,
						postOrCommentId: r
					} = t;
					return s ? p(e, {
						awards: [s],
						minSize: n,
						postOrCommentId: r
					})[s.id] : void 0
				},
				f = (e, t) => {
					let {
						minSize: s,
						userName: n
					} = t;
					const r = Object(c.Bb)(e, {
						userName: n
					});
					if (r && r.awardedLastMonth && r.awardedLastMonth.topAward) return b(e, {
						award: r.awardedLastMonth.topAward,
						minSize: s
					})
				},
				h = e => {
					const t = Object(i.b)(e),
						s = Object(i.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: s || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = e => e.gild.selectedAward,
				r = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return i
			})), s.d(t, "t", (function() {
				return a
			})), s.d(t, "s", (function() {
				return c
			})), s.d(t, "v", (function() {
				return d
			})), s.d(t, "u", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "q", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "y", (function() {
				return _
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "z", (function() {
				return g
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "k", (function() {
				return S
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "j", (function() {
				return T
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return w
			}));
			var n = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						s = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && s && t.find(e => e.mobileId === s) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				x = e => e.features.goldPurchase.payment.cardName,
				v = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				_ = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				g = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				C = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				N = e => e.features.goldPurchase.payment.paypal.passthrough,
				w = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.qg)(t)
				},
				c = Object(n.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(r.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let r = Object(i.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				p = Object(r.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let r = Object(i.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				b = Object(r.a)(o.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(r.a)(d.l, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(r.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(o.c)(e, {
					experimentName: r.af,
					experimentEligibilitySelector: o.a
				}),
				d = (e, t) => (t === r.if.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.B)(e),
				l = Object(n.a)(a.G, c, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, c, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				o = s("./src/reddit/selectors/gold/powerups/index.ts"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: c.a
				}
			});
			const d = (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.features.userFlair[s]
				},
				l = (e, t) => {
					let {
						subredditId: s
					} = t;
					var n, r;
					return null === (n = e.features.userFlair[s]) || void 0 === n || !n.displaySettings || !!(null === (r = e.features.userFlair[s].displaySettings) || void 0 === r ? void 0 : r.isEnabled)
				},
				u = (e, t) => {
					let {
						subredditId: s
					} = t;
					var n, o;
					return (null === (n = e.features.userFlair[s]) || void 0 === n ? void 0 : n.displaySettings) ? null === (o = e.features.userFlair[s].displaySettings) || void 0 === o ? void 0 : o.position : r.b.Right
				},
				m = Object(n.a)((e, t) => {
					let {
						subredditId: s
					} = t;
					const n = d(e, {
						subredditId: s
					});
					if (n && n.displaySettings && n.permissions) return {
						type: r.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = l(e, {
							subredditId: s
						}),
						r = m(e, {
							subredditId: s
						}),
						o = d(e, {
							subredditId: s
						});
					if (!n || !r || !o) return !1;
					if (o.applied) return !0;
					const a = Object(i.g)(e, {
							subredditId: s
						}),
						{
							canUserChange: c
						} = r.permissions;
					return !!(o.templateIds || []).find(e => {
						return !o.templates[e].modOnly || a
					}) && c
				},
				b = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (!s) return !1;
					const n = p(e, {
							subredditId: s
						}),
						r = Object(o.f)(e, {
							subredditId: s
						});
					return n || r
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(r.R)(e);
					if (i(e)) return !1;
					const {
						subscriptionsPinned: s
					} = e.user.prefs;
					return void 0 === s && !t || !!s
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				o = s("./src/reddit/actions/jsApi.ts");
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
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${n.a.redditUrl}${c}`, e))
					} catch (s) {
						return void console.error(i, `${n.a.redditUrl}${c}`, s)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
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
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"eebd99e32f7b"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"c76912e6c51b"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"f39ca0401506"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"ca83defc2e15"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.3dd0d2d6f1fa5ea03076.js.map